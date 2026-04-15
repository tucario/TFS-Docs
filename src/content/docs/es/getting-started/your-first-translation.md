---
title: Su primera traducción
description: Traduzca algunos campos personalizados de extremo a extremo, desde el escaneo hasta el despliegue, en menos de diez minutos.
---

Al final de esta página habrá:

1. Escaneado una organización sandbox.
2. Filtrado a un puñado de campos personalizados.
3. Traducido en lote con IA a un idioma de destino.
4. Desplegado el resultado de vuelta a Salesforce.

Tiempo total: menos de diez minutos. Costo: unos pocos cientos de caracteres de crédito de IA.

## 1. Elija un objetivo seguro

Haga esto primero en un **sandbox**, nunca directamente en producción. Los despliegues de TranSFlator son atómicos y pueden revertirse, pero la confianza es más barata que el arrepentimiento.

Abra la conexión de sandbox que creó en [Conectar su organización de Salesforce](/es/getting-started/connect-your-org/).

## 2. Escanear

La aplicación escanea su organización al abrirla por primera vez. Dependiendo del tamaño de la organización, esto toma de 10 segundos a unos pocos minutos. Verá que la cuadrícula de traducción se llena con cada elemento traducible: campos personalizados, valores de listas de selección, tipos de registro, texto de ayuda, diseños, enlaces web, reglas de validación, etiquetas personalizadas.

## 3. Reducir

Haga clic en el icono de **Filtro** y elija **Campo personalizado → Etiqueta** para limitar la cuadrícula solo a las etiquetas de campos personalizados. Marque la casilla en la columna **Faltante** para mostrar solo las filas que aún no se han traducido. Debería quedarse con unas pocas filas.

## 4. Elija un idioma de destino

Haga clic en el selector de idiomas en la parte superior y elija un idioma para el que aún no tenga traducciones (por ejemplo, **Polaco**). La cuadrícula ahora muestra el origen a la izquierda y la columna de destino a la derecha, vacía.

![El selector de idioma de destino que muestra cada configuración regional habilitada con su barra de cobertura.](../../../../assets/screenshots/03-select-target-language.png)

Cada fila muestra cuántas de las entradas traducibles ya están cubiertas en ese idioma: una forma rápida de detectar qué configuraciones regionales necesitan atención.

## 5. Traducir

Haga clic en **AI para todo** en la barra superior. Aparece un diálogo preguntando qué motor de IA usar; elija uno. Consulte el [Resumen de motores](/es/ai-engines/overview/) si no está seguro.

La aplicación envía cada fila al backend de TranSFlator, que enruta la solicitud al motor que eligió. Los resultados se transmiten a la cuadrícula a medida que regresan. Puede editar cualquier fila a mano: la sugerencia de la IA se convierte en un punto de partida, no en una respuesta final.

## 6. Desplegar

Haga clic en **Desplegar**. La aplicación empaqueta los cambios en un despliegue de metadatos, firma la solicitud con el token de acceso de su conexión y la envía a la API de metadatos de Salesforce. Verá un diálogo de progreso y luego:

- **Éxito**: los cambios están en vivo en su sandbox.
- **Fallo parcial**: la aplicación le muestra exactamente qué componentes fueron rechazados y por qué. La mayoría de las veces es un campo de un paquete gestionado que Salesforce no permite tocar; la aplicación los marca y los omite al reintentar.

## 7. Verificar

Abra su sandbox en un navegador, cambie el idioma de la interfaz de usuario al que acaba de traducir y compruebe que los campos personalizados se leen como se esperaba.

## Siguiente

¿Listo para ir más allá? Lea [Traducción por lotes con IA](/es/desktop-app/batch-ai-translate/) para conocer el conjunto completo de capacidades.
