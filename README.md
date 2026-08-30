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

El repositorio incluye prompts organizados en 14 áreas de alta demanda (20 prompts por categoría = **280 prompts curados** en total):

| Categoría | Casos de Uso Destacados | Modelos Recomendados |
| :--- | :--- | :--- |
| 💻 **Desarrollo & Programación** | Auditoría y Code Review senior, Testing (TDD/Edge cases), Arquitectura Cloud con Mermaid, optimización SQL, Docker multi-stage, TypeScript refactor, Regex, OpenAPI. | Claude 3.5 Sonnet, ChatGPT-4o, DeepSeek-V3 |
| ✍️ **Redacción & Contenido** | Artículos SEO sin clichés de IA, Hilos virales X/LinkedIn, Guiones de retención, Newsletters, Humanizador anti-IA, Landing PAS/AIDA, Case Studies. | ChatGPT-4o, Claude 3.5 Sonnet |
| 🎯 **Marketing & Negocios** | Buyer Personas profundos, Cold outreach B2B, Framework Steve Blank, Embudos TOFU/MOFU/BOFU, Lanzamientos Product Hunt, Ofertas Hormozi, CRO. | Claude 3.5 Sonnet, ChatGPT-4o |
| ⏱️ **Productividad & Gestión** | Minutas ejecutivas accionables, Matriz Eisenhower 80/20, Automatizaciones Make/Zapier, Deep Work, OKRs, Inbox Zero, SOPs, Hábitos atómicos. | ChatGPT-4o, Claude 3.5 Sonnet, Gemini 1.5 Pro |
| 🎓 **Aprendizaje & Estudio** | Método Feynman, Simulador de entrevistas STAR, Diálogo socrático, Tarjetas Anki, Tutor de idiomas, Mapas conceptuales Mermaid, Modelos mentales. | ChatGPT-4o, Gemini 1.5 Pro |
| 💡 **Creatividad & Brainstorming** | Metodología SCAMPER, Seis Sombreros de De Bono, Naming Studio, Reverse Brainstorming, Worldbuilding, Gamificación Octalysis, Micro-SaaS. | Claude 3.5 Sonnet, ChatGPT-4o |
| ⚙️ **Meta-Prompts & Engineering** | Optimizador universal, System Prompts para Custom GPTs, Few-Shot, Chain of Thought `<thinking>`, Blindaje anti-inyección, Structured Outputs JSON Schema. | Claude 3.5 Sonnet, ChatGPT-4o, DeepSeek-R1 |
| 📊 **Análisis de Datos & Finanzas** | Fórmulas Excel/Sheets/Apps Script, FODA/DAFO, Ratios financieros (EBITDA, ROE), EDA en Python/Pandas, Dashboards Power BI DAX, Modelos DCF, Cohortes SQL. | ChatGPT-4o, DeepSeek-V3 |
| 🎨 **Imágenes & Arte Visual** | Retratos 35mm cinematográficos, Renders arquitectónicos minimalistas, Logos vectoriales, Fotografía de producto, Ilustraciones 3D Isométricas, Anime Niji. | Midjourney v6, Flux.1, DALL-E 3 |
| 🎵 **Música & Audio IA** | Prompts y metatags para Suno v3.5/v4, Udio AI, Letras con rima y hooks métricos, Sound Design Foley, Cadenas de Mezcla/Mastering, Beats Lo-Fi, Sintetizadores. | Suno v3.5/v4, Udio, Claude 3.5 Sonnet |
| 🎬 **Video & Animación IA** | Prompts con movimiento de cámara para Runway Gen-3 / Sora / Luma, Storyboards técnicos, Videos explicativos 2D, Edición de alta retención, FPV Drones. | Runway Gen-3, Sora, Luma, Kling |
| 🛡️ **Ciberseguridad & Pentesting** | Auditoría OWASP Top 10, Modelado de amenazas STRIDE, Playbooks de Respuesta a Incidentes, Auditoría Smart Contracts Solidity, Hardening Linux, Forense RAM. | Claude 3.5 Sonnet, ChatGPT-4o, DeepSeek-V3 |
| ⚖️ **Legal & Compliance** | Contratos de confidencialidad (NDA), Auditoría RGPD/GDPR, Master Services Agreement (MSA), Términos SaaS (ToS), Pactos de Socios Vesting, EU AI Act. | Claude 3.5 Sonnet, ChatGPT-4o |
| 🏃 **Salud & Bienestar** | Planes de fuerza e hipertrofia, Cálculo de macros IIFYM, Protocolos de sueño circadiano, Ergonomía de escritorio, Longevidad (Peter Attia), Mindfulness. | Claude 3.5 Sonnet, ChatGPT-4o |

---

## 📁 Estructura del Proyecto

```
Prompts/
├── index.html          # Estructura semántica, accesibilidad y meta tags SEO
├── css/
│   ├── style.css       # Sistema de diseño: variables CSS, modo oscuro, layout mobile-first
│   └── animations.css  # Animaciones, transiciones, toasts y microinteracciones
├── js/
│   ├── data/           # Módulos de prompts estructurados (20 por categoría = 280 total)
│   │   ├── desarrollo.js     # 20 prompts de Programación, DevOps y Arquitectura
│   │   ├── redaccion.js      # 20 prompts de Copywriting, SEO, Guiones y Storytelling
│   │   ├── marketing.js      # 20 prompts de Estrategia B2B/B2C, Ads, Funnels y Ventas
│   │   ├── productividad.js  # 20 prompts de Gestión, Automatización, Minutas y Foco
│   │   ├── aprendizaje.js    # 20 prompts de Pedagogía, Métodos de Estudio y Roleplay
│   │   ├── creatividad.js    # 20 prompts de Brainstorming, SCAMPER e Ideación
│   │   ├── metaprompt.js     # 20 prompts de Prompt Engineering y System Prompts
│   │   ├── datos.js          # 20 prompts de Análisis Cuantitativo, SQL, Excel y Finanzas
│   │   ├── imagenes.js       # 20 prompts de Generación Visual (Midjourney, Flux, DALL-E)
│   │   ├── musica.js         # 20 prompts de Audio y Música IA (Suno, Udio, Producción)
│   │   ├── video.js          # 20 prompts de Video y Animación (Runway, Sora, Luma)
│   │   ├── ciberseguridad.js # 20 prompts de Hacking Ético, Pentesting y Hardening
│   │   ├── legal.js          # 20 prompts de Contratos, Privacidad y Compliance
│   │   └── bienestar.js      # 20 prompts de Fitness, Nutrición, Sueño y Longevidad
│   ├── prompts-data.js # Unificador del catálogo global y categorías
│   └── app.js          # Lógica interactiva (búsqueda, filtros, personalizador, favoritos)
├── .gitignore          # Archivos y carpetas ignorados por Git
└── README.md           # Documentación detallada del proyecto
```

---

## 🤝 Cómo Contribuir

¡Las contribuciones de la comunidad son bienvenidas! Si tienes un prompt comprobado de alto valor:

1. Haz un **Fork** del proyecto.
2. Crea una rama para tu feature (`git checkout -b feature/nuevo-prompt`).
3. Agrega tu prompt en el archivo de categoría correspondiente dentro de `js/data/<categoria>.js` siguiendo la estructura de objetos existente.
4. Haz commit de tus cambios (`git commit -m 'feat: agrega prompt para optimización de Dockerfiles'`).
5. Haz push a la rama (`git push origin feature/nuevo-prompt`).
6. Abre un **Pull Request**.

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Siéntete libre de utilizarlo, modificarlo y compartirlo.
