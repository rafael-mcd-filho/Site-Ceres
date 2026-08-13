import type { FaqItem } from "@/components/FaqList";
import { siteConfig } from "@/lib/site";

/**
 * Schemas mantidos dentro do Provimento 205/2021: sem `aggregateRating`,
 * `review`, `offers` com preço ou qualquer número de resultado.
 */

export function faqPageSchema(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

export function serviceSchema({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType: name,
    url: `${siteConfig.url}${path}`,
    provider: { "@id": `${siteConfig.url}/#organization` },
    areaServed: { "@type": "Country", name: "Brasil" },
    audience: { "@type": "Audience", audienceType: "Pessoas físicas e empresas" },
  };
}

export function breadcrumbSchema(trail: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path}`,
    })),
  };
}
