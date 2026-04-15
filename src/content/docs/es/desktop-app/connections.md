---
title: Conexiones
description: Gestión de conexiones de organizaciones de Salesforce en la aplicación de escritorio — añadir, renombrar, probar, eliminar.
---

Una **conexión** en TranSFlator representa una organización de Salesforce en la que se ha autenticado. Cada conexión es una fila en la barra lateral de la aplicación con su propio token de actualización cifrado, etiqueta y marca de tiempo de la última prueba.

Puede añadir tantas conexiones como desee: producción, múltiples sandboxes, organizaciones de scratch, organizaciones de clientes si es consultor. La aplicación las mantiene una al lado de la otra y cambiar entre ellas es un clic.

## Añadir, renombrar, eliminar

Consulte [Conectar su organización de Salesforce](/es/getting-started/connect-your-org/) para ver el flujo de adición. Para renombrar, haga clic derecho en la conexión en la barra lateral → **Renombrar**. Para eliminar, haga clic derecho → **Eliminar**. Eliminar una conexión borra el token de actualización cifrado de `transflate.db` inmediatamente; Salesforce no es informado, por lo que el token de actualización seguirá siendo válido en el lado de Salesforce hasta que lo revoque manualmente desde **Configuración → Uso de OAuth de aplicaciones conectadas**.

## Probar conexión

El pequeño punto junto a cada conexión muestra su estado:

- **Verde**: la última prueba tuvo éxito, el token es válido.
- **Ámbar**: no se ha probado en esta sesión, podría estar desactualizado.
- **Rojo**: la última prueba falló. Haga clic para volver a autenticarse.

Haga clic en cualquier conexión y la aplicación accede a `/services/data/v65.0/` en la organización para volver a validar la sesión antes de cargar el espacio de trabajo. Si el token fue revocado o expiró, se le pedirá que vuelva a autorizar a través del flujo normal de OAuth.

![La lista de conexiones de TranSFlator con un archivo STF local, un sandbox DQS Playground y una organización de producción lado a lado.](../../../../assets/screenshots/01-connections-list.png)

El flujo de importación solo de STF (primera fila arriba) crea una "pseudoconexión" que no tiene token de actualización; solo contiene el contenido analizado de un archivo `.stf` y no puede desplegarse de nuevo en Salesforce hasta que adjunte una organización real.
