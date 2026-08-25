import type { Metadata } from "next";
import { ogImageFor } from "@/lib/og";
import { ServicePage } from "@/components/ServicePage";
import { dividaAtiva } from "@/content/services";

const description =
  "Cobrança, citação, bloqueio de conta ou penhora por dívida da empresa: o que verificar, quais documentos reunir e quais caminhos existem em dívida ativa e execução fiscal.";

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

