---
title: KI-Guthaben
description: Wie Guthaben funktionieren, was wie viel Guthaben kostet und wie der monatliche Erneuerungszyklus abläuft.
---

KI-Guthaben sind die Einheit, mit der Transflator KI-Arbeit abrechnet. Ein Guthaben entspricht einem Zeichen des Quelltextes, das an eine KI-Engine gesendet wird.

## Warum pro Zeichen und nicht pro Engine?

Verschiedene KI-Engines haben sehr unterschiedliche Rohpreise. Wenn wir Ihnen die nativen Einheiten der Engines in Rechnung stellen würden, wüssten Sie nie im Voraus, was ein Batch kosten würde. Die Abrechnung pro Zeichen bedeutet:

- **Vorhersehbare Kosten** — ein Feldlabel mit 10 Zeichen kostet 10 Guthaben, unabhängig davon, welche Engine Sie wählen.
- **Kostenloser Engine-Wechsel** — Sie können Gemini für einen Batch und Claude für den nächsten verwenden, und das Guthaben verringert sich gleichermaßen.
- **Feste Marge** — wir fangen die Preisschwankungen der Engines ab, damit Sie es nicht tun müssen.

## Was wird gezählt?

Nur der **Quell-String** wird gemessen. Die zurückkommende Übersetzung ist kostenlos.

Die Kosten eines Batches berechnen sich grob wie folgt: `Summe von source_string.length für jede Zeile im Batch`. Wenn Sie einen Batch während der Ausführung abbrechen, werden Ihnen nur die Zeilen berechnet, die tatsächlich abgeschlossen wurden.

## Kontostand und Erneuerung

Ihr aktuelles Guthaben wird auf dem Dashboard angezeigt und live aktualisiert. Kostenlose Konten erhalten ein Startguthaben, das sich in einem 30-Tage-Zyklus mit demselben Betrag erneuert. Kostenpflichtige Konten erhalten ein monatliches Kontingent, das am ersten Tag jedes Abrechnungszyklus erneuert wird.

In dem Moment, in dem der Guthabenzyklus erneuert wird, passieren zwei Dinge:

1. Ihr Feld `ai_credits` wird auf den Erneuerungsbetrag des Plans zurückgesetzt.
2. Ihr Übersetzungsverlauf in der Sammlung `translations` wird gelöscht — siehe [Konto löschen](/de/account-panel/delete-account/) für die Begründung zur DSGVO-Minimierung.

## Guthaben aufgebraucht

Wenn Ihnen während eines Batches das Guthaben ausgeht, wird der Batch angehalten und das Raster zeigt die Meldung „Top-up erforderlich“ an. Fertiggestellte Zeilen bleiben erhalten; die verbleibenden Zeilen warten, bis Sie Ihr Guthaben aufladen.

:::note[TODO]
Preistabelle für die kostenpflichtigen Pläne, sobald die Preisgestaltung feststeht. Hinweis dazu, wie Zeichen pro Sprache in ungefähre Feldzahlen umgerechnet werden.
:::
