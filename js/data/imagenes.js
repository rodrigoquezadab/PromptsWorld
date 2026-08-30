/**
 * PROMPTS DE IMÁGENES & ARTE VISUAL IA (20 Prompts)
 */
const PROMPTS_IMAGENES = [
  {
    id: "img-01",
    title: "Fotografía de Retrato Cinematográfico 35mm (Midjourney / Flux)",
    category: "imagenes",
    categoryLabel: "Imágenes & Arte",
    icon: "image",
    tags: ["Midjourney", "Flux", "Retrato", "Cinematográfico", "Fotografía"],
    models: ["Midjourney v6", "Flux.1", "DALL-E 3"],
    description: "Genera retratos hiperrealistas con iluminación natural, profundidad de campo bokeh y textura de piel orgánica sin aspecto plástico.",
    variables: [
      { name: "SUJETO_RETRATO", label: "Sujeto y Expresión", placeholder: "ej. Un anciano pescador japonés con arrugas marcadas y mirada serena" },
      { name: "ILUMINACION_ATMOSFERA", label: "Iluminación y Hora", placeholder: "ej. Luz dorada del atardecer (Golden hour) con ligera niebla marina" },
      { name: "LENTE_CAMARA", label: "Cámara y Lente", placeholder: "ej. Shot on 35mm Kodak Portra 400, f/1.8 aperture, cinematic lighting" }
    ],
    template: `Cinematic 35mm portrait photograph of [SUJETO_RETRATO], [ILUMINACION_ATMOSFERA], [LENTE_CAMARA], natural skin texture with subtle imperfections, authentic facial pores, catchlight in eyes, shallow depth of field, award-winning National Geographic photography, highly detailed, photorealistic --ar 16:9 --style raw --v 6.0`
  },
  {
    id: "img-02",
    title: "Diseño de Interiores y Arquitectura Minimalista",
    category: "imagenes",
    categoryLabel: "Imágenes & Arte",
    icon: "image",
    tags: ["Arquitectura", "Interiores", "Minimalismo", "Render 3D"],
    models: ["Midjourney v6", "DALL-E 3", "Flux.1"],
    description: "Render arquitectónico fotorrealista de espacios modernos, materiales nobles (madera, hormigón, lino) y luz difusa.",
    variables: [
      { name: "TIPO_ESPACIO", label: "Habitación o Espacio", placeholder: "ej. Sala de estar contemporánea de concepto abierto con vistas a un bosque de pinos" },
      { name: "ESTILO_DISENO", label: "Estilo y Materiales", placeholder: "ej. Minimalismo Japandi, madera de roble claro, paredes de microcemento gris, textiles de lino beige" }
    ],
    template: `Architectural photography of [TIPO_ESPACIO], designed in [ESTILO_DISENO], floor-to-ceiling windows, soft diffused morning sunlight streaming in, minimalist furniture, indoor bonsai and fiddle-leaf fig plants, warm cozy atmosphere, Architectural Digest editorial shot, octane render, 8k resolution, ultra-clean aesthetic --ar 16:9 --v 6.0`
  },
  {
    id: "img-03",
    title: "Diseño de Logotipo Minimalista Vectorial y Marca",
    category: "imagenes",
    categoryLabel: "Imágenes & Arte",
    icon: "image",
    tags: ["Logo", "Vectorial", "Branding", "Minimalismo"],
    models: ["DALL-E 3", "Midjourney v6"],
    description: "Crea isotipos geométricos limpios, de líneas fluidas, sobre fondo blanco neutro y listos para vectorizar.",
    variables: [
      { name: "CONCEPTO_LOGO", label: "Concepto o Símbolo", placeholder: "ej. Un halcón peregrino combinado geométricamente con un rayo eléctrico" },
      { name: "ESTILO_LOGO", label: "Estilo Visual", placeholder: "ej. Minimalist flat vector, geometric golden ratio, single line art, vibrant cyan and obsidian" }
    ],
    template: `Minimalist modern logo design of [CONCEPTO_LOGO], [ESTILO_LOGO], flat 2D vector graphic, clean bold lines, golden ratio proportions, solid pure white background, no gradients, no photorealistic details, Behance and Dribbble trending identity design, SVG icon style --no text, typography, photorealistic, mockup`
  },
  {
    id: "img-04",
    title: "Fotografía de Producto de Estudio Comercial (E-commerce / Hero)",
    category: "imagenes",
    categoryLabel: "Imágenes & Arte",
    icon: "image",
    tags: ["Producto", "Comercial", "Estudio", "Publicidad"],
    models: ["Midjourney v6", "Flux.1", "DALL-E 3"],
    description: "Fotografía comercial de alta gama con pedestal flotante, iluminación de estudio suave, reflejos sutiles y gotas de agua.",
    variables: [
      { name: "PRODUCTO_OBJETO", label: "Producto", placeholder: "ej. Frasco de perfume de lujo de vidrio esmerilado color ámbar con tapa dorada" },
      { name: "ENTORNO_PODIO", label: "Podio y Elementos Botánicos", placeholder: "ej. Sobre un podio de piedra volcánica negra rodeado de rodajas de naranja sanguina y gotas de agua fresca" }
    ],
    template: `High-end commercial studio product photography of [PRODUCTO_OBJETO], placed [ENTORNO_PODIO], dramatic soft studio lighting, rim light highlighting glass edges, subtle water droplets and mist, luxury advertising campaign, Hasselblad H6D-100c, hyper-detailed, clean reflection --ar 4:5 --style raw --v 6.0`
  },
  {
    id: "img-05",
    title: "Ilustración Isométrica 3D Estilo Claymation / Low-Poly",
    category: "imagenes",
    categoryLabel: "Imágenes & Arte",
    icon: "image",
    tags: ["3D", "Isométrico", "Claymation", "Blender"],
    models: ["DALL-E 3", "Midjourney v6"],
    description: "Mundos en miniatura tipo diorama 3D con texturas de arcilla suave, colores pastel e iluminación cálida.",
    variables: [
      { name: "ESCENA_ISOMETRICA", label: "Escena o Edificio", placeholder: "ej. Una pequeña cafetería acogedora en una esquina con terraza, bicicletas y luces de guirnalda" }
    ],
    template: `3D cute isometric diorama of [ESCENA_ISOMETRICA], rendered in Blender, soft claymation and matte plastic texture, pastel color palette with warm vibrant accents, tilt-shift lens effect, miniature world aesthetic, soft ambient occlusion, cozy whimsical lighting, 4k 3D icon style --ar 1:1`
  },
  {
    id: "img-06",
    title: "Ilustración Anime / Manga de Alta Gama (Estilo Makoto Shinkai / Ghibli)",
    category: "imagenes",
    categoryLabel: "Imágenes & Arte",
    icon: "image",
    tags: ["Anime", "Manga", "Ghibli", "Shinkai", "Ilustración"],
    models: ["Midjourney v6 (Niji 6)", "DALL-E 3"],
    description: "Paisajes emotivos con cielos espectaculares, nubes voluminosas, rayos crepusculares y detalle artesanal.",
    variables: [
      { name: "PERSONAJES_ACCION", label: "Personaje y Acción", placeholder: "ej. Una chica estudiante con mochila mirando trenes pasar en una estación rural florida" },
      { name: "ESTILO_ANIME", label: "Estilo", placeholder: "ej. Makoto Shinkai aesthetic, Studio Ghibli nostalgic warmth, vivid sky with glowing clouds and lens flare" }
    ],
    template: `Masterpiece anime illustration of [PERSONAJES_ACCION], [ESTILO_ANIME], stunning detailed sky with cumulus sunset clouds, twilight lighting, vibrant color harmony, cherry blossom petals drifting in the wind, cinematic composition, wallpaper quality, trending on Pixiv --ar 16:9 --niji 6`
  },
  {
    id: "img-07",
    title: "Arte Conceptual de Ciencia Ficción y Cyberpunk",
    category: "imagenes",
    categoryLabel: "Imágenes & Arte",
    icon: "image",
    tags: ["Sci-Fi", "Cyberpunk", "Concept Art", "Futurista"],
    models: ["Midjourney v6", "Flux.1", "DALL-E 3"],
    description: "Megaciudades futuristas con rascacielos colosales, carteles holográficos de neón, lluvia y vehículos voladores.",
    variables: [
      { name: "ESCENARIO_SCIFI", label: "Escenario Futurista", placeholder: "ej. Callejón abarrotado de mercado nocturno en Neo-Tokio con androides y puestos de ramen callejero" }
    ],
    template: `Epic sci-fi concept art of [ESCENARIO_SCIFI], cyberpunk aesthetic, glowing neon signs reflecting on wet asphalt puddles, dense atmospheric volumetric fog and steam, towering megastructures in the background, flying spinner cars, Syd Mead and Blade Runner 2049 inspiration, cinematic matte painting, artstation trending --ar 21:9 --v 6.0`
  },
  {
    id: "img-08",
    title: "Diseño de Interfaz de Usuario (UI/UX) y Mockup de App Móvil",
    category: "imagenes",
    categoryLabel: "Imágenes & Arte",
    icon: "image",
    tags: ["UI/UX", "App Mockup", "Figma", "Mobile UI"],
    models: ["DALL-E 3", "Midjourney v6"],
    description: "Diseños de interfaces móviles modernas con modo oscuro, glassmorphism, tarjetas limpias y gráficos de métricas.",
    variables: [
      { name: "TIPO_APP", label: "Tipo de Aplicación", placeholder: "ej. App de finanzas e inversiones cripto y acciones en tiempo real" },
      { name: "ESTILO_UI", label: "Estilo Visual UI", placeholder: "ej. Sleek dark mode, neon purple and emerald accents, glassmorphism blur cards, modern typography" }
    ],
    template: `Modern mobile app UI/UX design mockup for [TIPO_APP], [ESTILO_UI], high-fidelity screen layout showing user dashboard, financial trend graph, clean minimalist navigation bar, modern Outfit font, Behance UI/UX trending, Dribbble featured design, clean presentation angle --ar 9:16`
  },
  {
    id: "img-09",
    title: "Pintura al Óleo Clásica Impresionista / Renacentista",
    category: "imagenes",
    categoryLabel: "Imágenes & Arte",
    icon: "image",
    tags: ["Óleo", "Impresionismo", "Pintura", "Arte Clásico"],
    models: ["Midjourney v6", "DALL-E 3"],
    description: "Pinturas con pinceladas empastadas visibles, textura de lienzo al óleo, claroscuro y paletas cromáticas históricas.",
    variables: [
      { name: "TEMA_PINTURA", label: "Sujeto o Paisaje", placeholder: "ej. Un banquete medieval a la luz de velas en un castillo de piedra" },
      { name: "MAESTRO_PINTOR", label: "Estilo del Maestro", placeholder: "ej. Rembrandt chiaroscuro o Claude Monet impressionist brushstrokes" }
    ],
    template: `Fine art oil painting of [TEMA_PINTURA], painted in the style of [MAESTRO_PINTOR], rich visible textured canvas impasto brushwork, dramatic chiaroscuro lighting with deep shadows and luminous highlights, museum masterpiece, timeless classical art composition --ar 4:3 --v 6.0`
  },
  {
    id: "img-10",
    title: "Diseño de Pegatinas Troqueladas / Stickers Vectoriales",
    category: "imagenes",
    categoryLabel: "Imágenes & Arte",
    icon: "image",
    tags: ["Sticker", "Pegatina", "Die-Cut", "Ilustración"],
    models: ["DALL-E 3", "Midjourney v6"],
    description: "Ilustraciones divertidas con contorno blanco troquelado grueso, colores vivos y sombras limpias.",
    variables: [
      { name: "PERSONAJE_STICKER", label: "Personaje u Objeto", placeholder: "ej. Un gato astronauta comiendo pizza espacial en gravedad cero" }
    ],
    template: `Cute die-cut sticker design of [PERSONAJE_STICKER], thick bold white sticker outline contour, vibrant pop colors, flat vector illustration style, kawaii cartoon aesthetic, clean white background, ready to print, high resolution vector artwork --no photorealistic, background scenery`
  },
  {
    id: "img-11",
    title: "Fotografía Macro de Naturaleza Hiperdetallada",
    category: "imagenes",
    categoryLabel: "Imágenes & Arte",
    icon: "image",
    tags: ["Macro", "Naturaleza", "Detalle", "Fotografía"],
    models: ["Midjourney v6", "Flux.1"],
    description: "Primeros planos extremos revelando texturas microscópicas: gotas de rocío, ojos de insectos o venas de hojas.",
    variables: [
      { name: "OBJETO_MACRO", label: "Sujeto Natural", placeholder: "ej. Un camaleón verde esmeralda con iris dorado sobre una orquídea con rocío" }
    ],
    template: `Extreme macro photography of [OBJETO_MACRO], capturing microscopic scales, iridescent textures and individual water droplet reflections, 100mm macro lens, f/2.8 aperture, tack sharp focus, soft creamy bokeh background, professional studio ring light, 8k National Geographic --ar 16:9 --v 6.0`
  },
  {
    id: "img-12",
    title: "Póster Vintage / Retro de Viajes de los Años 60",
    category: "imagenes",
    categoryLabel: "Imágenes & Arte",
    icon: "image",
    tags: ["Vintage", "Retro", "Póster", "Turismo"],
    models: ["DALL-E 3", "Midjourney v6"],
    description: "Estética retro de los años 50-60 con serigrafía, colores desvaídos, tipografía de bloque y texturas de papel envejecido.",
    variables: [
      { name: "DESTINO_VIAJE", label: "Destino o Ciudad", placeholder: "ej. Los Alpes Suizos con teleféricos y montañas nevadas" }
    ],
    template: `Vintage 1960s mid-century travel poster for [DESTINO_VIAJE], screenprint lithograph aesthetic, bold geometric shapes, muted pastel palette with retro orange and teal accents, distressed paper texture, Swiss graphic design style, minimalist vector travel art --ar 2:3`
  },
  {
    id: "img-13",
    title: "Render 3D de Personaje Animado Estilo Pixar / Disney",
    category: "imagenes",
    categoryLabel: "Imágenes & Arte",
    icon: "image",
    tags: ["Pixar", "Disney", "Personaje 3D", "Animación"],
    models: ["Midjourney v6", "DALL-E 3"],
    description: "Personajes 3D entrañables con ojos expresivos, shaders de piel translúcida (subsurface scattering) y pelaje detallado.",
    variables: [
      { name: "DESCRIPCION_PERSONAJE", label: "Personaje y Actitud", placeholder: "ej. Un pequeño zorro aventurero con bufanda de lana y lupa de detective" }
    ],
    template: `3D animated character render of [DESCRIPCION_PERSONAJE], Pixar and Disney animation movie style, large expressive glossy eyes, detailed fur simulation, subsurface scattering skin shader, warm soft studio rim lighting, octane render, 4k cinematic still --ar 1:1 --v 6.0`
  },
  {
    id: "img-14",
    title: "Patrón Textil Continuo sin Costuras (Seamless Pattern)",
    category: "imagenes",
    categoryLabel: "Imágenes & Arte",
    icon: "image",
    tags: ["Patrón", "Seamless", "Textil", "Repetición"],
    models: ["Midjourney v6", "DALL-E 3"],
    description: "Crea patrones repetibles que encajan a la perfección en mosaico para telas, papeles pintados o fondos web.",
    variables: [
      { name: "ELEMENTOS_PATRON", label: "Elementos y Temática", placeholder: "ej. Setas mágicas bioluminiscentes, helechos dorados y polillas lunares" },
      { name: "PALETA_PATRON", label: "Colores y Fondo", placeholder: "ej. Fondo azul noche profundo con acentos en verde menta y oro metálico" }
    ],
    template: `Seamless repeatable pattern tile of [ELEMENTOS_PATRON], [PALETA_PATRON], botanical art nouveau illustration, flat vector print design, perfectly repeating borders, wallpaper and textile pattern, high resolution print ready --tile --v 6.0`
  },
  {
    id: "img-15",
    title: "Arte Surrealista Onírico (Estilo Salvador Dalí / Magritte)",
    category: "imagenes",
    categoryLabel: "Imágenes & Arte",
    icon: "image",
    tags: ["Surrealismo", "Onírico", "Dalí", "Conceptual"],
    models: ["Midjourney v6", "DALL-E 3"],
    description: "Composiciones imposibles con leyes físicas alteradas, nubes flotantes en habitaciones y objetos descontextualizados.",
    variables: [
      { name: "PARADOJA_SURREAL", label: "Concepto Paradójico", placeholder: "ej. Un océano flotando en el cielo donde las ballenas nadan entre estrellas y el suelo es un desierto de relojes de arena" }
    ],
    template: `Surrealistic dreamscape artwork depicting [PARADOJA_SURREAL], inspired by Salvador Dalí and René Magritte, impossible physics, metaphysical atmosphere, dramatic golden sunset light cast across impossible horizons, exquisite oil painting texture, symbolic and philosophical art piece --ar 16:9 --v 6.0`
  },
  {
    id: "img-16",
    title: "Fotografía Streetwear y Moda Urbana Editorial (Vogue / Highsnobiety)",
    category: "imagenes",
    categoryLabel: "Imágenes & Arte",
    icon: "image",
    tags: ["Moda", "Streetwear", "Editorial", "Vogue"],
    models: ["Midjourney v6", "Flux.1"],
    description: "Sesión de moda callejera con modelos vanguardistas, prendas oversize técnicas y localizaciones urbanas crudas.",
    variables: [
      { name: "OUTFIT_MODELO", label: "Atuendo y Modelo", placeholder: "ej. Modelo andrógina con chaqueta impermeable cyberpunk translúcida, pantalones cargo oversize y zapatillas futuristas" },
      { name: "LOCACION_URBANA", label: "Lugar de la Sesión", placeholder: "ej. Terraza de hormigón brutalista en Berlín bajo cielo nublado" }
    ],
    template: `High-fashion editorial streetwear photograph of [OUTFIT_MODELO], shot on location at [LOCACION_URBANA], flash photography, raw candid aesthetic, direct hard lighting, Kodak Tri-X 400 film grain, Highsnobiety and Vogue runway editorial, full body fashion shot --ar 4:5 --style raw --v 6.0`
  },
  {
    id: "img-17",
    title: "Iconos 3D de Cristal Líquido y Vidrio Translúcido (Glassmorphism)",
    category: "imagenes",
    categoryLabel: "Imágenes & Arte",
    icon: "image",
    tags: ["Glassmorphism", "Iconos 3D", "Vidrio", "UI"],
    models: ["DALL-E 3", "Midjourney v6"],
    description: "Elementos tridimensionales de vidrio esmerilado con refracción de luz interna y acentos iridiscentes.",
    variables: [
      { name: "OBJETO_ICONO", label: "Objeto a Representar", placeholder: "ej. Un escudo de seguridad con un candado central brillante" }
    ],
    template: `3D glassmorphism icon of [OBJETO_ICONO], frosted translucent frosted glass material, internal glowing neon gradient reflections, iridescent rainbow chromatic aberration at the edges, smooth floating shadow on pure dark slate background, Cinema 4D and Redshift render, premium Apple UI asset --ar 1:1`
  },
  {
    id: "img-18",
    title: "Ilustración de Portada de Libro / Novela de Fantasía Épica",
    category: "imagenes",
    categoryLabel: "Imágenes & Arte",
    icon: "image",
    tags: ["Portada", "Fantasía", "Libros", "Épico"],
    models: ["Midjourney v6", "DALL-E 3"],
    description: "Composición vertical de alto impacto con castillos en acantilados, dragones, magia arcana y espacio para títulos.",
    variables: [
      { name: "ESCENA_PORTADA", label: "Escena Principal", placeholder: "ej. Un caballero solitario frente a una colosal puerta de runas brillantes en una montaña nevada" }
    ],
    template: `Epic fantasy novel book cover illustration of [ESCENA_PORTADA], breathtaking scale and atmospheric depth, glowing magical runes, swirling blizzard snow effects, Frank Frazetta and Greg Rutkowski oil painting style, dramatic cinematic composition with clean negative space at top for typography --ar 2:3 --v 6.0`
  },
  {
    id: "img-19",
    title: "Arte de Acuarela Botánica y Flora Silvestre",
    category: "imagenes",
    categoryLabel: "Imágenes & Arte",
    icon: "image",
    tags: ["Acuarela", "Botánica", "Naturaleza", "Pintura"],
    models: ["DALL-E 3", "Midjourney v6"],
    description: "Pinturas de acuarela suave sobre papel rugoso de algodón con manchas de agua transparentes y líneas finas.",
    variables: [
      { name: "FLORES_PLANTAS", label: "Flores o Especies", placeholder: "ej. Ramo silvestre de lavanda, eucalipto, peonías rosadas y amapolas" }
    ],
    template: `Delicate botanical watercolor painting of [FLORES_PLANTAS], wet-on-wet watercolor bleeding technique, soft translucent color washes, fine ink line details, painted on cold press textured watercolor paper, pure white background, elegant organic fine art --ar 3:4 --v 6.0`
  },
  {
    id: "img-20",
    title: "Generador de Fondos Abstractos de Fluidos Líquidos y Ondas 3D",
    category: "imagenes",
    categoryLabel: "Imágenes & Arte",
    icon: "image",
    tags: ["Fondos", "Abstracto", "Fluidos", "Wallpaper"],
    models: ["Midjourney v6", "DALL-E 3"],
    description: "Fondos fluidos hipnóticos con gradientes de color metálico, seda flotante y ondas de alta resolución.",
    variables: [
      { name: "COLORES_FLUIDO", label: "Paleta de Colores", placeholder: "ej. Ondas de seda líquida en violeta cósmico, azul eléctrico y oro pulido" }
    ],
    template: `3D dynamic abstract liquid wave background composed of [COLORES_FLUIDO], smooth flowing ribbons and silk cloth physics, metallic glossy reflections, deep shadows, soft ambient backlight, luxury wallpaper 8k, modern minimalist abstract composition --ar 16:9 --v 6.0`
  }
];
