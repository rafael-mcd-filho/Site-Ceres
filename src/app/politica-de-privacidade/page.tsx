import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import { MarkedTitle } from "@/components/MarkedTitle";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import {
  siteConfig,
  whatsappHref,
  whatsappMessageWithSource,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Como o site do escritório Rabelo e Machado Advocacia trata dados pessoais: finalidades, bases legais, compartilhamento, retenção e direitos do titular.",
  alternates: { canonical: "/politica-de-privacidade" },
};

/** Alterar sempre que o conteúdo mudar — a data é exibida ao titular. */
const ultimaRevisao = "1º de setembro de 2026";

const privacyWhatsAppMessage = whatsappMessageWithSource(
  "Olá, vim pelo site da Rabelo e Machado Advocacia e gostaria de fazer uma solicitação relacionada aos meus dados pessoais.",
  "Política de privacidade, canal do titular",
);

type Secao = {
  id: string;
  title: string;
  paragraphs?: string[];
  list?: { term: string; text: string }[];
  table?: { head: string[]; rows: string[][] };
};

const sections: Secao[] = [
  {
    id: "controlador",
    title: "1. Quem é o controlador dos dados",
    paragraphs: [
      "O controlador é a pessoa ou entidade que decide como e por que os dados pessoais são tratados. Para os dados coletados neste site, a controladora é Rabelo e Machado Advocacia, inscrita no CNPJ sob o nº 60.663.618/0001-63.",
      "Endereço profissional: Rua Manoel Maia Neto, 25, Casusa, Princesa Isabel/PB, CEP 58.755-000.",
    ],
  },
  {
    id: "dados",
    title: "2. Quais dados são tratados",
    paragraphs: [
      "O site trata os dados que você mesmo informa no formulário de contato: nome, WhatsApp, e-mail (opcional), área de interesse e o resumo da situação que você escreve.",
      "O servidor também registra dados técnicos necessários ao funcionamento e à segurança, como endereço IP, tipo de navegador, data, hora e registros de erro.",
      "O formulário pede expressamente que você não envie documentos nem informações sensíveis. Ainda assim, o campo de resumo é livre: o que você escrever ali será tratado como parte do contato.",
    ],
  },
  {
    id: "finalidades",
    title: "3. Finalidades e bases legais",
    paragraphs: [
      "A LGPD exige que todo tratamento tenha uma finalidade específica e uma base legal (Art. 7º). O quadro abaixo relaciona uma à outra.",
    ],
    table: {
      head: ["Dado", "Para que é usado", "Base legal"],
      rows: [
        [
          "Nome, WhatsApp, e-mail, área e resumo",
          "Receber a solicitação, identificar a área e retornar o contato",
          "Art. 7º, V — procedimentos preliminares relacionados a contrato, a pedido do titular",
        ],
        [
          "IP, navegador, data, hora e registros de erro",
          "Manter o site no ar, prevenir abuso e investigar incidentes",
          "Art. 7º, IX — legítimo interesse",
        ],
        [
          "Dados de mensuração e publicidade",
          "Não há ferramenta de mensuração instalada nesta versão do site",
          "Art. 7º, I — consentimento, caso venha a ser adotada",
        ],
      ],
    },
  },
  {
    id: "formulario",
    title: "4. Formulário e WhatsApp",
    paragraphs: [
      "O envio do formulário é processado por um serviço transacional de e-mail, que entrega a mensagem na caixa postal do escritório. A mensagem permanece nessa caixa e na infraestrutura do serviço.",
      "O WhatsApp é operado pela Meta. Ao iniciar uma conversa por lá, o tratamento também passa a se sujeitar às políticas dessa plataforma, sobre as quais este site não tem controle.",
      "Não envie documentos, laudos, dados de saúde, dados financeiros ou qualquer informação sensível por esses canais antes de haver orientação sobre o meio adequado.",
    ],
  },
  {
    id: "compartilhamento",
    title: "5. Compartilhamento e operadores",
    paragraphs: [
      "Os dados não são vendidos nem cedidos para finalidade publicitária de terceiros. O compartilhamento se limita aos fornecedores necessários para o site funcionar, que atuam como operadores e só podem tratar os dados conforme instrução do controlador.",
    ],
    list: [
      { term: "Hospedagem", text: "Serviço que mantém o site no ar e registra os acessos técnicos." },
      { term: "Entrega de e-mail", text: "Serviço que transporta a mensagem do formulário até a caixa postal do escritório." },
      { term: "Mensageria", text: "WhatsApp, quando o contato acontece por esse canal." },
    ],
  },
  {
    id: "internacional",
    title: "6. Transferência internacional",
    paragraphs: [
      "Os serviços de hospedagem e de entrega de e-mail utilizados por este site têm infraestrutura fora do Brasil. Isso significa que os dados enviados pelo formulário podem ser armazenados ou processados em outro país, o que a LGPD classifica como transferência internacional (Art. 33).",
      "Esse ponto é informado aqui porque a lei exige transparência sobre ele, e não porque a transferência seja, por si só, irregular.",
    ],
  },
  {
    id: "cookies",
    title: "7. Cookies e tecnologias de rastreamento",
    paragraphs: [
      "Nesta versão, o site não instala cookies de análise, de publicidade ou de redes sociais. Não há Google Analytics, pixel de rede social nem gerenciador de tags em funcionamento.",
      "Caso alguma dessas ferramentas venha a ser adotada, esta política será atualizada antes da ativação e o consentimento será solicitado por meio de um aviso próprio, com opção de recusa.",
    ],
  },
  {
    id: "retencao",
    title: "8. Por quanto tempo os dados ficam guardados",
    paragraphs: [
      "As mensagens de contato são mantidas pelo tempo necessário para responder à solicitação, para cumprir obrigações legais aplicáveis à advocacia e para a defesa de direitos.",
    ],
  },
  {
    id: "seguranca",
    title: "9. Segurança",
    paragraphs: [
      "O site é servido sob conexão criptografada e o formulário conta com proteções contra envio automatizado. São adotadas medidas técnicas e organizacionais proporcionais ao porte da operação.",
      "Nenhum ambiente digital é absolutamente imune a incidentes. Em caso de incidente de segurança com risco relevante, o titular e a ANPD serão comunicados conforme o Art. 48 da LGPD.",
    ],
  },
  {
    id: "direitos",
    title: "10. Seus direitos como titular",
    paragraphs: [
      "O Art. 18 da LGPD garante a você, a qualquer momento e mediante requisição, os seguintes direitos:",
    ],
    list: [
      { term: "Confirmação", text: "Saber se existe algum tratamento de dados seus." },
      { term: "Acesso", text: "Obter acesso aos dados que estão sendo tratados." },
      { term: "Correção", text: "Corrigir dados incompletos, inexatos ou desatualizados." },
      { term: "Anonimização, bloqueio ou eliminação", text: "Quando os dados forem desnecessários, excessivos ou tratados em desconformidade com a lei." },
      { term: "Portabilidade", text: "Solicitar a transferência a outro fornecedor, conforme regulamentação da ANPD." },
      { term: "Eliminação", text: "Pedir a exclusão dos dados tratados com base no seu consentimento, ressalvadas as hipóteses de guarda obrigatória." },
      { term: "Informação sobre compartilhamento", text: "Saber com quais entidades públicas e privadas houve uso compartilhado." },
      { term: "Informação sobre a recusa", text: "Ser informado sobre a possibilidade de não consentir e sobre as consequências disso." },
      { term: "Revogação do consentimento", text: "Retirar o consentimento, quando essa for a base legal do tratamento." },
    ],
  },
  {
    id: "exercer",
    title: "11. Como exercer esses direitos",
    paragraphs: [
      `Envie a solicitação pelo WhatsApp oficial ${siteConfig.whatsappDisplay}, descrevendo o pedido. Pode ser necessário confirmar sua identidade antes do atendimento, justamente para não entregar dados a quem não é o titular.`,
      "A resposta é enviada pelo mesmo canal. Se algum pedido não puder ser atendido, você receberá a justificativa correspondente.",
      "Você também pode apresentar reclamação diretamente à Autoridade Nacional de Proteção de Dados (ANPD).",
    ],
  },
  {
    id: "menores",
    title: "12. Dados de crianças e adolescentes",
    paragraphs: [
      "O site não se destina a menores de 18 anos e não busca coletar dados dessa faixa etária. Se um contato for identificado como proveniente de criança ou adolescente, o tratamento observará o Art. 14 da LGPD, inclusive quanto ao consentimento de pelo menos um dos pais ou responsável legal.",
    ],
  },
  {
    id: "atualizacoes",
    title: "13. Atualizações desta política",
    paragraphs: [
      "Esta política pode ser atualizada para refletir mudanças no site, nos fornecedores ou nas práticas de tratamento. A data da última revisão fica sempre visível no início desta página.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <main id="topo" className="privacy-page">
      <header className="privacy-hero">
        <div className="container privacy-hero__inner">
          <div>
            <p className="eyebrow">TRANSPARÊNCIA E LGPD</p>
            <h1><MarkedTitle text="Política de privacidade" mark="privacidade" /></h1>
            <p>Como os dados pessoais informados neste site são tratados.</p>
          </div>
          <ShieldCheck size={72} strokeWidth={1.1} aria-hidden="true" />
        </div>
      </header>

      <div className="container privacy-layout">
        <details className="privacy-summary" open>
          <summary>
            <span className="footer-label">Sumário</span>
            <small>13 seções</small>
          </summary>
          <nav aria-label="Sumário da Política de privacidade">
            {sections.map((section) => (
              <a key={section.id} href={`#${section.id}`}>{section.title}</a>
            ))}
          </nav>
          <p className="privacy-date">Última revisão: {ultimaRevisao}</p>
        </details>

        <article className="privacy-content">
          <p>
            Esta política descreve como o site <strong>{siteConfig.name}</strong> trata dados
            pessoais. Ela vale para o formulário de contato, para os canais de mensagem
            divulgados aqui e para os registros técnicos de acesso.
          </p>

          {sections.map((section) => (
            <section id={section.id} key={section.id}>
              <h2>{section.title}</h2>

              {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}

              {section.table && (
                <div className="privacy-table-wrap">
                  <table className="privacy-table">
                    <thead>
                      <tr>
                        {section.table.head.map((cell) => <th key={cell} scope="col">{cell}</th>)}
                      </tr>
                    </thead>
                    <tbody>
                      {section.table.rows.map((row) => (
                        <tr key={row[0]}>
                          {row.map((cell, index) => (
                            <td key={index} data-label={section.table?.head[index]}>{cell}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {section.list && (
                <dl className="privacy-rights">
                  {section.list.map((item) => (
                    <div key={item.term}>
                      <dt>{item.term}</dt>
                      <dd>{item.text}</dd>
                    </div>
                  ))}
                </dl>
              )}

            </section>
          ))}

          <section className="privacy-contact">
            <WhatsAppIcon size={22} />
            <div>
              <h2>Canal de contato</h2>
              <p>
                Para questões relacionadas à privacidade, fale pelo{" "}
                <a href={whatsappHref(privacyWhatsAppMessage)} target="_blank" rel="noreferrer">
                  WhatsApp {siteConfig.whatsappDisplay}
                </a>.
              </p>
            </div>
          </section>

          <Link className="back-link" href="/"><ArrowLeft size={16} /> Voltar para o início</Link>
        </article>
      </div>
    </main>
  );
}
