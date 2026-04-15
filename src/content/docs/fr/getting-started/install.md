---
title: Installer l'application de bureau
description: Téléchargez TranSFlator pour macOS ou Windows et lancez-le pour la première fois.
---

TranSFlator est une application de bureau native. Il n'existe pas de version par navigateur de l'espace de travail de traduction — la grille, le flux OAuth et le magasin local de jetons cryptés vivent tous dans l'application sur votre machine.

## Téléchargement

Récupérez la dernière version sur la page de téléchargement de [transflator.com](https://transflator.com/download) :

- **macOS** — `.dmg` universel, signé et notarié, fonctionne sur les machines Apple Silicon et Intel à partir de macOS 12 et plus.
- **Windows** — installateur `.msi`, 64-bit, Windows 10 et plus.

## Premier lancement

Sur macOS, l'application demandera la permission de stocker un fichier de clé dans `~/Library/Application Support/TranSFlator`. Ce fichier est la clé de cryptage AES-256 par machine utilisée pour sécuriser les jetons d'actualisation (refresh tokens) de Salesforce sur le disque. Il est en chmod 600 et ne quitte jamais votre machine. Consultez [Sécurité](/fr/security/) pour le modèle de menace complet.

Sur Windows, le chemin équivalent est `%APPDATA%\TranSFlator`.

## Se connecter

La première chose que l'application demande est l'e-mail et le mot de passe de votre compte TranSFlator. Si vous n'avez pas encore de compte, ouvrez [panel.transflator.com](https://panel.transflator.com), inscrivez-vous (gratuitement), vérifiez votre e-mail et revenez. Consultez [S'inscrire et vérifier l'e-mail](/fr/account-panel/sign-up/) pour plus de détails.

Après la connexion, l'application échange vos identifiants contre un jeton API (API token) avec le backend de TranSFlator et le met en cache localement. À partir de maintenant, le jeton — et non votre mot de passe — est utilisé pour les appels à l'API de traduction.

## Suivant

Une fois connecté, allez à [Connectez votre organisation Salesforce](/fr/getting-started/connect-your-org/).

:::note[À FAIRE]
Ajouter des captures d'écran des boîtes de dialogue de premier lancement sur macOS et Windows.
:::
