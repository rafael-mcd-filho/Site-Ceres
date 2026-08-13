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
  Camera,
  Menu,
  MessageSquare,
  Scale,
  ShoppingBag,
  X,
  type LucideIcon,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { CtaButton } from "@/components/CtaButton";
import { defaultWhatsAppMessage, siteConfig, whatsappHref } from "@/lib/site";

const navItems: Array<{ href: string; label: string; icon: LucideIcon }> = [
  { href: "/", label: "Início", icon: Home },
  { href: "/concursos", label: "Concursos", icon: Scale },
  { href: "/divida-ativa-empresas", label: "Dívida ativa", icon: FileSearch },
  { href: "/direito-empresarial", label: "Empresarial", icon: Building2 },
  { href: "/registro-de-marca", label: "Marca", icon: BadgeCheck },
];

/** Três páginas irmãs: viram um submenu para a barra não estourar. */
const plataformaItems: Array<{ href: string; label: string; icon: LucideIcon }> = [
  { href: "/conta-bloqueada-mercado-livre", label: "Mercado Livre", icon: ShoppingBag },
  { href: "/conta-bloqueada-instagram", label: "Instagram", icon: Camera },
  { href: "/conta-bloqueada-whatsapp", label: "WhatsApp", icon: MessageSquare },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const [groupOpen, setGroupOpen] = useState(false);
  const [lastPathname, setLastPathname] = useState(pathname);
  const groupRef = useRef<HTMLDivElement>(null);
  const emPlataforma = plataformaItems.some((item) => item.href === pathname);

  // Fecha os menus ao navegar — inclusive por voltar/avançar do navegador.
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setOpen(false);
    setGroupOpen(false);
  }

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

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      <header
        className={`site-header ${scrolled ? "is-scrolled" : ""} ${open ? "is-menu-open" : ""}`}
      >
        <div className="site-header__inner container">
        <Link href="/" className="brand" aria-label="Ceres Rabelo Advocacia — início">
          <Image
            src="/images/logo-ceres-rabelo.png"
            alt=""
            width={38}
            height={62}
            priority
            className="brand__mark"
          />
          <span className="brand__text">
            <strong>Ceres Rabelo</strong>
            <small>Advocacia</small>
          </span>
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
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={pathname === item.href ? "page" : undefined}
                  >
                    <Icon size={16} aria-hidden="true" />
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </nav>

        <CtaButton
          href={whatsappHref(defaultWhatsAppMessage)}
          seal="whatsapp"
          external
          className="button--small header-cta"
          data-event="whatsapp_click"
        >
          Falar sobre o caso
        </CtaButton>

        <button
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
              >
                <Icon size={20} aria-hidden="true" />
                <span>{item.label}</span>
              </Link>
            );
          })}

          <p className="mobile-menu__group">Contas bloqueadas</p>
          {plataformaItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={pathname === item.href ? "page" : undefined}
              >
                <Icon size={20} aria-hidden="true" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="mobile-menu__foot container">
          <CtaButton
            href={whatsappHref(defaultWhatsAppMessage)}
            seal="whatsapp"
            external
            data-event="whatsapp_click"
          >
            Falar pelo WhatsApp
          </CtaButton>
          <p>
            Advocacia · Docência · Pesquisa
            {siteConfig.oab ? ` · OAB/PB ${siteConfig.oab}` : ""}
          </p>
        </div>
      </div>
    </>
  );
}
