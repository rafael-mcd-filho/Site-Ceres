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
  title: "Uma decisão no concurso mudou o caminho que você vinha construindo?",
  titleMark: "mudou o caminho",
  inlineCtaTitle: "Cada fase do concurso tem seu próprio prazo.",
  inlineCtaText: "Com o edital, a decisão que gerou o problema e a data em que você soube dela, já é possível dizer o que ainda pode ser feito.",
  serviceName: "Advocacia em concursos públicos",
  serviceDescription:
    "Análise de edital, decisões da banca, eliminação, TAF, avaliação médica, cotas, investigação social, convocação e nomeação.",
  lead:
    "Eliminação, nota, TAF, avaliação médica, heteroidentificação, investigação social ou nomeação: a leitura começa pelo que o edital previa, pelo que a banca decidiu e pela data em que você soube.",
  heroNote: "Análise responsável, sem promessa de resultado.",
  heroTags: ["edital", "eliminação", "TAF", "cotas", "nomeação"],
  primaryCta: "Contar o que aconteceu no concurso",
  formArea: "Concursos públicos",
  whatsappMessage:
    "Olá, gostaria de apresentar uma situação relacionada a concurso público. Concurso/cargo: [preencher]. Banca: [preencher]. Etapa: [preencher]. Data do ato ou resultado: [preencher].",
  situationsTitle: "Em qual dessas situações você está?",
  situationsLead:
    "O ponto de partida não é uma resposta pronta. É comparar o que o edital previa com o que de fato aconteceu — e saber em que fase do concurso você está agora.",
  situations: [
    { icon: "file-warning", title: "Eliminado do concurso", text: "Resultado, motivo informado, regra do edital e data em que você soube: comparar os quatro é o ponto de partida." },
    { icon: "activity", title: "TAF e avaliação médica", text: "Critérios aplicados, registros da etapa e laudos ou documentos técnicos ajudam a delimitar o que aconteceu." },
    { icon: "users", title: "Cotas e heteroidentificação", text: "Como a banca conduziu o procedimento, o motivo apresentado e o recurso disponível entram na mesma leitura." },
    { icon: "search", title: "Investigação social", text: "A decisão, o motivo apresentado e a chance de esclarecer os fatos são analisados em conjunto." },
    { icon: "clipboard", title: "Nota ou correção contestada", text: "Espelho de correção, critérios do edital, sua resposta e o recurso já apresentado formam o núcleo da análise." },
    { icon: "badge", title: "Convocação e nomeação", text: "Classificação, número de vagas, prazo de validade e movimentação do concurso ajudam a situar a expectativa." },
  ],
  mechanismEyebrow: "ANTES DE QUALQUER PROVIDÊNCIA",
  mechanismTitle: "Edital, decisão, data e documento contam a mesma história.",
  mechanismText:
    "Isolados, esses elementos dizem pouco. Juntos, mostram se a banca seguiu a própria regra. A análise monta a linha do tempo, confere o que o edital previa e compara com a decisão que você recebeu.",
  mechanismItems: ["Regra do edital", "Decisão da banca", "Datas relevantes", "Documentos disponíveis"],
  pathsTitle: "O caminho só ganha nome depois da análise",
  pathsLead:
    "Recorrer à banca e levar o caso à Justiça não são a mesma coisa: mudam o motivo que se pode alegar, quem decide e o procedimento. Qual deles cabe — se algum couber — depende do seu caso.",
  paths: [
    { icon: "route", title: "Reconstituição do que aconteceu", text: "Fatos, fase do concurso e datas que influenciam o que ainda pode ser discutido." },
    { icon: "file-check", title: "Recurso à banca ou ao órgão", text: "Verificação do recurso, da revisão ou do pedido de reconsideração previsto no edital — o chamado recurso administrativo." },
    { icon: "landmark", title: "Quando a Justiça precisa analisar", text: "Avaliação dos requisitos, dos limites e dos documentos quando houver fundamento para uma ação judicial." },
  ],
  timelineTitle: "Prazo não é detalhe de rodapé",
  timelineLead:
    "A data da publicação, do resultado ou do dia em que você tomou conhecimento pode mudar o que ainda é possível discutir. Por isso as datas aparecem logo no primeiro contato.",
  timeline: ["Publicação do edital", "Realização da etapa", "Resultado ou decisão", "Recurso e resposta", "Situação atual"],
  trustNote:
    "O escritório reúne esses elementos, indica os caminhos que existem e explica cada termo técnico pelo significado que ele tem para quem está no meio de uma etapa decisiva.",
  processTitle: "Como a análise começa",
  process: [
    { title: "Conte o que aconteceu", text: "Informe concurso, cargo, banca, etapa e a data da decisão pelo formulário ou WhatsApp." },
    { title: "Reúna os documentos", text: "Edital, resultado, recurso já apresentado, resposta da banca e comprovantes ajudam a reconstruir o caso." },
    { title: "Receba o retorno", text: "Você fica sabendo o que o edital previa, quais prazos ainda correm e quais caminhos existem." },
  ],
  documentsTitle: "O que ajuda a iniciar a análise",
  documentsLead: "Não envie dados excessivamente sensíveis no formulário. O canal adequado para os documentos é indicado no retorno.",
  documents: ["edital e retificações", "resultado ou decisão de eliminação", "espelho de correção", "recurso apresentado", "resposta da banca", "publicações e datas", "documentos da etapa", "relato do que aconteceu, em ordem"],
  faq: [
    { question: "Fui eliminado. Ainda posso recorrer?", answer: "Depende da fase, do que o edital previa e de quando você soube da decisão. Há prazo para recorrer à própria banca e prazos diferentes para discutir o caso na Justiça. Por isso as datas são a primeira coisa pedida." },
    { question: "A banca negou meu recurso. Acabou?", answer: "Não necessariamente. A negativa é um dos elementos da análise, não o fim dela: o que se examina é o motivo apresentado pela banca e se ele se sustenta diante do edital e das normas aplicáveis." },
    { question: "A banca pode aplicar uma regra que não estava no edital?", answer: "A resposta depende do conteúdo do edital, da decisão tomada e das normas aplicáveis. A comparação entre esses elementos é um ponto central da análise." },
    { question: "Recorrer à banca e entrar na Justiça são a mesma coisa?", answer: "Não. O recurso administrativo é dirigido à própria banca ou ao órgão responsável. A ação judicial é analisada pelo Poder Judiciário, com fundamentos e procedimento próprios. Qual deles cabe depende da situação." },
    { question: "Quanto tempo eu tenho para questionar uma decisão?", answer: "Varia conforme a etapa, o que o edital estabelece e o caminho considerado — alguns prazos são de poucos dias. Informe as datas logo no primeiro contato." },
    { question: "Uma análise garante que a decisão da banca será alterada?", answer: "Não. Alterar uma decisão do concurso depende do caminho cabível, do que o edital previa e do que os documentos comprovam — e a palavra final é do órgão ou da Justiça. A análise diz se há fundamento e qual caminho seguir." },
  ],
  contactTitle: "Reúna o edital, o resultado e as datas do que aconteceu.",
  contactLead: "Com esses três em mãos, o primeiro retorno já sai com contexto.",
};

