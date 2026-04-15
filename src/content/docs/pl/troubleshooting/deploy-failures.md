---
title: Błędy wdrażania
description: Jak czytać okna dialogowe błędów wdrażania, jakie są ich najczęstsze przyczyny i co zrobić, gdy wdrożenie zostanie wycofane.
---

Gdy wdrożenie (deploy) zakończy się niepowodzeniem, TranSFlator wycofuje wszystkie zmiany (zobacz
[Wdrażanie w Salesforce](/pl/desktop-app/deploying/)) i wyświetla
okno dialogowe z każdym komponentem, który zawiódł. Dosłowny tekst błędu pochodzi
z Salesforce — nie redagujemy go. Ta strona to przewodnik
po najczęstszych komunikatach o błędach.

## „INVALID_CROSS_REFERENCE_KEY”

Cel tłumaczenia nie istnieje już w organizacji
(np. pole niestandardowe, które zostało usunięte od ostatniego skanowania).

**Naprawa:** przeskanuj organizację ponownie za pomocą **Refresh metadata** i spróbuj jeszcze raz.
Nieaktualny wiersz zniknie z siatki.

## „Managed package component cannot be modified”

Próbowałeś przetłumaczyć pole należące do pakietu zarządzanego, a
Salesforce na to nie pozwala, nawet użytkownikom z uprawnieniami administratora.

**Naprawa:** TranSFlator powinien był oznaczyć te pola jako tylko do odczytu, zanim
tu dotarłeś. Jeśli widzisz ten błąd w trakcie wdrażania, oznacza to, że skanowanie
nie wykryło flagi pakietu zarządzanego — kliknij **Skip and retry**,
aby wykluczyć ten komponent i kontynuować. Daj nam znać, jeśli to się
powtórzy: to błąd po naszej stronie.

## „Required field missing”

Salesforce oczekiwał, że plik tłumaczenia będzie zawierał pole, którego
siatka nie wysłała. Dzieje się tak, gdy częściowo przetłumaczysz Record
Type i pominiesz wartości list wyboru (picklist values).

**Naprawa:** otwórz Record Type w siatce, uzupełnij brakujące
wiersze i spróbuj ponownie.

## „Insufficient access rights on cross-reference id”

Twój połączony użytkownik nie ma uprawnień do modyfikowania
obiektu, do którego należy to tłumaczenie.

**Naprawa:** nadaj odpowiednie uprawnienia swojemu użytkownikowi (Permission Set)
lub uwierzytelnij się za pomocą użytkownika, który ma dostęp. Najbezpieczniejszy ruch: utwórz dedykowanego użytkownika
„administratora tłumaczeń” z uprawnieniami do każdego obiektu, który
chcesz tłumaczyć.

## Wszystko inne

Skopiuj dokładny tekst błędu z okna dialogowego i prześlij go na adres
[hello@tucario.com](mailto:hello@tucario.com). Dołącz Salesforce `componentType`,
klucz metadanych oraz linię, o której wspomina błąd. Poinformujemy Cię, jak go naprawić lub dodamy ten przypadek do tej strony.

:::note[TODO]
Rozpocząć tworzenie tabeli konkretnych kodów błędów z linkami do dokumentacji Salesforce. Skrypt eksportujący log wdrożenia do pliku tekstowego do celów wsparcia.
:::
