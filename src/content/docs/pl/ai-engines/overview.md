---
title: Przegląd silników
description: Porównanie czterech silników tłumaczenia AI pod kątem szybkości, zakresu języków, struktury kosztów i rezydencji danych.
---

TranSFlator obsługuje cztery silniki tłumaczenia AI od razu po wyjęciu z pudełka.
Wszystkie cztery są dostępne przez ten sam **backend TranSFlator**,
co oznacza:

- **Nie potrzebujesz kluczy API dostawców.** Kredyty na Twoim koncie
  pokrywają dowolny silnik.
- **Nie komunikujesz się bezpośrednio z dostawcą** z aplikacji
  desktopowej — robi to backend przez TLS, używając odpowiednich punktów regionalnych
  na podstawie Twojego wyboru.
- **Możesz zmieniać silniki między partiami.** Nie ma żadnych
  dodatkowych kosztów konfiguracji dla poszczególnych silników.

## Szybkie porównanie

| Silnik | Najlepszy dla | Szybkość | Zakres językowy | Opcje rezydencji danych |
| --- | --- | --- | --- | --- |
| **Google Gemini** | Codzienne teksty biznesowe, szeroki zasięg językowy | Szybki | 100+ | USA, UE, Azja, Australia |
| **Anthropic Claude** | Niuansowe teksty, długie ciągi, praca nad głosem marki | Średni | 95+ | USA, UE |
| **Mistral** | Wrażliwe na prywatność wdrożenia w UE | Szybki | 40+ (silny w językach UE) | Tylko UE |
| **DeepSeek** | Języki azjatyckie (CJK, wietnamski, tajski, indonezyjski) | Bardzo szybki | 80+, silny w azjatyckich | poza EOG |

Wszystkie koszty są naliczane w kredytach TranSFlator według stałej
stawki za znak, niezależnie od wybranego silnika. Za kulisami
backend bierze na siebie różnice w cenach między silnikami.

## Wybór silnika

- **Nie ma to znaczenia / chcesz po prostu wyników?** Użyj Gemini. To
  standard i jest bardzo dobry.
- **Wrażliwe treści, praca nad głosem marki, teksty prawne?** Claude.
  Dodatkowa dbałość jest tego warta.
- **Musi zostać w UE?** Mistral.
- **Tłumaczysz na chiński, japoński, koreański lub inne języki azjatyckie?** DeepSeek — jest przeszkolony ze znacznie większym naciskiem na języki azjatyckie niż pozostałe.

## Strony poszczególnych silników

- [Google Gemini](/pl/ai-engines/gemini/)
- [Anthropic Claude](/pl/ai-engines/claude/)
- [Mistral](/pl/ai-engines/mistral/)
- [DeepSeek](/pl/ai-engines/deepseek/)

:::note[TODO]
Rzeczywiste dane z benchmarków: wyniki dokładności dla każdego silnika na stałym korpusie
1000 etykiet pól Salesforce w 5 językach docelowych, wraz z
uwagami oceniających.
:::
