---
title: Token de API
description: Gere, copie, rotacione e revogue seu token de API pessoal. Usado pelo aplicativo desktop e para chamadas diretas de API.
---

Toda conta TranSFlator possui um único **token de API** — uma longa string aleatória que autentica sua conta no backend do TranSFlator para chamadas de API de tradução.

Normalmente, você não precisa se preocupar com isso. O aplicativo desktop o utiliza automaticamente quando você faz login. A única vez que você interage diretamente com ele é quando deseja chamar a API de tradução a partir do seu próprio código (por exemplo, em um pipeline de CI/CD).

## Onde ele fica

No painel → **Perfil → Token de API**. O token é exibido com um botão **Copiar** e um botão **Regerar**.

## Regerar (rotacionar)

Clique em **Regerar** para invalidar o token atual e emitir um novo. Use isso se achar que o token vazou — foi enviado para um repositório público, postado em um chat, deixado em um arquivo de log — ou simplesmente como parte de um cronograma regular de rotação.

Após a regeneração, qualquer aplicativo desktop que já esteja logado com o token antigo receberá um erro `401 Unauthorized` em sua próxima chamada de API e solicitará que você faça login novamente.

## Usando diretamente

Envie-o como um token Bearer no cabeçalho `Authorization` ao chamar nossa API de tradução:

```bash
curl -X POST https://transflator-api.web.app/translate/batch \
  -H "Authorization: Bearer <SEU_TOKEN_DE_API>" \
  -H "Content-Type: application/json" \
  -d '{
    "strings": ["Account name", "Industry", "Annual revenue"],
    "target_language": "pt",
    "engine": "gemini"
  }'
```

A resposta é um array JSON de strings traduzidas na mesma ordem da entrada.

:::note[TODO]
Referência completa da API com todos os endpoints (`/translate/batch`, `/me`, `/packages`), códigos de erro, limites de taxa. Isso se tornará uma seção própria.
:::
