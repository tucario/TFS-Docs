---
title: Fallos de despliegue
description: Cómo leer los diálogos de fallos de despliegue, cuáles son las causas comunes y qué hacer cuando un despliegue se revierte.
---

Cuando un despliegue falla, TranSFlator revierte todo (consulte [Desplegar a Salesforce](/es/desktop-app/deploying/)) y le muestra un diálogo con cada componente que falla. El texto literal proviene de Salesforce; nosotros no lo editamos. Esta página es la guía para los mensajes de error más comunes.

## "INVALID_CROSS_REFERENCE_KEY"

El objetivo de la traducción ya no existe en la organización (por ejemplo, un campo personalizado que fue eliminado desde el último escaneo).

**Solución**: vuelva a escanear la organización con **Actualizar metadatos** e inténtelo de nuevo. La fila obsoleta desaparecerá de la cuadrícula.

## "Managed package component cannot be modified"

Intentó traducir un campo que pertenece a un paquete gestionado y Salesforce no lo permite, incluso para usuarios administradores.

**Solución**: TranSFlator debería haber marcado estos como de solo lectura antes de llegar aquí. Si lo ve a mitad del despliegue, significa que el escaneo no detectó la marca de paquete gestionado: haga clic en **Omitir y reintentar** para excluir el componente y continuar. Avísenos si esto se repite: es un error de nuestro lado.

## "Required field missing"

Salesforce esperaba que el archivo de traducción incluyera un campo que la cuadrícula no envió. Sucede cuando traduce parcialmente un tipo de registro y deja atrás los valores de la lista de selección.

**Solución**: abra el tipo de registro en la cuadrícula, complete las filas faltantes e inténtelo de nuevo.

## "Insufficient access rights on cross-reference id"

Su usuario conectado no tiene el permiso para modificar el objeto al que pertenece esta traducción.

**Solución**: asigne un conjunto de permisos a su usuario o autentíquese con un usuario que tenga el acceso. El movimiento más seguro: cree un usuario dedicado como "administrador de traducciones" con permisos en cada objeto que desee traducir.

## Todo lo demás

Copie el texto exacto del error del diálogo y péguelo en [hello@tucario.com](mailto:hello@tucario.com). Incluya el `componentType` de Salesforce, la clave de metadatos y la línea que menciona el error. Le diremos cómo solucionarlo o añadiremos el caso a esta página.

:::note[TODO]
Comenzar una tabla de códigos de error específicos con enlaces a la documentación de Salesforce. Script que exporta el registro de despliegue a un archivo de texto compartible para soporte.
:::
