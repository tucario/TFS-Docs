---
title: Perfil
description: Los detalles de su cuenta, motor de IA preferido, cambios de contraseña y correo electrónico, y el punto de entrada para eliminar la cuenta.
---

La pantalla **Profile** es la última entrada de la barra lateral
del panel. Todo lo que no es facturación o historial de
traducciones reside aquí.

![La pantalla Profile: un encabezado de cuenta con el correo electrónico del usuario, la fecha de alta y una insignia Verified, una tarjeta Preferred AI Engine que muestra Mistral AI (Europe) con un botón Change AI Engine, una tarjeta Security con las filas Password y Email address, cada una con un botón Change, y una tarjeta Danger Zone de color rojo con una fila Delete account y un botón Delete.](../../../../assets/screenshots/panel/profile.png)

## Encabezado de la cuenta

Muestra el correo electrónico con el que inicia sesión
(enmascarado en las capturas), su fecha de alta y una insignia
**Verified** una vez que ha confirmado el correo. Si falta la
insignia, vuelva y complete la
[verificación de correo electrónico](/account-panel/sign-up/#verify-your-email).

## Motor de IA preferido

Un resumen del motor actualmente establecido como predeterminado,
con un botón **Change AI Engine**. Al hacer clic, se reabre el
mismo selector de motor que vio durante la incorporación (consulte
[Panel principal — Incorporación inicial](/account-panel/dashboard/#first-run-onboarding)).

Cambiar el motor aquí actualiza el campo `preferred_ai_model` en
su documento de usuario; las nuevas traducciones (panel,
escritorio, API sin un `engine` explícito) lo recogen de
inmediato.

## Seguridad

Dos acciones independientes:

- **Password — Change**: abre un diálogo que vuelve a pedir su
  contraseña actual y después le pide la nueva dos veces. La
  actualización se realiza de forma atómica en Firebase Auth; no
  se cierran otras sesiones, por lo que si ha cambiado por una
  sospecha de filtración, rote también su
  [token de API](/account-panel/api-token/).
- **Email address — Change**: envía un enlace de verificación a
  la nueva dirección. El cambio solo surte efecto una vez que
  hace clic en ese enlace; hasta entonces, el inicio de sesión
  sigue funcionando con la dirección antigua.

## Danger Zone

Una tarjeta con borde rojo en la parte inferior de la pantalla.
La única acción es **Delete account**, y está deliberadamente
apartada para que no pueda pulsarse por error. Hacer clic en
**Delete** inicia la cascada descrita en
[Eliminar su cuenta](/account-panel/delete-account/).

La eliminación es **irreversible** y elimina su documento de
usuario, el historial de compras, el historial de traducciones y
el registro de Firebase Auth. Lea la página enlazada antes de
hacer clic.
