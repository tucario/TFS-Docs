---
title: OAuth-Fehler
description: Beheben Sie die gängigen OAuth-Fehler, die beim Verbinden einer Salesforce-Organisation auftreten können – Weiterleitungsabweichungen, abgelaufene Sitzungen, widerrufene Token.
---

Die meisten OAuth-Fehler sind wenig spektakulär und lassen sich in vier Kategorien einteilen.
Hier erfahren Sie, wie Sie diese unterscheiden und beheben können.

## „redirect_uri mismatch“

**Symptom:** Salesforce zeigt eine allgemeine Fehlerseite anstelle des „Zulassen“-Bildschirms an, mit `error=redirect_uri_mismatch` in der URL.

**Ursache:** Die in Salesforce konfigurierte TranSFlator Connected App ist mit einer Callback-URL konfiguriert, die nicht mit der von der App tatsächlich verwendeten URL (`http://localhost:1717/oauth/callback`) übereinstimmt.

**Behebung:** Dies sollte Kunden niemals passieren – es würde bedeuten, dass die Metadaten unserer Connected App beschädigt wurden. Wenn dieser Fehler bei Ihnen auftritt, senden Sie eine E-Mail an [hello@tucario.com](mailto:hello@tucario.com) mit der URL aus Ihrem Browser.

## „invalid_grant“ beim Token-Austausch

**Symptom:** Der Browser leitet korrekt zurück, aber die App zeigt „Authentifizierung fehlgeschlagen“ an.

**Ursache:** Der Autorisierungscode ist abgelaufen, bevor die App ihn austauschen konnte. Dies passiert, wenn Sie auf dem Salesforce-Berechtigungsbildschirm länger als eine Minute gewartet haben.

**Behebung:** Klicken Sie erneut auf **Add Connection** und durchlaufen Sie den Vorgang ohne Pause.

## „Sitzung abgelaufen oder ungültig“

**Symptom:** Die Verbindung hat gestern noch funktioniert, heute zeigt das Klicken darauf einen roten Punkt und „Sitzung abgelaufen“.

**Ursache:** Ihr Aktualisierungstoken (Refresh Token) wurde widerrufen. Dies geschieht, wenn:

- Ein Administrator in Salesforce auf dem Bildschirm „OAuth-Nutzung für verbundene Apps“ bei der TranSFlator Connected App auf **Widerrufen** geklickt hat.
- Das Kennwort Ihres Salesforce-Benutzers zurückgesetzt wurde (Salesforce widerruft alle Aktualisierungstoken bei einer Kennwortänderung).
- Ihre Organisation eine Richtlinie zur „Gültigkeit von Aktualisierungstoken“ hat, die gerade abgelaufen ist.

**Behebung:** Klicken Sie auf die Verbindung; die App wird Sie auffordern, sich erneut zu autorisieren. Durchlaufen Sie den OAuth-Vorgang, und Sie sind wieder angemeldet.

## „IP-Adresse nicht zulässig“

**Symptom:** Salesforce lehnt die OAuth-Anfrage mit `restricted_access` oder ähnlichem ab.

**Ursache:** In Ihrer Organisation sind **Login-IP-Bereiche** für das Profil festgelegt, mit dem Sie sich authentifiziert haben, und Ihre aktuelle IP-Adresse liegt nicht in diesem Bereich.

**Behebung:** Verbinden Sie sich über eine zulässige IP-Adresse (Büro-VPN usw.) oder bitten Sie Ihren Administrator, den IP-Bereich des Profils für Ihren Benutzer zu lockern.

:::note[TODO]
Konkrete Fehler-Screenshots hinzufügen. Die spezifischen Audit-Log-Einträge dokumentieren, nach denen im Salesforce-Setup bei der Fehlersuche gesucht werden muss.
:::
