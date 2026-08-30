import { ProfileData, SkillCategory, Project, ExperienceItem, EducationItem, ServiceItem } from '../types';

export const profileData: ProfileData = {
  name: "Bakary Coulibaly",
  title: "Développeur Web & Mobile Junior | Informaticien",
  location: "Daoudabougou, Bamako, Mali",
  phone: "+223 77 20 66 76",
  email: "coulibaly.bakary6326@gmail.com",
  nationality: "Malienne",
  birthDate: "11/07/2004",
  linkedIn: "linkedin.com/in/bakary-coulibaly-bb39663b0",
  shortBio: "Jeune informaticien et développeur web et mobile, titulaire d'une double Licence en Informatique de Gestion et en Programmation & Développement Informatique.",
  fullBio: [
    "Jeune informaticien et développeur web et mobile, titulaire d’une double Licence en Informatique de Gestion et en Programmation et Développement Informatique.",
    "Expérience en support technique, assistance aux utilisateurs et conception d’applications avec Flutter, Laravel, Symfony et Spring Boot.",
    "Passionné par les systèmes d’information, les réseaux et la cybersécurité, je suis reconnu pour ma capacité d’analyse, ma rigueur et mon sens du service. Capable de travailler aussi bien de manière autonome qu’en équipe dans des environnements exigeants et multiculturels."
  ],
  objectives: [
    "Développeur Web & Mobile Junior",
    "Développeur Full Stack (Laravel / Flutter / Symfony)",
    "Informaticien / Analyste Développeur",
    "Support Informatique & Administration Réseau",
    "Volontariat & Projets à Impact"
  ],
  languages: [
    { language: "Français", level: "Compétence professionnelle" },
    { language: "Bambara", level: "Langue maternelle" },
    { language: "Anglais", level: "Intermédiaire" }
  ],
  personalQualities: [
    "Créatif et autonome",
    "Sens de l’organisation",
    "Excellent relationnel",
    "Adaptabilité",
    "Goût du travail en équipe"
  ],
  interests: [
    "Lecture et auto-formation en programmation et nouvelles technologies",
    "Exploration des solutions d’IA pour le développement",
    "Développement personnel"
  ],
  stats: [
    { label: "Diplômes universitaires", value: "2 Licences + 1 DUT" },
    { label: "Projets académiques & persos", value: "4+ Majeurs" },
    { label: "Technologies clés", value: "15+" },
    { label: "Disponibilité", value: "Immédiate" }
  ],
  socials: [
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/in/bakary-coulibaly-bb39663b0",
      isPlaceholder: false
    },
    {
      platform: "GitHub",
      url: "https://github.com/",
      isPlaceholder: true
    },
    {
      platform: "Email",
      url: "mailto:coulibaly.bakary6326@gmail.com",
      isPlaceholder: false
    },
    {
      platform: "Téléphone",
      url: "tel:+22377206676",
      isPlaceholder: false
    }
  ]
};

