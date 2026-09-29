# App Jurídica Laboral

# Requerimientos del Sistema: App Asesor Jurídico Laboral

## 0. Necesidad de la aplicación (Justificación)
*Describe el propósito principal y la razón de ser del sistema, demostrando cómo resuelve un problema real y aporta beneficios directos al usuario.*

* Todo sistema de software existe por una sola razón: para proporcionar valor a sus usuarios.
* Los recién egresados, en especial los ingenieros que se enfrentan a su primer trabajo, requieren orientación certera para evitar abusos contractuales. La aplicación surge para ofrecer este valor al brindar instrucciones, estructuras de datos e información descriptiva que les permitan entender y manipular adecuadamente la información sobre sus derechos.
* Aplicando el principio fundamental de la ingeniería de software que dicta "entender el problema" antes de plantear la solución, se identifica que los nuevos profesionistas necesitan una herramienta accesible de alta calidad que los proteja de escenarios donde la desinformación podría ocasionar un gran daño económico.

## 1. Contexto y Estudio de Usuarios (Elicitación)
*Actividad inicial de comunicación donde, antes de comenzar cualquier trabajo técnico, se colabora con los usuarios para comprender sus objetivos y reunir los requerimientos del sistema.*

Antes de definir la funcionalidad del software, es de importancia crítica comunicarse y colaborar con los participantes para entender sus necesidades. Por ello, se diseñó y aplicó una encuesta estructurada a estudiantes de último año y recién egresados (usuarios objetivo) para evaluar su nivel de conocimiento sobre derechos laborales y procesos legales. A través de esta comunicación efectiva continua, se obtuvieron requerimientos no ambiguos que justifican el desarrollo de los módulos de cálculo, auditoría y guía procesal, asegurando que las características del software respondan a problemas y demandas reales.

## 2. Requisitos Funcionales (RF)
*Son las instrucciones (programas de computadora) que, al ser ejecutadas, proporcionarán las características, las funciones y el desempeño específicos deseados por el usuario.*

* **RF-01 (Módulo de Cálculo):** El programa debe procesar los datos de entrada del usuario (salario bruto o neto, fecha de inicio y término) para calcular con exactitud la proporción de aguinaldo y prima vacacional correspondiente.
* **RF-02 (Finiquito vs. Liquidación):** El sistema debe ejecutar las operaciones matemáticas necesarias para calcular y desglosar la diferencia económica entre una renuncia voluntaria (finiquito) y un despido injustificado (liquidación constitucional de 90 días, 20 días por año y prima de antigüedad).
* **RF-03 (Auditor de Contratos):** El sistema proporcionará una función de cuestionario interactivo ("Semáforo de Riesgo") para evaluar y detectar anomalías contractuales, tales como firmas de pagarés en blanco, cláusulas de no competencia desmedidas o simulación de honorarios.
* **RF-04 (Ruta Procesal):** La aplicación debe contar con la característica visual de mostrar un flujograma interactivo que guíe paso a paso las etapas del proceso laboral mexicano (desde la conciliación prejudicial de 45 días hasta el juicio).
* **RF-05 (Generación de Documentos):** El sistema debe permitir la autocompletación, generación y descarga de plantillas legales en formato PDF (Ejemplo: solicitud de citatorio para conciliación y carta para PROFEDET).

## 3. Requisitos No Funcionales (RNF)
*Son las restricciones, atributos y estándares que garantizan que el software tenga alta calidad, sea confiable, seguro y trabaje con eficiencia en las plataformas de los usuarios.*

* **RNF-01 (Privacidad y Seguridad):** El sistema debe proteger la integridad del usuario; por lo tanto, no requerirá registro ni almacenará datos personales o empresariales en bases externas, ejecutando todo el procesamiento en el almacenamiento local del dispositivo (Local Storage).
* **RNF-02 (Usabilidad - UX):** Siguiendo el principio de diseño "Mantenlo sencillo, estúpido" (KISS), la interfaz debe ser tan simple como sea posible para su audiencia. Se sustituirán los tecnicismos legales por un lenguaje claro y pedagógico, cumpliendo el principio de diseñar con la certeza de que otras personas consumirán y deberán entender el producto.
* **RNF-03 (Accesibilidad):** La plataforma debe estar diseñada de forma *Responsive* (adaptable a diferentes tamaños de pantalla) para garantizar que funcione eficientemente sobre diversas máquinas reales, tanto en computadoras de escritorio como en dispositivos móviles.
* **RNF-04 (Desempeño):** Para asegurar un funcionamiento eficiente, los algoritmos de cálculo y la generación de documentos PDF deben completarse en un tiempo de respuesta menor a 3 segundos.

## 4. Reglas de Negocio (RN)
*Son las políticas, fundamentos legales o directrices que restringen y determinan la lógica con la que el sistema procesa la información para garantizar su validez y fiabilidad.*

* **RN-01 (Base Legal):** Dado que las fallas en la lógica del software podrían ocasionar un daño económico severo al usuario o llevarlo a tomar malas decisiones, todas las fórmulas matemáticas deben estar estrictamente apegadas a los parámetros vigentes estipulados en la Ley Federal del Trabajo (LFT) y la jurisprudencia de México.
* **RN-02 (Alertas Jurídicas):** El sistema debe priorizar la protección legal integrando un "Disclaimer" (descargo de responsabilidad). Este advertirá que la aplicación tiene fines informativos y de orientación, pero bajo ninguna circunstancia sustituye el consejo formal y personalizado de un abogado laboral.
