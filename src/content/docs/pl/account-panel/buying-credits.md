---
title: Kupowanie kredytów
description: Doładuj saldo kredytów AI przez Stripe. Jak działa wybór planu, płatność, potwierdzenia i faktury.
---

Gdy chcesz tłumaczyć więcej, niż pozwala miesięczny limit planu
darmowego, możesz w każdej chwili doładować konto dodatkowymi
kredytami. Płatności obsługuje **Stripe**.

## Wybierz swój plan

![Ekran „Choose Your Plan” — karta Free Plan (5 000 znaków/miesiąc, dostęp do API z uwierzytelnianiem tokenem, wszystkie obsługiwane języki, tłumaczenia zoptymalizowane pod Salesforce) oznaczona jako bieżący plan oraz karta Premium „Need more characters?” z punktami (do ponad 10 000 000 znaków, brak miesięcznych limitów, znaki nigdy nie wygasają, priorytetowe przetwarzanie tłumaczeń) i przyciskiem View Premium Packages.](../../../../assets/screenshots/panel/choose-plan.png)

Selektor planu jest dostępny zarówno podczas onboardingu przy pierwszym
uruchomieniu, jak i przez wpis **Buy Characters** w pasku bocznym.

**Plan darmowy** — 5 000 znaków w 30-dniowym cyklu, pełny dostęp do
API, każdy obsługiwany język, prompty zoptymalizowane pod Salesforce.
Wystarczający dla małych organizacji, ewaluacji i lekkiej pracy
serwisowej.

**Premium** — dodatkowe pakiety znaków ponad Twój miesięczny limit:

- Do ponad 10 000 000 znaków na pakiet.
- Brak miesięcznego limitu — używaj we własnym tempie.
- **Znaki nigdy nie wygasają.** W przeciwieństwie do miesięcznego
  limitu darmowego, zakupione kredyty pozostają na saldzie aż do
  zużycia.
- Priorytetowe przetwarzanie tłumaczeń w kolejkach backendu.

Kliknij **View Premium Packages**, aby otworzyć listę pakietów i wybrać
rozmiar.

## Proces doładowania

1. W panelu kliknij **Buy Characters** (pasek boczny lub karta na
   pulpicie) → **View Premium Packages**.
2. Wybierz rozmiar pakietu z listy.
3. Kliknij **Checkout** — otwiera się Stripe Checkout hostowany na
   domenie Stripe. Dane karty wpisujesz na serwerach Stripe, nie
   naszych.
4. Zrealizuj płatność.
5. Stripe przekierowuje Cię z powrotem do panelu. Webhook Stripe
   uruchamia się na naszym backendzie, zapisuje dokument `purchases` w
   Firestore i atomowo podbija saldo `ai_credits`.
6. Nowe saldo jest widoczne na pulpicie w ciągu kilku sekund.

## Co przechowujemy

Każdy zakończony zakup tworzy dokument w kolekcji Firestore
`purchases` zawierający: Twój `uid`, identyfikator sesji Stripe,
identyfikator intencji płatności Stripe, zapłaconą kwotę, walutę oraz
liczbę zakupionych znaków. **Nie** przechowujemy numerów kart, kodów
CVV ani żadnych innych danych karty.

## Potwierdzenia

Stripe wysyła e-mailowe potwierdzenie na adres przypisany do Twojego
konta TranSFlator w momencie rozliczenia płatności. To oficjalne
potwierdzenie dla Twojej dokumentacji.

## Nieudane płatności

Jeśli płatność zostanie odrzucona, webhook Stripe się nie uruchomi, więc
żaden zakup nie zostanie zapisany i żadne kredyty nie zostaną dodane.
Po naszej stronie nic się nie zmienia. Spróbuj ponownie inną kartą.

## VAT / faktury dla klientów z UE

Stripe wystawia faktury zgodne z przepisami VAT przez Customer Portal.
Samoobsługowa historia faktur w panelu to funkcja planowana; do tego
czasu wyślij e-mail na
[hello@tucario.com](mailto:hello@tucario.com) z adresem swojego konta,
a prześlemy pliki PDF.
