import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { MarkedTitle } from "@/components/MarkedTitle";

const quickLinks = [
  { href: "/concursos", label: "Concursos públicos" },
  { href: "/direito-empresarial", label: "Direito empresarial" },
  { href: "/conta-bloqueada-mercado-livre", label: "Conta bloqueada" },
  { href: "/registro-de-marca", label: "Registro de marca" },
];

export default function NotFound() {
  return (
    <main id="topo" className="not-found container">
      <div className="not-found__copy">
        <p className="eyebrow">ERRO 404</p>
        <h1>
          <MarkedTitle text="Esta página não foi encontrada." mark="não foi encontrada" />
        </h1>
        <p>O endereço pode ter mudado. Você pode voltar ao início ou seguir direto para uma das áreas mais procuradas.</p>
        <Link className="button" href="/"><ArrowLeft size={16} /> Voltar para o início</Link>
      </div>

      <figure className="not-found__visual" aria-hidden="true">
        <Image src="/images/ceres/not-found.webp" alt="" fill sizes="(max-width: 760px) calc(100vw - 30px), 420px" />
      </figure>

      <nav className="not-found__links" aria-label="Áreas mais procuradas">
        <p>Áreas mais procuradas</p>
        {quickLinks.map((item) => (
          <Link href={item.href} key={item.href}>
            <span>{item.label}</span>
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        ))}
      </nav>
    </main>
  );
}

