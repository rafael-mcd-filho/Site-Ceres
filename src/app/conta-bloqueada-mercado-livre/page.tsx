import { ServicePage } from "@/components/ServicePage";
import { mercadoLivre } from "@/content/plataformas";
import { pageMetadata } from "@/lib/metadata";

const description =
  "Conta suspensa no Mercado Livre, vendas interrompidas ou valores retidos? Entenda o motivo, documente o impacto e avalie os caminhos jurídicos possíveis.";

export const metadata = pageMetadata({
  title: "Conta Bloqueada no Mercado Livre",
  description,
  path: "/conta-bloqueada-mercado-livre",
  ogSlug: "conta-bloqueada-mercado-livre",
});

export default function Page() {
  return <ServicePage config={mercadoLivre} />;
}
