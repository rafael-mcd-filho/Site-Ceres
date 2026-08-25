import { Route } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/service/SectionHeading";
import { serviceIconMap } from "@/components/service/icon-map";
import type { ServiceCard } from "@/content/services";

type ServicePathsProps = {
  slug: string;
  title: string;
  lead: string;
  items: ServiceCard[];
};

export function ServicePaths({ slug, title, lead, items }: ServicePathsProps) {
  return (
    <section className={`section section--accent service-paths service-paths--${slug}`} id="caminhos">
      <div className="container">
        <Reveal><SectionHeading title={title} lead={lead} /></Reveal>
        <div className="card-grid card-grid--paths">
          {items.map((item, index) => {
            const Icon = serviceIconMap[item.icon] || Route;
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
  );
}
