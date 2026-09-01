import { FileText, Plus } from "lucide-react";
import { EditorialIndex } from "@/components/EditorialIndex";
import { ResponsiveDetails } from "@/components/ResponsiveDetails";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/service/SectionHeading";
import { serviceIconMap } from "@/components/service/icon-map";
import type { ServiceCard } from "@/content/services";

type ServiceSituationsProps = {
  slug: string;
  title: string;
  titleMark?: string;
  lead: string;
  items: ServiceCard[];
};

function NumberedItem({ item, index }: { item: ServiceCard; index: number }) {
  const Icon = serviceIconMap[item.icon] || FileText;

  return (
    <ResponsiveDetails
      className="compact-case compact-case--desktop-expanded"
      groupName="service-cases"
      mobileDefaultOpen={index === 0}
    >
      <summary>
        <span>{String(index + 1).padStart(2, "0")}</span>
        <Icon size={18} aria-hidden="true" />
        <strong>{item.title}</strong>
        <Plus size={17} aria-hidden="true" />
      </summary>
      <p>{item.text}</p>
    </ResponsiveDetails>
  );
}

function DebtStageMap({ items }: { items: ServiceCard[] }) {
  return (
    <div className="debt-stage-map">
      <p className="debt-stage-map__label">COMO A COBRANÇA CHEGOU ATÉ A EMPRESA</p>
      <div className="debt-stage-map__route">
        {items.slice(0, 4).map((item, index) => (
          <NumberedItem key={item.title} item={item} index={index} />
        ))}
      </div>
      <div className="debt-stage-map__branches">
        <p>Outros efeitos que podem aparecer</p>
        {items.slice(4).map((item, index) => (
          <NumberedItem key={item.title} item={item} index={index + 4} />
        ))}
      </div>
    </div>
  );
}

function BrandChapters({ items }: { items: ServiceCard[] }) {
  const chapters = [
    { title: "Antes de fazer o pedido", note: "Nome, disponibilidade e início do uso.", items: [items[0], items[1]] },
    { title: "Marca em circulação", note: "Conflitos e comprovação de titularidade.", items: [items[2], items[5]] },
    { title: "Pedido em andamento", note: "Exigências e oposições com prazo próprio.", items: [items[3], items[4]] },
  ];

  return (
    <div className="brand-chapters">
      {chapters.map((chapter, chapterIndex) => (
        <article key={chapter.title}>
          <header>
            <div><h3>{chapter.title}</h3><p>{chapter.note}</p></div>
          </header>
          <div>
            {chapter.items.map((item, itemIndex) => (
              <NumberedItem key={item.title} item={item} index={chapterIndex * 2 + itemIndex} />
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}

function MarketplaceDossier({ items }: { items: ServiceCard[] }) {
  const groups = [
    { title: "O que a plataforma informou", code: "A", items: [items[0], items[5]] },
    { title: "O que parou na operação", code: "B", items: [items[1], items[3], items[4]] },
    { title: "O que pode ter causado o bloqueio", code: "C", items: [items[2]] },
  ];

  return (
    <div className="evidence-dossier evidence-dossier--marketplace">
      <div className="evidence-dossier__spine"><span>CONTA</span></div>
      {groups.map((group, groupIndex) => {
        const groupStart = groups
          .slice(0, groupIndex)
          .reduce((total, previousGroup) => total + previousGroup.items.length, 0);

        return (
        <section key={group.title}>
          <header><span>{group.code}</span><h3>{group.title}</h3></header>
          {group.items.map((item, itemIndex) => (
            <NumberedItem key={item.title} item={item} index={groupStart + itemIndex} />
          ))}
        </section>
        );
      })}
    </div>
  );
}

function InstagramTriage({ items }: { items: ServiceCard[] }) {
  const groups = [
    { title: "Como o acesso foi perdido", items: [items[0], items[1]] },
    { title: "Qual foi o impacto", items: [items[2], items[4]] },
    { title: "O que ocorreu depois", items: [items[3], items[5]] },
  ];

  return (
    <div className="platform-triage platform-triage--instagram">
      {groups.map((group, groupIndex) => (
        <section key={group.title}>
          <header><h3>{group.title}</h3></header>
          <div>{group.items.map((item, itemIndex) => (
            <NumberedItem key={item.title} item={item} index={groupIndex * 2 + itemIndex} />
          ))}</div>
        </section>
      ))}
    </div>
  );
}

function WhatsAppDecisionTree({ items }: { items: ServiceCard[] }) {
  const levels = [
    { question: "O que apareceu na tela?", items: [items[0], items[1]] },
    { question: "O que foi atingido?", items: [items[2], items[3]] },
    { question: "O que aconteceu depois?", items: [items[4], items[5]] },
  ];

  return (
    <div className="decision-tree decision-tree--whatsapp">
      <div className="decision-tree__start"><span>COMECE AQUI</span><strong>Entenda o que aconteceu</strong></div>
      {levels.map((level, levelIndex) => (
        <section key={level.question}>
          <header><h3>{level.question}</h3></header>
          <div>
            {level.items.map((item, index) => <NumberedItem key={item.title} item={item} index={levelIndex * 2 + index} />)}
          </div>
        </section>
      ))}
    </div>
  );
}

function SituationsContent({ slug, items }: Pick<ServiceSituationsProps, "slug" | "items">) {
  if (slug === "concursos") {
    return <EditorialIndex items={items} variant="contest" panelLabel="O QUE ACONTECEU" />;
  }
  if (slug === "divida-ativa-empresas") return <DebtStageMap items={items} />;
  if (slug === "direito-empresarial") {
    return <EditorialIndex items={items} variant="business" panelLabel="SITUAÇÃO DA EMPRESA" />;
  }
  if (slug === "registro-de-marca") return <BrandChapters items={items} />;
  if (slug === "conta-bloqueada-mercado-livre") return <MarketplaceDossier items={items} />;
  if (slug === "conta-bloqueada-instagram") return <InstagramTriage items={items} />;
  if (slug === "conta-bloqueada-whatsapp") return <WhatsAppDecisionTree items={items} />;
  return <EditorialIndex items={items} variant="contest" panelLabel="LEITURA DO CASO" />;
}

export function ServiceSituations({ slug, title, titleMark, lead, items }: ServiceSituationsProps) {
  return (
    <section className={`section section--paper service-situations service-situations--${slug}`} id="situacoes">
      <div className="container">
        <Reveal><SectionHeading title={title} titleMark={titleMark} lead={lead} /></Reveal>
        <Reveal delay={80} className="service-situations__experience">
          <SituationsContent slug={slug} items={items} />
        </Reveal>
      </div>
    </section>
  );
}
