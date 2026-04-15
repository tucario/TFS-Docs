---
title: Usuwanie konta
description: Jak trwale usunąć konto TranSFlator i wszystkie dane, które o Tobie przechowujemy. Obejmuje art. 17 RODO (prawo do bycia zapomnianym).
---

Możesz usunąć swoje konto TranSFlator w dowolnym momencie. Usunięcie jest
nieodwracalne, obejmuje każdą informację, którą przechowujemy, i
kończy się w ciągu 30 dni.

## Samodzielne usuwanie konta

1. Zaloguj się na [panel.transflator.com](https://panel.transflator.com).
2. Otwórz **Ustawienia → Konto**.
3. Kliknij **Usuń moje konto**.
4. Potwierdź, wpisując ponownie swój adres e-mail.
5. Kliknij **Usuń trwale**.

## Co dzieje się dalej

Uruchamiana jest funkcja Cloud Function, która w ramach jednej transakcji:

- Usuwa Twój dokument z kolekcji `users`.
- Usuwa każdy wiersz w kolekcji `purchases`, gdzie
  `uid == twój_uid`.
- Usuwa każdy wiersz w kolekcji `translations`, gdzie
  `user_id == twój_uid`.
- Usuwa Twój rekord Firebase Auth, unieważniając wszelkie aktywne
  sesje.
- Zapisuje wpis w dzienniku audytu ze znacznikiem czasu usunięcia i
  hashem użytkownika.

Twój token API zostaje unieważniony natychmiast. Aplikacja desktopowa, jeśli
jest uruchomiona, zwróci błąd `401 Unauthorized` przy następnym wywołaniu.

## Co pozostaje

Po usunięciu konta zachowywane są dwie rzeczy z przyczyn
niezależnych od nas:

- **Rekordy zakupów Stripe** — Stripe przechowuje rekordy płatności dla
  własnych celów związanych z PCI i regulacjami finansowymi. W razie potrzeby możesz zażądać
  usunięcia danych bezpośrednio od Stripe.
- **Dane rozliczeniowe wymagane przez polskie prawo podatkowe** — faktury
  wystawione na Twoje konto są przechowywane przez 5 lat zgodnie z
  art. 74 ustawy o rachunkowości. Zawierają one Twoje imię i nazwisko
  oraz szczegóły płatności, ale nic na temat Twojej pracy związanej z tłumaczeniem.

## RODO Artykuł 20 — eksport danych

Jeśli chcesz otrzymać kopię swoich danych w formacie nadającym się do odczytu maszynowego **przed**
usunięciem konta, napisz na adres
[hello@tucario.com](mailto:hello@tucario.com), a my prześlemy Ci
eksport JSON w ciągu 30 dni. Przycisk samodzielnego eksportu jest
planowany na ekranie profilu.

:::note[TODO]
Zrzut ekranu okna usuwania konta. Link do polityki prywatności po
jej opublikowaniu na transflator.com/privacy.
:::
