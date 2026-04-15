---
title: Saltos de paquetes gestionados
description: Por qué TranSFlator marca algunos campos como no traducibles, qué es realmente un "paquete gestionado" y cómo traducir el texto de ayuda en los paquetes gestionados de su propiedad.
---

TranSFlator marca automáticamente los campos y elementos que pertenecen a **paquetes gestionados** como de solo lectura en la cuadrícula. Si se pregunta por qué su campo favorito está atenuado, esta página es para usted.

## Qué significa "paquete gestionado"

Un paquete gestionado es una aplicación instalada en su organización de Salesforce desde AppExchange (o desde su propia organización de desarrollo de ISV). Los campos, objetos, etiquetas y diseños que vinieron con un paquete gestionado tienen un prefijo de espacio de nombres como `ns__NombreCampo__c`.

Salesforce bloquea los metadatos de estos componentes. **Incluso un administrador del sistema no puede editar la traducción de un campo de un paquete gestionado desde una organización consumidora**; solo el desarrollador del paquete gestionado puede hacerlo, y solo desde la organización del desarrollador.

TranSFlator detecta el prefijo del espacio de nombres en el momento del escaneo y atenúa cada componente que tenga uno. No es un error: le protege de despliegues que fallarían con "Managed package component cannot be modified".

## "Pero yo soy el propietario del paquete gestionado"

Entonces debe traducirlo **desde su organización de desarrollo**, no desde la organización del cliente que lo instaló. Este es el flujo:

1. Abra TranSFlator y conéctese a su **organización de desarrollo de paquetes gestionados** (aquella desde la que realiza los lanzamientos).
2. Escanee. Los campos en su espacio de nombres aparecerán ahora como editables.
3. Traduzca y despliegue normalmente.
4. Realice una nueva versión del paquete gestionado.
5. Las organizaciones de los clientes recibirán las nuevas traducciones en su próxima actualización del paquete.

## Paquetes no gestionados y gestionados de primera generación

Los paquetes no gestionados no tienen espacio de nombres y son totalmente editables en todas partes. Trátelos como cualquier otro componente: TranSFlator no los saltará.

Los componentes de paquetes gestionados de primera generación instalados como **beta** (no lanzados) también son editables para el desarrollador, pero no para los consumidores.

## Etiquetas personalizadas

Las etiquetas personalizadas se comportan de manera ligeramente diferente: las etiquetas personalizadas `Protegidas` en un paquete gestionado están bloqueadas de la misma manera que los campos. Las etiquetas personalizadas `Públicas` *pueden* ser anuladas por idioma en la organización consumidora, y TranSFlator permite esto, pero la anulación solo es visible en la organización consumidora, no en el paquete original.

:::note[TODO]
Capturas de pantalla concretas de la atenuación de solo lectura en la cuadrícula y la marca de paquete gestionado en el panel de metadatos. Documentar la versión exacta de la API que utiliza TranSFlator para detectar el espacio de nombres.
:::
