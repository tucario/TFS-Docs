---
title: Pomijanie pakietów zarządzanych
description: Dlaczego TranSFlator oznacza niektóre pola jako niemożliwe do przetłumaczenia, czym właściwie jest „pakiet zarządzany” i jak tłumaczyć teksty pomocy w pakietach, których jesteś właścicielem.
---

TranSFlator automatycznie oznacza pola i elementy należące do
**pakietów zarządzanych** (managed packages) jako tylko do odczytu w siatce. Jeśli zastanawiasz się,
dlaczego Twoje ulubione pole jest poszarzone, ta strona jest dla Ciebie.

## Co oznacza „pakiet zarządzany”

Pakiet zarządzany to aplikacja zainstalowana w Twojej organizacji Salesforce
z AppExchange (lub z Twojej własnej organizacji deweloperskiej ISV). Pola,
obiekty, etykiety i układy, które przyszły wraz z pakietem zarządzanym,
mają prefiks przestrzeni nazw, np. `ns__FieldName__c`.

Salesforce blokuje metadane tych komponentów. **Nawet
Administrator Systemu nie może edytować tłumaczenia pola z pakietu
zarządzanego z poziomu organizacji korzystającej z pakietu** — może to zrobić tylko
deweloper pakietu i tylko z poziomu organizacji deweloperskiej.

TranSFlator wykrywa prefiks przestrzeni nazw podczas skanowania i poszarza
każdy taki komponent. To nie jest błąd — to ochrona
przed wdrożeniami, które zakończyłyby się błędem
„Managed package component cannot be modified”.

## „Ale to ja jestem właścicielem pakietu zarządzanego”

W takim przypadku musisz go przetłumaczyć **z poziomu organizacji deweloperskiej**, a nie
z organizacji klienta, która go zainstalowała. Oto proces:

1. Otwórz TranSFlator i połącz się ze swoją **organizacją deweloperską pakietu
   zarządzanego** (tą, z której wydajesz wersje).
2. Wykonaj skanowanie. Pola w Twojej przestrzeni nazw pojawią się jako edytowalne.
3. Przetłumacz i wdróż normalnie.
4. Wydaj nową wersję pakietu zarządzanego.
5. Organizacje klientów otrzymają nowe tłumaczenia przy następnej
   aktualizacji pakietu.

## Pakiety niezarządzane i pakiety zarządzane pierwszej generacji

Pakiety niezarządzane (unmanaged packages) nie mają przestrzeni nazw i są w pełni edytowalne
wszędzie. Traktuj je jak każdy inny komponent — TranSFlator
ich nie pominie.

Komponenty pakietów zarządzanych pierwszej generacji zainstalowane jako
**beta** (niewydane) są również edytowalne dla dewelopera, ale
nie dla konsumentów.

## Etykiety niestandardowe (Custom Labels)

Etykiety niestandardowe zachowują się nieco inaczej: `Protected` (chronione) etykiety
w pakiecie zarządzanym są zablokowane tak samo jak pola.
`Public` (publiczne) etykiety *mogą* być nadpisywane dla każdego języka w
organizacji korzystającej i TranSFlator na to pozwala — jednak
nadpisanie jest widoczne tylko w tej konkretnej organizacji, a nie w
pakiecie źródłowym.

:::note[TODO]
Dodać konkretne zrzuty ekranu poszarzonych pól w siatce i
flagi pakietu zarządzanego w panelu metadanych. Udokumentować
dokładną wersję API, której TranSFlator używa do wykrywania przestrzeni nazw.
:::
