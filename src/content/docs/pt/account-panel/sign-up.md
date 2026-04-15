---
title: Inscrever-se e verificar e-mail
description: Crie uma conta TranSFlator no painel web, verifique seu e-mail e receba seus créditos iniciais.
---

O painel da conta em [panel.transflator.com](https://panel.transflator.com) é onde você cria a conta com a qual o aplicativo desktop se conecta. É uma aplicação Flutter Web baseada no Firebase.

## Inscrever-se

1. Abra [panel.transflator.com](https://panel.transflator.com).
2. Clique em **Inscrever-se**.
3. Digite seu endereço de e-mail e uma senha forte.
4. Clique em **Criar conta**.

Sua conta é criada no Firebase Auth e um documento correspondente é gravado na coleção `users` do Firestore com seu saldo inicial de créditos de IA e um token de API gerado.

## Verifique seu e-mail

Imediatamente após a inscrição, um e-mail transacional é enviado para o endereço que você registrou, contendo um link de verificação de um clique. O link é válido por **48 horas**. Até que você clique nele, não poderá recarregar créditos ou executar traduções que custam créditos.

Não recebeu o e-mail? Verifique sua pasta de spam primeiro e, em seguida, clique em **Reenviar verificação** no painel.

## Créditos iniciais

Novas contas recebem um saldo inicial gratuito de créditos de IA para que você possa avaliar o produto sem pagar. O valor e a cadência de renovação são mostrados no painel principal. Planos pagos não são necessários para o período de avaliação.

## Redefinição de senha

Se você esquecer sua senha, clique em **Esqueci minha senha** na tela de login. Um e-mail de redefinição será enviado pelo mesmo pipeline transacional, com um link válido por 1 hora.

:::note[TODO]
Capturas de tela da tela de inscrição, e-mail de verificação e painel após o primeiro login. Nota sobre o limite de caracteres do nível gratuito.
:::
