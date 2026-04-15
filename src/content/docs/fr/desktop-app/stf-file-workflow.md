---
title: Flux de travail par fichier STF
description: Importez et exportez des fichiers STF bilingues Salesforce pour le flux classique du Translation Workbench.
---

Certaines organisations verrouillent l'API Metadata. Certains clients consultants souhaitent réviser les traductions hors ligne dans Excel. Dans ces deux cas, TranSFlator prend en charge le format classique **Salesforce Bilingual STF** : importez un fichier STF, modifiez-le dans la grille, exportez-en un nouveau.

## Importer un STF

1. Dans la barre latérale des connexions, cliquez sur **Import STF file**.
2. Choisissez le fichier `.stf` exporté depuis l'écran **Configuration → Translation Workbench** (Système de traduction) dans Salesforce.
3. Donnez-lui une étiquette.

Une "pseudo connexion" apparaît avec une icône de document au lieu d'une icône de nuage — indiquant que cette connexion n'a pas de jeton d'actualisation et ne peut pas être déployée directement. Vous pouvez traduire les lignes normalement.

## Exporter un STF

Avec une connexion STF sélectionnée, cliquez sur **Export STF file** dans la barre d'outils. Vous récupérez un fichier compatible avec le flux d'importation du Translation Workbench de Salesforce : même en-tête `Bilingual`, même ordre des lignes, mêmes séparateurs de tabulations.

## Quand utiliser ceci au lieu du déploiement direct

- Votre administrateur a désactivé l'API Metadata pour votre profil.
- Vous souhaitez qu'un réviseur humain signe les traductions dans Excel avant de toucher à Salesforce.
- Vous êtes consultant et votre client souhaite le fichier final pour son propre journal d'audit.

## Ce qui n'est pas préservé

Les fichiers STF ne contiennent que des chaînes de caractères. Tout ce qui n'est pas une chaîne et que TranSFlator peut normalement toucher (noms de mises en page, disponibilité des types d'enregistrement, etc.) ne peut pas être exporté de cette manière. Pour l'ensemble complet des fonctionnalités, utilisez une connexion réelle.

:::note[À FAIRE]
Capture d'écran de la boîte de dialogue d'importation STF, capture d'écran de la pseudo connexion dans la barre latérale, exemple de fichier `.stf` avec quelques lignes.
:::
