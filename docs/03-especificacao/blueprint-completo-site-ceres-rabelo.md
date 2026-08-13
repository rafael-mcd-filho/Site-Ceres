# Blueprint completo do site — Ceres Rabelo Advocacia

**Versão:** 1.2  
**Data:** 11/08/2026  
**Status:** direção revisada após benchmark externo; copy e identidade ainda exigem validação com a cliente antes da implementação final.

**Escopo documentado:** Home, Concursos, Dívida ativa para empresas, Direito empresarial e Política de privacidade.

**Benchmark relacionado:** `../02-estrategia/benchmark-copy-concorrentes-ceres-rabelo.md`.

> As copies deste documento são rascunhos de produção. Número da OAB, currículo, dados de contato, abrangência territorial e aplicação das regras de publicidade devem ser validados pela cliente antes da publicação. A área criminal está fora da versão 1.

---

## 1. Como usar este documento

Este blueprint é a referência única para:

- arquitetura de informação;
- ordem e função das seções;
- modelo de copy de cada página;
- direção visual;
- cores e fundos;
- tipografia;
- componentes globais;
- menus desktop e mobile;
- CTAs e WhatsApp;
- FAQs;
- comportamento responsivo;
- SEO básico e mensuração;
- pendências que bloqueiam publicação.

### Marcadores

- **[VALIDAR]**: depende de informação ou aprovação da cliente.
- **[RASCUNHO]**: copy pronta para lapidação, ainda não aprovada.
- **[OBRIGATÓRIO]**: requisito global do projeto.
- **[CONDICIONAL]**: só entra se houver conteúdo ou decisão correspondente.

---

## 2. Estratégia do site

### 2.1 Objetivo central

Organizar digitalmente uma autoridade que já existe e permitir que duas operações diferentes convivam sob o nome Ceres Rabelo:

1. **Concursos públicos:** monetizar melhor a audiência já construída.
2. **Empresarial:** construir uma nova carteira por meio de dívida ativa, execução fiscal e advocacia empresarial.

### 2.2 Regra de separação

O nome, a formação, a identidade visual e o domínio podem ser compartilhados. A experiência de cada público, não.

- Concursos pode usar história pessoal, acolhimento e identificação.
- Empresarial deve usar objetividade, método e autoridade técnica.
- As landing pages empresariais não terão concursos em destaque no menu, nas imagens ou na prova de autoridade.

### 2.3 Arquitetura

| Página | Rota | Função |
| --- | --- | --- |
| Home | `/` | Apresentar Ceres e distribuir para a área correta |
| Concursos | `/concursos` | Converter candidatos com problema em etapa de concurso |
| Dívida ativa | `/divida-ativa-empresas` | Converter empresas com urgência fiscal |
| Direito empresarial | `/direito-empresarial` | Apresentar a atuação consultiva e societária |
| Privacidade | `/politica-de-privacidade` | Transparência, LGPD e suporte à mensuração |

### 2.4 Área criminal

**Decisão fechada:** a área criminal não entra na versão 1.

- não aparece no menu, nos cards, no footer ou na copy promocional;
- não recebe página nem CTA;
- poderá ser planejada em fase futura somente após nova decisão de posicionamento e escopo;
- a ausência dessa área no site não deve ser compensada por menções vagas ou links sem destino.

---

## 3. Modelo de copy

Não será usado um único framework de forma mecânica em todas as páginas. AIDA e PAS são estruturas de raciocínio, não evidência de que uma copy específica converterá. A validação depende de pesquisa, revisão profissional e comportamento observado depois da publicação.

### 3.1 Framework global

> **Reconhecimento → Consequência objetiva → Mecanismo → Autoridade → Redução de incerteza → Próximo passo**

Esse modelo substitui a persuasão agressiva por relevância e clareza. O visitante reconhece seu momento, entende por que ele importa, vê como a análise funciona, encontra autoridade verificável e sabe o que acontecerá após o clique. A autoridade vem da formação, docência, história e método, não de promessa ou número de resultado.

### 3.2 Modelo por página

| Página | Framework | Motivo |
| --- | --- | --- |
| Home | Narrativa de marca + categoria | O visitante quer saber quem é Ceres, em que ela atua e o que a diferencia |
| Concursos | Problem-aware + mecanismo | Há problema e urgência, mas a tensão deve levar à verificação de edital, ato e prazo |
| Dívida ativa | Problem-aware de alta intenção | O visitante precisa identificar o quadro da empresa antes de conhecer as teses |
| Direito empresarial | Momento empresarial + AIDA consultivo | A empresa reconhece seu estágio antes de reconhecer o nome jurídico do serviço |
| Privacidade | Clareza funcional | Não é uma página de persuasão |

### 3.3 Como o PAS será adaptado

- **Problema:** reconhecer a situação real do visitante.
- **Ampliação factual:** explicar prazo, risco processual ou efeito jurídico sem explorar medo.
- **Solução:** mostrar caminhos previstos e como começa uma análise individual.

Não usar:

- “Você pode perder tudo”.
- “Garanta seus direitos agora”.
- “Recupere sua vaga”.
- “Desbloqueamos sua conta”.
- qualquer promessa de resultado, prazo ou economia.

### 3.4 Como o AIDA será adaptado

- **Atenção:** nomear a categoria buscada — advocacia empresarial.
- **Interesse:** mostrar situações nas quais estrutura jurídica faz diferença.
- **Desejo:** construir percepção de organização, clareza e acompanhamento.
- **Ação:** convidar para uma conversa inicial, sem oferecer gratuidade ou resultado.

---

## 4. Sistema visual global

### 4.1 Conceito

**Editorial jurídico contemporâneo.**

A marca deve parecer:

- acadêmica, sem ser distante;
- premium, sem ostentação;
- humana, sem informalidade excessiva;
- atual, sem depender de modismos;
- organizada e segura.

### 4.2 Tipografia

| Uso | Fonte | Peso recomendado |
| --- | --- | --- |
| H1 e H2 | Literata | 600–700 |
| H3 e destaques editoriais | Literata ou DM Sans | 600–700 |
| Corpo, menu e interface | DM Sans | 400–600 |
| Botões | DM Sans | 600–700 |
| Eyebrows e metadados | DM Sans | 600, caixa alta discreta |

> Ajuste de benchmark: a combinação serifada editorial + Inter/Manrope sobre marfim e azul-marinho já está fortemente presente em concorrentes de concursos. Literata + DM Sans é a hipótese inicial de diferenciação; a escolha final depende dos ativos reais da marca.

#### Escala sugerida

| Elemento | Desktop | Mobile |
| --- | ---: | ---: |
| H1 | 56–68 px | 38–44 px |
| H2 | 40–48 px | 30–36 px |
| H3 | 26–32 px | 23–27 px |
| Texto de destaque | 20–22 px | 18–20 px |
| Corpo | 17–18 px | 16–17 px |
| Legenda | 13–14 px | 13–14 px |

Regras:

- largura máxima de 65 a 72 caracteres para textos longos;
- entrelinha de 1.55 a 1.7 no corpo;
- evitar parágrafos centralizados, exceto pequenos textos de CTA;
- usar no máximo duas famílias tipográficas.

### 4.3 Paleta

| Token | Cor | Uso |
| --- | --- | --- |
| `graphite-950` | `#25222A` | Fundo escuro global, títulos e texto principal |
| `wine-800` | `#652F42` | Marca pessoal, Home e Concursos |
| `wine-600` | `#8B4A5E` | Destaques e hover em Concursos |
| `forest-850` | `#2C423B` | Dívida ativa e Direito empresarial |
| `forest-650` | `#46675D` | Destaques e ícones empresariais |
| `paper-50` | `#F6F1E8` | Fundo principal inspirado em papel |
| `paper-100` | `#EFE8DD` | Camadas e cards claros |
| `rose-sand-100` | `#E9DAD6` | História, acolhimento e prazo em Concursos |
| `sage-100` | `#DEE5DF` | Conteúdo empresarial e cards técnicos |
| `slate-600` | `#68706E` | Texto secundário |
| `white` | `#FFFFFF` | Superfícies e texto sobre fundo escuro |
| `brass-500` | `#A97B49` | Linhas e marcadores, nunca texto pequeno |
| `whatsapp-700` | `#117A43` | CTA persistente do WhatsApp |

### 4.4 Gramática de fundos

Os fundos não serão alternados apenas por decoração. Cada superfície terá uma função:

- **Papel:** abertura, acolhimento e narrativa.
- **Branco:** explicação e leitura longa.
- **Sálvia:** listas, cards e conteúdo empresarial escaneável.
- **Rosa-areia:** história, credenciais ou avisos de prazo.
- **Vinho:** marca pessoal, Concursos e pontos de decisão.
- **Verde mineral:** contexto empresarial e método.
- **Grafite:** posicionamento forte, processo ou CTA.

### 4.5 Layout e espaçamento

- Grid desktop: 12 colunas.
- Largura máxima: 1.200 px.
- Margens: 24 px no tablet e 20 px no mobile.
- Espaçamento vertical de seção: 96–120 px desktop; 64–80 px mobile.
- Cards: raio de 14 px, borda suave e sombra apenas quando houver interação.
- Botões: altura mínima de 48 px, raio de 10 px.
- Ícones: 20, 24 ou 28 px; traço consistente.

### 4.6 Fotografia

Prioridade para imagens reais da Ceres:

- retrato vertical com espaço negativo;
- sala de aula ou ambiente de estudo;
- escritório com composição limpa;
- detalhes de livros ou produção acadêmica;
- expressão segura e acessível, sem poses excessivamente formais.

Evitar:

- martelo judicial;
- colunas gregas;
- balança decorativa repetida;
- aperto de mãos;
- pessoas genéricas fingindo reunião;
- skyline corporativo sem relação com a marca.

### 4.7 Elementos gráficos

- linhas finas em bronze ou azul;
- números grandes em etapas;
- pequenos rótulos editoriais;
- recortes fotográficos verticais;
- caixas de citação;
- padrões discretos inspirados em páginas, margens e documentos;
- monograma “CR” apenas se for aprovado como parte da identidade.

### 4.8 Ícones

Usar uma única biblioteca linear, preferencialmente Lucide.

| Tema | Ícones sugeridos |
| --- | --- |
| Análise | `SearchCheck`, `FileSearch` |
| Documentos | `FileText`, `Files` |
| Prazo | `Clock3`, `CalendarClock` |
| Concurso | `ClipboardCheck`, `ListChecks` |
| Empresa | `Building2`, `BriefcaseBusiness` |
| Sociedade | `UsersRound` |
| Contratos | `FileSignature` |
| Compliance | `ShieldCheck` |
| Marca | `Tags` |
| Formação | `GraduationCap`, `BookOpen` |
| Atendimento | `MessageCircle`, `Send` |
| Navegação | `ArrowRight`, `ChevronDown`, `Menu`, `X` |

Ícones não devem aparecer em todos os títulos. Seu papel é melhorar a leitura de listas e etapas.

### 4.9 Movimento

- transições de 160 a 240 ms;
- pequenos deslocamentos e fades ao entrar na viewport;
- sem parallax pesado;
- sem números animados;
- sem carrossel automático;
- respeitar `prefers-reduced-motion`.

---

## 5. Componentes globais

### 5.1 Header institucional

Usado na Home e, com pequenas adaptações, em Concursos.

#### Desktop

- marca à esquerda;
- linha menor com OAB **[VALIDAR]**;
- menu central/direito;
- CTA de contato;
- altura entre 76 e 84 px;
- fundo marfim na abertura;
- versão fixa com fundo opaco e borda inferior após rolagem.

Menu:

1. Início
2. Concursos
3. Dívida ativa
4. Direito empresarial
5. Sobre
6. Botão “Entrar em contato”

#### Mobile

- altura de 64 px;
- marca à esquerda;
- ícone de menu à direita;
- drawer lateral ocupando aproximadamente 88% da largura;
- links com altura mínima de 48 px;
- CTA ao final do drawer;
- fechar pelo botão, tecla Escape e toque fora;
- bloquear rolagem do conteúdo enquanto aberto.

### 5.2 Header de landing page empresarial

Usado em Dívida ativa e Direito empresarial.

Objetivo: reduzir dispersão e não misturar concursos com o contexto empresarial.

#### Desktop

- marca e OAB;
- âncoras da própria página;
- CTA do WhatsApp;
- sem link “Concursos” em destaque.

Âncoras:

1. Seu caso / Para quem é
2. Caminhos / Atuação
3. Como funciona
4. Dúvidas
5. Botão de contato

#### Mobile

- marca;
- menu compacto com as âncoras;
- CTA persistente no rodapé da tela;
- navegação institucional completa apenas no footer.

### 5.3 Footer

Fundo `graphite-950` e texto claro.

Conteúdo:

- Ceres Rabelo — nome profissional completo **[VALIDAR]**;
- número da OAB **[VALIDAR]**;
- CNPJ;
- WhatsApp e e-mail **[VALIDAR]**;
- cidade/base de atendimento **[VALIDAR]**;
- Instagram;
- links das áreas;
- política de privacidade;
- aviso “Conteúdo de caráter informativo; cada situação exige análise individual.”;
- copyright dinâmico.

### 5.4 Botão flutuante do WhatsApp

#### Home

- desktop: cápsula “Falar pelo WhatsApp”;
- mobile: botão circular de 54 px;
- posição: 24 px da lateral e 24 px do rodapé, respeitando safe area;
- sem animação pulsante.

#### Páginas de serviço

- desktop: cápsula flutuante;
- mobile: barra fixa inferior com texto específico da página;
- não exibir simultaneamente barra e botão circular no mobile.

#### Mensuração

Evento: `whatsapp_click`.

Parâmetros:

- `page`;
- `section`;
- `cta_label`;
- `device_type` quando disponível.

### 5.5 Formulário de contato

Um componente `ContactForm` será reutilizado na Home, Concursos, Dívida ativa e Direito empresarial. A Política de privacidade não terá formulário comercial.

#### Papel na conversão

- WhatsApp atende quem deseja uma conversa imediata;
- formulário atende quem prefere organizar o contexto por escrito;
- os dois caminhos devem aparecer juntos no bloco final, sem competir visualmente;
- nas páginas de serviço, a área de interesse será preenchida automaticamente pela rota;
- na Home, o visitante escolherá a área em um campo de seleção.

#### Campos-base

1. `Nome` — obrigatório;
2. `WhatsApp` — obrigatório, com código de área;
3. `E-mail` — opcional;
4. `Área` — obrigatória na Home e predefinida nas páginas de serviço;
5. `Resumo da situação` — obrigatório, com limite de caracteres e orientação para não inserir dados excessivamente sensíveis;
6. ciência da Política de privacidade e autorização para retorno — obrigatória, com texto final **[VALIDAR]**.

Campos contextuais curtos poderão ser acrescentados:

- Concursos: concurso/cargo, banca, etapa e data do ato;
- Dívida ativa: empresa, órgão responsável, existência de processo/citação e existência de prazo urgente;
- Direito empresarial: segmento, assunto principal e existência de prazo.

Não solicitar upload de documentos na primeira versão. Documentos serão solicitados depois, pelo canal adequado, evitando anexos sensíveis em um formulário público.

#### Estados e acessibilidade

- labels sempre visíveis;
- indicação textual de campos obrigatórios;
- mensagens de erro junto ao campo e resumo acessível quando necessário;
- foco movido para a confirmação depois do envio;
- botão com estados `Enviar`, `Enviando…` e `Mensagem enviada`;
- preservação dos campos quando houver erro de rede;
- confirmação com expectativa realista de retorno, sem prometer prazo não aprovado;
- alternativa de WhatsApp disponível no estado de erro.

#### Segurança e privacidade

- validação no navegador e novamente no servidor;
- sanitização e limites de tamanho;
- honeypot e verificação de tempo mínimo contra spam;
- rate limiting ou desafio adicional apenas se houver abuso;
- nenhuma informação dos campos enviada ao analytics;
- nenhuma base própria de leads na primeira versão;
- envio por serviço transacional para o e-mail oficial **[VALIDAR]**;
- credenciais somente em variáveis de ambiente;
- Política de privacidade deve explicar envio, finalidade, destinatários técnicos e retenção aplicável.

#### Mensuração

- `form_view`;
- `form_start`;
- `form_submit`;
- `form_success`;
- `form_error`.

Parâmetros permitidos: página, posição do formulário, área predefinida e origem/UTM. Nunca registrar nome, telefone, e-mail ou relato no analytics.

### 5.6 CTAs

#### Hierarquia

- Primário: vinho ou verde mineral, conforme a frente, ou botão claro sobre fundo escuro.
- Secundário: outline.
- WhatsApp persistente: verde reservado.
- Links editoriais: texto com seta.

#### Regras de copy

Preferir:

- “Solicitar análise da documentação”.
- “Enviar edital e resultado para análise”.
- “Conversar sobre a empresa”.
- “Conhecer as áreas de atuação”.

Evitar:

- “Ganhe sua causa”.
- “Recupere sua vaga”.
- “Resolva agora”.
- “Consulta grátis”.
- “Fale com a especialista” antes de validar a titulação correspondente.

### 5.7 FAQ

- acordeão acessível;
- título em botão com estado aberto/fechado;
- foco visível;
- apenas uma pergunta aberta por vez no mobile;
- respostas presentes no HTML;
- ícone `Plus`/`Minus` ou `ChevronDown`;
- dados estruturados somente se o conteúdo visível estiver de acordo com as diretrizes aplicáveis.

### 5.8 Componente de processo

Três etapas padrão:

1. **Contato:** visitante envia o contexto inicial pelo formulário ou WhatsApp.
2. **Análise:** equipe examina informações e identifica o enquadramento possível.
3. **Retorno:** visitante recebe orientação sobre os próximos passos disponíveis.

