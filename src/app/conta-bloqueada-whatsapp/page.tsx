import type { Metadata } from "next";
import { ogImageFor } from "@/lib/og";
import { ServicePage } from "@/components/ServicePage";
import { whatsapp } from "@/content/plataformas";

const description =
  "Número banido ou suspenso no WhatsApp e atendimento interrompido? Entenda o tipo de bloqueio, o que guardar e quais caminhos podem ser avaliados.";

export const metadata: Metadata = {
  title: "Número Banido no WhatsApp",
  description,
  alternates: { canonical: "/conta-bloqueada-whatsapp" },
  openGraph: {
    title: "Número Banido no WhatsApp | Rabelo e Machado Advocacia",
    description,
    url: "/conta-bloqueada-whatsapp",
    images: ogImageFor("conta-bloqueada-whatsapp"),
  },
};

export default function Page() {
  return <ServicePage config={whatsapp} />;
}
