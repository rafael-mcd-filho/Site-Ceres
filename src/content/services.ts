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

export type ContactPlatform = "Mercado Livre" | "Instagram" | "WhatsApp";

export type ServiceSectionMarks = {
  situations: string;
  mechanism: string;
  paths: string;
  inlineCta: string;
  contact: string;
};

export type ServiceConfig = {
  slug: string;
  theme: "wine" | "forest" | "bronze" | "plataforma";
  eyebrow: string;
  title: string;
  /** Trecho de `title` que recebe o traço em brass no H1. */
  titleMark: string;
  /** Palavras-chave destacadas nos pontos de decisão ao longo da página. */
  sectionMarks: ServiceSectionMarks;
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
  whatsappCta: string;
  inlineCtaLabel: string;
  finalCta: string;
  formArea: ServiceArea;
  formPlatform?: ContactPlatform;
  whatsappMessage: string;
  situationsTitle: string;
  situationsLead: string;
  situations: ServiceCard[];
  mechanismEyebrow: string;
  mechanismTitle: string;
  mechanismText: string;
  /** Segundo parágrafo, quando a página tem um argumento que o lead não comporta. */
  mechanismNote?: string;
  /**
   * Elementos do diagnóstico, exibidos no visual da seção. Ausente quando a
   * própria cronologia já é o diagnóstico — aí o visual recebe `timeline` e a
   * sequência aparece uma vez só (ver `dividaAtiva`).
   */
  mechanismItems?: string[];
  pathsTitle: string;
  pathsLead: string;
  paths: ServiceCard[];
  timelineTitle: string;
  timelineLead: string;
  timeline: string[];
  /** Como o escritório conduz o trabalho. Fica ao lado do formulário, onde confiança converte. */
  trustNote: string;
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
  title: "Uma decisão no concurso colocou sua aprovação em risco?",
  titleMark: "colocou sua aprovação em risco",
  sectionMarks: {
    situations: "colocou sua aprovação em risco",
    mechanism: "reconstruir o que aconteceu",
    paths: "avaliar o próximo passo",
    inlineCta: "A data pode mudar o que ainda é possível fazer",
    contact: "em que etapa você está",
  },
  inlineCtaTitle: "O resultado já saiu? A data pode mudar o que ainda é possível fazer.",
  inlineCtaText: "O resultado, a eliminação e a resposta da banca podem iniciar prazos diferentes. Mesmo sem todos os documentos, anote quando cada fato aconteceu e informe essas datas no primeiro contato.",
  serviceName: "Advocacia em concursos públicos",
  serviceDescription:
    "Orientação jurídica para candidatos diante de eliminação, TAF, avaliação médica, cotas, investigação social, correção de prova, convocação e nomeação.",
  lead:
    "Depois de meses ou anos de preparação, receber uma eliminação, uma nota inesperada ou uma decisão da banca pode trazer a sensação de que todo o esforço foi colocado em dúvida. Entender rapidamente o motivo, a regra do edital e os prazos ajuda a avaliar se essa decisão pode ser questionada.",
  heroNote: "Edital, decisão, documentos e prazos são analisados em conjunto.",
  heroTags: ["edital", "eliminação", "TAF", "cotas", "nomeação"],
  primaryCta: "Quero entender meu caso",
  whatsappCta: "Explicar meu caso pelo WhatsApp",
  inlineCtaLabel: "Analisar minha situação no concurso",
  finalCta: "Quero conversar sobre meu concurso",
  formArea: "Concursos públicos",
  whatsappMessage:
    "Olá, vim pelo site da Rabelo e Machado Advocacia e preciso de ajuda com uma situação em concurso público. Concurso/cargo: [preencher]. Banca: [preencher]. Etapa: [preencher]. Data do ato ou resultado: [preencher].",
  situationsTitle: "O que colocou sua aprovação em risco?",
  situationsLead:
    "Talvez o problema tenha surgido em uma prova, no TAF, na avaliação médica ou já perto da nomeação. Cada etapa tem regras e prazos próprios, mas todas começam pela mesma pergunta: o que a banca decidiu e por quê?",
  situations: [
    { icon: "file-warning", title: "Fui eliminado do concurso", text: "Você recebeu o resultado, mas o motivo parece genérico, contraditório ou diferente do que o edital previa. A decisão, a regra aplicada e a data precisam ser comparadas." },
    { icon: "activity", title: "Não concordo com o TAF ou a avaliação médica", text: "Um índice, laudo ou critério de avaliação pode ter encerrado sua participação. Os registros da etapa ajudam a verificar como a banca chegou ao resultado." },
    { icon: "users", title: "Tive problema nas cotas ou na heteroidentificação", text: "Se a decisão não ficou clara ou você não conseguiu apresentar sua versão, o registro da avaliação, a justificativa da banca e o prazo para recorrer precisam ser conferidos." },
    { icon: "search", title: "Fui reprovado na investigação social", text: "Quando a decisão se baseia em fatos que você não reconhece ou não teve oportunidade de esclarecer, é importante verificar a motivação apresentada pela banca." },
    { icon: "clipboard", title: "Minha nota ou correção parece errada", text: "O espelho de correção, os critérios do edital e a resposta que você apresentou mostram se existe fundamento para contestar a avaliação." },
    { icon: "badge", title: "Estou aguardando convocação ou nomeação", text: "Classificação, número de vagas, prazo de validade e novas convocações ajudam a verificar se a demora ou a ausência de nomeação merece ser questionada." },
  ],
  mechanismEyebrow: "COMO O CASO É COMPREENDIDO",
  mechanismTitle: "Para saber se a decisão pode ser questionada, é preciso reconstruir o que aconteceu.",
  mechanismText:
    "A análise compara a regra que valia para a sua etapa, a forma como a banca aplicou essa regra e os documentos que registram o resultado. Assim é possível distinguir uma discordância com a avaliação de um erro ou descumprimento que possa ser questionado.",
  mechanismItems: ["O que o edital previa", "Como a banca decidiu", "Quando você foi informado", "O que ficou documentado"],
  pathsTitle: "Depois de entender o caso, é possível avaliar o próximo passo",
  pathsLead:
    "Em alguns casos ainda é possível pedir uma revisão à banca. Em outros, pode ser necessário avaliar a Justiça. Os documentos também podem mostrar que não existe base suficiente para seguir. A etapa e o prazo ajudam a separar essas possibilidades.",
  paths: [
    { icon: "route", title: "Entender a decisão recebida", text: "Primeiro se organiza a fase do concurso, o motivo da banca, as datas e o que o edital previa para aquela situação." },
    { icon: "file-check", title: "Verificar se ainda cabe um pedido à banca", text: "Se o edital ainda permitir, é possível avaliar uma revisão, um recurso ou um pedido de reconsideração para aquela etapa." },
    { icon: "landmark", title: "Avaliar se o caso pode ser levado à Justiça", text: "Quando a própria banca não resolve ou o recurso não está disponível, os documentos mostram se alguma regra descumprida pode ser apresentada à Justiça." },
  ],
  timelineTitle: "As datas podem definir quais caminhos ainda estão disponíveis",
  timelineLead:
    "A publicação do edital, o dia da etapa, o resultado e a resposta do recurso formam a sequência do seu caso. Informar essas datas logo no primeiro contato ajuda a verificar se há algum prazo em curso.",
  timeline: ["Publicação do edital", "Realização da etapa", "Resultado ou decisão", "Recurso e resposta", "Situação atual"],
  trustNote:
    "O escritório analisa o edital, a decisão da banca, os documentos e as datas para que o candidato entenda o que aconteceu e quais próximos passos podem ser avaliados.",
  processTitle: "Como pedir uma análise inicial",
  process: [
    { title: "Conte onde o problema surgiu", text: "Informe concurso, cargo, banca, etapa e a data em que recebeu a decisão." },
    { title: "Separe o que você já tem", text: "Edital, resultado, espelho, recurso, resposta da banca e registros da etapa ajudam a compreender o caso." },
    { title: "Entenda o que pode ser avaliado", text: "O retorno indica os pontos relevantes, os prazos identificados e os possíveis próximos passos." },
  ],
  documentsTitle: "O que ajuda a iniciar a análise",
  documentsLead: "Não envie dados excessivamente sensíveis no formulário. O canal adequado para os documentos é indicado no retorno.",
  documents: ["edital e retificações", "resultado ou decisão de eliminação", "espelho de correção", "recurso apresentado", "resposta da banca", "publicações e datas", "documentos da etapa", "relato do que aconteceu, em ordem"],
  faq: [
    { question: "Fui eliminado. Ainda posso recorrer?", answer: "Depende da fase, do que o edital previa e de quando você soube da decisão. Há prazo para recorrer à própria banca e prazos diferentes para discutir o caso na Justiça. Por isso as datas são a primeira coisa pedida." },
    { question: "A banca negou meu recurso. Acabou?", answer: "Não necessariamente. A resposta da banca precisa ser comparada com o edital, com o argumento apresentado no recurso e com os documentos da etapa. Essa análise mostra se ainda existe algum ponto que pode ser discutido." },
    { question: "A banca pode aplicar uma regra que não estava no edital?", answer: "A banca deve respeitar as regras publicadas para o concurso. Para avaliar o seu caso, é preciso comparar o texto do edital com o critério aplicado e com a justificativa da decisão." },
    { question: "Recorrer à banca e entrar na Justiça são a mesma coisa?", answer: "Não. No recurso, a própria banca ou o órgão responsável revê a decisão. Na Justiça, a análise tem regras e limites diferentes. A etapa do concurso, o prazo e os documentos ajudam a decidir qual caminho pode ser avaliado." },
    { question: "Quanto tempo eu tenho para questionar uma decisão?", answer: "O prazo varia conforme a etapa, o edital e o caminho considerado. Em algumas situações, ele pode ser de poucos dias. Por isso é importante informar as datas logo no primeiro contato." },
    { question: "Uma análise garante que a decisão da banca será alterada?", answer: "Não. A mudança depende do fundamento, dos documentos e da decisão da banca, do órgão ou da Justiça. A análise serve para verificar se existe um ponto que pode ser questionado e qual caminho pode ser considerado." },
  ],
  contactTitle: "Conte o que aconteceu no concurso e em que etapa você está.",
  contactLead: "Mesmo que você ainda não tenha todos os documentos, informe a decisão recebida e as datas principais. Isso já permite começar a entender a sua situação.",
};

