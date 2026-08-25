"use client";

import Link from "next/link";
import { useActionState, useEffect, useRef, useState } from "react";
import { useFormStatus } from "react-dom";
import type { ServiceArea } from "@/content/services";
import {
  submitContact,
  type ContactFormState,
} from "@/app/actions/contact";

type ContactFormProps = {
  area?: ServiceArea;
  source: string;
};

const initialState: ContactFormState = { status: "idle", message: "" };

const contextualLabels = {
  "Concursos públicos": "Qual concurso, cargo, banca e etapa?",
  "Dívida ativa e execução fiscal": "Qual cobrança ou documento você recebeu?",
  "Direito empresarial": "O que a empresa faz e o que está acontecendo?",
  "Conta bloqueada em plataforma": "Qual plataforma e quando a conta foi bloqueada?",
  "Registro de marca": "Qual nome pretendido e qual ramo de atividade?",
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
      <span className="button__label">{pending ? "Enviando…" : "Enviar informações"}</span>
    </button>
  );
}

export function ContactForm({ area, source }: ContactFormProps) {
  const [state, action] = useActionState(submitContact, initialState);
  const [startedAt] = useState(() => Date.now().toString());
  const [phone, setPhone] = useState("");
  const [lastStatus, setLastStatus] = useState(state.status);
  const started = useRef(false);
  const formRef = useRef<HTMLFormElement>(null);

  // `form.reset()` não limpa campo controlado — o telefone precisa disso à parte.
  if (state.status !== lastStatus) {
    setLastStatus(state.status);
    if (state.status === "success") setPhone("");
  }

  useEffect(() => {
    track("form_view", { page: source, area: area || "não definida" });
  }, [area, source]);

  useEffect(() => {
    if (state.status === "success") {
      track("form_success", { page: source, area: area || "selecionada" });
      formRef.current?.reset();
    } else if (state.status === "error" || state.status === "configuration") {
      track("form_error", { page: source, area: area || "selecionada" });
    }
  }, [area, source, state.status]);

  const markStarted = () => {
    if (started.current) return;
    started.current = true;
    track("form_start", { page: source, area: area || "não definida" });
  };

  return (
    <form
      ref={formRef}
      action={action}
      className="contact-form"
      onChange={markStarted}
      onSubmit={() => track("form_submit", { page: source, area: area || "selecionada" })}
    >
      <input type="hidden" name="source" value={source} />
      <input type="hidden" name="startedAt" value={startedAt} />
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

        <div className="field">
          <label htmlFor={`area-${source}`}>Área <span>*</span></label>
          {area ? (
            <>
              <input id={`area-${source}`} name="area" value={area} readOnly />
            </>
          ) : (
            <select id={`area-${source}`} name="area" defaultValue="" required>
              <option value="" disabled>Selecione</option>
              <option>Concursos públicos</option>
              <option>Dívida ativa e execução fiscal</option>
              <option>Direito empresarial</option>
              <option>Conta bloqueada em plataforma</option>
              <option>Registro de marca</option>
              <option>Não sei qual área escolher</option>
            </select>
          )}
          {state.errors?.area && <small className="field-error">{state.errors.area}</small>}
        </div>
      </div>

      {area && (
        <div className="field">
          <label htmlFor={`context-${source}`}>{contextualLabels[area]}</label>
          <input
            id={`context-${source}`}
            name="context"
            maxLength={240}
            placeholder="Só o essencial por enquanto"
          />
        </div>
      )}

      <div className="field">
        <label htmlFor={`summary-${source}`}>Resumo da situação <span>*</span></label>
        <textarea
          id={`summary-${source}`}
          name="summary"
          rows={5}
          minLength={20}
          maxLength={1600}
          placeholder="Conte o que aconteceu, as datas importantes e o que precisa compreender. Não envie documentos ou dados excessivamente sensíveis neste campo."
          required
        />
        {state.errors?.summary && <small className="field-error">{state.errors.summary}</small>}
      </div>

      <div className="privacy-field">
        <input id={`privacy-${source}`} name="privacy" type="checkbox" value="accepted" required />
        <label htmlFor={`privacy-${source}`}>
          Li a <Link href="/politica-de-privacidade">Política de privacidade</Link> e autorizo o uso das informações para retorno sobre este contato.
        </label>
      </div>
      {state.errors?.privacy && <small className="field-error">{state.errors.privacy}</small>}

      <SubmitButton />

      {state.message && (
        <p className={`form-status form-status--${state.status}`} role="status" aria-live="polite">
          {state.message}
        </p>
      )}
    </form>
  );
}

