/**
 * PROMPTS DE APRENDIZAJE & ESTUDIO (20 Prompts)
 */
const PROMPTS_APRENDIZAJE = [
  {
    id: "learn-01",
    title: "Tutor con Método Feynman y Analogías Cotidianas",
    category: "aprendizaje",
    categoryLabel: "Aprendizaje",
    icon: "book-open",
    tags: ["Feynman", "Pedagogía", "Conceptos Complejos", "Estudio"],
    models: ["ChatGPT-4o", "Claude 3.5 Sonnet", "Gemini 1.5 Pro"],
    description: "Desglosa temas difíciles explicándolos como si fueras un niño de 10 años con analogías vívidas.",
    variables: [
      { name: "TEMA_COMPLEJO", label: "Tema o Concepto", placeholder: "ej. Cómo funcionan los Zero-Knowledge Proofs en Criptografía" },
      { name: "NIVEL_ACTUAL", label: "Tu Nivel de Conocimiento", placeholder: "ej. Principiante sin base matemática avanzada" }
    ],
    template: `Eres Richard Feynman combinado con el mejor pedagogo del mundo.
Nivel actual: [NIVEL_ACTUAL]. Concepto a enseñar: [TEMA_COMPLEJO].
Sigue la técnica Feynman:
1. La Analogía Cotidiana (como si fuera una historia o mecanismo que un niño de 10 años entienda al instante).
2. Los 3 Principios Fundamentales que sostienen todo.
3. Errores Comunes y Falsas Creencias de la mayoría.
4. Ejemplo Práctico Aplicado en el mundo real actual.
5. Pregunta Interactiva de Autoevaluación para comprobar si lo comprendí.`
  },
  {
    id: "learn-02",
    title: "Simulador de Entrevistas de Trabajo y Evaluador Interactivo",
    category: "aprendizaje",
    categoryLabel: "Aprendizaje",
    icon: "book-open",
    tags: ["Entrevistas", "Carrera", "Simulador", "Roleplay"],
    models: ["ChatGPT-4o", "Claude 3.5 Sonnet"],
    description: "Realiza simulacros de entrevista pregunta por pregunta, evaluando tus respuestas con el método STAR.",
    variables: [
      { name: "PUESTO", label: "Puesto al que Postulas", placeholder: "ej. Senior Product Manager en una FinTech" },
      { name: "EMPRESA_TIPO", label: "Tipo de Empresa", placeholder: "ej. Startup de rápido crecimiento en fase Scale-up" }
    ],
    template: `Actúa como el Entrevistador Principal para el puesto de [PUESTO] en [EMPRESA_TIPO].
Reglas de la simulación:
1. Conducirás una entrevista rigurosa. Hazme solo UNA pregunta a la vez y espera mi respuesta.
2. Tras recibir mi respuesta, califícala del 1 al 10, destaca un acierto, señala una mejora usando el framework STAR (Situación, Tarea, Acción, Resultado) y luego hazme la siguiente pregunta.
Para comenzar, salúdame e inicia con la primera pregunta.`
  },
  {
    id: "learn-03",
    title: "Tutor de Diálogo Socrático (Descubre la Verdad con Preguntas)",
    category: "aprendizaje",
    categoryLabel: "Aprendizaje",
    icon: "book-open",
    tags: ["Sócrates", "Filosofía", "Pensamiento Crítico", "Lógica"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "No te da las respuestas directamente; te guía con preguntas profundas para que descubras tus propias contradicciones y soluciones.",
    variables: [
      { name: "DILEMA_O_PREGUNTA", label: "Tema o Dilema a Explorar", placeholder: "ej. ¿Es ético que los algoritmos de IA tomen decisiones sobre créditos bancarios o diagnósticos médicos?" }
    ],
    template: `Actúa como Sócrates en el ágora de Atenas.
Tema a investigar: [DILEMA_O_PREGUNTA].
Reglas pedagógicas:
- No me des afirmaciones categóricas ni resúmenes cerrados.
- Respóndeme siempre con 1 o 2 preguntas incisivas que pongan a prueba mis premisas fundamentales.
- Ayúdame a descubrir contradicciones o supuestos no examinados en mi razonamiento.
- Comienza saludándome y haciéndome tu primera pregunta inquisitiva sobre el tema.`
  },
  {
    id: "learn-04",
    title: "Generador de Flashcards y Preguntas de Repetición Espaciada (Anki)",
    category: "aprendizaje",
    categoryLabel: "Aprendizaje",
    icon: "book-open",
    tags: ["Anki", "Flashcards", "Memorización", "Spaced Repetition"],
    models: ["ChatGPT-4o", "DeepSeek-V3"],
    description: "Convierte cualquier texto o tema en tarjetas Anki con formato Frente/Dorso, tarjetas Cloze (rellenar huecos) y nemotecnias.",
    variables: [
      { name: "MATERIAL_ESTUDIO", label: "Texto o Conceptos a Memorizar", placeholder: "Pega el texto del tema...", multiline: true }
    ],
    template: `Eres un Especialista en Ciencia de la Memoria y Repetición Espaciada (Anki).
Material a transformar:
\`\`\`
[MATERIAL_ESTUDIO]
\`\`\`
Genera 10 tarjetas Anki de alta retención:
1. 5 Tarjetas Básicas: Pregunta precisa en el Frente, Respuesta atómica en el Dorso.
2. 5 Tarjetas Cloze Deletion (con sintaxis {{c1::palabra oculta}}).
3. 2 Reglas Nemotécnicas o Palacios de la Memoria para los conceptos más difíciles.`
  },
  {
    id: "learn-05",
    title: "Profesor de Idiomas Nativo con Corrección Explicativa",
    category: "aprendizaje",
    categoryLabel: "Aprendizaje",
    icon: "book-open",
    tags: ["Idiomas", "Inglés", "Gramática", "Conversación"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Mantiene una conversación realista en el idioma objetivo, corrigiendo amablemente tus errores gramaticales y modismos.",
    variables: [
      { name: "IDIOMA_OBJETIVO", label: "Idioma que Estás Aprendiendo", placeholder: "ej. Inglés Avanzado C1" },
      { name: "SITUACION_ROLEPLAY", label: "Situación o Escenario", placeholder: "ej. Negociando el aumento de salario con mi jefe en una empresa de software" }
    ],
    template: `Actúa como mi Profesor Nativo de [IDIOMA_OBJETIVO].
Escenario: [SITUACION_ROLEPLAY].
En cada interacción tuya:
1. Responde a mi mensaje manteniendo la conversación viva y natural en [IDIOMA_OBJETIVO].
2. Agrega una sección al final llamada 📝 **Feedback**:
   - Correcciones de gramática o vocabulario si cometí algún fallo.
   - Una alternativa más natural o nativa para decir lo mismo.
Comienza tú iniciando la conversación en el escenario fijado.`
  },
  {
    id: "learn-06",
    title: "Diseñador de Mapas Mentales y Esquemas Conceptuales Jerárquicos",
    category: "aprendizaje",
    categoryLabel: "Aprendizaje",
    icon: "book-open",
    tags: ["Mapa Mental", "Esquemas", "Organización", "Visual"],
    models: ["ChatGPT-4o", "Claude 3.5 Sonnet"],
    description: "Estructura un tema extenso en un mapa mental jerárquico con código Mermaid de tipo mindmap.",
    variables: [
      { name: "TEMA_MAPA", label: "Tema a Esquematizar", placeholder: "ej. Historia de la Inteligencia Artificial: de Alan Turing a los Transformers y Agentes Autónomos" }
    ],
    template: `Eres un Especialista en Organización Visual del Conocimiento.
Tema: [TEMA_MAPA].
Entrega:
1. Mapa Jerárquico en formato Markdown con viñetas anidadas (Nodo Central -> 4 Ramas Principales -> Sub-ramas).
2. Diagrama en código Mermaid con sintaxis 'mindmap' listo para copiar y visualizar.
3. Resumen de las conexiones interdisciplinarias más sorprendentes del tema.`
  },
  {
    id: "learn-07",
    title: "Generador de Exámenes Simulados y Quizzes de Opción Múltiple",
    category: "aprendizaje",
    categoryLabel: "Aprendizaje",
    icon: "book-open",
    tags: ["Quiz", "Examen", "Evaluación", "Test"],
    models: ["ChatGPT-4o", "Claude 3.5 Sonnet"],
    description: "Crea exámenes tipo test rigurosos con justificación pedagógica de por qué cada opción es correcta o incorrecta.",
    variables: [
      { name: "MATERIA_EXAMEN", label: "Materia o Certificación", placeholder: "ej. Certificación AWS Certified Solutions Architect Associate" },
      { name: "CANTIDAD_PREGUNTAS", label: "Número de Preguntas", placeholder: "ej. 5 preguntas de nivel intermedio-avanzado" }
    ],
    template: `Actúa como Diseñador de Exámenes Oficiales para [MATERIA_EXAMEN].
Genera [CANTIDAD_PREGUNTAS]:
Para cada pregunta:
- Enunciado claro con caso de uso práctico.
- 4 Opciones de respuesta (A, B, C, D).
- Clave de respuesta correcta oculta con explicación exhaustiva de por qué la correcta es la mejor y por qué los distractores fallan.`
  },
  {
    id: "learn-08",
    title: "Desglosador de Artículos Científicos y Papers (Arxiv / PubMed)",
    category: "aprendizaje",
    categoryLabel: "Aprendizaje",
    icon: "book-open",
    tags: ["Papers", "Ciencia", "Investigación", "Arxiv"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Analiza publicaciones científicas complejas desmenuzando hipótesis, metodología, limitaciones y resultados clave.",
    variables: [
      { name: "RESUMEN_O_PAPER", label: "Título o Abstract del Paper", placeholder: "Pega el abstract o texto del estudio...", multiline: true }
    ],
    template: `Eres un Investigador Principal y Revisor Académico (Peer Reviewer).
Paper a analizar:
\`\`\`
[RESUMEN_O_PAPER]
\`\`\`
Desglosa el paper:
1. La Pregunta de Investigación Central y la Hipótesis.
2. Metodología y Conjunto de Datos utilizados.
3. Hallazgo Principal y Métricas Clave de Rendimiento.
4. Limitaciones y Sesgos no resueltos por los autores.
5. Implicación Práctica en la industria o futuras investigaciones.`
  },
  {
    id: "learn-09",
    title: "Coach de Modelos Mentales para la Toma de Decisiones",
    category: "aprendizaje",
    categoryLabel: "Aprendizaje",
    icon: "book-open",
    tags: ["Modelos Mentales", "Decisiones", "Charlie Munger", "Lógica"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Evalúa un dilema o decisión personal/profesional a través del prisma de 5 modelos mentales clásicos.",
    variables: [
      { name: "DILEMA_DECISION", label: "Decisión o Dilema a Evaluar", placeholder: "ej. ¿Debo dejar mi empleo estable para unirme como cofundador a una startup en fase temprana?" }
    ],
    template: `Actúa como Charlie Munger y Consultor de Modelos Mentales Multidisciplinarios.
Dilema: [DILEMA_DECISION].
Analiza la situación aplicando:
1. Primeros Principios (First Principles Thinking): Descomponer el problema en sus verdades fundamentales.
2. Inversión (Inversion): ¿Cómo garantizar el fracaso total y cómo evitarlo?
3. Pensamiento de Segundo Orden (Second-Order Thinking): Consecuencias de las consecuencias a 1, 3 y 5 años.
4. Coste de Oportunidad real.
5. Conclusión equilibrada y recomendación de acción.`
  },
  {
    id: "learn-10",
    title: "Tutor de Oratoria y Estructuración de Charlas TEDx",
    category: "aprendizaje",
    categoryLabel: "Aprendizaje",
    icon: "book-open",
    tags: ["TEDx", "Oratoria", "Presentaciones", "Pitch"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Ayuda a pulir tu 'Idea que vale la pena difundir' y estructurar una presentación de 12 a 15 minutos.",
    variables: [
      { name: "IDEA_CHARLA", label: "La Idea Central de tu Charla", placeholder: "ej. La soledad urbana moderna puede erradicarse rediseñando los espacios comunes de las ciudades" }
    ],
    template: `Eres el Curador Principal de Charlas TEDx.
Idea propuesta: [IDEA_CHARLA].
Estructura la charla de 15 minutos:
- Minuto 0-2: La apertura que rompe esquemas y empatiza con el público.
- Minuto 2-6: El Problema y por qué las soluciones tradicionales han fracasado.
- Minuto 6-11: La Revelación / Tu Propuesta y la evidencia que la respalda.
- Minuto 11-14: La Visión de Futuro (Cómo cambia el mundo si aplicamos esto).
- Minuto 14-15: La Frase Final para que la audiencia recuerde tu charla por años.`
  },
  {
    id: "learn-11",
    title: "Generador de Currículum y Plan de Estudio Autodidacta de 12 Semanas",
    category: "aprendizaje",
    categoryLabel: "Aprendizaje",
    icon: "book-open",
    tags: ["Syllabus", "Autodidacta", "Roadmap", "Carrera"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Diseña una ruta de aprendizaje estructurada semana a semana con recursos gratuitos, lecturas y proyectos prácticos.",
    variables: [
      { name: "HABILIDAD_A_APRENDER", label: "Habilidad o Dominio", placeholder: "ej. Ingeniería de Datos moderna con Python, SQL, dbt y Snowflake" },
      { name: "DEDICACION_SEMANAL", label: "Horas Disponibles por Semana", placeholder: "ej. 8 horas a la semana" }
    ],
    template: `Eres un Diseñador Curricular Universitario y Mentor Profesional.
Objetivo: Aprender [HABILIDAD_A_APRENDER]. Tiempo: [DEDICACION_SEMANAL].
Diseña un Plan de Estudio de 12 Semanas:
- Dividido en 3 Bloques de 4 semanas (Fundamentos, Práctica Intermedia, Maestría y Proyectos).
- Para cada semana: Objetivo concreto, temas teóricos, recursos recomendados (documentación oficial, cursos abiertos) y un ejercicio práctico obligatorio.
- Proyecto Final de Portafolio para la semana 12.`
  },
  {
    id: "learn-12",
    title: "Entrenador de Lectura Rápida y Comprensión Crítica",
    category: "aprendizaje",
    categoryLabel: "Aprendizaje",
    icon: "book-open",
    tags: ["Lectura Rápida", "Comprensión", "Skimming", "Estudio"],
    models: ["ChatGPT-4o", "Claude 3.5 Sonnet"],
    description: "Técnicas de pre-lectura, escaneo (scanning/skimming) y extracción de argumentos sin perder comprensión.",
    variables: [
      { name: "TIPO_MATERIAL", label: "Material de Lectura", placeholder: "ej. Ensayos académicos densos de sociología y economía" }
    ],
    template: `Actúa como Instructor de Lectura de Alto Rendimiento y Comprensión Sintópica (Método Adler).
Material: [TIPO_MATERIAL].
Provee:
1. El Método de Pre-lectura en 3 Minutos (Índice, conclusiones, gráficos, primeros párrafos).
2. Técnicas para erradicar la subvocalización y ampliar el campo visual periférico.
3. El Protocolo de Toma de Notas Marginales para sintetizar capítulos enteros en 3 viñetas.`
  },
  {
    id: "learn-13",
    title: "Analizador de Falacias Lógicas y Sesgos Cognitivos",
    category: "aprendizaje",
    categoryLabel: "Aprendizaje",
    icon: "book-open",
    tags: ["Falacias", "Lógica", "Debate", "Pensamiento Crítico"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Analiza discursos, debates o artículos detectando falacias ad hominem, hombres de paja, falsos dilemas y sesgos.",
    variables: [
      { name: "ARGUMENTO_A_ANALIZAR", label: "Texto o Argumento", placeholder: "Pega el texto del debate o afirmación...", multiline: true }
    ],
    template: `Eres un Catedrático de Lógica Formal y Pensamiento Crítico.
Texto a auditar:
\`\`\`
[ARGUMENTO_A_ANALIZAR]
\`\`\`
Realiza el análisis:
1. Lista de Falacias Lógicas detectadas con su nombre formal (ej. Hombre de paja, Falso dilema, Pendiente resbaladiza) y la cita exacta donde ocurre.
2. Sesgos Cognitivos subyacentes en el emisor.
3. Versión del argumento reconstruida de forma rigurosa y válida (Principio de Caridad interpretativa).`
  },
  {
    id: "learn-14",
    title: "Tutor de Matemáticas y Estadística Intuitiva",
    category: "aprendizaje",
    categoryLabel: "Aprendizaje",
    icon: "book-open",
    tags: ["Matemáticas", "Estadística", "Intuición", "Cálculo"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o", "DeepSeek-V3"],
    description: "Explica conceptos matemáticos abstractos (derivadas, autovectores, teorema de Bayes) a través de intuición geométrica y ejemplos.",
    variables: [
      { name: "CONCEPTO_MATEMATICO", label: "Concepto Abstracto", placeholder: "ej. Teorema de Bayes y su diferencia con la probabilidad clásica" }
    ],
    template: `Actúa como Grant Sanderson (creador de 3Blue1Brown).
Explica: [CONCEPTO_MATEMATICO].
Estructura:
1. La Intuición Geométrica o Visual detrás de la fórmula (sin empezar con números áridos).
2. La Paradoja o Pregunta Inicial que motivó el descubrimiento histórico.
3. La Fórmula paso a paso con el significado físico/real de cada variable.
4. Un ejemplo numérico cotidiano paso a paso.`
  },
  {
    id: "learn-15",
    title: "Especialista en Escritura Académica y Tesis (Estructura IMRyD)",
    category: "aprendizaje",
    categoryLabel: "Aprendizaje",
    icon: "book-open",
    tags: ["Tesis", "Académico", "Metodología", "Investigación"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Estructura capítulos de tesis y artículos científicos según el estándar IMRyD (Introducción, Métodos, Resultados y Discusión).",
    variables: [
      { name: "TEMA_TESIS", label: "Tema de la Tesis", placeholder: "ej. Impacto de las microfinanzas impulsadas por fintechs en comunidades rurales" }
    ],
    template: `Eres un Asesor de Tesis Doctoral y Metodólogo Senior.
Tema: [TEMA_TESIS].
Desarrolla el plan metodológico:
1. Planteamiento del Problema, Justificación y Pregunta Principal.
2. Marco Teórico y Estado del Arte (categorías clave de literatura a revisar).
3. Marco Metodológico (Población, Muestra, Instrumentos cualitativos/cuantitativos).
4. Estructura de Capítulos recomendada.`
  },
  {
    id: "learn-16",
    title: "Simulador de Debate Académico con Abogado del Diablo",
    category: "aprendizaje",
    categoryLabel: "Aprendizaje",
    icon: "book-open",
    tags: ["Debate", "Abogado del Diablo", "Argumentación", "Lógica"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Toma la postura contraria a tu tesis con los argumentos más sólidos y despiadados para que fortalezcas tu defensa.",
    variables: [
      { name: "MI_POSTURA", label: "Tu Tesis o Postura", placeholder: "ej. El trabajo remoto al 100% es superior en productividad y bienestar que cualquier esquema presencial" }
    ],
    template: `Actúa como el Abogado del Diablo y Opositor de Debate de élite.
Mi postura es: "[MI_POSTURA]".
Tu misión:
- Destruye mi argumento presentando los 3 contraargumentos más fuertes, respaldados por estudios y evidencia contraria.
- Señala los puntos ciegos de mi visión.
- Hazme una pregunta inquisitiva final obligándome a defender mi punto más vulnerable.`
  },
  {
    id: "learn-17",
    title: "Creador de Analogías Cruzadas Interdisciplinarias",
    category: "aprendizaje",
    categoryLabel: "Aprendizaje",
    icon: "book-open",
    tags: ["Analogías", "Creatividad", "Pedagogía", "Ciencia"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Explica un concepto de un campo A utilizando únicamente conceptos y metáforas de un campo B totalmente distinto.",
    variables: [
      { name: "CONCEPTO_ORIGEN", label: "Concepto a Explicar", placeholder: "ej. La arquitectura de microservicios y APIs" },
      { name: "DOMINIO_ANALOGIA", label: "Mundo de la Metáfora", placeholder: "ej. La cocina de un restaurante de alta gastronomía" }
    ],
    template: `Eres un Maestro de la Metáfora y Pedagogía Cruzada.
Explica [CONCEPTO_ORIGEN] utilizando exclusivamente el universo de [DOMINIO_ANALOGIA].
Crea una analogía paso a paso mapeando cada componente técnico a su equivalente exacto en la metáfora, demostrando cómo interactúan los elementos y qué sucede cuando un componente falla.`
  },
  {
    id: "learn-18",
    title: "Guía de Memorización con Técnica del Palacio de la Memoria (Método Loci)",
    category: "aprendizaje",
    categoryLabel: "Aprendizaje",
    icon: "book-open",
    tags: ["Palacio de la Memoria", "Loci", "Mnemotecnia", "Memoria"],
    models: ["ChatGPT-4o", "Claude 3.5 Sonnet"],
    description: "Convierte listas de datos o secuencias en un recorrido imaginario vívido por una casa o lugar familiar para retenerlas por años.",
    variables: [
      { name: "ELEMENTOS_A_MEMORIZAR", label: "Lista a Memorizar", placeholder: "ej. Los 10 principios de diseño de Dieter Rams" }
    ],
    template: `Eres un Gran Maestro Internacional de la Memoria.
Lista: [ELEMENTOS_A_MEMORIZAR].
Construye un Palacio de la Memoria:
1. Establece un recorrido lógico por 5 habitaciones de una casa típica.
2. Para cada elemento, crea una imagen mental visualmente exagerada, ridícula o con movimiento para fijarla en un mueble específico.
3. Instrucciones para repasar el palacio mentalmente a las 24 horas y 7 días.`
  },
  {
    id: "learn-19",
    title: "Profesor de Historia con Crónica Inmersiva en Primera Persona",
    category: "aprendizaje",
    categoryLabel: "Aprendizaje",
    icon: "book-open",
    tags: ["Historia", "Narrativa", "Inmersión", "Roleplay"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Revive momentos históricos cruciales narrados desde los ojos de un testigo de la época con rigor histórico.",
    variables: [
      { name: "EVENTO_HISTORICO", label: "Evento Histórico", placeholder: "ej. La caída de Constantinopla en 1453 o la llegada a la Luna en 1969" },
      { name: "PERSPECTIVA_TESTIGO", label: "Rol del Narrador", placeholder: "ej. Un cartógrafo genovés en las murallas o un ingeniero de control de vuelo en Houston" }
    ],
    template: `Actúa como un Historiador y Novelista Histórico de rigor impecable.
Evento: [EVENTO_HISTORICO]. Perspectiva: [PERSPECTIVA_TESTIGO].
Escribe una crónica inmersiva:
- Detalles sensoriales auténticos de la época (olores, sonidos, tecnología disponible).
- El ambiente de tensión y las decisiones críticas que se tomaron en ese instante.
- Reflexión final sobre el impacto duradero que este día tendría en la historia de la humanidad.`
  },
  {
    id: "learn-20",
    title: "Entrenador de Pensamiento Visual y Dibujo de Conceptos (Sketchnoting)",
    category: "aprendizaje",
    categoryLabel: "Aprendizaje",
    icon: "book-open",
    tags: ["Sketchnote", "Visual", "Toma de Notas", "Creatividad"],
    models: ["ChatGPT-4o", "Claude 3.5 Sonnet"],
    description: "Convierte ideas abstractas en metáforas visuales sencillas e iconos dibujables para tomar notas ilustradas.",
    variables: [
      { name: "CONCEPTO_VISUALIZAR", label: "Concepto o Charla", placeholder: "ej. La paradoja de la elección de Barry Schwartz (a más opciones, menos satisfacción)" }
    ],
    template: `Eres un Facilitador Gráfico e Instructor de Sketchnoting.
Concepto: [CONCEPTO_VISUALIZAR].
Proporciona instrucciones para dibujarlo en una libreta:
1. La Metáfora Central en 1 dibujo principal (explicada con figuras geométricas básicas: círculos, rectángulos, flechas).
2. 4 Iconos de apoyo para los puntos secundarios con instrucciones de trazo paso a paso.
3. Jerarquía de texto y uso de contenedores (burbujas de diálogo, banners, marcos).`
  }
];
