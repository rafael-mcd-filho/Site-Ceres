import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="not-found container">
      <p className="eyebrow">ERRO 404</p>
      <h1>Endereço não encontrado.</h1>
      <p>O endereço acessado pode ter mudado ou não fazer parte da versão atual do site.</p>
      <Link className="button" href="/"><ArrowLeft size={16} /> Voltar para o início</Link>
    </main>
  );
}

