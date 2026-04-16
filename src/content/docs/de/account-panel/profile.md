---
title: Profil
description: Ihre Kontodaten, bevorzugte KI-Engine, Passwort- und E-Mail-Änderungen sowie der Einstiegspunkt zum Löschen des Kontos.
---

Der Bildschirm **Profile** ist der letzte Eintrag in der
Seitenleiste des Panels. Alles, was nicht zur Abrechnung oder zum
Übersetzungsverlauf gehört, ist hier zu finden.

![Der Profile-Bildschirm — ein Kontoheader mit der E-Mail-Adresse des Benutzers, dem Mitgliedschaftsdatum und einem „Verified"-Badge, eine Karte „Preferred AI Engine" mit Mistral AI (Europe) und einer Schaltfläche „Change AI Engine", eine Security-Karte mit Zeilen für Passwort und E-Mail-Adresse, jeweils mit einer Change-Schaltfläche, und eine rote „Danger Zone"-Karte mit einer Zeile „Delete account" und einer Delete-Schaltfläche.](../../../../assets/screenshots/panel/profile.png)

## Konto-Header

Zeigt Ihre Anmelde-E-Mail-Adresse (in Screenshots maskiert), Ihr
Mitgliedschaftsdatum und ein **Verified**-Badge an, sobald Sie
die E-Mail-Adresse bestätigt haben. Fehlt das Badge, kehren Sie
zurück und schließen Sie die
[E-Mail-Verifizierung](/account-panel/sign-up/#verify-your-email)
ab.

## Bevorzugte KI-Engine

Eine Zusammenfassung der aktuell als Standard eingestellten
Engine, mit einer Schaltfläche **Change AI Engine**. Ein Klick
darauf öffnet denselben Engine-Picker, den Sie während des
Onboardings gesehen haben (siehe
[Dashboard — Onboarding beim ersten Start](/account-panel/dashboard/#first-run-onboarding)).

Eine Änderung der Engine hier aktualisiert das Feld
`preferred_ai_model` in Ihrem Benutzerdokument; neue
Übersetzungen (Panel, Desktop, API ohne explizites `engine`)
übernehmen sie sofort.

## Sicherheit

Zwei eigenständige Aktionen:

- **Password — Change** — öffnet einen Dialog, der erneut Ihr
  aktuelles Passwort abfragt und dann das neue zweimal
  entgegennimmt. Die Aktualisierung erfolgt atomar in Firebase
  Auth; es werden keine anderen Sitzungen abgemeldet. Wenn Sie
  also wegen eines vermuteten Lecks gewechselt haben, rotieren
  Sie auch Ihren [API-Token](/account-panel/api-token/).
- **Email address — Change** — sendet einen
  Verifizierungslink an die neue Adresse. Die Änderung wird erst
  wirksam, wenn Sie auf diesen Link klicken; bis dahin
  funktioniert die Anmeldung weiterhin mit der alten Adresse.

## Danger Zone

Eine rot umrandete Karte am unteren Rand des Bildschirms. Die
einzige Aktion ist **Delete account**, und sie ist bewusst
abgesetzt, damit sie nicht versehentlich angeklickt werden kann.
Ein Klick auf **Delete** startet die in
[Konto löschen](/account-panel/delete-account/) beschriebene
Kaskade.

Die Löschung ist **unwiderruflich** und entfernt Ihr
Benutzerdokument, Ihre Kaufhistorie, Ihren Übersetzungsverlauf
sowie den Firebase-Auth-Datensatz. Lesen Sie die verlinkte Seite,
bevor Sie klicken.
