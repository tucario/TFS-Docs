---
title: Supprimer votre compte
description: Comment supprimer définitivement votre compte TranSFlator et tout ce que nous détenons à votre sujet. Couvre l'Art. 17 du RGPD (droit à l'effacement).
---

Vous pouvez supprimer votre compte TranSFlator à tout moment. La suppression est irréversible, se répercute sur chaque donnée que nous détenons et se termine dans les 30 jours.

## Suppression en libre-service

1. Connectez-vous à [panel.transflator.com](https://panel.transflator.com).
2. Ouvrez **Paramètres → Compte**.
3. Cliquez sur **Supprimer mon compte**.
4. Confirmez en saisissant à nouveau votre e-mail.
5. Cliquez sur **Supprimer définitivement**.

## Ce qui se passe ensuite

Une Cloud Function se déclenche et, en une seule transaction :

- Supprime votre document de la collection `users`.
- Supprime chaque ligne de la collection `purchases` où `uid == votre_uid`.
- Supprime chaque ligne de la collection `translations` où `user_id == votre_uid`.
- Supprime votre enregistrement Firebase Auth, invalidant toutes les sessions actives.
- Écrit une entrée de journal d'audit avec l'horodatage de la suppression et le hachage de l'utilisateur.

Votre jeton API est invalidé immédiatement. L'application de bureau, si elle est en cours d'exécution, échouera à son prochain appel avec l'erreur `401 Unauthorized`.

## Ce qui reste

Deux choses sont conservées après la suppression du compte, pour des raisons indépendantes de notre volonté :

- **Enregistrements d'achat Stripe** — Stripe conserve les enregistrements de paiement pour ses propres raisons de conformité PCI et de réglementation financière. Vous pouvez demander la suppression directement auprès de Stripe si nécessaire.
- **Données de facturation nécessaires pour la loi comptable polonaise** — les factures émises pour votre compte sont conservées pendant 5 ans en vertu de l'art. 74 de la loi polonaise sur la comptabilité. Celles-ci contiennent votre nom et vos détails de paiement, mais rien sur votre travail de traduction.

## RGPD Article 20 — export de données

Si vous souhaitez une copie de vos données lisible par machine **avant** la suppression, envoyez un e-mail à [hello@tucario.com](mailto:hello@tucario.com) et nous vous enverrons un export JSON dans les 30 jours. Un bouton d'exportation en libre-service est prévu pour l'écran de profil.

:::note[TODO]
Capture d'écran de la boîte de dialogue de suppression. Lien vers la politique de confidentialité une fois publiée sur transflator.com/privacy.
:::
