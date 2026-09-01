import { AuthorityTicker } from "@/components/AuthorityTicker";
import { InlineCta } from "@/components/InlineCta";
import { JsonLd } from "@/components/JsonLd";
import { ServiceFaq } from "@/components/service/ServiceFaq";
import { ServiceHero } from "@/components/service/ServiceHero";
import { ServicePageShell } from "@/components/service/ServicePageShell";
import { ServicePaths } from "@/components/service/ServicePaths";
import { ServiceReading } from "@/components/service/ServiceReading";
import { ServiceSituations } from "@/components/service/ServiceSituations";
import { ServiceStart } from "@/components/service/ServiceStart";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import type { ServiceConfig } from "@/content/services";
import { whatsappMessageWithSource } from "@/lib/site";
import { breadcrumbSchema, faqPageSchema, serviceSchema } from "@/lib/structured-data";

/**
 * Composição padrão das seis seções, na ordem das perguntas que o visitante
 * faz: onde estou (hero), isso é o meu caso (situações), vocês entendem isso
 * (leitura), o que pode ser feito (caminhos), e se… (dúvidas), como começo
 * (começar). Serve as páginas que não precisam de nada fora do padrão.
 *
 * Uma página que precisar de algo diferente numa seção específica (um
 * carrossel, um gráfico) não edita este arquivo: monta o próprio `page.tsx`
 * com `ServicePageShell` + as seções de `@/components/service/*` que quiser
 * reaproveitar, substituindo só a que for diferente. Ver AGENTS.md do projeto.
 */
export function ServicePage({ config }: { config: ServiceConfig }) {
  const messageAt = (position: string) =>
    whatsappMessageWithSource(
      config.whatsappMessage,
      `página de ${config.serviceName}, ${position}`,
    );

  return (
    <ServicePageShell slug={config.slug} theme={config.theme}>
      <ServiceHero
        slug={config.slug}
        eyebrow={config.eyebrow}
        title={config.title}
        titleMark={config.titleMark}
        lead={config.lead}
        primaryCta={config.primaryCta}
        whatsappCta={config.whatsappCta}
        heroNote={config.heroNote}
        heroTags={config.heroTags}
        whatsappMessage={messageAt("botão do início")}
      />

      <AuthorityTicker context={config.slug === "concursos" ? "concursos" : "geral"} />

      <ServiceSituations
        slug={config.slug}
        title={config.situationsTitle}
        titleMark={config.sectionMarks.situations}
        lead={config.situationsLead}
        items={config.situations}
      />

      <ServiceReading
        slug={config.slug}
        mechanismEyebrow={config.mechanismEyebrow}
        mechanismTitle={config.mechanismTitle}
        mechanismTitleMark={config.sectionMarks.mechanism}
        mechanismText={config.mechanismText}
        mechanismNote={config.mechanismNote}
        mechanismItems={config.mechanismItems}
        timelineTitle={config.timelineTitle}
        timelineLead={config.timelineLead}
        timeline={config.timeline}
      />

      <ServicePaths
        slug={config.slug}
        title={config.pathsTitle}
        titleMark={config.sectionMarks.paths}
        lead={config.pathsLead}
        items={config.paths}
      />

      <InlineCta
        eyebrow="PRÓXIMO PASSO"
        title={config.inlineCtaTitle}
        titleMark={config.sectionMarks.inlineCta}
        text={config.inlineCtaText}
        primaryLabel={config.inlineCtaLabel}
        whatsappLabel={config.whatsappCta}
        whatsappMessage={messageAt("chamada no meio da página")}
        position="meio"
      />

      <ServiceFaq items={config.faq} />

      <ServiceStart
        slug={config.slug}
        contactTitle={config.contactTitle}
        contactTitleMark={config.sectionMarks.contact}
        contactLead={config.contactLead}
        processTitle={config.processTitle}
        process={config.process}
        formArea={config.formArea}
        formPlatform={config.formPlatform}
        documentsTitle={config.documentsTitle}
        documents={config.documents}
        documentsLead={config.documentsLead}
        trustNote={config.trustNote}
        whatsappMessage={messageAt("seção final de contato")}
        finalCta={config.finalCta}
      />

      <WhatsAppFloat
        message={messageAt("botão flutuante durante a leitura")}
        label={config.whatsappCta}
      />
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
    </ServicePageShell>
  );
}