O texto específico será adaptado por página.

---

## 6. Página 1 — Home

### 6.1 Definição

| Item | Especificação |
| --- | --- |
| Rota | `/` |
| Objetivo | Apresentar Ceres e direcionar o visitante para a área correta |
| Público | Busca pelo nome, bio, indicação e material institucional |
| Modelo de copy | Narrativa de marca |
| Conversão | Secundária; prioridade é distribuição |
| Header | Institucional completo |
| Tom | Autoridade formal com proximidade |

### 6.2 SEO provisório

- **Title:** `Ceres Rabelo Advocacia | Concursos e Direito Empresarial`
- **Description:** `Conheça a atuação de Ceres Rabelo em concursos públicos, dívida ativa, execução fiscal e direito empresarial.`
- **H1:** único, localizado no hero.

### 6.3 Estrutura completa

#### Seção 1 — Hero

**Fundo:** `paper-50`.  
**Layout:** duas colunas, copy à esquerda e retrato vertical à direita.  
**Elemento:** linha editorial em bronze e pequeno rótulo institucional.

**[RASCUNHO] Eyebrow**  
`CERES RABELO ADVOCACIA`

**[RASCUNHO] H1**  
`Advocacia com a clareza de quem ensina e a experiência de quem já esteve do outro lado.`

**[RASCUNHO] Apoio**  
`Ceres Rabelo atua em concursos públicos, dívida ativa e direito empresarial, reunindo advocacia, docência e pesquisa na análise de cada situação.`

**Identificação**  
`Ceres Rabelo — advogada, professora, mestra, doutoranda e escritora.`

**CTAs**

- Primário: `Conhecer as áreas de atuação` → âncora `#areas`.
- Secundário: `Entrar em contato` → WhatsApp.

**Mobile**

- texto antes da foto;
- foto em proporção 4:5;
- CTA primário em largura total;
- CTA secundário como link ou botão outline.

#### Seção 2 — Faixa de credenciais

**Fundo:** branco.  
**Função:** estabelecer autoridade antes da apresentação longa.

Itens **[VALIDAR]**:

- Mestra.
- Doutoranda.
- Professora no CERS.
- Professora no Gran Cursos Online.
- Escritora.
- Servidora concursada.

**Visual:** linha horizontal no desktop; grid 2x3 no mobile.  
**Ícones:** `GraduationCap`, `BookOpen`, `Landmark` ou equivalentes discretos.

#### Seção 3 — Quem é Ceres Rabelo

**Fundo:** branco.  
**Layout:** retrato ou foto em ambiente acadêmico à esquerda; texto à direita.

**[RASCUNHO] Título**  
`Conhecimento jurídico também se constrói pela experiência.`

**[RASCUNHO] Texto-base**

`Ceres Rabelo reúne advocacia, docência e pesquisa em uma trajetória marcada pelo estudo e pelo serviço público. Antes de orientar candidatos em situações relacionadas a concursos, ela própria viveu o processo de preparação, aprovação e ingresso no serviço público.`

`Essa experiência se soma à atuação acadêmica e à expansão do escritório para questões fiscais e empresariais, sempre com atenção ao contexto específico de cada pessoa ou empresa.`

**CTA editorial:** `Conheça a trajetória` → âncora da formação.

#### Seção 4 — Áreas de atuação

**ID:** `areas`.  
**Fundo:** `sage-100`.  
**Layout:** três cards grandes.

**[RASCUNHO] Título**  
`Encontre a orientação correspondente ao seu momento.`

**Card 1 — Concursos públicos**

- Ícone: `ClipboardCheck`.
- Texto: `Análise de situações relacionadas ao edital, etapas de avaliação, recursos e medidas administrativas ou judiciais.`
- Link: `Conhecer a atuação em concursos`.

**Card 2 — Dívida ativa e execução fiscal**

- Ícone: `FileSearch`.
- Texto: `Análise de cobranças fiscais, citações, bloqueios, penhoras e outros atos relacionados à dívida da empresa.`
- Link: `Entender os caminhos possíveis`.

**Card 3 — Direito empresarial**

- Ícone: `Building2`.
- Texto: `Apoio jurídico em relações societárias, contratos, compliance, questões tributárias e proteção de marca.`
- Link: `Conhecer a atuação empresarial`.

**Área criminal:** não incluir na versão 1.

#### Seção 5 — Formação e trajetória

**Fundo:** `rose-sand-100`.  
**Layout:** timeline editorial sem animação de números.

**[RASCUNHO] Título**  
`Formação, docência e prática reunidas na mesma atuação.`

Itens **[VALIDAR]**:

- graduação e instituição;
- mestrado e tema;
- doutorado em andamento e instituição;
- docência;
- livros publicados;
- ingresso no serviço público;
- marcos profissionais relevantes permitidos.

**Visual:** anos ou categorias em coluna; linha fina bronze; fotos de livros quando disponíveis.

#### Seção 6 — Como funciona o atendimento

**Fundo:** `graphite-950`; texto branco.  
**Layout:** três etapas numeradas.

**[RASCUNHO] Título**  
`Um processo claro desde o primeiro contato.`

1. **Conte a situação:** envie as informações iniciais pelo formulário ou WhatsApp.
2. **Compartilhe os documentos:** a documentação ajuda a delimitar o contexto.
3. **Receba o retorno:** após a análise, são apresentados os próximos passos possíveis.

**Ícones:** `MessageCircle`, `Files`, `SearchCheck`.

#### Seção 7 — Perguntas institucionais

**Fundo:** `paper-50`.  
**Layout:** FAQ em duas colunas no desktop; uma coluna no mobile.

Perguntas:

1. **Quais áreas fazem parte da atuação?**  
   `O site apresenta as frentes de concursos públicos, dívida ativa e execução fiscal para empresas e direito empresarial.`

2. **Como começa o atendimento?**  
   `O primeiro contato pode ser feito pelo formulário ou WhatsApp, com um resumo da situação. A documentação necessária varia conforme a área e será indicada no atendimento.`

3. **O atendimento pode ser realizado à distância?**  
   **[VALIDAR abrangência e formato antes de responder.]**

4. **O contato inicial já define o resultado do caso?**  
   `Não. Cada situação depende da análise dos documentos, fatos, prazos e normas aplicáveis.`

5. **Onde encontro informações sobre uma área específica?**  
   `Cada frente possui uma página própria com situações atendidas, caminhos possíveis, processo e perguntas frequentes.`

#### Seção 8 — Contato e CTA final

**Fundo:** `forest-850`.  
**Layout:** duas colunas; formulário à esquerda e escolha de área/WhatsApp à direita. No mobile, formulário primeiro e WhatsApp como alternativa imediata.

**[RASCUNHO] Título**  
`Escolha a área que corresponde à sua situação.`

**CTAs**

- `Concursos públicos`.
- `Dívida ativa para empresas`.
- `Direito empresarial`.
- WhatsApp como ação secundária.

**Formulário:** usar `ContactForm` com seleção obrigatória de área.

#### Seção 9 — Footer

Usar o footer global completo.

### 6.4 Mensagem do WhatsApp

`Olá, conheci o trabalho da Ceres Rabelo pelo site e gostaria de receber orientação sobre qual área corresponde à minha situação.`

### 6.5 Regras específicas da Home

- não usar números de resultados;
- não transformar a Home em landing page de uma única área;
- manter WhatsApp presente, mas não dominante;
- a foto deve mostrar a pessoa antes de mostrar o “escritório”;
- nenhuma área deve ser listada sem destino correspondente.

---

## 7. Página 2 — Concursos públicos

### 7.1 Definição

| Item | Especificação |
| --- | --- |
| Rota | `/concursos` |
| Objetivo | Levar o candidato com uma situação concreta a iniciar contato pelo formulário ou WhatsApp |
| Público | Candidato eliminado, prejudicado ou em dúvida sobre uma etapa do concurso |
| Tráfego | Meta, conteúdo orgânico, Instagram e reativação responsável da base |
| Modelo de copy | Reconhecimento do problema + mecanismo + história pessoal |
| Conversão | Formulário e WhatsApp |
| Header | Institucional adaptado, com âncoras da página |
| Tom | Humano, explicativo e firme |

### 7.2 SEO provisório

- **Title:** `Advocacia em Concursos Públicos | Ceres Rabelo`
- **Description:** `Informações sobre edital, eliminação, TAF, avaliação médica, cotas, nomeação, recursos e medidas relacionadas a concursos públicos.`
- **H1:** pergunta situacional, sem promessa.

### 7.3 Menu da página

Desktop:

1. Situações
2. O edital
3. Caminhos possíveis
4. Como funciona
5. Dúvidas
6. CTA `Enviar documentos`

Mobile:

- marca e menu compacto;
- links em drawer;
- barra inferior `Enviar edital para análise`;
- a marca leva à Home.

### 7.4 Estrutura completa

#### Seção 1 — Hero situacional

**Fundo:** `paper-50`, com pequeno campo azul no lado da fotografia.  
**Layout:** copy à esquerda; retrato mais humano da Ceres à direita.  
**Elemento:** detalhe gráfico inspirado em linha de edital/documento.

**[RASCUNHO] Eyebrow**  
`CONCURSOS PÚBLICOS`

**[RASCUNHO] H1**  
`A banca eliminou você. O edital e os documentos mostram se a decisão pode ser questionada.`

**[RASCUNHO] Apoio**  
`A análise compara a regra prevista, o que aconteceu na etapa e os prazos disponíveis — antes de indicar qualquer caminho.`

**CTA primário**  
`Organizar meu caso para análise`

**CTA secundário**  
`Ver situações analisadas` → `#situacoes`.

**Microcopy abaixo do CTA**  
`A medida adequada depende da análise individual do caso.`

#### Seção 2 — Você se reconhece aqui?

**ID:** `situacoes`.  
**Fundo:** branco.  
**Layout:** grid de oito situações, 4x2 no desktop e uma coluna no mobile.

**[RASCUNHO] Título**  
`Situações que podem exigir uma análise mais cuidadosa.`

Cards:

1. prova de títulos;
2. teste de aptidão física;
3. exame médico ou psicológico;
4. investigação social;
5. questão ou critério fora do edital;
6. vagas reservadas, cotas ou PCD;
7. classificação e nomeação;
8. recurso administrativo ou prazo em andamento.

**Ícones:** `Award`, `Activity`, `Stethoscope`, `FileSearch`, `ListX`, `Accessibility`, `ListOrdered`, `CalendarClock`.

**Regra:** descrever a situação, não afirmar que houve ilegalidade.

Exemplo de card:

`Teste de aptidão física — eliminação, alteração de critério, condição de realização ou aplicação do que estava previsto no edital.`

#### Seção 3 — O papel do edital

**ID:** `edital`.  
**Fundo:** `graphite-950`; texto branco.  
**Layout:** texto em coluna principal e fragmento visual de documento na lateral.

**[RASCUNHO] Título**  
`O edital define as regras que orientam o concurso.`

**[RASCUNHO] Texto**

`A análise jurídica começa pela comparação entre o que o edital estabeleceu e o que efetivamente aconteceu em cada etapa. Também entram nessa leitura os atos da banca, a documentação do candidato, os prazos e as normas aplicáveis.`

`Nem toda discordância produz a mesma medida. Por isso, o exame do caso deve preceder qualquer conclusão sobre o caminho possível.`

**Elemento:** caixa com três itens: `regra prevista`, `ato praticado`, `prazo disponível`.

#### Seção 4 — Caminhos possíveis

**ID:** `caminhos`.  
**Fundo:** `sage-100`.  
**Layout:** três cards horizontais.

**[RASCUNHO] Título**  
`A situação pode admitir caminhos diferentes.`

**Card 1 — Recurso administrativo**

`Apresentado à própria administração ou banca, de acordo com as regras e o prazo do concurso.`

Ícone: `FilePenLine`.

**Card 2 — Mandado de segurança**

`Medida judicial com requisitos e prazo próprios, cuja aplicação depende dos documentos e da natureza do ato questionado.`

Ícone: `ScrollText`.

**Card 3 — Ação judicial**

`Outras medidas podem ser consideradas conforme os fatos, as provas disponíveis e o tipo de discussão jurídica.`

Ícone: `Landmark`.

**Aviso:** `A lista é informativa e não substitui a análise individual.`

#### Seção 5 — Prazo

**Fundo:** `rose-sand-100`.  
**Layout:** ícone grande de relógio, texto e CTA lateral.

**[RASCUNHO] Título**  
`Em concursos, a data também faz parte do caso.`

**[RASCUNHO] Texto**  
`Editais, recursos e medidas judiciais podem ter prazos próprios. Guardar a publicação, o resultado e a data em que houve ciência da decisão ajuda a tornar a análise mais precisa.`

**CTA:** `Organizar documentos para análise`.

**Ícone:** `CalendarClock`.

#### Seção 6 — Quem analisa a situação

**Fundo:** branco.  
**Layout:** fotografia da Ceres + bloco de autoridade e história.

**[RASCUNHO] Eyebrow**  
`QUEM VAI ANALISAR`

**[RASCUNHO] Título**  
`Experiência profissional e uma história vivida do outro lado do edital.`

**[RASCUNHO] Texto**

`Ceres Rabelo é advogada, professora, mestra, doutoranda e escritora. Antes da atuação profissional em concursos, foi candidata, foi aprovada e ingressou no serviço público.`

`Essa trajetória não substitui a análise jurídica de cada situação, mas ajuda a compreender o contexto, o vocabulário e as expectativas de quem está passando por uma etapa decisiva.`

**Credenciais:** usar apenas as confirmadas.  
**OAB:** obrigatória após validação.

#### Seção 7 — Como funciona a análise

**ID:** `como-funciona`.  
**Fundo:** `wine-800`; texto branco.  
**Layout:** três etapas numeradas.

1. **Envie o contexto:** informe concurso, cargo, banca, etapa e data da decisão pelo formulário ou WhatsApp.
2. **Compartilhe os documentos:** edital, resultado, recurso, resposta e demais arquivos disponíveis.
3. **Aguarde o retorno da análise:** são examinados os fatos, os prazos e os caminhos juridicamente possíveis.

**CTA primário:** `Preencher formulário`.  
**CTA secundário:** `Iniciar pelo WhatsApp`.

#### Seção 8 — Documentos que ajudam

**Fundo:** branco.  
**Layout:** checklist editorial em duas colunas.

- edital e retificações;
- resultado ou ato de eliminação;
- espelho de avaliação, quando houver;
- recurso já apresentado;
- resposta da banca;
- publicações e comprovantes de data;
- documentos específicos da etapa;
- relato cronológico breve.

**Ícone principal:** `Files`.

#### Seção 9 — FAQ

**ID:** `duvidas`.  
**Fundo:** `paper-50`.

1. **É possível saber se tenho chance apenas pelo contato inicial?**  
   `Não é adequado estimar resultado sem examinar edital, documentos, fatos e prazos. O contato inicial serve para organizar as informações necessárias à análise.`

2. **A banca pode aplicar uma regra que não estava no edital?**  
   `A resposta depende do conteúdo do edital, do ato praticado e das normas aplicáveis. A comparação entre esses elementos é um dos pontos centrais da análise.`

3. **Recurso administrativo e medida judicial são a mesma coisa?**  
   `Não. Têm fundamentos, destinatários e procedimentos diferentes. A existência ou conveniência de cada caminho depende da situação concreta.`

4. **Quais documentos devo enviar primeiro?**  
   `Edital, resultado ou ato questionado, datas relevantes e eventuais recursos e respostas já existentes.`

5. **Existe prazo para buscar análise?**  
   `Pode existir. O prazo varia conforme a etapa, o edital e a medida considerada. Por isso, as datas devem ser informadas logo no primeiro contato.`

6. **Uma análise garante que a decisão será alterada?**  
   `Não. A análise identifica o enquadramento jurídico e os caminhos possíveis, sem garantia de resultado.`

7. **O atendimento pode ser feito de forma remota?**  
   **[VALIDAR abrangência territorial e formato de atendimento.]**

#### Seção 10 — Formulário e CTA final

**Fundo:** `graphite-950`.  
**[RASCUNHO] Título:** `Reúna o edital, o resultado e as datas do que aconteceu.`  
**Apoio:** `Esses são os primeiros elementos para uma análise responsável.`  
**Layout:** duas colunas no desktop; formulário contextual à esquerda e CTA de WhatsApp à direita.  
**Formulário:** área `Concursos` predefinida; solicitar concurso/cargo, banca, etapa, data e resumo, sem anexos.  
**CTA alternativo:** `Continuar pelo WhatsApp`.

### 7.5 Mensagem do WhatsApp

`Olá, gostaria de solicitar uma análise relacionada a concurso público. Concurso/cargo: [preencher]. Banca: [preencher]. Etapa: [preencher]. Data da decisão ou resultado: [preencher].`

### 7.6 Regras específicas

- não usar “eliminado injustamente” como afirmação antes da análise;
- não prometer reintegração, nomeação ou liminar;
- não usar números de casos ou resultados;
- usar a história de Ceres como identificação, não como prova de êxito;
- o CTA deve pedir documentos e contexto, não induzir contratação imediata.

---

## 8. Página 3 — Dívida ativa e execução fiscal para empresas

### 8.1 Definição

| Item | Especificação |
| --- | --- |
| Rota | `/divida-ativa-empresas` |
| Objetivo | Converter empresários com urgência fiscal em conversas qualificadas |
| Público | Empresa inscrita, citada, com bloqueio, penhora ou dificuldade de certidão |
| Tráfego | Google Search |
| Modelo de copy | Reconhecimento de alta intenção + diagnóstico do quadro |
| Conversão | Formulário e WhatsApp |
| Header | Landing page empresarial |
| Tom | Técnico, direto e sóbrio |

