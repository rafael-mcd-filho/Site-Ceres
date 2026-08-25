import type { Metadata } from "next";
import { ogImageFor } from "@/lib/og";
import { ServicePage } from "@/components/ServicePage";
import { registroDeMarca } from "@/content/marca";

const description =
  "Usa um nome e quer protegê-lo? Pesquisa de marcas anteriores, escolha da classe, pedido de registro no INPI e acompanhamento de exigências e oposições até a decisão.";

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
