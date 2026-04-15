---
title: STF-Datei-Workflow
description: Importieren und Exportieren von zweisprachigen Salesforce-STF-Dateien für den klassischen Translation-Workbench-Workflow.
---

Einige Orgs beschränken den Zugriff auf die Metadaten-API. Einige Consulting-Kunden möchten Übersetzungen offline in Excel überprüfen. Für beide Fälle unterstützt TranSFlator das klassische **zweisprachige Salesforce-STF**-Dateiformat: importieren Sie eine STF-Datei, bearbeiten Sie sie im Grid und exportieren Sie eine neue Datei.

## Importieren einer STF-Datei

1. Klicken Sie in der Verbindungs-Seitenleiste auf **STF-Datei importieren**.
2. Wählen Sie die `.stf`-Datei aus, die Sie aus Salesforce über **Setup → Übersetzungs-Workbench** exportiert haben.
3. Vergeben Sie eine Bezeichnung.

Eine "Pseudo-Verbindung" erscheint mit einem Dokument-Icon anstelle eines Cloud-Icons — dies zeigt an, dass diese Verbindung keinen Refresh-Token hat und nicht direkt bereitgestellt werden kann. Sie können die Zeilen wie gewohnt übersetzen.

## Exportieren einer STF-Datei

Wenn eine STF-Verbindung ausgewählt ist, klicken Sie in der Symbolleiste auf **STF-Datei exportieren**. Sie erhalten eine Datei zurück, die mit dem Import-Flow der Salesforce-Übersetzungs-Workbench kompatibel ist: gleicher `Bilingual`-Header, gleiche Zeilenreihenfolge, gleiche Tab-Trennungen.

## Wann Sie dies anstelle der direkten Bereitstellung verwenden sollten

- Ihr Administrator hat die Metadaten-API für Ihr Profil deaktiviert.
- Sie möchten, dass ein menschlicher Prüfer die Übersetzungen in Excel freigibt, bevor Sie Änderungen in Salesforce vornehmen.
- Sie sind Berater und Ihr Kunde wünscht die endgültige Datei für seine eigenen Revisionszwecke.

## Was nicht beibehalten wird

STF-Dateien enthalten nur Zeichenfolgen. Alles, was keine Zeichenfolge ist und worauf TranSFlator normalerweise zugreifen kann (Layoutnamen, Verfügbarkeit von Datensatztypen usw.), kann auf diese Weise nicht exportiert werden. Verwenden Sie für den vollen Funktionsumfang eine echte Verbindung.

:::note[TODO]
Screenshot des STF-Importdialogs, Screenshot der Pseudo-Verbindung in der Seitenleiste, Beispiel-`.stf`-Datei mit einigen Zeilen.
:::
