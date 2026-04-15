---
title: Instalar o aplicativo desktop
description: Baixe o TranSFlator para macOS ou Windows e execute-o pela primeira vez.
---

O TranSFlator é um aplicativo desktop nativo. Não existe uma versão de navegador do workspace de tradução — a grade, o fluxo OAuth e o armazenamento local de tokens criptografados vivem no aplicativo em sua máquina.

## Download

Pegue a versão mais recente na página de download em [transflator.com](https://transflator.com/download):

- **macOS** — `.dmg` universal, assinado e notarizado, roda tanto em máquinas Apple Silicon quanto Intel a partir do macOS 12 em diante.
- **Windows** — instalador `.msi`, 64 bits, Windows 10 em diante.

## Primeira execução

No macOS, o aplicativo solicitará permissão para armazenar um arquivo de chave em `~/Library/Application Support/TranSFlator`. Esse arquivo é a chave de criptografia AES-256 por máquina usada para proteger os tokens de atualização do Salesforce no disco. Ele tem permissão `chmod 600` e nunca sai da sua máquina. Veja [Segurança](/pt/security/) para o modelo de ameaça completo.

No Windows, o caminho equivalente é `%APPDATA%\TranSFlator`.

## Entrar (Sign in)

A primeira coisa que o aplicativo solicita é o e-mail e a senha da sua conta TranSFlator. Se você ainda não tem uma conta, abra [panel.transflator.com](https://panel.transflator.com), inscreva-se (grátis), verifique seu e-mail e volte. Veja [Inscrever-se e verificar e-mail](/pt/account-panel/sign-up/) para detalhes.

Após o login, o aplicativo troca suas credenciais por um token de API com o backend do TranSFlator e o armazena localmente em cache. De agora em diante, o token — e não sua senha — é usado para chamadas de API de tradução.

## Próximo

Assim que estiver logado, vá para [Conecte sua organização Salesforce](/pt/getting-started/connect-your-org/).

:::note[TODO]
Adicionar capturas de tela dos diálogos de primeira execução no macOS e Windows.
:::
