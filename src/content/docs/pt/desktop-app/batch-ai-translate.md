---
title: Tradução por IA em lote
description: Traduza centenas ou milhares de linhas em uma única passagem. Escolha um motor, escolha uma região, acompanhe o progresso e gerencie falhas.
---

A tradução por IA em lote é o recurso que faz valer a pena instalar o TranSFlator. Selecione as linhas, clique em **AI all**, escolha um motor, e o aplicativo transmite as traduções do provedor de IA diretamente para a grade conforme elas chegam.

## Iniciando um lote

1. Filtre e pesquise na grade até que apenas as linhas que você deseja traduzir estejam visíveis.
2. Clique em **Select all visible** (⌘/Ctrl + Shift + A).
3. Clique em **AI all** na barra de ferramentas.
4. Escolha um motor e uma região.
5. Confirme.

## Seleção do motor

O seletor mostra todos os motores que você tem ativados em sua conta e o custo estimado para as linhas selecionadas. Consulte a [Visão geral dos motores](/pt/ai-engines/overview/) para comparação.

## Seleção da região

Onde geograficamente a solicitação de tradução é processada. Relevante para requisitos de residência de dados — alguns provedores de IA permitem que você escolha entre EUA, UE, Ásia e Austrália. O TranSFlator encaminha sua escolha de região para o backend, que por sua vez roteia a solicitação para o endpoint correto do provedor.

## Progresso ao vivo

Um banner na parte inferior mostra as linhas concluídas / total, a taxa atual e o tempo estimado restante. Você pode cancelar no meio do lote — as linhas que já retornaram são mantidas na grade (ainda não salvas no workspace; salve com ⌘/Ctrl + S).

## Falhas

Se o provedor de IA rejeitar uma linha específica (muito longa, caracteres não suportados, bloqueio por política de conteúdo), essa linha permanecerá vazia e o erro será registrado na barra lateral. As linhas que falharam podem ser tentadas novamente individualmente ou ignoradas completamente.

## Modelo de custo

Cada lote consome créditos de IA do saldo da sua conta. Os créditos são consumidos por caractere da string de **origem** (source), não por linha — um rótulo de campo de 10 caracteres custa 10 créditos, não importa qual motor você use. Consulte [Créditos de IA](/pt/account-panel/ai-credits/) para o modelo de preços completo.

![Uma tradução em lote sendo executada para português do Brasil — 100 de 273 linhas concluídas, 37% completo.](../../../../assets/screenshots/05-translating-progress.png)

A barra de progresso no topo da grade é ao vivo: as linhas são preenchidas conforme a IA responde, e o botão **Stop** cancela as solicitações restantes sem perder as linhas que já retornaram.