export const dividaAtiva: ServiceConfig = {
  slug: "divida-ativa-empresas",
  theme: "forest",
  eyebrow: "DÍVIDA ATIVA E EXECUÇÃO FISCAL",
  title: "Sua empresa recebeu uma cobrança, uma citação ou teve valores bloqueados?",
  titleMark: "teve valores bloqueados",
  inlineCtaTitle: "A cobrança continua andando enquanto ninguém lê os documentos.",
  inlineCtaText: "De onde surgiu a dívida, o que o documento de cobrança diz e em que fase o processo está: cada um desses pontos muda os caminhos disponíveis para a sua empresa.",
  serviceName: "Dívida ativa e execução fiscal para empresas",
  serviceDescription:
    "Exame de inscrições em dívida ativa, CDA, citações, bloqueios, penhoras e demais atos da cobrança fiscal da empresa.",
  lead:
    "Antes de decidir o que fazer, é preciso saber de onde surgiu a dívida, em que fase a cobrança está — inscrição em dívida ativa ou execução fiscal já em curso — e quais prazos começaram a correr.",
  heroNote: "Atuação voltada ao contexto empresarial.",
  heroTags: ["dívida ativa", "citação", "CDA", "bloqueio", "penhora"],
  primaryCta: "Enviar os documentos da cobrança",
  formArea: "Dívida ativa e execução fiscal",
  whatsappMessage:
    "Olá, gostaria de apresentar uma situação de dívida ativa ou execução fiscal da empresa. Órgão responsável: [preencher]. Existe processo/citação? [sim/não]. Houve bloqueio ou penhora? [sim/não].",
  situationsTitle: "Em que momento a sua empresa está?",
  situationsLead:
    "A mesma dívida pode aparecer em fases muito diferentes. Reconhecer o momento evita tratar inscrição, citação e bloqueio como se fossem a mesma coisa.",
  situations: [
    { icon: "file-warning", title: "Descobri uma dívida no CNPJ", text: "Inscrição em dívida ativa que apareceu em consulta ou certidão. É preciso identificar de onde ela surgiu, quem responde por ela e quais valores a compõem." },
    { icon: "mail-warning", title: "A empresa foi citada", text: "O documento recebido, a data e o número do processo mostram em que fase a cobrança está e quais prazos já começaram." },
    { icon: "lock", title: "Bloquearam a conta da empresa", text: "A decisão que determinou o bloqueio e o processo em que ela foi tomada precisam ser lidos juntos." },
    { icon: "boxes", title: "Penhora de bens", text: "Qual bem foi atingido, como foi avaliado, em que ordem os atos ocorreram e como está a empresa hoje." },
    { icon: "receipt", title: "Parcelamento em andamento", text: "Programa aderido, condições, pagamentos feitos e o efeito disso sobre o processo precisam ser conferidos." },
    { icon: "file-check", title: "Não consigo tirar certidão", text: "Pendências que travam a regularidade fiscal exigem verificar a origem e a situação atual de cada cobrança." },
  ],
  mechanismEyebrow: "DA ORIGEM À SITUAÇÃO ATUAL",
  mechanismTitle: "A cobrança é um percurso, não um documento isolado.",
  mechanismText:
    "A dívida nasce em algum lugar, é registrada para cobrança e, em parte dos casos, vira processo judicial. Saber em que ponto desse percurso a empresa está é o que separa o que se resolve por negociação do que precisa ser discutido no processo.",
  mechanismNote:
    "Em cobrança fiscal, urgência e precipitação são coisas diferentes. O primeiro passo é entender o que já aconteceu, o que está documentado e qual decisão precisa ser tomada agora.",
  // Sem `mechanismItems`: a cronologia abaixo já é o diagnóstico desta página,
  // e os quatro itens genéricos apenas repetiam as seis etapas com outras palavras.
  pathsTitle: "Os caminhos dependem do que os documentos mostram",
  pathsLead:
    "Parcelar, oferecer garantia, contestar administrativamente ou discutir no processo não são respostas automáticas. Cada alternativa tem requisito e consequência próprios.",
  paths: [
    { icon: "search", title: "Conferência da cobrança", text: "De onde surgiu a dívida, como foi calculada, quem responde por ela e o que diz o documento que a formaliza — a CDA." },
    { icon: "handshake", title: "Regularização e negociação", text: "Programas e parcelamentos disponíveis, o que a empresa consegue suportar e o efeito de cada opção sobre a cobrança." },
    { icon: "shield", title: "Análise do processo", text: "Fase, citação, garantias, bloqueios, prazos e pontos que possam ser questionados judicialmente." },
  ],
  timelineTitle: "Cada novo ato muda a posição da empresa",
  timelineLead:
    "Guardar as citações, as decisões, os comprovantes de bloqueio e as datas é o que permite reconstruir a cobrança com precisão depois.",
  timeline: ["Surgimento da dívida", "Inscrição em dívida ativa", "Emissão da CDA", "Citação da empresa", "Bloqueio ou penhora", "Situação atual"],
  trustNote:
    "O escritório reconstrói a linha do tempo da cobrança, confere os documentos que sustentam a dívida e identifica em que fase a empresa está antes de indicar qualquer providência.",
  processTitle: "Como a cobrança é destrinchada",
  process: [
    { title: "Envie as informações", text: "Órgão que cobra, tributo, valor, número do processo, datas e situação atual pelo formulário ou WhatsApp." },
    { title: "Reúna os documentos", text: "Citação, CDA, decisões, comprovantes de bloqueio, pagamentos e documentos da empresa." },
    { title: "Receba o retorno", text: "Você fica sabendo em que fase a cobrança está, o que pode ser questionado e quais alternativas existem." },
  ],
  documentsTitle: "Documentos iniciais",
  documentsLead: "Use o formulário para o resumo. A orientação sobre o envio seguro dos documentos vem no retorno.",
  documents: ["citação ou intimação recebida", "CDA, se você já tiver", "número do processo", "comprovante do bloqueio", "contrato social", "notificações recebidas antes", "pagamentos ou parcelamentos", "relato do que aconteceu, em ordem"],
  faq: [
    { question: "Minha empresa foi citada em execução fiscal. O que isso significa?", answer: "Significa que a cobrança deixou de ser administrativa e virou processo judicial, com prazos correndo a partir da citação. Separe o documento recebido, a data, o número do processo e a CDA, se você já tiver." },
    { question: "O que significa ter o CNPJ inscrito em dívida ativa?", answer: "Significa que uma dívida foi formalmente registrada para cobrança pelo poder público. Antes de qualquer decisão, é preciso examinar de onde ela surgiu, como foi calculada, quais valores a compõem e o que a documentação comprova." },
    { question: "O que é a CDA?", answer: "É a Certidão de Dívida Ativa, o documento que formaliza a dívida e permite a cobrança judicial. Ela precisa indicar a origem, o valor e o fundamento da cobrança — e é justamente por isso que costuma ser o primeiro documento examinado." },
    { question: "Uma dívida pode levar ao bloqueio da conta da empresa?", answer: "Pode. Na execução fiscal existem medidas que alcançam contas e bens, observadas as regras processuais. Se o bloqueio já ocorreu, a decisão que o determinou e o processo em que ela foi tomada podem ser examinados." },
    { question: "É possível negociar uma dívida ativa?", answer: "Existem programas de parcelamento e formas de regularização, mas as condições variam conforme o órgão, o tipo de dívida e a fase da cobrança. O efeito sobre um processo em curso também precisa ser verificado caso a caso." },
    { question: "Não reconheço essa dívida. O que devo verificar?", answer: "Comece pela origem: qual tributo, qual período, qual valor e quem foi apontado como responsável. Divergência de valores, cobrança já paga, período errado ou responsabilidade indevida são pontos que a conferência da documentação pode revelar." },
  ],
  contactTitle: "Comece pelos documentos e pelas datas da cobrança.",
  contactLead: "Com esses elementos já é possível situar a empresa dentro da cobrança e começar a análise com base real.",
};

