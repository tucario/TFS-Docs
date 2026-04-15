---
title: Registro y verificación de correo electrónico
description: Cree una cuenta de TranSFlator en el panel web, verifique su correo electrónico y obtenga sus créditos iniciales.
---

El panel de la cuenta en [panel.transflator.com](https://panel.transflator.com) es donde crea la cuenta con la que la aplicación de escritorio inicia sesión. Es una aplicación Flutter Web respaldada por Firebase.

## Registro

1. Abra [panel.transflator.com](https://panel.transflator.com).
2. Haga clic en **Registrarse**.
3. Ingrese su dirección de correo electrónico y una contraseña segura.
4. Haga clic en **Crear cuenta**.

Su cuenta se crea en Firebase Auth y se escribe un documento correspondiente en la colección `users` de Firestore con su saldo inicial de créditos de IA y un token de API generado.

## Verifique su correo electrónico

Inmediatamente después del registro, se envía un correo electrónico transaccional a la dirección que registró, que contiene un enlace de verificación de un solo clic. El enlace es válido durante **48 horas**. Hasta que haga clic en él, no podrá recargar créditos ni ejecutar traducciones que cuesten créditos.

¿No recibió el correo electrónico? Primero revise su carpeta de spam, luego haga clic en **Reenviar verificación** en el panel.

## Créditos iniciales

Las cuentas nuevas se siembran con un saldo inicial gratuito de créditos de IA para que pueda evaluar el producto sin pagar. El monto y la cadencia de renovación se muestran en el tablero. No se requieren planes pagados para el período de evaluación.

## Restablecimiento de contraseña

Si olvida su contraseña, haga clic en **Olvidé mi contraseña** en la pantalla de inicio de sesión. Se envía un correo electrónico de restablecimiento a través del mismo pipeline transaccional, con un enlace válido por 1 hora.

:::note[TODO]
Capturas de pantalla de la pantalla de registro, el correo electrónico de verificación y el tablero después del primer inicio de sesión. Nota sobre el límite de caracteres del nivel gratuito.
:::
