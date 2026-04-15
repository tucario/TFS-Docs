---
title: Desplegar a Salesforce
description: Envíe las traducciones de vuelta a su organización de Salesforce a través de la API de metadatos. Atómico con reversión, informes de errores a nivel de componente.
---

El despliegue toma las filas traducidas de su cuadrícula y las envía de vuelta a Salesforce utilizando la API de metadatos. Es el último paso del flujo de trabajo normal.

## Qué se despliega

Solo las filas que (a) no están vacías en la columna del idioma de destino y (b) han cambiado desde el último despliegue exitoso para esta conexión. Las filas sin cambios se omiten. Las filas que no ha tocado permanecen intactas.

## Atómico con reversión

Los despliegues se envían como una sola transacción de la API de metadatos. Si algún componente falla en la validación por parte de Salesforce, se **revierte todo el despliegue** y verá un diálogo con una lista de cada componente que falló y por qué. Su organización nunca se queda en un estado aplicado a medias.

![El diálogo de despliegue mientras TranSFlator envía 273 traducciones modificadas a la organización DQS Playground.](../../../../assets/screenshots/06-deploying-to-salesforce.png)

## Errores a nivel de componente

La vista de errores muestra:

- La clave de metadatos de Salesforce que falló (por ejemplo, `Account.Industry__c.Label.fr`)
- El mensaje de error literal de Salesforce
- Un botón **Omitir y reintentar** que excluye la fila que falla y vuelve a intentar el despliegue

## Paquetes gestionados

Salesforce no permite modificar los metadatos de los campos que pertenecen a un paquete gestionado que usted no haya creado. TranSFlator detecta estos en el momento del escaneo y los marca como de solo lectura en la cuadrícula, para que no pierda tiempo intentando traducir algo que nunca se desplegará.

## Registro

Cada despliegue se registra en la tabla local `deployment_log` con marca de tiempo, conexión, número de componentes y el estado final. No se envía nada a nuestro backend.

Cuando termina el despliegue, obtiene un resumen que muestra cuántos componentes se aplicaron realmente y cuántos se omitieron porque la API de Salesforce se niega a tocarlos (por ejemplo, listas de selección estándar cuyos valores pertenecen a la plataforma):

![El resumen "Despliegue completado" con 243 traducciones desplegadas y 30 listas de selección estándar omitidas.](../../../../assets/screenshots/07-deploy-complete.png)

Las entradas omitidas se pueden exportar a través de **Generar STF** e importar con el Salesforce Translation Workbench, que es la única herramienta autorizada para tocar esos registros.
