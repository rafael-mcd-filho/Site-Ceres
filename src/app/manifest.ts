import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Rabelo e Machado Advocacia",
    short_name: "Rabelo e Machado",
    description:
      "Escritório de advocacia com atuação em concursos públicos, dívida ativa, execução fiscal e direito empresarial.",
    start_url: "/",
    display: "standalone",
    background_color: "#fbf7ef",
    theme_color: "#30070e",
    lang: "pt-BR",
    // Ícones quadrados gerados por `icon.tsx` e `apple-icon.tsx`. O logo
    // original é retrato (375x603) e é rejeitado como ícone de aplicativo.
    icons: [
      { src: "/icon", sizes: "64x64", type: "image/png" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}

