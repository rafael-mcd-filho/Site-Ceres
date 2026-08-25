import { FileText } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/service/SectionHeading";
import { serviceIconMap } from "@/components/service/icon-map";
import type { ServiceCard } from "@/content/services";

type ServiceSituationsProps = {
  slug: string;
  title: string;
  lead: string;
  items: ServiceCard[];
};

export function ServiceSituations({ slug, title, lead, items }: ServiceSituationsProps) {
  return (
    <section className={`section section--paper service-situations service-situations--${slug}`} id="situacoes">
      <div className="container">
        <Reveal><SectionHeading title={title} lead={lead} /></Reveal>
        <div className="card-grid card-grid--three">
          {items.map((item, index) => {
            const Icon = serviceIconMap[item.icon] || FileText;
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
  );
}
