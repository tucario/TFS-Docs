---
title: S'inscrire et vérifier l'e-mail
description: Créez un compte TranSFlator sur le panneau Web, vérifiez votre e-mail et recevez vos crédits de départ.
---

Le panneau de compte sur [panel.transflator.com](https://panel.transflator.com) est l'endroit où vous créez le compte avec lequel l'application de bureau se connecte. C'est une application Flutter Web soutenue par Firebase.

## S'inscrire

1. Ouvrez [panel.transflator.com](https://panel.transflator.com).
2. Cliquez sur **S'inscrire**.
3. Entrez votre adresse e-mail et un mot de passe fort.
4. Cliquez sur **Créer un compte**.

Votre compte est créé dans Firebase Auth et un document correspondant est écrit dans la collection Firestore `users` avec votre solde de crédits d'IA de départ et un jeton API généré.

## Vérifiez votre e-mail

Immédiatement après l'inscription, un e-mail transactionnel est envoyé à l'adresse que vous avez enregistrée, contenant un lien de vérification en un clic. Le lien est valide pendant **48 heures**. Tant que vous n'avez pas cliqué dessus, vous ne pouvez pas recharger de crédits ni effectuer de traductions coûtant des crédits.

Vous n'avez pas reçu l'e-mail ? Vérifiez d'abord votre dossier de courrier indésirable, puis cliquez sur **Renvoyer la vérification** sur le panneau.

## Crédits de départ

Les nouveaux comptes sont alimentés par un solde de crédits d'IA de départ gratuit afin que vous puissiez évaluer le produit sans payer. Le montant et la cadence de renouvellement sont affichés sur le tableau de bord. Les plans payants ne sont pas requis pour la période d'évaluation.

## Réinitialisation du mot de passe

Si vous oubliez votre mot de passe, cliquez sur **Mot de passe oublié** sur l'écran de connexion. Un e-mail de réinitialisation est envoyé via le même pipeline transactionnel, avec un lien valide pendant 1 heure.

:::note[TODO]
Captures d'écran de l'écran d'inscription, de l'e-mail de vérification et du tableau de bord après la première connexion. Note sur la limite de caractères du niveau gratuit.
:::
