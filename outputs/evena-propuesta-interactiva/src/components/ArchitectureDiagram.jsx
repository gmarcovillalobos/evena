import {
  ArrowRightIcon,
  BooksIcon,
  BuildingsIcon,
  ChartLineUpIcon,
  ChatsCircleIcon,
  GlobeSimpleIcon,
  MegaphoneSimpleIcon,
  PhoneIcon,
  ShoppingCartSimpleIcon,
  WhatsappLogoIcon,
} from "@phosphor-icons/react";
import { architectureOutputs } from "../data.js";

const outputIcons = {
  wholesale: BuildingsIcon,
  retail: ShoppingCartSimpleIcon,
  books: BooksIcon,
};

const channels = [
  { label: "WordPress", icon: GlobeSimpleIcon },
  { label: "WhatsApp", icon: WhatsappLogoIcon },
  { label: "Llamadas", icon: PhoneIcon },
  { label: "Campañas", icon: MegaphoneSimpleIcon },
];

export function ArchitectureDiagram({ compact = false, analytics = false }) {
  const outputs = analytics
    ? [
        ...architectureOutputs,
        {
          title: "Zoho Analytics · KPIs",
          description: "Reportes y tableros de desempeño",
          icon: "analytics",
        },
      ]
    : architectureOutputs;

  return (
    <div className={`architecture-diagram ${compact ? "is-compact" : ""}`}>
      <div className="channel-stack" aria-label="Canales de captación">
        {channels.map(({ label, icon: Icon }) => (
          <div className="channel-row" key={label}>
            <Icon size={compact ? 22 : 25} aria-hidden="true" />
            <span>{label}</span>
          </div>
        ))}
      </div>

      <ArrowRightIcon
        className="diagram-arrow"
        size={compact ? 26 : 30}
        aria-hidden="true"
      />

      <div className="system-node">
        <ChatsCircleIcon size={compact ? 34 : 40} aria-hidden="true" />
        <strong>SalesIQ + IA</strong>
        <span>Chatbot, calificación y enriquecimiento</span>
      </div>

      <ArrowRightIcon
        className="diagram-arrow"
        size={compact ? 26 : 30}
        aria-hidden="true"
      />

      <div className="system-node">
        <BuildingsIcon size={compact ? 34 : 40} aria-hidden="true" />
        <strong>Zoho CRM</strong>
        <span>Leads, oportunidades y seguimiento</span>
      </div>

      <ArrowRightIcon
        className="diagram-arrow"
        size={compact ? 26 : 30}
        aria-hidden="true"
      />

      <div className="output-stack">
        {outputs.map((output) => {
          const Icon =
            output.icon === "analytics"
              ? ChartLineUpIcon
              : outputIcons[output.icon];
          return (
            <div className="output-row" key={output.title}>
              <Icon size={compact ? 25 : 29} aria-hidden="true" />
              <div>
                <strong>{output.title}</strong>
                <span>{output.description}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
