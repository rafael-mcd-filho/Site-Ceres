import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Rabelo e Machado Advocacia",
    short_name: "Rabelo e Machado",
    description:
      "Escritório de advocacia com atendimento em concursos públicos, dívida ativa, execução fiscal, direito empresarial, registro de marca e contas bloqueadas.",
    start_url: "/",
    display: "standalone",
    background_color: "#fbf7ef",
    theme_color: "#30070e",
    lang: "pt-BR",
    // Servidos de `public/` em vez de `app/icon.png`: o caminho das convenções
    // de metadata carrega hash de cache, e o manifest precisa de URL estável.
    // Fundo vinho chapado porque o Android compõe o ícone sobre a tela inicial.
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
    ],
  };
}

