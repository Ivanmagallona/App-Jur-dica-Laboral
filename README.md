# App Jurídica Laboral

## Descripción del Producto

* **Objetivo:** Desarrollar una aplicación de software que brinde información, instrucciones y estructuras de cálculo automatizadas sobre derechos laborales, con el fin de orientar a los trabajadores en México y evitar abusos contractuales.
* **Alcance:** El sistema abarcará el cálculo preciso de proporciones de aguinaldo, prima vacacional, diferencias entre finiquito y liquidación, la evaluación de contratos mediante cuestionarios interactivos, y la generación de documentos legales en formato PDF.
* **Limitaciones:** La aplicación es estrictamente informativa y de orientación preventiva; no almacenará información en bases de datos externas y no sustituye el consejo formal de un abogado laboral.

---

## ÍNDICE

1. [Proceso (del 1 de septiembre hasta la conclusión del proyecto)](#1-proceso-del-1-de-septiembre-hasta-la-conclusión-del-proyecto)
2. [Análisis (del 1 al 20 de septiembre de 2026)](#2-análisis-del-1-al-20-de-septiembre-de-2026)
3. [Requisitos (del 20 al 30 de septiembre de 2026)](#3-requisitos-del-20-al-30-de-septiembre-de-2026)
   * 3.1. [Requisitos Funcionales (RF)](#31-requisitos-funcionales-rf)
     * 3.1.1. [Casos de Uso](#311-casos-de-uso)
     * 3.1.2. [Historias de Usuario](#312-historias-de-usuario)
   * 3.2. [Requisitos No Funcionales (RNF)](#32-requisitos-no-funcionales-rnf)
   * 3.3. [Priorización de Requisitos](#33-priorización-de-requisitos)
   * 3.4. [Reglas de negocio](#34-reglas-de-negocio)
4. [Evolución de Requisitos (del 25 al 26 de octubre de 2026)](#4-evolución-de-requisitos-del-25-al-26-de-octubre-de-2026)
   * 4.1. [Objetivo](#41-objetivo)
   * 4.2. [Requisitos funcionales refinados](#42-requisitos-funcionales-refinados)
   * 4.3. [Requisitos no funcionales refinados](#43-requisitos-no-funcionales-refinados)
   * 4.4. [Reglas de negocio](#44-reglas-de-negocio)
   * 4.5. [Priorización](#45-priorización)
   * 4.6. [Refinamiento de Artefactos](#46-refinamiento-de-artefactos)
     * 4.6.1. [Historias de usuario](#461-historias-de-usuario)
     * 4.6.2. [Caso de uso general](#462-caso-de-uso-general)
   * 4.7. [Evidencia de cambios significativos](#47-evidencia-de-cambios-significativos)
5. [Diseño (del 26 al 27 de octubre de 2026)](#5-diseño-del-26-al-27-de-octubre-de-2026)
6. [Construcción (del 27 al 28 de octubre de 2026)](#6-construcción-del-27-al-28-de-octubre-de-2026)
   * 6.1. [Prompt para Frontend Web](#61-prompt-para-frontend-web)
   * 6.2. [Prompt para creación de la Página Web](#62-prompt-para-creación-de-la-página-web)
     * 6.2.1. [Requisitos Visuales y Guía de Estilo](#621-requisitos-visuales-y-guía-de-estilo)
     * 6.2.2. [Estructura y Contenido (Basado en el Proyecto y la Rúbrica)](#622-estructura-y-contenido-basado-en-el-proyecto-y-la-rúbrica)
     * 6.2.3. [Requisitos Técnicos y de Código](#623-requisitos-técnicos-y-de-código)
   * 6.3. [Prompt para copiar y pegar en la otra IA (Versión Detallada)](#63-prompt-para-copiar-y-pegar-en-la-otra-ia)
     * 6.3.1. [Guía de Estilos y Paleta de Colores](#631-guía-de-estilos-y-paleta-de-colores)
     * 6.3.2. [Contenido y Estructura Semántica (`index.html`)](#632-contenido-y-estructura-semántica-indexhtml)
     * 6.3.3. [Requisitos Técnicos y Estilos (`styles.css`)](#633-requisitos-técnicos-y-estilos-stylescss)
     * 6.3.4. [Lógica e Interacción (`script.js`)](#634-lógica-e-interacción-scriptjs)
   * 6.4. [Prompt para copiar y pegar en la otra IA (Modificación de Pantalla 3)](#64-prompt-para-copiar-y-pegar-en-la-otra-ia)
     * 6.4.1. [Reestructuración de la Navegación Interna (Pestañas)](#641-reestructuración-de-la-navegación-interna-pestañas)
     * 6.4.2. [Detalle de Elementos y Funciones por Vista](#642-detalle-de-elementos-y-funciones-por-vista)
     * 6.4.3. [Entregables de Código](#643-entregables-de-código)
   * 6.5. [Código generado](#65-código-generado)

---

## 1. Proceso (del 1 de septiembre hasta la conclusión del proyecto)

Dentro de nuestro proyecto de Ingeniería de Software se siguió una metodología lineal llamada **cascada**, la cual consiste en un enfoque de gestión de proyectos lineal y secuencial donde habitualmente se siguen las siguientes fases: Requisitos / Análisis, Diseño, Implementación / Desarrollo, Verificación / Pruebas, Despliegue / Lanzamiento y Mantenimiento.

---

## 2. Análisis (del 1 al 20 de septiembre de 2026)

Antes de iniciar el desarrollo de software, es fundamental plantear la problemática a resolver. El dilema inicial planteado fue el siguiente: los estudiantes y recién egresados —en especial quienes inician su primer empleo formal— enfrentan un alto riesgo de vulnerabilidad financiera debido al desconocimiento de la legislación laboral. En lugar de obligar a los afectados a leer la extensa Ley Federal del Trabajo, los usuarios requieren una herramienta que ofrezca cálculos exactos e inmediatos y que detecte riesgos de forma interactiva. Para comprobar si esta problemática realmente existe, se llevó a cabo una encuesta dirigida a distintos egresados, cuyos resultados se detallan a continuación:

![Gráfica 1. Universidad de procedencia de los encuestados](img/grafica_1_universidad.png)
*Gráfica 1. Universidad de procedencia de los encuestados*

![Gráfica 1.1. Carrera que estudian los encuestados](img/grafica_1_1_carrera.png)
*Gráfica 1.1. Carrera que estudian los encuestados*

### Bloque 1. Conocimientos Básicos y Formación Académica
1. ¿Consideras que conoces tus derechos laborales básicos (salario justo, seguridad social, vacaciones, etc.)?
2. ¿Consideras que durante tu trayectoria universitaria se abordaron adecuadamente los aspectos legales y administrativos de tu futura profesión?
3. ¿Conoces el monto actual del salario mínimo legal en México?
4. ¿Te sientes preparado(a) para negociar tus condiciones de trabajo (salario, prestaciones, jornada) ante una oferta de empleo?

![Gráfica 2.0. Respuestas al bloque 1 de preguntas](img/grafica_2_0_bloque1.png)
*Gráfica 2.0. Respuestas al bloque 1 de preguntas.*

### Bloque 2. Contratos, Prestaciones y Seguridad Social
5. ¿Identificas los elementos esenciales que deben estar estipulados en un contrato laboral formal antes de firmarlo?
6. ¿Conoces la diferencia legal entre un contrato por tiempo determinado (por obra o proyecto) y uno indeterminado?
7. ¿Sabrías distinguir cláusulas abusivas o ilegales dentro de un contrato laboral (por ejemplo, penalizaciones por renunciar, acuerdos desproporcionados de no competencia o firma de pagarés)?
8. ¿Sabes distinguir entre un finiquito y una liquidación, y en qué casos corresponde cada uno?
9. En caso de una renuncia voluntaria, ¿sabes exactamente a qué pagos o proporcionales de prestaciones tienes derecho?
10. ¿Sabes cómo calcular matemáticamente el monto que te corresponde de aguinaldo y prima vacacional?
11. ¿Sabes cómo verificar si tu empleador te tiene registrado ante el IMSS con tu salario real?
12. ¿Sabes cómo consultar si tu patrón está realizando correctamente las aportaciones a tu Afore e Infonavit?
13. ¿Sabes cuáles son las causas legales por las que un empleador puede despedirte sin responsabilidad para él (despido justificado)?

![Gráfica 2.1. Respuestas al bloque 2 de preguntas](img/grafica_2_1_bloque2.png)
*Gráfica 2.1. Respuestas al bloque 2 de preguntas.*

### Bloque 3. Experiencia, Anomalías Laborales y Despido
14. ¿Has recibido información o capacitación proactiva por parte de algún empleador sobre tus derechos laborales?
15. En tu empleo o prácticas profesionales más recientes, ¿consideras que se respetaron plenamente tus derechos laborales?
16. ¿Has experimentado alguna anomalía laboral (por ejemplo: pago atrasado, horas extras no pagadas o exceso de jornada) y la has dejado pasar por alto?
17. ¿Te han obligado alguna vez a firmar una carta de renuncia o documentos en blanco como condición para contratarte o al momento de terminar la relación laboral?

![Gráfica 2.2. Respuestas al bloque 3 de preguntas](img/grafica_2_2_bloque3.png)
*Gráfica 2.2. Respuestas al bloque 3 de preguntas.*

### Bloque 4. Defensa y Reclamación Legal
18. Si te despidieran sin una causa legal justificada, ¿sabrías exactamente qué indemnizaciones te corresponden por ley?
19. Si tus derechos laborales fueran vulnerados, ¿conoces ante qué instancias o instituciones gubernamentales debes acudir para realizar un reclamo?
20. ¿Sabías que tienes derecho a solicitar representación legal gratuita por parte del Estado (PROFEDET o Defensoría Local) para demandar a un empleador?

![Gráfica 2.3. Respuestas al bloque 4 de preguntas](img/grafica_2_3_bloque4.png)
*Gráfica 2.3. Respuestas al bloque 4 de preguntas.*

Gracias al análisis de los anteriores cuestionamientos a diferentes estudiantes concluimos que sí es necesaria la realización de un software el cual ofrezca protección legal y económica al sector de nuevos profesionistas. Por lo cual, gracias a lo anterior, pasamos a la siguiente fase: la descripción de los diferentes requisitos que tendrá nuestro software con base en las respuestas obtenidas en la encuesta.

---

## 3. Requisitos (del 20 al 30 de septiembre de 2026)

Los requisitos que a continuación se mencionan fueron diseñados en consecuencia de la necesidad de los alumnos que contestaron la encuesta planteada, por lo cual atienden a las necesidades de egresados y estudiantes que utilizarán la app.

### 3.1. Requisitos Funcionales (RF)
* **RF-01 (Módulo de Cálculo):** El programa procesará los datos de entrada proporcionados por el usuario (salario, fechas de inicio y término) para calcular con exactitud la proporción de aguinaldo y prima vacacional.
* **RF-02 (Finiquito vs. Liquidación):** El sistema ejecutará las operaciones matemáticas necesarias para calcular y desglosar la diferencia económica exacta entre una renuncia voluntaria y un despido injustificado.
* **RF-03 (Auditor de Contratos):** El sistema proporcionará una función de cuestionario interactivo ("Semáforo de Riesgo") para analizar las respuestas del usuario y detectar anomalías contractuales o cláusulas ilegales.
* **RF-04 (Ruta Procesal):** La aplicación integrará una característica visual que mostrará un flujograma interactivo para guiar paso a paso al usuario a través de las etapas del proceso laboral mexicano.
* **RF-05 (Generación de Documentos):** El sistema permitirá la autocompletación algorítmica y la descarga de plantillas legales estructuradas en formato PDF.

#### 3.1.1. Casos de Uso
* **CU-01 (Calcular Prestaciones):** El usuario ingresa sus datos salariales y fechas de empleo. El sistema valida los datos, aplica las fórmulas de la ley y muestra un desglose económico detallado en pantalla.
* **CU-02 (Auditar Contrato):** El usuario responde preguntas de opción múltiple sobre su contratación. El sistema analiza las respuestas y alerta sobre cláusulas ilegales (ej. renuncia anticipada).

#### 3.1.2. Historias de Usuario
* **HU-01:** Como recién egresado, quiero ingresar mi fecha de entrada y salida para que la app me diga exactamente cuánto me toca de finiquito.
* **HU-02:** Como usuario sin conocimientos legales, quiero ver un diagrama paso a paso para que pueda entender cómo es un proceso de conciliación prejudicial.
* **HU-03:** Como trabajador despedido, quiero llenar un formulario rápido para que el sistema genere un PDF de solicitud de citatorio listo para imprimir.

### 3.2. Requisitos No Funcionales (RNF)
* **RNF-01 (Privacidad y Seguridad):** El sistema no requerirá registro ni almacenará datos personales o empresariales en bases externas, ejecutando todo el procesamiento de manera local y segura.
* **RNF-02 (Usabilidad - UX):** Siguiendo el principio de diseño "Mantenlo simple, estúpido" (KISS), la interfaz sustituirá los tecnicismos legales por un lenguaje pedagógico, garantizando un diseño sencillo e intuitivo, creado con la consciencia de que usuarios no expertos consumirán el producto.
* **RNF-03 (Accesibilidad):** La plataforma será *Responsive* (adaptable), asegurando que funcione eficientemente en diversas máquinas reales, tanto en computadoras de escritorio como en dispositivos móviles.
* **RNF-04 (Desempeño):** Para asegurar un funcionamiento eficiente en las operaciones críticas, los algoritmos de cálculo y la generación de documentos PDF deberán completarse en un tiempo de respuesta menor a 3 segundos.

### 3.3. Priorización de Requisitos
Para evaluar la factibilidad e importancia del proyecto, los requisitos se priorizaron utilizando el método de valor:
* **Alta (Críticos):** Módulo de cálculo (RF-01, RF-02), Base Legal (RN-01), Privacidad de datos (RNF-01) y Descargos de responsabilidad (RN-02). Son indispensables para la primera iteración funcional.
* **Media (Importantes):** Auditor de contratos (RF-03) y Generación de PDF (RF-05).
* **Baja (Deseables):** Ruta Procesal (RF-04) y optimización avanzada de UX (RNF-02).

### 3.4. Reglas de negocio
* **RN-01 (Base Legal):** Debido a que un software defectuoso o impreciso puede causar graves daños en el ámbito legal o financiero del usuario, todas las fórmulas matemáticas estarán estrictamente apegadas a los parámetros vigentes de la Ley Federal del Trabajo (LFT) y la jurisprudencia de México.
* **RN-02 (Alertas Jurídicas):** El sistema integrará obligatoriamente un "Disclaimer" (descargo de responsabilidad). Este advertirá de manera clara que los resultados generados tienen fines informativos y preventivos, y que bajo ninguna circunstancia sustituyen el consejo formal de un abogado experto.

---

## 4. Evolución de Requisitos (del 25 al 26 de octubre de 2026)

### 4.1. Objetivo
La evolución de requisitos tiene como finalidad mejorar la definición, organización, prioridad y verificabilidad de las necesidades identificadas para nuestro proyecto “App Jurídica Laboral”. La aplicación está orientada principalmente a estudiantes universitarios de último año, recién egresados y jóvenes profesionales que necesitan comprender sus derechos laborales en México.

A partir de la especificación inicial del repositorio, se propone transformar los requisitos generales en unos específicos, medibles y comprobables mediante criterios de aceptación. Se dará prioridad a las funciones que proporcionan mayor valor al usuario: cálculo de prestaciones, comparación de finiquito y liquidación, revisión de contratos y orientación sobre procedimientos laborales.

### 4.2. Requisitos funcionales refinados

| ID | Requisito refinado | Prioridad |
| :--- | :--- | :--- |
| **RF-01** | El sistema deberá permitir ingresar los datos laborales necesarios para calcular prestaciones proporcionales, como aguinaldo y prima vacacional. | Alta |
| **RF-02** | El sistema deberá presentar un desglose de los conceptos calculados, sus importes y los datos utilizados. | Alta |
| **RF-03** | El sistema deberá permitir comparar un escenario de renuncia voluntaria con uno de despido, identificando los conceptos aplicables en cada escenario. | Alta |
| **RF-04** | El sistema deberá ofrecer un cuestionario para identificar posibles riesgos en un contrato laboral y explicar las respuestas que generan alertas. | Alta |
| **RF-05** | El sistema deberá presentar una guía visual de las etapas generales de la conciliación y del procedimiento laboral mexicano. | Alta |
| **RF-06** | El sistema deberá permitir completar plantillas de documentos de orientación laboral y generar archivos PDF descargables. | Media |
| **RF-07** | El sistema deberá mostrar información sobre las fuentes legales utilizadas y advertir cuando una regla requiera verificación o actualización. | Alta |
| **RF-08** | El sistema deberá mostrar un aviso de alcance informativo y recomendar asesoría profesional cuando el caso requiera una valoración individual. | Alta |
| **RF-09** | El sistema deberá permitir consultar las funciones principales desde una interfaz de navegación clara. | Media |

### 4.3. Requisitos no funcionales refinados

| ID | Categoría | Requisito |
| :--- | :--- | :--- |
| **RNF-01** | Privacidad | El sistema no deberá transmitir datos personales o contractuales a servicios externos sin informar al usuario y contar con la autorización correspondiente. |
| **RNF-02** | Seguridad | Los datos ingresados deberán validarse antes de realizar cálculos o generar documentos, evitando valores inválidos y errores de procesamiento. |
| **RNF-03** | Usabilidad | Los resultados deberán utilizar lenguaje claro, etiquetas comprensibles y explicaciones de los conceptos jurídicos. |
| **RNF-04** | Adaptabilidad | La interfaz deberá adaptarse a computadoras, tabletas y teléfonos móviles sin perder el acceso a sus funciones principales. |
| **RNF-05** | Rendimiento | Los cálculos deberán completarse en menos de 3 segundos en el entorno de prueba definido, excluyendo servicios externos y otras operaciones que no controle el módulo. |
| **RNF-06** | Mantenibilidad | Las fórmulas, reglas de negocio y textos legales deberán estar organizados de forma que puedan revisarse y actualizarse sin modificar innecesariamente otros módulos. |
| **RNF-07** | Confiabilidad | El sistema deberá impedir la presentación de resultados cuando falten datos obligatorios o existan inconsistencias que afecten el cálculo. |
| **RNF-08** | Transparencia | Cada resultado deberá distinguir entre información calculada, supuestos utilizados y orientación general; no deberá presentarse como una resolución jurídica definitiva. |

### 4.4. Reglas de negocio
* **RN-01. Vigencia jurídica:** las fórmulas y los criterios legales deberán verificarse con la legislación mexicana vigente y las fuentes oficiales aplicables.
* **RN-02. Datos obligatorios:** no se realizará un cálculo si faltan los datos indispensables para la operación seleccionada.
* **RN-03. Diferenciación de escenarios:** los conceptos aplicables a una renuncia y a un despido deberán determinarse de acuerdo con los datos del caso y las reglas jurídicas correspondientes; no se asumirán automáticamente todos los conceptos posibles.
* **RN-04. Advertencia jurídica:** los resultados serán informativos y preventivos, y no sustituirán la asesoría o consejo formal de un profesional del derecho.
* **RN-05. Protección de información:** la información sensible de contratos y relaciones laborales deberá tratarse conforme a la política de privacidad del sistema y a las medidas de seguridad definidas.
* **RN-06. Actualización:** cuando una disposición legal cambie, las reglas afectadas deberán revisarse antes de publicar una actualización de la aplicación.

### 4.5. Priorización
La prioridad se establece de acuerdo con el valor que aporta cada función al objetivo principal de la aplicación.
* **Prioridad alta:** cálculos laborales, desglose de resultados, comparación de escenarios, alertas contractuales, orientación procesal, fuentes jurídicas y validación de datos.
* **Prioridad media:** generación de documentos PDF y mejoras de navegación.
* **Prioridad posterior:** funciones complementarias que no sean indispensables para completar el flujo principal.

### 4.6. Refinamiento de Artefactos

#### 4.6.1. Historias de usuario

**HU-01. Calcular prestaciones laborales**
* **Historia:** Como joven profesionista, quiero ingresar mis datos laborales para conocer una estimación de las prestaciones que me corresponden.
* **Criterios de aceptación:**
  * El sistema solicita los datos necesarios para el cálculo seleccionado.
  * Los campos obligatorios se identifican claramente.
  * El sistema muestra los conceptos calculados y sus importes por separado.
  * El resultado explica los supuestos utilizados y muestra una advertencia informativa.
* **Excepciones:**
  * Si falta un dato obligatorio, se solicita completarlo.
  * Si una fecha es inválida o existe una inconsistencia, se muestra un mensaje explicativo.
  * Si no puede determinarse un concepto con la información disponible, se indica que requiere revisión.

**HU-02. Comparar finiquito y liquidación**
* **Historia:** Como trabajador que necesita comprender las consecuencias económicas de una separación laboral, quiero comparar los escenarios aplicables para conocer sus diferencias.
* **Criterios de aceptación:**
  * El usuario puede seleccionar el escenario que desea analizar.
  * El sistema presenta los conceptos considerados en cada escenario.
  * Se muestran los importes individuales y los totales estimados.
  * Se explican los datos y supuestos que afectan la comparación.
* **Excepciones:**
  * Si no hay información suficiente para distinguir el escenario, el sistema solicita datos adicionales.
  * Si el usuario introduce un salario o periodo inválido, el cálculo no se ejecuta.
  * Si la aplicación no puede determinar la procedencia de un concepto, lo señala sin asegurar que el importe sea definitivo.

**HU-03. Revisar un contrato laboral**
* **Historia:** Como persona que está por aceptar un empleo, quiero responder un cuestionario sobre las condiciones de mi contrato para identificar posibles señales de riesgo.
* **Criterios de aceptación:**
  * El sistema presenta preguntas claras sobre condiciones contractuales relevantes.
  * Cada respuesta permite identificar las alertas correspondientes.
  * El resultado explica por qué una respuesta puede representar un riesgo.
  * Se ofrecen recomendaciones generales para buscar orientación profesional.
* **Excepciones:**
  * Si el cuestionario queda incompleto, el sistema identifica las preguntas pendientes.
  * Si las respuestas son contradictorias, solicita confirmación.
  * Si la información no permite evaluar una cláusula, el sistema indica que se necesita una revisión individual.

**HU-04. Consultar la ruta procesal laboral**
* **Historia:** Como trabajador que desconoce el procedimiento para resolver un conflicto laboral, quiero consultar una guía de etapas para comprender los pasos generales que puedo seguir.
* **Criterios de aceptación:**
  * La aplicación presenta las etapas en orden comprensible.
  * Cada etapa incluye una explicación de su finalidad.
  * Se identifican las etapas o supuestos en los que pueden existir excepciones.
  * Se proporcionan referencias a fuentes oficiales cuando corresponda.
* **Excepciones:**
  * Si el procedimiento depende de la naturaleza del conflicto, se solicita o aclara la información necesaria.
  * Si una etapa tiene excepciones legales, la guía no la presenta como obligatoria para todos los casos.
  * Si no puede verificarse una referencia, se informa que necesita actualización.

**HU-05. Generar un documento PDF**
* **Historia:** Como usuario que necesita preparar un documento de orientación laboral, quiero completar una plantilla y descargarla en PDF para disponer de un archivo que pueda revisar.
* **Criterios de aceptación:**
  * El usuario puede seleccionar una plantilla disponible.
  * El sistema solicita los datos requeridos por la plantilla.
  * Se permite revisar el contenido antes de generarlo.
  * El PDF descargado contiene la información proporcionada y conserva un formato legible.
* **Excepciones:**
  * Si faltan datos obligatorios, no se genera el documento hasta completarlos.
  * Si ocurre un error durante la generación, se muestra un mensaje y se permite intentar nuevamente.
  * El documento indica, cuando corresponda, que es un modelo orientativo y no un documento validado para cualquier situación jurídica.

#### 4.6.2. Caso de uso general
* **Actor principal:** usuario de la aplicación.
* **Actores externos potenciales:** fuentes oficiales de información jurídica, cuando la función correspondiente las consulte.
* **Casos de uso principales:**
  * **UC-01:** Calcular prestaciones laborales.
  * **UC-02:** Comparar finiquito y liquidación.
  * **UC-03:** Evaluar riesgos contractuales.
  * **UC-04:** Consultar la ruta procesal.
  * **UC-05:** Generar y descargar documentos.
  * **UC-06:** Consultar fuentes y advertencias jurídicas.
* **Precondición general:** el usuario ha abierto la aplicación y accede a la función que desea utilizar.
* **Postcondición general:** el sistema presenta el resultado, la guía o el documento solicitado, o informa claramente por qué no pudo completar la operación.

### 4.7. Evidencia de cambios significativos

#### Comparación entre la especificación inicial y la propuesta refinada

| Aspecto | Especificación inicial | Propuesta refinada |
| :--- | :--- | :--- |
| **Cálculos laborales** | Define qué prestaciones calcular. | Especifica entradas, desglose de resultados y validaciones. |
| **Finiquito y liquidación** | Solicita calcular la diferencia económica. | Define comparación de escenarios, conceptos aplicables y manejo de información insuficiente. |
| **Auditoría de contratos** | Propone un cuestionario tipo semáforo. | Propone un cuestionario tipo semáforo con explicación de alertas. |
| **Ruta procesal** | Propone un flujograma interactivo. | Define orden, explicación de etapas y tratamiento de excepciones. |
| **Documentos PDF** | Solicita autocompletar y descargar plantillas. | Añade revisión previa, validación de campos y manejo de errores. |
| **Requisitos no funcionales** | Establece privacidad, usabilidad, adaptabilidad y rendimiento. | Propone condiciones verificables de seguridad, confiabilidad, transparencia y mantenimiento. |
| **Priorización** | No presenta una matriz explícita de prioridades en la lista inicial. | Clasifica los requisitos según el valor que aportan al objetivo principal. |
| **Verificación** | Los requisitos se describen principalmente como capacidades generales. | Cada historia de usuario incluye criterios de aceptación y excepciones. |

#### Registro de cambios

| Cambio | Modificación propuesta | Justificación |
| :--- | :--- | :--- |
| **CAM-01** | Incorporar criterios de aceptación a los requisitos funcionales. | Facilitar la comprobación de que cada función satisface la necesidad del usuario. |
| **CAM-02** | Añadir validaciones y manejo de datos incompletos. | Evitar resultados incorrectos por entradas inválidas. |
| **CAM-03** | Refinar el módulo de comparación de escenarios laborales. | Evitar asumir que todos los conceptos son aplicables a cualquier separación laboral. |
| **CAM-04** | Incluir excepciones en el cuestionario contractual y la ruta procesal. | Representar situaciones que requieren confirmación o revisión individual. |
| **CAM-05** | Definir prioridades explícitas. | Orientar el desarrollo hacia las funciones de mayor valor. |
| **CAM-06** | Incorporar requisitos de transparencia y seguimiento jurídico. | Facilitar que el usuario comprenda el origen y los límites de los resultados. |

---

## 5. Diseño (del 26 al 27 de octubre de 2026)

El diseño del software se elaboró con el apoyo de herramientas de IA. En la siguiente sección, se muestra un boceto de nuestro software:

![Vista Principal - App Jurídica Laboral](img/diseno_inicio.png)

![Módulos Especializados](img/diseno_modulos.png)
* **RF-09:** El sistema deberá permitir consultar las funciones principales desde una interfaz de navegación clara.

![Perfiles de Usuario y Ecosistema](img/diseno_perfiles.png)
* **RF-08:** El sistema deberá mostrar un aviso de alcance informativo y recomendar asesoría profesional cuando el caso requiera una valoración individual.

![Criterios Jurídicos de la Plataforma](img/diseno_criterios.png)
* **RF-07:** El sistema deberá mostrar información sobre las fuentes legales utilizadas y advertir cuando una regla requiera verificación o actualización.

![Módulo de Cálculo de Aguinaldo y Vacaciones](img/diseno_calculo.png)
* **RF-01:** El sistema deberá permitir ingresar los datos laborales necesarios para calcular prestaciones proporcionales, como aguinaldo y prima vacacional.
* **RF-02:** El sistema deberá presentar un desglose de los conceptos calculados, sus importes y los datos utilizados.

![Comparador Finiquito vs Liquidación Legal](img/diseno_comparador.png)
* **RF-03:** El sistema deberá permitir comparar un escenario de renuncia voluntaria con uno de despido, identificando los conceptos aplicables en cada escenario.

![Cuestionario Rápido de Riesgo y Semáforo](img/diseno_auditor.png)
* **RF-04:** El sistema deberá ofrecer un cuestionario para identificar posibles riesgos en un contrato laboral y explicar las respuestas que generan alertas.

![Ruta Procesal - Conciliación Prejudicial](img/diseno_ruta.png)
* **RF-05:** El sistema deberá presentar una guía visual de las etapas generales de la conciliación y del procedimiento laboral mexicano.

![Generador de Formatos y Vista Previa PDF](img/diseno_documentos.png)
* **RF-06:** El sistema deberá permitir completar plantillas de documentos de orientación laboral y generar archivos PDF descargables.

---

## 6. Construcción (del 27 al 28 de octubre de 2026)

La construcción del software se realizó mediante inteligencia artificial, por lo cual se utilizaron diferentes prompts para hacer realidad el diseño anterior.

### 6.1. Prompt para Frontend Web
* **Enlace de sesión:** https://gemini.google.com/app/0926869e17b797de
* **User prompt:**
  > Te estoy compartiendo un PDF que contiene una imagen de GitHub en la cual aparecen todos los detalles de mi proyecto y otra imagen en la cual aparece una tabla rúbrica la cual debo cumplir. En la captura de GitHub considera solo los puntos del índice 1, 2, 3, 4, 5, 6, 7 y 8. Genera un prompt para crear una página web con HTML, CSS y JS y recrear el frontend no funcional pero que en diseño cumpla con los requisitos establecidos. Quiero que la paleta de colores (Te los doy en código HEX) sea "0A0C14" para el fondo, "436094" para botones y menús y "FFFFFF" para las letras. Procura que la entrega no sea en un solo archivo, sino que estén separados para mantener una buena organización.
* **Response:**
  > Aquí tienes el prompt detallado diseñado para que una IA de generación de código o un desarrollador frontend cree la interfaz web no funcional de la App Jurídica Laboral, cumpliendo exactamente con los componentes del repositorio GitHub, la rúbrica de diseño y la paleta de colores especificada.

### 6.2. Prompt para creación de la Página Web
Actúa como un Diseñador UI/UX y Desarrollador Frontend Senior. Necesito que crees el prototipo no funcional de la aplicación; el prototipo debe estructurarse en **tres archivos independientes** (`index.html`, `styles.css` y `script.js`).

#### 6.2.1. Requisitos Visuales y Guía de Estilo
* **Paleta de Colores Exclusiva:**
  * **Fondo de la aplicación:** `#0A0C14` (Azul muy oscuro / casi negro).
  * **Botones, menús de navegación, tarjetas activas y elementos destacados:** `#436094` (Azul medio).
  * **Tipografía y texto:** `#FFFFFF` (Blanco puro para asegurar contraste).
* **Estilo:** Diseño moderno, limpio, profesional, acorde a un sistema jurídico laboral legal.

#### 6.2.2. Estructura y Contenido (Basado en el Proyecto y la Rúbrica)
La interfaz debe reflejar fielmente las secciones 1 a 8 del repositorio del proyecto y cumplir con lo siguiente. El archivo `index.html` debe estructurarse en las siguientes secciones principales:

1. **Navegación Principal (Navbar & Header):**
   * Logotipo y título: **App Jurídica Laboral**.
   * Menú interactivo estilizado con el color `#436094`:
     * Inicio / Descripción
     * Usuarios y Contexto
     * Requisitos y Casos de Uso
     * Reglas de Negocio
     * Simulador / Demo Interactiva
2. **Sección 1: Descripción del Producto y Justificación (Puntos 1 y 3 del índice):**
   * Panel de bienvenida con la propuesta de valor y la necesidad de la aplicación.
   * Tarjetas informativas resumen sobre el impacto de la herramienta.
3. **Sección 2: Usuarios, Cliente y Contexto (Puntos 2 y 4 del índice):**
   * Visualización de los perfiles de usuario objetivos (Ej. Abogados, Trabajadores, Empleadores) y el contexto.
4. **Sección 3: Requisitos Funcionales (RF), Historias y Casos de Uso (Punto 5 del índice):**
   * Tablas o tarjetas interactivas que muestren los Requisitos Funcionales (RF) y las Historias de Usuario.
5. **Sección 4: Requisitos No Funcionales (RNF), Priorización y Reglas de Negocio (Puntos 6, 7 y 8 del índice):**
   * Panel que organice los RNF, la matriz de priorización de requisitos y el listado de Reglas de Negocio.
6. **Sección 5: Simulación de Tarea Específica / Validación de Interfaz (Cumplimiento de Rúbrica):**
   * Un módulo simulador interactivo de una tarea clave (por ejemplo: la consulta o gestión de un caso laboral).

#### 6.2.3. Requisitos Técnicos y de Código
* **HTML (`index.html`):** Uso estricto de HTML5 semántico (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`).
* **CSS (`styles.css`):**
  * Uso de CSS Grid y Flexbox para maquetación responsiva.
  * Variables CSS definidas en `:root` para los colores `#0A0C14`, `#436094` y `#FFFFFF`.
  * Transiciones suaves en botones e interactividad `:hover`.
* **JavaScript (`script.js`):**
  * Control de pestañas/secciones activas al navegar.
  * Simulación de interacción en el módulo de tareas (ej. al hacer clic en un botón "Simular Proceso", desplegar resultados).

Por favor, entrega la respuesta dividida claramente en tres bloques de código separados:
1. `index.html`
2. `styles.css`
3. `script.js`

---

* **User prompt:**
  > Vuelve a hacer el prompt. Recuerda que la otra IA no tiene acceso al PDF que te compartí, así que tienes que especificarle con mucho detalle lo que debe de hacer.
* **Response:**
  > Aquí tienes el prompt ampliado y autosuficiente para compartir con la otra IA. Dado que no tiene acceso al documento original, este prompt le proporciona todo el texto, contexto, datos ficticios realistas del ámbito jurídico-laboral, guía visual y la lógica interactiva exacta para cumplir con las secciones 1 a 8 del repositorio y los criterios de la rúbrica.

### 6.3. Prompt para copiar y pegar en la otra IA
Actúa como un Desarrollador Web Frontend Senior y Diseñador UI/UX. Necesito que generes el código de un prototipo web interactivo. Debes entregar la solución estrictamente organizada en tres archivos separados:
1. `index.html` (Estructura semántica)
2. `styles.css` (Diseño responsivo y estilos)
3. `script.js` (Interactividad de navegación y simulación)

#### 6.3.1. Guía de Estilos y Paleta de Colores
Aplica de forma estricta la siguiente paleta de colores mediante variables CSS (`:root`):
* **Fondo principal de la app:** `#0A0C14` (Azul/negro muy oscuro).
* **Botones, menús, tarjetas activas y elementos destacados:** `#436094` (Azul medio).
* **Texto, iconos y bordes destacados:** `#FFFFFF` (Blanco puro para máximo contraste).
* **Estilo General:** Diseño moderno con tema oscuro (Dark Mode), bordes ligeramente redondeados (`border-radius`).

#### 6.3.2. Contenido y Estructura Semántica (`index.html`)
El sitio debe estar dividido en secciones visualmente claras que representen la documentación y prototipo del sistema:

* **A. Encabezado y Navegación Header (`<header>`, `<nav>`)**
  * **Logo/Título:** App Jurídica Laboral
  * **Menú de navegación interactivo (links a las secciones):**
    1. Inicio / Descripción
    2. Usuarios y Contexto
    3. Requisitos (RF / RNF)
    4. Reglas de Negocio
    5. Simulador de Tarea (Demo)
* **Sección 1: Descripción del Producto y Justificación**
  * **1. Descripción del Producto:** Presenta la "App Jurídica Laboral" como una solución integral que digitaliza el cálculo y orientación laboral.
  * **3. Necesidad de la Aplicación y Propuesta de Valor:**
    * *Problema:* Desconocimiento de derechos laborales, cálculos complejos de liquidación e ineficiencia en la revisión de contratos.
    * *Propuesta de Valor:* Transparencia en el cálculo de prestaciones, acceso rápido a asesoría legal y auditoría preventiva.
* **Sección 2: Usuarios, Cliente y Contexto**
  * **2. Usuarios y Cliente:** Muestra en formato de tarjetas los perfiles clave:
    * *Trabajador / Empleado:* Consulta de derechos, liquidaciones e historial de faltas.
    * *Abogado Laboralista:* Gestión de causas, cálculo automático de finiquitos y agenda de audiencias.
    * *Empleador / RRHH:* Registro de contratos, cálculo de finiquitos y prevención de litigios.
  * **4. Contexto y Elicitación de Requisitos:** Muestra un resumen del origen de las necesidades (entrevistas y encuestas).
* **Sección 3: Requisitos Funcionales y No Funcionales**
  * **5. Requisitos Funcionales (RF) y Casos de Uso:** Muestra una tabla o lista de historias de usuario:
    * *RF-01:* Calculadora de Liquidaciones y Finiquitos.
    * *RF-02:* Gestor de Expedientes Laborales.
    * *RF-03:* Generador de Notificaciones de Despido/Renuncia.
    * *RF-04:* Sistema de Citas y Asesorías.
  * **6. Requisitos No Funcionales (RNF):** Tarjetas con estándares de Seguridad (Encriptado de datos sensibles), Usabilidad, etc.
  * **7. Priorización de Requisitos:** Tabla formateada organizando los RF por prioridad (Alta, Media, Baja).
* **Sección 4: Reglas de Negocio**
  * **8. Reglas de Negocio (RN):** Lista de normas legales integradas en la app:
    * *RN-01:* El cálculo de indemnización por despido injustificado equivale a 90 días de salario integrado más 20 días por año.
    * *RN-02:* Las solicitudes de asesoría deben prescribir o archivarse tras 60 días de inactividad.
    * *RN-03:* La información del trabajador está protegida bajo secreto profesional y leyes de protección de datos.
* **Sección 5: Módulo Interactivo de Simulación de Tarea**
  * Crea una interfaz de **"Simulador de Cálculo de Liquidación Laboral"**:
    * Un formulario con campos de entrada: Salario mensual, Años trabajados, Motivo de salida (Despido Injustificado / Renuncia).
    * Un botón estilizado (`#436094`) que diga "Calcular Estimación".
    * Un contenedor visual donde se muestren los resultados tabulados simulados al presionar el botón.
* **G. Pie de Página (`<footer>`)**
  * Derechos reservados "App Jurídica Laboral", enlaces de contacto y estado del sistema (Prototipo Frontend No Funcional).

#### 6.3.3. Requisitos Técnicos y Estilos (`styles.css`)
* Define las variables CSS para los colores exigidos:
```css
:root {
  --bg-color: #0A0C14;
  --accent-color: #436094;
  --text-color: #FFFFFF;
}

