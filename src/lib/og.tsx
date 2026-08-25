import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };

type Palette = "wine" | "gold";

export type OgCard = {
  eyebrow: string;
  title: string;
  footer: string;
  alt: string;
  palette?: Palette;
};

/**
 * Paleta única de marca: vinho e dourado, sem variante por página. O cartão
 * de registro de marca usa o wash dourado — as duas cores oficiais continuam
 * em jogo sem introduzir um terceiro matiz.
 */
const palettes = {
  wine: { accent: "#991932", wash: "linear-gradient(135deg, #fbf7ef 0%, #f6e7ea 58%, #edd6da 100%)" },
  gold: { accent: "#a9772e", wash: "linear-gradient(135deg, #fbf7ef 0%, #f6ecd6 58%, #ecdfc0 100%)" },
};

/**
 * Cards sociais servidos em `/og/<slug>`. Rota explícita em vez do convention
 * `opengraph-image.tsx`: no Next 16 o arquivo aninhado é construído mas não
 * emite a meta tag nas rotas filhas.
 */
export const ogCards = {
  home: {
    eyebrow: "RABELO E MACHADO ADVOCACIA",
    title: "Clareza para compreender. Método para decidir o próximo passo.",
    footer: "Concursos · Dívida ativa · Empresarial · Marca · Contas bloqueadas",
    alt: "Rabelo e Machado Advocacia — concursos públicos, dívida ativa e direito empresarial",
  },
  concursos: {
    eyebrow: "ADVOCACIA EM CONCURSOS PÚBLICOS",
    title: "Uma decisão no concurso mudou o caminho que você vinha construindo?",
    footer: "Eliminação · TAF · Avaliação médica · Cotas · Investigação social · Nomeação",
    alt: "Advocacia em concursos públicos — Rabelo e Machado Advocacia",
  },
  "divida-ativa-empresas": {
    eyebrow: "DÍVIDA ATIVA E EXECUÇÃO FISCAL",
    title: "Sua empresa recebeu uma cobrança, uma citação ou teve valores bloqueados?",
    footer: "Inscrição · CDA · Citação · Bloqueio · Penhora · Certidão",
    alt: "Dívida ativa e execução fiscal para empresas — Rabelo e Machado Advocacia",
  },
  "direito-empresarial": {
    eyebrow: "ADVOCACIA EMPRESARIAL",
    title: "Sua empresa mudou. Os contratos e o acordo entre os sócios acompanharam?",
    footer: "Sócios · Contrato social · Contratos · Regras internas · Marca",
    alt: "Advocacia empresarial — Rabelo e Machado Advocacia",
    palette: "gold",
  },
  "conta-bloqueada-mercado-livre": {
    eyebrow: "CONTA BLOQUEADA NO MERCADO LIVRE",
    title: "Sua conta parou de vender e a explicação veio genérica.",
    footer: "Suspensão · Reputação · Repasse retido · Denúncia · Encerramento",
    alt: "Conta bloqueada no Mercado Livre — Rabelo e Machado Advocacia",
  },
  "conta-bloqueada-instagram": {
    eyebrow: "CONTA DESATIVADA NO INSTAGRAM",
    title: "O perfil que você construiu por anos saiu do ar de uma vez.",
    footer: "Desativação · Perfil profissional · Invasão · Recurso",
    alt: "Conta desativada no Instagram — Rabelo e Machado Advocacia",
  },
  "conta-bloqueada-whatsapp": {
    eyebrow: "NÚMERO BANIDO NO WHATSAPP",
    title: "O número que concentra seus contatos foi banido sem aviso.",
    footer: "Banimento · Conta comercial · Invasão · Revisão",
    alt: "Número banido no WhatsApp — Rabelo e Machado Advocacia",
  },
  "registro-de-marca": {
    eyebrow: "REGISTRO DE MARCA",
    title: "Usar um nome há anos não é o mesmo que ter direito sobre ele.",
    footer: "Pesquisa prévia · Classe de Nice · Pedido no INPI · Oposição",
    alt: "Registro de marca no INPI — Rabelo e Machado Advocacia",
    palette: "gold",
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
          <div style={{ display: "flex", marginTop: 28, width: 220, height: 5, background: "#d8b54a" }} />
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
            RABELO E MACHADO ADVOCACIA
          </div>
        </div>
      </div>
    ),
    ogSize,
  );
}
