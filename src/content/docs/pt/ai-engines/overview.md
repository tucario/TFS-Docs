---
title: Visão geral dos motores
description: Como os quatro motores de tradução por IA se comparam em velocidade, cobertura de idiomas, formato de custo e residência de dados.
---

O TranSFlator suporta quatro motores de tradução por IA nativamente. Todos os quatro são acessados através do mesmo **backend do TranSFlator**, o que significa:

- **Você não precisa de chaves de API dos provedores.** Os créditos em sua conta cobrem qualquer motor.
- **Você não fala diretamente com o provedor** a partir do aplicativo desktop — o backend faz isso, via TLS, com endpoints regionais apropriados baseados em sua escolha.
- **Você pode trocar de motor entre lotes.** Não há sobrecarga de configuração por motor.

## Comparação rápida

| Motor | Melhor para | Velocidade | Cobertura de idiomas | Opções de residência de dados |
| --- | --- | --- | --- | --- |
| **Google Gemini** | Textos de negócios cotidianos, amplo alcance de idiomas | Rápido | 100+ | EUA, UE, Ásia, Austrália |
| **Anthropic Claude** | Textos com nuances, strings longas, voz de marca | Média | 95+ | EUA, UE |
| **Mistral** | Implantações na UE sensíveis à privacidade | Rápido | 40+ (forte em idiomas da UE) | Apenas UE |
| **DeepSeek** | Idiomas asiáticos (CJK, vietnamita, tailandês, indonésio) | Muito rápido | 80+, forte em asiáticos | Fora do EEE |

Todos os custos são faturados em créditos do TranSFlator a uma taxa fixa por caractere, independentemente de qual motor você escolher. Nos bastidores, o backend absorve a diferença de preço entre os motores.

## Escolhendo um

- **Não importa / quer apenas resultados?** Use o Gemini. É o padrão e é muito bom.
- **Conteúdo sensível, voz de marca, textos jurídicos?** Claude. O cuidado extra vale a pena.
- **Deve permanecer na UE?** Mistral.
- **Traduzindo para chinês, japonês, coreano ou outros idiomas asiáticos?** DeepSeek — é treinado com um peso muito maior em idiomas asiáticos do que os outros.

## Páginas por motor

- [Google Gemini](/pt/ai-engines/gemini/)
- [Anthropic Claude](/pt/ai-engines/claude/)
- [Mistral](/pt/ai-engines/mistral/)
- [DeepSeek](/pt/ai-engines/deepseek/)

:::note[TODO]
Dados reais de benchmark: pontuações de precisão por motor em um corpus fixo de 1000 rótulos de campos do Salesforce em 5 idiomas de destino, com notas dos avaliadores.
:::
