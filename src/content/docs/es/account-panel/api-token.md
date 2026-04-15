---
title: Token de API
description: Genere, copie, rote y revoque su token de API personal. Utilizado por la aplicación de escritorio y para llamadas directas a la API.
---

Cada cuenta de TranSFlator tiene un único **token de API**: una cadena aleatoria larga que autentica su cuenta ante el backend de TranSFlator para las llamadas a la API de traducción.

Normalmente no necesita pensar en ello. La aplicación de escritorio lo usa automáticamente cuando inicia sesión. La única vez que interactúa con él directamente es cuando desea llamar a la API de traducción desde su propio código (por ejemplo, un pipeline de CI/CD).

## Dónde vive

En el panel → **Perfil → Token de API**. El token se muestra con un botón **Copiar** y un botón **Regenerar**.

## Regenerar (rotar)

Haga clic en **Regenerar** para invalidar el token actual y emitir uno nuevo. Use esto si cree que el token se ha filtrado (enviado a un repositorio público, publicado en un chat, dejado en un archivo de registro) o simplemente como parte de un programa de rotación regular.

Después de la regeneración, cualquier aplicación de escritorio que ya haya iniciado sesión con el token antiguo recibirá un `401 Unauthorized` en su próxima llamada a la API y le pedirá que vuelva a iniciar sesión.

## Uso directo

Envíelo como un token Bearer en el encabezado `Authorization` al llamar a nuestra API de traducción:

```bash
curl -X POST https://transflator-api.web.app/translate/batch \
  -H "Authorization: Bearer <TU_TOKEN_DE_API>" \
  -H "Content-Type: application/json" \
  -d '{
    "strings": ["Account name", "Industry", "Annual revenue"],
    "target_language": "pl",
    "engine": "gemini"
  }'
```

La respuesta es una matriz JSON de cadenas traducidas en el mismo orden que la entrada.

:::note[TODO]
Referencia completa de la API con cada punto final (`/translate/batch`, `/me`, `/packages`), códigos de error, límites de velocidad. Esto se convertirá en su propia sección.
:::
