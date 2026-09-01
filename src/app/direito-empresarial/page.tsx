import type { Metadata } from "next";
import { ogImageFor } from "@/lib/og";
import { ServicePage } from "@/components/ServicePage";
import { empresarial } from "@/content/services";

const description =
  "A empresa cresceu ou precisa tomar uma decisão importante? Organize contratos, relações entre sócios e mudanças na operação com apoio jurídico.";

export const metadata: Metadata = {
  title: "Advocacia Empresarial",
  description,
  alternates: { canonical: "/direito-empresarial" },
  openGraph: {
    title: "Advocacia Empresarial | Rabelo e Machado Advocacia",
    description,
    url: "/direito-empresarial",
    images: ogImageFor("direito-empresarial"),
  },
};

export default function DireitoEmpresarialPage() {
  return <ServicePage config={empresarial} />;
}

