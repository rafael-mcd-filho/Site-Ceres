import { ServicePage } from "@/components/ServicePage";
import { registroDeMarca } from "@/content/marca";
import { pageMetadata } from "@/lib/metadata";

const description =
  "Quer proteger o nome que sua empresa está construindo? Pesquisa de marcas parecidas, pedido no INPI e acompanhamento do registro até a decisão.";

export const metadata = pageMetadata({
  title: "Registro de Marca no INPI",
  description,
  path: "/registro-de-marca",
  ogSlug: "registro-de-marca",
});

export default function Page() {
  return <ServicePage config={registroDeMarca} />;
}
