import type { FaqItem } from "@/components/FaqList";

export type ServiceCard = {
  icon: string;
  title: string;
  text: string;
};

export type ServiceArea =
  | "Concursos públicos"
  | "Dívida ativa e execução fiscal"
  | "Direito empresarial"
  | "Conta bloqueada em plataforma"
  | "Registro de marca";

export type ServiceConfig = {
  slug: string;
  theme: "wine" | "forest" | "bronze" | "plataforma";
  eyebrow: string;
  title: string;
  /** Trecho de `title` que recebe o traço em brass no H1. */
  titleMark: string;
  /** Nome e resumo usados no schema.org `Service` da página. */
  serviceName: string;
  serviceDescription: string;
  /** Copy do CTA intermediário, no meio da rolagem. */
  inlineCtaTitle: string;
  inlineCtaText: string;
  lead: string;
  heroNote: string;
  heroTags: string[];
  primaryCta: string;
  formArea: ServiceArea;
  whatsappMessage: string;
  situationsTitle: string;
  situationsLead: string;
  situations: ServiceCard[];
  mechanismEyebrow: string;
  mechanismTitle: string;
  mechanismText: string;
  mechanismItems: string[];
  pathsTitle: string;
  pathsLead: string;
  paths: ServiceCard[];
  timelineTitle: string;
  timelineLead: string;
  timeline: string[];
  authorityTitle: string;
  authorityText: string[];
  processTitle: string;
  process: Array<{ title: string; text: string }>;
  documentsTitle: string;
  documentsLead: string;
  documents: string[];
  faq: FaqItem[];
  contactTitle: string;
  contactLead: string;
};

