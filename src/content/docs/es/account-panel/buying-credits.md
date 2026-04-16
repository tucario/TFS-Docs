---
title: Comprar créditos
description: Recargue su saldo de créditos de IA mediante Stripe. Cómo funcionan la selección de plan, el pago, los recibos y las facturas.
---

Cuando quiera traducir más que la asignación mensual del plan
gratuito, puede recargar con créditos adicionales en cualquier
momento. Los pagos los procesa **Stripe**.

## Elija su plan

!["Choose Your Plan": una tarjeta Free Plan (5.000 caracteres/mes, acceso a la API con autenticación por token, todos los idiomas compatibles, traducciones optimizadas para Salesforce) marcada como plan actual, y una tarjeta Premium "Need more characters?" con viñetas (hasta más de 10.000.000 de caracteres, sin límites mensuales, los caracteres nunca caducan, procesamiento de traducción prioritario) y un botón View Premium Packages.](../../../../assets/screenshots/panel/choose-plan.png)

El selector de plan está disponible tanto durante la
incorporación inicial como desde la entrada **Buy Characters** de
la barra lateral.

**Plan gratuito**: 5.000 caracteres por ciclo de 30 días, acceso
completo a la API, todos los idiomas compatibles, prompts
optimizados para Salesforce. Suficiente para organizaciones
pequeñas, evaluaciones y trabajo de mantenimiento ligero.

**Premium**: paquetes de caracteres adicionales sobre su
asignación mensual:

- Hasta más de 10.000.000 de caracteres por paquete.
- Sin tope mensual: úselos a su propio ritmo.
- **Los caracteres nunca caducan.** A diferencia de la asignación
  mensual gratuita, los créditos adquiridos permanecen en su
  saldo hasta que se utilicen.
- Procesamiento de traducción prioritario en las colas del
  backend.

Haga clic en **View Premium Packages** para abrir la lista de
paquetes y elegir un tamaño.

## Flujo de recarga

1. En el panel, haga clic en **Buy Characters** (barra lateral o
   tarjeta del panel) → **View Premium Packages**.
2. Elija un tamaño de paquete de la lista.
3. Haga clic en **Checkout**: esto abre Stripe Checkout,
   alojado en el propio dominio de Stripe. Los datos de la
   tarjeta se introducen en los servidores de Stripe, no en los
   nuestros.
4. Complete el pago.
5. Stripe le redirige de nuevo al panel. Un webhook de Stripe se
   dispara en nuestro backend, escribe un documento `purchases`
   en Firestore e incrementa su saldo `ai_credits` de forma
   atómica.
6. El nuevo saldo es visible en el panel en unos pocos segundos.

## Qué almacenamos

Cada compra completada crea un documento en la colección
`purchases` de Firestore con: su `uid`, el ID de la sesión de
Stripe, el payment intent de Stripe, el importe pagado, la divisa
y los caracteres comprados. **No** almacenamos números de tarjeta,
CVV ni ningún otro dato del titular de la tarjeta.

## Recibos

Stripe envía un recibo por correo electrónico a la dirección de
su cuenta de TranSFlator en el momento en que se confirma el
pago. Ese es el recibo oficial para sus registros.

## Pagos fallidos

Si un pago es rechazado, el webhook de Stripe nunca se dispara,
por lo que no se registra ninguna compra y no se añaden créditos.
Nada cambia por nuestro lado. Inténtelo de nuevo con otra tarjeta.

## IVA / facturas para clientes de la UE

Stripe emite facturas con IVA a través del Customer Portal. El
historial de facturas en autoservicio es una función planificada
en el panel; hasta entonces, escriba a
[hello@tucario.com](mailto:hello@tucario.com) con el correo
electrónico de su cuenta y le enviaremos los PDF.
