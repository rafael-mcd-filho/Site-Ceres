"use client";

import { useId, useState } from "react";
import { ArrowRight, FileText, Plus } from "lucide-react";
import { serviceIconMap } from "@/components/service/icon-map";
import type { ServiceCard } from "@/content/services";

type EditorialIndexProps = {
  items: ServiceCard[];
  variant: "contest" | "business";
  panelLabel: string;
};

/**
 * Índice editorial para conteúdos de diagnóstico. No desktop, a lista orienta
 * um painel de leitura; no mobile, o mesmo conteúdo se abre no fluxo vertical.
 */
export function EditorialIndex({ items, variant, panelLabel }: EditorialIndexProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const baseId = useId();
  const activeItem = items[activeIndex];

  return (
    <div className={`editorial-index editorial-index--${variant}`}>
      <ol className="editorial-index__list">
        {items.map((item, index) => {
          const Icon = serviceIconMap[item.icon] || FileText;
          const isActive = activeIndex === index;
          const detailId = `${baseId}-detail-${index}`;

          return (
            <li key={item.title} className={isActive ? "is-active" : ""}>
              <button
                type="button"
                aria-expanded={isActive}
                aria-controls={detailId}
                onClick={() => setActiveIndex(index)}
                onFocus={() => setActiveIndex(index)}
                onMouseEnter={() => setActiveIndex(index)}
              >
                <span className="editorial-index__number">{String(index + 1).padStart(2, "0")}</span>
                <span className="editorial-index__icon"><Icon size={19} aria-hidden="true" /></span>
                <span className="editorial-index__title">{item.title}</span>
                <Plus className="editorial-index__plus" size={18} aria-hidden="true" />
              </button>
              <div id={detailId} className="editorial-index__mobile-detail" hidden={!isActive}>
                <p>{item.text}</p>
                <span>É por aqui que a análise começa <ArrowRight size={15} aria-hidden="true" /></span>
              </div>
            </li>
          );
        })}
      </ol>

      <aside className="editorial-index__panel" aria-live="polite">
        <div className="editorial-index__panel-head">
          <span>{panelLabel}</span>
          <strong>{String(activeIndex + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}</strong>
        </div>
        <h3>{activeItem.title}</h3>
        <p>{activeItem.text}</p>
        <div className="editorial-index__panel-foot">
          <span aria-hidden="true" />
          Passe pelos itens para comparar as situações
        </div>
      </aside>
    </div>
  );
}