export const concursos: ServiceConfig = {
  slug: "concursos",
  theme: "wine",
  eyebrow: "ADVOCACIA EM CONCURSOS PÚBLICOS",
  title: "Uma decisão no concurso mudou o caminho que você vinha construindo?",
  titleMark: "mudou o caminho",
  inlineCtaTitle: "Cada etapa do certame tem prazo próprio.",
  inlineCtaText: "Reunir o edital, o ato e a data de ciência é o que permite dizer o que ainda pode ser examinado.",
  serviceName: "Advocacia em concursos públicos",
  serviceDescription:
    "Análise de edital, atos da banca, eliminação, TAF, avaliação médica, cotas, investigação social, convocação e nomeação.",
  lead:
    "Edital, ato da banca, documentos e datas só fazem sentido lidos em conjunto. É isso que mostra se ainda existe medida a tomar.",
  heroNote: "Análise responsável, sem promessa de resultado.",
  heroTags: ["edital", "eliminação", "TAF", "cotas", "nomeação"],
  primaryCta: "Organizar meu caso para análise",
  formArea: "Concursos públicos",
  whatsappMessage:
    "Olá, gostaria de apresentar uma situação relacionada a concurso público. Concurso/cargo: [preencher]. Banca: [preencher]. Etapa: [preencher]. Data do ato ou resultado: [preencher].",
  situationsTitle: "Situações que merecem uma leitura cuidadosa",
  situationsLead:
    "O ponto de partida não é uma resposta pronta. É identificar o que o edital previa, o que de fato aconteceu e em que ponto do certame você está agora.",
  situations: [
    { icon: "file-warning", title: "Eliminação ou indeferimento", text: "Resultado, justificativa, regra do edital e data de ciência: a comparação entre os quatro é o ponto de partida." },
    { icon: "activity", title: "TAF e avaliação médica", text: "Critérios aplicados, registros da etapa e documentos técnicos ajudam a delimitar o quadro." },
    { icon: "users", title: "Cotas e heteroidentificação", text: "Procedimento, motivação, recurso e respeito às regras publicadas exigem análise conjunta." },
    { icon: "search", title: "Investigação social", text: "O ato, a fundamentação apresentada e a chance de esclarecer entram na mesma leitura." },
    { icon: "clipboard", title: "Correção e pontuação", text: "Espelho, critérios, questão, resposta e recurso formam o núcleo documental da análise." },
    { icon: "badge", title: "Convocação e nomeação", text: "Classificação, vagas, validade e movimentação do certame ajudam a situar a expectativa." },
  ],
  mechanismEyebrow: "O MÉTODO ANTES DA MEDIDA",
  mechanismTitle: "Regra, ato, prazo e documento contam a mesma história.",
  mechanismText:
    "Uma situação só fica compreensível quando os elementos deixam de aparecer isolados. A análise organiza a cronologia, verifica a regra aplicável e compara o ato praticado com os registros disponíveis.",
  mechanismItems: ["Regra do edital", "Ato questionado", "Datas relevantes", "Documentos disponíveis"],
  pathsTitle: "O nome do caminho vem depois do diagnóstico",
  pathsLead:
    "Recurso administrativo e medida judicial não são a mesma coisa: mudam o fundamento, o destinatário e o rito. Qual deles cabe — se algum couber — depende do caso concreto.",
  paths: [
    { icon: "route", title: "Organização do quadro", text: "Reconstrução dos fatos, da etapa e das datas que influenciam a leitura jurídica." },
    { icon: "file-check", title: "Via administrativa", text: "Verificação de recurso, revisão ou manifestação prevista no procedimento aplicável." },
    { icon: "landmark", title: "Via judicial", text: "Avaliação dos requisitos, limites e documentos quando houver fundamento para exame judicial." },
  ],
  timelineTitle: "Prazo não é detalhe de rodapé",
  timelineLead:
    "A data da publicação, da ciência ou da decisão pode alterar o que ainda é possível examinar. Por isso, a cronologia deve aparecer logo no primeiro contato.",
  timeline: ["Publicação do edital", "Realização da etapa", "Resultado ou ato", "Recurso e resposta", "Situação atual"],
  authorityTitle: "Clareza de quem ensina. Compreensão de quem já viveu o concurso.",
  authorityText: [
    "Ceres Rabelo é advogada, professora, mestra, doutoranda e escritora. Antes da atuação profissional em concursos, foi candidata, foi aprovada e ingressou no serviço público.",
    "Essa trajetória não substitui a análise jurídica individual, mas aproxima a linguagem técnica do contexto real de quem atravessa uma etapa decisiva.",
  ],
  processTitle: "Como a análise começa",
  process: [
    { title: "Envie o contexto", text: "Informe concurso, cargo, banca, etapa e data do ato pelo formulário ou WhatsApp." },
    { title: "Organize os documentos", text: "Edital, resultado, recurso, resposta e comprovantes ajudam a reconstruir o quadro." },
    { title: "Receba o retorno", text: "Fatos, prazos e caminhos juridicamente possíveis são delimitados sem garantia de resultado." },
  ],
  documentsTitle: "O que ajuda a iniciar a análise",
  documentsLead: "Não envie dados excessivamente sensíveis no formulário. O canal adequado para os documentos é indicado no retorno.",
  documents: ["edital e retificações", "resultado ou ato de eliminação", "espelho de avaliação", "recurso apresentado", "resposta da banca", "publicações e datas", "documentos da etapa", "relato cronológico breve"],
  faq: [
    { question: "É possível saber se tenho chance apenas pelo contato inicial?", answer: "Não é adequado estimar resultado sem examinar edital, documentos, fatos e prazos. O contato inicial serve para organizar o que precisa ser analisado." },
    { question: "A banca pode aplicar uma regra que não estava no edital?", answer: "A resposta depende do conteúdo do edital, do ato praticado e das normas aplicáveis. A comparação entre esses elementos é um ponto central da análise." },
    { question: "Recurso administrativo e medida judicial são a mesma coisa?", answer: "Não. Eles possuem fundamentos, destinatários e procedimentos diferentes. A pertinência de cada caminho depende da situação concreta." },
    { question: "Quais documentos devo separar primeiro?", answer: "Edital, resultado ou ato questionado, datas relevantes e eventuais recursos e respostas já existentes." },
    { question: "Existe prazo para buscar análise?", answer: "Pode existir. O prazo varia conforme a etapa, o edital e a medida considerada. Informe as datas logo no primeiro contato." },
    { question: "Uma análise garante que a decisão será alterada?", answer: "Não. A análise identifica o enquadramento jurídico e os caminhos possíveis, sem garantia de resultado." },
  ],
  contactTitle: "Reúna o edital, o resultado e as datas do que aconteceu.",
  contactLead: "Com esses três em mãos, o primeiro retorno já sai com contexto.",
};

