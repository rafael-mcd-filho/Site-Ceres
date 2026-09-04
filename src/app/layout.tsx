import type { Metadata, Viewport } from "next";
import { DM_Sans, Literata } from "next/font/google";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { siteConfig } from "@/lib/site";
import { ogImageFor } from "@/lib/og";
import "./globals.css";

const literata = Literata({
  subsets: ["latin"],
  variable: "--font-literata",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Rabelo e Machado Advocacia | Concursos e Direito Empresarial",
    template: "%s | Rabelo e Machado Advocacia",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: siteConfig.name,
    title: "Rabelo e Machado Advocacia",
    description: siteConfig.description,
    url: "/",
    images: ogImageFor("home"),
  },
  twitter: {
    card: "summary_large_image",
    title: "Rabelo e Machado Advocacia",
    description: siteConfig.description,
    images: ogImageFor("home"),
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    other: {
      "facebook-domain-verification": "v3d7p2hd68t2dfb8mwhlvo86pd9eaa",
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#30070e",
  colorScheme: "light",
};

const serviceCatalog = [
  {
    name: "Advocacia em concursos públicos",
    description:
      "Análise de edital, decisões da banca, eliminação, TAF, avaliação médica, cotas, investigação social, convocação e nomeação.",
    path: "/concursos",
  },
  {
    name: "Dívida ativa e execução fiscal para empresas",
    description:
      "Exame de inscrições em dívida ativa, CDA, citações, bloqueios, penhoras e demais atos da cobrança fiscal.",
    path: "/divida-ativa-empresas",
  },
  {
    name: "Direito empresarial",
    description:
      "Atuação consultiva em relações societárias, contratos, regras internas, questões tributárias e proteção de marca.",
    path: "/direito-empresarial",
  },
  {
    name: "Registro de marca",
    description:
      "Pesquisa de marcas anteriores, definição de classe, pedido de registro no INPI e acompanhamento de exigências e oposições.",
    path: "/registro-de-marca",
  },
  {
    name: "Conta bloqueada no Mercado Livre",
    description:
      "Análise de suspensão de conta, remoção de anúncios, retenção de repasses e encerramento unilateral pela plataforma.",
    path: "/conta-bloqueada-mercado-livre",
  },
  {
    name: "Conta desativada no Instagram",
    description:
      "Análise de desativação de perfil, perda de acesso por invasão e restrição em conta profissional.",
    path: "/conta-bloqueada-instagram",
  },
  {
    name: "Número banido no WhatsApp",
    description:
      "Análise de banimento definitivo, suspensão temporária e perda de acesso a contas pessoais, Business e API.",
    path: "/conta-bloqueada-whatsapp",
  },
];

/**
 * Sem `aggregateRating`, `review`, `offers` com preço ou número de resultado —
 * o Provimento 205/2021 veda esses elementos na publicidade de advocacia.
 */
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: siteConfig.name,
      alternateName: siteConfig.shortName,
      inLanguage: "pt-BR",
      publisher: { "@id": `${siteConfig.url}/#organization` },
    },
    {
      "@type": "LegalService",
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      alternateName: siteConfig.shortName,
      legalName: siteConfig.legalName,
      taxID: siteConfig.cnpj,
      url: siteConfig.url,
      telephone: `+${siteConfig.whatsappNumber}`,
      description: siteConfig.description,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/apple-icon`,
        width: 180,
        height: 180,
      },
      image: `${siteConfig.url}/images/ceres/office-consultation-v3.jpg`,
      address: {
        "@type": "PostalAddress",
        streetAddress: siteConfig.address.street,
        addressLocality: siteConfig.address.city,
        addressRegion: siteConfig.address.state,
        postalCode: siteConfig.address.zip,
        addressCountry: siteConfig.address.country,
      },
      areaServed: { "@type": "Country", name: "Brasil" },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "atendimento jurídico",
        telephone: `+${siteConfig.whatsappNumber}`,
        availableLanguage: "Portuguese",
        areaServed: "BR",
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        description: siteConfig.serviceHours,
      },
      knowsAbout: [
        "Concursos públicos",
        "Direito administrativo",
        "Dívida ativa",
        "Execução fiscal",
        "Direito empresarial",
        "Direito societário",
        "Direito tributário",
        "Registro de marca",
        "Propriedade industrial",
        "Direito do consumidor",
        "Direito digital",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Áreas de atuação",
        itemListElement: serviceCatalog.map((service) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service.name,
            description: service.description,
            url: `${siteConfig.url}${service.path}`,
          },
        })),
      },
      ...(siteConfig.oab
        ? {
            hasCredential: {
              "@type": "EducationalOccupationalCredential",
              credentialCategory: "Inscrição profissional",
              recognizedBy: { "@type": "Organization", name: "Ordem dos Advogados do Brasil" },
              identifier: `OAB/PB ${siteConfig.oab}`,
            },
          }
        : {}),
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" data-scroll-behavior="smooth" className={`${literata.variable} ${dmSans.variable}`}>
      <body>
        <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
        <SiteHeader />
        <div id="conteudo">{children}</div>
        <SiteFooter />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
