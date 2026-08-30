/**
 * PROMPTS DE PRODUCTIVIDAD & GESTIÓN (20 Prompts)
 */
const PROMPTS_PRODUCTIVIDAD = [
  {
    id: "prod-01",
    title: "Sintetizador Ejecutivo de Reuniones y Plan de Acción",
    category: "productividad",
    categoryLabel: "Productividad",
    icon: "check-circle",
    tags: ["Reuniones", "Minutas", "Action Items", "Gestión"],
    models: ["ChatGPT-4o", "Claude 3.5 Sonnet", "Gemini 1.5 Pro"],
    description: "Convierte notas o transcripciones desordenadas en minutas ejecutivas con acuerdos, tareas y responsables.",
    variables: [
      { name: "CONTEXTO_PROYECTO", label: "Contexto del Proyecto", placeholder: "ej. Lanzamiento de la versión v2.0 de la App móvil" },
      { name: "TRANSCRIPCION", label: "Notas o Transcripción", placeholder: "Pega el texto de la reunión...", multiline: true }
    ],
    template: `Eres un Chief of Staff y Project Manager Senior.
Contexto: [CONTEXTO_PROYECTO].
Notas de la reunión:
\`\`\`
[TRANSCRIPCION]
\`\`\`
Genera un informe ejecutivo con:
1. Resumen Ejecutivo (TL;DR) en 3 viñetas.
2. Decisiones Clave Aprobadas y Descartadas con sus motivos.
3. Matriz de Tareas: Tabla con columnas | Responsable | Tarea Concreta | Fecha Límite | Prioridad |.
4. Riesgos o bloqueos que requieren seguimiento inmediato.`
  },
  {
    id: "prod-02",
    title: "Priorizador con Matriz Eisenhower y Regla 80/20",
    category: "productividad",
    categoryLabel: "Productividad",
    icon: "sliders",
    tags: ["Eisenhower", "Pareto", "Time Management", "Foco"],
    models: ["ChatGPT-4o", "Claude 3.5 Sonnet"],
    description: "Clasifica una lista desordenada de tareas por impacto y urgencia, generando un cronograma por bloques de tiempo.",
    variables: [
      { name: "OBJETIVO_SEMANAL", label: "Objetivo Principal", placeholder: "ej. Cerrar la ronda de financiación pre-seed" },
      { name: "LISTA_TAREAS", label: "Tareas Pendientes", placeholder: "Pega tus tareas desordenadas...", multiline: true }
    ],
    template: `Actúa como un Coach de Productividad Extrema.
Meta de la semana: [OBJETIVO_SEMANAL].
Tareas pendientes:
\`\`\`
[LISTA_TAREAS]
\`\`\`
Organiza mis tareas con Pareto (80/20) y Eisenhower:
1. Cuadrante 1: Hacer Ya (Urgente y Crítico para la meta).
2. Cuadrante 2: Programar (Estratégico para foco profundo).
3. Cuadrante 3: Delegar o Automatizar.
4. Cuadrante 4: Eliminar (distracciones disfrazadas de trabajo).
5. Propuesta de Time-blocking de lunes a viernes.`
  },
  {
    id: "prod-03",
    title: "Diseñador de Flujos de Automatización (Zapier / Make / n8n)",
    category: "productividad",
    categoryLabel: "Productividad",
    icon: "zap",
    tags: ["Automatización", "Zapier", "Make", "n8n", "NoCode"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Diseña flujos de automatización entre herramientas (Slack, Airtable, Notion, Gmail, Stripe) paso a paso.",
    variables: [
      { name: "HERRAMIENTA_NOCDE", label: "Plataforma", placeholder: "ej. Make (Integromat) o Zapier o n8n" },
      { name: "OBJETIVO_FLUJO", label: "Qué proceso deseas conectar", placeholder: "ej. Cuando un nuevo cliente pague en Stripe -> Crear fila en Notion -> Enviar contrato por PandaDoc -> Notificar por canal de Slack" }
    ],
    template: `Eres un Consultor Especialista en Automatización de Procesos con [HERRAMIENTA_NOCDE].
Proceso deseado: [OBJETIVO_FLUJO].
Entrega:
1. Módulo Desencadenante (Trigger) y configuración de Webhooks.
2. Módulos de Acción intermedios con mapeo de campos JSON y transformaciones de datos.
3. Manejo de Errores y Reintentos automáticos para evitar pérdidas de datos.
4. Estimación de consumo de operaciones/créditos.`
  },
  {
    id: "prod-04",
    title: "Planificador de Sesiones de Trabajo Profundo (Deep Work)",
    category: "productividad",
    categoryLabel: "Productividad",
    icon: "check-circle",
    tags: ["Deep Work", "Concentración", "Cal Newport", "Foco"],
    models: ["ChatGPT-4o", "Claude 3.5 Sonnet"],
    description: "Estructura un ritual y bloque de 90 a 120 minutos para entrar en estado de flujo y avanzar en tareas cognitivamente complejas.",
    variables: [
      { name: "TAREA_COMPLEJA", label: "Tarea o Proyecto", placeholder: "ej. Escribir la sección de metodología de mi tesis doctoral" }
    ],
    template: `Actúa como un Especialista en Neurociencia de la Concentración y Deep Work (método Cal Newport).
Tarea: [TAREA_COMPLEJA].
Diseña mi protocolo de sesión de foco:
1. Ritual de Entrada de 5 minutos (Entorno físico, aplicaciones bloqueadas, música binaural).
2. Sub-metas cuantificadas para un bloque de 90 minutos dividido en dos fases de 45 min.
3. Estrategia contra el impulso de procrastinación o revisión de notificaciones.
4. Ritual de Cierre y descarga cognitiva.`
  },
  {
    id: "prod-05",
    title: "Generador de OKRs Trimestrales (Objectives & Key Results)",
    category: "productividad",
    categoryLabel: "Productividad",
    icon: "target",
    tags: ["OKRs", "Estrategia", "Métricas", "KPIs"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Define objetivos ambiciosos con 3 a 5 resultados clave cuantitativos y medibles por trimestre.",
    variables: [
      { name: "AREA_NEGOCIO", label: "Equipo o Proyecto", placeholder: "ej. Equipo de Producto de una App de Finanzas" },
      { name: "META_ANUAL", label: "Visión del Año", placeholder: "ej. Alcanzar rentabilidad (Break-even) y 100k usuarios activos mensuales" }
    ],
    template: `Eres un Consultor de Gestión Estratégica y OKRs (estilo Google / Intel).
Equipo: [AREA_NEGOCIO]. Visión: [META_ANUAL].
Diseña 3 OKRs para el próximo trimestre:
- Objetivo 1 (Crecimiento / Adquisición): Inspirador + 3 Key Results numéricos.
- Objetivo 2 (Retención / Experiencia de Usuario): Inspirador + 3 Key Results numéricos.
- Objetivo 3 (Eficiencia Operativa / Infraestructura): Inspirador + 3 Key Results numéricos.
Incluye iniciativas semanales para cada uno.`
  },
  {
    id: "prod-06",
    title: "Optimizador de Bandeja de Entrada (Bandeja Cero / Inbox Zero)",
    category: "productividad",
    categoryLabel: "Productividad",
    icon: "mail",
    tags: ["Inbox Zero", "Email", "Organización", "Filtros"],
    models: ["ChatGPT-4o", "Claude 3.5 Sonnet"],
    description: "Estrategia de reglas, carpetas y plantillas de respuesta rápida para mantener tu correo en cero a diario.",
    variables: [
      { name: "GESTOR_CORREO", label: "Cliente de Correo", placeholder: "ej. Gmail o Outlook o Superhuman" },
      { name: "VOLUMEN_CORREOS", label: "Volumen y Tipos de Correo", placeholder: "ej. 80 correos diarios entre soporte, presupuestos, newsletters y tareas internas" }
    ],
    template: `Eres un Coach de Productividad Digital especializado en [GESTOR_CORREO].
Situación actual: [VOLUMEN_CORREOS].
Diseña el sistema Inbox Zero:
1. Estructura de 4 Etiquetas/Carpetas maestras (@Acción Hoy, @Esperando Respuesta, @Lectura/Referencias, @Archivo).
2. 5 Reglas de Filtrado Automático para desviar correos no urgentes.
3. 3 Plantillas de Respuesta Ultrarrápida para preguntas frecuentes.
4. Hábito de revisión diaria en 2 bloques de 15 minutos.`
  },
  {
    id: "prod-07",
    title: "Estructurador de Procedimientos Operativos Estándar (SOPs)",
    category: "productividad",
    categoryLabel: "Productividad",
    icon: "check-circle",
    tags: ["SOP", "Procesos", "Documentación", "Delegar"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Redacta manuales de procedimientos paso a paso para que cualquier persona del equipo ejecute tareas repetitivas sin errores.",
    variables: [
      { name: "NOMBRE_PROCESO", label: "Nombre del Proceso", placeholder: "ej. Publicación de un episodio de Podcast en Spotify, Apple y YouTube" }
    ],
    template: `Actúa como Director de Operaciones (COO) y Documentación de Procesos.
Proceso: [NOMBRE_PROCESO].
Escribe el Procedimiento Operativo Estándar (SOP) completo:
1. Propósito y Responsable del rol.
2. Software y accesos requeridos.
3. Checklist paso a paso con advertencias de fallos comunes.
4. Criterio de 'Definición de Terminado' (Definition of Done).
5. Qué hacer si ocurre un problema fuera del protocolo estándar.`
  },
  {
    id: "prod-08",
    title: "Auditor de Hábitos y Rutina Diaria (Atomic Habits)",
    category: "productividad",
    categoryLabel: "Productividad",
    icon: "check-circle",
    tags: ["Hábitos", "Rutinas", "Salud", "Rendimiento"],
    models: ["ChatGPT-4o", "Claude 3.5 Sonnet"],
    description: "Analiza tu jornada para eliminar ladrones de tiempo y diseñar hábitos atómicos sostenibles.",
    variables: [
      { name: "RUTINA_ACTUAL", label: "Tu Día Típico", placeholder: "Despierto a las 8, reviso el móvil 45 mins en la cama, trabajo con interrupciones, duermo a la 1 AM sintiendo que no avancé", multiline: true },
      { name: "HABITOS_DESEADOS", label: "Hábitos que Deseas Incorporar", placeholder: "ej. Hacer 30 min de ejercicio, leer 20 páginas y avanzar en mi proyecto personal" }
    ],
    template: `Eres un Mentor de Hábitos y Comportamiento Humano (metodología James Clear).
Rutina actual:
\`\`\`
[RUTINA_ACTUAL]
\`\`\`
Metas: [HABITOS_DESEADOS].
Diseña:
1. Diagnóstico de fricciones y desencadenantes negativos.
2. Apilamiento de Hábitos (Habit Stacking): 'Después de [Hábito actual], haré [Hábito nuevo]'.
3. Rediseño del Entorno para que lo bueno sea obvio y lo malo sea invisible.
4. Regla de los 2 Minutos para iniciar sin resistencia mental.`
  },
  {
    id: "prod-09",
    title: "Facilitador de Retrospectivas Ágiles (Scrum / Kanban)",
    category: "productividad",
    categoryLabel: "Productividad",
    icon: "check-circle",
    tags: ["Scrum", "Agile", "Retrospectiva", "Equipo"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Dinámicas estructuradas para evaluar sprints (Mad/Sad/Glad, Sailboat, 4Ls) y definir mejoras concretas.",
    variables: [
      { name: "DINAMICA_RETRO", label: "Formato de Retrospectiva", placeholder: "ej. Dinámica del Velero (Viento, Anclas, Rocas, Isla del Sol)" },
      { name: "RETOS_SPRINT", label: "Contexto del Sprint Reciente", placeholder: "ej. El sprint tuvo muchas tareas no planificadas y se retrasó la entrega de la API" }
    ],
    template: `Actúa como un Agile Coach y Scrum Master.
Dinámica: [DINAMICA_RETRO]. Contexto del sprint: [RETOS_SPRINT].
Entrega:
1. Guía de Facilitación de 45 minutos (Check-in, Recolección de datos, Generación de ideas, Votación).
2. Preguntas disparadoras para que el equipo hable con seguridad psicológica.
3. Plantilla para registrar los 2 Acuerdos de Acción más votados con responsables asignados.`
  },
  {
    id: "prod-10",
    title: "Planificador de Proyectos en Fases (Carta Gantt / Roadmap)",
    category: "productividad",
    categoryLabel: "Productividad",
    icon: "sliders",
    tags: ["Roadmap", "Gantt", "Project Management", "Hitos"],
    models: ["ChatGPT-4o", "Claude 3.5 Sonnet"],
    description: "Desglosa un proyecto complejo en hitos, dependencias críticas y estimación de semanas de entrega.",
    variables: [
      { name: "NOMBRE_PROYECTO", label: "Proyecto a Planificar", placeholder: "ej. Rediseño integral y migración de base de datos de plataforma educativa" },
      { name: "PLAZO_MESES", label: "Plazo Total", placeholder: "ej. 3 meses (12 semanas)" }
    ],
    template: `Eres un Director de Gestión de Proyectos PMP.
Proyecto: [NOMBRE_PROYECTO]. Plazo: [PLAZO_MESES].
Crea el plan de ejecución:
1. Fases del Proyecto (Fase 1: Descubrimiento y Diseño, Fase 2: Desarrollo Core, Fase 3: Testing y Migración, Fase 4: Lanzamiento).
2. Desglose de Tareas con Dependencias (Ruta Crítica).
3. Matriz de Hitos (Milestones) quincenales con entregables tangibles.
4. Plan de Contingencia para desvíos de cronograma.`
  },
  {
    id: "prod-11",
    title: "Generador de Plantillas para Notion / Obsidian / Coda",
    category: "productividad",
    categoryLabel: "Productividad",
    icon: "check-circle",
    tags: ["Notion", "Obsidian", "PKM", "Segunda Mente"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Diseña la estructura de bases de datos relacionales, vistas y dashboards para tu sistema de notas y gestión.",
    variables: [
      { name: "SISTEMA_NOTION", label: "Propósito del Workspace", placeholder: "ej. Sistema de gestión de clientes freelance con proyectos, tareas y facturas" },
      { name: "APP_NOTAS", label: "Herramienta", placeholder: "ej. Notion o Obsidian" }
    ],
    template: `Eres un Diseñador Certificado de Workspaces en [APP_NOTAS] (metodología PARA de Tiago Forte).
Propósito: [SISTEMA_NOTION].
Diseña la arquitectura:
1. Bases de Datos Necesarias y sus Propiedades (Relaciones, Rollups, Fórmulas).
2. Vistas Recomendadas (Tablero Kanban, Calendario, Vista de Galería filtrada).
3. Dashboard Principal (Home Page) con accesos directos y widgets de alta productividad.
4. Flujo diario de captura rápida y procesamiento semanal.`
  },
  {
    id: "prod-12",
    title: "Especialista en Delegación Eficaz y Asignación de Tareas",
    category: "productividad",
    categoryLabel: "Productividad",
    icon: "check-circle",
    tags: ["Liderazgo", "Delegar", "Management", "Claridad"],
    models: ["ChatGPT-4o", "Claude 3.5 Sonnet"],
    description: "Redacta briefs de asignación de tareas con contexto claro, nivel de autonomía y criterios de éxito sin microgestión.",
    variables: [
      { name: "TAREA_A_DELEGAR", label: "Tarea a Encomendar", placeholder: "ej. Investigar 5 opciones de pasarelas de pago para el mercado europeo y presentar una tabla comparativa" },
      { name: "PERFIL_COLABORADOR", label: "Rol del Miembro del Equipo", placeholder: "ej. Analista Junior de Producto" }
    ],
    template: `Actúa como un Gerente de Ingeniería / Director de Operaciones.
Tarea: [TAREA_A_DELEGAR]. Colaborador: [PERFIL_COLABORADOR].
Escribe el mensaje de delegación (Brief):
1. El 'Por Qué' (Contexto estratégico de la tarea).
2. El 'Qué' (Entregables específicos requeridos).
3. Nivel de Autonomía otorgado (¿Decidir e informar, o investigar y proponer?).
4. Recursos disponibles y puntos de revisión antes de la entrega final.`
  },
  {
    id: "prod-13",
    title: "Auditor de Reuniones Innecesarias & Conversión a Comunicación Asíncrona",
    category: "productividad",
    categoryLabel: "Productividad",
    icon: "mail",
    tags: ["Asíncrono", "Reuniones", "Loom", "Slack"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Transforma una reunión que podría ser un email en un memo estructurado o guion de video corto (Loom).",
    variables: [
      { name: "TEMA_REUNION", label: "Tema que se Iba a Tratar", placeholder: "ej. Actualización de estado del proyecto y aprobación del presupuesto de marketing" }
    ],
    template: `Eres un Defensor del Trabajo Asíncrono de Alto Rendimiento (estilo GitLab / Basecamp).
Tema: [TEMA_REUNION].
Convierte esta reunión en un formato asíncrono:
1. Memo Escrito Estructurado: Contexto -> Propuesta -> Opciones -> Decisión Solicitada.
2. Guion de Loom de 2 minutos para explicar visualmente los puntos clave.
3. Fecha límite y canal exacto para que cada persona emita su feedback sin necesidad de sincronizarse en vivo.`
  },
  {
    id: "prod-14",
    title: "Gestor de Energía Personal y Cronobiología",
    category: "productividad",
    categoryLabel: "Productividad",
    icon: "check-circle",
    tags: ["Cronobiología", "Energía", "Ritmo Circadiano", "Salud"],
    models: ["ChatGPT-4o", "Claude 3.5 Sonnet"],
    description: "Alinea tus tareas más demandantes con tus picos biológicos de energía a lo largo del día según tu cronotipo.",
    variables: [
      { name: "CRONOTIPO_USUARIO", label: "Tu Cronotipo / Tendencia", placeholder: "ej. Alondra (madrugador con pico de energía a las 8 AM) o Búho (nocturno con lucidez después de las 6 PM)" }
    ],
    template: `Actúa como Especialista en Cronobiología del Rendimiento y Fisiología del Trabajo.
Cronotipo: [CRONOTIPO_USUARIO].
Diseña un mapa de distribución energética diaria:
- Horas de Máxima Lucidez Cognitiva: Tareas que deben ubicarse aquí (Estrategia, Código, Escritura).
- Valle de Energía (Bajón circadiano): Tareas de baja fricción (Emails, archivo, reuniones informativas).
- Ventana de Creatividad y Pensamiento Lateral: Tareas de brainstorming e ideación.
- Estrategias de descanso activo (caminatas, siesta energética de 20 min, hidratación).`
  },
  {
    id: "prod-15",
    title: "Optimizador de Procesos con Metodología Lean (Muda / Desperdicio)",
    category: "productividad",
    categoryLabel: "Productividad",
    icon: "sliders",
    tags: ["Lean", "Kaizen", "Optimización", "Muda"],
    models: ["ChatGPT-4o", "Claude 3.5 Sonnet"],
    description: "Identifica los 7 desperdicios clásicos de Lean en flujos de trabajo de oficina o desarrollo de software.",
    variables: [
      { name: "PROCESO_INEFICIENTE", label: "Flujo de Trabajo Problemático", placeholder: "ej. Cada vez que aprobamos un nuevo diseño pasa por 4 personas que tardan 10 días en responder por WhatsApp y correo" }
    ],
    template: `Eres un Maestro Cinta Negra (Black Belt) en Lean Six Sigma.
Proceso analizado: [PROCESO_INEFICIENTE].
Realiza el análisis:
1. Mapeo del Flujo de Valor actual vs. Tiempo de Ciclo Real.
2. Identificación de los 3 Desperdicios Principales (Esperas innecesarias, Sobreprocesamiento, Defectos de comunicación).
3. Propuesta Kaizen (Mejora Continua) para reducir el tiempo en un 70% con mínimos cambios de software.`
  },
  {
    id: "prod-16",
    title: "Estructurador de Revisiones Semanales (Weekly Review GTD)",
    category: "productividad",
    categoryLabel: "Productividad",
    icon: "check-circle",
    tags: ["GTD", "Weekly Review", "David Allen", "Organización"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Protocolo de 45 minutos los viernes o domingos para vaciar la mente, revisar listas y planificar la semana entrante con claridad.",
    variables: [
      { name: "ROLES_VIDA", label: "Tus Roles Principales", placeholder: "ej. Emprendedor tech, Padre de familia, Deportista aficionado" }
    ],
    template: `Eres un Instructor Certificado en Getting Things Done (GTD - David Allen).
Roles: [ROLES_VIDA].
Diseña la guía para la Revisión Semanal:
1. Fase 1: Ponerse al Día (Vaciar bandejas físicas y digitales, procesar notas sueltas).
2. Fase 2: Actualizarse (Revisar lista de proyectos activos, lista 'Algún día/Tal vez', calendario a 2 semanas).
3. Fase 3: Ser Creativo (Definir los 3 Grandes Resultados deseados por rol para la próxima semana).`
  },
  {
    id: "prod-17",
    title: "Generador de Plantillas de Feedback 1 a 1 para Managers (1-on-1s)",
    category: "productividad",
    categoryLabel: "Productividad",
    icon: "check-circle",
    tags: ["1on1", "Feedback", "Liderazgo", "Carrera"],
    models: ["ChatGPT-4o", "Claude 3.5 Sonnet"],
    description: "Estructura reuniones periódicas 1-a-1 centradas en desarrollo profesional, bloqueos y motivación del colaborador.",
    variables: [
      { name: "TIPO_1ON1", label: "Enfoque de la Sesión", placeholder: "ej. Sesión mensual de desarrollo de carrera y retroalimentación bidireccional" }
    ],
    template: `Actúa como un Director de Talento y Coach de Liderazgo Ejecutivo.
Enfoque: [TIPO_1ON1].
Diseña la plantilla de reunión:
- Apertura (Preguntas de bienestar y temperatura emocional).
- Agenda del Colaborador (Sus prioridades y temas que desea tratar primero).
- Feedback del Manager usando el framework SBI (Situación, Comportamiento, Impacto).
- Metas de crecimiento y compromisos para la siguiente sesión.`
  },
  {
    id: "prod-18",
    title: "Técnica de Desglose de Proyectos Abrumadores (Chunking & Micro-pasos)",
    category: "productividad",
    categoryLabel: "Productividad",
    icon: "check-circle",
    tags: ["Chunking", "Procrastinación", "Microtareas", "Foco"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Transforma una tarea colosal que te genera parálisis en micro-pasos de 5 minutos tan sencillos que sea imposible fallar.",
    variables: [
      { name: "TAREA_ABRUMADORA", label: "La Tarea que estás Postergando", placeholder: "ej. Crear todo el curso online desde cero y armar la plataforma de alumnos" }
    ],
    template: `Eres un Psicólogo Cognitivo especializado en Parálisis por Procrastinación.
Tarea abrumadora: [TAREA_ABRUMADORA].
Desglosa esto:
1. La Primera Micro-Acción Ridículamente Fácil (que tome menos de 3 minutos para romper la inercia).
2. Los 5 Hitos Principales.
3. Desglose de cada hito en bloques de 15 minutos.
4. Criterio para saber cuándo detenerse cada día sin sentir culpa.`
  },
  {
    id: "prod-19",
    title: "Diseñador de Sistemas de Archivo Digital y Nomenclatura",
    category: "productividad",
    categoryLabel: "Productividad",
    icon: "check-circle",
    tags: ["Organización", "Google Drive", "Archivos", "Nomenclatura"],
    models: ["ChatGPT-4o", "Claude 3.5 Sonnet"],
    description: "Estandariza carpetas en la nube y nombres de archivos para encontrar cualquier documento en menos de 5 segundos.",
    variables: [
      { name: "TIPO_NEGOCIO_ARCHIVOS", label: "Área o Negocio", placeholder: "ej. Agencia de diseño y desarrollo con 10 clientes activos y contabilidad propia" }
    ],
    template: `Eres un Especialista en Gestión Documental y Organización Digital.
Área: [TIPO_NEGOCIO_ARCHIVOS].
Diseña el sistema de almacenamiento:
1. Árbol de Carpetas Máximo de 3 Niveles de Profundidad.
2. Convención Estricta de Nombres de Archivos (ej. YYYYMMDD_Cliente_Proyecto_v01.ext).
3. Protocolo de Archivo de Proyectos Terminados para mantener limpio el entorno de trabajo activo.`
  },
  {
    id: "prod-20",
    title: "Especialista en Ayuno de Dopamina y Desintoxicación Digital",
    category: "productividad",
    categoryLabel: "Productividad",
    icon: "check-circle",
    tags: ["Dopamina", "Desconexión", "Salud Mental", "Bienestar"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Protocolo de 24 a 48 horas para reiniciar tu circuito de recompensa, recuperar el enfoque y la paz mental.",
    variables: [
      { name: "NIVEL_SOBREESTIMULACION", label: "Tus Síntomas Actuales", placeholder: "ej. Reviso el móvil cada 3 minutos, no puedo ver una película sin mirar Twitter, me cuesta leer más de 2 páginas seguidas" }
    ],
    template: `Actúa como Neurocientífico y Terapeuta de Desintoxicación Digital.
Síntomas: [NIVEL_SOBREESTIMULACION].
Diseña el plan de reseteo:
1. Configuración de Dispositivos (Pantalla en escala de grises, apagado de notificaciones no humanas, bloqueo de feeds).
2. Protocolo de Fin de Semana 'Offline' de 24 horas (Qué hacer, qué evitar estrictamente).
3. Actividades sustitutivas que elevan la dopamina tónica saludable (caminar en la naturaleza, leer en papel, escribir en libreta).
4. Reglas de convivencia digital de lunes a viernes.`
  }
];
