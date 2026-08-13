# Especificação do Site — Ceres Rabelo Advocacia

**Plugue Marketing Solutions** · Agosto de 2026
Documento de construção. Autossuficiente — não exige leitura de outros arquivos.

> Documento irmão: `../02-estrategia/plano-ceres-rabelo.md` (estratégia, dados de demanda e
> campanhas). Este aqui trata **só do site**.

---

## 1. Contexto mínimo para quem vai construir

### Quem é a cliente

**Ceres Rabelo** — advogada. Marca pessoal forte e nacional.

| Item | Informação |
| --- | --- |
| CNPJ | 36.947.218/0001-03 |
| Instagram | `@profa.ceresrabelo` — **134 mil seguidores**, 4.054 posts |
| Threads | `profa.ceresrabelo` |
| Site atual | `ceresrabelo.online` |
| Titulação | Mestra · Doutoranda · Escritora |
| Docência | Professora em **CERS** e **Gran Cursos Online** |
| História | Foi concurseira, foi aprovada, é servidora concursada |
| Áreas | Concursos públicos, defesa administrativa de servidores, direito empresarial |
| **OAB (número)** | ***A COLETAR — BLOQUEIA A PUBLICAÇÃO*** |

### O que existe hoje

`ceresrabelo.online` é uma **página única**, rolagem vertical, com apenas dois
links no menu (Página Inicial e Contatos). Fala exclusivamente de concursos.
Visualmente datada. Conversão só por WhatsApp.

**Será substituída** pela estrutura de 4 páginas descrita aqui.

### Decisão pendente sobre o domínio

`.online` transmite menos solidez para público empresarial do que `.adv.br`
(domínio próprio da advocacia no Brasil) ou `.com.br`.

**Três caminhos, a decidir com ela antes de construir:**

1. Manter `ceresrabelo.online` para tudo
2. Migrar tudo para domínio novo (`.adv.br` ou `.com.br`)
3. Manter `.online` em concursos e usar domínio separado no empresarial

> Recomendação: opção 2. O nome dela é o mesmo nas duas frentes, e concentrar
> autoridade num domínio só é melhor para busca.

### Tom de voz

**Autoridade formal + história pessoal.** Ela é professora antes de ser
anunciante. O texto explica, não vende. A frase que resume o posicionamento em
concursos já existe e é boa:

> *"Você não precisa de mais um advogado. Precisa de quem já esteve no seu lugar."*

Para o empresarial o tom muda: menos emocional, mais técnico e objetivo. O
empresário quer competência, não empatia.

---

## 2. REGRAS DA OAB — leitura obrigatória antes de escrever qualquer texto

Publicidade de advogado é regida pelo **Código de Ética e Disciplina da OAB** e
pelo **Provimento nº 205/2021**. A responsabilidade é pessoal da advogada.

### Proibido em qualquer página

| Elemento | Base |
| --- | --- |
| Valores de honorários, forma de pagamento, gratuidade, desconto | Art. 3º, I |
| Promessa ou garantia de resultado | Art. 6º |
| **Uso de casos concretos para oferta de atuação** | Art. 6º |
| Números de resultado obtido | Art. 6º |
| Comparação com outros profissionais | — |
| Captação — linguagem que induz à contratação de forma mercantil | Art. 2º, VIII |

### Obrigatório em todas as páginas

- **Nome completo + número de inscrição na OAB**, visíveis
- Sem isso, a página nasce irregular

### Permitido e recomendado

- Áreas de atuação e procedimentos
- Formação acadêmica *stricto sensu*, titulação e docência
- Conteúdo informativo que explique o direito e o procedimento
- História pessoal (é posicionamento, não promessa)
- Depoimentos **sem identificação** do cliente

### ATENÇÃO — material atual com risco

O site e o Instagram de hoje trazem afirmações que **não devem ser reproduzidas**
no site novo sem que ela decida:

| Onde | O que está escrito | Problema |
| --- | --- | --- |
| Site atual | "8.000+ clientes e 5.000+ liminares favoráveis" | Números de resultado — Art. 6º |
| Bio do Instagram | "+7k reintegrados judicialmente" | Idem |
| Bio do Instagram | "A Especialista em Concursos e Criminal" | "Especialista" tem regramento próprio |

> **Regra de construção:** o site novo **não usa nenhum desses números** até que
> ela traga orientação da OAB-PB. A autoridade é construída por titulação e
> docência, que são permitidas e mais fortes.

### Teste de cada bloco de texto

Antes de aprovar qualquer seção, verificar:
1. Informa ou promete?
2. Cita caso concreto?
3. Fala de valor ou de pagamento?
4. Compara com outro profissional?
5. Tem nome e OAB na página?

---

## 3. Arquitetura

