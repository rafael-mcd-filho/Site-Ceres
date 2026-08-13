# Site Ceres Rabelo Advocacia

Novo site institucional e comercial de Ceres Rabelo Advocacia.

**Fase atual:** primeira versão funcional implementada em Next.js. As cinco páginas, componentes globais, formulário, WhatsApp e base de SEO estão prontas para validação visual e de conteúdo.

## Executar localmente

```bash
pnpm install
pnpm dev
```

Abra `http://localhost:3000`.

Para validar a versão de produção:

```bash
pnpm build
pnpm start
```

## Configuração

Copie `.env.example` para `.env.local` e preencha as variáveis necessárias. Sem as credenciais do Resend, o formulário continua validando os dados, mas não envia e-mails.

Os links de WhatsApp e e-mail usam provisoriamente os dados públicos do site atual e podem ser substituídos pelas variáveis de ambiente.

## Estrutura

```text
src/
├── app/          # páginas, metadata, sitemap, robots e server action
├── components/   # componentes globais e páginas de serviço
├── content/      # copy estruturada das áreas de atuação
└── lib/          # configuração do escritório e utilitários
public/
└── images/       # ativos utilizados pelo site
docs/             # briefing, estratégia, especificação e referências
```

## Páginas

- `/` — Home;
- `/concursos` — Concursos públicos;
- `/divida-ativa-empresas` — Dívida ativa para empresas;
- `/direito-empresarial` — Direito empresarial;
- `/politica-de-privacidade` — Política de privacidade.

## Stack

- Next.js 16 com App Router;
- React 19 e TypeScript;
- Server Components por padrão;
- CSS global com tokens de design;
- Server Action para o formulário;
- Resend para envio de e-mail;
- Vercel como destino planejado de publicação.

## Documento de referência

O plano completo de copy, direção visual, animações, SEO e implementação está em [`docs/03-especificacao/blueprint-completo-site-ceres-rabelo.md`](docs/03-especificacao/blueprint-completo-site-ceres-rabelo.md).

## Pendências antes da publicação

- preencher `NEXT_PUBLIC_OAB_NUMBER` — sem ele a credencial da OAB não é exibida na barra de autoridade nem no schema, e o requisito do Provimento 205/2021 fica descoberto;
- substituir ou aprovar os dados provisórios de contato;
- receber os arquivos originais da logo e das fotografias;
- configurar o domínio e as variáveis de ambiente na Vercel;
- configurar o Resend e testar a entrega do formulário;
- validar copy, retratos profissionais e informações institucionais com a cliente;
- incluir analytics somente após definição do consentimento e da ferramenta.
