---
title: Siatka tłumaczeń
description: Edytor o wysokiej gęstości danych w sercu aplikacji — filtry, wyszukiwanie, edycja wierszy, skróty klawiszowe.
---

Siatka tłumaczeń (translation grid) to widok typu arkusz kalkulacyjny zawierający każdy
element Twojej organizacji podlegający tłumaczeniu. Została zbudowana tak, aby obsługiwać dziesiątki
tysięcy wierszy i zachowywać responsywność.

## Kolumny

- **Type** — pole niestandardowe, lista wyboru, układ, reguła walidacji…
- **Key** — klucz metadanych Salesforce (tylko do odczytu)
- **Source** — ciąg w Twoim domyślnym języku
- **Target** — ciąg dla aktualnie wybranego języka,
  edytowalny

## Filtry

Pasek boczny filtrów po lewej stronie pozwala zawęzić widok według typu, obiektu,
języka i „tylko brakujące tłumaczenia”. Filtry można łączyć — możesz
poprosić o *"etykiety pól niestandardowych na obiekcie Account, z brakującym
tłumaczeniem na włoski"* za pomocą trzech kliknięć.

## Wyszukiwanie

Pole wyszukiwania na górze dopasowuje fragmenty tekstu i działa na żywo. Przeszukuje
zarówno źródło, jak i cel.

## Skróty klawiszowe

| Skrót | Akcja |
| --- | --- |
| `↑` / `↓` | Poruszanie się między wierszami |
| `Enter` | Edycja bieżącego wiersza |
| `Esc` | Odrzucenie niezapisanej edycji |
| `⌘/Ctrl + S` | Zapisanie bieżącego obszaru roboczego |
| `⌘/Ctrl + F` | Przejście do wyszukiwania |
| `⌘/Ctrl + Shift + A` | Zaznaczenie wszystkich widocznych wierszy |
| `⌘/Ctrl + D` | Oznaczenie wiersza jako „gotowy” (sprawdzony) |

![Siatka tłumaczeń TranSFlator z paskiem bocznym obiektów, wyszukiwaniem i kolumnami źródło/cel.](../../../../assets/screenshots/04-translations-table.png)

Lewy pasek boczny grupuje każdy element do tłumaczenia według obiektu Salesforce
(Account, Case, Contact, …) wraz z licznikiem, dzięki czemu zawsze wiesz,
ile pracy pozostało.
