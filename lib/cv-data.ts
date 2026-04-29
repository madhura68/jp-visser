export type Lang = "nl" | "en";

export type Experience = {
  company: string;
  location: string;
  period: string;
  role: string;
  description: string;
  highlights: { title: string; text: string }[];
};

export type SpokenLanguage = {
  label: string;
  flag: string;
  progress: number;
};

export type AppEntry = {
  title: string;
  subtitle: string;
  description: string;
  screenshot: string;
  screenshotMobile?: string;
  href: string;
};

const cvDataNl = {
  name: "Janpeter Visser",
  tagline: "Software Engineer · Full Stack Developer",
  intro:
    "Software engineer en full stack developer met ruim dertig jaar ervaring in het bouwen, onderhouden en verbeteren van software. Sterk in het aanbrengen van structuur, het doorgronden van bestaande systemen en het ontwikkelen van praktische webapplicaties. Werkt met TypeScript, React, Next.js, C#, databases en AI-tools zoals Claude Code en ChatGPT. Beschikbaar voor een duurzame parttime inzet.",
  motivation: [
    "Met mijn achtergrond als software engineer en full stack developer ben ik op zoek naar een rol waarin ik mijn brede ervaring opnieuw gericht kan inzetten. Ik heb ruim dertig jaar ervaring met het ontwerpen, bouwen en verbeteren van software, van bedrijfskritische webapplicaties en klantportalen tot moderne full stack toepassingen met TypeScript, React, Next.js, C# en databases.",
    "Wat mij typeert is dat ik snel structuur aanbreng in complexe systemen. Ik vind het interessant om bestaande software begrijpelijker, stabieler en bruikbaarder te maken, maar ook om nieuwe tools te bouwen die direct waarde leveren. De laatste tijd werk ik veel met AI-tools zoals Claude Code en ChatGPT, onder andere in eigen projecten zoals Scrum4Me en de Inspannings Monitor. Daardoor combineer ik jarenlange technische ervaring met een moderne, praktische manier van ontwikkelen.",
    "Ik zoek bij voorkeur een parttime rol waarin ik duurzaam en geconcentreerd kan bijdragen, met een inzetbaarheid van ongeveer 50%. In zo'n vorm kom ik het beste tot mijn recht: met duidelijke prioriteiten, heldere communicatie en werk waarin kwaliteit, continuïteit en betrouwbaarheid belangrijk zijn.",
    "Ik breng rust, ervaring en technisch overzicht mee, en werk graag samen met mensen die software willen maken die echt gebruikt wordt.",
  ],
  contact: {
    email: "janpetervisser2@gmail.com",
    location: "Rotterdam",
  },
  experience: [
    {
      company: "QPIT BV",
      location: "Rotterdam",
      period: "januari 2004 – februari 2024",
      role: "Software Engineer",
      description:
        "Bij QPIT heb ik meerdere functies gehad in een multidisciplinaire rol. Ik heb bijgedragen aan het ontwikkelen van het proprietary softwaresysteem Quism (Servicedesk software) en het inrichten hiervan voor klanten.",
      highlights: [
        {
          title: "Software Engineer Quism",
          text: "Webapplicatie voor service management (ITIL) cross-browser compatible gemaakt. Tools ontwikkeld waarmee ASP, JavaScript en HTML geanalyseerd en aangepast kon worden. Ondersteunende tools gebouwd voor e-mail ticket integratie via IMAP, MAPI en POP3.",
        },
        {
          title: "Research & Development",
          text: "Onderzoek naar nieuwe ontwikkelomgevingen voor mobile devices. Dit leidde tot het ontwikkelen van full stack PWA applications met Angular, TypeScript en C#.",
        },
        {
          title: "Product Development",
          text: "Diverse klantenportalen gemaakt voor mobile devices. Webapplicatie voor scrum/agile projectontwikkeling met webbased Agile dashboards. Voor het Havenbedrijf een applicatie overgebracht naar een fullstack PWA.",
        },
      ],
    },
    {
      company: "TNO Bouw",
      location: "Delft",
      period: "januari 2001 – januari 2003",
      role: "Wetenschappelijk Medewerker",
      description:
        "Op de afdeling Bouwinformatica gewerkt als wetenschappelijk medewerker, op het raakvlak van universiteiten (bouwkunde & informatica) en de bouwnijverheid.",
      highlights: [
        {
          title: "HSL-traject",
          text: "Configuratiemanagementsysteem gedefinieerd en geïmplementeerd voor het ontwerpen van het HSL-traject. Formalisering vastgelegd in UML.",
        },
      ],
    },
    {
      company: "Logica",
      location: "Woerden",
      period: "oktober 1998 – januari 2001",
      role: "Software Engineer",
      description:
        "Gedetacheerd bij de Belastingdienst in Apeldoorn. Gewerkt aan het systeem voor digitale belastingaangifte. Medeverantwoordelijk voor testen, acceptatie en distributie van software.",
      highlights: [
        {
          title: "Productspecialist",
          text: "Verantwoordelijk voor integratie van nieuwe producten binnen de Belastingdienst. Coördinerende rol tussen verschillende afdelingen.",
        },
      ],
    },
    {
      company: "Europe Transport Automation",
      location: "Rotterdam",
      period: "november 1994 – oktober 1998",
      role: "Systeemontwerper en -ontwikkelaar",
      description:
        "Verantwoordelijk voor de bouw van systemen voor de logistieke sector. Primaire bedrijfsprocessen gemodelleerd met grafische interfaces voor efficiënt vrachttransport, inclusief facturatiesystemen.",
      highlights: [],
    },
  ] as Experience[],
  education: {
    university: "TU Delft",
    degree: "Technische Informatica",
    specialization:
      "Vakgroep Software Engineering, Programmeertalen en Programmeertaal Compilers",
    period: "1987 – 1994",
    secondary:
      "VWO Atheneum-B, OSG Ring van Putten te Spijkenisse (1981–1987)",
  },
  skills: {
    languages: [
      "Python",
      "TypeScript",
      "JavaScript",
      "C#",
      "C",
      "C++",
      "HTML",
      "CSS",
      "Visual Basic",
      "Assembler",
    ],
    frameworks: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Angular",
      "Angular Material",
      "Redux",
      "ASP.NET",
      "ASP.NET Core",
    ],
    databases: [
      "Supabase",
      "Microsoft SQL Server",
      "Oracle",
      "MySQL",
      "MariaDB",
    ],
    aiTools: [
      "ChatGPT",
      "Claude Code",
      "Supabase",
      "Neon",
      "Vercel",
      "Obsidian",
      "NotebookLM",
      "GitHub",
    ],
    spoken: [
      { label: "Nederlands", flag: "nl", progress: 100 },
      { label: "Engels", flag: "gb", progress: 85 },
      { label: "Duits", flag: "de", progress: 55 },
    ] as SpokenLanguage[],
  },
  interests: [
    "Reizen door Azië",
    "Yoga",
    "Vrijwilligerswerk digitale ondersteuning: Centrale Bibliotheek Rotterdam & Wijkcentrum Schiedam Oost",
  ],
  apps: [
    {
      title: "Inspannings Monitor",
      subtitle: "Wellness-first dagflow",
      description:
        "Een lichte app die helpt doseren en inzicht geeft zonder lange formulieren of overprikkeling.",
      screenshot: "/images/app-inspannings-monitor.png",
      screenshotMobile: "/images/app-inspannings-monitor-mobile.png",
      href: "https://inspannings-monitor.jp-visser.nl/dashboard",
    },
    {
      title: "Scrum4Me",
      subtitle: "DevPlanner voor kleine teams",
      description:
        "Een desktop-first fullstack webapplicatie voor solo developers en kleine Scrum Teams die meerdere softwareprojecten parallel beheren. De app organiseert werk hierarchisch (product -> PBI -> story -> taak), biedt gesplitste planningsschermen met drag-and-drop, en integreert met Claude Code via een REST API.",
      screenshot: "/images/app-scrum4me.svg",
      href: "https://scrum4me.jp-visser.nl",
    },
  ] as AppEntry[],
  ui: {
    nav: [
      { label: "Over", id: "over" },
      { label: "Ervaring", id: "ervaring" },
      { label: "Skills", id: "skills" },
      { label: "Apps", id: "apps" },
      { label: "Contact", id: "contact" },
    ],
    hero: { viewCV: "Bekijk CV" },
    motivation: { label: "Motivatie", heading: "Waar ik naar zoek" },
    experience: {
      label: "Loopbaan",
      heading: "Werkervaring",
      educationLabel: "Opleiding",
      showMore: "▼ Meer details",
      showLess: "▲ Minder tonen",
    },
    skills: {
      label: "Technologie",
      groupTitles: {
        languages: "Programmeertalen",
        frameworks: "Frameworks",
        databases: "Databases",
        aiTools: "AI / AI-tools",
        spoken: "Talen",
      },
      interestsHeading: "Interesses",
    },
    contact: {
      label: "Neem contact op",
      heading: "Contact",
      emailLabel: "E-mail",
      locationLabel: "Locatie",
      websiteLabel: "Website",
    },
    apps: {
      label: "Portfolio",
      heading: "Apps & Projecten",
      subtext: "Hier komen links naar mijn apps die ik op Vercel host.",
    },
  },
};

