import { CtaButton } from "@/components/CtaButton";
import { MarkedTitle } from "@/components/MarkedTitle";
import { ServiceHeroVisual } from "@/components/ServiceVisuals";
import { whatsappHref } from "@/lib/site";

type ServiceHeroProps = {
  slug: string;
  eyebrow: string;
  title: string;
  titleMark: string;
  lead: string;
  primaryCta: string;
  heroNote: string;
  heroTags: string[];
  whatsappMessage: string;
};

export function ServiceHero({
  slug,
  eyebrow,
  title,
  titleMark,
  lead,
  primaryCta,
  heroNote,
  heroTags,
  whatsappMessage,
}: ServiceHeroProps) {
  return (
    <section
      className={`service-hero service-hero--${slug} section-edge section-edge--ink`}
      id="topo-pagina"
    >
      <div className="container hero-grid">
        <div className="hero-copy hero-enter">
          <p className="eyebrow">{eyebrow}</p>
          <h1>
            <MarkedTitle text={title} mark={titleMark} />
          </h1>
          <p className="hero-lead">{lead}</p>
          <div className="hero-actions">
            <CtaButton
              href="#contato"
              id="cta-form-hero"
              data-cta="form-anchor"
              data-cta-position="hero"
            >
              {primaryCta}
            </CtaButton>
            <CtaButton
              href={whatsappHref(whatsappMessage)}
              seal="whatsapp"
              variant="ghost"
              external
              id="cta-whatsapp-hero"
              data-event="whatsapp_click"
              data-cta="whatsapp"
              data-cta-position="hero"
            >
              Falar pelo WhatsApp
            </CtaButton>
          </div>
          <p className="hero-note"><span aria-hidden="true" />{heroNote}</p>
        </div>
        <div className="hero-visual hero-enter hero-enter--delay">
          <ServiceHeroVisual slug={slug} />
          <div className="hero-tags" aria-label="Temas desta atuação">
            {heroTags.map((tag) => <span key={tag}>{tag}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
}
