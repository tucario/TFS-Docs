---
title: Kredyty AI
description: Jak działają kredyty, ile kosztują poszczególne operacje i jak wygląda miesięczny cykl odnawiania.
---

Kredyty AI to jednostka, której TranSFlator używa do rozliczania Twojej pracy z AI.
Jeden kredyt równa się jednemu znakowi tekstu źródłowego wysłanego do silnika AI.

## Dlaczego za znak, a nie za silnik

Różne silniki AI mają bardzo zróżnicowane ceny bazowe. Gdybyśmy rozliczali
Cię w natywnych jednostkach silników, nigdy nie wiedziałbyś z wyprzedzeniem,
ile będzie kosztować dana partia (batch). Rozliczanie za znak oznacza:

- **Przewidywalny koszt** — 10-znakowa etykieta pola to 10 kredytów,
  niezależnie od wybranego silnika.
- **Zmiana silnika jest darmowa** — możesz użyć Gemini dla jednej partii
  i Claude dla następnej, a saldo będzie spadać tak samo.
- **Stała marża** — bierzemy na siebie zmienność cen silników, abyś
  Ty nie musiał tego robić.

## Co jest liczone

Mierzony jest tylko ciąg **źródłowy**. Tłumaczenie zwrotne jest darmowe.

Koszt partii to w przybliżeniu: `suma długości ciągów źródłowych dla każdego wiersza
w partii`. Anulowanie partii w trakcie trwania powoduje naliczenie opłat tylko za
wiersze, które faktycznie zostały ukończone.

## Saldo i odnawianie

Twoje aktualne saldo wyświetla się na pulpicie nawigacyjnym i odświeża się na żywo.
Konta darmowe otrzymują saldo startowe, które odnawia się w cyklu 30-dniowym
w tej samej wysokości. Konta płatne otrzymują miesięczny limit, który
odnawia się pierwszego dnia każdego cyklu rozliczeniowego.

W momencie odnowienia cyklu kredytowego dzieją się dwie rzeczy:

1. Pole `ai_credits` zostaje zresetowane do kwoty odnowienia planu.
2. Twoja historia tłumaczeń w kolekcji `translations` zostaje
   wyczyszczona — zobacz [Usuwanie konta](/pl/account-panel/delete-account/),
   aby poznać uzasadnienie minimalizacji danych zgodnie z RODO (GDPR).

## Brak kredytów

Jeśli zabraknie Ci kredytów w trakcie przetwarzania partii, zostaje ona wstrzymana, a w siatce
pojawia się komunikat „wymagane doładowanie”. Ukończone wiersze zostają zachowane;
pozostałe czekają na doładowanie konta.

:::note[TODO]
Tabela cen dla planów płatnych po sfinalizowaniu cennika. Uwaga
na temat tego, jak liczba znaków na język przekłada się na przybliżoną
liczbę pól.
:::
