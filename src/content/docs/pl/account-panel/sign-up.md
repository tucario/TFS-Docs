---
title: Rejestracja i weryfikacja e-mail
description: Utwórz konto TranSFlator w panelu webowym, zweryfikuj swój e-mail i odbierz kredyty startowe.
---

Panel konta pod adresem
[panel.transflator.com](https://panel.transflator.com) to miejsce, w którym
tworzysz konto, do którego loguje się aplikacja desktopowa. Jest to
aplikacja Flutter Web oparta na Firebase.

## Rejestracja

1. Otwórz [panel.transflator.com](https://panel.transflator.com).
2. Kliknij **Zarejestruj się**.
3. Wpisz swój adres e-mail i silne hasło.
4. Kliknij **Utwórz konto**.

Twoje konto zostanie utworzone w Firebase Auth, a odpowiedni
dokument zostanie zapisany w kolekcji Firestore `users` wraz z Twoim
startowym saldem kredytów AI i wygenerowanym tokenem API.

## Zweryfikuj swój e-mail

Natychmiast po rejestracji wysyłany jest e-mail transakcyjny na podany
adres, zawierający link weryfikacyjny.
Link jest ważny przez **48 godzin**. Dopóki go nie klikniesz, nie możesz
doładowywać kredytów ani uruchamiać tłumaczeń, które kosztują kredyty.

Nie otrzymałeś e-maila? Najpierw sprawdź folder ze spamem, a następnie kliknij
**Wyślij ponownie weryfikację** w panelu.

## Kredyty startowe

Nowe konta otrzymują darmowe kredyty startowe AI, dzięki czemu
możesz przetestować produkt bez płacenia. Kwota i
częstotliwość odnawiania są wyświetlane na pulpicie nawigacyjnym. Plany płatne nie są
wymagane w okresie próbnym.

## Resetowanie hasła

Jeśli zapomnisz hasła, kliknij **Zapomniałem hasła** na ekranie logowania. E-mail resetujący zostanie wysłany tym samym kanałem transakcyjnym,
z linkiem ważnym przez 1 godzinę.

:::note[TODO]
Zrzuty ekranu ekranu rejestracji, e-maila weryfikacyjnego i
pulpitu nawigacyjnego po pierwszym zalogowaniu. Informacja o limicie znaków w darmowej wersji.
:::
