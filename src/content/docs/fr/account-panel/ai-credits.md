---
title: Crédits d'IA
description: Comment fonctionnent les crédits, ce qui coûte combien de crédits et comment fonctionne le cycle de renouvellement mensuel.
---

Les crédits d'IA sont l'unité utilisée par TranSFlator pour vous facturer le travail d'IA. Un crédit équivaut à un caractère de texte source envoyé à un moteur d'IA.

## Pourquoi par caractère, pas par moteur

Les différents moteurs d'IA ont des tarifs bruts très disparates. Si nous vous facturions dans les unités natives des moteurs, vous ne sauriez jamais à l'avance ce qu'un lot coûterait. La facturation par caractère signifie :

- **Coût prévisible** — une étiquette de champ de 10 caractères coûte 10 crédits, quel que soit le moteur que vous choisissez.
- **Le changement de moteur est gratuit** — vous pouvez utiliser Gemini pour un lot et Claude pour le suivant, et le solde diminue de la même manière.
- **Marge fixe** — nous absorbons la variance de prix des moteurs pour que vous n'ayez pas à le faire.

## Ce qui est compté

Seule la chaîne **source** est mesurée. La traduction qui revient est gratuite.

Le coût d'un lot est approximativement : `somme de source_string.length pour chaque ligne du lot`. L'annulation d'un lot en cours de route ne vous facture que les lignes qui ont été réellement terminées.

## Solde et renouvellement

Votre solde actuel s'affiche sur le tableau de bord et s'actualise en direct. Les comptes gratuits bénéficient d'un solde de départ qui se renouvelle sur un cycle de 30 jours au même montant. Les comptes payants bénéficient d'une allocation mensuelle qui se renouvelle le premier jour de chaque cycle de facturation.

Au moment où le cycle de crédit bascule, deux choses se produisent :

1. Votre champ `ai_credits` est réinitialisé au montant de renouvellement du plan.
2. Votre historique de traduction dans la collection `translations` est purgé — voir [Supprimer votre compte](/fr/account-panel/delete-account/) pour la justification de minimisation du RGPD.

## Épuisement des crédits

Si vous manquez de crédits en milieu de lot, le lot se met en pause et la grille affiche un message « recharge requise ». Les lignes terminées sont conservées ; les lignes restantes attendent que vous rechargiez.

:::note[TODO]
Tableau des prix pour les plans payants une fois les tarifs finalisés. Note sur la façon dont les caractères par langue se traduisent en nombres de champs approximatifs.
:::
