# App Jurídica Laboral

# Requerimientos del Sistema: App Asesor Jurídico Laboral

## 1. Contexto y Estudio de Usuarios (Elicitación)
Los siguientes requerimientos fueron definidos a partir de un proceso de investigación y elicitación de requisitos. Se diseñó y aplicó una encuesta estructurada a estudiantes de último año y recién egresados (usuarios objetivo) para evaluar su nivel de conocimiento sobre derechos laborales, prestaciones, identificación de cláusulas abusivas y procesos de defensa legal. Los resultados de este estudio justifican la necesidad de los módulos de cálculo, auditoría de contratos y guía procesal descritos a continuación.

## 2. Requisitos Funcionales (RF)
*Son las acciones y funciones específicas que la aplicación le permitirá realizar al usuario.*

* **RF-01 (Módulo de Cálculo):** El sistema debe permitir al usuario ingresar su salario (bruto o neto), fecha de inicio y fecha de término para calcular el proporcional de aguinaldo y prima vacacional.
* **RF-02 (Finiquito vs. Liquidación):** El sistema debe calcular y desglosar la diferencia monetaria entre una renuncia voluntaria (finiquito) y un despido injustificado (liquidación constitucional de 90 días + 20 días por año + prima de antigüedad).
* **RF-03 (Auditor de Contratos):** El sistema debe contar con un cuestionario interactivo que actúe como un "Semáforo de Riesgo" para detectar anomalías contractuales (como firma de pagarés en blanco, cláusulas de no competencia desmedidas o simulación de honorarios).
* **RF-04 (Ruta Procesal):** El sistema debe mostrar un flujograma o línea de tiempo interactiva que explique las etapas del proceso laboral mexicano (desde la conciliación perjudicial de 45 días hasta el juicio).
* **RF-05 (Generación de Documentos):** El sistema debe generar y permitir la descarga de plantillas autocompletables en formato PDF (ej. Solicitud de citatorio para conciliación y carta de solicitud de representación en PROFEDET).

## 3. Requisitos No Funcionales (RNF)
*Son las restricciones, estándares de calidad y características técnicas del sistema.*

* **RNF-01 (Privacidad y Seguridad):** El sistema no debe requerir que el usuario se registre, ni debe almacenar nombres reales de las empresas empleadoras o datos personales del usuario en bases de datos externas. Todo procesamiento debe ejecutarse del lado del cliente (Local Storage) para proteger la identidad del usuario.
* **RNF-02 (Usabilidad - UX):** La interfaz de usuario (UI) debe estar diseñada para personas sin formación jurídica, sustituyendo los tecnicismos legales por lenguaje claro y pedagógico.
* **RNF-03 (Accesibilidad):** La plataforma debe ser *Responsive* (adaptable a diferentes tamaños de pantalla) para que los usuarios puedan utilizarla fluidamente tanto en computadoras de escritorio como en dispositivos móviles.
* **RNF-04 (Desempeño):** La generación de documentos PDF y los cálculos matemáticos deben realizarse en un tiempo de respuesta menor a 3 segundos.

