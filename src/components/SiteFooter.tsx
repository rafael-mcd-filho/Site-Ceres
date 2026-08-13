import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Camera, Mail } from "lucide-react";
import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div className="site-footer__brand">
          <Image
            src="/images/logo-ceres-rabelo.png"
            alt="Ceres Rabelo Advocacia"
            width={94}
            height={151}
            sizes="94px"
            style={{ height: "auto" }}
          />
          <p>
            Advocacia com clareza, método e atenção ao contexto de cada situação.
          </p>
        </div>

        <div>
          <p className="footer-label">Áreas</p>
          <ul className="footer-links">
            <li><Link href="/concursos">Concursos públicos</Link></li>
            <li><Link href="/divida-ativa-empresas">Dívida ativa para empresas</Link></li>
            <li><Link href="/direito-empresarial">Direito empresarial</Link></li>
          </ul>
        </div>

        <div>
          <p className="footer-label">Contato</p>
          <ul className="footer-links">
            <li>
              <a href={`mailto:${siteConfig.email}`}>
                <Mail size={15} aria-hidden="true" /> {siteConfig.email}
              </a>
            </li>
            <li>
              <a href={siteConfig.instagram} target="_blank" rel="noreferrer">
                <Camera size={15} aria-hidden="true" /> @profa.ceresrabelo
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="footer-label">Informações</p>
          <ul className="footer-links">
            <li><Link href="/politica-de-privacidade">Política de privacidade</Link></li>
            <li>
              <a href="#topo">
                Voltar ao topo <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container site-footer__bottom">
        <p>© {new Date().getFullYear()} Ceres Rabelo Advocacia.</p>
        <p>Conteúdo informativo. Cada situação exige análise individual.</p>
      </div>
    </footer>
  );
}
