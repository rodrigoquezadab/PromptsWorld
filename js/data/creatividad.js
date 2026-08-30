/**
 * PROMPTS DE CREATIVIDAD & BRAINSTORMING (20 Prompts)
 */
const PROMPTS_CREATIVIDAD = [
  {
    id: "creat-01",
    title: "Generador de Ideas Disruptivas con Metodología SCAMPER",
    category: "creatividad",
    categoryLabel: "Creatividad",
    icon: "lightbulb",
    tags: ["Brainstorming", "SCAMPER", "Innovación", "Startups"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Aplica la metodología SCAMPER para generar 7 ángulos innovadores y soluciones no convencionales.",
    variables: [
      { name: "INDUSTRIA_PROBLEMA", label: "Industria o Problema", placeholder: "ej. Alquiler de departamentos para nómadas digitales" },
      { name: "TENDENCIA_ACTUAL", label: "Tendencia a Cruzar", placeholder: "ej. IA Agéntica y Microcomunidades" }
    ],
    template: `Actúa como Diseñador de Innovación y Estratega de Pensamiento Lateral.
Industria: [INDUSTRIA_PROBLEMA]. Tendencia: [TENDENCIA_ACTUAL].
Aplica la técnica SCAMPER para generar 7 ángulos radicales:
- S (Sustituir), C (Combinar), A (Adaptar), M (Modificar), P (Poner en otros usos), E (Eliminar), R (Reordenar/Invertir).
Concluye seleccionando las 2 ideas más viables para prototipar en 48 horas.`
  },
  {
    id: "creat-02",
    title: "Técnica de los Seis Sombreros para Pensar (Edward de Bono)",
    category: "creatividad",
    categoryLabel: "Creatividad",
    icon: "lightbulb",
    tags: ["Seis Sombreros", "Edward de Bono", "Decisiones", "Innovación"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Evalúa un proyecto o idea desde 6 perspectivas cognitivas: datos, emociones, riesgos, beneficios, creatividad y control.",
    variables: [
      { name: "PROYECTO_O_DECISION", label: "Proyecto a Evaluar", placeholder: "ej. Lanzar un marketplace de servicios donde el precio lo fije el comprador mediante subastas inversas" }
    ],
    template: `Actúa como Facilitador Maestro del Método de los Seis Sombreros (Edward de Bono).
Propuesta: [PROYECTO_O_DECISION].
Analiza la propuesta sombrero a sombrero:
- Blanco (Hechos y Datos objetivos): Qué sabemos y qué información nos falta.
- Rojo (Emociones e Intuición): Reacciones viscerales de usuarios y equipo.
- Negro (Juicio Crítico y Riesgos): Por qué podría fallar estrepitosamente.
- Amarillo (Optimismo y Beneficios): El mejor escenario posible.
- Verde (Creatividad y Alternativas): Ideas locas para superar los bloqueos.
- Azul (Control y Conclusiones): Síntesis y próximos pasos.`
  },
  {
    id: "creat-03",
    title: "Generador de Nombres de Marcas y Productos (Naming Studio)",
    category: "creatividad",
    categoryLabel: "Creatividad",
    icon: "lightbulb",
    tags: ["Naming", "Branding", "Marcas", "Startups"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Genera 20 propuestas de nombres originales clasificados por estilos (neologismos, compuestos, evocativos, abstractos).",
    variables: [
      { name: "CONCEPTO_PRODUCTO", label: "Qué hace tu Producto", placeholder: "ej. Plataforma para crear contratos inteligentes sin saber programar" },
      { name: "VIBRA_MARCA", label: "Sensación Deseada", placeholder: "ej. Moderna, confiable, ágil, tecnológica pero accesible" }
    ],
    template: `Eres el Director de un Estudio de Naming y Branding Internacional.
Producto: [CONCEPTO_PRODUCTO]. Personalidad: [VIBRA_MARCA].
Genera 20 nombres organizados en 4 categorías:
1. Neologismos / Palabras Inventadas (5).
2. Palabras Compuestas / Portmanteau (5).
3. Nombres Evocativos / Metafóricos (5).
4. Nombres Cortos / Punchy de 4-6 letras (5).
Para cada nombre, incluye su etimología y disponibilidad conceptual de dominios .com / .io.`
  },
  {
    id: "creat-04",
    title: "Técnica del Peor Escenario Posible (Reverse Brainstorming)",
    category: "creatividad",
    categoryLabel: "Creatividad",
    icon: "lightbulb",
    tags: ["Reverse Brainstorming", "Problemas", "Soluciones", "Innovación"],
    models: ["ChatGPT-4o", "Claude 3.5 Sonnet"],
    description: "Ideación a través de la destrucción: ¿Cómo podríamos hacer que el problema sea 10 veces peor? Luego invierte cada respuesta.",
    variables: [
      { name: "META_A_MEJORAR", label: "Proceso o Meta", placeholder: "ej. Cómo mejorar la retención de usuarios en una app de fitness en su primera semana" }
    ],
    template: `Actúa como un Consultor de Innovación Disruptiva.
Meta deseada: [META_A_MEJORAR].
Aplica Reverse Brainstorming:
1. Pregunta Inversa: '¿Cómo podríamos lograr que el 100% de los usuarios odien la app y la desinstalen en las primeras 24 horas?' (Genera 8 respuestas malévolamente creativas).
2. Inversión Estratégica: Invierte cada una de esas 8 ideas destructivas en su opuesto brillante y positivo.
3. Las 3 Funcionalidades Reveladoras que surgen del ejercicio.`
  },
  {
    id: "creat-05",
    title: "Creador de Mundos de Ficción y Worldbuilding (Sci-Fi / Fantasía)",
    category: "creatividad",
    categoryLabel: "Creatividad",
    icon: "lightbulb",
    tags: ["Worldbuilding", "Ficción", "Sci-Fi", "Fantasía"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Diseña universos consistentes: geografía, sistemas de magia o tecnología, facciones políticas y cultura.",
    variables: [
      { name: "PREMISA_MUNDO", label: "Premisa Central del Universo", placeholder: "ej. Un planeta donde la noche dura 20 años y las sombras cobran vida" }
    ],
    template: `Eres un Arquitecto de Universos Literarios y Diseñador de Worldbuilding.
Premisa: [PREMISA_MUNDO].
Diseña este mundo:
1. Leyes Naturales o Sistema de Magia/Tecnología con sus costes y limitaciones estrictas.
2. 3 Facciones Políticas o Especies con sus intereses en conflicto.
3. Tradiciones Culturales, Ritos de Paso y Tabúes Sagrados.
4. Una Leyenda Histórica que todos los habitantes conocen pero que oculta un secreto oscuro.`
  },
  {
    id: "creat-06",
    title: "Generador de Prompts Artísticos para Midjourney y DALL-E 3",
    category: "creatividad",
    categoryLabel: "Creatividad",
    icon: "lightbulb",
    tags: ["Midjourney", "DALL-E", "Prompts Arte", "Visual"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Crea prompts hiperdetallados con estilo artístico, lente de cámara, iluminación volumétrica y parámetros técnicos (--ar, --v, --style).",
    variables: [
      { name: "ESCENA_DESEADA", label: "Idea de la Imagen", placeholder: "ej. Un astronauta meditando en un jardín zen japonés en Marte con cerezos flotantes" },
      { name: "ESTILO_VISUAL", label: "Estilo Artístico", placeholder: "ej. Fotografía cinematográfica 35mm, Cyberpunk suave o Ilustración hiperrealista" }
    ],
    template: `Eres un Director de Arte Digital e Ingeniero de Prompts para Midjourney v6 y DALL-E 3.
Escena: [ESCENA_DESEADA]. Estilo: [ESTILO_VISUAL].
Genera:
1. 3 Variaciones completas en inglés con descriptores de iluminación (octane render, volumetric light, ray tracing, cinematic color grading).
2. Parámetros técnicos recomendados (--ar 16:9, --style raw, --v 6.0, --stylize 250).
3. Paleta de colores Hexadecimal de soporte.`
  },
  {
    id: "creat-07",
    title: "Gamificación de Procesos Aburridos (Framework Octalysis)",
    category: "creatividad",
    categoryLabel: "Creatividad",
    icon: "lightbulb",
    tags: ["Gamificación", "Octalysis", "Engagement", "Psicología"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Convierte tareas tediosas en dinámicas adictivas aplicando los 8 motores centrales de motivación humana.",
    variables: [
      { name: "PROCESO_TEDIOSO", label: "Proceso a Gamificar", placeholder: "ej. El reporte de gastos y subida de facturas mensuales de los comerciales de una empresa" }
    ],
    template: `Actúa como Yu-kai Chou y Especialista en Gamificación y Framework Octalysis.
Proceso: [PROCESO_TEDIOSO].
Diseña una experiencia gamificada:
1. Significado Épico y Llamado: El encuadre narrativo de la tarea.
2. Desarrollo y Logro: Puntos, insignias, niveles y barras de progreso visuales.
3. Empoderamiento de la Creatividad y Feedback: Recompensas instantáneas.
4. Presión Social y Competencia Amigable entre pares.
5. Reglas del juego para que no se sienta infantil sino gratificante.`
  },
  {
    id: "creat-08",
    title: "Creación de Podcasts y Shows en Video (Formato y Estructura)",
    category: "creatividad",
    categoryLabel: "Creatividad",
    icon: "lightbulb",
    tags: ["Podcast", "Show", "Contenido", "Audiovisual"],
    models: ["ChatGPT-4o", "Claude 3.5 Sonnet"],
    description: "Diseña el concepto, segmentos recurrentes, dinámicas de interacción y estilo para un nuevo show de audio o video.",
    variables: [
      { name: "TEMATICA_PODCAST", label: "Temática y Tono", placeholder: "ej. Entrevistas desenfadadas a fundadores de startups sobre sus peores fracasos" }
    ],
    template: `Eres un Productor Ejecutivo de Shows y Podcasts de Alto Rating.
Temática: [TEMATICA_PODCAST].
Diseña la biblia del formato:
1. Nombre del Show y Eslogan inolvidable.
2. Estructura de 4 Segmentos Fijos por episodio (ej. 'La Pregunta Incómoda', 'El Juicio del Fracaso', 'El Consejo de 1 Millón').
3. Ritual de Entrada y Despedida (Catchphrase del presentador).
4. 5 Primeras Ideas de Episodios con invitados hipotéticos y titulares gancho.`
  },
  {
    id: "creat-09",
    title: "Generador de Tramas con Giros Argumentales (Plot Twists)",
    category: "creatividad",
    categoryLabel: "Creatividad",
    icon: "lightbulb",
    tags: ["Plot Twist", "Guion", "Storytelling", "Suspense"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Diseña giros de tuerca inesperados pero sembrados con pistas sutiles (Foreshadowing) que dejan al lector boquiabierto.",
    variables: [
      { name: "SITUACION_INICIAL", label: "Trama o Situación Actual", placeholder: "ej. Un detective investiga la desaparición de un millonario en una mansión aislada durante una tormenta de nieve" }
    ],
    template: `Eres un Guionista de Cine especializado en Thrillers Psicológicos (estilo Christopher Nolan / M. Night Shyamalan).
Premisa: [SITUACION_INICIAL].
Genera 3 Giros Argumentales radicales:
- Opción 1: El Giro de Identidad (Quien creemos que es el protagonista no lo es).
- Opción 2: El Giro de Percepción Temporal o Tecnológica.
- Opción 3: El Giro Moral (El villano resulta ser la única persona cuerda).
Para cada giro, incluye 3 pistas sutiles que deben plantarse al inicio de la historia.`
  },
  {
    id: "creat-10",
    title: "Ideación de Micro-SaaS y Productos Digitales para Solopreneurs",
    category: "creatividad",
    categoryLabel: "Creatividad",
    icon: "lightbulb",
    tags: ["Micro-SaaS", "Indie Hacker", "Negocios", "Startups"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Genera 5 conceptos de software de nicho, construibles en 1 semana por un solo desarrollador y monetizables desde el día 1.",
    variables: [
      { name: "NICHO_O_API", label: "Nicho o API a Explotar", placeholder: "ej. Profesionales inmobiliarios o APIs de WhatsApp y Google Sheets" }
    ],
    template: `Actúa como un Indie Hacker veterano que factura $30k MRR con Micro-SaaS.
Nicho o API: [NICHO_O_API].
Genera 5 conceptos de Micro-SaaS de alta viabilidad:
Para cada uno:
- El Dolor Agudo específico que resuelve.
- La Funcionalidad Única (Core Feature) construible en menos de 7 días.
- Modelo de Precios B2B ($19-$99/mes).
- Estrategia de Adquisición de los primeros 10 clientes de pago sin anuncios.`
  },
  {
    id: "creat-11",
    title: "Técnica de Combinación de Conceptos Forzada (Random Input / Mashup)",
    category: "creatividad",
    categoryLabel: "Creatividad",
    icon: "lightbulb",
    tags: ["Mashup", "Pensamiento Lateral", "Creatividad", "Innovación"],
    models: ["ChatGPT-4o", "Claude 3.5 Sonnet"],
    description: "Obliga a cruzar tu problema con una palabra aleatoria de la naturaleza o la arquitectura para desatar ideas fuera de la caja.",
    variables: [
      { name: "PROBLEMA_ACTUAL", label: "Tu Problema de Negocio o Diseño", placeholder: "ej. Cómo reducir el abandono de carritos en una tienda online" },
      { name: "ELEMENTO_ALEATORIO", label: "Objeto o Sistema Aleatorio", placeholder: "ej. Un hormiguero o Un aeropuerto internacional" }
    ],
    template: `Eres un Facilitador de Creatividad y Pensamiento Lateral Provocativo.
Problema: [PROBLEMA_ACTUAL]. Elemento aleatorio: [ELEMENTO_ALEATORIO].
1. Extrae 5 características fundamentales de [ELEMENTO_ALEATORIO] (ej. roles especializados, feromonas, túneles de escape, señalización visual).
2. Fuerza la conexión de cada una de esas 5 características con tu problema.
3. Desarrolla las 2 soluciones más innovadoras y aplicables resultantes del cruce.`
  },
  {
    id: "creat-12",
    title: "Diseñador de Escape Rooms y Rompecabezas Narrativos",
    category: "creatividad",
    categoryLabel: "Creatividad",
    icon: "lightbulb",
    tags: ["Escape Room", "Puzzles", "Juegos", "Narrativa"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Diseña secuencias de acertijos lógicos integrados orgánicamente con la historia de una sala temática.",
    variables: [
      { name: "TEMATICA_ESCAPE", label: "Ambientación de la Sala", placeholder: "ej. El laboratorio secreto de Nikola Tesla en 1899" }
    ],
    template: `Actúa como Mastermind y Diseñador Principal de Escape Rooms.
Ambientación: [TEMATICA_ESCAPE].
Diseña una experiencia de 60 minutos:
1. La Narrativa y el Objetivo Final de Escape.
2. Cadena de 4 Acertijos Progresivos (1 Lógico-espacial, 1 Criptográfico con objetos de la época, 1 Electromecánico y 1 Acertijo final cooperativo).
3. Pistas ambientales y diseño sonoro.`
  },
  {
    id: "creat-13",
    title: "Generador de Metáforas Visuales para Ilustradores y Diseñadores",
    category: "creatividad",
    categoryLabel: "Creatividad",
    icon: "lightbulb",
    tags: ["Ilustración", "Metáfora", "Diseño", "Conceptual"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Crea conceptos visuales editoriales (estilo The New Yorker / The Economist) para representar ideas abstractas.",
    variables: [
      { name: "CONCEPTO_ABSTRACTO", label: "Tema o Titular a Ilustrar", placeholder: "ej. La trampa del éxito: cuando el crecimiento desmedido asfixia a la propia empresa" }
    ],
    template: `Eres un Director de Ilustración Editorial de The New Yorker.
Concepto abstracto: [CONCEPTO_ABSTRACTO].
Genera 4 conceptos de ilustraciones conceptuales:
- Propuesta 1: La Paradoja Física (Yuxtaposición de dos objetos imposibles).
- Propuesta 2: El Cambio de Escala (Lo diminuto controlando lo gigante).
- Propuesta 3: Espacio Negativo y Siluetas Dobles.
- Propuesta 4: Simbolismo Poético y Minimalista.`
  },
  {
    id: "creat-14",
    title: "Creador de Arquetipos de Personajes con Sombras Psicológicas (Jung)",
    category: "creatividad",
    categoryLabel: "Creatividad",
    icon: "lightbulb",
    tags: ["Personajes", "Jung", "Psicología", "Ficción"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Crea personajes multidimensionales con motivación consciente, herida del pasado (The Lie) y sombra inconsciente.",
    variables: [
      { name: "ROL_HISTORIA", label: "Rol o Profesión del Personaje", placeholder: "ej. Un juez implacable que descubre que su hija cometió un delito grave" }
    ],
    template: `Actúa como Analista de Personajes y Guionista Senior (psicología de Carl Jung).
Personaje: [ROL_HISTORIA].
Desarrolla su ficha psicológica:
1. La Máscara (Persona): Cómo se presenta ante la sociedad.
2. La Herida Secreta (The Lie): La creencia errónea que guía sus acciones.
3. La Sombra Inconsciente: Lo que reprime y detesta en los demás.
4. El Dilema Moral Clímax que lo obligará a transformarse o destruirse.`
  },
  {
    id: "creat-15",
    title: "Reinvención de Objetos Cotidianos (Rediseño Crítico)",
    category: "creatividad",
    categoryLabel: "Creatividad",
    icon: "lightbulb",
    tags: ["Diseño Industrial", "Rediseño", "Innovación", "UX"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Cuestiona la ergonomía, materialidad y función de un objeto mundano para reinventarlo desde cero.",
    variables: [
      { name: "OBJETO_A_REINVENTAR", label: "Objeto Cotidiano", placeholder: "ej. El paraguas tradicional que se dobla con el viento y gotea en interiores" }
    ],
    template: `Eres un Diseñador Industrial y de Experiencia de Producto (estilo Dyson / Teenage Engineering).
Objeto: [OBJETO_A_REINVENTAR].
Rediséñalo por completo:
1. Anatomía de los 3 grandes defectos del diseño tradicional.
2. Rediseño Radical: Nueva mecánica, materiales sostenibles y factor de forma.
3. La Experiencia de Uso (Unboxing, transporte, mantenimiento).
4. Dibujo conceptual descriptivo en texto de su estética.`
  },
  {
    id: "creat-16",
    title: "Generador de Eventos Interactivos y Dinámicas Rompehielos (Icebreakers)",
    category: "creatividad",
    categoryLabel: "Creatividad",
    icon: "lightbulb",
    tags: ["Icebreakers", "Eventos", "Team Building", "Divertido"],
    models: ["ChatGPT-4o", "Claude 3.5 Sonnet"],
    description: "Crea dinámicas grupales memorables de 10 minutos que rompen la frialdad sin dar vergüenza ajena.",
    variables: [
      { name: "TIPO_EVENTO_GRUPO", label: "Tipo de Evento y Audiencia", placeholder: "ej. Retiro de empresa remoto con 40 desarrolladores introvertidos" }
    ],
    template: `Eres un Facilitador de Experiencias Grupales y Team Building.
Audiencia: [TIPO_EVENTO_GRUPO].
Diseña 3 dinámicas rompehielos:
- Dinámica 1: Rápida y de baja exposición (a través de chat o encuestas visuales).
- Dinámica 2: Cooperativa y de misterio en grupos pequeños de 4 personas.
- Dinámica 3: Basada en historias curiosas o talentos ocultos.`
  },
  {
    id: "creat-17",
    title: "Diseñador de Juegos de Mesa y Mecánicas Lúdicas",
    category: "creatividad",
    categoryLabel: "Creatividad",
    icon: "lightbulb",
    tags: ["Juegos de Mesa", "Game Design", "Mecánicas", "Prototipo"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Crea la premisa y el bucle de juego principal (Core Game Loop) para un juego de mesa de estrategia o cartas.",
    variables: [
      { name: "TEMA_JUEGO", label: "Tema y Estilo de Juego", placeholder: "ej. Juego de cartas rápido sobre ciberseguridad donde unos son hackers y otros sysadmins" }
    ],
    template: `Actúa como un Diseñador de Juegos de Mesa Galardonado (estilo Klaus Teuber / Eric Lang).
Tema: [TEMA_JUEGO].
Diseña el prototipo:
1. El Core Game Loop (Qué hace un jugador en su turno en 3 pasos).
2. Condición de Victoria y Manejo de la Tensión.
3. Tipos de Cartas o Componentes con sus habilidades especiales.
4. Mecánica anti-líder (para evitar que quien vaya ganando arrase sin emoción).`
  },
  {
    id: "creat-18",
    title: "Especialista en Humor Absurdo y Parodias Satíricas",
    category: "creatividad",
    categoryLabel: "Creatividad",
    icon: "lightbulb",
    tags: ["Satira", "Humor", "The Onion", "Parodia"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Escribe artículos satíricos y parodias al estilo 'The Onion' o 'El Mundo Today' con crítica mordaz.",
    variables: [
      { name: "TEMA_SATIRA", label: "Tema a Satirizar", placeholder: "ej. Las empresas de tecnología que sustituyen todo su personal por IA y luego contratan personas en secreto para corregir la IA" }
    ],
    template: `Eres el Editor Principal de un Periódico Satírico Internacional (The Onion).
Tema a parodiar: [TEMA_SATIRA].
Escribe la pieza:
1. Titular Satírico Perfecto (con la premisa graciosa completa en el título).
2. 3 Párrafos de Noticia ficticia con declaraciones de personajes absurdos pero dolorosamente realistas.
3. Gráfico o Pie de Foto ficticio de remate humorístico.`
  },
  {
    id: "creat-19",
    title: "Generador de Nombres de Dominio Creativos y Hacks (.is, .ly, .ai)",
    category: "creatividad",
    categoryLabel: "Creatividad",
    icon: "lightbulb",
    tags: ["Dominios", "Domain Hacks", "Startups", "Branding"],
    models: ["ChatGPT-4o", "Claude 3.5 Sonnet"],
    description: "Crea combinaciones ingeniosas de dominios usando extensiones TLD globales para nombres memorables.",
    variables: [
      { name: "MARCA_SERVICIO", label: "Marca o Concepto", placeholder: "ej. Herramienta de resumen instantáneo de audio" }
    ],
    template: `Eres un Estratega de Dominios y Naming Digital.
Concepto: [MARCA_SERVICIO].
Genera 15 ideas de dominios:
- 5 Domain Hacks creativos (ej. aud.io, sum.ma, lis.tn).
- 5 Dominios .ai / .co / .io modernos y cortos.
- 5 Combinaciones de verbo + sustantivo listas para registrar.`
  },
  {
    id: "creat-20",
    title: "Especialista en Biomímesis (Soluciones Inspiradas en la Naturaleza)",
    category: "creatividad",
    categoryLabel: "Creatividad",
    icon: "lightbulb",
    tags: ["Biomímesis", "Naturaleza", "Ingeniería", "Innovación"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Resuelve problemas de ingeniería o logística analizando cómo plantas, animales y ecosistemas han resuelto lo mismo tras millones de años de evolución.",
    variables: [
      { name: "RETO_TECNOLOGICO", label: "Reto de Diseño o Ingeniería", placeholder: "ej. Cómo disipar el calor en servidores de centros de datos sin consumir toneladas de agua" }
    ],
    template: `Eres un Científico e Ingeniero Especialista en Biomímesis.
Reto: [RETO_TECNOLOGICO].
Investiga la naturaleza:
1. 3 Organismos vivos que resolvieron este problema de disipación/enfriamiento de forma extrema (ej. termiteros africanos, piel de escarabajos del desierto, vasos sanguíneos de ballenas).
2. El principio biofísico exacto utilizado.
3. La traducción de ese principio biológico a un prototipo tecnológico aplicable hoy.`
  }
];
