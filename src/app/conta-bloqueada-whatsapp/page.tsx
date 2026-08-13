import type { Metadata } from "next";
import { ogImageFor } from "@/lib/og";
import { ServicePage } from "@/components/ServicePage";
import { whatsapp } from "@/content/plataformas";

const description =
  "Número banido ou suspenso no WhatsApp: diferença entre as restrições, o que guardar como prova e quais caminhos podem ser avaliados.";

export const metadata: Metadata = {
  title: "Número Banido no WhatsApp",
  description,
  alternates: { canonical: "/conta-bloqueada-whatsapp" },
  openGraph: {
    title: "Número Banido no WhatsApp | Ceres Rabelo",
    description,
    url: "/conta-bloqueada-whatsapp",
    images: ogImageFor("conta-bloqueada-whatsapp"),
  },
};

export default function Page() {
  return <ServicePage config={whatsapp} />;
}
