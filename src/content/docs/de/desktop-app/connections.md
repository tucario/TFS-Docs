---
title: Verbindungen
description: Verwalten von Salesforce-Verbindungen in der Desktop-App — Hinzufügen, Umbenennen, Testen, Löschen.
---

Eine **Verbindung** in TranSFlator repräsentiert eine Salesforce-Org, bei der Sie sich authentifiziert haben. Jede Verbindung ist eine Zeile in der App-Seitenleiste mit einem eigenen verschlüsselten Refresh-Token, einer Bezeichnung und einem Zeitstempel des letzten Tests.

Sie können so viele Verbindungen hinzufügen, wie Sie möchten — Produktionsumgebungen, mehrere Sandboxes, Scratch-Orgs, Kunden-Orgs, wenn Sie Berater sind. Die App hält sie nebeneinander bereit, und der Wechsel erfolgt mit einem Klick.

## Hinzufügen, Umbenennen, Löschen

Siehe [Verbinden Sie Ihre Salesforce-Org](/de/getting-started/connect-your-org/) für den Ablauf zum Hinzufügen. Um eine Verbindung umzubenennen, klicken Sie mit der rechten Maustaste auf die Verbindung in der Seitenleiste → **Umbenennen**. Zum Löschen klicken Sie mit der rechten Maustaste → **Löschen**. Das Löschen einer Verbindung löscht den verschlüsselten Refresh-Token sofort aus `transflate.db`; Salesforce wird nicht informiert, daher bleibt der Refresh-Token auf Salesforce-Seite gültig, bis Sie ihn manuell unter **Setup → Nutzung der OAuth-Anbindung für verbundene Apps** widerrufen.

## Verbindung testen

Der kleine Punkt neben jeder Verbindung zeigt ihren Status an:

- **Grün** — letzter Test erfolgreich, Token gültig.
- **Gelb** — in dieser Sitzung noch nicht getestet, könnte veraltet sein.
- **Rot** — letzter Test fehlgeschlagen. Klicken Sie, um sich erneut zu authentifizieren.

Klicken Sie auf eine beliebige Verbindung, und die App ruft `/services/data/v65.0/` in der Org auf, um die Sitzung erneut zu validieren, bevor der Workspace geladen wird. Wenn der Token widerrufen wurde oder abgelaufen ist, werden Sie aufgefordert, sich erneut über den normalen OAuth-Flow zu autorisieren.

![Die TranSFlator-Verbindungsliste mit einer lokalen STF-Datei, einer DQS Playground-Sandbox und einer Produktions-Org nebeneinander.](../../../../assets/screenshots/01-connections-list.png)

Der STF-Only-Import-Flow (erste Zeile oben) erstellt eine "Pseudo-Verbindung", die keinen Refresh-Token hat — sie enthält nur den analysierten Inhalt einer `.stf`-Datei und kann nicht zurück zu Salesforce bereitgestellt werden, bis Sie eine echte Org verknüpfen.
