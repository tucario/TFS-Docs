---
title: Flujo de trabajo con archivos STF
description: Importe y exporte archivos STF bilingües de Salesforce para el flujo clásico del Translation Workbench.
---

Algunas organizaciones bloquean la API de metadatos. Algunos clientes de consultoría desean revisar las traducciones fuera de línea en Excel. Para ambos casos, TranSFlator admite el formato de archivo clásico **Salesforce Bilingual STF**: importe un archivo STF, edítelo en la cuadrícula y exporte uno nuevo.

## Importar un STF

1. En la barra lateral de conexiones, haga clic en **Importar archivo STF**.
2. Elija el archivo `.stf` exportado de la pantalla **Configuración → Translation Workbench** en Salesforce.
3. Asígnele una etiqueta.

Aparece una "pseudoconexión" con un icono de documento en lugar de un icono de nube, lo que indica que esta conexión no tiene token de actualización y no puede desplegarse directamente. Puede traducir las filas normalmente.

## Exportar un STF

Con una conexión STF seleccionada, haga clic en **Exportar archivo STF** en la barra de herramientas. Obtendrá un archivo que es compatible de ida y vuelta con el flujo de importación del Salesforce Translation Workbench: mismo encabezado `Bilingual`, mismo orden de filas, mismos separadores de pestañas.

## Cuándo usar esto en lugar del despliegue directo

- Su administrador ha desactivado la API de metadatos para su perfil.
- Desea que un revisor humano apruebe las traducciones en Excel antes de tocar Salesforce.
- Es consultor y su cliente desea el archivo final para su propio rastro de auditoría.

## Qué no se conserva

Los archivos STF son solo de cadenas. Cualquier cosa que no sea una cadena que TranSFlator normalmente puede tocar (nombres de diseño, disponibilidad de tipos de registro, etc.) no se puede exportar de esta manera. Para el conjunto completo de funciones, use una conexión real.

:::note[TODO]
Captura de pantalla del diálogo de importación de STF, captura de pantalla de la pseudoconexión en la barra lateral, archivo `.stf` de muestra con algunas filas.
:::
