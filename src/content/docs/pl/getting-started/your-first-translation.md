---
title: Twoje pierwsze tłumaczenie
description: Przetłumacz kilka pól niestandardowych od początku do końca, od skanowania po wdrożenie, w mniej niż dziesięć minut.
---

Po przeczytaniu tej strony będziesz mieć za sobą:

1. Przeskanowanie organizacji sandbox
2. Przefiltrowanie do kilku pól niestandardowych
3. Zbiorcze przetłumaczenie ich na język docelowy za pomocą AI
4. Wdrożenie wyniku z powrotem do Salesforce

Całkowity czas: poniżej dziesięciu minut. Koszt: kilkaset znaków kredytu
AI.

## 1. Wybierz bezpieczny cel

Zrób to najpierw na **sandboxie**, nigdy bezpośrednio na produkcji.
Wdrożenia TranSFlatora są atomowe i można je wycofać, ale
pewność jest tańsza niż żal.

Otwórz połączenie z sandboxem, które utworzyłeś w sekcji
[Połącz swoją organizację Salesforce](/pl/getting-started/connect-your-org/).

## 2. Skanowanie

Aplikacja skanuje Twoją organizację przy pierwszym otwarciu. W zależności od rozmiaru organizacji zajmuje to
od 10 sekund do kilku minut. Zobaczysz, jak siatka tłumaczeń
wypełnia się każdym elementem podlegającym tłumaczeniu: polami niestandardowymi, wartościami
list wyboru, typami rekordów, tekstami pomocy, układami, linkami, regułami walidacji i etykietami niestandardowymi.

## 3. Zawężenie widoku

Kliknij ikonę **Filter** i wybierz **Custom Field → Label**, aby ograniczyć
siatkę tylko do etykiet pól niestandardowych. Zaznacz pole w kolumnie
**Missing**, aby pokazać tylko wiersze, które nie zostały jeszcze przetłumaczone.
Powinieneś zobaczyć kilka wierszy.

## 4. Wybierz język docelowy

Kliknij selektor języka na górze i wybierz język, dla którego nie
masz jeszcze tłumaczeń (np. **Polish**). Siatka pokazuje teraz
źródło po lewej stronie i kolumnę docelową po prawej, pustą.

![Selektor języka docelowego pokazujący wszystkie włączone lokalizacje wraz z paskiem pokrycia.](../../../../assets/screenshots/03-select-target-language.png)

Każdy wiersz pokazuje, ile z możliwych wpisów jest już
przetłumaczonych na dany język — to szybki sposób na sprawdzenie, które lokalizacje wymagają uwagi.

## 5. Tłumaczenie

Kliknij **AI all** na górnym pasku. Pojawi się okno dialogowe z pytaniem, którego silnika
AI użyć — wybierz jeden. Zobacz
[Przegląd silników](/pl/ai-engines/overview/), jeśli nie jesteś pewien.

Aplikacja wysyła każdy wiersz do backendu TranSFlator, który kieruje
żądanie do wybranego przez Ciebie silnika. Wyniki trafiają do siatki w miarę
ich napływania. Możesz edytować dowolny wiersz ręcznie — sugestia AI
staje się punktem wyjścia, a nie ostateczną odpowiedzią.

## 6. Wdrażanie (Deploy)

Kliknij **Deploy**. Aplikacja pakuje zmiany we wdrożenie metadanych,
podpisuje żądanie tokenem dostępu Twojego połączenia i przesyła je do
Salesforce Metadata API. Zobaczysz pasek postępu, a następnie:

- **Sukces** — zmiany są widoczne w Twoim sandboxie.
- **Częściowy błąd** — aplikacja pokazuje dokładnie, które komponenty
  zostały odrzucone i dlaczego. Najczęściej jest to pole z pakietu zarządzanego,
  którego Salesforce nie pozwala nikomu dotykać; aplikacja oznacza je i
  pomija przy ponownej próbie.

## 7. Weryfikacja

Otwórz swój sandbox w przeglądarce, zmień język interfejsu na ten,
na który właśnie tłumaczyleś, i sprawdź, czy pola niestandardowe brzmią
zgodnie z oczekiwaniami.

## Dalej

Gotowy na więcej? Przeczytaj
[Zbiorcze tłumaczenie AI](/pl/desktop-app/batch-ai-translate/) dla pełnego
opisu możliwości.
