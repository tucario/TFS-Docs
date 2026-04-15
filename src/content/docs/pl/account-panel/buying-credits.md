---
title: Kupowanie kredytów
description: Doładuj swoje saldo kredytów AI przez Stripe. Jak działa proces płatności, gdzie trafiają potwierdzenia i jak zarządzać fakturami.
---

Gdy chcesz przetłumaczyć więcej, niż przewiduje miesięczny limit Twojego planu,
możesz w dowolnym momencie doładować konto dodatkowymi kredytami. Płatności są
przetwarzane przez **Stripe**.

## Przepływ doładowania

1. Na pulpicie nawigacyjnym panelu kliknij **Kup kredyty**.
2. Wybierz rozmiar pakietu z listy.
3. Kliknij **Checkout** — spowoduje to otwarcie Stripe Checkout, hostowanego w
   domenie Stripe. Dane karty są wprowadzane na serwerach Stripe,
   nie naszych.
4. Ukończ płatność.
5. Stripe przekieruje Cię z powrotem do panelu. Na naszym backendzie zostanie uruchomiony
   webhook Stripe, który zapisze dokument `purchases` w
   Firestore i zwiększy Twoje saldo `ai_credits` w sposób atomowy.
6. Nowe saldo będzie widoczne na pulpicie nawigacyjnym w ciągu kilku
   sekund.

## Co przechowujemy

Każdy sfinalizowany zakup tworzy dokument w kolekcji Firestore
`purchases` zawierający: Twój `uid`, identyfikator sesji Stripe,
identyfikator intencji płatności Stripe, zapłaconą kwotę, walutę i liczbę
zakupionych znaków. **Nie** przechowujemy numerów kart, kodów CVV ani żadnych innych
danych posiadacza karty.

## Potwierdzenia

Stripe wysyła potwierdzenie e-mail na adres podany na Twoim koncie TranSFlator
w momencie rozliczenia płatności. Jest to oficjalne potwierdzenie
dla Twojej dokumentacji.

## Nieudane płatności

Jeśli płatność zostanie odrzucona, webhook Stripe nigdy nie zostanie uruchomiony, więc zakup
nie zostanie zarejestrowany, a kredyty nie zostaną dodane. Nic nie zmienia się po
naszej stronie. Spróbuj ponownie z inną kartą.

## VAT / faktury dla klientów z UE

Stripe wystawia faktury zgodne z przepisami o VAT za pośrednictwem Portalu Klienta.
Samodzielny dostęp do historii faktur jest planowaną funkcją panelu;
do tego czasu wyślij e-mail na adres
[hello@tucario.com](mailto:hello@tucario.com) z adresem e-mail swojego konta,
a my prześlemy pliki PDF.

:::note[TODO]
Zrzut ekranu procesu płatności, przykładowa faktura. Tabela
dostępnych pakietów kredytowych po sfinalizowaniu cennika.
:::
