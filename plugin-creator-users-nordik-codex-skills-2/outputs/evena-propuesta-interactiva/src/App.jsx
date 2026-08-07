import { useEffect, useState } from "react";
import {
  ArrowRightIcon,
  BooksIcon,
  ChartBarIcon,
  ChatCircleTextIcon,
  CheckCircleIcon,
  CirclesThreePlusIcon,
  ClockIcon,
  CloudArrowDownIcon,
  DatabaseIcon,
  FileCsvIcon,
  FileTextIcon,
  FingerprintIcon,
  HeadsetIcon,
  LockKeyIcon,
  MagnifyingGlassIcon,
  PackageIcon,
  PhoneCallIcon,
  ReceiptIcon,
  RepeatIcon,
  SealCheckIcon,
  ShieldCheckIcon,
  ShoppingCartSimpleIcon,
  SparkleIcon,
  StorefrontIcon,
  TargetIcon,
  UserFocusIcon,
  UserSwitchIcon,
  WhatsappLogoIcon,
} from "@phosphor-icons/react";
import { ArchitectureDiagram } from "./components/ArchitectureDiagram.jsx";
import { InvestmentCalculator } from "./components/InvestmentCalculator.jsx";
import { ProposalNav } from "./components/ProposalNav.jsx";
import { SectionHeader } from "./components/SectionHeader.jsx";
import {
  funnelStages,
  navigation,
  reportFamilies,
  roadmap,
  scenarios,
  sources,
} from "./data.js";

const wholesaleSteps = [
  { label: "Detectar intención", icon: MagnifyingGlassIcon },
  { label: "Calificar", icon: UserFocusIcon },
  { label: "Crear oportunidad", icon: TargetIcon },
  { label: "Asignar a Mariana", icon: UserSwitchIcon },
  { label: "Seguimiento", icon: RepeatIcon },
];

const retailSteps = [
  { label: "Resolver duda", icon: ChatCircleTextIcon },
  { label: "Recomendar producto", icon: PackageIcon },
  { label: "Enviar a tienda", icon: ShoppingCartSimpleIcon },
  { label: "Registrar compra", icon: ReceiptIcon },
  { label: "Recompra", icon: RepeatIcon },
];

const securityControls = [
  { label: "MFA", icon: FingerprintIcon },
  { label: "Roles y mínimo privilegio", icon: UserFocusIcon },
  { label: "Bitácora de auditoría", icon: FileTextIcon },
  { label: "Cifrado en tránsito y reposo", icon: LockKeyIcon },
  { label: "Respaldo mensual entregable", icon: CloudArrowDownIcon },
  { label: "Baja y borrado acordado", icon: ShieldCheckIcon },
];

function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

