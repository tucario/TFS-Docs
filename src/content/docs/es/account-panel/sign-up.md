---
title: Registro e inicio de sesión
description: Cree una cuenta de TranSFlator en el panel web, verifique su correo electrónico e inicie sesión desde la aplicación de escritorio.
---

El panel de cuenta en
[panel.transflator.com](https://panel.transflator.com) es donde
crea la cuenta con la que inicia sesión la aplicación de escritorio.
Es una aplicación Flutter Web respaldada por Firebase Auth, Firestore
y un único endpoint de Cloud Functions.

## Iniciar sesión

![La pantalla de inicio de sesión del panel de TranSFlator: una mascota tucán a la izquierda, campos de correo electrónico y contraseña a la derecha, la insignia de Google reCAPTCHA y un botón "Sign in" con enlaces para crear una cuenta o restablecer la contraseña.](../../../../assets/screenshots/panel/sign-in.png)

Los usuarios que regresan aterrizan en la pantalla de inicio de sesión en
[panel.transflator.com](https://panel.transflator.com).

1. Introduzca su correo electrónico y contraseña.
2. Resuelva el desafío de reCAPTCHA si se le solicita.
3. Haga clic en **Sign in**.

El formulario envía a `POST /auth/login`, que hace de proxy con
Firebase Auth y devuelve su token de API por usuario. Ese mismo
token es el que recibe la aplicación de escritorio cuando inicia
sesión allí.

Los enlaces debajo del formulario cubren los dos desvíos habituales:

- **Create account**: le lleva al flujo de registro descrito
  más abajo.
- **Forgot password?**: envía un correo electrónico de
  restablecimiento a través de nuestra canalización transaccional.
  El enlace de restablecimiento es válido durante 1 hora.

## Registro

Si aún no tiene una cuenta, haga clic en **Create account** en la
pantalla de inicio de sesión.

1. Introduzca su dirección de correo electrónico y una contraseña segura.
2. Resuelva el desafío de reCAPTCHA.
3. Haga clic en **Create account**.

El backend crea un usuario en Firebase Auth y un documento
correspondiente en la colección `users` de Firestore, inicializado
con su saldo inicial de créditos de IA y un token de API recién
generado.

## Verifique su correo electrónico

![La pantalla "Verify your email": mascota tucán, dirección de correo enmascarada, texto explicativo, un botón "Resend verification email" y un enlace "Sign out".](../../../../assets/screenshots/panel/verify-email.png)

Inmediatamente después del registro, un correo electrónico
transaccional llega a su bandeja de entrada con un enlace de
verificación de un solo clic. El enlace es válido durante
**48 horas**. Hasta que haga clic en él, no podrá recargar
créditos ni ejecutar traducciones que consuman créditos.

El panel bloquea el resto de la interfaz detrás de una pantalla
"Verify your email" que muestra:

- A qué dirección enviamos el enlace.
- Un botón **Resend verification email**: útil si el primero se
  perdió o el enlace expiró.
- Un enlace **Sign out** si desea probar con otra cuenta.

**¿No recibió el correo?** Revise primero su carpeta de spam y
después use **Resend verification email**. Si la propia dirección
estaba mal escrita, cierre sesión, elimine la cuenta contactando
con soporte y regístrese de nuevo: no existe una forma de
autoservicio para editar el correo electrónico antes de la
verificación.

## Créditos iniciales

Las cuentas nuevas reciben un saldo inicial gratuito para que
pueda evaluar el producto sin pagar. El importe y la cadencia de
renovación de 30 días se muestran en el panel. El plan gratuito
cubre organizaciones pequeñas, POC rápidas y evaluaciones; los
trabajos más grandes necesitan una recarga de créditos (consulte
[Comprar créditos](/account-panel/buying-credits/)).

## Restablecimiento de contraseña

Si olvida su contraseña, haga clic en **Forgot password?** en la
pantalla de inicio de sesión. Se envía un correo de
restablecimiento a través de la misma canalización transaccional,
con un enlace válido durante **1 hora**. El enlace abre una
pantalla del panel donde establece una nueva contraseña; después
de guardarla, se le devuelve al formulario de inicio de sesión.
