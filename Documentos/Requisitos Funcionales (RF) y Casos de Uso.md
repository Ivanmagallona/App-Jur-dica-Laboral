## 5. Requisitos Funcionales (RF) y Casos de Uso
*Definición: Son las instrucciones o programas de computadora que, al ser ejecutadas, proporcionan las características, las funciones y el desempeño específicos deseados por el usuario.*

* **RF-01 (Módulo de Cálculo):** El programa procesará los datos de entrada proporcionados por el usuario (salario, fechas de inicio y término) para calcular con exactitud la proporción de aguinaldo y prima vacacional.
* **RF-02 (Finiquito vs. Liquidación):** El sistema ejecutará las operaciones matemáticas necesarias para calcular y desglosar la diferencia económica exacta entre una renuncia voluntaria y un despido injustificado.
* **RF-03 (Auditor de Contratos):** El sistema proporcionará una función de cuestionario interactivo ("Semáforo de Riesgo") para analizar las respuestas del usuario y detectar anomalías contractuales o cláusulas ilegales.
* **RF-04 (Ruta Procesal):** La aplicación integrará una característica visual que mostrará un flujograma interactivo para guiar paso a paso al usuario a través de las etapas del proceso laboral mexicano.
* **RF-05 (Generación de Documentos):** El sistema permitirá la autocompletación algorítmica y la descarga de plantillas legales estructuradas en formato PDF.

### Casos de Uso
* **CU-01 (Calcular Prestaciones):** El usuario ingresa sus datos salariales y fechas de empleo. El sistema valida los datos, aplica las fórmulas de la ley y muestra un desglose económico detallado en pantalla.
* **CU-02 (Auditar Contrato):** El usuario responde preguntas de opción múltiple sobre su contratación. El sistema analiza las respuestas y alerta sobre cláusulas ilegales (ej. renuncia anticipada).

### Historias de Usuario
* **HU-01:** Como recién egresado, quiero ingresar mi fecha de entrada y salida para que la app me diga exactamente cuánto me toca de finiquito.
* **HU-02:** Como usuario sin conocimientos legales, quiero ver un diagrama paso a paso para que pueda entender cómo es un proceso de conciliación prejudicial.
* **HU-03:** Como trabajador despedido, quiero llenar un formulario rápido para que el sistema genere un PDF de solicitud de citatorio listo para imprimir.
