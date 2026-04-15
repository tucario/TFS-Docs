---
title: KI-Engines Übersicht
description: Wie die vier KI-Übersetzungs-Engines in Bezug auf Geschwindigkeit, Sprachabdeckung, Kostenstruktur und Datenresidenz abschneiden.
---

TranSFlator unterstützt standardmäßig vier KI-Übersetzungs-Engines.
Alle vier sind über denselben **TranSFlator-Backend** zugänglich, was bedeutet:

- **Sie benötigen keine API-Keys der Anbieter.** Das Guthaben auf Ihrem Konto deckt jede Engine ab.
- **Sie kommunizieren nicht direkt mit dem Anbieter** über die Desktop-App – das Backend übernimmt dies über TLS mit entsprechenden regionalen Endpunkten basierend auf Ihrer Auswahl.
- **Sie können die Engines zwischen den Batches wechseln.** Es entsteht kein Aufwand für die Einrichtung pro Engine.

## Schneller Vergleich

| Engine | Bestens geeignet für | Geschwindigkeit | Sprachabdeckung | Datenresidenz-Optionen |
| --- | --- | --- | --- | --- |
| **Google Gemini** | Alltäglicher Geschäftstext, breite Sprachabdeckung | Schnell | 100+ | US, EU, Asien, Australien |
| **Anthropic Claude** | Nuancierte Texte, lange Zeichenfolgen, Brand-Voice | Mittel | 95+ | US, EU |
| **Mistral** | Datenschutz-sensible EU-Einsätze | Schnell | 40+ (stark bei EU-Sprachen) | Nur EU |
| **DeepSeek** | Asiatische Sprachen (CJK, Vietnamesisch, Thai, Indonesisch) | Sehr schnell | 80+, stark bei asiatischen Sprachen | Nicht-EWR |

Alle Kosten werden Ihnen in TranSFlator-Credits zu einem Pauschalpreis pro Zeichen berechnet, unabhängig davon, welche Engine Sie wählen. Hinter den Kulissen gleicht das Backend den Preisunterschied zwischen den Engines aus.

## Eine Auswahl treffen

- **Spielt keine Rolle / möchte einfach Ergebnisse?** Verwenden Sie Gemini. Es ist der Standard und es ist sehr gut.
- **Sensible Inhalte, Brand-Voice-Arbeit, Rechtstexte?** Claude. Die zusätzliche Sorgfalt lohnt sich.
- **Muss in der EU bleiben?** Mistral.
- **Übersetzung ins Chinesische, Japanische, Koreanische oder andere asiatische Sprachen?** DeepSeek – es ist mit einer viel stärkeren Gewichtung auf asiatische Sprachen trainiert als die anderen.

## Seiten pro Engine

- [Google Gemini](/de/ai-engines/gemini/)
- [Anthropic Claude](/de/ai-engines/claude/)
- [Mistral](/de/ai-engines/mistral/)
- [DeepSeek](/de/ai-engines/deepseek/)

:::note[TODO]
Echte Benchmark-Daten: Genauigkeitswerte pro Engine für einen festen Korpus von 1000 Salesforce-Feldbezeichnungen in 5 Zielsprachen, mit Notizen der Evaluatoren.
:::
