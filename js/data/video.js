/**
 * PROMPTS DE VIDEO & ANIMACIÓN IA (20 Prompts)
 */
const PROMPTS_VIDEO = [
  {
    id: "vid-01",
    title: "Prompts Cinematográficos con Movimiento de Cámara para Runway Gen-3 / Sora",
    category: "video",
    categoryLabel: "Video & Animación",
    icon: "video",
    tags: ["Runway Gen-3", "Sora", "Video IA", "Cinematográfico", "Cámara"],
    models: ["Runway Gen-3 Alpha", "OpenAI Sora", "Luma Dream Machine"],
    description: "Describe movimientos de cámara precisos (FPV drone, orbit shot, dolly in, tracking pan), iluminación volumétrica y coherencia temporal.",
    variables: [
      { name: "ACCION_ESCENA", label: "Sujeto y Acción en Movimiento", placeholder: "ej. Un samurái caminando bajo la lluvia en un bosque de bambú iluminado por linternas rojas" },
      { name: "MOVIMIENTO_CAMARA", label: "Movimiento de Cámara Cinematográfica", placeholder: "ej. Slow tracking shot from low angle, smoothly following the footsteps, camera dollying forward" }
    ],
    template: `Cinematic movie scene, [ACCION_ESCENA], [MOVIMIENTO_CAMARA], 35mm anamorphic lens flare, shallow depth of field, natural motion blur, volumetric rain and mist, hyper-realistic, 4k 24fps resolution, directed by Denis Villeneuve --motion 6 --camera smooth`
  },
  {
    id: "vid-02",
    title: "Generador de Storyboards y Plan de Rodaje Escena por Escena",
    category: "video",
    categoryLabel: "Video & Animación",
    icon: "video",
    tags: ["Storyboard", "Plan de Rodaje", "Dirección", "Cine"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Desglosa un guion en planos técnicos: Tipo de plano (Wide, Medium, Close-up), ángulo, movimiento, sonido y duración exacta.",
    variables: [
      { name: "SINOPSIS_ESCENA", label: "Sinopsis de la Escena", placeholder: "ej. Un hacker se da cuenta en tiempo real de que el sistema de seguridad que está vulnerando pertenece a su propia empresa" }
    ],
    template: `Actúa como Director de Cine y Diseñador de Storyboards.
Escena: [SINOPSIS_ESCENA].
Desglosa la secuencia en 6 planos cinematográficos:
Tabla con columnas:
| Plano # | Tipo de Plano | Ángulo y Movimiento | Acción Visual | Audio / Diálogo | Duración |
Incluye la indicación de iluminación y la emoción psicológica que busca transmitir cada encuadre.`
  },
  {
    id: "vid-03",
    title: "Creación de Videos Promocionales de Producto en 3D (Comercial Hyper-Realistic)",
    category: "video",
    categoryLabel: "Video & Animación",
    icon: "video",
    tags: ["Video Producto", "Luma", "Comercial", "3D Render"],
    models: ["Luma Dream Machine", "Runway Gen-3", "Kling AI"],
    description: "Animaciones de producto flotando en 360°, despiece de componentes mecánicos y luces de estudio dinámicas.",
    variables: [
      { name: "PRODUCTO_VIDEO", label: "Producto", placeholder: "ej. Zapatillas deportivas ultraligeras con suela de espuma translúcida brillante" }
    ],
    template: `Commercial 3D product animation of [PRODUCTO_VIDEO], floating in mid-air with gentle 360-degree slow rotation, dynamic studio studio rim lighting sweeping across the metallic materials, water droplets bursting outwards in ultra slow-motion, Apple commercial aesthetic, 4k cinematic render, smooth seamless motion loop`
  },
  {
    id: "vid-04",
    title: "Especialista en Edición de Video de Ritmo Rápido (Alex Hormozi / MrBeast Style)",
    category: "video",
    categoryLabel: "Video & Animación",
    icon: "video",
    tags: ["Edición", "Premiere", "CapCut", "YouTube", "Retención"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Planifica cortes cada 2 segundos, zooms dinámicos, subtítulos animados con emojis, sonidos SFX 'Whoosh' y B-rolls.",
    variables: [
      { name: "CONTENIDO_VIDEO", label: "Tema y Mensaje del Video Corto", placeholder: "ej. 3 Hábitos financieros que me hicieron millonario a los 25 años" }
    ],
    template: `Eres el Editor Principal de Canales de YouTube de Más de 10 Millones de Suscriptores.
Tema: [CONTENIDO_VIDEO].
Diseña la guía de edición segundo a segundo para un video de 45 segundos:
- [00-03s]: Hook visual extremo + Punch sound effect.
- [04-15s]: Subtítulos animados palabra por palabra con palabras clave en amarillo/verde y emojis pop.
- [16-35s]: 4 Cambios de escala de zoom (100% -> 120% -> 105%) y transiciones con sound design 'Whoosh' y 'Pop'.
- [36-45s]: Bucle perfecto (Seamless loop) para que el final conecte con el principio.`
  },
  {
    id: "vid-05",
    title: "Generador de Prompts para Videos de Naturaleza Time-Lapse / Hyper-Lapse",
    category: "video",
    categoryLabel: "Video & Animación",
    icon: "video",
    tags: ["Time-Lapse", "Hyper-Lapse", "Naturaleza", "Fotografía"],
    models: ["Runway Gen-3", "Sora", "Kling AI"],
    description: "Crea espectaculares secuencias aceleradas: floración de orquídeas, movimiento de la Vía Láctea o crecimiento urbano nocturno.",
    variables: [
      { name: "EVENTO_TIMELAPSE", label: "Fenómeno Acelerado", placeholder: "ej. El florecimiento de una flor de cerezo en primavera con gotas de lluvia y salida del sol" }
    ],
    template: `Stunning 8k time-lapse video of [EVENTO_TIMELAPSE], rapid cinematic natural progression, smooth lighting transition from dawn to bright midday sun, ultra-high definition details, vibrant vivid colors, BBC Planet Earth documentary style, photorealistic smooth frame blending --fps 60`
  },
  {
    id: "vid-06",
    title: "Director de Efectos Visuales (VFX) y Composición de Escenas de Acción",
    category: "video",
    categoryLabel: "Video & Animación",
    icon: "video",
    tags: ["VFX", "After Effects", "CGI", "Acción", "Composición"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Diseña la integración de CGI con actores reales: pantallas verdes, tracking de puntos, partículas mágicas y explosiones volumétricas.",
    variables: [
      { name: "ESCENA_VFX", label: "Efecto a Integrar", placeholder: "ej. Un personaje abre un portal dimensional brillante en medio de una calle concurrida que distorsiona la gravedad" }
    ],
    template: `Actúa como Supervisor de Efectos Visuales (VFX Supervisor) para producciones cinematográficas.
Escena VFX: [ESCENA_VFX].
Plan técnico:
1. Requisitos de Rodaje en Set (Marcadores de tracking, iluminación de referencia interactiva, plate limpio de fondo).
2. Capas de Composición en After Effects / Nuke (Capa de distorsión de lente, partículas de chispas, refracción del aire).
3. Corrección de Color y Matchmaking de grano para que el CGI no parezca falso.`
  },
  {
    id: "vid-07",
    title: "Generador de Animaciones de Pizarra Blanca y Videos Explicativos (Explainer Video)",
    category: "video",
    categoryLabel: "Video & Animación",
    icon: "video",
    tags: ["Explainer", "Animación", "Whiteboard", "Educativo"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Estructura videos explicativos animados en 2D para SaaS o productos educativos con personajes claros y metáforas visuales.",
    variables: [
      { name: "SOFTWARE_O_CONCEPTO", label: "Producto a Explicar", placeholder: "ej. Un software de firma electrónica segura para despachos de abogados" }
    ],
    template: `Eres un Productor de Videos Explicativos Animados de Alto Impacto.
Producto: [SOFTWARE_O_CONCEPTO].
Escribe el guion audiovisual de 60 segundos:
- [00-10s]: Presentación del personaje (El abogado ahogado en papeles y contratos perdidos).
- [11-25s]: La frustración y el dinero que pierde cada mes.
- [26-45s]: Descubrimiento del producto y animación de cómo se firma un documento en 3 clics desde el móvil.
- [46-60s]: El resultado de alivio y tranquilidad + Llamado a la acción claro con prueba gratuita.`
  },
  {
    id: "vid-08",
    title: "Prompts para Animación Stop-Motion y Plastilina (Claymation IA)",
    category: "video",
    categoryLabel: "Video & Animación",
    icon: "video",
    tags: ["Stop-Motion", "Claymation", "Aardman", "Animación"],
    models: ["Runway Gen-3", "Pika Labs", "Luma"],
    description: "Genera animaciones de plastilina con ligeras imperfecciones de huellas dactilares, velocidad de 12fps y calidez artesanal.",
    variables: [
      { name: "HISTORIA_STOPMOTION", label: "Historia o Acción", placeholder: "ej. Dos monstruos de plastilina de colores horneando un pastel que cobra vida propia" }
    ],
    template: `Charming stop-motion claymation animated video of [HISTORIA_STOPMOTION], crafted in the style of Aardman Animations (Wallace and Gromit), visible soft clay textures and subtle handmade imperfections, warm studio miniature lighting, authentic 12fps stop-motion frame pacing, tactile cozy aesthetic --motion 5`
  },
  {
    id: "vid-09",
    title: "Diseñador de Intros de YouTube y Animaciones de Títulos (Motion Graphics)",
    category: "video",
    categoryLabel: "Video & Animación",
    icon: "video",
    tags: ["Motion Graphics", "After Effects", "Intro", "Títulos"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Crea el concepto de animación tipográfica, transiciones cinéticas de logo y paletas de color en movimiento.",
    variables: [
      { name: "CANAL_O_PROGRAMA", label: "Nombre del Canal y Temática", placeholder: "ej. 'Código Futurista' - Canal de desarrollo de software, Inteligencia Artificial y tecnología punta" }
    ],
    template: `Eres un Director de Motion Graphics Senior.
Canal: [CANAL_O_PROGRAMA].
Diseña una intro de 6 segundos:
1. Segundo 1-2: Entrada cinética de formas geométricas y líneas de código neon con glitch controlado.
2. Segundo 3-4: Ensamblaje 3D del logotipo con destellos de luz.
3. Segundo 5-6: Revelación del nombre en tipografía bold nítida y disolución rápida para dar paso al video.
4. Sound Design exacto (quién, swoosh, bass hit).`
  },
  {
    id: "vid-10",
    title: "Prompts de Recorridos Drone FPV Extremos en Espacios Abiertos y Cerrados",
    category: "video",
    categoryLabel: "Video & Animación",
    icon: "video",
    tags: ["FPV Drone", "Dron", "Cinematográfico", "Velocidad"],
    models: ["Runway Gen-3", "Sora", "Kling AI"],
    description: "Tomas de vuelo vertiginosas en primera persona cruzando ventanas, bosques densos o desfiladeros a toda velocidad.",
    variables: [
      { name: "RUTA_DRON", label: "Ruta y Entorno", placeholder: "ej. Vuelo FPV bajando a toda velocidad por una cascada gigante en los fiordos noruegos rozando el agua" }
    ],
    template: `High-speed dynamic FPV drone footage flying through [RUTA_DRON], breathtaking aerial acrobatics, GoPro Hero 12 wide-angle lens, Reelsteady smooth stabilization, sun glinting off water spray, immense sense of speed and vertical momentum, 4k 60fps cinematic landscape --motion 8`
  },
  {
    id: "vid-11",
    title: "Especialista en Iluminación y Color Grading Cinematográfico (LUTs & DaVinci Resolve)",
    category: "video",
    categoryLabel: "Video & Animación",
    icon: "video",
    tags: ["Color Grading", "DaVinci Resolve", "LUTs", "Fotografía"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Instrucciones de corrección de color en nodos de DaVinci Resolve: balance de blancos, contraste con curvas S y separación de tonos piel.",
    variables: [
      { name: "ESTILO_COLOR", label: "Look Cinematográfico Deseado", placeholder: "ej. Look 'Teal and Orange' cinematográfico estilo blockbuster de Hollywood con negros profundos pero no empastados" }
    ],
    template: `Actúa como Colorista Senior de Cine en DaVinci Resolve Studio.
Estilo: [ESTILO_COLOR].
Provee el árbol de nodos paso a paso:
1. Nodo 1: Reducción de ruido y exposición primaria (Lift, Gamma, Gain).
2. Nodo 2: Balance de blancos y saturación de color de entrada.
3. Nodo 3: Curva S de contraste tonal.
4. Nodo 4: Aislamiento y protección del tono de piel (Skin Qualifier con vectorscopio).
5. Nodo 5: Look final Teal and Orange con curvas Hue vs Sat / Hue vs Hue y emulación de película Kodak 2383.`
  },
  {
    id: "vid-12",
    title: "Generador de Fondos Animados en Bucle para Streamers (Twitch / YouTube Overlay)",
    category: "video",
    categoryLabel: "Video & Animación",
    icon: "video",
    tags: ["Twitch", "Stream", "Overlay", "Loop", "Fondo"],
    models: ["Runway Gen-3", "Luma", "DALL-E 3"],
    description: "Fondos acogedores en bucle perfecto (Seamless Loop) de habitaciones aesthetic, lluvia en ventanas o tabernas medievales.",
    variables: [
      { name: "HABITACION_STREAMER", label: "Temática del Espacio", placeholder: "ej. Habitación gamer acogedora con plantas colgantes, luces led suaves, gato durmiendo en el sillón y lluvia en la ventana de noche" }
    ],
    template: `Cozy animated stream background loop of [HABITACION_STREAMER], smooth seamless looping animation, soft glowing ambient lights, subtle gentle rain trickling on glass, floating dust motes in light beams, lofi cozy aesthetic, high definition 60fps clean loop`
  },
  {
    id: "vid-13",
    title: "Creador de Documentales Estilo Vox / Kurzgesagt (Estructura de Infografía Animada)",
    category: "video",
    categoryLabel: "Video & Animación",
    icon: "video",
    tags: ["Documental", "Vox", "Kurzgesagt", "Infografía", "Narrativa"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Estructura mini documentales educativos con gráficos animados, mapas conceptuales y cambios de ritmo narrativo.",
    variables: [
      { name: "ENIGMA_DOCUMENTAL", label: "Pregunta o Misterio Central", placeholder: "ej. ¿Por qué los microchips más avanzados del mundo solo se pueden fabricar en una sola empresa de Taiwán?" }
    ],
    template: `Eres el Productor y Guionista de Videos Explicativos Estilo Vox y Kurzgesagt.
Tema: [ENIGMA_DOCUMENTAL].
Estructura el video de 8 minutos:
- Minuto 0-1: La paradoja inicial planteada con un mapa mundial animado.
- Minuto 1-3: La física y la ingeniería extrema (Infografía animada 2D del proceso de litografía ultravioleta).
- Minuto 3-6: La geopolítica y la fragilidad de la cadena de suministro global.
- Minuto 6-8: Las consecuencias a futuro y conclusión reflexiva.`
  },
  {
    id: "vid-14",
    title: "Prompts para Transformación de Personajes y Efectos Morphs (Video Generativo)",
    category: "video",
    categoryLabel: "Video & Animación",
    icon: "video",
    tags: ["Morphing", "Transformación", "Video IA", "Creativo"],
    models: ["Runway Gen-3", "Luma Dream Machine", "Kling"],
    description: "Metamorfosis fluidas y sin artefactos entre dos estados, seres o épocas históricas.",
    variables: [
      { name: "METAMORFOSIS", label: "De qué a qué cambia", placeholder: "ej. De una estatua de mármol clásico romano que se resquebraja y se transforma en un androide dorado futurista de metal líquido" }
    ],
    template: `Cinematic fluid visual metamorphosis of [METAMORFOSIS], seamless organic transition, liquid particle physics, glowing energy fractures, hyper-detailed textures, slow motion transformation, award-winning visual effect --motion 7 --smoothness high`
  },
  {
    id: "vid-15",
    title: "Director de Cámaras para Entrevistas Multi-Cámara en Estudio",
    category: "video",
    categoryLabel: "Video & Animación",
    icon: "video",
    tags: ["Entrevistas", "Multi-Cámara", "Podcast", "Iluminación 3 Puntos"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Esquema de iluminación de 3 puntos (Key, Fill, Rim), distancias focales de 3 cámaras (Plano general, Primer plano anfitrión, Primer plano invitado).",
    variables: [
      { name: "SET_ENTREVISTA", label: "Tipo de Set y Espacio", placeholder: "ej. Estudio de podcast elegante con sofás de cuero Chesterfield y fondo de biblioteca de madera cálida" }
    ],
    template: `Actúa como Director de Fotografía y Realizador de Televisión.
Set: [SET_ENTREVISTA].
Diseña el esquema técnico completo:
1. Esquema de Iluminación: Potencia, ángulo y temperatura de color de Key Light, Fill Light y Hair/Rim Light con luces prácticas en el fondo.
2. Posicionamiento de 3 Cámaras: Distancia focal de lentes (Cámara A 35mm wide, Cámara B 85mm anfitrión, Cámara C 85mm invitado) y alturas de trípode a la altura de los ojos.
3. Reglas de Conmutación de planos para el editor.`
  },
  {
    id: "vid-16",
    title: "Prompts para Escenas de Acción Cinematográfica con Explosiones y Lente Anamórfico",
    category: "video",
    categoryLabel: "Video & Animación",
    icon: "video",
    tags: ["Acción", "Explosiones", "Anamórfico", "Cine"],
    models: ["Runway Gen-3", "Sora", "Kling AI"],
    description: "Tomas de alto impacto con fuego realista, esquirlas volando en cámara lenta y destellos horizontales azules anamórficos.",
    variables: [
      { name: "ESCENA_ACCION", label: "Momento de Acción", placeholder: "ej. Persecución de autos a alta velocidad cruzando un puente colgante durante una tormenta eléctrica" }
    ],
    template: `High-octane cinematic action sequence of [ESCENA_ACCION], anamorphic blue lens flares, sparks flying across the frame, hyper-realistic physics, wet reflective asphalt, motion blur, directed by Michael Bay, 4k 35mm film stock, intense adrenaline composition --motion 9`
  },
  {
    id: "vid-17",
    title: "Diseñador de Animaciones de Datos y Gráficos en Movimiento (Data Visualization)",
    category: "video",
    categoryLabel: "Video & Animación",
    icon: "video",
    tags: ["Data Viz", "Motion Graphics", "Infografía", "Gráficos"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Transforma cifras numéricas complejas en gráficos de barras animados, mapas de calor dinámicos y esferas de red interactiva.",
    variables: [
      { name: "DATOS_A_ANIMAR", label: "Métricas o Información", placeholder: "ej. El crecimiento comparativo del PIB de las 10 principales economías mundiales durante los últimos 50 años" }
    ],
    template: `Eres un Especialista en Visualización de Datos Animada y Motion Design.
Datos: [DATOS_A_ANIMAR].
Diseña la animación:
1. Tipo de Gráfico Animado (ej. Bar Chart Race dinámica con banderas y transiciones suaves de aceleración/desaceleración).
2. Paleta cromática accesible y tipografía numérica legible de gran tamaño.
3. Puntos de parada narrativa (Pause points) cuando un país supera a otro para enfatizar el contexto histórico.`
  },
  {
    id: "vid-18",
    title: "Creador de Guiones para Anuncios de Video UGC en TikTok / Instagram Reels",
    category: "video",
    categoryLabel: "Video & Animación",
    icon: "video",
    tags: ["UGC", "TikTok Ads", "Reels", "Conversión"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Guiones con estética amateur auténtica grabada con teléfono móvil que convierten mejor que los anuncios corporativos pulidos.",
    variables: [
      { name: "PRODUCTO_UGC", label: "Producto Físico o Digital", placeholder: "ej. Un corrector de postura ergonómico para quienes trabajan frente a la computadora" }
    ],
    template: `Actúa como Creador de Contenido UGC y Estratega de TikTok Ads.
Producto: [PRODUCTO_UGC].
Escribe el guion UGC de 30 segundos:
- [00-03s] Hook Visual Negativo: El creador tocándose el cuello con dolor y diciendo "Si pasas más de 6 horas sentado, deja de hacer esto..."
- [04-12s] El problema con los métodos tradicionales incómodos.
- [13-22s] Demostración rápida del producto colocándoselo en 5 segundos con reacción de alivio visible.
- [23-30s] Oferta con descuento por tiempo limitado y botón en pantalla.`
  },
  {
    id: "vid-19",
    title: "Prompts de Microcosmos y Animación Celular / Médica en 3D",
    category: "video",
    categoryLabel: "Video & Animación",
    icon: "video",
    tags: ["Médico", "Microscópico", "3D", "Ciencia"],
    models: ["Runway Gen-3", "Sora", "Luma"],
    description: "Viajes microscópicos al interior del cuerpo humano: glóbulos blancos cazando bacterias, sinapsis neuronales o moléculas de ADN.",
    variables: [
      { name: "PROCESO_BIOLOGICO", label: "Proceso Celular", placeholder: "ej. Una célula T del sistema inmunitario neutralizando una célula cancerosa con emisión de bioluminiscencia" }
    ],
    template: `Scientific 3D medical animation of [PROCESO_BIOLOGICO], microscopic electron microscope perspective, glowing bioluminescent proteins and lipid bilayer membranes, depth of field with floating subcellular organelles, volumetric fluid dynamics, National Geographic science documentary aesthetic, 8k render`
  },
  {
    id: "vid-20",
    title: "Planificador de Producción de Cortometraje de Ficción en 48 Horas",
    category: "video",
    categoryLabel: "Video & Animación",
    icon: "video",
    tags: ["Cortometraje", "Cine Independiente", "Producción", "48h Film"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Optimiza la logística, localizaciones únicas y rodaje con equipo mínimo para rodar un corto premiable en un fin de semana.",
    variables: [
      { name: "GENERO_CORTO", label: "Género y Recursos Disponibles", placeholder: "ej. Ciencia ficción intimista con solo 2 actores y 1 locación (una cabaña en el bosque)" }
    ],
    template: `Eres un Productor de Cine Independiente y Mentor de Festivales de Cine.
Premisa: [GENERO_CORTO].
Diseña el plan de choque para rodar en 48 horas:
1. Guion de 5 Páginas optimizado para máximo impacto dramático con diálogos potentes.
2. Lista de Utilería y Vestuario de bajo coste que transmita el concepto sin necesidad de efectos costosos.
3. Cronograma de Rodaje de 12 horas (Mañana: Ensayos y planos generales; Tarde: Cobertura de primeros planos; Noche: Tomas dramáticas con luz artificial).
4. Flujo de Postproducción express para entregar a tiempo.`
  }
];
