import { FileText, Plus } from "lucide-react";
import { ResponsiveDetails } from "@/components/ResponsiveDetails";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/service/SectionHeading";
import { serviceIconMap } from "@/components/service/icon-map";
import type { ServiceCard } from "@/content/services";

type ServicePathsProps = {
  slug: string;
  title: string;
  titleMark?: string;
  lead: string;
  items: ServiceCard[];
};

function FlowStep({ item, index, label }: { item: ServiceCard; index: number; label: string }) {
  return (
    <article className="path-flow__step">
      <div className="path-flow__meta"><span>0{index + 1}</span><small>{label}</small></div>
      <h3>{item.title}</h3>
      <p>{item.text}</p>
    </article>
  );
}

function DecisionFlow({ slug, items }: { slug: string; items: ServiceCard[] }) {
  const labels = slug === "concursos"
    ? ["ENTENDER O QUE ACONTECEU", "PEDIR REVISÃO À BANCA", "AVALIAR A JUSTIÇA"]
    : slug === "divida-ativa-empresas"
      ? ["CONFERIR O QUE ESTÁ SENDO COBRADO", "COMPARAR FORMAS DE REGULARIZAR", "VERIFICAR O QUE PODE SER QUESTIONADO"]
      : ["ENTENDER O BLOQUEIO", "TENTAR PELOS CANAIS DA PLATAFORMA", "AVALIAR OUTRO CAMINHO"];

  return (
    <div className={`path-flow path-flow--${slug}`}>
      <div className="path-flow__origin">
        <FlowStep item={items[0]} index={0} label={labels[0]} />
      </div>
      <div className="path-flow__connector" aria-hidden="true"><span>depois</span></div>
      <div className="path-flow__branches">
        {items.slice(1).map((item, index) => (
          <FlowStep key={item.title} item={item} index={index + 1} label={labels[index + 1]} />
        ))}
      </div>
    </div>
  );
}

function LedgerItem({ item, index }: { item: ServiceCard; index: number }) {
  const Icon = serviceIconMap[item.icon] || FileText;
  return (
    <ResponsiveDetails
      className="service-ledger__item service-ledger__item--desktop-expanded"
      groupName="service-ledger"
      mobileDefaultOpen={index === 0}
    >
      <summary>
        <span>{String(index + 1).padStart(2, "0")}</span>
        <Icon size={19} aria-hidden="true" />
        <h3>{item.title}</h3>
        <Plus size={17} aria-hidden="true" />
      </summary>
      <p>{item.text}</p>
    </ResponsiveDetails>
  );
}

function BusinessLedger({ items }: { items: ServiceCard[] }) {
  return (
    <div className="service-ledger service-ledger--business">
      <div className="service-ledger__legend"><span>ÁREA</span><span>O QUE ORGANIZA</span></div>
      {items.map((item, index) => <LedgerItem key={item.title} item={item} index={index} />)}
    </div>
  );
}

function BrandWorkChapters({ items }: { items: ServiceCard[] }) {
  const chapters = [
    { title: "Preparar", note: "Antes do pedido", items: items.slice(0, 2) },
    { title: "Acompanhar", note: "Durante o processo", items: items.slice(2, 4) },
    { title: "Proteger", note: "Depois e em conflitos", items: items.slice(4, 6) },
  ];

  return (
    <div className="brand-work-chapters">
      {chapters.map((chapter, chapterIndex) => (
        <section key={chapter.title}>
          <header><div><h3>{chapter.title}</h3><p>{chapter.note}</p></div></header>
          <div>
            {chapter.items.map((item, index) => (
              <LedgerItem key={item.title} item={item} index={chapterIndex * 2 + index} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

function PathsContent({ slug, items }: Pick<ServicePathsProps, "slug" | "items">) {
  if (slug === "direito-empresarial") return <BusinessLedger items={items} />;
  if (slug === "registro-de-marca") return <BrandWorkChapters items={items} />;
  return <DecisionFlow slug={slug} items={items} />;
}

export function ServicePaths({ slug, title, titleMark, lead, items }: ServicePathsProps) {
  return (
    <section className={`section section--accent service-paths service-paths--${slug}`} id="caminhos">
      <div className="container">
        <Reveal><SectionHeading title={title} titleMark={titleMark} lead={lead} /></Reveal>
        <Reveal delay={80} className="service-paths__experience">
          <PathsContent slug={slug} items={items} />
        </Reveal>
      </div>
    </section>
  );
}
