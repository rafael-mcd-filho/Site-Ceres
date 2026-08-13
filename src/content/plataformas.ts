import type { ServiceConfig } from "@/content/services";

/**
 * Contas bloqueadas em plataformas digitais.
 *
 * Nomeadas pela situação do visitante ("conta bloqueada"), nunca pelo desfecho
 * ("liberação"): anunciar o resultado antes da análise é promessa vedada pelo
 * Art. 6º do Provimento 205/2021. A busca real também é pela dor, não pelo remédio.
 */

export const mercadoLivre: ServiceConfig = {
  slug: "conta-bloqueada-mercado-livre",
  theme: "plataforma",
  eyebrow: "CONTA BLOQUEADA NO MERCADO LIVRE",
  title: "Sua conta parou de vender e a explicação veio genérica.",
  titleMark: "parou de vender",
  serviceName: "Conta bloqueada em marketplace",
  serviceDescription:
    "Análise de suspensão, restrição de conta, retenção de valores e encerramento unilateral em Mercado Livre e outros marketplaces.",
  inlineCtaTitle: "Enquanto a conta está parada, o estoque e o repasse não estão.",
  inlineCtaText:
    "Reunir o aviso recebido, o histórico de reputação e os valores retidos é o que permite dizer o que pode ser discutido.",
  lead:
    "Suspensão, restrição e retenção de repasse têm efeitos diferentes sobre a operação. Ler o aviso recebido junto ao histórico da conta é o que mostra do que se trata.",
  heroNote: "Análise da relação com a plataforma, sem promessa de reativação.",
  heroTags: ["suspensão", "reputação", "repasse retido", "denúncia", "encerramento"],
  primaryCta: "Organizar o caso da minha conta",
  formArea: "Conta bloqueada em plataforma",
  whatsappMessage:
    "Olá, gostaria de apresentar uma situação de conta bloqueada no Mercado Livre. Tipo de conta: [pessoal/empresarial]. Data do bloqueio: [preencher]. Houve retenção de valores? [sim/não]. Qual motivo a plataforma informou? [preencher].",
  situationsTitle: "O aviso é curto. O efeito na operação, não.",
  situationsLead:
    "A mesma mensagem automática pode esconder situações muito diferentes. Reconhecer qual é a sua evita tratar restrição temporária como se fosse encerramento definitivo.",
  situations: [
    { icon: "lock", title: "Conta suspensa sem motivo claro", text: "O aviso cita termos de uso de forma genérica, sem indicar a conduta apontada." },
    { icon: "receipt", title: "Valores retidos", text: "Vendas concluídas cujo repasse ficou preso na plataforma após o bloqueio." },
    { icon: "file-warning", title: "Denúncia de terceiro", text: "Reclamação de marca, de comprador ou de concorrente que gerou a restrição." },
    { icon: "trending", title: "Reputação derrubada", text: "Métricas e posicionamento perdidos por punição que você entende indevida." },
    { icon: "boxes", title: "Anúncios removidos", text: "Retirada de itens específicos, com ou sem restrição da conta inteira." },
    { icon: "refresh", title: "Recurso interno esgotado", text: "Os canais da própria plataforma já foram usados e a resposta não mudou." },
  ],
  mechanismEyebrow: "O QUE SUSTENTA A ANÁLISE",
  mechanismTitle: "A relação com o marketplace é contratual e de consumo.",
  mechanismText:
    "A plataforma pode estabelecer regras, mas a aplicação delas se submete ao dever de informação e à boa-fé objetiva. O exame compara o que os termos preveem, o que foi comunicado e o que os registros mostram.",
  mechanismItems: ["Termos de uso aplicáveis", "Aviso efetivamente recebido", "Histórico e reputação", "Valores em aberto"],
  pathsTitle: "Caminhos dependem do que a plataforma informou",
  pathsLead:
    "Recurso interno, notificação e medida judicial atendem a momentos distintos. A pertinência de cada um depende do motivo alegado e dos registros disponíveis.",
  paths: [
    { icon: "search", title: "Leitura do bloqueio", text: "Motivo alegado, cláusula invocada, data e efeitos concretos sobre a operação." },
    { icon: "handshake", title: "Via extrajudicial", text: "Canais internos, notificação e tentativa de solução direta com a plataforma." },
    { icon: "landmark", title: "Via judicial", text: "Avaliação de fundamento, urgência e documentos quando o caminho direto se esgota." },
  ],
  timelineTitle: "A ordem dos fatos muda o que ainda é discutível",
  timelineLead:
    "Data do bloqueio, tentativas de contato e respostas recebidas formam a linha que sustenta qualquer discussão posterior. Guarde tudo, inclusive as mensagens automáticas.",
  timeline: ["Conta ativa", "Aviso ou restrição", "Recurso interno", "Resposta da plataforma", "Situação atual"],
  authorityTitle: "Direito do consumidor e relação digital lidos com método.",
  authorityText: [
    "A discussão sobre conta bloqueada combina Código de Defesa do Consumidor, Marco Civil da Internet e os termos contratuais da própria plataforma.",
    "Ceres Rabelo reúne advocacia, docência e pesquisa para organizar esses elementos e delimitar o que pode ser examinado em cada caso.",
  ],
  processTitle: "Como a análise começa",
  process: [
    { title: "Envie o aviso", text: "O texto recebido da plataforma, com a data e o tipo de conta afetada." },
    { title: "Reúna os registros", text: "Prints, protocolos, respostas do suporte e comprovantes de valores em aberto." },
    { title: "Receba o retorno", text: "Fatos, prazos e caminhos possíveis são delimitados, sem garantia de reativação." },
  ],
  documentsTitle: "O que ajuda a iniciar a análise",
  documentsLead: "Use o formulário para o resumo. A orientação sobre o envio dos arquivos vem no retorno.",
  documents: ["aviso de bloqueio recebido", "data e horário da restrição", "protocolos de atendimento", "respostas do suporte", "print da conta e da reputação", "comprovantes de valores retidos", "dados cadastrais da conta", "relato cronológico breve"],
  faq: [
    { question: "A plataforma pode bloquear uma conta por decisão própria?", answer: "Os termos de uso preveem hipóteses de restrição. O que se examina é se a hipótese aplicada corresponde ao caso, se houve informação adequada e se o procedimento observou a boa-fé contratual." },
    { question: "É possível recuperar valores retidos?", answer: "A discussão sobre repasses depende da origem dos valores, do motivo do bloqueio e dos registros da operação. Cada elemento precisa ser verificado individualmente." },
    { question: "Já usei o recurso interno e não resolveu. Ainda posso analisar?", answer: "Sim. O esgotamento dos canais internos costuma ser um elemento relevante da própria análise, porque documenta a tentativa de solução direta." },
    { question: "Quanto tempo leva?", answer: "Varia conforme o caminho adotado, os documentos disponíveis e a tramitação aplicável. Não é adequado prometer prazo de resultado." },
    { question: "Conta pessoal e conta empresarial mudam a análise?", answer: "Podem mudar. O enquadramento da relação e os efeitos do bloqueio costumam ser diferentes quando a conta sustenta uma atividade econômica." },
    { question: "A análise garante que a conta volta?", answer: "Não. A análise identifica o enquadramento jurídico e os caminhos possíveis, sem garantia de resultado." },
  ],
  contactTitle: "Comece pelo aviso que você recebeu e pela data do bloqueio.",
  contactLead: "Com esses dois elementos já é possível situar o caso e indicar o que examinar em seguida.",
};

