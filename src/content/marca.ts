import type { ServiceConfig } from "@/content/services";

/**
 * Registro de marca. Sem valores de taxa nem de honorário: o Provimento
 * 205/2021 veda divulgação de preço (Art. 3º, I), e prazo do INPI muda.
 */
export const registroDeMarca: ServiceConfig = {
  slug: "registro-de-marca",
  theme: "bronze",
  eyebrow: "REGISTRO DE MARCA E PROPRIEDADE INDUSTRIAL",
  title: "Usar um nome há anos não é o mesmo que ter direito sobre ele.",
  titleMark: "não é o mesmo que ter direito",
  serviceName: "Registro de marca",
  serviceDescription:
    "Busca de anterioridade, definição de classe, depósito no INPI, acompanhamento de exigências e oposições até a decisão.",
  inlineCtaTitle: "No INPI, a regra é quem chega antes.",
  inlineCtaText:
    "O sistema brasileiro é atributivo: o direito nasce do registro, não do tempo de uso. Quem deposita primeiro tem prioridade.",
  lead:
    "O direito sobre a marca nasce do registro no INPI, não do uso. Antes de depositar, é a busca de anterioridade que mostra se o caminho está livre.",
  heroNote: "Atuação em propriedade industrial, sem promessa de concessão.",
  heroTags: ["INPI", "anterioridade", "classe de Nice", "oposição", "exigência"],
  primaryCta: "Avaliar a marca da minha empresa",
  formArea: "Registro de marca",
  whatsappMessage:
    "Olá, gostaria de conversar sobre registro de marca. Nome pretendido: [preencher]. Ramo de atividade: [preencher]. A marca já é usada? [sim/não]. Já houve tentativa de registro? [sim/não].",
  situationsTitle: "Quando o registro deixa de ser opcional",
  situationsLead:
    "A marca costuma virar prioridade quando algo acontece: um terceiro aparece com nome parecido, um contrato exige comprovação ou o negócio começa a crescer.",
  situations: [
    { icon: "rocket", title: "Marca nova", text: "Nome escolhido, mas ainda sem verificação de que está disponível para registro." },
    { icon: "trending", title: "Marca em uso sem registro", text: "Operação consolidada apoiada em um nome que ninguém protegeu formalmente." },
    { icon: "users", title: "Terceiro com nome parecido", text: "Concorrente usando sinal semelhante no mesmo segmento ou em segmento próximo." },
    { icon: "file-warning", title: "Exigência do INPI", text: "Processo em andamento que recebeu exigência e corre prazo para resposta técnica." },
    { icon: "shield", title: "Oposição de terceiro", text: "Pedido publicado que sofreu oposição de titular de marca anterior." },
    { icon: "briefcase", title: "Exigência contratual", text: "Marketplace, investidor ou parceiro que pede comprovação de titularidade." },
  ],
  mechanismEyebrow: "ANTES DE DEPOSITAR",
  mechanismTitle: "A busca de anterioridade evita gastar prazo com um caminho fechado.",
  mechanismText:
    "Antes do depósito, a pesquisa na base do INPI verifica se já existe sinal idêntico ou semelhante nas classes pretendidas. É essa leitura que indica o risco de indeferimento e orienta ajustes de nome ou de classe.",
  mechanismItems: ["Busca de anterioridade", "Definição da classe", "Análise de colidência", "Estratégia de depósito"],
  pathsTitle: "O que compõe o trabalho",
  pathsLead:
    "Registrar não é apenas protocolar. Classe errada, descrição imprecisa ou prazo perdido comprometem o pedido depois de ele já ter começado.",
  paths: [
    { icon: "search", title: "Busca e viabilidade", text: "Pesquisa na base do INPI, análise de colidência e leitura do risco antes do depósito." },
    { icon: "file-check", title: "Depósito", text: "Definição da classe de Nice, especificação dos produtos ou serviços e protocolo do pedido." },
    { icon: "shield", title: "Acompanhamento", text: "Resposta a exigências, manifestação em oposições e acompanhamento até a decisão." },
    { icon: "badge", title: "Manutenção", text: "Prazos de prorrogação e vigilância sobre pedidos de terceiros com sinal semelhante." },
    { icon: "landmark", title: "Conflitos", text: "Discussão sobre uso indevido, colidência e convivência entre sinais." },
    { icon: "boxes", title: "Portfólio", text: "Organização de várias marcas, classes e titularidades dentro do mesmo grupo." },
  ],
  timelineTitle: "O processo tem etapas com prazo próprio",
  timelineLead:
    "Entre o depósito e a decisão existe um percurso com janelas específicas. Perder uma delas pode encerrar o pedido, mesmo que a marca esteja livre.",
  timeline: ["Busca de anterioridade", "Depósito", "Exame formal", "Publicação e prazo de oposição", "Exame de mérito", "Decisão"],
  authorityTitle: "Propriedade industrial tratada como decisão de negócio.",
  authorityText: [
    "A escolha da classe e da forma de apresentação da marca não é burocracia: define o alcance da proteção e o que poderá ser oposto a terceiros depois.",
    "Ceres Rabelo reúne advocacia, docência e pesquisa para conectar essa decisão técnica ao momento real da empresa.",
  ],
  processTitle: "Como começa",
  process: [
    { title: "Contexto da marca", text: "Nome pretendido, ramo de atividade, forma de uso e se já existe operação." },
    { title: "Busca e leitura", text: "Pesquisa na base do INPI e análise do risco de colidência nas classes pertinentes." },
    { title: "Estratégia e depósito", text: "Definição de classe, especificação e próximos passos delimitados para decisão da empresa." },
  ],
  documentsTitle: "Informações para o primeiro contato",
  documentsLead: "Comece pelo nome e pelo ramo. Documentos são solicitados pelo canal adequado no retorno.",
  documents: ["nome exato pretendido", "ramo de atividade", "produtos ou serviços oferecidos", "logo ou forma de apresentação", "tempo de uso, se houver", "dados da empresa ou do titular", "registros anteriores, se houver", "abrangência geográfica pretendida"],
  faq: [
    { question: "Já uso o nome há anos. Isso me garante o direito?", answer: "No Brasil o sistema é atributivo: o direito sobre a marca decorre do registro no INPI. O uso anterior pode ser relevante em situações específicas, mas não substitui o registro." },
    { question: "Registrar a empresa na Junta Comercial protege a marca?", answer: "Não. O registro do nome empresarial e o registro de marca são atos distintos, com órgãos, efeitos e abrangências diferentes." },
    { question: "O que é a classe de Nice?", answer: "É a classificação internacional que organiza produtos e serviços em categorias. A proteção da marca é concedida dentro da classe pedida, e não para todo e qualquer uso." },
    { question: "A busca de anterioridade garante que o registro sai?", answer: "Não. Ela reduz o risco de surpresa ao apontar sinais idênticos ou semelhantes já existentes, mas a decisão final é do INPI, que faz o próprio exame." },
    { question: "Quanto tempo leva o processo?", answer: "O prazo depende do fluxo do INPI, da existência de exigências e de eventual oposição. Não é adequado prometer prazo de conclusão." },
    { question: "Alguém depositou uma marca parecida com a minha. O que fazer?", answer: "Existe um prazo de oposição contado da publicação do pedido, além de outras providências posteriores. A pertinência de cada uma depende da data e do caso concreto." },
  ],
  contactTitle: "Comece pelo nome pretendido e pelo ramo de atividade.",
  contactLead: "Esses dois elementos já permitem orientar a busca de anterioridade e a escolha da classe.",
};
