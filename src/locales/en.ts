import type { Messages } from "./pt";

const WORKEDIN = "https://www.workedin.com.br";

export const messages: Messages = {
  navLinks: [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#hobbies", label: "Beyond the screen" },
    { href: "#contact", label: "Contact" },
  ],

  navAriaLabel: "Main navigation",

  heroGraphPanel: {
    snapshotKicker: "snapshot",
    snapshotTitle: "Engineering · web & AI",
    snapshotLines: [
      "Technical snapshot: Postgres, queues, Docker, CI; on the model side, sensible chunking for RAG, tool-calling with guardrails, tracing, and an eye on cost and latency.",
      "TypeScript front ends (React or Angular) when the product needs a dashboard or guided flow; clear API contracts between services.",
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
    siteDomain: "vitoratair.com",
    tagline:
      "Web, APIs & applied AI · Brazil-registered LLC · remote with teams across time zones",
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
    badgeMid: " Remote · B2B ",
    badgeRight: "]",
    titleBefore: "Hi, I'm",
    name: "Vitor",
    lead:
      "I like shipping things that stay up: reliable services, Django or FastAPI on the backend, and—when it fits—LLM-backed products and agents. I contract as an LLC in Brazil; day to day is remote with teams in different time zones, whenever your side can pay a Brazil-based service provider.",
    ctaPrimary: "Discuss a project",
    ctaSecondary: "View services",
  },

  servicesSectionIntro:
    "Services through a Brazil-registered LLC, delivered remotely for clients in Brazil or abroad whenever hiring a Brazil-based service provider works for you: fixed-scope projects, retainers, or technical discovery phases. I also support micro and small businesses with automation consulting — working through your process with you and spelling out what can realistically be automated. Below are the formats where I help the most.",

  projectsSectionIntro:
    "A few threads I’ve worked on closely — from a founder-led product to internal platforms and, more recently, applied AI in real workflows. The cards are summaries; on a call I’ll unpack context, stack, and what actually shipped.",

  sectionMeta: {
    about: { kicker: "Intro", title: "About me" },
    services: { kicker: "Engagement", title: "Services (LLC)" },
    projects: { kicker: "Portfolio", title: "Projects & cases" },
    skills: { kicker: "Stack", title: "Core skills" },
    experience: { kicker: "Experience", title: "Where I’ve been" },
    contact: { kicker: "Contact", title: "Let’s talk" },
  },

  about: {
    intro:
      "I’ve been building software since 2012. What I care about now is working with people who can decide clearly: scope you can measure, direct communication (Slack, Meet, whatever you already use), and code your team can maintain after I’m gone. I can own a slice end to end or match your release cadence. If you already live in Django, APIs, or you’re piloting internal copilots, onboarding is quick; if not, we can walk the path without buzzwords.",
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
      title: "Internal Django platforms",
      description:
        "A long thread of ERP-style tools and web apps for operations and finance—especially in hospitality, with integrations into external systems. Alongside that, networking and Linux background when the product talks to hardware or lab benches.",
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
    "If you think business first: this means systems that don’t fall over on weekends, integrations that don’t depend on a single hero engineer, and—when it fits—internal assistants your team actually trusts. Technically, it’s the stack below—what I run in production with clients.",

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

  experience: {
    blurb:
      "I’ve been shipping real software for well over a decade. Rather than a résumé-style timeline with exact months, I prefer chunks: where I was, what kept us busy week to week, and what we actually built with. No end-customer names or confidential bits here — that stays for a private thread. If you need a PDF to attach to a proposal, it’s linked at the bottom.",
    pdfHref: "/CV_VITOR_ATAIR.pdf",
    pdfLinkLabel: "Full PDF — handy if someone asks for an attachment",
    roles: [
      {
        title: "Senior software developer",
        company: "Bosch Security Systems",
        tenure: "About two years",
        location: "Germany",
        lines: [
          "IP security camera team: shipping features and tightening performance in software that sits right on top of hardware — from the event pipeline to what the operator actually sees.",
          "Heavy use of Python for the “orchestration” side: business rules, services, automated tests, and tooling that kept the dev loop moving.",
          "C in the tight spots: drivers, sensor I/O, timeouts, and weird half-states when the bus glitches or a unit runs for months in a corridor somewhere.",
          "State machines and async event queues so bursts didn’t get dropped and work didn’t stall half-done; then validating in the field that behaviour was steadier and less surprising.",
        ],
      },
      {
        title: "Senior software developer",
        company: "Nonius Software",
        tenure: "A solid run — on the order of four years",
        location: "Porto",
        lines: [
          "EISA (DRF stack): an integration tool that pulled data and “resources” from several external ERPs into Nonius’s internal ERP so finance and ops could consolidate without spreadsheet gymnastics. I joined architecture discussions and owned development for each new flow or connector on the roadmap.",
          "Nonius Expenses: a web app for expenses and benefits — submission, attachments, approvals, per-employee history. Angular on the client, Django REST behind it, with care for permissions and for not losing people in half-finished states.",
          "Order-management / internal ERP in Django: orders, invoicing, payments, projects, and supplier links. Backend and server-rendered UI where it fit, plus a lot of SQL and end-to-end integrations when accounting needed numbers to line up with external systems.",
          "Long-running maintenance: real users in production, regression fixes, and refactors where tech debt was starting to tax every new feature.",
          "Architecture specs when a new module had to coexist with legacy code and with slow or finicky external APIs.",
        ],
      },
      {
        title: "Senior software developer",
        company: "Dealer Marketing",
        tenure: "About two years",
        location: "Dublin",
        lines: [
          "Contact centre work that stopped relying on lost days in spreadsheets — click to dial, reports when you need them.",
          "A CRM where sales and marketing could finally read from the same script — one place for the data, fewer manual copies.",
          "Small consultancy-style environment: tight deadlines, frequent demos for stakeholders, and code that had to survive impatient users when anything felt slow.",
        ],
      },
      {
        title: "Software developer",
        company: "Intelbras",
        tenure: "Two years",
        location: "Santa Catarina",
        lines: [
          "Firmware for managed switches and routers — tight specs, lab time, low-level C.",
          "A Python and Django system (with a web UI) to manage access points on the network.",
          "Helping figure out whether a new product idea had legs technically and commercially before it got a part number.",
          "Plenty of time next to hardware engineers—when the bug sits on the software/board boundary, someone has to show up with logs or a scope.",
        ],
      },
    ],
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
    phoneIntro: "If it’s urgent or you’d rather talk, call or WhatsApp:",
    phoneZone: "Porto · European time",
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
    submitting: "Sending…",
    success: "Message sent successfully. Thanks — I’ll get back to you soon.",
    error: "Could not send right now. Please try again in a moment or email me directly using the address in the footer.",
  },
};
