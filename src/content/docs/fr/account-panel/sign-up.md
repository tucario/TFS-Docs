---
title: Inscription et connexion
description: Créez un compte TranSFlator sur le panneau web, vérifiez votre e-mail et connectez-vous depuis l'application de bureau.
---

Le panneau de compte à
[panel.transflator.com](https://panel.transflator.com) est l'endroit où
vous créez le compte auquel l'application de bureau se connecte. C'est une
application Flutter Web basée sur Firebase Auth, Firestore et un
unique point de terminaison Cloud Functions.

## Connexion

![L'écran de connexion du panneau TranSFlator — une mascotte toucan à gauche, des champs e-mail et mot de passe à droite, le badge Google reCAPTCHA et un bouton « Sign in » avec des liens pour créer un compte ou réinitialiser le mot de passe.](../../../../assets/screenshots/panel/sign-in.png)

Les utilisateurs existants arrivent sur l'écran de connexion à
[panel.transflator.com](https://panel.transflator.com).

1. Saisissez votre e-mail et votre mot de passe.
2. Résolvez le défi reCAPTCHA s'il vous est demandé.
3. Cliquez sur **Sign in**.

Le formulaire envoie une requête à `POST /auth/login`, qui relaie Firebase Auth
et renvoie votre jeton d'API propre à votre compte. C'est ce même jeton que
l'application de bureau reçoit lorsque vous vous y connectez.

Les liens sous le formulaire couvrent les deux détours courants :

- **Create account** — vous redirige vers le parcours d'inscription décrit
  ci-dessous.
- **Forgot password?** — envoie un e-mail de réinitialisation via notre
  pipeline transactionnel. Le lien de réinitialisation est valable 1 heure.

## Inscription

Si vous n'avez pas encore de compte, cliquez sur **Create account** sur
l'écran de connexion.

1. Saisissez votre adresse e-mail et un mot de passe robuste.
2. Résolvez le défi reCAPTCHA.
3. Cliquez sur **Create account**.

Le backend crée un utilisateur Firebase Auth et un document correspondant
dans la collection Firestore `users`, initialisé avec votre
solde de crédits d'IA de départ et un jeton d'API fraîchement généré.

## Vérifiez votre e-mail

![L'écran « Verify your email » — mascotte toucan, adresse e-mail masquée, texte explicatif, un bouton « Resend verification email » et un lien « Sign out ».](../../../../assets/screenshots/panel/verify-email.png)

Immédiatement après l'inscription, un e-mail transactionnel arrive dans votre
boîte de réception contenant un lien de vérification en un clic. Le lien est valable
**48 heures**. Tant que vous n'avez pas cliqué dessus, vous ne pouvez pas recharger de crédits
ni lancer de traductions qui consomment des crédits.

Le panneau bloque le reste de l'interface derrière un écran « Verify your email »
qui affiche :

- À quelle adresse nous avons envoyé le lien.
- Un bouton **Resend verification email** — utile si le premier
  s'est perdu ou si le lien a expiré.
- Un lien **Sign out** si vous souhaitez essayer un autre compte.

**Vous n'avez pas reçu l'e-mail ?** Vérifiez d'abord votre dossier spam, puis utilisez
**Resend verification email**. Si l'adresse elle-même a été
mal saisie, déconnectez-vous, demandez au support de supprimer le compte et inscrivez-vous
à nouveau — il n'existe pas de moyen en libre-service de modifier l'e-mail avant
la vérification.

## Crédits de départ

Les nouveaux comptes sont initialisés avec un solde de départ gratuit pour vous permettre
d'évaluer le produit sans payer. Le montant et la cadence de renouvellement
tous les 30 jours sont indiqués sur le tableau de bord. Le plan gratuit couvre
les petites organisations, les POC rapides et les évaluations ; les travaux plus volumineux
nécessitent une recharge de crédits (voir [Achat de crédits](/account-panel/buying-credits/)).

## Réinitialisation du mot de passe

Si vous oubliez votre mot de passe, cliquez sur **Forgot password?** sur
l'écran de connexion. Un e-mail de réinitialisation est envoyé via le même pipeline
transactionnel, avec un lien valable **1 heure**. Le lien ouvre
un écran du panneau où vous définissez un nouveau mot de passe ; après enregistrement, vous êtes
redirigé vers le formulaire de connexion.