### 8.2 SEO provisório

- **Title:** `Dívida Ativa e Execução Fiscal para Empresas | Ceres Rabelo`
- **Description:** `Entenda o que significa a dívida ativa, quais documentos reunir e quais caminhos jurídicos podem ser examinados em uma execução fiscal.`
- **H1:** conter “dívida ativa” e reconhecer a situação.

### 8.3 Menu da página

1. Seu caso
2. Dívida ativa
3. Caminhos possíveis
4. Como funciona
5. Dúvidas
6. CTA `Solicitar análise`

Não destacar concursos no header.

### 8.4 Estrutura completa

#### Seção 1 — Hero de alta intenção

**Fundo:** `graphite-950`; texto branco.  
**Layout:** copy em 7 colunas; retrato profissional ou composição documental em 5 colunas.  
**Elemento:** linhas finas lembrando uma CDA, sem reproduzir documento real.

**[RASCUNHO] Eyebrow**  
`DÍVIDA ATIVA E EXECUÇÃO FISCAL`

**[RASCUNHO] H1**  
`Dívida ativa, citação fiscal ou conta bloqueada: o primeiro passo é entender exatamente o que está sendo cobrado.`

**[RASCUNHO] Apoio**  
`Origem do crédito, CDA, datas, bloqueios e fase do processo precisam ser organizados antes de avaliar parcelamento, defesa ou outra medida.`

**CTA primário:** `Entender o quadro da empresa`.  
**CTA secundário:** `Entender o que pode ser examinado`.

**Microcopy:** `Nenhuma medida ou resultado pode ser definido antes da análise individual.`

#### Seção 2 — Reconheça a situação

**ID:** `seu-caso`.  
**Fundo:** branco.  
**Layout:** seis cards compactos.

Situações:

1. CNPJ inscrito em dívida ativa.
2. Citação em execução fiscal.
3. Conta bancária bloqueada.
4. Penhora ou indicação de bens.
5. Certidão negativa ou positiva com efeitos de negativa não emitida.
6. Cobrança que aparenta conter erro, duplicidade ou valor divergente.

**Ícones:** `Building2`, `FileWarning`, `Landmark`, `Gavel`, `BadgeX`, `SearchX`.

**Regra:** não afirmar que a cobrança é indevida; usar “pode exigir análise”.

#### Seção 3 — O que é dívida ativa

**ID:** `divida-ativa`.  
**Fundo:** `paper-50`.  
**Layout:** texto educativo + diagrama simples em três etapas.

**[RASCUNHO] Título**  
`A inscrição em dívida ativa formaliza a cobrança pelo poder público.`

**[RASCUNHO] Texto**

`Depois de constituído e não pago, um crédito pode ser inscrito em dívida ativa e representado por uma Certidão de Dívida Ativa. Esse documento pode fundamentar uma execução fiscal e outros atos de cobrança.`

`A regularidade da cobrança não deve ser presumida nem descartada apenas pela existência da inscrição. Origem, constituição, identificação, valores, prescrição, notificações e requisitos formais precisam ser examinados.`

**Diagrama:** `crédito → inscrição/CDA → cobrança/execução`.  
**Ícones:** `ReceiptText`, `FileBadge`, `Landmark`.

#### Seção 4 — O que pode ser examinado

**ID:** `caminhos`.  
**Fundo:** `sage-100`.  
**Layout:** cards de conteúdo, não cards promocionais.

**[RASCUNHO] Título**  
`A legislação prevê instrumentos diferentes, conforme o momento e os documentos.`

Itens:

- regularidade da CDA;
- prescrição ou decadência, quando aplicável;
- pagamentos, parcelamentos ou duplicidades;
- legitimidade e responsabilidade dos envolvidos;
- excesso ou erro no valor cobrado;
- embargos à execução;
- exceção de pré-executividade;
- adequação de bloqueios e penhoras.

**Aviso:** `A presença de um item nesta lista não significa que ele se aplique ao caso da empresa.`

#### Seção 5 — Prazo e momento processual

**Fundo:** `rose-sand-100`.  
**Layout:** texto à esquerda; checklist de datas à direita.

**[RASCUNHO] Título**  
`A data da citação, do bloqueio ou da ciência do ato precisa ser identificada.`

**[RASCUNHO] Texto**  
`A execução fiscal possui etapas e prazos. Para situar o caso, é importante preservar a citação, a decisão, os comprovantes de bloqueio e as datas em que a empresa tomou conhecimento dos atos.`

**Checklist:** data, órgão responsável, número do processo, valor, documento recebido.  
**Ícone:** `CalendarClock`.

#### Seção 6 — Quem conduz a análise

**Fundo:** branco.  
**Layout:** retrato mais sóbrio + credenciais.

**[RASCUNHO] Título**  
`Análise jurídica conduzida com método e atenção à documentação.`

**[RASCUNHO] Texto**  
`Ceres Rabelo é advogada, professora, mestra, doutoranda e escritora. Sua formação e experiência acadêmica integram uma atuação orientada pela leitura técnica dos fatos, documentos e procedimentos aplicáveis.`

**[VALIDAR]:** incluir apenas formação pertinente e confirmada; não usar prova social de concursos nesta página.

#### Seção 7 — Como funciona

**ID:** `como-funciona`.  
**Fundo:** `forest-850`; texto branco.

1. **Envio das informações:** processo, órgão, tributo, valor e momento atual pelo formulário ou WhatsApp.
2. **Organização dos documentos:** citação, CDA, decisões, comprovantes e histórico de pagamentos ou parcelamentos.
3. **Análise e retorno:** identificação dos pontos que merecem exame e dos caminhos juridicamente possíveis.

**CTA primário:** `Preencher formulário`.  
**CTA secundário:** `Enviar informações pelo WhatsApp`.

#### Seção 8 — Documentos iniciais

**Fundo:** branco.  
**Layout:** checklist em duas colunas.

- citação ou intimação;
- CDA, se disponível;
- número do processo;
- comprovante do bloqueio ou penhora;
- contrato social e alterações relevantes;
- notificações administrativas;
- comprovantes de pagamento ou parcelamento;
- demonstrativos da cobrança;
- relato cronológico breve.

**Ícone:** `Files`.

#### Seção 9 — FAQ

**ID:** `duvidas`.  
**Fundo:** `paper-50`.

1. **O que significa ter o CNPJ inscrito em dívida ativa?**  
   `Significa que um crédito foi formalmente registrado para cobrança pelo poder público. É necessário examinar sua origem, constituição, valores e documentação.`

2. **Recebi uma citação em execução fiscal. O que devo separar?**  
   `Citação, número do processo, CDA quando disponível, documentos da empresa, datas e comprovantes relacionados à dívida.`

3. **Uma conta bloqueada pode ser analisada?**  
   `Sim, o ato de bloqueio e o contexto da execução podem ser examinados. A existência de medida cabível depende do processo e dos documentos.`

4. **Parcelar a dívida encerra a execução?**  
   `Os efeitos de um parcelamento variam conforme o programa, o momento processual e o cumprimento das condições. O caso deve ser verificado individualmente.`

5. **A empresa pode perder bens?**  
   `A execução fiscal pode alcançar patrimônio, observadas as regras processuais e as circunstâncias do caso. Não é possível antecipar o efeito sem examinar o processo.`

6. **Quanto tempo leva para resolver?**  
   `O tempo varia conforme o órgão, a fase, as medidas existentes e a tramitação do processo. Não é adequado prometer prazo de resultado.`

7. **É possível saber o caminho apenas pelo valor da dívida?**  
   `Não. Valor é apenas um dos elementos. Origem, documentos, datas, garantias e fase da cobrança também importam.`

#### Seção 10 — Formulário e CTA final

**Fundo:** `graphite-950`.  
**[RASCUNHO] Título:** `Comece pelos documentos e pelas datas da cobrança.`  
**Apoio:** `Essas informações permitem situar a empresa no procedimento e iniciar uma análise responsável.`  
**Layout:** duas colunas no desktop; formulário contextual à esquerda e CTA de WhatsApp à direita.  
**Formulário:** área `Dívida ativa` predefinida; solicitar empresa, órgão, existência de processo/citação, prazo e resumo, sem anexos.  
**CTA alternativo:** `Continuar pelo WhatsApp`.

### 8.5 Mensagem do WhatsApp

`Olá, gostaria de solicitar uma análise relacionada à dívida ativa ou execução fiscal da empresa. CNPJ: [preencher]. Órgão responsável: [preencher]. Já existe processo ou citação? [sim/não]. Houve bloqueio ou penhora? [sim/não].`

### 8.6 Regras específicas

- nenhuma referência visual ou textual a concursos;
- termo principal da página: dívida ativa;
- explicar “execução fiscal” sem presumir familiaridade;
- não prometer suspensão, desbloqueio, anulação ou prazo;
- não usar urgência artificial; trabalhar com datas reais;
- velocidade e clareza têm prioridade sobre efeitos visuais.

---

## 9. Página 4 — Direito empresarial

### 9.1 Definição

| Item | Especificação |
| --- | --- |
| Rota | `/direito-empresarial` |
| Objetivo | Apresentar a atuação empresarial e iniciar conversas qualificadas |
| Público | Sócios, gestores, empresas em crescimento ou reestruturação |
| Tráfego | Google Search, Home, conteúdo orgânico, indicação e cross-sell |
| Modelo de copy | Momento empresarial + AIDA consultivo |
| Conversão | Formulário e WhatsApp / conversa inicial de diagnóstico |
| Header | Landing page empresarial |
| Tom | Consultivo, técnico e objetivo |

### 9.2 SEO provisório

- **Title:** `Advocacia Empresarial | Ceres Rabelo`
- **Description:** `Atuação em direito societário, contratos, compliance, questões tributárias e registro de marca para empresas e sócios.`
- **H1:** conter “advocacia empresarial” ou expressão equivalente.

### 9.3 Menu da página

1. Para quem é
2. Áreas de atuação
3. Quando faz sentido
4. Como começa
5. Dúvidas
6. CTA `Conversar sobre a empresa`

Não destacar concursos no header.

### 9.4 Estrutura completa

#### Seção 1 — Hero de categoria

**Fundo:** composição dividida entre `paper-50` e `graphite-950`.  
**Layout:** copy no campo claro; retrato ou composição editorial no campo escuro.  
**Elemento:** grade fina ou linhas que expressem estrutura e organização.

**[RASCUNHO] Eyebrow**  
`DIREITO EMPRESARIAL`

**[RASCUNHO] H1**  
`A empresa cresceu. Os contratos, as regras entre sócios e os processos jurídicos acompanharam?`

**[RASCUNHO] Apoio**  
`A advocacia empresarial começa pela leitura do momento da empresa e pela identificação das relações que precisam de mais clareza e estrutura.`

**CTA primário:** `Mapear a necessidade da empresa`.  
**CTA secundário:** `Conhecer as áreas de atuação`.

**Microcopy:** `O escopo adequado depende do momento e das necessidades identificadas em cada empresa.`

#### Seção 2 — Para quem é

**ID:** `para-quem`.  
**Fundo:** branco.  
**Layout:** três grandes perfis.

**[RASCUNHO] Título**  
`A estrutura jurídica precisa acompanhar a realidade da empresa.`

**Perfil 1 — Sócios iniciando ou reorganizando uma sociedade**  
`Para quem precisa definir responsabilidades, participação, regras de decisão e caminhos para mudanças futuras.`

**Perfil 2 — Empresas em crescimento**  
`Para operações que passaram a lidar com mais contratos, pessoas, fornecedores, riscos e decisões estratégicas.`

**Perfil 3 — Empresas diante de mudança ou conflito**  
`Para situações que exigem revisão da estrutura, das relações societárias ou dos instrumentos já utilizados.`

**Ícones:** `UsersRound`, `TrendingUp`, `GitPullRequestArrow` ou equivalentes.

#### Seção 3 — Áreas de atuação

**ID:** `atuacao`.  
**Fundo:** `sage-100`.  
**Layout:** cinco cards; três na primeira linha e dois maiores na segunda.

**[RASCUNHO] Título**  
`Frentes jurídicas que fazem parte da organização empresarial.`

**Card 1 — Acordos e relações societárias**

`Definição e revisão de regras entre sócios, responsabilidades, decisões, entradas, saídas e outras situações da vida societária.`

Ícone: `UsersRound`.

**Card 2 — Contratos empresariais**

`Elaboração e revisão de contratos conforme o contexto da operação, das partes e dos riscos envolvidos.`

Ícone: `FileSignature`.

**Card 3 — Compliance trabalhista**

`Revisão de práticas e documentos para identificar pontos que merecem adequação na relação entre empresa e trabalho.`

Ícone: `ShieldCheck`.

**Card 4 — Questões tributárias e planejamento**

`Análise jurídica de situações tributárias e da estrutura aplicável às decisões da empresa, sem promessa de economia ou resultado.`

Ícone: `Calculator` ou `ChartNoAxesCombined`.

**Card 5 — Registro e proteção de marca**

`Orientação sobre busca, pedido de registro, acompanhamento e organização jurídica dos ativos de marca.`

Ícone: `Tags`.

#### Seção 4 — Quando cada frente faz sentido

**ID:** `quando-faz-sentido`.  
**Fundo:** `rose-sand-100`.  
**Layout:** lista editorial “situação → ponto jurídico”.

**[RASCUNHO] Título**  
`A necessidade jurídica costuma aparecer antes de receber um nome técnico.`

Exemplos:

- `Os sócios tomam decisões relevantes apenas de forma verbal` → avaliar regras e instrumentos societários.
- `A empresa começou a contratar mais fornecedores e clientes` → revisar modelos e fluxos contratuais.
- `O crescimento aumentou a exposição trabalhista` → mapear práticas e documentos.
- `A operação mudou e a estrutura tributária deixou de acompanhar` → examinar o enquadramento e os limites jurídicos.
- `A marca passou a ter valor comercial` → avaliar busca e proteção registral.

**Regra:** educar sem criar diagnóstico automático.

#### Seção 5 — Estrutura antes do conflito

**Fundo:** `graphite-950`; texto branco.  
**Layout:** manifesto curto em até 680 px + elemento de linhas conectadas.

**[RASCUNHO] Título**  
`Estrutura jurídica não elimina incertezas. Ela torna decisões, responsabilidades e procedimentos mais claros.`

**[RASCUNHO] Texto**  
`Contratos, regras societárias e políticas internas não existem apenas para momentos de conflito. Eles registram expectativas, organizam relações e criam referências para a rotina da empresa.`

Sem CTA obrigatório; a função é consolidar percepção de valor.

#### Seção 6 — Quem conduz o trabalho

**Fundo:** branco.  
**Layout:** retrato sóbrio, texto e credenciais.

**[RASCUNHO] Título**  
`Formação e análise aplicadas ao contexto da empresa.`

**[RASCUNHO] Texto**  
`Ceres Rabelo é advogada, professora, mestra, doutoranda e escritora. Sua atuação reúne prática profissional, pesquisa e docência em uma abordagem voltada à compreensão do contexto e à organização dos caminhos possíveis.`

**[VALIDAR]:** currículo completo e quais credenciais são mais relevantes para esta página.

#### Seção 7 — Como começa o diagnóstico

**ID:** `como-comeca`.  
**Fundo:** `forest-850`; texto branco.  
**Layout:** quatro etapas.

**[RASCUNHO] Título**  
`A conversa inicial serve para mapear o momento da empresa.`

1. **Contexto:** atividade, porte, sócios e momento atual.
2. **Necessidade:** decisão, documento, relação ou risco que motivou o contato.
3. **Materiais:** contratos, atos societários ou documentos relacionados.
4. **Delimitação:** retorno sobre o escopo que pode ser examinado.

**CTA:** `Conversar sobre a empresa`.

**Nota:** “diagnóstico empresarial” é nome da etapa/oferta, não da página.

#### Seção 8 — Informações que ajudam no primeiro contato

**Fundo:** branco.

- segmento e atividade da empresa;
- cidade/estado e abrangência da operação;
- quantidade de sócios;
- decisão ou problema que motivou o contato;
- prazo existente, se houver;
- contratos ou atos societários relacionados;
- objetivo esperado para a organização do trabalho.

**Ícone:** `ClipboardList`.

#### Seção 9 — FAQ

**ID:** `duvidas`.  
**Fundo:** `paper-50`.

1. **Quando uma empresa deve procurar apoio jurídico empresarial?**  
   `Quando precisa estruturar uma relação, tomar uma decisão com efeitos jurídicos, revisar documentos ou compreender riscos relacionados à operação.`

2. **O atendimento é apenas para empresas grandes?**  
   `O escopo depende da necessidade, da estrutura e do momento da empresa, não apenas do porte. A cliente deve validar quais perfis serão atendidos prioritariamente.`

3. **O que é o diagnóstico empresarial?**  
   `É a etapa inicial de entendimento do contexto, dos documentos e da necessidade apresentada. Ela ajuda a delimitar o escopo possível do trabalho.`

4. **É possível contratar apenas a elaboração ou revisão de um documento?**  
   `O formato pode ser pontual ou mais amplo, conforme a necessidade identificada e o escopo acordado.`

5. **A atuação pode ser recorrente?**  
   `Pode haver demandas pontuais ou acompanhamento continuado, mas o formato depende da estrutura e das necessidades da empresa.`

6. **O planejamento tributário garante redução de impostos?**  
   `Não. Qualquer análise depende da operação, do enquadramento e das normas aplicáveis, sem promessa de economia ou resultado.`

