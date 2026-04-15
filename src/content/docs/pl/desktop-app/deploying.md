---
title: Wdrażanie w Salesforce
description: Przesyłaj tłumaczenia z powrotem do organizacji Salesforce za pomocą Metadata API. Operacja atomowa z wycofaniem zmian, raportowanie błędów na poziomie komponentów.
---

Wdrażanie (deploying) pobiera przetłumaczone wiersze z Twojej siatki i przesyła je
z powrotem do Salesforce przy użyciu Metadata API. Jest to ostatni krok
normalnego przepływu pracy.

## Co zostaje wdrożone

Tylko wiersze, które są (a) niepuste w kolumnie języka docelowego oraz
(b) zmienione od ostatniego udanego wdrożenia dla tego połączenia.
Niezmienione wiersze są pomijane. Wiersze, których nie dotykałeś, pozostają
nienaruszone.

## Atomowość z wycofaniem zmian (rollback)

Wdrożenia są przesyłane jako pojedyncza transakcja Metadata API. Jeśli jakikolwiek
komponent nie przejdzie walidacji po stronie Salesforce, **całe
wdrożenie jest wycofywane**, a Ty widzisz okno dialogowe z listą każdego
komponentu, który zawiódł, wraz z przyczyną. Twoja organizacja nigdy nie pozostaje w stanie
częściowo wdrożonym.

![Okno wdrażania, gdy TranSFlator przesyła 273 zmodyfikowane tłumaczenia do organizacji DQS Playground.](../../../../assets/screenshots/06-deploying-to-salesforce.png)

## Błędy na poziomie komponentów

Widok błędów pokazuje:

- Klucz metadanych Salesforce, który zawiódł (np.
  `Account.Industry__c.Label.fr`)
- Dosłowny komunikat o błędzie z Salesforce
- Przycisk **Skip and retry**, który wyklucza błędny wiersz i
  ponawia próbę wdrożenia

## Pakiety zarządzane (Managed packages)

Salesforce nie pozwala na modyfikowanie metadanych pól należących do
pakietu zarządzanego, którego sam nie zbudowałeś. TranSFlator wykrywa
je podczas skanowania i oznacza jako tylko do odczytu w siatce, abyś
nie tracił czasu na próby tłumaczenia czegoś, co nigdy nie zostanie
wdrożone.

## Log

Każde wdrożenie jest rejestrowane w lokalnej tabeli `deployment_log` wraz ze
znacznikiem czasu, połączeniem, liczbą komponentów i statusem końcowym.
Nic nie jest wysyłane do naszego backendu.

Gdy wdrożenie dobiegnie końca, otrzymasz podsumowanie pokazujące, ile
komponentów zostało faktycznie zastosowanych, a ile zostało pominiętych, ponieważ
API Salesforce odmawia ich modyfikacji (na przykład standardowe
listy wyboru, których wartości należą do platformy):

![Podsumowanie „Deploy Complete” z 243 wdrożonymi tłumaczeniami i 30 pominiętymi standardowymi listami wyboru.](../../../../assets/screenshots/07-deploy-complete.png)

Pominięte wpisy można wyeksportować za pomocą **Generate STF** i zaimportować
za pomocą Salesforce Translation Workbench, który jest jedynym narzędziem
mogącym modyfikować te rekordy.
