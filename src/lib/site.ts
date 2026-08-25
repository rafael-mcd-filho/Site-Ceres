export const siteConfig = {
  name: "Rabelo e Machado Advocacia",
  shortName: "Rabelo e Machado",
  description:
    "Escritório de advocacia com atuação em concursos públicos, dívida ativa, execução fiscal e direito empresarial.",
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://rabeloemachadoadvocacia.com.br").replace(
    /\/$/,
    "",
  ),
  whatsappNumber: (
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5583991780510"
  ).replace(/\D/g, ""),
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "bsrabelo.adv@gmail.com",
  instagram: "https://www.instagram.com/profa.ceresrabelo/",
  // Requisito obrigatório do Provimento 205/2021 (Anexo). Enquanto o número da
  // sociedade não for validado, a credencial simplesmente não é exibida.
  oab: process.env.NEXT_PUBLIC_OAB_NUMBER || "",
  /**
   * Dados do CNPJ 60.663.618/0001-63 (cartão da Receita de 14/08/2026).
   * `legalName` é a razão social; `name` acima é o nome fantasia registrado
   * no mesmo cartão ("título do estabelecimento").
   */
  legalName: "Ceres Rabelo Sociedade Individual de Advocacia",
  cnpj: "60.663.618/0001-63",
  address: {
    street: "Rua Manoel Maia Neto, 25",
    district: "Casusa",
    city: "Princesa Isabel",
    state: "PB",
    zip: "58755-000",
    country: "BR",
  },
} as const;

/** Endereço em uma linha, para rodapé e metadados. */
export const formattedAddress = [
  siteConfig.address.street,
  siteConfig.address.district,
  `${siteConfig.address.city}/${siteConfig.address.state}`,
  `CEP ${siteConfig.address.zip}`,
].join(" · ");

export function whatsappHref(message: string) {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const defaultWhatsAppMessage =
  "Olá, conheci o escritório pelo site e gostaria de apresentar minha situação para uma análise inicial.";

