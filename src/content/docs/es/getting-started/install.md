---
title: Instalar la aplicación de escritorio
description: Descargue TranSFlator para macOS o Windows y ejecútelo por primera vez.
---

TranSFlator es una aplicación de escritorio nativa. No hay una versión de navegador del espacio de trabajo de traducción: la cuadrícula, el flujo de OAuth y el almacenamiento local de tokens cifrados viven en la aplicación en su máquina.

## Descarga

Obtenga la última versión de la página de descarga en [transflator.com](https://transflator.com/download):

- **macOS**: `.dmg` universal, firmado y notarizado, se ejecuta tanto en máquinas Apple Silicon como Intel desde macOS 12 en adelante.
- **Windows**: instalador `.msi`, de 64 bits, Windows 10 en adelante.

## Primera ejecución

En macOS, la aplicación solicitará permiso para almacenar un archivo de clave en `~/Library/Application Support/TranSFlator`. Ese archivo es la clave de cifrado AES-256 por máquina que se utiliza para asegurar los tokens de actualización de Salesforce en el disco. Tiene permisos chmod 600 y nunca sale de su máquina. Consulte [Seguridad](/es/security/) para ver el modelo de amenazas completo.

En Windows, la ruta equivalente es `%APPDATA%\TranSFlator`.

## Iniciar sesión

Lo primero que pide la aplicación es el correo electrónico y la contraseña de su cuenta de TranSFlator. Si aún no tiene una cuenta, abra [panel.transflator.com](https://panel.transflator.com), regístrese (gratis), verifique su correo electrónico y regrese. Consulte [Registro y verificación de correo electrónico](/es/account-panel/sign-up/) para más detalles.

Después de iniciar sesión, la aplicación intercambia sus credenciales por un token de API con el backend de TranSFlator y lo almacena localmente. De ahora en adelante, el token (no su contraseña) se utiliza para las llamadas a la API de traducción.

## Siguiente

Una vez que haya iniciado sesión, vaya a [Conectar su organización de Salesforce](/es/getting-started/connect-your-org/).

:::note[TODO]
Añadir capturas de pantalla de los diálogos de primera ejecución de macOS y Windows.
:::
