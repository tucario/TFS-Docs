---
title: Traducción por lotes con IA
description: Traduzca cientos o miles de filas en una sola pasada. Elija un motor, elija una región, vea el progreso y gestione los fallos.
---

La traducción por lotes con IA es la característica que hace que valga la pena instalar TranSFlator. Seleccione filas, haga clic en **AI para todo**, elija un motor y la aplicación transmitirá las traducciones desde el proveedor de IA a la cuadrícula a medida que lleguen.

## Iniciar un lote

1. Filtre y busque en la cuadrícula hasta que solo sean visibles las filas que desea traducir.
2. Haga clic en **Seleccionar todo lo visible** (⌘/Ctrl + Shift + A).
3. Haga clic en **AI para todo** en la barra de herramientas.
4. Elija un motor y una región.
5. Confirme.

## Selección de motor

El selector muestra cada motor que tiene habilitado en su cuenta y el costo estimado para las filas seleccionadas. Consulte el [Resumen de motores](/es/ai-engines/overview/) para ver la comparación.

## Selección de región

Dónde se procesa geográficamente la solicitud de traducción. Relevante para los requisitos de residencia de datos: algunos proveedores de IA le permiten elegir entre EE. UU., UE, Asia y Australia. TranSFlator reenvía su elección de región al backend, que a su vez enruta la solicitud al punto final del proveedor correcto.

## Progreso en vivo

Un banner en la parte inferior muestra las filas completadas / total, la velocidad actual y el tiempo estimado restante. Puede cancelar a mitad del lote: las filas que ya regresaron se conservan en la cuadrícula (aún no se han guardado en el espacio de trabajo; guarde con ⌘/Ctrl + S).

## Fallos

Si el proveedor de IA rechaza una fila específica (demasiado larga, caracteres no admitidos, bloqueo de política de contenido), esa fila permanece vacía y el error se registra en la barra lateral. Las filas fallidas pueden reintentarse individualmente o saltarse por completo.

## Modelo de costos

Cada lote consume créditos de IA del saldo de su cuenta. Los créditos se consumen por carácter de la cadena de **origen**, no por fila: una etiqueta de campo de 10 caracteres cuesta 10 créditos sin importar qué motor use. Consulte [Créditos de IA](/es/account-panel/ai-credits/) para ver el modelo de precios completo.

![Una traducción por lotes en ejecución a portugués brasileño — 100 de 273 filas terminadas, 37% completado.](../../../../assets/screenshots/05-translating-progress.png)

La barra de progreso en la parte superior de la cuadrícula está en vivo: las filas se completan a medida que la IA responde, y **Detener** cancela las solicitudes restantes sin perder las filas que ya regresaron.
