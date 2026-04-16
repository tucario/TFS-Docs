---
title: API-Einstellungen
description: Ihr API-Token, bevorzugte KI-Engine, Ratenlimits, cURL-Beispiel und Webhook bei Guthabenerschöpfung — alles auf einem Bildschirm.
---

**API Settings** in der linken Seitenleiste ist das
Steuerungs-Panel für die direkte API-Nutzung. Die Desktop-App
liest die meisten dieser Werte in Ihrem Namen; der Bildschirm
existiert für den Fall, dass Sie die API selbst von einer CI,
einem Skript oder einer Drittanbieterintegration aus aufrufen
möchten.

![Der Bildschirm „API Settings" — eine API-Token-Karte mit maskiertem Token und Schaltflächen „Copy"/„Rotate Token", eine AI-Credits-Karte mit 5.000 von 5.000 verbleibenden Zeichen und einem Erneuerungsdatum, ein AI-Engine-Selektor mit Pills für Gemini/Claude/Mistral/DeepSeek, eine Rate-Limit-Karte mit 60 req/min, eine Karte mit cURL-Beispiel und ein Eingabefeld für den Depletion Webhook.](../../../../assets/screenshots/panel/api-settings.png)

## API-Token

Jedes TranSFlator-Konto verfügt über einen einzigen API-Token —
eine lange zufällige Zeichenkette, die Ihr Konto gegenüber der
Übersetzungs-API authentifiziert.

Die Token-Karte zeigt den aktuellen Wert standardmäßig maskiert
an, mit zwei Aktionen:

- **Copy** — kopiert den vollständigen Token in die
  Zwischenablage. Behandeln Sie ihn wie ein Passwort.
- **Rotate Token** — macht den aktuellen Token ungültig und
  stellt einen neuen aus. Verwenden Sie dies, wenn Sie vermuten,
  dass der Token durchgesickert ist (in ein öffentliches Repo
  gepusht, in einem Chat gepostet, in einer Log-Datei
  hinterlassen) oder als Teil einer regelmäßigen
  Rotationsrichtlinie.

Nach der Rotation erhält jede Desktop-App oder jedes Skript,
das den alten Token noch verwendet, beim nächsten Aufruf
`HTTP 401 Unauthorized` und muss sich erneut anmelden bzw. seine
Konfiguration aktualisieren.

## KI-Guthaben

Ein Spiegel der Guthabenkarte aus dem Dashboard, hier
angezeigt, weil Direkt-API-Nutzer sie oft neben dem Token und
dem Engine-Picker haben möchten. Zeigt verbleibende Zeichen,
Plan-Obergrenze und Erneuerungsdatum an.

## KI-Engine

Wählen Sie aus, welches Modell über die API initiierte
Übersetzungen antreibt:

- **Gemini** — Googles mehrsprachiges Allzweckmodell.
- **Claude** — Anthropic, nuanciert und kontextbewusst.
- **Mistral** — europäisch, GDPR-freundlich, stark bei
  EU-Sprachen.
- **DeepSeek** — kosteneffizient und stark bei CJK.

Die Auswahl gilt für jeden `POST /translate/batch`-Aufruf, der
`engine` nicht im Body überschreibt. Wenn Sie die Engine hier
ändern, wird auch Ihr `preferred_ai_model` im Benutzerdokument
aktualisiert, sodass die Desktop-App dies beim nächsten
Hydratisieren übernimmt.

## Ratenlimit

Zeigt Ihr aktuelles Ratenlimit pro Token an (standardmäßig
60 req/min). Bursts oberhalb dieser Grenze geben
`HTTP 429 Too Many Requests` zurück — warten Sie einen Moment und
versuchen Sie es erneut. Das Limit wird pro API-Token
durchgesetzt, nicht pro IP, sodass eine Token-Rotation es nicht
zurücksetzt.

## cURL-Beispiel

Ein sofort einsatzbereites Beispielaufruf, vorausgefüllt mit
Ihrem Token und gerichtet an den Batch-Translate-Endpunkt:

```bash
curl -X POST https://api.transflator.com/translate \
  -H "Authorization: Bearer <YOUR_API_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{"text":"Hello world","source_lang":"en","target_lang":"pl"}'
```

Klicken Sie auf **Copy** auf der Karte, um ihn mit Ihrem echten
Token ersetzt zu übernehmen. Die Antwort ist ein JSON-Objekt mit
der übersetzten Zeichenkette und Metadaten darüber, welche
Engine sie erzeugt hat.

## Depletion-Webhook

Optional. Fügen Sie eine HTTPS-URL ein, an die wir eine
JSON-Payload per POST senden, wenn Ihr Guthaben auf null fällt.
Nützlich für:

- Ein On-Call-Team zu benachrichtigen, wenn eine
  Produktions-API-Integration leer läuft.
- Ein automatisches Top-up in Ihrem eigenen Abrechnungssystem
  auszulösen.
- Eine Benachrichtigung über einen eingehenden Webhook in Slack
  einzuschleusen.

Lassen Sie das Feld leer, um die Funktion zu deaktivieren. Der
Webhook wird einmal pro Erschöpfungsereignis ausgelöst (nicht
bei jedem anschließenden 429); er wird beim nächsten Top-up
oder bei der nächsten Erneuerung neu aktiviert.
