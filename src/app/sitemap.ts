import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-09-01T00:00:00-03:00");

  return [
    { url: `${siteConfig.url}/`, lastModified },
    { url: `${siteConfig.url}/concursos`, lastModified },
    { url: `${siteConfig.url}/divida-ativa-empresas`, lastModified },
    { url: `${siteConfig.url}/direito-empresarial`, lastModified },
    { url: `${siteConfig.url}/registro-de-marca`, lastModified },
    { url: `${siteConfig.url}/conta-bloqueada-mercado-livre`, lastModified },
    { url: `${siteConfig.url}/conta-bloqueada-instagram`, lastModified },
    { url: `${siteConfig.url}/conta-bloqueada-whatsapp`, lastModified },
    // Página de confiança: indexável de propósito, para quem procura a política
    // encontrá-la sem depender de navegar pelo rodapé.
    { url: `${siteConfig.url}/politica-de-privacidade`, lastModified },
  ];
}
