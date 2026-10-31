/**
 * ============================================================================
 * APP JURÍDICA LABORAL - LÓGICA E INTERACTIVIDAD (script.js)
 * Arquitectura SPA, Módulos Operativos, Secciones Colapsables y Simulador en Tiempo Real.
 * ============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // Formateador de moneda en pesos mexicanos (MXN)
  const currencyFormatter = new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });

  // --------------------------------------------------------------------------
  // 1. NAVEGACIÓN ENTRE PANTALLAS (SPA)
  // --------------------------------------------------------------------------
  const screens = document.querySelectorAll('.screen');
  const navBtns = document.querySelectorAll('.nav-btn');
  const screenTriggers = document.querySelectorAll('[data-screen-target]');
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mainNav = document.getElementById('mainNav');

  function switchScreen(targetScreenId, updateHash = true) {
    if (!targetScreenId) return;

    // Normalizar id y alias
    let cleanId = targetScreenId.replace(/^#|^screen-/, '');
    if (cleanId === 'requisitos') cleanId = 'modulos';

    const targetElement = document.getElementById(`screen-${cleanId}`);
    if (!targetElement) return;

    // 1. Ocultar todas las pantallas y mostrar la seleccionada
    screens.forEach(s => s.classList.remove('active'));
    targetElement.classList.add('active');

    // 2. Actualizar botones activos del header
    navBtns.forEach(btn => {
      let btnTarget = btn.getAttribute('data-screen-target');
      if (btnTarget === 'requisitos') btnTarget = 'modulos';
      if (btnTarget === cleanId) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // 3. Cerrar menú móvil si está abierto
    if (mainNav && mainNav.classList.contains('is-open')) {
      mainNav.classList.remove('is-open');
      if (mobileMenuBtn) {
        mobileMenuBtn.classList.remove('is-active');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
      }
    }

    // 4. Scroll superior suave
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // 5. Sincronizar URL hash
    if (updateHash && window.location.hash !== `#${cleanId}`) {
      history.pushState(null, '', `#${cleanId}`);
    }
  }

  screenTriggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const targetScreen = trigger.getAttribute('data-screen-target');
      switchScreen(targetScreen, true);
    });
  });

  if (mobileMenuBtn && mainNav) {
    mobileMenuBtn.addEventListener('click', () => {
      const isExpanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
      mobileMenuBtn.setAttribute('aria-expanded', !isExpanded);
      mobileMenuBtn.classList.toggle('is-active');
      mainNav.classList.toggle('is-open');
    });
  }

  window.addEventListener('popstate', () => {
    const hash = window.location.hash.replace('#', '') || 'inicio';
    switchScreen(hash, false);
  });

  // --------------------------------------------------------------------------
  // 2. PANTALLA 2: SUBTABS DE USUARIOS Y PANEL COLAPSABLE
  // --------------------------------------------------------------------------
  const userFilterBtns = document.querySelectorAll('[data-user-filter]');
  const userCards = document.querySelectorAll('.user-card');

  userFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-user-filter');

      userFilterBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      userCards.forEach(card => {
        const cardType = card.getAttribute('data-user-type');
        if (filter === 'all' || cardType === filter) {
          card.style.display = 'flex';
          card.style.animation = 'fadeInPane 0.25s ease forwards';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Toggle del panel de fundamentación metodológica (Pantalla 2)
  const btnToggleContext = document.getElementById('btnToggleContext');
  const contextPanelContent = document.getElementById('contextPanelContent');
  const toggleContextText = document.getElementById('toggleContextText');

  if (btnToggleContext && contextPanelContent) {
    btnToggleContext.addEventListener('click', () => {
      const isCollapsed = contextPanelContent.classList.contains('collapsed');
      if (isCollapsed) {
        contextPanelContent.classList.remove('collapsed');
        if (toggleContextText) toggleContextText.textContent = 'Ocultar Fundamentación Legal y Metodológica';
      } else {
        contextPanelContent.classList.add('collapsed');
        if (toggleContextText) toggleContextText.textContent = 'Ver Fundamentación Legal y Metodológica';
      }
    });
  }

  // --------------------------------------------------------------------------
  // 3. PANTALLA 3: NAVEGACIÓN DE MÓDULOS (PESTAÑAS)
  // --------------------------------------------------------------------------
  const toolTabBtns = document.querySelectorAll('[data-tool-tab]');
  const toolPanes = document.querySelectorAll('.tool-pane');

  toolTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetTab = btn.getAttribute('data-tool-tab');

      toolTabBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      toolPanes.forEach(pane => pane.classList.remove('active'));
      const activePane = document.getElementById(`pane-${targetTab}`);
      if (activePane) {
        activePane.classList.add('active');
      }
    });
  });

  // --------------------------------------------------------------------------
  // 4. MÓDULO 1: CÁLCULO DE PRESTACIONES (AGUINALDO Y PRIMA VACACIONAL)
  // --------------------------------------------------------------------------
  const prestacionesSalaryInput = document.getElementById('prestacionesSalary');
  const diasLaboradosAnoInput = document.getElementById('diasLaboradosAno');
  const diasVacacionesDerechoInput = document.getElementById('diasVacacionesDerecho');
  const btnCalcularPrestaciones = document.getElementById('btnCalcularPrestaciones');

  const dispTotalPrestaciones = document.getElementById('dispTotalPrestaciones');
  const dispSalarioDiarioCalc = document.getElementById('dispSalarioDiarioCalc');
  const dispSalarioDiario = document.getElementById('dispSalarioDiario');
  const dispAguinaldoCalc = document.getElementById('dispAguinaldoCalc');
  const dispAguinaldoVal = document.getElementById('dispAguinaldoVal');
  const dispVacacionesCalc = document.getElementById('dispVacacionesCalc');
  const dispVacacionesVal = document.getElementById('dispVacacionesVal');
  const dispPrimaVacacionalVal = document.getElementById('dispPrimaVacacionalVal');

  function calculatePrestacionesProporcionales() {
    if (!prestacionesSalaryInput) return;

    const monthly = parseFloat(prestacionesSalaryInput.value) || 18000;
    let diasTrabajados = parseInt(diasLaboradosAnoInput?.value) || 180;
    let diasVac = parseInt(diasVacacionesDerechoInput?.value) || 12;

    if (diasTrabajados > 365) diasTrabajados = 365;
    if (diasTrabajados < 1) diasTrabajados = 1;

    const daily = monthly / 30;
    const factorAno = diasTrabajados / 365;

    // Aguinaldo: 15 días anuales x factor de tiempo
    const aguinaldoMonto = daily * 15 * factorAno;

    // Vacaciones: días por año x factor de tiempo
    const vacacionesMonto = daily * diasVac * factorAno;

    // Prima vacacional: 25% sobre vacaciones devengadas
    const primaVacMonto = vacacionesMonto * 0.25;

    const totalPrestaciones = aguinaldoMonto + vacacionesMonto + primaVacMonto;

    if (dispTotalPrestaciones) dispTotalPrestaciones.textContent = currencyFormatter.format(totalPrestaciones) + ' MXN';
    if (dispSalarioDiarioCalc) dispSalarioDiarioCalc.textContent = `${currencyFormatter.format(monthly)} ÷ 30 días`;
    if (dispSalarioDiario) dispSalarioDiario.textContent = currencyFormatter.format(daily);

    if (dispAguinaldoCalc) dispAguinaldoCalc.textContent = `(${diasTrabajados} ÷ 365) × 15 días × ${currencyFormatter.format(daily)}`;
    if (dispAguinaldoVal) dispAguinaldoVal.textContent = currencyFormatter.format(aguinaldoMonto);

    if (dispVacacionesCalc) dispVacacionesCalc.textContent = `(${diasTrabajados} ÷ 365) × ${diasVac} días × ${currencyFormatter.format(daily)}`;
    if (dispVacacionesVal) dispVacacionesVal.textContent = currencyFormatter.format(vacacionesMonto);

    if (dispPrimaVacacionalVal) dispPrimaVacacionalVal.textContent = currencyFormatter.format(primaVacMonto);
  }

  if (btnCalcularPrestaciones) {
    btnCalcularPrestaciones.addEventListener('click', () => {
      calculatePrestacionesProporcionales();
      showToast('✓ Proporciones de aguinaldo y prima vacacional recalculadas.');
    });
  }

  // --------------------------------------------------------------------------
  // 5. MÓDULO 2: COMPARADOR FINIQUITO VS. LIQUIDACIÓN
  // --------------------------------------------------------------------------
  const compSalaryInput = document.getElementById('compSalary');
  const compYearsInput = document.getElementById('compYears');
  const btnActualizarComparador = document.getElementById('btnActualizarComparador');

  const dispFiniquitoTotal = document.getElementById('dispFiniquitoTotal');
  const dispFiniquitoPrestaciones = document.getElementById('dispFiniquitoPrestaciones');
  const dispFiniquitoPrima = document.getElementById('dispFiniquitoPrima');

  const dispLiquidacionTotal = document.getElementById('dispLiquidacionTotal');
  const dispLiq90Dias = document.getElementById('dispLiq90Dias');
  const dispLiq20Dias = document.getElementById('dispLiq20Dias');
  const dispLiqPrima = document.getElementById('dispLiqPrima');
  const dispLiqPrestaciones = document.getElementById('dispLiqPrestaciones');
  const dispDiferenciaNeta = document.getElementById('dispDiferenciaNeta');

  function calculateComparadorFiniquitoVsLiquidacion() {
    if (!compSalaryInput) return;

    const monthly = parseFloat(compSalaryInput.value) || 20000;
    const years = parseFloat(compYearsInput ? compYearsInput.value : 3) || 3;
    const daily = monthly / 30;

    // Prestaciones comunes devengadas (estimado proporcional: medio año)
    const aguinaldoEst = daily * 15 * 0.5;
    const vacacionesEst = (6 * daily) * 1.25;
    const prestacionesComunes = aguinaldoEst + vacacionesEst;

    // Prima de antigüedad: salario tope 2 salarios mínimos (aprox. $497.86)
    const topeSalarioMin = 248.93 * 2;
    const basePrima = Math.min(daily, topeSalarioMin);
    const primaAntiguedad = basePrima * 12 * years;

    // 1. Finiquito (Renuncia)
    let finiquitoPrima = 0;
    if (years >= 15) {
      finiquitoPrima = primaAntiguedad;
      if (dispFiniquitoPrima) dispFiniquitoPrima.textContent = currencyFormatter.format(finiquitoPrima);
    } else {
      finiquitoPrima = 0;
      if (dispFiniquitoPrima) dispFiniquitoPrima.textContent = '$0.00 (No Aplica)';
    }
    const totalFiniquito = prestacionesComunes + finiquitoPrima;

    // 2. Liquidación (Despido Injustificado)
    const ind90Dias = daily * 90;
    const ind20DiasAno = daily * 20 * years;
    const totalLiquidacion = ind90Dias + ind20DiasAno + primaAntiguedad + prestacionesComunes;

    // 3. Diferencia
    const diferencia = totalLiquidacion - totalFiniquito;

    if (dispFiniquitoTotal) dispFiniquitoTotal.textContent = currencyFormatter.format(totalFiniquito);
    if (dispFiniquitoPrestaciones) dispFiniquitoPrestaciones.textContent = currencyFormatter.format(prestacionesComunes);

    if (dispLiquidacionTotal) dispLiquidacionTotal.textContent = currencyFormatter.format(totalLiquidacion);
    if (dispLiq90Dias) dispLiq90Dias.textContent = currencyFormatter.format(ind90Dias);
    if (dispLiq20Dias) dispLiq20Dias.textContent = currencyFormatter.format(ind20DiasAno);
    if (dispLiqPrima) dispLiqPrima.textContent = currencyFormatter.format(primaAntiguedad);
    if (dispLiqPrestaciones) dispLiqPrestaciones.textContent = currencyFormatter.format(prestacionesComunes);

    if (dispDiferenciaNeta) dispDiferenciaNeta.textContent = '+' + currencyFormatter.format(diferencia) + ' MXN';
  }

  if (btnActualizarComparador) {
    btnActualizarComparador.addEventListener('click', () => {
      calculateComparadorFiniquitoVsLiquidacion();
      showToast('✓ Comparativa económica actualizada.');
    });
  }

  // --------------------------------------------------------------------------
  // 6. MÓDULO 3: AUDITOR DE CONTRATOS (SEMÁFORO DE RIESGO)
  // --------------------------------------------------------------------------
  const questionRows = document.querySelectorAll('.question-row');
  const lightGreen = document.getElementById('lightGreen');
  const lightYellow = document.getElementById('lightYellow');
  const lightRed = document.getElementById('lightRed');
  const riskBadge = document.getElementById('riskBadge');
  const riskTitle = document.getElementById('riskTitle');
  const riskExplanation = document.getElementById('riskExplanation');
  const riskRecText = document.getElementById('riskRecText');

  // Inicializar estado de las 5 preguntas (por defecto 2 Sí para demostración)
  const userAnswers = { 1: 'yes', 2: 'yes', 3: 'no', 4: 'no', 5: 'no' };

  function updateRiskSemaphore() {
    let yesCount = 0;
    Object.values(userAnswers).forEach(val => {
      if (val === 'yes') yesCount++;
    });

    if (lightGreen) lightGreen.classList.remove('active');
    if (lightYellow) lightYellow.classList.remove('active');
    if (lightRed) lightRed.classList.remove('active');

    if (riskBadge) riskBadge.classList.remove('badge-green', 'badge-yellow');

    if (yesCount === 0) {
      // Verde: Regular
      if (lightGreen) lightGreen.classList.add('active');
      if (riskBadge) {
        riskBadge.textContent = 'Contrato Regular / Bajo Riesgo';
        riskBadge.classList.add('badge-green');
      }
      if (riskTitle) riskTitle.textContent = 'Condiciones Aparentemente Conformes a Ley';
      if (riskExplanation) riskExplanation.textContent = 'No se detectaron indicios manifiestos de cláusulas nulas ni simulaciones laborales. Las condiciones pactadas respetan los mínimos de la Ley Federal del Trabajo.';
      if (riskRecText) riskRecText.textContent = 'Mantén archivados tus recibos de nómina CFDI timbrados y constancias de alta ante el IMSS de forma preventiva.';
    } else if (yesCount === 1) {
      // Amarillo: Precaución
      if (lightYellow) lightYellow.classList.add('active');
      if (riskBadge) {
        riskBadge.textContent = 'Alerta de Riesgo Moderado';
        riskBadge.classList.add('badge-yellow');
      }
      if (riskTitle) riskTitle.textContent = 'Posible Irregularidad Laboral Detectada';
      if (riskExplanation) riskExplanation.textContent = 'Se identificó una práctica que podría vulnerar tus derechos o generar discrepancias en tus cotizaciones para pensión y vivienda (Infonavit).';
      if (riskRecText) riskRecText.textContent = 'Solicita una revisión de tu contrato con un especialista y evita suscribir acuerdos modificatorios sin asesoría legal.';
    } else {
      // Rojo: Riesgo Crítico
      if (lightRed) lightRed.classList.add('active');
      if (riskBadge) riskBadge.textContent = 'Riesgo Crítico Detectado';
      if (riskTitle) riskTitle.textContent = 'Cláusulas Nulas de Pleno Derecho';
      if (riskExplanation) riskExplanation.textContent = 'Se detectaron prácticas ilícitas que vulneran los Artículos 5 y 33 de la LFT. Cualquier renuncia anticipada o pagaré firmado carece de validez legal. Tienes derecho a solicitar la rescisión imputable al patrón con pago de indemnización completa.';
      if (riskRecText) riskRecText.textContent = 'No firmes ningún documento sin asesoría previa. Conserva estados de cuenta bancarios, credenciales y comunicaciones que acrediten tu salario real y horario.';
    }
  }

  questionRows.forEach(row => {
    const qId = row.getAttribute('data-question-id');
    const buttons = row.querySelectorAll('.btn-toggle-q');

    // Inicializar botones según userAnswers
    buttons.forEach(btn => {
      const val = btn.getAttribute('data-val');
      if (val === userAnswers[qId]) {
        btn.classList.add(val === 'yes' ? 'active-yes' : 'active-no');
      }

      btn.addEventListener('click', () => {
        buttons.forEach(b => b.classList.remove('active-yes', 'active-no'));
        btn.classList.add(val === 'yes' ? 'active-yes' : 'active-no');
        userAnswers[qId] = val;
        updateRiskSemaphore();
      });
    });
  });

  // --------------------------------------------------------------------------
  // 7. MÓDULO 4: RUTA PROCESAL (FLUJOGRAMA INTERACTIVO)
  // --------------------------------------------------------------------------
  const flowSteps = document.querySelectorAll('.flow-step');
  const flowStageTag = document.getElementById('flowStageTag');
  const flowStageTitle = document.getElementById('flowStageTitle');
  const flowStageDuration = document.getElementById('flowStageDuration');
  const flowStageDesc = document.getElementById('flowStageDesc');
  const flowAuthority = document.getElementById('flowAuthority');
  const flowDocs = document.getElementById('flowDocs');
  const flowOutcome = document.getElementById('flowOutcome');

  const stagesData = {
    1: {
      tag: 'Etapa 1 de 5 • Instancia Administrativa Obligatoria',
      title: 'Conciliación Prejudicial en Centros Laborales',
      duration: 'Término Legal: 45 días naturales',
      desc: 'Antes de acudir a los tribunales, la ley exige acudir al Centro Federal o Local de Conciliación y Registro Laboral. Es un procedimiento ágil y gratuito donde un conciliador certificado convoca al patrón y al trabajador para buscar un convenio voluntario con valor de cosa juzgada.',
      authority: 'Centro de Conciliación Laboral (Federal o Estatal)',
      docs: 'Identificación oficial, RFC/CURP, nombre y domicilio del patrón.',
      outcome: 'Convenio de pago inmediato o Constancia de No Conciliación.'
    },
    2: {
      tag: 'Etapa 2 de 5 • Requisito de Procedibilidad Judicial',
      title: 'Emisión de Constancia de No Conciliación',
      duration: 'Emisión: Mismo día de la audiencia fallida',
      desc: 'Si la empresa no asiste a la audiencia o no se llega a un acuerdo económico justo, el conciliador emite de inmediato la Constancia de No Conciliación. Este documento es indispensable y obligatorio para tener derecho a demandar ante los Tribunales del Poder Judicial.',
      authority: 'Secretaría de Acuerdos del Centro Conciliatorio',
      docs: 'Acta de audiencia y citatorio previamente notificado.',
      outcome: 'Habilitación formal para interponer la demanda judicial.'
    },
    3: {
      tag: 'Etapa 3 de 5 • Inicio del Procedimiento Ordinario',
      title: 'Presentación y Radicación de Demanda Laboral',
      duration: 'Plazo: Dentro de los 60 días tras el despido',
      desc: 'El abogado del trabajador redacta la demanda individual anexando la constancia de no conciliación y todas las pruebas documentales (recibos, contrato, mensajes). El juez laboral analiza la demanda y emplaza a la empresa para que conteste en un plazo improrrogable de 15 días.',
      authority: 'Tribunal Laboral del Poder Judicial (Federal o Local)',
      docs: 'Demanda formal por escrito, poder notarial o carta poder, pruebas documentales.',
      outcome: 'Admisión formal y emplazamiento a juicio a la parte demandada.'
    },
    4: {
      tag: 'Etapa 4 de 5 • Depuración Procesal',
      title: 'Audiencia Preliminar ante el Juez Laboral',
      duration: 'Celebración: Dentro de los 10 días tras réplicas',
      desc: 'El juez preside directamente la audiencia, depura excepciones procesales dilatorias, fija los hechos que verdaderamente están en controversia y admite o desecha las pruebas ofrecidas por ambas partes, citando para el desahogo de testimoniales.',
      authority: 'Juez Laboral con asistencia de Secretario Instructor',
      docs: 'Escritos de fijación de litis y pliego de posiciones.',
      outcome: 'Auto de admisión de pruebas y fecha inmediata de juicio.'
    },
    5: {
      tag: 'Etapa 5 de 5 • Desahogo y Resolución',
      title: 'Audiencia de Juicio y Sentencia Judicial Definitiva',
      duration: 'Desahogo y Fallo: Mismo día o máx. 5 días hábiles',
      desc: 'Se desahogan los testimonios, peritajes contables e interrogatorios en presencia ininterrumpida del Juez. Al concluir los alegatos orales, el Juez dicta sentencia definitiva condenando a la empresa a pagar la indemnización constitucional completa, salarios caídos y prestaciones.',
      authority: 'Tribunal Laboral Colegiado o Juez de Distrito Laboral',
      docs: 'Comparecencia de testigos, peritos y alegatos de cierre.',
      outcome: 'Sentencia definitiva de condena líquida ejecutable.'
    }
  };

  flowSteps.forEach(step => {
    step.addEventListener('click', () => {
      const stepNum = step.getAttribute('data-flow-step');
      flowSteps.forEach(s => s.classList.remove('active'));
      step.classList.add('active');

      const data = stagesData[stepNum];
      if (data) {
        if (flowStageTag) flowStageTag.textContent = data.tag;
        if (flowStageTitle) flowStageTitle.textContent = data.title;
        if (flowStageDuration) {
          const spanDuration = flowStageDuration.querySelector('span');
          if (spanDuration) spanDuration.textContent = data.duration;
        }
        if (flowStageDesc) flowStageDesc.innerHTML = data.desc;
        if (flowAuthority) flowAuthority.textContent = data.authority;
        if (flowDocs) flowDocs.textContent = data.docs;
        if (flowOutcome) flowOutcome.textContent = data.outcome;
      }
    });
  });

  // --------------------------------------------------------------------------
  // 8. MÓDULO 5: GENERADOR DE DOCUMENTOS (PLANTILLAS LEGALES EN PDF)
  // --------------------------------------------------------------------------
  const docTemplateSelect = document.getElementById('docTemplateSelect');
  const docWorkerName = document.getElementById('docWorkerName');
  const docCompanyName = document.getElementById('docCompanyName');
  const docPosition = document.getElementById('docPosition');
  const docDate = document.getElementById('docDate');
  const btnDownloadDoc = document.getElementById('btnDownloadDoc');

  const previewTitle = document.getElementById('previewTitle');
  const previewDate = document.getElementById('previewDate');
  const previewCompany = document.getElementById('previewCompany');
  const previewBody = document.getElementById('previewBody');
  const previewSignatureName = document.getElementById('previewSignatureName');

  function updateDocumentPreview() {
    if (!docTemplateSelect) return;

    const template = docTemplateSelect.value;
    const worker = docWorkerName?.value.trim() || 'Lic. Carlos Mendoza Ramos';
    const company = docCompanyName?.value.trim() || 'Servicios Corporativos del Norte, S.A. de C.V.';
    const position = docPosition?.value.trim() || 'Analista de Operaciones';
    const dateStr = docDate?.value.trim() || '26 de Octubre de 2026';

    if (previewDate) previewDate.textContent = `Ciudad de México, a ${dateStr}`;
    if (previewCompany) previewCompany.innerHTML = `A quien corresponda:<br><strong>${company}</strong>`;
    if (previewSignatureName) previewSignatureName.textContent = worker;

    if (template === 'renuncia') {
      if (previewTitle) previewTitle.textContent = 'CARTA DE RENUNCIA VOLUNTARIA CON RATIFICACIÓN';
      if (previewBody) previewBody.innerHTML = `Por medio de la presente, yo, <strong>${worker}</strong>, manifiesto que por convenir así a mis intereses particulares y de manera libre y voluntaria, doy por terminada la relación laboral que me unía con esta empresa en el puesto de <strong>${position}</strong>.<br><br>Hago constar que durante el tiempo que presté mis servicios recibí puntualmente las retribuciones ordinarias y extraordinarias que legalmente me correspondían, no reservándome acción ni derecho alguno de naturaleza civil, laboral o penal que ejercitar en contra de <strong>${company}</strong>.`;
    } else if (template === 'rescision') {
      if (previewTitle) previewTitle.textContent = 'AVISO FORMAL DE RESCISIÓN DE LA RELACIÓN DE TRABAJO';
      if (previewBody) previewBody.innerHTML = `En términos de lo dispuesto por el Artículo 47 de la Ley Federal del Trabajo, por medio del presente instrumento se le notifica formalmente a <strong>${worker}</strong> que, con fecha ${dateStr}, se rescinde justificadamente el contrato individual de trabajo en el puesto de <strong>${position}</strong>.<br><br>Se hace constar detalladamente la conducta motivante de la rescisión y se pone a su disposición la liquidación de las partes proporcionales de aguinaldo y vacaciones conforme a derecho.`;
    } else if (template === 'solicitud') {
      if (previewTitle) previewTitle.textContent = 'SOLICITUD DE AUDIENCIA DE CONCILIACIÓN PREJUDICIAL INDIVIDUAL';
      if (previewBody) previewBody.innerHTML = `Al Centro de Conciliación Laboral competente:<br><br>Por medio del presente ocurso, <strong>${worker}</strong>, por mi propio derecho, solicito la fijación de día y hora para la celebración de Audiencia de Conciliación Prejudicial citando a la moral <strong>${company}</strong>, con motivo de la controversia originada por el despido injustificado ocurrido en el puesto de <strong>${position}</strong>, reclamando el pago de las indemnizaciones de ley.`;
    } else if (template === 'convenio') {
      if (previewTitle) previewTitle.textContent = 'CONVENIO PRIVADO DE FINIQUITO Y FIN DE RELACIÓN LABORAL';
      if (previewBody) previewBody.innerHTML = `En la fecha ${dateStr}, comparecen por una parte <strong>${company}</strong> y por la otra el trabajador <strong>${worker}</strong>, quienes de común acuerdo convienen dar por concluido el vínculo laboral en el puesto de <strong>${position}</strong>, pactando una suma líquida en concepto de finiquito y gratificación extraordinaria con valor vinculante y pleno finiquito legal entre las partes.`;
    }
  }

  [docTemplateSelect, docWorkerName, docCompanyName, docPosition, docDate].forEach(el => {
    if (el) el.addEventListener('input', updateDocumentPreview);
  });

  if (btnDownloadDoc) {
    btnDownloadDoc.addEventListener('click', () => {
      showToast('📄 Generando archivo PDF estructurado de la plantilla legal...');
      setTimeout(() => {
        showToast('✓ Descarga completada: archivo listo para firma y presentación.');
      }, 1500);
    });
  }

  // --------------------------------------------------------------------------
  // 9. PANTALLA 4: ACORDEÓN DE NORMATIVA LEGAL
  // --------------------------------------------------------------------------
  const accordionItems = document.querySelectorAll('.accordion-item');

  accordionItems.forEach(item => {
    const trigger = item.querySelector('.accordion-trigger');
    if (trigger) {
      trigger.addEventListener('click', () => {
        const isOpen = item.classList.contains('is-open');
        if (isOpen) {
          item.classList.remove('is-open');
          trigger.setAttribute('aria-expanded', 'false');
        } else {
          item.classList.add('is-open');
          trigger.setAttribute('aria-expanded', 'true');
        }
      });
    }
  });

  // --------------------------------------------------------------------------
  // 10. PANTALLA 5: SIMULADOR DE CÁLCULO DE LIQUIDACIÓN
  // --------------------------------------------------------------------------
  const liquidationForm = document.getElementById('liquidationForm');
  const monthlySalaryInput = document.getElementById('monthlySalary');
  const yearsWorkedInput = document.getElementById('yearsWorked');
  const pendingVacationsInput = document.getElementById('pendingVacations');
  const exitReasonRadios = document.querySelectorAll('input[name="exitReason"]');
  const radioCards = document.querySelectorAll('.radio-card');
  const presetButtons = document.querySelectorAll('.preset-btn');
  const btnReset = document.getElementById('btnReset');
  const btnExportSummary = document.getElementById('btnExportSummary');
  const btnOpenScheduleModal = document.getElementById('btnOpenScheduleModal');

  const resultsContainer = document.getElementById('resultsContainer');
  const resultsTypeBadge = document.getElementById('resultsTypeBadge');
  const resultsTimestamp = document.getElementById('resultsTimestamp');
  const displayTotal = document.getElementById('displayTotal');
  const rowIndemnizacion = document.getElementById('rowIndemnizacion');
  const baseIndemnizacion = document.getElementById('baseIndemnizacion');
  const valIndemnizacion = document.getElementById('valIndemnizacion');
  const rowVeinteDias = document.getElementById('rowVeinteDias');
  const baseVeinteDias = document.getElementById('baseVeinteDias');
  const valVeinteDias = document.getElementById('valVeinteDias');
  const rowPrimaAntiguedad = document.getElementById('rowPrimaAntiguedad');
  const basePrimaAntiguedad = document.getElementById('basePrimaAntiguedad');
  const valPrimaAntiguedad = document.getElementById('valPrimaAntiguedad');
  const baseAguinaldo = document.getElementById('baseAguinaldo');
  const valAguinaldo = document.getElementById('valAguinaldo');
  const baseVacaciones = document.getElementById('baseVacaciones');
  const valVacaciones = document.getElementById('valVacaciones');

  // Toggle de la tabla de desglose detallado en el simulador
  const btnToggleBreakdown = document.getElementById('btnToggleBreakdown');
  const breakdownWrapper = document.getElementById('breakdownWrapper');
  const breakdownBtnText = document.getElementById('breakdownBtnText');

  if (btnToggleBreakdown && breakdownWrapper) {
    btnToggleBreakdown.addEventListener('click', () => {
      const isCollapsed = breakdownWrapper.classList.contains('collapsed');
      if (isCollapsed) {
        breakdownWrapper.classList.remove('collapsed');
        if (breakdownBtnText) breakdownBtnText.textContent = 'Ocultar Desglose Detallado';
      } else {
        breakdownWrapper.classList.add('collapsed');
        if (breakdownBtnText) breakdownBtnText.textContent = 'Ver Desglose Detallado';
      }
    });
  }

  const feedbackModal = document.getElementById('feedbackModal');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const modalAcceptBtn = document.getElementById('modalAcceptBtn');
  const modalSummaryReason = document.getElementById('modalSummaryReason');
  const modalSummaryYears = document.getElementById('modalSummaryYears');
  const modalSummaryAmount = document.getElementById('modalSummaryAmount');

  const toastNotification = document.getElementById('toastNotification');
  const toastText = document.getElementById('toastText');
  let toastTimeout = null;

  exitReasonRadios.forEach(radio => {
    radio.addEventListener('change', () => {
      radioCards.forEach(card => card.classList.remove('selected'));
      const activeCard = radio.closest('.radio-card');
      if (activeCard) activeCard.classList.add('selected');
      executeCalculation(false);
    });
  });

  presetButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const preset = btn.getAttribute('data-preset');

      if (preset === 'despido-3') {
        if (monthlySalaryInput) monthlySalaryInput.value = 18000;
        if (yearsWorkedInput) yearsWorkedInput.value = 3;
        if (pendingVacationsInput) pendingVacationsInput.value = 6;
        setExitReason('despido');
        showToast('Cargado: Despido Injustificado (3 años - $18,000/mes)');
      } else if (preset === 'renuncia-5') {
        if (monthlySalaryInput) monthlySalaryInput.value = 24000;
        if (yearsWorkedInput) yearsWorkedInput.value = 5;
        if (pendingVacationsInput) pendingVacationsInput.value = 10;
        setExitReason('renuncia');
        showToast('Cargado: Renuncia Voluntaria (5 años - $24,000/mes)');
      } else if (preset === 'despido-1') {
        if (monthlySalaryInput) monthlySalaryInput.value = 12000;
        if (yearsWorkedInput) yearsWorkedInput.value = 1;
        if (pendingVacationsInput) pendingVacationsInput.value = 4;
        setExitReason('despido');
        showToast('Cargado: Despido Injustificado (1 año - $12,000/mes)');
      }

      executeCalculation(true);
    });
  });

  function setExitReason(reason) {
    exitReasonRadios.forEach(radio => {
      if (radio.value === reason) {
        radio.checked = true;
        radioCards.forEach(card => card.classList.remove('selected'));
        const activeCard = radio.closest('.radio-card');
        if (activeCard) activeCard.classList.add('selected');
      }
    });
  }

  function executeCalculation(showModalTrigger = false) {
    if (!monthlySalaryInput) return;

    let monthlySalary = parseFloat(monthlySalaryInput.value);
    let yearsWorked = parseFloat(yearsWorkedInput ? yearsWorkedInput.value : 1);
    let pendingVacations = parseFloat(pendingVacationsInput ? pendingVacationsInput.value : 0);

    if (isNaN(monthlySalary) || monthlySalary <= 0) {
      monthlySalary = 18000;
      monthlySalaryInput.value = 18000;
    }
    if (isNaN(yearsWorked) || yearsWorked <= 0) {
      yearsWorked = 1;
      if (yearsWorkedInput) yearsWorkedInput.value = 1;
    }
    if (isNaN(pendingVacations) || pendingVacations < 0) {
      pendingVacations = 0;
      if (pendingVacationsInput) pendingVacationsInput.value = 0;
    }

    let selectedReason = 'despido';
    exitReasonRadios.forEach(radio => {
      if (radio.checked) selectedReason = radio.value;
    });

    const dailySalary = monthlySalary / 30;
    const salarioMinimoReferencia = 248.93;
    const topePrimaAntiguedad = salarioMinimoReferencia * 2;
    const salarioBasePrima = Math.min(dailySalary, topePrimaAntiguedad);

    let indemnizacion90Dias = 0;
    let veinteDiasPorAno = 0;
    let primaAntiguedad = 0;
    let aguinaldoProporcional = dailySalary * 15 * 0.5;
    let vacacionesYPrima = (pendingVacations * dailySalary) * 1.25;
    let granTotal = 0;

    if (selectedReason === 'despido') {
      indemnizacion90Dias = dailySalary * 90;
      veinteDiasPorAno = dailySalary * 20 * yearsWorked;
      primaAntiguedad = salarioBasePrima * 12 * yearsWorked;

      granTotal = indemnizacion90Dias + veinteDiasPorAno + primaAntiguedad + aguinaldoProporcional + vacacionesYPrima;

      if (rowIndemnizacion) rowIndemnizacion.classList.remove('row-inactive');
      if (rowVeinteDias) rowVeinteDias.classList.remove('row-inactive');
      if (rowPrimaAntiguedad) rowPrimaAntiguedad.classList.remove('row-inactive');

      if (resultsTypeBadge) {
        resultsTypeBadge.textContent = 'Despido Injustificado (Indemnización Legal)';
        resultsTypeBadge.style.backgroundColor = 'var(--primary-color)';
      }

      if (baseIndemnizacion) baseIndemnizacion.textContent = `90 días × ${currencyFormatter.format(dailySalary)}`;
      if (valIndemnizacion) valIndemnizacion.textContent = currencyFormatter.format(indemnizacion90Dias);

      if (baseVeinteDias) baseVeinteDias.textContent = `${(20 * yearsWorked).toFixed(1)} días (${yearsWorked} años × 20)`;
      if (valVeinteDias) valVeinteDias.textContent = currencyFormatter.format(veinteDiasPorAno);

      if (basePrimaAntiguedad) basePrimaAntiguedad.textContent = `${(12 * yearsWorked).toFixed(1)} días con tope legal`;
      if (valPrimaAntiguedad) valPrimaAntiguedad.textContent = currencyFormatter.format(primaAntiguedad);
    } else {
      indemnizacion90Dias = 0;
      veinteDiasPorAno = 0;

      if (yearsWorked >= 15) {
        primaAntiguedad = salarioBasePrima * 12 * yearsWorked;
        if (rowPrimaAntiguedad) rowPrimaAntiguedad.classList.remove('row-inactive');
        if (basePrimaAntiguedad) basePrimaAntiguedad.textContent = `${(12 * yearsWorked).toFixed(1)} días (Antigüedad > 15 años)`;
        if (valPrimaAntiguedad) valPrimaAntiguedad.textContent = currencyFormatter.format(primaAntiguedad);
      } else {
        primaAntiguedad = 0;
        if (rowPrimaAntiguedad) rowPrimaAntiguedad.classList.add('row-inactive');
        if (basePrimaAntiguedad) basePrimaAntiguedad.textContent = 'No aplica (< 15 años en renuncia)';
        if (valPrimaAntiguedad) valPrimaAntiguedad.textContent = '$0.00';
      }

      granTotal = aguinaldoProporcional + vacacionesYPrima + primaAntiguedad;

      if (rowIndemnizacion) rowIndemnizacion.classList.add('row-inactive');
      if (rowVeinteDias) rowVeinteDias.classList.add('row-inactive');

      if (resultsTypeBadge) {
        resultsTypeBadge.textContent = 'Renuncia Voluntaria (Finiquito Ordinario)';
        resultsTypeBadge.style.backgroundColor = 'var(--surface-3)';
      }

      if (baseIndemnizacion) baseIndemnizacion.textContent = 'No aplica en renuncia voluntaria';
      if (valIndemnizacion) valIndemnizacion.textContent = '$0.00';

      if (baseVeinteDias) baseVeinteDias.textContent = 'No aplica en renuncia voluntaria';
      if (valVeinteDias) valVeinteDias.textContent = '$0.00';
    }

    if (baseAguinaldo) baseAguinaldo.textContent = 'Parte proporcional estimada (15 días base)';
    if (valAguinaldo) valAguinaldo.textContent = currencyFormatter.format(aguinaldoProporcional);

    if (baseVacaciones) baseVacaciones.textContent = `${pendingVacations} días + 25% prima legal`;
    if (valVacaciones) valVacaciones.textContent = currencyFormatter.format(vacacionesYPrima);

    if (displayTotal) {
      displayTotal.textContent = granTotal.toLocaleString('es-MX', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      });
    }

    const now = new Date();
    if (resultsTimestamp) {
      resultsTimestamp.textContent = `Calculado el ${now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
    }

    if (resultsContainer) {
      resultsContainer.style.transform = 'scale(0.99)';
      setTimeout(() => {
        resultsContainer.style.transform = 'scale(1)';
      }, 150);
    }

    if (showModalTrigger) {
      openFeedbackModal({
        reason: selectedReason === 'despido' ? 'Despido Injustificado (Indemnización Legal)' : 'Renuncia Voluntaria',
        years: `${yearsWorked} ${yearsWorked === 1 ? 'año' : 'años'}`,
        amount: currencyFormatter.format(granTotal)
      });
    }
  }

  if (liquidationForm) {
    liquidationForm.addEventListener('submit', (e) => {
      e.preventDefault();
      executeCalculation(true);
    });
  }

  if (btnReset) {
    btnReset.addEventListener('click', () => {
      if (monthlySalaryInput) monthlySalaryInput.value = 18000;
      if (yearsWorkedInput) yearsWorkedInput.value = 3;
      if (pendingVacationsInput) pendingVacationsInput.value = 6;
      setExitReason('despido');
      executeCalculation(false);
      showToast('Formulario restablecido a valores iniciales');
    });
  }

  function openFeedbackModal(data) {
    if (!feedbackModal) return;
    if (modalSummaryReason) modalSummaryReason.textContent = data.reason;
    if (modalSummaryYears) modalSummaryYears.textContent = data.years;
    if (modalSummaryAmount) modalSummaryAmount.textContent = data.amount;

    feedbackModal.classList.add('is-active');
    feedbackModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeFeedbackModal() {
    if (!feedbackModal) return;
    feedbackModal.classList.remove('is-active');
    feedbackModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (closeModalBtn) closeModalBtn.addEventListener('click', closeFeedbackModal);
  if (modalAcceptBtn) modalAcceptBtn.addEventListener('click', closeFeedbackModal);

  if (feedbackModal) {
    feedbackModal.addEventListener('click', (e) => {
      if (e.target === feedbackModal) closeFeedbackModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && feedbackModal && feedbackModal.classList.contains('is-active')) {
      closeFeedbackModal();
    }
  });

  if (btnExportSummary) {
    btnExportSummary.addEventListener('click', () => {
      showToast('📄 Generando archivo PDF del resumen de liquidación...');
      setTimeout(() => {
        showToast('✓ Descarga completada exitosamente.');
      }, 1500);
    });
  }

  if (btnOpenScheduleModal) {
    btnOpenScheduleModal.addEventListener('click', () => {
      showToast('📅 Redirigiendo a Generador de Documentos y Solicitudes...');
      setTimeout(() => {
        switchScreen('modulos');
        const docTab = document.getElementById('tabBtnDocumentos');
        if (docTab) docTab.click();
      }, 800);
    });
  }

  function showToast(message) {
    if (!toastNotification || !toastText) return;
    toastText.textContent = message;
    toastNotification.classList.add('is-visible');

    if (toastTimeout) clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      toastNotification.classList.remove('is-visible');
    }, 3500);
  }

  // --------------------------------------------------------------------------
  // 11. INICIALIZACIÓN GENERAL
  // --------------------------------------------------------------------------
  calculatePrestacionesProporcionales();
  calculateComparadorFiniquitoVsLiquidacion();
  updateRiskSemaphore();
  updateDocumentPreview();
  executeCalculation(false);

  const initialHash = window.location.hash.replace('#', '') || 'inicio';
  switchScreen(initialHash, false);

});
