---
title: Profil
description: Les détails de votre compte, votre moteur d'IA préféré, les modifications de mot de passe et d'e-mail, et le point d'entrée pour la suppression du compte.
---

L'écran **Profile** est la dernière entrée de la barre latérale du panneau.
Tout ce qui n'est ni facturation ni historique de traduction se trouve ici.

![L'écran Profile — un en-tête de compte avec l'e-mail de l'utilisateur, la date d'inscription et un badge Verified, une carte Preferred AI Engine affichant Mistral AI (Europe) avec un bouton Change AI Engine, une carte Security avec des lignes Password et Email address chacune dotée d'un bouton Change, et une carte rouge Danger Zone avec une ligne Delete account et un bouton Delete.](../../../../assets/screenshots/panel/profile.png)

## En-tête du compte

Affiche l'e-mail de connexion (masqué sur les captures d'écran), votre
date d'inscription et un badge **Verified** une fois que vous avez confirmé
l'e-mail. Si le badge est absent, revenez en arrière et terminez la
[vérification de l'e-mail](/account-panel/sign-up/#verify-your-email).

## Moteur d'IA préféré

Un résumé du moteur actuellement défini par défaut, avec un
bouton **Change AI Engine**. Cliquer dessus rouvre le même
sélecteur de moteur que vous avez vu pendant l'intégration (voir
[Tableau de bord — intégration à la première exécution](/account-panel/dashboard/#first-run-onboarding)).

Changer le moteur ici met à jour le champ `preferred_ai_model`
sur votre document utilisateur ; les nouvelles traductions (panneau, bureau, API
sans `engine` explicite) le prennent en compte immédiatement.

## Sécurité

Deux actions autonomes :

- **Password — Change** — ouvre une boîte de dialogue qui redemande votre
  mot de passe actuel, puis demande deux fois le nouveau. La mise à jour
  réussit de manière atomique dans Firebase Auth ; aucune autre session n'est
  déconnectée, donc si vous avez changé à cause d'une fuite présumée,
  faites aussi tourner votre [jeton d'API](/account-panel/api-token/).
- **Email address — Change** — envoie un lien de vérification à la
  nouvelle adresse. Le changement ne prend effet qu'une fois que vous avez cliqué sur ce
  lien ; en attendant, la connexion fonctionne toujours avec l'ancienne adresse.

## Danger Zone

Une carte à bordure rouge en bas de l'écran. La seule action
est **Delete account**, et elle est délibérément mise à l'écart pour qu'elle
ne puisse pas être cliquée par erreur. Cliquer sur **Delete** déclenche la
cascade décrite dans [Supprimer votre compte](/account-panel/delete-account/).

La suppression est **irréversible** et retire votre document utilisateur,
l'historique d'achats, l'historique de traduction et l'enregistrement Firebase Auth.
Lisez la page liée avant de cliquer.
