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
*Son las restricciones, estándares de calidad y características técnicas del sistema.*

* **RNF-01 (Privacidad y Seguridad):** El sistema no debe requerir que el usuario se registre, ni debe almacenar nombres reales de las empresas empleadoras o datos personales del usuario en bases de datos externas. Todo procesamiento debe ejecutarse del lado del cliente (Local Storage) para proteger la identidad del usuario.
* **RNF-02 (Usabilidad - UX):** La interfaz de usuario (UI) debe estar diseñada para personas sin formación jurídica, sustituyendo los tecnicismos legales por lenguaje claro y pedagógico.
* **RNF-03 (Accesibilidad):** La plataforma debe ser *Responsive* (adaptable a diferentes tamaños de pantalla) para que los usuarios puedan utilizarla fluidamente tanto en computadoras de escritorio como en dispositivos móviles.
* **RNF-04 (Desempeño):** La generación de documentos PDF y los cálculos matemáticos deben realizarse en un tiempo de respuesta menor a 3 segundos.

## 4. Reglas de Negocio (RN)
*Son las políticas legales o empresariales que rigen la lógica de la aplicación.*

* **RN-01 (Base Legal):** Todas las fórmulas matemáticas utilizadas para la calculadora de prestaciones deben estar apegadas a los parámetros vigentes estipulados en la Ley Federal del Trabajo (LFT), jurisprudencia y de México.
* **RN-02 (Alertas Jurídicas):** El sistema siempre debe emitir un "Disclaimer" o descargo de responsabilidad indicando que la aplicación tiene fines informativos y de orientación, pero no sustituye el consejo formal y personalizado de un abogado laboral.