export const dividaAtiva: ServiceConfig = {
  slug: "divida-ativa-empresas",
  theme: "forest",
  eyebrow: "DÍVIDA ATIVA E EXECUÇÃO FISCAL",
  title: "Uma dívida tributária já começou a afetar sua empresa?",
  titleMark: "afetar sua empresa",
  sectionMarks: {
    situations: "chegou até a sua empresa",
    mechanism: "entender a origem e a fase",
    paths: "comparar as alternativas",
    inlineCta: "a data precisa ser conferida agora",
    contact: "o que já afetou na empresa",
  },
  inlineCtaTitle: "Se a empresa recebeu uma citação ou teve valores bloqueados, a data precisa ser conferida agora.",
  inlineCtaText: "Esses atos podem iniciar prazos. Localize o documento recebido, o número do processo e a data em que a empresa tomou conhecimento antes de decidir o que fazer.",
  serviceName: "Dívida ativa e execução fiscal para empresas",
  serviceDescription:
    "Orientação jurídica para empresas diante de dívida ativa, cobrança tributária, citação, bloqueio de valores, penhora e dificuldade para emitir certidão.",
  lead:
    "Às vezes o problema aparece ao tentar emitir uma certidão. Em outros casos, chega por uma citação ou por um bloqueio inesperado na conta. Quanto antes a empresa entende de onde veio a dívida e em que fase está a cobrança, mais segurança tem para avaliar o que fazer sem comprometer ainda mais a operação.",
  heroNote: "A cobrança é analisada a partir dos documentos e da etapa em que se encontra.",
  heroTags: ["dívida ativa", "citação", "CDA", "bloqueio", "penhora"],
  primaryCta: "Quero entender a situação da empresa",
  whatsappCta: "Explicar a cobrança pelo WhatsApp",
  inlineCtaLabel: "Analisar a cobrança da empresa",
  finalCta: "Quero conversar sobre essa cobrança",
  formArea: "Dívida ativa e execução fiscal",
  whatsappMessage:
    "Olá, vim pelo site da Rabelo e Machado Advocacia e preciso de ajuda com uma situação de dívida ativa ou execução fiscal da empresa. Órgão responsável: [preencher]. Existe processo/citação? [sim/não]. Houve bloqueio ou penhora? [sim/não].",
  situationsTitle: "Como essa cobrança chegou até a sua empresa?",
  situationsLead:
    "Descobrir uma pendência no CNPJ é diferente de receber uma citação ou ter valores bloqueados. Identificar o que já aconteceu mostra o nível de urgência e quais documentos precisam ser verificados primeiro.",
  situations: [
    { icon: "file-warning", title: "Descobri uma dívida no CNPJ", text: "A pendência apareceu em uma consulta, certidão ou negociação. Agora é preciso identificar a origem, o período cobrado, os valores e quem foi apontado como responsável." },
    { icon: "mail-warning", title: "A empresa recebeu uma citação", text: "A cobrança já chegou ao Judiciário. O documento recebido, a data e o número do processo indicam quais prazos podem ter começado." },
    { icon: "lock", title: "Valores da conta foram bloqueados", text: "Quando o caixa da empresa é atingido, a decisão do bloqueio e o processo precisam ser analisados com prioridade para entender o que aconteceu e o que pode ser pedido." },
    { icon: "boxes", title: "Um bem da empresa foi penhorado", text: "É necessário verificar qual bem foi atingido, como foi avaliado, quais atos ocorreram antes e qual é o impacto para a continuidade do negócio." },
    { icon: "receipt", title: "Já existe um parcelamento", text: "Antes de assumir um novo acordo, é preciso conferir o que já foi pago, as condições do programa e o que acontece com a cobrança em andamento." },
    { icon: "file-check", title: "A empresa não consegue emitir certidão", text: "A restrição pode travar contratos, crédito ou participação em oportunidades. A origem de cada pendência precisa ser identificada para avaliar a regularização." },
  ],
  mechanismEyebrow: "O QUE PRECISA SER VERIFICADO",
  mechanismTitle: "Antes de pagar ou parcelar, a empresa precisa saber de onde veio a dívida e até onde a cobrança chegou.",
  mechanismText:
    "Uma dívida pode começar em uma obrigação não reconhecida, passar pela inscrição em dívida ativa e chegar a um processo judicial. Saber onde a empresa está nessa sequência permite distinguir o que pode ser regularizado, o que precisa ser conferido e o que pode ser questionado.",
  mechanismNote:
    "Quando existe risco para o caixa ou para o patrimônio, a situação merece atenção rápida. Isso não exige uma decisão precipitada, mas uma análise objetiva do que já aconteceu e do que precisa ser decidido agora.",
  // Sem `mechanismItems`: a cronologia abaixo já é o diagnóstico desta página,
  // e os quatro itens genéricos apenas repetiam as seis etapas com outras palavras.
  pathsTitle: "Quando a empresa entende o que está sendo cobrado, consegue comparar melhor as alternativas",
  pathsLead:
    "Regularizar, negociar ou discutir a cobrança são decisões diferentes. Cada uma produz efeitos sobre o caixa, as certidões e o processo, por isso a escolha precisa considerar a realidade financeira e operacional da empresa.",
  paths: [
    { icon: "search", title: "Conferir a origem e os valores", text: "A análise verifica qual tributo está sendo cobrado, o período, o cálculo, a responsabilidade e a Certidão de Dívida Ativa, quando ela já existe." },
    { icon: "handshake", title: "Avaliar regularização ou negociação", text: "A empresa compara os programas disponíveis, o que consegue pagar e o efeito de cada opção sobre a cobrança e as certidões." },
    { icon: "shield", title: "Avaliar o que pode ser questionado", text: "A citação, os bens oferecidos ou atingidos, os bloqueios e os prazos mostram se existe algum problema na cobrança ou no processo." },
  ],
  timelineTitle: "A fase da cobrança mostra o que exige atenção agora",
  timelineLead:
    "Uma pendência identificada em certidão ainda não é o mesmo que um processo com bloqueio ou penhora. A sequência dos atos ajuda a entender o risco atual e os prazos que podem estar correndo.",
  timeline: ["Surgimento da dívida", "Inscrição em dívida ativa", "Emissão da CDA", "Citação da empresa", "Bloqueio ou penhora", "Situação atual"],
  trustNote:
    "O escritório analisa a origem, os documentos e a fase da cobrança para que a empresa entenda o problema antes de assumir um parcelamento, apresentar uma defesa ou tomar outra decisão.",
  processTitle: "Como começar a entender a cobrança",
  process: [
    { title: "Conte como o problema apareceu", text: "Informe o órgão que cobra, o valor, as datas e se já houve citação, bloqueio, penhora ou impedimento para emitir certidão." },
    { title: "Separe os documentos disponíveis", text: "Citação, CDA, decisões, comprovantes de bloqueio, pagamentos e parcelamentos ajudam a reconstruir a cobrança." },
    { title: "Entenda a fase e as alternativas", text: "O retorno indica o que exige atenção, quais pontos precisam ser conferidos e quais caminhos podem ser avaliados." },
  ],
  documentsTitle: "Documentos iniciais",
  documentsLead: "Use o formulário para o resumo. A orientação sobre o envio seguro dos documentos vem no retorno.",
  documents: ["citação ou intimação recebida", "CDA, se você já tiver", "número do processo", "comprovante do bloqueio", "contrato social", "notificações recebidas antes", "pagamentos ou parcelamentos", "relato do que aconteceu, em ordem"],
  faq: [
    { question: "Minha empresa recebeu uma citação. O que preciso fazer primeiro?", answer: "Guarde o documento e confirme a data do recebimento, porque a cobrança já está em um processo judicial e pode haver prazo em curso. Separe também o número do processo e a CDA, se tiver acesso a ela." },
    { question: "O que significa ter o CNPJ inscrito em dívida ativa?", answer: "Significa que uma dívida foi formalmente registrada para cobrança pelo poder público. Antes de qualquer decisão, é preciso examinar de onde ela surgiu, como foi calculada, quais valores a compõem e o que a documentação comprova." },
    { question: "O que é a CDA?", answer: "É a Certidão de Dívida Ativa, o documento usado para formalizar a dívida e permitir a cobrança judicial. Como deve indicar a origem, o valor e o fundamento da cobrança, costuma ser um dos primeiros documentos examinados." },
    { question: "Uma dívida pode levar ao bloqueio da conta da empresa?", answer: "Pode. Em uma execução fiscal, a cobrança pode alcançar contas e bens. Se o bloqueio já aconteceu, é importante localizar a decisão, o número do processo e o valor atingido para avaliar a situação com prioridade." },
    { question: "É possível negociar uma dívida ativa?", answer: "Existem programas de parcelamento e formas de regularização, mas as condições variam conforme o órgão, o tipo de dívida e a fase da cobrança. O efeito sobre um processo em curso também precisa ser verificado caso a caso." },
    { question: "Não reconheço essa dívida. O que devo verificar?", answer: "Comece pela origem: qual tributo, qual período, qual valor e quem foi apontado como responsável. Divergência de valores, cobrança já paga, período errado ou responsabilidade indevida são pontos que a conferência da documentação pode revelar." },
  ],
  contactTitle: "Conte como a cobrança apareceu e o que já afetou na empresa.",
  contactLead: "Informe se houve citação, bloqueio, penhora ou dificuldade para emitir certidão. Com esse contexto e as datas principais, já é possível indicar o que precisa ser verificado primeiro.",
};

