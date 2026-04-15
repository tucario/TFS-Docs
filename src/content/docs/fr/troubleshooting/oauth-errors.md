---
title: Erreurs OAuth
description: Corrigez les erreurs OAuth courantes que vous pouvez rencontrer en connectant une organisation Salesforce — incohérences de redirection, sessions expirées, jetons révoqués.
---

La plupart des erreurs OAuth sont classiques et se répartissent en quatre catégories. Voici comment les différencier et les corriger.

## "redirect_uri mismatch"

**Symptôme :** Salesforce affiche une page d'erreur générique au lieu de l'écran "Autoriser", avec `error=redirect_uri_mismatch` dans l'URL.

**Cause :** l'application connectée TranSFlator dans Salesforce est configurée avec une URL de rappel qui ne correspond pas à ce que l'application utilise réellement (`http://localhost:1717/oauth/callback`).

**Correction :** cela ne devrait jamais arriver pour les clients — cela signifierait que les métadonnées de notre application connectée ont été corrompues. Si vous rencontrez ce problème, envoyez un e-mail à [hello@tucario.com](mailto:hello@tucario.com) avec l'URL de votre navigateur.

## "invalid_grant" lors de l'échange de jeton

**Symptôme :** le navigateur redirige correctement, mais l'application affiche "échec de l'authentification".

**Cause :** le code d'autorisation a expiré avant que l'application ne puisse l'échanger. Cela arrive si vous avez mis plus d'une minute sur l'écran d'autorisation de Salesforce.

**Correction :** cliquez de nouveau sur **Add Connection** et effectuez le flux sans interruption.

## "session expired or invalid"

**Symptôme :** la connexion fonctionnait hier, aujourd'hui cliquer dessus affiche un point rouge et "Session expirée".

**Cause :** votre jeton d'actualisation (refresh token) a été révoqué. Cela arrive lorsque :

- Un administrateur a cliqué sur **Revoke** dans l'écran "Utilisation de l'OAuth des applications connectées" de Salesforce.
- Le mot de passe de votre utilisateur Salesforce a été réinitialisé (Salesforce révoque tous les jetons d'actualisation lors d'un changement de mot de passe).
- Votre organisation possède une politique de "validité du jeton d'actualisation" qui vient d'expirer.

**Correction :** cliquez sur la connexion, l'application vous invitera à vous réautoriser. Suivez les étapes du flux OAuth et vous serez de nouveau opérationnel.

## "IP address not allowed"

**Symptôme :** Salesforce rejette la demande OAuth avec `restricted_access` ou un message similaire.

**Cause :** votre organisation a défini des plages d'IP de connexion sur le profil avec lequel vous vous êtes authentifié, et votre IP actuelle n'est pas dans la plage.

**Correction :** connectez-vous depuis une IP autorisée (VPN de bureau, etc.), ou demandez à votre administrateur d'élargir la plage d'IP du profil pour votre utilisateur.

:::note[À FAIRE]
Ajouter des captures d'écran d'erreurs concrètes. Documenter les entrées spécifiques du journal d'audit à rechercher dans la configuration Salesforce lors du débogage.
:::
