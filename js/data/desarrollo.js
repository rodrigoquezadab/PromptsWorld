/**
 * PROMPTS DE DESARROLLO & PROGRAMACIÓN (20 Prompts)
 */
const PROMPTS_DESARROLLO = [
  {
    id: "dev-web-init",
    title: "Creación de Proyecto Web Frontend + Git & README",
    category: "desarrollo",
    categoryLabel: "Desarrollo",
    icon: "code",
    tags: ["HTML5", "CSS3", "JavaScript", "Mobile-First", "Dark Mode", "Git", "README"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o", "DeepSeek-V3"],
    description: "Crea sitios web modernos en HTML/JS/CSS con enfoque mobile-first, dark mode por defecto, README profesional para GitHub e inicialización de Git.",
    variables: [
      { name: "PROPOSITO_SITIO", label: "Temática o Propósito del Sitio", placeholder: "ej. Catálogo de prompts interactivo" },
      { name: "REQUISITOS_ESTILO", label: "Estilo y UI", placeholder: "ej. Responsive, mobile-first y modo oscuro por defecto" },
      { name: "DOCUMENTACION", label: "Documentación y Git", placeholder: "ej. README completo con contexto y commit inicial" }
    ],
    template: `Vamos a crear un sitio web usando HTML, JS y CSS.
Propósito y temática: [PROPOSITO_SITIO].
Requisitos de diseño: [REQUISITOS_ESTILO].
Documentación y control de versiones: [DOCUMENTACION].

Instrucciones detalladas de ejecución:
1. Diseña una interfaz moderna con modo oscuro por defecto, arquitectura Mobile-First y total responsividad.
2. Organiza el contenido en categorías claras con búsqueda y filtros interactivos.
3. Genera un archivo README.md profesional que incluya: contexto del proyecto, badges, tabla de categorías y guía de uso.
4. Inicializa el repositorio Git (git init) y realiza el commit inicial estructurado.`
  },
  {
    id: "dev-01",
    title: "Revisor y Auditor de Código Senior",
    category: "desarrollo",
    categoryLabel: "Desarrollo",
    icon: "code",
    tags: ["Code Review", "Clean Code", "Seguridad", "Refactor"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o", "DeepSeek-V3"],
    description: "Analiza código en busca de vulnerabilidades, cuellos de botella, violaciones SOLID y malas prácticas.",
    variables: [
      { name: "LENGUAJE", label: "Lenguaje o Framework", placeholder: "ej. TypeScript / Node.js" },
      { name: "ENFOQUE", label: "Enfoque Principal", placeholder: "ej. Rendimiento y Seguridad" },
      { name: "CODIGO", label: "Fragmento de Código", placeholder: "Pega aquí tu código...", multiline: true }
    ],
    template: `Actúa como un Ingeniero de Software Principal y Auditor de Seguridad en [LENGUAJE]. Realiza una revisión exhaustiva del siguiente código priorizando [ENFOQUE]:
\`\`\`
[CODIGO]
\`\`\`
Estructura tu análisis en:
1. Evaluación General y Resumen Ejecutivo.
2. Vulnerabilidades y Riesgos Críticos (fugas de memoria, inyecciones, race conditions).
3. Optimización y Rendimiento (análisis Big O).
4. Principios SOLID & Clean Code.
5. Código Refactorizado listo para producción.`
  },
  {
    id: "dev-02",
    title: "Generador de Tests Unitarios e Integración",
    category: "desarrollo",
    categoryLabel: "Desarrollo",
    icon: "bug",
    tags: ["Testing", "Jest", "PyTest", "TDD", "Edge Cases"],
    models: ["ChatGPT-4o", "Claude 3.5 Sonnet"],
    description: "Genera suites de pruebas exhaustivas cubriendo casos límite, mocks y aserciones rigurosas.",
    variables: [
      { name: "FRAMEWORK_TEST", label: "Framework de Pruebas", placeholder: "ej. Vitest / Jest / PyTest" },
      { name: "FUNCION_O_MODULO", label: "Código a Testear", placeholder: "Pega el código...", multiline: true }
    ],
    template: `Eres un Especialista en QA y Automatización. Escribe una suite completa de pruebas usando [FRAMEWORK_TEST] para el siguiente código:
\`\`\`
[FUNCION_O_MODULO]
\`\`\`
Requisitos:
- Cobertura de Happy Path, Error Handling y Edge Cases extremos.
- Mocks para servicios externos y dependencias.
- Nomenclatura descriptiva siguiendo el patrón Given-When-Then o AAA.`
  },
  {
    id: "dev-03",
    title: "Arquitecto de Sistemas & Diagrama Mermaid",
    category: "desarrollo",
    categoryLabel: "Desarrollo",
    icon: "server",
    tags: ["Arquitectura", "Cloud", "Microservicios", "Mermaid"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Diseña arquitecturas escalables y genera diagramas Mermaid listos para documentación.",
    variables: [
      { name: "SISTEMA", label: "Tipo de Sistema", placeholder: "ej. Plataforma de Streaming de Video en Vivo" },
      { name: "ESCALABILIDAD", label: "Carga Esperada", placeholder: "ej. 500k usuarios concurrentes, 10k req/s" },
      { name: "RESTRICCIONES", label: "Stack Cloud / Presupuesto", placeholder: "ej. AWS, Kubernetes, Postgres, Redis" }
    ],
    template: `Actúa como Arquitecto Cloud Staff. Diseña la arquitectura para: [SISTEMA].
Carga: [ESCALABILIDAD]. Stack: [RESTRICCIONES].
Entrega:
1. Arquitectura de capas (API Gateway, Caching, Event Bus, DB).
2. Diagrama Mermaid completo en sintaxis 'mermaid'.
3. Estrategia de particionamiento, consistencia y failover.
4. Estimación de costes y trade-offs técnicos.`
  },
  {
    id: "dev-04",
    title: "Optimizador de Consultas SQL y Modelado DB",
    category: "desarrollo",
    categoryLabel: "Desarrollo",
    icon: "database",
    tags: ["SQL", "PostgreSQL", "MySQL", "Indexación", "Performance"],
    models: ["ChatGPT-4o", "DeepSeek-V3"],
    description: "Desglosa consultas pesadas, propone índices estratégicos y reescribe queries para alta concurrencia.",
    variables: [
      { name: "MOTOR_DB", label: "Motor de Base de Datos", placeholder: "ej. PostgreSQL 16" },
      { name: "TABLAS_SCHEMA", label: "Esquema de Tablas", placeholder: "ej. orders(id, user_id, amount, created_at)" },
      { name: "CONSULTA_SQL", label: "Consulta Lenta", placeholder: "Pega la consulta SQL...", multiline: true }
    ],
    template: `Eres un DBA y afinador de rendimiento SQL en [MOTOR_DB].
Esquema:
\`\`\`sql
[TABLAS_SCHEMA]
\`\`\`
Consulta:
\`\`\`sql
[CONSULTA_SQL]
\`\`\`
Realiza:
1. Identificación del cuello de botella y escaneos secuenciales.
2. DDL de índices recomendados (índices compuestos/parciales).
3. Consulta reescrita usando CTEs o Window Functions si optimizan el costo.
4. Explicación de reducción del plan de ejecución.`
  },
  {
    id: "dev-05",
    title: "Dockerizador & Pipeline CI/CD Multi-Etapa",
    category: "desarrollo",
    categoryLabel: "Desarrollo",
    icon: "terminal",
    tags: ["Docker", "DevOps", "CI/CD", "GitHub Actions"],
    models: ["ChatGPT-4o", "Claude 3.5 Sonnet"],
    description: "Crea Dockerfiles multi-stage livianos y flujos de GitHub Actions para testing, linting y deploy.",
    variables: [
      { name: "APP_STACK", label: "Stack de la Aplicación", placeholder: "ej. Node.js Fastify con Prisma ORM" },
      { name: "TARGET_CLOUD", label: "Destino de Despliegue", placeholder: "ej. AWS ECS / DigitalOcean Kubernetes / VPS" }
    ],
    template: `Eres un Ingeniero DevOps Senior. Para una aplicación [APP_STACK] destinada a [TARGET_CLOUD]:
1. Escribe un 'Dockerfile' multi-stage con tamaño mínimo, usuario no-root y cache de capas optimizado.
2. Escribe un archivo 'docker-compose.yml' para entorno de desarrollo local con live reload y servicios dependientes.
3. Genera un pipeline '.github/workflows/deploy.yml' con validación de tests, escaneo de vulnerabilidades Trivy y build de imagen Docker.`
  },
  {
    id: "dev-06",
    title: "Especialista en Migración y Refactor a TypeScript",
    category: "desarrollo",
    categoryLabel: "Desarrollo",
    icon: "code",
    tags: ["TypeScript", "JavaScript", "Tipado", "Refactor"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Convierte código JavaScript tradicional a TypeScript estricto con interfaces genéricas y type narrowing.",
    variables: [
      { name: "JS_CODE", label: "Código JavaScript", placeholder: "Pega el código JavaScript a tipar...", multiline: true }
    ],
    template: `Actúa como un Experto en TypeScript Estricto. Transforma el siguiente código JS a TS sin usar 'any':
\`\`\`javascript
[JS_CODE]
\`\`\`
Requisitos:
- Definir tipos e interfaces con Utility Types (Pick, Omit, Partial, Record).
- Aplicar Discriminated Unions y Type Guards para manejo seguro de tipos.
- Comentar los genéricos introducidos y tipar parámetros y retornos.`
  },
  {
    id: "dev-07",
    title: "Generador de Expresiones Regulares (Regex) con Explicación",
    category: "desarrollo",
    categoryLabel: "Desarrollo",
    icon: "terminal",
    tags: ["Regex", "Validación", "String", "Parsing"],
    models: ["ChatGPT-4o", "DeepSeek-V3"],
    description: "Diseña patrones regex ultra precisos con flags adecuadas, prevención de Catastrophic Backtracking y tests.",
    variables: [
      { name: "PATRON_BUSCADO", label: "Patrón o Formato a Validar", placeholder: "ej. Validar contraseñas seguras con al menos 1 mayúscula, 1 número y 1 carácter especial" },
      { name: "EJEMPLOS_VALIDOS", label: "Ejemplos Válidos", placeholder: "ej. Admin#2026, Pass@Word1" },
      { name: "EJEMPLOS_INVALIDOS", label: "Ejemplos Inválidos", placeholder: "ej. password, Admin123" }
    ],
    template: `Eres un Especialista en Expresiones Regulares y Motores Regex.
Crea una expresión regular para validar: [PATRON_BUSCADO].
Casos válidos: [EJEMPLOS_VALIDOS].
Casos inválidos: [EJEMPLOS_INVALIDOS].
Entrega:
1. Expresión regular final con flags (ej. /.../gmi).
2. Desglose detallado bloque a bloque de cómo funciona.
3. Comprobación de seguridad contra ReDoS (Denegación de servicio por Regex).`
  },
  {
    id: "dev-08",
    title: "Diseñador de API RESTful con Especificación OpenAPI/Swagger",
    category: "desarrollo",
    categoryLabel: "Desarrollo",
    icon: "server",
    tags: ["API REST", "OpenAPI", "Swagger", "Backend"],
    models: ["ChatGPT-4o", "Claude 3.5 Sonnet"],
    description: "Estructura endpoints RESTful limpios con códigos de estado HTTP correctos, payloads JSON y especificación YAML.",
    variables: [
      { name: "RECURSO_DOMINIO", label: "Dominio o Entidad", placeholder: "ej. Sistema de Gestión de Suscripciones y Facturación" }
    ],
    template: `Eres un Arquitecto de APIs RESTful. Diseña la API completa para [RECURSO_DOMINIO].
Entrega:
1. Tabla de Endpoints (Método HTTP, Ruta, Parámetros, Códigos de Respuesta 200, 201, 400, 401, 404, 422).
2. Estructura de respuestas estándar con paginación basada en cursores.
3. Especificación en formato OpenAPI 3.0 (YAML) lista para Swagger UI.`
  },
  {
    id: "dev-09",
    title: "Depurador Forense de Errores y Stack Traces",
    category: "desarrollo",
    categoryLabel: "Desarrollo",
    icon: "bug",
    tags: ["Debug", "Stack Trace", "Troubleshooting", "Logs"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o", "DeepSeek-V3"],
    description: "Analiza trazas de error complejas, identifica la causa raíz y provee la solución exacta en código.",
    variables: [
      { name: "STACK_TRACE", label: "Error y Stack Trace", placeholder: "Pega el log de error...", multiline: true },
      { name: "CONTEXTO_APP", label: "Contexto del Entorno", placeholder: "ej. Next.js 14 App Router en Vercel con Postgres" }
    ],
    template: `Actúa como un Ingeniero de Soporte Nivel 3 y Depuración de Sistemas.
Entorno: [CONTEXTO_APP].
Log / Stack Trace:
\`\`\`
[STACK_TRACE]
\`\`\`
Provee:
1. Causa Raíz Fundamental en 2 oraciones claras.
2. Por qué ocurrió (mecanismo del fallo).
3. Corrección paso a paso con código antes/después.
4. Medida preventiva para evitar regresiones.`
  },
  {
    id: "dev-10",
    title: "Auditor de Accesibilidad Web (WCAG 2.2 AA)",
    category: "desarrollo",
    categoryLabel: "Desarrollo",
    icon: "code",
    tags: ["a11y", "WCAG", "Accesibilidad", "ARIA"],
    models: ["ChatGPT-4o", "Claude 3.5 Sonnet"],
    description: "Audita componentes HTML/CSS en busca de problemas de contraste, lectores de pantalla y navegación por teclado.",
    variables: [
      { name: "COMPONENTE_HTML", label: "HTML/CSS del Componente", placeholder: "Pega el marcado HTML/CSS...", multiline: true }
    ],
    template: `Eres un Auditor Certificado en Accesibilidad Web WCAG 2.2 Nivel AA.
Audita el siguiente marcado:
\`\`\`html
[COMPONENTE_HTML]
\`\`\`
Evalúa:
1. Estructura semántica y roles ARIA necesarios.
2. Manejo de foco por teclado (tabindex, enter, space, esc).
3. Compatibilidad con lectores de pantalla.
4. Código corregido y accesible 100%.`
  },
  {
    id: "dev-11",
    title: "Generador de Scripts de Automatización Bash / PowerShell",
    category: "desarrollo",
    categoryLabel: "Desarrollo",
    icon: "terminal",
    tags: ["Bash", "PowerShell", "Automatización", "Scripts"],
    models: ["ChatGPT-4o", "DeepSeek-V3"],
    description: "Crea scripts de consola robustos con manejo de errores, flags de entrada, logs y ayuda (--help).",
    variables: [
      { name: "TAREA_AUTOMATIZAR", label: "Tarea a Realizar", placeholder: "ej. Backup de base de datos MySQL, comprimir en tar.gz y subir a S3 rotando backups de más de 30 días" },
      { name: "SHELL", label: "Entorno Shell", placeholder: "ej. Bash (Linux/macOS) o PowerShell 7 (Windows)" }
    ],
    template: `Eres un SysAdmin experto en scripting [SHELL]. Escribe un script profesional para: [TAREA_AUTOMATIZAR].
El script debe incluir:
- Manejo estricto de errores (set -euo pipefail en bash / $ErrorActionPreference en PS).
- Validación de argumentos y función de ayuda (--help).
- Mensajes informativos con timestamps y colores.
- Limpieza automática de archivos temporales (trap).`
  },
  {
    id: "dev-12",
    title: "Optimizador de Rendimiento Frontend & Core Web Vitals",
    category: "desarrollo",
    categoryLabel: "Desarrollo",
    icon: "zap",
    tags: ["Core Web Vitals", "LCP", "CLS", "Performance", "Lighthouse"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Estrategias concretas para maximizar puntuación de Lighthouse y mejorar LCP, FID, INP y CLS.",
    variables: [
      { name: "PROBLEMA_PERF", label: "Síntomas o Métricas Actuales", placeholder: "ej. LCP de 4.2s por imágenes pesadas y CLS de 0.25 por banners dinámicos" },
      { name: "STACK_FE", label: "Stack Frontend", placeholder: "ej. React / Next.js / Vanilla JS" }
    ],
    template: `Actúa como un Ingeniero de Rendimiento Web Senior especializado en Core Web Vitals en [STACK_FE].
Diagnóstico actual: [PROBLEMA_PERF].
Proporciona:
1. Estrategia para reducir LCP por debajo de 1.5s (preloads, responsive images, font display).
2. Solución para erradicar CLS a 0 (dimensiones de contenedores, skeleton loaders).
3. Optimización de JavaScript execution (tree shaking, dynamic imports, web workers).
4. Snippets de código listos para aplicar.`
  },
  {
    id: "dev-13",
    title: "Modelador de Esquemas NoSQL (MongoDB / DynamoDB)",
    category: "desarrollo",
    categoryLabel: "Desarrollo",
    icon: "database",
    tags: ["MongoDB", "DynamoDB", "NoSQL", "Mongoose"],
    models: ["ChatGPT-4o", "DeepSeek-V3"],
    description: "Diseña modelos de datos NoSQL eficientes aplicando patrones de embedding vs referencing y single-table design.",
    variables: [
      { name: "CASO_USO_NOSQL", label: "Requerimientos de Negocio", placeholder: "ej. Red social de audio con millones de comentarios y likes en tiempo real" },
      { name: "MOTOR_NOSQL", label: "Motor NoSQL", placeholder: "ej. MongoDB o DynamoDB" }
    ],
    template: `Eres un Arquitecto de Datos NoSQL experto en [MOTOR_NOSQL].
Diseña el esquema óptimo para: [CASO_USO_NOSQL].
Incluye:
1. Justificación de Incrustación (Embedding) vs. Referenciación (Referencing).
2. Esquema en formato JSON / Mongoose Schema.
3. Índices secundarios (GSI / Compound Indexes) para consultas frecuentes.
4. Estrategia de sharding y crecimiento horizontal.`
  },
  {
    id: "dev-14",
    title: "Ingeniero de Prompts para APIs de LLMs (LangChain / OpenAI SDK)",
    category: "desarrollo",
    categoryLabel: "Desarrollo",
    icon: "cpu",
    tags: ["LLM", "LangChain", "OpenAI API", "Python", "RAG"],
    models: ["ChatGPT-4o", "Claude 3.5 Sonnet"],
    description: "Escribe código de integración con LLMs con streaming, Structured Outputs (JSON Schema), function calling y retries.",
    variables: [
      { name: "SDK_LENGUAJE", label: "SDK y Lenguaje", placeholder: "ej. OpenAI SDK en TypeScript / Node.js" },
      { name: "OBJETIVO_AGENTE", label: "Función del Agente", placeholder: "ej. Extraer datos estructurados de facturas en PDF y validar totales" }
    ],
    template: `Eres un Ingeniero de Software IA especializado en [SDK_LENGUAJE].
Implementa una solución robusta para: [OBJETIVO_AGENTE].
Requisitos de código:
- Usar 'Structured Outputs' con Zod / Pydantic para garantizar JSON válido.
- Manejo de fallos con backoff exponencial y timeouts.
- Implementación con streaming de respuestas.
- Logs estructurados de consumo de tokens.`
  },
  {
    id: "dev-15",
    title: "Generador de Políticas de Seguridad Web (CSP, CORS, Headers)",
    category: "desarrollo",
    categoryLabel: "Desarrollo",
    icon: "server",
    tags: ["Seguridad", "CSP", "CORS", "Headers", "OWASP"],
    models: ["ChatGPT-4o", "Claude 3.5 Sonnet"],
    description: "Configura cabeceras HTTP de máxima seguridad para blindar aplicaciones contra XSS, Clickjacking y CSRF.",
    variables: [
      { name: "FRAMEWORK_SERVER", label: "Servidor o Framework", placeholder: "ej. Nginx / Express / Next.js" },
      { name: "SERVICIOS_TERCEROS", label: "Dominios de Terceros Usados", placeholder: "ej. Google Analytics, Stripe, CDN de fuentes" }
    ],
    template: `Actúa como Especialista en Ciberseguridad Web OWASP.
Configura las cabeceras de seguridad para [FRAMEWORK_SERVER] considerando estos servicios externos: [SERVICIOS_TERCEROS].
Entrega:
1. Content-Security-Policy (CSP) estricto con nonces/hashes.
2. Headers HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy y Permissions-Policy.
3. Configuración CORS segura sin comodines abiertos (*).`
  },
  {
    id: "dev-16",
    title: "Diseñador de Algoritmos y Estructuras de Datos Avanzadas",
    category: "desarrollo",
    categoryLabel: "Desarrollo",
    icon: "code",
    tags: ["Algoritmos", "Estructuras de Datos", "LeetCode", "Optimización"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o", "DeepSeek-V3"],
    description: "Resuelve problemas algorítmicos complejos con análisis paso a paso y la menor complejidad temporal/espacial.",
    variables: [
      { name: "PROBLEMA_ALGORITMICO", label: "Descripción del Problema", placeholder: "ej. Encontrar el subarreglo contiguo con la suma máxima (Algoritmo de Kadane) con índices" },
      { name: "LENGUAJE_PREF", label: "Lenguaje", placeholder: "ej. Python 3 / TypeScript / Go" }
    ],
    template: `Eres un Campeón de Programación Competitiva y Profesor de Algoritmos.
Resuelve en [LENGUAJE_PREF]: [PROBLEMA_ALGORITMICO].
Proceso:
1. Enfoque de Fuerza Bruta y por qué no es óptimo.
2. Enfoque Óptimo con explicación intuitiva.
3. Código limpio, documentado y tipado.
4. Análisis riguroso de Big O en Tiempo y Espacio.`
  },
  {
    id: "dev-17",
    title: "Especialista en GraphQL (Schema, Resolvers y N+1 Problem)",
    category: "desarrollo",
    categoryLabel: "Desarrollo",
    icon: "server",
    tags: ["GraphQL", "DataLoader", "Apollo", "Backend"],
    models: ["ChatGPT-4o", "Claude 3.5 Sonnet"],
    description: "Crea esquemas GraphQL limpios, resolvers desacoplados y previene el problema N+1 mediante DataLoader.",
    variables: [
      { name: "ENTIDADES_GQL", label: "Entidades y Relaciones", placeholder: "ej. Users -> Posts -> Comments" },
      { name: "STACK_GQL", label: "Stack GraphQL", placeholder: "ej. Node.js con Apollo Server y Prisma" }
    ],
    template: `Eres un Arquitecto GraphQL Staff en [STACK_GQL].
Para las entidades [ENTIDADES_GQL]:
1. Escribe el schema SDL (types, queries, mutations, subscriptions).
2. Implementa los resolvers con manejo de autorización.
3. Demuestra cómo resolver el problema N+1 usando DataLoader con batching y cache.`
  },
  {
    id: "dev-18",
    title: "Auditor de Git & Resolución de Conflictos Complejos",
    category: "desarrollo",
    categoryLabel: "Desarrollo",
    icon: "terminal",
    tags: ["Git", "Rebase", "Cherry-pick", "Workflow"],
    models: ["ChatGPT-4o", "Claude 3.5 Sonnet"],
    description: "Guía paso a paso para resolver rebases conflictivos, recuperar commits perdidos con git reflog o reescribir historial.",
    variables: [
      { name: "PROBLEMA_GIT", label: "Escenario o Error en Git", placeholder: "ej. Hice commit en main por error y necesito mover los últimos 3 commits a una nueva rama y resetear main al remoto" }
    ],
    template: `Eres el Gurú de Git de la empresa.
Escenario a solucionar: [PROBLEMA_GIT].
Entrega:
1. Diagnóstico seguro de la situación.
2. Comandos exactos a ejecutar en la terminal paso a paso.
3. Explicación de qué hace cada comando y cómo verificar con 'git log --graph'.
4. Protocolo de emergencia por si algo sale mal (uso de git reflog).`
  },
  {
    id: "dev-19",
    title: "Especialista en Microfrontends & Arquitectura Modular",
    category: "desarrollo",
    categoryLabel: "Desarrollo",
    icon: "code",
    tags: ["Microfrontends", "Module Federation", "Webpack", "Vite"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Diseña estrategias de microfrontends con Module Federation, aislamiento de estilos y comunicación entre apps.",
    variables: [
      { name: "SISTEMA_MFE", label: "Caso de Uso y Dominios", placeholder: "ej. E-commerce con Checkout independiente, Catálogo y Dashboard de Usuario" },
      { name: "HERRAMIENTA_BUILD", label: "Herramienta de Build", placeholder: "ej. Vite con @originjs/vite-plugin-federation o Webpack 5" }
    ],
    template: `Actúa como Principal Frontend Architect.
Diseña una arquitectura de Microfrontends para: [SISTEMA_MFE] usando [HERRAMIENTA_BUILD].
Provee:
1. Configuración del Host (Shell) y los Remotes.
2. Estrategia de estado compartido y bus de eventos.
3. Gestión de dependencias compartidas (singletons de React/Vue).
4. CI/CD y despliegue independiente sin romper el host.`
  },
  {
    id: "dev-20",
    title: "Generador de Documentación Técnica de Código (JSDoc / Sphinx)",
    category: "desarrollo",
    categoryLabel: "Desarrollo",
    icon: "feather",
    tags: ["Documentación", "JSDoc", "Markdown", "Arquitectura"],
    models: ["ChatGPT-4o", "Claude 3.5 Sonnet"],
    description: "Genera comentarios JSDoc/Docstrings completos, diagramas de flujo y manual de integración para desarrolladores.",
    variables: [
      { name: "CODIGO_A_DOCUMENTAR", label: "Código / Módulo", placeholder: "Pega el código sin documentar...", multiline: true },
      { name: "ESTILO_DOC", label: "Formato Deseado", placeholder: "ej. JSDoc con ejemplos @example y tipado @param" }
    ],
    template: `Eres un Technical Writer e Ingeniero Senior.
Documenta el siguiente código usando [ESTILO_DOC]:
\`\`\`
[CODIGO_A_DOCUMENTAR]
\`\`\`
Genera:
1. Bloques de documentación profesional en el código.
2. Descripción de parámetros, valores de retorno y excepciones arrojadas (@throws).
3. Guía rápida de uso (Quickstart) con ejemplos funcionales en Markdown.`
  }
];
