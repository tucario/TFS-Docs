---
title: API-Token
description: Generieren, kopieren, rotieren und widerrufen Sie Ihren persönlichen API-Token. Wird von der Desktop-App und für direkte API-Aufrufe verwendet.
---

Jedes Transflator-Konto verfügt über einen einzigen **API-Token** — eine lange Zufallszeichenfolge, die Ihr Konto gegenüber dem Transflator-Backend für Übersetzungs-API-Aufrufe authentifiziert.

Normalerweise müssen Sie sich nicht darum kümmern. Die Desktop-App verwendet ihn automatisch, wenn Sie sich anmelden. Das einzige Mal, dass Sie direkt damit interagieren, ist, wenn Sie die Übersetzungs-API aus Ihrem eigenen Code heraus aufrufen möchten (z. B. in einer CI/CD-Pipeline).

## Wo er sich befindet

Im Panel unter **Profil → API-Token**. Der Token wird mit einer Schaltfläche **Kopieren** und einer Schaltfläche **Neu generieren** angezeigt.

## Neu generieren (Rotieren)

Klicken Sie auf **Neu generieren**, um den aktuellen Token ungültig zu machen und einen neuen auszugeben. Verwenden Sie dies, wenn Sie vermuten, dass der Token geleakt wurde — in ein öffentliches Repo hochgeladen, in einem Chat gepostet, in einer Logdatei hinterlassen — oder einfach als Teil eines regelmäßigen Rotationsplans.

Nach der Neugenerierung erhält jede Desktop-App, die bereits mit dem alten Token angemeldet ist, beim nächsten API-Aufruf ein `401 Unauthorized` und fordert Sie auf, sich erneut anzumelden.

## Direkte Verwendung

Senden Sie ihn als Bearer-Token im `Authorization`-Header, wenn Sie unsere Übersetzungs-API aufrufen:

```bash
curl -X POST https://transflator-api.web.app/translate/batch \
  -H "Authorization: Bearer <IHR_API_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{
    "strings": ["Account name", "Industry", "Annual revenue"],
    "target_language": "pl",
    "engine": "gemini"
  }'
```

Die Antwort ist ein JSON-Array mit übersetzten Zeichenfolgen in der gleichen Reihenfolge wie die Eingabe.

:::note[TODO]
Vollständige API-Referenz mit jedem Endpunkt (`/translate/batch`, `/me`, `/packages`), Fehlercodes, Ratenbegrenzungen. Dies wird ein eigener Abschnitt werden.
:::
