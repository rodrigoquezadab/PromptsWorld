/**
 * PROMPTS DE ANÁLISIS DE DATOS & FINANZAS (20 Prompts)
 */
const PROMPTS_DATOS = [
  {
    id: "data-01",
    title: "Generador de Fórmulas y Automatización en Excel / Google Sheets",
    category: "datos",
    categoryLabel: "Datos & Finanzas",
    icon: "table",
    tags: ["Excel", "Google Sheets", "VLOOKUP", "REGEX", "Apps Script"],
    models: ["ChatGPT-4o", "DeepSeek-V3"],
    description: "Crea fórmulas anidadas complejas (INDEX/MATCH, LAMBDA, QUERY, REGEX) o macros en Apps Script/VBA explicando cada parámetro.",
    variables: [
      { name: "OBJETIVO_CALCULO", label: "Qué necesitas calcular o extraer", placeholder: "ej. Extraer los correos válidos de una columna sucia y sumar ventas si la fecha es de este año" },
      { name: "HERRAMIENTA", label: "Herramienta", placeholder: "ej. Google Sheets o Excel 365" }
    ],
    template: `Eres un Especialista Certificado en Modelado de Datos y Hojas de Cálculo Avanzadas ([HERRAMIENTA]).
Requerimiento: [OBJETIVO_CALCULO].
Entrega:
1. La Fórmula Exacta lista para copiar (en Español e Inglés).
2. Desglose detallado de cada función anidada.
3. Versión protegida contra errores con IFERROR/SI.ERROR.
4. Código alternativo en Apps Script o VBA si la fórmula se vuelve lenta.`
  },
  {
    id: "data-02",
    title: "Análisis FODA / DAFO Estratégico Cuantificado",
    category: "datos",
    categoryLabel: "Datos & Finanzas",
    icon: "trending-up",
    tags: ["FODA", "Estrategia", "Análisis Financiero", "Competencia"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Elabora una matriz FODA exhaustiva con planes de mitigación de amenazas y apalancamiento de fortalezas.",
    variables: [
      { name: "EMPRESA_SECTOR", label: "Empresa o Proyecto y Sector", placeholder: "ej. Fintech de préstamos personales instantáneos mediante IA en México" },
      { name: "COMPETENCIA", label: "Principales Competidores o Retos", placeholder: "ej. Bancos tradicionales con más liquidez y startups con tasas agresivas" }
    ],
    template: `Actúa como Consultor Senior de Estrategia Corporativa (McKinsey / BCG).
Empresa: [EMPRESA_SECTOR]. Contexto: [COMPETENCIA].
Entrega:
1. Matriz FODA 2x2 (Fortalezas, Oportunidades, Debilidades, Amenazas).
2. Matriz Cruzada de Acciones (Estrategias FO, FA, DO, DA).
3. Plan de Acción Priorizado para los primeros 90 días con métricas de impacto.`
  },
  {
    id: "data-03",
    title: "Analista de Estados Financieros y Ratios de Liquidez / Rentabilidad",
    category: "datos",
    categoryLabel: "Datos & Finanzas",
    icon: "trending-up",
    tags: ["Finanzas", "Ratios", "Balance", "Rentabilidad", "EBITDA"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Interpreta balances y cuentas de resultados calculando EBITDA, ROE, ROA, Ratio de Endeudamiento y Flujo de Caja Libre.",
    variables: [
      { name: "DATOS_FINANCIEROS", label: "Estados Financieros o Cifras Clave", placeholder: "Ingresos: $2M, Coste de Ventas: $800k, Gastos Operativos: $600k, Deuda Total: $500k, Activo Total: $3M, Patrimonio: $1.8M", multiline: true }
    ],
    template: `Eres un Analista Financiero Senior y Banquero de Inversión.
Cifras a analizar:
\`\`\`
[DATOS_FINANCIEROS]
\`\`\`
Provee:
1. Cálculo de Ratios Clave (Margen Bruto, Margen Operativo, Margen Neto, ROE, ROA, Ratio Corriente, Deuda/EBITDA).
2. Diagnóstico de Salud Financiera (Semáforo Verde/Amarillo/Rojo por ratio).
3. 3 Oportunidades Clave para mejorar el flujo de caja y la eficiencia de capital.`
  },
  {
    id: "data-04",
    title: "Científico de Datos: Análisis Exploratorio (EDA en Python / Pandas)",
    category: "datos",
    categoryLabel: "Datos & Finanzas",
    icon: "table",
    tags: ["Python", "Pandas", "EDA", "Data Science", "Seaborn"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o", "DeepSeek-V3"],
    description: "Genera scripts de Python para Análisis Exploratorio de Datos (EDA), detección de outliers, valores nulos y distribuciones.",
    variables: [
      { name: "DESCRIPCION_DATASET", label: "Columnas y Naturaleza del Dataset", placeholder: "ej. Dataset de churn de clientes telecomunicaciones: customer_id, tenure_months, monthly_charges, total_charges, contract_type, churn (0/1)" }
    ],
    template: `Actúa como Lead Data Scientist.
Dataset: [DESCRIPCION_DATASET].
Escribe un script modular en Python usando Pandas, NumPy y Seaborn:
1. Carga, inspección de tipos, conteo de nulos y estadísticas descriptivas (df.describe()).
2. Detección y tratamiento de outliers (método IQR o Z-score).
3. Visualizaciones clave (Matriz de correlación Heatmap, histogramas y gráficos de dispersión).
4. Preparación de features (One-Hot Encoding, escalado con StandardScaler).`
  },
  {
    id: "data-05",
    title: "Diseñador de Dashboards de Métricas en Power BI / Tableau",
    category: "datos",
    categoryLabel: "Datos & Finanzas",
    icon: "table",
    tags: ["Power BI", "Tableau", "DAX", "Dashboard", "BI"],
    models: ["ChatGPT-4o", "Claude 3.5 Sonnet"],
    description: "Estructura dashboards ejecutivos, modelos en estrella (Star Schema) y fórmulas DAX avanzadas.",
    variables: [
      { name: "PROPOSITO_DASHBOARD", label: "Objetivo y Audiencia del Dashboard", placeholder: "ej. Dashboard de control de ventas y comisiones para la dirección comercial" },
      { name: "HERRAMIENTA_BI", label: "Herramienta BI", placeholder: "ej. Power BI con DAX o Tableau" }
    ],
    template: `Eres un Arquitecto de Business Intelligence experto en [HERRAMIENTA_BI].
Objetivo: [PROPOSITO_DASHBOARD].
Diseña la solución:
1. Disposición Visual de la Pantalla (Grid de 3 filas: KPIs principales arriba, tendencias al centro, tablas de detalle abajo).
2. 5 Medidas Calculadas (DAX / Campos Calculados) clave (ej. Ventas YTD, Crecimiento YoY, Ticket Medio Móvil).
3. Esquema del Modelo de Datos (Tabla de Hechos vs. Tablas de Dimensión).`
  },
  {
    id: "data-06",
    title: "Generador de Modelos de Valoración de Empresas (DCF / Descuento de Flujos)",
    category: "datos",
    categoryLabel: "Datos & Finanzas",
    icon: "trending-up",
    tags: ["DCF", "Valoración", "Finanzas", "WACC", "Inversión"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Estructura un modelo de Descuento de Flujos de Caja Libre (DCF) con cálculo de WACC y valor terminal.",
    variables: [
      { name: "DATOS_EMPRESA_VALORACION", label: "Proyecciones y Parámetros", placeholder: "ej. Flujo de caja libre año 1: $500k creciendo al 15% por 5 años, WACC: 10%, Tasa de crecimiento terminal: 2.5%" }
    ],
    template: `Actúa como Analista de Fusiones y Adquisiciones (M&A).
Parámetros: [DATOS_EMPRESA_VALORACION].
Desarrolla el modelo DCF:
1. Proyección de Flujos de Caja Libres (FCF) a 5 años.
2. Cálculo del Valor Presente de los flujos descontados.
3. Cálculo del Valor Terminal (Método Gordon-Shapiro).
4. Valor Total de la Empresa (Enterprise Value) y tabla de sensibilidad a variaciones de WACC y crecimiento.`
  },
  {
    id: "data-07",
    title: "Auditor y Limpiador de Datos Sucios con Python / OpenRefine",
    category: "datos",
    categoryLabel: "Datos & Finanzas",
    icon: "table",
    tags: ["Data Cleaning", "Python", "ETL", "Calidad de Datos"],
    models: ["ChatGPT-4o", "Claude 3.5 Sonnet"],
    description: "Estrategias y código para normalizar fechas dispares, nombres duplicados por faltas ortográficas y registros rotos.",
    variables: [
      { name: "PROBLEMAS_DATOS", label: "Tipos de Suciedad en la Data", placeholder: "ej. Nombres con espacios extras y mayúsculas desordenadas, números de teléfono en 4 formatos distintos, fechas en MM/DD/YYYY y DD-MM-YYYY mezcladas" }
    ],
    template: `Eres un Ingeniero de Calidad de Datos (Data Quality Lead).
Problemas detectados: [PROBLEMAS_DATOS].
Escribe un script en Python (con Pandas y Regex) para:
1. Normalización de cadenas y eliminación de caracteres no imprimibles.
2. Estandarización de fechas a formato único ISO-8601.
3. Deduplicación difusa (Fuzzy Matching con fuzzywuzzy / thefuzz) para unificar registros con errores tipográficos.
4. Reporte de registros limpiados vs descartados.`
  },
  {
    id: "data-08",
    title: "Generador de Consultas de Análisis de Cohortes en SQL",
    category: "datos",
    categoryLabel: "Datos & Finanzas",
    icon: "database",
    tags: ["Cohortes", "SQL", "Retención", "Analytics", "SaaS"],
    models: ["DeepSeek-V3", "ChatGPT-4o", "Claude 3.5 Sonnet"],
    description: "Crea consultas SQL avanzadas para calcular la retención de usuarios mes a mes por cohorte de registro.",
    variables: [
      { name: "TABLA_EVENTOS", label: "Tabla y Columnas de Eventos", placeholder: "ej. user_events(user_id, event_date, event_type)" },
      { name: "DIALECTO_SQL", label: "Motor SQL", placeholder: "ej. PostgreSQL o Snowflake o BigQuery" }
    ],
    template: `Eres un Lead Data Analyst en [DIALECTO_SQL].
Tabla: [TABLA_EVENTOS].
Escribe la consulta SQL completa para análisis de cohortes:
1. CTE 1: Identificar el mes de primera actividad de cada usuario (Cohorte de adquisición).
2. CTE 2: Mapear la actividad mensual subsiguiente (Mes 0, Mes 1, Mes 2...).
3. Consulta Final: Pivotar los datos para mostrar una matriz de retención porcentual por cohorte.`
  },
  {
    id: "data-09",
    title: "Calculadora de Unit Economics para Startups y SaaS (CAC, LTV, Payback)",
    category: "datos",
    categoryLabel: "Datos & Finanzas",
    icon: "trending-up",
    tags: ["Unit Economics", "CAC", "LTV", "Payback", "SaaS Metrics"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Calcula y audita las métricas vitales de negocio: Customer Acquisition Cost, Lifetime Value, Churn y Payback Period.",
    variables: [
      { name: "PARAMETROS_SAAS", label: "Métricas Actuales", placeholder: "Gasto en Marketing/Ventas mensual: $20,000, Nuevos clientes/mes: 50, ARPU: $100/mes, Margen Bruto: 75%, Churn mensual de clientes: 3%", multiline: true }
    ],
    template: `Actúa como VC Partner y Especialista en Unit Economics SaaS.
Datos del negocio:
\`\`\`
[PARAMETROS_SAAS]
\`\`\`
Calcula y analiza:
1. CAC Real (Coste de Adquisición de Clientes).
2. LTV (Lifetime Value) = (ARPU * Margen Bruto) / Churn.
3. Ratio LTV:CAC (Evaluación de viabilidad y eficiencia de capital).
4. Tiempo de Recuperación del CAC (CAC Payback Period en meses).
5. Veredicto del Negocio: ¿Es un modelo escalable para levantar capital?`
  },
  {
    id: "data-10",
    title: "Diseñador de Pruebas A/B y Cálculo de Significancia Estadística",
    category: "datos",
    categoryLabel: "Datos & Finanzas",
    icon: "table",
    tags: ["AB Testing", "Estadística", "P-Value", "Conversión"],
    models: ["ChatGPT-4o", "Claude 3.5 Sonnet"],
    description: "Calcula el tamaño de muestra requerido, analiza valores p (p-value) e intervalos de confianza para tests A/B.",
    variables: [
      { name: "HIPOTESIS_AB", label: "Hipótesis del Test", placeholder: "ej. Cambiar el botón de compra a verde aumentará la conversión del 3.5% al 4.2%" },
      { name: "TRAFICO_DIARIO", label: "Tráfico Diario Disponible", placeholder: "ej. 5,000 visitantes únicos por día" }
    ],
    template: `Eres un Estadístico y Especialista en Experimentación A/B.
Hipótesis: [HIPOTESIS_AB]. Tráfico: [TRAFICO_DIARIO].
Proporciona:
1. Cálculo de Tamaño Muestral necesario por variante (Nivel de confianza 95%, Potencia estadística 80%, Efecto Mínimo Detectable).
2. Duración mínima requerida del test para evitar falsos positivos y efectos de fin de semana.
3. Protocolo de toma de decisión estadística (interpretación de p-value y significancia z-score).`
  },
  {
    id: "data-11",
    title: "Generador de Proyecciones de Flujo de Caja a 12 Meses (Cash Flow Forecast)",
    category: "datos",
    categoryLabel: "Datos & Finanzas",
    icon: "trending-up",
    tags: ["Cash Flow", "Presupuesto", "Tesorería", "Finanzas"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Estructura un presupuesto de tesorería mensual con cobros, pagos fijos, variables y saldo final proyectado.",
    variables: [
      { name: "INGRESOS_GASTOS_BASE", label: "Datos de Facturación y Gastos", placeholder: "Saldo inicial: $50k, Ventas crecen 5% mensual partiendo de $30k, Salarios: $15k/mes, Alquiler y servidores: $3k/mes, Pago de impuestos trimestral de $6k", multiline: true }
    ],
    template: `Eres un Director Financiero (CFO) Interino.
Datos base:
\`\`\`
[INGRESOS_GASTOS_BASE]
\`\`\`
Construye la proyección de flujo de caja:
1. Tabla Mensual (Meses 1 a 12) con Entradas de Efectivo, Salidas de Efectivo y Saldo Neto Acumulado.
2. Identificación del 'Mes Crítico' (Punto más bajo de liquidez).
3. Recomendaciones de reserva de colchón de seguridad (Runway).`
  },
  {
    id: "data-12",
    title: "Analista de Sentimiento en Redes y Reseñas con NLP en Python",
    category: "datos",
    categoryLabel: "Datos & Finanzas",
    icon: "table",
    tags: ["Sentiment Analysis", "NLP", "VADER", "Python", "Transformers"],
    models: ["DeepSeek-V3", "ChatGPT-4o", "Claude 3.5 Sonnet"],
    description: "Escribe código para clasificar miles de opiniones de clientes en Positivo, Neutro o Negativo con extracción de temas.",
    variables: [
      { name: "ORIGEN_TEXTOS", label: "Tipo de Reseñas", placeholder: "ej. Reseñas de productos de Amazon o comentarios de la App Store" }
    ],
    template: `Actúa como Ingeniero de NLP y Minería de Textos.
Fuente: [ORIGEN_TEXTOS].
Escribe un script en Python que:
1. Preprocese el texto (limpieza de emojis, stopwords, tokenización).
2. Aplique un modelo preentrenado (ej. VADER de NLTK o HuggingFace RoBERTa).
3. Agrupe los motivos de las quejas negativas mediante Topic Modeling (TF-IDF / BERTopic).
4. Genere un gráfico de distribución de sentimiento.`
  },
  {
    id: "data-13",
    title: "Diseñador de Modelos de Optimización Lineal (Python PuLP / SciPy)",
    category: "datos",
    categoryLabel: "Datos & Finanzas",
    icon: "table",
    tags: ["Optimización", "Investigación de Operaciones", "PuLP", "Logística"],
    models: ["ChatGPT-4o", "Claude 3.5 Sonnet", "DeepSeek-V3"],
    description: "Resuelve problemas de asignación de recursos, maximización de beneficios o minimización de costes con programación lineal.",
    variables: [
      { name: "PROBLEMA_OPTIMIZACION", label: "Objetivo y Restricciones", placeholder: "ej. Maximizar beneficio fabricando Producto A ($40 ganancia, 2h trabajo, 1kg material) y Producto B ($60 ganancia, 4h trabajo, 3kg material) con límite de 100h de trabajo y 60kg de material" }
    ],
    template: `Eres un Especialista en Investigación Operativa y Modelado Matemático.
Problema: [PROBLEMA_OPTIMIZACION].
Entrega:
1. Formulación Matemática Formal (Función Objetivo y Sistema de Restricciones).
2. Código ejecutable en Python usando la librería 'PuLP'.
3. Interpretación de la solución óptima y análisis de holguras (Slack variables).`
  },
  {
    id: "data-14",
    title: "Especialista en Análisis de Elasticidad Precio de la Demanda",
    category: "datos",
    categoryLabel: "Datos & Finanzas",
    icon: "trending-up",
    tags: ["Precios", "Elasticidad", "Microeconomía", "Ingresos"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Determina cómo variará el volumen de ventas e ingresos totales ante aumentos o disminuciones de precio.",
    variables: [
      { name: "DATOS_PRECIO_DEMANDA", label: "Precios y Cantidades Históricas", placeholder: "A precio de $100 se vendían 1,000 unidades; tras subir a $120 las ventas bajaron a 850 unidades" }
    ],
    template: `Actúa como Econometrista y Estratega de Precios.
Datos: [DATOS_PRECIO_DEMANDA].
Calcula:
1. Coeficiente de Elasticidad Precio de la Demanda (Ep).
2. Clasificación del bien (Elástico, Inelástico o Elasticidad Unitaria).
3. Impacto en Ingresos Totales (¿Conviene mantener el precio alto o volver a bajarlo?).
4. Estrategia de segmentación de precios para capturar mayor excedente del consumidor.`
  },
  {
    id: "data-15",
    title: "Generador de Consultas de Detección de Anomalías y Fraude en SQL",
    category: "datos",
    categoryLabel: "Datos & Finanzas",
    icon: "database",
    tags: ["Anomalías", "Fraude", "SQL", "Z-Score", "Ciberseguridad"],
    models: ["DeepSeek-V3", "ChatGPT-4o", "Claude 3.5 Sonnet"],
    description: "Identifica transacciones atípicas o comportamientos sospechosos mediante desviación estándar y ventanas móviles en SQL.",
    variables: [
      { name: "TABLA_TRANSACCIONES", label: "Esquema de Transacciones", placeholder: "transactions(tx_id, user_id, amount, tx_time, country_code, ip_address)" },
      { name: "MOTOR_SQL_FRAUDE", label: "Motor SQL", placeholder: "ej. PostgreSQL o BigQuery" }
    ],
    template: `Eres un Ingeniero de Datos en Detección de Fraude en [MOTOR_SQL_FRAUDE].
Tabla: [TABLA_TRANSACCIONES].
Escribe una consulta SQL analítica que detecte:
1. Transacciones que superen 3 desviaciones estándar (Z-score > 3) sobre el promedio histórico de ese mismo usuario en los últimos 30 días.
2. Transacciones consecutivas del mismo usuario realizadas desde países diferentes en un intervalo menor a 2 horas (imposibilidad física de viaje).
3. Clasificación de riesgo de la transacción.`
  },
  {
    id: "data-16",
    title: "Analista de Valoración de Cartera de Inversión y Matriz de Riesgo",
    category: "datos",
    categoryLabel: "Datos & Finanzas",
    icon: "trending-up",
    tags: ["Inversión", "Cartera", "Sharpe", "Riesgo", "Diversificación"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Evalúa la diversificación, ratio de Sharpe, correlación de activos y volatilidad de una cartera de inversión.",
    variables: [
      { name: "COMPOSICION_PORTAFOLIO", label: "Activos y Ponderaciones", placeholder: "ej. 50% S&P 500 (VOO), 20% Bonos del Tesoro USA (TLT), 15% Mercados Emergentes (EEM), 10% Oro (GLD), 5% Bitcoin (BTC)" }
    ],
    template: `Eres un Gestor de Carteras Senior y Asesor Financiero CFA.
Cartera: [COMPOSICION_PORTAFOLIO].
Realiza el análisis:
1. Perfil de Riesgo/Retorno esperado (Defensivo, Equilibrado, Agresivo).
2. Matriz de Correlación esperada entre los activos en momentos de estrés financiero.
3. Estimación cualitativa del Ratio de Sharpe y Máximo Drawdown histórico típico.
4. Sugerencias de rebalanceo para optimizar la frontera eficiente de Markowitz.`
  },
  {
    id: "data-17",
    title: "Generador de Pipelines de Ingestión y Transformación ETL en Python",
    category: "datos",
    categoryLabel: "Datos & Finanzas",
    icon: "database",
    tags: ["ETL", "Python", "SQLAlchemy", "Data Engineering"],
    models: ["ChatGPT-4o", "DeepSeek-V3", "Claude 3.5 Sonnet"],
    description: "Crea scripts completos de ETL para extraer datos de una API REST paginada, transformarlos y cargarlos en una base de datos relacional.",
    variables: [
      { name: "API_ORIGEN", label: "Endpoint o API de Origen", placeholder: "ej. API de Shopify de pedidos (Orders) con paginación cursor-based" },
      { name: "DB_DESTINO", label: "Base de Datos de Destino", placeholder: "ej. Base de datos PostgreSQL con tabla 'fact_orders'" }
    ],
    template: `Eres un Ingeniero de Datos Senior.
Origen: [API_ORIGEN]. Destino: [DB_DESTINO].
Escribe un script en Python listo para producción:
- Extracción: Llamadas requests con manejo de rate-limiting (HTTP 429) y paginación recursiva.
- Transformación: Limpieza y tipado estricto con Pandas.
- Carga: Inserción idempotente (UPSERT / ON CONFLICT DO UPDATE) mediante SQLAlchemy.`
  },
  {
    id: "data-18",
    title: "Auditor de Modelos de Machine Learning (Métricas de Clasificación y Matriz de Confusión)",
    category: "datos",
    categoryLabel: "Datos & Finanzas",
    icon: "table",
    tags: ["Machine Learning", "ROC AUC", "Precision", "Recall", "F1-Score"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Interpreta la matriz de confusión y trade-offs entre Precision y Recall para casos desbalanceados (ej. detección médica o fraude).",
    variables: [
      { name: "RESULTADOS_MODELO", label: "Métricas del Modelo", placeholder: "Verdaderos Positivos: 85, Falsos Positivos: 15, Falsos Negativos: 5, Verdaderos Negativos: 895", multiline: true }
    ],
    template: `Actúa como Senior ML Engineer.
Resultados:
\`\`\`
[RESULTADOS_MODELO]
\`\`\`
Calcula e interpreta:
1. Exactitud (Accuracy), Precisión (Precision), Sensibilidad (Recall) y Puntuación F1 (F1-Score).
2. Explicación de por qué Accuracy puede ser engañosa en este caso.
3. Análisis de impacto del umbral de decisión (Threshold Tuning) según el coste económico o humano de cometer un Falso Negativo vs. Falso Positivo.`
  },
  {
    id: "data-19",
    title: "Calculadora de Punto de Equilibrio y Margen de Contribución (Break-Even)",
    category: "datos",
    categoryLabel: "Datos & Finanzas",
    icon: "trending-up",
    tags: ["Punto de Equilibrio", "Costes Fijos", "Margen", "Finanzas"],
    models: ["ChatGPT-4o", "Claude 3.5 Sonnet"],
    description: "Determina el volumen exacto de ventas necesario para cubrir todos los costes fijos y comenzar a generar beneficios.",
    variables: [
      { name: "ESTRUCTURA_COSTES", label: "Costes Fijos y Variables", placeholder: "Costes fijos mensuales: $12,000 (alquiler, salarios, seguros), Precio de venta por unidad: $80, Coste variable por unidad: $32 (materiales, comisiones, envío)" }
    ],
    template: `Eres un Consultor Financiero de Negocios y Contabilidad de Gestión.
Datos: [ESTRUCTURA_COSTES].
Calcula:
1. Margen de Contribución Unitario ($) y Ratio de Margen de Contribución (%).
2. Punto de Equilibrio en Unidades Físicas (¿Cuántas unidades se deben vender al mes?).
3. Punto de Equilibrio en Ingresos Monetarios ($).
4. Margen de Seguridad actual si las ventas estimadas son de 400 unidades.`
  },
  {
    id: "data-20",
    title: "Diseñador de Modelos de Series Temporales y Pronósticos (ARIMA / Prophet)",
    category: "datos",
    categoryLabel: "Datos & Finanzas",
    icon: "trending-up",
    tags: ["Series Temporales", "Prophet", "ARIMA", "Forecasting", "Python"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o", "DeepSeek-V3"],
    description: "Genera código en Python para pronosticar demanda o ventas con estacionalidad, tendencia y días festivos.",
    variables: [
      { name: "DATOS_SERIE_TEMPORAL", label: "Frecuencia y Naturaleza de los Datos", placeholder: "ej. Ventas diarias de e-commerce durante los últimos 3 años con picos marcados en Black Friday y Navidad" }
    ],
    template: `Actúa como Data Scientist Especialista en Forecasting y Series Temporales.
Datos: [DATOS_SERIE_TEMPORAL].
Escribe un script en Python usando la librería 'Prophet' de Meta:
1. Preparación del DataFrame con columnas obligatorias 'ds' e 'y'.
2. Configuración del modelo con estacionalidad anual, semanal e inclusión de festivos locales.
3. Ajuste (fit) y generación de predicción a 90 días con intervalos de incertidumbre.
4. Descomposición de la serie en gráficos de tendencia y componentes estacionales.`
  }
];
