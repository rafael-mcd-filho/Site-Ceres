import { Check, Plus } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { CtaButton } from "@/components/CtaButton";
import { MarkedTitle } from "@/components/MarkedTitle";
import { Reveal } from "@/components/Reveal";
import type { ContactPlatform, ServiceArea } from "@/content/services";
import { whatsappHref } from "@/lib/site";

type ServiceStartProps = {
  slug: string;
  contactTitle: string;
  contactTitleMark?: string;
  contactLead: string;
  processTitle: string;
  process: Array<{ title: string; text: string }>;
  formArea: ServiceArea;
  formPlatform?: ContactPlatform;
  documentsTitle: string;
  documents: string[];
  documentsLead: string;
  trustNote: string;
  whatsappMessage: string;
  finalCta: string;
};

export function ServiceStart({
  slug,
  contactTitle,
  contactTitleMark,
  contactLead,
  processTitle,
  process,
  formArea,
  formPlatform,
  documentsTitle,
  documents,
  documentsLead,
  trustNote,
  whatsappMessage,
  finalCta,
}: ServiceStartProps) {
  return (
    <section className="section contact-section" id="contato">
      <div className="container">
        <Reveal>
          <div className="section-heading start-heading">
            <p className="eyebrow">COMO COMEÇAR</p>
            <h2><MarkedTitle text={contactTitle} mark={contactTitleMark} /></h2>
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
            <div className="contact-card">
              <ContactForm area={formArea} platform={formPlatform} source={slug} />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="start-aside">
              <div className="start-aside__documents-desktop">
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
              </div>
              <details className="start-aside__documents-mobile">
                <summary>
                  <span><small>DOCUMENTOS</small><strong>{documentsTitle}</strong></span>
                  <Plus size={18} aria-hidden="true" />
                </summary>
                <ul className="document-checklist">
                  {documents.map((item) => (
                    <li key={item}>
                      <Check size={16} aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="start-aside__note">{documentsLead}</p>
              </details>
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
                {finalCta}
              </CtaButton>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
