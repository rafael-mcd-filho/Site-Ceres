import type { Metadata } from "next";
import { ogImageFor } from "@/lib/og";
import { ServicePage } from "@/components/ServicePage";
import { empresarial } from "@/content/services";

const description =
  "Atuação em direito societário, contratos, compliance, questões tributárias e proteção de marca para empresas e sócios.";

export const metadata: Metadata = {
  title: "Advocacia Empresarial",
  description,
  alternates: { canonical: "/direito-empresarial" },
  openGraph: {
    title: "Advocacia Empresarial | Ceres Rabelo",
    description,
    url: "/direito-empresarial",
    images: ogImageFor("direito-empresarial"),
  },
};

export default function DireitoEmpresarialPage() {
  return <ServicePage config={empresarial} />;
}

