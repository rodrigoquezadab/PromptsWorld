/**
 * PROMPTS DE CIBERSEGURIDAD & HACKING ÉTICO (20 Prompts)
 */
const PROMPTS_CIBERSEGURIDAD = [
  {
    id: "sec-01",
    title: "Auditor de Vulnerabilidades Web (OWASP Top 10)",
    category: "ciberseguridad",
    categoryLabel: "Ciberseguridad",
    icon: "shield",
    tags: ["OWASP", "Pentesting", "Seguridad Web", "Vulnerabilidades"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o", "DeepSeek-V3"],
    description: "Audita código backend y frontend contra inyecciones SQL, XSS, CSRF, fallos de autenticación y SSRF.",
    variables: [
      { name: "LENGUAJE_APP", label: "Lenguaje o Stack", placeholder: "ej. Node.js Express con MongoDB y frontend React" },
      { name: "ENDPOINT_O_CODIGO", label: "Código o Endpoint a Auditar", placeholder: "Pega el código de autenticación o controlador...", multiline: true }
    ],
    template: `Actúa como un Pentester Certificado (OSCP / CEH) y Auditor de Seguridad Web.
Stack: [LENGUAJE_APP].
Código a auditar:
\`\`\`
[ENDPOINT_O_CODIGO]
\`\`\`
Realiza el análisis de seguridad:
1. Identificación de Vulnerabilidades según OWASP Top 10 (con nivel de severidad CVSS estimado: Bajo/Medio/Alto/Crítico).
2. Demostración de Prueba de Concepto (PoC) teórica de cómo un atacante podría explotarlo.
3. Código remediado y blindado con librerías de sanitización y validación recomendadas.
4. Buenas prácticas defensivas preventivas.`
  },
  {
    id: "sec-02",
    title: "Modelado de Amenazas de Arquitectura (Framework STRIDE)",
    category: "ciberseguridad",
    categoryLabel: "Ciberseguridad",
    icon: "shield",
    tags: ["STRIDE", "Threat Modeling", "Arquitectura", "Seguridad"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Identifica riesgos en diagramas de flujo de datos evaluando Spoofing, Tampering, Repudiation, Information Disclosure, DoS y Elevation of Privilege.",
    variables: [
      { name: "SISTEMA_ARQUITECTURA", label: "Descripción del Sistema", placeholder: "ej. Sistema de procesamiento de pagos móviles con API Gateway, Microservicios en Kubernetes y base de datos bancaria PostgreSQL" }
    ],
    template: `Eres un Arquitecto de Ciberseguridad Staff.
Sistema: [SISTEMA_ARQUITECTURA].
Aplica el modelo STRIDE para cada límite de confianza (Trust Boundary):
- S (Spoofing - Suplantación de identidad): Riesgos y mitigaciones.
- T (Tampering - Modificación no autorizada de datos): Riesgos y mitigaciones.
- R (Repudiation - Repudio de acciones realizadas): Estrategia de logging inmutable.
- I (Information Disclosure - Fuga de datos sensibles): Cifrado en tránsito y en reposo.
- D (Denial of Service - Denegación de servicio): Rate limiting y protección DDoS.
- E (Elevation of Privilege - Escalada de privilegios): Principio de mínimo privilegio y RBAC.`
  },
  {
    id: "sec-03",
    title: "Plan de Respuesta a Incidentes de Seguridad (Playbook de Contención)",
    category: "ciberseguridad",
    categoryLabel: "Ciberseguridad",
    icon: "shield",
    tags: ["SOC", "Incident Response", "Ransomware", "Playbook"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Crea playbooks paso a paso para contener, erradicar y recuperar sistemas ante ransomware, fugas de datos o accesos no autorizados.",
    variables: [
      { name: "TIPO_INCIDENTE", label: "Escenario de Incidente", placeholder: "ej. Detección de cifrado activo por Ransomware en servidores de archivos corporativos" }
    ],
    template: `Actúa como Comandante de Incidentes de Seguridad (CISO / Incident Responder - NIST SP 800-61).
Incidente: [TIPO_INCIDENTE].
Diseña el Playbook de Emergencia:
1. Fase 1: Identificación y Clasificación de Severidad (Triage).
2. Fase 2: Contención Inmediata (Aislamiento de red, bloqueo de credenciales comprometidas sin apagar equipos para preservar memoria RAM).
3. Fase 3: Erradicación y Análisis Forense preliminar.
4. Fase 4: Recuperación Segura y Restauración de backups verificados.
5. Fase 5: Comunicación a stakeholders/reguladores y lecciones aprendidas.`
  },
  {
    id: "sec-04",
    title: "Auditor de Seguridad en Smart Contracts (Solidity / Web3)",
    category: "ciberseguridad",
    categoryLabel: "Ciberseguridad",
    icon: "shield",
    tags: ["Smart Contracts", "Solidity", "Reentrancy", "Web3", "Ethereum"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o", "DeepSeek-V3"],
    description: "Detecta ataques de reentrancia (Reentrancy), desbordamiento de enteros, manipulación de oráculos y problemas de acceso.",
    variables: [
      { name: "CONTRATO_SOLIDITY", label: "Código del Smart Contract", placeholder: "Pega el contrato Solidity...", multiline: true }
    ],
    template: `Eres un Auditor de Seguridad Web3 y Smart Contracts (CertiK / OpenZeppelin).
Contrato a auditar:
\`\`\`solidity
[CONTRATO_SOLIDITY]
\`\`\`
Realiza la auditoría:
1. Búsqueda de vulnerabilidades críticas (Reentrancy, Front-Running / MEV, Timestamp Dependence, Integer Overflow/Underflow, Broken Access Control).
2. Optimización de consumo de Gas.
3. Código refactorizado con patrones seguros (Checks-Effects-Interactions, ReentrancyGuard de OpenZeppelin).`
  },
  {
    id: "sec-05",
    title: "Analista de Tráfico de Red y Capturas de Paquetes (Wireshark / PCAP)",
    category: "ciberseguridad",
    categoryLabel: "Ciberseguridad",
    icon: "shield",
    tags: ["Wireshark", "PCAP", "Redes", "Forense", "TCP/IP"],
    models: ["ChatGPT-4o", "Claude 3.5 Sonnet"],
    description: "Ayuda a interpretar volcados de red, detectar túneles DNS sospechosos, escaneos de puertos SYN y tráfico no cifrado.",
    variables: [
      { name: "DESCRIPCION_TRAFICO", label: "Resumen del Tráfico o Filtro", placeholder: "ej. Conexiones salientes masivas por puerto 443 hacia una IP desconocida con paquetes de tamaño constante cada 5 segundos" }
    ],
    template: `Actúa como Analista de Seguridad de Redes y SOC Nivel 2.
Tráfico analizado: [DESCRIPCION_TRAFICO].
Provee:
1. Diagnóstico del Comportamiento (ej. Tráfico C2 Beaconing de malware, Exfiltración de datos o Escaneo de red).
2. Filtros de Wireshark exactos para aislar el flujo sospechoso (ej. tcp.flags.syn == 1, dns.flags.response == 0).
3. Comandos de terminal (tcpdump / tshark) para capturar evidencia forense sin interfaz gráfica.
4. Reglas de Snort / Suricata para bloquear esta firma.`
  },
  {
    id: "sec-06",
    title: "Guía de Hardening y Bastionado de Servidores Linux (CIS Benchmarks)",
    category: "ciberseguridad",
    categoryLabel: "Ciberseguridad",
    icon: "shield",
    tags: ["Hardening", "Linux", "SSH", "CIS Benchmark", "UFW"],
    models: ["ChatGPT-4o", "Claude 3.5 Sonnet"],
    description: "Configura servidores Linux en producción siguiendo los estándares CIS: deshabilitar root, llaves SSH, Fail2ban y AppArmor.",
    variables: [
      { name: "DISTRO_LINUX", label: "Distribución de Linux", placeholder: "ej. Ubuntu Server 22.04 LTS o Red Hat Enterprise Linux 9" }
    ],
    template: `Eres un Ingeniero de Seguridad de Infraestructura Linux.
Distribución: [DISTRO_LINUX].
Escribe la guía de bastionado (Hardening) con comandos exactos:
1. Aseguramiento de SSH (/etc/ssh/sshd_config: deshabilitar password auth, deshabilitar root login, cambio de puerto, limitar ciphers seguros).
2. Configuración de Firewall (UFW / Iptables) con política por defecto DROP.
3. Instalación y configuración de Fail2ban contra ataques de fuerza bruta.
4. Deshabilitación de módulos de kernel no utilizados y configuración de límites PAM.`
  },
  {
    id: "sec-07",
    title: "Generador de Campañas de Concienciación y Simulación de Phishing Ético",
    category: "ciberseguridad",
    categoryLabel: "Ciberseguridad",
    icon: "shield",
    tags: ["Phishing", "Ingeniería Social", "Concienciación", "Seguridad"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Diseña plantillas de entrenamiento para empleados que simulan ingeniería social y miden la tasa de clics y reporte.",
    variables: [
      { name: "DEPARTAMENTO_TARGET", label: "Departamento y Escenario", placeholder: "ej. Departamento de Contabilidad: correo simulando una factura urgente con enlace de verificación" }
    ],
    template: `Actúa como Especialista en Ingeniería Social y Concienciación de Seguridad Corporativa.
Departamento: [DEPARTAMENTO_TARGET].
Diseña la simulación de phishing formativa:
1. Plantilla de Correo Simulada (con 3 banderas rojas sutiles que los empleados deberían detectar: remitente sospechoso, urgencia artificial, dominio engañoso).
2. Página de Aterrizaje Educativa (Landing) si el empleado hace clic ("¡Esto era una prueba! Esto es lo que debiste notar...").
3. Métricas de seguimiento para el CISO.`
  },
  {
    id: "sec-08",
    title: "Auditor de Configuraciones Cloud en AWS / Azure / GCP (Seguridad IAM y S3)",
    category: "ciberseguridad",
    categoryLabel: "Ciberseguridad",
    icon: "shield",
    tags: ["Cloud Security", "AWS", "IAM", "S3", "Kubernetes"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Detecta buckets S3 públicos, roles IAM con privilegios excesivos (AdministratorAccess) y grupos de seguridad abiertos al mundo (0.0.0.0/0).",
    variables: [
      { name: "POLITICA_IAM_O_CLOUD", label: "Política IAM o Configuración", placeholder: "Pega el JSON de la política IAM de AWS...", multiline: true }
    ],
    template: `Eres un Arquitecto de Ciberseguridad Cloud (AWS Security Specialty).
Política / Configuración a auditar:
\`\`\`json
[POLITICA_IAM_O_CLOUD]
\`\`\`
Evalúa:
1. Identificación de permisos excesivos (uso de comodines '*', permisos de lectura/escritura combinados sin condición).
2. Riesgo de Escalada de Privilegios en la nube.
3. Política IAM corregida siguiendo el principio de privilegio mínimo con condiciones de IP y MFA obligatorio.`
  },
  {
    id: "sec-09",
    title: "Analista de Malware y Desofuscador de Scripts Maliciosos (Static Analysis)",
    category: "ciberseguridad",
    categoryLabel: "Ciberseguridad",
    icon: "shield",
    tags: ["Malware", "Análisis Estático", "Deobfuscation", "PowerShell"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o", "DeepSeek-V3"],
    description: "Analiza scripts ofuscados en PowerShell, VBScript o JavaScript malicioso en un entorno seguro sin ejecutar código.",
    variables: [
      { name: "SCRIPT_OFUSCADO", label: "Fragmento de Código Ofuscado", placeholder: "Pega el fragmento de código con Base64 o cadenas ofuscadas...", multiline: true }
    ],
    template: `Actúa como Analista de Malware Senior de Laboratorio Forense.
Código a analizar:
\`\`\`
[SCRIPT_OFUSCADO]
\`\`\`
Realiza el análisis estático seguro:
1. Desofuscación paso a paso de las funciones, cadenas Base64 o llamadas a APIs del sistema.
2. Identificación de Indicadores de Compromiso (IoCs): Direcciones IP de C2, dominios, hashes de archivos o claves de registro creadas.
3. Explicación del propósito del payload (ej. Keylogger, Dropper, Ransomware).`
  },
  {
    id: "sec-10",
    title: "Especialista en Criptografía Aplicada y Gestión Segura de Claves (KMS / Vault)",
    category: "ciberseguridad",
    categoryLabel: "Ciberseguridad",
    icon: "shield",
    tags: ["Criptografía", "AES-256", "Hash", "HashiCorp Vault", "KMS"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Recomienda algoritmos criptográficos modernos (AES-256-GCM, Argon2id, Ed25519) y destierra algoritmos obsoletos (MD5, SHA1, DES).",
    variables: [
      { name: "CASO_USO_CRIPTOGRAFIA", label: "Datos a Proteger", placeholder: "ej. Almacenamiento seguro de contraseñas de usuarios y cifrado de datos de tarjetas de crédito" }
    ],
    template: `Eres un Criptógrafo y Consultor de Seguridad de Datos.
Caso de uso: [CASO_USO_CRIPTOGRAFIA].
Diseña la arquitectura criptográfica:
1. Algoritmos recomendados para Hash de Contraseñas (Argon2id con parámetros de memoria y tiempo) vs. Cifrado de Datos Simétrico (AES-256-GCM con IV único por registro).
2. Estrategia de Rotación de Claves Criptográficas (Key Management con AWS KMS o HashiCorp Vault).
3. Prevención de ataques de canal lateral (Timing Attacks) en la comparación de firmas.`
  },
  {
    id: "sec-11",
    title: "Generador de Informes de Penetration Testing para Clientes Ejecutivos",
    category: "ciberseguridad",
    categoryLabel: "Ciberseguridad",
    icon: "shield",
    tags: ["Pentesting", "Informe", "C-Level", "Riesgos"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Traduce hallazgos técnicos de hacking ético en un resumen ejecutivo claro para directivos con impacto en el negocio.",
    variables: [
      { name: "HALLAZGOS_TECNICOS", label: "Vulnerabilidades Encontradas", placeholder: "ej. Encontramos una inyección SQL en el portal de clientes que permitía descargar toda la base de datos de usuarios y un panel de administración expuesto sin MFA", multiline: true }
    ],
    template: `Actúa como Socio Director de una Firma de Auditoría de Ciberseguridad.
Hallazgos:
\`\`\`
[HALLAZGOS_TECNICOS]
\`\`\`
Redacta el Informe Ejecutivo para la Junta Directiva (C-Suite):
1. Resumen Ejecutivo (Postura de Seguridad Global: Crítica/Moderada/Buena).
2. Impacto de Negocio Potencial (Riesgo Financiero, Reputacional y Sanciones Legales RGPD).
3. Matriz de Riesgo con Severidad vs. Probabilidad.
4. Plan de Remediación Priorizado en 30, 60 y 90 días con estimación de recursos.`
  },
  {
    id: "sec-12",
    title: "Auditor de Dependencias y Seguridad de la Cadena de Suministro (SCA / SBOM)",
    category: "ciberseguridad",
    categoryLabel: "Ciberseguridad",
    icon: "shield",
    tags: ["SCA", "SBOM", "npm", "Dependabot", "Supply Chain"],
    models: ["ChatGPT-4o", "Claude 3.5 Sonnet"],
    description: "Protege aplicaciones contra paquetes maliciosos, confusión de dependencias y vulnerabilidades en librerías de terceros.",
    variables: [
      { name: "GESTOR_PAQUETES", label: "Ecosistema y Gestor", placeholder: "ej. Node.js con npm / package-lock.json o Python con requirements.txt" }
    ],
    template: `Eres un Especialista en Seguridad de la Cadena de Suministro de Software (Software Supply Chain Security).
Ecosistema: [GESTOR_PAQUETES].
Provee:
1. Protocolo de Auditoría Continua con herramientas automatizadas (npm audit, Snyk, Trivy, Dependabot).
2. Generación y Mantenimiento del SBOM (Software Bill of Materials en formato CycloneDX o SPDX).
3. Mitigación contra ataques de 'Dependency Confusion' y 'Typosquatting'.`
  },
  {
    id: "sec-13",
    title: "Especialista en Seguridad de Contenedores y Kubernetes (K8s Hardening)",
    category: "ciberseguridad",
    categoryLabel: "Ciberseguridad",
    icon: "shield",
    tags: ["Kubernetes", "Docker", "DevSecOps", "RBAC"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Configura Pod Security Standards, Network Policies restrictivas y políticas de admisión con OPA/Kyverno.",
    variables: [
      { name: "CONFIGURACION_K8S", label: "Escenario de Despliegue", placeholder: "ej. Clúster de Kubernetes en producción ejecutando microservicios multitenant" }
    ],
    template: `Actúa como Ingeniero DevSecOps especializado en Kubernetes (CKS).
Entorno: [CONFIGURACION_K8S].
Diseña las políticas de seguridad:
1. SecurityContext en Pods (readOnlyRootFilesystem, runAsNonRoot, drop ALL capabilities).
2. NetworkPolicy para denegar todo el tráfico inter-namespace por defecto (Default Deny) y permitir solo puertos necesarios.
3. RBAC estricto: Deshabilitar acceso default al ServiceAccount token en pods que no lo requieran.`
  },
  {
    id: "sec-14",
    title: "Analista de Caza de Amenazas (Threat Hunting con Consultas KQL / SIEM)",
    category: "ciberseguridad",
    categoryLabel: "Ciberseguridad",
    icon: "shield",
    tags: ["Threat Hunting", "KQL", "SIEM", "Splunk", "Sentinel"],
    models: ["DeepSeek-V3", "ChatGPT-4o", "Claude 3.5 Sonnet"],
    description: "Escribe consultas analíticas en KQL (Microsoft Sentinel) o SPL (Splunk) para cazar técnicas de ataque MITRE ATT&CK.",
    variables: [
      { name: "TECNICA_MITRE", label: "Técnica MITRE ATT&CK", placeholder: "ej. T1059.001 - Ejecución de scripts PowerShell sospechosos con flags de evasión (-enc, -nop, -w hidden)" },
      { name: "LENGUAJE_SIEM", label: "Lenguaje SIEM", placeholder: "ej. KQL (Kusto Query Language) o SPL de Splunk" }
    ],
    template: `Eres un Threat Hunter Senior de SOC Global.
Técnica MITRE: [TECNICA_MITRE]. Lenguaje: [LENGUAJE_SIEM].
Entrega:
1. La Consulta Analítica optimizada lista para ejecutar en tu SIEM.
2. Lógica de Detección: Qué eventos de logs de Windows (Sysmon / Event ID 4688) busca la consulta.
3. Exclusiones recomendadas para filtrar falsos positivos de herramientas de administración legítimas.`
  },
  {
    id: "sec-15",
    title: "Auditor de Privilegios y Directorio Activo (Active Directory / BloodHound)",
    category: "ciberseguridad",
    categoryLabel: "Ciberseguridad",
    icon: "shield",
    tags: ["Active Directory", "Kerberoasting", "BloodHound", "Windows"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Detecta rutas de escalada de privilegios hacia Domain Admin, ataques Kerberoasting, AS-REP Roasting y delegaciones no restringidas.",
    variables: [
      { name: "ESCENARIO_AD", label: "Escenario o Vector de AD", placeholder: "ej. Cuentas de servicio con SPNs registrados usando contraseñas débiles y usuarios en grupos con permisos de GenericAll" }
    ],
    template: `Actúa como Consultor de Seguridad en Active Directory e Infraestructura Windows.
Vector analizado: [ESCENARIO_AD].
Provee:
1. Explicación del mecanismo de ataque (ej. Cómo funciona la extracción de tickets TGS y descifrado offline en Kerberoasting).
2. Comandos de auditoría con PowerShell (PowerView / BloodHound).
3. Plan de mitigación: Uso de cuentas de servicio administradas por grupo (gMSA), contraseñas de 25+ caracteres y tiering de administración (Tier 0, 1, 2).`
  },
  {
    id: "sec-16",
    title: "Diseñador de Arquitecturas de Confianza Cero (Zero Trust Architecture)",
    category: "ciberseguridad",
    categoryLabel: "Ciberseguridad",
    icon: "shield",
    tags: ["Zero Trust", "NIST", "IAM", "Microsegmentación"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Aplica los 3 principios de Zero Trust: Verificar explícitamente, usar acceso de mínimo privilegio y asumir la brecha de seguridad.",
    variables: [
      { name: "EMPRESA_ZEROTRUST", label: "Perfil de la Organización", placeholder: "ej. Empresa de salud con 500 trabajadores remotos accediendo a registros médicos en la nube y servidores locales" }
    ],
    template: `Eres el Asesor Principal de Arquitectura Zero Trust (estándar NIST SP 800-207).
Organización: [EMPRESA_ZEROTRUST].
Diseña el plan de transformación Zero Trust:
1. Plano de Control de Identidad y Dispositivo (Autenticación continua basada en riesgo, postura de seguridad del endpoint).
2. Microsegmentación de Red (Reemplazo de VPNs heredadas por ZTNA / Software Defined Perimeter).
3. Cifrado y Gobernanza de Datos (Clasificación automática y DLP).
4. Monitorización y Telemetría centralizada.`
  },
  {
    id: "sec-17",
    title: "Auditor de Seguridad en APIs GraphQL y Prevención de DoS",
    category: "ciberseguridad",
    categoryLabel: "Ciberseguridad",
    icon: "shield",
    tags: ["GraphQL", "Seguridad API", "Introspección", "DoS"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Protege endpoints GraphQL contra ataques de profundidad de consulta recursiva infinita, introspección expuesta y bypass de autenticación.",
    variables: [
      { name: "SERVER_GRAPHQL", label: "Servidor o Framework GraphQL", placeholder: "ej. Apollo Server en Node.js o Yoga GraphQL" }
    ],
    template: `Eres un Especialista en Seguridad de APIs GraphQL.
Servidor: [SERVER_GRAPHQL].
Diseña las defensas:
1. Deshabilitación de Introspección (Introspection Query) en entornos de producción.
2. Limitación de Profundidad de Consulta (Query Depth Limiting) para evitar DoS por anidación infinita.
3. Análisis de Coste de Consulta (Query Cost Analysis) y Rate Limiting por complejidad.
4. Autorización a nivel de campo (Field-level Authorization).`
  },
  {
    id: "sec-18",
    title: "Especialista en Análisis Forense Digital de Memoria RAM (Volatility 3)",
    category: "ciberseguridad",
    categoryLabel: "Ciberseguridad",
    icon: "shield",
    tags: ["Forense", "Volatility", "RAM", "DFIR"],
    models: ["DeepSeek-V3", "ChatGPT-4o", "Claude 3.5 Sonnet"],
    description: "Inspecciona volcados de memoria volátil para descubrir procesos ocultos inyectados (Process Hollowing), conexiones activas y credenciales.",
    variables: [
      { name: "SISTEMA_DUMP", label: "Sistema Operativo del Dump", placeholder: "ej. Volcado de memoria RAM de Windows 11 Enterprise de 16GB" }
    ],
    template: `Actúa como Perito Forense Digital y Especialista DFIR (Volatility 3).
Sistema: [SISTEMA_DUMP].
Guía de análisis forense:
1. Plugins de Volatility 3 indispensables para listar procesos sospechosos (windows.pslist, windows.pstree, windows.psscan).
2. Detección de inyección de código en memoria con windows.malfind.
3. Extracción de conexiones de red activas al momento del volcado (windows.netscan).
4. Volcado del ejecutable malicioso (windows.dumpfiles) para cálculo de hash SHA-256.`
  },
  {
    id: "sec-19",
    title: "Generador de Políticas de Seguridad de la Información (Norma ISO 27001 / SOC 2)",
    category: "ciberseguridad",
    categoryLabel: "Ciberseguridad",
    icon: "shield",
    tags: ["ISO 27001", "SOC 2", "Políticas", "Compliance"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Redacta políticas formales de control de accesos, teletrabajo, uso de contraseñas y clasificación de información.",
    variables: [
      { name: "TIPO_POLITICA_SEGURIDAD", label: "Política Requerida", placeholder: "ej. Política de Control de Accesos y Gestión de Identidades para certificación SOC 2 Type II" }
    ],
    template: `Eres un Auditor Líder Certificado en ISO/IEC 27001 y SOC 2.
Política: [TIPO_POLITICA_SEGURIDAD].
Redacta la política corporativa completa:
1. Objetivo y Alcance de la Política.
2. Principios Generales de Seguridad (Principio de Mínimo Privilegio, Separación de Funciones, Need-to-Know).
3. Procedimiento de Alta, Modificación y Baja de Accesos (Offboarding en menos de 24 horas).
4. Revisiones periódicas trimestrales de accesos.
5. Consecuencias por Incumplimiento y Aprobación de la Dirección.`
  },
  {
    id: "sec-20",
    title: "Simulador de Escenarios de Crisis de Ciberseguridad (Tabletop Exercise)",
    category: "ciberseguridad",
    categoryLabel: "Ciberseguridad",
    icon: "shield",
    tags: ["Tabletop", "Simulación", "Crisis", "CISO", "Directiva"],
    models: ["Claude 3.5 Sonnet", "ChatGPT-4o"],
    description: "Conduce un ejercicio de simulación de crisis para evaluar cómo reaccionan los equipos técnico, legal y de comunicación minuto a minuto.",
    variables: [
      { name: "CRISIS_ESCENARIO", label: "Escenario de Ataque", placeholder: "ej. Un grupo cibercriminal publica en Twitter que tiene 500,000 registros de tarjetas de nuestros clientes y exige $2M en Bitcoin en 48 horas" }
    ],
    template: `Actúa como Facilitador de Ejercicios de Simulación de Crisis (Tabletop Exercise).
Escenario: [CRISIS_ESCENARIO].
Conduce el ejercicio en 4 inyecciones de información progresivas:
- Minuto 0 (Inyección 1): La alerta inicial y verificación técnica.
- Minuto 30 (Inyección 2): Los medios de comunicación empiezan a llamar a la empresa.
- Hora 2 (Inyección 3): El atacante filtra una muestra de datos reales.
- Hora 6 (Inyección 4): Decisión final sobre pago de rescate, notificación a autoridades y comunicado de prensa.
Preguntas clave de evaluación para cada fase.`
  }
];
