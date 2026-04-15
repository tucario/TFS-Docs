---
title: Aperçu des moteurs
description: Comment les quatre moteurs de traduction par IA se comparent en termes de vitesse, de couverture linguistique, de forme de coût et de résidence des données.
---

TranSFlator prend en charge quatre moteurs de traduction par IA prêts à l'emploi. Tous quatre sont accessibles via le même **backend TranSFlator**, ce qui signifie :

- **Vous n'avez pas besoin de clés API de fournisseur.** Les crédits sur votre compte couvrent n'importe quel moteur.
- **Vous ne parlez pas directement au fournisseur** depuis l'application de bureau — le backend le fait, via TLS, avec des points de terminaison régionaux appropriés en fonction de votre choix.
- **Vous pouvez changer de moteur entre les lots.** Il n'y a pas de frais de configuration par moteur.

## Comparaison rapide

| Moteur | Idéal pour | Vitesse | Couverture linguistique | Options de résidence des données |
| --- | --- | --- | --- | --- |
| **Google Gemini** | Textes commerciaux courants, large portée linguistique | Rapide | 100+ | États-Unis, UE, Asie, Australie |
| **Anthropic Claude** | Textes nuancés, chaînes longues, travail sur la voix de la marque | Moyenne | 95+ | États-Unis, UE |
| **Mistral** | Déploiements dans l'UE sensibles à la confidentialité | Rapide | 40+ (fort sur les langues de l'UE) | UE uniquement |
| **DeepSeek** | Langues asiatiques (CJK, vietnamien, thaï, indonésien) | Très rapide | 80+, fort sur l'asiatique | hors EEE |

Tous les coûts vous sont facturés en crédits TranSFlator à un tarif forfaitaire par caractère, quel que soit le moteur que vous choisissez. En coulisses, le backend absorbe la différence de prix entre les moteurs.

## En choisir un

- **Peu importe / vous voulez juste des résultats ?** Utilisez Gemini. C'est le moteur par défaut et il est très bon.
- **Contenu sensible, travail sur la voix de la marque, texte juridique ?** Claude. Le soin supplémentaire en vaut la peine.
- **Doit rester dans l'UE ?** Mistral.
- **Traduction vers le chinois, le japonais, le coréen ou d'autres langues asiatiques ?** DeepSeek — il est entraîné avec une pondération des langues asiatiques beaucoup plus lourde que les autres.

## Pages par moteur

- [Google Gemini](/fr/ai-engines/gemini/)
- [Anthropic Claude](/fr/ai-engines/claude/)
- [Mistral](/fr/ai-engines/mistral/)
- [DeepSeek](/fr/ai-engines/deepseek/)

:::note[TODO]
Données de référence réelles : scores de précision par moteur sur un corpus fixe de 1000 étiquettes de champs Salesforce dans 5 langues cibles, avec notes d'évaluation.
:::
