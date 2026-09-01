import type { Metadata } from "next";
import { ogImageFor } from "@/lib/og";
import { ServicePage } from "@/components/ServicePage";
import { mercadoLivre } from "@/content/plataformas";

const description =
  "Conta suspensa no Mercado Livre, vendas interrompidas ou valores retidos? Entenda o motivo informado, o impacto na operação e os caminhos que podem ser avaliados.";

export const metadata: Metadata = {
  title: "Conta Bloqueada no Mercado Livre",
  description,
  alternates: { canonical: "/conta-bloqueada-mercado-livre" },
  openGraph: {
    title: "Conta Bloqueada no Mercado Livre | Rabelo e Machado Advocacia",
    description,
    url: "/conta-bloqueada-mercado-livre",
    images: ogImageFor("conta-bloqueada-mercado-livre"),
  },
};

export default function Page() {
  return <ServicePage config={mercadoLivre} />;
}