7. **Quais documentos devo separar?**  
   `Depende da demanda. Contrato social, alterações, contratos, notificações, políticas e documentos específicos podem ser solicitados após o contato inicial.`

8. **O atendimento pode ser remoto?**  
   **[VALIDAR abrangência territorial e formato.]**

#### Seção 10 — Formulário e CTA final

**Fundo:** `graphite-950`.  
**[RASCUNHO] Título:** `Conte em que momento a empresa está e qual decisão precisa ser tomada.`  
**Apoio:** `O primeiro passo é compreender o contexto e organizar as informações relevantes.`  
**Layout:** duas colunas no desktop; formulário contextual à esquerda e CTA de WhatsApp à direita.  
**Formulário:** área `Direito empresarial` predefinida; solicitar segmento, assunto principal, prazo e resumo, sem anexos.  
**CTA alternativo:** `Continuar pelo WhatsApp`.

### 9.5 Mensagem do WhatsApp

`Olá, gostaria de conversar sobre uma necessidade jurídica da empresa. Segmento: [preencher]. Número de sócios: [preencher]. Assunto principal: [societário/contratos/compliance/tributário/marca/outro]. Existe prazo? [sim/não].`

### 9.6 Regras específicas

- usar “advocacia empresarial” no primeiro viewport;
- não transformar serviços específicos em promessas de resultado;
- não usar números ou histórias de concursos como prova de autoridade;
- não prometer economia tributária;
- trabalhar prevenção como organização, não como proteção absoluta;
- o CTA é uma conversa de diagnóstico, não uma oferta gratuita.

---

## 10. Página 5 — Política de privacidade

### 10.1 Definição

| Item | Especificação |
| --- | --- |
| Rota | `/politica-de-privacidade` |
| Objetivo | Informar como dados e tecnologias de mensuração são utilizados |
| Público | Visitantes de todas as páginas |
| Conversão | Nenhuma |
| Header | Institucional simplificado |
| WhatsApp persistente | Não recomendado |
| Tom | Claro, objetivo e não promocional |

### 10.2 SEO provisório

- **Title:** `Política de Privacidade | Ceres Rabelo Advocacia`
- **Description:** `Consulte as informações sobre tratamento de dados pessoais e tecnologias utilizadas no site Ceres Rabelo Advocacia.`
- `noindex` não é necessário por padrão, mas a decisão pode ser revista.

### 10.3 Layout

- fundo branco;
- cabeçalho simplificado;
- coluna de leitura de até 780 px;
- sumário lateral no desktop e recolhível no mobile;
- data de última atualização visível;
- links sublinhados;
- footer global simplificado.

### 10.4 Estrutura de conteúdo

1. **Introdução e identificação do controlador** **[VALIDAR]**.
2. **Quais dados podem ser coletados**.
3. **Dados fornecidos voluntariamente pelo formulário, WhatsApp ou outro canal de contato**.
4. **Dados técnicos de navegação**.
5. **Finalidades do tratamento**.
6. **Cookies, Google Analytics, Google Ads e Meta Pixel**.
7. **Compartilhamento com fornecedores e plataformas**.
8. **Bases legais aplicáveis** **[VALIDAR juridicamente]**.
9. **Retenção e segurança**.
10. **Direitos do titular**.
11. **Como solicitar informações ou exercer direitos** **[VALIDAR contato]**.
12. **Transferência internacional, quando aplicável**.
13. **Atualizações desta política**.

### 10.5 Banner de consentimento

**[VALIDAR com a configuração de mensuração.]**

Se houver tecnologias não essenciais que dependam de consentimento:

- opções `Aceitar`, `Recusar` e `Configurar`;
- mesma ênfase visual para aceitar e recusar;
- não carregar tags condicionais antes da escolha;
- link permanente para rever preferências;
- texto curto e ligação para a política completa.

### 10.6 Regras específicas

- o texto final deve refletir o que o site realmente coleta;
- não copiar política genérica de outro negócio;
- listar plataformas efetivamente instaladas;
- atualizar a política quando houver nova integração;
- obter revisão adequada antes da publicação.

---

## 11. Matriz de fundos por página

| Ordem | Home | Concursos | Dívida ativa | Empresarial |
| ---: | --- | --- | --- | --- |
| 1 | Papel | Papel + vinho | Grafite + verde mineral | Papel + verde mineral |
| 2 | Branco | Branco | Branco | Branco |
| 3 | Branco | Grafite + vinho | Papel | Sálvia |
| 4 | Sálvia | Papel | Sálvia | Papel |
| 5 | Rosa-areia | Rosa-areia | Rosa-areia | Grafite |
| 6 | Grafite | Branco | Branco | Branco |
| 7 | Papel | Vinho | Verde mineral | Verde mineral |
| 8 | Vinho + grafite | Branco | Branco | Branco |
| 9 | Footer grafite | Papel | Papel | Papel |
| 10 | — | Grafite | Grafite | Grafite |

Regra de implementação: não alternar superfícies sem respeitar esta sequência ou sem motivo editorial.

---

## 12. Matriz de CTA

| Página | Hero | Meio | Final | Persistente mobile |
| --- | --- | --- | --- | --- |
| Home | Conhecer as áreas | Links por área | Formulário ou escolher uma área | Ícone do WhatsApp |
| Concursos | Organizar meu caso para análise | Organizar documentos | Formulário ou WhatsApp | Organizar meu caso |
| Dívida ativa | Entender o quadro da empresa | Enviar informações | Formulário ou WhatsApp | Entender o quadro da empresa |
| Empresarial | Mapear a necessidade da empresa | Iniciar diagnóstico | Formulário ou WhatsApp | Mapear a necessidade |
| Privacidade | Nenhum | Nenhum | Nenhum | Nenhum |

---

## 13. Responsividade

### 13.1 Mobile first

- hero em uma coluna;
- texto antes da imagem;
- botões principais em largura total;
- cards empilhados;
- FAQs com uma pergunta por linha;
- títulos sem quebras artificiais;
- nenhuma tabela de conteúdo será usada na interface mobile quando cards forem mais legíveis;
- barras fixas respeitam `env(safe-area-inset-bottom)`;
- conteúdo não pode ficar escondido atrás da barra de CTA.

### 13.2 Breakpoints funcionais

- até 639 px: mobile;
- 640–899 px: tablet;
- 900–1199 px: desktop compacto;
- 1.200 px ou mais: desktop amplo com container limitado.

Os breakpoints devem responder ao conteúdo, não apenas aos dispositivos.

### 13.3 Acessibilidade

- contraste mínimo adequado;
- texto nunca embutido em fotografia essencial;
- alt text descritivo em fotos informativas;
- alt vazio em imagens puramente decorativas;
- foco visível;
- navegação completa por teclado;
- link “Pular para o conteúdo”;
- botões com nomes acessíveis;
- tamanho de toque mínimo de 44x44 px;
- não depender apenas de cor para comunicar estado;
- acordeões e drawer com atributos e foco corretos.

---

## 14. SEO e conteúdo técnico

### 14.1 Regras por página

- um H1;
- hierarquia H2/H3 sem saltos decorativos;
- title e description próprios;
- URL canônica;
- Open Graph próprio ou global coerente;
- breadcrumbs visuais apenas nas páginas institucionais, se ajudarem a navegação;
- schema de organização/profissional somente com dados reais e validados;
- FAQ visível em HTML e acessível; não implementar `FAQPage` por padrão, pois sites jurídicos comuns não recebem regularmente esse rich result no Google.

### 14.2 Imagem social

Criar uma imagem social única e coerente com a identidade final:

- formato 1200x630;
- nome Ceres Rabelo;
- descrição institucional curta;
- retrato real aprovado;
- paleta final de papel, grafite, vinho, verde mineral e latão;
- sem números de resultados;
- sem excesso de texto.

### 14.3 Performance

- imagens responsivas e em formatos modernos;
- fontes hospedadas e reduzidas aos pesos necessários;
- evitar vídeo automático;
- ícones importados individualmente;
- animação somente com CSS ou biblioteca já necessária;
- prioridade máxima para o primeiro viewport das páginas pagas;
- meta operacional: carregamento percebido inferior a dois segundos em conexão móvel razoável.

---

## 15. Mensuração

Eventos mínimos:

- `whatsapp_click`;
- `form_view`;
- `form_start`;
- `form_submit`;
- `form_success`;
- `form_error`;
- `phone_click`, se houver telefone;
- `area_card_click` na Home;
- `faq_open` como diagnóstico secundário;
- `scroll_50` e `scroll_90` apenas para análise interna;
- visualização separada por rota.

Parâmetros úteis:

- página;
- seção;
- texto do CTA;
- origem/UTM;
- tipo de dispositivo.

Conversões primárias:

- envio concluído do formulário em Concursos, Dívida ativa e Direito empresarial;
- clique no WhatsApp nessas páginas.

Conversão secundária:

- WhatsApp na Home;
- envio concluído do formulário na Home;
- clique no telefone, se existir;
- navegação da Home para uma área.

---

## 16. Conteúdo ainda necessário

### Bloqueia publicação

1. nome profissional completo;
2. número da OAB;
3. decisão sobre “especialista”;
4. WhatsApp, e-mail institucional e e-mail destinatário do formulário;
5. política de privacidade e texto de ciência/consentimento do formulário validados;
6. domínio e estratégia de publicação.

### Bloqueia fidelidade visual

7. recebimento e inventário das fotografias existentes em alta resolução;
8. recebimento do logotipo e dos arquivos da identidade existentes;
9. confirmação ou ajuste da paleta a partir da identidade real;
10. capas de livros e materiais acadêmicos;
11. currículo completo.

### Bloqueia configuração de campanha

12. acessos a GA4, Google Ads e Meta;
13. identificadores das contas;
14. definição de consentimento/cookies;
15. número de WhatsApp e parâmetros das mensagens;
16. domínio final e URLs canônicas;
17. credenciais do serviço transacional que enviará os formulários.

---

## 17. Ordem de implementação

### Fundação global

1. tokens de cor, tipografia e espaçamento;
2. container e grid;
3. botões, links, cards e ícones;
4. headers institucional e empresarial;
5. drawer mobile;
6. footer;
7. WhatsApp persistente;
8. formulário de contato;
9. FAQ e componente de processo.

### Páginas

1. Dívida ativa — destrava a campanha de maior verba no Google.
2. Direito empresarial — fecha a experiência empresarial.
3. Home — apresenta a marca e distribui o tráfego.
4. Concursos — substitui a landing page atual.
5. Política de privacidade — fecha conformidade e mensuração.

### Validação final

1. copy e regras de publicidade;
2. informações profissionais;
3. mobile;
4. acessibilidade;
5. performance;
6. mensagens do WhatsApp;
7. formulário, proteção antispam e entrega por e-mail;
8. eventos e tags;
9. SEO;
10. domínio, redirecionamentos e publicação.

---

## 18. Critério de pronto

Uma página só estará pronta para publicação quando:

- todas as informações factuais estiverem confirmadas;
- não houver marcadores **[VALIDAR]** visíveis ao público;
- nome e OAB estiverem corretamente presentes;
- os links e CTAs funcionarem;
- a mensagem do WhatsApp corresponder à página;
- o formulário validar, enviar e confirmar sem expor dados no analytics;
- o e-mail do formulário chegar ao destinatário correto;
- o conteúdo não prometer resultado nem usar números vedados pelo plano;
- o layout funcionar no celular e no desktop;
- contraste, foco e navegação por teclado estiverem corretos;
- analytics e conversões estiverem testados;
- a página atingir a meta de desempenho definida;
- a cliente aprovar o conteúdo e a apresentação profissional.

---

## 19. Decisão consolidada

O site utilizará uma identidade única, mas três modos de comunicação:

1. **Institucional:** Ceres como marca, trajetória e autoridade.
2. **Concursos:** identificação, edital, prazo e caminhos possíveis.
3. **Empresarial:** contexto objetivo, método, documentação e estrutura.

O visitante não deve precisar interpretar qual parte do site é para ele. A primeira tela, o menu, os fundos, a fotografia, a copy e o CTA de cada página devem responder essa pergunta imediatamente.

---

## 20. Direção de arte e movimento — especificação de produção

Esta seção complementa e, quando houver divergência, **substitui a direção visual genérica das seções anteriores**. Ela define como cada bloco deve ser construído visualmente durante a implementação.

### 20.1 Conceito visual definitivo

**Nome interno:** `Caderno de tese / arquivo vivo`.

A identidade parte de três características reais da Ceres:

1. advogada;
2. professora e pesquisadora;
3. pessoa que viveu o universo dos concursos antes de atuar nele.

O site não parecerá um escritório genérico azul-marinho e dourado. A linguagem visual combinará:

- papel e margens editoriais;
- marcações, linhas e referências de documentos;
- fotografia humana e autoral;
- organização geométrica nas páginas empresariais;
- bordas serrilhadas ou recortadas em transições específicas;
- profundidade por camadas de papel, não por sombras pesadas;
- cor vinho na frente institucional/concursos;
- verde mineral na frente empresarial;
- grafite como base comum.

### 20.2 Paleta visual v1.2

| Token | Cor | Função |
| --- | --- | --- |
| `graphite-950` | `#25222A` | Fundo escuro global, footer e texto principal |
| `wine-800` | `#652F42` | Marca pessoal, Home e Concursos |
| `wine-600` | `#8B4A5E` | Destaques, hover e etiquetas |
| `forest-850` | `#2C423B` | Dívida ativa e Direito empresarial |
| `forest-650` | `#46675D` | Destaques e ícones empresariais |
| `paper-50` | `#F6F1E8` | Fundo base inspirado em papel |
| `paper-100` | `#EFE8DD` | Camadas e cards claros |
| `rose-sand-100` | `#E9DAD6` | História, acolhimento e prazo em Concursos |
| `sage-100` | `#DEE5DF` | Conteúdo empresarial e cards técnicos |
| `white` | `#FFFFFF` | Superfícies de leitura |
| `brass-500` | `#A97B49` | Linhas, marcadores e pequenos detalhes |
| `slate-600` | `#68706E` | Texto secundário |
| `whatsapp-700` | `#117A43` | Conversão persistente |

### 20.3 Tipografia visual v1.2

- **Literata:** títulos, citações, números editoriais e frases de posicionamento.
- **DM Sans:** corpo, menus, botões, FAQs e interface.
- Numerais de seção podem usar DM Sans em peso 500, com tracking aumentado.
- Não usar itálico em blocos longos; reservar para pequenas citações.

### 20.4 Texturas e transições

#### Textura de papel

- ruído monocromático muito leve, opacidade entre 2% e 4%; 
- aplicado somente em `paper-50`, `paper-100` e `rose-sand-100`;
- preferir uma textura WebP pequena e repetível ou ruído em CSS;
- nunca comprometer a legibilidade.

#### Borda serrilhada

- produzida com `clip-path`, máscara CSS ou pseudo-elemento repetido;
- altura entre 16 e 24 px;
- usada no máximo duas vezes em cada página;
- representa mudança de capítulo, não decoração aleatória;
- Home e Concursos: recorte mais orgânico;
- Empresarial: recorte reto e modular, sem aspecto artesanal.

#### Linha de margem

- linha vertical fina em `brass-500` ou na cor da frente;
- aparece em títulos, timelines e caixas de citação;
- pode animar de 0% a 100% quando a seção entra em viewport.

#### Camadas de documento

- retângulos levemente deslocados, com raio de 8 a 12 px;
- borda de 1 px e sombra mínima;
- usados para edital, CDA, contrato e currículo;
- nenhuma camada deve simular documento oficial real ou exibir dados inventados.

### 20.5 Regras para fotografia real

Fotos da Ceres têm prioridade absoluta sobre imagens geradas quando ela aparece.

#### Tratamentos permitidos

- recorte vertical 4:5;
- máscara em degradê para fundir a foto ao background;
- conversão parcial para duotone vinho ou verde mineral;
- redução de saturação entre 15% e 30%;
- sobreposição de grão leve;
- uso esmaecido em 8% a 18% de opacidade como background;
- recorte do corpo ou busto em PNG somente a partir de fotografia aprovada.

#### Tratamentos proibidos

- gerar um rosto parecido com Ceres sem usar fotografia de referência;
- alterar idade, traços, cor de pele ou corpo;
- inventar ambientes profissionais como se fossem reais;
- criar falsa foto em tribunal, audiência ou sala de aula;
- inserir documento legível ou processo fictício em suas mãos.

### 20.6 Regras para imagens geradas

Imagem gerada será usada apenas quando:

- for abstrata ou conceitual;
- não representar um fato profissional;
- não puder ser resolvida com CSS, ícones ou fotografia real;
- tiver função clara na narrativa.

Todos os prompts devem incluir:

`no readable text, no logos, no watermark, no gavel, no scales of justice, no courtroom cliché, no fake legal document, no identifiable client`.

### 20.7 Sistema global de animação

#### Entrada da página

| Momento | Elemento | Animação |
| ---: | --- | --- |
| 0 ms | Fundo do hero | já presente; nunca piscar |
| 80 ms | Header | fade + deslocamento de 8 px para baixo |
| 160 ms | Eyebrow | fade + deslocamento de 12 px para cima |
| 260 ms | H1 | fade + deslocamento de 20 px; duração 560 ms |
| 380 ms | Texto de apoio | fade; duração 460 ms |
| 480 ms | CTAs | fade + escala 0,98 → 1 |
| 320 ms | Fotografia/visual | clip reveal horizontal ou vertical; duração 760 ms |

#### Entrada de seções

- ativar quando aproximadamente 18% da seção estiver visível;
- títulos: `translateY(20px)` + fade, 520 ms;
- parágrafos: fade, 420 ms, atraso de 80 ms;
- cards: stagger de 70 ms, limitado a seis elementos;
- listas longas: animar o conjunto, não cada item;
- elementos decorativos entram depois do conteúdo, nunca antes.

