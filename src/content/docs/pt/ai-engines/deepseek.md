---
title: DeepSeek
description: DeepSeek é o motor a escolher quando você está traduzindo para chinês, japonês, coreano ou outros idiomas asiáticos — e para lotes de alto volume.
---

<img src="/engine-logos/deepseek.svg" alt="Logo do DeepSeek" width="96" height="96" />

O DeepSeek é o motor que você escolhe quando o idioma de destino é **chinês, japonês, coreano** ou outro idioma do Leste / Sudeste Asiático. O modelo é treinado com um peso muito maior em idiomas asiáticos do que os outros três provedores, e isso transparece na fluência e naturalidade do resultado.

## Pontos fortes

- **Idiomas asiáticos.** Notavelmente mais natural em mandarim (simplificado e tradicional), japonês, coreano, vietnamita, tailandês e indonésio do que o Gemini ou o Claude.
- **Lida de forma limpa com casos extremos de codificação de caracteres CJK.** Rótulos de campos com pontuação de meia largura / largura total, sufixos honoríficos e o limite de 40 caracteres nos rótulos de campos do Salesforce retornam todos corretos.
- **Muito rápido em lotes grandes.** Lida com dezenas de milhares de linhas em uma única passagem sem tropeços de limite de taxa.

## Pontos fracos

- **Mais fraco em idiomas europeus** do que o Mistral ou o Claude. Para francês, alemão, italiano, polonês, espanhol — escolha outra coisa.
- **Hospedado fora do EEE.** Transferências internacionais requerem SCCs (veja a [política de privacidade](https://transflator.com/privacy)). Se sua equipe jurídica bloquear provedores fora do EEE, use o Mistral.

## Quando escolher

- Localizando uma organização Salesforce para japonês, coreano ou mandarim.
- Expandindo para mercados APAC onde vários idiomas asiáticos estão no escopo ao mesmo tempo.
- Traduzindo valores de listas de opções (picklists) personalizadas para idiomas asiáticos onde o Gemini forneceu resultados estranhos ou literais.

## Quando *não* escolher

- Requisitos de residência de dados apenas na UE.
- Alvos em idiomas europeus — Mistral, Gemini e Claude superam-no aqui.

:::note[TODO]
Exemplos lado a lado de rótulos de campos em japonês e coreano traduzidos pelo DeepSeek vs Gemini. Esclarecer exatamente qual endpoint do DeepSeek o backend chama.
:::
