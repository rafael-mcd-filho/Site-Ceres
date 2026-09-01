import Image from "next/image";
import {
  BadgeCheck,
  Building2,
  CalendarClock,
  CircleCheck,
  FileCheck2,
  FileText,
  Landmark,
  Layers3,
  LockKeyhole,
  MessageSquareText,
  PackageCheck,
  ReceiptText,
  RefreshCw,
  Route,
  Search,
  ShieldCheck,
  TrendingUp,
  UserRoundCheck,
  Users,
  WalletCards,
  type LucideIcon,
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
      aria-label="Representação de um edital sendo comparado com a decisão da banca, a etapa do concurso e o prazo"
    >
      <div className="contest-visual__caption"><span>O QUE ACONTECEU</span><strong>01 / 03</strong></div>
      <div className="contest-document contest-document--back" aria-hidden="true" />
      <div className="contest-document" aria-hidden="true">
        <div className="contest-document__head">
          <span><FileText size={17} /> EDITAL Nº 01</span>
          <small>REGRA DO CONCURSO</small>
        </div>
        <div className="document-lines"><i /><i /><i /></div>
        <div className="contest-highlight">
          <small>REGRA DA ETAPA</small>
          <strong>Como a banca deveria avaliar?</strong>
        </div>
        <div className="document-lines document-lines--short"><i /><i /></div>
      </div>
      <div className="contest-stamp" aria-hidden="true">DECISÃO<br />RECEBIDA</div>
      <div className="contest-deadline" aria-hidden="true">
        <CalendarClock size={21} />
        <span><small>ATENÇÃO AO PRAZO</small><strong>DATA DO RESULTADO</strong></span>
      </div>
      <div className="contest-rail" aria-hidden="true">
        <span className="is-done"><i />Edital</span>
        <span className="is-active"><i />Decisão</span>
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
      aria-label="Mapa da cobrança mostrando o caminho de onde a dívida surgiu até a CDA, a execução fiscal e o possível impacto na empresa"
    >
      <div className="debt-visual__top">
        <span>SITUAÇÃO DA COBRANÇA</span>
        <small><i /> SITUAÇÃO ATUAL</small>
      </div>
      <div className="debt-company" aria-hidden="true">
        <Building2 size={25} />
        <span><small>EMPRESA</small><strong>Onde a cobrança está agora?</strong></span>
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
      aria-label="Arquitetura jurídica de uma empresa conectando sócios, contratos, regras internas e crescimento"
    >
      <div className="business-visual__top">
        <span>ESTRUTURA DA EMPRESA</span>
        <small>VISÃO DO NEGÓCIO</small>
      </div>
      <div className="business-network" aria-hidden="true">
        <div className="business-node business-node--core"><Building2 size={27} /><strong>EMPRESA</strong><small>operação real</small></div>
        <div className="business-node business-node--socios"><Users size={18} /><span>Sócios</span></div>
        <div className="business-node business-node--contratos"><FileText size={18} /><span>Contratos</span></div>
        <div className="business-node business-node--compliance"><ShieldCheck size={18} /><span>Regras internas</span></div>
        <div className="business-node business-node--crescimento"><TrendingUp size={18} /><span>Crescimento</span></div>
        <i className="network-line network-line--one" />
        <i className="network-line network-line--two" />
        <i className="network-line network-line--three" />
        <i className="network-line network-line--four" />
      </div>
      <div className="business-decision" aria-hidden="true">
        <BadgeCheck size={21} />
        <p><small>PONTO DE ATENÇÃO</small><strong>Os documentos correspondem à empresa de hoje?</strong></p>
      </div>
      <div className="business-cycle" aria-hidden="true"><span>INÍCIO</span><i /><span>CRESCIMENTO</span><i /><span>REORGANIZAÇÃO</span></div>
    </div>
  );
}

