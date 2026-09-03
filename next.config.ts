import type { NextConfig } from "next";

/**
 * Cabeçalhos de segurança aplicados a todas as rotas. Sem CSP por enquanto: o
 * JSON-LD do layout é um script inline e uma política estrita exigiria nonce
 * por requisição, o que tiraria as páginas do cache estático.
 *
 * O HSTS vai sem `includeSubDomains` de propósito — é uma decisão de dois anos
 * no cache do browser e o escritório pode vir a usar subdomínios fora do Vercel.
 */
const securityHeaders = [
  { key: "Strict-Transport-Security", value: "max-age=31536000" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    // As fotos do site são estáveis; TTL longo evita reotimizações repetidas
    // (e o custo delas) a cada 4 horas, que é o padrão.
    minimumCacheTTL: 2678400, // 31 dias
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