export const dividaAtiva: ServiceConfig = {
  slug: "divida-ativa-empresas",
  theme: "forest",
  eyebrow: "DÍVIDA ATIVA E EXECUÇÃO FISCAL",
  title: "A cobrança avançou. Antes de decidir, organize o quadro da sua empresa.",
  titleMark: "organize o quadro",
  inlineCtaTitle: "A cobrança não para enquanto o quadro não é lido.",
  inlineCtaText: "Origem do crédito, CDA e fase processual mudam completamente os caminhos disponíveis para a sua empresa.",
  serviceName: "Dívida ativa e execução fiscal para empresas",
  serviceDescription:
    "Exame de inscrições em dívida ativa, CDA, citações, bloqueios, penhoras e demais atos da cobrança fiscal da empresa.",
  lead:
    "Origem do crédito, CDA, datas, processo e bloqueios formam um quadro só. Ler esse quadro é o que separa decisão de suposição.",
  heroNote: "Atuação voltada ao contexto empresarial.",
  heroTags: ["dívida ativa", "citação", "CDA", "bloqueio", "penhora"],
  primaryCta: "Entender o quadro da minha empresa",
  formArea: "Dívida ativa e execução fiscal",
  whatsappMessage:
    "Olá, gostaria de apresentar uma situação de dívida ativa ou execução fiscal da empresa. Órgão responsável: [preencher]. Existe processo/citação? [sim/não]. Houve bloqueio ou penhora? [sim/não].",
  situationsTitle: "Em que momento a sua empresa está?",
  situationsLead:
    "A mesma dívida pode aparecer em fases muito diferentes. Reconhecer o momento evita tratar inscrição, citação e bloqueio como se fossem a mesma coisa.",
  situations: [
    { icon: "file-warning", title: "Inscrição em dívida ativa", text: "É preciso identificar origem, constituição, valores e documentos relacionados ao crédito." },
    { icon: "mail-warning", title: "Citação ou intimação", text: "O documento recebido, a data e o número do processo ajudam a localizar a fase da cobrança." },
    { icon: "lock", title: "Conta bloqueada", text: "O ato de bloqueio e o contexto processual devem ser analisados em conjunto." },
    { icon: "boxes", title: "Penhora ou garantia", text: "Bem atingido, avaliação, ordem dos atos e situação da empresa são informações relevantes." },
    { icon: "receipt", title: "Parcelamento em curso", text: "Programa, condições, pagamentos e efeitos no processo precisam ser verificados." },
    { icon: "file-check", title: "Dificuldade de certidão", text: "Pendências e regularidade fiscal podem exigir leitura da origem e do status das cobranças." },
  ],
  mechanismEyebrow: "DA ORIGEM À SITUAÇÃO ATUAL",
  mechanismTitle: "A cobrança é um percurso, não um documento isolado.",
  mechanismText:
    "O crédito passa por constituição, inscrição e, em alguns casos, execução. Situar o momento da empresa ajuda a separar providências administrativas, processuais e negociais.",
  mechanismItems: ["Origem do crédito", "Inscrição e CDA", "Execução e atos", "Situação atual"],
  pathsTitle: "Caminhos possíveis dependem do que os documentos mostram",
  pathsLead:
    "Parcelamento, garantia, discussão administrativa ou medida processual não são respostas automáticas. Cada alternativa possui requisitos e consequências próprios.",
  paths: [
    { icon: "search", title: "Verificação da cobrança", text: "Origem, formação, valores, sujeito responsável e documentos que sustentam o crédito." },
    { icon: "handshake", title: "Regularização e negociação", text: "Condições existentes, capacidade da empresa e efeitos de eventual programa ou parcelamento." },
    { icon: "shield", title: "Análise processual", text: "Fase, citação, garantias, bloqueios, prazos e questões que possam merecer exame jurídico." },
  ],
  timelineTitle: "Cada ato altera o contexto da empresa",
  timelineLead:
    "Preservar citações, decisões, comprovantes de bloqueio e datas permite reconstruir o procedimento com mais precisão.",
  timeline: ["Origem do crédito", "Inscrição", "CDA", "Citação", "Bloqueio ou penhora", "Situação atual"],
  authorityTitle: "Análise jurídica com método e atenção à documentação.",
  authorityText: [
    "A atuação empresarial exige separar urgência de precipitação. O primeiro passo é entender o que já aconteceu, o que está documentado e qual decisão precisa ser tomada.",
    "Ceres Rabelo reúne advocacia, docência e pesquisa em uma leitura técnica dos fatos, documentos e procedimentos aplicáveis.",
  ],
  processTitle: "Como o quadro é organizado",
  process: [
    { title: "Envio das informações", text: "Órgão, tributo, valor, processo, datas e momento atual pelo formulário ou WhatsApp." },
    { title: "Organização documental", text: "Citação, CDA, decisões, bloqueios, pagamentos e histórico da empresa." },
    { title: "Análise e retorno", text: "Pontos relevantes e caminhos juridicamente possíveis são delimitados para a situação concreta." },
  ],
  documentsTitle: "Documentos iniciais",
  documentsLead: "Use o formulário para o resumo. A orientação sobre o envio seguro dos documentos vem no retorno.",
  documents: ["citação ou intimação", "CDA, se disponível", "número do processo", "comprovante de bloqueio", "contrato social", "notificações administrativas", "pagamentos ou parcelamentos", "relato cronológico breve"],
  faq: [
    { question: "O que significa ter o CNPJ inscrito em dívida ativa?", answer: "Significa que um crédito foi formalmente registrado para cobrança pelo poder público. É necessário examinar sua origem, constituição, valores e documentação." },
    { question: "Recebi citação em execução fiscal. O que devo separar?", answer: "Citação, número do processo, CDA quando disponível, documentos da empresa, datas e comprovantes relacionados à dívida." },
    { question: "Uma conta bloqueada pode ser analisada?", answer: "Sim. O ato de bloqueio e o contexto da execução podem ser examinados. A existência de medida cabível depende do processo e dos documentos." },
    { question: "Parcelar a dívida encerra a execução?", answer: "Os efeitos variam conforme o programa, o momento processual e o cumprimento das condições. O caso precisa ser verificado individualmente." },
    { question: "A empresa pode perder bens?", answer: "A execução fiscal pode alcançar patrimônio, observadas as regras processuais e as circunstâncias do caso. Não é possível antecipar o efeito sem examinar o processo." },
    { question: "Quanto tempo leva para resolver?", answer: "O tempo varia conforme o órgão, a fase, as medidas existentes e a tramitação. Não é adequado prometer prazo de resultado." },
  ],
  contactTitle: "Comece pelos documentos e pelas datas da cobrança.",
  contactLead: "Com esses elementos já é possível situar a empresa dentro do procedimento e começar a análise com base real.",
};

