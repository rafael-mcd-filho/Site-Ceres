import { ServicePage } from "@/components/ServicePage";
import { instagram } from "@/content/plataformas";
import { pageMetadata } from "@/lib/metadata";

const description =
  "Perfil do Instagram desativado, invadido ou sem acesso? Veja o que registrar, como identificar o problema e quais caminhos podem ser avaliados.";

export const metadata = pageMetadata({
  title: "Conta do Instagram Desativada",
  description,
  path: "/conta-bloqueada-instagram",
  ogSlug: "conta-bloqueada-instagram",
});

export default function Page() {
  return <ServicePage config={instagram} />;
}
