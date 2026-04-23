const WORKEDIN = "https://www.workedin.com.br";

export const messages = {
  navLinks: [
    { href: "#home", label: "Início" },
    { href: "#about", label: "Sobre" },
    { href: "#services", label: "Serviços" },
    { href: "#projects", label: "Projetos" },
    { href: "#skills", label: "Competências" },
    { href: "#experience", label: "Experiência" },
    { href: "#hobbies", label: "Além do ecrã" },
    { href: "#contact", label: "Contato" },
  ],

  navAriaLabel: "Navegação principal",

  heroGraphPanel: {
    snapshotKicker: "snapshot",
    snapshotTitle: "Engenharia · web & IA",
    snapshotLines: [
      "Prova técnica resumida: Postgres, filas, Docker, CI; no lado de modelo, RAG bem chunkado, tool-calling com políticas, tracing e olho em custo e latência.",
      "Interfaces em TypeScript (React ou Angular) quando o produto pede dashboard ou fluxo guiado; contratos de API claros entre serviços.",
    ],
    tags: ["Python", "Django", "FastAPI", "TypeScript", "Angular", "LLM", "RAG", "Docker", "Postgres"],
    cards: [
      {
        title: "Stack",
        lines: ["Serviços web & APIs", "Django / FastAPI", "Postgres, filas, integrações"],
      },
      {
        title: "IA aplicada",
        lines: ["Copilotos e automações", "Guardrails e avaliação", "MVP em semanas"],
      },
    ],
  },

  site: {
    name: "Vitor Atair",
    siteDomain: "vitoratair.com",
    tagline:
      "Software web, APIs e IA aplicada · PJ no Brasil · remoto com equipas na Europa e noutros fusos",
    email: "vitor.ruts@gmail.com",
    phoneTel: "+351934843199",
    phoneDisplay: "+351 934 843 199",
    links: {
      linkedin: "https://www.linkedin.com/in/vitor-atair-57260649",
      instagram: "https://www.instagram.com/vitor_atair/",
      workedin: WORKEDIN,
    },
  },

  heroCopy: {
    badgeLeft: "[",
    badgeMid: " Remoto · B2B ",
    badgeRight: "]",
    titleBefore: "Olá, sou o",
    name: "Vitor",
    lead:
      "Curto levar coisa até produção: serviços estáveis, Django ou FastAPI no backend, e cada vez mais produto com LLMs e agentes quando faz sentido. Contrato como PJ no Brasil; o dia a dia é remoto com equipas em fusos diferentes, sempre que o teu lado conseguir formalizar pagamento a um prestador no Brasil.",
    ctaPrimary: "Falar de um projeto",
    ctaSecondary: "Ver serviços",
  },

  servicesSectionIntro:
    "Prestação de serviços por PJ no Brasil, com entrega remota para clientes no país ou no exterior quando a contratação de um prestador no Brasil for viável: projetos com escopo fechado, retainers ou fases de descoberta técnica. Também atendo micro e pequenas empresas com consultoria de automação — sentar contigo, perceber o processo no detalhe e desenhar o que dá para automatizar com retorno claro. Abaixo, os formatos em que mais costumo ajudar.",

  projectsSectionIntro:
    "Alguns eixos de trabalho em que participei de perto — de produto próprio a plataformas internas e, mais recentemente, IA aplicada a fluxos reais. Cada card é um resumo; numa conversa desdobro contexto, stack e o que faz sentido partilhar.",

  sectionMeta: {
    about: { kicker: "Apresentação", title: "Sobre mim" },
    services: { kicker: "Contratação", title: "Serviços (PJ)" },
    projects: { kicker: "Portfólio", title: "Projetos & cases" },
    skills: { kicker: "Stack", title: "Principais competências" },
    experience: { kicker: "Experiência", title: "Por onde passei" },
    contact: { kicker: "Contato", title: "Vamos conversar?" },
  },

  about: {
    intro:
      "Programo desde 2012. O que me interessa hoje é trabalhar com quem decide com clareza: escopo que se consegue medir, conversa direta (Slack, Meet, o que já usarem), e código que a tua equipa consegue manter depois da minha saída. Posso liderar uma fatia ponta a ponta ou encaixar-me no vosso ritmo de releases. Se já vivem em Django, APIs ou estão a experimentar copilotos internos, o arranque é rápido; se não, explico o caminho sem pressa nem buzzwords.",
    columns: [
      {
        title: "O que faço",
        body: "Desenvolvimento web, APIs e serviços em Python (Django e ecossistema), integrações, revisão de arquitetura e apoio a times que precisam acelerar entregas sem sacrificar qualidade.",
      },
      {
        title: "Como prefiro trabalhar",
        body: "Contrato por projeto ou pacote de horas, escopo claro, comunicação direta e entregas incrementais. Posso integrar Slack/Meet com o teu time ou operar de forma mais autónoma, conforme a fase do produto.",
      },
      {
        title: "IA & agentes",
        body: "Desenho e implementação de fluxos com modelos de linguagem: RAG sobre documentos internos, agentes com ferramentas (APIs, bases de dados), orquestração, observabilidade e camadas de segurança/guardrails quando o contexto exige.",
      },
    ],
  },

  services: [
    {
      title: "Agentes de IA & automação",
      summary: "De protótipo a produção: agentes que chamam APIs, consultam bases e seguem políticas claras.",
      bullets: [
        "Orquestração (LangGraph-style, pipelines próprios ou híbridos)",
        "Tool use seguro, retries, tracing e logging",
        "Integração com Slack, e-mail, webhooks e sistemas legados",
      ],
    },
    {
      title: "Aplicações com LLM",
      summary: "Chat corporativo, copilotos internos e assistentes com contexto da tua empresa.",
      bullets: [
        "RAG: chunking, embeddings, avaliação de qualidade das respostas",
        "Guardrails, filtros e limites de custo/latência",
        "Camada de API unificada por trás de vários modelos",
      ],
    },
    {
      title: "Backend, APIs & plataformas web",
      summary: "Serviços estáveis em Python/Django (ou stack alinhada ao projeto).",
      bullets: [
        "Modelagem de domínio, APIs REST e integrações",
        "Filas, tarefas agendadas, observabilidade básica",
        "Deploy e boas práticas de configuração (12-factor mindset)",
      ],
    },
    {
      title: "Consultoria em automação (micro e pequenas empresas)",
      summary:
        "Um formato pensado para quem não tem equipa de TI: sentamos juntos (presencial ou por vídeo), percorro o teu processo e ajudo a identificar o que pode ser automatizado ou simplificado.",
      bullets: [
        "Mapeamento prático: vendas, financeiro, operação, suporte, follow-ups, relatórios repetitivos",
        "Prioridade no que dá ganho rápido e no que exige um projeto à parte",
        "Recomendações concretas: ferramentas que já usas, integrações leves, formulários, e-mail, planilhas com regras ou pequenos desenvolvimentos quando fizer sentido",
      ],
    },
    {
      title: "Consultoria técnica",
      summary: "Quando precisas de um segundo par de olhos ou de desbloquear uma decisão.",
      bullets: [
        "Revisão de arquitetura e riscos antes de escalar",
        "Mentoria a devs juniores/plenos em stack Python web",
        "Spikes de viabilidade (incl. provas de conceito com IA)",
      ],
    },
  ],

  projects: [
    {
      title: "Workedin",
      description:
        "Co-fundação e desenvolvimento da plataforma em tempo recorde com equipa enxuta: produto, estratégia e software para lançamento da startup.",
      tags: ["Startup", "Web", "Produto"],
      link: { href: WORKEDIN, label: "workedin.com.br" },
    },
    {
      title: "Plataformas internas (Django)",
      description:
        "Linha de trabalho longa em ERPs e ferramentas web para operações e finanças — sobretudo no mundo da hospitalidade e integrações com sistemas de fora. Em paralelo, background em rede e Linux útil quando o produto conversa com hardware ou laboratório.",
      tags: ["Django", "APIs", "Linux"],
    },
    {
      title: "Copilotos internos com LLM",
      description:
        "Padrões de assistência sobre documentação e fluxos internos: contexto empresarial, respostas auditáveis e integração com ferramentas já usadas pela equipa.",
      tags: ["LLM", "RAG", "Agentes"],
    },
    {
      title: "Automação inteligente de workflows",
      description:
        "Encadeamento de passos com decisão assistida por modelo, validações human-in-the-loop quando necessário e métricas simples de qualidade.",
      tags: ["Automação", "Integrações", "IA aplicada"],
    },
  ],

  skillsIntro:
    "Se o teu problema é negócio primeiro: isto traduz-se em sistemas que não caem ao fim de semana, integrações que não dependem de um herói único, e, quando faz sentido, assistentes internos que a equipa confia. Tecnicamente, é a stack abaixo — o que uso em produção e com clientes.",

  skills: [
    {
      title: "Python, Django & FastAPI",
      body: "Produtos web e APIs estáveis com Django (ORM, admin, auth, testes). FastAPI quando o contrato OpenAPI, performance async ou integrações em tempo real pesam mais.",
    },
    {
      title: "IA aplicada: LLM, RAG e agentes",
      body: "RAG e bases vectoriais, tool-calling e agentes (incl. MCP onde o ecossistema já expõe ferramentas), saídas estruturadas, avaliação e guardrails — sempre com olho em custo, latência e privacidade.",
    },
    {
      title: "TypeScript, React, Angular & Vite",
      body: "SPAs e dashboards com React (Vite) ou Angular: componentes reutilizáveis, rotas, tipagem forte e build moderno; integração com APIs e alinhamento com equipas de produto e design systems quando existem.",
    },
    {
      title: "Postgres, dados & mensageria",
      body: "Modelagem relacional, migrações e consultas eficientes; filas, jobs agendados e webhooks para desacoplar serviços e integrar sistemas legados.",
    },
    {
      title: "Docker, CI/CD & cloud pragmática",
      body: "Imagens reprodutíveis, pipelines em GitHub Actions (ou similares) e deploy em cloud ou VPS; configuração 12-factor, secrets e health checks.",
    },
    {
      title: "Observabilidade & APIs resilientes",
      body: "Logging estruturado, tracing e métricas leves onde importa; timeouts, retries idempotentes, rate limits e contratos de API claros para serviços expostos.",
    },
    {
      title: "Git, Linux & redes",
      body: "Branches curtas, revisão de código e releases previsíveis; fundo em Linux e rede útil para depurar integrações, containers e ambientes híbridos.",
    },
  ],

  experience: {
    fullName: "Vitor Atair da Silva",
    blurb:
      "Há mais de uma década a meter código em produção. Em vez de uma linha do tempo com meses e vírgulas, gosto de pensar em blocos: onde estive, que problemas apareciam no dia a dia, e com que línguas e frameworks as coisas ganhavam forma. Não entram aqui nomes de clientes finais nem pormenores confidenciais — isso fica para conversa fechada. Se alguém precisar de um PDF para anexar a uma proposta, está no fim da página.",
    pdfHref: "/CV_VITOR_ATAIR.pdf",
    pdfLinkLabel: "PDF com o detalhe completo — por exemplo para anexar a uma proposta",
    roles: [
      {
        title: "Senior software developer · alocação na Bosch Security Systems",
        company: "Devoteam",
        tenure: "Cerca de dois anos",
        location: "Alemanha",
        lines: [
          "Contrato com a Devoteam (consultoria / outsourcing de engenharia): o vínculo e a fatura são pela consultora; o trabalho foi em tempo integral integrado na equipa do cliente Bosch Security Systems, na Alemanha, no produto de câmaras IP.",
          "Equipa de câmaras de segurança IP: evolução de funcionalidades e de performance em software que vive colado ao hardware — do pipeline de eventos até ao que chega ao operador.",
          "Muito Python para a parte “orquestra”: regras, serviços, testes automatizados e ferramentas que aceleravam o ciclo de desenvolvimento.",
          "C onde a conversa era mesmo apertada: drivers, comunicação com sensores, timeouts e estados inconsistentes quando o bus falha ou o dispositivo fica meses ligado num corredor qualquer.",
          "Desenho de máquinas de estado e filas de eventos assíncronos para não perder picos de tráfego nem ficar com tarefas metade feitas; depois era medir no campo se o equipamento ficava mais previsível e com menos surpresas.",
        ],
      },
      {
        title: "Senior software developer",
        company: "Nonius Software",
        tenure: "Boa temporada de projetos — uns quatro anos",
        location: "Porto",
        lines: [
          "EISA (stack DRF): uma ferramenta de integração que puxava dados e “recursos” de vários ERPs externos para o ERP interno da Nonius, para consolidar contabilidade e operações sem copy-paste entre sistemas. Entrei na discussão de arquitetura e fui responsável por desenvolver cada novo fluxo ou conector que aparecia na roadmap.",
          "Nonius Expenses: aplicação web para despesas e benefícios — submissão, anexos, aprovações, histórico por colaborador. Angular no cliente, Django REST atrás, com atenção a permissões e a não deixar o utilizador perdido no meio de estados.",
          "Gestão de encomendas / ERP interno em Django: encomendas, faturação, pagamentos, projetos e ligação a fornecedores. Backend e templates quando fazia sentido, e bastante SQL e integrações ponta a ponta com ERPs de fora quando a contabilidade exigia números alinhados.",
          "Manutenção de longo prazo: produção com utilizadores reais, corrigir regressões, e refatorar sítios onde a dívida técnica começava a custar caro a cada feature nova.",
          "Participação em especificações de arquitetura quando um módulo novo tinha de conviver com legado e com APIs lentas ou caprichosas.",
        ],
      },
      {
        title: "Senior software developer",
        company: "Dealer Marketing",
        tenure: "Cerca de dois anos",
        location: "Dublin",
        lines: [
          "Contact center que deixou de depender de dias perdidos em folhas: clicar e discar, relatórios na hora.",
          "Um CRM onde marketing e vendas viam finalmente o mesmo filme — dados no mesmo sítio, menos cópias manuais.",
          "Ambiente de consultoria compacta: prazos curtos, demonstrações frequentes para stakeholders, e código que tinha de aguentar utilizadores pouco pacientes com lentidão.",
        ],
      },
      {
        title: "Software developer",
        company: "Intelbras",
        tenure: "Dois anos",
        location: "Santa Catarina",
        lines: [
          "Firmware para switches e routers geridos — especificações apertadas, laboratório, e C em baixo nível.",
          "Um sistema em Python e Django (com interface web) para gerir access points na rede.",
          "Também ajudar a perceber se um produto novo tinha pernas técnicas e comerciais antes de ganhar número de peça.",
          "Contacto constante com engenharia de hardware: quando o bug é na fronteira entre software e placa, alguém tem de ir lá com o osciloscópio ou com logs muito chatos.",
        ],
      },
    ],
  },

  hobbies: {
    kicker: "além do ecrã",
    title: "Desporto e ar livre",
    body: "Gosto de desporto e de estar no ar livre: sobretudo bicicleta (estrada e subidas pela serra), snowboard quando há neve, e outras coisas no mesmo espírito — trilhos, neve, velocidade controlada. É o contraponto que equilibra tanto tempo em frente ao ecrã.",
  },

  contact: {
    title: "Vamos conversar?",
    intro:
      "Conta-me em poucas linhas o contexto (produto, stack, prazo e se já tens modelo de contrato PJ). Resposta típica em até um ou dois dias úteis.",
    phoneIntro: "Se for urgente ou preferires voz, liga ou envia WhatsApp:",
    phoneZone: "Porto · fuso europeu",
  },

  contactForm: {
    subject: "Contato site — projeto PJ",
    nameLabel: "Nome",
    emailLabel: "E-mail",
    messageLabel: "Mensagem",
    namePlaceholder: "O teu nome",
    emailPlaceholder: "O teu e-mail",
    messagePlaceholder: "Resumo do projeto, stack, prazo…",
    submit: "Enviar mensagem",
    submitting: "A enviar…",
    success: "Mensagem enviada com sucesso. Obrigado — responderei em breve.",
    error: "Não foi possível enviar. Tenta de novo daqui a pouco ou escreve diretamente para o e-mail no rodapé.",
  },
};

export type Messages = typeof messages;
