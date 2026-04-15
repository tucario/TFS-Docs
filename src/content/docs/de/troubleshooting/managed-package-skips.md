---
title: Überspringen von verwalteten Paketen
description: Warum TranSFlator einige Felder als nicht übersetzbar markiert, was ein „verwaltetes Paket“ eigentlich ist und wie man Hilfetexte für verwaltete Pakete übersetzt, die man selbst besitzt.
---

TranSFlator markiert Felder und Elemente, die zu **verwalteten Paketen** (Managed Packages) gehören, automatisch als schreibgeschützt im Gitter. Wenn Sie sich fragen, warum Ihr Lieblingsfeld ausgegraut ist, ist diese Seite für Sie.

## Was „verwaltetes Paket“ bedeutet

Ein verwaltetes Paket ist eine App, die über AppExchange (oder aus Ihrer eigenen ISV-Entwicklungsorganisation) in Ihrer Salesforce-Organisation installiert wurde. Felder, Objekte, Bezeichnungen und Layouts, die mit einem verwalteten Paket geliefert wurden, haben ein Namespace-Präfix wie `ns__FieldName__c`.

Salesforce sperrt die Metadaten dieser Komponenten. **Selbst ein Systemadministrator kann die Übersetzung eines Feldes aus einem verwalteten Paket in einer installierten Organisation nicht bearbeiten** – nur der Entwickler des verwalteten Pakets kann dies, und zwar nur in der Entwicklungsorganisation.

TranSFlator erkennt das Namespace-Präfix beim Scannen und graut jede Komponente mit einem solchen Präfix aus. Das ist kein Fehler – es schützt Sie vor Bereitstellungen, die mit der Fehlermeldung „Komponente des verwalteten Pakets kann nicht geändert werden“ fehlschlagen würden.

## „Aber ich besitze das verwaltete Paket“

Dann müssen Sie es **in Ihrer Entwicklungsorganisation** übersetzen, nicht in der Kundenorganisation, die es installiert hat. Hier ist der Ablauf:

1. Öffnen Sie TranSFlator und verbinden Sie sich mit Ihrer **Entwicklungsorganisation für verwaltete Pakete** (diejenige, aus der Sie Releases erstellen).
2. Starten Sie den Scan. Felder in Ihrem Namespace werden nun als bearbeitbar angezeigt.
3. Übersetzen und stellen Sie sie normal bereit.
4. Erstellen Sie eine neue Version des verwalteten Pakets.
5. Die Kundenorganisationen erhalten die neuen Übersetzungen bei ihrem nächsten Paket-Upgrade.

## Nicht verwaltete und verwaltete Pakete der ersten Generation

Nicht verwaltete Pakete (Unmanaged Packages) haben keinen Namespace und sind überall vollständig bearbeitbar. Behandeln Sie sie wie jede andere Komponente – TranSFlator wird sie nicht überspringen.

Komponenten von verwalteten Paketen der ersten Generation (1GP), die als **Beta** installiert wurden (nicht freigegeben), sind für den Entwickler ebenfalls bearbeitbar, jedoch nicht für die Endbenutzer.

## Benutzerdefinierte Bezeichnungen (Custom Labels)

Benutzerdefinierte Bezeichnungen verhalten sich etwas anders: `Geschützte` benutzerdefinierte Bezeichnungen in einem verwalteten Paket sind genau wie Felder gesperrt. `Öffentliche` benutzerdefinierte Bezeichnungen *können* in der installierten Organisation pro Sprache überschrieben werden, und TranSFlator lässt dies zu – aber die Überschreibung ist nur in der installierten Organisation sichtbar, nicht im ursprünglichen Paket.

:::note[TODO]
Konkrete Screenshots der schreibgeschützten Ausgrauung im Gitter und der Kennzeichnung für verwaltete Pakete im Metadaten-Panel. Dokumentation der genauen API-Version, die TranSFlator zur Erkennung des Namespace verwendet.
:::
