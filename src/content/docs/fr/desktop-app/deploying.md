---
title: Déploiement vers Salesforce
description: Poussez les traductions vers votre organisation Salesforce via l'API Metadata. Atomique avec retour en arrière, rapports d'erreur au niveau du composant.
---

Le déploiement prend les lignes traduites de votre grille et les pousse vers Salesforce en utilisant l'API Metadata. C'est la dernière étape du flux de travail normal.

## Ce qui est déployé

Seules les lignes qui sont (a) non vides dans la colonne de langue cible, et (b) modifiées depuis le dernier déploiement réussi pour cette connexion. Les lignes non modifiées sont ignorées. Les lignes que vous n'avez pas touchées restent inchangées.

## Atomique avec retour en arrière (rollback)

Les déploiements sont soumis comme une seule transaction d'API Metadata. Si un composant échoue à la validation du côté de Salesforce, l'**intégralité du déploiement est annulée** et vous voyez une boîte de dialogue listant chaque composant ayant échoué et pourquoi. Votre organisation n'est jamais laissée dans un état partiellement appliqué.

![La boîte de dialogue de déploiement pendant que TranSFlator pousse 273 traductions modifiées vers l'organisation DQS Playground.](../../../../assets/screenshots/06-deploying-to-salesforce.png)

## Erreurs au niveau du composant

La vue des erreurs affiche :

- La clé de métadonnées Salesforce ayant échoué (ex: `Account.Industry__c.Label.fr`)
- Le message d'erreur textuel de Salesforce
- Un bouton **Skip and retry** qui exclut la ligne défaillante et tente de nouveau le déploiement

## Paquets gérés (Managed packages)

Salesforce ne permet pas de modifier les métadonnées des champs appartenant à un paquet géré que vous n'avez pas construit vous-même. TranSFlator détecte ceux-ci lors du scan et les marque en lecture seule dans la grille, afin que vous ne perdiez pas de temps à essayer de traduire quelque chose qui ne sera jamais déployé.

## Journal (Log)

Chaque déploiement est enregistré dans la table locale `deployment_log` avec l'horodatage, la connexion, le nombre de composants et l'état final. Rien n'est envoyé à notre backend.

Lorsque le déploiement se termine, vous obtenez un résumé montrant combien de composants ont été réellement appliqués et combien ont été ignorés parce que l'API de Salesforce refuse de les toucher (par exemple les listes de sélection standard dont les valeurs appartiennent à la plateforme) :

![Le résumé "Déploiement terminé" avec 243 traductions déployées et 30 listes de sélection standard ignorées.](../../../../assets/screenshots/07-deploy-complete.png)

Les entrées ignorées peuvent être exportées via **Generate STF** et importées avec le Salesforce Translation Workbench, qui est le seul outil autorisé à toucher à ces enregistrements.
