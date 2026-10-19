/**
 * Maverick's Gemini Secret Codes (100 Prompt Shortcuts organized by category)
 * Extraídos fielmente del documento "Mavericks_Gemini_Secret_Codes.pdf".
 * Cada código modifica el modo de respuesta, formato o patrón de razonamiento en Google Gemini.
 */

const GEMINI_CATEGORIES = [
  { id: "all", label: "Todos los Códigos", icon: "grid", count: 100 },
  { id: "google-integration", label: "Google Integration", icon: "globe", count: 12, desc: "Extensiones y conexiones nativas con el ecosistema Google Workspace" },
  { id: "research", label: "Research & Fact-Checking", icon: "search", count: 11, desc: "Búsqueda en tiempo real, verificación de fuentes y análisis de datos" },
  { id: "writing", label: "Writing & Editing", icon: "feather", count: 11, desc: "Refinamiento de tono, concisión, aperturas y humanización de texto" },
  { id: "explanation", label: "Explanation & Learning", icon: "book-open", count: 11, desc: "Desglose pedagógico, simplificación conceptual y metáforas" },
  { id: "analysis", label: "Analysis & Strategy", icon: "target", count: 11, desc: "Diagnóstico profundo, matrices competitivas y planes de acción" },
  { id: "creative", label: "Creative & Content", icon: "lightbulb", count: 11, desc: "Ideación, simulaciones de escenarios y generación de ganchos virales" },
  { id: "thinking", label: "Thinking & Reasoning", icon: "shield", count: 11, desc: "Modelos mentales, pensamiento inverso, premortem y debate de expertos" },
  { id: "formatting", label: "Formatting & Output", icon: "table", count: 11, desc: "Estructuras ejecutivas, dashboards, tarjetas de puntuación y wireframes" },
  { id: "utility", label: "Utility & Power Commands", icon: "terminal", count: 11, desc: "Comandos de sistema, encadenamiento, extracción y optimización de prompts" }
];

