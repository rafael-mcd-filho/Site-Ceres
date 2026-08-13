"use client";

import {
  BadgeCheck,
  BookOpenText,
  GraduationCap,
  Presentation,
  Scale,
  type LucideIcon,
} from "lucide-react";
import { useEffect, useRef } from "react";
import { siteConfig } from "@/lib/site";

type Credential = { icon: LucideIcon; label: string };

/**
 * Apenas autoridade formal e verificável — o que o Provimento 205/2021 permite.
 * Nada de número de resultado, caso concreto, depoimento ou comparação.
 */
const credentials: Credential[] = [
  { icon: Scale, label: "Advogada" },
  { icon: GraduationCap, label: "Mestra em Direito" },
  { icon: GraduationCap, label: "Doutoranda em Direito" },
  { icon: Presentation, label: "Professora — CERS" },
  { icon: Presentation, label: "Professora — Gran Cursos Online" },
  { icon: BookOpenText, label: "Autora" },
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
      aria-label="Formação e atuação profissional"
    >
      <div className="authority-bar__track">
        <Track items={items} />
        <Track items={items} hidden />
      </div>
    </aside>
  );
}
