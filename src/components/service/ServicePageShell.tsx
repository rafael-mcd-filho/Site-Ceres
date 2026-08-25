import type { ReactNode } from "react";
import type { ServiceConfig } from "@/content/services";

type ServicePageShellProps = {
  slug: string;
  theme: ServiceConfig["theme"];
  children: ReactNode;
};

/**
 * Casco comum a toda página de serviço: define o tema visual e o slug usados
 * pelo CSS (`.service-page--{slug}`, `.theme-{tema}`). Uma página com uma
 * seção sob medida continua usando este casco — só troca o conteúdo interno.
 */
export function ServicePageShell({ slug, theme, children }: ServicePageShellProps) {
  return (
    <main id="topo" className={`service-page service-page--${slug} theme-${theme}`}>
      {children}
    </main>
  );
}
