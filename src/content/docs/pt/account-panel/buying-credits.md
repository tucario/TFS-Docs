---
title: Comprando créditos
description: Recarregue seu saldo de créditos de IA via Stripe. Como funciona o checkout, para onde vão os recibos e como gerenciar faturas.
---

Quando você quiser traduzir mais do que a cota mensal do seu plano, pode recarregar com créditos adicionais a qualquer momento. Os pagamentos são processados pelo **Stripe**.

## Fluxo de recarregamento

1. No painel do painel, clique em **Comprar créditos**.
2. Escolha um tamanho de pacote na lista.
3. Clique em **Checkout** — isso abre o Stripe Checkout, hospedado no domínio do Stripe. Os detalhes do cartão são inseridos nos servidores do Stripe, não nos nossos.
4. Conclua o pagamento.
5. O Stripe redireciona você de volta para o painel. Um webhook do Stripe é acionado em nosso backend, que grava um documento em `purchases` no Firestore e aumenta seu saldo de `ai_credits` atomicamente.
6. O novo saldo fica visível no painel em poucos segundos.

## O que armazenamos

Cada compra concluída cria um documento na coleção `purchases` do Firestore com: seu `uid`, o ID da sessão do Stripe, a intenção de pagamento do Stripe, o valor pago, a moeda e os caracteres comprados. **Não** armazenamos números de cartão, CVV ou quaisquer outros dados do titular do cartão.

## Recibos

O Stripe envia um recibo por e-mail para o endereço da sua conta TranSFlator no momento em que o pagamento é compensado. Esse é o recibo oficial para seus registros.

## Pagamentos falhos

Se um pagamento for recusado, o webhook do Stripe nunca é acionado, portanto nenhuma compra é registrada e nenhum crédito é adicionado. Nada muda do nosso lado. Tente novamente com outro cartão.

## IVA / faturas para clientes da UE

O Stripe emite faturas em conformidade com o IVA através do Portal do Cliente. O histórico de faturas em autoatendimento é um recurso planejado para o painel; até lá, envie um e-mail para [hello@tucario.com](mailto:hello@tucario.com) com o e-mail da sua conta e nós enviaremos os PDFs.

:::note[TODO]
Captura de tela do fluxo de checkout, exemplo de fatura. Tabela de pacotes de crédito disponíveis assim que os preços forem finalizados.
:::
