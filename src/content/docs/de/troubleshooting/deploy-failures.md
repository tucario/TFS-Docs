---
title: Bereitstellungsfehler
description: So lesen Sie Dialogfelder für Bereitstellungsfehler, was die häufigsten Ursachen sind und was zu tun ist, wenn eine Bereitstellung rückgängig gemacht wird.
---

Wenn eine Bereitstellung fehlschlägt, macht TranSFlator den gesamten Vorgang rückgängig (siehe [Bereitstellung in Salesforce](/de/desktop-app/deploying/)) und zeigt Ihnen ein Dialogfeld mit allen fehlerhaften Komponenten an. Der wortwörtliche Text stammt von Salesforce – wir bearbeiten ihn nicht. Diese Seite ist der Leitfaden für die häufigsten Fehlermeldungen.

## „INVALID_CROSS_REFERENCE_KEY“

Das Ziel der Übersetzung existiert in der Organisation nicht mehr (z. B. ein benutzerdefiniertes Feld, das seit dem letzten Scan gelöscht wurde).

**Behebung:** Scannen Sie die Organisation erneut mit **Refresh metadata** und versuchen Sie es noch einmal. Die veraltete Zeile verschwindet aus dem Gitter.

## „Managed package component cannot be modified“

Sie haben versucht, ein Feld zu übersetzen, das zu einem verwalteten Paket gehört, und Salesforce lässt dies selbst für Administratorbenutzer nicht zu.

**Behebung:** TranSFlator sollte diese bereits vor diesem Punkt als schreibgeschützt markiert haben. Wenn Sie diesen Fehler während der Bereitstellung sehen, bedeutet dies, dass der Scan die Kennzeichnung für verwaltete Pakete nicht erfasst hat – klicken Sie auf **Skip and retry**, um die Komponente auszuschließen und fortzufahren. Lassen Sie es uns wissen, wenn sich dies wiederholt: Es handelt sich um einen Fehler unsererseits.

## „Required field missing“

Salesforce hat erwartet, dass die Übersetzungsdatei ein Feld enthält, das das Gitter nicht gesendet hat. Dies passiert, wenn Sie einen Datensatztyp teilweise übersetzen und die Auswahllistenwerte weglassen.

**Behebung:** Öffnen Sie den Datensatztyp im Gitter, vervollständigen Sie die fehlenden Zeilen und versuchen Sie es erneut.

## „Insufficient access rights on cross-reference id“

Ihr verbundener Benutzer hat nicht die Berechtigung, das Objekt zu ändern, zu dem diese Übersetzung gehört.

**Behebung:** Weisen Sie Ihrem Benutzer entweder einen Berechtigungssatz (Permission Set) zu oder authentifizieren Sie sich mit einem Benutzer, der den Zugriff hat. Der sicherste Schritt: Erstellen Sie einen dedizierten „Übersetzungs-Admin“-Benutzer mit Berechtigungen für jedes Objekt, das Sie übersetzen möchten.

## Alles andere

Kopieren Sie den genauen Fehlertext aus dem Dialogfeld und fügen Sie ihn in eine E-Mail an [hello@tucario.com](mailto:hello@tucario.com) ein. Geben Sie den Salesforce-`componentType`, den Metadaten-Schlüssel und die Zeile an, die der Fehler erwähnt. Wir werden Ihnen entweder sagen, wie Sie den Fehler beheben können, oder den Fall dieser Seite hinzufügen.

:::note[TODO]
Erstellen einer Tabelle mit spezifischen Fehlercodes und Links zur Salesforce-Dokumentation. Skript zum Exportieren des Bereitstellungsprotokolls in eine gemeinsam nutzbare Textdatei für den Support.
:::
