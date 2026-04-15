---
title: Créditos de IA
description: Como os créditos funcionam, quanto custa cada coisa e como funciona o ciclo de renovação mensal.
---

Créditos de IA são a unidade que o TranSFlator usa para cobrar pelo trabalho de IA. Um crédito equivale a um caractere de texto de origem enviado para um motor de IA.

## Por que por caractere, não por motor

Diferentes motores de IA têm preços brutos muito variados. Se cobrássemos em unidades nativas dos motores, você nunca saberia antecipadamente quanto custaria um lote. A cobrança por caractere significa:

- **Custo previsível** — um rótulo de campo de 10 caracteres custa 10 créditos, independentemente de qual motor você escolher.
- **Troca de motor é gratuita** — você pode usar o Gemini para um lote e o Claude para o próximo, e o saldo diminuirá da mesma forma.
- **Margem fixa** — nós absorvemos a variação de preço dos motores para que você não precise se preocupar.

## O que é contado

Apenas a string de **origem** (source) é medida. A tradução que retorna é gratuita.

O custo de um lote é aproximadamente: `soma de source_string.length para cada linha no lote`. Cancelar um lote no meio do processo cobra apenas pelas linhas que foram realmente concluídas.

## Saldo e renovação

Seu saldo atual aparece no painel e é atualizado em tempo real. Contas gratuitas recebem um saldo inicial que se renova em um ciclo de 30 dias com o mesmo valor. Contas pagas recebem uma cota mensal que se renova no primeiro dia de cada ciclo de faturamento.

No momento em que o ciclo de créditos vira, duas coisas acontecem:

1. Seu campo `ai_credits` é redefinido para o valor de renovação do plano.
2. Seu histórico de tradução na coleção `translations` é limpo — veja [Excluir sua conta](/pt/account-panel/delete-account/) para a justificativa de minimização do GDPR.

## Esgotamento de créditos

Se você ficar sem créditos no meio de um lote, o lote pausa e a grade mostra uma mensagem de "recarregamento necessário". As linhas finalizadas são mantidas; as linhas restantes aguardam até que você recarregue.

:::note[TODO]
Tabela de preços para os planos pagos assim que os preços forem finalizados. Nota sobre como os caracteres por idioma se traduzem em contagens aproximadas de campos.
:::
