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
      testimonials_title: "What Our",
      testimonials_highlight: "Clients",
      testimonials_suffix: "Say",
      testimonials_subtitle: "Don't just take our word for it. Hear from the businesses we've helped transform.",
      testimonial_1_quote: "4mediagency transformed our digital presence completely. The ROI has been incredible and our online sales increased by 300%.",
      testimonial_1_author: "Ahmed Karoui",
      testimonial_1_role: "CEO, TechStart Tunisia",
      testimonial_2_quote: "The team is professional, creative, and truly understands the Tunisian market. They delivered beyond our expectations.",
      testimonial_2_author: "Leila Bouazizi",
      testimonial_2_role: "Marketing Director, FashionBrand",
      testimonial_3_quote: "Working with 4media was a game-changer for our startup. Their strategic approach helped us reach new heights.",
      testimonial_3_author: "Omar Ben Salem",
      testimonial_3_role: "Founder, InnovateTN",
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
      hero_subtitle: "We let our results speak for themselves. Explore our latest projects.",
      gallery_title: "Our Work",
      gallery_subtitle: "Click on a project to explore",
      scroll_indicator: "Scroll to explore more",
      view_case_study: "View Full Case Study",
      year_label: "Year",
      client_label: "Client",
      premium_brand: "Premium Brand",
      filters: {
        all: "All Projects",
        web: "Web Development",
        branding: "Branding",
        app: "Mobile Apps",
        marketing: "Marketing"
      },
      stats: {
        projects: "Projects Completed",
        clients: "Happy Clients",
        awards: "Awards Won",
        satisfaction: "Client Satisfaction"
      },
      featured: {
        badge: "Our Work",
        title: "Featured",
        title_highlight: "Projects",
        subtitle: "Explore our diverse portfolio of successful projects across industries.",
        view_project: "View Project"
      },
      process: {
        badge: "Our Process",
        title: "How We",
        title_highlight: "Work",
        subtitle: "Our proven methodology ensures exceptional results on every project.",
        step: "Step",
        discovery: "Discovery",
        discovery_desc: "We dive deep into your business, goals, and target audience to understand your unique needs.",
        strategy: "Strategy",
        strategy_desc: "We develop a comprehensive roadmap aligned with your objectives and market positioning.",
        design: "Design",
        design_desc: "Our creative team crafts stunning visuals that capture your brand essence and engage users.",
        development: "Development",
        development_desc: "We build with cutting-edge technology, ensuring performance, security, and scalability.",
        launch: "Launch",
        launch_desc: "We deploy your project and provide ongoing support to ensure continued success."
      },
      testimonials: {
        badge: "Testimonials",
        title: "What Our",
        title_highlight: "Clients",
        title_suffix: "Say",
        subtitle: "Don't just take our word for it - hear from our satisfied clients."
      },
      clients: {
        trusted_by: "Trusted By",
        industry_leaders: "Industry Leaders"
      },
      cta: {
        title: "Ready to Start Your Project?",
        subtitle: "Let's collaborate and create something extraordinary together.",
        start_project: "Start a Project",
        view_services: "View Services"
      },
      projects: {
        luxury_real_estate: "Luxury Real Estate Platform",
        luxury_real_estate_desc: "A high-end real estate platform with immersive virtual tours and 3D property visualization.",
        tech_startup: "Tech Startup Branding",
        tech_startup_desc: "Complete brand identity for a Silicon Valley AI startup, from logo to brand guidelines.",
        ecommerce_app: "E-commerce Mobile App",
        ecommerce_app_desc: "Mobile-first shopping experience with 2M+ downloads and 4.8 star rating.",
        fashion_editorial: "Fashion Editorial Campaign",
        fashion_editorial_desc: "Award-winning video campaign for a luxury fashion house with 50M+ views.",
        fintech_dashboard: "FinTech Dashboard",
        fintech_dashboard_desc: "Real-time financial analytics dashboard with advanced charting and reporting.",
        restaurant_rebrand: "Restaurant Chain Rebrand",
        restaurant_rebrand_desc: "Complete rebrand for a national restaurant chain with 200+ locations.",
        fitness_app: "Fitness Tracking App",
        fitness_app_desc: "AI-powered fitness app with personalized workout plans and nutrition tracking.",
        tourism_campaign: "Tourism Board Campaign",
        tourism_campaign_desc: "Integrated marketing campaign that increased tourism by 35% year-over-year."
      },
      categories: {
        web_design: "Web Design",
        branding: "Branding",
        development: "Development",
        production: "Production"
      }
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
    chatbot: {
      welcome: "Hello! 👋 I'm the 4mediagency AI assistant. I can help you with information about our services, pricing, process, and more!\n\nWhat would you like to know?",
      placeholder: "Type your message...",
      powered_by: "Powered by 4mediagency AI • Not a real person",
      online_status: "Online • Typically replies instantly",
      suggestions: {
        services: "What services do you offer?",
        pricing: "How much does a website cost?",
        about: "Tell me about 4mediagency",
        project: "I want to start a project",
        another_question: "I have another question",
        contact_human: "Contact a human agent",
        no_thanks: "No, that's all",
        web_dev: "Tell me about web development",
        branding: "What about branding?",
        marketing: "Digital marketing services",
        quote: "Get a free quote",
        included: "What's included?",
        payment: "Payment options?",
        rush: "Rush delivery available?",
        availability: "Current availability?",
        schedule: "Schedule a meeting",
        contact_info: "Contact information",
        hours: "Working hours",
        team: "Meet the team",
        portfolio: "See our portfolio",
        values: "Our values",
        testimonials: "Client testimonials",
        industries: "Industries we serve",
        consultation: "Book a consultation",
        start: "Get started",
        prepare: "What do I need to prepare?",
        tech: "Which tech for my project?",
        hosting: "Hosting pricing",
        maintenance: "Maintenance plans",
        domain: "Domain help",
        support_plans: "Support plans",
        report_issue: "Report an issue",
        training: "Training options",
        french: "Contact in French",
        arabic: "Contact in Arabic",
        results: "See client results",
        call: "Book a call",
        contact_page: "Go to contact page",
        whatsapp: "WhatsApp us",
        email: "Send email",
        new_conversation: "Start new conversation",
        view_services: "View services"
      },
      answers: {
        greeting: "Hello! 👋 Welcome to 4mediagency! I'm your digital assistant. How can I help you today?",
        thanks: "You're welcome! 😊 Is there anything else I can help you with?",
        services: "We offer a comprehensive range of digital services:\n\n🌐 **Web Development** - Custom websites, e-commerce, web apps\n🎨 **Branding** - Logo design, visual identity, brand strategy\n📱 **Mobile Apps** - iOS & Android development\n📈 **Digital Marketing** - SEO, social media, content marketing\n🔒 **Cybersecurity** - Security audits, protection solutions\n\nWhich service interests you most?",
        web: "Our web development services include:\n\n✅ Custom responsive websites\n✅ E-commerce platforms (Shopify, WooCommerce)\n✅ Web applications (React, Next.js)\n✅ CMS development (WordPress, Strapi)\n✅ API development & integration\n✅ Website maintenance & support\n\nWe build fast, secure, and beautiful websites tailored to your brand!",
        brand: "Our branding services help you stand out:\n\n🎨 **Logo Design** - Unique, memorable logos\n📋 **Brand Guidelines** - Colors, typography, usage rules\n🖼️ **Visual Identity** - Business cards, letterheads, social templates\n💡 **Brand Strategy** - Positioning, messaging, tone of voice\n\nA strong brand is the foundation of business success!",
        marketing: "Our digital marketing services include:\n\n📊 **SEO** - Improve your Google rankings\n📱 **Social Media Management** - Content, engagement, growth\n💰 **Paid Advertising** - Google Ads, Facebook/Instagram Ads\n✍️ **Content Marketing** - Blog posts, videos, infographics\n📧 **Email Marketing** - Campaigns, automation, newsletters\n\nWe help you reach the right audience and grow your business!",
        app: "Our mobile app development services:\n\n📱 **Native Apps** - iOS (Swift) & Android (Kotlin)\n⚡ **Cross-Platform** - React Native, Flutter\n🔗 **App Integration** - APIs, third-party services\n🛠️ **Maintenance** - Updates, bug fixes, improvements\n\nFrom concept to App Store, we build apps users love!",
        pricing: "Our pricing depends on project scope and requirements:\n\n💻 **Basic Website**: Starting at 2,000 TND\n🛒 **E-commerce Site**: Starting at 5,000 TND\n🎨 **Branding Package**: Starting at 1,500 TND\n📱 **Mobile App**: Starting at 8,000 TND\n📈 **Marketing Retainer**: Starting at 800 TND/month\n\nEvery project is unique! Contact us for a personalized quote tailored to your needs.",
        payment: "We offer flexible payment options:\n\n💳 **Bank Transfer** - Local and international\n💵 **Cash Payment** - At our office\n📅 **Payment Plans** - Split into milestones (50% upfront, 50% on delivery)\n🔄 **Monthly Retainers** - For ongoing services\n\nWe'll find a payment structure that works for you!",
        timeline: "Typical project timelines:\n\n⏱️ **Basic Website**: 2-4 weeks\n⏱️ **E-commerce Site**: 4-8 weeks\n⏱️ **Branding Package**: 2-3 weeks\n⏱️ **Mobile App**: 8-16 weeks\n⏱️ **Logo Design**: 1-2 weeks\n\nTimelines vary based on complexity. We always agree on deadlines before starting!",
        location: "📍 We're located in **Tunis, Tunisia**\n\nWhile we're based in Tunisia, we work with clients globally! We offer:\n\n🖥️ Video calls (Zoom, Google Meet)\n📧 Email communication\n💬 WhatsApp/phone support\n🤝 In-person meetings in Tunis\n\nDistance is never a barrier to great collaboration!",
        contact: "Here's how to reach us:\n\n📧 **Email**: contact@4mediagency.tn\n📱 **Phone**: +216 XX XXX XXX\n💬 **WhatsApp**: Click the green button!\n🌐 **Website**: www.4mediagency.tn\n\nWe typically respond within 24 hours!",
        hours: "Our working hours:\n\n🕘 **Monday - Friday**: 9:00 AM - 6:00 PM (Tunisia Time)\n🕘 **Saturday**: 9:00 AM - 1:00 PM\n🚫 **Sunday**: Closed\n\nWe monitor messages outside hours for urgent matters!",
        about: "**4mediagency** is a premium digital agency based in Tunisia! 🇹🇳\n\n🏆 5+ years of experience\n👥 Team of 10+ experts\n🌍 50+ clients served\n⭐ 98% client satisfaction\n\nWe blend creativity, technology, and strategy to help businesses thrive in the digital world!",
        portfolio: "Check out our portfolio to see our best work! 🎨\n\nWe've worked with:\n• E-commerce brands\n• Tech startups\n• Restaurants & hospitality\n• Real estate companies\n• Healthcare providers\n\n👉 Visit our Portfolio page to see detailed case studies!",
        testimonials: "Here's what our clients say:\n\n⭐⭐⭐⭐⭐\n\"4media transformed our digital presence. The ROI has been incredible!\" - TechCorp CEO\n\n⭐⭐⭐⭐⭐\n\"Professional, creative, and truly understand the market.\" - Marketing Director\n\n⭐⭐⭐⭐⭐\n\"Delivered beyond our expectations!\" - Startup Founder",
        process: "Our simple 5-step process:\n\n1️⃣ **Discovery** - We learn about your business & goals\n2️⃣ **Strategy** - We create a tailored plan\n3️⃣ **Design** - We craft beautiful visuals\n4️⃣ **Development** - We build your solution\n5️⃣ **Launch** - We deploy & support you\n\nReady to start? Let's schedule a free consultation!",
        consultation: "Yes! We offer a **FREE 30-minute consultation** to:\n\n✅ Understand your needs\n✅ Discuss your goals\n✅ Propose solutions\n✅ Provide a quote\n\nNo obligations - just a friendly chat about your project!",
        tech: "We use modern technologies:\n\n**Frontend**: React, Next.js, Vue.js, Tailwind CSS\n**Backend**: Node.js, Python, PHP\n**Mobile**: React Native, Flutter, Swift, Kotlin\n**CMS**: WordPress, Strapi, Sanity\n**Cloud**: AWS, Vercel, Google Cloud\n\nWe choose the best tech for your specific needs!",
        hosting: "We offer complete hosting solutions:\n\n🌐 **Domain Registration** - We help secure your domain\n☁️ **Web Hosting** - Fast, secure servers\n🔄 **Maintenance** - Updates, backups, monitoring\n🔒 **SSL Certificates** - Free HTTPS security\n📊 **Analytics Setup** - Track your performance\n\nPackages start at 50 TND/month!",
        support: "We provide ongoing support:\n\n🆘 **Technical Support** - Bug fixes, troubleshooting\n📞 **Priority Response** - Within 24 hours\n🔄 **Regular Updates** - Security & feature updates\n📚 **Training** - Learn to manage your site\n\nSupport plans start at 200 TND/month!",
        languages: "Our team speaks multiple languages:\n\n🇬🇧 **English** - Fluent\n🇫🇷 **French** - Fluent\n🇹🇳 **Arabic** - Native\n\nWe communicate in whichever language you prefer!",
        why_us: "Why choose 4mediagency?\n\n✨ **Local Expertise** - We understand the Tunisian market\n💡 **Custom Solutions** - No templates, everything tailored\n🤝 **Personal Service** - Direct access to your team\n💰 **Fair Pricing** - Quality without breaking the bank\n🏆 **Proven Results** - 98% client satisfaction\n\nWe're not just vendors - we're your digital partners!",
        human: "Of course! You can reach a human team member:\n\n📧 Email: contact@4mediagency.tn\n📱 WhatsApp: Click the green button\n📞 Phone: +216 XX XXX XXX\n\nOr fill out our contact form and we'll get back to you within 24 hours!",
        bye: "Goodbye! 👋 Thanks for chatting with us. Feel free to come back anytime you have questions. Have a great day! 🌟",
        fallback: "I'm not sure I understand that question. 🤔\n\nI can help you with:\n• Our services (web, branding, marketing)\n• Pricing and quotes\n• Our process and timeline\n• Contact information\n\nOr would you like to speak with a human agent?"
      }
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
      testimonials_title: "Ce Que Nos",
      testimonials_highlight: "Clients",
      testimonials_suffix: "Disent",
      testimonials_subtitle: "Ne nous croyez pas sur parole. Écoutez les entreprises que nous avons aidées à se transformer.",
      testimonial_1_quote: "4mediagency a complètement transformé notre présence digitale. Le ROI a été incroyable et nos ventes en ligne ont augmenté de 300%.",
      testimonial_1_author: "Ahmed Karoui",
      testimonial_1_role: "PDG, TechStart Tunisia",
      testimonial_2_quote: "L'équipe est professionnelle, créative et comprend vraiment le marché tunisien. Ils ont dépassé nos attentes.",
      testimonial_2_author: "Leila Bouazizi",
      testimonial_2_role: "Directrice Marketing, FashionBrand",
      testimonial_3_quote: "Travailler avec 4media a changé la donne pour notre startup. Leur approche stratégique nous a aidés à atteindre de nouveaux sommets.",
      testimonial_3_author: "Omar Ben Salem",
      testimonial_3_role: "Fondateur, InnovateTN",
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
      gallery_title: "Nos Réalisations",
      gallery_subtitle: "Cliquez sur un projet pour explorer",
      scroll_indicator: "Défiler pour explorer plus",
      view_case_study: "Voir l'Étude de Cas",
      year_label: "Année",
      client_label: "Client",
      premium_brand: "Marque Premium",
      filters: {
        all: "Tous les Projets",
        web: "Développement Web",
        branding: "Branding",
        app: "Applications Mobiles",
        marketing: "Marketing"
      },
      stats: {
        projects: "Projets Réalisés",
        clients: "Clients Satisfaits",
        awards: "Prix Gagnés",
        satisfaction: "Satisfaction Client"
      },
      featured: {
        badge: "Nos Réalisations",
        title: "Projets",
        title_highlight: "Phares",
        subtitle: "Explorez notre portfolio diversifié de projets réussis dans différents secteurs.",
        view_project: "Voir le Projet"
      },
      process: {
        badge: "Notre Processus",
        title: "Comment Nous",
        title_highlight: "Travaillons",
        subtitle: "Notre méthodologie éprouvée garantit des résultats exceptionnels sur chaque projet.",
        step: "Étape",
        discovery: "Découverte",
        discovery_desc: "Nous plongeons au cœur de votre entreprise, vos objectifs et votre audience cible pour comprendre vos besoins uniques.",
        strategy: "Stratégie",
        strategy_desc: "Nous développons une feuille de route complète alignée sur vos objectifs et votre positionnement marché.",
        design: "Design",
        design_desc: "Notre équipe créative conçoit des visuels époustouflants qui capturent l'essence de votre marque et engagent les utilisateurs.",
        development: "Développement",
        development_desc: "Nous construisons avec des technologies de pointe, garantissant performance, sécurité et évolutivité.",
        launch: "Lancement",
        launch_desc: "Nous déployons votre projet et fournissons un support continu pour assurer un succès durable."
      },
      testimonials: {
        badge: "Témoignages",
        title: "Ce Que Nos",
        title_highlight: "Clients",
        title_suffix: "Disent",
        subtitle: "Ne nous croyez pas sur parole - écoutez nos clients satisfaits."
      },
      clients: {
        trusted_by: "Ils Nous Font Confiance",
        industry_leaders: "Leaders du Secteur"
      },
      cta: {
        title: "Prêt à Démarrer Votre Projet ?",
        subtitle: "Collaborons et créons ensemble quelque chose d'extraordinaire.",
        start_project: "Démarrer un Projet",
        view_services: "Voir les Services"
      },
      projects: {
        luxury_real_estate: "Plateforme Immobilier de Luxe",
        luxury_real_estate_desc: "Une plateforme immobilière haut de gamme avec visites virtuelles immersives et visualisation 3D.",
        tech_startup: "Branding Startup Tech",
        tech_startup_desc: "Identité de marque complète pour une startup IA de Silicon Valley, du logo aux directives de marque.",
        ecommerce_app: "Application E-commerce Mobile",
        ecommerce_app_desc: "Expérience d'achat mobile-first avec 2M+ téléchargements et note de 4.8 étoiles.",
        fashion_editorial: "Campagne Éditoriale Mode",
        fashion_editorial_desc: "Campagne vidéo primée pour une maison de mode de luxe avec 50M+ vues.",
        fintech_dashboard: "Tableau de Bord FinTech",
        fintech_dashboard_desc: "Tableau de bord d'analyse financière en temps réel avec graphiques avancés.",
        restaurant_rebrand: "Rebranding Chaîne Restaurant",
        restaurant_rebrand_desc: "Rebranding complet pour une chaîne de restaurants nationale avec 200+ emplacements.",
        fitness_app: "Application Fitness",
        fitness_app_desc: "Application fitness alimentée par l'IA avec plans d'entraînement personnalisés.",
        tourism_campaign: "Campagne Office de Tourisme",
        tourism_campaign_desc: "Campagne marketing intégrée qui a augmenté le tourisme de 35%."
      },
      categories: {
        web_design: "Design Web",
        branding: "Branding",
        development: "Développement",
        production: "Production"
      }
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
    chatbot: {
      welcome: "Bonjour ! 👋 Je suis l'assistant IA de 4mediagency. Je peux vous aider avec des informations sur nos services, tarifs, processus et plus encore !\n\nQue souhaitez-vous savoir ?",
      placeholder: "Tapez votre message...",
      powered_by: "Propulsé par 4mediagency IA • Pas une vraie personne",
      online_status: "En ligne • Répond généralement instantanément",
      suggestions: {
        services: "Quels services proposez-vous ?",
        pricing: "Combien coûte un site web ?",
        about: "Parlez-moi de 4mediagency",
        project: "Je veux démarrer un projet",
        another_question: "J'ai une autre question",
        contact_human: "Contacter un agent",
        no_thanks: "Non, c'est tout",
        web_dev: "Parlez-moi du développement web",
        branding: "Et le branding ?",
        marketing: "Services de marketing digital",
        quote: "Obtenir un devis gratuit",
        included: "Qu'est-ce qui est inclus ?",
        payment: "Options de paiement ?",
        rush: "Livraison urgente disponible ?",
        availability: "Disponibilité actuelle ?",
        schedule: "Planifier une réunion",
        contact_info: "Coordonnées",
        hours: "Heures d'ouverture",
        team: "Rencontrer l'équipe",
        portfolio: "Voir notre portfolio",
        values: "Nos valeurs",
        testimonials: "Témoignages clients",
        industries: "Industries servies",
        consultation: "Réserver une consultation",
        start: "Commencer",
        prepare: "Que dois-je préparer ?",
        tech: "Quelle tech pour mon projet ?",
        hosting: "Tarifs hébergement",
        maintenance: "Plans de maintenance",
        domain: "Aide domaine",
        support_plans: "Plans de support",
        report_issue: "Signaler un problème",
        training: "Options de formation",
        french: "Contacter en français",
        arabic: "Contacter en arabe",
        results: "Voir les résultats clients",
        call: "Réserver un appel",
        contact_page: "Aller à la page contact",
        whatsapp: "WhatsApp",
        email: "Envoyer un email",
        new_conversation: "Nouvelle conversation",
        view_services: "Voir les services"
      },
      answers: {
        greeting: "Bonjour ! 👋 Bienvenue chez 4mediagency ! Je suis votre assistant digital. Comment puis-je vous aider aujourd'hui ?",
        thanks: "Je vous en prie ! 😊 Y a-t-il autre chose que je puisse faire pour vous ?",
        services: "Nous offrons une gamme complète de services digitaux :\n\n🌐 **Développement Web** - Sites personnalisés, e-commerce, applications web\n🎨 **Branding** - Design de logo, identité visuelle, stratégie de marque\n📱 **Applications Mobiles** - Développement iOS & Android\n📈 **Marketing Digital** - SEO, réseaux sociaux, marketing de contenu\n🔒 **Cybersécurité** - Audits de sécurité, solutions de protection\n\nQuel service vous intéresse le plus ?",
        web: "Nos services de développement web incluent :\n\n✅ Sites web responsives personnalisés\n✅ Plateformes e-commerce (Shopify, WooCommerce)\n✅ Applications web (React, Next.js)\n✅ Développement CMS (WordPress, Strapi)\n✅ Développement et intégration d'API\n✅ Maintenance et support de sites web\n\nNous construisons des sites web rapides, sécurisés et beaux, adaptés à votre marque !",
        brand: "Nos services de branding vous aident à vous démarquer :\n\n🎨 **Design de Logo** - Logos uniques et mémorables\n📋 **Charte Graphique** - Couleurs, typographie, règles d'utilisation\n🖼️ **Identité Visuelle** - Cartes de visite, en-têtes, templates sociaux\n💡 **Stratégie de Marque** - Positionnement, message, ton de voix\n\nUne marque forte est la base du succès commercial !",
        marketing: "Nos services de marketing digital incluent :\n\n📊 **SEO** - Améliorez votre classement Google\n📱 **Gestion des Réseaux Sociaux** - Contenu, engagement, croissance\n💰 **Publicité Payante** - Google Ads, Facebook/Instagram Ads\n✍️ **Marketing de Contenu** - Articles, vidéos, infographies\n📧 **Email Marketing** - Campagnes, automatisation, newsletters\n\nNous vous aidons à atteindre la bonne audience et développer votre entreprise !",
        app: "Nos services de développement d'applications mobiles :\n\n📱 **Apps Natives** - iOS (Swift) & Android (Kotlin)\n⚡ **Cross-Platform** - React Native, Flutter\n🔗 **Intégration d'Apps** - APIs, services tiers\n🛠️ **Maintenance** - Mises à jour, corrections, améliorations\n\nDu concept à l'App Store, nous créons des apps que les utilisateurs adorent !",
        pricing: "Nos tarifs dépendent de la portée et des exigences du projet :\n\n💻 **Site Web Basique** : À partir de 2 000 TND\n🛒 **Site E-commerce** : À partir de 5 000 TND\n🎨 **Pack Branding** : À partir de 1 500 TND\n📱 **Application Mobile** : À partir de 8 000 TND\n📈 **Marketing Mensuel** : À partir de 800 TND/mois\n\nChaque projet est unique ! Contactez-nous pour un devis personnalisé.",
        payment: "Nous offrons des options de paiement flexibles :\n\n💳 **Virement Bancaire** - Local et international\n💵 **Paiement en Espèces** - À notre bureau\n📅 **Paiement Échelonné** - Par étapes (50% d'avance, 50% à la livraison)\n🔄 **Abonnements Mensuels** - Pour les services récurrents\n\nNous trouverons une structure de paiement qui vous convient !",
        timeline: "Délais typiques des projets :\n\n⏱️ **Site Web Basique** : 2-4 semaines\n⏱️ **Site E-commerce** : 4-8 semaines\n⏱️ **Pack Branding** : 2-3 semaines\n⏱️ **Application Mobile** : 8-16 semaines\n⏱️ **Design de Logo** : 1-2 semaines\n\nLes délais varient selon la complexité. Nous convenons toujours des échéances avant de commencer !",
        location: "📍 Nous sommes situés à **Tunis, Tunisie**\n\nBien que basés en Tunisie, nous travaillons avec des clients du monde entier ! Nous offrons :\n\n🖥️ Appels vidéo (Zoom, Google Meet)\n📧 Communication par email\n💬 Support WhatsApp/téléphone\n🤝 Réunions en personne à Tunis\n\nLa distance n'est jamais un obstacle à une excellente collaboration !",
        contact: "Voici comment nous joindre :\n\n📧 **Email** : contact@4mediagency.tn\n📱 **Téléphone** : +216 XX XXX XXX\n💬 **WhatsApp** : Cliquez sur le bouton vert !\n🌐 **Site Web** : www.4mediagency.tn\n\nNous répondons généralement sous 24 heures !",
        hours: "Nos heures d'ouverture :\n\n🕘 **Lundi - Vendredi** : 9h00 - 18h00 (Heure de Tunisie)\n🕘 **Samedi** : 9h00 - 13h00\n🚫 **Dimanche** : Fermé\n\nNous surveillons les messages en dehors des heures pour les urgences !",
        about: "**4mediagency** est une agence digitale premium basée en Tunisie ! 🇹🇳\n\n🏆 5+ années d'expérience\n👥 Équipe de 10+ experts\n🌍 50+ clients servis\n⭐ 98% de satisfaction client\n\nNous mêlons créativité, technologie et stratégie pour aider les entreprises à prospérer dans le monde digital !",
        portfolio: "Consultez notre portfolio pour voir nos meilleurs travaux ! 🎨\n\nNous avons travaillé avec :\n• Marques e-commerce\n• Startups tech\n• Restaurants & hôtellerie\n• Sociétés immobilières\n• Prestataires de santé\n\n👉 Visitez notre page Portfolio pour voir des études de cas détaillées !",
        testimonials: "Voici ce que disent nos clients :\n\n⭐⭐⭐⭐⭐\n\"4media a transformé notre présence digitale. Le ROI a été incroyable !\" - PDG TechCorp\n\n⭐⭐⭐⭐⭐\n\"Professionnels, créatifs, et comprennent vraiment le marché.\" - Directrice Marketing\n\n⭐⭐⭐⭐⭐\n\"Dépassé nos attentes !\" - Fondateur de Startup",
        process: "Notre processus simple en 5 étapes :\n\n1️⃣ **Découverte** - Nous apprenons votre entreprise et vos objectifs\n2️⃣ **Stratégie** - Nous créons un plan sur mesure\n3️⃣ **Design** - Nous concevons de beaux visuels\n4️⃣ **Développement** - Nous construisons votre solution\n5️⃣ **Lancement** - Nous déployons et vous accompagnons\n\nPrêt à commencer ? Planifions une consultation gratuite !",
        consultation: "Oui ! Nous offrons une **consultation GRATUITE de 30 minutes** pour :\n\n✅ Comprendre vos besoins\n✅ Discuter de vos objectifs\n✅ Proposer des solutions\n✅ Fournir un devis\n\nSans engagement - juste une discussion amicale sur votre projet !",
        tech: "Nous utilisons des technologies modernes :\n\n**Frontend** : React, Next.js, Vue.js, Tailwind CSS\n**Backend** : Node.js, Python, PHP\n**Mobile** : React Native, Flutter, Swift, Kotlin\n**CMS** : WordPress, Strapi, Sanity\n**Cloud** : AWS, Vercel, Google Cloud\n\nNous choisissons la meilleure tech pour vos besoins spécifiques !",
        hosting: "Nous offrons des solutions d'hébergement complètes :\n\n🌐 **Enregistrement de Domaine** - Nous vous aidons à sécuriser votre domaine\n☁️ **Hébergement Web** - Serveurs rapides et sécurisés\n🔄 **Maintenance** - Mises à jour, sauvegardes, surveillance\n🔒 **Certificats SSL** - Sécurité HTTPS gratuite\n📊 **Configuration Analytics** - Suivez vos performances\n\nForfaits à partir de 50 TND/mois !",
        support: "Nous fournissons un support continu :\n\n🆘 **Support Technique** - Corrections, dépannage\n📞 **Réponse Prioritaire** - Sous 24 heures\n🔄 **Mises à Jour Régulières** - Sécurité et nouvelles fonctionnalités\n📚 **Formation** - Apprenez à gérer votre site\n\nPlans de support à partir de 200 TND/mois !",
        languages: "Notre équipe parle plusieurs langues :\n\n🇬🇧 **Anglais** - Courant\n🇫🇷 **Français** - Courant\n🇹🇳 **Arabe** - Langue maternelle\n\nNous communiquons dans la langue que vous préférez !",
        why_us: "Pourquoi choisir 4mediagency ?\n\n✨ **Expertise Locale** - Nous comprenons le marché tunisien\n💡 **Solutions Sur Mesure** - Pas de templates, tout est personnalisé\n🤝 **Service Personnel** - Accès direct à votre équipe\n💰 **Tarifs Justes** - Qualité sans se ruiner\n🏆 **Résultats Prouvés** - 98% de satisfaction client\n\nNous ne sommes pas que des prestataires - nous sommes vos partenaires digitaux !",
        human: "Bien sûr ! Vous pouvez joindre un membre de notre équipe :\n\n📧 Email : contact@4mediagency.tn\n📱 WhatsApp : Cliquez sur le bouton vert\n📞 Téléphone : +216 XX XXX XXX\n\nOu remplissez notre formulaire de contact et nous vous répondrons sous 24 heures !",
        bye: "Au revoir ! 👋 Merci d'avoir discuté avec nous. N'hésitez pas à revenir si vous avez des questions. Bonne journée ! 🌟",
        fallback: "Je ne suis pas sûr de comprendre cette question. 🤔\n\nJe peux vous aider avec :\n• Nos services (web, branding, marketing)\n• Tarifs et devis\n• Notre processus et délais\n• Coordonnées\n\nOu souhaitez-vous parler à un agent humain ?"
      }
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
      testimonials_title: "ماذا يقول",
      testimonials_highlight: "عملاؤنا",
      testimonials_suffix: "",
      testimonials_subtitle: "لا تأخذ كلامنا فقط. استمع إلى الشركات التي ساعدناها على التحول.",
      testimonial_1_quote: "حوّلت 4mediagency حضورنا الرقمي بالكامل. كان العائد على الاستثمار لا يصدق وزادت مبيعاتنا عبر الإنترنت بنسبة 300%.",
      testimonial_1_author: "أحمد الكروي",
      testimonial_1_role: "المدير التنفيذي، TechStart Tunisia",
      testimonial_2_quote: "الفريق محترف ومبدع ويفهم السوق التونسي حقاً. لقد تجاوزوا توقعاتنا.",
      testimonial_2_author: "ليلى البوعزيزي",
      testimonial_2_role: "مديرة التسويق، FashionBrand",
      testimonial_3_quote: "العمل مع 4media كان نقطة تحول لشركتنا الناشئة. ساعدنا نهجهم الاستراتيجي على الوصول لآفاق جديدة.",
      testimonial_3_author: "عمر بن سالم",
      testimonial_3_role: "مؤسس، InnovateTN",
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
      gallery_title: "أعمالنا",
      gallery_subtitle: "انقر على مشروع للاستكشاف",
      scroll_indicator: "مرر للاستكشاف المزيد",
      view_case_study: "عرض دراسة الحالة",
      year_label: "السنة",
      client_label: "العميل",
      premium_brand: "علامة تجارية متميزة",
      filters: {
        all: "جميع المشاريع",
        web: "تطوير الويب",
        branding: "الهوية التجارية",
        app: "تطبيقات الجوال",
        marketing: "التسويق"
      },
      stats: {
        projects: "مشروع مكتمل",
        clients: "عميل سعيد",
        awards: "جائزة",
        satisfaction: "رضا العملاء"
      },
      featured: {
        badge: "أعمالنا",
        title: "مشاريع",
        title_highlight: "مميزة",
        subtitle: "استكشف محفظتنا المتنوعة من المشاريع الناجحة عبر مختلف الصناعات.",
        view_project: "عرض المشروع"
      },
      process: {
        badge: "عمليتنا",
        title: "كيف",
        title_highlight: "نعمل",
        subtitle: "منهجيتنا المثبتة تضمن نتائج استثنائية في كل مشروع.",
        step: "خطوة",
        discovery: "الاكتشاف",
        discovery_desc: "نغوص في أعماق عملك وأهدافك وجمهورك المستهدف لفهم احتياجاتك الفريدة.",
        strategy: "الاستراتيجية",
        strategy_desc: "نطور خارطة طريق شاملة تتوافق مع أهدافك وموقعك في السوق.",
        design: "التصميم",
        design_desc: "فريقنا الإبداعي يصمم مرئيات مذهلة تجسد جوهر علامتك التجارية وتجذب المستخدمين.",
        development: "التطوير",
        development_desc: "نبني بأحدث التقنيات، مع ضمان الأداء والأمان وقابلية التوسع.",
        launch: "الإطلاق",
        launch_desc: "ننشر مشروعك ونقدم دعماً مستمراً لضمان النجاح المستدام."
      },
      testimonials: {
        badge: "الشهادات",
        title: "ماذا يقول",
        title_highlight: "عملاؤنا",
        title_suffix: "",
        subtitle: "لا تأخذ كلامنا فقط - استمع إلى عملائنا الراضين."
      },
      clients: {
        trusted_by: "يثقون بنا",
        industry_leaders: "قادة الصناعة"
      },
      cta: {
        title: "هل أنت مستعد لبدء مشروعك؟",
        subtitle: "لنتعاون ونبدع معاً شيئاً استثنائياً.",
        start_project: "ابدأ مشروعاً",
        view_services: "عرض الخدمات"
      },
      projects: {
        luxury_real_estate: "منصة العقارات الفاخرة",
        luxury_real_estate_desc: "منصة عقارية راقية مع جولات افتراضية غامرة وتصور ثلاثي الأبعاد للعقارات.",
        tech_startup: "هوية شركة تقنية ناشئة",
        tech_startup_desc: "هوية علامة تجارية كاملة لشركة ذكاء اصطناعي ناشئة في وادي السيليكون.",
        ecommerce_app: "تطبيق تجارة إلكترونية",
        ecommerce_app_desc: "تجربة تسوق للجوال مع 2 مليون+ تحميل وتقييم 4.8 نجوم.",
        fashion_editorial: "حملة أزياء تحريرية",
        fashion_editorial_desc: "حملة فيديو حائزة على جوائز لدار أزياء فاخرة مع 50 مليون+ مشاهدة.",
        fintech_dashboard: "لوحة تحكم مالية",
        fintech_dashboard_desc: "لوحة تحليلات مالية في الوقت الحقيقي مع رسوم بيانية متقدمة.",
        restaurant_rebrand: "إعادة تصميم سلسلة مطاعم",
        restaurant_rebrand_desc: "إعادة تصميم كاملة لسلسلة مطاعم وطنية مع 200+ موقع.",
        fitness_app: "تطبيق اللياقة البدنية",
        fitness_app_desc: "تطبيق لياقة بدنية مدعوم بالذكاء الاصطناعي مع خطط تمرين مخصصة.",
        tourism_campaign: "حملة هيئة السياحة",
        tourism_campaign_desc: "حملة تسويقية متكاملة زادت السياحة بنسبة 35%."
      },
      categories: {
        web_design: "تصميم الويب",
        branding: "الهوية التجارية",
        development: "التطوير",
        production: "الإنتاج"
      }
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
    chatbot: {
      welcome: "مرحباً! 👋 أنا المساعد الذكي لـ 4mediagency. يمكنني مساعدتك بمعلومات حول خدماتنا وأسعارنا وعملياتنا والمزيد!\n\nماذا تريد أن تعرف؟",
      placeholder: "اكتب رسالتك...",
      powered_by: "مدعوم من 4mediagency AI • ليس شخصاً حقيقياً",
      online_status: "متصل • يرد عادةً فوراً",
      suggestions: {
        services: "ما هي الخدمات التي تقدمونها؟",
        pricing: "كم يكلف موقع الويب؟",
        about: "أخبرني عن 4mediagency",
        project: "أريد بدء مشروع",
        another_question: "لدي سؤال آخر",
        contact_human: "التواصل مع موظف",
        no_thanks: "لا، هذا كل شيء",
        web_dev: "أخبرني عن تطوير الويب",
        branding: "ماذا عن الهوية التجارية؟",
        marketing: "خدمات التسويق الرقمي",
        quote: "احصل على عرض سعر مجاني",
        included: "ما الذي يتضمنه؟",
        payment: "خيارات الدفع؟",
        rush: "هل التسليم السريع متاح؟",
        availability: "التوفر الحالي؟",
        schedule: "جدولة اجتماع",
        contact_info: "معلومات الاتصال",
        hours: "ساعات العمل",
        team: "تعرف على الفريق",
        portfolio: "شاهد أعمالنا",
        values: "قيمنا",
        testimonials: "آراء العملاء",
        industries: "الصناعات التي نخدمها",
        consultation: "احجز استشارة",
        start: "ابدأ الآن",
        prepare: "ماذا أحتاج أن أحضر؟",
        tech: "أي تقنية لمشروعي؟",
        hosting: "أسعار الاستضافة",
        maintenance: "خطط الصيانة",
        domain: "مساعدة النطاق",
        support_plans: "خطط الدعم",
        report_issue: "الإبلاغ عن مشكلة",
        training: "خيارات التدريب",
        french: "التواصل بالفرنسية",
        arabic: "التواصل بالعربية",
        results: "شاهد نتائج العملاء",
        call: "احجز مكالمة",
        contact_page: "اذهب لصفحة الاتصال",
        whatsapp: "واتساب",
        email: "إرسال بريد إلكتروني",
        new_conversation: "محادثة جديدة",
        view_services: "عرض الخدمات"
      },
      answers: {
        greeting: "مرحباً! 👋 أهلاً بك في 4mediagency! أنا مساعدك الرقمي. كيف يمكنني مساعدتك اليوم؟",
        thanks: "على الرحب والسعة! 😊 هل هناك شيء آخر يمكنني مساعدتك به؟",
        services: "نقدم مجموعة شاملة من الخدمات الرقمية:\n\n🌐 **تطوير الويب** - مواقع مخصصة، تجارة إلكترونية، تطبيقات ويب\n🎨 **الهوية التجارية** - تصميم شعار، هوية بصرية، استراتيجية العلامة التجارية\n📱 **تطبيقات الجوال** - تطوير iOS و Android\n📈 **التسويق الرقمي** - تحسين محركات البحث، وسائل التواصل الاجتماعي، تسويق المحتوى\n🔒 **الأمن السيبراني** - تدقيقات أمنية، حلول حماية\n\nأي خدمة تهمك أكثر؟",
        web: "خدمات تطوير الويب لدينا تشمل:\n\n✅ مواقع متجاوبة مخصصة\n✅ منصات التجارة الإلكترونية (Shopify، WooCommerce)\n✅ تطبيقات الويب (React، Next.js)\n✅ تطوير أنظمة إدارة المحتوى (WordPress، Strapi)\n✅ تطوير ودمج واجهات برمجة التطبيقات\n✅ صيانة ودعم المواقع\n\nنبني مواقع سريعة وآمنة وجميلة مصممة خصيصاً لعلامتك التجارية!",
        brand: "خدمات الهوية التجارية لدينا تساعدك على التميز:\n\n🎨 **تصميم الشعار** - شعارات فريدة ولا تُنسى\n📋 **دليل العلامة التجارية** - الألوان، الخطوط، قواعد الاستخدام\n🖼️ **الهوية البصرية** - بطاقات العمل، الأوراق الرسمية، قوالب التواصل الاجتماعي\n💡 **استراتيجية العلامة التجارية** - التموضع، الرسالة، نبرة الصوت\n\nالعلامة التجارية القوية هي أساس النجاح التجاري!",
        marketing: "خدمات التسويق الرقمي لدينا تشمل:\n\n📊 **تحسين محركات البحث** - حسّن ترتيبك في جوجل\n📱 **إدارة وسائل التواصل الاجتماعي** - المحتوى، التفاعل، النمو\n💰 **الإعلانات المدفوعة** - إعلانات جوجل، فيسبوك/إنستجرام\n✍️ **تسويق المحتوى** - مقالات، فيديوهات، إنفوجرافيك\n📧 **التسويق عبر البريد الإلكتروني** - حملات، أتمتة، نشرات إخبارية\n\nنساعدك على الوصول للجمهور المناسب وتنمية عملك!",
        app: "خدمات تطوير تطبيقات الجوال لدينا:\n\n📱 **تطبيقات أصلية** - iOS (Swift) و Android (Kotlin)\n⚡ **عبر المنصات** - React Native، Flutter\n🔗 **تكامل التطبيقات** - واجهات برمجة التطبيقات، خدمات الطرف الثالث\n🛠️ **الصيانة** - التحديثات، إصلاح الأخطاء، التحسينات\n\nمن الفكرة إلى متجر التطبيقات، نبني تطبيقات يحبها المستخدمون!",
        pricing: "تعتمد أسعارنا على نطاق المشروع ومتطلباته:\n\n💻 **موقع ويب أساسي**: يبدأ من 2,000 دينار\n🛒 **موقع تجارة إلكترونية**: يبدأ من 5,000 دينار\n🎨 **حزمة الهوية التجارية**: يبدأ من 1,500 دينار\n📱 **تطبيق جوال**: يبدأ من 8,000 دينار\n📈 **التسويق الشهري**: يبدأ من 800 دينار/شهر\n\nكل مشروع فريد! تواصل معنا للحصول على عرض سعر مخصص.",
        payment: "نقدم خيارات دفع مرنة:\n\n💳 **تحويل بنكي** - محلي ودولي\n💵 **الدفع النقدي** - في مكتبنا\n📅 **خطط الدفع** - تقسيم على مراحل (50% مقدماً، 50% عند التسليم)\n🔄 **اشتراكات شهرية** - للخدمات المستمرة\n\nسنجد هيكل دفع يناسبك!",
        timeline: "الجداول الزمنية النموذجية للمشاريع:\n\n⏱️ **موقع ويب أساسي**: 2-4 أسابيع\n⏱️ **موقع تجارة إلكترونية**: 4-8 أسابيع\n⏱️ **حزمة الهوية التجارية**: 2-3 أسابيع\n⏱️ **تطبيق جوال**: 8-16 أسبوع\n⏱️ **تصميم الشعار**: 1-2 أسبوع\n\nتختلف الجداول الزمنية حسب التعقيد. نتفق دائماً على المواعيد النهائية قبل البدء!",
        location: "📍 نحن موجودون في **تونس العاصمة، تونس**\n\nبينما نحن مقرنا في تونس، نعمل مع عملاء من جميع أنحاء العالم! نقدم:\n\n🖥️ مكالمات فيديو (Zoom، Google Meet)\n📧 التواصل عبر البريد الإلكتروني\n💬 دعم واتساب/الهاتف\n🤝 اجتماعات شخصية في تونس\n\nالمسافة ليست عائقاً أبداً للتعاون الممتاز!",
        contact: "إليك كيفية التواصل معنا:\n\n📧 **البريد الإلكتروني**: contact@4mediagency.tn\n📱 **الهاتف**: +216 XX XXX XXX\n💬 **واتساب**: انقر على الزر الأخضر!\n🌐 **الموقع**: www.4mediagency.tn\n\nنرد عادةً خلال 24 ساعة!",
        hours: "ساعات العمل لدينا:\n\n🕘 **الإثنين - الجمعة**: 9:00 صباحاً - 6:00 مساءً (توقيت تونس)\n🕘 **السبت**: 9:00 صباحاً - 1:00 مساءً\n🚫 **الأحد**: مغلق\n\nنراقب الرسائل خارج ساعات العمل للأمور العاجلة!",
        about: "**4mediagency** هي وكالة رقمية متميزة مقرها تونس! 🇹🇳\n\n🏆 +5 سنوات من الخبرة\n👥 فريق من +10 خبراء\n🌍 +50 عميل تم خدمتهم\n⭐ 98% رضا العملاء\n\nنمزج الإبداع والتكنولوجيا والاستراتيجية لمساعدة الشركات على الازدهار في العالم الرقمي!",
        portfolio: "اطلع على محفظة أعمالنا لرؤية أفضل أعمالنا! 🎨\n\nعملنا مع:\n• علامات تجارة إلكترونية\n• شركات تقنية ناشئة\n• مطاعم وضيافة\n• شركات عقارية\n• مقدمي خدمات صحية\n\n👉 زر صفحة المحفظة لرؤية دراسات حالة مفصلة!",
        testimonials: "إليك ما يقوله عملاؤنا:\n\n⭐⭐⭐⭐⭐\n\"4media حوّلت حضورنا الرقمي. العائد على الاستثمار كان لا يصدق!\" - المدير التنفيذي\n\n⭐⭐⭐⭐⭐\n\"محترفون ومبدعون ويفهمون السوق حقاً.\" - مديرة التسويق\n\n⭐⭐⭐⭐⭐\n\"تجاوزوا توقعاتنا!\" - مؤسس شركة ناشئة",
        process: "عمليتنا البسيطة من 5 خطوات:\n\n1️⃣ **الاكتشاف** - نتعرف على عملك وأهدافك\n2️⃣ **الاستراتيجية** - نضع خطة مخصصة\n3️⃣ **التصميم** - نصمم مرئيات جميلة\n4️⃣ **التطوير** - نبني حلك\n5️⃣ **الإطلاق** - ننشر وندعمك\n\nمستعد للبدء؟ لنحدد موعداً لاستشارة مجانية!",
        consultation: "نعم! نقدم **استشارة مجانية لمدة 30 دقيقة** من أجل:\n\n✅ فهم احتياجاتك\n✅ مناقشة أهدافك\n✅ اقتراح الحلول\n✅ تقديم عرض سعر\n\nبدون التزام - مجرد محادثة ودية حول مشروعك!",
        tech: "نستخدم تقنيات حديثة:\n\n**الواجهة الأمامية**: React، Next.js، Vue.js، Tailwind CSS\n**الواجهة الخلفية**: Node.js، Python، PHP\n**الجوال**: React Native، Flutter، Swift، Kotlin\n**أنظمة إدارة المحتوى**: WordPress، Strapi، Sanity\n**السحابة**: AWS، Vercel، Google Cloud\n\nنختار أفضل تقنية لاحتياجاتك المحددة!",
        hosting: "نقدم حلول استضافة كاملة:\n\n🌐 **تسجيل النطاق** - نساعدك في تأمين نطاقك\n☁️ **استضافة الويب** - خوادم سريعة وآمنة\n🔄 **الصيانة** - التحديثات، النسخ الاحتياطي، المراقبة\n🔒 **شهادات SSL** - أمان HTTPS مجاني\n📊 **إعداد التحليلات** - تتبع أدائك\n\nالباقات تبدأ من 50 دينار/شهر!",
        support: "نقدم دعماً مستمراً:\n\n🆘 **الدعم الفني** - إصلاح الأخطاء، استكشاف الأخطاء\n📞 **استجابة ذات أولوية** - خلال 24 ساعة\n🔄 **تحديثات منتظمة** - الأمان والميزات الجديدة\n📚 **التدريب** - تعلم كيفية إدارة موقعك\n\nخطط الدعم تبدأ من 200 دينار/شهر!",
        languages: "فريقنا يتحدث عدة لغات:\n\n🇬🇧 **الإنجليزية** - بطلاقة\n🇫🇷 **الفرنسية** - بطلاقة\n🇹🇳 **العربية** - اللغة الأم\n\nنتواصل باللغة التي تفضلها!",
        why_us: "لماذا تختار 4mediagency؟\n\n✨ **خبرة محلية** - نفهم السوق التونسي\n💡 **حلول مخصصة** - لا قوالب، كل شيء مصمم خصيصاً\n🤝 **خدمة شخصية** - وصول مباشر لفريقك\n💰 **أسعار عادلة** - جودة بدون إفلاس\n🏆 **نتائج مثبتة** - 98% رضا العملاء\n\nنحن لسنا مجرد موردين - نحن شركاؤك الرقميون!",
        human: "بالطبع! يمكنك الوصول لأحد أعضاء فريقنا:\n\n📧 البريد الإلكتروني: contact@4mediagency.tn\n📱 واتساب: انقر على الزر الأخضر\n📞 الهاتف: +216 XX XXX XXX\n\nأو املأ نموذج الاتصال وسنرد عليك خلال 24 ساعة!",
        bye: "مع السلامة! 👋 شكراً للدردشة معنا. لا تتردد في العودة متى كان لديك أسئلة. أتمنى لك يوماً سعيداً! 🌟",
        fallback: "لست متأكداً من فهمي لهذا السؤال. 🤔\n\nيمكنني مساعدتك في:\n• خدماتنا (الويب، الهوية التجارية، التسويق)\n• الأسعار والعروض\n• عمليتنا والجداول الزمنية\n• معلومات الاتصال\n\nأو هل تريد التحدث مع موظف؟"
      }
    },
  },
} as const

export type AppMessages = Messages[Locale]

export function getMessage(locale: Locale, key: string): any {
  const parts = key.split(".")
  let current: any = messages[locale]

  for (const part of parts) {
    if (current && typeof current === "object" && part in current) {
      current = current[part]
    } else {
      return key
    }
  }

  return current !== undefined ? current : key
}


