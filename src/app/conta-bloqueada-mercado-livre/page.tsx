import type { Metadata } from "next";
import { ogImageFor } from "@/lib/og";
import { ServicePage } from "@/components/ServicePage";
import { mercadoLivre } from "@/content/plataformas";

const description =
  "Conta suspensa ou bloqueada no Mercado Livre: o que o aviso significa, quais registros reunir e quais caminhos podem ser examinados.";

export const metadata: Metadata = {
  title: "Conta Bloqueada no Mercado Livre",
  description,
  alternates: { canonical: "/conta-bloqueada-mercado-livre" },
  openGraph: {
    title: "Conta Bloqueada no Mercado Livre | Ceres Rabelo",
    description,
    url: "/conta-bloqueada-mercado-livre",
    images: ogImageFor("conta-bloqueada-mercado-livre"),
  },
};

export default function Page() {
  return <ServicePage config={mercadoLivre} />;
}
