import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock3, MapPin } from "lucide-react";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import {
  defaultWhatsAppMessage,
  siteConfig,
  whatsappHref,
  whatsappMessageWithSource,
} from "@/lib/site";

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
            Orientação jurídica para pessoas e empresas que precisam entender o
            problema antes de decidir o próximo passo.
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
              <a
                href={whatsappHref(
                  whatsappMessageWithSource(defaultWhatsAppMessage, "rodapé geral do site"),
                )}
                target="_blank"
                rel="noreferrer"
              >
                <WhatsAppIcon size={15} /> WhatsApp {siteConfig.whatsappDisplay}
              </a>
            </li>
            <li className="footer-address">
              <Clock3 size={15} aria-hidden="true" />
              <span>Segunda a sexta · horário comercial · retorno médio em 24 horas</span>
            </li>
            <li className="footer-address">
              <MapPin size={15} aria-hidden="true" />
              <span>Online em todo o Brasil · presencial em {siteConfig.address.city}/{siteConfig.address.state}</span>
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
          © {new Date().getFullYear()} {siteConfig.name} · CNPJ {siteConfig.cnpj}
          {siteConfig.oab ? ` · OAB/PB ${siteConfig.oab}` : ""}
        </p>
        <p>Conteúdo informativo. Cada situação exige análise individual e nenhum resultado pode ser garantido.</p>
      </div>
    </footer>
  );
}