export const empresarial: ServiceConfig = {
  slug: "direito-empresarial",
  theme: "bronze",
  eyebrow: "ADVOCACIA EMPRESARIAL",
  title: "Sua empresa cresceu. A estrutura jurídica acompanhou?",
  titleMark: "estrutura jurídica acompanhou",
  sectionMarks: {
    situations: "precisa de mais clareza agora",
    mechanism: "decisão que a empresa quer tomar",
    paths: "apoiar cada fase do negócio",
    inlineCta: "os documentos precisam acompanhar o que foi combinado",
    contact: "decisão que você precisa tomar",
  },
  inlineCtaTitle: "Se uma decisão importante está na mesa, os documentos precisam acompanhar o que foi combinado.",
  inlineCtaText: "Entrada de sócio, contrato relevante e mudança na operação pedem regras claras sobre responsabilidades, decisões e formas de saída antes da assinatura.",
  serviceName: "Direito empresarial",
  serviceDescription:
    "Orientação jurídica para empresas em crescimento, negociações contratuais, relações entre sócios, reorganização e prevenção de riscos.",
  lead:
    "À medida que o negócio cresce, decisões que antes cabiam em uma conversa passam a envolver contratos, responsabilidades, novos sócios, fornecedores e riscos maiores. O apoio jurídico ajuda a organizar essas relações sem criar burocracia desnecessária para a operação.",
  heroNote: "A empresa entende o que será feito antes do trabalho começar.",
  heroTags: ["sócios", "contrato social", "contratos", "societário", "marca"],
  primaryCta: "Quero organizar juridicamente minha empresa",
  whatsappCta: "Conversar sobre minha empresa pelo WhatsApp",
  inlineCtaLabel: "Avaliar a estrutura da minha empresa",
  finalCta: "Quero conversar sobre essa decisão",
  formArea: "Direito empresarial",
  whatsappMessage:
    "Olá, vim pelo site da Rabelo e Machado Advocacia e preciso de orientação sobre uma necessidade jurídica da empresa. Segmento: [preencher]. Assunto principal: [societário/contratos/compliance/tributário/marca/outro]. Existe prazo? [sim/não].",
  situationsTitle: "Que decisão da sua empresa precisa de mais clareza agora?",
  situationsLead:
    "Talvez exista um contrato importante na mesa, um novo sócio chegando ou uma operação maior do que os documentos feitos na abertura. Conte primeiro qual decisão a empresa precisa tomar. Os contratos e ajustes necessários vêm depois.",
  situations: [
    { icon: "users", title: "Um sócio vai entrar ou sair", text: "Participação, responsabilidades, valor das quotas e poder de decisão precisam ser combinados e registrados de forma compatível com a nova sociedade." },
    { icon: "file-warning", title: "Existe um conflito entre os sócios", text: "Divergências sobre dinheiro, gestão ou participação exigem olhar para o que foi combinado, o que ficou documentado e o que ainda pode ser negociado." },
    { icon: "file-text", title: "Há um contrato importante para negociar", text: "Obrigações, prazos, riscos e formas de encerramento precisam refletir a operação real, não apenas um modelo genérico." },
    { icon: "trending", title: "A empresa cresceu e os documentos ficaram para trás", text: "Contrato social, acordos e contratos usados no início podem já não responder ao tamanho, à equipe ou às relações comerciais de agora." },
    { icon: "shield", title: "A operação precisa de regras mais claras", text: "Responsabilidades, limites de decisão e rotinas internas podem ser organizados de forma proporcional ao tamanho e ao dia a dia da empresa." },
    { icon: "refresh", title: "O negócio está entrando em uma nova fase", text: "Separar atividades, receber investimento, trazer parceiros ou reorganizar a estrutura exige decisões jurídicas conectadas entre si." },
  ],
  mechanismEyebrow: "DA DECISÃO DE NEGÓCIO AO DOCUMENTO",
  mechanismTitle: "O documento certo depende da decisão que a empresa precisa tomar.",
  mechanismText:
    "A entrada de um sócio, por exemplo, pode exigir mudanças no contrato social e novos acordos sobre dinheiro e poder de decisão. Olhar para essas consequências em conjunto evita que um documento contradiga o outro.",
  mechanismItems: ["Objetivo da empresa", "Pessoas envolvidas", "Acordos que já existem", "Impacto da decisão"],
  pathsTitle: "O que pode ser organizado em cada fase do negócio",
  pathsLead:
    "Algumas empresas precisam resolver uma questão pontual. Outras precisam de acompanhamento conforme crescem e negociam. O formato do trabalho depende da decisão em curso e do nível de suporte que a operação exige.",
  paths: [
    { icon: "building", title: "Organizar a relação entre os sócios", text: "Contrato social, acordo entre sócios, formas de decisão, entrada, saída e reorganizações da sociedade." },
    { icon: "file-check", title: "Negociar contratos com mais segurança", text: "Elaboração e revisão de contratos com clientes, fornecedores, parceiros, prestadores e investidores." },
    { icon: "shield", title: "Criar regras que funcionem na operação", text: "Responsabilidades, limites de decisão, políticas e rotinas internas proporcionais ao porte da empresa." },
    { icon: "calculator", title: "Entender o impacto tributário das decisões", text: "Verificação dos tributos e dos riscos fiscais ligados à operação ou à mudança que a empresa está planejando." },
    { icon: "badge", title: "Proteger marca e outros ativos", text: "Organização do nome, da titularidade e dos ativos que a empresa construiu ao longo do crescimento." },
    { icon: "compass", title: "Ter apoio jurídico ao longo do crescimento", text: "Atendimento para uma decisão específica ou acompanhamento recorrente, conforme a frequência das necessidades da empresa." },
  ],
  timelineTitle: "As necessidades jurídicas mudam conforme a empresa cresce",
  timelineLead:
    "Os documentos que funcionavam na abertura podem deixar de servir quando chegam novos contratos, sócios, equipes ou unidades. Revisar a estrutura em cada mudança importante ajuda a empresa a avançar com mais previsibilidade.",
  timeline: ["Abertura da empresa", "Primeiros contratos", "Crescimento", "Entrada de sócios ou parceiros", "Reorganização", "Acompanhamento contínuo"],
  trustNote:
    "Você entende quais documentos precisam ser criados ou revistos, o que será feito pelo escritório e quais pontos ainda dependem de decisão da empresa.",
  processTitle: "Como começar a organizar essa decisão",
  process: [
    { title: "Conte o momento da empresa", text: "Descreva o que mudou, quem está envolvido e qual decisão precisa ser tomada." },
    { title: "Separe os acordos e contratos existentes", text: "Contrato social, documentos assinados e negociações em andamento ajudam a delimitar a necessidade." },
    { title: "Saiba o que será feito", text: "A empresa recebe por escrito o trabalho proposto, os limites do atendimento e os próximos passos." },
  ],
  documentsTitle: "Informações para o primeiro contato",
  documentsLead: "O material necessário varia. Comece pelo contexto; os documentos serão solicitados pelo canal adequado.",
  documents: ["o que a empresa faz", "há quanto tempo existe", "quantos sócios", "o que está acontecendo", "contrato social, se houver", "contratos envolvidos", "existe algum prazo?", "o que você espera da conversa"],
  faq: [
    { question: "Estou tendo problema com meu sócio. O que posso fazer?", answer: "Primeiro é preciso entender o que está em disputa e o que foi combinado por escrito. O contrato social e o acordo entre os sócios costumam indicar como as decisões são tomadas, como alguém pode sair e como a participação será calculada." },
    { question: "Um sócio pode sair da empresa?", answer: "Em regra sim, mas a forma, o prazo e o cálculo do valor da participação dependem do tipo de sociedade, do contrato social e de eventual acordo entre os sócios. Uma saída negociada funciona de modo diferente de uma disputa entre os sócios." },
    { question: "Precisamos atualizar o contrato social?", answer: "Vale verificar sempre que a realidade da empresa deixou de corresponder ao documento: novos sócios, mudança de atividade, alteração de participação, nova forma de decidir. Contrato desatualizado costuma aparecer justamente no momento do conflito." },
    { question: "Vale a pena fazer um acordo entre os sócios?", answer: "O acordo de sócios trata do que o contrato social normalmente não detalha: como as decisões são tomadas, o que cada um faz e o que acontece se alguém quiser sair, vender a participação ou trazer um investidor. Essas regras podem ser combinadas com antecedência, antes que surja um conflito." },
    { question: "Meu cliente descumpriu um contrato. O que devo analisar?", answer: "Comece pelo que o contrato prevê para a obrigação descumprida, o prazo, a multa, a notificação e o encerramento. Depois, reúna mensagens, e-mails e comprovantes. Esses elementos ajudam a avaliar se é melhor cobrar, renegociar ou encerrar a relação." },
    { question: "O atendimento é só para empresas grandes?", answer: "Não. O que define o formato do trabalho é a necessidade, os documentos existentes e o momento da empresa, não o porte." },
  ],
  contactTitle: "Conte o momento da empresa e a decisão que você precisa tomar.",
  contactLead: "Não é necessário saber se o assunto é societário, contratual ou de regras internas. Descreva o objetivo e o contexto, e o escritório indica o que precisa ser analisado primeiro.",
};

