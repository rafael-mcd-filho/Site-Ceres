import { CtaButton } from "@/components/CtaButton";
import { MarkedTitle } from "@/components/MarkedTitle";
import { whatsappHref } from "@/lib/site";

type InlineCtaProps = {
  eyebrow: string;
  title: string;
  titleMark?: string;
  text: string;
  primaryLabel: string;
  whatsappLabel: string;
  whatsappMessage: string;
  /** Identifica a posição no funil para o GTM. */
  position: string;
};

/**
 * Ponto de conversão no meio da página. Sem a barra o visitante rolava
 * 5.000px sem nenhum caminho para o contato.
 */
export function InlineCta({
  eyebrow,
  title,
  titleMark,
  text,
  primaryLabel,
  whatsappLabel,
  whatsappMessage,
  position,
}: InlineCtaProps) {
  return (
    <aside className="inline-cta">
      <div className="container inline-cta__inner">
        <div className="inline-cta__copy">
          <p className="eyebrow">{eyebrow}</p>
          <h2><MarkedTitle text={title} mark={titleMark} /></h2>
          <p>{text}</p>
        </div>
        <div className="inline-cta__actions">
          <CtaButton
            href="#contato"
            id={`cta-form-${position}`}
            data-cta="form-anchor"
            data-cta-position={position}
          >
            {primaryLabel}
          </CtaButton>
          <CtaButton
            href={whatsappHref(whatsappMessage)}
            seal="whatsapp"
            variant="ghost"
            external
            id={`cta-whatsapp-${position}`}
            data-event="whatsapp_click"
            data-cta="whatsapp"
            data-cta-position={position}
          >
            {whatsappLabel}
          </CtaButton>
        </div>
      </div>
    </aside>
  );
}
