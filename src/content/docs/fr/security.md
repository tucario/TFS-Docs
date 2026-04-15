---
title: Sécurité
description: Modèle de sécurité de TranSFlator — OAuth PKCE, stockage de jetons AES-256, zéro télémétrie, où vont vos données et où elles ne vont pas.
---

La version courte : **vos jetons Salesforce ne quittent jamais votre machine, et nous ne renvoyons jamais vos données chez nous**. L'application de bureau est conçue pour être locale avant tout, le panneau de compte ne stocke que ce dont il a besoin pour vous facturer, et rien nulle part ne fait d'analyse.

## OAuth 2.0 avec PKCE (S256)

Lorsque vous connectez une organisation Salesforce, l'application de bureau exécute le flux standard du serveur Web OAuth 2.0 de Salesforce — **avec PKCE, en utilisant la méthode de défi de code SHA-256**.

Ce que cela signifie en pratique :

- L'application génère un **vérificateur de code** cryptographiquement aléatoire de 32 octets par tentative de connexion.
- Elle calcule le hachage SHA-256 de ce vérificateur et envoie le hachage comme paramètre `code_challenge`.
- Salesforce redirige vers `http://localhost:1717/oauth/callback` avec un code d'autorisation. L'écouteur de boucle locale n'expose jamais rien au réseau.
- L'application échange le code contre des jetons **directement avec Salesforce**, en envoyant le vérificateur d'origine comme preuve. Notre backend n'est **pas** au milieu de cet échange.

Un code d'autorisation volé est inutile sans le vérificateur correspondant, que l'application n'envoie jamais sur le réseau.

## Jetons d'actualisation chiffrés en AES-256-CBC

Les jetons d'actualisation sont stockés localement, chiffrés avec **AES-256-CBC**.

- La clé de 256 bits est générée une fois par installation, à partir de la source aléatoire cryptographiquement sécurisée du système d'exploitation, et stockée dans un fichier nommé `.enc_key` dans `Application Support`, avec un `chmod 600`.
- Un nouvel IV de 16 octets est généré pour chaque écriture et ajouté au début du texte chiffré.
- Le fichier chiffré est `transflate.db` dans le même répertoire.
- **Les jetons d'accès ne sont jamais écrits sur le disque.** Ils vivent uniquement dans la mémoire du processus. Lorsque l'application se ferme, ils disparaissent ; la prochaine fois que vous cliquez sur la connexion, l'application ré-échange le jeton d'actualisation contre un nouveau jeton d'accès.

## Zéro télémétrie

L'application de bureau est livrée avec **aucun SDK d'analyse d'aucune sorte**. Pas de PostHog, pas de Sentry, pas de Firebase Analytics, pas de Crashlytics, pas de Mixpanel, pas de Amplitude. Greppez le code source si vous ne nous croyez pas.

Les seuls appels réseau sortants que l'application effectue sont :

- Vers Salesforce (OAuth + API de métadonnées), sur l'URL d'instance que vous avez vous-même choisie
- Vers votre fournisseur d'IA choisi (via le backend TranSFlator)
- Vers `transflator-api.web.app` pour la validation de la licence, les informations de votre compte et le point de terminaison de traduction par lots — le tout via TLS

Rien d'autre.

## HTTPS partout

Chaque appel sortant, à l'exception de la boucle locale OAuth, utilise TLS 1.2 ou supérieur. La boucle locale OAuth est en texte clair via `127.0.0.1` — ce trafic ne quitte littéralement jamais votre machine, donc TLS n'ajoute rien.

## Re-validation de session à chaque connexion

Chaque fois que vous cliquez sur une connexion pour l'ouvrir, l'application appelle `/services/data/v65.0/` pour valider la session. Les jetons périmés ou révoqués sont détectés immédiatement et vous invitent à vous ré-autoriser. Rien ne s'exécute sur une session invalide.

## Apporter votre propre clé de fournisseur d'IA ? Non.

TranSFlator gère les clés des fournisseurs sur le backend — vous n'avez pas besoin de coller une clé OpenAI, une clé Google ou toute autre clé similaire. L'avantage est le temps d'intégration (zéro) ; le compromis est que tous les appels de traduction passent par notre backend, ce qui est une limite de confiance avec laquelle vous devez être à l'aise. Consultez [la politique de confidentialité](https://transflator.com/privacy) pour savoir ce que cela signifie en pratique.

## Que contient le fichier `transflate.db` ?

- **`connections`** — vos étiquettes d'organisation enregistrées, les URL d'instance, le type d'environnement, l'horodatage du dernier test
- **`tokens`** — jetons d'actualisation chiffrés en AES, un par connexion
- **`workspace`** — résultats de l'analyse des métadonnées mis en cache
- **`deployment_log`** — historique local des déploiements que vous avez initiés

Supprimez ce fichier pour tout effacer sauf votre `.enc_key`. Supprimez également `.enc_key` et la prochaine exécution en générera une nouvelle.

:::note[TODO]
Ajouter des schémas du flux OAuth et du routage de la résidence des données. Ajouter une section sur la signature du code et la notarisation macOS, Windows SmartScreen, et ce qui se passe quand Apple/Microsoft révoquent un certificat de signature.
:::
