import { FaqList, type FaqItem } from "@/components/FaqList";
import { Reveal } from "@/components/Reveal";

export function ServiceFaq({ items }: { items: FaqItem[] }) {
  return (
    <section className="section section--paper" id="duvidas">
      <div className="container faq-layout">
        <Reveal>
          <div className="faq-intro">
            <p className="eyebrow">PERGUNTAS FREQUENTES</p>
            <h2>As dúvidas que aparecem logo no primeiro contato.</h2>
            <p>Uma data, um documento ou uma cláusula específica mudam a leitura inteira. Estas respostas são gerais e não substituem a análise individual do seu caso.</p>
          </div>
        </Reveal>
        <Reveal delay={80}><FaqList items={items} /></Reveal>
      </div>
    </section>
  );
}