const cvDataEn = {
  name: "Janpeter Visser",
  tagline: "Software Engineer · Full Stack Developer",
  intro:
    "Software engineer and full stack developer with over thirty years of experience building, maintaining, and improving software. Strong at bringing structure, understanding existing systems, and developing practical web applications. Works with TypeScript, React, Next.js, C#, databases and AI tools such as Claude Code and ChatGPT. Available for sustainable part-time work.",
  motivation: [
    "With my background as a software engineer and full stack developer, I am looking for a role where I can apply my broad experience in a focused way. I have over thirty years of experience designing, building and improving software — from business-critical web applications and customer portals to modern full stack applications with TypeScript, React, Next.js, C# and databases.",
    "What defines me is that I quickly bring structure to complex systems. I enjoy making existing software more understandable, stable and usable, but also building new tools that deliver direct value. Lately I have been working a lot with AI tools such as Claude Code and ChatGPT, including in my own projects such as Scrum4Me and the Inspannings Monitor. This allows me to combine years of technical experience with a modern, practical approach to development.",
    "I prefer a part-time role where I can contribute in a sustainable and focused way, at approximately 50% capacity. This is where I perform best: with clear priorities, clear communication and work where quality, continuity and reliability matter.",
    "I bring calm, experience and technical overview, and enjoy working with people who want to build software that is actually used.",
  ],
  contact: {
    email: "janpetervisser2@gmail.com",
    location: "Rotterdam",
  },
  experience: [
    {
      company: "QPIT BV",
      location: "Rotterdam",
      period: "January 2004 – February 2024",
      role: "Software Engineer",
      description:
        "At QPIT I held multiple roles in a multidisciplinary capacity. I contributed to developing the proprietary software system Quism (Service desk software) and configuring it for clients.",
      highlights: [
        {
          title: "Software Engineer Quism",
          text: "Made a web application for service management (ITIL) cross-browser compatible. Developed tools to analyse and modify ASP, JavaScript and HTML code. Built supporting tools for email ticket integration via IMAP, MAPI and POP3.",
        },
        {
          title: "Research & Development",
          text: "Researched new development environments for mobile devices. This led to the development of full stack PWA applications with Angular, TypeScript and C#.",
        },
        {
          title: "Product Development",
          text: "Developed various customer portals for mobile devices. Web application for scrum/agile project development with web-based Agile dashboards. Migrated a Port of Rotterdam application to a full stack PWA.",
        },
      ],
    },
    {
      company: "TNO Bouw",
      location: "Delft",
      period: "January 2001 – January 2003",
      role: "Research Associate",
      description:
        "Worked at the Building Informatics department as a research associate, at the intersection of universities (architecture & computer science) and the construction industry.",
      highlights: [
        {
          title: "HSL Project",
          text: "Defined and implemented a configuration management system for designing the HSL high-speed rail route. Formalisation documented in UML.",
        },
      ],
    },
    {
      company: "Logica",
      location: "Woerden",
      period: "October 1998 – January 2001",
      role: "Software Engineer",
      description:
        "Seconded to the Dutch Tax Authority in Apeldoorn. Worked on the digital tax return system. Co-responsible for testing, acceptance and distribution of software.",
      highlights: [
        {
          title: "Product Specialist",
          text: "Responsible for integrating new products within the Tax Authority. Coordinating role between different departments.",
        },
      ],
    },
    {
      company: "Europe Transport Automation",
      location: "Rotterdam",
      period: "November 1994 – October 1998",
      role: "Systems Designer and Developer",
      description:
        "Responsible for building systems for the logistics sector. Modelled primary business processes with graphical interfaces for efficient freight transport, including invoicing systems.",
      highlights: [],
    },
  ] as Experience[],
  education: {
    university: "TU Delft",
    degree: "Computer Science",
    specialization:
      "Software Engineering, Programming Languages and Compiler Design",
    period: "1987 – 1994",
    secondary:
      "Pre-university education (VWO Atheneum-B), OSG Ring van Putten in Spijkenisse (1981–1987)",
  },
  skills: {
    languages: [
      "Python",
      "TypeScript",
      "JavaScript",
      "C#",
      "C",
      "C++",
      "HTML",
      "CSS",
      "Visual Basic",
      "Assembler",
    ],
    frameworks: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Angular",
      "Angular Material",
      "Redux",
      "ASP.NET",
      "ASP.NET Core",
    ],
    databases: [
      "Supabase",
      "Microsoft SQL Server",
      "Oracle",
      "MySQL",
      "MariaDB",
    ],
    aiTools: [
      "ChatGPT",
      "Claude Code",
      "Supabase",
      "Neon",
      "Vercel",
      "Obsidian",
      "NotebookLM",
      "GitHub",
    ],
    spoken: [
      { label: "Dutch", flag: "nl", progress: 100 },
      { label: "English", flag: "gb", progress: 85 },
      { label: "German", flag: "de", progress: 55 },
    ] as SpokenLanguage[],
  },
  interests: [
    "Travelling in Asia",
    "Yoga",
    "Volunteer digital support: Central Library Rotterdam & Neighbourhood Centre Schiedam East",
  ],
  apps: [
    {
      title: "Inspannings Monitor",
      subtitle: "Wellness-first daily flow",
      description:
        "A lightweight app that helps with pacing and provides insight without long forms or overstimulation.",
      screenshot: "/images/app-inspannings-monitor.png",
      screenshotMobile: "/images/app-inspannings-monitor-mobile.png",
      href: "https://inspannings-monitor.jp-visser.nl/dashboard",
    },
    {
      title: "Scrum4Me",
      subtitle: "DevPlanner for small teams",
      description:
        "A desktop-first fullstack web application for solo developers and small Scrum teams managing multiple software projects in parallel. The app organises work hierarchically (product → PBI → story → task), offers split planning screens with drag-and-drop, and integrates with Claude Code via a REST API.",
      screenshot: "/images/app-scrum4me.svg",
      href: "https://scrum4me.jp-visser.nl",
    },
  ] as AppEntry[],
  ui: {
    nav: [
      { label: "About", id: "over" },
      { label: "Experience", id: "ervaring" },
      { label: "Skills", id: "skills" },
      { label: "Apps", id: "apps" },
      { label: "Contact", id: "contact" },
    ],
    hero: { viewCV: "View CV" },
    motivation: { label: "Motivation", heading: "What I'm looking for" },
    experience: {
      label: "Career",
      heading: "Work Experience",
      educationLabel: "Education",
      showMore: "▼ Show more",
      showLess: "▲ Show less",
    },
    skills: {
      label: "Technology",
      groupTitles: {
        languages: "Programming Languages",
        frameworks: "Frameworks",
        databases: "Databases",
        aiTools: "AI / AI Tools",
        spoken: "Languages",
      },
      interestsHeading: "Interests",
    },
    contact: {
      label: "Get in touch",
      heading: "Contact",
      emailLabel: "Email",
      locationLabel: "Location",
      websiteLabel: "Website",
    },
    apps: {
      label: "Portfolio",
      heading: "Apps & Projects",
      subtext: "Links to my apps hosted on Vercel.",
    },
  },
};

export function getCvData(lang: Lang) {
  return lang === "en" ? cvDataEn : cvDataNl;
}

export type CvData = ReturnType<typeof getCvData>;
