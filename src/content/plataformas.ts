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
  title: "Sua conta do Mercado Livre foi suspensa e a operação parou?",
  titleMark: "a operação parou",
  sectionMarks: {
    situations: "interrompeu na sua operação",
    mechanism: "por que a conta foi suspensa",
    paths: "avaliar como responder",
    inlineCta: "continuam exigindo decisão",
    contact: "o bloqueio afetou",
  },
  serviceName: "Conta bloqueada no Mercado Livre",
  serviceDescription:
    "Orientação jurídica para vendedores diante de conta suspensa, anúncios removidos, reputação afetada e valores retidos no Mercado Livre.",
  inlineCtaTitle: "Mesmo com a conta bloqueada, estoque, pedidos e repasses continuam exigindo decisão.",
  inlineCtaText:
    "O aviso da plataforma, os pedidos concluídos, os valores em aberto e as tentativas de recurso ajudam a medir o impacto e a definir o que precisa ser analisado primeiro.",
  lead:
    "Para quem depende do Mercado Livre para vender, um bloqueio pode interromper pedidos de um dia para o outro e ainda deixar dinheiro preso na plataforma. Entender o motivo informado, o histórico da conta e o que já foi tentado é o primeiro passo para avaliar uma resposta.",
  heroNote: "Aviso, histórico da conta, protocolos e impacto nas vendas são analisados em conjunto.",
  heroTags: ["suspensão", "reputação", "repasse retido", "denúncia", "encerramento"],
  primaryCta: "Quero analisar o bloqueio da minha conta",
  whatsappCta: "Explicar o bloqueio pelo WhatsApp",
  inlineCtaLabel: "Avaliar minha conta no Mercado Livre",
  finalCta: "Quero conversar sobre minha conta",
  formArea: "Conta bloqueada em plataforma",
  formPlatform: "Mercado Livre",
  whatsappMessage:
    "Olá, vim pelo site da Rabelo e Machado Advocacia e preciso de ajuda com uma conta bloqueada no Mercado Livre. Tipo de conta: [pessoal/empresarial]. Data do bloqueio: [preencher]. Houve retenção de valores? [sim/não]. Qual motivo a plataforma informou? [preencher].",
  situationsTitle: "O que o bloqueio interrompeu na sua operação?",
  situationsLead:
    "A conta pode ter parado por uma denúncia, uma regra da plataforma ou um motivo que não ficou claro. Além do acesso, é importante identificar o que aconteceu com anúncios, reputação, pedidos e valores a receber.",
  situations: [
    { icon: "lock", title: "Minha conta foi suspensa sem motivo claro", text: "A mensagem cita os termos de uso, mas não explica qual conduta teria causado a suspensão." },
    { icon: "receipt", title: "Tenho valores retidos", text: "As vendas foram concluídas, mas o repasse ficou preso na plataforma depois da restrição." },
    { icon: "file-warning", title: "Uma denúncia gerou o bloqueio", text: "Uma reclamação de marca, comprador ou concorrente pode ter provocado a restrição da conta ou de anúncios específicos." },
    { icon: "trending", title: "Minha reputação foi prejudicada", text: "A punição afetou métricas, exposição dos anúncios e a confiança construída no histórico da conta." },
    { icon: "boxes", title: "Meus anúncios foram removidos", text: "Alguns produtos saíram do ar, com ou sem bloqueio da conta inteira, e a operação ficou parcialmente interrompida." },
    { icon: "refresh", title: "Já recorri e a resposta não mudou", text: "Os canais internos foram usados, mas a plataforma manteve a decisão ou enviou apenas uma resposta automática." },
  ],
  mechanismEyebrow: "PARA ENTENDER O BLOQUEIO",
  mechanismTitle: "O aviso automático não explica sozinho por que a conta foi suspensa.",
  mechanismText:
    "A mensagem recebida precisa ser comparada com os termos de uso, o histórico da conta, os anúncios afetados e as respostas do suporte. Essa sequência mostra se a plataforma informou o motivo de forma suficiente e quais pontos podem ser questionados.",
  mechanismItems: ["Motivo informado", "Histórico da conta", "Impacto nas vendas", "Tentativas de solução"],
  pathsTitle: "Depois de identificar o motivo e o impacto, é possível avaliar como responder",
  pathsLead:
    "O primeiro passo pode ser um recurso nos canais da própria plataforma ou uma notificação. Se isso não resolver, o aviso, as respostas e o impacto nas vendas ajudam a avaliar se o caso pode ser levado à Justiça.",
  paths: [
    { icon: "search", title: "Entender o motivo e o impacto", text: "Análise do aviso, da regra apontada, da data do bloqueio e do que parou na operação." },
    { icon: "handshake", title: "Tentar uma solução direta", text: "Avaliação dos canais internos, do recurso e de eventual notificação formal à plataforma." },
    { icon: "landmark", title: "Avaliar se o caso pode ser levado à Justiça", text: "Quando as tentativas diretas não resolvem, os registros e o impacto financeiro ajudam a verificar se o caso tem elementos para ser apresentado à Justiça." },
  ],
  timelineTitle: "As tentativas de solução também fazem parte do caso",
  timelineLead:
    "Guarde o aviso, os protocolos, as mensagens do suporte e as datas de cada tentativa. Esses registros mostram o que você fez para resolver o problema e como a plataforma respondeu.",
  timeline: ["Conta ativa", "Aviso ou restrição", "Recurso interno", "Resposta da plataforma", "Situação atual"],
  trustNote:
    "O escritório compara o aviso com as regras da plataforma e com o histórico da conta. O vendedor entende o que foi apontado, o que já foi tentado e quais caminhos ainda podem ser avaliados.",
  processTitle: "Como começar a analisar o bloqueio",
  process: [
    { title: "Conte o que parou", text: "Informe a data do bloqueio e se houve impacto nas vendas, nos anúncios, na reputação ou nos repasses." },
    { title: "Separe o aviso e os protocolos", text: "Prints, respostas do suporte e comprovantes de valores retidos ajudam a documentar a situação." },
    { title: "Entenda quais caminhos podem ser avaliados", text: "O retorno indica o que ainda pode ser tentado diretamente e quais pontos merecem análise jurídica." },
  ],
  documentsTitle: "O que ajuda a iniciar a análise",
  documentsLead: "Use o formulário para o resumo. A orientação sobre o envio dos arquivos vem no retorno.",
  documents: ["aviso de bloqueio recebido", "data e horário da restrição", "protocolos de atendimento", "respostas do suporte", "print da conta e da reputação", "comprovantes de valores retidos", "dados cadastrais da conta", "relato cronológico breve"],
  faq: [
    { question: "O Mercado Livre pode suspender uma conta sem explicar o motivo?", answer: "As regras da plataforma podem permitir a suspensão. Ainda assim, a mensagem precisa explicar o que foi apontado para que o vendedor consiga responder. O aviso e o histórico da conta ajudam a verificar isso." },
    { question: "É possível pedir a liberação dos valores retidos?", answer: "Depende da origem dos valores, do motivo da suspensão e dos registros das vendas. Comprovantes dos pedidos concluídos e das tentativas de atendimento ajudam a verificar o que pode ser solicitado." },
    { question: "Já recorri e nada mudou. Ainda existe algo a fazer?", answer: "Pode existir. Os protocolos e as respostas mostram o que já foi tentado e como a plataforma respondeu. A partir deles, é possível avaliar uma notificação ou a ida à Justiça." },
    { question: "Quanto tempo pode levar?", answer: "O prazo varia conforme a resposta da plataforma e o caminho adotado. Por isso não é possível informar antecipadamente uma data de reativação ou de liberação dos valores." },
    { question: "Muda algo se a conta é usada pela empresa?", answer: "Pode mudar. Quando a conta sustenta vendas e possui histórico, reputação ou valores a receber, o bloqueio produz um impacto econômico que precisa ser documentado." },
    { question: "O escritório tem vínculo com o Mercado Livre?", answer: "Não. A Rabelo e Machado Advocacia atua de forma independente e não representa nem integra o Mercado Livre. A plataforma é mencionada apenas para identificar o serviço relacionado à conta afetada." },
    { question: "A análise garante que a conta será reativada?", answer: "Não. A reativação depende da plataforma ou de uma decisão judicial. A análise verifica o motivo informado, os registros disponíveis e quais caminhos podem ser considerados." },
  ],
  contactTitle: "Conte quando a conta foi suspensa e o que o bloqueio afetou.",
  contactLead: "Se tiver, informe também o motivo apresentado, os valores retidos e as respostas do suporte. Esses elementos ajudam a indicar o que precisa ser examinado primeiro.",
};

