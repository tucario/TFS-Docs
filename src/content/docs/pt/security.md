---
title: Segurança
description: Modelo de segurança do TranSFlator — OAuth PKCE, armazenamento de tokens AES-256, telemetria zero, para onde seus dados vão e para onde não vão.
---

A versão curta: **seus tokens do Salesforce nunca saem da sua máquina e nunca enviamos seus dados para nossos servidores**. O aplicativo desktop é local por design, o painel da conta armazena apenas o necessário para faturamento e nada em lugar nenhum faz análises (analytics).

## OAuth 2.0 com PKCE (S256)

Quando você conecta uma organização Salesforce, o aplicativo desktop executa o fluxo padrão Salesforce OAuth 2.0 Web Server — **com PKCE, usando o método de desafio de código SHA-256**.

O que isso significa na prática:

- O aplicativo gera um **verificador de código** (code verifier) criptograficamente aleatório de 32 bytes por tentativa de login.
- Ele calcula o hash SHA-256 desse verificador e envia o hash como o parâmetro `code_challenge`.
- O Salesforce redireciona de volta para `http://localhost:1717/oauth/callback` com um código de autorização. O ouvinte de loopback nunca expõe nada à rede.
- O aplicativo troca o código por tokens **diretamente com o Salesforce**, enviando o verificador original como prova. Nosso backend **não** está no meio dessa troca.

Um código de autorização roubado é inútil sem o verificador correspondente, que o aplicativo nunca envia pela rede.

## Tokens de atualização criptografados com AES-256-CBC

Os tokens de atualização (refresh tokens) são armazenados localmente, criptografados com **AES-256-CBC**.

- A chave de 256 bits é gerada uma vez por instalação, a partir da fonte aleatória criptograficamente segura do SO, e armazenada em um arquivo chamado `.enc_key` em `Application Support`, com `chmod 600`.
- Um novo IV de 16 bytes é gerado para cada gravação e anexado ao texto cifrado.
- O arquivo criptografado é o `transflate.db` no mesmo diretório.
- **Tokens de acesso nunca são gravados no disco.** Eles residem apenas na memória do processo. Quando o aplicativo é fechado, eles desaparecem; na próxima vez que você clicar na conexão, o aplicativo troca novamente o token de atualização por um novo token de acesso.

## Telemetria zero

O aplicativo desktop é fornecido **sem nenhum tipo de SDK de análise**. Sem PostHog, sem Sentry, sem Firebase Analytics, sem Crashlytics, sem Mixpanel, sem Amplitude. Faça um grep no código-fonte se não acreditar em nós.

As únicas chamadas de rede externas que o aplicativo faz são:

- Para o Salesforce (OAuth + API de Metadados), na URL da instância que você mesmo escolheu
- Para o provedor de IA escolhido (através do backend do TranSFlator)
- Para `transflator-api.web.app` para validação de licença, informações da sua conta e o endpoint de tradução em lote — tudo via TLS

Nada mais.

## HTTPS em todo lugar

Todas as chamadas externas, exceto o loopback OAuth, usam TLS 1.2 ou superior. O loopback OAuth é em texto simples sobre `127.0.0.1` — esse tráfego literalmente nunca sai da sua máquina, portanto o TLS não acrescentaria nada.

## Revalidação de sessão em cada conexão

Cada vez que você clica em uma conexão para abri-la, o aplicativo acessa `/services/data/v65.0/` para validar a sessão. Tokens obsoletos ou revogados são detectados imediatamente e solicitam que você autorize novamente. Nada é executado contra uma sessão inválida.

## Trazer sua própria chave de provedor de IA? Não.

O TranSFlator gerencia as chaves dos provedores no backend — você não precisa colar uma chave da OpenAI, uma chave do Google ou algo semelhante. O benefício é o tempo de integração (zero); a desvantagem é que todas as chamadas de tradução passam pelo nosso backend, que é um limite de confiança com o qual você precisa estar confortável. Veja a [política de privacidade](https://transflator.com/privacy) para o que isso significa na prática.

## O que há no arquivo `transflate.db`?

- **`connections`** — seus rótulos de organizações salvas, URLs de instâncias, tipo de ambiente, carimbo de data/hora do último teste
- **`tokens`** — tokens de atualização criptografados com AES, um por conexão
- **`workspace`** — resultados de verificação de metadados em cache
- **`deployment_log`** — histórico local de implantações que você iniciou

Exclua este arquivo para apagar tudo, exceto sua `.enc_key`. Exclua também a `.enc_key` e a próxima execução gerará uma nova.

:::note[TODO]
Adicionar diagramas do fluxo OAuth e do roteamento de residência de dados. Adicionar uma seção sobre assinatura e notarização de código no macOS, SmartScreen no Windows e o que acontece quando a Apple/Microsoft revoga um certificado de assinatura.
:::