export const empresarial: ServiceConfig = {
  slug: "direito-empresarial",
  theme: "bronze",
  eyebrow: "ADVOCACIA EMPRESARIAL",
  title: "Sua empresa mudou. Os contratos e o acordo entre os sócios acompanharam?",
  titleMark: "o acordo entre os sócios",
  inlineCtaTitle: "Contrato desatualizado só aparece na hora do problema.",
  inlineCtaText: "Contrato social, acordo entre sócios e contratos-padrão podem ser revistos enquanto ainda existe acordo. Depois do conflito, a margem é menor.",
  serviceName: "Direito empresarial",
  serviceDescription:
    "Atuação consultiva em relações societárias, contratos, compliance, questões tributárias e proteção de marca.",
  lead:
    "Entrada ou saída de sócio, conflito na sociedade, contrato importante para assinar ou revisar, crescimento que passou a exigir novas regras. A conversa começa por essas situações — o nome jurídico vem depois.",
  heroNote: "Atuação consultiva para empresas e sócios.",
  heroTags: ["sócios", "contrato social", "contratos", "societário", "marca"],
  primaryCta: "Contar a situação da minha empresa",
  formArea: "Direito empresarial",
  whatsappMessage:
    "Olá, gostaria de conversar sobre uma necessidade jurídica da empresa. Segmento: [preencher]. Assunto principal: [societário/contratos/compliance/tributário/marca/outro]. Existe prazo? [sim/não].",
  situationsTitle: "Alguma dessas situações está acontecendo agora?",
  situationsLead:
    "Nem toda demanda chega com um nome jurídico pronto. Na maior parte das vezes ela aparece como uma decisão a tomar, um ruído entre sócios ou uma operação que cresceu sem que ninguém revisse a base.",
  situations: [
    { icon: "users", title: "Entrada ou saída de sócio", text: "Quem entra, quem sai, com qual participação e respondendo por quê. É o contrato social e o acordo entre os sócios que registram isso." },
    { icon: "file-warning", title: "Conflito entre sócios", text: "Divergência sobre dinheiro, gestão, decisões ou participação. O que ficou combinado por escrito define boa parte do que pode ser feito." },
    { icon: "file-text", title: "Contratos importantes", text: "Cliente, fornecedor, parceiro, prestador ou investidor: obrigações, prazos, riscos e forma de encerrar precisam refletir a operação real." },
    { icon: "trending", title: "A empresa cresceu", text: "Documentos feitos na abertura costumam não responder ao tamanho de agora. Contrato social e contratos-padrão envelhecem junto com o negócio." },
    { icon: "shield", title: "Regras e controles internos", text: "Políticas, alçadas de decisão e rotinas que precisem caber no dia a dia da empresa — o que o mercado chama de compliance." },
    { icon: "refresh", title: "Reorganização do negócio", text: "Mudança de estrutura, separação de atividades, novos parceiros ou nova fase pedem uma leitura jurídica conjunta." },
  ],
  mechanismEyebrow: "LEITURA DO NEGÓCIO",
  mechanismTitle: "A categoria jurídica importa. A situação da empresa vem primeiro.",
  mechanismText:
    "Você percebe que algo precisa mudar bem antes de saber se isso é assunto de direito societário, de contrato, de regras internas, de tributos ou de marca. A conversa inicial organiza esses sinais e define o que é prioridade.",
  mechanismItems: ["O que está acontecendo", "Quem está envolvido", "Documentos que já existem", "Decisão a tomar"],
  pathsTitle: "O nome jurídico de cada situação",
  pathsLead:
    "Aqui os assuntos aparecem com o nome que o Direito usa. Na prática eles chegam misturados: um problema entre sócios quase sempre envolve contrato, e uma decisão de crescimento quase sempre envolve tributos.",
  paths: [
    { icon: "building", title: "Sócios e contrato social", text: "Estrutura da sociedade, acordo entre sócios, decisões, entrada e saída e reorganizações — o que o Direito chama de societário." },
    { icon: "file-check", title: "Contratos", text: "Elaboração, revisão e negociação dos contratos que sustentam a operação com clientes, fornecedores e parceiros." },
    { icon: "shield", title: "Regras e controles internos", text: "Políticas, alçadas, responsabilidades e prevenção proporcionais ao tamanho da empresa — compliance e rotinas." },
    { icon: "calculator", title: "Questões tributárias", text: "Leitura jurídica das decisões e dos riscos fiscais da operação, sem promessa de economia ou de resultado." },
    { icon: "badge", title: "Marca e ativos", text: "Proteção do nome, coerência entre quem usa e quem é titular, e organização dos ativos da empresa." },
    { icon: "compass", title: "Apoio continuado", text: "Demandas pontuais ou acompanhamento recorrente, conforme a necessidade e o que ficar combinado por escrito." },
  ],
  timelineTitle: "Decisões jurídicas acompanham o ciclo da empresa",
  timelineLead:
    "O contrato social e os contratos feitos no começo costumam não responder ao crescimento, à entrada de novos sócios ou à mudança da operação.",
  timeline: ["Abertura da empresa", "Primeiros contratos", "Crescimento", "Entrada de sócios ou parceiros", "Reorganização", "Acompanhamento contínuo"],
  trustNote:
    "O papel do escritório é transformar assunto complicado em alternativas que o sócio entenda, com o trabalho e seus limites definidos por escrito antes de começar.",
  processTitle: "Como começa a conversa",
  process: [
    { title: "Conte a situação", text: "A empresa descreve o que está acontecendo, quem está envolvido e a decisão que precisa tomar." },
    { title: "Reúna o que já existe", text: "Contrato social, contratos assinados, prazos e o impacto disso na operação ajudam a delimitar a necessidade." },
    { title: "Receba a proposta de trabalho", text: "O que é possível fazer, até onde vai e quais são os próximos passos, por escrito, para a empresa decidir." },
  ],
  documentsTitle: "Informações para o primeiro contato",
  documentsLead: "O material necessário varia. Comece pelo contexto; os documentos serão solicitados pelo canal adequado.",
  documents: ["o que a empresa faz", "há quanto tempo existe", "quantos sócios", "o que está acontecendo", "contrato social, se houver", "contratos envolvidos", "existe algum prazo?", "o que você espera da conversa"],
  faq: [
    { question: "Estou tendo problema com meu sócio. O que posso fazer?", answer: "Depende do que está em disputa e do que foi combinado por escrito. Contrato social e acordo de sócios definem como as decisões são tomadas, como se apura o valor da participação e o que acontece em caso de saída. A leitura desses documentos é o ponto de partida." },
    { question: "Um sócio pode sair da empresa?", answer: "Em regra sim, mas a forma, o prazo e a apuração dos valores dependem do tipo de sociedade, do contrato social e de eventual acordo entre os sócios. Saída negociada e saída litigiosa seguem caminhos bem diferentes." },
    { question: "Precisamos atualizar o contrato social?", answer: "Vale verificar sempre que a realidade da empresa deixou de corresponder ao documento: novos sócios, mudança de atividade, alteração de participação, nova forma de decidir. Contrato desatualizado costuma aparecer justamente no momento do conflito." },
    { question: "Vale a pena fazer um acordo entre os sócios?", answer: "O acordo de sócios trata do que o contrato social normalmente não detalha: como as decisões são tomadas, o que cada um faz, o que acontece se alguém quiser sair, vender a participação ou trazer um investidor. Ele é escrito enquanto existe acordo, para funcionar quando não houver." },
    { question: "Meu cliente descumpriu um contrato. O que devo analisar?", answer: "Primeiro o que o próprio contrato prevê para essa situação: obrigação descumprida, prazo, multa, forma de notificar e de encerrar. Depois, o que ficou registrado — mensagens, e-mails, comprovantes. Essa leitura é o que define se cabe cobrança, renegociação ou medida judicial." },
    { question: "O atendimento é só para empresas grandes?", answer: "Não. O que define o formato do trabalho é a necessidade, os documentos existentes e o momento da empresa, não o porte." },
  ],
  contactTitle: "Conte o que está acontecendo e qual decisão precisa ser tomada.",
  contactLead: "Com isso já é possível dizer qual assunto está envolvido e o que precisa ser lido primeiro.",
};