export const instagram: ServiceConfig = {
  slug: "conta-bloqueada-instagram",
  theme: "plataforma",
  eyebrow: "CONTA DESATIVADA NO INSTAGRAM",
  title: "Seu perfil saiu do ar e parte do trabalho parou junto?",
  titleMark: "parte do trabalho parou junto",
  sectionMarks: {
    situations: "afetou o perfil e o trabalho",
    mechanism: "saber como o acesso foi perdido",
    paths: "avaliar a resposta adequada",
    inlineCta: "o impacto precisa ser registrado",
    contact: "como o perfil era usado",
  },
  serviceName: "Conta desativada no Instagram",
  serviceDescription:
    "Orientação jurídica para perfis do Instagram desativados, invadidos ou restringidos, especialmente quando usados para trabalho, atendimento e vendas.",
  inlineCtaTitle: "Se o perfil é usado para trabalhar, o impacto da perda de acesso precisa ser registrado.",
  inlineCtaText:
    "Anote quais campanhas pararam, quais contatos ficaram inacessíveis e desde quando o perfil está fora do ar. Guarde também o aviso e as respostas às tentativas de recuperação.",
  lead:
    "Para quem construiu audiência, reputação e relacionamento com clientes no Instagram, perder o perfil pode interromper campanhas, conversas e vendas. O primeiro passo é descobrir se houve desativação, invasão ou outra restrição e registrar o impacto sobre o trabalho.",
  heroNote: "A forma como o acesso foi perdido muda o caminho que será avaliado.",
  heroTags: ["desativação", "perfil profissional", "invasão", "recurso", "alcance"],
  primaryCta: "Quero analisar o bloqueio do meu perfil",
  whatsappCta: "Explicar o problema do perfil pelo WhatsApp",
  inlineCtaLabel: "Avaliar meu perfil do Instagram",
  finalCta: "Quero conversar sobre meu perfil",
  formArea: "Conta bloqueada em plataforma",
  formPlatform: "Instagram",
  whatsappMessage:
    "Olá, vim pelo site da Rabelo e Machado Advocacia e preciso de ajuda com uma conta desativada no Instagram. Tipo de perfil: [pessoal/profissional]. Data da desativação: [preencher]. O perfil é usado para trabalho? [sim/não]. Qual motivo a plataforma informou? [preencher].",
  situationsTitle: "Como a perda de acesso afetou o perfil e o trabalho?",
  situationsLead:
    "O perfil pode ter sido desativado pela plataforma, invadido por outra pessoa ou atingido por denúncias. Saber como o acesso foi perdido e para que a conta era usada muda o que precisa ser feito.",
  situations: [
    { icon: "lock", title: "Meu perfil foi desativado", text: "A conta saiu do ar e a plataforma mostrou uma mensagem genérica sobre violação das diretrizes." },
    { icon: "shield", title: "Perdi o acesso depois de uma invasão", text: "Outra pessoa alterou e-mail, telefone ou senha, e os canais de recuperação não devolveram o acesso." },
    { icon: "briefcase", title: "O perfil era usado para trabalhar", text: "A conta concentrava divulgação, agenda, atendimento ou vendas, e a desativação produziu impacto financeiro." },
    { icon: "file-warning", title: "A conta recebeu muitas denúncias", text: "A restrição pode ter surgido depois de relatos coordenados ou de uma denúncia que você considera indevida." },
    { icon: "badge", title: "Outro perfil está usando minha marca", text: "Uma conta de terceiro reproduz seu nome, identidade ou conteúdo e pode confundir clientes." },
    { icon: "refresh", title: "Já recorri e não recebi resposta", text: "Os formulários foram enviados, mas a plataforma não respondeu ou manteve a decisão sem uma explicação útil." },
  ],
  mechanismEyebrow: "PARA ENTENDER O QUE ACONTECEU",
  mechanismTitle: "Para escolher o caminho, primeiro é preciso saber como o acesso foi perdido.",
  mechanismText:
    "Uma desativação por suposta violação de regras não é igual a uma invasão. O aviso recebido, os dados originais da conta, o uso profissional e as tentativas de recuperação ajudam a identificar o problema e a verificar se a plataforma informou o motivo de forma adequada.",
  mechanismItems: ["Como o acesso foi perdido", "Mensagem exibida", "Uso profissional do perfil", "Tentativas de recuperação"],
  pathsTitle: "Com o problema identificado, é possível avaliar a resposta adequada",
  pathsLead:
    "A recuperação costuma começar pelos canais da própria plataforma. Se eles não funcionarem, as tentativas já feitas, a prova de que o perfil é seu e o impacto da desativação ajudam a avaliar uma notificação ou a ida à Justiça.",
  paths: [
    { icon: "search", title: "Entender a origem da perda de acesso", text: "Verificação do aviso, da data, da titularidade e do efeito da restrição sobre o perfil." },
    { icon: "handshake", title: "Tentar a recuperação pelos canais oficiais", text: "Conferência dos formulários enviados, das respostas recebidas e dos passos de segurança já realizados." },
    { icon: "landmark", title: "Avaliar se o caso pode ser levado à Justiça", text: "Quando os canais diretos não resolvem, os registros de titularidade e o impacto profissional ajudam a verificar se o caso pode ser apresentado à Justiça." },
  ],
  timelineTitle: "Guarde os registros antes de continuar tentando recuperar o perfil",
  timelineLead:
    "Faça prints do aviso e anote as datas, os protocolos e as respostas recebidas. Essas informações ajudam a mostrar como o acesso foi perdido e o que já foi tentado.",
  timeline: ["Perfil ativo", "Aviso ou desativação", "Contestação enviada", "Resposta recebida", "Situação atual"],
  trustNote:
    "O escritório identifica como o acesso foi perdido, confere os registros disponíveis e explica o que ainda pode ser tentado diretamente ou levado para outra análise.",
  processTitle: "Como começar a analisar o perfil",
  process: [
    { title: "Conte como perdeu o acesso", text: "Informe a data, a mensagem exibida e se houve desativação, invasão ou outra restrição." },
    { title: "Separe provas de titularidade", text: "Prints, e-mails, dados originais, protocolos e registros do uso profissional ajudam a documentar o caso." },
    { title: "Entenda o que pode ser tentado", text: "O retorno indica os canais ainda disponíveis e se os registros justificam avaliar a Justiça." },
  ],
  documentsTitle: "O que ajuda a iniciar a análise",
  documentsLead: "Use o formulário para o resumo. A orientação sobre o envio dos arquivos vem no retorno.",
  documents: ["print do aviso de desativação", "data e horário da perda de acesso", "protocolos de contestação", "e-mails da plataforma", "comprovante de titularidade do perfil", "evidência do uso profissional", "dados de cadastro originais", "relato cronológico breve"],
  faq: [
    { question: "Muda algo se eu usava o perfil para trabalhar?", answer: "Pode mudar. Quando o perfil sustenta atendimento, campanhas ou vendas, a perda de acesso produz um impacto econômico que precisa ser mostrado com registros da atividade." },
    { question: "O Instagram precisa dizer por que desativou o perfil?", answer: "A comunicação recebida deve permitir que o usuário compreenda o motivo e tente contestar a decisão. Mensagens genéricas e respostas automáticas precisam ser avaliadas junto aos registros da conta." },
    { question: "Perdi o acesso porque invadiram minha conta. É o mesmo caso?", answer: "Não. Invasão envolve titularidade e segurança, com prova e caminho próprios. Por isso a origem da perda de acesso precisa ser identificada logo no início." },
    { question: "Já enviei recurso pelo aplicativo e não responderam. E agora?", answer: "Guarde o protocolo e a data do envio. Eles mostram que você tentou recuperar o perfil pelos canais da plataforma e não recebeu uma resposta útil." },
    { question: "Posso pedir indenização?", answer: "Depende do impacto que pode ser comprovado, de como a conta foi desativada e das tentativas de recuperação. Sem esses elementos, não é possível antecipar se existe um pedido de indenização." },
    { question: "O escritório tem vínculo com o Instagram?", answer: "Não. A Rabelo e Machado Advocacia atua de forma independente e não representa nem integra o Instagram ou a Meta. A plataforma é mencionada apenas para identificar o serviço relacionado ao perfil afetado." },
    { question: "A análise garante que o perfil será recuperado?", answer: "Não. O restabelecimento depende da plataforma ou de decisão judicial. A análise verifica como o acesso foi perdido, o que os registros comprovam e quais caminhos podem ser avaliados." },
  ],
  contactTitle: "Conte como perdeu o acesso e como o perfil era usado.",
  contactLead: "Informe a data, a mensagem exibida e se o perfil sustentava atendimento, campanhas ou vendas. Isso ajuda a identificar o tipo de problema e o que precisa ser examinado primeiro.",
};

