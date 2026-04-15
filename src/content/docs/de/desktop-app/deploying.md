---
title: Bereitstellung in Salesforce
description: Übertragen Sie Übersetzungen per Metadaten-API zurück in Ihre Salesforce-Org. Atomar mit Rollback, Fehlermeldungen auf Komponentenebene.
---

Bei der Bereitstellung werden die übersetzten Zeilen aus Ihrem Grid genommen und über die Metadaten-API in Salesforce übertragen. Dies ist der letzte Schritt im normalen Workflow.

## Was wird bereitgestellt

Nur Zeilen, die (a) in der Zielsprachenspalte nicht leer sind und (b) sich seit der letzten erfolgreichen Bereitstellung für diese Verbindung geändert haben. Unveränderte Zeilen werden übersprungen. Zeilen, die Sie nicht berührt haben, bleiben unberührt.

## Atomar mit Rollback

Bereitstellungen werden als eine einzige Metadaten-API-Transaktion übermittelt. Wenn die Validierung einer Komponente auf Salesforce-Seite fehlschlägt, wird die **gesamte Bereitstellung zurückgerollt** und Sie sehen einen Dialog, in dem jede fehlgeschlagene Komponente mit dem Grund aufgeführt ist. Ihre Org befindet sich nie in einem halb-angewendeten Zustand.

![Der Bereitstellungsdialog, während TranSFlator 273 geänderte Übersetzungen in die DQS Playground-Org überträgt.](../../../../assets/screenshots/06-deploying-to-salesforce.png)

## Fehler auf Komponentenebene

Die Fehleransicht zeigt:

- Den Salesforce-Metadatenschlüssel, der fehlgeschlagen ist (z. B. `Account.Industry__c.Label.fr`)
- Die Fehlermeldung von Salesforce im Wortlaut
- Eine Schaltfläche **Überspringen und erneut versuchen**, die die fehlerhafte Zeile ausschließt und die Bereitstellung erneut versucht

## Verwaltete Pakete (Managed Packages)

Salesforce erlaubt nicht das Ändern von Metadaten von Feldern, die zu einem verwalteten Paket gehören, das Sie nicht selbst erstellt haben. TranSFlator erkennt diese beim Scannen und markiert sie im Grid als schreibgeschützt, damit Sie keine Zeit damit verschwenden, etwas zu übersetzen, das niemals bereitgestellt werden kann.

## Protokoll

Jede Bereitstellung wird in der lokalen Tabelle `deployment_log` mit Zeitstempel, Verbindung, Anzahl der Komponenten und dem Endstatus aufgezeichnet. Nichts wird an unser Backend gesendet.

Wenn die Bereitstellung abgeschlossen ist, erhalten Sie eine Zusammenfassung, die zeigt, wie viele Komponenten tatsächlich angewendet wurden und wie viele übersprungen wurden, weil die Salesforce-API den Zugriff verweigert (z. B. Standard-Picklisten, deren Werte von der Plattform verwaltet werden):

![Die Zusammenfassung "Bereitstellung abgeschlossen" mit 243 bereitgestellten Übersetzungen und 30 übersprungenen Standard-Picklisten.](../../../../assets/screenshots/07-deploy-complete.png)

Übersprungene Einträge können über **STF generieren** exportiert und mit der Salesforce-Übersetzungs-Workbench importiert werden, die das einzige Tool ist, das diese Datensätze bearbeiten darf.