export const instagram: ServiceConfig = {
  slug: "conta-bloqueada-instagram",
  theme: "plataforma",
  eyebrow: "CONTA DESATIVADA NO INSTAGRAM",
  title: "O perfil que você construiu por anos saiu do ar de uma vez.",
  titleMark: "saiu do ar de uma vez",
  serviceName: "Conta desativada em rede social",
  serviceDescription:
    "Análise de desativação, restrição e perda de acesso a perfis do Instagram, inclusive contas profissionais e comerciais.",
  inlineCtaTitle: "Perfil profissional fora do ar é operação parada.",
  inlineCtaText:
    "Quando o perfil sustenta trabalho, agenda ou vendas, o efeito do bloqueio deixa de ser pessoal e passa a ser patrimonial.",
  lead:
    "Desativação, restrição de alcance e perda de acesso por invasão são situações distintas. Identificar qual delas ocorreu é o primeiro passo de qualquer discussão.",
  heroNote: "Análise da relação com a plataforma, sem promessa de recuperação.",
  heroTags: ["desativação", "perfil profissional", "invasão", "recurso", "alcance"],
  primaryCta: "Organizar o caso do meu perfil",
  formArea: "Conta bloqueada em plataforma",
  whatsappMessage:
    "Olá, gostaria de apresentar uma situação de conta desativada no Instagram. Tipo de perfil: [pessoal/profissional]. Data da desativação: [preencher]. O perfil é usado para trabalho? [sim/não]. Qual motivo a plataforma informou? [preencher].",
  situationsTitle: "Nem todo bloqueio é o mesmo bloqueio",
  situationsLead:
    "A plataforma usa a mesma linguagem para situações que juridicamente são diferentes. Separar uma da outra evita seguir o caminho errado.",
  situations: [
    { icon: "lock", title: "Conta desativada", text: "Perfil retirado do ar com aviso genérico de violação das diretrizes da comunidade." },
    { icon: "shield", title: "Perda de acesso por invasão", text: "Terceiro alterou e-mail, telefone ou senha e o acesso legítimo foi perdido." },
    { icon: "briefcase", title: "Perfil profissional atingido", text: "Conta que sustenta atendimento, agenda ou vendas e cuja queda tem efeito econômico direto." },
    { icon: "file-warning", title: "Denúncia em massa", text: "Restrição aparentemente motivada por relatos coordenados de terceiros." },
    { icon: "badge", title: "Uso indevido da sua marca", text: "Perfil de terceiro que reproduz nome, identidade ou conteúdo seu." },
    { icon: "refresh", title: "Recurso sem resposta", text: "Os formulários de contestação foram enviados e não houve retorno útil." },
  ],
  mechanismEyebrow: "O QUE SUSTENTA A ANÁLISE",
  mechanismTitle: "Serviço gratuito não significa relação sem deveres.",
  mechanismText:
    "A jurisprudência tem reconhecido relação de consumo entre usuário e plataforma mesmo sem pagamento direto. Isso traz consigo deveres de informação, de transparência sobre o motivo e de boa-fé na aplicação das regras.",
  mechanismItems: ["Diretrizes invocadas", "Aviso recebido", "Uso e finalidade do perfil", "Tentativas de contestação"],
  pathsTitle: "O caminho depende do que foi comunicado",
  pathsLead:
    "Contestação interna, notificação e medida judicial cumprem funções distintas. A escolha depende do motivo alegado e do que ficou registrado.",
  paths: [
    { icon: "search", title: "Leitura da desativação", text: "Diretriz citada, forma do aviso, data e efeito concreto sobre o uso do perfil." },
    { icon: "handshake", title: "Via extrajudicial", text: "Formulários de contestação, canais oficiais e notificação à plataforma." },
    { icon: "landmark", title: "Via judicial", text: "Avaliação de fundamento, urgência e prova quando os canais diretos se esgotam." },
  ],
  timelineTitle: "Registre antes que a evidência suma",
  timelineLead:
    "Prints do aviso, número dos protocolos e datas das tentativas são o que sustenta a narrativa depois. Guarde tudo antes de continuar tentando.",
  timeline: ["Perfil ativo", "Aviso ou desativação", "Contestação enviada", "Resposta recebida", "Situação atual"],
  authorityTitle: "Relação digital analisada com base em documento, não em suposição.",
  authorityText: [
    "Casos de conta desativada combinam Código de Defesa do Consumidor, Marco Civil da Internet e as diretrizes contratuais da plataforma.",
    "A leitura técnica separa o que é regra da plataforma, o que é dever legal e o que depende de prova produzida pelo próprio usuário.",
  ],
  processTitle: "Como a análise começa",
  process: [
    { title: "Envie o aviso", text: "O texto exibido pela plataforma, com data e tipo de perfil atingido." },
    { title: "Reúna os registros", text: "Prints, protocolos de contestação, e-mails recebidos e provas de titularidade." },
    { title: "Receba o retorno", text: "Fatos, prazos e caminhos possíveis são delimitados, sem garantia de recuperação." },
  ],
  documentsTitle: "O que ajuda a iniciar a análise",
  documentsLead: "Use o formulário para o resumo. A orientação sobre o envio dos arquivos vem no retorno.",
  documents: ["print do aviso de desativação", "data e horário da perda de acesso", "protocolos de contestação", "e-mails da plataforma", "comprovante de titularidade do perfil", "evidência do uso profissional", "dados de cadastro originais", "relato cronológico breve"],
  faq: [
    { question: "Perfil pessoal e perfil profissional têm tratamento diferente?", answer: "Podem ter. Quando o perfil sustenta atividade econômica, o efeito do bloqueio deixa de ser apenas pessoal, e isso costuma alterar o enquadramento da discussão." },
    { question: "A plataforma precisa dizer o motivo do bloqueio?", answer: "O dever de informação é um dos pontos centrais da análise. O que se examina é se a comunicação recebida permitiu compreender e contestar a decisão." },
    { question: "Perdi o acesso porque invadiram minha conta. É o mesmo caso?", answer: "Não. Invasão envolve titularidade e segurança, com prova e caminho próprios. Por isso a origem da perda de acesso precisa ser identificada logo no início." },
    { question: "Já enviei recurso pelo aplicativo e não responderam. E agora?", answer: "O envio e a ausência de resposta são elementos relevantes, porque documentam a tentativa de solução pela via direta. Guarde os protocolos." },
    { question: "Consigo ser indenizado?", answer: "A existência de dano e o seu reconhecimento dependem do caso concreto, da prova produzida e do entendimento aplicável. Não é adequado antecipar esse resultado." },
    { question: "A análise garante que o perfil volta?", answer: "Não. A análise identifica o enquadramento jurídico e os caminhos possíveis, sem garantia de resultado." },
  ],
  contactTitle: "Comece pelo print do aviso e pela data em que o perfil saiu do ar.",
  contactLead: "Com esses dois elementos já é possível situar o caso e indicar o que examinar em seguida.",
};