export const whatsapp: ServiceConfig = {
  slug: "conta-bloqueada-whatsapp",
  theme: "plataforma",
  eyebrow: "NÚMERO BANIDO NO WHATSAPP",
  title: "Seu número foi banido e o atendimento aos clientes parou?",
  titleMark: "o atendimento aos clientes parou",
  sectionMarks: {
    situations: "parou de funcionar",
    mechanism: "separar banimento, suspensão e invasão",
    paths: "avaliar a resposta adequada",
    inlineCta: "clientes ficam sem resposta",
    contact: "como o número era usado",
  },
  serviceName: "Número banido no WhatsApp",
  serviceDescription:
    "Orientação jurídica diante de número banido, suspensão temporária ou perda de acesso ao WhatsApp usado para atendimento e atividade profissional.",
  inlineCtaTitle: "Quando o WhatsApp concentra o atendimento, clientes ficam sem resposta de uma hora para outra.",
  inlineCtaText:
    "O impacto pode atingir orçamentos, agendamentos e conversas em andamento. Antes de reinstalar o aplicativo ou trocar o aparelho, registre a mensagem exibida e as tentativas de revisão.",
  lead:
    "Um número usado por clientes, equipe e fornecedores pode concentrar parte importante da operação. Se ele foi banido, suspenso ou registrado por outra pessoa, é preciso identificar o tipo de bloqueio e preservar os registros antes de avaliar os caminhos possíveis.",
  heroNote: "A mensagem da tela ajuda a distinguir suspensão, banimento e invasão.",
  heroTags: ["banimento", "conta comercial", "invasão", "revisão", "atendimento"],
  primaryCta: "Quero analisar o bloqueio do meu número",
  whatsappCta: "Explicar o bloqueio pelo WhatsApp",
  inlineCtaLabel: "Avaliar o bloqueio do meu número",
  finalCta: "Quero conversar sobre meu número",
  formArea: "Conta bloqueada em plataforma",
  formPlatform: "WhatsApp",
  whatsappMessage:
    "Olá, vim pelo site da Rabelo e Machado Advocacia e preciso de ajuda com um número banido no WhatsApp. Tipo de conta: [pessoal/Business/API]. Data do banimento: [preencher]. O número é usado para trabalho? [sim/não]. Qual mensagem o aplicativo exibiu? [preencher].",
  situationsTitle: "O que apareceu na tela e o que parou de funcionar?",
  situationsLead:
    "A mesma perda de acesso pode ter causas diferentes. A mensagem exibida, o tipo da conta e a forma como o número era usado ajudam a distinguir suspensão, banimento e invasão.",
  situations: [
    { icon: "lock", title: "O aplicativo informou banimento", text: "A mensagem diz que o número não pode mais usar o serviço e não apresenta prazo para liberação." },
    { icon: "activity", title: "A tela mostra uma suspensão temporária", text: "Existe uma contagem ou um período determinado para o fim da restrição." },
    { icon: "briefcase", title: "O número era usado para atendimento", text: "A conta concentrava conversas, catálogo, agendamentos ou integração com a operação da empresa." },
    { icon: "shield", title: "Outra pessoa registrou meu número", text: "O acesso foi perdido depois que um terceiro ativou a conta em outro aparelho ou alterou os dados de segurança." },
    { icon: "users", title: "A conta pode ter recebido denúncias", text: "Bloqueios e relatos de contatos podem ter contribuído para a restrição, mas o motivo precisa ser verificado." },
    { icon: "refresh", title: "Pedi revisão e não tive resposta", text: "A solicitação foi enviada pelo aplicativo, porém não houve retorno útil ou a decisão foi mantida." },
  ],
  mechanismEyebrow: "PARA ENTENDER O BLOQUEIO",
  mechanismTitle: "Para avaliar o problema, é preciso separar banimento, suspensão e invasão.",
  mechanismText:
    "A mensagem da tela, a titularidade da linha, o tipo de conta e as tentativas de revisão mostram qual situação ocorreu. Quando o número sustenta trabalho ou vendas, também é importante registrar o impacto causado pela interrupção.",
  mechanismItems: ["Mensagem da tela", "Titularidade da linha", "Uso profissional", "Tentativas de revisão"],
  pathsTitle: "Com o tipo de bloqueio identificado, é possível avaliar a resposta adequada",
  pathsLead:
    "A revisão pelo aplicativo costuma ser o primeiro caminho. Se não houver resposta, os protocolos, o comprovante de titularidade e o impacto sobre o trabalho ajudam a avaliar uma notificação ou a ida à Justiça.",
  paths: [
    { icon: "search", title: "Entender o tipo de bloqueio", text: "Análise da mensagem exibida, da data, do tipo de conta e do impacto sobre o atendimento." },
    { icon: "handshake", title: "Tentar a revisão pelos canais oficiais", text: "Avaliação do pedido feito no aplicativo, das respostas recebidas e de eventual notificação formal." },
    { icon: "landmark", title: "Avaliar se o caso pode ser levado à Justiça", text: "Quando o caminho direto não resolve, a titularidade, os registros e o impacto no atendimento ajudam a verificar se o caso pode ser apresentado à Justiça." },
  ],
  timelineTitle: "Antes de desinstalar o aplicativo, registre a mensagem da tela",
  timelineLead:
    "O aviso pode desaparecer depois de uma reinstalação. Faça prints, anote a data e guarde as respostas aos pedidos de revisão antes de tentar novamente.",
  timeline: ["Número ativo", "Mensagem de restrição", "Pedido de revisão", "Resposta recebida", "Situação atual"],
  trustNote:
    "O escritório identifica o tipo de restrição, confere os registros e explica o que ainda pode ser tentado por quem depende do número para trabalhar.",
  processTitle: "Como começar a analisar o bloqueio",
  process: [
    { title: "Conte o que apareceu na tela", text: "Informe a mensagem exibida, a data e se o número era usado para atendimento ou vendas." },
    { title: "Separe os registros e a titularidade", text: "Prints, pedidos de revisão, e-mails e comprovante da linha ajudam a documentar o caso." },
    { title: "Entenda o que pode ser tentado", text: "O retorno indica o tipo de restrição e os caminhos que podem ser avaliados para a sua situação." },
  ],
  documentsTitle: "O que ajuda a iniciar a análise",
  documentsLead: "Use o formulário para o resumo. A orientação sobre o envio dos arquivos vem no retorno.",
  documents: ["print da mensagem de banimento", "data e horário da restrição", "tipo de conta utilizada", "pedidos de revisão enviados", "comprovante de titularidade da linha", "evidência do uso profissional", "protocolos de atendimento", "relato cronológico breve"],
  faq: [
    { question: "Suspensão temporária e banimento definitivo são a mesma coisa?", answer: "Não. A mensagem exibida pelo aplicativo ajuda a distinguir as duas situações, e cada uma pede próximos passos diferentes. Por isso o print da tela é um dos primeiros registros pedidos." },
    { question: "Muda algo se eu usava o número para atender clientes?", answer: "Pode mudar. Quando o número concentra atendimento, agendamentos ou vendas, o bloqueio produz um impacto profissional que precisa ser documentado." },
    { question: "Preciso pedir revisão pelo aplicativo antes?", answer: "O pedido de revisão documenta a tentativa de solução direta e costuma ser um elemento relevante. Guarde o protocolo e a resposta, se houver." },
    { question: "Recuperar o número recupera as conversas?", answer: "Não necessariamente. O histórico depende do backup, do aparelho e das regras do aplicativo. A volta do acesso ao número não garante a recuperação das conversas." },
    { question: "Alguém registrou meu número em outro aparelho. É o mesmo caso?", answer: "Não. Isso envolve titularidade da linha e segurança, com prova e caminho próprios. A origem da perda precisa ser identificada no início." },
    { question: "O escritório tem vínculo com o WhatsApp?", answer: "Não. A Rabelo e Machado Advocacia atua de forma independente e não representa nem integra o WhatsApp ou a Meta. O aplicativo é mencionado apenas para identificar o serviço relacionado ao número afetado." },
    { question: "A análise garante que o número será liberado?", answer: "Não. A liberação depende do aplicativo ou de decisão judicial. A análise identifica o tipo de restrição, confere os registros e mostra quais caminhos podem ser avaliados." },
  ],
  contactTitle: "Conte o que apareceu na tela e como o número era usado.",
  contactLead: "Informe a data, o tipo de conta e o impacto sobre o atendimento. Se tiver, inclua também as tentativas de revisão e as respostas recebidas.",
};
