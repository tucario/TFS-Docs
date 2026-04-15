---
title: Excluir sua conta
description: Como excluir permanentemente sua conta TranSFlator e tudo o que mantemos sobre você. Abrange o Art. 17 do GDPR (direito ao esquecimento).
---

Você pode excluir sua conta TranSFlator a qualquer momento. A exclusão é irreversível, propaga-se por todos os dados que mantemos sobre você e é concluída em até 30 dias.

## Exclusão por autoatendimento

1. Faça login em [panel.transflator.com](https://panel.transflator.com).
2. Abra **Configurações → Conta**.
3. Clique em **Excluir minha conta**.
4. Confirme digitando seu e-mail novamente.
5. Clique em **Excluir permanentemente**.

## O que acontece em seguida

Uma Cloud Function é acionada e, em uma única transação:

- Exclui seu documento da coleção `users`.
- Exclui cada linha na coleção `purchases` onde `uid == seu_uid`.
- Exclui cada linha na coleção `translations` onde `user_id == seu_uid`.
- Exclui seu registro no Firebase Auth, invalidando quaisquer sessões ativas.
- Grava uma entrada no log de auditoria com o carimbo de data/hora da exclusão e o hash do usuário.

Seu token de API é invalidado imediatamente. O aplicativo desktop, se estiver em execução, falhará em sua próxima chamada com `401 Unauthorized`.

## O que permanece

Duas coisas são retidas após a exclusão da conta, por motivos fora do nosso controle:

- **Registros de compra do Stripe** — O Stripe mantém registros de pagamento por seus próprios motivos de PCI e regulamentação financeira. Você pode solicitar a exclusão diretamente ao Stripe, se necessário.
- **Dados de faturamento necessários para a lei contábil polonesa** — faturas emitidas contra sua conta são retidas por 5 anos sob o Art. 74 da Lei de Contabilidade Polonesa. Elas contêm seu nome e detalhes de pagamento, mas nada sobre seu trabalho de tradução.

## Artigo 20 do GDPR — exportação de dados

Se você desejar uma cópia de seus dados em formato legível por máquina **antes** da exclusão, envie um e-mail para [hello@tucario.com](mailto:hello@tucario.com) e enviaremos uma exportação em JSON dentro de 30 dias. Um botão de exportação em autoatendimento está planejado para a tela de perfil.

:::note[TODO]
Captura de tela do diálogo de exclusão. Link para a política de privacidade assim que publicada em transflator.com/privacy.
:::
