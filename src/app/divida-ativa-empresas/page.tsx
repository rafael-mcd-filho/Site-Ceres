import { ServicePage } from "@/components/ServicePage";
import { dividaAtiva } from "@/content/services";
import { pageMetadata } from "@/lib/metadata";

const description =
  "Cobrança tributária, citação, bloqueio ou penhora afetando a empresa? Entenda a origem da dívida, a fase da cobrança e os caminhos jurídicos possíveis.";

export const metadata = pageMetadata({
  title: "Dívida Ativa e Execução Fiscal",
  description,
  path: "/divida-ativa-empresas",
  ogSlug: "divida-ativa-empresas",
  socialTitle: "Dívida Ativa e Execução Fiscal para Empresas | Rabelo e Machado Advocacia",
});

export default function DividaAtivaPage() {
  return <ServicePage config={dividaAtiva} />;
}

