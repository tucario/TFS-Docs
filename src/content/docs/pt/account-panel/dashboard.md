---
title: Painel
description: Sua tela inicial no painel TranSFlator — saldo de créditos, estatísticas de tradução, saúde da API e o onboarding de primeira execução.
---

O painel é o que você vê logo após o login. Ele responde às três
perguntas pelas quais você geralmente acessa o panel:
*quantos créditos ainda tenho, a API está saudável e quanto
traduzi recentemente*.

![O painel do TranSFlator — cabeçalho de saudação, um card de AI Characters mostrando 5.000 caracteres restantes e a próxima data de renovação, um banner "Batch-translate with AI" com o mascote tucano e quatro cards de estatísticas abaixo: Usage (últimos 30 dias), Top language pairs (30d), Recent translations, API Health (24h) e Credits forecast.](../../../../assets/screenshots/panel/dashboard.png)

## O que cada bloco mostra

**AI Characters** — seu saldo atual de créditos e a data da
próxima renovação (plano gratuito: a cada 30 dias; planos pagos:
o primeiro dia do seu ciclo de faturamento). O botão
**Buy Characters** leva direto ao fluxo de compra.

**Batch-translate with AI** — um lembrete de quais motores estão
conectados (Gemini · Claude · Mistral · DeepSeek) e de que você
pode alternar entre eles a qualquer momento em **API Settings**.

**Usage · Last 30 days** — contagem corrente de caracteres
traduzidos nos últimos 30 dias em todos os motores. Útil para
avaliar visualmente se sua cota gratuita vai durar o mês.

**Top language pairs · 30d** — lista ranqueada dos seus pares
origem→destino mais usados. Vazio em uma conta nova; preenchido
automaticamente assim que você executa seus primeiros lotes.

**Recent translations** — uma amostra das linhas mais recentes
que você traduziu. Clicar em **Translation History** (barra
lateral esquerda) abre o log completo.

**API Health · 24h** — latência média e contagem de requisições
contra seu token de API nas últimas 24 horas. Se você vir um
pico de latência ou requisições que não iniciou, rotacione o
token imediatamente (veja [API settings](/account-panel/api-token/)).

**Credits forecast** — uma projeção ingênua de quando seu saldo
atual vai acabar, com base na sua tendência de uso recente.
Preenche após alguns dias de atividade.

## Onboarding de primeira execução

Novas contas que acabaram de verificar o e-mail passam por um
fluxo de onboarding em duas etapas antes do painel carregar pela
primeira vez.

### Etapa 1 — Escolha seu motor de IA

!["Choose Your AI Engine" etapa de onboarding — um grupo Recommended com Google Gemini e Anthropic Claude, agrupamentos regionais para North America, Europe, Asia e Australia & Oceania, cada um com um ou dois cards de motor, e um botão "Continue" na parte inferior.](../../../../assets/screenshots/panel/choose-engine.png)

O TranSFlator funciona com quatro motores de IA; você escolhe um
como padrão para novos lotes. O seletor os agrupa da seguinte forma:

- **Recommended** — padrões de uso geral: Google Gemini para
  tradução multilíngue rápida e precisa; Anthropic Claude para
  trabalhos com nuance e contexto.
- **North America** — processamento baseado nos EUA para tráfego
  NA com baixa latência.
- **Europe** — Mistral AI, em conformidade com GDPR e forte em
  idiomas da UE.
- **Asia** — DeepSeek, com bom custo-benefício e forte em CJK.
- **Australia & Oceania** — Gemini, melhor cobertura regional.

A escolha não é definitiva. Você pode trocar de motor a qualquer
momento pela tela **API Settings** ou na configuração de lote do
aplicativo desktop.

### Etapa 2 — Escolha seu plano

!["Choose Your Plan" etapa de onboarding — um card Free Plan (5.000 caracteres/mês, acesso à API com autenticação por token, todos os idiomas suportados, traduções otimizadas para Salesforce) com um botão "Continue with Free Plan", e um card Premium ("Need more characters?") com um botão "View Premium Packages".](../../../../assets/screenshots/panel/choose-plan.png)

O plano gratuito (5.000 caracteres a cada 30 dias, acesso à API,
todos os idiomas suportados) é suficiente para avaliar o
TranSFlator de ponta a ponta e até cobrir pequenas organizações.
Para volumes maiores, o card **Premium** abre o seletor de pacotes
— veja [Comprar créditos](/account-panel/buying-credits/) para
detalhes.

Clique em **Continue with Free Plan** para concluir o onboarding
e chegar ao painel. Você pode comprar pacotes a qualquer momento
pelo botão **Buy Characters** do painel ou pela entrada
**Buy Characters** na barra lateral.
