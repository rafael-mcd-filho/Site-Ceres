import { ServicePage } from "@/components/ServicePage";
import { empresarial } from "@/content/services";
import { pageMetadata } from "@/lib/metadata";

const description =
  "A empresa cresceu ou precisa tomar uma decisão importante? Organize contratos, relações entre sócios e mudanças na operação com apoio jurídico.";

export const metadata = pageMetadata({
  title: "Advocacia Empresarial",
  description,
  path: "/direito-empresarial",
  ogSlug: "direito-empresarial",
});

export default function DireitoEmpresarialPage() {
  return <ServicePage config={empresarial} />;
}

