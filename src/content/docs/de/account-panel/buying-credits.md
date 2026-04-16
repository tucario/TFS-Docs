---
title: Guthaben kaufen
description: Laden Sie Ihr KI-Guthaben über Stripe auf. So funktionieren Planauswahl, Checkout, Belege und Rechnungen.
---

Wenn Sie mehr als das monatliche Kontingent des kostenlosen
Plans übersetzen möchten, können Sie Ihr Guthaben jederzeit mit
zusätzlichen Credits aufladen. Zahlungen werden über **Stripe**
abgewickelt.

## Plan auswählen

![Der „Choose Your Plan"-Bildschirm — eine als aktueller Plan markierte Free-Plan-Karte (5.000 Zeichen/Monat, API-Zugriff mit Token-Authentifizierung, alle unterstützten Sprachen, Salesforce-optimierte Übersetzungen) und eine Premium-Karte „Need more characters?" mit Aufzählungspunkten (bis zu 10.000.000+ Zeichen, keine monatlichen Limits, Zeichen verfallen nie, priorisierte Übersetzungsverarbeitung) sowie einer Schaltfläche „View Premium Packages".](../../../../assets/screenshots/panel/choose-plan.png)

Der Plan-Picker ist sowohl während des Onboardings beim ersten
Start als auch über den Eintrag **Buy Characters** in der
Seitenleiste verfügbar.

**Free plan** — 5.000 Zeichen pro 30-Tage-Zyklus, voller
API-Zugriff, alle unterstützten Sprachen, Salesforce-optimierte
Prompts. Ausreichend für kleine Organisationen, Evaluierungen
und leichte Wartungsarbeiten.

**Premium** — zusätzliche Zeichenpakete zusätzlich zu Ihrem
monatlichen Kontingent:

- Bis zu 10.000.000+ Zeichen pro Paket.
- Keine monatliche Obergrenze — nutzbar in Ihrem eigenen Tempo.
- **Zeichen verfallen nie.** Im Gegensatz zum monatlichen
  kostenlosen Kontingent bleiben gekaufte Credits auf Ihrem
  Guthaben, bis sie verbraucht sind.
- Priorisierte Übersetzungsverarbeitung in den Backend-Queues.

Klicken Sie auf **View Premium Packages**, um die Paketliste zu
öffnen und eine Größe auszuwählen.

## Aufladeablauf

1. Klicken Sie im Panel auf **Buy Characters** (Seitenleiste
   oder Dashboard-Karte) → **View Premium Packages**.
2. Wählen Sie eine Paketgröße aus der Liste.
3. Klicken Sie auf **Checkout** — dies öffnet Stripe Checkout,
   das auf der eigenen Domain von Stripe gehostet wird.
   Kartendaten werden auf den Servern von Stripe eingegeben,
   nicht auf unseren.
4. Schließen Sie die Zahlung ab.
5. Stripe leitet Sie zurück zum Panel. Ein Stripe-Webhook wird
   auf unserem Backend ausgelöst, schreibt ein
   `purchases`-Dokument nach Firestore und erhöht Ihr
   `ai_credits`-Guthaben atomar.
6. Der neue Kontostand ist innerhalb weniger Sekunden auf dem
   Dashboard sichtbar.

## Was wir speichern

Jeder abgeschlossene Kauf erstellt ein Dokument in der
Firestore-Sammlung `purchases` mit: Ihrer `uid`, der
Stripe-Session-ID, dem Stripe-Payment-Intent, dem gezahlten
Betrag, der Währung und der Anzahl der gekauften Zeichen. Wir
speichern **keine** Kartennummern, CVV oder andere
Karteninhaberdaten.

## Belege

Stripe sendet in dem Moment, in dem die Zahlung abgeschlossen
ist, einen E-Mail-Beleg an die Adresse Ihres
TranSFlator-Kontos. Das ist der offizielle Beleg für Ihre
Unterlagen.

## Fehlgeschlagene Zahlungen

Wenn eine Zahlung abgelehnt wird, wird der Stripe-Webhook nie
ausgelöst, sodass kein Kauf aufgezeichnet und kein Guthaben
hinzugefügt wird. Auf unserer Seite ändert sich nichts. Versuchen
Sie es mit einer anderen Karte erneut.

## USt./Rechnungen für EU-Kunden

Stripe stellt über das Customer Portal USt.-konforme Rechnungen
aus. Ein Selbstbedienungsverlauf für Rechnungen ist eine
geplante Funktion im Panel; bis dahin senden Sie eine E-Mail an
[hello@tucario.com](mailto:hello@tucario.com) mit Ihrer
Konto-E-Mail-Adresse und wir senden Ihnen die PDFs zu.
