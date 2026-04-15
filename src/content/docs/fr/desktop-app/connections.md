---
title: Connexions
description: Gestion des connexions aux organisations Salesforce dans l'application de bureau — ajouter, renommer, tester, supprimer.
---

Une **connexion** dans TranSFlator représente une organisation Salesforce auprès de laquelle vous vous êtes authentifié. Chaque connexion est une ligne dans la barre latérale de l'application avec son propre jeton d'actualisation crypté, une étiquette et un horodatage du dernier test.

Vous pouvez ajouter autant de connexions que vous le souhaitez — production, multiples bacs à sable (sandboxes), organisations scratch, organisations clients si vous êtes consultant. L'application les garde côte à côte et passer de l'une à l'autre se fait en un clic.

## Ajouter, renommer, supprimer

Consultez [Connectez votre organisation Salesforce](/fr/getting-started/connect-your-org/) pour le flux d'ajout. Pour renommer, faites un clic droit sur la connexion dans la barre latérale → **Rename**. Pour supprimer, clic droit → **Delete**. La suppression d'une connexion efface immédiatement le jeton d'actualisation crypté de `transflate.db` ; Salesforce n'est pas informé, donc le jeton d'actualisation restera valide du côté de Salesforce jusqu'à ce que vous le révoquiez manuellement dans **Configuration → Utilisation de l'OAuth des applications connectées**.

## Tester la connexion

Le petit point à côté de chaque connexion indique son état :

- **Vert** — le dernier test a réussi, le jeton est valide.
- **Ambre** — non testé cette session, peut être obsolète.
- **Rouge** — le dernier test a échoué. Cliquez pour vous réauthentifier.

Cliquez sur n'importe quelle connexion et l'application appelle `/services/data/v65.0/` sur l'organisation pour revalider la session avant de charger l'espace de travail. Si le jeton a été révoqué ou a expiré, vous serez invité à réautoriser via le flux OAuth normal.

![La liste des connexions TranSFlator avec un fichier STF local, un bac à sable DQS Playground et une organisation de production côte à côte.](../../../../assets/screenshots/01-connections-list.png)

Le flux d'importation STF-only (première ligne ci-dessus) crée une "pseudo connexion" qui n'a pas de jeton d'actualisation — elle contient seulement le contenu analysé d'un fichier `.stf` et ne peut pas être déployée vers Salesforce tant que vous n'attachez pas une organisation réelle.
