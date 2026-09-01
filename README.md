# Site Rabelo e Machado Advocacia

Site institucional e comercial do escritório Rabelo e Machado Advocacia.

**Fase atual:** páginas, componentes globais, WhatsApp contextual, formulário e base de SEO implementados. Restam as configurações de publicação listadas ao final deste documento.

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

Os links de WhatsApp usam o número oficial definido no projeto e incluem a página e a posição do clique na mensagem inicial. O site não divulga e-mail público. O destinatário do formulário permanece sem configuração até a definição da caixa de entrada do escritório.

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
- `/registro-de-marca` — Registro de marca;
- `/conta-bloqueada-mercado-livre` — Conta bloqueada no Mercado Livre;
- `/conta-bloqueada-instagram` — Conta desativada no Instagram;
- `/conta-bloqueada-whatsapp` — Número banido no WhatsApp;
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

- preencher `NEXT_PUBLIC_OAB_NUMBER` com o registro da sociedade na OAB — não será exibida inscrição individual;
- configurar o domínio `rabeloemachadoadvocacia.com.br` e as variáveis de ambiente na hospedagem;
- definir `CONTACT_TO_EMAIL` e `CONTACT_FROM_EMAIL`, configurar o Resend e testar a entrega do formulário;
- conferir o funcionamento do WhatsApp `(83) 9301-3156` no ambiente publicado;
- incluir analytics somente após definição do consentimento e da ferramenta.
