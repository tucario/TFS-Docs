---
title: Tableau de bord
description: Votre écran d'accueil dans le panneau TranSFlator — solde de crédits, statistiques de traduction, état de l'API et intégration à la première exécution.
---

Le tableau de bord est ce que vous voyez immédiatement après la connexion. Il
répond aux trois questions pour lesquelles vous venez généralement sur le panneau :
*combien de crédits me reste-t-il, l'API est-elle en bonne santé et combien
ai-je traduit récemment*.

![Le tableau de bord du panneau TranSFlator — un en-tête de bienvenue, une carte AI Characters affichant 5 000 caractères restants et la date du prochain renouvellement, une bannière « Batch-translate with AI » avec la mascotte toucan, et quatre cartes de statistiques en dessous : Usage (last 30 days), Top language pairs (30d), Recent translations, API Health (24h) et Credits forecast.](../../../../assets/screenshots/panel/dashboard.png)

## Ce que montre chaque tuile

**AI Characters** — votre solde de crédits actuel et la date du
prochain renouvellement (plan gratuit : tous les 30 jours, plans payants : le
premier jour de votre cycle de facturation). Le bouton **Buy Characters** vous
envoie directement au parcours d'achat.

**Batch-translate with AI** — un rappel des moteurs qui sont
connectés (Gemini · Claude · Mistral · DeepSeek) et du fait que vous pouvez
basculer entre eux à tout moment depuis **API Settings**.

**Usage · Last 30 days** — un décompte glissant des caractères
traduits au cours des 30 derniers jours, tous moteurs confondus. Utile pour
estimer si votre allocation gratuite tiendra le mois.

**Top language pairs · 30d** — liste classée de vos paires source→cible
les plus utilisées. Vide sur un compte tout neuf ; se remplit
automatiquement une fois que vous lancez vos premiers lots.

**Recent translations** — une sélection des dernières lignes que vous avez
traduites. En cliquant sur **Translation History** (barre latérale gauche),
vous ouvrez le journal complet.

**API Health · 24h** — latence moyenne et nombre de requêtes effectuées avec
votre jeton d'API au cours des 24 dernières heures. Si vous constatez un pic de
latence ou de requêtes que vous n'avez pas initiées, régénérez le jeton
immédiatement (voir [Paramètres de l'API](/account-panel/api-token/)).

**Credits forecast** — une projection naïve du moment où votre solde
actuel sera épuisé, fondée sur votre tendance d'utilisation récente. Se remplit
après quelques jours d'activité.

## Intégration à la première exécution

Les nouveaux comptes qui viennent de vérifier leur e-mail sont acheminés
via un parcours d'intégration en deux étapes avant que le tableau de bord ne se charge
pour la première fois.

### Étape 1 — Choisissez votre moteur d'IA

![L'étape d'intégration « Choose Your AI Engine » — un groupe Recommended avec Google Gemini et Anthropic Claude, des regroupements régionaux pour l'Amérique du Nord, l'Europe, l'Asie et l'Australie & Océanie, chacun avec une ou deux cartes de moteur, et un bouton « Continue » en bas.](../../../../assets/screenshots/panel/choose-engine.png)

TranSFlator fonctionne avec quatre moteurs d'IA ; vous en choisissez un comme
moteur par défaut pour les nouveaux lots. Le sélecteur les regroupe ainsi :

- **Recommended** — valeurs par défaut polyvalentes : Google Gemini pour
  une traduction multilingue rapide et précise ; Anthropic Claude pour
  un travail nuancé et sensible au contexte.
- **North America** — traitement basé aux États-Unis pour un trafic NA à faible
  latence.
- **Europe** — Mistral AI, conforme au RGPD et solide sur les langues de l'UE.
- **Asia** — DeepSeek, économique et solide sur les langues CJK.
- **Australia & Oceania** — Gemini, meilleure couverture régionale.

Le choix n'est pas figé. Vous pouvez changer de moteur à tout moment
depuis l'écran **API Settings** ou dans la configuration de lot de
l'application de bureau.

### Étape 2 — Choisissez votre plan

![L'étape d'intégration « Choose Your Plan » — une carte Free Plan (5 000 caractères/mois, accès à l'API avec authentification par jeton, toutes les langues prises en charge, traductions optimisées pour Salesforce) avec un bouton « Continue with Free Plan », et une carte Premium (« Need more characters? ») avec un bouton « View Premium Packages ».](../../../../assets/screenshots/panel/choose-plan.png)

Le plan gratuit (5 000 caractères par 30 jours, accès à l'API, toutes
les langues prises en charge) suffit pour évaluer TranSFlator de bout en bout
et même couvrir les petites organisations. Pour des volumes plus importants, la carte
**Premium** ouvre le sélecteur de packs — voir
[Achat de crédits](/account-panel/buying-credits/) pour les détails.

Cliquez sur **Continue with Free Plan** pour terminer l'intégration et arriver
sur le tableau de bord. Vous pouvez acheter des packs à tout moment ultérieur
depuis le bouton **Buy Characters** du tableau de bord ou l'entrée
**Buy Characters** de la barre latérale.
