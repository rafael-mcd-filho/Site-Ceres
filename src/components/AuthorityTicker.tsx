"use client";

import {
  BadgeCheck,
  BriefcaseBusiness,
  Clock3,
  FileSearch,
  Globe2,
  MessageSquare,
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
const generalCredentials: Credential[] = [
  { icon: BriefcaseBusiness, label: "Atendimento realizado pelo escritório" },
  { icon: FileSearch, label: "Documentos analisados no contexto do caso" },
  { icon: MessageSquare, label: "Trabalho e próximos passos explicados com clareza" },
  { icon: Globe2, label: siteConfig.serviceModes },
  { icon: Clock3, label: siteConfig.responseTime },
];

const contestCredentials: Credential[] = [
  { icon: BriefcaseBusiness, label: "Atendimento realizado pelo escritório" },
  { icon: FileSearch, label: "Edital, decisão, documentos e prazos analisados em conjunto" },
  { icon: MessageSquare, label: "Possíveis próximos passos explicados com clareza" },
  { icon: Globe2, label: siteConfig.serviceModes },
  { icon: Clock3, label: siteConfig.responseTime },
];

function buildItems(context: "geral" | "concursos"): Credential[] {
  const credentials = context === "concursos" ? contestCredentials : generalCredentials;
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

export function AuthorityTicker({ context = "geral" }: { context?: "geral" | "concursos" }) {
  const items = buildItems(context);
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
