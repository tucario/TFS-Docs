---
title: Bezpieczeństwo
description: Model bezpieczeństwa TranSFlator — PKCE OAuth, przechowywanie tokenów AES-256, brak telemetrii, dokąd trafiają Twoje dane, a dokąd nie.
---

Wersja skrócona: **Twoje tokeny Salesforce nigdy nie opuszczają Twojej
maszyny, a my nigdy nie przesyłamy Twoich danych do naszej bazy**. Aplikacja desktopowa
jest domyślnie lokalna (local-first), panel konta przechowuje tylko to, co jest
potrzebne do rozliczeń, a żadna część systemu nie prowadzi analityki.

## OAuth 2.0 z PKCE (S256)

Kiedy łączysz organizację Salesforce, aplikacja desktopowa uruchamia
standardowy przepływ Salesforce OAuth 2.0 Web Server Flow — **z PKCE,
używając metody code challenge SHA-256**.

Co to oznacza w praktyce:

- Aplikacja generuje 32-bajtowy krypto-graficznie losowy **code
  verifier** dla każdej próby logowania.
- Oblicza skrót SHA-256 tego weryfikatora i wysyła go jako
  parametr `code_challenge`.
- Salesforce przekierowuje z powrotem do `http://localhost:1717/oauth/callback`
  z kodem autoryzacyjnym. Listener loopback nigdy nie wystawia
  niczego do sieci.
- Aplikacja wymienia kod na tokeny **bezpośrednio z Salesforce**,
  wysyłając oryginalny weryfikator jako dowód. Nasz backend **nie**
  pośredniczy w tej wymianie.

Skradziony kod autoryzacyjny jest bezużyteczny bez pasującego
weryfikatora, którego aplikacja nigdy nie wysyła przez sieć w otwartej formie.

## Tokeny odświeżające szyfrowane AES-256-CBC

Tokeny odświeżające (refresh tokens) są przechowywane lokalnie, zaszyfrowane za pomocą **AES-256-CBC**.

- 256-bitowy klucz jest generowany raz na instalację, z krypto-graficznie bezpiecznego źródła losowego systemu operacyjnego, i przechowywany w pliku
  o nazwie `.enc_key` w folderze `Application Support`, z uprawnieniami `chmod 600`.
- Nowy 16-bajtowy IV jest generowany przy każdym zapisie i dołączany do
  tekstu zaszyfrowanego.
- Zaszyfrowany plik to `transflate.db` w tym samym katalogu.
- **Tokeny dostępu (access tokens) nigdy nie są zapisywane na dysku.** Żyją wyłącznie
  w pamięci procesu. Gdy aplikacja kończy działanie, znikają; przy
  następnym kliknięciu połączenia, aplikacja ponownie wymienia
  token odświeżający na nowy token dostępu.

## Zero telemetrii

Aplikacja desktopowa jest dostarczana **bez żadnych zestawów SDK do analityki**. Brak
PostHog, Sentry, Firebase Analytics, Crashlytics,
Mixpanel, Amplitude. Możesz sprawdzić źródła (grep), jeśli nam nie wierzysz.

Jedyne wychodzące połączenia sieciowe, jakie wykonuje aplikacja, to:

- Do Salesforce (OAuth + Metadata API), na wybrany przez Ciebie adres URL instancji.
- Do wybranego dostawcy AI (przez backend TranSFlator).
- Do `transflator-api.web.app` w celu walidacji licencji, pobrania informacji o koncie
  i punktu końcowego tłumaczenia zbiorczego — wszystko przez protokół TLS.

Nic więcej.

## HTTPS wszędzie

Każde połączenie wychodzące, z wyjątkiem loopbacka OAuth, używa protokołu TLS 1.2 lub
nowszego. Loopback OAuth to czysty tekst przez `127.0.0.1` — ten
ruch dosłownie nigdy nie opuszcza Twojej maszyny, więc TLS nic by nie wniósł.

## Re-walidacja sesji przy każdym połączeniu

Za każdym razem, gdy klikasz połączenie, aby je otworzyć, aplikacja uderza do
`/services/data/v65.0/`, aby sprawdzić poprawność sesji. Nieaktualne lub unieważnione
tokeny są wykrywane natychmiast, co powoduje prośbę o ponowną autoryzację.
Nic nie działa na nieprawidłowej sesji.

## Własny klucz dostawcy AI? Nie.

TranSFlator obsługuje klucze dostawców na backendzie — nie musisz
wklejać klucza OpenAI, klucza Google ani niczego podobnego. Zaletą jest czas wdrożenia (zero); kompromisem jest to, że wszystkie
wywołania tłumaczenia przechodzą przez nasz backend, co jest granicą zaufania, z którą musisz czuć się komfortowo. Zobacz
[politykę prywatności](https://transflator.com/privacy), aby dowiedzieć się, co
to oznacza w praktyce.

## Co znajduje się w pliku `transflate.db`?

- **`connections`** — Twoje zapisane etykiety organizacji, adresy URL instancji,
  typ środowiska, znacznik czasu ostatniego testu.
- **`tokens`** — zaszyfrowane AES tokeny odświeżające, po jednym na połączenie.
- **`workspace`** — wyniki skanowania metadanych w pamięci podręcznej.
- **`deployment_log`** — lokalna historia zainicjowanych wdrożeń.

Usuń ten plik, aby wyczyścić wszystko oprócz `.enc_key`.
Usuń również `.enc_key`, a przy następnym uruchomieniu zostanie wygenerowany nowy.

:::note[TODO]
Dodać diagramy przepływu OAuth i routingu rezydencji danych.
Dodać sekcję o podpisywaniu kodu i notoryzacji na macOS, Windows
SmartScreen oraz o tym, co się dzieje, gdy Apple/Microsoft unieważnią
certyfikat podpisywania.
:::
