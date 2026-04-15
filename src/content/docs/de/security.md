---
title: Sicherheit
description: Das Sicherheitsmodell von Transflator — PKCE OAuth, AES-256 Token-Speicherung, Zero Telemetry, wohin Ihre Daten fließen und wohin nicht.
---

Die Kurzfassung: **Ihre Salesforce-Token verlassen niemals Ihren Rechner, und wir senden niemals Ihre Daten „nach Hause“**. Die Desktop-App ist designgemäß „Local-first“, das Account-Panel speichert nur das, was für die Abrechnung erforderlich ist, und nichts und nirgendwo werden Analysen durchgeführt.

## OAuth 2.0 mit PKCE (S256)

Wenn Sie eine Salesforce-Org verbinden, führt die Desktop-App den Standard-Salesforce OAuth 2.0 Web Server Flow aus — **mit PKCE unter Verwendung der SHA-256 Code-Challenge-Methode**.

Was dies in der Praxis bedeutet:

- Die App generiert pro Login-Versuch einen kryptografisch zufälligen 32-Byte-**Code-Verifier**.
- Sie berechnet den SHA-256-Hash dieses Verifiers und sendet den Hash als `code_challenge`-Parameter.
- Salesforce leitet mit einem Autorisierungscode zurück zu `http://localhost:1717/oauth/callback`. Der Loopback-Listener gibt niemals etwas an das Netzwerk weiter.
- Die App tauscht den Code **direkt mit Salesforce** gegen Token aus und sendet den ursprünglichen Verifier als Beweis. Unser Backend befindet sich **nicht** in der Mitte dieses Austauschs.

Ein gestohlener Autorisierungscode ist ohne den passenden Verifier nutzlos, den die App niemals über das Netzwerk sendet.

## AES-256-CBC verschlüsselte Refresh-Token

Refresh-Token werden lokal gespeichert und mit **AES-256-CBC** verschlüsselt.

- Der 256-Bit-Schlüssel wird einmal pro Installation aus der kryptografisch sicheren Zufallsquelle des Betriebssystems generiert und in einer Datei namens `.enc_key` in `Application Support` gespeichert, mit `chmod 600`.
- Für jeden Schreibvorgang wird ein neuer 16-Byte-IV generiert und dem Geheimtext vorangestellt.
- Die verschlüsselte Datei ist `transflate.db` im selben Verzeichnis.
- **Access-Token werden niemals auf die Festplatte geschrieben.** Sie befinden sich nur im Prozessspeicher. Wenn die App beendet wird, sind sie weg; beim nächsten Klicken auf die Verbindung tauscht die App den Refresh-Token erneut gegen einen neuen Access-Token aus.

## Zero Telemetry (Keine Telemetrie)

Die Desktop-App wird **ohne jegliches Analytics-SDK** ausgeliefert. Kein PostHog, kein Sentry, kein Firebase Analytics, kein Crashlytics, kein Mixpanel, kein Amplitude. Durchsuchen Sie den Quellcode mit Grep, wenn Sie uns nicht glauben.

Die einzigen ausgehenden Netzwerkaufrufe der App gehen an:

- Salesforce (OAuth + Metadata API) unter der von Ihnen selbst gewählten Instanz-URL
- Ihren gewählten KI-Anbieter (über das Transflator-Backend)
- `transflator-api.web.app` für die Lizenzvalidierung, Ihre Kontoinformationen und den Endpunkt für die Batch-Übersetzung — alles über TLS

Sonst nichts.

## Überall HTTPS

Jeder ausgehende Aufruf außer dem OAuth-Loopback verwendet TLS 1.2 oder höher. Der OAuth-Loopback erfolgt im Klartext über `127.0.0.1` — dieser Datenverkehr verlässt Ihren Rechner buchstäblich nie, daher bietet TLS keinen Mehrwert.

## Sitzungsvalidierung bei jeder Verbindung

Jedes Mal, wenn Sie auf eine Verbindung klicken, um sie zu öffnen, ruft die App `/services/data/v65.0/` auf, um die Sitzung zu validieren. Veraltete oder widerrufene Token werden sofort erkannt und Sie werden aufgefordert, sich erneut zu autorisieren. Nichts läuft gegen eine ungültige Sitzung.

## Eigenen KI-Anbieterschlüssel mitbringen? Nein.

Transflator verwaltet die Anbieterschlüssel im Backend — Sie müssen keinen OpenAI-Schlüssel, Google-Schlüssel oder ähnliches einfügen. Der Vorteil ist die Onboarding-Zeit (null); der Kompromiss besteht darin, dass alle Übersetzungsaufrufe über unser Backend laufen, was eine Vertrauensgrenze darstellt, mit der Sie einverstanden sein müssen. Informationen darüber, was dies in der Praxis bedeutet, finden Sie in der [Datenschutzerklärung](https://transflator.com/privacy).

## Was befindet sich in der Datei `transflate.db`?

- **`connections`** — Ihre gespeicherten Org-Labels, Instanz-URLs, Umgebungstyp, Zeitstempel des letzten Tests
- **`tokens`** — AES-verschlüsselte Refresh-Token, einer pro Verbindung
- **`workspace`** — zwischengespeicherte Metadaten-Scan-Ergebnisse
- **`deployment_log`** — lokaler Verlauf der von Ihnen initiierten Deployments

Löschen Sie diese Datei, um alles außer Ihrem `.enc_key` zu löschen. Löschen Sie auch `.enc_key`, und beim nächsten Durchlauf wird ein neuer generiert.

:::note[TODO]
Diagramme des OAuth-Flows und des Datenresidenz-Routings hinzufügen.
Einen Abschnitt über macOS Code Signing und Notarisierung, Windows SmartScreen und was passiert, wenn Apple/Microsoft ein Signaturzertifikat widerrufen, hinzufügen.
:::
