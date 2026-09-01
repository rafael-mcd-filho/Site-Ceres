"use client";

import Link from "next/link";
import { useActionState, useEffect, useRef, useState } from "react";
import { useFormStatus } from "react-dom";
import type { ContactPlatform, ServiceArea } from "@/content/services";
import {
  submitContact,
  type ContactFormState,
} from "@/app/actions/contact";

type ContactFormProps = {
  area?: ServiceArea;
  platform?: ContactPlatform;
  source: string;
};

const initialState: ContactFormState = { status: "idle", message: "" };

const contextualLabels = {
  "Concursos públicos": "Qual concurso, cargo, banca e etapa?",
  "Dívida ativa e execução fiscal": "Qual cobrança ou documento você recebeu?",
  "Direito empresarial": "O que a empresa faz e o que está acontecendo?",
  "Conta bloqueada em plataforma": "Qual conta foi afetada e quando ocorreu o bloqueio?",
  "Registro de marca": "Qual nome pretendido e qual ramo de atividade?",
};

const platformContexts: Record<
  ContactPlatform,
  { label: string; contextPlaceholder: string; summaryPlaceholder: string }
> = {
  "Mercado Livre": {
    label: "Qual é a conta afetada e quando a suspensão aconteceu?",
    contextPlaceholder: "Loja ou ID · data da suspensão",
    summaryPlaceholder:
      "Descreva o aviso recebido, as tentativas de recurso e o impacto em anúncios ou repasses.",
  },
  Instagram: {
    label: "Qual é o @ do perfil e quando ele saiu do ar?",
    contextPlaceholder: "@perfil · data da desativação",
    summaryPlaceholder:
      "Descreva o aviso exibido, as tentativas de recurso e como o perfil era utilizado.",
  },
  WhatsApp: {
    label: "Qual número foi banido e quando o bloqueio aconteceu?",
    contextPlaceholder: "Número afetado · data do banimento",
    summaryPlaceholder:
      "Descreva a mensagem exibida, as tentativas de revisão e como o número era utilizado.",
  },
};

function track(event: string, details: Record<string, string>) {
  if (typeof window === "undefined") return;
  const target = window as Window & { dataLayer?: Array<Record<string, string>> };
  target.dataLayer = target.dataLayer || [];
  target.dataLayer.push({ event, ...details });
}

