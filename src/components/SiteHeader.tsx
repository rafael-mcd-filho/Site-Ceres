"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BadgeCheck,
  Building2,
  ChevronDown,
  FileSearch,
  Home,
  Menu,
  Scale,
  X,
  type LucideIcon,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { CtaButton } from "@/components/CtaButton";
import {
  defaultWhatsAppMessage,
  siteConfig,
  whatsappHref,
  whatsappMessageWithSource,
} from "@/lib/site";

const navItems: Array<{ href: string; label: string; icon: LucideIcon }> = [
  { href: "/", label: "Início", icon: Home },
  { href: "/concursos", label: "Concursos", icon: Scale },
  { href: "/divida-ativa-empresas", label: "Dívida ativa", icon: FileSearch },
  { href: "/direito-empresarial", label: "Empresarial", icon: Building2 },
  { href: "/registro-de-marca", label: "Marca", icon: BadgeCheck },
];

/** Três páginas irmãs: viram um submenu para a barra não estourar. */
const plataformaItems = [
  { href: "/conta-bloqueada-mercado-livre", label: "Mercado Livre", platform: "mercado-livre", logoSrc: "/images/ceres/platform-mercado-livre.svg", navWidth: 32, navHeight: 27, mobileWidth: 32, mobileHeight: 27 },
  { href: "/conta-bloqueada-instagram", label: "Instagram", platform: "instagram", logoSrc: "/images/ceres/platform-instagram.svg", navWidth: 23, navHeight: 23, mobileWidth: 24, mobileHeight: 24 },
  { href: "/conta-bloqueada-whatsapp", label: "WhatsApp", platform: "whatsapp", logoSrc: "/images/ceres/platform-whatsapp.svg", navWidth: 27, navHeight: 27, mobileWidth: 28, mobileHeight: 28 },
];

