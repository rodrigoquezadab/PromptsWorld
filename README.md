# ⚡ PromptHub — Biblioteca Interactiva de Prompts Maestros para IA

<div align="center">

![GitHub stars](https://img.shields.io/badge/Status-Active-success?style=for-the-badge)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-Vanilla-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Responsive](https://img.shields.io/badge/Design-Mobile--First%20%7C%20Dark%20Mode-6366F1?style=for-the-badge)

**Un catálogo interactivo, moderno y de alto impacto con los mejores prompts curados y estructurados para ChatGPT-4o, Claude 3.5 Sonnet, Gemini 1.5 Pro y DeepSeek.**

[🚀 Demo en Vivo](#) • [✨ Características](#-características-principales) • [📚 Categorías](#-categorías-incluidas) • [🛠️ Uso y Personalización](#-cómo-usar-el-personalizador-de-variables) • [🤝 Contribución](#-cómo-contribuir)

</div>

---

## 📖 Contexto del Proyecto

Con el avance exponencial de los Modelos de Lenguaje Grande (LLMs), la diferencia entre una respuesta mediocre y una solución de nivel profesional radica en la **Ingeniería de Prompts (Prompt Engineering)**. 

Muchos usuarios y desarrolladores pierden tiempo redactando instrucciones genéricas que generan alucinaciones, respuestas superficiales o código con errores. 

**PromptHub** nace con la misión de democratizar y centralizar los **Mega-Prompts más efectivos y testeados del ecosistema**, estructurados bajo principios de diseño de instrucciones de élite:
- **Asignación de Roles Específicos (Role Prompting)**.
- **Técnicas de Cadena de Pensamiento (Chain of Thought)**.
- **Restricciones Negativas y Guardrails**.
- **Variables Dinámicas Parametrizables** para sustitución inmediata sin editar manualmente texto complejo.

---

## ✨ Características Principales

- 🌑 **Dark Mode por Defecto**: Diseñado con una paleta moderna inspirada en interfaces como Vercel y Linear (tonos pizarra oscuro, glassmorphism, acentos en violeta y cian, y tipografías nítidas).
- 📱 **Enfoque Mobile-First**: 100% responsivo y adaptado tanto a pantallas móviles táctiles como a monitores ultrawide.
- ⚡ **Búsqueda Instantánea & Filtros en Tiempo Real**: Encuentra prompts por palabras clave, modelos recomendados, casos de uso o etiquetas temáticas (`#SEO`, `#Testing`, `#SQL`, etc.).
- 🛠️ **Personalizador Interactivo de Variables**: Abre un formulario modal que detecta las variables del prompt (ej. `[LENGUAJE]`, `[TEMA]`, `[AUDIENCIA]`) y te permite rellenarlas en tiempo real con vista previa instantánea antes de copiar.
- 📋 **Copiado al Portapapeles con 1 Clic**: Acciones directas con notificaciones visuales (Toasts) para no interrumpir tu flujo de trabajo.
- ❤️ **Sistema de Favoritos**: Guarda tus prompts recurrentes en tu navegador con persistencia local mediante `localStorage`.
- 🚀 **Cero Dependencias Pesadas**: Construido con **HTML5 semántico, CSS puro y JavaScript Vanilla moderno (ES6+)**, garantizando tiempos de carga ultrarrápidos (<100ms) y máxima compatibilidad.

---

## 📚 Categorías Incluidas

El repositorio incluye prompts organizados en 8 áreas de alta demanda:

| Categoría | Casos de Uso Destacados | Modelos Recomendados |
| :--- | :--- | :--- |
| 💻 **Desarrollo & Programación** | Auditoría y Code Review senior, Generación de suites de tests (TDD/Edge cases), Arquitectura de sistemas distribuidos con diagramas Mermaid, Optimización y refactorización de consultas SQL. | Claude 3.5 Sonnet, ChatGPT-4o, DeepSeek-V3 |
| ✍️ **Redacción & Contenido** | Artículos SEO con estilo humano libre de clichés de IA, Hilos virales para X/LinkedIn, Guiones de video para YouTube/Reels basados en retención. | ChatGPT-4o, Claude 3.5 Sonnet |
| 🎯 **Marketing & Negocios** | Buyer Personas con mapa de empatía y objeciones profundas, Secuencias de Cold Outreach B2B de 3 pasos, Propuestas de Valor (Framework Steve Blank). | Claude 3.5 Sonnet, ChatGPT-4o |
| ⏱️ **Productividad & Gestión** | Sintetizador de minutas de reuniones con matriz de tareas accionables, Priorizador con Matriz de Eisenhower y Principio de Pareto (80/20). | ChatGPT-4o, Claude 3.5 Sonnet, Gemini 1.5 Pro |
| 🎓 **Aprendizaje & Estudio** | Tutor pedagógico con Método Feynman y analogías cotidianas, Simulador interactivo de entrevistas laborales paso a paso con feedback STAR. | ChatGPT-4o, Gemini 1.5 Pro |
| 💡 **Creatividad & Brainstorming** | Ideación de modelos de negocio disruptivos mediante pensamiento lateral y metodología SCAMPER. | Claude 3.5 Sonnet, ChatGPT-4o |
| ⚙️ **Meta-Prompts & Prompt Engineering** | Optimizador universal de prompts (transforma ideas simples en mega-prompts), Arquitecto de System Prompts y Custom GPTs con personalidad consistente. | Claude 3.5 Sonnet, ChatGPT-4o, DeepSeek-R1 |
| 📊 **Análisis de Datos & Finanzas** | Generador de fórmulas complejas de Excel / Google Sheets / Apps Script, Matriz FODA/DAFO estratégica cuantificada con planes de acción. | ChatGPT-4o, DeepSeek-V3 |

---

## 🛠️ Cómo Usar el Personalizador de Variables

1. Explora el catálogo o usa la barra de búsqueda (puedes presionar la tecla `/` en cualquier momento para enfocar el buscador).
2. Haz clic en el botón **"Personalizar"** en la tarjeta del prompt que desees utilizar.
3. Rellena los campos con tus datos específicos (por ejemplo: tu lenguaje de programación, fragmento de código, tema o audiencia).
4. Observa cómo la **Vista Previa** se actualiza en tiempo real.
5. Pulsa **"Copiar Prompt Personalizado"** y pégalo directamente en ChatGPT, Claude, Gemini o tu cliente de IA preferido.

---

## 🚀 Instalación y Despliegue Local

No requiere NodeJS, npm ni compiladores. Solo necesitas clonar el repositorio y abrir `index.html` en tu navegador:

```bash
# 1. Clonar el repositorio
git clone https://github.com/tu-usuario/prompthub.git

# 2. Navegar al directorio
cd prompthub

# 3. Abrir en tu navegador
# En Windows:
start index.html

# En macOS:
open index.html

# En Linux:
xdg-open index.html
```

Si prefieres usar un servidor local de desarrollo (Live Server):
```bash
# Usando Python 3
python -m http.server 8000

# Usando npx serve
npx serve .
```

---

## 📁 Estructura del Proyecto

```
Prompts/
├── index.html          # Estructura semántica, accesibilidad y meta tags SEO
├── css/
│   ├── style.css       # Sistema de diseño: variables CSS, modo oscuro, layout mobile-first
│   └── animations.css  # Animaciones, transiciones, toasts y microinteracciones
├── js/
│   ├── prompts-data.js # Base de datos estructurada de prompts y categorías
│   └── app.js          # Lógica interactiva (búsqueda, filtros, personalizador, favoritos)
├── .gitignore          # Archivos y carpetas ignorados por Git
└── README.md           # Documentación detallada del proyecto
```

---

## 🤝 Cómo Contribuir

¡Las contribuciones de la comunidad son bienvenidas! Si tienes un prompt comprobado de alto valor:

1. Haz un **Fork** del proyecto.
2. Crea una rama para tu feature (`git checkout -b feature/nuevo-prompt`).
3. Agrega tu prompt al archivo [js/prompts-data.js](js/prompts-data.js) siguiendo la estructura de objetos existente.
4. Haz commit de tus cambios (`git commit -m 'feat: agrega prompt para optimización de Dockerfiles'`).
5. Haz push a la rama (`git push origin feature/nuevo-prompt`).
6. Abre un **Pull Request**.

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Siéntete libre de utilizarlo, modificarlo y compartirlo.
