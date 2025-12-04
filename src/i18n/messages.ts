export type Locale = "en" | "fr" | "ar"

export const LOCALES: Locale[] = ["en", "fr", "ar"]

export const DEFAULT_LOCALE: Locale = "fr"

type Messages = typeof messages

export const messages = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      portfolio: "Portfolio",
      blog: "Blog",
      contact: "Contact",
      cta: "Start a Project",
    },
    footer: {
      description:
        "Premium digital marketing agency in Tunisia. We create spectacular digital experiences that convert.",
      navigation: "Navigation",
      services: "Services",
      newsletter_title: "Stay in the loop",
      newsletter_subtitle:
        "Subscribe to our newsletter to receive the latest digital trends.",
      newsletter_placeholder: "Enter your email",
      location: "Tunis, Tunisia",
      phone: "+216 XX XXX XXX",
      copyright: "All rights reserved.",
      made_with: "Made with",
      in_tunisia: "in Tunisia",
      nav_items: {
        home: "Home",
        about: "About",
        services: "Services",
        portfolio: "Portfolio",
        blog: "Blog",
        contact: "Contact",
      },
      services_list: {
        web: "Web Development",
        branding: "Branding",
        social: "Social Media",
        content: "Content Creation",
      },
    },
    home: {
      badge: "The Future of Digital",
      hero_line1: "WE FORGE",
      hero_line2: "LEGENDS",
      hero_subtitle:
        "Award-winning digital agency blending art, technology and strategy to build brands that dominate.",
      hero_primary_cta: "Start the Journey",
      hero_secondary_cta: "View our Work",
      scroll_hint: "Scroll to explore",
      expertise_title: "Our Expertise",
      expertise_subtitle: "A holistic approach to digital domination.",
      services_web_title: "Web Development",
      services_web_desc:
        "Award-winning, high-performance websites tailored to your unique brand story. We build scalable, secure and stunning digital experiences.",
      services_web_cta: "Learn More",
      services_branding: "Branding",
      services_marketing: "Digital Marketing",
      services_cyber_title: "Cybersecurity",
      services_cyber_desc: "Protect your digital assets.",
      services_apps_title: "Mobile Apps",
      services_apps_desc: "Native iOS & Android solutions.",
      services_all_cta: "Explore All Services",
      marquee_items: ["Design", "Development", "Strategy", "Innovation", "Marketing"],
      featured_title: "Selected Projects",
      featured_subtitle: "Projects that define our legacy.",
      featured_project_name: "Project Name",
      featured_badge_web: "Web Design",
      featured_badge_dev: "Development",
      featured_desc:
        "A revolutionary digital platform that redefined industry standards by combining cutting-edge technology with immersive design.",
      featured_cta: "View Case Study",
      cta_title_prefix: "READY TO",
      cta_title_highlight: "TAKE OFF?",
      cta_subtitle:
        "Join the ranks of industry leaders. Let's build your future today.",
      cta_button: "Start a Project",
      view_full_portfolio: "View Full Portfolio",
    },
    about: {
      hero_title: "We Are 4mediagency",
      hero_subtitle:
        "A team of dreamers, creators and strategists dedicated to elevating brands in the digital age.",
      stats_projects: "Projects Delivered",
      stats_clients: "Happy Clients",
      stats_team: "Team Members",
      stats_awards: "Awards Won",
      values_title: "Our Core Values",
      values: {
        innovation:
          "We push boundaries and embrace new technologies.",
        excellence:
          "We deliver nothing but the best for our clients.",
        integrity:
          "We build trust through transparency and honesty.",
        collaboration:
          "We believe in the power of teamwork.",
        impact:
          "We create work that makes a real difference.",
        global_vision:
          "We think big and act with a global mindset.",
      },
      journey_title: "Our Journey",
      journey: {
        "2020": {
          title: "The Beginning",
          desc: "4mediagency was founded with a vision to revolutionize digital marketing in Tunisia.",
        },
        "2021": {
          title: "Rapid Growth",
          desc: "We grew to a 10-person team and signed our first international client.",
        },
        "2022": {
          title: "Recognition",
          desc: "Recognized as the Best Digital Agency in North Africa.",
        },
        "2023": {
          title: "New Horizons",
          desc: "Launched dedicated Cybersecurity and AI divisions.",
        },
      },
    },
    services: {
      hero_title_prefix: "Our",
      hero_title_highlight: "Arsenal",
      hero_subtitle:
        "We deploy a complete spectrum of digital weapons to ensure your domination on the market.",
      cards: {
        content: "Content creation",
        content_desc:
          "Engaging content strategies that resonate with your audience.",
        communication: "Digital communication",
        communication_desc:
          "Strategic planning for your communication across digital channels.",
        online_services: "Online services",
        online_services_desc:
          "End-to-end online solutions for business growth.",
        cybersecurity: "Cybersecurity",
        cybersecurity_desc:
          "Robust protection for your digital assets and data.",
        social_security: "Social media security",
        social_security_desc:
          "Securing your social presence against threats.",
        web_admin: "Web dev + admin",
        web_admin_desc:
          "Full‑stack development and ongoing administration.",
        branding: "Branding",
        branding_desc:
          "Memorable, high-impact brand identities.",
        production: "Audiovisual production",
        production_desc:
          "High-quality video and audio production.",
        support: "Support",
        support_desc:
          "Dedicated 24/7 support for all your digital needs.",
        social_management: "Social media management",
        social_management_desc:
          "Community management and growth strategies.",
        study: "Project study",
        study_desc:
          "Feasibility studies and project planning.",
        apps: "Mobile applications",
        apps_desc:
          "iOS and Android application development.",
      },
      process_title: "Our Process",
      process_steps: {
        "01": {
          title: "Discovery",
          desc: "We listen to your needs and understand your goals.",
        },
        "02": {
          title: "Strategy",
          desc: "We craft a roadmap tailored to your business.",
        },
        "03": {
          title: "Execution",
          desc: "Our experts bring the strategy to life.",
        },
        "04": {
          title: "Optimization",
          desc: "We monitor, analyze and refine for the best results.",
        },
      },
      pricing_title: "Our Offers",
      pricing_popular_badge: "MOST POPULAR",
      pricing_tiers: {
        starter: {
          name: "Starter",
          price: "Contact us",
          features: [
            "Web presence",
            "Basic SEO",
            "Social media setup",
          ],
        },
        growth: {
          name: "Growth",
          price: "Contact us",
          features: [
            "Custom website",
            "Advanced SEO",
            "Content strategy",
            "Monthly reports",
          ],
        },
        enterprise: {
          name: "Enterprise",
          price: "Contact us",
          features: [
            "Digital transformation",
            "Dedicated team",
            "24/7 support",
            "Custom development",
          ],
        },
      },
      pricing_cta: "Get started",
      faq_title: "Frequently Asked Questions",
      faq: {
        q1: {
          question: "How long does a web project take?",
          answer:
            "A standard website usually takes 4–6 weeks from discovery to launch, depending on complexity and requirements.",
        },
        q2: {
          question: "Do you offer ongoing support?",
          answer:
            "Yes, we offer several support and maintenance plans to keep your digital assets secure and up to date.",
        },
        q3: {
          question: "Can you handle branding from scratch?",
          answer:
            "Absolutely! Our branding experts can help define your identity, logo, color palette and voice from day one.",
        },
      },
    },
    contact: {
      hero_title: "Let’s Talk",
      hero_subtitle:
        "Ready to start your next project? We’re here to help you grow.",
      form_title: "Send a Message",
      fields: {
        name_label: "Name",
        name_placeholder: "John Doe",
        email_label: "Email",
        email_placeholder: "john@example.com",
        subject_label: "Subject",
        subject_placeholder: "Project Request",
        message_label: "Message",
        message_placeholder: "Tell us about your project...",
      },
      submit: "Send Message",
      toast_success_title: "Message sent successfully!",
      toast_success_desc: "We’ll get back to you within 24 hours.",
      toast_cancel: "Cancel",
      cards: {
        phone_title: "Phone",
        phone_value: "+216 XX XXX XXX",
        email_title: "Email",
        email_value: "contact@4media.tn",
        hq_title: "Head Office",
        hq_value: "Tunis, Tunisia",
      },
      response_badge_title: "Fast Response",
      response_badge_desc: "We usually reply within 24 hours.",
      faq_preview: {
        q1_title: "Where are you based?",
        q1_answer:
          "We are based in the heart of Tunis, Tunisia, and we work with clients all over the world.",
        q2_title: "How do I start a project?",
        q2_answer:
          "Simply fill out the form or give us a call. We’ll schedule a discovery meeting to understand your needs.",
      },
    },
    blog: {
      hero_title: "News & Insights",
      hero_subtitle:
        "The latest trends, tips and stories from the digital world.",
      featured_badge: "Featured",
      featured_title:
        "The Future of Digital Marketing in Tunisia: 2025 Trends",
      featured_excerpt:
        "Discover the emerging technologies and strategies that will shape the digital landscape in the coming years: AI, personalization and more.",
      featured_read: "Read Article",
      card_category: "Category",
      card_date_label: "Date",
      card_read_time: "5 min read",
      card_title: "How to Optimize Your Website for Conversions",
      card_excerpt:
        "Learn the essential strategies to turn your visitors into paying customers with simple, effective tactics.",
      card_read_more: "Read More",
      pagination_prev: "Previous",
      pagination_next: "Next",
      newsletter_title: "Subscribe to our Newsletter",
      newsletter_subtitle:
        "Get the latest updates and resources straight to your inbox.",
      newsletter_placeholder: "Enter your email",
      newsletter_cta: "Subscribe",
    },
    portfolio: {
      hero_title_prefix: "Our",
      hero_title_highlight: "Work",
      hero_subtitle:
        "We let our results speak for themselves. Explore our latest projects.",
      filters: ["All", "Branding", "Web", "Social", "Apps", "Video"],
      case_badge: "View Case Study",
      dialog: {
        image_label: "Project Image",
        challenge_title: "Challenge & Solution",
        challenge_desc:
          "A detailed case study description goes here, explaining the client’s problem and how 4mediagency solved it with innovative strategies and technology.",
        results_title: "Key Results",
        visit_site: "Visit Website",
      },
      clients_title: "They trust us",
      client_placeholder: "CLIENT",
    },
    notFound: {
      title: "System Error: Page Not Found",
      description:
        "The digital coordinates you entered don’t match any known sector in our database.",
      search_placeholder: "Search the site...",
      home_button: "Back to Base",
      back_button: "Back",
    },
    language: {
      label: "Language",
      en: "English",
      fr: "French",
      ar: "Arabic",
    },
  },
  fr: {
    nav: {
      home: "Accueil",
      about: "À Propos",
      services: "Services",
      portfolio: "Portfolio",
      blog: "Blog",
      contact: "Contact",
      cta: "Démarrer un Projet",
    },
    footer: {
      description:
        "Agence de marketing digital premium en Tunisie. Nous créons des expériences numériques spectaculaires qui convertissent.",
      navigation: "Navigation",
      services: "Services",
      newsletter_title: "Restez Informé",
      newsletter_subtitle:
        "Abonnez-vous à notre newsletter pour les dernières tendances digitales.",
      newsletter_placeholder: "Entrez votre email",
      location: "Tunis, Tunisie",
      phone: "+216 XX XXX XXX",
      copyright: "Tous droits réservés.",
      made_with: "Fait avec",
      in_tunisia: "en Tunisie",
      nav_items: {
        home: "Accueil",
        about: "À Propos",
        services: "Services",
        portfolio: "Portfolio",
        blog: "Blog",
        contact: "Contact",
      },
      services_list: {
        web: "Développement Web",
        branding: "Branding",
        social: "Réseaux Sociaux",
        content: "Création de Contenu",
      },
    },
    home: {
      badge: "L'Avenir du Numérique",
      hero_line1: "NOUS FORGEONS",
      hero_line2: "DES LÉGENDES",
      hero_subtitle:
        "Agence digitale primée fusionnant art, technologie et stratégie pour bâtir des marques qui dominent.",
      hero_primary_cta: "Commencer l'Aventure",
      hero_secondary_cta: "Voir nos Réalisations",
      scroll_hint: "Défiler pour explorer",
      expertise_title: "Notre Expertise",
      expertise_subtitle: "Une approche holistique de la domination numérique.",
      services_web_title: "Développement Web",
      services_web_desc:
        "Sites web primés et performants, adaptés à l'histoire unique de votre marque. Nous construisons des expériences numériques évolutives, sécurisées et époustouflantes.",
      services_web_cta: "En Savoir Plus",
      services_branding: "Branding",
      services_marketing: "Marketing Digital",
      services_cyber_title: "Cybersécurité",
      services_cyber_desc: "Protégez vos actifs numériques.",
      services_apps_title: "Apps Mobiles",
      services_apps_desc: "Solutions natives iOS & Android.",
      services_all_cta: "Explorer Tous les Services",
      marquee_items: ["Design", "Développement", "Stratégie", "Innovation", "Marketing"],
      featured_title: "Projets Sélectionnés",
      featured_subtitle: "Des projets qui définissent notre héritage.",
      featured_project_name: "Nom du Projet",
      featured_badge_web: "Web Design",
      featured_badge_dev: "Développement",
      featured_desc:
        "Une plateforme numérique révolutionnaire qui a redéfini les standards de l'industrie en combinant technologie de pointe et design immersif.",
      featured_cta: "Voir l'Étude de Cas",
      cta_title_prefix: "PRÊT À",
      cta_title_highlight: "DÉCOLLER ?",
      cta_subtitle:
        "Rejoignez les rangs des leaders de l'industrie. Construisons votre avenir dès aujourd'hui.",
      cta_button: "Démarrer un Projet",
      view_full_portfolio: "Voir le Portfolio Complet",
    },
    about: {
      hero_title: "Nous Sommes 4mediagency",
      hero_subtitle:
        "Une équipe de rêveurs, de créateurs et de stratèges dédiés à élever les marques à l'ère du numérique.",
      stats_projects: "Projets Réalisés",
      stats_clients: "Clients Heureux",
      stats_team: "Membres d'Équipe",
      stats_awards: "Prix Gagnés",
      values_title: "Nos Valeurs Fondamentales",
      values: {
        innovation:
          "Nous repoussons les limites et adoptons les nouvelles technologies.",
        excellence:
          "Nous ne livrons que le meilleur pour nos clients.",
        integrity:
          "Nous bâtissons la confiance par la transparence et l'honnêteté.",
        collaboration:
          "Nous croyons en la puissance du travail d'équipe.",
        impact:
          "Nous créons un travail qui fait une réelle différence.",
        global_vision:
          "Nous voyons grand et agissons avec une perspective mondiale.",
      },
      journey_title: "Notre Parcours",
      journey: {
        "2020": {
          title: "Le Commencement",
          desc: "4mediagency a été fondée avec la vision de révolutionner le marketing digital en Tunisie.",
        },
        "2021": {
          title: "Croissance Rapide",
          desc: "Expansion de l'équipe à 10 membres et acquisition de notre premier client international.",
        },
        "2022": {
          title: "Reconnaissance",
          desc: "Reconnue comme la Meilleure Agence Digitale en Afrique du Nord.",
        },
        "2023": {
          title: "Nouveaux Horizons",
          desc: "Lancement de nos divisions spécialisées en Cybersécurité et IA.",
        },
      },
    },
    services: {
      hero_title_prefix: "Notre",
      hero_title_highlight: "Arsenal",
      hero_subtitle:
        "Nous déployons un spectre complet d'armes numériques pour assurer votre domination sur le marché.",
      cards: {
        content: "Création de contenu",
        content_desc:
          "Des stratégies de contenu engageantes qui résonnent avec votre audience.",
        communication: "Communication digitale",
        communication_desc:
          "Planification stratégique de la communication pour les canaux numériques.",
        online_services: "Services en ligne",
        online_services_desc:
          "Solutions en ligne complètes pour la croissance des entreprises.",
        cybersecurity: "Cybersécurité",
        cybersecurity_desc:
          "Protection robuste pour vos actifs numériques et vos données.",
        social_security: "Sécurité des réseaux sociaux",
        social_security_desc:
          "Sécurisation de votre présence sociale contre les menaces.",
        web_admin: "Dév web + admin",
        web_admin_desc:
          "Développement full-stack et administration continue.",
        branding: "Branding",
        branding_desc:
          "Création d'identités de marque mémorables et percutantes.",
        production: "Production audiovisuelle",
        production_desc:
          "Production vidéo et audio de haute qualité.",
        support: "Support",
        support_desc:
          "Support dédié 24/7 pour tous vos besoins numériques.",
        social_management: "Gestion des réseaux sociaux",
        social_management_desc:
          "Gestion de communauté et stratégies de croissance.",
        study: "Étude de projet",
        study_desc:
          "Études de faisabilité et planification de projet.",
        apps: "Applications mobiles",
        apps_desc:
          "Développement d'applications iOS et Android.",
      },
      process_title: "Notre Processus",
      process_steps: {
        "01": {
          title: "Découverte",
          desc: "Nous écoutons vos besoins et comprenons vos objectifs.",
        },
        "02": {
          title: "Stratégie",
          desc: "Nous élaborons une feuille de route adaptée à votre entreprise.",
        },
        "03": {
          title: "Exécution",
          desc: "Nos experts donnent vie à la stratégie.",
        },
        "04": {
          title: "Optimisation",
          desc: "Nous surveillons, analysons et affinons pour les meilleurs résultats.",
        },
      },
      pricing_title: "Nos Offres",
      pricing_popular_badge: "LE PLUS POPULAIRE",
      pricing_tiers: {
        starter: {
          name: "Starter",
          price: "Contactez-nous",
          features: [
            "Présence Web",
            "SEO de Base",
            "Config Réseaux Sociaux",
          ],
        },
        growth: {
          name: "Growth",
          price: "Contactez-nous",
          features: [
            "Site Web Personnalisé",
            "SEO Avancé",
            "Stratégie de Contenu",
            "Rapports Mensuels",
          ],
        },
        enterprise: {
          name: "Enterprise",
          price: "Contactez-nous",
          features: [
            "Transformation Digitale",
            "Équipe Dédiée",
            "Support 24/7",
            "Développement Sur Mesure",
          ],
        },
      },
      pricing_cta: "Commencer",
      faq_title: "Questions Fréquentes",
      faq: {
        q1: {
          question: "Combien de temps prend un projet web ?",
          answer:
            "Généralement, un site web standard prend 4 à 6 semaines de la découverte au lancement, selon la complexité et les exigences.",
        },
        q2: {
          question: "Proposez-vous un support continu ?",
          answer:
            "Oui, nous proposons divers forfaits de support et de maintenance pour garantir que vos actifs numériques restent sécurisés et à jour.",
        },
        q3: {
          question: "Pouvez-vous aider avec le branding de zéro ?",
          answer:
            "Absolument ! Nos experts en branding peuvent vous aider à définir votre identité, logo, palette de couleurs et voix dès le départ.",
        },
      },
    },
    contact: {
      hero_title: "Discutons",
      hero_subtitle:
        "Prêt à démarrer votre prochain projet ? Nous sommes là pour vous aider à grandir.",
      form_title: "Envoyez un Message",
      fields: {
        name_label: "Nom",
        name_placeholder: "Jean Dupont",
        email_label: "Email",
        email_placeholder: "jean@example.com",
        subject_label: "Sujet",
        subject_placeholder: "Demande de Projet",
        message_label: "Message",
        message_placeholder: "Parlez-nous de votre projet...",
      },
      submit: "Envoyer le Message",
      toast_success_title: "Message envoyé avec succès !",
      toast_success_desc: "Nous vous répondrons dans les 24 heures.",
      toast_cancel: "Annuler",
      cards: {
        phone_title: "Téléphone",
        phone_value: "+216 XX XXX XXX",
        email_title: "Email",
        email_value: "contact@4media.tn",
        hq_title: "Siège Social",
        hq_value: "Tunis, Tunisie",
      },
      response_badge_title: "Réponse Rapide",
      response_badge_desc: "Nous répondons généralement sous 24h.",
      faq_preview: {
        q1_title: "Où êtes-vous situés ?",
        q1_answer:
          "Nous sommes basés au cœur de Tunis, en Tunisie, mais nous travaillons avec des clients du monde entier.",
        q2_title: "Comment démarrer un projet ?",
        q2_answer:
          "Remplissez simplement le formulaire ou appelez-nous. Nous planifierons une réunion de découverte pour comprendre vos besoins.",
      },
    },
    blog: {
      hero_title: "Actualités & Insights",
      hero_subtitle:
        "Les dernières tendances, conseils et histoires du monde numérique.",
      featured_badge: "À la Une",
      featured_title:
        "L'Avenir du Marketing Digital en Tunisie : Tendances 2025",
      featured_excerpt:
        "Découvrez les technologies émergentes et les stratégies qui façonneront le paysage numérique dans les années à venir. IA, personnalisation, et plus encore.",
      featured_read: "Lire l'Article",
      card_category: "Catégorie",
      card_date_label: "Date",
      card_read_time: "5 min de lecture",
      card_title: "Comment Optimiser Votre Site Web pour la Conversion",
      card_excerpt:
        "Apprenez les stratégies essentielles pour transformer vos visiteurs en clients payants avec ces astuces simples.",
      card_read_more: "Lire la Suite",
      pagination_prev: "Précédent",
      pagination_next: "Suivant",
      newsletter_title: "Abonnez-vous à notre Newsletter",
      newsletter_subtitle:
        "Recevez les dernières mises à jour et ressources directement dans votre boîte de réception.",
      newsletter_placeholder: "Entrez votre email",
      newsletter_cta: "S'abonner",
    },
    portfolio: {
      hero_title_prefix: "Nos",
      hero_title_highlight: "Réalisations",
      hero_subtitle:
        "Nous laissons nos résultats parler d'eux-mêmes. Explorez nos derniers projets.",
      filters: ["Tous", "Branding", "Web", "Social", "Apps", "Vidéo"],
      case_badge: "Voir l'Étude de Cas",
      dialog: {
        image_label: "Image du Projet",
        challenge_title: "Défi & Solution",
        challenge_desc:
          "La description détaillée de l'étude de cas irait ici. Expliquant le problème du client et comment 4mediagency l'a résolu en utilisant des stratégies innovantes et la technologie.",
        results_title: "Résultats Clés",
        visit_site: "Visiter le Site",
      },
      clients_title: "Ils nous font confiance",
      client_placeholder: "CLIENT",
    },
    notFound: {
      title: "Erreur Système : Page Non Trouvée",
      description:
        "Les coordonnées numériques que vous avez saisies ne correspondent à aucun secteur connu dans notre base de données.",
      search_placeholder: "Rechercher sur le site...",
      home_button: "Retour à la Base",
      back_button: "Retour",
    },
    language: {
      label: "Langue",
      en: "Anglais",
      fr: "Français",
      ar: "Arabe",
    },
  },
  ar: {
    nav: {
      home: "الرئيسية",
      about: "من نحن",
      services: "الخدمات",
      portfolio: "الأعمال",
      blog: "المدونة",
      contact: "اتصل بنا",
      cta: "ابدأ مشروعك",
    },
    footer: {
      description:
        "وكالة تسويق رقمي مميزة في تونس. نخلق تجارب رقمية مبهرة تحقق النتائج.",
      navigation: "التنقل",
      services: "الخدمات",
      newsletter_title: "ابقَ على اطلاع",
      newsletter_subtitle:
        "اشترك في النشرة البريدية للحصول على أحدث اتجاهات التسويق الرقمي.",
      newsletter_placeholder: "أدخل بريدك الإلكتروني",
      location: "تونس، تونس",
      phone: "+216 XX XXX XXX",
      copyright: "جميع الحقوق محفوظة.",
      made_with: "صُمِّم بحب",
      in_tunisia: "في تونس",
      nav_items: {
        home: "الرئيسية",
        about: "من نحن",
        services: "الخدمات",
        portfolio: "الأعمال",
        blog: "المدونة",
        contact: "اتصل بنا",
      },
      services_list: {
        web: "تطوير الويب",
        branding: "الهوية البصرية",
        social: "وسائل التواصل",
        content: "صناعة المحتوى",
      },
    },
    home: {
      badge: "مستقبل العالم الرقمي",
      hero_line1: "نحن نصنع",
      hero_line2: "أساطير",
      hero_subtitle:
        "وكالة رقمية حائزة على جوائز تمزج بين الفن والتقنية والاستراتيجية لبناء علامات تجارية مسيطرة.",
      hero_primary_cta: "ابدأ الرحلة",
      hero_secondary_cta: "شاهد أعمالنا",
      scroll_hint: "مرر للاكتشاف",
      expertise_title: "خبراتنا",
      expertise_subtitle: "مقاربة شاملة للهيمنة الرقمية.",
      services_web_title: "تطوير الويب",
      services_web_desc:
        "مواقع إلكترونية مبهرة وعالية الأداء، مصممة لتروي قصة علامتك التجارية الفريدة. نبني تجارب رقمية قابلة للتطور وآمنة.",
      services_web_cta: "اعرف المزيد",
      services_branding: "الهوية البصرية",
      services_marketing: "التسويق الرقمي",
      services_cyber_title: "الأمن السيبراني",
      services_cyber_desc: "احمِ أصولك الرقمية.",
      services_apps_title: "تطبيقات الجوال",
      services_apps_desc: "حلول iOS و Android أصلية.",
      services_all_cta: "استكشف كل الخدمات",
      marquee_items: ["تصميم", "تطوير", "استراتيجية", "ابتكار", "تسويق"],
      featured_title: "مشاريع مختارة",
      featured_subtitle: "مشاريع تصنع إرثنا.",
      featured_project_name: "اسم المشروع",
      featured_badge_web: "تصميم ويب",
      featured_badge_dev: "تطوير",
      featured_desc:
        "منصة رقمية ثورية أعادت تعريف معايير الصناعة من خلال الجمع بين أحدث التقنيات وتصميم غامر.",
      featured_cta: "عرض دراسة الحالة",
      cta_title_prefix: "جاهز",
      cta_title_highlight: "للإقلاع؟",
      cta_subtitle:
        "انضم إلى صفوف قادة الصناعة. لنصنع مستقبلك اليوم.",
      cta_button: "ابدأ مشروعك",
      view_full_portfolio: "عرض كل الأعمال",
    },
    about: {
      hero_title: "نحن 4mediagency",
      hero_subtitle:
        "فريق من الحالمين والمبدعين والاستراتيجيين المكرّسين لرفع العلامات التجارية في العصر الرقمي.",
      stats_projects: "المشاريع المنجزة",
      stats_clients: "العملاء السعداء",
      stats_team: "أفراد الفريق",
      stats_awards: "الجوائز",
      values_title: "قيمنا الأساسية",
      values: {
        innovation:
          "ندفع الحدود ونتبنى التكنولوجيا الجديدة.",
        excellence:
          "نقدّم الأفضل دائمًا لعملائنا.",
        integrity:
          "نبني الثقة عبر الشفافية والصدق.",
        collaboration:
          "نؤمن بقوة العمل الجماعي.",
        impact:
          "نصنع أعمالاً تُحدث فرقًا حقيقيًا.",
        global_vision:
          "نفكر بعقلية عالمية ونتصرف برؤية واسعة.",
      },
      journey_title: "رحلتنا",
      journey: {
        "2020": {
          title: "البداية",
          desc: "تأسست 4mediagency برؤية لإحداث ثورة في التسويق الرقمي في تونس.",
        },
        "2021": {
          title: "نمو سريع",
          desc: "توسّع الفريق إلى 10 أفراد والحصول على أول عميل دولي.",
        },
        "2022": {
          title: "الاعتراف",
          desc: "الاعتراف بنا كأفضل وكالة رقمية في شمال إفريقيا.",
        },
        "2023": {
          title: "آفاق جديدة",
          desc: "إطلاق أقسام متخصصة في الأمن السيبراني والذكاء الاصطناعي.",
        },
      },
    },
    services: {
      hero_title_prefix: "ترسانتنا",
      hero_title_highlight: "الرقمية",
      hero_subtitle:
        "نطلق مجموعة كاملة من الأدوات الرقمية لضمان سيطرتك على السوق.",
      cards: {
        content: "صناعة المحتوى",
        content_desc:
          "استراتيجيات محتوى جذابة تلامس جمهورك.",
        communication: "الاتصال الرقمي",
        communication_desc:
          "تخطيط استراتيجي للتواصل عبر القنوات الرقمية.",
        online_services: "الخدمات عبر الإنترنت",
        online_services_desc:
          "حلول متكاملة عبر الإنترنت لنمو الأعمال.",
        cybersecurity: "الأمن السيبراني",
        cybersecurity_desc:
          "حماية قوية لأصولك وبياناتك الرقمية.",
        social_security: "أمان الشبكات الاجتماعية",
        social_security_desc:
          "تأمين حضورك على وسائل التواصل ضد التهديدات.",
        web_admin: "تطوير وإدارة الويب",
        web_admin_desc:
          "تطوير متكامل وإدارة مستمرة.",
        branding: "الهوية البصرية",
        branding_desc:
          "هويات علامة تجارية مميزة ولا تُنسى.",
        production: "الإنتاج السمعي البصري",
        production_desc:
          "إنتاج فيديو وصوت بجودة عالية.",
        support: "الدعم",
        support_desc:
          "دعم مخصص 24/7 لكل احتياجاتك الرقمية.",
        social_management: "إدارة وسائل التواصل",
        social_management_desc:
          "إدارة المجتمعات واستراتيجيات النمو.",
        study: "دراسة المشاريع",
        study_desc:
          "دراسات جدوى وتخطيط للمشاريع.",
        apps: "تطبيقات الجوال",
        apps_desc:
          "تطوير تطبيقات iOS و Android.",
      },
      process_title: "منهجيتنا",
      process_steps: {
        "01": {
          title: "الاكتشاف",
          desc: "نستمع لاحتياجاتك ونفهم أهدافك.",
        },
        "02": {
          title: "الاستراتيجية",
          desc: "نضع خارطة طريق مخصّصة لعملك.",
        },
        "03": {
          title: "التنفيذ",
          desc: "فريقنا الخبير يحقق الاستراتيجية على أرض الواقع.",
        },
        "04": {
          title: "التحسين",
          desc: "نراقب ونحلّل ونحسّن للوصول لأفضل النتائج.",
        },
      },
      pricing_title: "باقاتنا",
      pricing_popular_badge: "الأكثر اختيارًا",
      pricing_tiers: {
        starter: {
          name: "Starter",
          price: "تواصل معنا",
          features: [
            "حضور على الويب",
            "تحسين أساسي لمحركات البحث",
            "إعداد حسابات التواصل الاجتماعي",
          ],
        },
        growth: {
          name: "Growth",
          price: "تواصل معنا",
          features: [
            "موقع مخصص",
            "تحسين متقدم لمحركات البحث",
            "استراتيجية محتوى",
            "تقارير شهرية",
          ],
        },
        enterprise: {
          name: "Enterprise",
          price: "تواصل معنا",
          features: [
            "تحول رقمي كامل",
            "فريق مخصص",
            "دعم 24/7",
            "تطوير حسب الطلب",
          ],
        },
      },
      pricing_cta: "ابدأ الآن",
      faq_title: "الأسئلة الشائعة",
      faq: {
        q1: {
          question: "كم يستغرق تنفيذ موقع ويب؟",
          answer:
            "عادة يستغرق الموقع القياسي من 4 إلى 6 أسابيع من مرحلة الاكتشاف حتى الإطلاق، حسب التعقيد والمتطلبات.",
        },
        q2: {
          question: "هل تقدمون دعمًا مستمرًا؟",
          answer:
            "نعم، نوفر عدة باقات للدعم والصيانة لضمان بقاء أصولك الرقمية آمنة ومحدّثة.",
        },
        q3: {
          question: "هل يمكنكم بناء هوية العلامة التجارية من الصفر؟",
          answer:
            "بالتأكيد! يمكن لفريق الهوية البصرية لدينا مساعدتك في تصميم الهوية، الشعار، الألوان ونبرة العلامة التجارية من البداية.",
        },
      },
    },
    contact: {
      hero_title: "فلنتحدث",
      hero_subtitle:
        "هل أنت مستعد لبدء مشروعك القادم؟ نحن هنا لمساعدتك على النمو.",
      form_title: "أرسل رسالة",
      fields: {
        name_label: "الاسم",
        name_placeholder: "محمد علي",
        email_label: "البريد الإلكتروني",
        email_placeholder: "mohamed@example.com",
        subject_label: "الموضوع",
        subject_placeholder: "طلب مشروع",
        message_label: "الرسالة",
        message_placeholder: "أخبرنا عن مشروعك...",
      },
      submit: "إرسال الرسالة",
      toast_success_title: "تم إرسال الرسالة بنجاح!",
      toast_success_desc: "سنتواصل معك خلال 24 ساعة.",
      toast_cancel: "إلغاء",
      cards: {
        phone_title: "الهاتف",
        phone_value: "+216 XX XXX XXX",
        email_title: "البريد الإلكتروني",
        email_value: "contact@4media.tn",
        hq_title: "المقر الرئيسي",
        hq_value: "تونس، تونس",
      },
      response_badge_title: "استجابة سريعة",
      response_badge_desc: "نرد عادة خلال 24 ساعة.",
      faq_preview: {
        q1_title: "أين يقع مقرّكم؟",
        q1_answer:
          "يقع مقرّنا في قلب العاصمة تونس، ونعمل مع عملاء من مختلف أنحاء العالم.",
        q2_title: "كيف أبدأ مشروعًا؟",
        q2_answer:
          "ما عليك سوى ملء النموذج أو الاتصال بنا، وسنحدد موعدًا لجلسة اكتشاف لفهم احتياجاتك.",
      },
    },
    blog: {
      hero_title: "الأخبار والرؤى",
      hero_subtitle:
        "أحدث التوجهات والنصائح والقصص من عالم التسويق الرقمي.",
      featured_badge: "مقال مميز",
      featured_title: "مستقبل التسويق الرقمي في تونس: توجهات 2025",
      featured_excerpt:
        "اكتشف التقنيات الناشئة والاستراتيجيات التي ستشكل المشهد الرقمي في السنوات القادمة: الذكاء الاصطناعي، التخصيص والمزيد.",
      featured_read: "اقرأ المقال",
      card_category: "الفئة",
      card_date_label: "التاريخ",
      card_read_time: "5 دقائق قراءة",
      card_title: "كيف تحسّن موقعك لزيادة التحويلات",
      card_excerpt:
        "تعرّف على الاستراتيجيات الأساسية لتحويل الزوار إلى عملاء باستخدام خطوات بسيطة وفعّالة.",
      card_read_more: "اقرأ المزيد",
      pagination_prev: "السابق",
      pagination_next: "التالي",
      newsletter_title: "اشترك في النشرة البريدية",
      newsletter_subtitle:
        "احصل على أحدث الأخبار والموارد مباشرة إلى بريدك.",
      newsletter_placeholder: "أدخل بريدك الإلكتروني",
      newsletter_cta: "اشترك",
    },
    portfolio: {
      hero_title_prefix: "أعمالنا",
      hero_title_highlight: "المختارة",
      hero_subtitle:
        "ندع نتائجنا تتحدث عنا. استكشف أحدث مشاريعنا.",
      filters: ["الكل", "الهوية", "ويب", "سوشيال", "تطبيقات", "فيديو"],
      case_badge: "عرض دراسة الحالة",
      dialog: {
        image_label: "صورة المشروع",
        challenge_title: "التحدي والحل",
        challenge_desc:
          "يتم هنا عرض وصف تفصيلي لدراسة الحالة، وشرح مشكلة العميل وكيف قامت 4mediagency بحلها باستخدام استراتيجيات مبتكرة وتقنيات متقدمة.",
        results_title: "النتائج الرئيسية",
        visit_site: "زيارة الموقع",
      },
      clients_title: "عملاؤنا",
      client_placeholder: "عميل",
    },
    notFound: {
      title: "خطأ في النظام: الصفحة غير موجودة",
      description:
        "الإحداثيات الرقمية التي أدخلتها لا تطابق أي منطقة معروفة في قاعدة بياناتنا.",
      search_placeholder: "ابحث في الموقع...",
      home_button: "العودة للرئيسية",
      back_button: "رجوع",
    },
    language: {
      label: "اللغة",
      en: "الإنجليزية",
      fr: "الفرنسية",
      ar: "العربية",
    },
  },
} as const

export type AppMessages = Messages[Locale]

export function getMessage(locale: Locale, key: string): string {
  const parts = key.split(".")
  let current: any = messages[locale]

  for (const part of parts) {
    if (current && typeof current === "object" && part in current) {
      current = current[part]
    } else {
      return key
    }
  }

  return typeof current === "string" ? current : key
}


