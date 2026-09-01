import { MarkedTitle } from "@/components/MarkedTitle";

export function SectionHeading({
  eyebrow,
  title,
  titleMark,
  lead,
}: {
  eyebrow?: string;
  title: string;
  titleMark?: string;
  lead?: string;
}) {
  return (
    <div className="section-heading">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2><MarkedTitle text={title} mark={titleMark} /></h2>
      {lead && <p>{lead}</p>}
    </div>
  );
}
