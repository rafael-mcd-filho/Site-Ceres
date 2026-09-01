import { Reveal } from "@/components/Reveal";
import { MarkedTitle } from "@/components/MarkedTitle";
import { ServiceMechanismVisual } from "@/components/ServiceVisuals";

type ServiceReadingProps = {
  slug: string;
  mechanismEyebrow: string;
  mechanismTitle: string;
  mechanismTitleMark?: string;
  mechanismText: string;
  mechanismNote?: string;
  mechanismItems?: string[];
  timelineTitle: string;
  timelineLead: string;
  timeline: string[];
};

export function ServiceReading({
  slug,
  mechanismEyebrow,
  mechanismTitle,
  mechanismTitleMark,
  mechanismText,
  mechanismNote,
  mechanismItems,
  timelineTitle,
  timelineLead,
  timeline,
}: ServiceReadingProps) {
  // Sem `mechanismItems`, a cronologia é o próprio diagnóstico: ela alimenta o
  // visual e o trilho é omitido, para a sequência não aparecer duas vezes.
  const items = mechanismItems ?? timeline;
  const showTimelineRail = Boolean(mechanismItems);

  return (
    <section className={`section section--white service-reading service-reading--${slug}`} id="metodo">
      <div className="container">
        <div className="reading-grid">
          <Reveal>
            <div className="section-heading reading-copy">
              <p className="eyebrow">{mechanismEyebrow}</p>
              <h2><MarkedTitle text={mechanismTitle} mark={mechanismTitleMark} /></h2>
              <p>{mechanismText}</p>
              {mechanismNote && <p>{mechanismNote}</p>}
            </div>
          </Reveal>
          <Reveal delay={100}>
            <ServiceMechanismVisual slug={slug} items={items} />
          </Reveal>
        </div>

        <Reveal>
          <div className="reading-timeline">
            <div className="reading-timeline__intro">
              <p className="eyebrow">CRONOLOGIA</p>
              <h3>{timelineTitle}</h3>
              <p>{timelineLead}</p>
            </div>
            {showTimelineRail && (
              <ol className={`timeline-rail timeline-rail--${slug}`}>
                {timeline.map((item, index) => (
                  <li key={item}>
                    <span><small>ETAPA</small>{String(index + 1).padStart(2, "0")}</span>
                    <p>{item}</p>
                    {index < timeline.length - 1 && <i aria-hidden="true" />}
                  </li>
                ))}
              </ol>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
