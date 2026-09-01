import type { Metadata } from "next";
import { ogImageFor } from "@/lib/og";
import { ServicePage } from "@/components/ServicePage";
import { dividaAtiva } from "@/content/services";

const description =
  "Cobrança tributária, citação, conta bloqueada ou penhora afetando a empresa? Entenda a origem da dívida, a fase da cobrança e as alternativas que podem ser avaliadas.";

export const metadata: Metadata = {
  title: "Dívida Ativa e Execução Fiscal para Empresas",
  description,
  alternates: { canonical: "/divida-ativa-empresas" },
  openGraph: {
    title: "Dívida Ativa e Execução Fiscal para Empresas | Rabelo e Machado Advocacia",
    description,
    url: "/divida-ativa-empresas",
    images: ogImageFor("divida-ativa-empresas"),
  },
};

export default function DividaAtivaPage() {
  return <ServicePage config={dividaAtiva} />;
}

