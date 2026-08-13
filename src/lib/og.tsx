import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };

type Palette = "wine" | "forest" | "bronze" | "plataforma";

export type OgCard = {
  eyebrow: string;
  title: string;
  footer: string;
  alt: string;
  palette?: Palette;
};

const palettes = {
  wine: { accent: "#842f43", wash: "linear-gradient(135deg, #fbf7ef 0%, #f4eadd 58%, #ead9d4 100%)" },
  forest: { accent: "#34574d", wash: "linear-gradient(135deg, #fbf7ef 0%, #eef0e8 58%, #dce6df 100%)" },
  bronze: { accent: "#8a6530", wash: "linear-gradient(135deg, #fbf7ef 0%, #f4ecdc 58%, #ece3d2 100%)" },
  plataforma: { accent: "#33566b", wash: "linear-gradient(135deg, #fbf7ef 0%, #eaeff2 58%, #dbe5ea 100%)" },
};

/**
 * Cards sociais servidos em `/og/<slug>`. Rota explícita em vez do convention
 * `opengraph-image.tsx`: no Next 16 o arquivo aninhado é construído mas não
 * emite a meta tag nas rotas filhas.
 */
export const ogCards = {
  home: {
    eyebrow: "CERES RABELO ADVOCACIA",
    title: "Clareza para compreender. Método para decidir o próximo passo.",
    footer: "Concursos públicos · Dívida ativa e execução fiscal · Direito empresarial",
    alt: "Ceres Rabelo Advocacia — concursos públicos, dívida ativa e direito empresarial",
  },
  concursos: {
    eyebrow: "ADVOCACIA EM CONCURSOS PÚBLICOS",
    title: "Edital, ato da banca e prazo contam a mesma história.",
    footer: "Eliminação · TAF · Avaliação médica · Cotas · Investigação social · Nomeação",
    alt: "Advocacia em concursos públicos — Ceres Rabelo",
  },
  "divida-ativa-empresas": {
    eyebrow: "DÍVIDA ATIVA E EXECUÇÃO FISCAL",
    title: "Antes de decidir, organize o quadro da empresa.",
    footer: "Inscrição · CDA · Citação · Bloqueio · Penhora · Certidão",
    alt: "Dívida ativa e execução fiscal para empresas — Ceres Rabelo",
    palette: "forest",
  },
  "direito-empresarial": {
    eyebrow: "ADVOCACIA EMPRESARIAL",
    title: "Sua empresa mudou. A estrutura jurídica acompanhou?",
    footer: "Societário · Contratos · Compliance · Tributário · Marca",
    alt: "Advocacia empresarial — Ceres Rabelo",
    palette: "bronze",
  },
  "conta-bloqueada-mercado-livre": {
    eyebrow: "CONTA BLOQUEADA NO MERCADO LIVRE",
    title: "Sua conta parou de vender e a explicação veio genérica.",
    footer: "Suspensão · Reputação · Repasse retido · Denúncia · Encerramento",
    alt: "Conta bloqueada no Mercado Livre — Ceres Rabelo",
    palette: "plataforma",
  },
  "conta-bloqueada-instagram": {
    eyebrow: "CONTA DESATIVADA NO INSTAGRAM",
    title: "O perfil que você construiu por anos saiu do ar de uma vez.",
    footer: "Desativação · Perfil profissional · Invasão · Recurso",
    alt: "Conta desativada no Instagram — Ceres Rabelo",
    palette: "plataforma",
  },
  "conta-bloqueada-whatsapp": {
    eyebrow: "NÚMERO BANIDO NO WHATSAPP",
    title: "O número que concentra seus contatos foi banido sem aviso.",
    footer: "Banimento · Conta comercial · Invasão · Revisão",
    alt: "Número banido no WhatsApp — Ceres Rabelo",
    palette: "plataforma",
  },
  "registro-de-marca": {
    eyebrow: "REGISTRO DE MARCA",
    title: "Usar um nome há anos não é o mesmo que ter direito sobre ele.",
    footer: "Busca de anterioridade · Classe de Nice · Depósito · Oposição",
    alt: "Registro de marca no INPI — Ceres Rabelo",
    palette: "bronze",
  },
} as const satisfies Record<string, OgCard>;

export type OgSlug = keyof typeof ogCards;

/** Metadados de `openGraph.images` para uma página. */
export function ogImageFor(slug: OgSlug) {
  return [{ url: `/og/${slug}`, width: ogSize.width, height: ogSize.height, alt: ogCards[slug].alt }];
}

/** Card social 1200x630 — mesma composição em todas as páginas, cor por jornada. */
export function renderOgImage({ eyebrow, title, footer, palette = "wine" }: OgCard) {
  const { accent, wash } = palettes[palette];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: wash,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div style={{ width: 44, height: 4, background: accent }} />
          <div style={{ color: accent, fontSize: 22, fontWeight: 700, letterSpacing: 6 }}>
            {eyebrow}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              color: "#2d2c2a",
              fontSize: 72,
              fontWeight: 600,
              lineHeight: 1.1,
              letterSpacing: -2,
              maxWidth: 940,
            }}
          >
            {title}
          </div>
          <div style={{ display: "flex", marginTop: 28, width: 220, height: 5, background: "#c99a45" }} />
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div style={{ color: "#54514c", fontSize: 24, maxWidth: 700, lineHeight: 1.35 }}>
            {footer}
          </div>
          <div
            style={{
              color: "#807b73",
              fontSize: 18,
              letterSpacing: 3,
              whiteSpace: "nowrap",
              paddingLeft: 32,
            }}
          >
            ADVOCACIA · DOCÊNCIA · PESQUISA
          </div>
        </div>
      </div>
    ),
    ogSize,
  );
}
