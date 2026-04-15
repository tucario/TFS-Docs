---
title: Grille de traduction
description: L'éditeur haute densité au cœur de l'application — filtres, recherche, édition en ligne, raccourcis clavier.
---

La grille de traduction est une vue de type tableur de chaque élément traduisible de votre organisation. Elle est conçue pour gérer des dizaines de milliers de lignes tout en restant réactive.

## Colonnes

- **Type** — champ personnalisé, liste de sélection, mise en page, règle de validation…
- **Key** — la clé de métadonnées Salesforce (lecture seule)
- **Source** — votre chaîne de caractères dans la langue par défaut
- **Target** — la chaîne de caractères pour la langue actuellement sélectionnée, modifiable

## Filtres

La barre latérale des filtres sur la gauche vous permet d'affiner par type, objet, langue et "traductions manquantes uniquement". Les filtres se cumulent — vous pouvez demander les *"étiquettes de champs personnalisés sur l'objet Account, avec les traductions italiennes manquantes"* en trois clics.

## Recherche

La boîte de recherche en haut permet une correspondance de sous-chaîne et est en direct. Elle effectue la recherche à la fois dans la source et la cible.

## Raccourcis clavier

| Raccourci | Action |
| --- | --- |
| `↑` / `↓` | Se déplacer entre les lignes |
| `Enter` | Modifier la ligne actuelle |
| `Esc` | Annuler la modification non sauvegardée |
| `⌘/Ctrl + S` | Sauvegarder l'espace de travail actuel |
| `⌘/Ctrl + F` | Mettre le focus sur la recherche |
| `⌘/Ctrl + Shift + A` | Sélectionner toutes les lignes visibles |
| `⌘/Ctrl + D` | Marquer la ligne comme "terminée" (révisée) |

![La grille de traduction TranSFlator avec la barre latérale des objets, la recherche et les colonnes source/cible.](../../../../assets/screenshots/04-translations-table.png)

La barre latérale gauche regroupe chaque élément traduisible par objet Salesforce (Compte, Requête, Contact, …) avec un décompte en temps réel pour que vous sachiez toujours combien il en reste.
