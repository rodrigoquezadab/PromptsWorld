/**
 * PromptHub - Catálogo de Prompts Profesionales Curados (280+ Prompts)
 * Carga de datos unificada desde la base de datos JSON desacoplada (data/prompts-database.json)
 * con respaldo modular para compatibilidad offline y protocolo file://.
 */

const CATEGORIES_DATA = (typeof window !== 'undefined' && window.PROMPTS_WORLD_DEFAULT_DATABASE && Array.isArray(window.PROMPTS_WORLD_DEFAULT_DATABASE.categories))
  ? window.PROMPTS_WORLD_DEFAULT_DATABASE.categories
  : [
      { id: "all", label: "Todos", icon: "grid" },
      { id: "desarrollo", label: "Desarrollo", icon: "code" },
      { id: "redaccion", label: "Redacción", icon: "feather" },
      { id: "marketing", label: "Marketing", icon: "target" },
      { id: "productividad", label: "Productividad", icon: "check-circle" },
      { id: "aprendizaje", label: "Aprendizaje", icon: "book-open" },
      { id: "creatividad", label: "Creatividad", icon: "lightbulb" },
      { id: "metaprompt", label: "Meta-Prompts", icon: "terminal" },
      { id: "datos", label: "Datos & Finanzas", icon: "table" },
      { id: "imagenes", label: "Imágenes & Arte", icon: "image" },
      { id: "musica", label: "Música & Audio", icon: "music" },
      { id: "video", label: "Video & Animación", icon: "video" },
      { id: "ciberseguridad", label: "Ciberseguridad", icon: "shield" },
      { id: "legal", label: "Legal & Compliance", icon: "scale" },
      { id: "bienestar", label: "Salud & Bienestar", icon: "activity" }
    ];

const PROMPTS_DATA = (typeof window !== 'undefined' && window.PROMPTS_WORLD_DEFAULT_DATABASE && Array.isArray(window.PROMPTS_WORLD_DEFAULT_DATABASE.prompts))
  ? window.PROMPTS_WORLD_DEFAULT_DATABASE.prompts
  : [
      ...(typeof PROMPTS_DESARROLLO !== 'undefined' ? PROMPTS_DESARROLLO : []),
      ...(typeof PROMPTS_REDACCION !== 'undefined' ? PROMPTS_REDACCION : []),
      ...(typeof PROMPTS_MARKETING !== 'undefined' ? PROMPTS_MARKETING : []),
      ...(typeof PROMPTS_PRODUCTIVIDAD !== 'undefined' ? PROMPTS_PRODUCTIVIDAD : []),
      ...(typeof PROMPTS_APRENDIZAJE !== 'undefined' ? PROMPTS_APRENDIZAJE : []),
      ...(typeof PROMPTS_CREATIVIDAD !== 'undefined' ? PROMPTS_CREATIVIDAD : []),
      ...(typeof PROMPTS_METAPROMPT !== 'undefined' ? PROMPTS_METAPROMPT : []),
      ...(typeof PROMPTS_DATOS !== 'undefined' ? PROMPTS_DATOS : []),
      ...(typeof PROMPTS_IMAGENES !== 'undefined' ? PROMPTS_IMAGENES : []),
      ...(typeof PROMPTS_MUSICA !== 'undefined' ? PROMPTS_MUSICA : []),
      ...(typeof PROMPTS_VIDEO !== 'undefined' ? PROMPTS_VIDEO : []),
      ...(typeof PROMPTS_CIBERSEGURIDAD !== 'undefined' ? PROMPTS_CIBERSEGURIDAD : []),
      ...(typeof PROMPTS_LEGAL !== 'undefined' ? PROMPTS_LEGAL : []),
      ...(typeof PROMPTS_BIENESTAR !== 'undefined' ? PROMPTS_BIENESTAR : [])
    ];

