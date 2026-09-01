import type { Metadata } from "next";
import { ogImageFor } from "@/lib/og";
import { ServicePage } from "@/components/ServicePage";
import { instagram } from "@/content/plataformas";

const description =
  "Perfil do Instagram desativado, invadido ou sem acesso? Veja o que registrar, como identificar o problema e quais caminhos podem ser avaliados.";

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