export const empresarial: ServiceConfig = {
  slug: "direito-empresarial",
  theme: "bronze",
  eyebrow: "ADVOCACIA EMPRESARIAL",
  title: "Sua empresa mudou. A estrutura jurídica acompanhou esse momento?",
  titleMark: "A estrutura jurídica",
  inlineCtaTitle: "Estrutura desatualizada aparece no problema, não antes dele.",
  inlineCtaText: "Contrato social, acordos e rotinas podem ser revistos antes de virarem conflito entre sócios ou passivo.",
  serviceName: "Direito empresarial",
  serviceDescription:
    "Atuação consultiva em relações societárias, contratos, compliance, questões tributárias e proteção de marca.",
  lead:
    "Relações societárias, contratos e rotinas envelhecem junto com a empresa. A estrutura precisa acompanhar a fase real do negócio.",
  heroNote: "Atuação consultiva para empresas e sócios.",
  heroTags: ["societário", "contratos", "compliance", "tributário", "marca"],
  primaryCta: "Mapear a necessidade da minha empresa",
  formArea: "Direito empresarial",
  whatsappMessage:
    "Olá, gostaria de conversar sobre uma necessidade jurídica da empresa. Segmento: [preencher]. Assunto principal: [societário/contratos/compliance/tributário/marca/outro]. Existe prazo? [sim/não].",
  situationsTitle: "O direito empresarial começa pelo momento da empresa",
  situationsLead:
    "Nem toda demanda chega com um nome jurídico pronto. Muitas vezes ela aparece como uma decisão, um ruído entre sócios ou uma operação que cresceu sem revisão da base.",
  situations: [
    { icon: "rocket", title: "Empresa começando", text: "Escolhas societárias, responsabilidades e documentos iniciais precisam refletir o projeto dos sócios." },
    { icon: "trending", title: "Operação crescendo", text: "Contratos, processos internos e relações comerciais podem exigir mais clareza e padronização." },
    { icon: "users", title: "Relação entre sócios", text: "Papéis, deliberações, entrada, saída e expectativas precisam ser documentados com precisão." },
    { icon: "file-text", title: "Contratos importantes", text: "Obrigações, riscos, prazos e formas de encerramento devem acompanhar a operação real." },
    { icon: "shield", title: "Rotinas e compliance", text: "Políticas e controles precisam ser proporcionais ao negócio e aplicáveis no dia a dia." },
    { icon: "refresh", title: "Reorganização", text: "Mudanças de estrutura, passivos ou estratégia podem exigir uma leitura jurídica integrada." },
  ],
  mechanismEyebrow: "LEITURA DO NEGÓCIO",
  mechanismTitle: "A categoria jurídica importa. O contexto empresarial vem primeiro.",
  mechanismText:
    "A empresa reconhece que algo precisa mudar antes de saber se a resposta está no societário, em contratos, compliance, tributário ou proteção de marca. O diagnóstico organiza sinais e prioridades.",
  mechanismItems: ["Momento da empresa", "Relações envolvidas", "Documentos existentes", "Decisão necessária"],
  pathsTitle: "Áreas conectadas pela operação",
  pathsLead:
    "A divisão por especialidade ajuda a explicar o trabalho, mas a empresa vive relações simultâneas. A análise deve evitar soluções isoladas para problemas conectados.",
  paths: [
    { icon: "building", title: "Societário", text: "Estrutura, acordos, deliberações, entrada e saída de sócios e reorganizações." },
    { icon: "file-check", title: "Contratos", text: "Elaboração, revisão, negociação e organização de instrumentos relevantes para a operação." },
    { icon: "shield", title: "Compliance e rotinas", text: "Políticas, fluxos, responsabilidades e prevenção proporcionais ao contexto da empresa." },
    { icon: "calculator", title: "Questões tributárias", text: "Leitura jurídica de decisões e riscos fiscais, sem promessa de economia ou resultado." },
    { icon: "badge", title: "Marca e ativos", text: "Proteção, organização e coerência entre identidade, titularidade e uso empresarial." },
    { icon: "compass", title: "Apoio continuado", text: "Demandas pontuais ou acompanhamento recorrente conforme necessidade e escopo definido." },
  ],
  timelineTitle: "Decisões jurídicas acompanham o ciclo da empresa",
  timelineLead:
    "A estrutura que funcionava no início pode não responder ao crescimento, à entrada de novos sócios ou à mudança da operação.",
  timeline: ["Início", "Validação", "Crescimento", "Novas relações", "Reorganização", "Continuidade"],
  authorityTitle: "Clareza jurídica para decisões que precisam funcionar na prática.",
  authorityText: [
    "A advocacia empresarial começa pela compreensão do negócio, das pessoas envolvidas e da decisão que precisa ser tomada.",
    "Formação acadêmica e método ajudam a transformar temas complexos em alternativas compreensíveis, delimitadas e documentadas.",
  ],
  processTitle: "Como começa o diagnóstico",
  process: [
    { title: "Contexto", text: "A empresa apresenta seu momento, a relação envolvida e a decisão que precisa tomar." },
    { title: "Materiais", text: "Documentos existentes, prazos e impactos operacionais ajudam a delimitar a necessidade." },
    { title: "Escopo", text: "O trabalho possível, seus limites e próximos passos são organizados para decisão da empresa." },
  ],
  documentsTitle: "Informações para o primeiro contato",
  documentsLead: "O material necessário varia. Comece pelo contexto; documentos serão solicitados pelo canal adequado.",
  documents: ["segmento e atividade", "momento da empresa", "número de sócios", "assunto principal", "documentos existentes", "decisão necessária", "prazo relevante", "resultado esperado da conversa"],
  faq: [
    { question: "Quando uma empresa deve procurar apoio jurídico empresarial?", answer: "Quando precisa estruturar uma relação, tomar uma decisão com efeitos jurídicos, revisar documentos ou compreender riscos relacionados à operação." },
    { question: "O atendimento é apenas para empresas grandes?", answer: "O escopo depende da necessidade, da estrutura e do momento da empresa, não apenas do porte." },
    { question: "O que é o diagnóstico empresarial?", answer: "É a etapa inicial de entendimento do contexto, dos documentos e da necessidade apresentada. Ela ajuda a delimitar o escopo possível do trabalho." },
    { question: "É possível contratar somente um documento?", answer: "O formato pode ser pontual ou mais amplo, conforme a necessidade identificada e o escopo acordado." },
    { question: "A atuação pode ser recorrente?", answer: "Pode haver demandas pontuais ou acompanhamento continuado. O formato depende da estrutura e das necessidades da empresa." },
    { question: "Planejamento tributário garante redução de impostos?", answer: "Não. Qualquer análise depende da operação, do enquadramento e das normas aplicáveis, sem promessa de economia ou resultado." },
  ],
  contactTitle: "Conte em que momento a empresa está e qual decisão precisa ser tomada.",
  contactLead: "O primeiro passo é entender o contexto da empresa e separar o que realmente importa.",
};

