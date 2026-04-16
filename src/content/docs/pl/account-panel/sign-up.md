---
title: Rejestracja i logowanie
description: Utwórz konto TranSFlator w panelu webowym, zweryfikuj swój e-mail i zaloguj się z aplikacji desktopowej.
---

Panel konta pod adresem
[panel.transflator.com](https://panel.transflator.com) to miejsce, w którym
tworzysz konto, do którego loguje się aplikacja desktopowa. Jest to
aplikacja Flutter Web oparta na Firebase Auth, Firestore oraz
pojedynczym endpoincie Cloud Functions.

## Logowanie

![Ekran logowania do panelu TranSFlator — maskotka tukana po lewej stronie, pola e-mail i hasła po prawej, znaczek Google reCAPTCHA oraz przycisk „Sign in” z linkami do utworzenia konta lub zresetowania hasła.](../../../../assets/screenshots/panel/sign-in.png)

Powracający użytkownicy trafiają na ekran logowania pod adresem
[panel.transflator.com](https://panel.transflator.com).

1. Wpisz swój e-mail i hasło.
2. Rozwiąż wyzwanie reCAPTCHA, jeśli pojawi się taka prośba.
3. Kliknij **Sign in**.

Formularz wysyła żądanie `POST /auth/login`, które pośredniczy w komunikacji
z Firebase Auth i zwraca Twój indywidualny token API. Ten sam token
otrzymuje aplikacja desktopowa, gdy zalogujesz się w niej.

Linki pod formularzem obsługują dwa typowe przypadki:

- **Create account** — przenosi Cię do procesu rejestracji opisanego
  poniżej.
- **Forgot password?** — wysyła e-mail resetujący przez nasz kanał
  transakcyjny. Link resetujący jest ważny przez 1 godzinę.

## Rejestracja

Jeśli nie masz jeszcze konta, kliknij **Create account** na ekranie
logowania.

1. Wpisz swój adres e-mail i silne hasło.
2. Rozwiąż wyzwanie reCAPTCHA.
3. Kliknij **Create account**.

Backend tworzy użytkownika w Firebase Auth oraz odpowiadający mu
dokument w kolekcji Firestore `users`, zasilony Twoim startowym saldem
kredytów AI i świeżo wygenerowanym tokenem API.

## Zweryfikuj swój e-mail

![Ekran „Verify your email” — maskotka tukana, zamaskowany adres e-mail, tekst wyjaśniający, przycisk „Resend verification email” oraz link „Sign out”.](../../../../assets/screenshots/panel/verify-email.png)

Natychmiast po rejestracji do Twojej skrzynki trafia e-mail transakcyjny
zawierający jednokliknięciowy link weryfikacyjny. Link jest ważny
przez **48 godzin**. Dopóki go nie klikniesz, nie możesz doładowywać
kredytów ani uruchamiać tłumaczeń, które kosztują kredyty.

Panel blokuje pozostałą część interfejsu za ekranem „Verify your email”,
na którym widzisz:

- Na jaki adres wysłaliśmy link.
- Przycisk **Resend verification email** — przydatny, gdy pierwszy
  e-mail zaginął lub link wygasł.
- Link **Sign out**, jeśli chcesz spróbować innego konta.

**Nie otrzymałeś e-maila?** Najpierw sprawdź folder ze spamem, a potem
użyj przycisku **Resend verification email**. Jeśli sam adres został
wpisany błędnie, wyloguj się, poproś wsparcie o usunięcie konta i
zarejestruj się ponownie — nie ma samoobsługowego sposobu na edycję
adresu e-mail przed weryfikacją.

## Kredyty startowe

Nowe konta otrzymują darmowe saldo startowe, dzięki czemu możesz
przetestować produkt bez płacenia. Kwota oraz 30-dniowa częstotliwość
odnawiania są wyświetlane na pulpicie nawigacyjnym. Plan darmowy
wystarczy dla małych organizacji, szybkich POC-ów i ewaluacji; większe
zadania wymagają doładowania kredytów (zobacz
[Kupowanie kredytów](/account-panel/buying-credits/)).

## Resetowanie hasła

Jeśli zapomnisz hasła, kliknij **Forgot password?** na ekranie
logowania. E-mail resetujący zostanie wysłany tym samym kanałem
transakcyjnym, a link będzie ważny przez **1 godzinę**. Link otwiera
ekran panelu, na którym ustawiasz nowe hasło; po zapisaniu wracasz do
formularza logowania.
