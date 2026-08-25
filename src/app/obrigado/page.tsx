import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CalendarClock, CheckCircle2, FileText, MessageSquare } from "lucide-react";
import { ConversionTracker } from "@/app/obrigado/ConversionTracker";
import { CtaButton } from "@/components/CtaButton";
import { defaultWhatsAppMessage, whatsappHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "Mensagem recebida",
  description: "Confirmação de envio do formulário de contato.",
  // Página de conversão não deve aparecer na busca nem competir com as de conteúdo.
  robots: { index: false, follow: false },
};

const steps = [
  {
    icon: FileText,
    title: "Leitura do que você enviou",
    text: "O resumo é lido junto com a área indicada, para situar do que se trata antes de qualquer resposta.",
  },
  {
    icon: MessageSquare,
    title: "Retorno pelo WhatsApp",
    text: "O contato acontece pelo número informado. Se faltar algum dado para entender o caso, ele é pedido nesse momento.",
  },
  {
    icon: CalendarClock,
    title: "Delimitação dos próximos passos",
    text: "Você fica sabendo em que ponto o caso está, quais prazos correm e o que é possível fazer a partir daí.",
  },
];

export default async function ObrigadoPage({
  searchParams,
}: {
  searchParams: Promise<{ area?: string }>;
}) {
  const { area } = await searchParams;

  return (
    <main className="thanks-page home-page">
      <ConversionTracker area={area || "não informada"} />

      <section className="thanks-hero">
        <div className="container thanks-hero__inner">
          <CheckCircle2 size={40} aria-hidden="true" />
          <p className="eyebrow">MENSAGEM RECEBIDA</p>
          <h1>Recebemos as informações. O retorno vem pelo WhatsApp.</h1>
          <p className="thanks-lead">
            {area
              ? `Sua mensagem foi registrada na área de ${area.toLowerCase()}.`
              : "Sua mensagem foi registrada."}{" "}
            Não é necessário reenviar o formulário.
          </p>

          <div className="thanks-actions">
            <CtaButton
              href={whatsappHref(defaultWhatsAppMessage)}
              seal="whatsapp"
              external
              id="cta-whatsapp-obrigado"
              data-event="whatsapp_click"
              data-cta="whatsapp"
              data-cta-position="obrigado"
            >
              Adiantar pelo WhatsApp
            </CtaButton>
            <Link className="thanks-back" href="/">
              <ArrowLeft size={16} aria-hidden="true" />
              Voltar para o início
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--paper">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">O QUE ACONTECE AGORA</p>
            <h2>Três etapas até uma resposta com contexto.</h2>
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
            O canal adequado é indicado no retorno.
          </p>
        </div>
      </section>
    </main>
  );
}
