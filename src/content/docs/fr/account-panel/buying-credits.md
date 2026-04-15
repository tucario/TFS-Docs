---
title: Acheter des crédits
description: Rechargez votre solde de crédits d'IA via Stripe. Comment fonctionne le paiement, où vont les reçus et comment gérer les factures.
---

Lorsque vous souhaitez traduire plus que l'allocation mensuelle de votre plan, vous pouvez recharger des crédits supplémentaires à tout moment. Les paiements sont traités par **Stripe**.

## Flux de recharge

1. Sur le tableau de bord du panneau, cliquez sur **Acheter des crédits**.
2. Choisissez une taille de forfait dans la liste.
3. Cliquez sur **Payer** — cela ouvre Stripe Checkout, hébergé sur le domaine de Stripe. Les détails de la carte sont saisis sur les serveurs de Stripe, pas sur les nôtres.
4. Effectuez le paiement.
5. Stripe vous redirige vers le panneau. Un webhook Stripe se déclenche sur notre backend, ce qui écrit un document `purchases` dans Firestore et augmente votre solde `ai_credits` de manière atomique.
6. Le nouveau solde est visible sur le tableau de bord en quelques secondes.

## Ce que nous stockons

Chaque achat terminé crée un document dans la collection Firestore `purchases` avec : votre `uid`, l'ID de session Stripe, l'intention de paiement Stripe, le montant payé, la devise et les caractères achetés. Nous ne stockons **pas** les numéros de carte, le CVV ou toute autre donnée du titulaire de la carte.

## Reçus

Stripe envoie un reçu par e-mail à l'adresse de votre compte TranSFlator au moment où le paiement est compensé. C'est le reçu officiel pour vos dossiers.

## Échecs de paiement

Si un paiement est refusé, le webhook Stripe ne se déclenche jamais, donc aucun achat n'est enregistré et aucun crédit n'est ajouté. Rien ne change de notre côté. Réessayez avec une autre carte.

## TVA / factures pour les clients de l'UE

Stripe émet des factures conformes à la TVA via le portail client. L'historique des factures en libre-service est une fonctionnalité prévue sur le panneau ; d'ici là, envoyez un e-mail à [hello@tucario.com](mailto:hello@tucario.com) avec l'adresse e-mail de votre compte et nous vous enverrons les PDF.

:::note[TODO]
Capture d'écran du flux de paiement, exemple de facture. Tableau des packs de crédits disponibles une fois les tarifs finalisés.
:::
