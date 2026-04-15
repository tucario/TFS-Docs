---
title: Conectar su organización de Salesforce
description: Inicie sesión en Salesforce desde la aplicación de escritorio a través de OAuth 2.0 con PKCE. Cubre organizaciones de producción, sandbox y scratch.
---

TranSFlator se conecta a Salesforce utilizando **OAuth 2.0 con PKCE (método de desafío de código S256)**. No hay un paso de "pegar su nombre de usuario y contraseña", y el backend de TranSFlator no está en el medio: el código de autorización se intercambia en su propia máquina.

## Pasos

1. En la aplicación, haga clic en **Añadir conexión** en la parte superior derecha.
2. Dé a la conexión una etiqueta (por ejemplo, *"EMEA sandbox"* o *"Acme producción"*), elija si es una instancia de **Producción/Developer** (`login.salesforce.com`) o un **Sandbox** (`test.salesforce.com`) y haga clic en **Autorizar**.
3. Se abre su navegador. Inicie sesión en Salesforce como lo haría normalmente. Si su organización utiliza SSO o MFA, el flujo normal se ejecuta aquí.
4. Salesforce le pide que permita que la **Aplicación conectada de TranSFlator** acceda a los metadatos. Haga clic en **Permitir**.
5. Salesforce redirige a `http://localhost:1717/oauth/callback`, donde la aplicación de escritorio está escuchando. La devolución de llamada de bucle invertido nunca sale de su máquina.
6. La aplicación intercambia el código de autorización por un token de actualización y un token de acceso. El token de actualización se cifra con AES-256-CBC y se escribe en `transflate.db`; el token de acceso reside solo en la RAM.

Ahora está conectado. La conexión aparece en la barra lateral con un punto de estado verde. Haga clic en ella para abrir la cuadrícula de traducción de esa organización: TranSFlator escaneará inmediatamente la organización en busca de cada elemento traducible:

![TranSFlator escaneando una organización de Salesforce conectada, cargando traducciones objeto por objeto.](../../../../assets/screenshots/02-scanning-org.png)

## Usar un dominio personalizado

Si su organización utiliza un Mi dominio (`acme.my.salesforce.com`), elija **Dominio personalizado** en el selector de instancias y pegue el nombre de host completo `https://...`. La aplicación lo usará como el host de OAuth en lugar del punto final de inicio de sesión estándar.

## Organizaciones de Scratch

Las organizaciones de scratch funcionan exactamente como los sandboxes: elija **Sandbox** en el selector de instancias. El token de actualización vive mientras dure la organización de scratch; cuando la organización de scratch expire, TranSFlator se lo indicará en la próxima prueba de conexión.

## Qué ve TranSFlator

Una vez conectada, la aplicación tiene el mismo acceso a metadatos que tiene su usuario conectado, nada más. Si su usuario puede ver un campo, TranSFlator puede traducirlo. Si su usuario no tiene acceso a un tipo de registro, TranSFlator tampoco puede escanearlo. Configure los conjuntos de permisos de su usuario de prueba antes de ejecutar un escaneo completo si desea limitar el radio de acción.

## Siguiente

[Ejecute su primera traducción →](/es/getting-started/your-first-translation/)
