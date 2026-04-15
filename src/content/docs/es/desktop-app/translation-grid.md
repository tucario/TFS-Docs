---
title: Cuadrícula de traducción
description: El editor de alta densidad en el corazón de la aplicación — filtros, búsqueda, edición en línea, atajos de teclado.
---

La cuadrícula de traducción es una vista de nivel de hoja de cálculo de cada elemento traducible en su organización. Está diseñada para escalar a decenas de miles de filas y seguir respondiendo.

## Columnas

- **Tipo**: campo personalizado, lista de selección, diseño, regla de validación…
- **Clave**: la clave de metadatos de Salesforce (solo lectura)
- **Origen**: su cadena de idioma predeterminado
- **Destino**: la cadena para el idioma actualmente seleccionado, editable

## Filtros

La barra lateral de filtros a la izquierda le permite filtrar por tipo, objeto, idioma y "solo traducciones faltantes". Los filtros se componen: puede pedir *"etiquetas de campos personalizados en el objeto Cuenta, traducciones al italiano faltantes"* en tres clics.

## Búsqueda

El cuadro de búsqueda en la parte superior coincide con subcadenas y es en vivo. Busca tanto en el origen como en el destino.

## Atajos de teclado

| Atajo | Acción |
| --- | --- |
| `↑` / `↓` | Moverse entre filas |
| `Enter` | Editar fila actual |
| `Esc` | Descartar edición no guardada |
| `⌘/Ctrl + S` | Guardar espacio de trabajo actual |
| `⌘/Ctrl + F` | Enfocar búsqueda |
| `⌘/Ctrl + Shift + A` | Seleccionar todas las filas visibles |
| `⌘/Ctrl + D` | Marcar fila como "terminada" (revisada) |

![La cuadrícula de traducción de TranSFlator con la barra lateral de objetos, búsqueda y columnas de origen/destino.](../../../../assets/screenshots/04-translations-table.png)

La barra lateral izquierda agrupa cada elemento traducible por objeto de Salesforce (Cuenta, Caso, Contacto, …) con un recuento continuo para que siempre sepa cuánto queda.
