"use client";

export default function GlobalError({
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  return (
    <html lang="pt-BR">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "16px",
          padding: "24px",
          textAlign: "center",
          fontFamily:
            "system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
          background: "#fbf7ef",
          color: "#2d2c2a",
        }}
      >
        <h1 style={{ margin: 0, fontSize: "1.5rem" }}>
          Não foi possível carregar a página.
        </h1>
        <p style={{ margin: 0, maxWidth: "32rem", color: "#54514c" }}>
          Algo deu errado ao processar essa solicitação. Tente novamente em
          instantes.
        </p>
        <button
          onClick={() => retry()}
          style={{
            marginTop: "8px",
            padding: "10px 20px",
            borderRadius: "8px",
            border: "1px solid #2d2c2a",
            background: "#2d2c2a",
            color: "#fbf7ef",
            cursor: "pointer",
            font: "inherit",
          }}
        >
          Tentar novamente
        </button>
      </body>
    </html>
  );
}
