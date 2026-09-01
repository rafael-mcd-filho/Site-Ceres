"use client";

import { useEffect, useState } from "react";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { whatsappHref } from "@/lib/site";

type WhatsAppFloatProps = {
  message: string;
  label?: string;
};

/**
 * Aparece depois que o hero sai da viewport e volta a se ocultar quando a
 * seção de contato entra em cena. Assim o atalho não compete nem com o CTA da
 * primeira dobra nem com consentimento e envio do formulário.
 *
 * `scroll`/`resize` (passivos) em vez de IntersectionObserver: quando o hero é
 * fixed/animado, alguns browsers atrasam o observer; a checagem direta do
 * `bottom` do rect é imediata e barata.
 */
export function WhatsAppFloat({ message, label = "Contar minha situação" }: WhatsAppFloatProps) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const hero = document.querySelector<HTMLElement>(".home-hero, .service-hero");
    const contact = document.querySelector<HTMLElement>(".contact-section");

    let raf = 0;
    const check = () => {
      raf = 0;
      const heroGone = !hero || hero.getBoundingClientRect().bottom < 40;
      const contactRect = contact?.getBoundingClientRect();
      const contactVisible = Boolean(
        contactRect && contactRect.top < window.innerHeight - 24 && contactRect.bottom > 88,
      );
      setReady(heroGone && !contactVisible);
    };
    const schedule = () => {
      if (raf) return;
      raf = requestAnimationFrame(check);
    };

    schedule();
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
