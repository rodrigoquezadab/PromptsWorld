/**
 * PROMPTS DE MARKETING & NEGOCIOS (20 Prompts)
 */
const PROMPTS_MARKETING = [
  {
    id: "mkt-01",
    title: "Generador de Buyer Persona y Mapa de Empatía Profundo",
    category: "marketing",
    categoryLabel: "Marketing",
    icon: "target",
    tags: ["Buyer Persona", "Estrategia", "Investigación", "Ventas"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Construye perfiles psicográficos detallados, dolores profundos, disparadores de compra y objeciones.",
    variables: [
      { name: "PRODUCTO_SERVICIO", label: "Tu Producto o Servicio", placeholder: "ej. CRM automatizado para agencias inmobiliarias" },
      { name: "MERCADO", label: "Mercado o Nicho", placeholder: "ej. Inmobiliarias pequeñas y medianas en LATAM" }
    ],
    template: `Eres un Director de Investigación de Mercado y Psicología del Consumidor.
Desarrolla el Buyer Persona ideal para: [PRODUCTO_SERVICIO] en [MERCADO].
Incluye:
1. Ficha Demográfica y de Rol.
2. Dolores Reales (Pain Points que le quitan el sueño).
3. Metas de Estatus y Deseos de Reconocimiento.
4. Las 3 Objeciones de compra principales y cómo neutralizarlas.
5. Disparadores de Compra (Triggers que provocan la búsqueda hoy).`
  },
  {
    id: "mkt-02",
    title: "Secuencia de Email Cold Outreach de Alta Conversión",
    category: "marketing",
    categoryLabel: "Marketing",
    icon: "mail",
    tags: ["Cold Email", "Ventas B2B", "Outreach", "Conversión"],
    models: ["ChatGPT-4o", "Claude 3.5 Sonnet"],
    description: "Crea secuencias de 3 correos B2B personalizados, sin sonar a spam, centrados en valor y baja fricción.",
    variables: [
      { name: "PROPUESTA_VALOR", label: "Propuesta de Valor", placeholder: "ej. Reducimos el tiempo de onboarding de 14 días a 48 horas" },
      { name: "PROSPECTO", label: "Cargo del Destinatario", placeholder: "ej. VP de Operaciones o Head of Customer Success" }
    ],
    template: `Eres un Consultor Senior de Ventas B2B.
Crea una secuencia de 3 correos para contactar a un [PROSPECTO].
Propuesta: [PROPUESTA_VALOR].
Estructura:
- Email 1: Menos de 90 palabras, asunto de 3 palabras, dolor concreto, caso de éxito en 1 línea y CTA suave.
- Email 2 (3 días después): Caso de estudio corto con métricas.
- Email 3 (5 días después): Break-up email elegante sin presiones.`
  },
  {
    id: "mkt-03",
    title: "Generador de Propuesta de Valor (Framework Steve Blank)",
    category: "marketing",
    categoryLabel: "Marketing",
    icon: "zap",
    tags: ["Startup", "Pitch", "Copywriting", "Landing Page"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Crea mensajes de propuesta de valor únicos, memorables y directos para tu web o pitch deck.",
    variables: [
      { name: "CLIENTE_OBJETIVO", label: "Cliente Objetivo", placeholder: "ej. Diseñadores freelance" },
      { name: "PROBLEMA", label: "Problema Central", placeholder: "ej. Pierden horas cobrando facturas atrasadas" },
      { name: "SOLUCION_DIFERENCIAL", label: "Solución y Diferenciador", placeholder: "ej. Contratos automatizados con cobro en escrow" }
    ],
    template: `Actúa como un mentor de startups de Y Combinator.
Para: Cliente: [CLIENTE_OBJETIVO], Problema: [PROBLEMA], Solución: [SOLUCION_DIFERENCIAL].
Genera:
1. La Fórmula Steve Blank ("Ayudamos a X a lograr Y mediante Z").
2. 5 Titulares para Hero Section de Landing Page.
3. El 'Elevator Pitch' de 30 segundos.
4. Matriz de Beneficios Emocionales vs. Características Técnicas.`
  },
  {
    id: "mkt-04",
    title: "Diseño de Embudo de Ventas Completo (TOFU, MOFU, BOFU)",
    category: "marketing",
    categoryLabel: "Marketing",
    icon: "target",
    tags: ["Funnel", "Embudo", "Lead Magnet", "Automatización"],
    models: ["ChatGPT-4o", "Claude 3.5 Sonnet"],
    description: "Estructura la estrategia de captación, nutrición y cierre con lead magnets, webinars y ofertas tripwire.",
    variables: [
      { name: "OFERTA_PRINCIPAL", label: "Producto High-Ticket o Servicio", placeholder: "ej. Consultoría de transformación digital para empresas de logística" },
      { name: "TICKET_PROMEDIO", label: "Precio Promedio", placeholder: "ej. $3,000 USD" }
    ],
    template: `Eres un Growth Architect de clase mundial.
Oferta: [OFERTA_PRINCIPAL] a precio [TICKET_PROMEDIO].
Diseña el embudo de ventas:
1. TOFU (Atracción): Lead Magnet irresistible y canales de tráfico orgánico/pagado.
2. MOFU (Nutrición): Secuencia de valor de 5 correos con testimonios y casos.
3. BOFU (Conversión): Llamada de venta o página de checkout con garantía y bonos.
4. Métricas esperadas de conversión en cada etapa.`
  },
  {
    id: "mkt-05",
    title: "Estrategia de Lanzamiento de Producto (Product Hunt & Redes)",
    category: "marketing",
    categoryLabel: "Marketing",
    icon: "zap",
    tags: ["Product Hunt", "Lanzamiento", "SaaS", "Growth"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Crea un plan de acción de 14 días para el lanzamiento de un SaaS o producto digital.",
    variables: [
      { name: "NOMBRE_PRODUCTO", label: "Nombre y Descripción Corta", placeholder: "ej. FastDocs - Extractor de datos de PDF con IA" }
    ],
    template: `Actúa como un Launch Manager experto en Product Hunt y lanzamientos virales.
Producto: [NOMBRE_PRODUCTO].
Elabora:
1. Cronograma de 14 días (Pre-launch, Día D, Post-launch).
2. Kit de Assets para Product Hunt (Tagline de 60 caracteres, Primer Comentario del Maker, Galería de imágenes).
3. Plantillas de mensajes para pedir feedback a la comunidad sin hacer spam.`
  },
  {
    id: "mkt-06",
    title: "Auditoría de Competencia y Posicionamiento en el Mercado",
    category: "marketing",
    categoryLabel: "Marketing",
    icon: "target",
    tags: ["Benchmarking", "Competencia", "Estrategia", "Mercado"],
    models: ["ChatGPT-4o", "Claude 3.5 Sonnet"],
    description: "Analiza competidores directos e indirectos para encontrar huecos de mercado desatendidos (Blue Oceans).",
    variables: [
      { name: "MI_PRODUCTO", label: "Mi Producto o Servicio", placeholder: "ej. Plataforma de cursos interactivos de programación en español" },
      { name: "COMPETIDORES_DIRECTOS", label: "Principales Competidores", placeholder: "ej. Platzi, Udemy, Codecademy" }
    ],
    template: `Eres un Consultor Senior de Estrategia Competitiva.
Mi producto: [MI_PRODUCTO]. Competidores: [COMPETIDORES_DIRECTOS].
Realiza una auditoría competitiva:
1. Matriz Comparativa (Precios, Puntos Fuertes, Principales Quejas de sus Usuarios).
2. Los 3 vacíos del mercado (White Spaces) donde ningún competidor destaca.
3. Declaración de Posicionamiento Único recomendada para desmarcarnos.`
  },
  {
    id: "mkt-07",
    title: "Estrategia de Creación de Lead Magnets Irresistibles",
    category: "marketing",
    categoryLabel: "Marketing",
    icon: "feather",
    tags: ["Lead Magnet", "Captación", "Ebooks", "Plantillas"],
    models: ["ChatGPT-4o", "Claude 3.5 Sonnet"],
    description: "Diseña 5 conceptos de imanes de prospectos de consumo rápido y alto valor percibido.",
    variables: [
      { name: "NICHO_CLIENTES", label: "Nicho de Clientes", placeholder: "ej. Directores de Recursos Humanos en empresas tecnológicas" }
    ],
    template: `Eres un Estratega de Inbound Marketing.
Nicho: [NICHO_CLIENTES].
Genera 5 ideas de Lead Magnets:
- 1 Plantilla o Hoja de Cálculo lista para usar.
- 1 Checklist de auditoría rápida.
- 1 Mini-curso por email de 5 días.
- 1 Reporte o Benchmark de la industria.
- 1 Calculadora o herramienta interactiva.
Para cada uno: Título irresistible, formato y gancho de descarga.`
  },
  {
    id: "mkt-08",
    title: "Generador de Ofertas Irresistibles (Framework Alex Hormozi)",
    category: "marketing",
    categoryLabel: "Marketing",
    icon: "zap",
    tags: ["Alex Hormozi", "Grand Slam Offer", "Precios", "Ventas"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Aplica la ecuación del valor de $100M Offers: Aumenta el resultado deseado y reduce el tiempo y esfuerzo percibidos.",
    variables: [
      { name: "SERVICIO_BASE", label: "Servicio o Producto Actual", placeholder: "ej. Clases de inglés online para ejecutivos" },
      { name: "PRECIO_ACTUAL", label: "Precio Actual", placeholder: "ej. $50 por mes" }
    ],
    template: `Actúa como Alex Hormozi analizando una oferta.
Servicio base: [SERVICIO_BASE] a [PRECIO_ACTUAL].
Transforma esto en una 'Grand Slam Offer':
1. Ecuación del Valor: Cómo multiplicar x10 el Resultado Soñado y Certeza de Éxito, y reducir a 0 la Demora y Esfuerzo.
2. Lista de Problemas del cliente convertidos en Soluciones.
3. Bonos de Alto Valor Percibido y Bajo Costo de Entrega.
4. Garantía Audaz (Garantía condicional o anti-riesgo).
5. Justificación de un nuevo precio 5x a 10x superior.`
  },
  {
    id: "mkt-09",
    title: "Plan de Marketing de Contenidos Orgánico de 90 Días",
    category: "marketing",
    categoryLabel: "Marketing",
    icon: "feather",
    tags: ["Content Strategy", "Calendario", "Inbound", "SEO"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Crea una estrategia de contenidos multicanal con pilares temáticos, formatos y frecuencias de publicación.",
    variables: [
      { name: "CANALES_FOCO", label: "Canales Principales", placeholder: "ej. Blog SEO, LinkedIn y YouTube" },
      { name: "OBJETIVO_MARKETING", label: "Meta a 90 Días", placeholder: "ej. Conseguir 5,000 suscriptores a la newsletter y 100 demos agendadas" }
    ],
    template: `Eres un Director de Marketing de Contenidos.
Canales: [CANALES_FOCO]. Meta: [OBJETIVO_MARKETING].
Diseña el plan para 90 días:
1. 4 Pilares Temáticos de Autoridad.
2. Matriz de Contenido Semanal (Frecuencia, formatos y reutilización de piezas).
3. Calendario por fases: Mes 1 (Atracción de Audiencia), Mes 2 (Construcción de Confianza), Mes 3 (Conversión).
4. KPIs semanales de seguimiento.`
  },
  {
    id: "mkt-10",
    title: "Guion de Llamada de Descubrimiento y Cierre de Ventas B2B",
    category: "marketing",
    categoryLabel: "Marketing",
    icon: "target",
    tags: ["Ventas B2B", "Discovery Call", "Spin Selling", "Cierre"],
    models: ["ChatGPT-4o", "Claude 3.5 Sonnet"],
    description: "Estructura llamadas de ventas consultivas usando la metodología SPIN (Situación, Problema, Implicación, Necesidad).",
    variables: [
      { name: "TIPO_CLIENTE", label: "Perfil del Prospecto", placeholder: "ej. Director Financiero evaluando un software ERP" }
    ],
    template: `Actúa como un Entrenador de Ventas Consultivas B2B (SPIN Selling).
Prospecto: [TIPO_CLIENTE].
Escribe el guion para una llamada de 30 minutos:
- 00-05 min: Rapport y encuadre de la agenda.
- 05-20 min: Preguntas de Situación, Problema, Implicación del coste de no hacer nada y Necesidad de solución.
- 20-27 min: Presentación de la solución conectada a sus respuestas previas.
- 27-30 min: Cierre con acuerdo de siguientes pasos claros.`
  },
  {
    id: "mkt-11",
    title: "Estrategia de Marketing de Afiliados y Programa de Referidos",
    category: "marketing",
    categoryLabel: "Marketing",
    icon: "zap",
    tags: ["Afiliados", "Referidos", "Viralidad", "Comisiones"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Diseña un programa de afiliados atractivo con estructura de comisiones, kit de marketing y reglas contra fraude.",
    variables: [
      { name: "PRODUCTO_AFILIADOS", label: "Producto y Margen", placeholder: "ej. SaaS de $49/mes con 80% de margen bruto" }
    ],
    template: `Eres un Especialista en Programas de Afiliados y Crecimiento Viral.
Producto: [PRODUCTO_AFILIADOS].
Estructura el programa:
1. Esquema de Comisiones (Recurrente vs. Pago único, comisiones por niveles).
2. Kit de Recursos para el Afiliado (Banners, textos de email, ganchos de redes).
3. Reglas de Juego Limpio (Prevención de auto-referencias y puja en marca propia).
4. Proceso de Onboarding para reclutar a los primeros 50 afiliados clave.`
  },
  {
    id: "mkt-12",
    title: "Optimizador de Tasa de Conversión (CRO) para E-commerce",
    category: "marketing",
    categoryLabel: "Marketing",
    icon: "target",
    tags: ["CRO", "E-commerce", "Checkout", "Conversión"],
    models: ["ChatGPT-4o", "Claude 3.5 Sonnet"],
    description: "Detecta puntos de fuga en fichas de producto, carrito y checkout para maximizar el ticket medio y conversiones.",
    variables: [
      { name: "TIENDA_ONLINE", label: "Tipo de Tienda y Ticket", placeholder: "ej. Tienda de ropa deportiva sustentable con ticket medio de $75" }
    ],
    template: `Eres un Especialista en Optimización de Conversión (CRO).
Tienda: [TIENDA_ONLINE].
Proporciona:
1. 5 Mejoras Críticas en la Ficha de Producto (Galería, microcopy de urgencia ética, selector de tallas).
2. Estrategia de Carrito Abandonado (Secuencia de 3 emails y SMS).
3. Tácticas para Aumentar el Ticket Promedio (AOV) con Order Bumps y Upsells en 1 Clic.`
  },
  {
    id: "mkt-13",
    title: "Estrategia de Co-Marketing y Alianzas Estratégicas B2B",
    category: "marketing",
    categoryLabel: "Marketing",
    icon: "target",
    tags: ["Alianzas", "Partnerships", "B2B", "Co-Marketing"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Identifica marcas complementarias sin competencia directa y crea propuestas de campañas compartidas.",
    variables: [
      { name: "MI_EMPRESA", label: "Mi Empresa y Audiencia", placeholder: "ej. Pasarela de pagos online dirigida a pequeños comercios" },
      { name: "EMPRESA_ALIADA", label: "Socio Potencial", placeholder: "ej. Plataforma de creación de tiendas online o software de contabilidad" }
    ],
    template: `Actúa como Director de Alianzas Estratégicas B2B.
Mi empresa: [MI_EMPRESA]. Socio: [EMPRESA_ALIADA].
Diseña:
1. 3 Formatos de Campaña Conjunta (Webinar co-brandeado, reporte descargable, integración nativa con descuento cruzado).
2. Email de propuesta formal para contactar al VP de Partnerships del socio.
3. Modelo de atribución de leads compartidos.`
  },
  {
    id: "mkt-14",
    title: "Especialista en Marketing de Guerrilla y Campañas Virales",
    category: "marketing",
    categoryLabel: "Marketing",
    icon: "zap",
    tags: ["Guerrilla", "Viral", "Creatividad", "PR Stunt"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Diseña acciones publicitarias de bajo coste y alto impacto visual para generar cobertura orgánica en medios.",
    variables: [
      { name: "MARCA_PRODUCTO", label: "Marca o Mensaje", placeholder: "ej. Aplicación de meditación para personas hiperestresadas en grandes ciudades" }
    ],
    template: `Eres un Director Creativo de Marketing de Guerrilla y Viral Stunts.
Marca: [MARCA_PRODUCTO].
Genera 3 conceptos de campañas de guerrilla:
- Opción 1: Intervención en el espacio público con coste mínimo.
- Opción 2: Reto o experiencia interactiva digital.
- Opción 3: Un truco de PR (PR Stunt) que obligue a los periódicos y noticieros a cubrir la noticia sin pagar publicidad.`
  },
  {
    id: "mkt-15",
    title: "Generador de Encuestas de Satisfacción (NPS y CSAT)",
    category: "marketing",
    categoryLabel: "Marketing",
    icon: "target",
    tags: ["NPS", "CSAT", "Feedback", "Retención"],
    models: ["ChatGPT-4o", "Claude 3.5 Sonnet"],
    description: "Diseña encuestas breves para medir la lealtad del cliente, detectar detractores y recolectar testimonios.",
    variables: [
      { name: "MOMENTO_ENCUESTA", label: "Momento del Ciclo de Vida", placeholder: "ej. 30 días después de haber comprado el software" }
    ],
    template: `Eres un Especialista en Experiencia del Cliente y Retención.
Momento de envío: [MOMENTO_ENCUESTA].
Diseña:
1. Pregunta NPS Estándar con escala 0-10.
2. Pregunta de seguimiento condicionada (Promotores vs. Pasivos vs. Detractores).
3. Flujo automático para pedir una reseña en Google / Trustpilot a los promotores.
4. Protocolo de atención inmediata para recuperar a los detractores.`
  },
  {
    id: "mkt-16",
    title: "Estrategia de Retargeting y Remarketing Multicanal",
    category: "marketing",
    categoryLabel: "Marketing",
    icon: "target",
    tags: ["Retargeting", "Remarketing", "Meta Ads", "Audiencias"],
    models: ["ChatGPT-4o", "Claude 3.5 Sonnet"],
    description: "Recupera visitantes que no compraron mediante segmentación por comportamiento y mensajes progresivos.",
    variables: [
      { name: "PAGINA_VISITADA", label: "Páginas o Comportamientos Clave", placeholder: "ej. Visitaron la página de precios pero no iniciaron checkout" }
    ],
    template: `Eres un Media Buyer Senior de Retargeting.
Audiencia: [PAGINA_VISITADA].
Diseña una campaña de remarketing a 14 días dividida en ventanas de tiempo:
- Días 1 a 3: Anuncio de Recordatorio y Disipador de Dudas.
- Días 4 a 7: Anuncio de Prueba Social y Testimonios en Video.
- Días 8 a 14: Anuncio de Urgencia o Incentivo Especial de Cierre.`
  },
  {
    id: "mkt-17",
    title: "Especialista en Marketing de Influencers y Micro-Creadores",
    category: "marketing",
    categoryLabel: "Marketing",
    icon: "target",
    tags: ["Influencers", "UGC", "Creadores", "Patrocinios"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Filtra perfiles de creadores con comunidades comprometidas y redacta briefings de colaboración sin fricciones.",
    variables: [
      { name: "PRODUCTO_INFLUENCERS", label: "Producto a Promocionar", placeholder: "ej. Bebida energética natural sin azúcar" },
      { name: "PERFIL_CREADOR", label: "Tipo de Creador", placeholder: "ej. Micro-influencers de fitness y productividad (10k-50k seguidores)" }
    ],
    template: `Actúa como Director de Marketing de Influencers y UGC.
Producto: [PRODUCTO_INFLUENCERS]. Creador: [PERFIL_CREADOR].
Entrega:
1. Criterios de Selección (Engagement rate mínimo, demografía de audiencia, detección de seguidores falsos).
2. Plantilla de DM / Email de contacto inicial de baja fricción.
3. Briefing Creativo (Lo que DEBE decir, lo que NO debe decir y llamado a la acción con código de descuento).`
  },
  {
    id: "mkt-18",
    title: "Generador de Estrategia de Precios (Tiering y Packaging)",
    category: "marketing",
    categoryLabel: "Marketing",
    icon: "zap",
    tags: ["Pricing", "Precios", "SaaS", "Freemium"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Estructura tablas de precios de 3 niveles (Starter, Pro, Enterprise) optimizando el anclaje de precios.",
    variables: [
      { name: "VALOR_PRODUCTO", label: "Propuesta de tu Solución", placeholder: "ej. Herramienta de transcripción y resumen de reuniones con IA" }
    ],
    template: `Eres un Consultor de Estrategia de Monetización y Precios SaaS.
Solución: [VALOR_PRODUCTO].
Diseña la tabla de precios:
1. Nivel 1 (Entrada / Starter): Límites para no canibalizar las ventas superiores.
2. Nivel 2 (El Más Popular / Pro): El plan ancla con la mejor relación valor-precio.
3. Nivel 3 (Empresarial / Custom): Funcionalidades de seguridad, SSO y soporte prioritario.
4. Nombre persuasivo para cada plan y justificación del modelo de cobro (por usuario, por uso o tarifa plana).`
  },
  {
    id: "mkt-19",
    title: "Estrategia de Reactivación de Clientes Inactivos (Churn Recovery)",
    category: "marketing",
    categoryLabel: "Marketing",
    icon: "target",
    tags: ["Churn", "Reactivación", "Retención", "Email"],
    models: ["ChatGPT-4o", "Claude 3.5 Sonnet"],
    description: "Recupera usuarios que cancelaron o no han usado la plataforma en más de 60 días con ofertas de reenganche.",
    variables: [
      { name: "TIPO_SERVICIO_INACTIVO", label: "Servicio y Motivo Típico de Baja", placeholder: "ej. Gimnasio o SaaS donde los usuarios dejaron de conectarse por falta de tiempo" }
    ],
    template: `Eres un Especialista en Retención de Clientes y Reducción de Churn.
Servicio: [TIPO_SERVICIO_INACTIVO].
Crea una campaña de reactivación:
- Asunto de email provocador y personal.
- Encuesta de 1 clic para saber qué podemos mejorar.
- Novedades y mejoras añadidas desde su partida.
- Oferta de reincorporación exclusiva 'Te echamos de menos' sin compromiso.`
  },
  {
    id: "mkt-20",
    title: "Especialista en Posicionamiento de Marca Personal para Fundadores",
    category: "marketing",
    categoryLabel: "Marketing",
    icon: "feather",
    tags: ["Founder Branding", "LinkedIn", "Liderazgo", "Startups"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Construye la narrativa pública del fundador ('Build in Public') para atraer inversores, talento y clientes.",
    variables: [
      { name: "TESIS_FUNDADOR", label: "Visión del Fundador y Proyecto", placeholder: "ej. Fundador creando una alternativa de código abierto a Notion enfocada en privacidad local" }
    ],
    template: `Actúa como Asesor Estratégico de Marca Personal para Fundadores Tech.
Visión: [TESIS_FUNDADOR].
Desarrolla el plan de posicionamiento:
1. Tu Manifiesto y Creencia Polarizante (Por qué el status quo está roto).
2. Los 3 Temas Clave sobre los que escribir semanalmente en LinkedIn y X.
3. Estrategia 'Build in Public': Qué métricas, victorias y fracasos compartir para generar empatía y confianza total.`
  }
];
