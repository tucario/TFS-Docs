---
title: Traduction par lots avec l'IA
description: Traduisez des centaines ou des milliers de lignes en une seule fois. Choisissez un moteur, choisissez une région, suivez la progression, gérez les échecs.
---

La traduction par lots avec l'IA est la fonctionnalité qui rend l'installation de TranSFlator indispensable. Sélectionnez les lignes, cliquez sur **AI all**, choisissez un moteur, et l'application diffuse les traductions du fournisseur d'IA directement dans la grille au fur et à mesure qu'elles arrivent.

## Lancer un lot

1. Filtrez et recherchez dans la grille jusqu'à ce que seules les lignes que vous souhaitez traduire soient visibles.
2. Cliquez sur **Select all visible** (⌘/Ctrl + Shift + A).
3. Cliquez sur **AI all** dans la barre d'outils.
4. Choisissez un moteur et une région.
5. Confirmez.

## Sélection du moteur

Le sélecteur affiche tous les moteurs activés sur votre compte et le coût estimé pour les lignes sélectionnées. Consultez l'[Aperçu des moteurs](/fr/ai-engines/overview/) pour la comparaison.

## Sélection de la région

L'endroit géographique où la demande de traduction est traitée. Pertinent pour les exigences de résidence des données — certains fournisseurs d'IA vous permettent de choisir entre les États-Unis, l'Europe, l'Asie et l'Australie. TranSFlator transmet votre choix de région au backend, qui à son tour route la demande vers le bon point de terminaison du fournisseur.

## Progression en direct

Une bannière en bas affiche les lignes terminées / total, le taux actuel et le temps restant estimé. Vous pouvez annuler en cours de lot — les lignes déjà reçues sont conservées dans la grille (pas encore sauvegardées dans l'espace de travail ; sauvegardez avec ⌘/Ctrl + S).

## Échecs

Si le fournisseur d'IA rejette une ligne spécifique (trop longue, caractères non pris en charge, blocage par politique de contenu), cette ligne reste vide et l'erreur est enregistrée dans la barre latérale. Les lignes ayant échoué peuvent être réessayées individuellement ou ignorées entièrement.

## Modèle de coût

Chaque lot consomme des crédits d'IA de votre solde de compte. Les crédits sont consommés par caractère de la chaîne **source**, et non par ligne — une étiquette de champ de 10 caractères coûte 10 crédits quel que soit le moteur utilisé. Consultez [Crédits d'IA](/fr/account-panel/ai-credits/) pour le modèle de tarification complet.

![Une traduction par lots en cours vers le portugais brésilien — 100 lignes sur 273 terminées, 37 % effectuées.](../../../../assets/screenshots/05-translating-progress.png)

La barre de progression en haut de la grille est en direct : les lignes se remplissent à mesure que l'IA répond, et **Stop** annule les demandes restantes sans perdre les lignes déjà reçues.
