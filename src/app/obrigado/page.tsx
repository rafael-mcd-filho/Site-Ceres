import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CalendarClock, FileText, MessageSquare } from "lucide-react";
import { ConversionTracker } from "@/app/obrigado/ConversionTracker";
import { CtaButton } from "@/components/CtaButton";
import { MarkedTitle } from "@/components/MarkedTitle";
import {
  defaultWhatsAppMessage,
  whatsappHref,
  whatsappMessageWithSource,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Mensagem recebida",
  description: "Confirmação de envio do formulário de contato.",
  // Página de conversão não deve aparecer na busca nem competir com as de conteúdo.
  robots: { index: false, follow: false },
};

const steps = [
  {
    icon: FileText,
    title: "Entender o que você enviou",
    text: "O escritório confere o seu resumo e a área indicada para identificar o assunto e o que pode faltar para compreender a situação.",
  },
  {
    icon: MessageSquare,
    title: "Retorno pelo WhatsApp",
    text: "O contato acontece pelo número informado, em média, em 24 horas. Se faltar algum dado para entender o caso, ele é pedido nesse momento.",
  },
  {
    icon: CalendarClock,
    title: "Orientação sobre o próximo passo",
    text: "O retorno indica quais informações ou documentos são necessários e como a análise pode continuar.",
  },
];

export default async function ObrigadoPage({
  searchParams,
}: {
  searchParams: Promise<{ area?: string; plataforma?: string }>;
}) {
  const { area, plataforma } = await searchParams;
  const conversionContext = plataforma || area || "não informada";
  const followUpMessage = whatsappMessageWithSource(
    defaultWhatsAppMessage,
    `página de confirmação após formulário sobre ${conversionContext}`,
  );

  return (
    <main id="topo" className="thanks-page home-page">
      <ConversionTracker area={conversionContext} />

      <section className="thanks-hero">
        <div className="container thanks-hero__inner">
          <div className="thanks-hero__copy">
            <p className="eyebrow">MENSAGEM RECEBIDA</p>
            <h1>
              <MarkedTitle
                text="Sua mensagem chegou. O retorno será feito pelo WhatsApp."
                mark="retorno será feito pelo WhatsApp"
              />
            </h1>
            <p className="thanks-lead">
              {plataforma
                ? `Sua mensagem sobre ${plataforma} foi registrada.`
                : area
                  ? `Sua mensagem foi registrada na área de ${area.toLowerCase()}.`
                : "Sua mensagem foi registrada."}{" "}
              Não é necessário reenviar o formulário.
            </p>

            <div className="thanks-actions">
              <CtaButton
                href={whatsappHref(followUpMessage)}
                seal="whatsapp"
                external
                id="cta-whatsapp-obrigado"
                data-event="whatsapp_click"
                data-cta="whatsapp"
                data-cta-position="obrigado"
              >
                Complementar pelo WhatsApp
              </CtaButton>
              <Link className="thanks-back" href="/">
                <ArrowLeft size={16} aria-hidden="true" />
                Voltar para o início
              </Link>
            </div>
          </div>

          <figure className="thanks-hero__visual" aria-hidden="true">
            <Image src="/images/ceres/confirmation.webp" alt="" fill sizes="(max-width: 760px) 240px, 330px" />
          </figure>
        </div>
      </section>

      <section className="section section--paper">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">O QUE ACONTECE AGORA</p>
            <h2>
              <MarkedTitle
                text="O que acontece depois que a mensagem é enviada?"
                mark="depois que a mensagem é enviada"
              />
            </h2>
          </div>

          <div className="thanks-steps">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <article className="thanks-step" key={step.title}>
                  <Icon size={22} aria-hidden="true" />
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              );
            })}
          </div>

          <p className="thanks-note">
            Enquanto isso, evite enviar documentos ou dados sensíveis por canais abertos.
            O canal adequado é indicado no retorno. Se houver prazo em curso, informe isso
            pelo WhatsApp. O envio da mensagem não suspende prazos nem formaliza a contratação.
          </p>
        </div>
      </section>
    </main>
  );
}
