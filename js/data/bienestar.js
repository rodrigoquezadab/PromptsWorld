/**
 * PROMPTS DE SALUD, FITNESS & BIENESTAR (20 Prompts)
 */
const PROMPTS_BIENESTAR = [
  {
    id: "well-01",
    title: "Diseñador de Planes de Entrenamiento de Fuerza Personalizados (Hipertrofia / Fuerza)",
    category: "bienestar",
    categoryLabel: "Salud & Bienestar",
    icon: "activity",
    tags: ["Fitness", "Fuerza", "Hipertrofia", "Gimnasio", "Rutinas"],
    models: ["ChatGPT-4o", "Claude 3.5 Sonnet"],
    description: "Crea rutinas científicas (Push-Pull-Legs, Torso-Pierna o Full Body) con volumen semanal por grupo muscular, series y RPE/RIR.",
    variables: [
      { name: "EXPERIENCIA_DIAS", label: "Nivel de Experiencia y Días Disponibles", placeholder: "ej. Intermedio, 4 días a la semana en gimnasio completo enfocado en hipertrofia de espalda y hombros" }
    ],
    template: `Actúa como Entrenador de Fuerza Certificado (CSCS) y Científico del Ejercicio.
Perfil: [EXPERIENCIA_DIAS].
Diseña la rutina semanal:
1. Distribución Semanal (ej. Torso/Pierna o PPL) con ejercicios compuestos principales y accesorios aislados.
2. Series, Repeticiones y Escala RIR/RPE (Repeticiones en Reserva: RIR 1-2).
3. Sobrecarga Progresiva: Protocolo exacto para subir peso o repeticiones semana a semana.
4. Calentamiento específico de movilidad articular antes de cada sesión.`
  },
  {
    id: "well-02",
    title: "Calculadora Nutricional de Macros y Plan de Alimentación Flexible (IIFYM)",
    category: "bienestar",
    categoryLabel: "Salud & Bienestar",
    icon: "activity",
    tags: ["Nutrición", "Macros", "Calorías", "Dieta", "Proteína"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Calcula el gasto calórico total (TDEE), gramos exactos de proteína, carbohidratos y grasas, y menús diarios estructurados.",
    variables: [
      { name: "DATOS_FISICOS_OBJETIVO", label: "Peso, Altura, Nivel de Actividad y Meta", placeholder: "ej. Hombre de 30 años, 80kg, 1.78m, sedentario en trabajo pero entrena 4h/semana, objetivo: perder grasa manteniendo masa muscular" }
    ],
    template: `Eres un Nutricionista Deportivo Certificado (CISSN).
Datos: [DATOS_FISICOS_OBJETIVO].
Calcula el plan nutricional:
1. Gasto Energético Total Diario (TDEE) y Déficit/Superávit calórico recomendado.
2. Desglose de Macronutrientes diarios (Gramos de Proteína, Carbohidratos, Grasas y Fibra).
3. Ejemplo de Menú de 1 Día con 4 comidas balanceadas y timing de nutrientes pre/post-entrenamiento.
4. Pautas de hidratación y micronutrientes clave.`
  },
  {
    id: "well-03",
    title: "Protocolo de Optimización del Sueño Profundo y Ritmo Circadiano (Huberman Lab)",
    category: "bienestar",
    categoryLabel: "Salud & Bienestar",
    icon: "activity",
    tags: ["Sueño", "Biohacking", "Huberman", "Descanso", "Melatonina"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Estrategias basadas en neurociencia para maximizar el sueño REM y de ondas lentas: exposición solar matutina, temperatura y luz roja.",
    variables: [
      { name: "PROBLEMAS_SUENO", label: "Tus Dificultades de Sueño", placeholder: "ej. Me despierto a las 3 AM con la mente acelerada y tardo 1 hora en volver a dormir, me levanto sin energía" }
    ],
    template: `Actúa como Neurocientífico y Especialista en Medicina del Sueño (protocolos Andrew Huberman / Matthew Walker).
Síntomas: [PROBLEMAS_SUENO].
Diseña el protocolo de sueño:
1. Ritual Matutino: Exposición a luz solar en los primeros 30-60 minutos y timing del café (esperar 90 min tras despertar).
2. Ritual Nocturno (2 horas antes de dormir): Temperatura de la habitación (18°C), atenuación de luces azules y cena ligera.
3. Protocolo de Emergencia si te despiertas en medio de la noche (Técnica de respiración NSDR / Non-Sleep Deep Rest).`
  },
  {
    id: "well-04",
    title: "Auditor de Ergonomía del Puesto de Trabajo y Prevención de Dolor de Espalda",
    category: "bienestar",
    categoryLabel: "Salud & Bienestar",
    icon: "activity",
    tags: ["Ergonomía", "Postura", "Dolor de Espalda", "Teletrabajo"],
    models: ["ChatGPT-4o", "Claude 3.5 Sonnet"],
    description: "Corrige la altura del monitor, posición de la silla, soporte lumbar y diseña descansos activos para programadores.",
    variables: [
      { name: "SETUP_Y_MOLESTIAS", label: "Tu Puesto de Trabajo y Dolores", placeholder: "ej. Trabajo 8 horas en laptop sobre mesa común, siento tensión constante en trapecios y dolor en zona lumbar baja" }
    ],
    template: `Eres un Fisioterapeuta y Especialista en Ergonomía Laboral.
Situación: [SETUP_Y_MOLESTIAS].
Guía de corrección ergonómica:
1. Ajustes del Puesto Físico (Altura de ojos con el tercio superior de la pantalla, ángulo de 90° en codos y rodillas, apoyo lumbar).
2. Rutina de 'Micro-Pausas' de 2 minutos cada 45 minutos (3 estiramientos específicos para abrir pectorales, activar glúteos y descomprimir cuello).
3. Ejercicio correctivo diario de 5 minutos (Chin tucks y Cat-Cow).`
  },
  {
    id: "well-05",
    title: "Guía de Meditación Mindfulness y Respiración Antiestrés (Box Breathing / 4-7-8)",
    category: "bienestar",
    categoryLabel: "Salud & Bienestar",
    icon: "activity",
    tags: ["Mindfulness", "Meditación", "Respiración", "Ansiedad", "Estrés"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Sesión guiada de respiración y meditación para reducir el cortisol y activar el sistema nervioso parasimpático en 10 minutos.",
    variables: [
      { name: "ESTADO_EMOCIONAL", label: "Cómo te sientes en este momento", placeholder: "ej. Sobrecarga mental intensa antes de una presentación importante con palpitaciones y respiración superficial" }
    ],
    template: `Actúa como Instructor de Mindfulness y Respiración Terapéutica.
Estado actual: [ESTADO_EMOCIONAL].
Guíame a través de una sesión escrita de 10 minutos paso a paso:
1. Minuto 0-2: Escaneo Corporal (Body Scan) y relajación consciente de mandíbula, hombros y estómago.
2. Minuto 2-7: Técnica de Respiración (ej. Box Breathing 4-4-4-4 o Suspiro Fisiológico de 2 inhalaciones nasales y 1 exhalación larga).
3. Minuto 7-10: Anclaje de presencia y afirmación mental de calma y control.`
  },
  {
    id: "well-06",
    title: "Planificador de Ayuno Intermitente Seguro y Sostenible (16/8 o 14/10)",
    category: "bienestar",
    categoryLabel: "Salud & Bienestar",
    icon: "activity",
    tags: ["Ayuno Intermitente", "Autofagia", "Salud Metabólica", "Longevidad"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Estructura ventanas de alimentación adaptadas a tu estilo de vida, evitando pérdidas de masa muscular y mareos.",
    variables: [
      { name: "HORARIOS_RUTINA", label: "Horarios Habituales y Experiencia", placeholder: "ej. Principiante en ayuno, entreno a las 7 AM y tengo reuniones hasta las 6 PM" }
    ],
    template: `Eres un Médico Especialista en Salud Metabólica y Longevidad (Peter Attia / Jason Fung).
Horarios: [HORARIOS_RUTINA].
Diseña el protocolo de Ayuno Intermitente:
1. Selección de la Ventana Óptima (ej. 16 horas de ayuno / 8 horas de ingesta de 12:00 a 20:00).
2. Bebidas permitidas durante el ayuno (Agua con electrolitos, café solo, té sin edulcorantes) para no romper la autofagia.
3. Cómo romper el ayuno adecuadamente para evitar picos de glucosa agresivos.
4. Adaptación del timing de comidas en días de entrenamiento de fuerza.`
  },
  {
    id: "well-07",
    title: "Entrenador de Corredores Principiantes: De 0 a 5K (Couch to 5K)",
    category: "bienestar",
    categoryLabel: "Salud & Bienestar",
    icon: "activity",
    tags: ["Running", "5K", "Cardio", "Correr", "Resistencia"],
    models: ["ChatGPT-4o", "Claude 3.5 Sonnet"],
    description: "Plan progresivo de 8 semanas combinando intervalos de caminata y trote suave para correr 5km continuos sin lesiones.",
    variables: [
      { name: "CONDICION_INICIAL", label: "Condición Física Actual", placeholder: "ej. Sedentario desde hace 2 años, puedo caminar 30 minutos sin problema pero me canso al correr 1 minuto" }
    ],
    template: `Actúa como Entrenador de Atletismo y Running Certificado.
Condición inicial: [CONDICION_INICIAL].
Diseña el plan de 8 semanas (3 sesiones por semana):
- Semanas 1 a 3: Intervalos de Ca-Co (Caminar y Correr alternados).
- Semanas 4 a 6: Aumento progresivo del tiempo de trote continuo.
- Semanas 7 a 8: Consolidación de 30 minutos / 5km continuos.
- Consejos indispensables sobre cadencia (170-180 pasos por minuto) y elección de zapatillas.`
  },
  {
    id: "well-08",
    title: "Especialista en Salud Digestiva y Microbiota Intestinal (Alimentos Fermentados y Fibra)",
    category: "bienestar",
    categoryLabel: "Salud & Bienestar",
    icon: "activity",
    tags: ["Microbiota", "Digestión", "Probióticos", "Salud Intestinal"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Protocolo para reducir hinchazón, gases y restaurar la flora intestinal mediante prebióticos y fermentados.",
    variables: [
      { name: "MOLESTIAS_DIGESTIVAS", label: "Síntomas y Dieta Habitual", placeholder: "ej. Hinchazón abdominal por las tardes, digestiones pesadas tras comer carbohidratos o legumbres" }
    ],
    template: `Eres un Gastroenterólogo y Especialista en Microbioma Humano.
Síntomas: [MOLESTIAS_DIGESTIVAS].
Diseña el plan de restauración digestiva:
1. Estrategia de los '30 Alimentos Vegetales Diferentes por Semana' para maximizar la diversidad bacteriana.
2. Inclusión progresiva de Alimentos Fermentados (Kéfir, Chucrut, Kimchi, Miso).
3. Suplementación recomendada (L-Glutamina, enzimas digestivas o cepas probióticas específicas).
4. Alimentos inflamatorios a reducir temporalmente.`
  },
  {
    id: "well-09",
    title: "Rutina de Movilidad Articular y Flexibilidad Diaria de 15 Minutos",
    category: "bienestar",
    categoryLabel: "Salud & Bienestar",
    icon: "activity",
    tags: ["Movilidad", "Flexibilidad", "Cadera", "Hombros", "Yoga"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Desbloquea caderas rígidas, tobillos y columna torácica con ejercicios de rango articular activo (CARS / Kinstretch).",
    variables: [
      { name: "ZONAS_RIGIDAS", label: "Zonas con Rigidez", placeholder: "ej. Caderas muy apretadas por estar sentado todo el día e incapacidad para hacer una sentadilla profunda" }
    ],
    template: `Actúa como Especialista en Acondicionamiento de Rango Articular (FRC / Kinstretch).
Zonas rígidas: [ZONAS_RIGIDAS].
Diseña la rutina diaria de 15 minutos:
1. 90/90 Hip Switches para rotación interna y externa de cadera.
2. Rotaciones Articulares Controladas (CARs) para columna torácica y hombros.
3. Sentadilla profunda asistida (Deep Squat hold con apertura de aductores).
4. Explicación de cómo respirar durante cada ejercicio para relajar el sistema nervioso.`
  },
  {
    id: "well-10",
    title: "Protocolo de Longevidad y Envejecimiento Saludable (Medicine 3.0 / Peter Attia)",
    category: "bienestar",
    categoryLabel: "Salud & Bienestar",
    icon: "activity",
    tags: ["Longevidad", "VO2 Max", "Fuerza de Agarre", "Healthspan"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Los 4 pilares de la medicina preventiva: VO2 Max (Zona 2 de cardio), masa muscular, estabilidad y salud metabólica.",
    variables: [
      { name: "EDAD_Y_OBJETIVO_LONGEVO", label: "Edad y Metas de Vida", placeholder: "ej. 40 años, buscando mantener agilidad, masa muscular y lucidez mental para cuando tenga 80 años" }
    ],
    template: `Eres un Médico Especialista en Medicina Preventiva y Longevidad (Healthspan vs. Lifespan).
Perfil: [EDAD_Y_OBJETIVO_LONGEVO].
Estructura el protocolo semanal de longevidad:
1. Entrenamiento de Zona 2 de Cardio (3 horas semanales para optimizar la salud mitocondrial y reciclaje de lactato).
2. 1 Sesión Semanal de VO2 Max (Intervalos 4x4 minutos al 90% de frecuencia cardíaca máxima).
3. Entrenamiento de Fuerza enfocado en masa magra y Fuerza de Agarre (Grip Strength).
4. Marcadores sanguíneos clave para monitorear anualmente (ApoB, HbA1c, Insulina en ayunas, PCR ultrasensible).`
  },
  {
    id: "well-11",
    title: "Entrenador de Calistenia y Dominio del Propio Peso Corporal (Street Workout)",
    category: "bienestar",
    categoryLabel: "Salud & Bienestar",
    icon: "activity",
    tags: ["Calistenia", "Dominadas", "Fondos", "Flexiones", "Handstand"],
    models: ["ChatGPT-4o", "Claude 3.5 Sonnet"],
    description: "Progresiones paso a paso para dominar dominadas estrictas, fondos en paralelas, flexiones a una mano y muscle-up.",
    variables: [
      { name: "MOVIMIENTO_OBJETIVO", label: "Habilidad o Ejercicio a Dominar", placeholder: "ej. Conseguir mi primera dominada estricta (Pull-up) sin bandas elásticas" }
    ],
    template: `Actúa como Entrenador Élite de Calistenia y Gimnasia.
Objetivo: [MOVIMIENTO_OBJETIVO].
Desglosa el plan de progresión en 4 etapas:
- Etapa 1: Activación y fuerza de base (Colgadas pasivas/activas en barra y retracciones escapulares).
- Etapa 2: Repeticiones excéntricas lentas (Bajar en 5 segundos desde la barra).
- Etapa 3: Rango asistido o pausas isométricas en el punto más alto.
- Etapa 4: La primera repetición estricta y protocolo de volumen para encadenar 5 repeticiones seguidas.`
  },
  {
    id: "well-12",
    title: "Planificador de Batch Cooking / Meal Prep Saludable para Toda la Semana",
    category: "bienestar",
    categoryLabel: "Salud & Bienestar",
    icon: "activity",
    tags: ["Meal Prep", "Batch Cooking", "Cocina", "Organización", "Salud"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Cocina en 2 horas los domingos todas las comidas de lunes a viernes con lista de compras unificada y conservación óptima.",
    variables: [
      { name: "PREFERENCIAS_DIETA", label: "Preferencias y Número de Personas", placeholder: "ej. 2 personas, dieta mediterránea alta en proteínas, sin gluten, presupuesto moderado" }
    ],
    template: `Eres un Chef Nutricionista y Especialista en Batch Cooking.
Preferencias: [PREFERENCIAS_DIETA].
Diseña el plan de cocina de 2 horas:
1. Lista de Compras Completa organizada por secciones del supermercado (Proteínas, Verduras, Carbohidratos complejos, Grasas saludables).
2. Cronograma de Cocina Simultánea paso a paso (ej. Horno a 200°C con 3 bandejas mientras se cuecen granos en la hornilla).
3. Menú Semanal de Lunes a Viernes ensamblando los ingredientes preparados.
4. Guía de Conservación segura en tuppers de vidrio en nevera y congelador.`
  },
  {
    id: "well-13",
    title: "Protocolo de Exposición al Frío y Termogénesis (Duchas Frías / Baños de Hielo)",
    category: "bienestar",
    categoryLabel: "Salud & Bienestar",
    icon: "activity",
    tags: ["Frío", "Dopamina", "Wim Hof", "Biohacking", "Inmunidad"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Cómo utilizar el frío para elevar la dopamina hasta un 250%, mejorar la resiliencia mental y activar la grasa parda de forma segura.",
    variables: [
      { name: "EXPERIENCIA_FRIO", label: "Nivel de Tolerancia al Frío", placeholder: "ej. Principiante que nunca ha tomado duchas frías pero quiere mejorar su energía y disciplina" }
    ],
    template: `Actúa como Fisiólogo del Ejercicio y Especialista en Terapia de Frío.
Nivel: [EXPERIENCIA_FRIO].
Diseña la progresión de 4 semanas:
- Semana 1: Terminar las duchas calientes con 30 segundos de agua fría controlando la respiración.
- Semanas 2-3: Aumento a 90-120 segundos de agua fría continua.
- Semana 4: Protocolo completo (11 minutos totales de frío acumulados a la semana divididos en 2-4 sesiones).
- Reglas de Seguridad: Por qué NO hiperventilar en el agua y cómo recalentarse de forma natural (Postura del Caballo / Horse Stance).`
  },
  {
    id: "well-14",
    title: "Especialista en Hidratación y Equilibrio de Electrolitos (Sodio, Potasio, Magnesio)",
    category: "bienestar",
    categoryLabel: "Salud & Bienestar",
    icon: "activity",
    tags: ["Electrolitos", "Hidratación", "Sodio", "Magnesio", "Rendimiento"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Por qué beber solo agua pura puede deshidratarte y cómo preparar suero casero para evitar calambres, fatiga y niebla mental.",
    variables: [
      { name: "NIVEL_SUDORACION_ACTIVIDAD", label: "Actividad Física y Clima", placeholder: "ej. Entreno en clima caluroso, sudo profusamente y tengo calambres musculares nocturnos" }
    ],
    template: `Eres un Fisiólogo Deportivo experto en Hidratación Celular.
Situación: [NIVEL_SUDORACION_ACTIVIDAD].
Guía de electrolitos:
1. Fórmulas de Electrolitos Caseras y Proporciones Exactas (Cloruro de sodio, Citrato de potasio y Bisglicinato de magnesio).
2. Cuándo tomar electrolitos (Mañana al despertar, intra-entreno, antes de dormir).
3. Señales de deficiencia de sodio vs. deshidratación por falta de agua.`
  },
  {
    id: "well-15",
    title: "Rehabilitador de Lesiones Comunes (Tendinitis rotuliana, hombro doloroso, fascitis)",
    category: "bienestar",
    categoryLabel: "Salud & Bienestar",
    icon: "activity",
    tags: ["Fisioterapia", "Tendinitis", "Rehabilitación", "Lesiones"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Ejercicios isométricos y de carga excéntrica para regenerar tendones sin dolor (Protocolo Heavy Slow Resistance).",
    variables: [
      { name: "TIPO_MOLESTIA_LESION", label: "Lesión o Dolor Frecuente", placeholder: "ej. Dolor en el tendón rotuliano de la rodilla al bajar escaleras o hacer sentadillas (Rodilla de saltador)" }
    ],
    template: `Eres un Fisioterapeuta Deportivo Especialista en Tendinopatías.
Lesión: [TIPO_MOLESTIA_LESION].
Diseña el protocolo de recuperación por fases:
1. Fase 1 (Alivio del Dolor): Ejercicios isométricos sostenidos (ej. Wall sit a 90° durante 45 segundos, 5 repeticiones).
2. Fase 2 (Remodelación del Colágeno): Entrenamiento de Resistencia Lenta y Pesada (HSR: 3 segundos de subida, 3 de bajada).
3. Factores agravantes a evitar y prueba de carga diaria para medir la tolerancia del tendón.`
  },
  {
    id: "well-16",
    title: "Entrenador de Salud Cerebral y Nootrópicos Naturales (Enfoque y Memoria)",
    category: "bienestar",
    categoryLabel: "Salud & Bienestar",
    icon: "activity",
    tags: ["Nootrópicos", "Cerebro", "Memoria", "Melena de León", "Enfoque"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Optimiza la neurogénesis y acetilcolina con suplementos naturales seguros (Melena de León, Bacopa, L-Tirosina, Omega-3).",
    variables: [
      { name: "OBJETIVO_COGNITIVO", label: "Demanda Mental Específica", placeholder: "ej. Programador que necesita foco sostenido de 4 horas diarias sin sufrir ansiedad ni 'crash' de cafeína" }
    ],
    template: `Actúa como Neurofarmacólogo y Consultor de Rendimiento Cognitivo.
Objetivo: [OBJETIVO_COGNITIVO].
Diseña un 'Stack' Nootrópico Natural y Estrategia:
1. El Stack Diario Matutino (L-Teanina + Cafeína en ratio 2:1 para foco limpio sin temblores).
2. Suplementos para Neuroplasticidad a Largo Plazo (Melena de León / Hericium erinaceus para NGF, Bacopa Monnieri, DHA de alta concentración).
3. Pautas de Ciclado de Nootrópicos para evitar tolerancia o dependencia.`
  },
  {
    id: "well-17",
    title: "Diseñador de Rutinas de Gimnasio en Casa con Espacio y Equipamiento Mínimo",
    category: "bienestar",
    categoryLabel: "Salud & Bienestar",
    icon: "activity",
    tags: ["Home Gym", "Entrenamiento en Casa", "Mancuernas", "Bandas"],
    models: ["ChatGPT-4o", "Claude 3.5 Sonnet"],
    description: "Rutinas completas de 30 minutos usando solo un par de mancuernas ajustables y bandas de resistencia en el salón.",
    variables: [
      { name: "EQUIPAMIENTO_CASA", label: "Material Disponible", placeholder: "ej. Un juego de mancuernas ajustables de 2kg a 20kg y un juego de bandas elásticas tubulares" }
    ],
    template: `Eres un Entrenador Personal Especialista en Fitness en Casa.
Material disponible: [EQUIPAMIENTO_CASA].
Diseña una rutina Full-Body de 3 días:
- Selección de ejercicios que maximizan la tensión muscular en casa (Búlgaras, RDL con mancuernas, Press militar, Remo unilateral).
- Técnicas de intensidad sin pesos gigantes (Pausas de 2 segundos en el punto de máxima contracción, drop sets).
- Tiempo de descanso entre series para mantener la sesión en menos de 35 minutos.`
  },
  {
    id: "well-18",
    title: "Especialista en Control de la Glucosa en Sangre y Prevención de Picos de Insulina",
    category: "bienestar",
    categoryLabel: "Salud & Bienestar",
    icon: "activity",
    tags: ["Glucosa", "Insulina", "Jessie Inchauspé", "Metabolismo", "Energía"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Estrategias de orden de alimentos (Fibra primero, Proteína segundo, Carbohidratos al final), vinagre y caminatas post-comida.",
    variables: [
      { name: "SINTOMAS_BAJONES", label: "Tus Síntomas tras Comer", placeholder: "ej. Mucha somnolencia y deseo incontrolable de azúcar 45 minutos después de almorzar" }
    ],
    template: `Actúa como Bioquímico y Especialista en Curvas de Glucosa (método Glucose Goddess).
Síntomas: [SINTOMAS_BAJONES].
Guía de 'Hacks' de Glucosa:
1. El Orden de los Alimentos en el Plato (1° Ensalada/Verduras -> 2° Proteínas y Grasas -> 3° Arroz/Pasta/Pan).
2. El Truco del Vinagre de Manzana (1 cucharada en un vaso de agua 10 minutos antes de comer carbohidratos).
3. Caminata de 10 minutos inmediatamente después de la comida principal para que los músculos absorban la glucosa sin picos de insulina.`
  },
  {
    id: "well-19",
    title: "Entrenador de Salud Cardiovascular y Entrenamiento Polarizado (80/20)",
    category: "bienestar",
    categoryLabel: "Salud & Bienestar",
    icon: "activity",
    tags: ["Cardio", "Zona 2", "Corazón", "Polarizado", "Resistencia"],
    models: ["ChatGPT-4o", "Claude 3.5 Sonnet"],
    description: "Distribuye el 80% de tu tiempo de cardio en intensidad conversacional baja (Zona 2) y el 20% en alta intensidad extrema (Zona 5).",
    variables: [
      { name: "DEPORTE_CARDIO", label: "Deporte o Máquina Preferida", placeholder: "ej. Bicicleta estática / Ciclismo o Máquina de remo (Rower)" }
    ],
    template: `Eres un Fisiólogo de Atletas de Resistencia Olímpica (método Stephen Seiler).
Deporte: [DEPORTE_CARDIO].
Diseña el plan de entrenamiento polarizado:
1. Cómo calcular tu Zona 2 sin laboratorio (Prueba de conversación: poder hablar en oraciones completas sin jadear / Frecuencia cardíaca MAF de Maffetone: 180 - edad).
2. Distribución Semanal: 3 sesiones de 45 minutos en Zona 2 + 1 sesión de HIIT a máxima intensidad.
3. Beneficios fisiológicos en el volumen sistólico del corazón y densidad capilar muscular.`
  },
  {
    id: "well-20",
    title: "Protocolo de Gestión de la Fatiga Mental y Burnout para Profesionales del Conocimiento",
    category: "bienestar",
    categoryLabel: "Salud & Bienestar",
    icon: "activity",
    tags: ["Burnout", "Fatiga Mental", "Estrés Laboral", "Regeneración"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Plan de recuperación psicológica y fisiológica cuando sientes agotamiento crónico, apatía y cinismo hacia tu trabajo.",
    variables: [
      { name: "SINTOMAS_BURNOUT", label: "Síntomas de Agotamiento", placeholder: "ej. Llevo 6 meses trabajando 60 horas semanales, me siento vacío, irritable con mi equipo y no disfruto nada de lo que hago" }
    ],
    template: `Actúa como Psicólogo Clínico y Médico Especialista en Síndrome de Burnout.
Situación: [SINTOMAS_BURNOUT].
Diseña el plan de recuperación en 3 fases:
1. Fase de Estabilización de Emergencia (Fijar un límite infranqueable de hora de desconexión diaria, delegar tareas críticas).
2. Restauración del Eje HPA (Hipotálamo-Pituitaria-Adrenal): Suplementación con Ashwagandha KSM-66 y baños de sol sin pantallas.
3. Reencuadre Psicológico: Reevaluar valores y diseñar un nuevo contrato psicológico con el trabajo.`
  }
];
