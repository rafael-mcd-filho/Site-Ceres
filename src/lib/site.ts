export const siteConfig = {
  name: "Ceres Rabelo Advocacia",
  shortName: "Ceres Rabelo",
  description:
    "Advocacia em concursos públicos, dívida ativa, execução fiscal e direito empresarial.",
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://ceresrabelo.online").replace(
    /\/$/,
    "",
  ),
  whatsappNumber: (
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5583991780510"
  ).replace(/\D/g, ""),
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "bsrabelo.adv@gmail.com",
  instagram: "https://www.instagram.com/profa.ceresrabelo/",
  // Requisito obrigatório do Provimento 205/2021 (Anexo). Enquanto o número não
  // for validado pela cliente, a credencial simplesmente não é exibida.
  oab: process.env.NEXT_PUBLIC_OAB_NUMBER || "",
} as const;

export function whatsappHref(message: string) {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const defaultWhatsAppMessage =
  "Olá, conheci o trabalho de Ceres Rabelo pelo site e gostaria de apresentar minha situação para uma análise inicial.";

