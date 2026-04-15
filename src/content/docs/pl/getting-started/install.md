---
title: Zainstaluj aplikację desktopową
description: Pobierz TranSFlator na system macOS lub Windows i uruchom go po raz pierwszy.
---

TranSFlator to natywna aplikacja desktopowa. Nie istnieje wersja przeglądarkowa
obszaru roboczego tłumaczeń — siatka, przepływ OAuth oraz lokalny
zaszyfrowany magazyn tokenów znajdują się w aplikacji na Twoim komputerze.

## Pobieranie

Pobierz najnowszą wersję ze strony pobierania pod adresem
[transflator.com/download](https://transflator.com/download):

- **macOS** — uniwersalny plik `.dmg`, podpisany i znotyfikowany, działa zarówno na
  procesorach Apple Silicon, jak i Intel (macOS 12 i nowsze).
- **Windows** — instalator `.msi`, 64-bitowy, Windows 10 i nowsze.

## Pierwsze uruchomienie

W systemie macOS aplikacja poprosi o pozwolenie na przechowywanie pliku klucza w
`~/Library/Application Support/TranSFlator`. Ten plik to
unikalny dla danej maszyny klucz szyfrowania AES-256, używany do zabezpieczania tokenów odświeżających Salesforce na dysku. Ma on uprawnienia chmod 600 i nigdy nie opuszcza Twojego komputera.
Zobacz [Bezpieczeństwo](/pl/security/) dla pełnego opisu modelu zagrożeń.

W systemie Windows odpowiednia ścieżka to
`%APPDATA%\TranSFlator`.

## Logowanie

Pierwszą rzeczą, o którą zapyta aplikacja, jest e-mail i hasło do Twojego konta TranSFlator. Jeśli nie masz jeszcze konta, otwórz
[panel.transflator.com](https://panel.transflator.com), zarejestruj się
(za darmo), zweryfikuj swój e-mail i wróć tutaj. Zobacz
[Rejestracja i weryfikacja e-mail](/pl/account-panel/sign-up/) po szczegóły.

Po zalogowaniu aplikacja wymienia Twoje dane uwierzytelniające na token API
w backendzie TranSFlator i zapisuje go lokalnie w pamięci podręcznej. Od teraz to
token — a nie Twoje hasło — jest używany do wywołań API tłumaczenia.

## Dalej

Po zalogowaniu przejdź do sekcji
[Połącz swoją organizację Salesforce](/pl/getting-started/connect-your-org/).

:::note[TODO]
Dodać zrzuty ekranu okien dialogowych pierwszego uruchomienia dla macOS i Windows.
:::
