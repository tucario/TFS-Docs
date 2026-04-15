---
title: DeepSeek
description: DeepSeek est le moteur à choisir lorsque vous traduisez vers le chinois, le japonais, le coréen ou d'autres langues asiatiques — et pour les lots à gros volume.
---

<img src="/engine-logos/deepseek.svg" alt="Logo DeepSeek" width="96" height="96" />

DeepSeek est le moteur que vous choisissez lorsque la langue cible est le **chinois, le japonais, le coréen** ou une autre langue d'Asie de l'Est / du Sud-Est. Le modèle est entraîné avec une pondération beaucoup plus lourde sur les langues asiatiques que les trois autres fournisseurs, et cela se voit dans la fluidité et le naturel du résultat.

## Points forts

- **Langues asiatiques.** Notablement plus naturel en mandarin (simplifié et traditionnel), japonais, coréen, vietnamien, thaï et indonésien que Gemini ou Claude.
- **Gère proprement les cas limites d'encodage des caractères CJK.** Les étiquettes de champs avec une ponctuation à demi-largeur / pleine largeur, les suffixes honorifiques et la limite de 40 caractères sur les étiquettes de champs Salesforce reviennent tous corrects.
- **Très rapide sur les gros lots.** Gère des dizaines de milliers de lignes en un seul passage sans trébucher sur les limites de débit.

## Points faibles

- **Plus faible sur les langues européennes** que Mistral ou Claude. Pour le français, l'allemand, l'italien, le polonais, l'espagnol — choisissez autre chose.
- **Hébergé hors de l'EEE.** Les transferts internationaux nécessitent des SCC (voir la [politique de confidentialité](https://transflator.com/privacy)). Si votre équipe juridique bloque les fournisseurs hors EEE, utilisez Mistral.

## Quand le choisir

- Localisation d'une organisation Salesforce vers le japonais, le coréen ou le mandarin.
- Expansion vers les marchés APAC où plusieurs langues asiatiques sont concernées en même temps.
- Traduction de valeurs de listes de choix personnalisées vers des langues asiatiques où Gemini vous a donné des résultats maladroits ou littéraux.

## Quand *ne pas* le choisir

- Exigences de résidence des données uniquement dans l'UE.
- Langues cibles européennes — Mistral, Gemini et Claude le battent tous ici.

:::note[TODO]
Exemples côte à côte d'étiquettes de champs japonais et coréens traduits par DeepSeek vs Gemini. Préciser exactement quel point de terminaison DeepSeek le backend appelle.
:::
