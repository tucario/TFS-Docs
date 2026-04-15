---
title: Échecs de déploiement
description: Comment lire les boîtes de dialogue d'échec de déploiement, quelles en sont les causes courantes et que faire lorsqu'un déploiement est annulé.
---

Lorsqu'un déploiement échoue, TranSFlator annule l'intégralité de l'opération (consultez [Déploiement vers Salesforce](/fr/desktop-app/deploying/)) et affiche une boîte de dialogue avec chaque composant en échec. Le texte textuel provient de Salesforce — nous ne l'éditorialisons pas. Cette page est le guide des messages d'erreur les plus courants.

## "INVALID_CROSS_REFERENCE_KEY"

La cible de la traduction n'existe plus dans l'organisation (ex: un champ personnalisé qui a été supprimé depuis le dernier scan).

**Correction :** re-scannez l'organisation avec **Refresh metadata** et réessayez. La ligne obsolète disparaîtra de la grille.

## "Managed package component cannot be modified"

Vous avez essayé de traduire un champ appartenant à un paquet géré (managed package), et Salesforce ne le permet pas, même pour les utilisateurs administrateurs.

**Correction :** TranSFlator aurait dû marquer ces champs en lecture seule avant que vous n'en arriviez là. Si vous voyez cela en plein déploiement, cela signifie que le scan n'a pas détecté l'indicateur de paquet géré — cliquez sur **Skip and retry** pour exclure le composant et continuer. Faites-le nous savoir si cela se répète : c'est un bug de notre côté.

## "Required field missing"

Salesforce s'attendait à ce que le fichier de traduction inclue un champ que la grille n'a pas envoyé. Cela arrive lorsque vous traduisez partiellement un type d'enregistrement (Record Type) et que vous oubliez les valeurs de liste de sélection.

**Correction :** ouvrez le type d'enregistrement dans la grille, complétez les lignes manquantes et réessayez.

## "Insufficient access rights on cross-reference id"

Votre utilisateur connecté n'a pas la permission de modifier l'objet auquel appartient cette traduction.

**Correction :** soit vous définissez les ensembles de permissions pour votre utilisateur, soit vous vous authentifiez avec un utilisateur qui a l'accès. Le plus sûr : créez un utilisateur "admin de traduction" dédié avec des permissions sur chaque objet que vous souhaitez traduire.

## Tout le reste

Copiez le texte exact de l'erreur depuis la boîte de dialogue et collez-le à [hello@tucario.com](mailto:hello@tucario.com). Incluez le `componentType` Salesforce, la clé de métadonnées et la ligne mentionnée par l'erreur. Nous vous dirons comment corriger le problème ou nous ajouterons le cas à cette page.

:::note[À FAIRE]
Commencer un tableau des codes d'erreur spécifiques avec des liens vers la documentation Salesforce. Script qui exporte le journal de déploiement vers un fichier texte partageable pour le support.
:::
