export const CV_DATA = {
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
  ],
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
    tools: ["Claude", "ChatGPT", "Git", "Supabase", "Vercel"],
    spoken: ["Nederlands", "Engels", "Duits"],
  },
  interests: [
    "Reizen door Azië",
    "Yoga",
    "Vrijwilligerswerk digitale ondersteuning: Centrale Bibliotheek Rotterdam & Wijkcentrum Schiedam Oost",
  ],
} as const;

export type Experience = (typeof CV_DATA.experience)[number];
