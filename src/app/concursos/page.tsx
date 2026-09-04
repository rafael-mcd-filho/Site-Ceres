import { ServicePage } from "@/components/ServicePage";
import { concursos } from "@/content/services";
import { pageMetadata } from "@/lib/metadata";

const description =
  "Uma eliminação, nota, TAF ou decisão da banca colocou sua aprovação em risco? Entenda o que precisa ser analisado e quais caminhos podem ser avaliados.";

export const metadata = pageMetadata({
  title: "Advocacia em Concursos Públicos",
  description,
  path: "/concursos",
  ogSlug: "concursos",
});

export default function ConcursosPage() {
  return <ServicePage config={concursos} />;
}

