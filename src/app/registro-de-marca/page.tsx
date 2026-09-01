import type { Metadata } from "next";
import { ogImageFor } from "@/lib/og";
import { ServicePage } from "@/components/ServicePage";
import { registroDeMarca } from "@/content/marca";

const description =
  "Quer proteger o nome que sua empresa está construindo? Pesquisa de marcas parecidas, pedido no INPI e acompanhamento do registro até a decisão.";

export const metadata: Metadata = {
  title: "Registro de Marca no INPI",
  description,
  alternates: { canonical: "/registro-de-marca" },
  openGraph: {
    title: "Registro de Marca no INPI | Rabelo e Machado Advocacia",
    description,
    url: "/registro-de-marca",
    images: ogImageFor("registro-de-marca"),
  },
};

export default function Page() {
  return <ServicePage config={registroDeMarca} />;
}
