import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

type CtaButtonProps = {
  href: string;
  children: React.ReactNode;
  /**
   * `arrow` desliza o círculo da direita para a esquerda no hover.
   * `whatsapp` mantém o selo fixo — a marca não gira nem se desloca.
   */
  seal?: "arrow" | "whatsapp";
  variant?: "solid" | "ghost" | "light";
  external?: boolean;
  className?: string;
  /** IDs e data-* estáveis para acionar tags no GTM sem depender do texto. */
  id?: string;
  "data-event"?: string;
  "data-cta"?: string;
  "data-cta-position"?: string;
};

export function CtaButton({
  href,
  children,
  seal = "arrow",
  variant = "solid",
  external = false,
  className = "",
  ...rest
}: CtaButtonProps) {
  const classes = [
    "button",
    variant === "ghost" && "button--ghost",
    variant === "light" && "button--light",
    seal === "whatsapp" ? "button--whats" : "button--cta",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      <span className="button__label">{children}</span>
      <span className={`button__seal button__seal--${seal}`} aria-hidden="true">
        {seal === "whatsapp" ? <WhatsAppIcon size={16} /> : <ArrowUpRight size={15} />}
      </span>
    </>
  );

  if (external) {
    return (
      <a className={classes} href={href} target="_blank" rel="noreferrer" {...rest}>
        {content}
      </a>
    );
  }

  return (
    <Link className={classes} href={href} {...rest}>
      {content}
    </Link>
  );
}
