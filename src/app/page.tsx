import type { Metadata } from "next";
import { ogImageFor } from "@/lib/og";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  MessageCircleQuestion,
} from "lucide-react";
import { AuthorityTicker } from "@/components/AuthorityTicker";
import { ContactForm } from "@/components/ContactForm";
import { CtaButton } from "@/components/CtaButton";
import { FaqList } from "@/components/FaqList";
import { HomePracticeDirectory } from "@/components/HomePracticeDirectory";
import { InlineCta } from "@/components/InlineCta";
import { JsonLd } from "@/components/JsonLd";
import { MarkedTitle } from "@/components/MarkedTitle";
import { Reveal } from "@/components/Reveal";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import {
  defaultWhatsAppMessage,
  whatsappHref,
  whatsappMessageWithSource,
} from "@/lib/site";
import { faqPageSchema } from "@/lib/structured-data";

const description =
  "Advocacia para quem precisa entender um problema no concurso, na empresa, na marca ou em uma conta bloqueada e avaliar o próximo passo com segurança.";

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
    iconSrc: "/images/ceres/icon-concursos.webp",
    index: "01",
    title: "Concursos públicos",
    text: "Você se preparou para a vaga, mas uma eliminação, nota, avaliação ou decisão da banca colocou a aprovação em risco.",
    href: "/concursos",
    link: "Conhecer a atuação em concursos",
  },
  {
    iconSrc: "/images/ceres/icon-divida-ativa.webp",
    index: "02",
    title: "Dívida ativa e execução fiscal",
    text: "Uma cobrança apareceu no CNPJ, a empresa foi citada ou o problema já começou a afetar contas, bens e certidões.",
    href: "/divida-ativa-empresas",
    link: "Entender os caminhos possíveis",
  },
  {
    iconSrc: "/images/ceres/icon-empresarial.webp",
    index: "03",
    title: "Direito empresarial",
    text: "A empresa cresceu, uma decisão importante se aproxima ou os contratos e acordos já não acompanham a operação.",
    href: "/direito-empresarial",
    link: "Conhecer a atuação empresarial",
  },
  {
    iconSrc: "/images/ceres/icon-marca.webp",
    index: "04",
    title: "Registro de marca",
    text: "Você quer lançar um nome, proteger uma marca que já usa ou responder a um conflito ou exigência no INPI.",
    href: "/registro-de-marca",
    link: "Entender o processo no INPI",
  },
];

const plataformas = [
  {
    iconSrc: "/images/ceres/platform-mercado-livre.svg",
    platform: "mercado-livre",
    cardWidth: 76,
    title: "Mercado Livre",
    text: "A conta foi suspensa, as vendas pararam ou valores de pedidos concluídos ficaram retidos.",
    href: "/conta-bloqueada-mercado-livre",
  },
  {
    iconSrc: "/images/ceres/platform-instagram.svg",
    platform: "instagram",
    cardWidth: 54,
    title: "Instagram",
    text: "O perfil saiu do ar, foi invadido ou deixou uma operação sem audiência, campanhas e contato com clientes.",
    href: "/conta-bloqueada-instagram",
  },
  {
    iconSrc: "/images/ceres/platform-whatsapp.svg",
    platform: "whatsapp",
    cardWidth: 58,
    title: "WhatsApp",
    text: "O número foi banido ou suspenso e o atendimento aos clientes foi interrompido de uma hora para outra.",
    href: "/conta-bloqueada-whatsapp",
  },
];

