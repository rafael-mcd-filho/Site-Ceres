import type { Metadata } from "next";
import { ogImageFor } from "@/lib/og";
import { ServicePage } from "@/components/ServicePage";
import { empresarial } from "@/content/services";

const description =
  "Entrada e saída de sócio, conflito na sociedade, contrato social e contratos empresariais: atuação em direito societário e empresarial para empresas e sócios.";

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

