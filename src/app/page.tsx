import type { Metadata } from "next";
import { ogImageFor } from "@/lib/og";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BookOpenText,
  Building2,
  FileSearch,
  GraduationCap,
  Camera,
  MessageCircleQuestion,
  MessageSquare,
  Scale,
  ShoppingBag,
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
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { defaultWhatsAppMessage, whatsappHref } from "@/lib/site";
import { faqPageSchema } from "@/lib/structured-data";

const description =
  "Conheça a atuação de Ceres Rabelo em concursos públicos, dívida ativa, execução fiscal e direito empresarial.";

export const metadata: Metadata = {
  title: "Ceres Rabelo Advocacia | Concursos e Empresarial",
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title: "Ceres Rabelo Advocacia",
    description,
    url: "/",
    images: ogImageFor("home"),
  },
};

const areas = [
  {
    icon: Scale,
    index: "01",
    title: "Concursos públicos",
    text: "Edital, eliminação, TAF, avaliação médica, cotas, investigação social, convocação e nomeação.",
    href: "/concursos",
    link: "Conhecer a atuação em concursos",
  },
  {
    icon: FileSearch,
    index: "02",
    title: "Dívida ativa e execução fiscal",
    text: "Análise de inscrições, citações, bloqueios, penhoras e outros atos relacionados à cobrança fiscal da empresa.",
    href: "/divida-ativa-empresas",
    link: "Entender os caminhos possíveis",
  },
  {
    icon: Building2,
    index: "03",
    title: "Direito empresarial",
    text: "Apoio jurídico em relações societárias, contratos, compliance, questões tributárias e proteção de marca.",
    href: "/direito-empresarial",
    link: "Conhecer a atuação empresarial",
  },
  {
    icon: BadgeCheck,
    index: "04",
    title: "Registro de marca",
    text: "Busca de anterioridade, classe de Nice, depósito no INPI e acompanhamento de exigências e oposições.",
    href: "/registro-de-marca",
    link: "Entender o processo no INPI",
  },
];

const plataformas = [
  {
    icon: ShoppingBag,
    title: "Mercado Livre",
    text: "Conta suspensa, anúncios removidos, reputação atingida ou repasse retido pela plataforma.",
    href: "/conta-bloqueada-mercado-livre",
  },
  {
    icon: Camera,
    title: "Instagram",
    text: "Perfil desativado, perda de acesso por invasão ou restrição em conta profissional.",
    href: "/conta-bloqueada-instagram",
  },
  {
    icon: MessageSquare,
    title: "WhatsApp",
    text: "Número banido ou suspenso, inclusive em contas usadas para atendimento.",
    href: "/conta-bloqueada-whatsapp",
  },
];

const faqs = [
  {
    question: "Quais áreas fazem parte da atuação apresentada no site?",
    answer:
      "Concursos públicos, dívida ativa e execução fiscal para empresas e direito empresarial. Cada frente possui uma página própria.",
  },
  {
    question: "Como começa o atendimento?",
    answer:
      "O primeiro contato pode ser feito pelo formulário ou WhatsApp, com um resumo da situação. A documentação necessária será indicada conforme a área.",
  },
  {
    question: "O contato inicial já define o resultado do caso?",
    answer:
      "Não. Cada situação depende da análise de fatos, documentos, prazos e normas aplicáveis. Não há promessa ou garantia de resultado.",
  },
  {
    question: "Onde encontro informações sobre uma situação específica?",
    answer:
      "Escolha a página da área correspondente. Ela apresenta situações frequentes, método, documentos iniciais e perguntas comuns.",
  },
];

