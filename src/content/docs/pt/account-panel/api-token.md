---
title: Configurações da API
description: Seu token de API, motor de IA preferido, limites de taxa, exemplo de curl e webhook de esgotamento de créditos — tudo em uma tela.
---

**API Settings** na barra lateral esquerda é o painel de controle
para uso direto da API. O aplicativo desktop lê a maioria desses
mesmos valores em seu nome; a tela existe para quando você quiser
chamar a API você mesmo a partir de um CI, script ou integração
de terceiros.

![A tela API Settings — card API Token com um token mascarado e botões Copy/Rotate Token, card AI Credits mostrando 5.000 de 5.000 caracteres restantes com data de renovação, seletor AI Engine com pills Gemini/Claude/Mistral/DeepSeek, um card Rate Limit mostrando 60 req/min, um card de exemplo cURL e um input Depletion Webhook.](../../../../assets/screenshots/panel/api-settings.png)

## Token de API

Cada conta TranSFlator tem um único token de API — uma longa
string aleatória que autentica sua conta contra a API de
tradução.

O card do token mostra o valor atual mascarado por padrão, com
duas ações:

- **Copy** — copia o token completo para a área de transferência.
  Trate-o como uma senha.
- **Rotate Token** — invalida o token atual e emite um novo.
  Use isso se você suspeitar que o token vazou (enviado para um
  repositório público, postado em chat, deixado em um arquivo de
  log) ou como parte de uma política de rotação regular.

Após a rotação, qualquer aplicativo desktop ou script que ainda
carregue o token antigo receberá `HTTP 401 Unauthorized` na
próxima chamada e precisará fazer login / ter sua configuração
atualizada.

## Créditos de IA

Um espelho do card de saldo do painel, exibido aqui porque
usuários diretos da API geralmente querem vê-lo ao lado do token
e do seletor de motor. Mostra os caracteres restantes, o limite
do plano e a data de renovação.

## Motor de IA

Escolha qual modelo alimenta traduções iniciadas pela API:

- **Gemini** — o modelo multilíngue de uso geral do Google.
- **Claude** — Anthropic, com nuance e consciência de contexto.
- **Mistral** — europeu, amigável ao GDPR, forte em idiomas da UE.
- **DeepSeek** — com bom custo-benefício e forte em CJK.

A seleção se aplica a toda chamada `POST /translate/batch` que
não sobrescreva `engine` em seu corpo. Alterar o motor aqui
também atualiza seu `preferred_ai_model` no documento de usuário,
então o aplicativo desktop o adota na próxima vez em que ele
hidratar.

## Limite de taxa

Mostra seu limite de taxa atual por token (por padrão 60 req/min).
Bursts acima disso retornam `HTTP 429 Too Many Requests` — recue
e tente novamente. O limite é aplicado por token de API, não por
IP, então rotacionar tokens não o redefine.

## Exemplo cURL

Uma chamada pronta para colar, pré-preenchida com seu token e
apontando para o endpoint de tradução em lote:

```bash
curl -X POST https://api.transflator.com/translate \
  -H "Authorization: Bearer <YOUR_API_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{"text":"Hello world","source_lang":"en","target_lang":"pl"}'
```

Clique em **Copy** no card para pegá-lo com seu token real
substituído. A resposta é um objeto JSON com a string traduzida
e metadados sobre qual motor a produziu.

## Webhook de esgotamento

Opcional. Cole uma URL HTTPS e nós faremos um POST com um payload
JSON para ela quando seu saldo de créditos chegar a zero. Útil
para:

- Alertar um plantão quando uma integração de API em produção
  ficar sem créditos.
- Disparar uma recarga automática no seu próprio sistema de
  faturamento.
- Enviar uma notificação para o Slack via um webhook de entrada.

Deixe o campo em branco para desativar. O webhook dispara uma vez
por evento de esgotamento (não em cada 429 posterior); ele rearma
na próxima recarga ou renovação.
