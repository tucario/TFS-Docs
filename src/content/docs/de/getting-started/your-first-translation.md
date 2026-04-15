---
title: Ihre erste Übersetzung
description: Übersetzen Sie einige benutzerdefinierte Felder durchgängig, vom Scan bis zur Bereitstellung, in weniger als zehn Minuten.
---

Am Ende dieser Seite werden Sie Folgendes getan haben:

1. Eine Sandbox-Organisation gescannt
2. Auf eine Handvoll benutzerdefinierter Felder gefiltert
3. Diese mit KI stapelweise in eine Zielsprache übersetzt
4. Das Ergebnis zurück an Salesforce übertragen

Gesamtzeit: weniger als zehn Minuten. Kosten: ein paar hundert Zeichen KI-Guthaben.

## 1. Wählen Sie ein sicheres Ziel

Führen Sie dies zuerst in einer **Sandbox** durch, niemals direkt in der Produktion.
TranSFlator-Bereitstellungen sind atomar und können rückgängig gemacht werden, aber Vertrauen ist billiger als Reue.

Öffnen Sie die Sandbox-Verbindung, die Sie in
[Verbinden Sie Ihre Salesforce-Organisation](/de/getting-started/connect-your-org/) erstellt haben.

## 2. Scan

Die App scannt Ihre Organisation beim ersten Öffnen. Je nach Größe der Organisation dauert dies 10 Sekunden bis einige Minuten. Sie sehen, wie sich das Übersetzungsgitter mit jedem übersetzbaren Element füllt: benutzerdefinierte Felder, Auswahllistenwerte, Datensatztypen, Hilfetexte, Layouts, Weblinks, Validierungsregeln, benutzerdefinierte Bezeichnungen.

## 3. Eingrenzen

Klicken Sie auf das **Filter**-Symbol und wählen Sie **Custom Field → Label**, um das Gitter auf nur benutzerdefinierte Feldbezeichnungen zu beschränken. Aktivieren Sie das Kontrollkästchen in der Spalte **Missing**, um nur Zeilen anzuzeigen, die noch nicht übersetzt wurden. Sie sollten nun nur noch wenige Zeilen sehen.

## 4. Zielsprache wählen

Klicken Sie auf die Sprachauswahl oben und wählen Sie eine Sprache aus, für die Sie noch keine Übersetzungen haben (z. B. **Polnisch**). Das Gitter zeigt nun links die Quelle und rechts die Spalte für das Ziel an, die noch leer ist.

![Die Zielsprachenauswahl, die jedes aktivierte Gebietsschema mit seinem Abdeckungsbalken anzeigt.](../../../../assets/screenshots/03-select-target-language.png)

Jede Zeile zeigt an, wie viele der übersetzbaren Einträge bereits in dieser Sprache abgedeckt sind – ein schneller Weg, um festzustellen, welche Gebietsschemata Aufmerksamkeit benötigen.

## 5. Übersetzen

Klicken Sie in der oberen Leiste auf **AI all**. Es erscheint ein Dialogfeld, in dem Sie gefragt werden, welche KI-Engine verwendet werden soll – wählen Sie eine aus. Siehe [Übersicht der Engines](/de/ai-engines/overview/), wenn Sie sich nicht sicher sind.

Die App sendet jede Zeile an das TranSFlator-Backend, das die Anfrage an die von Ihnen gewählte Engine weiterleitet. Die Ergebnisse fließen in das Gitter ein, sobald sie zurückkommen. Sie können jede Zeile von Hand bearbeiten – der KI-Vorschlag wird zum Ausgangspunkt, nicht zur endgültigen Antwort.

## 6. Bereitstellen

Klicken Sie auf **Deploy**. Die App packt die Änderungen in eine Metadaten-Bereitstellung, signiert die Anfrage mit dem Zugriffstoken Ihrer Verbindung und überträgt sie an die Metadata API von Salesforce. Sie sehen einen Fortschrittsdialog und dann entweder:

- **Erfolg** – die Änderungen sind live in Ihrer Sandbox.
- **Teilweiser Fehler** – die App zeigt Ihnen genau an, welche Komponenten abgelehnt wurden und warum. Meistens handelt es sich um ein Feld eines verwalteten Pakets (Managed Package), das Salesforce niemanden bearbeiten lässt; die App markiert diese und überspringt sie beim erneuten Versuch.

## 7. Überprüfen

Öffnen Sie Ihre Sandbox in einem Browser, stellen Sie die UI-Sprache auf diejenige um, die Sie gerade übersetzt haben, und überprüfen Sie, ob die benutzerdefinierten Felder wie erwartet gelesen werden.

## Nächste Schritte

Bereit für mehr? Lesen Sie [Batch-KI-Übersetzung](/de/desktop-app/batch-ai-translate/) für den vollen Funktionsumfang.
