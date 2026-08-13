"use server";

import { redirect } from "next/navigation";

type FieldErrors = Partial<
  Record<"name" | "whatsapp" | "email" | "area" | "summary" | "privacy", string>
>;

export type ContactFormState = {
  status: "idle" | "success" | "error" | "configuration";
  message: string;
  errors?: FieldErrors;
};

const allowedAreas = new Set([
  "Concursos públicos",
  "Dívida ativa e execução fiscal",
  "Direito empresarial",
  "Conta bloqueada em plataforma",
  "Registro de marca",
  "Não sei qual área escolher",
]);

function read(formData: FormData, key: string) {
  return String(formData.get(key) || "").trim();
}

export async function submitContact(
  _previousState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const name = read(formData, "name");
  const whatsapp = read(formData, "whatsapp");
  const email = read(formData, "email");
  const area = read(formData, "area");
  const context = read(formData, "context");
  const summary = read(formData, "summary");
  const privacy = read(formData, "privacy");
  const website = read(formData, "website");
  const source = read(formData, "source");
  const startedAt = Number(read(formData, "startedAt"));

  if (website) {
    return { status: "success", message: "Mensagem recebida." };
  }

  if (!startedAt || Date.now() - startedAt < 1500) {
    return {
      status: "error",
      message: "Não foi possível validar o envio. Aguarde um instante e tente novamente.",
    };
  }

  const errors: FieldErrors = {};
  if (name.length < 2 || name.length > 100) {
    errors.name = "Informe seu nome.";
  }

  const whatsappDigits = whatsapp.replace(/\D/g, "");
  if (whatsappDigits.length < 10 || whatsappDigits.length > 15) {
    errors.whatsapp = "Informe um WhatsApp com DDD.";
  }

  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Confira o e-mail informado.";
  }

  if (!allowedAreas.has(area)) {
    errors.area = "Selecione uma área.";
  }

  if (summary.length < 20 || summary.length > 1600) {
    errors.summary = "Resuma a situação em 20 a 1.600 caracteres.";
  }

  if (privacy !== "accepted") {
    errors.privacy = "É necessário confirmar a leitura da Política de privacidade.";
  }

  if (Object.keys(errors).length > 0) {
    return {
      status: "error",
      message: "Revise os campos indicados.",
      errors,
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !to || !from) {
    return {
      status: "configuration",
      message:
        "O envio por formulário está em configuração. Para falar agora, use o botão do WhatsApp.",
    };
  }

  const lines = [
    `Nome: ${name}`,
    `WhatsApp: ${whatsapp}`,
    `E-mail: ${email || "não informado"}`,
    `Área: ${area}`,
    `Contexto: ${context || "não informado"}`,
    `Origem: ${source || "site"}`,
    "",
    "Resumo:",
    summary,
  ];

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        subject: `[Site Ceres Rabelo] Novo contato — ${area}`,
        text: lines.join("\n"),
        reply_to: email || undefined,
      }),
    });

    if (!response.ok) {
      throw new Error(`Email provider returned ${response.status}`);
    }
  } catch (error) {
    console.error("Contact form delivery failed", error);
    return {
      status: "error",
      message:
        "Não foi possível enviar agora. Tente novamente ou use o botão do WhatsApp.",
    };
  }

  // Fora do try: `redirect` sinaliza por exceção e seria engolido pelo catch.
  // A URL própria é o que permite marcar a conversão no GTM e no Ads.
  redirect(`/obrigado?area=${encodeURIComponent(area)}`);
}

