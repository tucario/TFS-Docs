---
title: Créditos de IA
description: Cómo funcionan los créditos, qué cuesta cuántos créditos y cómo funciona el ciclo de renovación mensual.
---

Los créditos de IA son la unidad que TranSFlator utiliza para facturarle por el trabajo de IA.
Un crédito equivale a un carácter de texto de origen enviado a un motor de IA.

## Por qué por carácter, no por motor

Diferentes motores de IA tienen precios brutos muy diferentes. Si le facturáramos en las unidades nativas de los motores, nunca sabría de antemano cuánto costaría un lote. La facturación por carácter significa:

- **Costo predecible**: una etiqueta de campo de 10 caracteres cuesta 10 créditos, independientemente del motor que elija.
- **El intercambio de motores es gratuito**: puede usar Gemini para un lote y Claude para el siguiente, y el saldo disminuirá de la misma manera.
- **Margen fijo**: absorbemos la variación de precio del motor para que usted no tenga que hacerlo.

## Qué se cuenta

Solo se mide la cadena de **origen**. La traducción que se recibe es gratuita.

El costo de un lote es aproximadamente: `suma de longitud_cadena_origen para cada fila en el lote`. Cancelar un lote a mitad de camino solo le cobra por las filas que realmente se completaron.

## Saldo y renovación

Su saldo actual se muestra en el tablero y se actualiza en vivo. Las cuentas gratuitas obtienen un saldo inicial que se renueva en un ciclo de 30 días por la misma cantidad. Las cuentas pagas obtienen una asignación mensual que se renueva el primer día de cada ciclo de facturación.

En el momento en que el ciclo de crédito se renueva, suceden dos cosas:

1. Su campo `ai_credits` se restablece al monto de renovación del plan.
2. Su historial de traducción en la colección `translations` se purga; consulte [Eliminar su cuenta](/es/account-panel/delete-account/) para conocer el razonamiento de minimización de GDPR.

## Agotamiento de créditos

Si se queda sin créditos a mitad de un lote, el lote se pausa y la cuadrícula muestra un mensaje de "se requiere recarga". Las filas terminadas se conservan; las filas restantes esperan hasta que realice una recarga.

:::note[TODO]
Tabla de precios para los planes pagos una vez que se finalicen los precios. Nota sobre cómo los caracteres por idioma se traducen a recuentos aproximados de campos.
:::
