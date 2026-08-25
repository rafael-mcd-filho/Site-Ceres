import {
  Activity,
  BadgeCheck,
  Boxes,
  BriefcaseBusiness,
  Building2,
  Calculator,
  Check,
  ClipboardCheck,
  Compass,
  FileCheck2,
  FileText,
  FileWarning,
  Handshake,
  Landmark,
  LockKeyhole,
  MailWarning,
  Map,
  ReceiptText,
  RefreshCw,
  Rocket,
  Route,
  Search,
  ShieldCheck,
  TrendingUp,
  Users,
  type LucideIcon,
} from "lucide-react";
import { AuthorityTicker } from "@/components/AuthorityTicker";
import { ContactForm } from "@/components/ContactForm";
import { CtaButton } from "@/components/CtaButton";
import { FaqList } from "@/components/FaqList";
import { InlineCta } from "@/components/InlineCta";
import { JsonLd } from "@/components/JsonLd";
import { MarkedTitle } from "@/components/MarkedTitle";
import { Reveal } from "@/components/Reveal";
import { ServiceHeroVisual, ServiceMechanismVisual } from "@/components/ServiceVisuals";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import type { ServiceConfig } from "@/content/services";
import { whatsappHref } from "@/lib/site";
import { breadcrumbSchema, faqPageSchema, serviceSchema } from "@/lib/structured-data";

const iconMap: Record<string, LucideIcon> = {
  activity: Activity,
  badge: BadgeCheck,
  boxes: Boxes,
  briefcase: BriefcaseBusiness,
  building: Building2,
  calculator: Calculator,
  clipboard: ClipboardCheck,
  compass: Compass,
  "file-check": FileCheck2,
  "file-text": FileText,
  "file-warning": FileWarning,
  handshake: Handshake,
  landmark: Landmark,
  lock: LockKeyhole,
  "mail-warning": MailWarning,
  map: Map,
  receipt: ReceiptText,
  refresh: RefreshCw,
  rocket: Rocket,
  route: Route,
  search: Search,
  shield: ShieldCheck,
  trending: TrendingUp,
  users: Users,
};

function SectionHeading({ eyebrow, title, lead }: { eyebrow?: string; title: string; lead?: string }) {
  return (
    <div className="section-heading">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {lead && <p>{lead}</p>}
    </div>
  );
}

/**
 * Seis seções, na ordem das perguntas que o visitante faz: onde estou (hero),
 * isso é o meu caso (situações), vocês entendem isso (leitura), o que pode ser
 * feito (caminhos), e se… (dúvidas), como começo (começar).
 */