export const skillsData: SkillCategory[] = [
  {
    title: "Développement Web",
    description: "Technologies frontend et backend pour applications web dynamiques et robustes.",
    icon: "Globe",
    skills: [
      { name: "PHP", level: "Avancé" },
      { name: "Laravel", level: "Avancé" },
      { name: "Symfony", level: "Intermédiaire" },
      { name: "React", level: "Intermédiaire" },
      { name: "Inertia.js", level: "Intermédiaire" },
      { name: "JavaScript", level: "Intermédiaire" },
      { name: "HTML5", level: "Avancé" },
      { name: "CSS3", level: "Avancé" },
      { name: "Tailwind CSS", level: "Avancé" },
      { name: "Bootstrap", level: "Intermédiaire" }
    ]
  },
  {
    title: "Développement Mobile",
    description: "Conception et déploiement d'applications mobiles multiplateformes.",
    icon: "Smartphone",
    skills: [
      { name: "Flutter", level: "Intermédiaire" },
      { name: "Dart", level: "Intermédiaire" },
      { name: "Ionic", level: "Intermédiaire" },
      { name: "Capacitor", level: "Intermédiaire" }
    ]
  },
  {
    title: "Bases de Données",
    description: "Modélisation relationnelle, requêtage et administration de bases de données.",
    icon: "Database",
    skills: [
      { name: "PostgreSQL", level: "Intermédiaire" },
      { name: "MySQL", level: "Avancé" },
      { name: "MariaDB", level: "Intermédiaire" },
      { name: "SQL", level: "Avancé" }
    ]
  },
  {
    title: "Systèmes & Réseaux",
    description: "Administration système, support utilisateur et diagnostic réseau approfondi.",
    icon: "Server",
    skills: [
      { name: "Linux (Debian, Ubuntu)", level: "Intermédiaire" },
      { name: "Windows", level: "Avancé" },
      { name: "TCP/IP & Protocoles", level: "Intermédiaire" },
      { name: "Configuration Réseau", level: "Intermédiaire" },
      { name: "Support Utilisateurs", level: "Avancé" },
      { name: "Maintenance Informatique", level: "Avancé" },
      { name: "Diagnostic & Résolution", level: "Avancé" },
      { name: "Assistance à distance (AnyDesk)", level: "Avancé" }
    ]
  },
  {
    title: "Outils & Environnements",
    description: "Environnements de développement, gestionnaire de versions et automatisation.",
    icon: "Wrench",
    skills: [
      { name: "Git", level: "Avancé" },
      { name: "GitHub", level: "Avancé" },
      { name: "GitHub Actions (CI/CD)", level: "Intermédiaire" },
      { name: "VS Code", level: "Avancé" },
      { name: "Android Studio", level: "Intermédiaire" },
      { name: "IntelliJ IDEA", level: "Intermédiaire" },
      { name: "Composer", level: "Avancé" },
      { name: "npm", level: "Avancé" },
      { name: "Docker", level: "Notions pratiques" }
    ]
  },
  {
    title: "Autres Domaines & Pratiques",
    description: "Méthodologies agiles, architecture d'API et sécurité informatique.",
    icon: "ShieldCheck",
    skills: [
      { name: "Cybersécurité", level: "Sensibilisation & Pratique" },
      { name: "Administration Systèmes", level: "Intermédiaire" },
      { name: "Architecture API REST", level: "Avancé" },
      { name: "Méthodes Agile / Scrum", level: "Pratique" },
      { name: "CI/CD & Déploiement", level: "Intermédiaire" }
    ]
  }
];

