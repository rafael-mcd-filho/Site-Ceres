import type { Metadata, Viewport } from "next";
import { DM_Sans, Literata } from "next/font/google";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { siteConfig } from "@/lib/site";
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
    default: "Ceres Rabelo Advocacia | Concursos e Direito Empresarial",
    template: "%s | Ceres Rabelo",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: siteConfig.name,
    title: "Ceres Rabelo Advocacia",
    description: siteConfig.description,
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ceres Rabelo Advocacia",
    description: siteConfig.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#30070e",
  colorScheme: "light",
};

const serviceCatalog = [
  {
    name: "Advocacia em concursos públicos",
    description:
      "Análise de edital, atos da banca, eliminação, TAF, avaliação médica, cotas, investigação social, convocação e nomeação.",
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
      "Atuação consultiva em relações societárias, contratos, compliance, questões tributárias e proteção de marca.",
    path: "/direito-empresarial",
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
      inLanguage: "pt-BR",
      publisher: { "@id": `${siteConfig.url}/#organization` },
    },
    {
      "@type": "LegalService",
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      alternateName: siteConfig.shortName,
      url: siteConfig.url,
      email: siteConfig.email,
      description: siteConfig.description,
      sameAs: [siteConfig.instagram],
      founder: { "@id": `${siteConfig.url}/#ceres-rabelo` },
      areaServed: { "@type": "Country", name: "Brasil" },
      knowsAbout: [
        "Concursos públicos",
        "Direito administrativo",
        "Dívida ativa",
        "Execução fiscal",
        "Direito empresarial",
        "Direito tributário",
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
    },
    {
      "@type": "Person",
      "@id": `${siteConfig.url}/#ceres-rabelo`,
      name: "Ceres Rabelo",
      url: siteConfig.url,
      jobTitle: "Advogada, professora e autora",
      description:
        "Advogada, mestra e doutoranda em Direito, professora no CERS e no Gran Cursos Online e autora.",
      sameAs: [siteConfig.instagram],
      worksFor: { "@id": `${siteConfig.url}/#organization` },
      knowsAbout: [
        "Concursos públicos",
        "Direito administrativo",
        "Direito empresarial",
      ],
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
    <html lang="pt-BR" className={`${literata.variable} ${dmSans.variable}`}>
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
