---
title: Seguridad
description: El modelo de seguridad de Transflator — PKCE OAuth, almacenamiento de tokens AES-256, cero telemetría, a dónde van sus datos y a dónde no.
---

La versión corta: **sus tokens de Salesforce nunca salen de su máquina y nunca enviamos sus datos a casa**. La aplicación de escritorio es local por diseño, el panel de la cuenta solo almacena lo que necesita para facturarle y no se realizan análisis en ninguna parte.

## OAuth 2.0 con PKCE (S256)

Cuando conecta una organización de Salesforce, la aplicación de escritorio ejecuta el flujo de servidor web estándar de Salesforce OAuth 2.0 — **con PKCE, utilizando el método de desafío de código SHA-256**.

Lo que esto significa en la práctica:

- La aplicación genera un **verificador de código** criptográficamente aleatorio de 32 bytes por intento de inicio de sesión.
- Calcula el hash SHA-256 de ese verificador y envía el hash como el parámetro `code_challenge`.
- Salesforce redirige de nuevo a `http://localhost:1717/oauth/callback` con un código de autorización. El oyente de bucle invertido nunca expone nada a la red.
- La aplicación intercambia el código por tokens **directamente con Salesforce**, enviando el verificador original como prueba. Nuestro backend **no** está en medio de este intercambio.

Un código de autorización robado es inútil sin el verificador correspondiente, que la aplicación nunca envía por la red.

## Tokens de actualización cifrados con AES-256-CBC

Los tokens de actualización se almacenan localmente, cifrados con **AES-256-CBC**.

- La clave de 256 bits se genera una vez por instalación, a partir de la fuente aleatoria criptográficamente segura del sistema operativo, y se almacena en un archivo llamado `.enc_key` en `Application Support`, `chmod 600`.
- Se genera un nuevo IV de 16 bytes para cada escritura y se antepone al texto cifrado.
- El archivo cifrado es `transflate.db` en el mismo directorio.
- **Los tokens de acceso nunca se escriben en el disco.** Viven solo en la memoria del proceso. Cuando la aplicación se cierra, desaparecen; la próxima vez que haga clic en la conexión, la aplicación vuelve a intercambiar el token de actualización por un nuevo token de acceso.

## Cero telemetría

La aplicación de escritorio se entrega **sin ningún SDK de análisis de ningún tipo**. Sin PostHog, sin Sentry, sin Firebase Analytics, sin Crashlytics, sin Mixpanel, sin Amplitude. Busque en el código fuente si no nos cree.

Las únicas llamadas de red salientes que realiza la aplicación son:

- A Salesforce (OAuth + API de metadatos), en la URL de instancia que usted mismo eligió
- A su proveedor de IA elegido (a través del backend de Transflator)
- A `transflator-api.web.app` para la validación de licencias, la información de su cuenta y el punto final de traducción por lotes — todo a través de TLS

Nada más.

## HTTPS en todas partes

Cada llamada saliente, excepto el bucle invertido OAuth, utiliza TLS 1.2 o superior. El bucle invertido OAuth es texto plano sobre `127.0.0.1`: ese tráfico literalmente nunca sale de su máquina, por lo que TLS no agrega nada.

## Revalidación de sesión en cada conexión

Cada vez que hace clic en una conexión para abrirla, la aplicación accede a `/services/data/v65.0/` para validar la sesión. Los tokens caducados o revocados se detectan de inmediato y le solicitan que vuelva a autorizar. Nada se ejecuta contra una sesión inválida.

## ¿Traer su propia clave de proveedor de IA? No.

Transflator maneja las claves del proveedor en el backend: no necesita pegar una clave de OpenAI, una clave de Google ni nada similar. El beneficio es el tiempo de incorporación (cero); la desventaja es que todas las llamadas de traducción pasan por nuestro backend, que es un límite de confianza con el que debe sentirse cómodo. Consulte [la política de privacidad](https://transflator.com/privacy) para ver qué significa esto en la práctica.

## ¿Qué hay en el archivo `transflate.db`?

- **`connections`**: sus etiquetas de organización guardadas, URL de instancia, tipo de entorno, marca de tiempo de la última prueba.
- **`tokens`**: tokens de actualización cifrados con AES, uno por conexión.
- **`workspace`**: resultados de escaneo de metadatos en caché.
- **`deployment_log`**: historial local de despliegues que inició.

Elimine este archivo para borrar todo excepto su `.enc_key`. Elimine también `.enc_key` y la próxima ejecución generará uno nuevo.

:::note[TODO]
Agregar diagramas del flujo de OAuth y el enrutamiento de residencia de datos.
Agregar una sección sobre la firma y notarización de código de macOS, Windows SmartScreen y qué sucede cuando Apple/Microsoft revocan un certificado de firma.
:::
