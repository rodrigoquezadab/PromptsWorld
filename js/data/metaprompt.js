/**
 * PROMPTS DE META-PROMPTING & INGENIERÍA DE PROMPTS (20 Prompts)
 */
const PROMPTS_METAPROMPT = [
  {
    id: "meta-01",
    title: "Meta-Prompt Optimizer: El Creador Universal de Prompts",
    category: "metaprompt",
    categoryLabel: "Meta-Prompts",
    icon: "terminal",
    tags: ["Meta-Prompt", "Prompt Engineering", "Optimización", "Few-Shot"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o", "DeepSeek-R1"],
    description: "Transforma una idea vaga en un Mega-Prompt estructurado con Role, Context, Constraints y Chain of Thought.",
    variables: [
      { name: "OBJETIVO_PROMPT", label: "Qué debe lograr el prompt", placeholder: "ej. Analizar balances financieros y detectar fraudes" },
      { name: "MODELO_DESTINO", label: "Modelo de IA Destino", placeholder: "ej. Claude 3.5 Sonnet / ChatGPT-4o / DeepSeek R1" }
    ],
    template: `Eres el Ingeniero de Prompts más avanzado del mundo para [MODELO_DESTINO].
Transforma este objetivo en un **Mega-Prompt Maestro de Grado Profesional**:
"[OBJETIVO_PROMPT]"

Construye el prompt con:
1. Rol Experto y Mentalidad.
2. Contexto Operacional y Delimitación de Supuestos.
3. Instrucciones Paso a Paso (Chain of Thought).
4. Restricciones Negativas (Negative Constraints: qué NO hacer jamás).
5. Formato de Salida Obligatorio (Markdown / JSON).
6. Ejemplo de Referencia (Few-Shot Prompting).
Entrega el prompt dentro de un bloque de código para copiar directamente.`
  },
  {
    id: "meta-02",
    title: "Arquitecto de System Prompts & Custom GPTs",
    category: "metaprompt",
    categoryLabel: "Meta-Prompts",
    icon: "cpu",
    tags: ["Custom GPT", "System Prompt", "Personalidad", "Directrices"],
    models: ["ChatGPT-4o", "Claude 3.5 Sonnet"],
    description: "Crea instrucciones de sistema para configurar Custom GPTs, proyectos de Claude o agentes con personalidad consistente.",
    variables: [
      { name: "NOMBRE_ROL", label: "Nombre y Rol del Asistente", placeholder: "ej. Lexi - Consultora Legal de Startups y Contratos SaaS" },
      { name: "PERSONALIDAD_ESTILO", label: "Personalidad y Reglas", placeholder: "ej. Precisa, prudente, español neutro, incluye descargos legales" }
    ],
    template: `Eres un Arquitecto de Agentes Inteligentes y Diseñador de System Prompts.
Especificaciones:
- Rol: [NOMBRE_ROL].
- Estilo: [PERSONALIDAD_ESTILO].
Escribe las instrucciones del sistema en Markdown con:
# INSTRUCCIONES DEL SISTEMA: [NOMBRE_ROL]
## 1. Identidad y Misión Central
## 2. Tono de Voz y Reglas de Lenguaje
## 3. Protocolo de Razonamiento Interno
## 4. Reglas Infranqueables (Guardrails y Seguridad)
## 5. Plantillas de Respuesta Estándar`
  },
  {
    id: "meta-03",
    title: "Ingeniero de Prompts Few-Shot con Ejemplos de Calidad",
    category: "metaprompt",
    categoryLabel: "Meta-Prompts",
    icon: "terminal",
    tags: ["Few-Shot", "In-Context Learning", "Precisión", "Datasets"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o", "DeepSeek-V3"],
    description: "Diseña prompts con 3 a 5 ejemplos ilustrativos de entrada-salida que calibran al modelo a la perfección.",
    variables: [
      { name: "TAREA_TRANSFORMACION", label: "Tarea a Estandarizar", placeholder: "ej. Clasificar tweets de quejas de clientes en categoría, urgencia (1-5) y sentimiento, devolviendo JSON exacto" }
    ],
    template: `Actúa como Especialista en Aprendizaje en Contexto (Few-Shot Prompting).
Tarea: [TAREA_TRANSFORMACION].
Crea el prompt maestro definitivo incluyendo:
1. Instrucción clara y concisa de la tarea.
2. Formato estricto de esquema esperado.
3. 3 Ejemplos 'Few-Shot' perfectamente calibrados (Caso estándar, Caso ambiguo resuelto con éxito, Caso límite/Edge case).
4. El marcador de posición listo para la nueva entrada del usuario.`
  },
  {
    id: "meta-04",
    title: "Generador de Cadenas de Pensamiento (Chain-of-Thought CoT)",
    category: "metaprompt",
    categoryLabel: "Meta-Prompts",
    icon: "terminal",
    tags: ["Chain of Thought", "CoT", "Razonamiento", "Lógica"],
    models: ["Claude 3.5 Sonnet", "DeepSeek-R1", "ChatGPT-4o"],
    description: "Fuerza al modelo a razonar paso a paso dentro de etiquetas <thinking> antes de dar la respuesta final.",
    variables: [
      { name: "PROBLEMA_LOGICO", label: "Problema Complejo o Deducción", placeholder: "ej. Resolver un problema de lógica de horarios de trenes con restricciones cruzadas" }
    ],
    template: `Eres un Investigador en Razonamiento de Modelos de Lenguaje.
Diseña un prompt con técnica 'Chain of Thought' para resolver:
"[PROBLEMA_LOGICO]"
El prompt debe forzar al modelo a:
- Desglosar primero todas las variables conocidas y desconocidas.
- Analizar cada hipótesis dentro de un bloque <thinking>...</thinking>.
- Comprobar que no haya contradicciones lógicas antes de salir del bloque.
- Proporcionar la conclusión final en un bloque <output> estructurado.`
  },
  {
    id: "meta-05",
    title: "Auditor de Inyecciones de Prompts y Vulnerabilidades (Prompt Security)",
    category: "metaprompt",
    categoryLabel: "Meta-Prompts",
    icon: "terminal",
    tags: ["Prompt Injection", "Jailbreak", "Seguridad IA", "Red Teaming"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Blinda tus prompts contra ataques de inyección indirecta, intentos de jailbreak y filtrado de system prompts.",
    variables: [
      { name: "SYSTEM_PROMPT_A_PROTEGER", label: "Tu System Prompt Actual", placeholder: "Pega el prompt de tu aplicación...", multiline: true }
    ],
    template: `Eres un Experto en Ciberseguridad de LLMs y Red Teaming (OWASP Top 10 for LLMs).
System Prompt a auditar:
\`\`\`
[SYSTEM_PROMPT_A_PROTEGER]
\`\`\`
Realiza:
1. Simulación de 3 vectores de ataque comunes (Direct Prompt Injection, Delimiter Hijacking, Indirect Leakage).
2. Detección de brechas donde el modelo podría revelar sus instrucciones secretas o cambiar de rol.
3. Versión blindada del System Prompt con delimitadores XML robustos y reglas de anulación de comandos hostiles.`
  },
  {
    id: "meta-06",
    title: "Estructurador de Salidas JSON Estrictas con Esquema Zod/JSON Schema",
    category: "metaprompt",
    categoryLabel: "Meta-Prompts",
    icon: "terminal",
    tags: ["JSON Schema", "Structured Outputs", "Zod", "API"],
    models: ["ChatGPT-4o", "Claude 3.5 Sonnet"],
    description: "Garantiza que el modelo responda ÚNICAMENTE en JSON válido sin texto introductorio ni explicaciones.",
    variables: [
      { name: "ESTRUCTURA_DATOS", label: "Campos Requeridos", placeholder: "ej. id (string UUID), title (string), urgency (enum: LOW, MED, HIGH), actionItems (array de objetos con task y dueDate)" }
    ],
    template: `Actúa como Arquitecto de Structured Outputs para LLMs.
Estructura requerida: [ESTRUCTURA_DATOS].
Crea el prompt de extracción garantizando:
1. Esquema formal JSON Schema / Zod Typescript.
2. Instrucción de sistema que prohíba estrictamente cualquier saludo, texto antes/después del JSON o bloques con formato erróneo.
3. Manejo de valores nulos o campos opcionales.`
  },
  {
    id: "meta-07",
    title: "Traductor de Prompts para Diferentes Familias de Modelos (Claude vs OpenAI)",
    category: "metaprompt",
    categoryLabel: "Meta-Prompts",
    icon: "terminal",
    tags: ["Traducción de Prompts", "XML Tags", "OpenAI", "Anthropic"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Adapta prompts optimizados para ChatGPT al formato nativo de etiquetas XML de Claude o viceversa.",
    variables: [
      { name: "PROMPT_ORIGINAL", label: "Prompt Existente", placeholder: "Pega el prompt original...", multiline: true },
      { name: "MODELO_ORIGEN_DESTINO", label: "De qué modelo a cuál", placeholder: "ej. De ChatGPT (Markdown) a Claude 3.5 (XML Tags nativas)" }
    ],
    template: `Eres un Especialista en Arquitectura de Prompts Multi-Modelo.
Conversión: [MODELO_ORIGEN_DESTINO].
Prompt a transformar:
\`\`\`
[PROMPT_ORIGINAL]
\`\`\`
Transforma el prompt aplicando las mejores prácticas específicas del modelo de destino (ej. jerarquía de etiquetas <context>, <instructions>, <rules>, <examples> para Anthropic Claude, o system/user/assistant instructions y markdown estricto para OpenAI).`
  },
  {
    id: "meta-08",
    title: "Generador de Evaluadores LLM-as-a-Judge (Rubricas de Evaluación)",
    category: "metaprompt",
    categoryLabel: "Meta-Prompts",
    icon: "terminal",
    tags: ["LLM as a Judge", "Evaluación", "Rúbricas", "Benchmarking"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Crea prompts para que un modelo evalúe de forma imparcial las respuestas de otro modelo según una escala precisa.",
    variables: [
      { name: "CRITERIO_EVALUACION", label: "Qué se debe Evaluar", placeholder: "ej. Precisión fáctica, concisión y tono empático en respuestas de soporte médico" }
    ],
    template: `Actúa como Investigador de Evaluación de Modelos (LLM-as-a-Judge).
Criterio a evaluar: [CRITERIO_EVALUACION].
Escribe el prompt del Evaluador:
1. Rúbrica de Puntuación detallada del 1 al 5 con definiciones claras de qué constituye un 1, un 3 y un 5.
2. Protocolo de Evaluación ciega paso a paso.
3. Formato de Salida en JSON: { reasoning: string, score: number, criticalFlaws: string[] }.`
  },
  {
    id: "meta-09",
    title: "Técnica de Árbol de Pensamientos (Tree-of-Thoughts ToT)",
    category: "metaprompt",
    categoryLabel: "Meta-Prompts",
    icon: "terminal",
    tags: ["Tree of Thoughts", "ToT", "Exploración", "Heurística"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Genera múltiples ramas de solución simultáneas, evalúa la viabilidad de cada rama y poda los caminos erróneos.",
    variables: [
      { name: "DESAFIO_COMPLEJO", label: "Desafío a Resolver", placeholder: "ej. Optimizar la ruta y distribución de inventario de 5 almacenes para 20 tiendas minimizando costes de transporte" }
    ],
    template: `Eres un Experto en Heurística y Frameworks de Razonamiento Tree-of-Thoughts.
Desafío: [DESAFIO_COMPLEJO].
Aplica ToT:
1. Fase 1: Generación de 3 ramas de pensamiento iniciales (Rama A, Rama B, Rama C).
2. Fase 2: Evaluación crítica de viabilidad y costes de cada rama (Puntuación de 1 a 10).
3. Fase 3: Poda de ramas inferiores y expansión de los 2 mejores caminos con sub-ramas.
4. Conclusión con la mejor solución optimizada.`
  },
  {
    id: "meta-10",
    title: "Generador de Prompts para Extracción y Análisis RAG",
    category: "metaprompt",
    categoryLabel: "Meta-Prompts",
    icon: "terminal",
    tags: ["RAG", "Vector DB", "Citations", "No Hallucinations"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Diseña prompts para sistemas RAG que exigen citar fragmentos exactos y responder 'No sé' si no está en el contexto.",
    variables: [
      { name: "DOMINIO_RAG", label: "Dominio de la Base de Conocimiento", placeholder: "ej. Manuales técnicos de turbinas de aviación y mantenimiento preventivo" }
    ],
    template: `Eres un Ingeniero RAG (Retrieval-Augmented Generation) Senior.
Dominio: [DOMINIO_RAG].
Crea el prompt definitivo para inyectar chunks de documentos:
- Instrucción estricta: Responder ÚNICAMENTE utilizando los fragmentos proporcionados en <documents>.
- Regla Anti-Alucinación: Si la información no se encuentra en los documentos, responder exactamente "La documentación proporcionada no contiene información suficiente para responder a esta pregunta".
- Obligación de Citas: Citar el ID del documento y número de página de cada afirmación.`
  },
  {
    id: "meta-11",
    title: "Compositor de Agentes Multi-Rol para Debates Internos",
    category: "metaprompt",
    categoryLabel: "Meta-Prompts",
    icon: "terminal",
    tags: ["Multi-Agent", "Debate", "Consenso", "Roles"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Simula un comité de 3 expertos con visiones opuestas que debaten entre sí hasta alcanzar un consenso unificado.",
    variables: [
      { name: "DECISION_EMPRESARIAL", label: "Problema a Resolver por el Comité", placeholder: "ej. ¿Debemos lanzar un modelo Freemium o mantener solo prueba gratuita con tarjeta?" }
    ],
    template: `Eres un Orquestador de Sistemas Multi-Agente.
Decisión: [DECISION_EMPRESARIAL].
Simula el debate entre 3 perfiles especializados:
- Agente A (Chief Revenue Officer - Foco en ingresos inmediatos y monetización).
- Agente B (Head of Growth - Foco en viralidad y base de usuarios).
- Agente C (Lead Product Engineer - Foco en costes de servidores y soporte).
Estructura: Ronda 1 (Argumentos iniciales), Ronda 2 (Replicas cruzadas), Ronda 3 (Acuerdo y Síntesis Final de Consenso).`
  },
  {
    id: "meta-12",
    title: "Optimizador de Longitud de Contexto y Reducción de Consumo de Tokens",
    category: "metaprompt",
    categoryLabel: "Meta-Prompts",
    icon: "terminal",
    tags: ["Tokens", "Costes", "Compresión", "Eficiencia"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o", "DeepSeek-V3"],
    description: "Comprime prompts verbosos eliminando palabras redundantes sin perder precisión ni instrucciones clave.",
    variables: [
      { name: "PROMPT_LARGO", label: "Prompt Verboso", placeholder: "Pega el prompt excesivamente largo...", multiline: true }
    ],
    template: `Eres un Ingeniero de Optimización de Costes de Tokens.
Prompt a comprimir:
\`\`\`
[PROMPT_LARGO]
\`\`\`
Entrega:
1. Versión Comprimida y Densificada (reducción de al menos 40% de tokens manteniendo el 100% de la semántica y directrices).
2. Uso de notación compacta, símbolos y eliminación de cortesías innecesarias.
3. Tabla comparativa de conteo de palabras original vs optimizada.`
  },
  {
    id: "meta-13",
    title: "Diseñador de Function Calling / Tools Calling para Agentes",
    category: "metaprompt",
    categoryLabel: "Meta-Prompts",
    icon: "terminal",
    tags: ["Function Calling", "Tool Use", "Agentes", "API"],
    models: ["ChatGPT-4o", "Claude 3.5 Sonnet"],
    description: "Define declaraciones de herramientas y directrices claras de cuándo y cómo el modelo debe invocarlas.",
    variables: [
      { name: "HERRAMIENTAS_DISPONIBLES", label: "Herramientas o APIs", placeholder: "ej. search_database(query), send_slack_notification(channel, text), create_jira_ticket(title, priority)" }
    ],
    template: `Actúa como Diseñador de Tool Calling para Agentes Autónomos.
Herramientas: [HERRAMIENTAS_DISPONIBLES].
Crea las instrucciones del System Prompt:
1. Descripción de la función y parámetros de cada herramienta con tipos de datos.
2. Árbol de Decisiones: Cuándo llamar a una herramienta y cuándo responder directamente al usuario.
3. Protocolo de Confirmación para acciones destructivas (ej. eliminar o modificar datos).`
  },
  {
    id: "meta-14",
    title: "Generador de Prompts Negativos (Negative Prompting & Anti-Patterns)",
    category: "metaprompt",
    categoryLabel: "Meta-Prompts",
    icon: "terminal",
    tags: ["Negative Prompt", "Guardrails", "Restricciones", "Control"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Crea una lista exhaustiva de restricciones negativas para impedir respuestas genéricas, clichés y formatos no deseados.",
    variables: [
      { name: "TIPO_RESPUESTAS_A_EVITAR", label: "Vicios o Errores a Prohibir", placeholder: "ej. En redacción de emails evitar: intros con 'Espero te encuentres bien', adjetivos rimbombantes y despedidas formales rígidas" }
    ],
    template: `Eres un Especialista en Control de Calidad de Generación de Texto.
Conductas a erradicar: [TIPO_RESPUESTAS_A_EVITAR].
Genera un bloque de **Directrices Negativas Infranqueables (Negative Constraints)** listo para insertar en cualquier prompt maestro, categorizado por:
- Vocabulario y Frases Prohibidas.
- Estructuras Sintácticas Prohibidas.
- Comportamientos de Relleno (Fluff) Prohibidos.`
  },
  {
    id: "meta-15",
    title: "Creación de Prompts de Autocorrección y Reflexión (Self-Refine)",
    category: "metaprompt",
    categoryLabel: "Meta-Prompts",
    icon: "terminal",
    tags: ["Self-Refine", "Autocorrección", "Calidad", "Iteración"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o", "DeepSeek-R1"],
    description: "Obliga al modelo a generar un borrador inicial, criticar sus propios fallos y entregar una segunda versión perfeccionada.",
    variables: [
      { name: "TAREA_ALTA_EXIGENCIA", label: "Tarea de Alta Complejidad", placeholder: "ej. Redactar una propuesta comercial de $50,000 para un cliente corporativo exigente" }
    ],
    template: `Actúa como Diseñador de Algoritmos de Auto-Refinamiento (Self-Refine Framework).
Tarea: [TAREA_ALTA_EXIGENCIA].
Crea el prompt maestro en 3 fases:
- Paso 1 (Borrador): Genera una versión completa inicial.
- Paso 2 (Auto-Crítica): Analiza el borrador identificando debilidades, falta de impacto y redundancias.
- Paso 3 (Refinamiento Final): Entrega la versión pulida incorporando todas las mejoras.`
  },
  {
    id: "meta-16",
    title: "Generador de Metaprompts Recursivos (Prompts que Generan Prompts)",
    category: "metaprompt",
    categoryLabel: "Meta-Prompts",
    icon: "terminal",
    tags: ["Recursividad", "Meta-Prompting", "Generador", "Automatización"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Un prompt que interroga al usuario con preguntas clave para diseñar a medida el prompt perfecto para su necesidad.",
    variables: [
      { name: "AREA_APLICACION", label: "Área de Aplicación", placeholder: "ej. Creación de contenido audiovisual y guiones para TikTok" }
    ],
    template: `Eres una Fábrica de Prompts Interactiva especializada en [AREA_APLICACION].
Tu comportamiento:
1. Hazme exactamente 3 preguntas estratégicas sobre mi objetivo, audiencia y restricciones.
2. Espera mis respuestas.
3. Con base en mis respuestas, genera un Mega-Prompt perfecto con variables entre corchetes, rol asignado y ejemplos.
Inicia tú haciéndome las 3 preguntas clave.`
  },
  {
    id: "meta-17",
    title: "Ingeniero de Prompts para Extracción de Entidades Nombradas (NER)",
    category: "metaprompt",
    categoryLabel: "Meta-Prompts",
    icon: "terminal",
    tags: ["NER", "NLP", "Extracción", "Entidades"],
    models: ["ChatGPT-4o", "Claude 3.5 Sonnet"],
    description: "Extrae entidades (Personas, Organizaciones, Lugares, Fechas, Importes Monetarios) de textos desestructurados.",
    variables: [
      { name: "TIPO_DOCUMENTO_ENTIDADES", label: "Tipo de Texto", placeholder: "ej. Contratos de arrendamiento comercial y acuerdos de confidencialidad" }
    ],
    template: `Eres un Especialista en Procesamiento de Lenguaje Natural (NLP) y Extracción de Entidades.
Tipo de documentos: [TIPO_DOCUMENTO_ENTIDADES].
Diseña el prompt de extracción:
- Lista de entidades a capturar (Arrendador, Arrendatario, Inmueble, Renta mensual, Plazo, Fianza).
- Normalización de formatos (Fechas en ISO-8601 YYYY-MM-DD, Divisas con código ISO).
- Salida en Array JSON limpio con posición de texto de referencia.`
  },
  {
    id: "meta-18",
    title: "Diseñador de Prompts para Resumen Progresivo y Compresión de Textos Largos",
    category: "metaprompt",
    categoryLabel: "Meta-Prompts",
    icon: "terminal",
    tags: ["Resumen", "Compresión", "MapReduce", "Lectura"],
    models: ["Claude 3.5 Sonnet", "Gemini 1.5 Pro"],
    description: "Sintetiza documentos de cientos de páginas mediante técnicas de resumen por capas jerárquicas.",
    variables: [
      { name: "DOCUMENTO_EXTENSO", label: "Tipo de Archivo o Libro", placeholder: "ej. Informe anual financiero de 150 páginas de una empresa cotizada" }
    ],
    template: `Actúa como Arquitecto de Compresión de Información para [DOCUMENTO_EXTENSO].
Diseña el protocolo de resumen progresivo:
1. Nivel 1: Resumen ejecutivo de 1 página (High-level insights).
2. Nivel 2: Tabla de Hallazgos por Capítulo / Sección con métricas cuantitativas.
3. Nivel 3: Lista de Citas Textuales Críticas y decisiones pendientes.`
  },
  {
    id: "meta-19",
    title: "Generador de Directrices de Tono y Estilo de Marca (Brand Voice Prompts)",
    category: "metaprompt",
    categoryLabel: "Meta-Prompts",
    icon: "terminal",
    tags: ["Brand Voice", "Guía de Estilo", "Tono", "Branding"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Escribe un conjunto de directrices para que la IA adopte de forma inquebrantable el manual de tono de tu empresa.",
    variables: [
      { name: "VALORES_MARCA", label: "Valores y Estilo de la Marca", placeholder: "ej. Disruptiva, audaz, transparente, usa analogías de videojuegos, habla de 'tú', nunca condescendiente" }
    ],
    template: `Eres un Director de Identidad de Marca y Voz Verbal.
Valores de la marca: [VALORES_MARCA].
Crea el bloque de **Directrices de Voz y Tono** para el System Prompt:
- La Matriz "Somos X pero NUNCA Y" (ej. "Somos divertidos pero nunca infantiles").
- Reglas de Vocabulario (Palabras preferidas vs. Palabras vetadas).
- Ejemplos Antes/Después de transformación de textos.`
  },
  {
    id: "meta-20",
    title: "Especialista en Prompts para Razonamiento Espacial y Lógica Geométrica",
    category: "metaprompt",
    categoryLabel: "Meta-Prompts",
    icon: "terminal",
    tags: ["Razonamiento Espacial", "Geometría", "Coordenadas", "Visual"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Ayuda al LLM a no perderse en problemas espaciales representando mentalmente cuadrículas y matrices de coordenadas.",
    variables: [
      { name: "PROBLEMA_ESPACIAL", label: "Problema Espacial o de Movimiento", placeholder: "ej. Un robot se mueve en una cuadrícula 5x5 con obstáculos, calcular la ruta más corta" }
    ],
    template: `Actúa como Diseñador de Prompts para Razonamiento Espacial y de Cuadrículas.
Problema: [PROBLEMA_ESPACIAL].
Diseña el prompt:
- Forzar al modelo a imprimir primero la matriz visual en texto ASCII.
- Rastrear la posición paso a paso con coordenadas (X, Y) y orientación (Norte, Sur, Este, Oeste).
- Validar cada movimiento antes de calcular el paso siguiente.`
  }
];
