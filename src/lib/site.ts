export const siteConfig = {
  name: "Rabelo e Machado Advocacia",
  shortName: "Rabelo e Machado",
  description:
    "Advocacia para candidatos, empreendedores e empresas em concursos públicos, dívida ativa, direito empresarial, marcas e contas bloqueadas.",
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://rabeloemachadoadvocacia.com.br").replace(
    /\/$/,
    "",
  ),
  whatsappNumber: (
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "558393013156"
  ).replace(/\D/g, ""),
  whatsappDisplay: "(83) 9301-3156",
  serviceHours: "Segunda a sexta-feira, em horário comercial",
  responseTime: "Retorno inicial, em média, em 24 horas",
  serviceModes: "Atendimento online em todo o Brasil e presencial em Princesa Isabel/PB",
  // Requisito obrigatório do Provimento 205/2021 (Anexo). Enquanto o número da
  // sociedade não for validado, a credencial simplesmente não é exibida.
  oab: process.env.NEXT_PUBLIC_OAB_NUMBER || "",
  /** Identidade pública definida para o escritório em todas as páginas. */
  legalName: "Rabelo e Machado Advocacia",
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
  "Olá, vim pelo site da Rabelo e Machado Advocacia e preciso de orientação sobre uma situação jurídica.";

export function whatsappMessageWithSource(message: string, source: string) {
  return `${message.trim()}\n\nOrigem no site: ${source}.`;
}
