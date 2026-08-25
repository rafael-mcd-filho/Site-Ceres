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
  inlineCtaTitle: "Deixar o registro para depois aumenta o risco.",
  inlineCtaText:
    "Em regra, a proteção da marca está ligada ao registro no INPI, e não ao tempo de uso. Adiar o pedido abre espaço para conflito com quem pedir antes.",
  lead:
    "Em regra, é o registro no INPI que garante a proteção — não o tempo de uso. Antes de pedir, uma pesquisa mostra se já existe marca parecida capaz de barrar a sua.",
  heroNote: "Atuação em propriedade industrial, sem promessa de concessão.",
  heroTags: ["INPI", "pesquisa prévia", "classe de Nice", "oposição", "exigência"],
  primaryCta: "Avaliar a marca da minha empresa",
  formArea: "Registro de marca",
  whatsappMessage:
    "Olá, gostaria de conversar sobre registro de marca. Nome pretendido: [preencher]. Ramo de atividade: [preencher]. A marca já é usada? [sim/não]. Já houve tentativa de registro? [sim/não].",
  situationsTitle: "Quando o registro deixa de ser opcional",
  situationsLead:
    "A marca costuma virar prioridade quando algo acontece: um terceiro aparece com nome parecido, um contrato exige comprovação ou o negócio começa a crescer.",
  situations: [
    { icon: "rocket", title: "Vou lançar uma marca", text: "Nome escolhido, mas ainda sem ninguém ter verificado se ele está disponível para registro." },
    { icon: "trending", title: "Uso o nome há anos e nunca registrei", text: "Operação consolidada apoiada em um nome que ninguém protegeu formalmente." },
    { icon: "users", title: "Apareceu uma empresa com nome parecido", text: "Concorrente usando nome semelhante no mesmo ramo ou em ramo próximo ao seu." },
    { icon: "file-warning", title: "O INPI pediu alguma coisa", text: "Pedido em andamento que recebeu uma exigência do INPI e tem prazo correndo para resposta." },
    { icon: "shield", title: "Contestaram meu pedido", text: "Titular de marca anterior apresentou contestação ao seu pedido — a chamada oposição." },
    { icon: "briefcase", title: "Pediram comprovação da marca", text: "Plataforma, investidor ou parceiro que exige a prova de que a marca é sua." },
  ],
  mechanismEyebrow: "ANTES DE PEDIR O REGISTRO",
  mechanismTitle: "A pesquisa antes do pedido evita gastar tempo com um caminho fechado.",
  mechanismText:
    "Antes de protocolar, a pesquisa na base do INPI verifica se já existe marca igual ou parecida no ramo pretendido. É essa leitura que mostra o risco de o pedido ser negado e orienta ajustes no nome ou no ramo escolhido.",
  mechanismNote:
    "Escolher a classe e a forma de apresentação da marca não é burocracia: é isso que define o alcance da proteção e o que você poderá exigir de terceiros depois.",
  // "Busca na base do INPI" e não "Pesquisa de marcas anteriores": a cronologia
  // usa essa frase para nomear a etapa, e as duas listas agora dividem a mesma seção.
  mechanismItems: ["Busca na base do INPI", "Definição do ramo", "Risco de semelhança", "Estratégia do pedido"],
  pathsTitle: "O que compõe o trabalho",
  pathsLead:
    "Registrar não é apenas protocolar. Ramo errado, descrição imprecisa ou prazo perdido comprometem o pedido depois que ele já começou.",
  paths: [
    { icon: "search", title: "Pesquisa antes de pedir", text: "Consulta à base do INPI, comparação com marcas parecidas e leitura do risco antes de protocolar." },
    { icon: "file-check", title: "Pedido de registro no INPI", text: "Escolha da classe de Nice, descrição dos produtos ou serviços e protocolo do pedido." },
    { icon: "shield", title: "Acompanhamento", text: "Resposta às exigências do INPI, manifestação nas contestações e acompanhamento até a decisão." },
    { icon: "badge", title: "Manutenção", text: "Prazos de renovação e monitoramento de pedidos de terceiros com nome semelhante ao seu." },
    { icon: "landmark", title: "Conflitos", text: "Discussão sobre uso indevido, semelhança entre marcas e convivência entre nomes parecidos." },
    { icon: "boxes", title: "Várias marcas", text: "Organização de mais de uma marca, classes e titularidade dentro do mesmo grupo." },
  ],
  timelineTitle: "O processo tem etapas com prazo próprio",
  timelineLead:
    "Entre o pedido e a decisão existe um percurso com janelas específicas. Perder uma delas pode encerrar o processo, mesmo que a marca estivesse livre.",
  timeline: ["Pesquisa de marcas anteriores", "Pedido de registro", "Conferência inicial", "Publicação e prazo de contestação", "Análise pelo INPI", "Decisão"],
  trustNote:
    "O escritório conecta essa decisão técnica ao momento real da empresa, cuidando da pesquisa, do pedido e do acompanhamento até a decisão do INPI.",
  processTitle: "Como começa",
  process: [
    { title: "Contexto da marca", text: "Nome pretendido, ramo de atividade, forma de uso e se a marca já está em operação." },
    { title: "Pesquisa e leitura", text: "Consulta à base do INPI e avaliação do risco de haver marca parecida no ramo pretendido." },
    { title: "Estratégia e pedido", text: "Definição da classe, redação da descrição e os próximos passos para a empresa decidir." },
  ],
  documentsTitle: "Informações para o primeiro contato",
  documentsLead: "Comece pelo nome e pelo ramo. Documentos são solicitados pelo canal adequado no retorno.",
  documents: ["nome exato pretendido", "ramo de atividade", "produtos ou serviços oferecidos", "logo ou forma de apresentação", "tempo de uso, se houver", "dados da empresa ou do titular", "registros anteriores, se houver", "onde a marca é usada"],
  faq: [
    { question: "Uso esse nome há anos. Isso significa que a marca é minha?", answer: "Em regra, não. No Brasil é o registro no INPI que garante o direito sobre a marca. O uso anterior pode ser relevante em situações específicas, mas não substitui o registro." },
    { question: "Registrar a empresa na Junta Comercial protege a marca?", answer: "Não. Registrar o nome da empresa e registrar a marca são coisas diferentes, feitas em órgãos diferentes e com efeitos diferentes." },
    { question: "Posso registrar uma marca se já existe outra parecida?", answer: "Depende de quão parecidos são os nomes e de os ramos de atividade serem próximos ou não. Marcas semelhantes chegam a conviver quando atuam em setores sem relação entre si. É justamente isso que a pesquisa prévia avalia." },
    { question: "O que é a classe de Nice?", answer: "É a classificação internacional que organiza produtos e serviços em categorias. A marca é protegida dentro da classe pedida, e não para todo e qualquer uso — por isso escolher a classe certa importa tanto." },
    { question: "O que acontece se outra empresa contestar meu pedido?", answer: "Essa contestação se chama oposição e tem prazo para ser respondida. A manifestação apresentada e os documentos que comprovam o seu uso passam a integrar a análise do INPI." },
    { question: "Quanto tempo leva o processo?", answer: "O prazo depende do fluxo do INPI, de eventuais exigências e de eventual contestação de terceiros. Não é adequado prometer prazo de conclusão nem garantir que o registro será concedido." },
  ],
  contactTitle: "Comece pelo nome pretendido e pelo ramo de atividade.",
  contactLead: "Esses dois elementos já permitem orientar a pesquisa de marcas anteriores e a escolha da classe.",
};
