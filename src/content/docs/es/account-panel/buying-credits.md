---
title: Comprar créditos
description: Recargue su saldo de créditos de IA a través de Stripe. Cómo funciona el pago, a dónde van los recibos y cómo administrar las facturas.
---

Cuando desee traducir más de la asignación mensual de su plan, puede recargar con créditos adicionales en cualquier momento. Los pagos son procesados por **Stripe**.

## Flujo de recarga

1. En el tablero del panel, haga clic en **Comprar créditos**.
2. Elija un tamaño de paquete de la lista.
3. Haga clic en **Pagar**: esto abre Stripe Checkout, alojado en el dominio de Stripe. Los detalles de la tarjeta se ingresan en los servidores de Stripe, no en los nuestros.
4. Complete el pago.
5. Stripe lo redirige de nuevo al panel. Un webhook de Stripe se activa en nuestro backend, que escribe un documento de `purchases` en Firestore y aumenta su saldo de `ai_credits` de forma atómica.
6. El nuevo saldo es visible en el tablero en unos pocos segundos.

## Qué almacenamos

Cada compra completada crea un documento en la colección `purchases` de Firestore con: su `uid`, el ID de sesión de Stripe, el intento de pago de Stripe, el monto pagado, la moneda y los caracteres comprados. **No** almacenamos números de tarjeta, CVV ni ningún otro dato del titular de la tarjeta.

## Recibos

Stripe envía un recibo por correo electrónico a la dirección de su cuenta de TranSFlator en el momento en que se compensa el pago. Ese es el recibo oficial para sus registros.

## Pagos fallidos

Si se rechaza un pago, el webhook de Stripe nunca se activa, por lo que no se registra ninguna compra y no se agregan créditos. Nada cambia de nuestro lado. Inténtelo de nuevo con otra tarjeta.

## IVA / facturas para clientes de la UE

Stripe emite facturas conformes con el IVA a través del Portal del Cliente. El historial de facturas de autoservicio es una característica planificada en el panel; hasta entonces, envíe un correo electrónico a [hello@tucario.com](mailto:hello@tucario.com) con el correo electrónico de su cuenta y le enviaremos los PDF.

:::note[TODO]
Captura de pantalla del flujo de pago, ejemplo de factura. Tabla de paquetes de créditos disponibles una vez que se finalicen los precios.
:::
