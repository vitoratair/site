const WORKEDIN = "http://www.workedin.com.br";

export const messages = {
  navLinks: [
    { href: "#home", label: "Início" },
    { href: "#about", label: "Sobre" },
    { href: "#services", label: "Serviços" },
    { href: "#projects", label: "Projetos" },
    { href: "#skills", label: "Skills" },
    { href: "#courses", label: "Cursos" },
    { href: "#experience", label: "Experiência" },
    { href: "#resume", label: "CV" },
    { href: "#hobbies", label: "Lazer" },
    { href: "#contact", label: "Contato" },
  ],

  navAriaLabel: "Navegação principal",

  heroGraphPanel: {
    snapshotKicker: "snapshot",
    snapshotTitle: "Engenharia · web & IA",
    snapshotLines: [
      "Atuo como pessoa jurídica (CNPJ) no Brasil, aberto a projetos sob demanda: produto, backend e soluções com IA.",
      "Forte em Python/Django e em desenho de fluxos com LLMs, RAG e agentes com ferramentas.",
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
    tagline: "Desenvolvedor de software · PJ no Brasil · projetos web, APIs e IA aplicada",
    email: "vitor.ruts@gmail.com",
    links: {
      linkedin: "https://www.linkedin.com/pub/vitor-atair/49/606/572",
      facebook: "https://www.facebook.com/vitor.atair",
      resume:
        "https://drive.google.com/file/d/0B64fnH-n5_qpTF8zOEVfQTQ5Z3M/view?usp=sharing",
      workedin: WORKEDIN,
    },
  },

  heroCopy: {
    badgeLeft: "[",
    badgeMid: " Remoto · B2B ",
    badgeRight: "]",
    titleBefore: "Olá, sou o",
    name: "Vitor",
    ctaPrimary: "Falar de um projeto",
    ctaSecondary: "Ver serviços",
  },

  servicesSectionIntro:
    "Prestação de serviços por PJ no Brasil: projetos com escopo fechado, retainers ou fases de descoberta técnica. Também atendo micro e pequenas empresas com consultoria de automação — sentar contigo, perceber o processo no detalhe e desenhar o que dá para automatizar com retorno claro. Abaixo, os formatos em que mais costumo ajudar.",

  projectsSectionIntro:
    "Seleção de trabalhos e linhas de produto em que já fui responsável ou co-responsável técnico — podes detalhar cada card conforme forem surgindo cases públicos.",

  sectionMeta: {
    about: { kicker: "Apresentação", title: "Sobre mim" },
    services: { kicker: "Contratação", title: "Serviços (PJ)" },
    projects: { kicker: "Portfólio", title: "Projetos & cases" },
    skills: { kicker: "Stack", title: "Principais competências" },
    courses: { kicker: "Formação", title: "Cursos" },
    experience: { kicker: "Timeline", title: "Trajetória profissional" },
    resume: { kicker: "CV", title: "Currículo completo" },
    contact: { kicker: "Contato", title: "Vamos conversar?" },
  },

  about: {
    intro:
      "Sou desenvolvedor de software desde 2012. Hoje trabalho como PJ no Brasil e posso assumir projetos de desenvolvimento ponta a ponta ou em parceria com o teu time — com foco crescente em IA aplicada: agentes, integrações com LLM e produtos que precisam escalar com segurança.",
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
      title: "Plataformas corporativas (Django)",
      description:
        "Anos a construir e evoluir sistemas web e de gestão em ambiente de I&D industrial, com integração a redes, Linux e requisitos de produto exigentes.",
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
    "Stack que uso em produção e com clientes — de APIs e dados a interfaces modernas e serviços com IA.",

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

  coursesIntro:
    "Alguns cursos que moldaram como penso código, produto e colaboração — nem todos são de software, mas todos influenciaram o trabalho.",

  courses: ["Clean Code", "Django", "Canvas", "CCNA"],

  timeline: [
    {
      role: "Cofundador e desenvolvedor",
      org: "Workedin",
      date: "Dezembro 2014",
      paragraphs: [
        "Arranque de startup com mais quatro colegas: em menos de dois meses tínhamos software, estratégia comercial e empresa aberta. Foi o primeiro projeto em que levei um produto do zero ao ar com responsabilidade partilhada.",
      ],
      link: { href: WORKEDIN, label: "workedin.com.br" },
    },
    {
      role: "Desenvolvedor de software",
      org: "Intelbras — P&D Wireless Indoor",
      date: "Desde Janeiro 2014",
      paragraphs: [
        "Plataforma Django para gestão e controlo de redes wireless em contexto industrial, com forte componente Linux, protocolos e necessidades de produto. Aprendizagem contínua em metodologias ágeis e em como alinhar engenharia com o que o cliente realmente usa.",
      ],
    },
    {
      role: "Desenvolvedor de produto",
      org: "Intelbras — P&D Wired Network",
      date: "Julho 2013",
      paragraphs: [
        "Foco em especificação com marketing, contacto com clientes e visão de produto além do código. Canvas, design thinking e Scrum como ferramentas para clarificar prioridades e reduzir retrabalho.",
      ],
    },
    {
      role: "Validador de produto",
      org: "Intelbras — P&D INET",
      date: "Novembro 2012",
      paragraphs: [
        "Testes de software e hardware em cenários exigentes; aprofundamento em GNU/Linux e FreeBSD e scripts em bash/perl. Base forte em redes e protocolos que ainda uso ao desenhar sistemas distribuídos.",
      ],
    },
    {
      role: "Estagiário",
      org: "Intelbras — P&D ICON",
      date: "Novembro 2011",
      paragraphs: [
        "Primeiro contacto sério com desenvolvimento ao validar plataforma DECT; despertou o interesse por programação em C e por entender software de baixo nível.",
      ],
    },
    {
      role: "Primeiros trabalhos",
      org: "",
      date: "Fev. 2009 — Out. 2011",
      paragraphs: [
        "Auxiliar de cursos (Excel, Fireworks, CorelDRAW, Photoshop), manutenção de computadores e trabalho com design gráfico — percurso que ensinou comunicação visual e disciplina com prazos.",
      ],
    },
  ],

  resume: {
    fullName: "Vitor Atair da Silva",
    blurb:
      "Currículo completo com formação e experiência detalhadas. Se fizer sentido para um projeto ou parceria PJ, fala comigo no LinkedIn ou pelo formulário abaixo.",
    downloadLabel: "Baixar CV",
  },

  hobbies: {
    title: "Tempo livre",
    body: "Guitarra, futebol com amigos e, sobretudo, pedalar por sítios novos — estradas e montanha para desligar do ecrã.",
  },

  contact: {
    title: "Vamos conversar?",
    intro:
      "Conta-me em poucas linhas o contexto (produto, stack, prazo e se já tens modelo de contrato PJ). Resposta típica em até um ou dois dias úteis.",
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
  },
};

export type Messages = typeof messages;
