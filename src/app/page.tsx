import type { Metadata } from "next";
import { ogImageFor } from "@/lib/og";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  FileSearch,
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
  "Advocacia em concursos públicos, dívida ativa e execução fiscal, direito empresarial e registro de marca. Análise de documentos, prazos e caminhos possíveis.";

export const metadata: Metadata = {
  title: "Rabelo e Machado Advocacia | Concursos e Empresarial",
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title: "Rabelo e Machado Advocacia",
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
    text: "Eliminação, nota contestada, TAF, avaliação médica, cotas e heteroidentificação, investigação social, convocação e nomeação.",
    href: "/concursos",
    link: "Conhecer a atuação em concursos",
  },
  {
    icon: FileSearch,
    index: "02",
    title: "Dívida ativa e execução fiscal",
    text: "Cobrança recebida, citação da empresa, bloqueio de conta, penhora, dívida que você não reconhece ou negociação em andamento.",
    href: "/divida-ativa-empresas",
    link: "Entender os caminhos possíveis",
  },
  {
    icon: Building2,
    index: "03",
    title: "Direito empresarial",
    text: "Entrada e saída de sócio, conflito na sociedade, contratos importantes, crescimento da empresa e reorganização do negócio.",
    href: "/direito-empresarial",
    link: "Conhecer a atuação empresarial",
  },
  {
    icon: BadgeCheck,
    index: "04",
    title: "Registro de marca",
    text: "Pesquisa antes de registrar, pedido no INPI, concorrente com nome parecido e contestação apresentada por terceiros.",
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

/** Slug estável para GTM, derivado do href — não há string solta para dessincronizar. */
const ctaSlug = (href: string) => href.replace(/^\//, "") || "home";

const faqs = [
  {
    question: "Quais áreas fazem parte da atuação do escritório?",
    answer:
      "Concursos públicos, dívida ativa e execução fiscal para empresas, direito empresarial, registro de marca e contas bloqueadas em plataformas como Mercado Livre, Instagram e WhatsApp. Cada área tem uma página com as situações mais frequentes e o método de análise.",
  },
  {
    question: "Não sei em qual área meu caso se encaixa. Posso entrar em contato mesmo assim?",
    answer:
      "Pode. Conte o que aconteceu com suas palavras, sem se preocupar com o nome jurídico da situação — identificar a área é justamente parte do trabalho. O formulário tem a opção “Não sei qual área escolher”.",
  },
  {
    question: "Como começa o atendimento?",
    answer:
      "O primeiro contato pode ser feito pelo formulário ou WhatsApp, com um resumo da situação. A documentação necessária será indicada conforme a área.",
  },
  {
    question: "O contato inicial já define o resultado do caso?",
    answer:
      "Não. Cada caso depende dos fatos, dos documentos, dos prazos e das normas aplicáveis. O retorno inicial diz em que ponto o caso está e o que é possível fazer, sem antecipar desfecho.",
  },
  {
    question: "Preciso enviar documentos logo no primeiro contato?",
    answer:
      "Não. Comece por um resumo do que aconteceu e pelas datas principais. Evite anexar documentos ou dados sensíveis em canais abertos: o escritório indica o meio adequado no retorno.",
  },
  {
    question: "Como funcionam os honorários?",
    answer:
      "Os valores não são divulgados no site, conforme o Provimento 205/2021 da OAB. Os honorários são apresentados individualmente, por escrito, depois da análise inicial e antes de qualquer trabalho começar.",
  },
];

export default function Home() {
  return (
    <main id="topo" className="home-page">
      <section className="home-hero section-edge section-edge--ink">
        <div className="container hero-grid">
          <div className="hero-copy hero-enter">
            <p className="eyebrow">RABELO E MACHADO ADVOCACIA</p>
            <h1>
              <MarkedTitle
                text="Clareza para compreender. Método para decidir o próximo passo."
                mark="Clareza para compreender."
              />
            </h1>
            <p className="hero-lead">
              Concursos públicos, dívida ativa e execução fiscal, direito empresarial, registro de marca e contas bloqueadas em plataformas digitais. Cada caso começa pela leitura dos documentos, dos prazos e do que já aconteceu.
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
                Falar pelo WhatsApp
              </CtaButton>
            </div>
          </div>
          <div className="hero-visual hero-enter hero-enter--delay">
            <BrandVisual label="Escritório · Método · Contexto" />
          </div>
        </div>
      </section>

      <AuthorityTicker />

      <section className="section section--paper" id="areas">
        <div className="container">
          <Reveal>
            <div className="section-heading">
              <p className="eyebrow">ÁREAS DE ATUAÇÃO</p>
              <h2>Cada atuação começa pela leitura da sua situação.</h2>
              <p>Escolha a área que corresponde ao seu contexto. Você encontra os cenários mais frequentes, o método de análise e o que reunir para o primeiro contato.</p>
            </div>
          </Reveal>
          <div className="area-grid">
            {areas.map((area, index) => {
              const Icon = area.icon;
              return (
                <Reveal key={area.title} delay={index * 80}>
                  <Link
                    className="area-card"
                    href={area.href}
                    id={`cta-area-${ctaSlug(area.href)}`}
                    data-event="area_select"
                    data-cta="area-card"
                    data-cta-position="areas"
                  >
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
                <p>Suspensão, desativação e banimento têm efeitos diferentes. Cada plataforma tem o próprio contexto, e o motivo do bloqueio muda o caminho da análise.</p>
              </div>
            </Reveal>
            <div className="platform-grid">
              {plataformas.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Reveal key={item.href} delay={index * 70}>
                    <Link
                      className="platform-card"
                      href={item.href}
                      id={`cta-plataforma-${ctaSlug(item.href)}`}
                      data-event="area_select"
                      data-cta="platform-card"
                      data-cta-position="plataformas"
                    >
                      <Icon size={22} aria-hidden="true" />
                      <h4>{item.title}</h4>
                      <p>{item.text}</p>
                      <span className="platform-card__link">
                        Ver detalhes <ArrowRight size={15} aria-hidden="true" />
                      </span>
                    </Link>
                  </Reveal>
                );
              })}
            </div>
          </div>
      </div>
      </section>

      <section className="section section--white thesis-section">
        <div className="container thesis-grid">
          <Reveal>
            <div>
              <p className="editorial-number">01<small>Posicionamento</small></p>
              <blockquote>A autoridade aparece quando o conhecimento ajuda alguém a enxergar melhor o próprio caso.</blockquote>
              <p className="thesis-source">Princípio que orienta o trabalho do escritório</p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="thesis-copy">
              <p className="eyebrow">UMA ADVOCACIA QUE EXPLICA</p>
              <h2>Rigor técnico sem transformar o atendimento em distância.</h2>
              <p>
                Quem procura um advogado costuma chegar com pressa e com informação solta. O trabalho começa por reunir esses pedaços, verificar o que os documentos sustentam e explicar em que ponto o caso está.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--attention story-section">
        <div className="container story-grid">
          <Reveal><BrandVisual theme="graphite" label="Escritório · método · contexto" /></Reveal>
          <Reveal delay={100}>
            <div className="story-copy">
              <p className="eyebrow">SOBRE O ESCRITÓRIO</p>
              <h2>Um escritório organizado para explicar antes de agir.</h2>
              <p>
                O Rabelo e Machado Advocacia atua em concursos públicos, dívida ativa e execução fiscal, direito empresarial, registro de marca e contas bloqueadas em plataformas, com um método que começa pela leitura dos fatos, dos documentos e dos prazos aplicáveis.
              </p>
              <ol className="pillar-list">
                <li>
                  <span aria-hidden="true">01</span>
                  <div>
                    <h3>Leitura antes da medida</h3>
                    <p>Nenhuma providência é sugerida antes de ler os documentos e conferir os prazos que já correm.</p>
                  </div>
                </li>
                <li>
                  <span aria-hidden="true">02</span>
                  <div>
                    <h3>Escopo por escrito</h3>
                    <p>Você sabe desde o início o que o escritório vai fazer, até onde vai e o que não está incluído.</p>
                  </div>
                </li>
                <li>
                  <span aria-hidden="true">03</span>
                  <div>
                    <h3>Explicação em português</h3>
                    <p>Cada termo técnico vem acompanhado do que ele significa na prática para o seu caso.</p>
                  </div>
                </li>
              </ol>
            </div>
          </Reveal>
        </div>
      </section>

      <InlineCta
        eyebrow="COMECE POR AQUI"
        title="Comece contando o que já aconteceu."
        text="Reúna as datas e os documentos que tiver em mãos. Com esse ponto de partida, o escritório já consegue indicar o que verificar em seguida."
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
              ["01", "Conte o que aconteceu", "Pelo formulário ou WhatsApp, com as datas principais e o que você já tem em mãos."],
              ["02", "Reúna os documentos", "O escritório indica exatamente quais papéis importam e por qual canal enviá-los com segurança."],
              ["03", "Receba o retorno", "Você fica sabendo em que ponto o caso está, quais prazos correm e o que é possível fazer."],
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
              <h2>Antes do primeiro contato</h2>
              <p>Informações gerais sobre como o escritório recebe cada situação e como o primeiro contato é organizado.</p>
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
              <h2>Não sabe qual atuação se aplica ao seu caso?</h2>
              <p>Conte brevemente o que aconteceu ou escolha uma das áreas abaixo. Essas informações ajudam a organizar o primeiro contato e a direcionar o atendimento.</p>
              <div className="contact-tabs">
                {areas.map((area) => (
                  <Link
                    key={area.href}
                    href={area.href}
                    id={`cta-contato-area-${ctaSlug(area.href)}`}
                    data-event="area_select"
                    data-cta="contact-tab"
                    data-cta-position="contato"
                  >
                    {area.title}<ArrowRight size={15} />
                  </Link>
                ))}
              </div>
              <CtaButton
                href={whatsappHref(defaultWhatsAppMessage)}
                seal="whatsapp"
                variant="light"
                external
                className="contact-copy__cta"
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
      </section>

      <WhatsAppFloat message={defaultWhatsAppMessage} />
      <JsonLd data={faqPageSchema(faqs)} />
    </main>
  );
}
