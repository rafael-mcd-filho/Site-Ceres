import type { Metadata } from "next";
import { ogImageFor } from "@/lib/og";
import { ServicePage } from "@/components/ServicePage";
import { instagram } from "@/content/plataformas";

const description =
  "Perfil desativado ou sem acesso no Instagram: como identificar o tipo de bloqueio, o que registrar e quais caminhos existem.";

export const metadata: Metadata = {
  title: "Conta do Instagram Desativada",
  description,
  alternates: { canonical: "/conta-bloqueada-instagram" },
  openGraph: {
    title: "Conta do Instagram Desativada | Rabelo e Machado Advocacia",
    description,
    url: "/conta-bloqueada-instagram",
    images: ogImageFor("conta-bloqueada-instagram"),
  },
};

export default function Page() {
  return <ServicePage config={instagram} />;
}