const pageLabels: Record<string, string> = {
  "/": "página inicial",
  "/concursos": "página de concursos públicos",
  "/divida-ativa-empresas": "página de dívida ativa e execução fiscal",
  "/direito-empresarial": "página de direito empresarial",
  "/registro-de-marca": "página de registro de marca",
  "/conta-bloqueada-mercado-livre": "página de conta bloqueada no Mercado Livre",
  "/conta-bloqueada-instagram": "página de conta bloqueada no Instagram",
  "/conta-bloqueada-whatsapp": "página de número bloqueado no WhatsApp",
  "/politica-de-privacidade": "política de privacidade",
};

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const [groupOpen, setGroupOpen] = useState(false);
  const groupRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const emPlataforma = plataformaItems.some((item) => item.href === pathname);
  const currentPageLabel = pageLabels[pathname] || `página ${pathname}`;
  const headerWhatsAppMessage = whatsappMessageWithSource(
    defaultWhatsAppMessage,
    `${currentPageLabel}, cabeçalho`,
  );

  // Links fecham o menu diretamente; voltar/avançar é um evento externo.
  useEffect(() => {
    const closeMenus = () => {
      setOpen(false);
      setGroupOpen(false);
    };
    window.addEventListener("popstate", closeMenus);
    return () => window.removeEventListener("popstate", closeMenus);
  }, []);

  // Submenu fecha ao clicar fora ou no Escape.
  useEffect(() => {
    if (!groupOpen) return;

    const onPointerDown = (event: PointerEvent) => {
      if (!groupRef.current?.contains(event.target as Node)) setGroupOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setGroupOpen(false);
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [groupOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const menu = menuRef.current;
    const content = document.getElementById("conteudo");
    const footer = document.querySelector<HTMLElement>(".site-footer");
    const previous = document.body.style.overflow;
    const toggle = toggleRef.current;
    const previousContentInert = content?.inert;
    const previousFooterInert = footer?.inert;
    document.body.style.overflow = "hidden";
    if (content) content.inert = true;
    if (footer) footer.inert = true;

    const focusFrame = requestAnimationFrame(() => {
      menu?.querySelector<HTMLElement>("a[href], button:not([disabled])")?.focus();
    });

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        return;
      }

      if (event.key !== "Tab" || !menu) return;
      const focusable = Array.from(
        menu.querySelectorAll<HTMLElement>("a[href], button:not([disabled]), [tabindex]:not([tabindex='-1'])"),
      ).filter((element) => !element.hasAttribute("hidden"));
      if (!focusable.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);

    return () => {
      cancelAnimationFrame(focusFrame);
      document.body.style.overflow = previous;
      if (content) content.inert = previousContentInert ?? false;
      if (footer) footer.inert = previousFooterInert ?? false;
      document.removeEventListener("keydown", onKeyDown);
      toggle?.focus();
    };
  }, [open]);

  return (
    <>
      <header
        className={`site-header ${scrolled ? "is-scrolled" : ""} ${open ? "is-menu-open" : ""}`}
      >
        <div className="site-header__inner container">
        <Link href="/" className="brand" aria-label="Rabelo e Machado Advocacia, início">
          {/* A assinatura já traz o nome e o "Advocacia"; texto ao lado seria
              repetição. A altura vem do CSS, então `width` fica em auto. */}
          <Image
            src="/images/logo-rabelo-machado.png"
            alt=""
            width={240}
            height={44}
            preload
            className="brand__logo"
            style={{ width: "auto" }}
          />
        </Link>

        <nav className="desktop-nav" aria-label="Navegação principal">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}

          <div className="nav-group" ref={groupRef}>
            <button
              type="button"
              className="nav-group__trigger"
              aria-expanded={groupOpen}
              aria-controls="nav-plataformas"
              aria-current={emPlataforma ? "page" : undefined}
              onClick={() => setGroupOpen((value) => !value)}
            >
              Contas bloqueadas
              <ChevronDown size={14} aria-hidden="true" />
            </button>

            <div
              id="nav-plataformas"
              className={`nav-group__panel ${groupOpen ? "is-open" : ""}`}
              hidden={!groupOpen}
            >
              {plataformaItems.map((item) => {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={pathname === item.href ? "page" : undefined}
                    onClick={() => setGroupOpen(false)}
                  >
                    <span className="platform-logo-frame" aria-hidden="true">
                      <Image className={`platform-logo platform-logo--nav platform-logo--${item.platform}`} src={item.logoSrc} alt="" width={item.navWidth} height={item.navHeight} />
                    </span>
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </nav>

        <CtaButton
          href={whatsappHref(headerWhatsAppMessage)}
          seal="whatsapp"
          external
          className="button--small header-cta"
          data-event="whatsapp_click"
        >
          Contar meu caso
        </CtaButton>

        <button
          ref={toggleRef}
          className="menu-toggle"
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </header>

      {/* Fora do <header>: o `backdrop-filter` dele criaria bloco contentor
          para o `position: fixed` e prenderia o overlay à altura do header. */}
      <div
        ref={menuRef}
        id="mobile-menu"
        className={`mobile-menu ${open ? "is-open" : ""}`}
        aria-hidden={!open}
      >
        <nav className="mobile-menu__nav container" aria-label="Navegação mobile">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={pathname === item.href ? "page" : undefined}
                onClick={() => setOpen(false)}
              >
                <Icon size={20} aria-hidden="true" />
                <span>{item.label}</span>
              </Link>
            );
          })}

          <p className="mobile-menu__group">Contas bloqueadas</p>
          {plataformaItems.map((item) => {
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={pathname === item.href ? "page" : undefined}
                onClick={() => setOpen(false)}
              >
                <span className="platform-logo-frame" aria-hidden="true">
                  <Image className={`platform-logo platform-logo--mobile platform-logo--${item.platform}`} src={item.logoSrc} alt="" width={item.mobileWidth} height={item.mobileHeight} />
                </span>
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="mobile-menu__foot container">
          <CtaButton
            href={whatsappHref(
              whatsappMessageWithSource(
                defaultWhatsAppMessage,
                `${currentPageLabel}, menu mobile`,
              ),
            )}
            seal="whatsapp"
            external
            data-event="whatsapp_click"
          >
            Contar minha situação
          </CtaButton>
          <p>
            Escritório de advocacia
            {siteConfig.oab ? ` · OAB/PB ${siteConfig.oab}` : ""}
          </p>
        </div>
      </div>
    </>
  );
}
