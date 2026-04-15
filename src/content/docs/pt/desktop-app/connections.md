---
title: Conexões
description: Gerenciando conexões de organizações Salesforce no aplicativo desktop — adicionar, renomear, testar, excluir.
---

Uma **conexão** no TranSFlator representa uma organização Salesforce na qual você se autenticou. Cada conexão é uma linha na barra lateral do aplicativo com seu próprio token de atualização criptografado, rótulo e carimbo de data/hora do último teste.

Você pode adicionar quantas conexões quiser — produção, múltiplos sandboxes, scratch orgs, organizações de clientes se você for um consultor. O aplicativo as mantém lado a lado e a troca é feita com um clique.

## Adicionar, renomear, excluir

Consulte [Conecte sua organização Salesforce](/pt/getting-started/connect-your-org/) para o fluxo de adição. Para renomear, clique com o botão direito na conexão na barra lateral → **Rename**. Para excluir, clique com o botão direito → **Delete**. A exclusão de uma conexão remove o token de atualização criptografado do `transflate.db` imediatamente; o Salesforce não é informado, portanto o token de atualização permanecerá válido no lado do Salesforce até que você o revogue manualmente em **Setup → Connected Apps OAuth Usage**.

## Testar conexão

O pequeno ponto ao lado de cada conexão mostra seu status:

- **Verde** — último teste bem-sucedido, token válido.
- **Laranja** — não testado nesta sessão, pode estar obsoleto.
- **Vermelho** — último teste falhou. Clique para reautenticar.

Clique em qualquer conexão e o aplicativo acessa `/services/data/v65.0/` na organização para revalidar a sessão antes de carregar o workspace. Se o token foi revogado ou expirou, você será solicitado a reautorizar através do fluxo OAuth normal.

![A lista de conexões do TranSFlator com um arquivo STF local, um sandbox DQS Playground e uma organização de produção lado a lado.](../../../../assets/screenshots/01-connections-list.png)

O fluxo de importação apenas de STF (primeira linha acima) cria uma "pseudo conexão" que não possui token de atualização — ela apenas contém o conteúdo analisado de um arquivo `.stf` e não pode ser implantada de volta no Salesforce até que você anexe uma organização real.
