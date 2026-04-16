---
title: Registrierung & Anmeldung
description: Erstellen Sie ein TranSFlator-Konto im Web-Panel, verifizieren Sie Ihre E-Mail-Adresse und melden Sie sich aus der Desktop-App an.
---

Das Account-Panel unter
[panel.transflator.com](https://panel.transflator.com) ist der Ort,
an dem Sie das Konto erstellen, gegen das sich die Desktop-App
anmeldet. Es handelt sich um eine Flutter-Web-Anwendung, die auf
Firebase Auth, Firestore und einem einzigen Cloud-Functions-Endpunkt
basiert.

## Anmeldung

![Der Anmeldebildschirm des TranSFlator-Panels — links ein Tukan-Maskottchen, rechts Felder für E-Mail-Adresse und Passwort, das Google-reCAPTCHA-Badge sowie eine Schaltfläche „Sign in" mit Links zum Erstellen eines Kontos oder zum Zurücksetzen des Passworts.](../../../../assets/screenshots/panel/sign-in.png)

Wiederkehrende Nutzer landen auf dem Anmeldebildschirm unter
[panel.transflator.com](https://panel.transflator.com).

1. Geben Sie Ihre E-Mail-Adresse und Ihr Passwort ein.
2. Lösen Sie die reCAPTCHA-Abfrage, falls Sie dazu aufgefordert werden.
3. Klicken Sie auf **Sign in**.

Das Formular sendet an `POST /auth/login`, das Firebase Auth
als Proxy aufruft und Ihren benutzerspezifischen API-Token
zurückgibt. Genau denselben Token erhält die Desktop-App, wenn
Sie sich dort anmelden.

Die Links unter dem Formular decken die zwei üblichen Umwege ab:

- **Create account** — führt Sie zum unten beschriebenen
  Registrierungsablauf.
- **Forgot password?** — sendet eine E-Mail zum Zurücksetzen
  über unsere Transaktionspipeline. Der Reset-Link ist 1 Stunde
  lang gültig.

## Registrierung

Wenn Sie noch kein Konto haben, klicken Sie auf dem
Anmeldebildschirm auf **Create account**.

1. Geben Sie Ihre E-Mail-Adresse und ein sicheres Passwort ein.
2. Lösen Sie die reCAPTCHA-Abfrage.
3. Klicken Sie auf **Create account**.

Das Backend erstellt einen Firebase-Auth-Benutzer sowie ein
entsprechendes Dokument in der Firestore-Sammlung `users`, das
mit Ihrem Start-Guthaben für KI-Zeichen und einem frisch
generierten API-Token vorbefüllt wird.

## E-Mail-Adresse verifizieren

!["E-Mail verifizieren"-Bildschirm — Tukan-Maskottchen, maskierte E-Mail-Adresse, Erklärungstext, eine Schaltfläche „Resend verification email" und ein Link „Sign out".](../../../../assets/screenshots/panel/verify-email.png)

Unmittelbar nach der Registrierung landet eine
Transaktions-E-Mail in Ihrem Postfach, die einen
Ein-Klick-Verifizierungslink enthält. Der Link ist **48 Stunden**
lang gültig. Solange Sie ihn nicht anklicken, können Sie weder
Guthaben aufladen noch Übersetzungen ausführen, die Guthaben
kosten.

Das Panel blockiert die restliche Oberfläche hinter einem
„Verify your email"-Bildschirm, der Folgendes anzeigt:

- An welche Adresse wir den Link gesendet haben.
- Eine Schaltfläche **Resend verification email** — nützlich,
  wenn die erste E-Mail verloren ging oder der Link abgelaufen ist.
- Einen Link **Sign out**, falls Sie ein anderes Konto
  ausprobieren möchten.

**Keine E-Mail erhalten?** Überprüfen Sie zuerst Ihren
Spam-Ordner und verwenden Sie dann **Resend verification email**.
Wenn die Adresse selbst falsch geschrieben wurde, melden Sie sich
ab, lassen Sie das Konto durch den Support löschen und
registrieren Sie sich erneut — es gibt keine
Selbstbedienungsmöglichkeit, die E-Mail-Adresse vor der
Verifizierung zu ändern.

## Start-Guthaben

Neue Konten werden mit einem kostenlosen Startguthaben
ausgestattet, damit Sie das Produkt testen können, ohne zu
bezahlen. Der Betrag und der 30-tägige Erneuerungszyklus werden
auf dem Dashboard angezeigt. Der kostenlose Plan deckt kleine
Organisationen, schnelle POCs und Evaluierungen ab; für größere
Aufgaben ist ein Guthaben-Top-up erforderlich (siehe
[Guthaben kaufen](/account-panel/buying-credits/)).

## Passwort zurücksetzen

Wenn Sie Ihr Passwort vergessen haben, klicken Sie auf dem
Anmeldebildschirm auf **Forgot password?**. Eine E-Mail zum
Zurücksetzen geht über dieselbe Transaktionspipeline hinaus,
mit einem Link, der **1 Stunde** lang gültig ist. Der Link
öffnet einen Panel-Bildschirm, auf dem Sie ein neues Passwort
festlegen; nach dem Speichern werden Sie zum Anmeldeformular
zurückgeführt.
