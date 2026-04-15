---
title: Desktop-App installieren
description: Laden Sie TranSFlator für macOS oder Windows herunter und führen Sie es zum ersten Mal aus.
---

TranSFlator ist eine native Desktop-App. Es gibt keine Browser-Version des Übersetzungs-Workspaces — das Grid, der OAuth-Flow und der lokale verschlüsselte Tokenspeicher befinden sich alle in der App auf Ihrem Rechner.

## Herunterladen

Holen Sie sich den neuesten Build von der Download-Seite auf [transflator.com](https://transflator.com/download):

- **macOS** — universelles `.dmg`, signiert und notarisiert, läuft auf Apple Silicon- und Intel-Rechnern ab macOS 12.
- **Windows** — `.msi`-Installer, 64-Bit, Windows 10 und höher.

## Erste Ausführung

Unter macOS fordert die App die Erlaubnis an, eine Schlüsseldatei in `~/Library/Application Support/TranSFlator` zu speichern. Diese Datei ist der gerätespezifische AES-256-Verschlüsselungsschlüssel, der zum Sichern der Salesforce-Refresh-Tokens auf der Festplatte verwendet wird. Sie ist auf chmod 600 gesetzt und verlässt Ihren Rechner niemals.
Siehe [Sicherheit](/de/security/) für das vollständige Bedrohungsmodell.

Unter Windows ist der entsprechende Pfad `%APPDATA%\TranSFlator`.

## Anmelden

Das erste, wonach die App fragt, ist Ihre TranSFlator-Kontoe-Mail und Ihr Passwort. Wenn Sie noch kein Konto haben, öffnen Sie [panel.transflator.com](https://panel.transflator.com), registrieren Sie sich (kostenlos), verifizieren Sie Ihre E-Mail und kehren Sie zur App zurück. Siehe [Anmelden & E-Mail verifizieren](/de/account-panel/sign-up/) für Details.

Nach der Anmeldung tauscht die App Ihre Anmeldedaten gegen einen API-Token mit dem TranSFlator-Backend aus und speichert diesen lokal zwischen. Von nun an wird der Token — nicht Ihr Passwort — für API-Übersetzungsanrufe verwendet.

## Weiter geht's

Sobald Sie angemeldet sind, gehen Sie zu [Verbinden Sie Ihre Salesforce-Org](/de/getting-started/connect-your-org/).

:::note[TODO]
Fügen Sie Screenshots für die macOS- und Windows-Dialoge beim ersten Start hinzu.
:::
