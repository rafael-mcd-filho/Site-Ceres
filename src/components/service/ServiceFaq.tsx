import { FaqList, type FaqItem } from "@/components/FaqList";
import { MarkedTitle } from "@/components/MarkedTitle";
import { Reveal } from "@/components/Reveal";

export function ServiceFaq({ items }: { items: FaqItem[] }) {
  return (
    <section className="section section--paper" id="duvidas">
      <div className="container faq-layout">
        <Reveal>
          <div className="faq-intro">
            <p className="eyebrow">PERGUNTAS FREQUENTES</p>
            <h2>
              <MarkedTitle
                text="Dúvidas que costumam surgir antes de buscar ajuda."
                mark="antes de buscar ajuda"
              />
            </h2>
            <p>Veja respostas para as dúvidas mais comuns antes do primeiro contato. Se os fatos, documentos ou datas do seu caso forem diferentes, conte isso na mensagem.</p>
          </div>
        </Reveal>
        <Reveal delay={80}><FaqList items={items} /></Reveal>
      </div>
    </section>
  );
}
