---
title: Verbinden Sie Ihre Salesforce-Org
description: Melden Sie sich von der Desktop-App aus über OAuth 2.0 mit PKCE bei Salesforce an. Umfasst Produktions-, Sandbox- und Scratch-Orgs.
---

TranSFlator verbindet sich mit Salesforce über **OAuth 2.0 mit PKCE (Code Challenge-Methode S256)**. Es gibt keinen Schritt, bei dem Sie Ihren Benutzernamen und Ihr Passwort einfügen müssen, und das TranSFlator-Backend befindet sich nicht dazwischen — der Autorisierungscode wird auf Ihrem eigenen Rechner ausgetauscht.

## Schritte

1. Klicken Sie in der App oben rechts auf **Verbindung hinzufügen**.
2. Vergeben Sie eine Bezeichnung für die Verbindung (z. B. *"EMEA Sandbox"* oder *"Acme Produktion"*), wählen Sie aus, ob es sich um eine **Produktions-/Entwicklerinstanz** (`login.salesforce.com`) oder eine **Sandbox** (`test.salesforce.com`) handelt, und klicken Sie auf **Autorisieren**.
3. Ihr Browser öffnet sich. Melden Sie sich wie gewohnt bei Salesforce an. Wenn Ihre Org SSO oder MFA verwendet, wird der normale Ablauf hier ausgeführt.
4. Salesforce bittet Sie, der **TranSFlator Connected App** den Zugriff auf Metadaten zu gestatten. Klicken Sie auf **Zulassen**.
5. Salesforce leitet zu `http://localhost:1717/oauth/callback` weiter, worauf die Desktop-App lauscht. Der Loopback-Callback verlässt niemals Ihren Rechner.
6. Die App tauscht den Autorisierungscode gegen einen Refresh-Token und einen Access-Token aus. Der Refresh-Token wird mit AES-256-CBC verschlüsselt und in `transflate.db` geschrieben; der Access-Token befindet sich nur im RAM.

Sie sind nun verbunden. Die Verbindung wird in der Seitenleiste mit einem grünen Statuspunkt angezeigt. Klicken Sie darauf, um das Übersetzungs-Grid für diese Org zu öffnen — TranSFlator scannt die Org sofort nach jedem übersetzbaren Element:

![TranSFlator scannt eine verbundene Salesforce-Org und lädt Übersetzungen Objekt für Objekt.](../../../../assets/screenshots/02-scanning-org.png)

## Verwendung einer benutzerdefinierten Domain

Wenn Ihre Org eine My Domain verwendet (`acme.my.salesforce.com`), wählen Sie **Benutzerdefinierte Domain** aus der Instanzauswahl und fügen Sie den vollständigen `https://...`-Hostnamen ein. Die App verwendet diesen als OAuth-Host anstelle des Standard-Login-Endpunkts.

## Scratch-Orgs

Scratch-Orgs funktionieren genau wie Sandboxes: Wählen Sie **Sandbox** in der Instanzauswahl. Der Refresh-Token lebt so lange wie die Scratch-Org — wenn die Scratch-Org abläuft, wird TranSFlator Sie beim nächsten Verbindungstest darüber informieren.

## Was TranSFlator sieht

Einmal verbunden, hat die App denselben Metadaten-Zugriff wie Ihr angemeldeter Benutzer — nicht mehr. Wenn Ihr Benutzer ein Feld sehen kann, kann TranSFlator es übersetzen. Wenn Ihr Benutzer keinen Zugriff auf einen Datensatztyp hat, kann TranSFlator diesen auch nicht scannen. Weisen Sie Ihrem Testbenutzer Berechtigungssätze zu, bevor Sie einen vollständigen Scan durchführen, wenn Sie den Umfang eingrenzen möchten.

## Weiter geht's

[Führen Sie Ihre erste Übersetzung aus →](/de/getting-started/your-first-translation/)
