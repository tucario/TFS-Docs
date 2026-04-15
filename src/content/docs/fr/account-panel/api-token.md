---
title: Jeton API
description: Gérez, copiez, faites pivoter et révoquez votre jeton API personnel. Utilisé par l'application de bureau et pour les appels directs à l'API.
---

Chaque compte TranSFlator possède un seul **jeton API** — une longue chaîne aléatoire qui authentifie votre compte auprès du backend TranSFlator pour les appels à l'API de traduction.

Normalement, vous n'avez pas besoin d'y penser. L'application de bureau l'utilise automatiquement lorsque vous vous connectez. Le seul moment où vous interagissez directement avec lui est lorsque vous souhaitez appeler l'API de traduction depuis votre propre code (par exemple, un pipeline CI/CD).

## Où il se trouve

Sur le panneau → **Profil → Jeton API**. Le jeton est affiché avec un bouton **Copier** et un bouton **Régénérer**.

## Régénérer (rotation)

Cliquez sur **Régénérer** pour invalider le jeton actuel et en émettre un nouveau. Utilisez cette option si vous pensez que le jeton a été divulgué — poussé dans un dépôt public, publié dans un chat, laissé dans un fichier journal — ou simplement dans le cadre d'un calendrier de rotation régulier.

Après la régénération, toute application de bureau déjà connectée avec l'ancien jeton recevra une erreur `401 Unauthorized` lors de son prochain appel API et vous invitera à vous reconnecter.

## L'utiliser directement

Envoyez-le comme jeton Bearer dans l'en-tête `Authorization` lors de l'appel à notre API de traduction :

```bash
curl -X POST https://transflator-api.web.app/translate/batch \
  -H "Authorization: Bearer <VOTRE_JETON_API>" \
  -H "Content-Type: application/json" \
  -d '{
    "strings": ["Account name", "Industry", "Annual revenue"],
    "target_language": "pl",
    "engine": "gemini"
  }'
```

La réponse est un tableau JSON de chaînes traduites dans le même ordre que l'entrée.

:::note[TODO]
Référence API complète avec chaque point de terminaison (`/translate/batch`, `/me`, `/packages`), les codes d'erreur, les limites de débit. Cela deviendra sa propre section.
:::
