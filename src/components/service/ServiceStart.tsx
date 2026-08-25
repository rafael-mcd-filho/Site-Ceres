import { Check } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { CtaButton } from "@/components/CtaButton";
import { Reveal } from "@/components/Reveal";
import type { ServiceArea } from "@/content/services";
import { whatsappHref } from "@/lib/site";

type ServiceStartProps = {
  slug: string;
  contactTitle: string;
  contactLead: string;
  processTitle: string;
  process: Array<{ title: string; text: string }>;
  formArea: ServiceArea;
  documentsTitle: string;
  documents: string[];
  documentsLead: string;
  trustNote: string;
  whatsappMessage: string;
};

export function ServiceStart({
  slug,
  contactTitle,
  contactLead,
  processTitle,
  process,
  formArea,
  documentsTitle,
  documents,
  documentsLead,
  trustNote,
  whatsappMessage,
}: ServiceStartProps) {
  return (
    <section className="section contact-section" id="contato">
      <div className="container">
        <Reveal>
          <div className="section-heading start-heading">
            <p className="eyebrow">COMO COMEÇAR</p>
            <h2>{contactTitle}</h2>
            <p>{contactLead}</p>
          </div>
        </Reveal>

        <Reveal delay={60}>
          <ol className="start-steps" aria-label={processTitle}>
            {process.map((step, index) => (
              <li key={step.title}>
                <span aria-hidden="true">0{index + 1}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>

        <div className="start-layout">
          <Reveal>
            <div className="contact-card"><ContactForm area={formArea} source={slug} /></div>
          </Reveal>
          <Reveal delay={100}>
            <div className="start-aside">
              <p className="eyebrow">{documentsTitle}</p>
              <ul className="document-checklist">
                {documents.map((item) => (
                  <li key={item}>
                    <Check size={16} aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="start-aside__note">{documentsLead}</p>
              <p className="start-aside__trust">{trustNote}</p>
              <CtaButton
                href={whatsappHref(whatsappMessage)}
                seal="whatsapp"
                variant="light"
                external
                className="start-aside__cta"
                id="cta-whatsapp-final"
                data-event="whatsapp_click"
                data-cta="whatsapp"
                data-cta-position="final"
              >
                Falar com a equipe pelo WhatsApp
              </CtaButton>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
