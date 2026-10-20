# ⚡ PromptsWorld — Biblioteca Interactiva de Prompts Maestros para IA

<div align="center">

![GitHub stars](https://img.shields.io/badge/Status-Active-success?style=for-the-badge)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-Vanilla-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Responsive](https://img.shields.io/badge/Design-Mobile--First%20%7C%20Dark%20Mode-6366F1?style=for-the-badge)

**Un catálogo interactivo de 280+ prompts curados y estructurados para ChatGPT-4o, Claude 3.5 Sonnet, Gemini 1.5 Pro, DeepSeek, Midjourney, Suno y Runway.**

[🚀 Ver en GitHub](https://github.com/rodrigoquezadab/PromptsWorld) • [✨ Características](#-características-principales) • [📚 Categorías](#-categorías-incluidas) • [🛠️ Uso y Personalización](#-cómo-usar-el-personalizador-de-variables) • [🤝 Contribución](#-cómo-contribuir)

</div>

---

## 📖 Contexto del Proyecto

Con el avance exponencial de los Modelos de Lenguaje Grande (LLMs) e IA Generativa de video, audio e imágenes, la diferencia entre una respuesta mediocre y una solución de nivel profesional radica en la **Ingeniería de Prompts (Prompt Engineering)**. 

Muchos usuarios y desarrolladores pierden tiempo redactando instrucciones genéricas que generan alucinaciones, respuestas superficiales o código con errores. 

**PromptsWorld** nace con la misión de democratizar y centralizar los **Mega-Prompts más efectivos y testeados del ecosistema**, estructurados bajo principios de diseño de instrucciones de élite:
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

El repositorio incluye prompts organizados en 15 áreas temáticas especializadas (más de **280 prompts curados** en total):

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
| ⛪ **Parroquia San Patricio** | Comunicados y avisos parroquiales en 2 modalidades (completa con horarios de misas/confesiones o rápida con solo dirección y secretaría), sin asteriscos para copiar y pegar directamente, y directriz de uso exclusivo del logo oficial. | ChatGPT-4o, Claude 3.5 Sonnet, Gemini 1.5 Pro |

---

## ✨ Códigos Secretos para Google Gemini (Maverick's 100 Secret Codes)

Además de los prompts maestros, la plataforma incorpora una sección exclusiva con los **100 Códigos Secretos y Atajos de Maverick para Google Gemini** (`Mavericks_Gemini_Secret_Codes.pdf`). Cada código altera el modo de respuesta, fuerza un formato o activa extensiones nativas de Gemini:

| Categoría Gemini | Cantidad | Tipos de Códigos | Casos de Uso Destacados |
| :--- | :---: | :--- | :--- |
| 🌐 **Google Integration** | 12 | `@Workspace` | `@Gmail`, `@Drive`, `@Docs`, `@Sheets`, `@Calendar`, `@Maps`, `@YouTube`, `@Keep`, `@Tasks`, `@Flights`, `@Slides`, `@Contacts`. Sincroniza correos, citas y documentos en tiempo real. |
| 🔍 **Research & Fact-Checking** | 11 | `/Comando` & `MODO` | `/factcheck`, `/deepresearch`, `/source`, `/trending`, `/latest`, `/crosscheck`, `/evidence`, `/mythbust`, `CITETHIS`, `DATAMINE`, `ORIGINSCAN`. Verificación en vivo y rigor analítico. |
| ✍️ **Writing & Editing** | 11 | `/Comando` | `/polish`, `/tighten`, `/voice`, `/hook`, `/closer`, `/pivot`, `/warmup`, `/punch`, `/trim`, `/mirror`, `/deAI`. Modela el tono, elimina clichés de IA y redacta aperturas magnéticas. |
| 💡 **Explanation & Learning** | 11 | `/Comando` & `MODO` | `EL5`, `ONEPAGER`, `/mentor`, `DUMBITDOWN`, `/gapfinder`, `WALKTHROUGH`, `METAPHOR`, `LAYERS`, `/masterclass`, `TEACHBACK`, `VISUALIZE`. Desglose pedagógico multinivel. |
| 🎯 **Analysis & Strategy** | 11 | `/Comando` & `MODO` | `/compare`, `FUNNELMAP`, `/audit`, `BLINDSPOT`, `GAMEBOARD`, `/forecast`, `LEVERAGE`, `BATTLECARD`, `/diagnose`, `PLAYBOOK`, `COSTBENEFIT`. Matrices de decisión y diagnóstico de raíz. |
| 🚀 **Creative & Content** | 11 | `/Comando` & `MODO` | `future`, `WHATIF`, `SCENARIOPLAY`, `/angle`, `CAPTIONGEN`, `HEADLINEGEN`, `/adspin`, `VIRALTEST`, `REPURPOSE`, `/mashup`, `PLOTTWIST`. Ideación disruptiva y creación omnicanal. |
| 🧠 **Thinking & Reasoning** | 11 | `/Comando` & `MODO` | `INVERSION`, `PREMORTEM`, `/stakeholders`, `ROOTCAUSE`, `DOMINO`, `THINKTANK`, `CONTRARIAN`, `CONSTRAINTS`, `TRADEOFFS`, `FRAMEIT`, `BLINDTEST`. Modelos mentales avanzados. |
| 📊 **Formatting & Output** | 11 | `/Comando` & `MODO` | `SNAPSHOT`, `MATRIX`, `SCORECARD`, `DASHBOARD`, `BRIEFING`, `ONESHEET`, `ACTIONPLAN`, `CHEATSHEET`, `CATALOG`, `/wireframe`, `CANVAS`. Formatos ejecutivos y paneles editables. |
| ⚡ **Utility & Power Commands** | 11 | `/Comando` | `/persona`, `/template`, `/chain`, `/split`, `/extract`, `/track`, `/batch`, `/gemify`, `/lingua`, `/contextdump`, `/memorize`. Instrucciones de sistema, cadenas y memoria persistente. |

---

## ⚙️ Configuración y Contexto Personal: "Instrucciones para Gemini"

Para que Gemini responda siempre según tus preferencias profesionales sin tener que recordárselo en cada conversación, la aplicación incluye una sección dedicada a las **Instrucciones Personalizadas** de Gemini:

### 📍 Ruta Oficial en Google Gemini
```text
Configuración ➔ Contexto personal ➔ "Instrucciones para Gemini"
(Settings ➔ Personal context ➔ "Instructions for Gemini")
```

### 🧭 Pasos para Configurarlo en Google Gemini:
1. **Abrir Gemini**: Accede a [gemini.google.com](https://gemini.google.com).
2. **Entrar en Configuración**: Haz clic en el ícono de engranaje ⚙️ **Configuración** en la esquina inferior izquierda del menú lateral.
3. **Acceder a Contexto personal**: Selecciona la opción **Contexto personal** (*Personal context*).
4. **Abrir "Instrucciones para Gemini"**: Haz clic sobre la opción **"Instrucciones para Gemini"** (*Instructions for Gemini*).
5. **Pegar tu plantilla o instrucción personalizada**: Pega las directivas generadas con nuestro constructor o una de las plantillas maestras y guarda los cambios.

### 🛠️ Constructor Interactivo & Plantillas Maestras Incluidas:
- **Constructor en Vivo**: Selecciona tu rol (Desarrollador Senior, Copywriter, Investigador, etc.), tono de respuesta (Directo, Técnico, Ejecutivo, etc.), y reglas fijas (cero saludos, Markdown limpio, ejemplos ejecutables, citar fuentes) con vista previa instantánea y copiado con 1 clic.
- **6 Plantillas Maestras Predefinidas**:
  1. *Desarrollador & Arquitecto de Software Senior* (código limpio, tipado estricto, sin boilerplate innecesario).
  2. *Anti-Fluff & Concisión Máxima Universal* (0% relleno, directo al grano).
  3. *Product Manager & Estratega de Producto* (impacto de negocio, trade-offs, OKRs).
  4. *Copywriter & Creador de Contenido de Alta Conversión* (ganchos irresistibles, sin clichés de IA).
  5. *Investigador Académico & Fact-Checker* (fuentes verificadas, distinción entre hechos e hipótesis).
  6. *Analista de Datos Cuantitativo & BI* (SQL optimizado, fórmulas explicadas y métricas clave).

---

## 🗄️ Base de Datos Desacoplada en JSON (`prompts-database.json`)

Todos los prompts, códigos secretos de Gemini e instrucciones de contexto personal están desacoplados del código de la interfaz y residen en una **base de datos unificada en formato JSON**:

📁 **Archivo principal:** [`data/prompts-database.json`](file:///c:/Users/Rod/Desktop/code/Prompts/data/prompts-database.json)

### 🚀 Funcionalidades Integradas:
1. **✏️ Modificar**: Puedes abrir [`data/prompts-database.json`](file:///c:/Users/Rod/Desktop/code/Prompts/data/prompts-database.json) con cualquier editor de texto o IDE (VS Code, Cursor, Notepad), agregar o editar prompts, categorías o plantillas.
2. **📥 Descargar**: Desde la barra superior o la sección de configuración de la app, pulsa el botón **"Base de Datos (JSON)"** y luego **"Descargar prompts-database.json"** para obtener una copia de respaldo completa con 1 solo clic.
3. **📤 Actualizar o Reemplazar en Caliente**: Sube cualquier archivo `.json` directamente desde el modal de la app. El sistema validará los datos, actualizará el catálogo en caliente sin reiniciar nada y guardará los cambios en tu navegador (`localStorage`).
4. **🔄 Restablecer**: Si realizaste cambios locales y deseas volver a los valores originales de fábrica, pulsa **"Restablecer a Valores Originales"**.
5. **⚡ Sincronización Automática Offline**: Si editas el JSON manualmente y deseas sincronizar el script de respaldo offline (`data/prompts-database.js`), simplemente ejecuta:
   ```bash
   node scripts/sync-database.js
   ```

---

## 📁 Estructura del Proyecto

```
Prompts/
├── index.html                      # Estructura semántica, tabs, modal de DB y meta tags SEO
├── Mavericks_Gemini_Secret_Codes.pdf # Documento original de 100 códigos de Gemini
├── data/
│   ├── prompts-database.json       # 🗄️ BASE DE DATOS CENTRAL (Prompts, Códigos e Instrucciones)
│   └── prompts-database.js         # Wrapper JS para compatibilidad offline y protocolo file://
├── scripts/
│   └── sync-database.js            # Script para sincronizar el JSON con el wrapper JS
├── css/
│   ├── style.css                   # Variables CSS, modo oscuro, modal de DB y layout mobile-first
│   └── animations.css              # Animaciones, transiciones y toasts
├── js/
│   ├── data/                       # Módulos de datos modulares de respaldo
│   │   ├── desarrollo.js
│   │   ├── redaccion.js
│   │   ├── marketing.js
│   │   ├── productividad.js
│   │   ├── aprendizaje.js
│   │   ├── creatividad.js
│   │   ├── metaprompt.js
│   │   ├── datos.js
│   │   ├── imagenes.js
│   │   ├── musica.js
│   │   ├── video.js
│   │   ├── ciberseguridad.js
│   │   ├── legal.js
│   │   ├── bienestar.js
│   │   └── gemini-codes.js         # 100 Códigos Secretos para Gemini
│   ├── prompts-data.js             # Priorizador de datos desde base de datos JSON
│   └── app.js                      # Lógica interactiva y DatabaseManager (Import/Export/Reset)
├── .gitignore                      # Archivos y carpetas ignorados por Git
└── README.md                       # Documentación detallada del proyecto
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
