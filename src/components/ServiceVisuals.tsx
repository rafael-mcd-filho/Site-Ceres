import {
  BadgeCheck,
  Building2,
  CalendarClock,
  FileCheck2,
  FileText,
  Landmark,
  LockKeyhole,
  ReceiptText,
  Route,
  ShieldCheck,
  TrendingUp,
  Users,
} from "lucide-react";

type ServiceVisualProps = {
  slug: string;
  items: string[];
};

function ConcursoHeroVisual() {
  return (
    <div
      className="service-visual contest-visual"
      role="img"
      aria-label="Representação de um edital sendo comparado com o ato da banca, a etapa do concurso e o prazo"
    >
      <div className="contest-visual__caption"><span>LEITURA DO CASO</span><strong>01 / 03</strong></div>
      <div className="contest-document contest-document--back" aria-hidden="true" />
      <div className="contest-document" aria-hidden="true">
        <div className="contest-document__head">
          <span><FileText size={17} /> EDITAL Nº 01</span>
          <small>REGRA PUBLICADA</small>
        </div>
        <div className="document-lines"><i /><i /><i /></div>
        <div className="contest-highlight">
          <small>ITEM DA ETAPA</small>
          <strong>O que o edital previa?</strong>
        </div>
        <div className="document-lines document-lines--short"><i /><i /></div>
      </div>
      <div className="contest-stamp" aria-hidden="true">ATO SOB<br />ANÁLISE</div>
      <div className="contest-deadline" aria-hidden="true">
        <CalendarClock size={21} />
        <span><small>ELEMENTO CRÍTICO</small><strong>DATA E PRAZO</strong></span>
      </div>
      <div className="contest-rail" aria-hidden="true">
        <span className="is-done"><i />Edital</span>
        <span className="is-active"><i />Ato</span>
        <span><i />Resposta</span>
      </div>
    </div>
  );
}

function DividaHeroVisual() {
  return (
    <div
      className="service-visual debt-visual"
      role="img"
      aria-label="Mapa da cobrança mostrando a passagem da origem do crédito para a CDA, execução fiscal e possível impacto na empresa"
    >
      <div className="debt-visual__top">
        <span>MAPA DA COBRANÇA</span>
        <small><i /> SITUAÇÃO ATUAL</small>
      </div>
      <div className="debt-company" aria-hidden="true">
        <Building2 size={25} />
        <span><small>EMPRESA</small><strong>Em qual fase está?</strong></span>
      </div>
      <ol className="debt-route" aria-hidden="true">
        <li className="is-complete"><span><ReceiptText size={17} /></span><p><small>01</small>Origem</p></li>
        <li className="is-complete"><span><FileCheck2 size={17} /></span><p><small>02</small>CDA</p></li>
        <li className="is-active"><span><Landmark size={17} /></span><p><small>03</small>Execução</p></li>
        <li><span><LockKeyhole size={17} /></span><p><small>04</small>Impacto</p></li>
      </ol>
      <div className="debt-alert" aria-hidden="true">
        <LockKeyhole size={22} />
        <span><small>PONTO DE ATENÇÃO</small><strong>Bloqueio ou penhora?</strong></span>
      </div>
      <div className="debt-coordinate debt-coordinate--one" aria-hidden="true">CITAÇÃO</div>
      <div className="debt-coordinate debt-coordinate--two" aria-hidden="true">DOCUMENTOS</div>
    </div>
  );
}

function EmpresarialHeroVisual() {
  return (
    <div
      className="service-visual business-visual"
      role="img"
      aria-label="Arquitetura jurídica de uma empresa conectando relações societárias, contratos, compliance e crescimento"
    >
      <div className="business-visual__top">
        <span>ARQUITETURA DO NEGÓCIO</span>
        <small>VISÃO INTEGRADA</small>
      </div>
      <div className="business-network" aria-hidden="true">
        <div className="business-node business-node--core"><Building2 size={27} /><strong>EMPRESA</strong><small>operação real</small></div>
        <div className="business-node business-node--socios"><Users size={18} /><span>Sócios</span></div>
        <div className="business-node business-node--contratos"><FileText size={18} /><span>Contratos</span></div>
        <div className="business-node business-node--compliance"><ShieldCheck size={18} /><span>Compliance</span></div>
        <div className="business-node business-node--crescimento"><TrendingUp size={18} /><span>Crescimento</span></div>
        <i className="network-line network-line--one" />
        <i className="network-line network-line--two" />
        <i className="network-line network-line--three" />
        <i className="network-line network-line--four" />
      </div>
      <div className="business-decision" aria-hidden="true">
        <BadgeCheck size={21} />
        <p><small>DECISÃO CENTRAL</small><strong>A estrutura acompanha a nova fase?</strong></p>
      </div>
      <div className="business-cycle" aria-hidden="true"><span>INÍCIO</span><i /><span>CRESCIMENTO</span><i /><span>REORGANIZAÇÃO</span></div>
    </div>
  );
}

export function ServiceHeroVisual({ slug }: Pick<ServiceVisualProps, "slug">) {
  if (slug === "concursos") return <ConcursoHeroVisual />;
  if (slug === "divida-ativa-empresas") return <DividaHeroVisual />;
  return <EmpresarialHeroVisual />;
}

export function ServiceMechanismVisual({ slug, items }: ServiceVisualProps) {
  if (slug === "concursos") {
    return (
      <div className="document-stack mechanism-contest" aria-hidden="true">
        <div className="document-sheet document-sheet--back" />
        <div className="document-sheet">
          <p className="document-label">LEITURA INTEGRADA</p>
          <ol>{items.map((item, index) => <li key={item}><span>0{index + 1}</span>{item}</li>)}</ol>
          <div className="mechanism-contest__seal"><BadgeCheck size={18} /> COMPARAR</div>
        </div>
      </div>
    );
  }

  if (slug === "divida-ativa-empresas") {
    return (
      <div className="collection-map" aria-hidden="true">
        <div className="collection-map__head"><Route size={19} /><span>RASTREAMENTO DA COBRANÇA</span></div>
        <ol>
          {items.map((item, index) => (
            <li key={item} className={index === items.length - 1 ? "is-current" : ""}>
              <span>0{index + 1}</span><p>{item}</p><i />
            </li>
          ))}
        </ol>
        <div className="collection-map__status"><LockKeyhole size={20} /><span><small>RESULTADO DO MAPA</small>Localizar risco, fase e próxima decisão</span></div>
      </div>
    );
  }

  return (
    <div className="business-blueprint" aria-hidden="true">
      <div className="business-blueprint__head"><span>MAPA DE DECISÃO</span><small>CONTEXTO → ESTRUTURA</small></div>
      <div className="business-blueprint__grid">
        {items.map((item, index) => (
          <div key={item}><span>0{index + 1}</span><p>{item}</p></div>
        ))}
      </div>
      <div className="business-blueprint__core"><Building2 size={22} /><strong>NEGÓCIO</strong></div>
    </div>
  );
}