```
DOMÍNIO
├── /                          HOME · institucional
├── /concursos                 refaz a LP atual
├── /divida-ativa-empresas     recebe campanha do Google (R$ 1.000/mês)
└── /direito-empresarial       recebe campanha do Google (R$ 500/mês)
```

### Origem do tráfego de cada página

| Página | De onde vem quem chega |
| --- | --- |
| **Home** | Busca pelo nome dela · link da bio do Instagram · indicação · material impresso |
| **Concursos** | Campanha no Meta (R$ 1.500/mês) · conteúdo orgânico · reativação da base de clientes |
| **Dívida ativa** | **Google Ads** — campanha de busca, R$ 1.000/mês |
| **Direito empresarial** | **Google Ads** — campanha de busca, R$ 500/mês · home · conteúdo orgânico |

> **Importante:** as páginas de dívida ativa e de direito empresarial são
> **landing pages de tráfego pago**. Não são páginas institucionais de área — são
> páginas de conversão, e devem ser construídas como tal.

### Regra de separação

**A página de dívida ativa e a de direito empresarial não podem parecer um site
de concursos.** Um empresário que cai numa página cercada de conteúdo de concurso
público conclui em dois segundos que ela não é advogada empresarial e sai.

Na prática:
- O menu dessas páginas **não destaca concursos**
- Nenhuma imagem ou vocabulário de concurso
- A prova de autoridade usada é a acadêmica e a empresarial, não a de concursos

---

## 4. PÁGINA 1 — Home

**URL:** `/`
**Objetivo:** apresentar a profissional e distribuir o visitante para a área
certa. Não é página de conversão direta.
**Quem chega:** quem pesquisou o nome dela, quem veio da bio do Instagram, quem
foi indicado e está conferindo.

### Seções, em ordem

| # | Seção | Conteúdo |
| --- | --- | --- |
| 1 | **Topo** | Nome completo · **OAB nº** · foto profissional · uma linha de posicionamento |
| 2 | **Quem é** | Advogada, professora, mestra, doutoranda, escritora, servidora concursada. Texto curto, 2 a 3 parágrafos |
| 3 | **Formação e titulação** | Graduação, mestrado, doutorado em andamento, docência em CERS e Gran Cursos, livros publicados |
| 4 | **Áreas de atuação** | Três blocos clicáveis: Concursos · Dívida ativa e execução fiscal · Direito empresarial. Cada um leva à sua página |
| 5 | **Como funciona o atendimento** | Passo a passo simples: contato, análise, retorno. Reduz o receio de quem nunca contratou advogado |
| 6 | **Conteúdo** *(opcional)* | Últimos posts ou artigos, se houver blog |
| 7 | **Contato** | WhatsApp, e-mail, cidade de atuação |
| 8 | **Rodapé** | Nome completo, **OAB nº**, CNPJ, política de privacidade |

### Direção de copy

Headline do topo: apresentação sóbria, sem promessa. Algo na linha de
*"Advocacia em concursos públicos, execução fiscal e direito empresarial"*,
acompanhada do nome e da titulação.

**Não usar** na home: números de casos, "a melhor", "especialista em" sem
registro, qualquer promessa.

### CTA
Secundário. A home distribui, não converte. Botão de WhatsApp presente mas
discreto; o CTA forte fica nas páginas de área.

### Se a área criminal entrar
**Pergunta em aberto:** o Instagram dela diz "Concursos e Criminal", mas criminal
não está no escopo do plano. **Antes de escrever a seção 4, confirmar se criminal
entra como quarta área.** Se entrar, precisa de página própria.

---

## 5. PÁGINA 2 — Concursos

**URL:** `/concursos`
**Objetivo:** converter em WhatsApp o candidato eliminado ou prejudicado.
**Quem chega:** campanha do Meta sobre a audiência dela, conteúdo orgânico,
reativação da base de clientes.
**Substitui:** a LP atual em `ceresrabelo.online`, que está datada.

### Seções, em ordem

| # | Seção | Conteúdo |
| --- | --- | --- |
| 1 | **Headline de situação** | Fala da situação do candidato, não do serviço |
| 2 | **Você se reconhece aqui?** | Lista de 6 a 8 situações: eliminado em prova de títulos, reprovado em TAF, exame médico, investigação social, questão fora do edital, cotas, PCD, nomeação não cumprida |
| 3 | **O que o edital garante** | Bloco informativo: o edital vincula a banca. Explica o direito sem prometer resultado |
| 4 | **Caminhos possíveis** | Recurso administrativo · mandado de segurança · ação judicial. Explicar cada um em duas linhas |
| 5 | **Sobre prazo** | Prazo de recurso não se prorroga. Urgência real, sem alarmismo |
| 6 | **Quem vai te atender** | Foto, formação, titulação, docência, **OAB nº**. E a história: foi concurseira, foi aprovada, é servidora |
| 7 | **Como funciona a análise do caso** | Passo a passo: envio do edital e do resultado, análise, retorno |
| 8 | **Perguntas frequentes** | 6 a 8 perguntas. Incluir "tenho chance?" respondida sem prometer |
| 9 | **CTA final** | WhatsApp |

