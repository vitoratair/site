import type { Messages } from "./pt";

const WORKEDIN = "http://www.workedin.com.br";

export const messages: Messages = {
  navLinks: [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#resume", label: "Résumé" },
    { href: "#hobbies", label: "Beyond the screen" },
    { href: "#contact", label: "Contact" },
  ],

  navAriaLabel: "Main navigation",

  heroGraphPanel: {
    snapshotKicker: "snapshot",
    snapshotTitle: "Engineering · web & AI",
    snapshotLines: [
      "I bill as a legal entity in Brazil (CNPJ). I work remotely with clients in Brazil or anywhere in the world, whenever your organization can contract a Brazil-based service provider.",
      "Strong in Python/Django and in designing LLM flows: RAG, tool-using agents, and production guardrails.",
    ],
    tags: ["Python", "Django", "FastAPI", "TypeScript", "Angular", "LLM", "RAG", "Docker", "Postgres"],
    cards: [
      {
        title: "Stack",
        lines: ["Web services & APIs", "Django / FastAPI", "Postgres, queues, integrations"],
      },
      {
        title: "Applied AI",
        lines: ["Copilots & automation", "Guardrails & evals", "MVPs in weeks"],
      },
    ],
  },

  site: {
    name: "Vitor Atair",
    tagline:
      "Software engineer · Brazil-based LLC · remote work for Brazil & international clients (contracting via a Brazil-based provider) · web, APIs, and applied AI",
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
    badgeMid: " Remote · B2B ",
    badgeRight: "]",
    titleBefore: "Hi, I'm",
    name: "Vitor",
    ctaPrimary: "Discuss a project",
    ctaSecondary: "View services",
  },

  servicesSectionIntro:
    "Services through a Brazil-registered LLC, delivered remotely for clients in Brazil or abroad whenever hiring a Brazil-based service provider works for you: fixed-scope projects, retainers, or technical discovery phases. I also support micro and small businesses with automation consulting — working through your process with you and spelling out what can realistically be automated. Below are the formats where I help the most.",

  projectsSectionIntro:
    "Selected work and product lines where I led or co-led engineering — refine each card as public case studies become available.",

  sectionMeta: {
    about: { kicker: "Intro", title: "About me" },
    services: { kicker: "Engagement", title: "Services (LLC)" },
    projects: { kicker: "Portfolio", title: "Projects & cases" },
    skills: { kicker: "Stack", title: "Core skills" },
    resume: { kicker: "CV", title: "Full résumé" },
    contact: { kicker: "Contact", title: "Let’s talk" },
  },

  about: {
    intro:
      "I’ve been building software since 2012. Today I operate as an LLC (CNPJ) in Brazil and can own end-to-end delivery or embed with your team — remotely, with clients in Brazil or internationally, whenever the commercial relationship can be with a Brazil-based service provider. Growing focus on applied AI: agents, LLM integrations, and products that need to scale safely.",
    columns: [
      {
        title: "What I do",
        body: "Web development, APIs, and Python services (Django ecosystem), integrations, architecture reviews, and support for teams that need to ship faster without cutting corners.",
      },
      {
        title: "How I like to work",
        body: "Project-based or hour bundles, clear scope, direct communication, and incremental releases. I can join Slack/Meet with your team or run more autonomously depending on the product phase.",
      },
      {
        title: "AI & agents",
        body: "Design and implementation of language-model workflows: internal-document RAG, tool-using agents (APIs, databases), orchestration, observability, and security/guardrails when the context demands it.",
      },
    ],
  },

  services: [
    {
      title: "AI agents & automation",
      summary: "From prototype to production: agents that call APIs, query data stores, and follow explicit policies.",
      bullets: [
        "Orchestration (LangGraph-style, custom pipelines, or hybrid)",
        "Safe tool use, retries, tracing, and logging",
        "Slack, email, webhooks, and legacy system integrations",
      ],
    },
    {
      title: "LLM-powered applications",
      summary: "Corporate chat, internal copilots, and assistants grounded in your company context.",
      bullets: [
        "RAG: chunking, embeddings, response-quality checks",
        "Guardrails, filters, and cost/latency budgets",
        "A unified API layer across multiple model providers",
      ],
    },
    {
      title: "Backend, APIs & web platforms",
      summary: "Reliable services in Python/Django (or a stack aligned with the project).",
      bullets: [
        "Domain modeling, REST APIs, and integrations",
        "Queues, scheduled jobs, baseline observability",
        "Deployment and pragmatic 12-factor configuration",
      ],
    },
    {
      title: "Automation consulting (micro & small businesses)",
      summary:
        "Built for teams without a dedicated IT function: we meet in person or on video, walk your process end to end, and identify what can be automated or simplified.",
      bullets: [
        "Practical mapping: sales, finance, operations, support, follow-ups, recurring reports",
        "Clear prioritization between quick wins and work that needs a separate project",
        "Actionable recommendations: tools you already use, light integrations, forms, email, spreadsheets with rules, or small bespoke builds when it pays off",
      ],
    },
    {
      title: "Technical consulting",
      summary: "When you need a second opinion or to unblock a decision.",
      bullets: [
        "Architecture and risk review before scaling",
        "Mentoring junior/mid engineers on Python web stacks",
        "Feasibility spikes (including AI PoCs)",
      ],
    },
  ],

  projects: [
    {
      title: "Workedin",
      description:
        "Co-founded and built the platform in record time with a lean team: product, go-to-market, and software to launch the startup.",
      tags: ["Startup", "Web", "Product"],
      link: { href: WORKEDIN, label: "workedin.com.br" },
    },
    {
      title: "Enterprise Django platforms",
      description:
        "Years building and evolving web and management systems in industrial R&D, integrating networks, Linux, and demanding product constraints.",
      tags: ["Django", "APIs", "Linux"],
    },
    {
      title: "Internal LLM copilots",
      description:
        "Assistive patterns over internal docs and workflows: business context, auditable answers, and integration with tools the team already uses.",
      tags: ["LLM", "RAG", "Agents"],
    },
    {
      title: "Smart workflow automation",
      description:
        "Step chains with model-assisted decisions, human-in-the-loop checks when needed, and lightweight quality signals.",
      tags: ["Automation", "Integrations", "Applied AI"],
    },
  ],

  skillsIntro:
    "Stack I ship in production and with clients — from APIs and data to modern front ends and AI-backed services.",

  skills: [
    {
      title: "Python, Django & FastAPI",
      body: "Stable web products and APIs with Django (ORM, admin, auth, tests). FastAPI when OpenAPI contracts, async performance, or real-time integrations matter most.",
    },
    {
      title: "Applied AI: LLMs, RAG & agents",
      body: "RAG and vector stores, tool-calling and agents (including MCP where the stack already exposes tools), structured outputs, evaluation, and guardrails — always mindful of cost, latency, and privacy.",
    },
    {
      title: "TypeScript, React, Angular & Vite",
      body: "SPAs and dashboards with React (Vite) or Angular: reusable components, routing, strong typing, and modern tooling; API integration and alignment with product teams and design systems when they exist.",
    },
    {
      title: "Postgres, data & messaging",
      body: "Relational modeling, migrations, and efficient queries; queues, scheduled jobs, and webhooks to decouple services and integrate legacy systems.",
    },
    {
      title: "Docker, CI/CD & pragmatic cloud",
      body: "Reproducible images, GitHub Actions-style pipelines, and deploys to cloud or VPS; 12-factor config, secrets, and health checks.",
    },
    {
      title: "Observability & resilient APIs",
      body: "Structured logging, tracing, and lightweight metrics where it counts; timeouts, idempotent retries, rate limits, and clear API contracts for public surfaces.",
    },
    {
      title: "Git, Linux & networking",
      body: "Short-lived branches, code review, and predictable releases; Linux and networking background that helps debug integrations, containers, and hybrid environments.",
    },
  ],

  resume: {
    fullName: "Vitor Atair da Silva",
    blurb:
      "Full résumé with education and detailed experience. If a project or LLC engagement makes sense, reach out on LinkedIn or via the form below.",
    downloadLabel: "Download CV",
  },

  hobbies: {
    kicker: "beyond the screen",
    title: "Sports & the outdoors",
    body: "I’m into sports and time outside: mostly cycling (road and mountain climbs), snowboarding when there’s snow, and anything in that same lane—trails, powder, speed with control. It balances out all the screen-heavy work.",
  },

  contact: {
    title: "Let’s talk?",
    intro:
      "Send a few lines of context (product, stack, timeline, and whether you already have an LLC-friendly contract template). I usually reply within one to two business days.",
  },

  contactForm: {
    subject: "Website contact — LLC project",
    nameLabel: "Name",
    emailLabel: "Email",
    messageLabel: "Message",
    namePlaceholder: "Your name",
    emailPlaceholder: "Your email",
    messagePlaceholder: "Project summary, stack, timeline…",
    submit: "Send message",
  },
};
