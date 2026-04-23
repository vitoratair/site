import type { Messages } from "./pt";

const WORKEDIN = "http://www.workedin.com.br";

export const messages: Messages = {
  navLinks: [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#courses", label: "Courses" },
    { href: "#experience", label: "Experience" },
    { href: "#resume", label: "Résumé" },
    { href: "#hobbies", label: "Life" },
    { href: "#contact", label: "Contact" },
  ],

  navAriaLabel: "Main navigation",

  heroGraphPanel: {
    snapshotKicker: "snapshot",
    snapshotTitle: "Engineering · web & AI",
    snapshotLines: [
      "I work as a legal entity (CNPJ) in Brazil and take on scoped projects: product engineering, backends, and applied AI solutions.",
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
    tagline: "Software engineer · Brazil-based LLC · web, APIs, and applied AI",
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
    "Services via LLC in Brazil: fixed-scope projects, retainers, or technical discovery phases. I also support micro and small businesses with automation consulting — working through your process with you and spelling out what can realistically be automated. Below are the formats where I help the most.",

  projectsSectionIntro:
    "Selected work and product lines where I led or co-led engineering — refine each card as public case studies become available.",

  sectionMeta: {
    about: { kicker: "Intro", title: "About me" },
    services: { kicker: "Engagement", title: "Services (LLC)" },
    projects: { kicker: "Portfolio", title: "Projects & cases" },
    skills: { kicker: "Stack", title: "Core skills" },
    courses: { kicker: "Learning", title: "Courses" },
    experience: { kicker: "Timeline", title: "Professional path" },
    resume: { kicker: "CV", title: "Full résumé" },
    contact: { kicker: "Contact", title: "Let’s talk" },
  },

  about: {
    intro:
      "I’ve been building software since 2012. Today I operate as an LLC (CNPJ) in Brazil and can own end-to-end delivery or embed with your team — with a growing focus on applied AI: agents, LLM integrations, and products that need to scale safely.",
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

  coursesIntro:
    "Courses that shaped how I think about code, product, and collaboration — not all are pure software, but all influenced my work.",

  courses: ["Clean Code", "Django", "Canvas", "CCNA"],

  timeline: [
    {
      role: "Co-founder & engineer",
      org: "Workedin",
      date: "December 2014",
      paragraphs: [
        "Startup kick-off with four peers: in under two months we had software, commercial strategy, and a registered company. My first time taking a product from zero to launch with shared ownership.",
      ],
      link: { href: WORKEDIN, label: "workedin.com.br" },
    },
    {
      role: "Software engineer",
      org: "Intelbras — Wireless Indoor R&D",
      date: "Since January 2014",
      paragraphs: [
        "Django platform for wireless network management in an industrial setting, with strong Linux, protocols, and product requirements. Continuous learning in agile methods and aligning engineering with real customer usage.",
      ],
    },
    {
      role: "Product engineer",
      org: "Intelbras — Wired Network R&D",
      date: "July 2013",
      paragraphs: [
        "Working with marketing specs, customer conversations, and product thinking beyond code. Canvas, design thinking, and Scrum to clarify priorities and reduce rework.",
      ],
    },
    {
      role: "Product validator",
      org: "Intelbras — INET R&D",
      date: "November 2012",
      paragraphs: [
        "Rigorous software/hardware testing; deep GNU/Linux and FreeBSD work with bash/perl scripts. Strong networking foundations I still use when designing distributed systems.",
      ],
    },
    {
      role: "Intern",
      org: "Intelbras — ICON R&D",
      date: "November 2011",
      paragraphs: [
        "First serious exposure to engineering while validating a DECT platform; sparked interest in C and low-level software.",
      ],
    },
    {
      role: "Early jobs",
      org: "",
      date: "Feb 2009 — Oct 2011",
      paragraphs: [
        "Teaching assistant (Excel, Fireworks, CorelDRAW, Photoshop), computer repair, and graphic design work — visual communication and deadline discipline.",
      ],
    },
  ],

  resume: {
    fullName: "Vitor Atair da Silva",
    blurb:
      "Full résumé with education and detailed experience. If a project or LLC engagement makes sense, reach out on LinkedIn or via the form below.",
    downloadLabel: "Download CV",
  },

  hobbies: {
    title: "Downtime",
    body: "Guitar, football with friends, and above all cycling new roads and mountains to unplug from the screen.",
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
