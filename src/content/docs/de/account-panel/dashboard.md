---
title: Dashboard
description: Ihr Startbildschirm im TranSFlator-Panel — Guthabenstand, Übersetzungsstatistiken, API-Zustand und das Onboarding beim ersten Start.
---

Das Dashboard ist das, was Sie direkt nach der Anmeldung sehen.
Es beantwortet die drei Fragen, wegen derer Sie das Panel
üblicherweise öffnen: *Wie viel Guthaben habe ich noch, ist die
API in Ordnung und wie viel habe ich in letzter Zeit übersetzt?*

![Das Dashboard des TranSFlator-Panels — eine Begrüßungsüberschrift, eine „AI Characters"-Karte mit 5.000 verbleibenden Zeichen und dem nächsten Erneuerungsdatum, ein „Batch-translate with AI"-Banner mit dem Tukan-Maskottchen und darunter vier Statistikkarten: Usage (letzte 30 Tage), Top language pairs (30 Tage), Recent translations, API Health (24 Std.) und Credits forecast.](../../../../assets/screenshots/panel/dashboard.png)

## Was jede Kachel zeigt

**AI Characters** — Ihr aktuelles Guthaben und das Datum der
nächsten Erneuerung (kostenloser Plan: alle 30 Tage,
kostenpflichtige Pläne: erster Tag Ihres Abrechnungszyklus). Die
Schaltfläche **Buy Characters** springt direkt in den Kaufprozess.

**Batch-translate with AI** — eine Erinnerung daran, welche
Engines angebunden sind (Gemini · Claude · Mistral · DeepSeek)
und dass Sie jederzeit über **API Settings** zwischen ihnen
wechseln können.

**Usage · Last 30 days** — eine laufende Zählung der in den
letzten 30 Tagen über alle Engines übersetzten Zeichen. Nützlich,
um abzuschätzen, ob Ihr kostenloses Kontingent den Monat
überdauern wird.

**Top language pairs · 30d** — nach Häufigkeit sortierte Liste
Ihrer am häufigsten verwendeten Quell→Ziel-Paare. Leer bei
einem neuen Konto; wird automatisch gefüllt, sobald Sie Ihre
ersten Batches ausführen.

**Recent translations** — ein Auszug der zuletzt übersetzten
Zeilen. Ein Klick auf **Translation History** (linke
Seitenleiste) öffnet das vollständige Protokoll.

**API Health · 24h** — durchschnittliche Latenz und Anzahl der
Anfragen gegen Ihren API-Token in den letzten 24 Stunden. Wenn
Sie einen Latenz- oder Anfragenanstieg sehen, den Sie nicht
ausgelöst haben, rotieren Sie den Token sofort (siehe
[API-Einstellungen](/account-panel/api-token/)).

**Credits forecast** — eine naive Prognose, wann Ihr aktuelles
Guthaben aufgebraucht sein wird, basierend auf Ihrem letzten
Nutzungstrend. Wird nach einigen Tagen Aktivität gefüllt.

## Onboarding beim ersten Start

Neue Konten, die ihre E-Mail-Adresse gerade verifiziert haben,
werden durch einen zweistufigen Onboarding-Ablauf geführt, bevor
das Dashboard zum ersten Mal geladen wird.

### Schritt 1 — KI-Engine auswählen

![Der Onboarding-Schritt „Choose Your AI Engine" — eine Gruppe „Recommended" mit Google Gemini und Anthropic Claude, regionale Gruppierungen für Nordamerika, Europa, Asien sowie Australien & Ozeanien, jeweils mit einer oder zwei Engine-Karten, und unten eine Schaltfläche „Continue".](../../../../assets/screenshots/panel/choose-engine.png)

TranSFlator arbeitet mit vier KI-Engines; Sie wählen eine als
Standard für neue Batches aus. Der Picker gruppiert sie wie folgt:

- **Recommended** — Allzweck-Standards: Google Gemini für
  schnelle, präzise mehrsprachige Übersetzung; Anthropic Claude
  für nuancierte, kontextbewusste Arbeit.
- **North America** — In den USA gehostete Verarbeitung für
  latenzarmen NA-Traffic.
- **Europe** — Mistral AI, GDPR-konform und stark bei
  EU-Sprachen.
- **Asia** — DeepSeek, kosteneffizient und stark bei CJK.
- **Australia & Oceania** — Gemini, beste regionale Abdeckung.

Die Wahl ist nicht endgültig. Sie können Engines jederzeit über
den Bildschirm **API Settings** oder in der
Batch-Konfiguration der Desktop-App wechseln.

### Schritt 2 — Plan auswählen

![Der Onboarding-Schritt „Choose Your Plan" — eine Free-Plan-Karte (5.000 Zeichen/Monat, API-Zugriff mit Token-Authentifizierung, alle unterstützten Sprachen, Salesforce-optimierte Übersetzungen) mit einer Schaltfläche „Continue with Free Plan" und eine Premium-Karte („Need more characters?") mit einer Schaltfläche „View Premium Packages".](../../../../assets/screenshots/panel/choose-plan.png)

Der kostenlose Plan (5.000 Zeichen pro 30 Tage, API-Zugriff, alle
unterstützten Sprachen) reicht aus, um TranSFlator
durchgehend zu evaluieren und sogar kleine Organisationen
abzudecken. Für höhere Volumina öffnet die **Premium**-Karte den
Paket-Picker — siehe [Guthaben kaufen](/account-panel/buying-credits/)
für Details.

Klicken Sie auf **Continue with Free Plan**, um das Onboarding
abzuschließen und auf dem Dashboard zu landen. Sie können Pakete
jederzeit später über die Schaltfläche **Buy Characters** auf
dem Dashboard oder über den Eintrag **Buy Characters** in der
Seitenleiste erwerben.
