import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { InstagramIcon } from "@/components/InstagramIcon";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { defaultWhatsAppMessage, siteConfig, whatsappHref } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div className="site-footer__brand">
          <Image
            src="/images/logo-ceres-rabelo.png"
            alt="Rabelo e Machado Advocacia"
            width={94}
            height={139}
            sizes="94px"
            style={{ height: "auto" }}
          />
          <p>
            Escritório de advocacia com atuação orientada por clareza, método e
            atenção ao contexto de cada situação.
          </p>
        </div>

        <div>
          <p className="footer-label">Áreas de atuação</p>
          <ul className="footer-links">
            <li><Link href="/concursos">Concursos públicos</Link></li>
            <li><Link href="/divida-ativa-empresas">Dívida ativa e execução fiscal</Link></li>
            <li><Link href="/direito-empresarial">Direito empresarial</Link></li>
            <li><Link href="/registro-de-marca">Registro de marca</Link></li>
          </ul>
        </div>

        <div>
          <p className="footer-label">Contas bloqueadas</p>
          <ul className="footer-links">
            <li><Link href="/conta-bloqueada-mercado-livre">Mercado Livre</Link></li>
            <li><Link href="/conta-bloqueada-instagram">Instagram</Link></li>
            <li><Link href="/conta-bloqueada-whatsapp">WhatsApp</Link></li>
          </ul>
        </div>

        <div>
          <p className="footer-label">Contato</p>
          <ul className="footer-links">
            <li>
              <a href={whatsappHref(defaultWhatsAppMessage)} target="_blank" rel="noreferrer">
                <WhatsAppIcon size={15} /> WhatsApp
              </a>
            </li>
            <li>
              <a href={`mailto:${siteConfig.email}`}>
                <Mail size={15} aria-hidden="true" /> {siteConfig.email}
              </a>
            </li>
            <li>
              <a href={siteConfig.instagram} target="_blank" rel="noreferrer">
                <InstagramIcon size={15} /> @profa.ceresrabelo
              </a>
            </li>
            <li className="footer-address">
              <MapPin size={15} aria-hidden="true" />
              <address>
                {siteConfig.address.street}
                <br />
                {siteConfig.address.district} · {siteConfig.address.city}/{siteConfig.address.state}
                <br />
                CEP {siteConfig.address.zip}
              </address>
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
        <p>
          © {new Date().getFullYear()} {siteConfig.name} — {siteConfig.legalName} · CNPJ {siteConfig.cnpj}
          {siteConfig.oab ? ` · OAB/PB ${siteConfig.oab}` : ""}
        </p>
        <p>Conteúdo meramente informativo, sem oferta de serviços. Cada caso exige análise individual.</p>
      </div>
    </footer>
  );
}
