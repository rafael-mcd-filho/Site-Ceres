import type { Metadata } from "next";
import { ogImageFor } from "@/lib/og";
import { ServicePage } from "@/components/ServicePage";
import { concursos } from "@/content/services";

const description =
  "Uma eliminação, nota, TAF ou decisão da banca colocou sua aprovação em risco? Entenda o que precisa ser analisado e quais caminhos podem ser avaliados.";

export const metadata: Metadata = {
  title: "Advocacia em Concursos Públicos",
  description,
  alternates: { canonical: "/concursos" },
  openGraph: {
    title: "Advocacia em Concursos Públicos | Rabelo e Machado Advocacia",
    description,
    url: "/concursos",
    images: ogImageFor("concursos"),
  },
};

export default function ConcursosPage() {
  return <ServicePage config={concursos} />;
}

