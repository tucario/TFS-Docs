---
title: Errores de OAuth
description: Solucione los errores comunes de OAuth que puede encontrar al conectar una organización de Salesforce — desajustes de redireccionamiento, sesiones expiradas, tokens revocados.
---

La mayoría de los errores de OAuth son aburridos y se dividen en una de cuatro categorías. Aquí le explicamos cómo distinguirlos y solucionarlos.

## "redirect_uri mismatch"

**Síntoma**: Salesforce muestra una página de error genérica en lugar de la pantalla "Permitir", con `error=redirect_uri_mismatch` en la URL.

**Causa**: la aplicación conectada de TranSFlator en Salesforce está configurada con una URL de devolución de llamada que no coincide con la que la aplicación realmente usa (`http://localhost:1717/oauth/callback`).

**Solución**: esto nunca debería suceder a los clientes; significaría que los metadatos de nuestra aplicación conectada se corrompieron. Si lo encuentra, envíe un correo electrónico a [hello@tucario.com](mailto:hello@tucario.com) con la URL de su navegador.

## "invalid_grant" en el intercambio de tokens

**Síntoma**: el navegador redirige correctamente de vuelta, pero la aplicación muestra "autenticación fallida".

**Causa**: el código de autorización expiró antes de que la aplicación pudiera intercambiarlo. Sucede si tardó más de un minuto en la pantalla de permisos de Salesforce.

**Solución**: haga clic en **Añadir conexión** de nuevo y siga el flujo sin pausas.

## "session expired or invalid"

**Síntoma**: la conexión funcionaba ayer, hoy al hacer clic muestra un punto rojo y "Sesión expirada".

**Causa**: su token de actualización fue revocado. Esto sucede cuando:

- Un administrador hizo clic en **Revocar** en la aplicación conectada de TranSFlator en la pantalla de uso de OAuth de aplicaciones conectadas de Salesforce.
- Se restableció la contraseña de su usuario de Salesforce (Salesforce revoca todos los tokens de actualización al cambiar la contraseña).
- Su organización tiene una política de "validez del token de actualización" que acaba de cumplirse.

**Solución**: haga clic en la conexión, la aplicación le pedirá que vuelva a autorizar. Siga los pasos del flujo de OAuth y estará de vuelta.

## "IP address not allowed"

**Síntoma**: Salesforce rechaza la solicitud de OAuth con `restricted_access` o similar.

**Causa**: su organización tiene **Rangos de IP de inicio de sesión** establecidos en el perfil con el que se autenticó, y su IP actual no está en el rango.

**Solución**: conéctese desde una IP permitida (VPN de la oficina, etc.) o pida a su administrador que relaje el rango de IP del perfil para su usuario.

:::note[TODO]
Añadir capturas de pantalla de errores concretos. Documentar las entradas específicas del registro de auditoría a buscar en la configuración de Salesforce al depurar.
:::