### Direção de copy

Headline sugerida — parte da situação, não do procedimento:

> *"Eliminado por algo que o edital não previa?"*
> *"A banca mudou a regra depois da prova?"*

**Atenção:** a frase que a LP atual usa, *"Eliminado injustamente no concurso?"*,
tem **volume de busca zero** no Google. Como esta página não recebe tráfego de
busca, isso não é problema para ela — mas não deve ser reaproveitada como título
de página pensando em SEO.

### Depoimentos
Permitidos **sem identificar o cliente** e sem citar resultado obtido. Preferir
depoimento sobre o atendimento, não sobre o desfecho.

### CTA
WhatsApp fixo, repetido ao longo da página. Clique marcado como conversão.

---

## 6. PÁGINA 3 — Dívida ativa e execução fiscal

**URL:** `/divida-ativa-empresas`
**Objetivo:** converter em WhatsApp o empresário com dívida ativa, execução
fiscal, penhora ou bloqueio.
**Quem chega:** **Google Ads**, campanha de busca de R$ 1.000/mês.
**É landing page de tráfego pago.** Velocidade e clareza acima de tudo.

### Contexto de quem chega

Empresário com **urgência objetiva**: recebeu citação, teve conta bloqueada, viu
o CNPJ inscrito em dívida ativa. Não é curioso — está resolvendo um problema
agora.

**Nota de pesquisa:** ele **não** usa o termo "execução fiscal" (esse é o termo
de estudante de direito). Ele usa **"dívida ativa"**. O título da página deve
refletir isso.

### Seções, em ordem

| # | Seção | Conteúdo |
| --- | --- | --- |
| 1 | **Headline de situação** | Reconhece a situação dele na primeira linha |
| 2 | **Reconheça o seu caso** | Lista: CNPJ inscrito em dívida ativa · citação recebida · conta bancária bloqueada · penhora · certidão negativa negada · bloqueio de bens |
| 3 | **O que é dívida ativa e o que ela permite ao fisco** | Informativo. Explica o que é a CDA e o que ela habilita |
| 4 | **Quais defesas a lei prevê** | Embargos, exceção de pré-executividade, prescrição, nulidade da CDA, excesso de execução. **Explicar sem garantir êxito** |
| 5 | **Sobre prazo** | A execução tem prazos. Urgência real, sem alarmismo |
| 6 | **Quem vai te atender** | Formação, titulação, docência, **OAB nº**. Tom técnico, não emocional |
| 7 | **Como funciona a análise** | Envio da documentação, análise, retorno com o caminho possível |
| 8 | **Perguntas frequentes** | Incluir: "posso parcelar?", "vou perder meus bens?", "quanto tempo demora?" — todas respondidas de forma informativa |
| 9 | **CTA final** | WhatsApp |

### Direção de copy

Headline sugerida:

> *"Sua empresa foi inscrita em dívida ativa?"*
> *"Recebeu citação de execução fiscal?"*
> *"Conta da empresa bloqueada por dívida com o fisco?"*

Tom técnico e direto. O empresário em aperto quer competência, não acolhimento.

### O que NÃO pode ter
- Nenhuma menção a honorário, parcelamento de honorário ou consulta gratuita
- Nenhuma promessa de desbloqueio, de anulação ou de prazo de resultado
- Nenhum caso concreto ("desbloqueamos a conta de um cliente em 48h" — proibido)

### Nada de concursos
Sem menu, imagem, texto ou prova social ligada a concurso público nesta página.

### Requisitos técnicos
- Carregar em **menos de 2 segundos** — é página com CPC pago
- WhatsApp fixo, visível em qualquer ponto da rolagem
- Clique no WhatsApp configurado como **conversão primária** no Google Ads
- Política de privacidade linkada

---

## 7. PÁGINA 4 — Direito empresarial

**URL:** `/direito-empresarial`
**Objetivo:** converter em WhatsApp o empresário que procura advogado para
estruturar ou revisar a empresa.
**Quem chega:** **Google Ads**, campanha de busca de R$ 500/mês · home ·
conteúdo orgânico.
**É landing page de tráfego pago.**

### Contexto de quem chega

Diferente da página anterior: **não há urgência aguda.** Esse empresário está
planejando. Ele pesquisou "advogado empresarial", "direito societário" ou
"assessoria jurídica empresarial". Decisão mais lenta, ticket maior.

