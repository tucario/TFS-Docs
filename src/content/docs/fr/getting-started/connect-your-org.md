---
title: Connectez votre organisation Salesforce
description: Connectez-vous à Salesforce depuis l'application de bureau via OAuth 2.0 avec PKCE. Couvre les organisations de production, de bac à sable (sandbox) et scratch.
---

TranSFlator se connecte à Salesforce en utilisant **OAuth 2.0 avec PKCE (code challenge method S256)**. Il n'y a pas d'étape "copier-coller votre nom d'utilisateur et votre mot de passe", et le backend de TranSFlator n'est pas au milieu — le code d'autorisation est échangé sur votre propre machine.

## Étapes

1. Dans l'application, cliquez sur **Add Connection** en haut à droite.
2. Donnez un libellé à la connexion (ex: *"EMEA sandbox"* ou *"Acme production"*), choisissez s'il s'agit d'une instance de **Production/Developer** (`login.salesforce.com`) ou d'un **Sandbox** (`test.salesforce.com`), et cliquez sur **Authorize**.
3. Votre navigateur s'ouvre. Connectez-vous à Salesforce comme vous le feriez normalement. Si votre organisation utilise le SSO ou la MFA, le flux normal s'exécute ici.
4. Salesforce vous demande d'autoriser l'**Application Connectée TranSFlator** à accéder aux métadonnées. Cliquez sur **Allow** (Autoriser).
5. Salesforce redirige vers `http://localhost:1717/oauth/callback`, que l'application de bureau écoute. Le rappel en boucle locale ne quitte jamais votre machine.
6. L'application échange le code d'autorisation contre un jeton d'actualisation (refresh token) et un jeton d'accès (access token). Le jeton d'actualisation est crypté avec AES-256-CBC et écrit dans `transflate.db` ; le jeton d'accès réside uniquement dans la RAM.

Vous êtes maintenant connecté. La connexion apparaît dans la barre latérale avec un point d'état vert. Cliquez dessus pour ouvrir la grille de traduction de cette organisation — TranSFlator scannera immédiatement l'organisation pour chaque élément traduisible :

![TranSFlator scannant une organisation Salesforce connectée, chargeant les traductions objet par objet.](../../../../assets/screenshots/02-scanning-org.png)

## Utiliser un domaine personnalisé

Si votre organisation utilise un domaine personnalisé (*My Domain*, ex: `acme.my.salesforce.com`), choisissez **Custom Domain** dans le sélecteur d'instance et collez le nom d'hôte complet `https://...`. L'application l'utilisera comme hôte OAuth au lieu du point de terminaison de connexion standard.

## Organisations Scratch

Les organisations scratch fonctionnent exactement comme les bacs à sable (sandboxes) : choisissez **Sandbox** dans le sélecteur d'instance. Le jeton d'actualisation vit aussi longtemps que l'organisation scratch — lorsque l'organisation scratch expire, TranSFlator vous le signalera lors du prochain test de connexion.

## Ce que TranSFlator voit

Une fois connectée, l'application a le même accès aux métadonnées que votre utilisateur connecté — rien de plus. Si votre utilisateur peut voir un champ, TranSFlator peut le traduire. Si votre utilisateur n'a pas accès à un type d'enregistrement, TranSFlator ne peut pas le scanner non plus. Définissez les ensembles de permissions (permission sets) de votre utilisateur de test avant de lancer un scan complet si vous souhaitez limiter le rayon d'action.

## Suivant

[Lancez votre première traduction →](/fr/getting-started/your-first-translation/)
