---
title: Zbiorcze tłumaczenie AI
description: Tłumacz setki lub tysiące wierszy w jednym przebiegu. Wybierz silnik, wybierz region, obserwuj postęp, obsługuj błędy.
---

Zbiorcze tłumaczenie AI (Batch AI translation) to funkcja, dla której warto zainstalować
TranSFlator. Wybierz wiersze, kliknij **AI all**, wybierz silnik, a
aplikacja będzie przesyłać tłumaczenia od dostawcy AI bezpośrednio do siatki w miarę
ich pojawiania się.

## Uruchamianie partii

1. Filtruj i przeszukuj siatkę, aż widoczne będą tylko te wiersze, które chcesz
   przetłumaczyć.
2. Kliknij **Select all visible** (⌘/Ctrl + Shift + A).
3. Kliknij **AI all** na pasku narzędzi.
4. Wybierz silnik i region.
5. Potwierdź.

## Wybór silnika

Selektor pokazuje każdy silnik włączony na Twoim koncie oraz
szacowany koszt dla wybranych wierszy. Zobacz
[Przegląd silników](/pl/ai-engines/overview/) w celu porównania.

## Wybór regionu

Miejsce geograficzne, w którym przetwarzane jest żądanie tłumaczenia. Istotne
ze względu na wymagania dotyczące rezydencji danych — niektórzy dostawcy AI pozwalają na wybór
między USA, UE, Azją i Australią. TranSFlator przekazuje Twój
wybór regionu do backendu, który z kolei kieruje żądanie do
odpowiedniego punktu końcowego dostawcy.

## Postęp na żywo

Baner na dole pokazuje liczbę ukończonych wierszy / sumę, bieżącą prędkość
i szacowany pozostały czas. Możesz anulować operację w trakcie — wiersze, które
już wróciły, zostaną zachowane w siatce (nie są jeszcze zapisane w
obszarze roboczym; zapisz za pomocą ⌘/Ctrl + S).

## Błędy

Jeśli dostawca AI odrzuci konkretny wiersz (zbyt długi, nieobsługiwane
znaki, blokada polityki treści), ten wiersz pozostanie pusty, a
błąd zostanie zarejestrowany na pasku bocznym. Nieudane wiersze można ponowić
indywidualnie lub całkowicie pominąć.

## Model kosztów

Każda partia zużywa kredyty AI z salda Twojego konta. Kredyty
są zużywane za znak ciągu **źródłowego**, a nie za wiersz —
10-znakowa etykieta pola kosztuje 10 kredytów bez względu na to, którego silnika
użyjesz. Zobacz [Kredyty AI](/pl/account-panel/ai-credits/) dla pełnego
modelu wyceny.

![Zbiorcze tłumaczenie na portugalski brazylijski — 100 z 273 wierszy gotowych, 37% ukończenia.](../../../../assets/screenshots/05-translating-progress.png)

Pasek postępu u góry siatki działa na żywo: wiersze są wypełniane
w miarę odpowiedzi AI, a przycisk **Stop** anuluje pozostałe żądania
bez utraty wierszy, które już wróciły.