export const whatsapp: ServiceConfig = {
  slug: "conta-bloqueada-whatsapp",
  theme: "plataforma",
  eyebrow: "NÚMERO BANIDO NO WHATSAPP",
  title: "O número que concentra seus contatos foi banido sem aviso.",
  titleMark: "foi banido sem aviso",
  serviceName: "Número banido em aplicativo de mensagens",
  serviceDescription:
    "Análise de banimento, suspensão temporária e perda de acesso a contas de WhatsApp pessoais, profissionais e comerciais.",
  inlineCtaTitle: "Para quem atende por mensagem, o número é a operação.",
  inlineCtaText:
    "Agenda, histórico e canal de atendimento ficam presos ao número. É por isso que o banimento tem efeito imediato sobre o trabalho.",
  lead:
    "Banimento definitivo, suspensão temporária e perda de acesso por invasão produzem consequências diferentes. Saber qual ocorreu orienta todo o resto.",
  heroNote: "Análise da relação com a plataforma, sem promessa de desbanimento.",
  heroTags: ["banimento", "conta comercial", "invasão", "revisão", "atendimento"],
  primaryCta: "Organizar o caso do meu número",
  formArea: "Conta bloqueada em plataforma",
  whatsappMessage:
    "Olá, gostaria de apresentar uma situação de número banido no WhatsApp. Tipo de conta: [pessoal/Business/API]. Data do banimento: [preencher]. O número é usado para trabalho? [sim/não]. Qual mensagem o aplicativo exibiu? [preencher].",
  situationsTitle: "O que o aplicativo mostrou muda o caminho",
  situationsLead:
    "A mensagem exibida na tela é o primeiro elemento da análise, porque distingue suspensão temporária de banimento definitivo.",
  situations: [
    { icon: "lock", title: "Banimento definitivo", text: "O aplicativo informa que o número não pode mais usar o serviço." },
    { icon: "activity", title: "Suspensão temporária", text: "Restrição por período determinado, com contagem exibida na tela." },
    { icon: "briefcase", title: "Conta comercial atingida", text: "Número de atendimento, catálogo ou API cuja queda interrompe o contato com clientes." },
    { icon: "shield", title: "Perda por invasão", text: "Terceiro registrou o número em outro aparelho e o acesso legítimo foi perdido." },
    { icon: "users", title: "Denúncia de contatos", text: "Bloqueios e relatos de destinatários que podem ter motivado a restrição." },
    { icon: "refresh", title: "Revisão sem retorno", text: "O pedido de revisão foi enviado pelo próprio aplicativo e não houve resposta útil." },
  ],
  mechanismEyebrow: "O QUE SUSTENTA A ANÁLISE",
  mechanismTitle: "Número banido é acesso perdido a um canal, não só a um aplicativo.",
  mechanismText:
    "A discussão envolve os termos de serviço, o dever de informar o motivo da restrição e o efeito concreto da perda sobre quem depende daquele canal para trabalhar.",
  mechanismItems: ["Mensagem exibida", "Tipo de conta", "Uso do número", "Pedidos de revisão"],
  pathsTitle: "Revisão interna, notificação ou medida judicial",
  pathsLead:
    "Cada caminho tem requisito próprio. O que define a escolha é o tipo de restrição, o registro do pedido de revisão e o efeito sobre a atividade.",
  paths: [
    { icon: "search", title: "Leitura do banimento", text: "Mensagem exibida, tipo de conta, data e efeito sobre o atendimento." },
    { icon: "handshake", title: "Via extrajudicial", text: "Pedido de revisão pelo aplicativo, canais oficiais e notificação." },
    { icon: "landmark", title: "Via judicial", text: "Avaliação de fundamento, urgência e prova quando a via direta se esgota." },
  ],
  timelineTitle: "Print antes de desinstalar",
  timelineLead:
    "A tela com a mensagem de banimento costuma ser a prova mais direta do que aconteceu, e desaparece quando o aplicativo é removido do aparelho.",
  timeline: ["Número ativo", "Mensagem de restrição", "Pedido de revisão", "Resposta recebida", "Situação atual"],
  authorityTitle: "Análise técnica de um canal que virou infraestrutura de trabalho.",
  authorityText: [
    "Quando o atendimento acontece por mensagem, o número deixa de ser conveniência e passa a ser meio de exercício da atividade.",
    "A análise organiza os termos aplicáveis, os registros disponíveis e o efeito concreto da restrição sobre quem depende daquele canal.",
  ],
  processTitle: "Como a análise começa",
  process: [
    { title: "Envie a mensagem exibida", text: "O print da tela de banimento, com data e tipo de conta." },
    { title: "Reúna os registros", text: "Pedidos de revisão, protocolos, e-mails e comprovante de titularidade do número." },
    { title: "Receba o retorno", text: "Fatos, prazos e caminhos possíveis são delimitados, sem garantia de restabelecimento." },
  ],
  documentsTitle: "O que ajuda a iniciar a análise",
  documentsLead: "Use o formulário para o resumo. A orientação sobre o envio dos arquivos vem no retorno.",
  documents: ["print da mensagem de banimento", "data e horário da restrição", "tipo de conta utilizada", "pedidos de revisão enviados", "comprovante de titularidade da linha", "evidência do uso profissional", "protocolos de atendimento", "relato cronológico breve"],
  faq: [
    { question: "Banimento temporário e definitivo são a mesma coisa?", answer: "Não. A mensagem exibida pelo aplicativo distingue as duas situações, e elas conduzem a caminhos diferentes. Por isso o print da tela é o primeiro elemento pedido." },
    { question: "Perdi o número usado no atendimento da empresa. Muda algo?", answer: "Pode mudar. Quando o número sustenta atividade econômica, o efeito da restrição deixa de ser pessoal, e isso costuma alterar o enquadramento." },
    { question: "Preciso pedir revisão pelo aplicativo antes?", answer: "O pedido de revisão documenta a tentativa de solução direta e costuma ser um elemento relevante. Guarde o protocolo e a resposta, se houver." },
    { question: "Recuperar o número recupera as conversas?", answer: "Histórico e backup seguem regras próprias do aplicativo e do aparelho, que são independentes da discussão sobre o acesso à conta." },
    { question: "Alguém registrou meu número em outro aparelho. É o mesmo caso?", answer: "Não. Isso envolve titularidade da linha e segurança, com prova e caminho próprios. A origem da perda precisa ser identificada no início." },
    { question: "A análise garante que o número volta?", answer: "Não. A análise identifica o enquadramento jurídico e os caminhos possíveis, sem garantia de resultado." },
  ],
  contactTitle: "Comece pelo print da mensagem e pela data do banimento.",
  contactLead: "Com esses dois elementos já é possível situar o caso e indicar o que examinar em seguida.",
};
