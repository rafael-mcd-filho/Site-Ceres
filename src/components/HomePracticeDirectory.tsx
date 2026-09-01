"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Plus } from "lucide-react";

type PracticeArea = {
  iconSrc: string;
  index: string;
  title: string;
  text: string;
  href: string;
  link: string;
};

type PlatformArea = {
  iconSrc: string;
  platform: string;
  cardWidth: number;
  title: string;
  text: string;
  href: string;
};

type HomePracticeDirectoryProps = {
  areas: PracticeArea[];
  platforms: PlatformArea[];
  mode: "areas" | "platforms";
};

const ctaSlug = (href: string) => href.replace(/^\//, "") || "home";

export function HomePracticeDirectory({ areas, platforms, mode }: HomePracticeDirectoryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeArea = areas[activeIndex];

  if (mode === "platforms") {
    return (
      <div className="platform-directory" aria-label="Contas bloqueadas em plataformas">
        {platforms.map((item, index) => (
          <Link
            key={item.href}
            className="platform-directory__item"
            href={item.href}
            id={`cta-plataforma-${ctaSlug(item.href)}`}
            data-event="area_select"
            data-cta="platform-directory"
            data-cta-position="plataformas"
          >
            <span className="platform-directory__number">0{index + 1}</span>
            <span className="platform-directory__logo">
              <Image
                className={`platform-logo--${item.platform}`}
                src={item.iconSrc}
                alt=""
                width={item.cardWidth}
                height={58}
              />
            </span>
            <span className="platform-directory__copy">
              <strong>{item.title}</strong>
              <small>{item.text}</small>
            </span>
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        ))}
      </div>
    );
  }

  return (
    <div className="practice-directory">
      <div className="practice-directory__main">
        <ol className="practice-directory__list" aria-label="Áreas jurídicas">
          {areas.map((area, index) => {
            const isActive = activeIndex === index;
            return (
              <li key={area.href} className={isActive ? "is-active" : ""}>
                <button
                  type="button"
                  aria-expanded={isActive}
                  onClick={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                  onMouseEnter={() => setActiveIndex(index)}
                >
                  <span>{area.index}</span>
                  <strong>{area.title}</strong>
                  <Plus size={18} aria-hidden="true" />
                </button>
                <div className="practice-directory__mobile-detail" hidden={!isActive}>
                  <p>{area.text}</p>
                  <Link
                    href={area.href}
                    id={`cta-area-mobile-${ctaSlug(area.href)}`}
                    data-event="area_select"
                    data-cta="area-directory"
                    data-cta-position="areas"
                  >
                    {area.link} <ArrowRight size={16} aria-hidden="true" />
                  </Link>
                </div>
              </li>
            );
          })}
        </ol>

        <article className="practice-directory__feature" aria-live="polite">
          <div className="practice-directory__feature-head">
            <span>ATUAÇÃO {activeArea.index}</span>
          </div>
          <h3>{activeArea.title}</h3>
          <p>{activeArea.text}</p>
          <Link
            href={activeArea.href}
            id={`cta-area-${ctaSlug(activeArea.href)}`}
            data-event="area_select"
            data-cta="area-directory"
            data-cta-position="areas"
          >
            {activeArea.link} <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </article>
      </div>

    </div>
  );
}
