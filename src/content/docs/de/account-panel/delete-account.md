---
title: Konto löschen
description: So löschen Sie dauerhaft Ihr Transflator-Konto und alle Daten, die wir über Sie gespeichert haben. Deckt DSGVO Art. 17 (Recht auf Löschung) ab.
---

Sie können Ihr Transflator-Konto jederzeit löschen. Die Löschung ist unwiderruflich, wirkt sich auf alle Daten aus, die wir über Sie speichern, und wird innerhalb von 30 Tagen abgeschlossen.

## Self-Service-Löschung

1. Melden Sie sich bei [panel.transflator.com](https://panel.transflator.com) an.
2. Gehen Sie zu **Einstellungen → Konto**.
3. Klicken Sie auf **Mein Konto löschen**.
4. Bestätigen Sie, indem Sie Ihre E-Mail-Adresse erneut eingeben.
5. Klicken Sie auf **Dauerhaft löschen**.

## Was als Nächstes passiert

Eine Cloud-Funktion wird ausgelöst und in einer einzigen Transaktion:

- Löscht Ihr Dokument aus der Sammlung `users`.
- Löscht jede Zeile in der Sammlung `purchases`, in der `uid == your_uid` ist.
- Löscht jede Zeile in der Sammlung `translations`, in der `user_id == your_uid` ist.
- Löscht Ihren Firebase Auth-Datensatz und macht alle aktiven Sitzungen ungültig.
- Schreibt einen Audit-Log-Eintrag mit dem Zeitstempel der Löschung und dem Benutzer-Hash.

Ihr API-Token wird sofort ungültig. Falls die Desktop-App gerade läuft, wird ihr nächster Aufruf mit `401 Unauthorized` fehlschlagen.

## Was bleibt gespeichert?

Zwei Dinge bleiben nach der Kontolöschung aus Gründen gespeichert, die außerhalb unserer Kontrolle liegen:

- **Stripe-Kaufbelege** — Stripe bewahrt Zahlungsbelege aus eigenen PCI- und finanzregulatorischen Gründen auf. Bei Bedarf können Sie die Löschung direkt bei Stripe beantragen.
- **Abrechnungsdaten gemäß polnischem Buchhaltungsgesetz** — für Ihr Konto ausgestellte Rechnungen werden gemäß Art. 74 des polnischen Buchhaltungsgesetzes (Ustawa o rachunkowości) 5 Jahre lang aufbewahrt. Diese enthalten Ihren Namen und Ihre Zahlungsdetails, aber nichts über Ihre Übersetzungsarbeit.

## DSGVO Artikel 20 — Datenexport

Wenn Sie **vor** der Löschung eine maschinenlesbare Kopie Ihrer Daten erhalten möchten, senden Sie eine E-Mail an [hello@tucario.com](mailto:hello@tucario.com), und wir werden Ihnen innerhalb von 30 Tagen einen JSON-Export zusenden. Eine Schaltfläche für den Self-Service-Export ist für den Profilbildschirm geplant.

:::note[TODO]
Screenshot des Löschdialogs. Link zur Datenschutzerklärung, sobald diese unter transflator.com/privacy veröffentlicht wurde.
:::
