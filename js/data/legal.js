/**
 * PROMPTS DE LEGAL & CUMPLIMIENTO NORMATIVO (20 Prompts)
 */
const PROMPTS_LEGAL = [
  {
    id: "leg-01",
    title: "Redactor de Acuerdos de Confidencialidad (NDA / Mutuo o Unilateral)",
    category: "legal",
    categoryLabel: "Legal & Compliance",
    icon: "scale",
    tags: ["NDA", "Confidencialidad", "Contratos", "Startups"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Redacta contratos de confidencialidad blindados que protegen secretos comerciales, código fuente y datos de clientes.",
    variables: [
      { name: "PARTES_CONTRATO", label: "Partes y Propósito de las Negociaciones", placeholder: "ej. Entre una startup de IA y un posible inversor o cliente corporativo para evaluar una alianza" },
      { name: "TIPO_NDA", label: "Tipo de NDA y Duración", placeholder: "ej. NDA Mutuo / Bilateral con vigencia de 3 años y jurisdicción en España" }
    ],
    template: `Actúa como Asesor Legal Senior especializado en Derecho Corporativo y Tecnológico.
Partes y propósito: [PARTES_CONTRATO]. Tipo: [TIPO_NDA].
Redacta el Acuerdo de Confidencialidad completo:
1. Definición de Información Confidencial (incluyendo código fuente, planes de negocio y métricas).
2. Exclusiones estándar a la confidencialidad (información pública, conocida previamente, requerimiento judicial).
3. Obligaciones de no divulgación y estándares de cuidado exigidos.
4. Cláusula de Devolución o Destrucción de la información.
5. Cláusula de Ley Aplicable, Jurisdicción y Medidas Cautelares.`
  },
  {
    id: "leg-02",
    title: "Auditor de Cumplimiento de Privacidad y RGPD / GDPR para Sitios Web",
    category: "legal",
    categoryLabel: "Legal & Compliance",
    icon: "scale",
    tags: ["RGPD", "GDPR", "Privacidad", "Cookies", "DPO"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Audita la captación de datos, política de cookies, consentimientos explícitos y ejercicio de derechos ARCO/GDPR.",
    variables: [
      { name: "FLUX_DATOS_WEB", label: "Cómo captas y usas los datos", placeholder: "ej. Tienda online con formulario de registro, Google Analytics 4, pixel de Meta y pasarela de Stripe" }
    ],
    template: `Eres un Delegado de Protección de Datos (DPO) y Especialista en RGPD/GDPR.
Flujo de datos: [FLUX_DATOS_WEB].
Realiza la auditoría de cumplimiento:
1. Checklist de Consentimiento Válido (Opt-in previo antes de disparar cookies analíticas/marketing).
2. Cláusulas obligatorias de la Política de Privacidad (Responsable del tratamiento, Base jurídica, Plazo de conservación, Transferencias internacionales).
3. Protocolo para gestionar solicitudes de usuarios (Derecho de Acceso, Rectificación, Supresión/Olvido).
4. Sanciones potenciales por incumplimiento según la AEPD/Comisión Europea.`
  },
  {
    id: "leg-03",
    title: "Redactor de Contratos de Servicios de Desarrollo de Software (Master Services Agreement - MSA)",
    category: "legal",
    categoryLabel: "Legal & Compliance",
    icon: "scale",
    tags: ["MSA", "Software", "Freelance", "Contratos", "Propiedad Intelectual"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Estructura contratos para agencias y freelancers de software con hitos de pago, traspaso de propiedad intelectual y límites de responsabilidad.",
    variables: [
      { name: "ALCANCE_DESARROLLO", label: "Servicios y Condiciones Comerciales", placeholder: "ej. Desarrollo de aplicación web móvil con pagos por hitos (25% anticipo, 25% beta, 50% entrega final)" }
    ],
    template: `Eres un Abogado Tecnológico Especializado en Contratación de Software.
Condiciones: [ALCANCE_DESARROLLO].
Redacta el contrato de servicios de desarrollo:
1. Definición de Hitos, Entregables y Procedimiento de Pruebas de Aceptación (UAT).
2. Cláusula de Transferencia de Propiedad Intelectual (Efectiva ÚNICAMENTE tras el pago del 100% de la remuneración).
3. Cláusula de Garantía contra Errores (Garantía de 30 días contra bugs críticos).
4. Limitación de Responsabilidad (Tope máximo de daños directos al monto pagado).`
  },
  {
    id: "leg-04",
    title: "Redactor de Términos y Condiciones de Uso para Plataformas SaaS",
    category: "legal",
    categoryLabel: "Legal & Compliance",
    icon: "scale",
    tags: ["Términos de Uso", "SaaS", "ToS", "EULA"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Crea los Términos de Servicio (Terms of Service) para productos digitales por suscripción, reembolsos y política de uso aceptable.",
    variables: [
      { name: "DESCRIPCION_SAAS", label: "Qué hace tu SaaS y Modelo de Cobro", placeholder: "ej. Plataforma B2B con suscripción mensual recurrente de generación de contenido mediante IA" }
    ],
    template: `Actúa como Abogado Senior de Empresas SaaS Internacionales.
Plataforma: [DESCRIPCION_SAAS].
Redacta los Términos de Servicio (ToS) oficiales:
- Elegibilidad y Creación de Cuentas.
- Términos de Suscripción, Renovaciones Automáticas y Política de Cancelación.
- Política de Uso Aceptable (Prohibición de scraping, generación de contenido ilícito, reventa no autorizada).
- Propiedad de los Datos del Cliente vs. Propiedad de la Plataforma.
- Descargo de Responsabilidad (Disclaimers "As-Is") y Cláusula de Indemnidad.`
  },
  {
    id: "leg-05",
    title: "Especialista en Registro de Marcas y Búsqueda de Anterioridades (IP)",
    category: "legal",
    categoryLabel: "Legal & Compliance",
    icon: "scale",
    tags: ["Marcas", "Propiedad Industrial", "USPTO", "OEPM", "EUIPO"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Identifica la Clasificación de Niza adecuada y diseña estrategias para superar objeciones de distintividad o riesgo de confusión.",
    variables: [
      { name: "NOMBRE_MARCA", label: "Nombre de la Marca y Productos", placeholder: "ej. 'NexusFlow' para software de automatización y servicios de consultoría IT" },
      { name: "JURISDICCION_REGISTRO", label: "Organismo o País de Registro", placeholder: "ej. Unión Europea (EUIPO) o Estados Unidos (USPTO)" }
    ],
    template: `Eres un Agente de la Propiedad Industrial y Abogado de Marcas.
Marca: [NOMBRE_MARCA]. Organismo: [JURISDICCION_REGISTRO].
Prepara la estrategia de registro:
1. Determinación de las Clases de la Clasificación de Niza (ej. Clase 9 para software descargable, Clase 42 para SaaS).
2. Evaluación de Riesgo de Denegación (Fuerza distintiva: Ficticia, Sugestiva, Descriptiva o Genérica).
3. Pautas para realizar la búsqueda de anterioridades en bases de datos oficiales.
4. Estrategia de respuesta en caso de recibir una oposición de un tercero.`
  },
  {
    id: "leg-06",
    title: "Redactor de Pactos de Socios para Startups (Founders' Agreement / Vesting)",
    category: "legal",
    categoryLabel: "Legal & Compliance",
    icon: "scale",
    tags: ["Pacto de Socios", "Vesting", "Cliff", "Startups", "Cap Table"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Estructura las reglas entre cofundadores: calendario de vesting de 4 años con cliff de 1 año, cláusulas Good/Bad Leaver y drag/tag along.",
    variables: [
      { name: "COFUNDADORES_ROLES", label: "Cofundadores, Porcentajes y Roles", placeholder: "ej. Socio A (CEO / 50%) y Socio B (CTO / 50%) fundando una startup tecnológica" }
    ],
    template: `Actúa como Asesor Legal de Capital Riesgo y Startups (Venture Capital Law).
Equipo fundador: [COFUNDADORES_ROLES].
Redacta los puntos clave del Pacto de Socios:
1. Calendario de Consolidación de Acciones (Vesting a 4 años con 1 año de Cliff).
2. Cláusulas de Salida (Good Leaver vs. Bad Leaver: consecuencias en la pérdida de acciones no devengadas).
3. Toma de Decisiones y Mayorías Reforzadas (Materias reservadas que requieren unanimidad).
4. Derecho de Acompañamiento (Tag-Along) y Derecho de Arrastre (Drag-Along) ante una venta de la empresa.`
  },
  {
    id: "leg-07",
    title: "Auditor de Licencias de Código Abierto (GPL, MIT, Apache 2.0 - Compliance)",
    category: "legal",
    categoryLabel: "Legal & Compliance",
    icon: "scale",
    tags: ["Open Source", "GPL", "MIT", "Apache", "Licencias"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Evita que el uso de librerías con licencias 'copyleft' (GPLv3, AGPL) contamine tu código propietario forzando su liberación.",
    variables: [
      { name: "LIBRERIAS_USADAS", label: "Librerías y Cómo se Usan", placeholder: "ej. Estamos usando una librería con licencia GPLv3 en nuestro backend comercial SaaS que no distribuimos como binario" }
    ],
    template: `Eres un Abogado Especialista en Licenciamiento de Software y Código Abierto.
Situación: [LIBRERIAS_USADAS].
Realiza el dictamen de compatibilidad:
1. Análisis del efecto viral (Copyleft fuerte vs. débil vs. licencias permisivas como MIT/BSD/Apache 2.0).
2. Riesgo legal para el código fuente propietario de la empresa.
3. Diferencia crítica entre distribución de binarios vs. ejecución en la nube (GPL vs. AGPL).
4. Alternativas o remediación para aislar la dependencia.`
  },
  {
    id: "leg-08",
    title: "Redactor de Contratos de Cesión de Derechos de Imagen y Voz",
    category: "legal",
    categoryLabel: "Legal & Compliance",
    icon: "scale",
    tags: ["Derechos de Imagen", "Media", "Video", "Model Release"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Autorizaciones legales completas para utilizar la imagen, rostro y voz de participantes en podcasts, videos y campañas publicitarias.",
    variables: [
      { name: "USO_DE_IMAGEN", label: "Proyecto y Canales de Difusión", placeholder: "ej. Grabación de un video documental para YouTube, redes sociales y cursos de pago de la empresa" }
    ],
    template: `Eres un Abogado de Medios y Entretenimiento.
Proyecto: [USO_DE_IMAGEN].
Redacta el Acuerdo de Cesión de Derechos de Imagen (Model Release):
1. Autorización explícita de captación y reproducción de imagen, voz y nombre.
2. Ámbito Territorial (Mundial) y Temporal (Duración indefinida / plazo específico).
3. Canales de difusión autorizados (digitales, televisivos, impresos).
4. Renuncia a contraprestaciones futuras o reclamos por edición y montaje.
5. Cumplimiento de normativas de protección de datos aplicables.`
  },
  {
    id: "leg-09",
    title: "Auditor de Cumplimiento de la Ley de Inteligencia Artificial (EU AI Act)",
    category: "legal",
    categoryLabel: "Legal & Compliance",
    icon: "scale",
    tags: ["EU AI Act", "Regulación IA", "Compliance", "Riesgo"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Clasifica tu sistema de Inteligencia Artificial en una de las 4 categorías de riesgo de la Unión Europea y detalla las obligaciones legales.",
    variables: [
      { name: "SISTEMA_IA_EMPRESA", label: "Descripción del Sistema de IA", placeholder: "ej. Sistema de filtrado automático de CVs de candidatos para puestos de empleo mediante modelos LLM" }
    ],
    template: `Actúa como Asesor Legal Senior en Regulación de Inteligencia Artificial (EU AI Act).
Sistema de IA: [SISTEMA_IA_EMPRESA].
Dictamen de cumplimiento:
1. Clasificación del Nivel de Riesgo (Riesgo Inaceptable / Alto Riesgo / Riesgo Limitado / Riesgo Mínimo).
2. Obligaciones Legales Obligatorias si es clasificado como Alto Riesgo (Evaluación de impacto, gobernanza de datos de entrenamiento, supervisión humana, registro técnico).
3. Requisitos de Transparencia (Avisar a los usuarios de que interactúan con una IA).
4. Calendario de entrada en vigor y régimen de sanciones.`
  },
  {
    id: "leg-10",
    title: "Redactor de Contratos de Trabajo y Teletrabajo Remoto Internacional",
    category: "legal",
    categoryLabel: "Legal & Compliance",
    icon: "scale",
    tags: ["Contratos Laborales", "Teletrabajo", "Remote Work", "Contractor"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Estructura acuerdos para colaboradores remotos internacionales (Independent Contractor Agreement) evitando el riesgo de falso autónomo.",
    variables: [
      { name: "RELACION_CONTRATISTA", label: "Puesto y Condiciones del Contratista", placeholder: "ej. Desarrollador Full-Stack en Argentina prestando servicios a tiempo completo para una empresa en Estados Unidos o España" }
    ],
    template: `Eres un Consultor de Derecho Laboral Internacional y Contratación Remota.
Puesto: [RELACION_CONTRATISTA].
Redacta el Acuerdo de Prestación de Servicios Independiente (Independent Contractor Agreement):
1. Naturaleza de la Relación (Ausencia de subordinación laboral directa, autonomía horaria y de medios).
2. Cláusula de Compensación en Moneda Extranjera e Impuestos a cargo del contratista.
3. Propiedad Intelectual 'Work Made for Hire' (Cesión irrevocable de creaciones).
4. Cláusula de No Competencia y No Captación de Clientes tras la terminación.`
  },
  {
    id: "leg-11",
    title: "Checklist de Due Diligence Legal para Rondas de Inversión (Seed / Serie A)",
    category: "legal",
    categoryLabel: "Legal & Compliance",
    icon: "scale",
    tags: ["Due Diligence", "Inversión", "Venture Capital", "Auditoría"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Lista de verificación exhaustiva de todos los documentos societarios, laborales, de propiedad intelectual y contratos que exigirá el fondo inversor.",
    variables: [
      { name: "ESTADO_STARTUP", label: "Etapa de la Empresa", placeholder: "ej. Startup SaaS con 15 empleados levantando una ronda Serie A de $3M" }
    ],
    template: `Actúa como Abogado de M&A y Auditoría Legal (Legal Due Diligence).
Startup: [ESTADO_STARTUP].
Provee el Checklist para el Data Room Legal organizado en 5 carpetas maestras:
1. Societario (Estatutos, actas de juntas, libro de socios, pactos de socios anteriores, notas convertibles/SAFE emitidos).
2. Propiedad Intelectual y Tecnología (Marcas registradas, cesiones de IP de todos los empleados y contractors).
3. Laboral (Contratos de trabajo, organigrama, planes de stock options / phantom shares).
4. Comercial (Contratos con los 10 clientes principales y proveedores clave).
5. Litigios y Cumplimiento Normativo (Ausencia de demandas pendientes, RGPD).`
  },
  {
    id: "leg-12",
    title: "Redactor de Contratos de Alquiler de Inmuebles Comerciales o de Oficinas",
    category: "legal",
    categoryLabel: "Legal & Compliance",
    icon: "scale",
    tags: ["Inmobiliario", "Alquiler", "Oficinas", "Contratos"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Cláusulas clave para alquileres de locales comerciales u oficinas: fianza, avales, obras de adecuación, subarriendo y actualización de rentas.",
    variables: [
      { name: "DATOS_INMUEBLE", label: "Inmueble y Renta", placeholder: "ej. Oficina de 200m2 en centro urbano, renta de $3,500/mes con 3 meses de carencia por obras" }
    ],
    template: `Eres un Abogado Especialista en Derecho Inmobiliario Comercial.
Inmueble y condiciones: [DATOS_INMUEBLE].
Redacta el contrato de arrendamiento comercial:
1. Duración del Contrato y Periodo de Obligado Cumplimiento (con preaviso e indemnización por salida anticipada).
2. Actualización de Renta anual según índice oficial (IPC).
3. Obras de Acondicionamiento y periodo de carencia.
4. Fianza legal y Garantías adicionales (Depósito o Aval bancario).
5. Régimen de Gastos e Impuestos (IBI, comunidad, suministros).`
  },
  {
    id: "leg-13",
    title: "Especialista en Protocolos de Prevención de Blanqueo de Capitales (AML / KYC)",
    category: "legal",
    categoryLabel: "Legal & Compliance",
    icon: "scale",
    tags: ["AML", "KYC", "Compliance", "Fintech", "Banca"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Diseña procedimientos de diligencia debida de clientes (KYC), monitoreo de transacciones sospechosas y verificación de PEPs.",
    variables: [
      { name: "ACTIVIDAD_FINTECH", label: "Tipo de Entidad y Operaciones", placeholder: "ej. Plataforma de intercambio de criptomonedas y envío de remesas internacionales" }
    ],
    template: `Actúa como Oficial de Cumplimiento (Compliance Officer) y Experto en Prevención de Blanqueo de Capitales (AML/CFT).
Entidad: [ACTIVIDAD_FINTECH].
Diseña el Manual de Procedimientos AML/KYC:
1. Proceso de Onboarding y Verificación de Identidad (Documento oficial, prueba de vida biométrica y prueba de domicilio).
2. Búsqueda en Listas de Sanciones Internacionales (OFAC, UE, ONU) y Personas Políticamente Expuestas (PEP).
3. Matriz de Riesgo de Clientes (Riesgo Bajo, Medio y Alto con diligencia reforzada).
4. Señales de Alerta (Red Flags) para reporte de transacciones sospechosas (STR) ante la autoridad financiera.`
  },
  {
    id: "leg-14",
    title: "Redactor de Acuerdos de Liquidación y Finiquitos Laborales (Mutuo Acuerdo)",
    category: "legal",
    categoryLabel: "Legal & Compliance",
    icon: "scale",
    tags: ["Laboral", "Finiquito", "Despido", "Acuerdo"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Acuerdos de terminación de relación laboral que liquidan haberes pendientes y contienen cláusulas de no demanda mutua.",
    variables: [
      { name: "DETALLES_DESPIDO", label: "Condiciones de la Desvinculación", placeholder: "ej. Salida de mutuo acuerdo de un director de ventas con indemnización pactada de 6 meses de salario" }
    ],
    template: `Eres un Abogado Laboralista Senior.
Condiciones: [DETALLES_DESPIDO].
Redacta el Acuerdo de Terminación y Finiquito:
1. Reconocimiento de la finalización de la relación laboral y fecha efectiva.
2. Desglose detallado de los conceptos económicos liquidados (salario devengado, vacaciones no gozadas, indemnización pactada).
3. Cláusula de Finiquito y Saldo (Declaración de no tener nada más que reclamarse por ningún concepto).
4. Obligación de Confidencialidad y No Difamación (Non-Disparagement).`
  },
  {
    id: "leg-15",
    title: "Auditor de Cumplimiento de Comercio Electrónico y Derechos del Consumidor",
    category: "legal",
    categoryLabel: "Legal & Compliance",
    icon: "scale",
    tags: ["E-commerce", "Consumidores", "Derecho de Desistimiento", "Garantías"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Revisa el proceso de compra online para cumplir con el derecho de desistimiento de 14 días, garantías legales e información de precios.",
    variables: [
      { name: "TIENDA_ECOMMERCE", label: "Tipo de Tienda y Productos", placeholder: "ej. Venta online de cursos digitales descargables y productos de hardware físico" }
    ],
    template: `Actúa como Asesor Legal en Derecho de Consumo y Comercio Electrónico.
Tienda: [TIENDA_ECOMMERCE].
Realiza la auditoría de cumplimiento:
1. Derecho de Desistimiento (Excepciones legales para contenido digital consumido de inmediato vs. plazo de 14 días para bienes físicos).
2. Transparencia de Precios (Desglose de IVA, gastos de envío antes de iniciar el pago).
3. Casilla obligatoria de aceptación de términos antes de comprar (sin casillas premarcadas).
4. Información sobre la plataforma de resolución de litigios en línea.`
  },
  {
    id: "leg-16",
    title: "Redactor de Contratos de Préstamo entre Particulares o Empresas (Pagaré)",
    category: "legal",
    categoryLabel: "Legal & Compliance",
    icon: "scale",
    tags: ["Préstamo", "Finanzas", "Pagaré", "Intereses"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Contratos de préstamo mutuo de dinero con o sin intereses, calendario de amortización, garantías y vencimiento anticipado.",
    variables: [
      { name: "CONDICIONES_PRESTAMO", label: "Monto, Interés y Plazo", placeholder: "ej. Préstamo de $25,000 USD al 5% anual a pagar en 24 cuotas mensuales" }
    ],
    template: `Eres un Abogado Especialista en Derecho Civil y Mercantil.
Condiciones: [CONDICIONES_PRESTAMO].
Redacta el Contrato de Préstamo con Pagaré adjunto:
1. Identificación del Prestamista y Prestatario y entrega formal del capital.
2. Cuadro de Amortización y Tipo de Interés remuneratorio.
3. Cláusula de Intereses de Demora por retraso en el pago.
4. Cláusula de Vencimiento Anticipado (ante impago de 2 o más cuotas consecutivas).
5. Pagaré cambiarlo firmado como garantía ejecutiva.`
  },
  {
    id: "leg-17",
    title: "Especialista en Planes de Incentivos de Empleados (Stock Options / Phantom Shares)",
    category: "legal",
    categoryLabel: "Legal & Compliance",
    icon: "scale",
    tags: ["Phantom Shares", "ESOP", "Stock Options", "Incentivos"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Diseña planes de acciones fantasma (Phantom Shares) para retener talento clave con derechos económicos sin ceder derechos políticos.",
    variables: [
      { name: "PROGRAMA_STOCK_OPTIONS", label: "Perfil del Plan y Beneficiarios", placeholder: "ej. Plan de Phantom Shares del 5% del capital total distribuido entre 5 empleados clave de una startup" }
    ],
    template: `Actúa como Asesor Legal y Fiscal en Planes de Compensación Ejecutiva.
Plan: [PROGRAMA_STOCK_OPTIONS].
Estructura el Reglamento del Plan de Phantom Shares:
1. Definición del Valor de las Participaciones Virtuales (Fórmula de valoración objetiva).
2. Eventos de Liquidación (Liquidity Event: Venta de la empresa / Salida a bolsa / Distribución extraordinaria de dividendos).
3. Reglas de Salida del Empleado (Pérdida de derechos en caso de baja voluntaria o despido procedente).
4. Tratamiento fiscal y retenciones aplicables.`
  },
  {
    id: "leg-18",
    title: "Auditor de Accesibilidad Legal y Cumplimiento de la Ley Europea de Accesibilidad (EAA)",
    category: "legal",
    categoryLabel: "Legal & Compliance",
    icon: "scale",
    tags: ["EAA", "Accesibilidad", "Legal", "WCAG"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Evalúa los riesgos de sanciones para empresas que comercializan productos y servicios digitales en la UE bajo la Directiva (UE) 2019/882.",
    variables: [
      { name: "SERVICIO_DIGITAL", label: "Servicio o Producto Digital", placeholder: "ej. Plataforma de banca online y terminales de autoservicio" }
    ],
    template: `Eres un Consultor Legal y Tecnológico en la European Accessibility Act (EAA).
Servicio: [SERVICIO_DIGITAL].
Dictamen de obligaciones:
1. Ámbito de Aplicación y Exenciones (¿Aplica a tu tamaño de empresa?).
2. Requisitos de Accesibilidad Obligatorios en la Interfaz Web y Móvil (Estándar EN 301 549 / WCAG 2.1 AA).
3. Declaración de Conformidad de Accesibilidad requerida.
4. Régimen de supervisión de mercado y multas por no conformidad.`
  },
  {
    id: "leg-19",
    title: "Redactor de Contratos de Franquicia y Licencia de Marca Comercial",
    category: "legal",
    categoryLabel: "Legal & Compliance",
    icon: "scale",
    tags: ["Franquicia", "Licencia", "Know-How", "Contratos"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Contratos para expandir un modelo de negocio: canon de entrada, royalties mensuales, transmisión del manual operativo y exclusividad territorial.",
    variables: [
      { name: "CONCEPTO_FRANQUICIA", label: "Modelo de Negocio", placeholder: "ej. Franquicia de cafeterías de especialidad con canon de entrada de $15,000 y 5% de royalties sobre ventas" }
    ],
    template: `Actúa como Abogado Senior en Derecho de Franquicias y Distribución Comercial.
Modelo: [CONCEPTO_FRANQUICIA].
Redacta los capítulos esenciales del Contrato de Franquicia:
1. Concesión de la Franquicia y Territorio Exclusivo.
2. Transmisión del Know-How y Manuales Operativos Confidenciales.
3. Obligaciones Económicas (Canon inicial, Royalties de explotación, Fondo de Publicidad corporativo).
4. Controles de Calidad y Aprovisionamiento exclusivo de suministros.
5. No competencia post-contractual y resolución del contrato.`
  },
  {
    id: "leg-20",
    title: "Guía de Respuestas Legales ante Reclamaciones por Infracción de Copyright (DMCA)",
    category: "legal",
    categoryLabel: "Legal & Compliance",
    icon: "scale",
    tags: ["DMCA", "Copyright", "Contranotificación", "Propiedad Intelectual"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Redacta avisos de retirada DMCA (Takedown Notice) o contranotificaciones fundamentadas ante reclamos ilegítimos de derechos de autor.",
    variables: [
      { name: "SITUACION_INFRACCION", label: "Contenido y Situación", placeholder: "ej. Un tercero ha copiado exactamente los artículos y fotos de mi blog en su sitio web sin autorización" }
    ],
    template: `Eres un Abogado Especialista en Litigios de Propiedad Intelectual en Internet (DMCA).
Situación: [SITUACION_INFRACCION].
Entrega:
1. Aviso Formal de Infracción DMCA (Takedown Notice) listo para enviar al proveedor de hosting y al infractor con todos los requisitos legales obligatorios.
2. Formato de Contranotificación (Counter-Notice) en caso de que seas tú quien recibió un reclamo injusto bajo doctrina de Uso Justo (Fair Use).
3. Pautas para solicitar la desindexación de los enlaces infractores en el buscador de Google.`
  }
];
