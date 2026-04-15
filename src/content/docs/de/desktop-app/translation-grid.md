---
title: Übersetzungs-Grid
description: Der hochverdichtete Editor im Herzen der App — Filter, Suche, Inline-Bearbeitung, Tastaturkürzel.
---

Das Übersetzungs-Grid ist eine Tabellenansicht auf Spreadsheet-Niveau für jedes übersetzbare Element in Ihrer Org. Es ist so konzipiert, dass es auf Zehntausende von Zeilen skaliert und dabei reaktionsschnell bleibt.

## Spalten

- **Typ** — benutzerdefiniertes Feld, Pickliste, Layout, Validierungsregel…
- **Schlüssel** — der Salesforce-Metadatenschlüssel (schreibgeschützt)
- **Quelle** — Ihr String in der Standardsprache
- **Ziel** — der String für die aktuell ausgewählte Sprache, bearbeitbar

## Filter

Die Filter-Seitenleiste auf der linken Seite ermöglicht es Ihnen, nach Typ, Objekt, Sprache und "nur fehlende Übersetzungen" einzugrenzen. Filter sind kombinierbar — Sie können in drei Klicks nach *"benutzerdefinierten Feldbezeichnungen auf dem Account-Objekt, fehlende italienische Übersetzungen"* suchen.

## Suche

Das Suchfeld oben bietet einen Substring-Abgleich und ist live. Es durchsucht sowohl Quelle als auch Ziel.

## Tastaturkürzel

| Tastenkürzel | Aktion |
| --- | --- |
| `↑` / `↓` | Zwischen Zeilen bewegen |
| `Enter` | Aktuelle Zeile bearbeiten |
| `Esc` | Ungespeicherte Bearbeitung verwerfen |
| `⌘/Strg + S` | Aktuellen Workspace speichern |
| `⌘/Strg + F` | Suche fokussieren |
| `⌘/Strg + Umschalt + A` | Alle sichtbaren Zeilen auswählen |
| `⌘/Strg + D` | Zeile als "erledigt" markieren (überprüft) |

![Das TranSFlator Übersetzungs-Grid mit der Objekt-Seitenleiste, Suche sowie Quell- und Zielspalten.](../../../../assets/screenshots/04-translations-table.png)

Die linke Seitenleiste gruppiert jedes übersetzbare Element nach Salesforce-Objekt (Account, Case, Contact, …) mit einer laufenden Zählung, damit Sie immer wissen, wie viel noch übrig ist.