function MarcaHeroVisual() {
  return (
    <div
      className="service-visual brand-register-visual"
      role="img"
      aria-label="Painel de pesquisa de marca mostrando busca na base do INPI, análise de semelhança, escolha de classe e preparação do pedido"
    >
      <div className="brand-register-visual__top" aria-hidden="true">
        <span>CAMINHO DO REGISTRO</span>
        <small>ANTES DE FAZER O PEDIDO</small>
      </div>

      <div className="brand-register-search" aria-hidden="true">
        <Search size={20} />
        <span><small>NOME CONSULTADO</small><strong>Nome que você quer proteger</strong></span>
        <b>INPI</b>
      </div>

      <div className="brand-register-results" aria-hidden="true">
        <div>
          <CircleCheck size={18} />
          <span><small>NOMES PARECIDOS</small><strong>Verificar possíveis conflitos</strong></span>
        </div>
        <div>
          <Layers3 size={18} />
          <span><small>ALCANCE</small><strong>Escolher a classe certa</strong></span>
        </div>
      </div>

      <ol className="brand-register-flow" aria-hidden="true">
        <li className="is-active"><span>01</span>Pesquisa</li>
        <li><span>02</span>Preparação</li>
        <li><span>03</span>Pedido</li>
      </ol>

      <div className="brand-register-status" aria-hidden="true">
        <BadgeCheck size={22} />
        <p><small>ANTES DO PEDIDO</small><strong>Qual é o risco desse pedido?</strong></p>
      </div>
    </div>
  );
}

type PlatformVisualConfig = {
  className: string;
  eyebrow: string;
  title: string;
  status: string;
  impact: string;
  logoSrc: string;
  checks: Array<{ icon: LucideIcon; label: string }>;
};

const platformVisuals: Record<string, PlatformVisualConfig> = {
  "conta-bloqueada-mercado-livre": {
    className: "marketplace",
    eyebrow: "CONTA DE VENDEDOR",
    title: "Vendas e repasses interrompidos",
    status: "Acesso suspenso",
    impact: "Vendas, reputação e valores afetados",
    logoSrc: "/images/ceres/platform-mercado-livre.svg",
    checks: [
      { icon: PackageCheck, label: "Anúncios" },
      { icon: WalletCards, label: "Repasse" },
      { icon: FileCheck2, label: "Protocolos" },
    ],
  },
  "conta-bloqueada-instagram": {
    className: "instagram",
    eyebrow: "PERFIL PROFISSIONAL",
    title: "Perfil e contatos fora do ar",
    status: "Perfil indisponível",
    impact: "Audiência, atendimento e vendas afetados",
    logoSrc: "/images/ceres/platform-instagram.svg",
    checks: [
      { icon: UserRoundCheck, label: "Titularidade" },
      { icon: LockKeyhole, label: "Aviso" },
      { icon: RefreshCw, label: "Recurso" },
    ],
  },
  "conta-bloqueada-whatsapp": {
    className: "whatsapp",
    eyebrow: "CANAL DE ATENDIMENTO",
    title: "Atendimento interrompido",
    status: "Número impedido",
    impact: "Conversas, agenda e operação afetadas",
    logoSrc: "/images/ceres/platform-whatsapp.svg",
    checks: [
      { icon: MessageSquareText, label: "Mensagem" },
      { icon: ShieldCheck, label: "Titularidade" },
      { icon: RefreshCw, label: "Revisão" },
    ],
  },
};

function PlatformHeroVisual({ slug }: Pick<ServiceVisualProps, "slug">) {
  const config = platformVisuals[slug];

  return (
    <div
      className={`service-visual platform-status-visual platform-status-visual--${config.className}`}
      role="img"
      aria-label={`${config.eyebrow}: ${config.status}. O painel organiza o aviso, a titularidade, os protocolos e o impacto da restrição.`}
    >
      <div className="platform-status-visual__top" aria-hidden="true">
        <span>O QUE ACONTECEU</span>
        <small><i /> SITUAÇÃO ATUAL</small>
      </div>

      <div className="platform-account" aria-hidden="true">
        <span className="platform-account__icon">
          <Image className={`platform-logo--${config.className}`} src={config.logoSrc} alt="" width={48} height={48} />
        </span>
        <p><small>{config.eyebrow}</small><strong>{config.title}</strong></p>
      </div>

      <div className="platform-status" aria-hidden="true">
        <LockKeyhole size={20} />
        <p><small>AVISO RECEBIDO</small><strong>{config.status}</strong></p>
      </div>

      <ol className="platform-checks" aria-hidden="true">
        {config.checks.map(({ icon: Icon, label }, index) => (
          <li key={label}>
            <span><Icon size={17} /></span>
            <small>0{index + 1}</small>
            <strong>{label}</strong>
          </li>
        ))}
      </ol>

      <div className="platform-impact" aria-hidden="true">
        <BadgeCheck size={21} />
        <p><small>EFEITO CONCRETO</small><strong>{config.impact}</strong></p>
      </div>
    </div>
  );
}

