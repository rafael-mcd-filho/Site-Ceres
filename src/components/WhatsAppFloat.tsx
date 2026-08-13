import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { whatsappHref } from "@/lib/site";

type WhatsAppFloatProps = {
  message: string;
  label?: string;
};

export function WhatsAppFloat({ message, label = "Falar pelo WhatsApp" }: WhatsAppFloatProps) {
  return (
    <a
      id="cta-whatsapp-float"
      className="whatsapp-float"
      href={whatsappHref(message)}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      data-event="whatsapp_click"
      data-cta="whatsapp-float"
      data-cta-position="flutuante"
    >
      <WhatsAppIcon size={22} />
      <span>{label}</span>
    </a>
  );
}
