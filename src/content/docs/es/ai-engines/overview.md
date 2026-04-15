---
title: Resumen de motores
description: Cómo se comparan los cuatro motores de traducción de IA en velocidad, cobertura de idiomas, forma de costo y residencia de datos.
---

TranSFlator admite cuatro motores de traducción de IA de forma predeterminada. Se accede a los cuatro a través del mismo **backend de TranSFlator**, lo que significa:

- **No necesita claves de API de proveedores.** Los créditos de su cuenta cubren cualquier motor.
- **No habla directamente con el proveedor** desde la aplicación de escritorio; el backend lo hace, a través de TLS, con los puntos finales regionales adecuados según su elección.
- **Puede cambiar de motor entre lotes.** No hay una sobrecarga de configuración por motor.

## Comparación rápida

| Motor | Mejor para | Velocidad | Cobertura de idiomas | Opciones de residencia de datos |
| --- | --- | --- | --- | --- |
| **Google Gemini** | Textos comerciales cotidianos, amplio alcance lingüístico | Rápido | 100+ | EE. UU., UE, Asia, Australia |
| **Anthropic Claude** | Textos matizados, cadenas largas, trabajo de voz de marca | Media | 95+ | EE. UU., UE |
| **Mistral** | Despliegues en la UE sensibles a la privacidad | Rápido | 40+ (fuerte en idiomas de la UE) | Solo UE |
| **DeepSeek** | Idiomas asiáticos (CJK, vietnamita, tailandés, indonesio) | Muy rápido | 80+, fuerte en asiáticos | fuera del EEE |

Todos los costos se le facturan en créditos de TranSFlator a una tarifa plana por carácter, independientemente del motor que elija. Entre bastidores, el backend absorbe la diferencia de precio entre los motores.

## Elegir uno

- **¿No importa / solo quiere resultados?** Use Gemini. Es el predeterminado y es muy bueno.
- **¿Contenido sensible, trabajo de voz de marca, texto legal?** Claude. El cuidado adicional vale la pena.
- **¿Debe permanecer en la UE?** Mistral.
- **¿Traducir al chino, japonés, coreano u otros idiomas asiáticos?** DeepSeek: está entrenado con una ponderación de idiomas asiáticos mucho mayor que los demás.

## Páginas por motor

- [Google Gemini](/es/ai-engines/gemini/)
- [Anthropic Claude](/es/ai-engines/claude/)
- [Mistral](/es/ai-engines/mistral/)
- [DeepSeek](/es/ai-engines/deepseek/)

:::note[TODO]
Datos de referencia reales: puntajes de precisión por motor en un corpus fijo de 1000 etiquetas de campo de Salesforce en 5 idiomas de destino, con notas del evaluador.
:::
