/**
 * PROMPTS DE MÚSICA & AUDIO IA (22 Prompts)
 */
const PROMPTS_MUSICA = [
  {
    id: "mus-01",
    title: "Generador de Prompts y Metatags para Suno AI v3.5 / v4",
    category: "musica",
    categoryLabel: "Música & Audio",
    icon: "music",
    tags: ["Suno AI", "Generación Musical", "Estilos", "Metatags"],
    models: ["Suno v3.5 / v4", "ChatGPT-4o", "Claude 3.5 Sonnet"],
    description: "Diseña prompts de estilo sonoro con instrumentación, tempo (BPM), estructura de etiquetas [Verse, Chorus, Guitar Solo] y atmósfera.",
    variables: [
      { name: "GENERO_FUSION", label: "Género o Fusión", placeholder: "ej. Synthwave retrofuturista con solos de saxofón y guitarras ochenteras" },
      { name: "ESTRUCTURA_LETRA", label: "Tema o Letra", placeholder: "ej. Conduciendo de noche por una autopista de neón buscando a alguien del pasado" }
    ],
    template: `Actúa como Productor Musical e Ingeniero de Prompts para Suno AI v3.5/v4.
Género: [GENERO_FUSION]. Tema: [ESTRUCTURA_LETRA].
Entrega:
1. **Style of Music (Prompt de estilo en inglés - máx 120 caracteres)**: Descriptores de tempo, instrumentos, voz y producción.
2. **Estructura Completa con Metatags de Suno**:
   [Intro - atmospheric synth arpeggio]
   [Verse 1 - female vocal, mellow bass]
   [Pre-Chorus - building percussion]
   [Chorus - explosive energy, dual harmonies]
   [Verse 2]
   [Chorus]
   [Guitar Solo / Synth Drop]
   [Outro - fading echoes]
   [End]`
  },
  {
    id: "mus-02",
    title: "Compositor de Letras de Canciones con Rima Métrica y Ganchos (Hooks)",
    category: "musica",
    categoryLabel: "Música & Audio",
    icon: "music",
    tags: ["Songwriting", "Letras", "Rima", "Pop", "Rock"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Escribe letras completas con esquemas de rima rigurosos (AABB / ABAB), número de sílabas consistente y estribillo memorable.",
    variables: [
      { name: "TEMA_CANCIÓN", label: "Historia o Emoción de la Canción", placeholder: "ej. La superación personal tras una ruptura y el renacer de la autoconfianza" },
      { name: "GENERO_MUSICAL", label: "Género Musical", placeholder: "ej. Pop Rock enérgico en español con ritmo de 128 BPM" }
    ],
    template: `Eres un Compositor Galardonado (Grammy) y Letrista Profesional.
Género: [GENERO_MUSICAL]. Historia: [TEMA_CANCIÓN].
Escribe la letra completa:
- Verso 1 (8 versos con esquema métrico estricto y rimas consonantes/asonantes ricas).
- Pre-Estribillo (Aumento de tensión rítmica).
- Estribillo / Coro (El Hook definitivo: frases cortas, pegadizas y de alto impacto vocal).
- Verso 2.
- Estribillo.
- Puente Emocional (Cambio de acorde y clímax lírico).
- Estribillo Final y Cierre.`
  },
  {
    id: "mus-03",
    title: "Generador de Prompts para Udio AI (Clips de Alta Calidad y Extensiones)",
    category: "musica",
    categoryLabel: "Música & Audio",
    icon: "music",
    tags: ["Udio", "IA Musical", "Producción", "Prompts Sonoros"],
    models: ["Udio v1.5", "Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Optimiza la creación musical en Udio con tags precisos de producción analógica, timbres vocales y directrices de extensión.",
    variables: [
      { name: "ESTILO_UDIO", label: "Estilo Detallado", placeholder: "ej. Neo-Soul con batería Lo-Fi de vinilo, piano Rhodes vintage y voz masculina aterciopelada" }
    ],
    template: `Eres un Maestro de Generación Sonora en Udio AI.
Estilo: [ESTILO_UDIO].
Genera:
1. Prompt de Udio optimizado con tags separados por comas (género principal, subgéneros, instrumentación analógica, técnicas vocales, calidad de mezcla como 'warm tube saturation, binaural soundstage').
2. Letra dividida en segmentos de 32 segundos listos para la función de Extensión hacia adelante y hacia atrás en Udio.`
  },
  {
    id: "mus-04",
    title: "Diseñador de Paisajes Sonoros y Efectos (Sound Design para Videojuegos y Cine)",
    category: "musica",
    categoryLabel: "Música & Audio",
    icon: "music",
    tags: ["Sound Design", "Foley", "Videojuegos", "Cine", "SFX"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Planifica capas de sonido ambiental (Ambience), efectos Foley y texturas sintetizadas para escenas cinematográficas.",
    variables: [
      { name: "ESCENA_AUDIOVISUAL", label: "Escena a Musicalizar y Sonorizar", placeholder: "ej. Una nave espacial abandonada flotando cerca de un agujero negro con chirridos metálicos y ecos lejanos" }
    ],
    template: `Actúa como Director de Audio y Diseñador Sonoro Senior (estilo Hans Zimmer / Ben Burtt).
Escena: [ESCENA_AUDIOVISUAL].
Diseña el mapa de audio:
1. Capa Sub-Baja / Dron (Frecuencias entre 30Hz-80Hz que generan tensión física).
2. Capa de Foley y Texturas de Entorno (Detalles orgánicos y espaciales).
3. Efectos Puntuales (Stems interactivos, transiciones y risers).
4. Procesamiento de Mezcla Recomendado (Reverb convolutiva, distorsión de cinta, paneo binaural).`
  },
  {
    id: "mus-05",
    title: "Guía de Mezcla y Masterización en DAW (EQ, Compresión y Espacialidad)",
    category: "musica",
    categoryLabel: "Música & Audio",
    icon: "music",
    tags: ["Mezcla", "Mastering", "Ableton", "Logic", "FabFilter"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Instrucciones precisas para limpiar frecuencias conflictivas (limpieza en 250Hz, brillo en 10kHz), compresión sidechain y limitación.",
    variables: [
      { name: "PROBLEMA_MEZCLA", label: "Pistas o Problema de la Mezcla", placeholder: "ej. El Bombo (Kick) y el Bajo (808) se solapan y ensucian la mezcla de Trap/Hip-Hop" }
    ],
    template: `Eres un Ingeniero de Mezcla y Masterización Ganador de Discos de Platino.
Problema: [PROBLEMA_MEZCLA].
Provee el protocolo de resolución paso a paso:
1. Ecualización Quirúrgica: Frecuencias exactas a cortar y potenciar en cada pista.
2. Compresión y Control de Dinámica: Attack, Release, Ratio y técnica de compresión Sidechain.
3. Tratamiento Estéreo y Saturación Armónica.
4. Cadena de Masterización Final (Buss Compression, Limiter con valores LUFS recomendados para Spotify y Apple Music).`
  },
  {
    id: "mus-06",
    title: "Compositor de Bandas Sonoras Cinemáticas Orquestales (Epic Trailer)",
    category: "musica",
    categoryLabel: "Música & Audio",
    icon: "music",
    tags: ["Orquesta", "Trailer", "Cinematográfico", "Hans Zimmer"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Estructura temas orquestales híbridos con percusión Taiko, metales desgarradores (Braams) y cuerdas staccato.",
    variables: [
      { name: "TEMA_TRAILER", label: "Emoción y Tipo de Película", placeholder: "ej. Batalla épica final de fantasía donde la esperanza renace en el último minuto" }
    ],
    template: `Eres un Compositor de Bandas Sonoras Épicas de Hollywood.
Tema: [TEMA_TRAILER].
Estructura la pieza orquestal en 3 actos:
- Acto 1 (Setup): Dron misterioso, piano minimalista y solo de violonchelo melancólico.
- Acto 2 (Escalada): Ostinato de cuerdas staccato a 140 BPM, percusiones híbridas crecientes y pulsos de sintetizador analógico.
- Acto 3 (Clímax): Sección completa de metales, coro masivo en latín, percusión Taiko atronadora y resolución épica con golpe final (Impact).`
  },
  {
    id: "mus-07",
    title: "Programador de Sintetizadores (Serum, Vital, Massive - Sound Design)",
    category: "musica",
    categoryLabel: "Música & Audio",
    icon: "music",
    tags: ["Serum", "Sintetizador", "Vital", "Wavetable", "EDM"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Instrucciones de ruteo de osciladores, tablas de ondas, envolventes (ADSR) y LFOs para sintetizar sonidos icónicos.",
    variables: [
      { name: "SONIDO_A_CREAR", label: "Tipo de Sonido Deseado", placeholder: "ej. Reese Bass oscuro y envolvente para Drum & Bass con movimiento analógico" }
    ],
    template: `Actúa como Diseñador de Presets para Sintetizadores Wavetable (Serum / Vital).
Sonido deseado: [SONIDO_A_CREAR].
Configuración paso a paso:
1. Oscilador A y Oscilador B: Tabla de ondas, número de voces de Unison, Detune y nivel de mezcla.
2. Filtro: Tipo de filtro (Low Pass 24dB, Comb, etc.) y modulación de corte.
3. Envolvente 1 (Amp) y LFO 1: Curva de ataque, decaimiento, sostenido y liberación.
4. Pestaña de Efectos (FX Chain): Distorsión, Chorus, Compresor multibanda OTT y Reverb.`
  },
  {
    id: "mus-08",
    title: "Generador de Progresiones de Acordes Emotivas y Complejas (Teoría Musical)",
    category: "musica",
    categoryLabel: "Música & Audio",
    icon: "music",
    tags: ["Acordes", "Teoría Musical", "Jazz", "Neo-Soul", "Armonía"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Crea progresiones con acordes extendidos (7mas, 9nas, 11nas), acordes de paso prestados y modulación armónica.",
    variables: [
      { name: "TONALIDAD_SENTIMIENTO", label: "Tonalidad y Emoción", placeholder: "ej. En tonalidad de Re menor buscando una sensación de nostalgia profunda y belleza melancólica" }
    ],
    template: `Eres un Maestro de Armonía Moderna y Teoría Musical Avanzada.
Requerimiento: [TONALIDAD_SENTIMIENTO].
Provee:
1. Progresión Principal de 4 a 8 compases con cifrado anglosajón exacto (ej. Dm9 - G13 - Cmaj9 - A7b13).
2. Grados armónicos en números romanos y análisis funcional de cada acorde (intercambio modal, dominantes secundarias).
3. Sugerencia de notas guía (Voice Leading) para enlazar los acordes con suavidad en teclado o guitarra.`
  },
  {
    id: "mus-09",
    title: "Letrista de Rap y Hip-Hop con Multisilábicas y Punchlines",
    category: "musica",
    categoryLabel: "Música & Audio",
    icon: "music",
    tags: ["Rap", "Hip-Hop", "Punchlines", "Flow", "Rimas"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Escribe barras de rap con juegos de palabras ingeniosos, rimas multisilábicas complejas y patrones de flow variados.",
    variables: [
      { name: "TEMA_RAP", label: "Tema y Estilo", placeholder: "ej. Crítica a la superficialidad de las redes sociales y el postureo moderno" }
    ],
    template: `Actúa como un Rapero y Letrista de Élite (estilo Kendrick Lamar / Residente / Canserbero).
Tema: [TEMA_RAP].
Escribe 16 barras de rap magistrales:
- Uso de rimas multisilábicas en cada final de verso (y rimas internas).
- 4 Punchlines o metáforas contundentes de doble sentido.
- Variación de métrica y cadencia (cambios de flow) cada 4 compases.`
  },
  {
    id: "mus-10",
    title: "Diseñador de Beats Lo-Fi Chillhop Relajantes para Estudio",
    category: "musica",
    categoryLabel: "Música & Audio",
    icon: "music",
    tags: ["Lo-Fi", "Chillhop", "Beats", "Study Beats"],
    models: ["Suno AI", "Udio", "ChatGPT-4o"],
    description: "Estructura beats Lo-Fi relajantes con ruidos de vinilo, pianos desafinados (tape flutter), bajo cálido y batería suave.",
    variables: [
      { name: "ATMOSFERA_LOFI", label: "Ambiente Específico", placeholder: "ej. Una tarde lluviosa en Tokio tomando café mientras se estudia programación" }
    ],
    template: `Eres un Productor de Lo-Fi Hip Hop y Chillhop de canales como Lofi Girl.
Ambiente: [ATMOSFERA_LOFI].
Provee:
1. Prompt de audio optimizado para IA (Suno/Udio) en inglés: BPM (70-85), tags sonoros (dusty vinyl crackle, nostalgic rhodes piano, mellow boom bap drums, relaxed jazz chords).
2. Guía de samples orgánicos de fondo (sonido de lluvia, pasos, sorbos de taza) y su colocación en la línea temporal.`
  },
  {
    id: "mus-11",
    title: "Creador de Jingles Publicitarios Pegadizos de 15 a 30 Segundos",
    category: "musica",
    categoryLabel: "Música & Audio",
    icon: "music",
    tags: ["Jingle", "Publicidad", "Comercial", "Radio", "Branding"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Crea melodías breves y frases cantadas inolvidables que fijan el nombre y beneficio de una marca en la mente.",
    variables: [
      { name: "MARCA_BENEFICIO", label: "Nombre de la Marca y Promesa", placeholder: "ej. FreshBite - Entrega de comida saludable en 20 minutos" }
    ],
    template: `Eres un Compositor de Jingles Comerciales Legendarios.
Marca: [MARCA_BENEFICIO].
Crea 3 opciones de jingle:
- Opción 1 (Jingle de 10 segundos): Audio logo melódico ultracorto con el eslogan cantado.
- Opción 2 (Jingle de 20 segundos): Rima pegadiza con problema -> solución -> nombre de marca.
- Opción 3 (Jingle de 30 segundos): Mini canción con ritmo bailable y llamado a la acción final.`
  },
  {
    id: "mus-12",
    title: "Entrenador de Técnica Vocal y Calentamiento para Cantantes",
    category: "musica",
    categoryLabel: "Música & Audio",
    icon: "music",
    tags: ["Canto", "Voz", "Calentamiento", "Técnica Vocal"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Rutinas guiadas de respiración diafragmática, ejercicios con tubo (SOVTE), escalas de calentamiento y colocación de resonadores.",
    variables: [
      { name: "TIPO_VOZ_META", label: "Registro y Objetivo", placeholder: "ej. Voz de Barítono buscando ampliar el rango hacia agudos con voz mixta sin tensión" }
    ],
    template: `Actúa como Maestro de Canto y Fonoaudiólogo Vocal de Élite.
Perfil: [TIPO_VOZ_META].
Diseña una rutina de 15 minutos:
1. 3 Minutos: Ejercicios de tracto vocal semiocluido (Lip trills, zumbidos con pajita/tubo en agua).
2. 5 Minutos: Escalas de sirena y arpegios en voz mixta para cruzar el Passaggio sin quiebres.
3. 5 Minutos: Articulación y dicción con trabalenguas resonanciales.
4. 2 Minutos: Vuelta a la calma vocal (Cool-down) para evitar fatiga.`
  },
  {
    id: "mus-13",
    title: "Compositor de Boleros y Baladas Románticas Intemporales",
    category: "musica",
    categoryLabel: "Música & Audio",
    icon: "music",
    tags: ["Bolero", "Balada", "Poesía", "Acústico"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Escribe letras poéticas con la elegancia, nostalgia y metáforas profundas del bolero latinoamericano tradicional.",
    variables: [
      { name: "SENTIMIENTO_BOLERO", label: "Historia de Amor o Desamor", placeholder: "ej. Un amor imposible recordado a través del aroma de un café en un viejo bar" }
    ],
    template: `Eres un Poeta y Compositor de Boleros Clásicos (estilo Armando Manzanero / Agustín Lara).
Historia: [SENTIMIENTO_BOLERO].
Escribe el bolero completo:
- Versos de métrica octosílaba o endecasílaba con imágenes sensoriales exquisitas.
- Uso de recursos poéticos: aliteraciones, metáforas sobre el tiempo, la noche y la distancia.
- Acordes de guitarra sugeridos para acompañar la melodía.`
  },
  {
    id: "mus-14",
    title: "Diseñador de Identidad Sonora y Audio Branding (Sonic Logo)",
    category: "musica",
    categoryLabel: "Música & Audio",
    icon: "music",
    tags: ["Audio Branding", "Sonic Logo", "Identidad", "Marca"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Diseña el sonido insignia de 2 a 3 segundos de una empresa (como el sonido de inicio de Netflix o Apple).",
    variables: [
      { name: "VALORES_EMPRESA", label: "Personalidad de la Marca", placeholder: "ej. Fintech moderna: velocidad, seguridad bancaria blindada y frescura juvenil" }
    ],
    template: `Eres un Estratega de Audio Branding y Sonic Identity.
Marca: [VALORES_EMPRESA].
Diseña el Sonic Logo de 3 segundos:
1. Las 3 Capas Sonoras del logo (ej. Ataque inicial metálico/nítido, Cuerpo armónico cálido, Estela de reverb expansiva).
2. Tonalidad y Notas Musicales exactas (ej. acorde mayor add9 ascendente).
3. Adaptaciones del sonido (para confirmación de pago exitoso en app, notificación de móvil y firma de video).`
  },
  {
    id: "mus-15",
    title: "Productor de Música Electrónica de Baile (House / Techno / Melodic)",
    category: "musica",
    categoryLabel: "Música & Audio",
    icon: "music",
    tags: ["House", "Techno", "EDM", "Club", "Producción"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Estructura tracks para la pista de baile con intros DJ-friendly, builds de tensión progresiva y drops demoledores.",
    variables: [
      { name: "SUBGENERO_ELECTRONICA", label: "Subgénero y BPM", placeholder: "ej. Melodic Techno a 124 BPM estilo Tale of Us / Afterlife" }
    ],
    template: `Actúa como Productor de Música Electrónica de Festivales y Clubes.
Subgénero: [SUBGENERO_ELECTRONICA].
Estructura el track compás a compás (Formato Extended Mix de 6 minutos):
- Compases 1-32 (DJ Intro): Batería limpia con filtrado paulatino.
- Compases 33-64: Introducción del arpegio melódico y bajo hipnótico.
- Compases 65-96 (Breakdown): Retirada del kick, acordes expansivos y elementos vocales etéreos.
- Compases 97-128 (The Build & Drop): Riser masivo con Snare roll y el Drop con toda la pegada de frecuencias bajas.`
  },
  {
    id: "mus-16",
    title: "Especialista en Grabación Acústica y Selección de Micrófonos",
    category: "musica",
    categoryLabel: "Música & Audio",
    icon: "music",
    tags: ["Micrófonos", "Grabación", "Estudio", "Acústica"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Recomienda técnicas de microfonía (XY, ORTF, Mid-Side) y micrófonos (Condensador, Dinámico, Cinta) según el instrumento.",
    variables: [
      { name: "INSTRUMENTO_ESPACIO", label: "Instrumento y Habitación", placeholder: "ej. Grabación de guitarra acústica española en una habitación con tratamiento acústico moderado" }
    ],
    template: `Eres un Ingeniero de Grabación de Estudios Legendarios (Abbey Road).
Instrumento y entorno: [INSTRUMENTO_ESPACIO].
Guía de grabación:
1. Elección de Micrófono (Diafragma grande vs pequeño, patrón polar Cardioide/Figura 8).
2. Posición y Distancia Exacta (ej. apuntando al traste 12 a 25 cm para evitar el 'boominess' de la boca).
3. Técnica Estéreo recomendada si se usan dos micrófonos.
4. Ganancia en el Previo para evitar distorsión y ruido de fondo.`
  },
  {
    id: "mus-17",
    title: "Compositor de Canciones Infantiles Educativas y Pegadizas",
    category: "musica",
    categoryLabel: "Música & Audio",
    icon: "music",
    tags: ["Infantil", "Educación", "Niños", "Canciones"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Crea canciones infantiles divertidas que enseñan conceptos (los planetas, lavarse los dientes, números) con juegos de repetición.",
    variables: [
      { name: "TEMA_EDUCATIVO", label: "Tema a Enseñar", placeholder: "ej. Aprender a reciclar y cuidar el planeta separando la basura por colores" }
    ],
    template: `Eres un Compositor de Música Infantil Educativa y Creador de Éxitos para Niños.
Tema: [TEMA_EDUCATIVO].
Escribe la canción:
- Ritmo alegre, contagioso y bailable (120 BPM).
- Estribillo con rimas sencillas, onomatopeyas y movimientos corporales indicados entre paréntesis.
- Mensaje pedagógico positivo y fácil de memorizar por niños de 3 a 7 años.`
  },
  {
    id: "mus-18",
    title: "Analista Musical y Desglosador de Éxitos Top 40 (Hit Breakdown)",
    category: "musica",
    categoryLabel: "Música & Audio",
    icon: "music",
    tags: ["Hit Songwriting", "Análisis", "Billboard", "Pop"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Disecciona por qué un éxito musical triunfó: ritmo armónico, melodía en escala pentatónica, psicología del gancho y producción.",
    variables: [
      { name: "CANCIÓN_ANALIZAR", label: "Canción o Estilo de Éxito", placeholder: "ej. 'Blinding Lights' de The Weeknd o 'Flowers' de Miley Cyrus" }
    ],
    template: `Actúa como Musicólogo y Analista de Hits de Billboard.
Canción: [CANCIÓN_ANALIZAR].
Desglosa los secretos de su éxito:
1. La Melodía del Gancho (Melodic Math): Por qué se te clava en el cerebro (intervalos, repetición, simetría).
2. La Elección de Sonidos y Producción Nostálgica.
3. Estructura de Energía Dinámica (Millennial Whoop / Post-Chorus Hook).
4. Cómo aplicar estas mismas 3 técnicas en una nueva canción original.`
  },
  {
    id: "mus-19",
    title: "Productor de Audio Espacial y Música 8D / Dolby Atmos",
    category: "musica",
    categoryLabel: "Música & Audio",
    icon: "music",
    tags: ["Audio 8D", "Dolby Atmos", "Binaural", "Espacial"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Planifica la colocación de pistas en el espacio tridimensional 360° para crear experiencias auditivas envolventes.",
    variables: [
      { name: "PISTA_A_ESPACIALIZAR", label: "Tipo de Pista Musical", placeholder: "ej. Tema de meditación ambiental con campanas tibetanas, cuerdas y susurros vocales" }
    ],
    template: `Eres un Ingeniero Certificado en Dolby Atmos y Audio Espacial Binaural.
Pista: [PISTA_A_ESPACIALIZAR].
Diseña la mezcla inmersiva en 3D:
1. Mapa de Objetos Sonoros (Posición X, Y, Z de cada elemento en la esfera auditiva).
2. Automatización de Movimiento (Trayectorias circulares y elevaciones cenitales de los efectos).
3. Manejo de Altavoces de Techo y LFE (Subwoofer) para dar peso físico sin perder claridad binaural en auriculares.`
  },
  {
    id: "mus-20",
    title: "Compositor de Música para Videojuegos Adaptativa / Dinámica",
    category: "musica",
    categoryLabel: "Música & Audio",
    icon: "music",
    tags: ["Game Audio", "FMOD", "Wwise", "Música Adaptativa"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Diseña capas musicales (Vertical Layering) y transiciones horizontales que cambian en tiempo real según las acciones del jugador.",
    variables: [
      { name: "SITUACION_VIDEOJUEGO", label: "Mecánica del Juego", placeholder: "ej. De exploración sigilosa pacífica a combate frenético contra un jefe cuando eres detectado" }
    ],
    template: `Eres el Compositor Principal de Videojuegos AAA (sistemas FMOD / Wwise).
Mecánica: [SITUACION_VIDEOJUEGO].
Diseña el sistema de música adaptativa:
1. Capa Base (Exploración / Sigilo): Instrumentos suaves, tempo moderado, mezcla despojada.
2. Capa de Tensión (Sospecha / Alerta): Entrada de percusión de reloj y sintetizadores en staccato.
3. Capa de Combate Total: Metales potentes, batería completa y guitarras distorsionadas.
4. Reglas de Transición (Stinger de alerta y compás de sincronización para que el cambio no se sienta cortado).`
  },
  {
    id: "mus-21",
    title: "Música de Meditación Instrumental en Loop Continuo (Suno, Udio & IA)",
    category: "musica",
    categoryLabel: "Música & Audio",
    icon: "music",
    tags: ["Meditación", "Seamless Loop", "Suno AI", "Udio", "Ambient", "Mindfulness"],
    models: ["Suno v3.5 / v4", "Udio v1.5", "ChatGPT-4o", "Claude 3.5 Sonnet"],
    description: "Genera música instrumental relajante para meditación, spa y yoga configurada en bucle infinito (seamless loop) sin cortes, saltos ni clímax.",
    variables: [
      { name: "ENFOQUE_MEDITACION", label: "Enfoque / Ambiente", placeholder: "ej. Deep relaxation, spa, yoga, mindfulness atmosphere" },
      { name: "INSTRUMENTACION", label: "Instrumentos y Texturas", placeholder: "ej. Soft pads, gentle Tibetan singing bowls, warm analog synth textures, minimal percussion" },
      { name: "TEMPO_TONALIDAD", label: "Tempo y Tonalidad", placeholder: "ej. 50–60 BPM, Key: D major or A minor" }
    ],
    template: `Actúa como Productor Musical Especialista en Música Ambient y Generación por IA (Suno / Udio).
Enfoque: [ENFOQUE_MEDITACION].
Instrumentación: [INSTRUMENTACION].
Tempo/Tonalidad: [TEMPO_TONALIDAD].

Genera la configuración y prompt sonoro optimizado:

1. **Prompt Principal (Copy-Paste para Suno / Udio)**:
"Instrumental meditation music, no vocals, no lyrics, seamless loop, ambient and calming. [INSTRUMENTACION], slow tempo ([TEMPO_TONALIDAD]). [ENFOQUE_MEDITACION]. Smooth fade-in and fade-out, consistent volume throughout, no sudden changes, no build-up or climax — designed to repeat infinitely without noticeable transitions. Ethereal and peaceful mood."

2. **Variante Binaural / Ambient Profundo**:
"Pure instrumental ambient meditation track, no voice, no lyrics, loopable. Deep drone bass, soft flute or pan flute, subtle 432Hz or 528Hz tuning, gentle nature textures (light wind, distant water) blended low in the mix. Extremely slow, static tempo, no drums, no percussion, no melodic progression — just sustained evolving tones. Seamless start and end points for perfect looping. Peaceful, spacious, meditative, healing atmosphere."

3. **Tips de Producción para Loops Perfectos**:
- Pide explícitamente "seamless loop" y "no build-up, no climax" para evitar que el modelo cree picos que rompan el bucle.
- En herramientas con selección de duración, genera clips cortos (1–3 min) y duplícalos en tu editor/DAW para transiciones perfectas.
- Define siempre el tempo en BPM para mantener coherencia métrica exacta en los puntos de corte.`
  },
  {
    id: "mus-22",
    title: "Generador de Frecuencias Binaurales y Ambient Curativo (432Hz / 528Hz Drone)",
    category: "musica",
    categoryLabel: "Música & Audio",
    icon: "music",
    tags: ["Binaural", "432Hz", "528Hz", "Drone", "Sound Healing", "Ambient"],
    models: ["Suno v3.5 / v4", "Udio v1.5", "ChatGPT-4o", "Claude 3.5 Sonnet"],
    description: "Crea paisajes sonoros estáticos y frecuencias de sanación (432Hz/528Hz) con texturas de la naturaleza y drones continuos para bucles sin fin.",
    variables: [
      { name: "FRECUENCIA_SOLFEGGIO", label: "Frecuencia o Sintonía", placeholder: "ej. 432Hz (Claridad mental) o 528Hz (Transformación y calma)" },
      { name: "ELEMENTOS_ORGANICOS", label: "Elementos Orgánicos y Texturas", placeholder: "ej. Soft flute or pan flute, gentle nature textures (light wind, distant water) blended low in the mix" }
    ],
    template: `Actúa como Diseñador Sonoro de Frecuencias de Bienestar y Sound Healing para IA Musical.
Frecuencia/Objetivo: [FRECUENCIA_SOLFEGGIO].
Elementos: [ELEMENTOS_ORGANICOS].

Entrega el prompt y directrices sonoras optimizadas:

1. **Prompt para IA Sonora (Suno / Udio / Herramientas de Audio IA)**:
"Pure instrumental ambient meditation track, no voice, no lyrics, loopable. Deep drone bass, [ELEMENTOS_ORGANICOS], subtle [FRECUENCIA_SOLFEGGIO] tuning. Extremely slow, static tempo, no drums, no percussion, no melodic progression — just sustained evolving tones. Seamless start and end points for perfect looping. Peaceful, spacious, meditative, healing atmosphere."

2. **Parámetros Clave para el Loop**:
- Mantener tempo estático y nula progresión melódica agresiva.
- Puntos de inicio y fin continuos para repetición sin interrupción auditiva.
- Mezcla con texturas orgánicas a bajo volumen (low in the mix).`
  }
];
