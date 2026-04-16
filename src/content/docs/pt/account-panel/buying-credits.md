---
title: Comprar créditos
description: Recarregue seu saldo de créditos de IA via Stripe. Como funcionam a seleção de plano, o checkout, os recibos e as faturas.
---

Quando você quiser traduzir mais do que a cota mensal do plano
gratuito, pode recarregar com créditos adicionais a qualquer
momento. Os pagamentos são processados pelo **Stripe**.

## Escolha seu plano

![A tela "Choose Your Plan" — um card Free Plan (5.000 caracteres/mês, acesso à API com autenticação por token, todos os idiomas suportados, traduções otimizadas para Salesforce) marcado como plano atual, e um card Premium "Need more characters?" com itens (até 10.000.000+ caracteres, sem limites mensais, caracteres nunca expiram, processamento prioritário de tradução) e um botão View Premium Packages.](../../../../assets/screenshots/panel/choose-plan.png)

O seletor de planos está disponível tanto durante o onboarding de
primeira execução quanto pela entrada **Buy Characters** na barra
lateral.

**Plano gratuito** — 5.000 caracteres por ciclo de 30 dias,
acesso completo à API, todos os idiomas suportados, prompts
otimizados para Salesforce. Suficiente para pequenas organizações,
avaliações e trabalhos leves de manutenção.

**Premium** — pacotes adicionais de caracteres além da sua cota
mensal:

- Até 10.000.000+ caracteres por pacote.
- Sem limite mensal — use no seu próprio ritmo.
- **Os caracteres nunca expiram.** Diferente da cota mensal
  gratuita, os créditos comprados permanecem no seu saldo até
  serem usados.
- Processamento prioritário de tradução nas filas do backend.

Clique em **View Premium Packages** para abrir a lista de pacotes
e escolher um tamanho.

## Fluxo de recarga

1. No painel, clique em **Buy Characters** (barra lateral ou card
   do painel) → **View Premium Packages**.
2. Escolha um tamanho de pacote na lista.
3. Clique em **Checkout** — isso abre o Stripe Checkout, hospedado
   no próprio domínio do Stripe. Os dados do cartão são inseridos
   nos servidores do Stripe, não nos nossos.
4. Conclua o pagamento.
5. O Stripe redireciona você de volta ao painel. Um webhook do
   Stripe dispara no nosso backend, escreve um documento
   `purchases` no Firestore e aumenta seu saldo de `ai_credits`
   atomicamente.
6. O novo saldo aparece no painel em poucos segundos.

## O que armazenamos

Cada compra concluída cria um documento na coleção `purchases`
do Firestore com: seu `uid`, o ID da sessão do Stripe, o payment
intent do Stripe, valor pago, moeda e caracteres comprados. Nós
**não** armazenamos números de cartão, CVV ou quaisquer outros
dados do portador do cartão.

## Recibos

O Stripe envia um recibo por e-mail para o endereço registrado em
sua conta TranSFlator assim que o pagamento é compensado. Esse é
o recibo oficial para seus registros.

## Pagamentos recusados

Se um pagamento é recusado, o webhook do Stripe nunca dispara, de
modo que nenhuma compra é registrada e nenhum crédito é
adicionado. Nada muda do nosso lado. Tente novamente com outro
cartão.

## IVA / faturas para clientes da UE

O Stripe emite faturas em conformidade com IVA através do
Customer Portal. Um histórico de faturas self-service é um
recurso planejado no painel; até lá, envie um e-mail para
[hello@tucario.com](mailto:hello@tucario.com) com o e-mail da sua
conta e enviaremos os PDFs.
