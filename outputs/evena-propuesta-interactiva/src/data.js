export const FIX_RATE = 17.4312;

export const navigation = [
  { id: "resumen", label: "Resumen ejecutivo", icon: "summary" },
  { id: "arquitectura", label: "Arquitectura propuesta", icon: "architecture" },
  { id: "flujos", label: "Flujos comerciales", icon: "flows" },
  { id: "ia", label: "IA y automatización", icon: "ai" },
  { id: "reportes", label: "Reportes y datos", icon: "reports" },
  { id: "facturacion", label: "Facturación y CFDI", icon: "invoice" },
  { id: "seguridad", label: "Seguridad", icon: "security" },
  { id: "soporte", label: "Soporte y mantenimiento", icon: "support" },
  { id: "inversion", label: "Inversión y tiempos", icon: "investment" },
];

export const architectureOutputs = [
  {
    title: "Mayoreo · Mariana",
    description: "Enrutamiento y gestión de oportunidades",
    icon: "wholesale",
  },
  {
    title: "Menudeo · Tienda",
    description: "Redirección y seguimiento automatizado",
    icon: "retail",
  },
  {
    title: "Zoho Books · CFDI",
    description: "Cotización, facturación, timbrado y cobranza",
    icon: "books",
  },
];

export const reportFamilies = [
  "Leads por canal",
  "Conversión a venta",
  "Ventas y productos",
  "Campañas",
  "Seguimiento comercial",
  "Efectividad del agente IA",
  "Recompra",
  "Embudo de ventas",
];

export const funnelStages = [
  { label: "Leads", value: "12,430", width: 100 },
  { label: "Calificados", value: "4,812", width: 78 },
  { label: "Oportunidades", value: "2,105", width: 59 },
  { label: "Ventas", value: "1,248", width: 42 },
  { label: "Recompra", value: "428", width: 28 },
];

export const roadmap = [
  {
    number: "01",
    title: "Descubrimiento",
    weeks: "Semanas 1–2",
    items: [
      "Kick-off y alineación",
      "Levantamiento de procesos",
      "Análisis de datos y sistemas",
      "Plan de implementación",
    ],
  },
  {
    number: "02",
    title: "Núcleo CRM",
    weeks: "Semanas 3–5",
    items: [
      "Configuración de Zoho CRM",
      "Gestión de oportunidades",
      "Flujos y automatizaciones",
      "Integraciones clave",
    ],
  },
  {
    number: "03",
    title: "Canales e IA",
    weeks: "Semanas 6–9",
    items: [
      "SalesIQ y chatbot IA",
      "WhatsApp Business API",
      "Base de conocimiento",
      "Reportes y tableros",
    ],
  },
  {
    number: "04",
    title: "Salida y adopción",
    weeks: "Semanas 10–12",
    items: [
      "Pruebas y ajustes finales",
      "Capacitación de equipos",
      "Puesta en producción",
      "Acompañamiento inicial",
    ],
  },
];

export const scenarios = {
  wholesale: {
    label: "Prospecto de mayoreo",
    message: "Hola, necesito precios por caja para surtir tres sucursales.",
    intent: "Mayoreo",
    confidence: "94%",
    destination: "Mariana · Ejecutiva de mayoreo",
    actions: [
      "Crear o actualizar lead y cuenta",
      "Abrir oportunidad con volumen estimado",
      "Notificar a Mariana y crear tarea",
      "Iniciar cadencia si no hay respuesta",
    ],
  },
  retail: {
    label: "Compra de menudeo",
    message: "¿Cuál salsa recomiendan para alitas y dónde la compro?",
    intent: "Menudeo",
    confidence: "91%",
    destination: "Tienda online de Evena",
    actions: [
      "Resolver la duda de producto",
      "Enviar enlace directo a la categoría",
      "Registrar origen y producto de interés",
      "Activar seguimiento de carrito o recompra",
    ],
  },
  uncertain: {
    label: "Intención ambigua",
    message: "Quiero información, pero mi caso es un poco especial.",
    intent: "Revisión humana",
    confidence: "58%",
    destination: "Bandeja comercial general",
    actions: [
      "Resumir la conversación",
      "Solicitar los datos mínimos",
      "Escalar sin inventar una respuesta",
      "Registrar motivo de escalamiento",
    ],
  },
};

export const sources = [
  {
    label: "Zoho CRM · precios",
    url: "https://www.zoho.com/crm/zohocrm-pricing-calculator.html",
  },
  {
    label: "Zoho SalesIQ · precios",
    url: "https://www.zoho.com/sites/default/files/salesiq/zoho-salesiq-usd.pdf",
  },
  {
    label: "Zoho Books México",
    url: "https://www.zoho.com/es-mx/books/pricing/",
  },
  {
    label: "Zoho Voice · precios",
    url: "https://www.zoho.com/es-xl/voice/pricing.html",
  },
  {
    label: "Zoho One · precios",
    url: "https://www.zoho.com/one/pricing/",
  },
  {
    label: "Banxico · tipo de cambio FIX",
    url: "https://www.banxico.org.mx/tipcamb/llenarTiposCambioAction.do?idioma=sp&usarCache=false",
  },
  {
    label: "Zoho Books · CFDI México",
    url: "https://www.zoho.com/es-mx/books/help/e-invoicing/",
  },
];
