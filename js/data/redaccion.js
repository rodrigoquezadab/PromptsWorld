/**
 * PROMPTS DE REDACCIÓN & CONTENIDO (20 Prompts)
 */
const PROMPTS_REDACCION = [
  {
    id: "content-01",
    title: "Artículo SEO de Autoridad con Formato Humano",
    category: "redaccion",
    categoryLabel: "Redacción",
    icon: "feather",
    tags: ["SEO", "Copywriting", "Blogs", "Content Marketing"],
    models: ["ChatGPT-4o", "Claude 3.5 Sonnet", "Gemini 1.5 Pro"],
    description: "Crea artículos exhaustivos, naturales, sin clichés de IA, optimizados para posicionamiento semántico en Google.",
    variables: [
      { name: "PALABRA_CLAVE", label: "Palabra Clave Principal", placeholder: "ej. mejores herramientas de productividad para desarrolladores remotos" },
      { name: "INTENCION_BUSQUEDA", label: "Intención de Búsqueda", placeholder: "ej. Informativa y comparativa para toma de decisión" },
      { name: "TONO", label: "Tono de Voz", placeholder: "ej. Conversacional, pragmático y con autoridad profesional" }
    ],
    template: `Actúa como un Editor Senior de Contenidos y Estratega SEO.
Escribe un artículo completo sobre: "[PALABRA_CLAVE]".
Intención de búsqueda: [INTENCION_BUSQUEDA]. Tono: [TONO].
Reglas estrictas:
- Sin frases trilladas de IA ("en el vertiginoso mundo actual", "es crucial destacar").
- Estructura semántica con H1, H2 orientados a intención de búsqueda y H3 accionables.
- Párrafos cortos (máx 3-4 líneas) y listas con viñetas concisas.
- Sección FAQ con 4 preguntas frecuentes para Rich Snippets.`
  },
  {
    id: "content-02",
    title: "Creador de Hilos Virales para X (Twitter) y LinkedIn",
    category: "redaccion",
    categoryLabel: "Redacción",
    icon: "share-2",
    tags: ["LinkedIn", "Twitter", "Social Media", "Storytelling"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Transforma conceptos complejos en publicaciones de alto engagement con ganchos magnéticos y llamadas a la acción.",
    variables: [
      { name: "TEMA_O_HISTORIA", label: "Tema o Lección", placeholder: "ej. Cómo pasé de 0 a 10,000 usuarios en mi SaaS sin pagar publicidad" },
      { name: "AUDIENCIA", label: "Público Objetivo", placeholder: "ej. Emprendedores digitales, programadores indie" }
    ],
    template: `Eres un Ghostwriter de élite en redes sociales.
Tema: [TEMA_O_HISTORIA]. Dirigido a: [AUDIENCIA].
Crea:
1. Post de LinkedIn: Hook de 2 líneas, historia (problema -> revelación -> 5 pasos -> resultado) y pregunta detonante final.
2. Hilo de X (6-8 tweets): Tweet 1 (Hook con promesa de alto valor), tweets 2-6 (desglose paso a paso) y tweet de cierre con CTA.`
  },
  {
    id: "content-03",
    title: "Guion de Video para YouTube / Reels de Alta Retención",
    category: "redaccion",
    categoryLabel: "Redacción",
    icon: "video",
    tags: ["YouTube", "TikTok", "Reels", "Guion", "Retención"],
    models: ["ChatGPT-4o", "Claude 3.5 Sonnet"],
    description: "Estructura narrativa basada en retención: Hook visual, conflicto inicial, entregables de valor y bucle de engagement.",
    variables: [
      { name: "TEMA_VIDEO", label: "Tema del Video", placeholder: "ej. 5 Errores que cometen los juniors al buscar empleo" },
      { name: "FORMATO", label: "Formato y Duración", placeholder: "ej. Video Corto (Short/Reel 60s) o Largo (8 mins)" }
    ],
    template: `Actúa como Guionista Audiovisual enfocado en retención de [FORMATO].
Tema: [TEMA_VIDEO].
Escribe el guion en dos columnas (Audio / Visual):
- 00:00-00:05 (Hook): Impacto visual y pregunta urgente.
- 00:05-00:20 (Conflicto): Qué consecuencias tiene ignorar esto.
- Cuerpo: Puntos de valor con indicaciones de cámara (B-roll, zooms, gráficos).
- Cierre: CTA natural.`
  },
  {
    id: "content-04",
    title: "Newsletter Editorial Semanal con Formato de Alta Lectura",
    category: "redaccion",
    categoryLabel: "Redacción",
    icon: "mail",
    tags: ["Newsletter", "Substack", "Email Marketing", "Engagement"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Diseña boletines informativos adictivos con análisis curado, reflexiones personales y recursos destacados.",
    variables: [
      { name: "TEMA_NEWSLETTER", label: "Tema de la Edición", placeholder: "ej. La revolución de los agentes de IA en el desarrollo de software" },
      { name: "AUDIENCIA_NEWSLETTER", label: "Lectores", placeholder: "ej. CTOs, Tech Leads e Ingenieros de Software" }
    ],
    template: `Eres el Editor en Jefe de una newsletter de primer nivel con más de 100k suscriptores.
Tema: [TEMA_NEWSLETTER]. Lectores: [AUDIENCIA_NEWSLETTER].
Escribe la edición con:
1. 3 Opciones de Asunto (Subject Lines) con tasas de apertura estimadas elevadas.
2. Introducción con gancho narrativo actual.
3. El Desglose Central: Análisis de 3 implicaciones críticas.
4. 3 Recursos curados de la semana con breves comentarios.
5. Pensamiento de cierre y pregunta para suscripción.`
  },
  {
    id: "content-05",
    title: "Reescritura y Humanizador de Textos Generados por IA",
    category: "redaccion",
    categoryLabel: "Redacción",
    icon: "feather",
    tags: ["Humanizar IA", "Edición", "Estilo", "Anti-AI"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Elimina la monotonía sintáctica, clichés robóticos y frases repetitivas típicas de los LLMs para lograr voz auténtica.",
    variables: [
      { name: "TEXTO_ORIGINAL", label: "Texto a Humanizar", placeholder: "Pega el texto con tono robótico...", multiline: true },
      { name: "PERSONALIDAD_VOZ", label: "Personalidad deseada", placeholder: "ej. Irónico, directo, con analogías vivas y ritmo ágil" }
    ],
    template: `Eres un Maestro Editor de Estilo y Humanizador de Textos.
Personalidad deseada: [PERSONALIDAD_VOZ].
Reescribe el siguiente texto:
\`\`\`
[TEXTO_ORIGINAL]
\`\`\`
Directrices:
- Varía radicalmente la longitud de las frases (burstiness y perplejidad natural).
- Sustituye abstracciones vacías por ejemplos gráficos.
- Elimina introducciones pomposas y conclusiones innecesarias.
- Muestra el texto final pulido y una lista de 3 mejoras clave realizadas.`
  },
  {
    id: "content-06",
    title: "Copywriting para Landing Page (Framework PAS y AIDA)",
    category: "redaccion",
    categoryLabel: "Redacción",
    icon: "target",
    tags: ["Landing Page", "Copywriting", "Conversión", "PAS"],
    models: ["ChatGPT-4o", "Claude 3.5 Sonnet"],
    description: "Redacta todos los bloques de texto de una página de ventas de alta conversión desde el Hero hasta los testimonios.",
    variables: [
      { name: "PRODUCTO_LANDING", label: "Producto o Servicio", placeholder: "ej. Software de gestión de finanzas personales automatizado con IA" },
      { name: "BENEFICIO_PRINCIPAL", label: "Mayor Beneficio", placeholder: "ej. Ahorra 4 horas semanales y detecta suscripciones ocultas" }
    ],
    template: `Eres un Copywriter de Respuesta Directa de clase mundial.
Producto: [PRODUCTO_LANDING]. Promesa clave: [BENEFICIO_PRINCIPAL].
Escribe el copy completo para la landing page:
1. Hero Section: Título H1 magnético, Subtítulo descriptivo, CTA principal y microcopy de prueba social.
2. Sección de Problema (Agitación): Los dolores cotidianos del usuario.
3. Sección de Solución: Cómo funciona en 3 pasos visuales.
4. Tabla Comparativa: Nosotros vs. Métodos Antiguos.
5. Garantía y FAQ de objeciones de compra.`
  },
  {
    id: "content-07",
    title: "Storytelling Corporativo & Historias de Éxito de Clientes (Case Study)",
    category: "redaccion",
    categoryLabel: "Redacción",
    icon: "book-open",
    tags: ["Case Study", "Storytelling", "B2B", "Prueba Social"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Estructura casos de estudio irresistibles siguiendo el Viaje del Héroe: Situación, Conflicto, Transformación y Métricas.",
    variables: [
      { name: "CLIENTE_SECTOR", label: "Cliente y Sector", placeholder: "ej. Fintech de pagos con 200 empleados" },
      { name: "RETOS_METRICAS", label: "Reto y Resultados Obtenidos", placeholder: "ej. Sufrían 15% de fraude; redujeron a 0.2% y ahorraron $400k al año" }
    ],
    template: `Actúa como un Especialista en Storytelling B2B y Customer Success.
Cliente: [CLIENTE_SECTOR]. Resultados: [RETOS_METRICAS].
Redacta el caso de estudio con:
1. Título con métrica cuantitativa destacada.
2. El Reto: Obstáculos antes de implementar la solución.
3. La Implementación: Cómo fue el proceso de adopción.
4. El Impacto Cuantificado: Gráficas de resultados en viñetas.
5. Cita testimonial destacada para el cliente.`
  },
  {
    id: "content-08",
    title: "Notas de Prensa y Comunicados Oficiales para Medios",
    category: "redaccion",
    categoryLabel: "Redacción",
    icon: "feather",
    tags: ["Prensa", "PR", "Comunicados", "Periodismo"],
    models: ["ChatGPT-4o", "Gemini 1.5 Pro"],
    description: "Redacta comunicados de prensa con estructura de pirámide invertida listos para periodistas y medios.",
    variables: [
      { name: "NOTICIA_LANZAMIENTO", label: "Hecho Noticioso", placeholder: "ej. Lanzamiento de la primera red de recarga eléctrica ultrarrápida 100% solar en el país" },
      { name: "EMPRESA_VOCERO", label: "Empresa y Vocero", placeholder: "ej. EcoCharge, declaración de la CEO Dra. Elena Morales" }
    ],
    template: `Eres un Director de Relaciones Públicas (PR) de nivel internacional.
Noticia: [NOTICIA_LANZAMIENTO]. Vocero: [EMPRESA_VOCERO].
Escribe una nota de prensa oficial con:
- Titular y Subtitular periodístico (estilo AP/Reuters).
- Fecha y Lugar (Dateline).
- Primer párrafo con las 5 Ws (Quién, Qué, Cuándo, Dónde, Por qué).
- Citas textuales del vocero.
- Párrafo boilerplate sobre la empresa y datos de contacto de prensa.`
  },
  {
    id: "content-09",
    title: "Generador de Ganchos (Hooks) Magnéticos para Contenido",
    category: "redaccion",
    categoryLabel: "Redacción",
    icon: "zap",
    tags: ["Hooks", "Titulares", "CTR", "Engagement"],
    models: ["ChatGPT-4o", "Claude 3.5 Sonnet"],
    description: "Genera 15 variaciones de ganchos iniciales clasificados por psicología: curiosidad, dolor, dato insólito o FOMO.",
    variables: [
      { name: "TEMA_CONTENIDO", label: "Tema o Idea Central", placeholder: "ej. Por qué el 90% de los presupuestos personales fallan en el primer mes" }
    ],
    template: `Eres un Experto en Psicología de la Atención y Creación de Hooks.
Tema: [TEMA_CONTENIDO].
Genera 15 ganchos iniciales clasificados en 5 categorías:
1. Ganchos de Contrarian / Romper Mitos (3).
2. Ganchos de Curiosidad Abierta / Story Loop (3).
3. Ganchos Basados en Datos Insólitos (3).
4. Ganchos de Dolor Directo y Urgencia (3).
5. Ganchos de Transformación 'De X a Y' (3).`
  },
  {
    id: "content-10",
    title: "Resúmenes de Libros con Ideas Accionables (Book Summary)",
    category: "redaccion",
    categoryLabel: "Redacción",
    icon: "book-open",
    tags: ["Libros", "Resumen", "Aprendizaje", "Accionable"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Sintetiza obras de no ficción extrayendo las ideas centrales, modelos mentales y un plan de acción para aplicar hoy.",
    variables: [
      { name: "TITULO_LIBRO", label: "Título y Autor del Libro", placeholder: "ej. 'Atomic Habits' de James Clear" }
    ],
    template: `Actúa como un Analista Literario de No Ficción.
Libro: [TITULO_LIBRO].
Provee un resumen ejecutivo de alta densidad:
1. La Tesis Central del libro en 1 oración.
2. Los 5 Principios o Modelos Mentales Clave con ejemplos.
3. 3 Frases más memorables analizadas.
4. Matriz de Implementación Práctica: 3 hábitos o cambios concretos para aplicar en 24 horas.`
  },
  {
    id: "content-11",
    title: "Generador de FAQs Exhaustivas y Respuestas Persuasivas",
    category: "redaccion",
    categoryLabel: "Redacción",
    icon: "feather",
    tags: ["FAQ", "Soporte", "Objeciones", "UX Writing"],
    models: ["ChatGPT-4o", "Claude 3.5 Sonnet"],
    description: "Anticipa dudas de usuarios y clientes redactando respuestas claras que disuelven fricciones de compra.",
    variables: [
      { name: "PRODUCTO_O_SERVICIO", label: "Tu Producto o Servicio", placeholder: "ej. Membresía de comunidad privada para desarrolladores freelance" }
    ],
    template: `Eres un Estratega de UX Writing y Conversión.
Para: [PRODUCTO_O_SERVICIO].
Genera 8 Preguntas Frecuentes (FAQs) clasificadas en:
- Técnicas / Operativas (acceso, compatibilidad).
- Comerciales / Precio (reembolsos, cancelaciones, facturación).
- De Valor / Resultados (para quién es y para quién NO es).
Escribe respuestas directas, empáticas y orientadas a la acción.`
  },
  {
    id: "content-12",
    title: "Especialista en Microcopy y UX Writing para Apps",
    category: "redaccion",
    categoryLabel: "Redacción",
    icon: "edit",
    tags: ["UX Writing", "Microcopy", "Onboarding", "UI/UX"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Redacta textos de interfaz (botones, tooltips, empty states, mensajes de error) claros y sin ambigüedad.",
    variables: [
      { name: "FLUJO_APP", label: "Flujo o Pantalla", placeholder: "ej. Proceso de cancelación de suscripción con oferta de pausa" },
      { name: "TONO_PRODUCTO", label: "Voz de la Marca", placeholder: "ej. Amigable, transparente, sin patrones oscuros (dark patterns)" }
    ],
    template: `Eres un Lead UX Writer.
Flujo: [FLUJO_APP]. Tono: [TONO_PRODUCTO].
Genera el microcopy completo para:
1. Título de la pantalla y subtítulo contextual.
2. Opciones de acción (Botón principal vs. secundario con microcopy disuasorio ético).
3. Mensajes de confirmación y feedback toast.
4. Mensaje de error si falla la conexión.`
  },
  {
    id: "content-13",
    title: "Creación de Biografías Profesionales de Alto Impacto",
    category: "redaccion",
    categoryLabel: "Redacción",
    icon: "feather",
    tags: ["Bio", "LinkedIn", "Personal Branding", "Perfil"],
    models: ["ChatGPT-4o", "Claude 3.5 Sonnet"],
    description: "Redacta bios profesionales para LinkedIn, Twitter, conferencias o portfolio en múltiples extensiones.",
    variables: [
      { name: "TRAYECTORIA_LOGROS", label: "Trayectoria y Logros", placeholder: "ej. 8 años en desarrollo backend, líder de equipo, speaker en conferencias, autor de un libro de Go" },
      { name: "OBJETIVO_BIO", label: "Meta Principal", placeholder: "ej. Posicionarse como consultor senior y atraer clientes internacionales" }
    ],
    template: `Actúa como Asesor de Marca Personal para Ejecutivos y Especialistas Tech.
Trayectoria: [TRAYECTORIA_LOGROS]. Meta: [OBJETIVO_BIO].
Genera:
1. Bio Corta (1 frase / Twitter / One-liner).
2. Bio Media (1 párrafo para speakers de eventos / About me).
3. Sección 'Acerca de' completa de LinkedIn con estructura: Propósito -> Trayectoria -> Especialidades -> Contacto.`
  },
  {
    id: "content-14",
    title: "Redactor de Contratos y Términos de Servicio Básicos",
    category: "redaccion",
    categoryLabel: "Redacción",
    icon: "feather",
    tags: ["Legal", "Términos", "Contratos", "Freelance"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Estructura cláusulas contractuales para servicios de desarrollo o diseño independiente con lenguaje claro.",
    variables: [
      { name: "TIPO_SERVICIO", label: "Servicio a Contratar", placeholder: "ej. Desarrollo de aplicación web personalizada para cliente extranjero" },
      { name: "PUNTOS_CLAVE", label: "Condiciones Clave", placeholder: "ej. 50% anticipo, 50% al entregar; propiedad intelectual se transfiere al pago total; 2 rondas de revisiones" }
    ],
    template: `Actúa como Asesor Legal y Redactor de Contratos Comerciales.
Servicio: [TIPO_SERVICIO]. Condiciones: [PUNTOS_CLAVE].
Redacta un acuerdo de servicios claro con:
1. Alcance del Trabajo y Entregables.
2. Condiciones de Pago e Intereses por Mora.
3. Propiedad Intelectual y Licencia.
4. Rondas de Revisiones y Cambios Fuera de Alcance.
5. Limitación de Responsabilidad y Cláusula de Rescisión.
(Nota: incluye advertencia de revisión legal local).`
  },
  {
    id: "content-15",
    title: "Generador de Diálogos y Ficción Interactiva",
    category: "redaccion",
    categoryLabel: "Redacción",
    icon: "feather",
    tags: ["Ficción", "Diálogos", "Creatividad", "Personajes"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Crea escenas de ficción con subtexto, voces diferenciadas para cada personaje y tensión dramática.",
    variables: [
      { name: "PREMISA_ESCENA", label: "Premisa o Conflicto", placeholder: "ej. Dos científicos descubren que la IA que crearon ha modificado en secreto su propio código fuente" },
      { name: "PERSONAJES", label: "Personajes en Escena", placeholder: "ej. Elena (pragmática, cautelosa) y Marco (ambicioso, entusiasta)" }
    ],
    template: `Eres un Novelista y Guionista Galardonado.
Premisa: [PREMISA_ESCENA]. Personajes: [PERSONAJES].
Escribe una escena de diálogo inmersiva donde:
- Cada personaje tenga un ritmo y vocabulario único.
- Haya subtexto y conflicto latente sin que todo sea explícito.
- Se incluyan acotaciones sensoriales de entorno que construyan atmósfera.`
  },
  {
    id: "content-16",
    title: "Redactor de Discursos y Pitches Emotivos",
    category: "redaccion",
    categoryLabel: "Redacción",
    icon: "feather",
    tags: ["Discursos", "Keynote", "Oratoria", "TEDx"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Crea discursos memorables con ritmo oratorio, pausas estratégicas y clímax emocional.",
    variables: [
      { name: "TEMA_DISCURSO", label: "Mensaje Central", placeholder: "ej. El valor del fracaso como único motor de la innovación genuina" },
      { name: "OCASION_AUDIENCIA", label: "Ocasión y Público", placeholder: "ej. Ceremonia de graduación de ingenieros universitarios" }
    ],
    template: `Actúa como Redactor de Discursos para Líderes Mundiales y Oradores TED.
Mensaje: [TEMA_DISCURSO]. Evento: [OCASION_AUDIENCIA].
Escribe el discurso completo con:
- Apertura con anécdota personal no convencional.
- Ritmo marcado (con indicaciones entre corchetes para [Pausa], [Énfasis], [Mirada al público]).
- Regla de tres oratoria en los momentos de mayor impacto.
- Cierre inspirador que deje a la audiencia de pie.`
  },
  {
    id: "content-17",
    title: "Traductor y Localizador Cultural de Contenidos",
    category: "redaccion",
    categoryLabel: "Redacción",
    icon: "feather",
    tags: ["Traducción", "Localización", "Idiomas", "Cultura"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o", "DeepSeek-V3"],
    description: "Traduce adaptando modismos, jerga local y sensibilidad cultural sin traducciones literales torpes.",
    variables: [
      { name: "TEXTO_ORIGINAL", label: "Texto Original", placeholder: "Pega el texto...", multiline: true },
      { name: "IDIOMA_REGION_DESTINO", label: "Idioma y Región Destino", placeholder: "ej. Español Neutro para Latinoamérica o Español de España" }
    ],
    template: `Eres un Traductor Literario y Experto en Transcreación a [IDIOMA_REGION_DESTINO].
Texto a localizar:
\`\`\`
[TEXTO_ORIGINAL]
\`\`\`
Entrega:
1. Traducción fluida y natural adaptada al contexto cultural del mercado destino.
2. Explicación de los modismos o términos adaptados.
3. 2 Variaciones alternativas para los titulares o frases clave.`
  },
  {
    id: "content-18",
    title: "Creador de Guías Prácticas y Manuales 'Paso a Paso'",
    category: "redaccion",
    categoryLabel: "Redacción",
    icon: "feather",
    tags: ["Guías", "Tutoriales", "How-To", "Documentación"],
    models: ["ChatGPT-4o", "Claude 3.5 Sonnet"],
    description: "Diseña tutoriales a prueba de principiantes con requisitos previos, pasos numerados y resolución de problemas.",
    variables: [
      { name: "TEMA_GUIA", label: "Habilidad o Proceso a Enseñar", placeholder: "ej. Cómo configurar un dominio personalizado con HTTPS en Cloudflare" }
    ],
    template: `Eres un Diseñador Instruccional y Creador de Tutoriales Técnicos.
Tema: [TEMA_GUIA].
Escribe la guía completa:
- Prerrequisitos y herramientas necesarias antes de comenzar.
- Tiempo estimado de realización y nivel de dificultad.
- Pasos numerados con capturas conceptuales y comandos exactos.
- Sección '¿Qué hacer si algo sale mal?' con los 3 fallos más comunes.`
  },
  {
    id: "content-19",
    title: "Redactor de Respuestas de Atención al Cliente para Clientes Difíciles",
    category: "redaccion",
    categoryLabel: "Redacción",
    icon: "feather",
    tags: ["Atención al Cliente", "Desescalar", "Soporte", "Empatía"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Desescala situaciones tensas con clientes insatisfechos mediante validación emocional, soluciones y límites firmes.",
    variables: [
      { name: "QUEJA_CLIENTE", label: "Mensaje o Queja del Cliente", placeholder: "Pega el mensaje del cliente enojado...", multiline: true },
      { name: "POLITICA_O_SOLUCION", label: "Solución que podemos ofrecer", placeholder: "ej. Reembolso del 50% y extensión de servicio por 1 mes" }
    ],
    template: `Actúa como Director de Experiencia del Cliente especializado en Desescalación de Crisis.
Queja:
\`\`\`
[QUEJA_CLIENTE]
\`\`\`
Solución disponible: [POLITICA_O_SOLUCION].
Redacta la respuesta:
1. Empatía y Validación de su frustración sin culpar a la empresa de forma innecesaria.
2. Explicación clara de lo sucedido.
3. Oferta de compensación concreta y pasos inmediatos que tomaremos.
4. Tono calmado, profesional y resolutivo.`
  },
  {
    id: "content-20",
    title: "Especialista en Copy para Anuncios en Redes (Meta Ads & Google Ads)",
    category: "redaccion",
    categoryLabel: "Redacción",
    icon: "target",
    tags: ["Meta Ads", "Google Ads", "Copywriting", "Anuncios"],
    models: ["ChatGPT-4o", "Claude 3.5 Sonnet"],
    description: "Crea textos publicitarios de alto CTR adaptados a las restricciones de caracteres y políticas de anuncios.",
    variables: [
      { name: "OFERTA_ANUNCIO", label: "Oferta o Producto", placeholder: "ej. Curso intensivo de Inteligencia Artificial para no programadores" },
      { name: "PUBLICO_ANUNCIO", label: "Público al que va dirigido", placeholder: "ej. Profesionales de 28 a 45 años buscando ascender" }
    ],
    template: `Eres un Media Buyer y Copywriter Publicitario de Alto Rendimiento.
Oferta: [OFERTA_ANUNCIO]. Público: [PUBLICO_ANUNCIO].
Genera:
1. 3 Versiones de Copy para Meta Ads (Facebook/Instagram): Formato corto, formato historia y formato basado en viñetas.
2. 5 Titulares para Google Search Ads (máx 30 caracteres cada uno).
3. 3 Descripciones para Google Search Ads (máx 90 caracteres cada una).`
  }
];
