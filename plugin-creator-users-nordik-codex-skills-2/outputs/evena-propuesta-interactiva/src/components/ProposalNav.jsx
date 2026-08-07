import {
  BrainIcon,
  CalendarBlankIcon,
  ChartPieSliceIcon,
  ClockIcon,
  FileTextIcon,
  FlowArrowIcon,
  GearIcon,
  ListIcon,
  NetworkIcon,
  PrinterIcon,
  ShieldCheckIcon,
  SidebarSimpleIcon,
  XIcon,
} from "@phosphor-icons/react";
import { navigation } from "../data.js";

const icons = {
  summary: SidebarSimpleIcon,
  architecture: NetworkIcon,
  flows: FlowArrowIcon,
  ai: BrainIcon,
  reports: ChartPieSliceIcon,
  invoice: FileTextIcon,
  security: ShieldCheckIcon,
  support: GearIcon,
  investment: ClockIcon,
};

export function ProposalNav({
  activeSection,
  mobileOpen,
  onClose,
  onNavigate,
}) {
  return (
    <>
      <header className="mobile-header">
        <img src="/assets/evena-logo.png" alt="Evena Foods" />
        <button
          className="icon-button"
          type="button"
          onClick={onClose}
          aria-label={mobileOpen ? "Cerrar navegación" : "Abrir navegación"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <XIcon /> : <ListIcon />}
        </button>
      </header>

      <aside className={`proposal-nav ${mobileOpen ? "is-open" : ""}`}>
        <div className="brand-lockup">
          <img src="/assets/evena-logo.png" alt="Evena Foods" />
        </div>

        <nav aria-label="Secciones de la propuesta">
          {navigation.map((item) => {
            const Icon = icons[item.icon];
            return (
              <button
                key={item.id}
                type="button"
                className={activeSection === item.id ? "is-active" : ""}
                aria-current={activeSection === item.id ? "page" : undefined}
                onClick={() => onNavigate(item.id)}
              >
                <Icon size={24} weight="regular" aria-hidden="true" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        <div className="nav-footer">
          <div className="nav-date">
            <CalendarBlankIcon size={22} aria-hidden="true" />
            <span>29 de julio de 2026</span>
          </div>
          <button
            type="button"
            className="print-button"
            onClick={() => window.print()}
          >
            <PrinterIcon size={20} aria-hidden="true" />
            Imprimir / guardar PDF
          </button>
        </div>
      </aside>

      {mobileOpen ? (
        <button
          type="button"
          className="nav-backdrop"
          aria-label="Cerrar navegación"
          onClick={onClose}
        />
      ) : null}
    </>
  );
}