export default function Home() {
  return (
    <main id="topo" className="home-page">
      <section className="home-hero section-edge section-edge--ink">
        <div className="container hero-grid">
          <div className="hero-copy hero-enter">
            <p className="eyebrow">CERES RABELO ADVOCACIA</p>
            <h1>
              <MarkedTitle
                text="Clareza para compreender. Método para decidir o próximo passo."
                mark="Clareza para compreender."
              />
            </h1>
            <p className="hero-lead">
              Atuação em concursos públicos, dívida ativa, execução fiscal e direito empresarial, reunindo advocacia, docência e pesquisa na análise de cada situação.
            </p>
            <div className="hero-actions">
              <CtaButton href="#areas" id="cta-areas-hero" data-cta="areas" data-cta-position="hero">
                Conhecer as áreas
              </CtaButton>
              <CtaButton
                href={whatsappHref(defaultWhatsAppMessage)}
                seal="whatsapp"
                variant="ghost"
                external
                id="cta-whatsapp-hero"
                data-event="whatsapp_click"
                data-cta="whatsapp"
                data-cta-position="hero"
              >
                Entrar em contato
              </CtaButton>
            </div>
          </div>
          <div className="hero-visual hero-enter hero-enter--delay">
            <BrandVisual label="Advocacia · Docência · Pesquisa" />
          </div>
        </div>
      </section>

      <AuthorityTicker />

      <section className="section section--white thesis-section">
        <div className="container thesis-grid">
          <Reveal>
            <p className="editorial-number">01 / POSICIONAMENTO</p>
            <blockquote>“A autoridade aparece quando o conhecimento ajuda alguém a enxergar melhor a própria situação.”</blockquote>
          </Reveal>
          <Reveal delay={100}>
            <div className="thesis-copy">
              <p className="eyebrow">UMA ADVOCACIA QUE EXPLICA</p>
              <h2>Rigor técnico sem transformar o atendimento em distância.</h2>
              <p>
                Ceres Rabelo atua como advogada, professora e autora. Essa combinação orienta uma comunicação clara: reconhecer o contexto, organizar as informações e delimitar o que pode ser examinado.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--paper" id="areas">
        <div className="container">
          <Reveal>
            <div className="section-heading">
              <p className="eyebrow">ESCOLHA PELO SEU CONTEXTO</p>
              <h2>Cada frente tem uma página, com a linguagem do seu público.</h2>
              <p>O site separa as jornadas para que cada visitante encontre rapidamente o conteúdo, o tom e o próximo passo adequados.</p>
            </div>
          </Reveal>
          <div className="area-grid">
            {areas.map((area, index) => {
              const Icon = area.icon;
              return (
                <Reveal key={area.title} delay={index * 80}>
                  <Link className="area-card" href={area.href}>
                    <div className="area-card__top"><Icon size={24} /><span>{area.index}</span></div>
                    <h3>{area.title}</h3>
                    <p>{area.text}</p>
                    <span className="area-card__link">{area.link}<ArrowRight size={17} /></span>
                  </Link>
                </Reveal>
              );
            })}
          </div>

          <div className="platform-block">
            <Reveal>
              <div className="section-heading section-heading--tight">
                <p className="eyebrow">CONTAS BLOQUEADAS EM PLATAFORMAS</p>
                <h3>Quando a conta que sustenta o trabalho sai do ar.</h3>
                <p>Suspensão, desativação e banimento têm efeitos diferentes. Cada plataforma tem a sua página.</p>
              </div>
            </Reveal>
            <div className="platform-grid">
              {plataformas.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Reveal key={item.href} delay={index * 70}>
                    <Link className="platform-card" href={item.href}>
                      <Icon size={22} aria-hidden="true" />
                      <h4>{item.title}</h4>
                      <p>{item.text}</p>
                      <span className="platform-card__link">
                        Ver a página <ArrowRight size={15} aria-hidden="true" />
                      </span>
                    </Link>
                  </Reveal>
                );
              })}
            </div>
          </div>
      </div>
      </section>

      <section className="section section--attention">
        <div className="container story-grid">
          <Reveal><BrandVisual theme="graphite" label="Trajetória · ensino · prática" /></Reveal>
          <Reveal delay={100}>
            <div className="story-copy">
              <p className="eyebrow">QUEM É CERES RABELO</p>
              <h2>Da experiência de candidata à atuação profissional e acadêmica.</h2>
              <p>
                A trajetória de Ceres reúne a vivência de quem estudou para concursos, foi aprovada, ingressou no serviço público e desenvolveu carreira na advocacia e na docência.
              </p>
              <p>
                Essa história cria proximidade com o universo dos concursos e sustenta, nas frentes empresariais, uma atuação orientada por estudo, método e capacidade de explicar.
              </p>
              <ul className="credential-list">
                <li><GraduationCap /> Mestra e doutoranda</li>
                <li><BookOpenText /> Professora e escritora</li>
                <li><Scale /> Advogada</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <InlineCta
        eyebrow="PRIMEIRO CONTATO"
        title="Não sabe qual das três frentes corresponde à sua situação?"
        text="O contato inicial serve justamente para isso: organizar as informações e indicar qual leitura se aplica ao seu caso."
        whatsappMessage={defaultWhatsAppMessage}
        position="meio"
      />

      <section className="section section--ink">
        <div className="container">
          <Reveal>
            <div className="section-heading">
              <p className="eyebrow">COMO FUNCIONA</p>
              <h2>Um processo claro desde o primeiro contato.</h2>
            </div>
          </Reveal>
          <div className="process-grid">
            {[
              ["01", "Conte a situação", "Use o formulário ou WhatsApp para apresentar o contexto e as datas principais."],
              ["02", "Organize as informações", "Você recebe a indicação dos elementos e documentos necessários para situar a demanda."],
              ["03", "Receba o retorno", "Após a análise inicial, os próximos passos possíveis são delimitados com clareza."],
            ].map(([index, title, text], itemIndex) => (
              <Reveal key={index} delay={itemIndex * 80}>
                <article className="process-card"><span>{index}</span><h3>{title}</h3><p>{text}</p></article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--paper">
        <div className="container faq-layout">
          <Reveal>
            <div className="faq-intro">
              <MessageCircleQuestion size={28} />
              <p className="eyebrow">PERGUNTAS INSTITUCIONAIS</p>
              <h2>Antes de escolher uma área</h2>
              <p>Informações gerais para compreender como o site e o primeiro contato foram organizados.</p>
            </div>
          </Reveal>
          <Reveal delay={80}><FaqList items={faqs} /></Reveal>
        </div>
      </section>

      <section className="section contact-section contact-section--home" id="contato">
        <div className="container contact-layout">
          <Reveal><div className="contact-card"><ContactForm source="home" /></div></Reveal>
          <Reveal delay={100}>
            <div className="contact-copy">
              <p className="eyebrow">PRIMEIRO CONTATO</p>
              <h2>Não sabe qual página corresponde à sua situação?</h2>
              <p>Escolha uma área no formulário ou envie um resumo pelo WhatsApp. O contato inicial serve para organizar as informações, não para prometer um resultado.</p>
              <div className="contact-tabs">
                {areas.map((area) => <Link key={area.href} href={area.href}>{area.title}<ArrowRight size={15} /></Link>)}
              </div>
              <CtaButton
                href={whatsappHref(defaultWhatsAppMessage)}
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

      <WhatsAppFloat message={defaultWhatsAppMessage} />
      <JsonLd data={faqPageSchema(faqs)} />
    </main>
  );
}