export const projectsData: Project[] = [
  {
    id: "gestion-scolaire",
    title: "Plateforme de Gestion Scolaire",
    category: "fullstack",
    categoryLabel: "Web & Gestion",
    description: "Application complète de gestion administrative et pédagogique destinée à un établissement scolaire.",
    longDescription: "Solution logicielle complète pour simplifier et automatiser l'ensemble des flux opérationnels d'un établissement d'enseignement : suivi du parcours étudiant, gestion des cours, relevés de notes et comptabilité scolaire avec facturation sécurisée.",
    technologies: ["Laravel", "Livewire", "PostgreSQL", "Tailwind CSS", "PDF Generation"],
    features: [
      "Gestion complète des étudiants et des inscriptions",
      "Gestion du corps enseignant et affectation des cours",
      "Gestion des matières et filières d'études",
      "Saisie, calcul et publication sécurisée des notes",
      "Suivi des règlements et gestion des paiements",
      "Génération automatique de reçus et bulletins au format PDF",
      "Module d'administration et de gestion des accès"
    ],
    githubUrl: "https://github.com/votre-compte/gestion-scolaire", // Placeholder
    iconName: "GraduationCap",
    badge: "Production / Gestion"
  },
  {
    id: "atelier-couture",
    title: "Application Gestion d'Atelier de Couture",
    category: "mobile",
    categoryLabel: "Mobile & Backend",
    description: "Application métier sur mesure pour la gestion des activités et le suivi des commandes d'un atelier de couture.",
    longDescription: "Application mobile intuitive connectée à une API REST performante permettant aux artisans et gérants d'atelier de couture de suivre les mesures clients, l'état d'avancement des confections, les délais de livraison et la facturation.",
    technologies: ["Flutter", "Dart", "Symfony", "API REST", "Bases de données"],
    features: [
      "Fiches clients avec historique des commandes et mensurations",
      "Création et suivi en temps réel des commandes de confections",
      "Tableau de bord de suivi des travaux en cours et livraisons",
      "Gestion centralisée des données de l'atelier via API REST",
      "Interface mobile ergonomique pour une utilisation en atelier"
    ],
    githubUrl: "https://github.com/votre-compte/gestion-atelier-couture", // Placeholder
    iconName: "Scissors",
    badge: "Mobile & Métier"
  },
  {
    id: "api-pharmacies",
    title: "API & Plateforme Centralisée pour Pharmacies",
    category: "api",
    categoryLabel: "API & Architecture",
    description: "Système centralisé de géolocalisation des pharmacies et de vérification de disponibilité des médicaments en temps réel.",
    longDescription: "Projet d'envergure conçu pour interconnecter les officines de pharmacie. Il permet aux usagers de localiser instantanément les pharmacies de garde les plus proches et de vérifier la disponibilité des stocks de médicaments recherchés.",
    technologies: ["Spring Boot", "API REST", "PostgreSQL", "Flutter", "Google Maps API"],
    features: [
      "Annuaire et géolocalisation interactive des pharmacies avec Google Maps",
      "Indexation et recherche multicritère des médicaments",
      "Gestion et synchronisation des stocks de médicaments",
      "Système de réservation et précommandes en ligne",
      "API REST centralisée et sécurisée pour la communication multi-plateforme"
    ],
    githubUrl: "https://github.com/votre-compte/api-pharmacies", // Placeholder
    iconName: "Cross",
    badge: "Architecture & Santé"
  },
  {
    id: "plateforme-vps-vpn",
    title: "Plateforme Commerciale VPS & VPN",
    category: "web",
    categoryLabel: "E-Commerce & Cloud",
    description: "Plateforme web moderne pour la présentation, configuration et commande d'offres d'hébergement VPS et serveurs VPN.",
    longDescription: "Interface web ultra-réactive conçue avec une pile technologique moderne (Inertia.js + React), offrant une expérience utilisateur fluide pour la souscription à des offres serveurs privés virtuels et réseaux privés sécurisés.",
    technologies: ["Laravel", "React", "Inertia.js", "Tailwind CSS", "shadcn/ui"],
    features: [
      "Catalogue interactif des offres VPS et abonnements VPN",
      "Calculateur dynamique des ressources et spécifications techniques",
      "Système complet de panier d'achat et récapitulatif de commande",
      "Espace client avec authentification sécurisée",
      "Gestion des thèmes clair / sombre (Dark/Light mode)",
      "Architecture hybride moderne couplant robustesse Laravel et réactivité React"
    ],
    githubUrl: "https://github.com/votre-compte/plateforme-vps-vpn", // Placeholder
    iconName: "Shield",
    badge: "Stack Moderne"
  },
  {
    id: "portfolio-collaboratif",
    title: "Portfolio Collaboratif d'Équipe",
    category: "collab",
    categoryLabel: "DevOps & Équipe",
    description: "Projet développé en équipe mettant en valeur les profils et CVs, déployé automatiquement via CI/CD.",
    longDescription: "Projet collectif illustrant la maîtrise du travail collaboratif en équipe agile, la gestion des branches Git, la revue de code et la mise en place d'un pipeline de déploiement continu automatisé.",
    technologies: ["Git", "GitHub", "GitHub Actions", "GitHub Pages", "HTML/CSS/JS"],
    features: [
      "Présentation collective et fiches individuelles des membres",
      "Collaboration d'équipe avec conventions Git et Pull Requests",
      "Pipeline CI/CD automatisé avec GitHub Actions",
      "Hébergement et publication automatique sur GitHub Pages",
      "Démonstration de bonnes pratiques de versioning et de travail d'équipe"
    ],
    githubUrl: "https://github.com/votre-compte/portfolio-collaboratif", // Placeholder
    demoUrl: "https://votre-compte.github.io/portfolio-collaboratif", // Placeholder
    iconName: "Users",
    badge: "Projet d'Équipe & CI/CD"
  }
];

