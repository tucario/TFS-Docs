---
title: Erros de OAuth
description: Corrija os erros comuns de OAuth que você pode encontrar ao conectar uma organização Salesforce — incompatibilidades de redirecionamento, sessões expiradas, tokens revogados.
---

A maioria dos erros de OAuth são comuns e se enquadram em uma de quatro categorias. Aqui está como diferenciá-los e corrigi-los.

## "redirect_uri mismatch"

**Sintoma:** O Salesforce mostra uma página de erro genérica em vez da tela "Allow", com `error=redirect_uri_mismatch` na URL.

**Causa:** O TranSFlator Connected App no Salesforce está configurado com uma URL de retorno que não corresponde ao que o aplicativo realmente usa (`http://localhost:1717/oauth/callback`).

**Correção:** Isso nunca deveria acontecer para os clientes — significaria que os metadados do nosso Connected App foram corrompidos. Se você encontrar isso, envie um e-mail para [hello@tucario.com](mailto:hello@tucario.com) com a URL do seu navegador.

## "invalid_grant" na troca de token

**Sintoma:** O navegador redireciona de volta corretamente, mas o aplicativo mostra "authentication failed".

**Causa:** O código de autorização expirou antes que o aplicativo pudesse trocá-lo. Acontece se você demorou mais de um minuto na tela de permissão do Salesforce.

**Correção:** Clique em **Add Connection** novamente e percorra o fluxo sem pausar.

## "session expired or invalid"

**Sintoma:** A conexão estava funcionando ontem, hoje ao clicar nela aparece um ponto vermelho e "Session expired".

**Causa:** Seu token de atualização foi revogado. Isso acontece quando:

- Um administrador clicou em **Revoke** no TranSFlator Connected App na tela de Uso de OAuth de Aplicativos Conectados do Salesforce.
- A senha do seu usuário do Salesforce foi redefinida (o Salesforce revoga todos os tokens de atualização na alteração da senha).
- Sua organização possui uma política de "validade do token de atualização" que acabou de expirar.

**Correção:** Clique na conexão, o aplicativo solicitará que você reautorize. Siga as etapas do fluxo OAuth e você estará de volta.

## "IP address not allowed"

**Sintoma:** O Salesforce rejeita a solicitação OAuth com `restricted_access` ou similar.

**Causa:** Sua organização possui **Login IP Ranges** configurados no perfil com o qual você se autenticou, e seu IP atual não está na faixa permitida.

**Correção:** Conecte-se a partir de um IP permitido (VPN do escritório, etc.) ou peça ao seu administrador para relaxar a faixa de IP do perfil para o seu usuário.

:::note[TODO]
Adicionar capturas de tela de erros concretas. Documentar as entradas específicas do log de auditoria a serem procuradas na Configuração do Salesforce ao depurar.
:::
