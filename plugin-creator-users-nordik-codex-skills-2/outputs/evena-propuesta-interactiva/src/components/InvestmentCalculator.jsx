import { useMemo, useState } from "react";
import {
  CalculatorIcon,
  CheckCircleIcon,
  MinusIcon,
  PlusIcon,
} from "@phosphor-icons/react";
import { FIX_RATE } from "../data.js";

const formatMXN = new Intl.NumberFormat("es-MX", {
  style: "currency",
  currency: "MXN",
  maximumFractionDigits: 0,
});

const models = {
  modular: {
    label: "Stack recomendado",
    note: "CRM, SalesIQ, Voice y Books contratados por separado.",
  },
  allEmployees: {
    label: "Zoho One · plantilla",
    note: "US$37 por empleado/mes; exige licenciar a toda la nómina.",
  },
  flexible: {
    label: "Zoho One · flexible",
    note: "US$90 por usuario activo/mes; no exige licenciar toda la nómina.",
  },
};

function Stepper({ label, value, min = 1, max = 50, onChange }) {
  return (
    <div className="stepper">
      <span>{label}</span>
      <div>
        <button
          type="button"
          aria-label={`Reducir ${label}`}
          onClick={() => onChange(Math.max(min, value - 1))}
          disabled={value <= min}
        >
          <MinusIcon size={15} aria-hidden="true" />
        </button>
        <output aria-live="polite">{value}</output>
        <button
          type="button"
          aria-label={`Aumentar ${label}`}
          onClick={() => onChange(Math.min(max, value + 1))}
          disabled={value >= max}
        >
          <PlusIcon size={15} aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}

export function InvestmentCalculator() {
  const [model, setModel] = useState("modular");
  const [crmUsers, setCrmUsers] = useState(5);
  const [operators, setOperators] = useState(3);
  const [voiceAdmins, setVoiceAdmins] = useState(1);
  const [employees, setEmployees] = useState(8);
  const [flexUsers, setFlexUsers] = useState(5);

  const breakdown = useMemo(() => {
    if (model === "allEmployees") {
      return [
        {
          name: `Zoho One · ${employees} empleados`,
          amount: employees * 37 * FIX_RATE,
        },
      ];
    }

    if (model === "flexible") {
      return [
        {
          name: `Zoho One · ${flexUsers} usuarios flexibles`,
          amount: flexUsers * 90 * FIX_RATE,
        },
      ];
    }

    return [
      {
        name: `Zoho CRM Enterprise · ${crmUsers} usuarios`,
        amount: crmUsers * 40 * FIX_RATE,
      },
      {
        name: `SalesIQ Enterprise · ${operators} operadores`,
        amount: operators * 20 * FIX_RATE,
      },
      {
        name: `Zoho Voice Standard · ${voiceAdmins} admin`,
        amount: voiceAdmins * 49 * FIX_RATE,
      },
      { name: "Zoho Books Profesional · organización", amount: 299 },
    ];
  }, [crmUsers, employees, flexUsers, model, operators, voiceAdmins]);

  const total = useMemo(
    () => breakdown.reduce((sum, item) => sum + item.amount, 0),
    [breakdown],
  );

  return (
    <div className="calculator-shell">
      <div className="calculator-main">
        <div className="scenario-tabs" role="tablist" aria-label="Modelo de licencia">
          {Object.entries(models).map(([key, value]) => (
            <button
              type="button"
              role="tab"
              aria-selected={model === key}
              className={model === key ? "is-selected" : ""}
              key={key}
              onClick={() => setModel(key)}
            >
              {value.label}
            </button>
          ))}
        </div>

        <p className="scenario-note">{models[model].note}</p>

        <div className="steppers">
          {model === "modular" ? (
            <>
              <Stepper
                label="Usuarios CRM"
                value={crmUsers}
                onChange={setCrmUsers}
              />
              <Stepper
                label="Operadores"
                value={operators}
                onChange={setOperators}
              />
              <Stepper
                label="Admins de voz"
                value={voiceAdmins}
                onChange={setVoiceAdmins}
              />
            </>
          ) : model === "allEmployees" ? (
            <Stepper
              label="Empleados en nómina"
              value={employees}
              onChange={setEmployees}
              max={200}
            />
          ) : (
            <Stepper
              label="Usuarios activos"
              value={flexUsers}
              onChange={setFlexUsers}
              max={200}
            />
          )}
        </div>

        <div className="price-breakdown">
          <h3>Licencias mensuales</h3>
          {breakdown.map((item) => (
            <div className="price-row" key={item.name}>
              <span>{item.name}</span>
              <strong>{formatMXN.format(item.amount)}</strong>
            </div>
          ))}
          <div className="price-total">
            <span>Total mensual estimado</span>
            <strong>{formatMXN.format(total)}</strong>
          </div>
        </div>

        <div className="pricing-footnote">
          <CheckCircleIcon size={18} aria-hidden="true" />
          <span>
            Antes de IVA. Tipo de cambio FIX Banxico del 28/07/2026:
            {" "}17.4312 MXN/USD. WhatsApp, números y minutos se pagan por consumo.
          </span>
        </div>
      </div>

      <aside className="services-quote">
        <div>
          <span>Implementación base · único</span>
          <strong>$198,000 <small>MXN</small></strong>
        </div>
        <ul>
          <li>Descubrimiento y diseño de procesos</li>
          <li>Configuración, integraciones y automatizaciones</li>
          <li>Chatbot IA y base de conocimiento</li>
          <li>QA, capacitación y salida a producción</li>
        </ul>
        <div className="service-line">
          <span>Soporte y mejora continua</span>
          <strong>$18,500 MXN / mes</strong>
        </div>
        <div className="service-line">
          <span>Bolsa opcional de 20 h</span>
          <strong>$24,000 MXN</strong>
        </div>
        <button
          type="button"
          className="primary-button full-width"
          onClick={() => window.print()}
        >
          <CalculatorIcon size={19} aria-hidden="true" />
          Guardar propuesta
        </button>
        <small>Precios antes de IVA. Vigencia comercial: 30 días.</small>
      </aside>
    </div>
  );
}
