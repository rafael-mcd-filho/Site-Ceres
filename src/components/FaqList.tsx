import { Plus } from "lucide-react";

export type FaqItem = { question: string; answer: string };

export function FaqList({ items }: { items: FaqItem[] }) {
  return (
    <div className="faq-list">
      {items.map((item) => (
        <details key={item.question}>
          <summary>
            <span>{item.question}</span>
            <Plus className="faq-icon" size={18} aria-hidden="true" />
          </summary>
          <div className="faq-answer"><p>{item.answer}</p></div>
        </details>
      ))}
    </div>
  );
}
