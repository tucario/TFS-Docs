---
title: Perfil
description: Detalhes da sua conta, motor de IA preferido, alterações de senha e e-mail, e o ponto de entrada para excluir a conta.
---

A tela **Profile** é a última entrada na barra lateral do painel.
Tudo que não é faturamento ou histórico de tradução fica aqui.

![A tela Profile — cabeçalho da conta com o e-mail do usuário, data de membro desde e um selo Verified, um card Preferred AI Engine mostrando Mistral AI (Europe) com um botão Change AI Engine, um card Security com linhas Password e Email address cada uma com um botão Change, e um card vermelho Danger Zone com uma linha Delete account e um botão Delete.](../../../../assets/screenshots/panel/profile.png)

## Cabeçalho da conta

Mostra seu e-mail de login (mascarado nos screenshots), sua data
de membro desde e um selo **Verified** assim que você confirmar
o e-mail. Se o selo estiver faltando, volte e finalize a
[verificação de e-mail](/account-panel/sign-up/#verify-your-email).

## Motor de IA preferido

Um resumo do motor atualmente definido como seu padrão, com um
botão **Change AI Engine**. Clicar nele reabre o mesmo seletor
de motores que você viu durante o onboarding (veja
[Dashboard — first-run onboarding](/account-panel/dashboard/#first-run-onboarding)).

Alterar o motor aqui atualiza o campo `preferred_ai_model` no
seu documento de usuário; novas traduções (painel, desktop, API
sem um `engine` explícito) o adotam imediatamente.

## Segurança

Duas ações independentes:

- **Password — Change** — abre um diálogo que pede novamente sua
  senha atual e depois a nova senha duas vezes. A atualização é
  bem-sucedida atomicamente no Firebase Auth; nenhuma outra
  sessão é desconectada, então, se você alterou por causa de um
  vazamento suspeito, rotacione também seu
  [token de API](/account-panel/api-token/).
- **Email address — Change** — envia um link de verificação para
  o novo endereço. A alteração só tem efeito quando você clica
  nesse link; até lá, o login ainda funciona com o endereço
  antigo.

## Danger Zone

Um card com borda vermelha na parte inferior da tela. A única
ação é **Delete account**, e ela foi deliberadamente colocada à
parte para que não possa ser clicada por engano. Clicar em
**Delete** inicia a cascata descrita em
[Excluir sua conta](/account-panel/delete-account/).

A exclusão é **irreversível** e remove seu documento de usuário,
histórico de compras, histórico de traduções e registro do
Firebase Auth. Leia a página vinculada antes de clicar.
