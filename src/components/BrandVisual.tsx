import Image from "next/image";

type BrandVisualProps = {
  theme?: "wine" | "forest" | "graphite";
  label?: string;
};

export function BrandVisual({ theme = "wine", label = "Advocacia · Docência · Pesquisa" }: BrandVisualProps) {
  return (
    <div className={`brand-visual brand-visual--${theme}`} aria-label={label}>
      <span className="brand-visual__index">CR — 01</span>
      <div className="brand-visual__paper" aria-hidden="true" />
      <Image
        src="/images/logo-ceres-rabelo.png"
        alt="Ceres Rabelo Advocacia"
        width={176}
        height={283}
        sizes="176px"
        priority
        className="brand-visual__logo"
        style={{ height: "auto" }}
      />
      <p>{label}</p>
      <span className="brand-visual__rule" aria-hidden="true" />
    </div>
  );
}

