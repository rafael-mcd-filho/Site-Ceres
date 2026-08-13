import {
  Activity,
  ArrowRight,
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
import { BrandVisual } from "@/components/BrandVisual";
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

export function ServicePage({ config }: { config: ServiceConfig }) {
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
                WhatsApp
              </CtaButton>
            </div>
            <p className="hero-note"><span aria-hidden="true" />{config.heroNote}</p>
          </div>
          <div className="hero-visual hero-enter hero-enter--delay">
            <ServiceHeroVisual slug={config.slug} />
            <div className="hero-tags" aria-label="Temas desta página">
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

      <section className={`section section--white service-mechanism service-mechanism--${config.slug}`} id="metodo">
        <div className="container split-grid split-grid--mechanism">
          <Reveal>
            <SectionHeading eyebrow={config.mechanismEyebrow} title={config.mechanismTitle} lead={config.mechanismText} />
          </Reveal>
          <Reveal delay={100}>
            <ServiceMechanismVisual slug={config.slug} items={config.mechanismItems} />
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

      <section className={`section section--attention service-timeline service-timeline--${config.slug}`}>
        <div className="container timeline-layout">
          <Reveal><SectionHeading eyebrow="CRONOLOGIA" title={config.timelineTitle} lead={config.timelineLead} /></Reveal>
          <Reveal delay={100}>
            <ol className="timeline">
              {config.timeline.map((item, index) => (
                <li key={item}><span>{String(index + 1).padStart(2, "0")}</span><p>{item}</p></li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      <section className="section section--white">
        <div className="container split-grid authority-grid">
          <Reveal><BrandVisual theme="graphite" label="Advocacia · Docência · Pesquisa" /></Reveal>
          <Reveal delay={100}>
            <div className="authority-copy">
              <p className="eyebrow">QUEM CONDUZ A ANÁLISE</p>
              <h2>{config.authorityTitle}</h2>
              {config.authorityText.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              <div className="credential-row"><span>Advogada</span><span>Professora</span><span>Mestra</span><span>Escritora</span></div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--ink" id="como-funciona">
        <div className="container">
          <Reveal><SectionHeading eyebrow="PROCESSO" title={config.processTitle} /></Reveal>
          <div className="process-grid">
            {config.process.map((step, index) => (
              <Reveal key={step.title} delay={index * 80}>
                <article className="process-card">
                  <span>0{index + 1}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--white" id="documentos">
        <div className="container documents-layout">
          <Reveal><SectionHeading eyebrow="PRIMEIROS ELEMENTOS" title={config.documentsTitle} lead={config.documentsLead} /></Reveal>
          <Reveal delay={80}>
            <ul className="document-checklist">
              {config.documents.map((item) => (
                <li key={item}>
                  <Check size={17} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <InlineCta
        eyebrow="ANTES DAS DÚVIDAS FREQUENTES"
        title="Sua situação tem detalhes que uma página não alcança."
        text="O retorno inicial serve para organizar informações e delimitar o que pode ser examinado — não para prometer resultado."
        whatsappMessage={config.whatsappMessage}
        position="pre-faq"
      />

      <section className="section section--paper" id="duvidas">
        <div className="container faq-layout">
          <Reveal>
            <div className="faq-intro">
              <p className="eyebrow">PERGUNTAS FREQUENTES</p>
              <h2>Informação ajuda a organizar. O caso concreto define a resposta.</h2>
              <p>Estas respostas são gerais e não substituem a análise individual de documentos, fatos e prazos.</p>
            </div>
          </Reveal>
          <Reveal delay={80}><FaqList items={config.faq} /></Reveal>
        </div>
      </section>

      <section className="section contact-section" id="contato">
        <div className="container contact-layout">
          <Reveal>
            <div className="contact-card"><ContactForm area={config.formArea} source={config.slug} /></div>
          </Reveal>
          <Reveal delay={100}>
            <div className="contact-copy">
              <p className="eyebrow">PRÓXIMO PASSO</p>
              <h2>{config.contactTitle}</h2>
              <p>{config.contactLead}</p>
              <div className="contact-flow" aria-label="Fluxo do contato">
                <span>informações</span><ArrowRight size={16} /><span>contexto</span><ArrowRight size={16} /><span>retorno</span>
              </div>
              <CtaButton
                href={whatsappHref(config.whatsappMessage)}
                seal="whatsapp"
                variant="light"
                external
                id="cta-whatsapp-final"
                data-event="whatsapp_click"
                data-cta="whatsapp"
                data-cta-position="final"
              >
                Continuar pelo WhatsApp
              </CtaButton>
            </div>
          </Reveal>
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
