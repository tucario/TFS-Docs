---
title: Sua primeira tradução
description: Traduza alguns campos personalizados de ponta a ponta, da verificação à implantação, em menos de dez minutos.
---

Ao final desta página você terá:

1. Verificado uma organização sandbox
2. Filtrado para alguns campos personalizados
3. Traduzido em lote para um idioma de destino com IA
4. Implantado o resultado de volta no Salesforce

Tempo total: menos de dez minutos. Custo: alguns centenas de caracteres de crédito de IA.

## 1. Escolha um alvo seguro

Faça isso em um **sandbox** primeiro, nunca diretamente na produção. As implantações do TranSFlator são atômicas e podem ser revertidas, mas a confiança é mais barata que o arrependimento.

Abra a conexão sandbox que você criou em [Conecte sua organização Salesforce](/pt/getting-started/connect-your-org/).

## 2. Verificação (Scan)

O aplicativo verifica sua organização ao abrir pela primeira vez. Dependendo do tamanho da organização, isso leva de 10 segundos a alguns minutos. Você verá a grade de tradução ser preenchida com todos os elementos traduzíveis: campos personalizados, valores de listas de opções, tipos de registros, textos de ajuda, layouts, links da web, regras de validação, rótulos personalizados.

## 3. Filtragem

Clique no ícone de **Filter** e escolha **Custom Field → Label** para limitar a grade apenas aos rótulos de campos personalizados. Marque a caixa na coluna **Missing** para mostrar apenas as linhas que ainda não foram traduzidas. Você deve ter agora apenas algumas linhas.

## 4. Escolha um idioma de destino

Clique no seletor de idiomas no topo e escolha um idioma para o qual você ainda não possui traduções (ex: **Polonês**). A grade agora mostra a origem à esquerda e a coluna de destino à direita, vazia.

![O seletor de idioma de destino mostrando cada localidade ativada com sua barra de cobertura.](../../../../assets/screenshots/03-select-target-language.png)

Cada linha mostra quantas das entradas traduzíveis já estão cobertas naquele idioma — uma maneira rápida de identificar quais localidades precisam de atenção.

## 5. Traduzir

Clique em **AI all** na barra superior. Um diálogo aparecerá perguntando qual motor de IA usar — escolha um. Veja [Visão geral dos motores](/pt/ai-engines/overview/) se não tiver certeza.

O aplicativo envia cada linha para o backend do TranSFlator, que roteia a solicitação para o motor que você escolheu. Os resultados aparecem na grade conforme retornam. Você pode editar qualquer linha manualmente — a sugestão da IA torna-se um ponto de partida, não uma resposta final.

## 6. Implantação (Deploy)

Clique em **Deploy**. O aplicativo empacota as alterações em uma implantação de metadados, assina a solicitação com o token de acesso da sua conexão e a envia para a API de Metadados do Salesforce. Você verá um diálogo de progresso e depois:

- **Success** — as alterações estão ativas no seu sandbox.
- **Partial failure** — o aplicativo mostra exatamente quais componentes foram rejeitados e o porquê. Na maioria das vezes, é um campo de pacote gerenciado que o Salesforce não permite que ninguém toque; o aplicativo sinaliza esses campos e os ignora na nova tentativa.

## 7. Verificar

Abra seu sandbox em um navegador, altere o idioma da interface para o que você acabou de traduzir e verifique se os campos personalizados aparecem como esperado.

## Próximo

Pronto para ir mais longe? Leia [Tradução por IA em lote](/pt/desktop-app/batch-ai-translate/) para conhecer o conjunto completo de recursos.
