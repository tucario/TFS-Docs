---
title: Achat de crédits
description: Rechargez votre solde de crédits d'IA via Stripe. Fonctionnement de la sélection de plan, du paiement, des reçus et des factures.
---

Lorsque vous souhaitez traduire plus que l'allocation mensuelle du plan
gratuit, vous pouvez recharger avec des crédits supplémentaires à tout moment.
Les paiements sont traités par **Stripe**.

## Choisissez votre plan

![L'écran « Choose Your Plan » — une carte Free Plan (5 000 caractères/mois, accès à l'API avec authentification par jeton, toutes les langues prises en charge, traductions optimisées pour Salesforce) marquée comme plan actuel, et une carte Premium « Need more characters? » avec des puces (jusqu'à 10 000 000+ caractères, pas de limite mensuelle, les caractères n'expirent jamais, traitement de traduction prioritaire) et un bouton View Premium Packages.](../../../../assets/screenshots/panel/choose-plan.png)

Le sélecteur de plan est disponible aussi bien pendant l'intégration à la
première exécution que depuis l'entrée **Buy Characters** de la barre latérale.

**Plan gratuit** — 5 000 caractères par cycle de 30 jours, accès complet
à l'API, toutes les langues prises en charge, invites optimisées pour Salesforce.
Suffisant pour les petites organisations, les évaluations et les travaux de maintenance légers.

**Premium** — packs de caractères supplémentaires en plus de votre
allocation mensuelle :

- Jusqu'à 10 000 000+ caractères par pack.
- Pas de plafond mensuel — utilisez-les à votre rythme.
- **Les caractères n'expirent jamais.** Contrairement à l'allocation gratuite mensuelle,
  les crédits achetés restent sur votre solde jusqu'à leur utilisation.
- Traitement prioritaire des traductions dans les files d'attente du backend.

Cliquez sur **View Premium Packages** pour ouvrir la liste des packs et
choisir une taille.

## Parcours de recharge

1. Dans le panneau, cliquez sur **Buy Characters** (barre latérale ou carte du
   tableau de bord) → **View Premium Packages**.
2. Choisissez une taille de pack dans la liste.
3. Cliquez sur **Checkout** — cela ouvre Stripe Checkout, hébergé sur
   le propre domaine de Stripe. Les détails de la carte sont saisis sur les serveurs
   de Stripe, pas sur les nôtres.
4. Finalisez le paiement.
5. Stripe vous redirige vers le panneau. Un webhook Stripe
   se déclenche sur notre backend, écrit un document `purchases` dans
   Firestore et met à jour votre solde `ai_credits` de manière atomique.
6. Le nouveau solde est visible sur le tableau de bord en quelques
   secondes.

## Ce que nous stockons

Chaque achat terminé crée un document dans la collection Firestore
`purchases` avec : votre `uid`, l'ID de session Stripe,
l'intention de paiement Stripe, le montant payé, la devise et les caractères
achetés. Nous ne stockons **pas** les numéros de carte, le CVV ou toute autre
donnée du titulaire de la carte.

## Reçus

Stripe envoie un reçu par e-mail à l'adresse figurant sur votre compte
TranSFlator dès que le paiement est validé. C'est le reçu officiel
pour vos archives.

## Paiements échoués

Si un paiement est refusé, le webhook Stripe ne se déclenche jamais, aucun
achat n'est donc enregistré et aucun crédit n'est ajouté. Rien ne change
de notre côté. Réessayez avec une autre carte.

## TVA / factures pour les clients de l'UE

Stripe émet des factures conformes à la TVA via le Customer
Portal. Un historique de factures en libre-service est une fonctionnalité
prévue sur le panneau ; en attendant, envoyez un e-mail à
[hello@tucario.com](mailto:hello@tucario.com) avec l'e-mail de votre compte
et nous vous enverrons les PDF.
