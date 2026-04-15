---
title: Eliminar su cuenta
description: Cómo eliminar permanentemente su cuenta de TranSFlator y todo lo que guardamos sobre usted. Cubre el Art. 17 del GDPR (derecho de supresión).
---

Puede eliminar su cuenta de TranSFlator en cualquier momento. La eliminación es irreversible, se aplica en cascada a cada dato que tenemos y se completa en un plazo de 30 días.

## Eliminación de autoservicio

1. Inicie sesión en [panel.transflator.com](https://panel.transflator.com).
2. Abra **Configuración → Cuenta**.
3. Haga clic en **Eliminar mi cuenta**.
4. Confirme escribiendo de nuevo su correo electrónico.
5. Haga clic en **Eliminar permanentemente**.

## Qué sucede después

Se activa una Cloud Function y, en una sola transacción:

- Elimina su documento de la colección `users`.
- Elimina cada fila en la colección `purchases` donde `uid == tu_uid`.
- Elimina cada fila en la colección `translations` donde `user_id == tu_uid`.
- Elimina su registro de Firebase Auth, invalidando cualquier sesión activa.
- Escribe una entrada en el registro de auditoría con la marca de tiempo de eliminación y el hash del usuario.

Su token de API se invalida de inmediato. La aplicación de escritorio, si se está ejecutando, fallará en su próxima llamada con `401 Unauthorized`.

## Qué se conserva

Se conservan dos cosas después de la eliminación de la cuenta, por razones fuera de nuestro control:

- **Registros de compras de Stripe**: Stripe conserva los registros de pago por sus propias razones de cumplimiento con PCI y regulaciones financieras. Puede solicitar la eliminación directamente a Stripe si es necesario.
- **Datos de facturación necesarios para la ley contable polaca**: las facturas emitidas contra su cuenta se conservan durante 5 años según el Art. 74 de la Ley de Contabilidad polaca. Estas contienen su nombre y detalles de pago, pero nada sobre su trabajo de traducción.

## GDPR Artículo 20 — exportación de datos

Si desea una copia de sus datos legible por máquina **antes** de la eliminación, envíe un correo electrónico a [hello@tucario.com](mailto:hello@tucario.com) y le enviaremos una exportación JSON en un plazo de 30 días. Se planea un botón de exportación de autoservicio para la pantalla de perfil.

:::note[TODO]
Captura de pantalla del diálogo de eliminación. Enlace a la política de privacidad una vez publicada en transflator.com/privacy.
:::
