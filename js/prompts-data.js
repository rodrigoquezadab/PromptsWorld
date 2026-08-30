/**
 * PromptHub - Catálogo de Prompts Profesionales Curados
 * Cada prompt incluye variables parametrizables entre corchetes [VARIABLE]
 */

const PROMPTS_DATA = [
  // ==========================================
  // 1. DESARROLLO & PROGRAMACIÓN
  // ==========================================
  {
    id: "dev-01",
    title: "Revisor y Auditor de Código Senior",
    category: "desarrollo",
    categoryLabel: "Desarrollo",
    icon: "code",
    tags: ["Code Review", "Clean Code", "Seguridad", "Refactor"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o", "DeepSeek-V3"],
    description: "Analiza código en busca de vulnerabilidades, cuellos de botella de rendimiento, violaciones de principios SOLID y malas prácticas.",
    variables: [
      { name: "LENGUAJE", label: "Lenguaje o Framework", placeholder: "ej. TypeScript / Node.js" },
      { name: "ENFOQUE", label: "Enfoque Principal", placeholder: "ej. Rendimiento, Seguridad y Legibilidad" },
      { name: "CODIGO", label: "Fragmento de Código", placeholder: "Pega aquí tu código...", multiline: true }
    ],
    template: `Actúa como un Ingeniero de Software Principal y Auditor de Seguridad con más de 15 años de experiencia en [LENGUAJE].

Tu tarea es realizar una revisión exhaustiva del siguiente código, priorizando [ENFOQUE].

Código a auditar:
\`\`\`
[CODIGO]
\`\`\`

Por favor, estructura tu análisis en el siguiente formato:
1. **Evaluación General**: Calidad del código (1-10) y resumen ejecutivo en 3 líneas.
2. **Vulnerabilidades y Riesgos Críticos**: Fallos de seguridad, posibles fugas de memoria o condiciones de carrera.
3. **Optimización y Rendimiento**: Complejidad algorítmica (Big O actual vs. optimizada) y cuellos de botella.
4. **Principios SOLID & Clean Code**: Sugerencias de modularidad, nombres y mantenibilidad.
5. **Código Refactorizado**: Versión lista para producción, comentada y tipada rigurosamente.`
  },
  {
    id: "dev-02",
    title: "Generador de Suites de Tests Unitarios e Integración",
    category: "desarrollo",
    categoryLabel: "Desarrollo",
    icon: "bug",
    tags: ["Testing", "Jest", "PyTest", "TDD", "Edge Cases"],
    models: ["ChatGPT-4o", "Claude 3.5 Sonnet", "Gemini 1.5 Pro"],
    description: "Genera pruebas exhaustivas cubriendo casos felices, límites (edge cases), fallos esperados y mocks.",
    variables: [
      { name: "FRAMEWORK_TEST", label: "Framework de Pruebas", placeholder: "ej. Vitest / Jest / PyTest" },
      { name: "FUNCION_O_MODULO", label: "Función o Módulo a Testear", placeholder: "Pega el código de la función...", multiline: true }
    ],
    template: `Eres un Ingeniero Especialista en QA y Testing Automatizado.

Escribe una suite completa de pruebas unitarias usando [FRAMEWORK_TEST] para el siguiente código:

\`\`\`
[FUNCION_O_MODULO]
\`\`\`

Requisitos indispensables:
- Cubrir el 100% de los caminos lógicos (happy path, error handling y edge cases).
- Probar valores límite (nulos, vacíos, desbordamientos, tipos inválidos).
- Usar mocks para cualquier llamada externa, red o base de datos.
- Estructurar cada test con el patrón Arrange-Act-Assert (AAA) o Given-When-Then.
- Incluir nombres de tests descriptivos que expliquen el comportamiento esperado.`
  },
  {
    id: "dev-03",
    title: "Arquitecto de Sistemas & Diagrama de Infraestructura",
    category: "desarrollo",
    categoryLabel: "Desarrollo",
    icon: "server",
    tags: ["Arquitectura", "Cloud", "Microservicios", "Mermaid"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Diseña arquitecturas escalables, tolerantes a fallos y genera diagramas Mermaid listos para documentar.",
    variables: [
      { name: "SISTEMA", label: "Tipo de Sistema", placeholder: "ej. Plataforma de Streaming de Video en Vivo" },
      { name: "ESCALABILIDAD", label: "Carga esperada", placeholder: "ej. 500,000 usuarios concurrentes, 10k req/seg" },
      { name: "RESTRICCIONES", label: "Tecnologías o Presupuesto", placeholder: "ej. AWS, Kubernetes, Postgres, Redis" }
    ],
    template: `Actúa como un Arquitecto Cloud y de Sistemas Distribuidos de nivel Staff.

Diseña la arquitectura para: [SISTEMA].
Métricas esperadas: [ESCALABILIDAD].
Restricciones y Stack preferido: [RESTRICCIONES].

Entrega tu propuesta con:
1. **Arquitectura de Alto Nivel**: Explicación de capas (Frontend, API Gateway, Microservicios, Cache, DB, Event Queue).
2. **Diagrama Mermaid**: Código de diagrama en sintaxis \`mermaid\` (flowchart o C4).
3. **Estrategia de Datos y Caching**: Consistencia (ACID vs BASE), particionamiento y replicación.
4. **Manejo de Fallos**: Circuit breakers, colas de mensajes fallidos (DLQ), rate limiting y auto-scaling.
5. **Trade-offs y Estimación de Costos**: Pros y contras de las decisiones de diseño tomadas.`
  },
  {
    id: "dev-04",
    title: "Explicador y Optimizador de Consultas SQL Complejas",
    category: "desarrollo",
    categoryLabel: "Desarrollo",
    icon: "database",
    tags: ["SQL", "PostgreSQL", "MySQL", "Index", "Performance"],
    models: ["ChatGPT-4o", "DeepSeek-V3"],
    description: "Desglosa consultas SQL pesadas, identifica escaneos secuenciales y propone índices y reescritura optimizada.",
    variables: [
      { name: "MOTOR_DB", label: "Motor de Base de Datos", placeholder: "ej. PostgreSQL 16" },
      { name: "TABLAS_SCHEMA", label: "Esquema básico de tablas", placeholder: "ej. users(id, email), orders(id, user_id, amount, created_at)" },
      { name: "CONSULTA_SQL", label: "Consulta SQL lenta", placeholder: "Pega la consulta SQL...", multiline: true }
    ],
    template: `Eres un Administrador de Bases de Datos (DBA) y afinador de rendimiento SQL experto en [MOTOR_DB].

Esquema de referencia:
\`\`\`sql
[TABLAS_SCHEMA]
\`\`\`

Consulta a optimizar:
\`\`\`sql
[CONSULTA_SQL]
\`\`\`

Por favor realiza:
1. **Explicación Paso a Paso**: Qué hace exactamente la consulta y dónde radica el cuello de botella.
2. **Estrategia de Indexación**: Índices compuestos o parciales recomendados (con sintaxis CREATE INDEX exacta).
3. **Consulta Optimizada**: Versión reescrita (usando CTEs, Window Functions o JOINS eficientes si aplica).
4. **Análisis de Impacto**: Comparación estimada de I/O y uso de memoria.`
  },

  // ==========================================
  // 2. REDACCIÓN & CONTENIDO
  // ==========================================
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
    template: `Actúa como un Editor Senior de Contenidos y Estratega SEO de primer nivel.

Escribe un artículo completo y de alta autoridad sobre la palabra clave: "[PALABRA_CLAVE]".
Intención de búsqueda: [INTENCION_BUSQUEDA].
Tono de voz: [TONO].

Reglas estrictas de redacción:
- **Evita clichés de IA**: No uses frases como "en el vertiginoso mundo actual", "es fundamental destacar", "en conclusión", "sumérgete en".
- **Estructura semántica**: Usa un H1 irresistible, H2s lógicos orientados a preguntas del usuario y H3s accionables.
- **Formato escaneable**: Párrafos cortos (máx 3-4 líneas), listas con viñetas concisas y llamadas de atención en negrita.
- **Contenido con experiencia real**: Añade ejemplos concretos, mini casos de uso y recomendaciones prácticas directas.
- **Sección FAQ**: Añade 4 preguntas frecuentes optimizadas para fragmentos destacados (Rich Snippets).`
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
      { name: "TEMA_O_HISTORIA", label: "Tema o Lección a Compartir", placeholder: "ej. Cómo pasé de 0 a 10,000 usuarios en mi SaaS sin pagar publicidad" },
      { name: "AUDIENCIA", label: "Público Objetivo", placeholder: "ej. Emprendedores digitales, programadores indie" }
    ],
    template: `Eres un Ghostwriter de élite especializado en crecimiento orgánico en LinkedIn y X.

Crea dos versiones de publicación sobre: [TEMA_O_HISTORIA]
Dirigido a: [AUDIENCIA].

Formato requerido:
1. **Opción A (Post de LinkedIn)**:
   - Gancho (primeras 2 líneas que obliguen a pulsar 'Ver más').
   - Estructura de historia en formato problema -> revelación -> 5 pasos accionables -> resultado.
   - Espaciado limpio para fácil lectura móvil.
   - Pregunta final para detonar comentarios de calidad.

2. **Opción B (Hilo de X / Twitter de 6-8 tweets)**:
   - Tweet 1 (Hook con promesa de alto valor o dato contraintuitivo).
   - Tweets 2-6 (Desglose paso a paso con viñetas concisas).
   - Tweet final (Resumen en 1 tweet + CTA para retweet o seguir).`
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
      { name: "TEMA_VIDEO", label: "Tema del Video", placeholder: "ej. 5 Errores que cometen todos los programadores juniors al buscar trabajo" },
      { name: "FORMATO", label: "Formato y Duración", placeholder: "ej. Video Corto (Short/Reel de 60 segundos) o Video Largo (8 minutos)" }
    ],
    template: `Actúa como un Guionista Audiovisual y Director de Contenido especializado en retención de audiencia para [FORMATO].

Tema del video: [TEMA_VIDEO].

Escribe el guion dividiéndolo en dos columnas (Audio / Visual):
- **00:00 - 00:05 (El Hook)**: Acción visual impactante + frase que plantea una pregunta urgente o destruye un mito.
- **00:05 - 00:20 (El Conflicto / Setup)**: Por qué la mayoría fracasa o qué consecuencias tiene ignorar esto.
- **Cuerpo Central**: Puntos de valor explicados de forma dinámica, indicando cambios de plano (B-roll, zooms, textos en pantalla).
- **Cierre & CTA natural**: Conexión con un siguiente video o acción sin sonar a spam.`
  },

  // ==========================================
  // 3. MARKETING & NEGOCIOS
  // ==========================================
  {
    id: "mkt-01",
    title: "Generador de Buyer Persona y Mapa de Empatía Profundo",
    category: "marketing",
    categoryLabel: "Marketing",
    icon: "target",
    tags: ["Buyer Persona", "Estrategia", "Investigación", "Ventas"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Construye perfiles psicográficos detallados, frustraciones ocultas, desencadenantes de compra y objeciones.",
    variables: [
      { name: "PRODUCTO_SERVICIO", label: "Tu Producto o Servicio", placeholder: "ej. Plataforma CRM automatizada para agencias inmobiliarias" },
      { name: "MERCADO", label: "Mercado o Nicho", placeholder: "ej. Pequeñas y medianas inmobiliarias en España y Latinoamérica" }
    ],
    template: `Eres un Director de Investigación de Mercado y Psicología del Consumidor.

Desarrolla el perfil detallado del Buyer Persona ideal para:
Producto: [PRODUCTO_SERVICIO]
Mercado: [MERCADO]

Incluye:
1. **Ficha Demográfica y de Rol**: Nombre ficticio, edad, cargo, herramientas que usa a diario.
2. **Dolores Reales (Pain Points)**: Qué le quita el sueño a las 2 AM y qué le frustra de las soluciones actuales.
3. **Deseos y Metas de Estatus**: Cómo este producto le ayuda a verse más competente o exitoso ante sus pares.
4. **Objeciones Principales**: Las 3 razones por las que dudaría antes de comprar (precio, curva de aprendizaje, tiempo) y cómo desarmarlas.
5. **Disparadores de Compra (Triggers)**: Eventos catalizadores que lo impulsan a buscar una solución hoy mismo.`
  },
  {
    id: "mkt-02",
    title: "Secuencia de Email Cold Outreach de Alta Conversión",
    category: "marketing",
    categoryLabel: "Marketing",
    icon: "mail",
    tags: ["Cold Email", "Ventas B2B", "Outreach", "Conversión"],
    models: ["ChatGPT-4o", "Claude 3.5 Sonnet"],
    description: "Crea secuencias de 3 correos electrónicos B2B personalizados, sin sonar a spam, centrados en valor y baja fricción.",
    variables: [
      { name: "PROPUESTA_VALOR", label: "Propuesta de Valor Única", placeholder: "ej. Reducimos el tiempo de onboarding de clientes de 14 días a 48 horas" },
      { name: "PROSPECTO", label: "Cargo del Destinatario", placeholder: "ej. VP de Operaciones o Head of Customer Success" }
    ],
    template: `Eres un Consultor Senior de Ventas B2B especializado en prospección por email en frío.

Crea una secuencia de 3 correos para contactar a un [PROSPECTO].
Propuesta de valor: [PROPUESTA_VALOR].

Estructura de la secuencia:
- **Email 1 (Primer Contacto)**: Menos de 90 palabras. Asunto intrigante (2-4 palabras). Conexión personalizada, problema común, solución con prueba social concisa y CTA suave (ej. "¿Tiene sentido que te comparta un video de 2 minutos?").
- **Email 2 (Seguimiento con Caso de Estudio - 3 días después)**: Historia rápida de un cliente similar con métricas reales.
- **Email 3 (Break-up Email elegante - 5 días después)**: Cierre cordial sin presiones que suele generar altas tasas de respuesta.`
  },
  {
    id: "mkt-03",
    title: "Generador de Propuesta de Valor (Framework Steve Blank)",
    category: "marketing",
    categoryLabel: "Marketing",
    icon: "zap",
    tags: ["Startup", "Pitch", "Copywriting", "Landing Page"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Crea mensajes de propuesta única de valor claros, directos y memorables para tu página de inicio o pitch deck.",
    variables: [
      { name: "CLIENTE_OBJETIVO", label: "Cliente Objetivo", placeholder: "ej. Diseñadores freelance" },
      { name: "PROBLEMA", label: "Problema Central", placeholder: "ej. Pierden horas cobrando facturas atrasadas" },
      { name: "SOLUCION_DIFERENCIAL", label: "Solución y Diferenciador", placeholder: "ej. Contratos automatizados con cobro por hito en escrow" }
    ],
    template: `Actúa como un mentor de startups de Y Combinator y estratega de posicionamiento.

Para:
- Cliente: [CLIENTE_OBJETIVO]
- Problema: [PROBLEMA]
- Solución: [SOLUCION_DIFERENCIAL]

Genera:
1. **La Fórmula de Steve Blank**: "Ayudamos a [X] a lograr [Y] mediante [Z]".
2. **5 Titulares para Hero Section de Landing Page**: Directos, persuasivos y sin jerga vacía.
3. **El 'Elevator Pitch' de 30 segundos**: Fácil de memorizar y contar a inversores o clientes.
4. **Matriz de Beneficios vs. Características**: Traduce 4 características técnicas en beneficios emocionales y de negocio.`
  },

  // ==========================================
  // 4. PRODUCTIVIDAD & GESTIÓN
  // ==========================================
  {
    id: "prod-01",
    title: "Sintetizador Ejecutivo de Reuniones y Plan de Acción",
    category: "productividad",
    categoryLabel: "Productividad",
    icon: "check-circle",
    tags: ["Reuniones", "Minutas", "Action Items", "Gestión"],
    models: ["ChatGPT-4o", "Claude 3.5 Sonnet", "Gemini 1.5 Pro"],
    description: "Convierte transcripciones desordenadas de reuniones en minutas estructuradas con decisiones y tareas asignadas.",
    variables: [
      { name: "CONTEXTO_PROYECTO", label: "Contexto del Proyecto", placeholder: "ej. Lanzamiento de la versión v2.0 de la App móvil" },
      { name: "TRANSCRIPCION", label: "Notas o Transcripción de la Reunión", placeholder: "Pega el texto de la reunión...", multiline: true }
    ],
    template: `Eres un Jefe de Estado Mayor (Chief of Staff) y Project Manager de alto rendimiento.

Contexto del proyecto: [CONTEXTO_PROYECTO].

A partir de las siguientes notas o transcripción de la reunión:
\`\`\`
[TRANSCRIPCION]
\`\`\`

Genera un informe ejecutivo con la siguiente estructura:
1. **Resumen Ejecutivo (TL;DR)**: En 3 viñetas concisas.
2. **Decisiones Clave Tomadas**: Qué se aprobó, qué se descartó y el porqué.
3. **Matriz de Tareas (Action Items)**: Tabla con columnas: | Responsable | Tarea Concreta | Fecha Límite | Prioridad (Alta/Media/Baja) |
4. **Riesgos y Bloqueos Identificados**: Puntos que requieren escalación o seguimiento urgente.
5. **Próxima Sesión**: Temas pendientes que quedaron en el tintero.`
  },
  {
    id: "prod-02",
    title: "Priorizador de Tareas con Matriz Eisenhower y Regla 80/20",
    category: "productividad",
    categoryLabel: "Productividad",
    icon: "sliders",
    tags: ["Eisenhower", "Pareto", "Time Management", "Foco"],
    models: ["ChatGPT-4o", "Claude 3.5 Sonnet"],
    description: "Clasifica una lista caótica de tareas pendientes según su impacto y urgencia, generando un plan de ejecución por bloques.",
    variables: [
      { name: "OBJETIVO_SEMANAL", label: "Objetivo Principal de la Semana", placeholder: "ej. Cerrar la ronda de financiación pre-seed" },
      { name: "LISTA_TAREAS", label: "Lista de Tareas Pendientes", placeholder: "Pega tus tareas desordenadas...", multiline: true }
    ],
    template: `Actúa como un Coach de Productividad Extrema y Gestión del Tiempo.

Mi meta principal para esta semana es: [OBJETIVO_SEMANAL].

Aquí está mi lista desordenada de tareas pendientes:
\`\`\`
[LISTA_TAREAS]
\`\`\`

Organiza mis tareas aplicando el Principio de Pareto (80/20) y la Matriz de Eisenhower:
1. **Cuadrante 1: Hacer Ya (Urgente + Crítico para la meta)**: Las 2-3 tareas que generarán el 80% del impacto.
2. **Cuadrante 2: Programar (Estratégico, no urgente)**: Bloques de tiempo sugeridos para foco profundo.
3. **Cuadrante 3: Delegar o Automatizar**: Tareas operativas o de bajo valor añadido.
4. **Cuadrante 4: Eliminar**: Tareas que son distracciones disfrazadas de trabajo.
5. **Horario Diario en Bloques (Time-blocking)**: Propuesta de distribución para lunes a viernes.`
  },

  // ==========================================
  // 5. APRENDIZAJE & ESTUDIO
  // ==========================================
  {
    id: "learn-01",
    title: "Tutor con Método Feynman y Analogías Cotidianas",
    category: "aprendizaje",
    categoryLabel: "Aprendizaje",
    icon: "book-open",
    tags: ["Feynman", "Pedagogía", "Conceptos Complejos", "Estudio"],
    models: ["ChatGPT-4o", "Claude 3.5 Sonnet", "Gemini 1.5 Pro"],
    description: "Desglosa temas difíciles (física, finanzas, algoritmos) explicándolos como si fueras un niño de 10 años con analogías vívidas.",
    variables: [
      { name: "TEMA_COMPLEJO", label: "Tema o Concepto Complejo", placeholder: "ej. Cómo funcionan los Zero-Knowledge Proofs en Criptografía" },
      { name: "NIVEL_ACTUAL", label: "Tu Nivel de Conocimiento", placeholder: "ej. Principiante sin base matemática avanzada" }
    ],
    template: `Eres Richard Feynman combinado con el mejor pedagogo del mundo.

Mi nivel actual de conocimiento es: [NIVEL_ACTUAL].
Quiero que me enseñes a fondo el siguiente concepto: [TEMA_COMPLEJO].

Sigue la técnica Feynman:
1. **La Analogía Cotidiana**: Explica el concepto como si fuera una historia o mecanismo de la vida real que un niño de 10 años entienda al instante.
2. **Los 3 Principios Fundamentales**: Desglosa la teoría en las 3 ideas básicas que sostienen todo.
3. **Errores Comunes y Falsas Creencias**: Qué suele confundir a la mayoría al aprender esto.
4. **Ejemplo Práctico Aplicado**: Cómo se usa esto en el mundo real en un caso actual.
5. **Pregunta de Autoevaluación**: Hazme una pregunta interactiva para comprobar si realmente lo he comprendido.`
  },
  {
    id: "learn-02",
    title: "Simulador de Entrevistas de Trabajo y Evaluador Interactivo",
    category: "aprendizaje",
    categoryLabel: "Aprendizaje",
    icon: "user-check",
    tags: ["Entrevistas", "Carrera", "Simulador", "Roleplay"],
    models: ["ChatGPT-4o", "Claude 3.5 Sonnet"],
    description: "Realiza simulacros de entrevista pregunta por pregunta, evaluando tus respuestas y dándote retroalimentación con el método STAR.",
    variables: [
      { name: "PUESTO", label: "Puesto al que Postulas", placeholder: "ej. Senior Product Manager en una FinTech" },
      { name: "EMPRESA_TIPO", label: "Tipo de Empresa", placeholder: "ej. Startup de rápido crecimiento en fase Scale-up" }
    ],
    template: `Actúa como el Entrevistador Principal y Director del área para el puesto de [PUESTO] en [EMPRESA_TIPO].

Reglas de la simulación:
1. Conducirás una entrevista rigurosa y realista.
2. **Hazme solo UNA pregunta a la vez**. Espera mi respuesta antes de continuar.
3. Tras recibir mi respuesta, califícala del 1 al 10, destaca un acierto, señala una oportunidad de mejora usando el framework STAR (Situación, Tarea, Acción, Resultado) y luego hazme la siguiente pregunta.
4. Mezcla preguntas técnicas, de comportamiento (behavioral) y de cultura de trabajo.

Para comenzar, salúdame formalmente e iníciate con la primera pregunta.`
  },

  // ==========================================
  // 6. CREATIVIDAD & BRAINSTORMING
  // ==========================================
  {
    id: "creat-01",
    title: "Generador de Ideas Disruptivas con Metodología SCAMPER",
    category: "creatividad",
    categoryLabel: "Creatividad",
    icon: "lightbulb",
    tags: ["Brainstorming", "SCAMPER", "Innovación", "Startups"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Aplica la metodología SCAMPER para generar ángulos innovadores y soluciones disruptivas a problemas existentes.",
    variables: [
      { name: "INDUSTRIA_PROBLEMA", label: "Industria o Problema a Reinventar", placeholder: "ej. El alquiler de departamentos para nómadas digitales" },
      { name: "TENDENCIA_ACTUAL", label: "Tecnología o Tendencia a Cruzar", placeholder: "ej. Inteligencia Artificial Agéntica y Microcomunidades" }
    ],
    template: `Actúa como un Diseñador de Innovación y Estratega de Pensamiento Lateral.

Queremos encontrar ideas de negocio disruptivas en el área de: [INDUSTRIA_PROBLEMA] combinándolo con la tendencia de [TENDENCIA_ACTUAL].

Aplica la técnica SCAMPER para generar 7 ángulos radicales:
- **S (Sustituir)**: ¿Qué elemento tradicional podemos eliminar y reemplazar por completo?
- **C (Combinar)**: ¿Qué dos servicios nunca antes combinados crearían un monopolio temporal?
- **A (Adaptar)**: ¿Qué modelo de otra industria totalmente ajena podemos importar?
- **M (Modificar / Magnificar)**: ¿Qué pasaría si exageramos al 1000% una de las características?
- **P (Poner en otros usos)**: ¿A qué otro mercado inesperado le serviría esto?
- **E (Eliminar)**: ¿Cuál es la mayor molestia para el usuario que podemos borrar de raíz?
- **R (Reordenar / Invertir)**: ¿Qué pasa si cobramos al revés o invertimos el flujo del cliente?

Concluye seleccionando las **2 ideas más viables y rentables** para prototipar en 48 horas.`
  },

  // ==========================================
  // 7. META-PROMPTING & INGENIERÍA DE PROMPTS
  // ==========================================
  {
    id: "meta-01",
    title: "Meta-Prompt Optimizer: El Optimizador Universal",
    category: "metaprompt",
    categoryLabel: "Meta-Prompts",
    icon: "terminal",
    tags: ["Meta-Prompt", "Prompt Engineering", "Optimización", "Few-Shot"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o", "DeepSeek-R1"],
    description: "Transforma una idea vaga o prompt simple en un Mega-Prompt estructurado con técnicas avanzadas de Role, Context, Constraints y Chain of Thought.",
    variables: [
      { name: "OBJETIVO_PROMPT", label: "Qué quieres que logre el prompt final", placeholder: "ej. Analizar balances financieros de empresas y detectar fraudes contables" },
      { name: "MODELO_DESTINO", label: "Modelo de IA Destino", placeholder: "ej. Claude 3.5 Sonnet / ChatGPT-4o / DeepSeek R1" }
    ],
    template: `Eres el Ingeniero de Prompts más avanzado del mundo, experto en arquitectura de instrucciones para [MODELO_DESTINO].

Tu misión es transformar el siguiente objetivo en un **Mega-Prompt Maestro de Grado Profesional**:

Objetivo deseado:
"[OBJETIVO_PROMPT]"

Construye el prompt final utilizando las mejores técnicas:
1. **Definición de Rol Experto**: Asignación de rol de élite con credenciales y mentalidad adecuada.
2. **Contexto Operacional y Delimitación**: Qué debe asumir y qué no.
3. **Instrucciones Paso a Paso (Chain of Thought)**: Secuencia de razonamiento interno antes de responder.
4. **Restricciones Negativas (Negative Constraints)**: Cosas que NO debe hacer jamás (alucinaciones, clichés, longitud).
5. **Formato de Salida Obligatorio**: Estructura visual exacta (Markdown, JSON, tablas).
6. **Ejemplo de Referencia (Few-Shot Prompting)**: Un ejemplo claro de entrada vs. salida ideal.

Entrega el prompt listo dentro de un bloque de código para copiar y pegar directamente.`
  },
  {
    id: "meta-02",
    title: "Arquitecto de System Prompts & Agentes Autónomos",
    category: "metaprompt",
    categoryLabel: "Meta-Prompts",
    icon: "cpu",
    tags: ["Custom GPT", "System Prompt", "Personalidad", "Directrices"],
    models: ["ChatGPT-4o", "Claude 3.5 Sonnet"],
    description: "Crea instrucciones de sistema para configurar Custom GPTs, proyectos de Claude o agentes con personalidad consistente y límites seguros.",
    variables: [
      { name: "NOMBRE_ROL", label: "Nombre y Rol del Asistente", placeholder: "ej. Lexi - Consultora Legal Especializada en Startups y Contratos SaaS" },
      { name: "PERSONALIDAD_ESTILO", label: "Personalidad y Reglas de Comunicación", placeholder: "ej. Precisa, prudente, habla en español neutro, siempre incluye advertencias legales" }
    ],
    template: `Eres un Arquitecto de Agentes Inteligentes y Diseñador de System Prompts.

Crea las instrucciones del sistema completas para un asistente IA con las siguientes especificaciones:
- Nombre y Rol: [NOMBRE_ROL]
- Estilo y Personalidad: [PERSONALIDAD_ESTILO]

Estructura el System Prompt con las siguientes secciones en formato Markdown limpio:
\`\`\`markdown
# INSTRUCCIONES DEL SISTEMA: [NOMBRE_ROL]

## 1. Identidad y Misión Central
[Define quién es, qué hace y cuál es su objetivo supremo de asistencia]

## 2. Tono de Voz y Reglas de Lenguaje
[Pautas sobre longitud de respuestas, vocabulario técnico, uso de emojis y empatía]

## 3. Protocolo de Razonamiento
[Cómo debe procesar las solicitudes del usuario antes de contestar]

## 4. Reglas Infranqueables (Guardrails)
[Qué temas rechazar, cómo manejar ambigüedades y advertencias éticas]

## 5. Plantillas de Respuesta Estándar
[Estructura por defecto que debe seguir en sus respuestas típicas]
\`\`\``
  },

  // ==========================================
  // 8. ANÁLISIS DE DATOS & FINANZAS
  // ==========================================
  {
    id: "data-01",
    title: "Generador de Fórmulas y Automatización en Excel / Sheets",
    category: "datos",
    categoryLabel: "Datos & Finanzas",
    icon: "table",
    tags: ["Excel", "Google Sheets", "VLOOKUP", "REGEX", "Apps Script"],
    models: ["ChatGPT-4o", "DeepSeek-V3"],
    description: "Crea fórmulas anidadas complejas (INDEX/MATCH, LAMBDA, QUERY, REGEX) o macros en Apps Script/VBA explicando cada parámetro.",
    variables: [
      { name: "OBJETIVO_CALCULO", label: "Qué necesitas calcular o extraer", placeholder: "ej. Extraer los correos válidos de una columna con texto sucio y sumar los montos del cliente si la fecha es de este año" },
      { name: "HERRAMIENTA", label: "Herramienta", placeholder: "ej. Google Sheets o Excel 365" }
    ],
    template: `Eres un Especialista Certificado en Modelado de Datos y Hojas de Cálculo Avanzadas ([HERRAMIENTA]).

Necesito resolver el siguiente requerimiento:
[OBJETIVO_CALCULO]

Por favor entrega:
1. **La Fórmula Exacta**: Lista para copiar y pegar (con versiones en Español e Inglés).
2. **Desglose de Funciones**: Explicación sencilla de cómo interactúa cada función anidada.
3. **Manejo de Errores**: Versión protegida con \`IFERROR\` o \`SI.ERROR\` para evitar celdas con \`#N/A\` o \`#VALUE!\`.
4. **Solución Alternativa (si aplica)**: Código en Apps Script / VBA si la fórmula se vuelve demasiado pesada para miles de filas.`
  },
  {
    id: "data-02",
    title: "Análisis FODA / DAFO Estratégico Cuantificado",
    category: "datos",
    categoryLabel: "Datos & Finanzas",
    icon: "trending-up",
    tags: ["FODA", "Estrategia", "Análisis Financiero", "Competencia"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Elabora una matriz FODA exhaustiva con planes de mitigación de amenazas y apalancamiento de fortalezas.",
    variables: [
      { name: "EMPRESA_SECTOR", label: "Empresa o Proyecto y Sector", placeholder: "ej. Fintech de préstamos personales instantáneos mediante IA en México" },
      { name: "COMPETENCIA", label: "Principales Competidores o Retos", placeholder: "ej. Bancos tradicionales con más liquidez y startups con tasas agresivas" }
    ],
    template: `Actúa como un Consultor Senior de Estrategia Corporativa (McKinsey / BCG).

Elabora un Análisis FODA Estratégico Profundo para:
Empresa/Proyecto: [EMPRESA_SECTOR]
Contexto de Mercado: [COMPETENCIA]

Entrega:
1. **Matriz FODA 2x2**:
   - Fortalezas (Ventajas competitivas reales y sostenibles).
   - Oportunidades (Tendencias regulatorias, tecnológicas y de mercado).
   - Debilidades (Puntos vulnerables internos, costes, dependencia tecnológica).
   - Amenazas (Riesgos macroeconómicos, competidores y cambios en clientes).
2. **Matriz Cruzada de Acciones (Estrategias FO, FA, DO, DA)**:
   - Estrategia Ofensiva (Usar Fortalezas para explotar Oportunidades).
   - Estrategia Defensiva (Usar Fortalezas para neutralizar Amenazas).
   - Estrategia de Reorientación (Superar Debilidades aprovechando Oportunidades).
   - Estrategia de Supervivencia (Minimizar Debilidades y evitar Amenazas).
3. **Plan de Acción Priorizado para los primeros 90 días**.`
  }
];

const CATEGORIES_DATA = [
  { id: "all", label: "Todos", icon: "grid" },
  { id: "desarrollo", label: "Desarrollo", icon: "code" },
  { id: "redaccion", label: "Redacción", icon: "feather" },
  { id: "marketing", label: "Marketing", icon: "target" },
  { id: "productividad", label: "Productividad", icon: "check-circle" },
  { id: "aprendizaje", label: "Aprendizaje", icon: "book-open" },
  { id: "creatividad", label: "Creatividad", icon: "lightbulb" },
  { id: "metaprompt", label: "Meta-Prompts", icon: "terminal" },
  { id: "datos", label: "Datos & Finanzas", icon: "table" }
];
