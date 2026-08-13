import type { Metadata } from "next";
import { ogImageFor } from "@/lib/og";
import { ServicePage } from "@/components/ServicePage";
import { dividaAtiva } from "@/content/services";

const description =
  "Entenda o que significa a dívida ativa, quais documentos reunir e quais caminhos jurídicos podem ser examinados em uma execução fiscal.";

export const metadata: Metadata = {
  title: "Dívida Ativa e Execução Fiscal para Empresas",
  description,
  alternates: { canonical: "/divida-ativa-empresas" },
  openGraph: {
    title: "Dívida Ativa e Execução Fiscal para Empresas | Ceres Rabelo",
    description,
    url: "/divida-ativa-empresas",
    images: ogImageFor("divida-ativa-empresas"),
  },
};

export default function DividaAtivaPage() {
  return <ServicePage config={dividaAtiva} />;
}