#### Hover e foco

- cards clicáveis: `translateY(-4px)`, borda na cor de contexto e sombra suave;
- ícone: deslocamento de 2 px ou rotação máxima de 3 graus;
- links com seta: seta desloca 4 px;
- botões: mudança de cor e deslocamento máximo de 1 px;
- foco por teclado sempre visível e mais importante que o hover.

#### FAQ

- abertura entre 200 e 260 ms;
- chevron gira 180 graus;
- nenhum salto abrupto de layout;
- com `prefers-reduced-motion`, abrir sem animação de altura.

#### Reduced motion

- todo conteúdo começa legível e visível no HTML;
- animações são aprimoramento progressivo;
- com `prefers-reduced-motion: reduce`, remover deslocamento, escala, stagger e clip reveal;
- manter apenas mudanças instantâneas de estado.

### 20.8 Ícones e ilustrações

- ícones Lucide, traço entre 1,5 e 1,75 px;
- cor vinho em Concursos; verde mineral em Empresarial;
- ícone dentro de selo quadrado de 40 ou 48 px, nunca em círculo genérico repetido;
- ilustrações de processo devem ser construídas com CSS e ícones, não SVG autoral gerado;
- evitar ícones de martelo e balança, salvo quando o significado jurídico exigir e não houver alternativa mais específica.

---

## 21. Plano visual por seção — Home

### HOME-01 — Header e entrada

**Background:** `paper-50`, com textura de papel em 2%.  
**Apoio visual:** linha inferior vinho de 1 px que aparece após a rolagem.  
**Logo/nome:** tipográfico em grafite; OAB em DM Sans 11–12 px.  
**Animação:** header entra em 80 ms; ao fixar, reduz de 82 px para 70 px.  
**Mobile:** fundo sólido, sem transparência forte; drawer em `graphite-950` com links claros.

### HOME-02 — Hero

**Background:** base `paper-50`; mancha orgânica vinho muito suave atrás da foto; linha de margem vertical em brass.  
**Fotografia:** retrato real vertical da Ceres, de pé ou sentada, com livro/caderno fechado ou mãos visíveis; olhar para a câmera; fundo neutro.  
**Tratamento:** recorte 4:5, saturação -20%, borda inferior parcialmente serrilhada; sombra semelhante a papel elevado.  
**Elemento de apoio:** três pequenas etiquetas editoriais: `Advocacia`, `Docência`, `Pesquisa`.  
**Animação:** H1 em duas etapas; foto revelada por máscara da direita para a esquerda; etiquetas entram com stagger de 80 ms.  
**Antes/depois:** uma linha vinho cresce sob uma expressão-chave depois que o H1 aparece.  
**Mobile:** foto abaixo da copy, sem recorte serrilhado lateral; etiquetas em scroll horizontal curto.

**Ativo:** `PHOTO-HOME-HERO-01` — fotografia real obrigatória.  
**Prompt de edição, somente com foto aprovada:**  
`Using the provided real portrait of Ceres Rabelo, create an editorial cutout for a premium Brazilian legal website. Preserve her face, skin tone, age, clothing and identity exactly. Place her against a warm parchment studio background with a subtle deep-wine gradient shadow and soft natural window light. Keep generous negative space on the left for website copy. Sophisticated academic portrait, understated, realistic, no invented props, no readable text, no logos, no watermark, no gavel, no scales of justice. Vertical 4:5.`

### HOME-03 — Faixa de credenciais

**Background:** branco, sobreposto parcialmente ao hero como uma folha horizontal.  
**Apoio visual:** divisórias verticais finas; pequenos números ou ícones lineares.  
**Cards:** não usar cards fechados; credenciais ficam em uma faixa editorial contínua.  
**Animação:** faixa sobe 16 px sobre o hero; itens aparecem em stagger de 50 ms.  
**Interação:** nenhuma; credenciais não parecem botões.  
**Mobile:** grid 2x3, sem sobreposição com o hero.

### HOME-04 — Quem é Ceres

**Background:** branco, com uma grande palavra esmaecida `TRAJETÓRIA` em vinho a 3% de opacidade.  
**Fotografia:** Ceres em ambiente de estudo ou docência, real e documental.  
**Elemento:** bloco de citação com borda de margem e assinatura tipográfica, sem simular manuscrito se não houver assinatura real.  
**Animação:** foto entra com clip vertical; linha de margem desenha de cima para baixo; texto aparece depois.  
**Transição de saída:** borda serrilhada orgânica branca → `sage-100` da seção seguinte.  
**Mobile:** palavra esmaecida removida para evitar ruído; foto em largura total.

**Ativo:** `PHOTO-HOME-STORY-02` — fotografia real preferencial.  
**Prompt alternativo de background abstrato:**  
`Editorial academic desk seen from above, warm parchment paper, a closed legal book, a neutral notebook with completely blank pages, a brass pencil, soft side light, subtle deep-wine accents, refined Brazilian editorial photography, generous empty space, no readable text, no logo, no watermark, no gavel, no scales of justice, no identifiable person, landscape 16:9.`

### HOME-05 — Áreas de atuação

**Background:** `sage-100`, com grid técnico quase invisível em `forest-650` a 4%.  
**Cards:** três folhas sobrepostas; cada card tem número `01`, `02`, `03`, ícone, título, descrição e link.  
**Variação:** card Concursos recebe filete vinho; cards empresariais recebem filete verde.  
**Animação:** cards sobem um a um; ao hover, a folha posterior desloca 3 px, dando efeito de arquivo.  
**Interação:** toda a área do card é clicável, com foco visível.  
**Mobile:** cards empilhados; sem inclinação; camada posterior simplificada.

### HOME-06 — Formação e trajetória

**Background:** `rose-sand-100` com textura de papel em 3%.  
**Apoio visual:** timeline vertical com linha brass e marcadores quadrados.  
**Imagens:** capas reais de livros e logos de instituições somente se houver autorização e arquivos adequados.  
**Animação:** linha cresce conforme a seção entra; marcos aparecem sem contador animado.  
**Desktop:** timeline alternada, mas texto sempre alinhado para leitura.  
**Mobile:** timeline unilateral à esquerda.

**Prompt para textura de apoio:**  
`Seamless warm rose-beige handmade paper texture, extremely subtle fibers, premium editorial background, flat even lighting, low contrast, no stains, no tears, no text, no watermark, square tile, suitable for web background.`

### HOME-07 — Como funciona o atendimento

**Background:** `graphite-950`, com faixas de papel translúcidas e linhas finas vinho.  
**Apoio visual:** três etapas ligadas por uma linha horizontal; números grandes em Literata.  
**Cards:** superfícies transparentes com borda branca a 12%; não usar sombra.  
**Animação:** a linha conecta as etapas da esquerda para a direita; cards entram depois da conexão.  
**Hover:** destaque da borda e do número; nenhum flip card.  
**Mobile:** linha vertical; animação de cima para baixo.

### HOME-08 — Perguntas institucionais

**Background:** `paper-50`; no canto direito, recorte esmaecido de páginas de livro sem texto legível.  
**FAQ:** cada item como uma linha editorial, sem card pesado.  
**Apoio visual:** ícone pequeno `MessageCircleQuestion`; numeração `01–05`.  
**Animação:** apenas o título da seção; FAQ reage somente ao clique.  
**Mobile:** remover background de páginas; manter textura simples.

**Prompt de background:**  
`Abstract close-up of layered blank book pages forming soft curved shadows, warm parchment and graphite palette, minimal editorial composition, no readable text, no letters, no logo, no watermark, wide landscape 21:9, subtle enough for use behind website FAQ content.`

### HOME-09 — CTA final

**Background:** degradê `wine-800` → `graphite-950`, com grão leve.  
**Layout:** formulário em card `paper-50` à esquerda; três caminhos representados por abas de arquivo à direita.  
**Formulário:** borda grafite fina, labels em DM Sans, inputs brancos e botão vinho; área selecionada nas abas sincroniza com o campo `Área`.  
**Animação:** card do formulário entra como um único bloco; abas entram sobrepostas; a escolhida no hover avança 6 px. Não animar campos individualmente.  
**CTA alternativo:** WhatsApp secundário abaixo das abas.  
**Mobile:** formulário primeiro; abas viram seleção e três botões empilhados; WhatsApp aparece depois do botão de envio; sem sobreposição.

### HOME-10 — Footer

**Background:** `graphite-950`; borda superior serrilhada de 18 px vinda do CTA.  
**Apoio visual:** monograma CR em 3% de opacidade, somente se aprovado.  
**Animação:** nenhuma animação de entrada; footer deve ser estável.  
**Mobile:** dados profissionais antes da navegação.

---

## 22. Plano visual por seção — Concursos públicos

### CON-01 — Header e entrada

**Background:** `paper-50`; filete vinho inferior.  
**Apoio visual:** pequeno identificador `CONCURSOS PÚBLICOS` ao lado da marca no desktop.  
**Animação:** mesma entrada global; CTA do header aparece por último.  
**Ao rolar:** o menu passa a mostrar o CTA `Organizar meu caso`.  
**Mobile:** barra fixa inferior só aparece depois que o hero sai da viewport.

### CON-02 — Hero situacional

**Background:** `paper-50` com faixa vinho diagonal ou recorte vertical atrás da fotografia; textura em 2%.  
**Fotografia:** retrato real da Ceres com um edital impresso sem conteúdo legível, um caderno ou livro fechado; expressão atenta, não dramática.  
**Elemento de apoio:** três fragmentos de “documento” em branco com etiquetas `regra`, `ato`, `prazo`.  
**Efeito esmaecido:** uma segunda versão da foto pode aparecer como silhueta vinho a 7% atrás do recorte principal.  
**Animação:** os três fragmentos entram antes da foto, como folhas organizadas; foto revela; H1 entra em seguida; linha destaca `edital e documentos`.  
**CTA:** botão principal sólido vinho; link secundário com seta.  
**Mobile:** remover a silhueta duplicada; manter apenas fotografia e uma etiqueta `regra · ato · prazo`.

**Ativo:** `PHOTO-CON-HERO-01` — fotografia real.  
**Prompt de edição com referência:**  
`Using the provided approved portrait of Ceres Rabelo, preserve her identity exactly and create a refined editorial portrait for a Brazilian public-exam law page. She may hold a neutral closed notebook or blank paper folder, with no readable content. Warm parchment background, subtle deep-wine geometric panel, soft academic atmosphere, natural expression, realistic photography, negative space on the left, no invented courtroom, no readable text, no logos, no watermark, no gavel, no scales of justice. Vertical 4:5.`

### CON-03 — Situações que podem exigir análise

**Background:** branco.  
**Apoio visual:** grid de fichas semelhantes a abas de arquivo; cada situação tem número, ícone e uma palavra-chave.  
**Cards:** borda cinza; canto superior direito com pequena “dobra” em vinho feita por CSS.  
**Animação:** cards entram em pares; stagger de 60 ms; não animar oito cards individualmente no mobile.  
**Hover:** a dobra muda de `rose-sand-100` para `wine-600`; card sobe 3 px.  
**Depois da lista:** microbloco em papel rosa com a frase `A situação precisa ser comparada ao edital e aos documentos.`  
**Mobile:** accordion por categoria somente se os textos ficarem longos; caso contrário, cards empilhados.

### CON-04 — O papel do edital

**Background:** `graphite-950`; faixa vertical vinho; textura muito discreta de linhas horizontais.  
**Apoio visual:** composição de três camadas de documento abstrato, numeradas `01 regra`, `02 fato`, `03 prazo`.  
**Ilustração:** criada com CSS e ícones; nenhum edital real ou texto jurídico inventado.  
**Animação:** as camadas entram desalinhadas e se organizam; a linha de margem cresce; título aparece depois.  
**Interação:** ao passar o mouse nas camadas, a correspondente ganha contraste e revela uma frase curta.  
**Mobile:** camadas viram sequência vertical, sem sobreposição.

**Prompt opcional de textura:**  
`Abstract layered blank official-looking paper sheets, no seals and no readable text, graphite background with restrained deep-wine edge markings, premium editorial lighting, precise and sober, suitable as a subtle legal website background, no logo, no watermark, no gavel, no scales of justice, landscape 16:9.`

### CON-05 — Caminhos possíveis

**Background:** `paper-100` com recorte serrilhado na entrada vindo da seção escura.  
**Cards:** três cartões tipo marcador de capítulo: administrativo, mandado de segurança, outras medidas.  
**Apoio visual:** uma linha ramificada sai de `análise` e alcança os três caminhos, deixando claro que não existe solução automática.  
**Animação:** primeiro aparece `análise`; depois a linha se divide; por último entram os cards.  
**Hover:** o caminho selecionado ganha filete vinho; os outros permanecem legíveis, sem reduzir opacidade excessivamente.  
**Mobile:** linha ramificada vira fluxo vertical; nenhuma animação horizontal.

### CON-06 — Prazo

**Background:** `rose-sand-100`; sombra longa de uma borda de papel, criada em CSS.  
**Apoio visual:** calendário abstrato sem datas específicas e uma linha do tempo com três marcadores: `publicação`, `ciência`, `contato`.  
**Animação:** marcadores acendem em sequência; o último não deve piscar nem pulsar.  
**CTA:** outline vinho, acompanhado do ícone `CalendarClock`.  
**Mobile:** linha do tempo horizontal com scroll não é permitida; usar vertical.

### CON-07 — Quem analisa

**Background:** branco.  
**Fotografia:** Ceres em ambiente acadêmico real, próxima de livros ou quadro, sem pose encenada de tribunal.  
**Tratamento:** foto em preto e branco aquecido; ao lado, pequeno bloco vinho com a frase factual `Foi concurseira. Foi aprovada. É servidora.`  
**Apoio visual:** credenciais em lista editorial, não em selos.  
**Animação:** foto revela verticalmente; frase entra em três linhas com atraso curto; credenciais aparecem como conjunto.  
**Mobile:** frase abaixo da foto; não sobrepor texto no rosto.

**Ativo:** `PHOTO-CON-STORY-02` — fotografia real obrigatória.  
**Prompt de edição com referência:**  
`Edit the provided real photo of Ceres Rabelo into a warm monochrome editorial portrait for an academic legal website. Preserve identity, face, age, skin tone and clothing exactly. Keep books or teaching environment only if they are present in the source. Add a subtle parchment tone and deep-wine side panel with empty space for factual credentials. No invented classroom, no students, no readable text, no logo, no watermark, realistic photography, landscape 4:3.`

### CON-08 — Como funciona a análise

**Background:** `wine-800`; texto claro; padrão de linhas de caderno a 4%.  
**Apoio visual:** três envelopes/pastas abstratas conectadas: contexto, documentos, retorno.  
**Cards:** superfícies em branco a 8%, borda a 14%.  
**Animação:** a pasta da etapa 1 abre levemente; um “papel” desliza para a etapa 2; etapa 3 recebe um check discreto. O efeito deve ser curto e ocorrer uma única vez.  
**Hover:** apenas borda e ícone; não repetir a animação completa.  
**Mobile:** três cards verticais, conectados por linha à esquerda.

### CON-09 — Documentos que ajudam

**Background:** branco.  
**Apoio visual:** checklist semelhante a índice de processo, com agrupamento por `edital`, `decisão`, `recurso` e `datas`.  
**Elemento:** miniatura abstrata de pasta com papéis em branco.  
**Animação:** checklist aparece como conjunto; checks entram apenas após o texto estar visível.  
**Interação:** botão `Copiar lista` pode ser considerado somente se houver benefício real; não entra na primeira versão sem necessidade.  
**Mobile:** itens em uma coluna; ícone sempre alinhado ao início do texto.

### CON-10 — FAQ

**Background:** `paper-50`; fragmento esmaecido de margem de edital no canto, sem texto legível.  
**FAQ:** numeração `01–07`, linha fina vinho, chevron.  
**Apoio visual:** pequeno bloco lateral `Antes de perguntar “tenho chance?”, organize estes quatro itens` com edital, decisão, data e documentos.  
**Animação:** FAQ somente reage ao clique; bloco lateral entra com fade.  
**Mobile:** bloco lateral aparece antes do FAQ; remover fragmento de background.

### CON-11 — CTA final e footer

**Background:** `graphite-950` com foto real da Ceres esmaecida à direita em 10% de opacidade e gradiente forte protegendo a leitura.  
**Layout:** formulário em card claro à esquerda; copy, etiquetas e WhatsApp à direita; foto permanece atrás da coluna direita.  
**Apoio visual:** três pequenas etiquetas `edital`, `resultado`, `datas`.  
**Formulário:** inputs brancos sobre `paper-50`, foco vinho, área predefinida e botão `Enviar informações`; sem upload.  
**Animação:** formulário entra como um único bloco; etiquetas entram primeiro na coluna de apoio; título e WhatsApp depois; a foto permanece estática.  
**CTA alternativo:** `Organizar meu caso pelo WhatsApp`; WhatsApp flutuante continua verde.  
**Transição:** borda serrilhada de 18 px para o footer.  
**Mobile:** formulário primeiro e coluna de apoio depois; não usar foto esmaecida se comprometer contraste; barra persistente some quando o bloco final está visível.

---

## 23. Plano visual por seção — Dívida ativa e execução fiscal

### DIV-01 — Header empresarial

**Background:** `graphite-950`, com marca branca e CTA verde mineral claro/contornado.  
**Apoio visual:** identificador pequeno `DÍVIDA ATIVA · EMPRESAS`.  
**Animação:** header já nasce escuro; não muda de cor ao rolar; apenas reduz altura.  
**Mobile:** menu de âncoras; concursos ausente do menu principal.

