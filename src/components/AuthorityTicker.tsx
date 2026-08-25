"use client";

import {
  BadgeCheck,
  Building2,
  CalendarClock,
  Compass,
  FileSearch,
  MessageSquare,
  Scale,
  type LucideIcon,
} from "lucide-react";
import { useEffect, useRef } from "react";
import { siteConfig } from "@/lib/site";

type Credential = { icon: LucideIcon; label: string };

/**
 * Compromissos de método, não credenciais de resultado — o Provimento 205/2021
 * veda número de casos, depoimento e comparação. Também não repete os nomes das
 * áreas, que já aparecem nos cards logo abaixo.
 */
const credentials: Credential[] = [
  { icon: FileSearch, label: "Documentos conferidos um a um" },
  { icon: CalendarClock, label: "Prazos verificados desde o primeiro contato" },
  { icon: Compass, label: "Trabalho definido antes de começar" },
  { icon: Scale, label: "Atuação contenciosa e consultiva" },
  { icon: Building2, label: "Atendimento a empresas e pessoas físicas" },
  { icon: MessageSquare, label: "Retorno por WhatsApp ou e-mail" },
];

function buildItems(): Credential[] {
  if (!siteConfig.oab) return credentials;
  return [...credentials, { icon: BadgeCheck, label: `OAB/PB ${siteConfig.oab}` }];
}

function Track({ items, hidden }: { items: Credential[]; hidden?: boolean }) {
  return (
    <div className="authority-bar__set" aria-hidden={hidden || undefined}>
      {items.map(({ icon: Icon, label }) => (
        <span className="authority-bar__item" key={label}>
          <Icon size={15} aria-hidden="true" />
          {label}
          <i className="authority-bar__dot" aria-hidden="true" />
        </span>
      ))}
    </div>
  );
}

export function AuthorityTicker() {
  const items = buildItems();
  const ref = useRef<HTMLElement>(null);

  // A animação é infinita: fora da viewport ela só gastaria bateria.
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        element.dataset.running = entry.isIntersecting ? "true" : "false";
      },
      { threshold: 0 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <aside
      ref={ref}
      className="authority-bar"
      data-running="true"
      aria-label="Como o escritório trabalha"
    >
      <div className="authority-bar__track">
        <Track items={items} />
        <Track items={items} hidden />
      </div>
    </aside>
  );
}
