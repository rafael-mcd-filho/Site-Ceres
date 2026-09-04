import type { Metadata } from "next";
import { ogImageFor, type OgSlug } from "@/lib/og";
import { siteConfig } from "@/lib/site";

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  ogSlug: OgSlug;
  /** Evita aplicar o template de marca novamente no título da página inicial. */
  absoluteTitle?: boolean;
  /** Permite uma versão mais curta do título nas redes sociais. */
  socialTitle?: string;
  index?: boolean;
};

/**
 * Mantém canonical, Open Graph e Twitter coerentes em todas as páginas.
 * O objeto `openGraph` precisa repetir os campos globais porque o Next faz
 * merge raso de metadados aninhados entre layout e página.
 */
export function pageMetadata({
  title,
  description,
  path,
  ogSlug,
  absoluteTitle = false,
  socialTitle,
  index = true,
}: PageMetadataOptions): Metadata {
  const resolvedSocialTitle = socialTitle ?? `${title} | ${siteConfig.name}`;
  const images = ogImageFor(ogSlug);

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "pt_BR",
      siteName: siteConfig.name,
      title: resolvedSocialTitle,
      description,
      url: path,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedSocialTitle,
      description,
      images,
    },
    robots: index
      ? {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        }
      : {
          index: false,
          follow: false,
          googleBot: { index: false, follow: false, noimageindex: true },
        },
  };
}
