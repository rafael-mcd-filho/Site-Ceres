import type { ServiceConfig } from "@/content/services";

/**
 * Registro de marca. Sem valores de taxa nem de honorário: o Provimento
 * 205/2021 veda divulgação de preço (Art. 3º, I), e prazo do INPI muda.
 */
export const registroDeMarca: ServiceConfig = {
  slug: "registro-de-marca",
  theme: "bronze",
  eyebrow: "REGISTRO DE MARCA E PROPRIEDADE INDUSTRIAL",
  title: "O nome que sua empresa construiu está protegido?",
  titleMark: "está protegido",
  sectionMarks: {
    situations: "criando, usando ou defendendo uma marca",
    mechanism: "verificar se o nome pode ser registrado",
    paths: "acompanhar o pedido até a decisão",
    inlineCta: "verifique se o nome pode ser registrado",
    contact: "qual nome você quer proteger",
  },
  serviceName: "Registro de marca",
  serviceDescription:
    "Orientação para empresas e empreendedores na pesquisa, no pedido e no acompanhamento do registro de marca no INPI.",
  inlineCtaTitle: "Antes de investir mais na marca, verifique se o nome pode ser registrado.",
  inlineCtaText:
    "Fachada, embalagens, campanhas e presença digital aumentam o investimento ligado ao nome. Uma pesquisa prévia mostra marcas parecidas e ajuda a decidir se o pedido deve seguir como está.",
  lead:
    "Você pode levar anos para construir um nome que clientes associam ao seu trabalho. O registro no INPI é o caminho para proteger juridicamente esse nome. Antes do pedido, uma pesquisa ajuda a identificar marcas parecidas e o risco de continuar investindo em um nome que talvez não possa ser registrado.",
  heroNote: "Pesquisa, pedido e acompanhamento são etapas diferentes do registro.",
  heroTags: ["INPI", "pesquisa prévia", "classe de Nice", "oposição", "exigência"],
  primaryCta: "Quero verificar minha marca",
  whatsappCta: "Conversar sobre minha marca pelo WhatsApp",
  inlineCtaLabel: "Verificar o nome da minha marca",
  finalCta: "Quero começar a proteger minha marca",
  formArea: "Registro de marca",
  whatsappMessage:
    "Olá, vim pelo site da Rabelo e Machado Advocacia e preciso de orientação sobre registro de marca. Nome pretendido: [preencher]. Ramo de atividade: [preencher]. A marca já é usada? [sim/não]. Já houve tentativa de registro? [sim/não].",
  situationsTitle: "Se você está criando, usando ou defendendo uma marca, comece por aqui",
  situationsLead:
    "Algumas pessoas procuram o registro antes de lançar o negócio. Outras chegam depois de anos de uso, quando um concorrente aparece ou alguém pede prova de titularidade. O momento muda, mas a proteção começa por entender como esse nome já é usado.",
  situations: [
    { icon: "rocket", title: "Vou lançar uma marca", text: "Você escolheu o nome e pretende investir em identidade, divulgação ou produtos. Antes, precisa saber se esse nome pode ser registrado." },
    { icon: "trending", title: "Uso o nome há anos, mas nunca registrei", text: "A empresa já conquistou clientes e reconhecimento, porém o nome ainda não tem a proteção formal do INPI." },
    { icon: "users", title: "Apareceu uma empresa com nome parecido", text: "Um concorrente começou a usar um nome semelhante e você quer entender quem tem direito e quais medidas podem ser avaliadas." },
    { icon: "file-warning", title: "O INPI fez uma exigência", text: "Seu pedido está em andamento e recebeu uma solicitação que precisa ser compreendida e respondida dentro do prazo." },
    { icon: "shield", title: "Outra empresa contestou meu pedido", text: "O titular de uma marca anterior apresentou uma oposição. Agora é preciso analisar a semelhança, os ramos e os documentos disponíveis." },
    { icon: "briefcase", title: "Pediram prova de que a marca é minha", text: "Uma plataforma, parceiro ou investidor quer comprovação de titularidade, mas o registro ainda não existe ou está em andamento." },
  ],
  mechanismEyebrow: "ANTES DE FAZER O PEDIDO",
  mechanismTitle: "Antes de fazer o pedido, vale verificar se o nome pode ser registrado.",
  mechanismText:
    "A pesquisa na base do INPI procura marcas iguais ou parecidas nos ramos relacionados ao seu negócio. O resultado não garante a concessão, mas ajuda a medir o risco e a decidir se faz sentido manter, ajustar ou repensar o nome antes de investir no pedido.",
  mechanismNote:
    "A classe e a descrição dos produtos ou serviços definem onde a marca será protegida. Uma escolha genérica ou inadequada pode deixar de fora justamente a atividade que sustenta o negócio.",
  // "Busca na base do INPI" e não "Pesquisa de marcas anteriores": a cronologia
  // usa essa frase para nomear a etapa, e as duas listas agora dividem a mesma seção.
  mechanismItems: ["Nome que será usado", "Ramo de atividade", "Marcas parecidas", "Forma de apresentar o pedido"],
  pathsTitle: "O trabalho não termina quando o pedido é enviado ao INPI",
  pathsLead:
    "Depois do envio, o INPI publica o pedido, recebe manifestações de terceiros e pode fazer exigências. A empresa precisa acompanhar essas etapas até a decisão e lembrar dos prazos de renovação.",
  paths: [
    { icon: "search", title: "Pesquisar antes de investir", text: "Consulta à base do INPI e comparação com marcas parecidas para avaliar o risco antes do pedido." },
    { icon: "file-check", title: "Preparar o pedido de registro", text: "Definição da classe, descrição dos produtos ou serviços e protocolo do pedido no INPI." },
    { icon: "shield", title: "Acompanhar o processo", text: "Monitoramento das publicações, resposta a exigências e manifestação em oposições até a decisão." },
    { icon: "badge", title: "Manter a proteção ativa", text: "Controle dos prazos de renovação e acompanhamento de pedidos semelhantes apresentados por terceiros." },
    { icon: "landmark", title: "Responder a conflitos", text: "Análise de uso indevido, semelhança entre marcas e possibilidade de convivência entre nomes parecidos." },
    { icon: "boxes", title: "Organizar mais de uma marca", text: "Definição de classes e titularidade quando a empresa possui marcas diferentes ou atua em mais de uma frente." },
  ],
  timelineTitle: "O pedido continua exigindo atenção depois do protocolo",
  timelineLead:
    "O INPI publica o pedido, abre prazo para manifestação de terceiros e pode formular exigências. Acompanhar essas etapas evita que uma comunicação importante fique sem resposta.",
  timeline: ["Pesquisa de marcas anteriores", "Pedido de registro", "Conferência inicial", "Publicação e prazo de contestação", "Análise pelo INPI", "Decisão"],
  trustNote:
    "O escritório explica o resultado da pesquisa, prepara o pedido e acompanha as publicações do INPI. A empresa entende o motivo de cada escolha e os riscos identificados.",
  processTitle: "Como começar a verificar sua marca",
  process: [
    { title: "Conte como a marca é usada", text: "Informe o nome, o ramo, os produtos ou serviços e se a marca já está em circulação." },
    { title: "Verifique nomes parecidos", text: "A pesquisa na base do INPI ajuda a identificar conflitos e a medir o risco do pedido." },
    { title: "Entenda como fazer o pedido", text: "Com o resultado da pesquisa, a empresa avalia a classe, a descrição e a forma de apresentar o pedido ao INPI." },
  ],
  documentsTitle: "Informações para o primeiro contato",
  documentsLead: "Comece pelo nome e pelo ramo. Documentos são solicitados pelo canal adequado no retorno.",
  documents: ["nome exato pretendido", "ramo de atividade", "produtos ou serviços oferecidos", "logo ou forma de apresentação", "tempo de uso, se houver", "dados da empresa ou do titular", "registros anteriores, se houver", "onde a marca é usada"],
  faq: [
    { question: "Uso esse nome há anos. Isso significa que a marca é minha?", answer: "Em regra, não. No Brasil é o registro no INPI que garante o direito sobre a marca. O uso anterior pode ser relevante em situações específicas, mas não substitui o registro." },
    { question: "Registrar a empresa na Junta Comercial protege a marca?", answer: "Não. Registrar o nome da empresa e registrar a marca são coisas diferentes, feitas em órgãos diferentes e com efeitos diferentes." },
    { question: "Posso registrar uma marca se já existe outra parecida?", answer: "Depende de quão parecidos são os nomes e de os ramos de atividade serem próximos ou não. Marcas semelhantes chegam a conviver quando atuam em setores sem relação entre si. É justamente isso que a pesquisa prévia avalia." },
    { question: "O que é a classe de Nice?", answer: "É a classificação internacional que organiza produtos e serviços em categorias. A marca é protegida dentro da classe pedida, não para todo e qualquer uso. Por isso escolher a classe certa é parte importante do pedido." },
    { question: "O que acontece se outra empresa contestar meu pedido?", answer: "Essa contestação se chama oposição e tem prazo para resposta. A semelhança entre as marcas, os ramos de atividade e os documentos apresentados passam a fazer parte da análise do INPI." },
    { question: "Quanto tempo leva o processo?", answer: "O prazo depende do fluxo do INPI, de eventuais exigências e de contestações de terceiros. Não é possível prometer uma data de conclusão nem garantir que o registro será concedido." },
  ],
  contactTitle: "Conte qual nome você quer proteger e como ele é usado.",
  contactLead: "Informe o ramo, os produtos ou serviços e se a marca já está em circulação. Com esse contexto, já é possível orientar a pesquisa inicial.",
};
