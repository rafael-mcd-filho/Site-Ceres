"use client";

import { useEffect, useState } from "react";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { whatsappHref } from "@/lib/site";

type WhatsAppFloatProps = {
  message: string;
  label?: string;
};

/**
 * Aparece só depois que o hero (que já tem seu próprio CTA de WhatsApp) sai
 * da viewport. Enquanto o hero é visível, o botão fica oculto e não compete
 * visualmente com o CTA principal da primeira dobra.
 *
 * `scroll`/`resize` (passivos) em vez de IntersectionObserver: quando o hero é
 * fixed/animado, alguns browsers atrasam o observer; a checagem direta do
 * `bottom` do rect é imediata e barata.
 */
export function WhatsAppFloat({ message, label = "Falar pelo WhatsApp" }: WhatsAppFloatProps) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const hero = document.querySelector<HTMLElement>(".home-hero, .service-hero");

    // Sem hero na página (privacidade, obrigado), o float aparece de imediato.
    if (!hero) {
      setReady(true);
      return;
    }

    let raf = 0;
    const check = () => {
      raf = 0;
      setReady(hero.getBoundingClientRect().bottom < 40);
    };
    const schedule = () => {
      if (raf) return;
      raf = requestAnimationFrame(check);
    };

    check();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <a
      id="cta-whatsapp-float"
      className={`whatsapp-float ${ready ? "is-ready" : ""}`}
      href={whatsappHref(message)}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      aria-hidden={!ready}
      tabIndex={ready ? 0 : -1}
      data-event="whatsapp_click"
      data-cta="whatsapp-float"
      data-cta-position="flutuante"
    >
      <WhatsAppIcon size={22} />
      <span>{label}</span>
    </a>
  );
}