### DIV-02 — Hero de alta intenção

**Background:** degradê `graphite-950` → `forest-850`; grid técnico irregular a 5%; ruído fino.  
**Fotografia:** Ceres em retrato profissional real, com pasta neutra, notebook fechado ou tablet sem conteúdo; expressão concentrada.  
**Tratamento:** duotone verde mineral sutil; borda esquerda da foto dissolve no fundo; nada de escritório genérico.  
**Apoio visual:** três status em forma de etiquetas: `dívida ativa`, `citação`, `bloqueio`.  
**Animação:** etiquetas entram em 70 ms de intervalo; H1 aparece; foto revela por máscara vertical; CTA entra por último.  
**Depois do CTA:** microtexto `O caminho depende da origem, dos documentos e da fase da cobrança.`  
**Mobile:** foto abaixo do CTA ou removida em telas muito estreitas; etiquetas quebram em duas linhas.

**Ativo:** `PHOTO-DIV-HERO-01` — fotografia real.  
**Prompt de edição com referência:**  
`Using the provided approved portrait of Ceres Rabelo, preserve her identity exactly and create a sober executive editorial portrait for a Brazilian tax-debt legal landing page. Deep graphite and mineral-green background, subtle technical grid, natural directional light, neutral closed folder or tablet only if consistent with the source, focused and calm expression, negative space on the left for copy, realistic photography, no readable text, no fake documents, no logos, no watermark, no gavel, no scales of justice. Vertical 4:5.`

### DIV-03 — Reconheça o quadro da empresa

**Background:** branco.  
**Apoio visual:** seis cards como “status de processo”, cada um com ícone e etiqueta, não como serviços vendidos.  
**Cards:** borda `sage-100`, faixa superior verde de 3 px; um pequeno ponto de status, sem cores de alerta vermelho.  
**Animação:** cards entram em dois grupos de três; no mobile, o conjunto entra uma vez.  
**Hover:** a faixa superior se expande para 6 px e o ícone desloca 2 px.  
**Após os cards:** frase em destaque `Quadros parecidos podem exigir leituras diferentes.`

### DIV-04 — O que é dívida ativa

**Background:** `paper-50`.  
**Apoio visual:** fluxo horizontal `crédito → inscrição/CDA → cobrança/execução`, construído com cards de documento e setas simples.  
**Elemento de background:** macro abstrato de folhas e carimbos geométricos sem selos, brasões ou texto.  
**Animação:** cada etapa recebe foco em sequência; a seta se desenha entre elas.  
**Interação:** ao hover ou foco, aparece uma frase curta explicativa.  
**Mobile:** fluxo vertical; setas para baixo.

**Prompt de background:**  
`Abstract premium editorial composition of layered blank administrative paper forms, geometric registration marks with no official seals, graphite and mineral-green palette, soft side lighting, precise and sober, no readable text, no numbers, no logos, no watermark, no fake government emblem, no gavel, no scales of justice, landscape 16:9.`

### DIV-05 — O que pode ser examinado

**Background:** `sage-100`; grid técnico em 4%.  
**Apoio visual:** painel de diagnóstico com oito itens agrupados em três colunas: `documento`, `tempo`, `responsabilidade/medida`.  
**Cards:** módulos retangulares conectáveis, semelhantes a peças de um dossiê.  
**Animação:** os grupos aparecem um por vez; dentro do grupo, itens não recebem stagger individual.  
**Hover:** borda verde; tooltip não deve ser necessário para compreender.  
**Mobile:** grupos viram três accordions inicialmente abertos? Não; manter todos visíveis em listas curtas.

### DIV-06 — Linha do tempo e prazo

**Background:** `rose-sand-100` usado com moderação para sinalizar atenção; filete verde mantém contexto empresarial.  
**Apoio visual:** linha do tempo real do método: origem → inscrição → citação → bloqueio/penhora → situação atual.  
**Elementos:** marcadores quadrados e campos visuais onde a equipe poderá explicar datas no atendimento; esta timeline não substitui o formulário de contato da seção final.  
**Animação:** linha cresce até o marcador “situação atual”; marcador final recebe contorno, sem pulsar.  
**Mobile:** timeline vertical; texto à direita da linha.

### DIV-07 — Quem conduz a análise

**Background:** branco.  
**Fotografia:** retrato real mais sóbrio, preferencialmente em mesa limpa ou biblioteca; nenhuma imagem de concurso.  
**Tratamento:** cor natural com leve tonalização verde; crop horizontal.  
**Apoio visual:** credenciais em coluna e pequeno selo textual `Análise baseada em fatos, documentos e fase processual` — validar como frase informativa.  
**Animação:** foto entra em fade lateral; credenciais aparecem em conjunto; selo entra depois.  
**Mobile:** selo vira parágrafo, não sobreposição.

**Ativo:** `PHOTO-DIV-AUTHORITY-02` — fotografia real, podendo ser a mesma sessão fotográfica do hero com enquadramento diferente.

### DIV-08 — Como funciona

**Background:** `forest-850`; texto branco.  
**Apoio visual:** três pastas numeradas conectadas por linha; a última contém um mapa de caminhos abstrato.  
**Animação:** pasta 1 entra; uma linha alcança pasta 2; linhas de ramificação aparecem na pasta 3.  
**Cards:** sem sombra; borda branca a 14%.  
**Mobile:** sequência vertical; animação simplificada para fade.

### DIV-09 — Documentos iniciais

**Background:** branco, com camada inferior `paper-100` deslocada 8 px.  
**Apoio visual:** checklist de dossiê; itens agrupados por `processo`, `empresa`, `pagamentos` e `atos`.  
**Elemento:** ícone `Files` dentro de selo quadrado verde.  
**Animação:** camada inferior aparece antes da folha principal, criando sensação de arquivo sendo aberto.  
**Mobile:** remover deslocamento lateral para evitar overflow.

### DIV-10 — FAQ

**Background:** `paper-50`; linha verde lateral.  
**Apoio visual:** mini-resumo fixo no desktop: `A resposta depende de cinco elementos` — origem, CDA, data, fase e documentos.  
**FAQ:** perguntas em uma coluna; respostas curtas.  
**Animação:** somente abertura; resumo entra em fade.  
**Mobile:** resumo vira um card antes das perguntas.

### DIV-11 — CTA final e footer

**Background:** `graphite-950` com fotografia real da Ceres em duotone verde a 8–12% de opacidade, posicionada à direita.  
**Layout:** formulário em card `paper-50` à esquerda; fluxo, copy e WhatsApp à direita.  
**Apoio visual:** pequeno fluxo `documentos → quadro → próximos passos`.  
**Formulário:** borda verde mineral, foco verde, área predefinida e botão `Enviar informações`; sem anexos ou dados excessivos.  
**Animação:** card do formulário entra como um bloco; fluxo desenha; título e WhatsApp aparecem depois. Foto não se move.  
**CTA alternativo:** `Entender o quadro pelo WhatsApp`.  
**Mobile:** formulário primeiro; fundo sólido se a foto não tiver recorte adequado; barra fixa do WhatsApp desaparece quando o bloco final está visível.

---

## 24. Plano visual por seção — Direito empresarial

### EMP-01 — Header empresarial

**Background:** `paper-50` no topo; após rolagem, `graphite-950`.  
**Marca:** grafite na abertura e branca no estado fixo.  
**Apoio visual:** identificador `DIREITO EMPRESARIAL`.  
**Animação:** transição de cor em 220 ms; não usar blur excessivo.  
**Mobile:** drawer em verde mineral; CTA `Mapear necessidade` no final.

### EMP-02 — Hero por momento empresarial

**Background:** composição 58/42: `paper-50` na área de copy e `forest-850` na área visual.  
**Fotografia:** Ceres sentada ou em pé ao lado de mesa limpa, com caderno, contrato sem texto ou livro; fotografia real.  
**Tratamento:** cor natural com sombras verdes; borda irregular reta/modular, não serrilhado orgânico.  
**Apoio visual:** três perguntas flutuantes muito curtas: `Sócios alinhados?`, `Contratos atualizados?`, `Processos acompanharam?`.  
**Animação:** painel verde cresce da direita; foto revela; perguntas entram; copy aparece de forma independente à esquerda.  
**CTA:** `Mapear a necessidade da empresa`; secundário `Ver momentos da empresa`.  
**Mobile:** painel verde vira faixa atrás da foto; perguntas ficam em uma lista abaixo, sem flutuação.

**Ativo:** `PHOTO-EMP-HERO-01` — fotografia real.  
**Prompt de edição com referência:**  
`Using the provided approved real portrait of Ceres Rabelo, preserve her identity, face, age, skin tone and clothing exactly. Create a refined editorial portrait for a Brazilian business-law website, with a mineral-green architectural panel, warm parchment negative space on the left, natural window light, calm executive posture, neutral closed notebook or blank folder only if consistent with the source. No invented meeting, no other people, no readable contracts, no text, no logo, no watermark, no gavel, no scales of justice. Vertical 4:5.`

### EMP-03 — Para quem é / momentos da empresa

**Background:** branco.  
**Apoio visual:** três “portas” ou painéis: `início/reorganização`, `crescimento`, `mudança ou conflito`.  
**Cards:** painel alto com número grande, ícone e pergunta de reconhecimento.  
**Elemento:** linha inferior mostra que os três momentos levam ao mesmo `mapeamento jurídico`.  
**Animação:** painéis abrem 6 px lateralmente ao entrar, como capas de pasta; texto aparece sem rotação 3D.  
**Hover:** borda verde; pergunta ganha contraste.  
**Mobile:** painéis horizontais empilhados; sem altura excessiva.

### EMP-04 — Áreas de atuação

**Background:** `sage-100` com grid modular em 4%.  
**Apoio visual:** cinco módulos de tamanhos diferentes, como um painel de organização empresarial.  
**Cards:** societário e contratos ocupam maior área; compliance, tributário e marca ocupam módulos menores. Isso expressa hierarquia visual sem prometer prioridade comercial.  
**Ícones:** `UsersRound`, `FileSignature`, `ShieldCheck`, `ChartNoAxesCombined`, `Tags`.  
**Animação:** módulos entram como peças encaixadas; duração total máxima de 700 ms.  
**Hover:** filete verde e link `Entender quando faz sentido`; nenhum modal.  
**Mobile:** todos os cards recebem mesma largura; a hierarquia passa a ser por ordem, não tamanho.

### EMP-05 — Quando cada frente faz sentido

**Background:** `paper-100`.  
**Apoio visual:** mapa de situações em formato `sinal percebido → ponto a examinar`; setas finas brass.  
**Elementos:** cinco linhas editoriais com pequenos marcadores, sem card individual.  
**Animação:** primeiro entra o sinal percebido, depois a seta, depois o ponto jurídico; stagger por linha limitado a 60 ms.  
**Interação:** no hover, a linha selecionada recebe fundo branco e deslocamento de 2 px.  
**Mobile:** cada par vira um bloco vertical; seta aponta para baixo.

**Prompt opcional de background abstrato:**  
`Minimal editorial diagram background inspired by business organization charts, thin graphite and mineral-green lines on warm parchment, sparse geometric nodes, large empty areas, elegant and understated, no arrows with labels, no readable text, no logo, no watermark, landscape 16:9.`

### EMP-06 — Estrutura antes do conflito

**Background:** `graphite-950`; linhas de rede em `forest-650` a 10%; pequeno ponto brass em interseções-chave.  
**Apoio visual:** diagrama abstrato de relações: sócios, contratos, pessoas, marca e tributos conectados à empresa.  
**Texto:** manifesto curto em Literata, com no máximo quatro linhas grandes.  
**Animação:** nós aparecem primeiro; linhas os conectam; manifesto entra por último.  
**Interação:** nenhuma; é uma pausa narrativa.  
**Mobile:** reduzir nós e linhas em 50%; manter fundo limpo.

**Prompt de textura alternativa:**  
`Abstract interconnected business system, sparse geometric nodes and fine lines, deep graphite and mineral-green palette with tiny muted brass accents, premium editorial visualization, calm and precise, no text, no icons, no logo, no watermark, no people, ultra-wide 21:9.`

### EMP-07 — Quem conduz o trabalho

**Background:** branco.  
**Fotografia:** Ceres em biblioteca, mesa de estudo ou ambiente profissional real; enquadramento horizontal.  
**Tratamento:** natural, leve grão editorial; faixa verde estreita na lateral.  
**Apoio visual:** credenciais em estrutura de ficha, com categorias `formação`, `docência`, `pesquisa`, `atuação`.  
**Animação:** foto entra em fade; categorias aparecem em duas colunas; linha vertical cresce.  
**Mobile:** categorias em lista; fotografia antes do texto.

**Ativo:** `PHOTO-EMP-AUTHORITY-02` — fotografia real.

### EMP-08 — Como começa o diagnóstico

**Background:** `forest-850`; texto branco; textura de grid em 5%.  
**Apoio visual:** quatro etapas em um canvas semelhante a mapa: contexto, necessidade, materiais, delimitação.  
**Cards:** pequenos painéis translúcidos, conectados por linha; etapa final recebe contorno brass.  
**Animação:** fluxo cresce da esquerda para a direita; no mobile, de cima para baixo.  
**Hover:** aumenta contraste, sem deslocamento grande.  
**CTA:** claro sobre verde, `Mapear a necessidade da empresa`.

### EMP-09 — Informações para o primeiro contato

**Background:** branco com folha `paper-100` atrás, deslocada 10 px para baixo.  
**Apoio visual:** checklist dividido em `empresa`, `momento`, `documentos`, `prazo`.  
**Ícone:** `ClipboardList`.  
**Animação:** folha posterior sobe e encontra a principal; itens aparecem como conjunto.  
**Interação:** manter este bloco como checklist informativo; o formulário e a alternativa de WhatsApp aparecem na seção final.  
**Mobile:** remover deslocamento lateral e manter profundidade apenas por borda.

### EMP-10 — FAQ

**Background:** `paper-50`; grande forma geométrica verde a 4% atrás do título.  
**Apoio visual:** bloco lateral `Pontual ou contínuo?` explicando em duas frases os formatos possíveis.  
**FAQ:** oito perguntas, divisórias finas.  
**Animação:** bloco lateral entra; perguntas não recebem animação individual.  
**Mobile:** bloco lateral acima do accordion; forma geométrica removida.

### EMP-11 — CTA final e footer

**Background:** degradê `forest-850` → `graphite-950`; foto da Ceres opcional, esmaecida em 8% à direita.  
**Layout:** formulário em card `paper-50` à esquerda; copy, etiquetas e WhatsApp à direita.  
**Apoio visual:** três etiquetas `momento`, `documentos`, `escopo`.  
**Formulário:** foco verde mineral, assunto em select, resumo em textarea e botão `Enviar informações`; área predefinida.  
**Animação:** formulário entra como um bloco; etiquetas entram; título e WhatsApp depois; foto estática.  
**CTA alternativo:** `Mapear a necessidade pelo WhatsApp`.  
**Mobile:** formulário primeiro; fundo sólido; barra fixa desaparece quando o bloco final está visível.

---

## 25. Plano visual por seção — Política de privacidade

Esta página usa a mesma identidade, mas reduz movimento e ornamentação para preservar leitura e confiança.

### PRIV-01 — Header simplificado

**Background:** branco.  
**Conteúdo:** marca, link `Voltar ao site`, sem CTA comercial.  
**Apoio visual:** filete grafite inferior.  
**Animação:** fade simples de 160 ms; sem redução complexa ao rolar.  
**Mobile:** marca + botão voltar; sem drawer se não houver necessidade.

### PRIV-02 — Hero informativo

**Background:** `paper-50` com textura em 2%.  
**Apoio visual:** ícone `ShieldCheck` em selo quadrado; data de atualização visível.  
**Elemento:** linhas de documento abstratas, criadas em CSS, a 4% de opacidade.  
**Animação:** título e data em fade; sem clip reveal.  
**Mobile:** ícone acima do título.

### PRIV-03 — Sumário e navegação

**Background:** branco.  
**Desktop:** coluna lateral fixa com âncoras; indicador de seção ativa em verde mineral.  
**Mobile:** botão `Nesta página` abre accordion; não usar drawer sobreposto.  
**Animação:** indicador desliza entre itens em 160 ms; respeitar reduced motion.

### PRIV-04 — Corpo da política

**Background:** branco.  
**Apoio visual:** cada H2 recebe número, linha de margem e ícone apenas quando útil.  
**Blocos de destaque:** `paper-100` para informações práticas; `sage-100` para direitos do titular; `rose-sand-100` somente para alertas importantes.  
**Animação:** nenhuma animação por parágrafo; títulos podem entrar em fade leve apenas uma vez.  
**Links:** sempre sublinhados; foco claramente visível.  
**Mobile:** largura integral, sem colunas.

### PRIV-05 — Cookies e tecnologias

**Background:** `sage-100`.  
**Apoio visual:** tabela simples dividida em `tecnologia`, `finalidade`, `condição`; sem logotipos grandes de plataformas.  
**Interação:** botão `Rever preferências de cookies` quando funcional.  
**Animação:** nenhuma; controles precisam responder imediatamente.  
**Mobile:** tabela vira lista de blocos sem rolagem horizontal.

### PRIV-06 — Direitos e contato

**Background:** `graphite-950`; texto branco.  
**Apoio visual:** lista curta de direitos com checkboxes meramente visuais — não interativos — ou ícones `Check`.  
**CTA funcional:** e-mail ou canal de privacidade, nunca WhatsApp genérico sem validação.  
**Animação:** bloco entra em fade; link recebe underline animado no hover.  
**Mobile:** itens empilhados.