const GEMINI_CODES_DATA = [
  // =========================================================================
  // 1. Google Integration (12 códigos)
  // =========================================================================
  {
    id: "gem-gmail",
    code: "@Gmail",
    type: "workspace",
    category: "google-integration",
    categoryLabel: "Google Integration",
    description: "Searches your Gmail inbox and pulls real emails, threads, and attachments.",
    descriptionEs: "Busca en tu bandeja de entrada de Gmail y extrae correos reales, hilos de conversación y archivos adjuntos.",
    example: "@Gmail Busca los correos de la última semana relacionados con 'Presupuesto 2026' y resume los puntos de acción acordados.",
    tags: ["gmail", "email", "workspace", "google", "inbox", "correos"]
  },
  {
    id: "gem-drive",
    code: "@Drive",
    type: "workspace",
    category: "google-integration",
    categoryLabel: "Google Integration",
    description: "Finds and reads files stored in your Google Drive.",
    descriptionEs: "Encuentra y lee archivos almacenados en tu Google Drive.",
    example: "@Drive Encuentra el documento 'Propuesta Comercial Q3' y sintetiza los entregables clave y plazos.",
    tags: ["drive", "archivos", "google drive", "cloud", "workspace"]
  },
  {
    id: "gem-docs",
    code: "@Docs",
    type: "workspace",
    category: "google-integration",
    categoryLabel: "Google Integration",
    description: "Pulls content from a specific Google Doc into the conversation.",
    descriptionEs: "Extrae el contenido de un Google Doc específico y lo incorpora a la conversación.",
    example: "@Docs Lee el documento 'Estrategia de Marca' y extrae el manual de tono de voz para redactar un email.",
    tags: ["docs", "documentos", "google docs", "texto", "workspace"]
  },
  {
    id: "gem-sheets",
    code: "@Sheets",
    type: "workspace",
    category: "google-integration",
    categoryLabel: "Google Integration",
    description: "Reads data and tables from your Google Sheets.",
    descriptionEs: "Lee datos, rangos y tablas directamente de tus hojas de cálculo de Google Sheets.",
    example: "@Sheets Analiza la hoja 'Ventas_Anuales_2025' e identifica los 3 productos con mayor margen y peor rotación.",
    tags: ["sheets", "tablas", "datos", "excel", "google sheets", "workspace"]
  },
  {
    id: "gem-calendar",
    code: "@Calendar",
    type: "workspace",
    category: "google-integration",
    categoryLabel: "Google Integration",
    description: "Checks your Google Calendar for events, conflicts, and availability.",
    descriptionEs: "Consulta tu Google Calendar para revisar eventos, detectar conflictos y disponibilidad de horarios.",
    example: "@Calendar Revisa mi agenda de este jueves y viernes y busca bloques libres de al menos 90 minutos para trabajo profundo.",
    tags: ["calendar", "agenda", "reuniones", "horarios", "disponibilidad"]
  },
  {
    id: "gem-maps",
    code: "@Maps",
    type: "workspace",
    category: "google-integration",
    categoryLabel: "Google Integration",
    description: "Pulls location data, directions, and place details from Google Maps.",
    descriptionEs: "Obtiene datos de ubicación, indicaciones de ruta y detalles de sitios desde Google Maps.",
    example: "@Maps Encuentra cafeterías tranquilas con WiFi y enchufes a menos de 15 minutos a pie de mi ubicación.",
    tags: ["maps", "ubicacion", "lugares", "direcciones", "google maps"]
  },
  {
    id: "gem-youtube",
    code: "@YouTube",
    type: "workspace",
    category: "google-integration",
    categoryLabel: "Google Integration",
    description: "Searches and summarizes YouTube videos on any topic.",
    descriptionEs: "Busca y resume el contenido de videos de YouTube sobre cualquier temática.",
    example: "@YouTube Busca videos recientes sobre 'Arquitectura de Agentes IA con LangGraph' y resume las lecciones clave.",
    tags: ["youtube", "video", "resumen", "transcripcion", "google"]
  },
  {
    id: "gem-keep",
    code: "@Keep",
    type: "workspace",
    category: "google-integration",
    categoryLabel: "Google Integration",
    description: "Accesses your notes and lists from Google Keep.",
    descriptionEs: "Accede a tus notas, listas de verificación e ideas guardadas en Google Keep.",
    example: "@Keep Revisa mi nota titulada 'Ideas de Contenido' y selecciona las 3 más viables para publicar hoy.",
    tags: ["keep", "notas", "apuntes", "listas", "workspace"]
  },
  {
    id: "gem-tasks",
    code: "@Tasks",
    type: "workspace",
    category: "google-integration",
    categoryLabel: "Google Integration",
    description: "Pulls your to-do items from Google Tasks.",
    descriptionEs: "Extrae tus tareas pendientes y listas de verificación desde Google Tasks.",
    example: "@Tasks Muestra mis tareas con fecha límite de hoy y organízalas según la matriz urgente vs importante.",
    tags: ["tasks", "tareas", "pendientes", "todo", "productividad"]
  },
  {
    id: "gem-slides",
    code: "@Slides",
    type: "workspace",
    category: "google-integration",
    categoryLabel: "Google Integration",
    description: "Reads content and speaker notes from your Google Slides.",
    descriptionEs: "Lee diapositivas, textos y notas del orador desde tus presentaciones de Google Slides.",
    example: "@Slides Extrae las conclusiones principales y las preguntas clave de la presentación 'Pitch Inversionistas v2'.",
    tags: ["slides", "presentaciones", "diapositivas", "pitch", "google slides"]
  },
  {
    id: "gem-contacts",
    code: "@Contacts",
    type: "workspace",
    category: "google-integration",
    categoryLabel: "Google Integration",
    description: "Looks up people and details from your Google Contacts.",
    descriptionEs: "Busca información, correos y teléfonos de personas en tus Contactos de Google.",
    example: "@Contacts Busca los datos de contacto y empresa de 'Carlos Mendoza' para redactarle un correo de seguimiento.",
    tags: ["contacts", "contactos", "personas", "agenda", "workspace"]
  },
  {
    id: "gem-flights",
    code: "@Flights",
    type: "workspace",
    category: "google-integration",
    categoryLabel: "Google Integration",
    description: "Pulls flight prices, routes, and travel options from Google Flights.",
    descriptionEs: "Consulta precios de vuelos en tiempo real, rutas y alternativas de viaje con Google Flights.",
    example: "@Flights Busca vuelos directos de Santiago a Ciudad de México para la primera semana de noviembre, ordenados por menor escala y precio.",
    tags: ["flights", "vuelos", "viajes", "itinerarios", "google flights"]
  },

  // =========================================================================
  // 2. Research & Fact-Checking (11 códigos)
  // =========================================================================
  {
    id: "gem-factcheck",
    code: "/factcheck",
    type: "command",
    category: "research",
    categoryLabel: "Research & Fact-Checking",
    description: "Uses Google Search to verify every claim in real time.",
    descriptionEs: "Utiliza Google Search para verificar cada afirmación y dato con fuentes en tiempo real.",
    example: "/factcheck Verifica si la tasa de interés de la Reserva Federal bajó en el último trimestre y cita datos oficiales.",
    tags: ["factcheck", "verificar", "google search", "precision", "fuentes"]
  },
  {
    id: "gem-deepresearch",
    code: "/deepresearch",
    type: "command",
    category: "research",
    categoryLabel: "Research & Fact-Checking",
    description: "Runs an extended multi-step research process before answering.",
    descriptionEs: "Ejecuta un proceso de investigación profundo en múltiples pasos antes de emitir su respuesta final.",
    example: "/deepresearch Investiga el estado actual de la fusión nuclear comercial, empresas líderes y cronogramas previstos.",
    tags: ["deepresearch", "investigacion", "analisis", "exhaustivo", "papers"]
  },
  {
    id: "gem-source",
    code: "/source",
    type: "command",
    category: "research",
    categoryLabel: "Research & Fact-Checking",
    description: "Finds and cites the original source behind a claim.",
    descriptionEs: "Rastrea y cita la fuente primaria u original detrás de una afirmación o estadística.",
    example: "/source ¿Quién acuñó el término 'Prompt Engineering' y cuál fue la publicación o paper original donde apareció?",
    tags: ["source", "fuente", "origen", "citas", "paper", "autor"]
  },
  {
    id: "gem-trending",
    code: "/trending",
    type: "command",
    category: "research",
    categoryLabel: "Research & Fact-Checking",
    description: "Shows what is trending right now on any topic.",
    descriptionEs: "Muestra las tendencias, discusiones calientes y novedades del momento sobre cualquier tema.",
    example: "/trending ¿Cuáles son los temas y repositorios de IA más populares en GitHub y X en las últimas 48 horas?",
    tags: ["trending", "tendencias", "actualidad", "viral", "noticias"]
  },
  {
    id: "gem-latest",
    code: "/latest",
    type: "command",
    category: "research",
    categoryLabel: "Research & Fact-Checking",
    description: "Pulls only the most recent information available online.",
    descriptionEs: "Filtra y extrae exclusivamente la información más reciente disponible en la web.",
    example: "/latest ¿Cuáles son las últimas regulaciones emitidas por la Unión Europea respecto a modelos de IA de código abierto?",
    tags: ["latest", "reciente", "noticias", "tiempo real", "actualizacion"]
  },
  {
    id: "gem-crosscheck",
    code: "/crosscheck",
    type: "command",
    category: "research",
    categoryLabel: "Research & Fact-Checking",
    description: "Compares a claim across multiple independent sources.",
    descriptionEs: "Compara y triangula una afirmación entre múltiples fuentes independientes para confirmar su veracidad.",
    example: "/crosscheck Compara las cifras de usuarios activos mensuales de Threads según Meta, analistas de SensorTower y Statista.",
    tags: ["crosscheck", "triangulacion", "fuentes", "verificacion", "comparacion"]
  },
  {
    id: "gem-evidence",
    code: "/evidence",
    type: "command",
    category: "research",
    categoryLabel: "Research & Fact-Checking",
    description: "Backs up a statement with supporting data and studies.",
    descriptionEs: "Respalda una afirmación o tesis aportando datos cuantitativos, estudios clínicos o papers científicos.",
    example: "/evidence Respalda con evidencia científica revisada por pares los beneficios del trabajo de fuerza en adultos mayores.",
    tags: ["evidence", "evidencia", "estudios", "datos", "ciencia"]
  },
  {
    id: "gem-mythbust",
    code: "/mythbust",
    type: "command",
    category: "research",
    categoryLabel: "Research & Fact-Checking",
    description: "Tests a common belief and shows whether it actually holds up.",
    descriptionEs: "Pone a prueba un mito o creencia popular demostrando con rigor si es verdadero, falso o engañoso.",
    example: "/mythbust 'Comer carbohidratos de noche engorda más que de día'. ¿Qué dice realmente el balance calórico y la crononutrición?",
    tags: ["mythbust", "mitos", "desmentir", "ciencia", "verdades"]
  },
  {
    id: "gem-citethis",
    code: "CITETHIS",
    type: "directive",
    category: "research",
    categoryLabel: "Research & Fact-Checking",
    description: "Adds proper citations and references to every claim in the answer.",
    descriptionEs: "Agrega citas académicas formales y enlaces a referencias bibliográficas en cada afirmación del texto.",
    example: "CITETHIS Explica los mecanismos biológicos de la autofagia inducida por el ayuno intermitente.",
    tags: ["citethis", "citas", "referencias", "bibliografia", "apa"]
  },
  {
    id: "gem-datamine",
    code: "DATAMINE",
    type: "directive",
    category: "research",
    categoryLabel: "Research & Fact-Checking",
    description: "Digs through available data to find patterns and numbers.",
    descriptionEs: "Indaga minuciosamente en conjuntos de datos disponibles para descubrir patrones, anomalías y cifras clave.",
    example: "DATAMINE Examina el informe financiero adjunto y detecta patrones en los costos operativos de los últimos 4 trimestres.",
    tags: ["datamine", "mineria de datos", "patrones", "metricas", "estadisticas"]
  },
  {
    id: "gem-originscan",
    code: "ORIGINSCAN",
    type: "directive",
    category: "research",
    categoryLabel: "Research & Fact-Checking",
    description: "Traces a topic back to where it originally started.",
    descriptionEs: "Rastrea la genealogía histórica y conceptual de un tema hasta su primer origen documentado.",
    example: "ORIGINSCAN Rastrea el origen histórico del concepto de 'Microservicios' desde la arquitectura orientada a servicios (SOA).",
    tags: ["originscan", "origen", "historia", "evolucion", "etimologia"]
  },

  // =========================================================================
  // 3. Writing & Editing (11 códigos)
  // =========================================================================
  {
    id: "gem-polish",
    code: "/polish",
    type: "command",
    category: "writing",
    categoryLabel: "Writing & Editing",
    description: "Cleans up grammar, flow, and readability without changing the voice.",
    descriptionEs: "Perfecciona la gramática, fluidez y legibilidad del texto preservando intacta la voz y estilo del autor.",
    example: "/polish Pule el siguiente borrador de correo para un cliente manteniendo un tono cercano pero profesional: [texto]",
    tags: ["polish", "pulir", "estilo", "gramatica", "redaccion"]
  },
  {
    id: "gem-tighten",
    code: "/tighten",
    type: "command",
    category: "writing",
    categoryLabel: "Writing & Editing",
    description: "Removes filler words and makes every sentence count.",
    descriptionEs: "Elimina palabras de relleno, redundancias y rodeos haciendo que cada frase tenga máximo impacto.",
    example: "/tighten Elimina toda la paja de esta propuesta de valor y déjala en 2 frases de máxima contundencia: [texto]",
    tags: ["tighten", "concision", "brevedad", "eliminar relleno", "impacto"]
  },
  {
    id: "gem-voice",
    code: "/voice",
    type: "command",
    category: "writing",
    categoryLabel: "Writing & Editing",
    description: "Matches the writing style to a specific person or brand you name.",
    descriptionEs: "Modela y adapta el estilo de redacción exactamente al tono de una persona, referente o marca indicada.",
    example: "/voice Paul Graham. Reescribe este ensayo sobre la productividad en startups usando el estilo reflexivo y claro de sus ensayos.",
    tags: ["voice", "tono de voz", "estilo", "marca", "personalidad"]
  },
  {
    id: "gem-hook",
    code: "/hook",
    type: "command",
    category: "writing",
    categoryLabel: "Writing & Editing",
    description: "Writes a strong opening line designed to grab attention.",
    descriptionEs: "Genera una línea de apertura magnética diseñada para capturar la atención en los primeros 3 segundos.",
    example: "/hook Escribe 5 aperturas de alto impacto para un hilo sobre cómo la IA reemplazará a las herramientas no-code.",
    tags: ["hook", "gancho", "apertura", "retencion", "copywriting"]
  },
  {
    id: "gem-closer",
    code: "/closer",
    type: "command",
    category: "writing",
    categoryLabel: "Writing & Editing",
    description: "Writes a strong closing line or call to action.",
    descriptionEs: "Redacta un cierre contundente, memorable o un llamado a la acción (CTA) con alta tasa de conversión.",
    example: "/closer Redacta 3 opciones de cierre con llamada a la acción para descargar un ebook gratuito sobre TypeScript.",
    tags: ["closer", "cierre", "cta", "conclusion", "llamado a la accion"]
  },
  {
    id: "gem-pivot",
    code: "/pivot",
    type: "command",
    category: "writing",
    categoryLabel: "Writing & Editing",
    description: "Rewrites content for a completely different audience.",
    descriptionEs: "Reescribe un contenido adaptándolo íntegramente a una audiencia con diferente nivel de conocimiento o perfil.",
    example: "/pivot Toma esta explicación técnica de Kubernetes y adáptala para el Director Financiero (CFO) enfatizando costos.",
    tags: ["pivot", "audiencia", "adaptar", "reescribir", "enfoque"]
  },
  {
    id: "gem-warmup",
    code: "/warmup",
    type: "command",
    category: "writing",
    categoryLabel: "Writing & Editing",
    description: "Makes cold or stiff writing feel more personal and approachable.",
    descriptionEs: "Transforma textos fríos, acartonados o robóticos en mensajes cálidos, empáticos y accesibles.",
    example: "/warmup Haz que esta notificación de cambio de términos y condiciones suene comprensible, humana y transparente: [texto]",
    tags: ["warmup", "calidez", "empatia", "humano", "cercano"]
  },
  {
    id: "gem-punch",
    code: "/punch",
    type: "command",
    category: "writing",
    categoryLabel: "Writing & Editing",
    description: "Adds impact and energy to flat or boring writing.",
    descriptionEs: "Inyecta dinamismo, energía y fuerza a párrafos que suenan apagados, aburridos o genéricos.",
    example: "/punch Dale garra y dinamismo a este pitch de presentación para cautivar a un jurado de startups: [texto]",
    tags: ["punch", "energia", "fuerza", "dinamismo", "impacto"]
  },
  {
    id: "gem-trim",
    code: "/trim",
    type: "command",
    category: "writing",
    categoryLabel: "Writing & Editing",
    description: "Cuts the word count in half while keeping the core meaning.",
    descriptionEs: "Reduce el conteo de palabras a la mitad exacta conservando intacto el 100% del significado central.",
    example: "/trim Reduce este artículo de 600 palabras a 300 palabras exactas sin perder ningún dato relevante: [texto]",
    tags: ["trim", "recortar", "resumen", "brevedad", "palabras"]
  },
  {
    id: "gem-mirror",
    code: "/mirror",
    type: "command",
    category: "writing",
    categoryLabel: "Writing & Editing",
    description: "Rewrites text to match the tone of a sample you provide.",
    descriptionEs: "Reescribe el texto clonando el ritmo, vocabulario y cadencia de una muestra de ejemplo provista.",
    example: "/mirror Muestra: [ejemplo de newsletter]. Aplica este mismo estilo desenfadado y ritmo ágil al siguiente texto: [borrador]",
    tags: ["mirror", "clonar estilo", "cadencia", "tono", "ejemplo"]
  },
  {
    id: "gem-deai",
    code: "/deAI",
    type: "command",
    category: "writing",
    categoryLabel: "Writing & Editing",
    description: "Removes patterns that make the writing sound AI-generated.",
    descriptionEs: "Elimina muletillas y patrones clichés típicos de IA ('en el panorama actual', 'un tapiz', 'crucial', etc.).",
    example: "/deAI Humaniza este texto eliminando frases cliché de IA y dotándolo de naturalidad y oraciones asimétricas: [texto]",
    tags: ["deai", "humanizar", "anti ia", "cliches", "natural"]
  },

  // =========================================================================
  // 4. Explanation & Learning (11 códigos)
  // =========================================================================
  {
    id: "gem-el5",
    code: "EL5",
    type: "directive",
    category: "explanation",
    categoryLabel: "Explanation & Learning",
    description: "Breaks any topic down so a five-year-old can understand it.",
    descriptionEs: "Descompone cualquier concepto hipercomplejo para que un niño de 5 años lo entienda a la primera.",
    example: "EL5 ¿Cómo funciona la encriptación asimétrica de clave pública y privada?",
    tags: ["el5", "feynman", "sencillo", "ninos", "simplificar"]
  },
  {
    id: "gem-onepager",
    code: "ONEPAGER",
    type: "directive",
    category: "explanation",
    categoryLabel: "Explanation & Learning",
    description: "Condenses everything you need to know onto a single page.",
    descriptionEs: "Condensa absolutamente todo lo necesario sobre un tema en una única página estructurada y visual.",
    example: "ONEPAGER Todo lo que un Product Manager necesita saber sobre APIs REST vs GraphQL vs gRPC.",
    tags: ["onepager", "resumen ejecutivo", "una pagina", "sintesis"]
  },
  {
    id: "gem-mentor",
    code: "/mentor",
    type: "command",
    category: "explanation",
    categoryLabel: "Explanation & Learning",
    description: "Responds as a patient teacher guiding you through a concept.",
    descriptionEs: "Adopta el rol de un profesor paciente y pedagógico que te guía paso a paso haciéndote reflexionar.",
    example: "/mentor Ayúdame a entender cómo funciona el algoritmo de Backpropagation en redes neuronales desde cero.",
    tags: ["mentor", "tutor", "profesor", "pedagogico", "aprendizaje"]
  },
  {
    id: "gem-dumbitdown",
    code: "DUMBITDOWN",
    type: "directive",
    category: "explanation",
    categoryLabel: "Explanation & Learning",
    description: "Strips away all jargon and makes the answer dead simple.",
    descriptionEs: "Elimina cualquier tecnicismo o jerga confusa haciendo la explicación directa, llana y cristalina.",
    example: "DUMBITDOWN Explica qué es una llamada de margen (Margin Call) en finanzas sin usar términos bursátiles.",
    tags: ["dumbitdown", "sin jerga", "lenguaje llano", "facil", "claro"]
  },
  {
    id: "gem-gapfinder",
    code: "/gapfinder",
    type: "command",
    category: "explanation",
    categoryLabel: "Explanation & Learning",
    description: "Identifies what you are missing or do not understand yet.",
    descriptionEs: "Analiza tu entendimiento actual e identifica lagunas conceptuales, vacíos o malentendidos sutiles.",
    example: "/gapfinder Creo que Docker es solo una máquina virtual más ligera. Dime qué vacíos conceptuales tengo al pensar así.",
    tags: ["gapfinder", "lagunas", "vacios de conocimiento", "feedback", "diagnostico"]
  },
  {
    id: "gem-walkthrough",
    code: "WALKTHROUGH",
    type: "directive",
    category: "explanation",
    categoryLabel: "Explanation & Learning",
    description: "Takes you through a process one step at a time with explanations.",
    descriptionEs: "Te guía paso a paso a través de un procedimiento completo, explicando el porqué de cada etapa.",
    example: "WALKTHROUGH Configuración de autenticación OAuth 2.0 con Google en una aplicación Next.js paso por paso.",
    tags: ["walkthrough", "guia paso a paso", "tutorial", "proceso", "instrucciones"]
  },
  {
    id: "gem-metaphor",
    code: "METAPHOR",
    type: "directive",
    category: "explanation",
    categoryLabel: "Explanation & Learning",
    description: "Explains a concept using a creative comparison to something familiar.",
    descriptionEs: "Ilumina un concepto complejo mediante una analogía o metáfora creativa de la vida cotidiana.",
    example: "METAPHOR Explica qué es y cómo funciona la memoria RAM vs un SSD usando la metáfora de una oficina o cocina.",
    tags: ["metaphor", "metafora", "analogia", "didactico", "comparacion"]
  },
  {
    id: "gem-layers",
    code: "LAYERS",
    type: "directive",
    category: "explanation",
    categoryLabel: "Explanation & Learning",
    description: "Explains a topic at three levels: beginner, intermediate, and expert.",
    descriptionEs: "Estructura la explicación en 3 niveles de profundidad sucesivos: principiante, intermedio y experto.",
    example: "LAYERS Explica la computación cuántica y el entrelazamiento cuántico a nivel Principiante, Intermedio y Experto.",
    tags: ["layers", "niveles", "principiante", "intermedio", "avanzado"]
  },
  {
    id: "gem-masterclass",
    code: "/masterclass",
    type: "command",
    category: "explanation",
    categoryLabel: "Explanation & Learning",
    description: "Gives a deep, expert-level lesson on any topic.",
    descriptionEs: "Ofrece una clase magistral profunda de nivel experto con fundamentos, matices y casos límite.",
    example: "/masterclass Gestión de concurrencia y aislamiento de transacciones ACID en PostgreSQL bajo alta carga.",
    tags: ["masterclass", "experto", "avanzado", "leccion", "profundo"]
  },
  {
    id: "gem-teachback",
    code: "TEACHBACK",
    type: "directive",
    category: "explanation",
    categoryLabel: "Explanation & Learning",
    description: "Asks you to explain it back to check if you actually understand.",
    descriptionEs: "Te formula preguntas clave y te pide explicarle el concepto con tus propias palabras para validar tu dominio.",
    example: "TEACHBACK Explícame el concepto de Inyección de Dependencias y luego ponme a prueba haciéndome 3 preguntas situacionales.",
    tags: ["teachback", "evaluacion", "retencion", "preguntas", "aprendizaje activo"]
  },
  {
    id: "gem-visualize",
    code: "VISUALIZE",
    type: "directive",
    category: "explanation",
    categoryLabel: "Explanation & Learning",
    description: "Describes a concept as a mental image or diagram you can picture.",
    descriptionEs: "Describe el concepto visualmente como una imagen mental, esquema mental o diagrama de bloques intuitivo.",
    example: "VISUALIZE Describe mentalmente el flujo de datos del protocolo TCP Handshake de 3 vías.",
    tags: ["visualize", "diagrama mental", "imagen", "flujo", "visual"]
  },

  // =========================================================================
  // 5. Analysis & Strategy (11 códigos)
  // =========================================================================
  {
    id: "gem-compare",
    code: "/compare",
    type: "command",
    category: "analysis",
    categoryLabel: "Analysis & Strategy",
    description: "Puts any set of options side by side with a detailed breakdown.",
    descriptionEs: "Compara opciones cara a cara con una tabla desglosada de fortalezas, debilidades y veredicto.",
    example: "/compare Supabase vs Firebase para una aplicación móvil con 50,000 usuarios proyectados.",
    tags: ["compare", "comparativa", "pros y contras", "decision", "benchmarks"]
  },
  {
    id: "gem-funnelmap",
    code: "FUNNELMAP",
    type: "directive",
    category: "analysis",
    categoryLabel: "Analysis & Strategy",
    description: "Maps out each stage of a process and where things drop off.",
    descriptionEs: "Traza cada etapa de un embudo o proceso señalando los puntos de fuga y fricción donde se pierden usuarios.",
    example: "FUNNELMAP Mapea el proceso de onboarding de un SaaS B2B e identifica las 3 fugas más habituales.",
    tags: ["funnelmap", "embudo", "conversion", "onboarding", "friccion"]
  },
  {
    id: "gem-audit",
    code: "/audit",
    type: "command",
    category: "analysis",
    categoryLabel: "Analysis & Strategy",
    description: "Reviews something thoroughly and flags every issue it finds.",
    descriptionEs: "Audita exhaustivamente un documento, plan o código señalando cada falla, omisión y riesgo detectado.",
    example: "/audit Audita esta política de privacidad web respecto al cumplimiento con el RGPD y enumera infracciones: [texto]",
    tags: ["audit", "auditoria", "revision", "riesgos", "cumplimiento"]
  },
  {
    id: "gem-blindspot",
    code: "BLINDSPOT",
    type: "directive",
    category: "analysis",
    categoryLabel: "Analysis & Strategy",
    description: "Identifies what you are overlooking or not considering.",
    descriptionEs: "Señala los puntos ciegos, suposiciones no cuestionadas y variables críticas que estás pasando por alto.",
    example: "BLINDSPOT Vamos a lanzar una suscripción mensual en lugar de pago único. ¿Cuáles son nuestros puntos ciegos?",
    tags: ["blindspot", "puntos ciegos", "sesgos", "riesgo oculto", "estrategia"]
  },
  {
    id: "gem-gameboard",
    code: "GAMEBOARD",
    type: "directive",
    category: "analysis",
    categoryLabel: "Analysis & Strategy",
    description: "Maps the key players, moves, and dynamics in a competitive situation.",
    descriptionEs: "Mapea los actores clave, incentivos, jugadas posibles y dinámicas de poder en un escenario competitivo.",
    example: "GAMEBOARD Analiza el tablero competitivo entre OpenAI, Anthropic y Google en el mercado de modelos empresariales.",
    tags: ["gameboard", "teoria de juegos", "competencia", "mercado", "actores"]
  },
  {
    id: "gem-forecast",
    code: "/forecast",
    type: "command",
    category: "analysis",
    categoryLabel: "Analysis & Strategy",
    description: "Projects likely outcomes based on current trends and data.",
    descriptionEs: "Proyecta escenarios probables y tendencias futuras sustentadas en datos actuales y patrones de mercado.",
    example: "/forecast ¿Cómo impactará la adopción masiva de modelos de razonamiento (o1, R1) en el mercado laboral junior de software?",
    tags: ["forecast", "prediccion", "proyeccion", "tendencias", "futuro"]
  },
  {
    id: "gem-leverage",
    code: "LEVERAGE",
    type: "directive",
    category: "analysis",
    categoryLabel: "Analysis & Strategy",
    description: "Finds the single highest-impact move you can make right now.",
    descriptionEs: "Identifica la única acción de máximo apalancamiento que generará el 80% de los resultados con el menor esfuerzo.",
    example: "LEVERAGE Mi ecommerce tiene buen tráfico pero una tasa de conversión del 0.8%. ¿Cuál es la palanca número 1 a mover?",
    tags: ["leverage", "apalancamiento", "pareto 80/20", "alto impacto", "prioridad"]
  },
  {
    id: "gem-battlecard",
    code: "BATTLECARD",
    type: "directive",
    category: "analysis",
    categoryLabel: "Analysis & Strategy",
    description: "Creates a competitive comparison sheet against a specific rival.",
    descriptionEs: "Genera una ficha táctica de batalla comercial (Battlecard) con argumentos para vencer a un rival directo.",
    example: "BATTLECARD Crea una battlecard de ventas para posicionar Notion vs Monday.com ante un cliente corporativo.",
    tags: ["battlecard", "ventas", "diferenciacion", "competidores", "posicionamiento"]
  },
  {
    id: "gem-diagnose",
    code: "/diagnose",
    type: "command",
    category: "analysis",
    categoryLabel: "Analysis & Strategy",
    description: "Identifies the root cause of a problem instead of just the symptoms.",
    descriptionEs: "Diagnostica la causa raíz estructural de un problema en lugar de limitarse a describir los síntomas superficiales.",
    example: "/diagnose Nuestro equipo de ingeniería entrega tarde en cada sprint a pesar de hacer horas extras. Diagnostica la causa raíz.",
    tags: ["diagnose", "causa raiz", "diagnostico", "problemas", "analisis"]
  },
  {
    id: "gem-playbook",
    code: "PLAYBOOK",
    type: "directive",
    category: "analysis",
    categoryLabel: "Analysis & Strategy",
    description: "Builds a step-by-step action plan for a specific goal.",
    descriptionEs: "Diseña un manual de operaciones y plan de acción táctico paso a paso para conseguir un objetivo concreto.",
    example: "PLAYBOOK Diseña un playbook para la gestión de crisis en redes sociales ante una fuga accidental de datos.",
    tags: ["playbook", "plan de accion", "procedimiento", "sop", "operaciones"]
  },
  {
    id: "gem-costbenefit",
    code: "COSTBENEFIT",
    type: "directive",
    category: "analysis",
    categoryLabel: "Analysis & Strategy",
    description: "Weighs the upside against the downside of any decision.",
    descriptionEs: "Pesa rigurosamente los beneficios esperados frente a costos directos, costos ocultos y riesgos de una decisión.",
    example: "COSTBENEFIT Evalúa migrar una infraestructura monolítica en AWS EC2 hacia una arquitectura Serverless en Lambda.",
    tags: ["costbenefit", "costo beneficio", "roi", "pros y contras", "decision"]
  },

  // =========================================================================
  // 6. Creative & Content (11 códigos)
  // =========================================================================
  {
    id: "gem-future",
    code: "future",
    type: "directive",
    category: "creative",
    categoryLabel: "Creative & Content",
    description: "Projects your situation forward in time and predicts the likely outcome.",
    descriptionEs: "Proyecta tu situación actual hacia el futuro a 1, 3 y 5 años prediciendo desenlaces probables.",
    example: "future Si mantengo mi ritmo actual de gasto de marketing en anuncios de Meta sin diversificar canales, ¿qué pasará en 24 meses?",
    tags: ["future", "futuro", "proyeccion", "consecuencias", "tiempo"]
  },
  {
    id: "gem-whatif",
    code: "WHATIF",
    type: "directive",
    category: "creative",
    categoryLabel: "Creative & Content",
    description: "Explores an alternate scenario and plays out what would happen.",
    descriptionEs: "Explora un escenario contrafactual alternativo ('¿Qué pasaría si...?') y describe sus repercusiones completas.",
    example: "WHATIF ¿Qué pasaría si Apple decidiera hacer su propio buscador nativo y retirara a Google como motor por defecto en Safari?",
    tags: ["whatif", "escenarios", "alternativas", "hipotesis", "creatividad"]
  },
  {
    id: "gem-scenarioplay",
    code: "SCENARIOPLAY",
    type: "directive",
    category: "creative",
    categoryLabel: "Creative & Content",
    description: "Simulates a real situation with variables you can change.",
    descriptionEs: "Simula interactivamente una situación real permitiéndote variar parámetros y observar las reacciones.",
    example: "SCENARIOPLAY Simula una negociación salarial conmigo. Tú eres un jefe duro pero justo. Empieza saludándome.",
    tags: ["scenarioplay", "simulacion", "roleplay", "negociacion", "variables"]
  },
  {
    id: "gem-angle",
    code: "/angle",
    type: "command",
    category: "creative",
    categoryLabel: "Creative & Content",
    description: "Finds a fresh or unexpected perspective on a familiar topic.",
    descriptionEs: "Descubre un ángulo o perspectiva fresca, provocativa e innovadora sobre un tema tradicionalmente monótono.",
    example: "/angle Encuentra 3 ángulos inesperados para hablar sobre 'Ahorro para el retiro' dirigidos a la Generación Z.",
    tags: ["angle", "angulo", "perspectiva", "novedad", "gancho"]
  },
  {
    id: "gem-captiongen",
    code: "CAPTIONGEN",
    type: "directive",
    category: "creative",
    categoryLabel: "Creative & Content",
    description: "Generates social media captions ready to copy and paste.",
    descriptionEs: "Genera copys y textos para publicaciones en redes sociales listos para copiar, pegar y publicar.",
    example: "CAPTIONGEN Genera 3 captions de Instagram para anunciar el relanzamiento de nuestra marca de café de especialidad.",
    tags: ["captiongen", "copy redes", "instagram", "linkedin", "social media"]
  },
  {
    id: "gem-headlinegen",
    code: "HEADLINEGEN",
    type: "directive",
    category: "creative",
    categoryLabel: "Creative & Content",
    description: "Creates multiple headline options ranked by impact.",
    descriptionEs: "Genera múltiples alternativas de titulares ordenadas por su potencial de impacto y tasa de clics (CTR).",
    example: "HEADLINEGEN Genera 10 titulares clasificados por impacto para un post sobre 'Cómo automatizar tus finanzas personales'.",
    tags: ["headlinegen", "titulares", "headlines", "click through", "impacto"]
  },
  {
    id: "gem-adspin",
    code: "/adspin",
    type: "command",
    category: "creative",
    categoryLabel: "Creative & Content",
    description: "Rewrites a message as a short, punchy ad.",
    descriptionEs: "Transforma un mensaje o comunicado formal en un anuncio publicitario directo, persuasivo y comercial.",
    example: "/adspin Convierte este párrafo sobre nuestra herramienta de facturación en un copy de anuncio publicitario para Meta Ads: [texto]",
    tags: ["adspin", "anuncio", "publicidad", "ads", "copywriting"]
  },
  {
    id: "gem-viraltest",
    code: "VIRALTEST",
    type: "directive",
    category: "creative",
    categoryLabel: "Creative & Content",
    description: "Scores an idea on its likelihood of getting shared.",
    descriptionEs: "Evalúa y puntúa una idea de 1 a 100 según su probabilidad de volverse viral y compartirse en redes.",
    example: "VIRALTEST Evalúa esta idea para un reto en TikTok: 'Vivir 7 días sin usar plásticos de un solo uso grabando el diario'.",
    tags: ["viraltest", "viralidad", "compartir", "redes", "engagement"]
  },
  {
    id: "gem-repurpose",
    code: "REPURPOSE",
    type: "directive",
    category: "creative",
    categoryLabel: "Creative & Content",
    description: "Takes one piece of content and turns it into five different formats.",
    descriptionEs: "Toma una sola pieza de contenido matriz y la convierte en 5 formatos distintos (hilo, carrusel, email, reel, post).",
    example: "REPURPOSE Toma este extracto de podcast y crea: 1 tweet, 1 post de LinkedIn, 1 guion corto de TikTok y 1 newsletter: [texto]",
    tags: ["repurpose", "reutilizar", "formatos", "omnicanal", "contenido"]
  },
  {
    id: "gem-mashup",
    code: "/mashup",
    type: "command",
    category: "creative",
    categoryLabel: "Creative & Content",
    description: "Combines two unrelated ideas into something new.",
    descriptionEs: "Fusiona dos conceptos o industrias aparentemente sin relación para dar a luz una propuesta innovadora.",
    example: "/mashup Combina la disciplina del entrenamiento de Jiu-Jitsu con la gestión de proyectos de desarrollo de software.",
    tags: ["mashup", "fusion", "innovacion", "creatividad", "combinar"]
  },
  {
    id: "gem-plottwist",
    code: "PLOTTWIST",
    type: "directive",
    category: "creative",
    categoryLabel: "Creative & Content",
    description: "Adds an unexpected turn or reversal to any idea or story.",
    descriptionEs: "Añade un giro dramático inesperado o una inversión sorpresiva a una narrativa, historia o argumento.",
    example: "PLOTTWIST Desarrolla un giro de trama inesperado para un relato sobre un detective que investiga una IA supuestamente defectuosa.",
    tags: ["plottwist", "giro de guion", "sorpresa", "narrativa", "storytelling"]
  },

  // =========================================================================
  // 7. Thinking & Reasoning (11 códigos)
  // =========================================================================
  {
    id: "gem-inversion",
    code: "INVERSION",
    type: "directive",
    category: "thinking",
    categoryLabel: "Thinking & Reasoning",
    description: "Flips a problem upside down and solves it from the opposite direction.",
    descriptionEs: "Invierte el problema por completo: en lugar de buscar cómo triunfar, analiza cómo asegurar un fracaso estrepitoso.",
    example: "INVERSION ¿Cómo podríamos garantizar el fracaso total de la adopción de una nueva herramienta interna en la empresa?",
    tags: ["inversion", "pensamiento inverso", "charlie munger", "estrategia"]
  },
  {
    id: "gem-premortem",
    code: "PREMORTEM",
    type: "directive",
    category: "thinking",
    categoryLabel: "Thinking & Reasoning",
    description: "Imagines a plan already failed and works backward to find why.",
    descriptionEs: "Imagina que nos encontramos en el futuro y el proyecto ha sido una catástrofe total; deduce retrospectivamente qué falló.",
    example: "PREMORTEM Es 2027 y nuestra startup de SaaS ha quebrado. Haz un análisis post-mortem detallado de qué salió mal.",
    tags: ["premortem", "mitigacion de riesgos", "analisis de fallos", "planificacion"]
  },
  {
    id: "gem-stakeholders",
    code: "/stakeholders",
    type: "command",
    category: "thinking",
    categoryLabel: "Thinking & Reasoning",
    description: "Identifies everyone affected by a decision and what they care about.",
    descriptionEs: "Mapea a todas las partes interesadas (stakeholders) afectadas por una decisión y cuáles son sus incentivos y miedos.",
    example: "/stakeholders Mapea a los afectados por volver al modelo 100% presencial en una tecnológica de 500 personas.",
    tags: ["stakeholders", "partes interesadas", "incentivos", "cultura", "politica"]
  },
  {
    id: "gem-rootcause",
    code: "ROOTCAUSE",
    type: "directive",
    category: "thinking",
    categoryLabel: "Thinking & Reasoning",
    description: "Drills down past the surface to find the real source of a problem.",
    descriptionEs: "Aplica la metodología de los 5 Porqués para perforar los síntomas superficiales y hallar el origen raíz.",
    example: "ROOTCAUSE El equipo de ventas no está utilizando el nuevo CRM. Aplica los 5 Porqués para encontrar la causa raíz.",
    tags: ["rootcause", "5 porques", "causa fundamental", "resolucion de problemas"]
  },
  {
    id: "gem-domino",
    code: "DOMINO",
    type: "directive",
    category: "thinking",
    categoryLabel: "Thinking & Reasoning",
    description: "Maps the chain reaction of consequences from a single action.",
    descriptionEs: "Traza el efecto dominó y las consecuencias de segundo y tercer orden derivadas de una única decisión.",
    example: "DOMINO Mapea la reacción en cadena de consecuencias de segundo y tercer orden si aumentamos nuestros precios un 30%.",
    tags: ["domino", "efecto domino", "segundo orden", "consecuencias", "impacto"]
  },
  {
    id: "gem-thinktank",
    code: "THINKTANK",
    type: "directive",
    category: "thinking",
    categoryLabel: "Thinking & Reasoning",
    description: "Generates multiple expert perspectives on a single question.",
    descriptionEs: "Convoca una mesa redonda simulada con 4 expertos de disciplinas disímiles para debatir una misma pregunta.",
    example: "THINKTANK Debate sobre la renta básica universal desde las ópticas de: un economista austriaco, una socióloga, un tecnólogo y un filósofo ético.",
    tags: ["thinktank", "debate", "expertos", "multiples perspectivas", "filosofia"]
  },
  {
    id: "gem-contrarian",
    code: "CONTRARIAN",
    type: "directive",
    category: "thinking",
    categoryLabel: "Thinking & Reasoning",
    description: "Argues the opposite of the popular opinion with full conviction.",
    descriptionEs: "Argumenta con rigor y convicción absoluta la postura opuesta a la opinión mayoritaria o consenso general.",
    example: "CONTRARIAN Defiende con argumentos sólidos la postura contraria a la creencia de que 'el trabajo remoto es más productivo para todos'.",
    tags: ["contrarian", "abogado del diablo", "debate", "pensamiento critico"]
  },
  {
    id: "gem-constraints",
    code: "CONSTRAINTS",
    type: "directive",
    category: "thinking",
    categoryLabel: "Thinking & Reasoning",
    description: "Solves a problem within specific limits you set.",
    descriptionEs: "Obliga a resolver el dilema respetando restricciones extremas (ej. cero presupuesto, 48 horas o una persona).",
    example: "CONSTRAINTS Diseña un plan para validar la demanda de un nuevo producto con un presupuesto máximo de $50 USD y 5 días de plazo.",
    tags: ["constraints", "restricciones", "creatividad forzada", "presupuesto"]
  },
  {
    id: "gem-tradeoffs",
    code: "TRADEOFFS",
    type: "directive",
    category: "thinking",
    categoryLabel: "Thinking & Reasoning",
    description: "Lays out exactly what you gain and lose with each option.",
    descriptionEs: "Desglosa explícitamente los compromisos y renuncias (trade-offs): qué ganas y qué estás sacrificando con cada opción.",
    example: "TRADEOFFS Analiza los trade-offs de elegir TypeScript estricto frente a JavaScript puro en un prototipo inicial.",
    tags: ["tradeoffs", "costo de oportunidad", "renuncias", "decisiones"]
  },
  {
    id: "gem-frameit",
    code: "FRAMEIT",
    type: "directive",
    category: "thinking",
    categoryLabel: "Thinking & Reasoning",
    description: "Restates a problem in a new way that makes the answer clearer.",
    descriptionEs: "Reformula la pregunta inicial con un encuadre (framing) distinto que hace la solución evidente.",
    example: "FRAMEIT En lugar de '¿Cómo hacemos que los empleados lean nuestros manuales?', reformula el problema desde la raíz.",
    tags: ["frameit", "reencuadre", "reframing", "claridad", "enfoque"]
  },
  {
    id: "gem-blindtest",
    code: "BLINDTEST",
    type: "directive",
    category: "thinking",
    categoryLabel: "Thinking & Reasoning",
    description: "Removes labels and bias so you can evaluate options on merit alone.",
    descriptionEs: "Despoja a las alternativas de marcas, sesgos o etiquetas evaluando las propuestas puramente por su mérito intrínseco.",
    example: "BLINDTEST Presenta y evalúa dos candidatos para el puesto de CTO como 'Opción A' y 'Opción B' despojándolos de nombres y marcas de prestigio.",
    tags: ["blindtest", "prueba a ciegas", "sin sesgos", "objetividad", "merito"]
  },

  // =========================================================================
  // 8. Formatting & Output (11 códigos)
  // =========================================================================
  {
    id: "gem-snapshot",
    code: "SNAPSHOT",
    type: "directive",
    category: "formatting",
    categoryLabel: "Formatting & Output",
    description: "Gives a quick, high-level overview in under 50 words.",
    descriptionEs: "Genera una síntesis ultracompacta de alto nivel en menos de 50 palabras exactas.",
    example: "SNAPSHOT Resume la crisis financiera de 2008 y sus lecciones fundamentales en menos de 50 palabras.",
    tags: ["snapshot", "ultracorto", "50 palabras", "resumen rapido"]
  },
  {
    id: "gem-matrix",
    code: "MATRIX",
    type: "directive",
    category: "formatting",
    categoryLabel: "Formatting & Output",
    description: "Organizes options into a grid with scored criteria.",
    descriptionEs: "Estructura las alternativas en una matriz tabular con criterios ponderados y calificaciones del 1 al 10.",
    example: "MATRIX Crea una matriz comparativa con criterios ponderados entre React, Vue y Svelte para un proyecto a 5 años.",
    tags: ["matrix", "matriz de decision", "tabla", "ponderacion", "criterios"]
  },
  {
    id: "gem-scorecard",
    code: "SCORECARD",
    type: "directive",
    category: "formatting",
    categoryLabel: "Formatting & Output",
    description: "Rates each option on multiple factors with a final score.",
    descriptionEs: "Califica cada opción evaluando múltiples factores críticos con un puntaje final consolidado.",
    example: "SCORECARD Evalúa el rendimiento de nuestra landing page según: Claridad, Velocidad, Propuesta de Valor y Fricción.",
    tags: ["scorecard", "evaluacion", "puntajes", "tarjeta de calificacion"]
  },
  {
    id: "gem-dashboard",
    code: "DASHBOARD",
    type: "directive",
    category: "formatting",
    categoryLabel: "Formatting & Output",
    description: "Summarizes key metrics and status indicators in one view.",
    descriptionEs: "Simula un panel de control con métricas clave, indicadores de estado (KPIs) y señales de alerta.",
    example: "DASHBOARD Crea una vista de dashboard semanal para el CEO de una empresa de comercio electrónico.",
    tags: ["dashboard", "metricas", "kpis", "panel de control", "indicadores"]
  },
  {
    id: "gem-briefing",
    code: "BRIEFING",
    type: "directive",
    category: "formatting",
    categoryLabel: "Formatting & Output",
    description: "Formats the response as a short executive brief.",
    descriptionEs: "Formatea la respuesta bajo la estructura estricta de un informe ejecutivo para directores (Briefing).",
    example: "BRIEFING Prepara un informe ejecutivo sobre el impacto de la nueva legislación tributaria en nuestra empresa.",
    tags: ["briefing", "ejecutivo", "resumen directivo", "memorandum"]
  },
  {
    id: "gem-onesheet",
    code: "ONESHEET",
    type: "directive",
    category: "formatting",
    categoryLabel: "Formatting & Output",
    description: "Compresses everything into a single-page reference sheet.",
    descriptionEs: "Comprime todos los aspectos de un tema en una hoja de referencia de una sola plana con secciones visuales.",
    example: "ONESHEET Todo lo necesario para dominar expresiones regulares (RegEx) en una hoja de consulta rápida.",
    tags: ["onesheet", "hoja de trucos", "referencia", "sintesis"]
  },
  {
    id: "gem-actionplan",
    code: "ACTIONPLAN",
    type: "directive",
    category: "formatting",
    categoryLabel: "Formatting & Output",
    description: "Turns the answer into a prioritized list of next steps with owners.",
    descriptionEs: "Traduce la respuesta en una lista de próximos pasos secuenciados por prioridad, con responsables y plazos.",
    example: "ACTIONPLAN Transforma las conclusiones de esta reunión de producto en un plan de acción para los próximos 14 días.",
    tags: ["actionplan", "plan de accion", "pasos siguientes", "responsables", "plazos"]
  },
  {
    id: "gem-cheatsheet",
    code: "CHEATSHEET",
    type: "directive",
    category: "formatting",
    categoryLabel: "Formatting & Output",
    description: "Creates a quick-reference guide you can save and reuse.",
    descriptionEs: "Crea una guía de referencia rápida tipo acordeón con atajos y comandos lista para guardar y reutilizar.",
    example: "CHEATSHEET Comandos esenciales de Docker y Docker Compose para desarrollo diario.",
    tags: ["cheatsheet", "acordeon", "comandos", "atajos", "referencia rapida"]
  },
  {
    id: "gem-catalog",
    code: "CATALOG",
    type: "directive",
    category: "formatting",
    categoryLabel: "Formatting & Output",
    description: "Organizes items into a structured, browsable list with details.",
    descriptionEs: "Organiza elementos en un catálogo estructurado, navegable e indexado con especificaciones técnicas.",
    example: "CATALOG Catálogo de patrones de diseño de software GoF clasificados por Creacionales, Estructurales y de Comportamiento.",
    tags: ["catalog", "catalogo", "inventario", "lista estructurada"]
  },
  {
    id: "gem-wireframe",
    code: "/wireframe",
    type: "command",
    category: "formatting",
    categoryLabel: "Formatting & Output",
    description: "Describes a page or screen layout in structured sections.",
    descriptionEs: "Describe en detalle el diseño visual, componentes y arquitectura de bloques de una pantalla o página web.",
    example: "/wireframe Diseña el esquema y distribución de secciones para la página de Checkout de una tienda online moderna.",
    tags: ["wireframe", "ui", "ux", "maqueta", "pantallas", "layout"]
  },
  {
    id: "gem-canvas",
    code: "CANVAS",
    type: "directive",
    category: "formatting",
    categoryLabel: "Formatting & Output",
    description: "Opens the response in a side panel you can edit and export.",
    descriptionEs: "Activa el modo de documento Canvas en el panel lateral de Gemini para edición directa, formateo y exportación.",
    example: "CANVAS Redacta un contrato de prestación de servicios de consultoría informática listo para editar y descargar.",
    tags: ["canvas", "panel lateral", "documento", "editor", "exportar"]
  },

  // =========================================================================
  // 9. Utility & Power Commands (11 códigos)
  // =========================================================================
  {
    id: "gem-persona",
    code: "/persona",
    type: "command",
    category: "utility",
    categoryLabel: "Utility & Power Commands",
    description: "Makes Gemini respond as a specific type of expert or character.",
    descriptionEs: "Ordena a Gemini asumir la personalidad, conocimiento profundo y sesgos de un experto o personaje definido.",
    example: "/persona Experto en Seguridad Ofensiva con 15 años de experiencia. Examina la siguiente configuración de Nginx: [conf]",
    tags: ["persona", "rol", "experto", "personaje", "comportamiento"]
  },
  {
    id: "gem-template",
    code: "/template",
    type: "command",
    category: "utility",
    categoryLabel: "Utility & Power Commands",
    description: "Generates a reusable template for any type of document or message.",
    descriptionEs: "Genera una plantilla modular y reutilizable con corchetes de reemplazo para cualquier tipo de comunicación.",
    example: "/template Crea una plantilla para anunciar a los clientes un mantenimiento programado con corte de servicio.",
    tags: ["template", "plantilla", "reutilizable", "variables", "formato"]
  },
  {
    id: "gem-chain",
    code: "/chain",
    type: "command",
    category: "utility",
    categoryLabel: "Utility & Power Commands",
    description: "Links multiple instructions together so they run in sequence.",
    descriptionEs: "Encadena múltiples instrucciones secuenciales ejecutando la segunda sobre la salida exacta de la primera.",
    example: "/chain 1. Extrae los argumentos principales de este texto. 2. Encuentra contraargumentos a cada uno. 3. Redacta una refutación.",
    tags: ["chain", "cadena de instrucciones", "secuencia", "pipeline", "paso a paso"]
  },
  {
    id: "gem-split",
    code: "/split",
    type: "command",
    category: "utility",
    categoryLabel: "Utility & Power Commands",
    description: "Breaks a long response into smaller, numbered sections.",
    descriptionEs: "Fracciona respuestas extensas en entregas numeradas, autónomas y fáciles de digerir.",
    example: "/split Explica la arquitectura de Microservicios dividiendo la respuesta en 4 módulos breves y autónomos.",
    tags: ["split", "dividir", "secciones", "fraccionar", "paso a paso"]
  },
  {
    id: "gem-extract",
    code: "/extract",
    type: "command",
    category: "utility",
    categoryLabel: "Utility & Power Commands",
    description: "Pulls specific data points out of a block of text.",
    descriptionEs: "Extrae de forma quirúrgica entidades, fechas, montos o parámetros específicos de un texto extenso a JSON.",
    example: "/extract Extrae todas las fechas, montos monetarios y nombres de empresas del siguiente correo en formato JSON: [texto]",
    tags: ["extract", "extraccion", "entidades", "json", "datos estructurados"]
  },
  {
    id: "gem-track",
    code: "/track",
    type: "command",
    category: "utility",
    categoryLabel: "Utility & Power Commands",
    description: "Sets up a structured way to monitor changes or progress over time.",
    descriptionEs: "Configura un registro estructurado con marcas de tiempo para monitorear evolución y progresos a lo largo del tiempo.",
    example: "/track Crea un sistema de seguimiento semanal para registrar el progreso de pérdida de grasa corporal y fuerza.",
    tags: ["track", "seguimiento", "progreso", "evolucion", "monitoreo"]
  },
  {
    id: "gem-batch",
    code: "/batch",
    type: "command",
    category: "utility",
    categoryLabel: "Utility & Power Commands",
    description: "Processes multiple items at once instead of one at a time.",
    descriptionEs: "Procesa en lote múltiples elementos simultáneamente aplicando la misma regla a cada uno.",
    example: "/batch Toma esta lista de 10 títulos de artículos y genera una meta-descripción SEO de 140 caracteres para cada uno: [lista]",
    tags: ["batch", "lotes", "masivo", "automatizacion", "eficiencia"]
  },
  {
    id: "gem-gemify",
    code: "/gemify",
    type: "command",
    category: "utility",
    categoryLabel: "Utility & Power Commands",
    description: "Rewrites a prompt to get better results specifically from Gemini.",
    descriptionEs: "Reescribe y optimiza cualquier instrucción para aprovechar al máximo las fortalezas cognitivas de Gemini.",
    example: "/gemify Optimiza el siguiente prompt básico para que Gemini proporcione un análisis exhaustivo: 'Escribe sobre el cambio climático'",
    tags: ["gemify", "optimizar prompt", "gemini", "meta prompt", "rendimiento"]
  },
  {
    id: "gem-lingua",
    code: "/lingua",
    type: "command",
    category: "utility",
    categoryLabel: "Utility & Power Commands",
    description: "Responds in any language you specify.",
    descriptionEs: "Fuerza la respuesta en el idioma, dialecto o registro idiomático específico que indiques.",
    example: "/lingua Alemán formal de negocios (Sie). Traduce y adapta esta propuesta comercial para una junta directiva en Múnich.",
    tags: ["lingua", "idiomas", "traduccion", "localizacion", "dialecto"]
  },
  {
    id: "gem-contextdump",
    code: "/contextdump",
    type: "command",
    category: "utility",
    categoryLabel: "Utility & Power Commands",
    description: "Shows everything Gemini currently knows about your conversation.",
    descriptionEs: "Muestra un vaciado de contexto con todas las instrucciones, variables y recuerdos que Gemini retiene en la sesión actual.",
    example: "/contextdump Resume todo lo que has asumido, aprendido y guardado sobre mi perfil y requerimientos en este chat.",
    tags: ["contextdump", "memoria", "contexto", "sesion", "depuracion"]
  },
  {
    id: "gem-memorize",
    code: "/memorize",
    type: "command",
    category: "utility",
    categoryLabel: "Utility & Power Commands",
    description: "Tells Gemini to remember a fact or preference for the rest of the chat.",
    descriptionEs: "Instruye a Gemini a fijar permanentemente en su memoria de chat una regla, dato o preferencia de estilo.",
    example: "/memorize Recuerda para siempre en este chat que soy desarrollador Senior en Go y PostgreSQL; no me expliques conceptos básicos.",
    tags: ["memorize", "memoria fija", "preferencias", "persistencia", "reglas"]
  }
];