function FlowLane({ title, steps }) {
  return (
    <div className="flow-lane">
      <h3>{title}</h3>
      <div className="flow-steps">
        {steps.map(({ label, icon: Icon }, index) => (
          <div className="flow-step" key={label}>
            <Icon size={34} weight="regular" aria-hidden="true" />
            <span>{label}</span>
            {index < steps.length - 1 ? (
              <ArrowRightIcon className="flow-arrow" size={20} aria-hidden="true" />
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}

function AppButton({ children, variant = "primary", target, onClick }) {
  const handleClick = () => {
    if (onClick) onClick();
    if (target) scrollToSection(target);
  };

  return (
    <button
      type="button"
      className={`${variant}-button`}
      onClick={handleClick}
    >
      {children}
      <ArrowRightIcon size={18} aria-hidden="true" />
    </button>
  );
}

export function App() {
  const [activeSection, setActiveSection] = useState("resumen");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeFlow, setActiveFlow] = useState("wholesale");
  const [activeScenario, setActiveScenario] = useState("wholesale");

  useEffect(() => {
    const sections = navigation
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target?.id) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: "-20% 0px -68% 0px", threshold: [0, 0.2, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleNavigate = (id) => {
    setActiveSection(id);
    setMobileOpen(false);
    scrollToSection(id);
  };

  const scenario = scenarios[activeScenario];

  return (
    <div className="proposal-app">
      <ProposalNav
        activeSection={activeSection}
        mobileOpen={mobileOpen}
        onClose={() => setMobileOpen((value) => !value)}
        onNavigate={handleNavigate}
      />

      <main className="proposal-content">
        <section id="resumen" className="proposal-section hero-section">
          <div className="hero-media" aria-hidden="true">
            <img src="/assets/berry-pour.png" alt="" />
          </div>

          <div className="hero-copy">
            <h1>
              Propuesta de
              <span>automatización comercial</span>
            </h1>
            <p className="brand-line">Evena Foods</p>
            <div className="accent-rule" aria-hidden="true" />
            <p className="hero-intro">
              Solución integral para captar, calificar y gestionar leads desde
              todos los canales; priorizar mayoreo con Mariana, redirigir
              menudeo a la tienda y automatizar seguimiento, reportes, CFDI y
              exportación mensual de datos.
            </p>
          </div>

          <div className="hero-recommendation">
            <span>Recomendación</span>
            <h2>Zoho CRM + SalesIQ + Books</h2>
          </div>

          <ArchitectureDiagram compact />

          <div className="hero-commercial">
            <div className="hero-stat">
              <ChartBarIcon size={40} aria-hidden="true" />
              <div>
                <span>Inversión mensual base</span>
                <strong>$5,685 <small>MXN / mes</small></strong>
                <small>antes de IVA · 5 usuarios CRM + 3 operadores</small>
              </div>
            </div>
            <div className="hero-stat">
              <ClockIcon size={40} aria-hidden="true" />
              <div>
                <span>Tiempo de implementación</span>
                <strong>10–12 <small>semanas</small></strong>
                <small>configuración, integraciones, pruebas y adopción</small>
              </div>
            </div>
            <div className="hero-actions">
              <AppButton target="inversion">Ver inversión</AppButton>
              <AppButton target="arquitectura" variant="secondary">
                Explorar arquitectura
              </AppButton>
            </div>
          </div>

          <p className="confidential-note">
            Propuesta comercial confidencial para Evena Foods. Vigente por 30
            días a partir del 29 de julio de 2026.
          </p>
        </section>

        <section id="arquitectura" className="proposal-section">
          <SectionHeader accent="desde el primer contacto.">
            Una sola vista del cliente,
          </SectionHeader>
          <p className="section-lead">
            CRM es el núcleo comercial; SalesIQ recibe y entiende las
            conversaciones; Books completa el pedido y la facturación. No son
            sustitutos: trabajan como un solo proceso.
          </p>
          <div className="section-kicker">Arquitectura propuesta</div>
          <ArchitectureDiagram analytics />
          <div className="architecture-notes">
            <div>
              <CheckCircleIcon size={23} aria-hidden="true" />
              <span>
                SalesIQ se instala en WordPress mediante plugin o script y
                conserva el contexto de navegación del prospecto.
              </span>
            </div>
            <div>
              <CheckCircleIcon size={23} aria-hidden="true" />
              <span>
                WhatsApp y llamadas se registran en la ficha del cliente para
                evitar conversaciones y seguimientos aislados.
              </span>
            </div>
          </div>
        </section>

        <section id="flujos" className="proposal-section">
          <SectionHeader
            accent="según la intención."
            description="Cada conversación llega al mismo CRM, pero la respuesta y el siguiente paso cambian según el tipo de cliente."
          >
            Una entrada. Dos rutas comerciales
          </SectionHeader>

          <div className="flow-switch" role="tablist" aria-label="Flujo comercial">
            <button
              type="button"
              role="tab"
              aria-selected={activeFlow === "wholesale"}
              className={activeFlow === "wholesale" ? "is-selected" : ""}
              onClick={() => setActiveFlow("wholesale")}
            >
              Ver mayoreo
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeFlow === "retail"}
              className={activeFlow === "retail" ? "is-selected" : ""}
              onClick={() => setActiveFlow("retail")}
            >
              Ver menudeo
            </button>
          </div>

          <div className="flow-focus" aria-live="polite">
            {activeFlow === "wholesale" ? (
              <FlowLane title="Flujo mayoreo" steps={wholesaleSteps} />
            ) : (
              <FlowLane title="Flujo menudeo" steps={retailSteps} />
            )}
          </div>

          <div className="flow-comparison">
            <FlowLane title="Mayoreo · atención consultiva" steps={wholesaleSteps} />
            <FlowLane title="Menudeo · compra directa" steps={retailSteps} />
          </div>

          <div className="operating-constraints">
            <div>
              <WhatsappLogoIcon size={29} aria-hidden="true" />
              <span>
                Respuestas libres dentro de la ventana de servicio iniciada por
                el cliente; plantillas y consumos de Meta se cotizan aparte.
              </span>
            </div>
            <div>
              <HeadsetIcon size={29} aria-hidden="true" />
              <span>
                Escalamiento a humano cuando la confianza es baja, el prospecto
                lo solicita o la regla comercial lo exige.
              </span>
            </div>
          </div>
        </section>

        <section id="ia" className="proposal-section">
          <SectionHeader accent="salida humana.">
            IA con reglas claras y
          </SectionHeader>
          <p className="section-lead">
            El agente responde desde una base de conocimiento aprobada, captura
            datos mínimos y ejecuta reglas de negocio auditables. No improvisa
            precios, promesas de entrega ni condiciones comerciales.
          </p>

          <div className="scenario-workbench">
            <div className="scenario-selector">
              <h3>Prueba un caso</h3>
              {Object.entries(scenarios).map(([key, value]) => (
                <button
                  type="button"
                  className={activeScenario === key ? "is-selected" : ""}
                  aria-pressed={activeScenario === key}
                  key={key}
                  onClick={() => setActiveScenario(key)}
                >
                  <span>{value.label}</span>
                  <ArrowRightIcon size={18} aria-hidden="true" />
                </button>
              ))}
            </div>

            <div className="conversation-panel" aria-live="polite">
              <div className="message-bubble">
                <span>Prospecto</span>
                <p>{scenario.message}</p>
              </div>
              <div className="classification-line">
                <SparkleIcon size={26} aria-hidden="true" />
                <div>
                  <span>Intención detectada</span>
                  <strong>{scenario.intent}</strong>
                </div>
                <div>
                  <span>Confianza</span>
                  <strong>{scenario.confidence}</strong>
                </div>
              </div>
            </div>

            <div className="routing-panel">
              <span>Destino</span>
              <h3>{scenario.destination}</h3>
              <ul>
                {scenario.actions.map((action) => (
                  <li key={action}>
                    <CheckCircleIcon size={19} aria-hidden="true" />
                    {action}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="automation-rail">
            <div>
              <CirclesThreePlusIcon size={29} aria-hidden="true" />
              <strong>Seguimiento</strong>
              <span>Cadencias por etapa, origen, intención y actividad.</span>
            </div>
            <div>
              <PhoneCallIcon size={29} aria-hidden="true" />
              <strong>Telefonía asistida</strong>
              <span>Ficha, notas, grabación y resumen dentro del CRM.</span>
            </div>
            <div>
              <StorefrontIcon size={29} aria-hidden="true" />
              <strong>Postventa</strong>
              <span>Recompra, reseña, venta cruzada y recuperación.</span>
            </div>
          </div>
        </section>

        <section id="reportes" className="proposal-section report-section">
          <div className="report-media" aria-hidden="true">
            <img src="/assets/berry-pour.png" alt="" />
          </div>
          <SectionHeader accent="Mejora continua.">
            Datos accionables. Control de la información.
          </SectionHeader>

          <div className="report-layout">
            <div className="funnel-panel">
              <div className="section-kicker">Visualización de ejemplo</div>
              <p>Ejemplo de visualización, no datos reales.</p>
              <div className="funnel">
                {funnelStages.map((stage) => (
                  <div
                    className="funnel-row"
                    key={stage.label}
                    style={{ "--stage-width": `${stage.width}%` }}
                  >
                    <div>
                      <strong>{stage.label}</strong>
                      <span>{stage.value} · ejemplo</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="report-family-list">
              <div className="section-kicker">Familias de reportes</div>
              {reportFamilies.map((report, index) => (
                <div key={report}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{report}</strong>
                </div>
              ))}
            </div>
          </div>

          <div className="data-flow">
            <div>
              <DatabaseIcon size={37} aria-hidden="true" />
              <strong>Zoho como sistema operativo</strong>
            </div>
            <ArrowRightIcon size={28} aria-hidden="true" />
            <div>
              <FileCsvIcon size={37} aria-hidden="true" />
              <strong>Exportación mensual CSV/XLSX</strong>
            </div>
            <ArrowRightIcon size={28} aria-hidden="true" />
            <div>
              <ShieldCheckIcon size={37} aria-hidden="true" />
              <strong>Repositorio controlado por Evena</strong>
            </div>
          </div>
        </section>

        <section id="facturacion" className="proposal-section">
          <SectionHeader accent="sin duplicar captura.">
            De la compra al CFDI 4.0,
          </SectionHeader>
          <p className="section-lead">
            Zoho Books México puede emitir CFDI 4.0 mediante PAC. La propuesta
            conecta el pedido de WooCommerce con Books y añade un enlace seguro
            para recopilar o confirmar datos fiscales.
          </p>

          <div className="invoice-flow">
            <div>
              <ShoppingCartSimpleIcon size={39} aria-hidden="true" />
              <span>01</span>
              <strong>Compra en Evena.mx</strong>
              <p>Pedido, artículos, monto y correo del cliente.</p>
            </div>
            <ArrowRightIcon size={27} aria-hidden="true" />
            <div>
              <ReceiptIcon size={39} aria-hidden="true" />
              <span>02</span>
              <strong>Registro en Zoho Books</strong>
              <p>Cliente y transacción sincronizados sin recaptura.</p>
            </div>
            <ArrowRightIcon size={27} aria-hidden="true" />
            <div>
              <FileTextIcon size={39} aria-hidden="true" />
              <span>03</span>
              <strong>Enlace de facturación</strong>
              <p>Formulario seguro para RFC, razón social, CP y uso CFDI.</p>
            </div>
            <ArrowRightIcon size={27} aria-hidden="true" />
            <div>
              <SealCheckIcon size={39} aria-hidden="true" />
              <span>04</span>
              <strong>CFDI y entrega</strong>
              <p>Validación, timbrado, PDF/XML y correo al cliente.</p>
            </div>
          </div>

          <div className="invoice-decision">
            <div>
              <BooksIcon size={34} aria-hidden="true" />
              <h3>Incluido en la base</h3>
              <p>
                Sincronización del pedido, solicitud de datos fiscales y
                creación controlada del CFDI desde Books.
              </p>
            </div>
            <div>
              <CirclesThreePlusIcon size={34} aria-hidden="true" />
              <h3>Opción de fase 2</h3>
              <p>
                Portal de autofacturación con reglas de fecha, cancelaciones y
                conciliación, sujeto a validación fiscal y operativa.
              </p>
            </div>
            <div className="truth-note">
              <strong>Control recomendado</strong>
              <p>
                El enlace no “timbra solo”: primero valida los datos y después
                ejecuta el flujo autorizado en Books. Así se evitan CFDI
                incorrectos o duplicados.
              </p>
            </div>
          </div>
        </section>

        <section id="seguridad" className="proposal-section">
          <SectionHeader accent="con compromisos explícitos.">
            Propiedad y seguridad de los datos
          </SectionHeader>

          <div className="governance-layout">
            <div className="governance-flow">
              <div>
                <DatabaseIcon size={40} aria-hidden="true" />
                <strong>Operación en Zoho</strong>
                <span>CRM, conversaciones y facturación</span>
              </div>
              <ArrowRightIcon size={26} aria-hidden="true" />
              <div>
                <CloudArrowDownIcon size={40} aria-hidden="true" />
                <strong>Entrega mensual</strong>
                <span>CSV/XLSX y archivos acordados</span>
              </div>
              <ArrowRightIcon size={26} aria-hidden="true" />
              <div>
                <ShieldCheckIcon size={40} aria-hidden="true" />
                <strong>Custodia de Evena</strong>
                <span>Repositorio y acceso controlado</span>
              </div>
            </div>

            <div className="security-grid">
              {securityControls.map(({ label, icon: Icon }) => (
                <div key={label}>
                  <Icon size={28} aria-hidden="true" />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="saas-caveat">
            <ShieldCheckIcon size={31} aria-hidden="true" />
            <div>
              <strong>Qué puede comprometerse de forma responsable</strong>
              <p>
                La información comercial es propiedad de Evena. Zoho, como
                proveedor SaaS, la almacena durante la prestación del servicio;
                residencia, subencargados, retención, exportación y eliminación
                deben quedar documentados en DPA y contrato. La implementación
                incluye respaldo mensual y procedimiento de salida, no una
                promesa falsa de “cero almacenamiento”.
              </p>
            </div>
          </div>
        </section>

        <section id="soporte" className="proposal-section support-section">
          <SectionHeader accent="después del lanzamiento.">
            Operación acompañada
          </SectionHeader>
          <div className="support-rail">
            <div>
              <HeadsetIcon size={34} aria-hidden="true" />
              <span>Horario</span>
              <strong>L–V · 09:00–18:00</strong>
              <small>Hora del centro de México</small>
            </div>
            <div>
              <ClockIcon size={34} aria-hidden="true" />
              <span>Incidente crítico</span>
              <strong>4 h hábiles</strong>
              <small>Primera respuesta</small>
            </div>
            <div>
              <ChartBarIcon size={34} aria-hidden="true" />
              <span>Revisión mensual</span>
              <strong>KPIs + bot + embudo</strong>
              <small>Acciones y ajustes priorizados</small>
            </div>
            <div>
              <CirclesThreePlusIcon size={34} aria-hidden="true" />
              <span>Evolución</span>
              <strong>Bolsa de mejoras</strong>
              <small>Cambios con priorización conjunta</small>
            </div>
          </div>

          <div className="scope-columns">
            <div>
              <h3>Soporte mensual incluido</h3>
              <ul>
                <li>Monitoreo funcional de integraciones</li>
                <li>Ajustes menores de flujos y respuestas</li>
                <li>Revisión de métricas y calidad del bot</li>
                <li>Administración de incidentes y cambios</li>
                <li>Sesión mensual de mejora continua</li>
              </ul>
            </div>
            <div>
              <h3>Exclusiones y variables</h3>
              <ul>
                <li>Licencias y consumos de fabricantes</li>
                <li>Créditos de WhatsApp y minutos telefónicos</li>
                <li>Presupuesto de medios y campañas</li>
                <li>Desarrollos fuera del alcance acordado</li>
                <li>Agente telefónico autónomo: fase opcional</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="inversion" className="proposal-section investment-section">
          <SectionHeader accent="con valor desde el primer mes.">
            Una implementación por etapas,
          </SectionHeader>
          <div className="section-kicker">Hoja de ruta · 10–12 semanas</div>
          <div className="roadmap">
            {roadmap.map((phase) => (
              <article key={phase.number}>
                <div className="roadmap-title">
                  <span>{phase.number}</span>
                  <h3>{phase.title}</h3>
                </div>
                <strong>{phase.weeks}</strong>
                <ul>
                  {phase.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <InvestmentCalculator />

          <div className="recommendation-close">
            <div>
              <span>Recomendación final</span>
              <h3>Iniciar con el stack modular y validar Zoho One por plantilla.</h3>
              <p>
                El stack modular permite desplegar cinco usuarios comerciales y
                tres operadores sin licenciar a toda la organización. Zoho One
                puede ser más conveniente si Evena desea extender la plataforma
                a más áreas y el modelo de toda la plantilla resulta elegible.
              </p>
            </div>
            <AppButton target="resumen">Volver al resumen</AppButton>
          </div>

          <footer className="proposal-footer">
            <div>
              <strong>Fuentes de precios y capacidades</strong>
              <p>
                Consultadas el 29 de julio de 2026. Las suscripciones las cobra
                el fabricante y deben confirmarse al momento de compra.
              </p>
            </div>
            <div className="source-links">
              {sources.map((source) => (
                <a
                  key={source.label}
                  href={source.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {source.label}
                  <ArrowRightIcon size={14} aria-hidden="true" />
                </a>
              ))}
            </div>
          </footer>
        </section>
      </main>
    </div>
  );
}
