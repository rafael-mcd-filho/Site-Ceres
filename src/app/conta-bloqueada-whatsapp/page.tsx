import { ServicePage } from "@/components/ServicePage";
import { whatsapp } from "@/content/plataformas";
import { pageMetadata } from "@/lib/metadata";

const description =
  "Número banido ou suspenso no WhatsApp e atendimento interrompido? Entenda o tipo de bloqueio, o que guardar e quais caminhos podem ser avaliados.";

export const metadata = pageMetadata({
  title: "Número Banido no WhatsApp",
  description,
  path: "/conta-bloqueada-whatsapp",
  ogSlug: "conta-bloqueada-whatsapp",
});

export default function Page() {
  return <ServicePage config={whatsapp} />;
}
