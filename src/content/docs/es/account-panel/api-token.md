---
title: Configuración de la API
description: Su token de API, motor de IA preferido, límites de velocidad, ejemplo con curl y webhook de agotamiento de créditos, todo en una sola pantalla.
---

**API Settings** en la barra lateral izquierda es el panel de
control para el uso directo de la API. La aplicación de escritorio
lee la mayoría de estos mismos valores en su nombre; la pantalla
existe para cuando quiera llamar a la API por sí mismo desde CI,
un script o una integración de terceros.

![La pantalla API Settings: tarjeta API Token con un token enmascarado y botones Copy/Rotate Token, tarjeta AI Credits que muestra 5.000 de 5.000 caracteres restantes con una fecha de renovación, selector AI Engine con pastillas Gemini/Claude/Mistral/DeepSeek, una tarjeta Rate Limit que muestra 60 req/min, una tarjeta con ejemplo de cURL y una entrada Depletion Webhook.](../../../../assets/screenshots/panel/api-settings.png)

## Token de API

Cada cuenta de TranSFlator tiene un único token de API: una
cadena aleatoria larga que autentica su cuenta frente a la API de
traducción.

La tarjeta del token muestra el valor actual enmascarado por
defecto, con dos acciones:

- **Copy**: copia el token completo al portapapeles. Trátelo
  como una contraseña.
- **Rotate Token**: invalida el token actual y emite uno nuevo.
  Úselo si sospecha que el token se ha filtrado (publicado en un
  repositorio público, enviado en un chat, dejado en un archivo
  de registro) o como parte de una política de rotación regular.

Tras la rotación, cualquier aplicación de escritorio o script que
siga utilizando el token antiguo recibirá `HTTP 401 Unauthorized`
en su próxima llamada y tendrá que iniciar sesión o actualizar su
configuración.

## Créditos de IA

Un reflejo de la tarjeta de saldo del panel, mostrada aquí porque
los usuarios directos de la API suelen quererla junto al token y
al selector de motor. Muestra los caracteres restantes, el tope
del plan y la fecha de renovación.

## Motor de IA

Elija qué modelo impulsa las traducciones iniciadas a través de
la API:

- **Gemini**: el modelo multilingüe de propósito general de
  Google.
- **Claude**: Anthropic, matizado y sensible al contexto.
- **Mistral**: europeo, compatible con el RGPD, sólido en
  idiomas de la UE.
- **DeepSeek**: rentable y sólido en CJK.

La selección se aplica a cada llamada `POST /translate/batch` que
no sobrescriba `engine` en su cuerpo. Cambiar el motor aquí
también actualiza su `preferred_ai_model` en el documento de
usuario, de modo que la aplicación de escritorio lo recogerá la
próxima vez que se hidrate.

## Límite de velocidad

Muestra su límite de velocidad actual por token (por defecto 60
req/min). Las ráfagas por encima de este límite devuelven
`HTTP 429 Too Many Requests`: reduzca la frecuencia y reintente.
El límite se aplica por token de API, no por IP, por lo que rotar
tokens no lo restablece.

## Ejemplo con cURL

Una llamada de ejemplo lista para pegar, ya rellena con su token
y apuntando al endpoint de traducción por lotes:

```bash
curl -X POST https://api.transflator.com/translate \
  -H "Authorization: Bearer <YOUR_API_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{"text":"Hello world","source_lang":"en","target_lang":"pl"}'
```

Haga clic en **Copy** en la tarjeta para obtenerla con su token
real sustituido. La respuesta es un objeto JSON con la cadena
traducida y metadatos sobre qué motor la produjo.

## Webhook de agotamiento

Opcional. Pegue una URL HTTPS y haremos un POST de una carga útil
JSON cuando su saldo de créditos llegue a cero. Útil para:

- Avisar a un responsable de guardia cuando una integración de
  API en producción se queda sin créditos.
- Activar una recarga automática en su propio sistema de
  facturación.
- Lanzar una notificación a Slack a través de un webhook
  entrante.

Deje el campo en blanco para desactivarlo. El webhook se dispara
una vez por evento de agotamiento (no en cada 429 posterior); se
rearma en la siguiente recarga o renovación.
