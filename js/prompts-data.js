/**
 * PromptHub - Catálogo de Prompts Profesionales Curados (160+ Prompts)
 * Unifica las 8 categorías modulares de datos.
 */

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

const PROMPTS_DATA = [
  ...(typeof PROMPTS_DESARROLLO !== 'undefined' ? PROMPTS_DESARROLLO : []),
  ...(typeof PROMPTS_REDACCION !== 'undefined' ? PROMPTS_REDACCION : []),
  ...(typeof PROMPTS_MARKETING !== 'undefined' ? PROMPTS_MARKETING : []),
  ...(typeof PROMPTS_PRODUCTIVIDAD !== 'undefined' ? PROMPTS_PRODUCTIVIDAD : []),
  ...(typeof PROMPTS_APRENDIZAJE !== 'undefined' ? PROMPTS_APRENDIZAJE : []),
  ...(typeof PROMPTS_CREATIVIDAD !== 'undefined' ? PROMPTS_CREATIVIDAD : []),
  ...(typeof PROMPTS_METAPROMPT !== 'undefined' ? PROMPTS_METAPROMPT : []),
  ...(typeof PROMPTS_DATOS !== 'undefined' ? PROMPTS_DATOS : [])
];