/** (00) 00000-0000 — aceita fixo de 8 e celular de 9 dígitos. */
function maskPhone(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 2) return digits.replace(/^(\d{0,2})/, "($1");
  if (digits.length <= 6) return digits.replace(/^(\d{2})(\d{0,4})/, "($1) $2");
  if (digits.length <= 10) return digits.replace(/^(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3");
  return digits.replace(/^(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3");
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      className="button form-submit"
      type="submit"
      disabled={pending}
      id="cta-form-submit"
      data-cta="form-submit"
    >
      <span className="button__label">{pending ? "Enviando…" : "Enviar para análise inicial"}</span>
    </button>
  );
}

export function ContactForm({ area, platform, source }: ContactFormProps) {
  const [state, action] = useActionState(submitContact, initialState);
  const [startedAt] = useState(() => Date.now().toString());
  const [phone, setPhone] = useState("");
  const [lastStatus, setLastStatus] = useState(state.status);
  const started = useRef(false);
  const formRef = useRef<HTMLFormElement>(null);
  const contextLabel = platform
    ? platformContexts[platform].label
    : area
      ? contextualLabels[area]
      : "";
  const contextPlaceholder = platform
    ? platformContexts[platform].contextPlaceholder
    : "Informe apenas o essencial por enquanto";
  const summaryPlaceholder = platform
    ? platformContexts[platform].summaryPlaceholder
    : "Conte o que aconteceu, o que mais preocupa você e as datas principais.";

  // `form.reset()` não limpa campo controlado — o telefone precisa disso à parte.
  if (state.status !== lastStatus) {
    setLastStatus(state.status);
    if (state.status === "success") setPhone("");
  }

  useEffect(() => {
    track("form_view", {
      page: source,
      area: area || "não definida",
      platform: platform || "não aplicável",
    });
  }, [area, platform, source]);

  useEffect(() => {
    if (state.status === "success") {
      track("form_success", {
        page: source,
        area: area || "selecionada",
        platform: platform || "não aplicável",
      });
      formRef.current?.reset();
    } else if (state.status === "error" || state.status === "configuration") {
      track("form_error", {
        page: source,
        area: area || "selecionada",
        platform: platform || "não aplicável",
      });
    }
  }, [area, platform, source, state.status]);

  const markStarted = () => {
    if (started.current) return;
    started.current = true;
    track("form_start", {
      page: source,
      area: area || "não definida",
      platform: platform || "não aplicável",
    });
  };

  return (
    <form
      ref={formRef}
      action={action}
      className="contact-form"
      onChange={markStarted}
      onSubmit={() =>
        track("form_submit", {
          page: source,
          area: area || "selecionada",
          platform: platform || "não aplicável",
        })
      }
    >
      <input type="hidden" name="source" value={source} />
      <input type="hidden" name="startedAt" value={startedAt} />
      {area && <input type="hidden" name="area" value={area} />}
      {platform && <input type="hidden" name="platform" value={platform} />}
      <div className="honeypot" aria-hidden="true">
        <label htmlFor={`website-${source}`}>Website</label>
        <input id={`website-${source}`} name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="form-grid">
        <div className="field">
          <label htmlFor={`name-${source}`}>Nome <span>*</span></label>
          <input id={`name-${source}`} name="name" autoComplete="name" required />
          {state.errors?.name && <small className="field-error">{state.errors.name}</small>}
        </div>

        <div className="field">
          <label htmlFor={`whatsapp-${source}`}>WhatsApp com DDD <span>*</span></label>
          <input
            id={`whatsapp-${source}`}
            name="whatsapp"
            inputMode="tel"
            autoComplete="tel"
            placeholder="(00) 00000-0000"
            maxLength={15}
            value={phone}
            onChange={(event) => setPhone(maskPhone(event.target.value))}
            required
          />
          {state.errors?.whatsapp && <small className="field-error">{state.errors.whatsapp}</small>}
        </div>
      </div>

      <div className="form-grid">
        <div className="field">
          <label htmlFor={`email-${source}`}>E-mail <em>opcional</em></label>
          <input id={`email-${source}`} name="email" type="email" autoComplete="email" />
          {state.errors?.email && <small className="field-error">{state.errors.email}</small>}
        </div>

        {area ? (
          <div className="field">
            <label htmlFor={`context-${source}`}>{contextLabel}</label>
            <input
              id={`context-${source}`}
              name="context"
              maxLength={240}
              placeholder={contextPlaceholder}
            />
          </div>
        ) : (
          <div className="field">
            <label htmlFor={`area-${source}`}>Área <span>*</span></label>
            <select id={`area-${source}`} name="area" defaultValue="" required>
              <option value="" disabled>Selecione</option>
              <option>Concursos públicos</option>
              <option>Dívida ativa e execução fiscal</option>
              <option>Direito empresarial</option>
              <option>Conta bloqueada em plataforma</option>
              <option>Registro de marca</option>
              <option>Não sei qual área escolher</option>
            </select>
            {state.errors?.area && <small className="field-error">{state.errors.area}</small>}
          </div>
        )}
      </div>

      <div className="field">
        <label htmlFor={`summary-${source}`}>Conte o que aconteceu <span>*</span></label>
        <textarea
          id={`summary-${source}`}
          name="summary"
          rows={5}
          minLength={20}
          maxLength={1600}
          placeholder={summaryPlaceholder}
          aria-describedby={`summary-hint-${source}`}
          required
        />
        <small className="field-hint" id={`summary-hint-${source}`}>
          Não envie documentos, senhas ou dados excessivamente sensíveis neste campo.
        </small>
        {state.errors?.summary && <small className="field-error">{state.errors.summary}</small>}
      </div>

      <div className="privacy-field">
        <input id={`privacy-${source}`} name="privacy" type="checkbox" value="accepted" required />
        <label htmlFor={`privacy-${source}`}>
          Li a <Link href="/politica-de-privacidade">Política de privacidade</Link> e autorizo o uso das informações para retorno sobre este contato.
        </label>
      </div>
      {state.errors?.privacy && <small className="field-error">{state.errors.privacy}</small>}

      <small className="field-hint">
        O envio deste formulário não suspende prazos nem formaliza a contratação do escritório.
      </small>

      <SubmitButton />

      {state.message && (
        <p className={`form-status form-status--${state.status}`} role="status" aria-live="polite">
          {state.message}
        </p>
      )}
    </form>
  );
}

