---
title: Sauts de paquets gérés (Managed packages)
description: Pourquoi TranSFlator marque certains champs comme non traduisibles, ce qu'est réellement un "paquet géré" et comment traduire le texte d'aide sur les paquets gérés que vous possédez.
---

TranSFlator marque automatiquement les champs et éléments appartenant à des **paquets gérés** (managed packages) en lecture seule dans la grille. Si vous vous demandez pourquoi votre champ préféré est grisé, cette page est pour vous.

## Ce que "paquet géré" signifie

Un paquet géré est une application installée dans votre organisation Salesforce depuis l'AppExchange (ou depuis votre propre organisation de développement ISV). Les champs, objets, étiquettes et mises en page fournis avec un paquet géré ont un préfixe d'espace de noms (namespace) comme `ns__FieldName__c`.

Salesforce verrouille les métadonnées de ces composants. **Même un Administrateur Système ne peut pas modifier la traduction d'un champ d'un paquet géré à partir d'une organisation cliente** — seul le développeur du paquet géré le peut, et uniquement depuis l'organisation de développement.

TranSFlator détecte le préfixe d'espace de noms au moment du scan et grise chaque composant qui en possède un. Ce n'est pas un bug — c'est une protection contre des déploiements qui échoueraient avec "Managed package component cannot be modified".

## "Mais je possède le paquet géré"

Dans ce cas, vous devez le traduire **depuis votre organisation de développement**, et non depuis l'organisation cliente qui l'a installé. Voici le flux :

1. Ouvrez TranSFlator et connectez-vous à votre **organisation de développement de paquet géré** (celle à partir de laquelle vous réalisez les versions).
2. Scan. Les champs de votre espace de noms apparaîtront désormais comme modifiables.
3. Traduisez et déployez normalement.
4. Créez une nouvelle version du paquet géré.
5. Les organisations clientes récupèrent les nouvelles traductions lors de leur prochaine mise à niveau du paquet.

## Paquets non gérés (Unmanaged) et paquets gérés de première génération

Les paquets non gérés n'ont pas d'espace de noms et sont entièrement modifiables partout. Traitez-les comme n'importe quel autre composant — TranSFlator ne les ignorera pas.

Les composants de paquets gérés de première génération installés en tant que **bêta** (non encore livrés) sont également modifiables pour le développeur, mais pas pour les consommateurs.

## Étiquettes personnalisées (Custom Labels)

Les étiquettes personnalisées se comportent légèrement différemment : les étiquettes personnalisées `Protected` d'un paquet géré sont verrouillées de la même manière que les champs. Les étiquettes personnalisées `Public` *peuvent* être remplacées par langue dans l'organisation cliente, et TranSFlator l'autorise — mais le remplacement n'est visible que dans l'organisation cliente, et non dans le paquet source.

:::note[À FAIRE]
Captures d'écran concrètes du grisé en lecture seule dans la grille et de l'indicateur de paquet géré dans le panneau de métadonnées. Documenter la version exacte de l'API que TranSFlator utilise pour détecter l'espace de noms.
:::
