---
title: Przepływ pracy z plikami STF
description: Import i eksport plików Salesforce Bilingual STF dla klasycznego przepływu Translation Workbench.
---

Niektóre organizacje blokują Metadata API. Niektórzy klienci konsultingowi chcą
przeglądać tłumaczenia offline w Excelu. W obu przypadkach TranSFlator
obsługuje klasyczny format plików **Salesforce Bilingual STF**:
zaimportuj plik STF, edytuj go w siatce, wyeksportuj nowy.

## Importowanie pliku STF

1. Na pasku bocznym połączeń kliknij **Import STF file**.
2. Wybierz plik `.stf` wyeksportowany z ekranu **Setup → Translation
   Workbench** w Salesforce.
3. Nadaj mu etykietę.

Pojawi się „pseudo połączenie” z ikoną dokumentu zamiast
ikony chmury — co oznacza, że to połączenie nie posiada tokena odświeżającego
i nie może wdrażać zmian bezpośrednio. Możesz tłumaczyć wiersze normalnie.

## Eksportowanie pliku STF

Po wybraniu połączenia STF kliknij **Export STF file** na pasku
narzędzi. Otrzymasz plik, który jest w pełni kompatybilny z procesem
importu w Salesforce Translation Workbench: ten sam nagłówek `Bilingual`,
ta sama kolejność wierszy, te same separatory tabulacji.

## Kiedy używać tego zamiast bezpośredniego wdrożenia

- Twój administrator wyłączył Metadata API dla Twojego profilu.
- Chcesz, aby recenzent zatwierdził tłumaczenia w
  Excelu, zanim wprowadzisz zmiany w Salesforce.
- Jesteś konsultantem, a Twój klient chce otrzymać plik końcowy dla
  własnych celów audytowych.

## Co nie jest zachowywane

Pliki STF zawierają tylko ciągi znaków. Wszystko, co nie jest ciągiem znaków, a co TranSFlator
normalnie potrafi modyfikować (nazwy układów, dostępność typów rekordów itp.),
nie może być wyeksportowane w ten sposób. Aby uzyskać pełny zestaw funkcji, użyj prawdziwego
połączenia.

:::note[TODO]
Zrzut ekranu okna importu STF, zrzut ekranu pseudo połączenia
na pasku bocznym, przykładowy plik `.stf` z kilkoma wierszami.
:::