### PRIV-07 — Footer

**Background:** `graphite-950`, separado por borda branca a 10%.  
**Conteúdo:** identificação profissional, Home, política e copyright.  
**Animação:** nenhuma.

---

## 26. Plano de produção de imagens e assets

### 26.1 Princípio

Cada seção terá apoio visual, mas nem toda seção terá uma fotografia ou imagem rasterizada. A ordem de preferência é:

1. tipografia e espaço;
2. cor e composição do background;
3. CSS, linhas, grids e camadas;
4. ícones;
5. fotografia real;
6. imagem gerada abstrata, apenas quando acrescentar significado.

Isso preserva performance, sobriedade e diferenciação.

### 26.2 Ensaio fotográfico necessário

Um único ensaio bem planejado pode produzir os recortes para todas as páginas.

#### Direção geral

- luz natural lateral ou luz de estúdio suave;
- fundo cinza quente, papel, biblioteca real ou parede neutra;
- sem cenários de tribunal;
- sem poses com martelo, balança ou toga;
- expressão segura, atenta e acessível;
- manter espaço negativo dos dois lados em parte das fotos;
- fotografar cada pose em vertical e horizontal;
- entregar arquivos em alta resolução e sem filtros destrutivos.

#### Figurino 1 — Institucional/Concursos

- tons vinho, creme, grafite ou azul muito fechado;
- textura discreta;
- sem estampa de alto contraste;
- acessórios mínimos.

#### Figurino 2 — Empresarial

- grafite, verde escuro, areia ou preto suave;
- composição mais estruturada;
- evitar blazer azul-marinho genérico se a identidade seguir a nova paleta.

#### Shot list

| ID | Enquadramento | Ação/prop | Uso |
| --- | --- | --- | --- |
| `PHOTO-01` | Vertical 4:5, busto | Mãos livres, olhar para câmera | Hero Home |
| `PHOTO-02` | Horizontal 3:2 | Sentada com livro ou caderno real | Quem é Ceres |
| `PHOTO-03` | Vertical 4:5 | Pasta neutra ou folhas em branco | Hero Concursos |
| `PHOTO-04` | Horizontal 4:3 | Ambiente acadêmico real | História em Concursos |
| `PHOTO-05` | Vertical 4:5 | Pasta ou tablet neutro | Hero Dívida ativa |
| `PHOTO-06` | Horizontal 3:2 | Mesa limpa, análise de documentos não legíveis | Autoridade empresarial |
| `PHOTO-07` | Vertical 4:5 | Postura executiva, caderno fechado | Hero Empresarial |
| `PHOTO-08` | Horizontal 3:2 | Biblioteca/escritório real | Quem conduz o trabalho |
| `PHOTO-09` | Vertical com espaço lateral | Expressão neutra, sem prop | CTAs finais esmaecidos |

### 26.3 Assets gerados ou abstratos

| ID | Uso | Tipo | Prompt localizado |
| --- | --- | --- | --- |
| `GEN-PAPER-01` | Textura repetível de papel | WebP tile | HOME-06 |
| `GEN-DESK-01` | Apoio de trajetória acadêmica | Fotografia abstrata | HOME-04 |
| `GEN-PAGES-01` | Fundo do FAQ institucional | Fotografia abstrata | HOME-08 |
| `GEN-EDITAL-01` | Fundo escuro de edital abstrato | Composição editorial | CON-04 |
| `GEN-CDA-01` | Fundo educativo de dívida ativa | Composição editorial | DIV-04 |
| `GEN-BUSINESS-MAP-01` | Fundo de situações empresariais | Diagrama abstrato | EMP-05 |
| `GEN-NETWORK-01` | Manifesto empresarial | Rede abstrata | EMP-06 |

### 26.4 Assets que devem ser construídos em CSS

Não gerar imagens para:

- bordas serrilhadas;
- grids técnicos;
- linhas de margem;
- dobras de papel;
- pilhas de cards;
- timelines;
- fluxos e setas;
- tags de status;
- fundos com degradê;
- ruído simples;
- underlines animados;
- indicadores de FAQ;
- monograma textual.

Esses elementos ficam mais leves, responsivos e consistentes quando são construídos diretamente no site.

### 26.5 Especificações técnicas de imagens

| Uso | Proporção | Largura recomendada | Formato |
| --- | --- | ---: | --- |
| Hero vertical | 4:5 | 1.200–1.600 px | AVIF/WebP |
| Foto horizontal | 3:2 ou 4:3 | 1.600–2.000 px | AVIF/WebP |
| Background amplo | 16:9 ou 21:9 | 1.920–2.400 px | WebP |
| Textura repetível | 1:1 | 512–1.024 px | WebP |
| Social preview | 1200:630 | 1.200x630 px | PNG/WebP |

Metas:

- hero otimizado preferencialmente abaixo de 280 KB;
- background abstrato abaixo de 180 KB;
- textura abaixo de 80 KB;
- fornecer `srcset` para mobile e desktop;
- não carregar backgrounds abaixo da dobra antes de se aproximarem da viewport.

### 26.6 Prompt para social preview

Usar somente quando a identidade, fotografia e headline estiverem aprovadas.

`Create a complete 1200x630 social preview card for “Ceres Rabelo Advocacia”. Use the provided approved real portrait without changing identity, age, skin tone or facial features. Visual identity: warm parchment, deep wine, mineral green, graphite and muted brass; editorial academic composition inspired by book margins and organized legal documents. Include the exact readable text “Ceres Rabelo Advocacia” and the approved short positioning line supplied with the request. Strong hierarchy, high contrast, ample safe margins, premium and understated. No gavel, no scales of justice, no courtroom, no fake legal document, no invented credentials, no additional words, no watermark.`

---

## 27. Componentes de movimento para implementação

### 27.1 Primitivos

| Componente | Função | Uso |
| --- | --- | --- |
| `Reveal` | Fade + deslocamento curto | Títulos e blocos de texto |
| `StaggerGrid` | Entrada sequencial limitada | Cards de situações e áreas |
| `LineDraw` | Crescimento de linha | Timeline, processo e margem |
| `ClipImage` | Revelação por máscara | Fotografias reais |
| `DocumentStack` | Camadas de papel | Áreas, edital, CDA e documentos |
| `FlowMap` | Nós e conexões | Processo e estrutura empresarial |
| `StickyWhatsApp` | CTA persistente contextual | Páginas de serviço |
| `Accordion` | FAQ acessível | Todas as páginas aplicáveis |

### 27.2 Regras técnicas

- preferir CSS para fade, transform, clip e hover;
- usar JavaScript apenas para detecção de viewport, estado e acessibilidade;
- não instalar biblioteca de animação pesada sem necessidade;
- não animar propriedades que provoquem reflow frequente;
- nunca atrasar a exibição do H1 esperando JavaScript;
- animação do hero deve terminar antes de aproximadamente 1,2 segundo;
- nenhum conteúdo essencial permanece invisível se o script falhar;
- observar reduced motion.

### 27.3 Ordem de camadas

1. cor base;
2. textura ou grid;
3. forma abstrata;
4. fotografia;
5. gradiente de proteção da leitura;
6. conteúdo;
7. elementos interativos;

Essa ordem evita texto sobre imagem sem contraste e facilita a adaptação mobile.

---

## 28. Checklist visual por página

### Home

- [ ] retrato principal real;
- [ ] fotografia de trajetória;
- [ ] textura de papel;
- [ ] cards em camadas;
- [ ] timeline acadêmica;
- [ ] processo sobre grafite;
- [ ] FAQ com páginas abstratas;
- [ ] escolha final das áreas;
- [ ] formulário com seleção de área e WhatsApp alternativo;
- [ ] versão mobile sem sobreposições excessivas.

### Concursos

- [ ] retrato com pasta/caderno neutro;
- [ ] cards de situações;
- [ ] composição regra–ato–prazo;
- [ ] fluxo de caminhos possíveis;
- [ ] timeline de prazo;
- [ ] foto acadêmica real;
- [ ] processo em vinho;
- [ ] checklist de documentos;
- [ ] FAQ;
- [ ] formulário contextual e WhatsApp alternativo no CTA final.

### Dívida ativa

- [ ] retrato empresarial real;
- [ ] etiquetas dívida–citação–bloqueio;
- [ ] cards de quadro da empresa;
- [ ] fluxo crédito–CDA–execução;
- [ ] painel do que será examinado;
- [ ] linha do tempo da cobrança;
- [ ] processo em verde mineral;
- [ ] dossiê de documentos;
- [ ] FAQ;
- [ ] formulário contextual e WhatsApp alternativo no CTA final.

### Direito empresarial

- [ ] retrato empresarial real;
- [ ] painéis por momento da empresa;
- [ ] painel modular de áreas;
- [ ] mapa sinal–ponto jurídico;
- [ ] rede de relações da empresa;
- [ ] fotografia de autoridade;
- [ ] fluxo do diagnóstico;
- [ ] checklist inicial;
- [ ] FAQ;
- [ ] formulário contextual e WhatsApp alternativo no CTA final.

### Privacidade

- [ ] header simplificado;
- [ ] hero funcional;
- [ ] sumário responsivo;
- [ ] destaques por tipo de informação;
- [ ] tabela/lista de tecnologias;
- [ ] canal de direitos do titular;
- [ ] controles de consentimento funcionais.

---

## 29. Critérios de aprovação visual

Cada seção deverá responder “sim” às seguintes perguntas:

1. O apoio visual explica ou reforça a função da seção?
2. O background preserva contraste e leitura?
3. A imagem é real ou claramente abstrata, sem simular fato profissional?
4. A animação orienta o olhar sem atrasar a compreensão?
5. O mobile funciona sem depender de sobreposição?
6. A seção continua compreensível com animações desativadas?
7. A página mantém coerência com sua frente — concursos ou empresarial?
8. O recurso visual evita clichês da advocacia?
9. O asset foi otimizado para performance?
10. O elemento pode ser implementado sem criar risco de interpretação ou promessa indevida?

Com esta versão, o blueprint deixa de ser apenas uma especificação de conteúdo e passa a funcionar também como direção de arte, briefing fotográfico, plano de assets e mapa de movimento para implementação.

---

## 30. Arquitetura técnica e publicação

### 30.1 Decisão recomendada

| Camada | Tecnologia |
| --- | --- |
| Linguagem | TypeScript |
| Framework | Next.js com App Router |
| Interface | React com Server Components por padrão |
| Estilos | CSS Modules + CSS custom properties/tokens globais |
| Ícones | Lucide React |
| Animações | CSS + Intersection Observer em componentes pequenos |
| Imagens | `next/image` com assets locais otimizados |
| Fontes | `next/font` com Literata e DM Sans auto-hospedadas |
| Conteúdo | Componentes e arquivos TypeScript locais na primeira versão |
| Analytics | GA4/Google Ads/Meta após decisão de consentimento |
| Hospedagem | Vercel Pro |
| Domínio | Domínio definitivo conectado à Vercel |

### 30.2 Por que Next.js

- rotas correspondem naturalmente às cinco páginas;
- páginas podem ser pré-renderizadas para velocidade e SEO;
- componentes compartilhados evitam repetir headers, footers, FAQs e CTAs;
- Metadata API organiza titles, descriptions, sitemap, robots e social preview;
- `next/image` otimiza tamanho, formato e estabilidade das fotografias;
- `next/font` auto-hospeda as fontes e evita requisições externas ao Google;
- a Vercel cria previews automáticos antes de publicar;
- o projeto fica pronto para receber artigos ou CMS no futuro sem reconstrução completa.

### 30.3 Tipo de renderização

As páginas serão estáticas/pré-renderizadas:

- Home;
- Concursos;
- Dívida ativa;
- Direito empresarial;
- Política de privacidade.

Não há necessidade de renderização dinâmica por acesso, banco de dados ou servidor próprio na primeira versão.

Usar o deployment padrão do Next.js na Vercel, sem `output: 'export'`, para preservar otimização de imagens e flexibilidade futura. O Next.js ainda poderá gerar as rotas como conteúdo estático automaticamente.

### 30.4 Server e Client Components

#### Server Components por padrão

- conteúdo das páginas;
- seções;
- cards estáticos;
- SEO e metadata;
- imagens;
- footer;
- listas e credenciais.

#### Client Components somente onde houver interação

- drawer do menu mobile;
- accordion do FAQ;
- observador de entrada das animações;
- botão/barra persistente do WhatsApp;
- formulário, validação visual e estado de envio;
- preferências de cookies;
- eventos de analytics;
- eventual indicador de seção ativa.

Essa separação reduz o JavaScript enviado ao celular.

### 30.5 Estilos

Não usar Tailwind como base principal nesta versão.

Motivo: a identidade contém máscaras, bordas serrilhadas, grids, camadas de papel, pseudo-elementos e animações próprias. CSS Modules e tokens globais permitem implementar isso com mais clareza e menos classes extensas no markup.

Estrutura:

```text
src/styles/
├── tokens.css
├── reset.css
├── typography.css
├── motion.css
└── utilities.css
```

Cada componente visual complexo recebe seu próprio arquivo `.module.css`.

### 30.6 Animações

Preferir CSS e um componente leve baseado em `IntersectionObserver`.

Não instalar uma biblioteca pesada de animação na primeira versão. Uma biblioteca poderá ser adicionada somente se os protótipos demonstrarem uma interação que não possa ser implementada de forma confiável com CSS.

Componentes previstos:

- `Reveal`;
- `StaggerGrid`;
- `LineDraw`;
- `ClipImage`;
- `DocumentStack`;
- `FlowMap`;
- `Accordion`;
- `StickyWhatsApp`;
- `ContactForm`;
- `FormStatus`.

### 30.7 Estrutura de pastas

```text
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── concursos/
│   │   └── page.tsx
│   ├── (empresarial)/
│   │   ├── layout.tsx
│   │   ├── divida-ativa-empresas/
│   │   │   └── page.tsx
│   │   └── direito-empresarial/
│   │       └── page.tsx
│   ├── politica-de-privacidade/
│   │   └── page.tsx
│   ├── sitemap.ts
│   ├── robots.ts
│   ├── manifest.ts
│   └── opengraph-image.*
├── components/
│   ├── layout/
│   ├── sections/
│   ├── ui/
│   ├── forms/
│   ├── motion/
│   └── analytics/
├── content/
│   ├── home.ts
│   ├── concursos.ts
│   ├── divida-ativa.ts
│   ├── empresarial.ts
│   └── faq.ts
├── lib/
│   ├── analytics.ts
│   ├── whatsapp.ts
│   ├── contact-form.ts
│   ├── validation.ts
│   └── metadata.ts
└── styles/
    ├── tokens.css
    ├── reset.css
    ├── typography.css
    ├── motion.css
    └── utilities.css

public/
├── images/
│   ├── home/
│   ├── concursos/
│   ├── divida-ativa/
│   └── empresarial/
├── textures/
├── icons/
└── og.png
```

### 30.8 Conteúdo e CMS

Não instalar CMS na primeira versão.

As cinco páginas possuem conteúdo controlado e não exigem edição diária. A copy ficará separada em arquivos dentro de `src/content`, facilitando revisão sem misturar conteúdo e layout.

Se o blog entrar depois, avaliar:

- MDX versionado no próprio projeto; ou
- CMS externo apenas quando houver rotina editorial definida.

### 30.9 Formulário e entrega

Implementar o formulário com processamento no servidor do Next.js, usando Server Action ou Route Handler conforme a solução mais estável no início da construção.

Fluxo:

1. visitante preenche o formulário contextual;
2. navegador faz validação de usabilidade;
3. servidor repete a validação, sanitiza e verifica antispam;
4. servidor envia uma mensagem estruturada ao e-mail oficial por provedor transacional;
5. visitante recebe confirmação acessível;
6. analytics registra apenas o evento e o contexto da página, nunca os dados enviados.

Regras:

- não usar `mailto:` como mecanismo de envio;
- não expor credenciais no navegador;
- não manter banco próprio de leads nesta versão;
- não permitir anexos;
- diferenciar o assunto do e-mail por página;
- incluir origem/UTM no e-mail apenas quando presente e sem criar identificadores ocultos desnecessários;
- definir `reply-to` com o e-mail informado somente depois de validá-lo;
- documentar na Política de privacidade a retenção no provedor e na caixa postal;
- manter WhatsApp visível como alternativa se o envio falhar.

Itens **[VALIDAR]** antes da produção:

- e-mail destinatário;
- provedor transacional;
- remetente e domínio verificado;
- texto de ciência/consentimento;
- prazo e responsabilidade pelo retorno;
- política de retenção e exclusão da caixa postal.

### 30.10 Analytics e consentimento

Implementar depois da definição de privacidade:

- GA4;
- Google Ads;
- Meta Pixel;
- eventos de WhatsApp;
- visualização, início, envio, sucesso e erro do formulário;
- origem e posição do CTA;
- Vercel Speed Insights, se habilitado.

Scripts não essenciais não devem bloquear o primeiro carregamento e devem respeitar a decisão de consentimento aplicável.

### 30.11 Deploy na Vercel

Fluxo recomendado:

1. repositório Git privado;
2. projeto importado na Vercel;
3. preview automático para cada branch ou pull request;
4. produção publicada a partir da branch principal;
5. domínio definitivo conectado após aprovação;
6. HTTPS automático;
7. redirecionamentos do domínio e das URLs antigas;
8. validação de analytics apenas no ambiente de produção;
9. Speed Insights para acompanhar Core Web Vitals.

### 30.12 Plano da Vercel

Este é um site comercial de cliente. O plano Hobby da Vercel é destinado a uso pessoal e não comercial. Portanto, a opção correta é **Vercel Pro**.

Referências:

- [Vercel Hobby Plan](https://vercel.com/docs/plans/hobby)
- [Vercel Pro Plan](https://vercel.com/docs/plans/pro-plan)
- [Next.js on Vercel](https://vercel.com/docs/frameworks/full-stack/nextjs)

Na data deste blueprint, o Pro parte de US$ 20/mês, sujeito a mudanças e consumo adicional. Configurar alertas e limite de gastos.

### 30.13 Alternativa de menor custo

Se a cliente não quiser o custo recorrente da Vercel Pro:

- manter Next.js;
- gerar uma versão estática;
- pré-otimizar imagens no build;
- hospedar em uma plataforma que permita uso comercial no plano escolhido.

Essa alternativa reduz custo, mas exige revisar otimização de imagens, previews e processo de deploy. A recomendação principal continua sendo Next.js + Vercel Pro pela simplicidade operacional.

### 30.14 O que não será necessário inicialmente

- banco de dados;
- autenticação;
- painel administrativo;
- API própria;
- banco de dados ou CRM próprio para armazenar leads;
- servidor dedicado;
- WordPress;
- biblioteca pesada de animação;
- serviço de armazenamento externo.

### 30.15 Critério técnico de pronto

- build de produção concluído sem erro;
- todas as rotas pré-renderizadas;
- TypeScript sem erros;
- imagens responsivas e otimizadas;
- fontes sem requisição externa no navegador;
- navegação por teclado funcional;
- animações respeitando reduced motion;
- Core Web Vitals verificados;
- eventos de WhatsApp testados;
- envio do formulário, antispam, erros e entrega por e-mail testados;
- tags condicionadas corretamente;
- domínio, canonical, sitemap e robots conferidos;
- redirects do site antigo testados;
- preview aprovado antes da promoção para produção.

---

## 31. SEO, sitemap e leitura por mecanismos de IA

### 31.1 Estado da estratégia

O site já possui uma base de SEO por página — rota, intenção, `title`, `description` e H1 —, mas a implementação deverá incluir uma camada técnica e uma camada editorial. O objetivo não é repetir palavras-chave, e sim deixar inequívocos:

- quem é Ceres Rabelo;
- quais serviços jurídicos são apresentados;
- para quais situações cada página é relevante;
- quem é responsável pelo conteúdo;
- como as páginas se relacionam;
- quais informações são institucionais e verificáveis;
- quais URLs devem ou não aparecer em mecanismos de busca.

SEO e leitura por IA compartilham a mesma fundação: conteúdo útil, original, acessível, rastreável, bem estruturado e coerente com os dados reais da profissional.

### 31.2 Mapa de intenção e indexação

| Rota | Intenção principal | Palavra/categoria central | Indexação | Sitemap |
| --- | --- | --- | --- | --- |
| `/` | Navegação por marca e escolha da frente | Ceres Rabelo Advocacia | `index, follow` | Sim |
| `/concursos` | Entender atuação jurídica em situações de concurso | advocacia em concursos públicos | `index, follow` | Sim |
| `/divida-ativa-empresas` | Buscar orientação diante de cobrança fiscal empresarial | dívida ativa e execução fiscal para empresas | `index, follow` | Sim |
| `/direito-empresarial` | Encontrar atuação consultiva empresarial | advocacia empresarial | `index, follow` | Sim |
| `/politica-de-privacidade` | Consultar regras de tratamento de dados | política de privacidade | `noindex, follow` | Não |

A política de privacidade continuará pública e acessível pelo footer, mas não precisa disputar espaço nos resultados de busca nem no sitemap de URLs estratégicas.

### 31.3 Metadados obrigatórios

Cada página indexável terá:

- `title` próprio;
- `description` própria;
- H1 único e coerente com a intenção;
- `alternates.canonical` absoluto;
- Open Graph e Twitter/X Card;
- imagem social 1200×630 aprovada;
- `robots` específico quando a rota não deve indexar;
- idioma `pt-BR` no documento;
- nome do site consistente: `Ceres Rabelo Advocacia`;
- favicon, ícone e Apple Touch Icon;
- `metadataBase` apontando para o domínio definitivo.

Titles e descriptions serão revisados depois de confirmar o domínio, a abrangência geográfica e a versão final da copy. Não criar páginas duplicadas apenas para variações de palavra-chave.

### 31.4 Sitemap XML

Implementar `src/app/sitemap.ts`, gerando `/sitemap.xml` pelo próprio Next.js.

Regras:

1. usar URLs absolutas do domínio canônico;
2. incluir apenas Home, Concursos, Dívida ativa e Direito empresarial na primeira versão;
3. não incluir previews, parâmetros UTM, URLs alternativas ou Política de privacidade;
4. preencher `lastModified` somente quando houver alteração real e relevante no conteúdo;
5. adicionar futuras páginas editoriais automaticamente quando um blog ou central de conteúdo existir;
6. declarar o sitemap em `robots.txt`;
7. enviar o arquivo no Google Search Console e no Bing Webmaster Tools depois do lançamento.

`changeFrequency` e `priority` não serão usados como promessa de rastreamento. O sitemap ajuda a descoberta, mas não garante indexação.

### 31.5 Robots e ambientes de preview

Implementar `src/app/robots.ts`, gerando `/robots.txt`.

Política recomendada para produção:

```text
User-agent: *
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: GPTBot
Disallow: /

Sitemap: https://DOMINIO-DEFINITIVO/sitemap.xml
```

Justificativa:

- Googlebot, Bingbot e demais rastreadores públicos podem acessar as páginas indexáveis;
- `OAI-SearchBot` fica liberado para que o conteúdo possa ser descoberto, resumido e citado na busca do ChatGPT;
- `GPTBot` fica bloqueado inicialmente para separar presença em busca de autorização para possível uso em treinamento;
- a cliente poderá rever a decisão sobre `GPTBot` depois, de forma consciente;
- previews da Vercel e ambientes de homologação devem usar proteção de acesso e/ou `X-Robots-Tag: noindex`, nunca disputar indexação com a produção;
- páginas públicas não devem depender de JavaScript do cliente para expor texto principal.

O controle do Google Search, inclusive dos recursos de IA da busca, permanece ligado ao acesso do Googlebot e às regras usuais de indexação. Eventual política para `Google-Extended` será decidida separadamente, pois não substitui o Googlebot da busca.

### 31.6 Leitura por IA e agentes

Para favorecer compreensão e citação por mecanismos de IA:

- renderizar o conteúdo principal no servidor;
- usar HTML semântico: `header`, `nav`, `main`, `article`, `section`, `aside`, `footer`;
- manter títulos e respostas importantes em texto real, não dentro de imagens;
- organizar cada seção em torno de uma pergunta, situação ou conceito claro;
- identificar Ceres pelo nome completo, função profissional e credenciais validadas;
- expor autoria e data de revisão quando houver conteúdo editorial;
- usar links internos com rótulos descritivos;
- fornecer `alt` factual para imagens informativas e `alt=""` para elementos decorativos;
- aplicar ARIA corretamente no menu, FAQ, botões, drawer mobile e controles de consentimento;
- evitar conteúdo escondido apenas para robôs;
- manter endereço, telefone, OAB, perfis oficiais e nome da marca consistentes em todo o ecossistema digital.

Não será criada uma “copy para robô” separada da copy humana. As respostas precisam continuar juridicamente prudentes e compreensíveis para pessoas.

### 31.7 `llms.txt`

`llms.txt` não é requisito de Google, não é padrão consolidado de indexação e não substitui sitemap, robots, HTML ou dados estruturados.

Decisão inicial: **não tratar `llms.txt` como item obrigatório do lançamento**. Ele poderá ser publicado de forma experimental em `/llms.txt` depois que domínio, dados profissionais e conteúdos estiverem aprovados. Se criado, conterá apenas:

- nome e descrição pública do escritório;
- URLs canônicas das áreas;
- resumo factual de cada página;
- autoria e data de atualização;
- canal público de contato;
- indicação de que o conteúdo é informativo e não constitui promessa ou consulta individual.

Não incluir dados internos, instruções ocultas, números não validados ou duplicação integral da copy.

### 31.8 Dados estruturados em JSON-LD

Usar JSON-LD apenas com informações visíveis e confirmadas.

#### Home

Criar um `@graph` com:

- `WebSite`;
- `Organization` ou `LegalService`, conforme endereço e estrutura confirmados;
- `Person` para Ceres Rabelo;
- relações estáveis entre site, organização e profissional por IDs canônicos;
- `sameAs` somente para perfis oficiais;
- `logo`, telefone, endereço e área atendida apenas após validação.

#### Páginas de serviço

Usar `Service` com:

- nome do serviço;
- descrição factual;
- `provider` referenciando a entidade institucional;
- `areaServed` somente se a abrangência estiver confirmada;
- URL canônica.

Não inserir avaliações, quantidade de casos, percentuais de êxito, preços, promessas ou credenciais não comprovadas.

#### FAQ

O FAQ deve continuar em HTML visível porque ajuda pessoas, buscas e sistemas de IA a localizar respostas. Não usar `QAPage`: essa marcação é destinada a páginas em que usuários podem enviar respostas. `FAQPage` não será implementado por padrão, pois não gera regularmente rich result para um escritório jurídico e adicionaria complexidade sem benefício esperado.

Todo JSON-LD será validado no Schema Markup Validator e, quando aplicável, no Rich Results Test.

### 31.9 Links internos e arquitetura semântica

- Home aponta para as três áreas com texto de link descritivo;
- Concursos permanece em sua jornada própria;
- páginas empresariais podem se relacionar entre si sem inserir Concursos em destaque;
- Dívida ativa aponta contextualmente para Direito empresarial quando houver continuidade consultiva legítima;
- Direito empresarial pode apontar para Dívida ativa quando mencionar passivo fiscal;
- logo sempre retorna à Home;
- footer contém todas as rotas institucionais, contato e Política de privacidade;
- nenhuma página indexável fica órfã;
- não usar “clique aqui” como rótulo principal de links.

### 31.10 SEO de imagens

- nomes de arquivo descritivos e estáveis;
- `alt` descrevendo conteúdo e função, sem acumular palavras-chave;
- largura e altura declaradas para evitar deslocamento de layout;
- formatos modernos e tamanhos responsivos;
- fotografia principal com boa resolução e licença/autorização registrada;
- imagens sociais próprias e legíveis;
- nenhum texto crítico disponível apenas dentro de uma imagem;
- imagens geradas usadas como ambientação, nunca como evidência de fato profissional.

### 31.11 Autoridade e confiança

Antes da publicação, confirmar e exibir de forma consistente:

- nome profissional;
- número da OAB e seccional;
- formação acadêmica verificável;
- docência, autoria e vínculos atuais;
- canais oficiais;
- cidade/endereço e abrangência de atendimento, se aplicáveis;
- data de atualização de conteúdos que possam envelhecer;
- responsabilidade autoral e aviso de caráter informativo.

Para temas jurídicos, qualidade e confiança são mais importantes que volume. Uma futura estratégia editorial deve priorizar análises próprias, explicações assinadas e conteúdo ligado às dúvidas reais dos públicos, evitando artigos genéricos produzidos apenas para multiplicar palavras-chave.

### 31.12 SEO local

O SEO local só será ativado depois de confirmar local de atendimento e abrangência.

Se houver escritório físico elegível:

- criar ou revisar o Perfil da Empresa no Google;
- manter nome, endereço e telefone consistentes;
- apontar o perfil para o domínio canônico;
- usar `LegalService`/`LocalBusiness` com endereço real;
- não criar páginas artificiais para cidades sem presença ou conteúdo específico.

Se a atuação for nacional e predominantemente remota, a copy explicará a abrangência real sem simular escritórios locais.

### 31.13 Monitoramento pós-lançamento

Configurar:

- Google Search Console;
- Bing Webmaster Tools;
- envio e acompanhamento do sitemap;
- inspeção individual das quatro páginas indexáveis;
- GA4, depois da decisão de consentimento;
- eventos de conversão por página e CTA;
- acompanhamento de consultas de marca e de serviço;
- referências vindas do ChatGPT por `utm_source=chatgpt.com`, quando presentes;
- revisão de indexação, canonicals, Core Web Vitals e erros de dados estruturados.

Não prometer posição. A linha de base será registrada no lançamento e revisada em 30, 60 e 90 dias.

### 31.14 Checklist de lançamento orgânico

- [ ] domínio canônico confirmado;
- [ ] redirects do site anterior mapeados e testados;
- [ ] titles, descriptions e H1 revisados;
- [ ] canonicals absolutos;
- [ ] `/sitemap.xml` válido com quatro URLs estratégicas;
- [ ] `/robots.txt` válido e apontando para o sitemap;
- [ ] Política de privacidade fora do sitemap e com `noindex, follow`;
- [ ] previews e homologação com `noindex`;
- [ ] Open Graph e Twitter/X Cards testados;
- [ ] JSON-LD coerente com o conteúdo visível;
- [ ] Rich Results Test e Schema Markup Validator sem erros críticos;
- [ ] textos principais disponíveis no HTML inicial;
- [ ] navegação e FAQs acessíveis por teclado e agentes;
- [ ] alt texts revisados;
- [ ] páginas sem links quebrados ou órfãos;
- [ ] Search Console e Bing Webmaster Tools configurados;
- [ ] sitemap enviado;
- [ ] dados profissionais e OAB validados;
- [ ] analytics e consentimento revisados;
- [ ] rastreamento de cliques no WhatsApp testado.
- [ ] rastreamento do formulário testado sem transmitir os dados preenchidos.

---

## 32. Decisões confirmadas para o início da construção

### 32.1 Escopo

- a área criminal não entra na versão 1;
- permanecem Home, Concursos, Dívida ativa para empresas, Direito empresarial e Política de privacidade;
- não haverá link, card ou menção promocional da área criminal sem destino.

### 32.2 Conversão

- botões contextuais de WhatsApp;
- botão/barra persistente de WhatsApp nas páginas de serviço;
- formulário na Home e nas três páginas de serviço;
- formulário contextual por rota;
- sem upload de documentos;
- sem banco próprio de leads na primeira versão;
- envio ao e-mail do escritório por processamento seguro no servidor.

### 32.3 Ativos visuais

- já existem logotipo e fotografias;
- os arquivos ainda precisam ser recebidos, inventariados e avaliados quanto a formato, resolução, licença/autorização e adequação aos recortes previstos;
- fotografia real de Ceres tem prioridade sobre imagem gerada quando a profissional aparece;
- imagens geradas permanecem restritas a texturas e apoios abstratos definidos no plano visual.

### 32.4 Pendências que não impedem iniciar o código

- recebimento dos arquivos de logo e fotos;
- confirmação dos dados profissionais;
- WhatsApp e e-mail finais;
- e-mail destinatário e serviço de envio do formulário;
- texto de ciência/consentimento;
- domínio e redirects;
- acessos de analytics e mídia.

Esses dados podem entrar durante a construção, mas precisam estar validados antes da publicação.

---

## 33. Regra de diferenciação visual entre páginas

As páginas de serviço compartilham marca, tipografia, navegação e componentes de conversão, mas não compartilham a mesma composição principal. A percepção da área deve acontecer no primeiro viewport, antes mesmo da leitura integral do texto.

### 33.1 Concursos públicos — edital, ato e prazo

- hero claro e editorial, com aparência de mesa de análise;
- edital em camadas como objeto visual central;
- item do edital destacado e carimbo “ato sob análise”;
- prazo tratado como alerta visual independente;
- trilha resumida “edital → ato → resposta”;
- animação de entrada das folhas seguida do carimbo;
- cards de situações com linguagem de fichas/documentos;
- mecanismo representado por leitura integrada em papel pautado;
- cronologia com marcadores circulares, remetendo às etapas do certame.

Objetivo de percepção: em até cinco segundos, o visitante deve reconhecer que a página trata de decisões de banca, regras publicadas e prazos do concurso.

### 33.2 Dívida ativa para empresas — percurso da cobrança e risco

- hero escuro, técnico e mais urgente;
- empresa apresentada como ponto de partida do diagnóstico;
- mapa vertical “origem → CDA → execução → impacto”;
- etapa atual destacada na linha processual;
- alerta específico para bloqueio ou penhora;
- animação de avanço do percurso e entrada lateral do alerta;
- situações organizadas em cards horizontais com barra de status;
- mecanismo transformado em rastreamento da cobrança, e não em pilha de documentos;
- cronologia com marcadores quadrados e leitura de procedimento.

Objetivo de percepção: em até cinco segundos, o visitante deve entender que existe uma cobrança pública em curso, com fases e possíveis efeitos patrimoniais sobre a empresa.

### 33.3 Direito empresarial — arquitetura conectada do negócio

- hero geométrico, organizado como blueprint ou mapa de operação;
- empresa no centro da composição;
- conexões visuais com sócios, contratos, compliance e crescimento;
- pergunta estratégica apresentada como cartão de decisão;
- ciclo “início → crescimento → reorganização” visível no primeiro viewport;
- animação dos nós e desenho progressivo das conexões;
- grade de situações em composição bento, com destaque para a fase inicial;
- mecanismo representado como mapa de decisão em quatro quadrantes;
- cronologia tratada como ciclo empresarial, com grid e marcadores circulares.

Objetivo de percepção: em até cinco segundos, o visitante deve reconhecer uma atuação consultiva que conecta estrutura jurídica, operação e fase do negócio.

### 33.4 Elementos que permanecem consistentes

- assinatura visual do escritório;
- família tipográfica e tokens de espaçamento;
- padrão de acessibilidade e foco;
- CTAs de formulário e WhatsApp;
- tom responsável, sem promessa de resultado;
- lógica de SEO e conteúdo semântico;
- respeito a `prefers-reduced-motion`.