export const experienceData: ExperienceItem[] = [
  {
    company: "Projets académiques et personnels",
    role: "Développeur Web & Mobile Junior",
    location: "Bamako, Mali",
    period: "2024 – Présent",
    type: "Développement & Projets",
    description: "Conception, développement et déploiement d'applications web, mobiles et de bases de données relationnelles.",
    missions: [
      "Développement d’applications web et mobiles.",
      "Conception de bases de données MySQL et PostgreSQL.",
      "Utilisation de Git et GitHub pour la gestion de versions.",
      "Déploiement de projets via GitHub Pages.",
      "Assistance technique et résolution d’incidents logiciels."
    ],
    technologies: ["Flutter", "Laravel", "Symfony", "Spring Boot", "MySQL", "PostgreSQL", "Git / GitHub"]
  },
  {
    company: "ONU Femmes (UN Women) – Programme UNV",
    role: "Advocacy and Outreach Assistant (Volontaire des Nations Unies)",
    location: "Bamako, Mali",
    period: "11/2025 – 12/2025",
    type: "Volontariat International & Communication",
    description: "Appui aux actions de plaidoyer, sensibilisation communautaire et traitement de données de terrain dans le strict respect de la confidentialité et de l'éthique.",
    missions: [
      "Appui aux activités de sensibilisation et mobilisation communautaire",
      "Participation à la collecte et au traitement d’informations terrain",
      "Contribution à la rédaction de rapports d’activités",
      "Appui à l’organisation d’événements et coordination avec partenaires",
      "Respect strict des règles de confidentialité et d’éthique"
    ],
    technologies: ["Collecte & Traitement de données", "Communication", "Organisation", "Reporting", "Éthique UN"]
  },
  {
    company: "Alkan Mali sa",
    role: "Stagiaire Back-Office",
    location: "Bamako, Mali",
    period: "06/2025 – 08/2025",
    type: "Support Informatique & Réseaux",
    description: "Support aux techniciens de terrain pour la maintenance de la fibre optique Orange Mali et gestion des équipements clients à distance.",
    missions: [
      "Support aux techniciens de terrain dans le cadre de la maintenance des fibres optiques d’OrangeMali",
      "Contact des clients pour prise de positions et suivi des interventions",
      "Configuration et gestion à distance des routeurs clients",
      "Développement de compétences en coordination, réactivité et assistance technique"
    ],
    technologies: ["Fibre Optique OrangeMali", "Configuration Routeurs", "Support à distance", "Coordination & Suivi"]
  }
];