export function ServiceHeroVisual({ slug }: Pick<ServiceVisualProps, "slug">) {
  if (slug === "concursos") return <ConcursoHeroVisual />;
  if (slug === "divida-ativa-empresas") return <DividaHeroVisual />;
  if (slug === "direito-empresarial") return <EmpresarialHeroVisual />;
  if (slug === "registro-de-marca") return <MarcaHeroVisual />;
  if (platformVisuals[slug]) return <PlatformHeroVisual slug={slug} />;
  return <EmpresarialHeroVisual />;
}

export function ServiceMechanismVisual({ slug, items }: ServiceVisualProps) {
  if (slug === "concursos") {
    return (
      <div className="document-stack mechanism-contest" aria-hidden="true">
        <div className="document-sheet document-sheet--back" />
        <div className="document-sheet">
          <p className="document-label">COMPARAÇÃO DO CASO</p>
          <ol>{items.map((item, index) => <li key={item}><span>0{index + 1}</span>{item}</li>)}</ol>
          <div className="mechanism-contest__seal"><BadgeCheck size={18} /> COMPARAR</div>
        </div>
      </div>
    );
  }

  if (slug === "divida-ativa-empresas") {
    return (
      <div className="collection-map" aria-hidden="true">
        <div className="collection-map__head"><Route size={19} /><span>CAMINHO DA COBRANÇA</span></div>
        <ol>
          {items.map((item, index) => (
            <li key={item} className={index === items.length - 1 ? "is-current" : ""}>
              <span>0{index + 1}</span><p>{item}</p><i />
            </li>
          ))}
        </ol>
        <div className="collection-map__status"><LockKeyhole size={20} /><span><small>O QUE PRECISA FICAR CLARO</small>Origem, fase, impacto e próxima decisão</span></div>
      </div>
    );
  }

  if (slug === "registro-de-marca") {
    return (
      <div className="brand-search-board" aria-hidden="true">
        <div className="brand-search-board__head"><Search size={19} /><span>VERIFICAÇÃO DO NOME</span></div>
        <ol>
          {items.map((item, index) => (
            <li key={item}>
              <span>0{index + 1}</span>
              <p>{item}</p>
              {index === 0 ? <Search size={16} /> : index === 1 ? <Layers3 size={16} /> : <FileCheck2 size={16} />}
            </li>
          ))}
        </ol>
        <div className="brand-search-board__status"><BadgeCheck size={20} /><span><small>OBJETIVO DA PESQUISA</small>Entender o risco antes do pedido</span></div>
      </div>
    );
  }

  if (slug.startsWith("conta-bloqueada-")) {
    return (
      <div className="platform-evidence-board" aria-hidden="true">
        <div className="platform-evidence-board__head"><LockKeyhole size={19} /><span>REGISTROS DO BLOQUEIO</span></div>
        <ol>
          {items.map((item, index) => (
            <li key={item}>
              <span>0{index + 1}</span>
              <p>{item}</p>
              {index === items.length - 1 && <CircleCheck size={17} />}
            </li>
          ))}
        </ol>
        <div className="platform-evidence-board__status"><RefreshCw size={20} /><span><small>O QUE PRECISA SER COMPARADO</small>Aviso, conta, tentativas e impacto</span></div>
      </div>
    );
  }

  return (
    <div className="business-blueprint" aria-hidden="true">
      <div className="business-blueprint__head"><span>DECISÃO DA EMPRESA</span><small>CONTEXTO → PRÓXIMO PASSO</small></div>
      <div className="business-blueprint__grid">
        {items.map((item, index) => (
          <div key={item}><span>0{index + 1}</span><p>{item}</p></div>
        ))}
      </div>
      <div className="business-blueprint__core"><Building2 size={22} /><strong>NEGÓCIO</strong></div>
    </div>
  );
}
