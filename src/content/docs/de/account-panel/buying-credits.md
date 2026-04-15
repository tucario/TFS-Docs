---
title: Guthaben kaufen
description: Laden Sie Ihr KI-Guthaben über Stripe auf. Wie der Checkout funktioniert, wohin die Belege gehen und wie Sie Rechnungen verwalten.
---

Wenn Sie mehr übersetzen möchten als das monatliche Kontingent Ihres Plans zulässt, können Sie jederzeit zusätzliches Guthaben aufladen. Zahlungen werden über **Stripe** abgewickelt.

## Ablauf der Aufladung

1. Klicken Sie auf dem Dashboard des Panels auf **Guthaben kaufen**.
2. Wählen Sie eine Paketgröße aus der Liste aus.
3. Klicken Sie auf **Checkout** — dies öffnet Stripe Checkout auf der Stripe-Domain. Kreditkartendaten werden auf den Servern von Stripe eingegeben, nicht auf unseren.
4. Schließen Sie die Zahlung ab.
5. Stripe leitet Sie zurück zum Panel. Ein Stripe-Webhook wird in unserem Backend ausgelöst, der ein `purchases`-Dokument in Firestore schreibt und Ihr `ai_credits`-Guthaben atomar erhöht.
6. Das neue Guthaben ist innerhalb weniger Sekunden auf dem Dashboard sichtbar.

## Was wir speichern

Jeder abgeschlossene Kauf erstellt ein Dokument in der Firestore-Sammlung `purchases` mit: Ihrer `uid`, der Stripe-Sitzungs-ID, dem Stripe-Zahlungsbeleg (Payment Intent), dem gezahlten Betrag, der Währung und den gekauften Zeichen. Wir speichern **keine** Kreditkartennummern, CVV oder andere Karteninhaberdaten.

## Belege

Stripe sendet in dem Moment, in dem die Zahlung erfolgt, einen E-Mail-Beleg an die in Ihrem Transflator-Konto hinterlegte Adresse. Dies ist der offizielle Beleg für Ihre Unterlagen.

## Fehlgeschlagene Zahlungen

Wenn eine Zahlung abgelehnt wird, wird der Stripe-Webhook niemals ausgelöst, sodass kein Kauf aufgezeichnet und kein Guthaben hinzugefügt wird. Auf unserer Seite ändert sich nichts. Versuchen Sie es erneut mit einer anderen Karte.

## MwSt. / Rechnungen für EU-Kunden

Stripe stellt über das Kundenportal MwSt.-konforme Rechnungen aus. Ein Self-Service-Rechnungsverlauf ist als Funktion im Panel geplant; bis dahin senden Sie eine E-Mail an [hello@tucario.com](mailto:hello@tucario.com) mit Ihrer Konto-E-Mail-Adresse, und wir werden Ihnen die PDFs zusenden.

:::note[TODO]
Screenshot des Checkout-Ablaufs, Beispielrechnung. Tabelle der verfügbaren Guthabenpakete, sobald die Preisgestaltung feststeht.
:::