**Nota de pesquisa:** ninguém pesquisa "acordo de sócios" ou "planejamento
tributário" com intenção de contratar. A busca acontece pelo nome da
**categoria profissional**. O título da página deve refletir isso.

### Seções, em ordem

| # | Seção | Conteúdo |
| --- | --- | --- |
| 1 | **Headline de categoria** | "Advocacia empresarial" ou equivalente — o termo que ele buscou |
| 2 | **Para quem é** | Sócios, empresas em crescimento, empresas em reestruturação. Ajuda ele a se reconhecer |
| 3 | **O que resolvemos** | Os cinco serviços, cada um com 2 a 3 linhas: acordo de sócios · planejamento tributário · compliance trabalhista · revisão de contratos · registro de marca |
| 4 | **Quando cada um faz sentido** | Bloco educativo. Ex.: sociedade sem acordo decide as regras na hora do conflito |
| 5 | **Quem vai te atender** | Formação, titulação, docência, **OAB nº** |
| 6 | **Como começa** | O **diagnóstico empresarial** entra aqui, como convite de baixa fricção — uma conversa inicial para mapear o que a empresa precisa |
| 7 | **Perguntas frequentes** | Foco em processo e escopo, não em preço |
| 8 | **CTA final** | WhatsApp |

### Sobre o "diagnóstico empresarial"

**Não é o nome da página** — é a **oferta dentro dela**, o CTA da seção 6.
"Diagnóstico empresarial" é jargão interno; ninguém procura por isso.

### Direção de copy

Headline sugerida:

> *"Advocacia empresarial para quem precisa estruturar, não apagar incêndio."*
> *"Direito societário, contratos e compliance para empresas em crescimento."*

Tom consultivo e técnico.

### O que NÃO pode ter
- Nenhuma menção a valor de honorário, mensalidade jurídica ou pacote
- Nenhuma promessa de economia tributária em percentual ou valor
- Nenhum caso concreto de cliente

### Nada de concursos
Mesma regra da página anterior.

### Requisitos técnicos
Iguais aos da página de dívida ativa. Clique no WhatsApp como conversão.

---

## 8. Requisitos técnicos comuns

| Item | Especificação |
| --- | --- |
| Carregamento | Menos de 2 segundos nas páginas de tráfego pago |
| Responsivo | Prioridade mobile — a maior parte do tráfego é celular |
| Conversão | Clique no WhatsApp como evento em Google Ads e Meta |
| Conversão secundária | Clique no telefone, se houver |
| Pixel | Meta instalado em todas as páginas |
| Tag | Google Ads / GA4 em todas as páginas |
| Política de privacidade | Página própria, linkada no rodapé de todas |
| **Nome e OAB** | **Rodapé de todas as páginas, sem exceção** |
| Formulário | Não usar. A conversão é WhatsApp |

### Públicos de remarketing a criar

- Visitantes de `/divida-ativa-empresas` (180 dias)
- Visitantes de `/direito-empresarial` (180 dias)
- Visitantes de `/concursos` (180 dias)

---

## 9. O que precisa ser coletado antes de construir

| # | Item | Responsável | Status |
| --- | --- | --- | --- |
| 1 | **Número de inscrição na OAB** | Cliente | **BLOQUEIA A PUBLICAÇÃO** |
| 2 | **Decisão sobre o domínio** | Cliente | **BLOQUEIA O INÍCIO** |
| 3 | **Decisão sobre a área criminal** — entra ou não na home? | Cliente | **BLOQUEIA A HOME** |
| 4 | Decisão sobre usar ou não os números de resultado | Cliente | Bloqueia a redação |
| 5 | Fotos profissionais em boa resolução | Cliente | Alta |
| 6 | Currículo completo: graduação, mestrado, doutorado, livros, docência | Cliente | Alta |
| 7 | Número de WhatsApp comercial | Cliente | Alta |
| 8 | Acesso ao domínio e à hospedagem atuais | Cliente | Alta |
| 9 | Depoimentos autorizados, sem identificação | Cliente | Média |
| 10 | Logotipo e identidade visual, se houver | Cliente | Média |

---

## 10. Ordem de construção sugerida

| Ordem | Página | Por quê |
| --- | --- | --- |
| 1º | **Dívida ativa** | É a que destrava a campanha de maior verba no Google |
| 2º | **Direito empresarial** | Destrava a segunda campanha de busca |
| 3º | **Home** | Necessária para dar identidade e fechar a navegação |
| 4º | **Concursos** | A LP atual, embora datada, ainda funciona — pode esperar |

> As duas primeiras são as que têm verba parada esperando por elas.

---

*Plugue Marketing Solutions · Especificação de construção · Agosto de 2026*