export function ServicePage({ config }: { config: ServiceConfig }) {
  // Sem `mechanismItems`, a cronologia é o próprio diagnóstico: ela alimenta o
  // visual e o trilho é omitido, para a sequência não aparecer duas vezes.
  const mechanismItems = config.mechanismItems ?? config.timeline;
  const showTimelineRail = Boolean(config.mechanismItems);

  return (
    <main id="topo" className={`service-page service-page--${config.slug} theme-${config.theme}`}>
      <section
        className={`service-hero service-hero--${config.slug} section-edge section-edge--ink`}
        id="topo-pagina"
      >
        <div className="container hero-grid">
          <div className="hero-copy hero-enter">
            <p className="eyebrow">{config.eyebrow}</p>
            <h1>
              <MarkedTitle text={config.title} mark={config.titleMark} />
            </h1>
            <p className="hero-lead">{config.lead}</p>
            <div className="hero-actions">
              <CtaButton
                href="#contato"
                id="cta-form-hero"
                data-cta="form-anchor"
                data-cta-position="hero"
              >
                {config.primaryCta}
              </CtaButton>
              <CtaButton
                href={whatsappHref(config.whatsappMessage)}
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
            <p className="hero-note"><span aria-hidden="true" />{config.heroNote}</p>
          </div>
          <div className="hero-visual hero-enter hero-enter--delay">
            <ServiceHeroVisual slug={config.slug} />
            <div className="hero-tags" aria-label="Temas desta atuação">
              {config.heroTags.map((tag) => <span key={tag}>{tag}</span>)}
            </div>
          </div>
        </div>
      </section>

      <AuthorityTicker />

      <section className={`section section--paper service-situations service-situations--${config.slug}`} id="situacoes">
        <div className="container">
          <Reveal><SectionHeading title={config.situationsTitle} lead={config.situationsLead} /></Reveal>
          <div className="card-grid card-grid--three">
            {config.situations.map((item, index) => {
              const Icon = iconMap[item.icon] || FileText;
              return (
                <Reveal key={item.title} delay={index * 55}>
                  <article className="issue-card">
                    <div className="card-topline">
                      <Icon size={21} aria-hidden="true" />
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className={`section section--white service-reading service-reading--${config.slug}`} id="metodo">
        <div className="container">
          <div className="reading-grid">
            <Reveal>
              <div className="section-heading reading-copy">
                <p className="eyebrow">{config.mechanismEyebrow}</p>
                <h2>{config.mechanismTitle}</h2>
                <p>{config.mechanismText}</p>
                {config.mechanismNote && <p>{config.mechanismNote}</p>}
              </div>
            </Reveal>
            <Reveal delay={100}>
              <ServiceMechanismVisual slug={config.slug} items={mechanismItems} />
            </Reveal>
          </div>

          <Reveal>
            <div className="reading-timeline">
              <div className="reading-timeline__intro">
                <p className="eyebrow">CRONOLOGIA</p>
                <h3>{config.timelineTitle}</h3>
                <p>{config.timelineLead}</p>
              </div>
              {showTimelineRail && (
                <ol className="timeline-rail">
                  {config.timeline.map((item, index) => (
                    <li key={item}>
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      <p>{item}</p>
                    </li>
                  ))}
                </ol>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      <section className={`section section--accent service-paths service-paths--${config.slug}`} id="caminhos">
        <div className="container">
          <Reveal><SectionHeading title={config.pathsTitle} lead={config.pathsLead} /></Reveal>
          <div className="card-grid card-grid--paths">
            {config.paths.map((item, index) => {
              const Icon = iconMap[item.icon] || Route;
              return (
                <Reveal key={item.title} delay={index * 55}>
                  <article className="path-card">
                    <Icon size={22} aria-hidden="true" />
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <InlineCta
        eyebrow="PRÓXIMO PASSO"
        title={config.inlineCtaTitle}
        text={config.inlineCtaText}
        whatsappMessage={config.whatsappMessage}
        position="meio"
      />

      <section className="section section--paper" id="duvidas">
        <div className="container faq-layout">
          <Reveal>
            <div className="faq-intro">
              <p className="eyebrow">PERGUNTAS FREQUENTES</p>
              <h2>As dúvidas que aparecem logo no primeiro contato.</h2>
              <p>Uma data, um documento ou uma cláusula específica mudam a leitura inteira. Estas respostas são gerais e não substituem a análise individual do seu caso.</p>
            </div>
          </Reveal>
          <Reveal delay={80}><FaqList items={config.faq} /></Reveal>
        </div>
      </section>

      <section className="section contact-section" id="contato">
        <div className="container">
          <Reveal>
            <div className="section-heading start-heading">
              <p className="eyebrow">COMO COMEÇAR</p>
              <h2>{config.contactTitle}</h2>
              <p>{config.contactLead}</p>
            </div>
          </Reveal>

          <Reveal delay={60}>
            <ol className="start-steps" aria-label={config.processTitle}>
              {config.process.map((step, index) => (
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
              <div className="contact-card"><ContactForm area={config.formArea} source={config.slug} /></div>
            </Reveal>
            <Reveal delay={100}>
              <div className="start-aside">
                <p className="eyebrow">{config.documentsTitle}</p>
                <ul className="document-checklist">
                  {config.documents.map((item) => (
                    <li key={item}>
                      <Check size={16} aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="start-aside__note">{config.documentsLead}</p>
                <p className="start-aside__trust">{config.trustNote}</p>
                <CtaButton
                  href={whatsappHref(config.whatsappMessage)}
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

      <WhatsAppFloat message={config.whatsappMessage} />
      <JsonLd
        data={[
          faqPageSchema(config.faq),
          serviceSchema({
            name: config.serviceName,
            description: config.serviceDescription,
            path: `/${config.slug}`,
          }),
          breadcrumbSchema([
            { name: "Início", path: "/" },
            { name: config.serviceName, path: `/${config.slug}` },
          ]),
        ]}
      />
    </main>
  );
}