export const educationData: EducationItem[] = [
  {
    degree: "Licence Professionnelle en informatique de gestion (IG)",
    institution: "Institut Universitaire de Gestion (IUG)",
    location: "Bamako, Mali",
    description: "Licence Professionnelle en informatique de gestion (IG) dans le département Création et Gestion d'Entreprise (CGE) à l'Institut Universitaire de Gestion (2022 – 2026).",
    highlights: [
      "Systèmes d'information et bases de données",
      "Gestion d'entreprise et processus organisationnels",
      "Algorithmique et développement de solutions de gestion",
      "Audit informatique et gestion de projets"
    ],
    icon: "Layers"
  },
  {
    degree: "Licence en Programmation et Développement Informatique",
    institution: "INTEC SUP",
    location: "Bamako, Mali",
    description: "Licence en Programmation et Développement Informatique à l'Institut Supérieur des Techniques Économiques, Comptables et Commerciales (2024 – 2025).",
    highlights: [
      "Génie logiciel et architecture applicative (Web & Mobile)",
      "Développement Full-Stack (PHP, Laravel, Symfony, Spring Boot, Flutter)",
      "Bases de données relationnelles avancées (MySQL, PostgreSQL, Oracle)",
      "Méthodes agiles et gestion de versions collaborative (Git/GitHub)"
    ],
    icon: "Code"
  },
  {
    degree: "DUT en Informatique de Gestion (Bac+2)",
    institution: "INTEC SUP",
    location: "Bamako, Mali",
    description: "Diplôme Universitaire de Technologie (Bac+2) en Informatique de Gestion à l'Institut Supérieur des Techniques Économiques, Comptables et Commerciales (2022 – 2024).",
    highlights: [
      "Fondamentaux de la programmation et algorithmique",
      "Systèmes d'exploitation et réseaux informatiques",
      "Maintenance informatique et support utilisateur",
      "Comptabilité et gestion informatisée"
    ],
    icon: "GraduationCap"
  },
  {
    degree: "Baccalauréat malien en sciences exactes",
    institution: "Lycée la Chaîne Grise de Bamako (LCGMM)",
    location: "Bamako, Mali",
    description: "Baccalauréat malien en série Sciences Exactes (2018 – 2021).",
    highlights: [
      "Mathématiques approfondies et logique",
      "Physique et sciences appliquées",
      "Rigueur d'analyse et résolution de problèmes"
    ],
    icon: "BookOpen"
  }
];

export const servicesData: ServiceItem[] = [
  {
    title: "Développement Web Full Stack",
    description: "Conception de sites et applications web sur mesure avec Laravel, Symfony, React et Tailwind CSS. Interfaces dynamiques, réactives et sécurisées.",
    icon: "Layout",
    features: ["Applications SPA & SSR", "Panels d'administration", "Intégration responsive mobile-first", "Optimisation des performances"]
  },
  {
    title: "Développement Mobile",
    description: "Développement d'applications mobiles multiplateformes pour Android et iOS avec Flutter & Dart ou Ionic / Capacitor.",
    icon: "Smartphone",
    features: ["Applications natives & hybrides", "Synchronisation hors ligne", "Intégration d'APIs & Cartographie", "UX fluide et ergonomique"]
  },
  {
    title: "Conception d'APIs & Backend",
    description: "Architecture et implémentation d'APIs RESTful performantes, sécurisées et bien documentées pour alimenter vos applications web et mobiles.",
    icon: "Cpu",
    features: ["APIs RESTful standardisées", "Authentification JWT / OAuth", "Connexion aux bases de données", "Documentation technique"]
  },
  {
    title: "Solutions de Gestion Métier",
    description: "Digitalisation des processus d'entreprise : gestion scolaire, suivi d'ateliers, facturation, gestion de stocks et de caisse.",
    icon: "Briefcase",
    features: ["Gestion des utilisateurs et rôles", "Génération de rapports et reçus PDF", "Suivi des flux financiers", "Tableaux de bord statistiques"]
  },
  {
    title: "Support Informatique & Maintenance",
    description: "Diagnostic, maintenance préventive et corrective de parcs informatiques, installation et dépannage matériel et logiciel.",
    icon: "Wrench",
    features: ["Assistance utilisateur à distance (AnyDesk)", "Dépannage système Windows & Linux", "Maintenance préventive", "Sauvegarde et récupération"]
  },
  {
    title: "Réseaux & Sécurité de Base",
    description: "Mise en place de réseaux locaux, configuration de routeurs, sécurisation de base et gestion des accès aux ressources partagées.",
    icon: "Network",
    features: ["Configuration de routeurs et switchs", "Adressage IP & protocoles TCP/IP", "Partage de ressources sécurisé", "Sensibilisation aux bonnes pratiques"]
  }
];
