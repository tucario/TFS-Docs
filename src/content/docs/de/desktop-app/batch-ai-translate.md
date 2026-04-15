---
title: KI-Batch-Übersetzung
description: Übersetzen Sie hunderte oder tausende von Zeilen in einem Durchgang. Wählen Sie eine Engine, eine Region, verfolgen Sie den Fortschritt und behandeln Sie Fehler.
---

Die KI-Batch-Übersetzung ist die Funktion, die die Installation von TranSFlator lohnenswert macht. Wählen Sie Zeilen aus, klicken Sie auf **KI für alle**, wählen Sie eine Engine aus, und die App streamt die Übersetzungen vom KI-Anbieter direkt in das Grid, sobald sie eintreffen.

## Einen Batch starten

1. Filtern und durchsuchen Sie das Grid, bis nur noch die Zeilen sichtbar sind, die Sie übersetzen möchten.
2. Klicken Sie auf **Alle sichtbaren auswählen** (⌘/Strg + Umschalt + A).
3. Klicken Sie in der Symbolleiste auf **KI für alle**.
4. Wählen Sie eine Engine und eine Region aus.
5. Bestätigen Sie.

## Auswahl der Engine

Die Auswahl zeigt jede Engine an, die Sie in Ihrem Konto aktiviert haben, sowie die geschätzten Kosten für die ausgewählten Zeilen. Siehe [KI-Engines Übersicht](/de/ai-engines/overview/) für einen Vergleich.

## Auswahl der Region

Hier wird festgelegt, wo die Übersetzungsanfrage geografisch verarbeitet wird. Dies ist relevant für Anforderungen an die Datenresidenz — einige KI-Anbieter ermöglichen die Wahl zwischen US, EU, Asien und Australien. TranSFlator leitet Ihre Regionsauswahl an das Backend weiter, das die Anfrage wiederum an den korrekten Endpunkt des Anbieters routet.

## Live-Fortschritt

Ein Banner am unteren Rand zeigt die abgeschlossenen/gesamten Zeilen, die aktuelle Rate und die geschätzte verbleibende Zeit an. Sie können einen Batch mittendrin abbrechen — Zeilen, die bereits zurückgegeben wurden, bleiben im Grid erhalten (noch nicht im Workspace gespeichert; speichern Sie mit ⌘/Strg + S).

## Fehler

Wenn der KI-Anbieter eine bestimmte Zeile ablehnt (zu lang, nicht unterstützte Zeichen, Blockierung durch Inhaltsrichtlinien), bleibt diese Zeile leer und der Fehler wird in der Seitenleiste protokolliert. Fehlgeschlagene Zeilen können einzeln erneut versucht oder ganz übersprungen werden.

## Kostenmodell

Jeder Batch verbraucht KI-Credits von Ihrem Kontoguthaben. Credits werden pro Zeichen des **Quellstrings** verbraucht, nicht pro Zeile — eine Feldbezeichnung mit 10 Zeichen kostet 10 Credits, unabhängig davon, welche Engine Sie verwenden. Siehe [KI-Credits](/de/account-panel/ai-credits/) für das vollständige Preismodell.

![Eine Batch-Übersetzung ins brasilianische Portugiesisch — 100 von 273 Zeilen erledigt, 37 % abgeschlossen.](../../../../assets/screenshots/05-translating-progress.png)

Der Fortschrittsbalken oben im Grid ist live: Zeilen werden ausgefüllt, sobald die KI antwortet, und **Stopp** bricht die verbleibenden Anfragen ab, ohne die bereits zurückgegebenen Zeilen zu verlieren.
