---
title: Paramètres de l'API
description: Votre jeton d'API, votre moteur d'IA préféré, les limites de débit, un exemple curl et le webhook d'épuisement de crédits — le tout sur un seul écran.
---

**API Settings** dans la barre latérale gauche est le tableau de bord pour
l'utilisation directe de l'API. L'application de bureau lit la plupart de ces mêmes valeurs
pour vous ; l'écran existe pour le moment où vous souhaitez appeler l'API
vous-même depuis une CI, un script ou une intégration tierce.

![L'écran API Settings — carte API Token avec un jeton masqué et des boutons Copy/Rotate Token, carte AI Credits affichant 5 000 sur 5 000 caractères restants avec une date de renouvellement, sélecteur AI Engine avec des pastilles Gemini/Claude/Mistral/DeepSeek, une carte Rate Limit affichant 60 req/min, une carte d'exemple cURL et un champ Depletion Webhook.](../../../../assets/screenshots/panel/api-settings.png)

## Jeton d'API

Chaque compte TranSFlator possède un unique jeton d'API — une longue
chaîne aléatoire qui authentifie votre compte auprès de l'API de
traduction.

La carte du jeton affiche la valeur actuelle masquée par défaut, avec
deux actions :

- **Copy** — copie le jeton complet dans le presse-papiers. Traitez-le
  comme un mot de passe.
- **Rotate Token** — invalide le jeton actuel et en émet un
  nouveau. Utilisez cette action si vous soupçonnez que le jeton a fuité (poussé
  vers un dépôt public, publié dans un chat, laissé dans un fichier journal) ou dans le cadre
  d'une politique de rotation régulière.

Après rotation, toute application de bureau ou tout script qui utilise encore l'ancien
jeton recevra `HTTP 401 Unauthorized` à son prochain appel et devra
se reconnecter / voir sa configuration mise à jour.

## Crédits d'IA

Un miroir de la carte de solde du tableau de bord, affiché ici parce que
les utilisateurs directs de l'API le veulent souvent à côté du jeton et du sélecteur
de moteur. Affiche les caractères restants, le plafond du plan et la date de renouvellement.

## Moteur d'IA

Choisissez quel modèle alimente les traductions initiées via l'API :

- **Gemini** — le modèle multilingue polyvalent de Google.
- **Claude** — Anthropic, nuancé et sensible au contexte.
- **Mistral** — européen, compatible RGPD, solide sur les langues de l'UE.
- **DeepSeek** — économique et solide sur les langues CJK.

La sélection s'applique à chaque appel `POST /translate/batch` qui
ne remplace pas `engine` dans son corps. Changer le moteur ici
met également à jour votre `preferred_ai_model` sur le document utilisateur, afin que
l'application de bureau le récupère à sa prochaine synchronisation.

## Limite de débit

Affiche votre limite de débit actuelle par jeton (par défaut 60 req/min).
Les pics au-dessus de cette limite renvoient `HTTP 429 Too Many Requests` — reculez
et réessayez. La limite est appliquée par jeton d'API, pas par IP, donc
faire tourner les jetons ne la réinitialise pas.

## Exemple cURL

Un appel d'exemple prêt à être collé, pré-rempli avec votre jeton et
pointant vers le point de terminaison de traduction par lots :

```bash
curl -X POST https://api.transflator.com/translate \
  -H "Authorization: Bearer <YOUR_API_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{"text":"Hello world","source_lang":"en","target_lang":"pl"}'
```

Cliquez sur **Copy** sur la carte pour le récupérer avec votre véritable jeton
substitué. La réponse est un objet JSON contenant la chaîne
traduite et des métadonnées sur le moteur qui l'a produite.

## Webhook d'épuisement

Facultatif. Collez une URL HTTPS et nous y enverrons une charge utile JSON via POST
lorsque votre solde de crédits atteint zéro. Utile pour :

- Alerter une astreinte lorsqu'une intégration API en production est à court.
- Déclencher une recharge automatique dans votre propre système de facturation.
- Envoyer une notification dans Slack via un webhook entrant.

Laissez le champ vide pour désactiver. Le webhook se déclenche une fois par
événement d'épuisement (pas à chaque 429 par la suite) ; il se réarme au
prochain rechargement ou renouvellement.
