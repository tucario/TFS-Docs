---
title: Registrierung & E-Mail-Verifizierung
description: Erstellen Sie ein Transflator-Konto im Web-Panel, verifizieren Sie Ihre E-Mail-Adresse und erhalten Sie Ihr Startguthaben.
---

Das Account-Panel unter [panel.transflator.com](https://panel.transflator.com) ist der Ort, an dem Sie das Konto erstellen, mit dem Sie sich in der Desktop-App anmelden. Es handelt sich um eine Flutter-Webanwendung, die auf Firebase basiert.

## Registrierung

1. Öffnen Sie [panel.transflator.com](https://panel.transflator.com).
2. Klicken Sie auf **Registrieren** (Sign up).
3. Geben Sie Ihre E-Mail-Adresse und ein starkes Passwort ein.
4. Klicken Sie auf **Konto erstellen**.

Ihr Konto wird in Firebase Auth erstellt und ein entsprechendes Dokument wird in der Firestore-Sammlung `users` mit Ihrem Start-KI-Guthaben und einem generierten API-Token angelegt.

## Verifizieren Sie Ihre E-Mail-Adresse

Unmittelbar nach der Registrierung wird eine transaktionale E-Mail an die von Ihnen registrierte Adresse gesendet, die einen Ein-Klick-Verifizierungslink enthält. Der Link ist **48 Stunden** lang gültig. Bevor Sie ihn nicht angeklickt haben, können Sie kein Guthaben aufladen oder Übersetzungen durchführen, die Guthaben kosten.

Haben Sie keine E-Mail erhalten? Überprüfen Sie zuerst Ihren Spam-Ordner und klicken Sie dann im Panel auf **Verifizierung erneut senden**.

## Startguthaben

Neue Konten werden mit einem kostenlosen Start-KI-Guthaben ausgestattet, damit Sie das Produkt ohne Bezahlung testen können. Der Betrag und der Erneuerungsrhythmus werden auf dem Dashboard angezeigt. Für den Testzeitraum sind keine kostenpflichtigen Pläne erforderlich.

## Passwort zurücksetzen

Wenn Sie Ihr Passwort vergessen haben, klicken Sie auf dem Anmeldebildschirm auf **Passwort vergessen**. Eine E-Mail zum Zurücksetzen wird über denselben transaktionalen Kanal gesendet, mit einem Link, der 1 Stunde lang gültig ist.

:::note[TODO]
Screenshots des Registrierungsbildschirms, der Verifizierungs-E-Mail und des Dashboards nach dem ersten Login. Hinweis zum Zeichenlimit in der kostenlosen Stufe.
:::
