---
title: Połącz swoją organizację Salesforce
description: Zaloguj się do Salesforce z aplikacji desktopowej przez OAuth 2.0 z PKCE. Obejmuje organizacje produkcyjne, sandboxy i scratch orgs.
---

TranSFlator łączy się z Salesforce przy użyciu **OAuth 2.0 z PKCE
(metoda code challenge S256)**. Nie ma kroku „wklej swoją nazwę użytkownika i
hasło”, a backend TranSFlator nie pośredniczy w tym procesie —
kod autoryzacyjny jest wymieniany na Twoim własnym urządzeniu.

## Kroki

1. W aplikacji kliknij **Add Connection** w prawym górnym rogu.
2. Nadaj połączeniu etykietę (np. *"EMEA sandbox"* lub *"Acme
   production"*), wybierz, czy jest to instancja **Production/Developer**
   (`login.salesforce.com`) czy **Sandbox**
   (`test.salesforce.com`), i kliknij **Authorize**.
3. Otworzy się przeglądarka. Zaloguj się do Salesforce tak, jak zwykle.
   Jeśli Twoja organizacja używa SSO lub MFA, tutaj nastąpi standardowy proces.
4. Salesforce poprosi Cię o zezwolenie aplikacji **TranSFlator Connected App**
   na dostęp do metadanych. Kliknij **Allow**.
5. Salesforce przekieruje Cię do `http://localhost:1717/oauth/callback`,
   gdzie aplikacja desktopowa nasłuchuje na połączenie. To wywołanie zwrotne (loopback)
   nigdy nie opuszcza Twojego komputera.
6. Aplikacja wymienia kod autoryzacyjny na token odświeżający i
   token dostępu. Token odświeżający jest szyfrowany za pomocą AES-256-CBC
   i zapisywany w `transflate.db`; token dostępu znajduje się wyłącznie
   w pamięci RAM.

Jesteś teraz połączony. Połączenie pojawi się na pasku bocznym z
zieloną kropką statusu. Kliknij je, aby otworzyć siatkę tłumaczeń dla tej
organizacji — TranSFlator natychmiast przeskanuje organizację pod kątem każdego
elementu podlegającego tłumaczeniu:

![TranSFlator skanuje połączoną organizację Salesforce, ładując tłumaczenia obiekt po obiekcie.](../../../../assets/screenshots/02-scanning-org.png)

## Używanie niestandardowej domeny (My Domain)

Jeśli Twoja organizacja używa My Domain (`acme.my.salesforce.com`), wybierz
**Custom Domain** z selektora instancji i wklej pełną nazwę hosta
`https://...`. Aplikacja użyje jej jako hosta OAuth zamiast
standardowego punktu końcowego logowania.

## Scratch orgs

Organizacje typu scratch działają dokładnie tak samo jak sandboxy: wybierz **Sandbox**
w selektorze instancji. Token odświeżający żyje tak długo, jak
scratch org — gdy organizacja wygaśnie, TranSFlator poinformuje Cię o tym
przy następnym teście połączenia.

## Co widzi TranSFlator

Po połączeniu aplikacja ma taki sam dostęp do metadanych, jak Twój zalogowany
użytkownik — nic więcej. Jeśli Twój użytkownik widzi pole, TranSFlator może
je przetłumaczyć. Jeśli Twój użytkownik nie ma dostępu do typu rekordu (record type),
TranSFlator również go nie przeskanuje. Przed uruchomieniem pełnego skanowania
nadaj odpowiednie uprawnienia (Permission Set) swojemu użytkownikowi testowemu, jeśli chcesz
ograniczyć zakres działania.

## Dalej

[Uruchom swoje pierwsze tłumaczenie →](/pl/getting-started/your-first-translation/)