/** Slug estável para GTM, derivado do href — não há string solta para dessincronizar. */
const ctaSlug = (href: string) => href.replace(/^\//, "") || "home";

const homeWhatsAppMessage = (position: string) =>
  whatsappMessageWithSource(defaultWhatsAppMessage, `página inicial, ${position}`);

const faqs = [
  {
    question: "Que tipos de situação o escritório atende?",
    answer:
      "O escritório atua em concursos públicos, dívida ativa e execução fiscal para empresas, direito empresarial, registro de marca e contas bloqueadas no Mercado Livre, Instagram e WhatsApp. Em cada página, você encontra exemplos práticos para identificar a área mais próxima do seu caso.",
  },
  {
    question: "Não sei em qual área meu caso se encaixa. Posso entrar em contato mesmo assim?",
    answer:
      "Pode. Conte o que aconteceu com suas palavras, sem se preocupar com o nome jurídico da situação. Identificar a área faz parte do primeiro atendimento. O formulário tem a opção \"Não sei qual área escolher\".",
  },
  {
    question: "O que preciso contar na primeira mensagem?",
    answer:
      "Conte o que aconteceu, quando aconteceu e o que mais preocupa você agora. O contato pode ser feito pelo formulário ou WhatsApp. Depois desse resumo, o escritório indica quais documentos podem ajudar.",
  },
  {
    question: "Vocês conseguem dizer o que fazer já na primeira mensagem?",
    answer:
      "A primeira mensagem ajuda a identificar o assunto e o que precisa ser analisado. Uma orientação responsável depende dos fatos, dos documentos e dos prazos. Por isso o escritório não antecipa resultado sem compreender o caso.",
  },
  {
    question: "Preciso enviar documentos logo no primeiro contato?",
    answer:
      "Não. Comece por um resumo do que aconteceu e pelas datas principais. Evite anexar documentos ou dados sensíveis em canais abertos: o escritório indica o meio adequado no retorno.",
  },
  {
    question: "Como funciona o atendimento e quando recebo retorno?",
    answer:
      "O atendimento pode ser online, para todo o Brasil, ou presencial em Princesa Isabel/PB. O escritório atende em horário comercial, de segunda a sexta-feira, e o retorno inicial acontece, em média, em 24 horas.",
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
                text="Entenda o problema antes de decidir o próximo passo."
                mark="Entenda o problema"
              />
            </h1>
            <p className="hero-lead">
              Uma decisão no concurso, uma cobrança contra a empresa, um conflito entre sócios, uma marca sem registro ou uma conta bloqueada. Quando algo assim acontece, você não precisa saber o nome jurídico do problema para começar a buscar orientação.
            </p>
            <div className="hero-actions">
              <CtaButton href="#areas" id="cta-areas-hero" data-cta="areas" data-cta-position="hero">
                Conhecer as áreas
              </CtaButton>
              <CtaButton
                href={whatsappHref(homeWhatsAppMessage("botão do início"))}
                seal="whatsapp"
                variant="ghost"
                external
                id="cta-whatsapp-hero"
                data-event="whatsapp_click"
                data-cta="whatsapp"
                data-cta-position="hero"
              >
                Contar minha situação pelo WhatsApp
              </CtaButton>
            </div>
          </div>
          <div className="hero-visual hero-enter hero-enter--delay">
            <figure className="home-hero-image">
              <Image
                src="/images/ceres/home-hero-v3.png"
                alt="Documentos, calculadora e computador organizados sobre uma mesa"
                fill
                preload
                sizes="(max-width: 760px) calc(100vw - 30px), (max-width: 1200px) 38vw, 500px"
              />
              <figcaption>Documentos · contexto · próximo passo</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <AuthorityTicker />

      <section className="section section--paper" id="areas">
        <div className="container">
          <Reveal>
            <div className="section-heading">
              <p className="eyebrow">ÁREAS DE ATUAÇÃO</p>
              <h2>
                <MarkedTitle
                  text="Cada caso começa com uma análise cuidadosa do que aconteceu."
                  mark="análise cuidadosa"
                />
              </h2>
              <p>Escolha abaixo a situação mais próxima da sua. Em cada página, você encontra os problemas mais comuns, o que merece atenção e como dar o primeiro passo.</p>
            </div>
          </Reveal>
          <Reveal delay={70}>
            <HomePracticeDirectory areas={areas} platforms={plataformas} mode="areas" />
          </Reveal>
          <div className="platform-block">
            <Reveal>
              <div className="section-heading section-heading--tight">
                <p className="eyebrow">CONTAS BLOQUEADAS EM PLATAFORMAS</p>
                <h3>
                  <MarkedTitle
                    text="Quando uma conta para, parte do trabalho pode parar junto."
                    mark="parte do trabalho pode parar junto"
                  />
                </h3>
                <p>Para quem vende, anuncia ou atende por uma plataforma, perder o acesso pode interromper pedidos, campanhas, repasses e conversas com clientes. O primeiro passo é entender como o bloqueio aconteceu e o que ficou registrado.</p>
              </div>
            </Reveal>
            <Reveal delay={70}>
              <HomePracticeDirectory areas={areas} platforms={plataformas} mode="platforms" />
            </Reveal>
          </div>
      </div>
      </section>

      <section className="section section--white thesis-section">
        <div className="container thesis-grid">
          <Reveal>
            <div>
              <p className="editorial-number">01<small>Posicionamento</small></p>
              <blockquote>Você não precisa chegar ao primeiro contato sabendo qual medida pedir. Primeiro, o escritório entende o que aconteceu e o que os documentos mostram.</blockquote>
              <p className="thesis-source">Princípio que orienta o trabalho do escritório</p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="thesis-copy">
              <p className="eyebrow">UMA ADVOCACIA QUE EXPLICA</p>
              <h2>
                <MarkedTitle
                  text="Você entende o problema antes de decidir o que fazer."
                  mark="entende o problema"
                />
              </h2>
              <p>
                É comum chegar ao primeiro contato com uma mensagem recebida, algumas datas e muitas dúvidas. O escritório organiza essas informações, explica o que elas significam para o seu caso e apresenta as alternativas que podem ser avaliadas.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--attention story-section">
        <div className="container story-grid">
          <Reveal>
            <figure className="office-photo">
              <Image
                src="/images/ceres/office-consultation-v2.webp"
                alt="Advogada em atendimento, ouvindo a cliente e analisando documentos"
                fill
                sizes="(max-width: 760px) calc(100vw - 30px), 420px"
              />
              <figcaption><span>Ambiente profissional</span>Escuta, organização e contexto.</figcaption>
            </figure>
          </Reveal>
          <Reveal delay={100}>
            <div className="story-copy">
              <p className="eyebrow">SOBRE O ESCRITÓRIO</p>
              <h2>
                <MarkedTitle
                  text="Atendimento jurídico para quem precisa de clareza para decidir."
                  mark="clareza para decidir"
                />
              </h2>
              <p>
                O Rabelo e Machado Advocacia atua em concursos públicos, dívida ativa e execução fiscal, direito empresarial, registro de marca e contas bloqueadas em plataformas. Quem procura o escritório recebe uma explicação sobre os documentos, os prazos e o que pode ser feito a partir deles.
              </p>
              <p>
                A análise é realizada pelo escritório. O atendimento pode acontecer online, para clientes de todo o Brasil, ou presencialmente em Princesa Isabel/PB. Em horário comercial, de segunda a sexta-feira, a expectativa de retorno inicial é, em média, de 24 horas.
              </p>
              <ol className="pillar-list">
                <li>
                  <span aria-hidden="true">01</span>
                  <div>
                    <h3>Entender antes de agir</h3>
                    <p>Primeiro o escritório entende o que aconteceu. Depois explica o que pode ser feito e por quê.</p>
                  </div>
                </li>
                <li>
                  <span aria-hidden="true">02</span>
                  <div>
                    <h3>Combinados claros</h3>
                    <p>Você recebe por escrito o que será feito, quais são os limites do trabalho e quais serão os próximos passos.</p>
                  </div>
                </li>
                <li>
                  <span aria-hidden="true">03</span>
                  <div>
                    <h3>Explicação sem juridiquês</h3>
                    <p>Quando um termo técnico é necessário, ele vem acompanhado do que significa na prática para a sua situação.</p>
                  </div>
                </li>
              </ol>
            </div>
          </Reveal>
        </div>
      </section>

      <InlineCta
        eyebrow="COMECE POR AQUI"
        title="Você não precisa organizar tudo sozinho para fazer o primeiro contato."
        titleMark="fazer o primeiro contato"
        text="Conte com suas palavras o que aconteceu e informe as datas de que se lembrar. No retorno, o escritório orienta quais documentos realmente importam para começar a análise."
        primaryLabel="Quero saber por onde começar"
        whatsappLabel="Explicar minha situação pelo WhatsApp"
        whatsappMessage={homeWhatsAppMessage("chamada no meio da página")}
        position="meio"
      />

      <section className="section section--ink">
        <div className="container">
          <Reveal>
            <div className="section-heading">
              <p className="eyebrow">COMO FUNCIONA</p>
              <h2>
                <MarkedTitle
                  text="O primeiro contato é simples."
                  mark="primeiro contato"
                />
              </h2>
            </div>
          </Reveal>
          <ol className="home-process-flow">
            {[
              ["01", "Conte o que aconteceu", "Use o formulário ou o WhatsApp. Não é necessário saber o nome jurídico do problema."],
              ["02", "Saiba o que reunir", "O escritório indica quais documentos e datas ajudam a compreender a sua situação."],
              ["03", "Entenda os próximos passos", "Você recebe um retorno sobre o que precisa ser analisado e quais caminhos podem ser considerados."],
            ].map(([index, title, text], itemIndex) => (
              <Reveal key={index} delay={itemIndex * 80}>
                <li><span>{index}</span><div><h3>{title}</h3><p>{text}</p></div></li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section--paper">
        <div className="container faq-layout">
          <Reveal>
            <div className="faq-intro">
              <MessageCircleQuestion size={28} />
              <p className="eyebrow">PERGUNTAS INSTITUCIONAIS</p>
              <h2>Dúvidas antes de contar o seu caso</h2>
              <p>Respostas diretas sobre o primeiro contato, os documentos e a forma de trabalho do escritório.</p>
            </div>
          </Reveal>
          <Reveal delay={80}><FaqList items={faqs} /></Reveal>
        </div>
      </section>

      <section className="section contact-section contact-section--home" id="contato">
        <div className="container contact-layout">
          <Reveal>
            <div className="contact-copy">
              <p className="eyebrow">PRIMEIRO CONTATO</p>
              <h2>
                <MarkedTitle
                  text="Não sabe qual atuação se aplica ao seu caso?"
                  mark="qual atuação"
                />
              </h2>
              <p>Conte o que aconteceu com suas palavras ou escolha a área mais próxima do seu problema. O escritório identifica o assunto e orienta o que precisa ser analisado primeiro.</p>
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
                href={whatsappHref(homeWhatsAppMessage("seção final de contato"))}
                seal="whatsapp"
                variant="light"
                external
                className="contact-copy__cta"
                id="cta-whatsapp-final"
                data-event="whatsapp_click"
                data-cta="whatsapp"
                data-cta-position="final"
              >
                Contar minha situação pelo WhatsApp
              </CtaButton>
            </div>
          </Reveal>
          <Reveal delay={100}><div className="contact-card"><ContactForm source="home" /></div></Reveal>
        </div>
      </section>

      <WhatsAppFloat
        message={homeWhatsAppMessage("botão flutuante durante a leitura")}
        label="Contar minha situação"
      />
      <JsonLd data={faqPageSchema(faqs)} />
    </main>
  );
}
