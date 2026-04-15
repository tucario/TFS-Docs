---
title: Fluxo de trabalho de arquivo STF
description: Importe e exporte arquivos STF Bilíngues do Salesforce para o fluxo clássico do Workbench de Tradução.
---

Algumas organizações bloqueiam a API de Metadados. Alguns clientes de consultoria desejam revisar as traduções offline no Excel. Para ambos os casos, o TranSFlator suporta o formato clássico de arquivo **Salesforce Bilingual STF**: importe um arquivo STF, edite-o na grade, exporte um novo.

## Importando um STF

1. Na barra lateral de conexões, clique em **Import STF file**.
2. Escolha o arquivo `.stf` exportado da tela **Setup → Translation Workbench** no Salesforce.
3. Dê um rótulo a ele.

Uma "pseudo conexão" aparece com um ícone de documento em vez de um ícone de nuvem — indicando que esta conexão não possui token de atualização e não pode realizar implantações diretas. Você pode traduzir as linhas normalmente.

## Exportando um STF

Com uma conexão STF selecionada, clique em **Export STF file** na barra de ferramentas. Você receberá de volta um arquivo que é compatível com o fluxo de importação do Workbench de Tradução do Salesforce: mesmo cabeçalho `Bilingual`, mesma ordem de linhas, mesmos separadores de tabulação.

## Quando usar isso em vez da implantação direta

- Seu administrador desativou a API de Metadados para o seu perfil.
- Você deseja que um revisor humano aprove as traduções no Excel antes de tocar no Salesforce.
- Você é um consultor e seu cliente deseja o arquivo final para seu próprio registro de auditoria.

## O que não é preservado

Arquivos STF são apenas de texto. Qualquer coisa que não seja texto e que o TranSFlator normalmente pode tocar (nomes de layout, disponibilidade de tipo de registro, etc.) não pode ser exportado desta forma. Para o conjunto completo de recursos, use uma conexão real.

:::note[TODO]
Captura de tela do diálogo de importação de STF, captura de tela da pseudo conexão na barra lateral, exemplo de arquivo `.stf` com algumas linhas.
:::
