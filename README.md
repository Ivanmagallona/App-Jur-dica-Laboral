# App Jurídica Laboral

## 1. Descripción del Producto
* **Objetivo:** Desarrollar una aplicación de software que brinde información, instrucciones y estructuras de cálculo automatizadas sobre derechos laborales, con el fin de orientar a los trabajadores en México y evitar abusos contractuales.
* **Alcance:** El sistema abarcará el cálculo preciso de proporciones de aguinaldo, prima vacacional, diferencias entre finiquito y liquidación, la evaluación de contratos mediante cuestionarios interactivos, y la generación de documentos legales en formato PDF.
* **Limitaciones:** La aplicación es estrictamente informativa y de orientación preventiva; no almacenará información en bases de datos externas y no sustituirá el consejo formal de un abogado laboral.

## 2. Usuarios y Cliente
* **Usuarios Primarios:** Estudiantes universitarios de último año y profesionales recién egresados que se enfrentan a su primer empleo formal.
* **Usuarios Secundarios:** Trabajadores jóvenes en general que necesiten auditar sus condiciones laborales actuales.
* **Perfiles y Escenarios:** Jóvenes expuestos a un alto riesgo de daño económico por desinformación (firmas de pagarés en blanco, renuncias forzadas, simulación de honorarios) que necesitan una herramienta accesible en un entorno de alto estrés laboral.

## 3. Necesidad de la Aplicación y Propuesta de Valor (Justificación)
*Definición: Este apartado describe el propósito principal y la razón de ser del sistema, demostrando cómo resuelve un problema real y aporta beneficios directos al usuario.*

* Todo sistema de software existe por una sola razón: para proporcionar valor a sus usuarios. 
* Los estudiantes y recién egresados, en especial los ingenieros que inician su primer trabajo formal, enfrentan un alto riesgo de vulnerabilidad financiera por desconocimiento de las leyes. Esta aplicación surge para ofrecer protección legal y económica al sector de nuevos profesionistas.
* Aplicando el principio fundamental de la ingeniería de software de "entender el problema" antes de plantear o construir una solución, se determinó que, a diferencia de leer la extensa Ley Federal del Trabajo, los usuarios necesitan una herramienta que entregue cálculos exactos inmediatos y detecte riesgos de forma interactiva.
* Al funcionar a través de estructuras de datos e información descriptiva, la app salvaguarda la privacidad total del usuario (al no requerir registros de datos personales) mientras lo empodera para tomar decisiones seguras.

## 4. Contexto y Elicitación de Requisitos
*Definición: Es la actividad inicial de comunicación donde, antes de comenzar cualquier trabajo técnico, se colabora con los usuarios para comprender sus objetivos y reunir los requerimientos del sistema.*

Antes de definir la funcionalidad del software, es de importancia crítica comunicarse y colaborar con los participantes. Por ello, se colaboró con los usuarios objetivos mediante encuestas para entender sus necesidades reales frente a su primer empleo y así obtener requisitos no ambiguos. Esto justificó el diseño de módulos automatizados que respondieran a su falta de experiencia legal.

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

## 6. Requisitos No Funcionales (RNF)
*Definición: Son las restricciones, atributos de calidad y características técnicas que garantizan que el software sea seguro, confiable y trabaje con eficiencia en las plataformas de los usuarios.*

* **RNF-01 (Privacidad y Seguridad):** El sistema no requerirá registro ni almacenará datos personales o empresariales en bases externas, ejecutando todo el procesamiento de manera local y segura.
* **RNF-02 (Usabilidad - UX):** Siguiendo el principio de diseño "Mantenlo simple, estúpido" (KISS), la interfaz sustituirá los tecnicismos legales por un lenguaje pedagógico, garantizando un diseño sencillo e intuitivo, creado con la consciencia de que usuarios no expertos consumirán el producto.
* **RNF-03 (Accesibilidad):** La plataforma será *Responsive* (adaptable), asegurando que funcione eficientemente en diversas máquinas reales, tanto en computadoras de escritorio como en dispositivos móviles.
* **RNF-04 (Desempeño):** Para asegurar un funcionamiento eficiente en las operaciones críticas, los algoritmos de cálculo y la generación de documentos PDF deberán completarse en un tiempo de respuesta menor a 3 segundos.

## 7. Priorización de Requisitos
Para evaluar la factibilidad e importancia del proyecto, los requisitos se priorizaron utilizando el método de valor:
* **Alta (Críticos):** Módulo de cálculo (RF-01, RF-02), Base Legal (RN-01), Privacidad de datos (RNF-01) y Descargos de responsabilidad (RN-02). Son indispensables para la primera iteración funcional.
* **Media (Importantes):** Auditor de contratos (RF-03) y Generación de PDF (RF-05).
* **Baja (Deseables):** Ruta Procesal (RF-04) y optimización avanzada de UX (RNF-02).

## 8. Reglas de Negocio (RN)
*Definición: Son las políticas, fundamentos legales o directrices que restringen y determinan la lógica con la que el sistema procesa la información para garantizar su validez y fiabilidad.*

* **RN-01 (Base Legal):** Debido a que un software defectuoso o impreciso puede causar graves daños en el ámbito legal o financiero del usuario, todas las fórmulas matemáticas estarán estrictamente apegadas a los parámetros vigentes de la Ley Federal del Trabajo (LFT) y la jurisprudencia de México.
* **RN-02 (Alertas Jurídicas):** El sistema integrará obligatoriamente un "Disclaimer" (descargo de responsabilidad). Este advertirá de manera clara que los resultados generados tienen fines informativos y preventivos, y que bajo ninguna circunstancia sustituyen el consejo formal de un abogado experto.

## 9. Competencias
A través del desarrollo de esta app, se promueven las siguientes competencias, tomando en cuenta el conocimiento (saber qué), la habilidad (saber cómo) y las disposiciones (saber por qué):

### Competencias Genéricas
* **Pensamiento Analítico y Crítico:** Se fomenta al simplificar información legal compleja en partes básicas y procesar fórmulas abstractas para que el sistema tome decisiones precisas al arrojar un cálculo económico.

### Competencias Específicas
* **Ingeniería de Requisitos:** Capacidad demostrada para analizar y presentar un problema complejo, interactuando con los usuarios finales para obtener requisitos claros y convertirlos en componentes funcionales.
* **Garantía de Calidad (Quality Assurance):** Aplicación de métricas de rendimiento e identificación de riesgos y defectos legales/técnicos en el flujo de la aplicación.

## 10. Evidencia y Presentación del Proyecto

### Video Presentación
* En el siguiente enlace se documenta la explicación y funcionamiento del proyecto:[(https://youtu.be/jNzzQemtiDM)]

### Tabla de Participación
Se detalla el involucramiento y las tareas desarrolladas por cada integrante durante el ciclo de vida del proyecto:

| Nombre del Integrante | Rol / Actividad Principal | Participación (%) |
| :--- | :--- | :---: |
| Israel Vázquez Cortazar | Repositorio y Descripción del producto | 20% |
| Mauro Basilio Medina | Edición del video y administración de proyecto | 20% |
| Iván Leonardo Magallón Arias | Repositorio, Requisitos Funcionales y casos de uso | 20% |
| Abraham Isaí Caamal HAu | Usuarios y clientes | 10% |
| Roberto Quintal Martinez | Requisitos no funcionales | 10% |
| Elberth Alberto Cortazar | Priorización de requisitos y Reglas de negocio | 10% |
| Oscaldo Francisco Solís Medina | Competencias | 10% |