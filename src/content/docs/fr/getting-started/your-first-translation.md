---
title: Votre première traduction
description: Traduisez quelques champs personnalisés de bout en bout, du scan au déploiement, en moins de dix minutes.
---

À la fin de cette page, vous aurez :

1. Scanné une organisation sandbox (bac à sable)
2. Filtré quelques champs personnalisés
3. Traduit par lots avec l'IA vers une langue cible
4. Déployé le résultat vers Salesforce

Temps total : moins de dix minutes. Coût : quelques centaines de caractères de crédit d'IA.

## 1. Choisissez une cible sûre

Faites-le d'abord sur un **sandbox**, jamais directement sur la production. Les déploiements de TranSFlator sont atomiques et peuvent être annulés, mais la confiance est moins coûteuse que le regret.

Ouvrez la connexion sandbox que vous avez créée dans [Connectez votre organisation Salesforce](/fr/getting-started/connect-your-org/).

## 2. Scan

L'application scanne votre organisation à la première ouverture. Selon la taille de l'organisation, cela prend entre 10 secondes et quelques minutes. Vous verrez la grille de traduction se remplir de chaque élément traduisible : champs personnalisés, valeurs de listes de sélection, types d'enregistrement, texte d'aide, mises en page, liens Web, règles de validation, étiquettes personnalisées.

## 3. Affinez

Cliquez sur l'icône de **Filtre** et choisissez **Custom Field → Label** pour limiter la grille aux seules étiquettes de champs personnalisés. Cochez la case dans la colonne **Missing** pour afficher uniquement les lignes qui n'ont pas encore été traduites. Vous devriez n'avoir plus que quelques lignes.

## 4. Choisissez une langue cible

Cliquez sur le sélecteur de langue en haut et choisissez une langue pour laquelle vous n'avez pas encore de traductions (ex: **Polonais**). La grille affiche maintenant la source à gauche et la colonne cible à droite, vide.

![Le sélecteur de langue cible affichant tous les locales activés avec sa barre de couverture.](../../../../assets/screenshots/03-select-target-language.png)

Chaque ligne indique combien d'entrées traduisibles sont déjà couvertes dans cette langue — un moyen rapide de repérer les locales qui nécessitent une attention particulière.

## 5. Traduire

Cliquez sur **AI all** dans la barre supérieure. Une boîte de dialogue apparaît demandant quel moteur d'IA utiliser — choisissez-en un. Consultez l'[Aperçu des moteurs](/fr/ai-engines/overview/) si vous n'êtes pas sûr.

L'application envoie chaque ligne au backend de TranSFlator, qui route la demande vers le moteur que vous avez choisi. Les résultats s'affichent dans la grille au fur et à mesure qu'ils arrivent. Vous pouvez modifier n'importe quelle ligne à la main — la suggestion de l'IA devient un point de départ, pas une réponse finale.

## 6. Déployer

Cliquez sur **Deploy**. L'application prépare les modifications dans un déploiement de métadonnées, signe la demande avec le jeton d'accès de votre connexion et la pousse vers l'API Metadata de Salesforce. Vous verrez une boîte de dialogue de progression, puis soit :

- **Succès** — les modifications sont en ligne dans votre sandbox.
- **Échec partiel** — l'application vous montre exactement quels composants ont été rejetés et pourquoi. La plupart du temps, il s'agit d'un champ d'un paquet géré (managed package) que Salesforce n'autorise personne à modifier ; l'application les signale et les ignore lors de la nouvelle tentative.

## 7. Vérifier

Ouvrez votre sandbox dans un navigateur, basculez la langue de l'interface utilisateur vers celle que vous venez de traduire, et vérifiez que les champs personnalisés s'affichent comme prévu.

## Suivant

Prêt à aller plus loin ? Lisez [Traduction par lots avec l'IA](/fr/desktop-app/batch-ai-translate/) pour connaître l'ensemble des capacités.
