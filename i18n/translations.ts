import { Language } from '../types';

export interface MilestoneTranslation {
  period: string;
  role: string;
  company: string;
  location: string;
  description: string;
}

export interface CompetencyTranslation {
  category: string;
  skills: string[];
}

export interface Translations {
  nav: {
    home: string;
    about: string;
    projects: string;
    contact: string;
    admin: string;
    themeToggle: string;
    langSelect: string;
    availableBadge: string;
  };
  hero: {
    statusBadge: string;
    greeting: string;
    name: string;
    role: string;
    tagline: string;
    exploreBtn: string;
    contactBtn: string;
    downloadCvBtn: string;
    statYears: string;
    statProjects: string;
    statAvailability: string;
    statUptime: string;
    statResponsive: string;
    ctaBadge: string;
    ctaTitle: string;
    ctaSubtitle: string;
    terminalTitle: string;
    terminalRole: string;
    terminalSpecialty: string;
    terminalLocation: string;
  };
  services: {
    sectionBadge: string;
    title: string;
    subtitle: string;
    ecommerce: {
      title: string;
      desc: string;
    };
    hospitality: {
      title: string;
      desc: string;
    };
    archival: {
      title: string;
      desc: string;
    };
    bespoke: {
      title: string;
      desc: string;
    };
    fullstack: {
      title: string;
      desc: string;
    };
    backend: {
      title: string;
      desc: string;
    };
    cloud: {
      title: string;
      desc: string;
    };
    security: {
      title: string;
      desc: string;
    };
  };
  about: {
    badge: string;
    title: string;
    subtitle: string;
    journeyTitle: string;
    journeyP1: string;
    journeyP2: string;
    journeyP3: string;
    experienceTitle: string;
    philosophyTitle: string;
    philosophyP1: string;
    philosophyP2: string;
    skillsRadarTitle: string;
    educationTitle: string;
    educationDegree: string;
    educationSchool: string;
    educationPeriod: string;
    directInfoTitle: string;
    fullNameLabel: string;
    locationLabel: string;
    emailLabel: string;
    phoneLabel: string;
    initiateConvBtn: string;
    milestones: MilestoneTranslation[];
    competencies: CompetencyTranslation[];
  };
  projects: {
    badge: string;
    title: string;
    subtitle: string;
    allFilter: string;
    fullstackFilter: string;
    frontendFilter: string;
    backendFilter: string;
    searchPlaceholder: string;
    liveViewBtn: string;
    detailsBtn: string;
    featuredBadge: string;
    techStack: string;
    noResults: string;
    resetFilters: string;
  };
  projectDetails: {
    backBtn: string;
    liveMockupTitle: string;
    desktopMode: string;
    mobileMode: string;
    openInNewTab: string;
    reloadPreview: string;
    viewSource: string;
    overviewTitle: string;
    architectureTitle: string;
    challengesTitle: string;
    solutionsTitle: string;
    metricsTitle: string;
    sandboxNotice: string;
  };
  contact: {
    badge: string;
    title: string;
    subtitle: string;
    formTitle: string;
    nameLabel: string;
    emailLabel: string;
    phoneLabel: string;
    subjectLabel: string;
    messageLabel: string;
    sendBtn: string;
    sending: string;
    sentSuccess: string;
    directTitle: string;
    directSubtitle: string;
    phoneLabelDirect: string;
    emailLabelDirect: string;
    locationLabelDirect: string;
    bursaLocation: string;
    copyTooltip: string;
    copiedTooltip: string;
    whatsappBtn: string;
    instagramBtn: string;
    callBtn: string;
  };
  admin: {
    loginTitle: string;
    loginSubtitle: string;
    usernameLabel: string;
    passwordLabel: string;
    loginBtn: string;
    demoNotice: string;
    useDemoCreds: string;
    dashboardTitle: string;
    logoutBtn: string;
    tabOverview: string;
    tabProjects: string;
    tabInbox: string;
    totalProjectsStat: string;
    totalMessagesStat: string;
    unreadMessagesStat: string;
    systemHealthStat: string;
    newProjectBtn: string;
    searchProjectsPlaceholder: string;
    tableTitle: string;
    tableCategory: string;
    tableStatus: string;
    tableActions: string;
    deleteConfirm: string;
    modalNewTitle: string;
    modalEditTitle: string;
    fieldTitleEn: string;
    fieldTitleAr: string;
    fieldTitleTr: string;
    fieldDescEn: string;
    fieldCategory: string;
    fieldLiveUrl: string;
    fieldImageUrl: string;
    saveBtn: string;
    cancelBtn: string;
    inboxTitle: string;
    inboxSubtitle: string;
    markAsRead: string;
    markAsUnread: string;
    deleteMsg: string;
    replyEmail: string;
    emptyInbox: string;
  };
  footer: {
    bio: string;
    navTitle: string;
    coordinatesTitle: string;
    location: string;
    rights: string;
    status: string;
    craftedWith: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      contact: 'Contact',
      admin: 'Admin CMS',
      themeToggle: 'Toggle Theme',
      langSelect: 'Language',
      availableBadge: 'Available for Web Projects',
    },
    hero: {
      statusBadge: 'FULL-STACK WEB ARCHITECT // BURSA, TR',
      greeting: "Hello, I am",
      name: 'Elmutasem',
      role: 'Full-Stack Web Developer',
      tagline: 'Designing and engineering high-impact web applications, high-converting e-commerce platforms, restaurant management suites, and digital library systems with timeless elegance.',
      exploreBtn: 'Explore Projects',
      contactBtn: 'Get In Touch',
      downloadCvBtn: 'Download Resume',
      statYears: 'Years in Web Dev',
      statProjects: 'Production Web Apps',
      statAvailability: 'Client Satisfaction',
      statUptime: '99.8% On-Time Delivery',
      statResponsive: 'Responsive Craft',
      ctaBadge: 'COLLABORATION & INQUIRIES',
      ctaTitle: 'Planning your next web flagship or management system?',
      ctaSubtitle: "Let's discuss project architecture, custom software development, or full-stack web builds from Bursa, Türkiye.",
      terminalTitle: 'elmutasem.dev ~ web architect',
      terminalRole: 'Full-Stack Web Engineer',
      terminalSpecialty: 'Next.js, TypeScript, PostgreSQL, UI/UX',
      terminalLocation: 'Bursa, Türkiye',
    },
    services: {
      sectionBadge: 'CORE CAPABILITIES',
      title: 'Web Engineering Craftsmanship',
      subtitle: 'Building responsive, scalable web systems that combine editorial typography, seamless user journeys, and robust database architecture.',
      ecommerce: {
        title: 'E-Commerce Platforms',
        desc: 'High-converting flagship stores with multi-currency checkout, inventory synchronization, and rapid page rendering.',
      },
      hospitality: {
        title: 'Hospitality & POS Systems',
        desc: 'Real-time kitchen order dispatch, table reservation pipelines, and digital menu management for modern restaurants.',
      },
      archival: {
        title: 'Digital Library Systems',
        desc: 'Faceted catalog search, digital asset archives, and circulation tracking handling hundreds of thousands of entries.',
      },
      bespoke: {
        title: 'Bespoke Web Flagships',
        desc: 'Art-directed digital experiences with bespoke typography, responsive micro-interactions, and accessible layouts.',
      },
      fullstack: {
        title: 'Full-Stack Web Applications',
        desc: 'End-to-end web applications built with Next.js App Router, TypeScript, React 19, and Tailwind CSS v4 for uncompromising speed and clarity.',
      },
      backend: {
        title: 'PostgreSQL & Database Architecture',
        desc: 'Scalable data models, Prisma ORM schemas, Neon Postgres serverless databases, transaction safety, and clean REST/GraphQL APIs.',
      },
      cloud: {
        title: 'E-Commerce & High-Volume Portals',
        desc: 'Custom headless fashion boutiques, cart states, Stripe checkout pipelines, and real-time inventory management.',
      },
      security: {
        title: 'Management Systems & Dashboards',
        desc: 'Bespoke restaurant POS systems, table reservation suites, library catalog archives, and intuitive admin CMS portals.',
      },
    },
    about: {
      badge: 'BACKGROUND & CRAFT',
      title: 'About Elmutasem',
      subtitle: 'Dedicated to clean code, timeless web typography, and building purposeful digital experiences.',
      journeyTitle: 'The Engineering Journey',
      journeyP1: "Based in Bursa, Türkiye, I craft bespoke web applications that marry functional rigor with thoughtful visual design. Over 6+ years, I have architected massive e-commerce flagships, comprehensive restaurant POS systems, academic library repositories, and award-winning landing pages.",
      journeyP2: "I believe a web application should feel warm, breathable, and effortless to navigate. By combining server-side rendering in Next.js, robust database schemas in Neon PostgreSQL with Prisma, and fluid mobile-first Tailwind layouts, I create systems that perform reliably under real-world load.",
      journeyP3: "Every project is built with strict clean code principles, typed safety from database to UI, and deliberate attention to responsiveness across all viewports.",
      experienceTitle: 'Milestones & Experience',
      philosophyTitle: 'Architectural Philosophy',
      philosophyP1: 'Software must be readable and intuitive before it is clever. Prioritize deterministic state, fluid responsive layouts, and transparent user feedback.',
      philosophyP2: 'Great digital design should not shout or distract with artificial neon glows; it should breathe with generous whitespace, warm natural tones, and crisp typography.',
      skillsRadarTitle: 'Technical Stack',
      educationTitle: 'Education & Background',
      educationDegree: 'B.Sc. in Computer Engineering',
      educationSchool: 'Uludağ University, Bursa',
      educationPeriod: '2017 – 2021',
      directInfoTitle: 'Direct Coordinates',
      fullNameLabel: 'Full Name',
      locationLabel: 'Location',
      emailLabel: 'Direct Email',
      phoneLabel: 'Direct Phone / WhatsApp',
      initiateConvBtn: 'Initiate Conversation',
      milestones: [
        {
          period: '2023 – Present',
          role: 'Lead Full-Stack Web Developer',
          company: 'Independent Web Studio',
          location: 'Bursa, Türkiye',
          description:
            'Architecting production-ready e-commerce platforms, restaurant POS dashboards, and digital library systems with Next.js App Router, Prisma ORM, and PostgreSQL.',
        },
        {
          period: '2021 – 2023',
          role: 'Full-Stack Software Engineer',
          company: 'Digital Solutions Agency',
          location: 'Türkiye',
          description:
            'Developed full-stack web applications, headless commerce integrations, and high-conversion client portals. Spearheaded TypeScript adoption and database schema migrations.',
        },
        {
          period: '2019 – 2021',
          role: 'Frontend & UI Engineer',
          company: 'Web Craft Studio',
          location: 'Bursa, Türkiye',
          description:
            'Built accessible, responsive web interfaces and design systems. Engineered multi-language localization (AR/EN/TR) and dynamic layout animations.',
        },
      ],
      competencies: [
        {
          category: 'Frontend Engineering',
          skills: ['React 19', 'Next.js App Router', 'TypeScript', 'Tailwind CSS v4', 'Framer Motion', 'State Management'],
        },
        {
          category: 'Backend Architecture',
          skills: ['Node.js', 'Express', 'REST APIs', 'Server Actions', 'Authentication Flow', 'API Route Handlers'],
        },
        {
          category: 'Database & ORM',
          skills: ['Neon PostgreSQL', 'Prisma ORM', 'Relational Schemas', 'Indexing & Queries', 'Connection Pooling'],
        },
        {
          category: 'Performance & UX',
          skills: ['Mobile-First Layouts', 'Core Web Vitals', 'i18n Localization', 'Semantic HTML', 'SEO Optimization'],
        },
      ],
    },
    projects: {
      badge: 'PORTFOLIO ARCHIVE',
      title: 'Featured Web Works',
      subtitle: 'A curated showcase of production web applications, headless e-commerce stores, hospitality platforms, and digital catalogs.',
      allFilter: 'All Works',
      fullstackFilter: 'Full-Stack',
      frontendFilter: 'Frontend',
      backendFilter: 'Backend',
      searchPlaceholder: 'Search web projects, stack, or keywords...',
      liveViewBtn: 'Live View',
      detailsBtn: 'View Details',
      featuredBadge: 'Featured',
      techStack: 'Tech Stack',
      noResults: 'No projects match your search or category filter.',
      resetFilters: 'Reset Filters',
    },
    projectDetails: {
      backBtn: 'Back to Projects Gallery',
      liveMockupTitle: 'Interactive Live View Mockup',
      desktopMode: 'Desktop Frame',
      mobileMode: 'Mobile Frame',
      openInNewTab: 'Open Live Site',
      reloadPreview: 'Reload Sandbox',
      viewSource: 'Source Code',
      overviewTitle: 'Project Architecture & Scope',
      architectureTitle: 'Web Architecture Highlights',
      challengesTitle: 'Key Technical Challenges',
      solutionsTitle: 'Implemented Engineering Solution',
      metricsTitle: 'Performance & Scalability Metrics',
      sandboxNotice: 'Interactive embedded preview running inside a responsive device frame. Test controls or inspect responsive layout.',
    },
    contact: {
      badge: 'GET IN TOUCH',
      title: "Let's Build Together",
      subtitle: 'Available for full-stack web contracts, bespoke digital platforms, e-commerce stores, and system architecture.',
      formTitle: 'Send a Direct Message',
      nameLabel: 'Your Name',
      emailLabel: 'Email Address',
      phoneLabel: 'Phone Number (Optional)',
      subjectLabel: 'Project Scope / Subject',
      messageLabel: 'Message',
      sendBtn: 'Send Message',
      sending: 'Sending message...',
      sentSuccess: 'Message received! Thank you for reaching out. Elmutasem will respond promptly.',
      directTitle: 'Direct Contact Coordinates',
      directSubtitle: 'Connect directly via official communication channels.',
      phoneLabelDirect: 'Phone',
      emailLabelDirect: 'Email',
      locationLabelDirect: 'Location',
      bursaLocation: 'Bursa, Türkiye',
      copyTooltip: 'Click to copy',
      copiedTooltip: 'Copied to clipboard!',
      whatsappBtn: 'WhatsApp Chat',
      instagramBtn: 'Instagram',
      callBtn: 'Call Direct',
    },
    admin: {
      loginTitle: 'Admin CMS Access',
      loginSubtitle: 'Enter administrator credentials to access the portfolio projects and contact inquiries.',
      usernameLabel: 'Admin Username',
      passwordLabel: 'Password',
      loginBtn: 'Sign In to CMS',
      demoNotice: 'Demo Access: Enter any credentials or click below for instant one-click login.',
      useDemoCreds: 'Auto-fill Demo Credentials',
      dashboardTitle: 'Portfolio CMS Dashboard',
      logoutBtn: 'Sign Out',
      tabOverview: 'Overview',
      tabProjects: 'Projects',
      tabInbox: 'Messages',
      totalProjectsStat: 'Total Projects',
      totalMessagesStat: 'Total Messages',
      unreadMessagesStat: 'Unread Inquiries',
      systemHealthStat: 'Database Connection',
      newProjectBtn: 'Add New Project',
      searchProjectsPlaceholder: 'Filter project records...',
      tableTitle: 'Title & Category',
      tableCategory: 'Category',
      tableStatus: 'Live URL',
      tableActions: 'Actions',
      deleteConfirm: 'Are you sure you want to delete this project? This cannot be undone.',
      modalNewTitle: 'Add New Project',
      modalEditTitle: 'Edit Project Record',
      fieldTitleEn: 'Title',
      fieldTitleAr: 'Title (Arabic)',
      fieldTitleTr: 'Title (Turkish)',
      fieldDescEn: 'Description',
      fieldCategory: 'Category (Full-Stack, Frontend, Backend)',
      fieldLiveUrl: 'Live View URL',
      fieldImageUrl: 'Image URL',
      saveBtn: 'Save Project',
      cancelBtn: 'Cancel',
      inboxTitle: 'Received Contact Inquiries',
      inboxSubtitle: 'Messages submitted through the public contact form.',
      markAsRead: 'Mark as Read',
      markAsUnread: 'Mark as Unread',
      deleteMsg: 'Delete Message',
      replyEmail: 'Reply via Email',
      emptyInbox: 'No messages received yet.',
    },
    footer: {
      bio: 'Full-Stack Web Developer dedicated to architecting scalable e-commerce flagships, hospitality management software, and high-performance digital systems with warm, timeless design.',
      navTitle: 'Navigation',
      coordinatesTitle: 'Coordinates',
      location: 'Bursa, Türkiye',
      rights: 'All rights reserved.',
      status: 'AVAILABLE FOR FREELANCE & CONTRACTS',
      craftedWith: 'Designed with warm earth tones, spacious layouts, and clean code.',
    },
  },
  ar: {
    nav: {
      home: 'الرئيسية',
      about: 'عني',
      projects: 'المشاريع',
      contact: 'تواصل معي',
      admin: 'لوحة التحكم',
      themeToggle: 'تبديل المظهر',
      langSelect: 'اللغة',
      availableBadge: 'متاح لمشاريع الويب',
    },
    hero: {
      statusBadge: 'معماري ومطور ويب متكامل // بورصة، تركيا',
      greeting: 'مرحباً، أنا',
      name: 'المعتصم',
      role: 'مطور ويب متكامل (Full-Stack)',
      tagline: 'تصميم وهندسة تطبيقات ويب عالية التأثير، ومتاجر تجارة إلكترونية متطورة، وأنظمة إدارة المطاعم، وفهارس المكتبات الرقمية بأناقة ورقي.',
      exploreBtn: 'استكشف المشاريع',
      contactBtn: 'تواصل معي',
      downloadCvBtn: 'تحميل السيرة الذاتية',
      statYears: 'سنوات في تطوير الويب',
      statProjects: 'تطبيقات ويب منجزة',
      statAvailability: 'رضا العملاء',
      statUptime: 'تسليم في الموعد المحدد',
      statResponsive: 'تصميم وتجاوب فائق',
      ctaBadge: 'التعاون والاستشارات',
      ctaTitle: 'هل تخطط لمشروعك البرمجي القادم أو نظام إداري مخصص؟',
      ctaSubtitle: 'دعنا نناقش معمارية المشروع وتطوير البرمجيات المخصصة ومشاريع الويب المتكاملة من بورصة، تركيا.',
      terminalTitle: 'elmutasem.dev ~ معماري الويب',
      terminalRole: 'مهندس ومطور ويب متكامل',
      terminalSpecialty: 'Next.js, TypeScript, PostgreSQL, UI/UX',
      terminalLocation: 'بورصة، تركيا',
    },
    services: {
      sectionBadge: 'القدرات الجوهرية',
      title: 'حرفية هندسة الويب',
      subtitle: 'بناء أنظمة ويب متجاوبة وقابلة للتوسع تجمع بين التيبوغرافيا الراقية، وتجارب المستخدم السلسة، ومعمارية قواعد البيانات القوية.',
      ecommerce: {
        title: 'منصات ومتاجر التجارة الإلكترونية',
        desc: 'متاجر إلكترونية رائدة عالية التحويل تدعم الدفع متعدد العملات، والمزامنة الفورية للمخزون، وسرعة فائقة في تحميل وتصيير الصفحات.',
      },
      hospitality: {
        title: 'أنظمة المطاعم ونقاط البيع',
        desc: 'إرسال فوري لطلبات المطبخ في الوقت الفعلي، وإدارة مسار حجز الطاولات، وقوائم طعام رقمية تفاعلية للمطاعم الحديثة.',
      },
      archival: {
        title: 'أنظمة المكتبات والأرشيف الرقمي',
        desc: 'بحث تصنيفي متقدم في الفهارس، وأرشفة آمنة للأصول الرقمية، وتتبع عمليات الإعارة بمئات الآلاف من السجلات.',
      },
      bespoke: {
        title: 'مواقع وتطبيقات ويب مخصصة',
        desc: 'تجارب رقمية ذات هوية فنية فريدة وتيبوغرافيا راقية وتفاعلات دقيقة متجاوبة وتصميم مريح للعين.',
      },
      fullstack: {
        title: 'تطبيقات الويب المتكاملة',
        desc: 'تطبيقات ويب متكاملة مبنية باستخدام Next.js App Router و TypeScript و React 19 و Tailwind CSS لأعلى سرعة ووضوح.',
      },
      backend: {
        title: 'معمارية قواعد بيانات PostgreSQL',
        desc: 'نماذج بيانات متقدمة، ومخططات Prisma ORM، وقواعد بيانات Neon Postgres، وواجهات برمجية نظيفة وآمنة.',
      },
      cloud: {
        title: 'المتاجر الإلكترونية وبوابات الدفع',
        desc: 'متاجر أزياء متطورة، وسلال تسوق تفاعلية، وتكامل آمن مع بوابات الدفع مثل Stripe، ومزامنة فورية للمخزون.',
      },
      security: {
        title: 'أنظمة الإدارة ولوحات التحكم',
        desc: 'أنظمة مخصصة لنقاط بيع المطاعم، وحجز الطاولات، وفهارس المكتبات الرقمية، ولوحات إدارة المحتوى البسيطة والفعالة.',
      },
    },
    about: {
      badge: 'الخلفية والمهارات',
      title: 'عن المعتصم',
      subtitle: 'ملتزم بكتابة كود نظيف، واستخدام تيبوغرافيا كلاسيكية راقية، وبناء تجارب رقمية هادفة.',
      journeyTitle: 'المسيرة الهندسية',
      journeyP1: 'أقيم في مدينة بورصة الجميلة في تركيا، وأعمل على بناء تطبيقات ويب تجمع بين الأداء البرمجي الفائق والتصميم الهادئ الأنيق. على مدار أكثر من 6 سنوات، قمت بهندسة متاجر إلكترونية كبرى، وأنظمة متكاملة لإدارة المطاعم، وفهارس مكتبات رقمية، وصفحات هبوط حائزة على إعجاب العملاء.',
      journeyP2: 'أؤمن بأن موقع الويب يجب أن يكون مريحاً للبصر وواسعاً وسهل التصفح دون أي تكلف. ومن خلال دمج التصيير على الخادم في Next.js، مع قواعد بيانات Neon PostgreSQL عبر Prisma، وتنسيقات Tailwind CSS المرنة، أبني أنظمة تصمد أمام الاستخدام الحقيقي.',
      journeyP3: 'كل مشروع يتم بناؤه وفق معايير الكود النظيف، مع دقة كتابة الأنواع البرمجية والاهتمام الكامل بتجربة المستخدم على جميع أحجام الشاشات.',
      experienceTitle: 'المحطات والخبرات',
      philosophyTitle: 'الفلسفة المعمارية',
      philosophyP1: 'يجب أن يكون الكود البرمجي قابلاً للقراءة والفهم بسهولة قبل أن يكون معقداً. التركيز على الحالة المتوقعة، والتصميم المتجاوب، والوضوح الكامل.',
      philosophyP2: 'التصميم الرقمي الراقي لا يحتاج إلى ألوان نيون صاخبة أو تشتيت بصري، بل يتألق بالمساحات المريحة، والدرجات الترابية الدافئة، والتيبوغرافيا المتقنة.',
      skillsRadarTitle: 'التقنيات المستخدمة',
      educationTitle: 'التعليم والشهادات',
      educationDegree: 'بكالوريوس في هندسة الحاسوب',
      educationSchool: 'جامعة أولوداغ، بورصة',
      educationPeriod: '2017 – 2021',
      directInfoTitle: 'معلومات الاتصال المباشرة',
      fullNameLabel: 'الاسم الكامل',
      locationLabel: 'الموقع الجغرافي',
      emailLabel: 'البريد الإلكتروني المباشر',
      phoneLabel: 'الهاتف المباشر / واتساب',
      initiateConvBtn: 'بدء محادثة عمل',
      milestones: [
        {
          period: '2023 – حتى الآن',
          role: 'مطور ويب متكامل رئيسي (Lead Full-Stack)',
          company: 'استوديو ويب مستقل',
          location: 'بورصة، تركيا',
          description:
            'هندسة منصات تجارة إلكترونية متطورة جاهزة للإنتاج، ولوحات تحكم لنقاط بيع المطاعم، وأنظمة مكتبات رقمية باستخدام Next.js App Router و Prisma ORM و PostgreSQL.',
        },
        {
          period: '2021 – 2023',
          role: 'مهندس برمجيات ويب متكامل',
          company: 'وكالة الحلول الرقمية',
          location: 'تركيا',
          description:
            'تطوير تطبيقات ويب شاملة، وتكاملات المتاجر المستقلة، وبوابات عملاء عالية التحويل. قيادة اعتماد TypeScript وترقية مخططات قواعد البيانات.',
        },
        {
          period: '2019 – 2021',
          role: 'مهندس واجهات أمامية وتجربة مستخدم (UI/Frontend)',
          company: 'استوديو ويب كرافت',
          location: 'بورصة، تركيا',
          description:
            'بناء واجهات ويب سريعة الاستجابة وأنظمة تصميم متكاملة. هندسة التعريب متعدد اللغات (عربي/إنجليزي/تركي) وتأثيرات الحركة الانسيابية.',
        },
      ],
      competencies: [
        {
          category: 'هندسة الواجهات الأمامية',
          skills: ['React 19', 'Next.js App Router', 'TypeScript', 'Tailwind CSS v4', 'Framer Motion', 'إدارة الحالة'],
        },
        {
          category: 'معمارية الواجهات الخلفية',
          skills: ['Node.js', 'Express', 'REST APIs', 'Server Actions', 'أنظمة المصادقة', 'معالجات المسارات'],
        },
        {
          category: 'قواعد البيانات ومخططات ORM',
          skills: ['Neon PostgreSQL', 'Prisma ORM', 'المخططات العلائقية', 'الفهرسة والاستعلامات', 'تجميع الاتصالات'],
        },
        {
          category: 'الأداء وتجربة المستخدم',
          skills: ['تصاميم مخصصة للهواتف أولاً', 'مؤشرات أداء الويب Core Web Vitals', 'التعريب والتوطين i18n', 'HTML دلالي', 'تحسين محركات البحث SEO'],
        },
      ],
    },
    projects: {
      badge: 'معرض الأعمال',
      title: 'أبرز مشاريع الويب',
      subtitle: 'مجموعة مختارة من تطبيقات الويب الحقيقية، ومتاجر التجارة الإلكترونية، وأنظمة الضيافة، والفهارس الرقمية.',
      allFilter: 'كافة الأعمال',
      fullstackFilter: 'متكامل (Full-Stack)',
      frontendFilter: 'واجهة أمامية',
      backendFilter: 'خلفية وقواعد بيانات',
      searchPlaceholder: 'ابحث في المشاريع أو التقنيات...',
      liveViewBtn: 'معاينة حية',
      detailsBtn: 'عرض التفاصيل',
      featuredBadge: 'مميز',
      techStack: 'حزمة التقنيات',
      noResults: 'لا توجد مشاريع تطابق البحث الحالي.',
      resetFilters: 'إعادة ضبط الفلاتر',
    },
    projectDetails: {
      backBtn: 'العودة لمعرض المشاريع',
      liveMockupTitle: 'المعاينة التفاعلية المباشرة (Live View)',
      desktopMode: 'إطار الحاسوب',
      mobileMode: 'إطار الهاتف',
      openInNewTab: 'فتح الموقع في نافذة جديدة',
      reloadPreview: 'إعادة تحميل المعاينة',
      viewSource: 'الكود المصدري',
      overviewTitle: 'معمارية ونطاق المشروع',
      architectureTitle: 'أبرز مميزات هندسة الويب',
      challengesTitle: 'التحديات التقنية الرئيسية',
      solutionsTitle: 'الحل البرمجي المطبق',
      metricsTitle: 'مؤشرات الأداء والسرعة',
      sandboxNotice: 'معاينة تفاعلية مدمجة داخل إطار جهاز متجاوب. يمكنك تصفح المشروع واختبار تصميمه.',
    },
    contact: {
      badge: 'تواصل معي',
      title: 'فلنبنِ معاً',
      subtitle: 'متاح لعقود تطوير الويب، وبناء المتاجر الإلكترونية، وتطوير الأنظمة المخصصة.',
      formTitle: 'إرسال رسالة مباشرة',
      nameLabel: 'الاسم',
      emailLabel: 'البريد الإلكتروني',
      phoneLabel: 'رقم الهاتف (اختياري)',
      subjectLabel: 'موضوع المشروع',
      messageLabel: 'الرسالة',
      sendBtn: 'إرسال الرسالة',
      sending: 'جارٍ إرسال الرسالة...',
      sentSuccess: 'تم استلام رسالتك بنجاح! شكراً لتواصلك، وسيقوم المعتصم بالرد قريباً.',
      directTitle: 'بيانات الاتصال المباشرة',
      directSubtitle: 'تواصل مباشرة عبر القنوات المعتمدة.',
      phoneLabelDirect: 'الهاتف المباشر',
      emailLabelDirect: 'البريد الرسمي',
      locationLabelDirect: 'الموقع الجغرافي',
      bursaLocation: 'بورصة، تركيا',
      copyTooltip: 'انقر للنسخ',
      copiedTooltip: 'تم النسخ بنجاح!',
      whatsappBtn: 'محادثة واتساب',
      instagramBtn: 'إنستغرام',
      callBtn: 'اتصال مباشر',
    },
    admin: {
      loginTitle: 'تسجيل دخول لوحة التحكم',
      loginSubtitle: 'أدخل بيانات المسؤول للوصول إلى إدارة مشاريع المعرض وصندوق الرسائل.',
      usernameLabel: 'اسم المستخدم',
      passwordLabel: 'كلمة المرور',
      loginBtn: 'دخول للوحة التحكم',
      demoNotice: 'الوضع التجريبي: يمكنك إدخال أي بيانات أو النقر أدناه للدخول المباشر.',
      useDemoCreds: 'ملء بيانات الدخول التجريبية',
      dashboardTitle: 'لوحة تحكم معرض المشاريع',
      logoutBtn: 'تسجيل الخروج',
      tabOverview: 'نظرة عامة',
      tabProjects: 'المشاريع',
      tabInbox: 'الرسائل',
      totalProjectsStat: 'إجمالي المشاريع',
      totalMessagesStat: 'إجمالي الرسائل',
      unreadMessagesStat: 'رسائل غير مقروءة',
      systemHealthStat: 'حالة قاعدة البيانات',
      newProjectBtn: 'إضافة مشروع جديد',
      searchProjectsPlaceholder: 'تصفية سجلات المشاريع...',
      tableTitle: 'العنوان والتصنيف',
      tableCategory: 'التصنيف',
      tableStatus: 'رابط المعاينة',
      tableActions: 'الإجراءات',
      deleteConfirm: 'هل أنت متأكد من رغبتك في حذف هذا المشروع؟ هذا الإجراء نهائي.',
      modalNewTitle: 'إضافة مشروع جديد',
      modalEditTitle: 'تعديل بيانات المشروع',
      fieldTitleEn: 'العنوان',
      fieldTitleAr: 'العنوان (بالعربية)',
      fieldTitleTr: 'العنوان (بالتركية)',
      fieldDescEn: 'الوصف',
      fieldCategory: 'التصنيف (Full-Stack, Frontend, Backend)',
      fieldLiveUrl: 'رابط المعاينة المباشرة (Live View URL)',
      fieldImageUrl: 'رابط الصورة (Image URL)',
      saveBtn: 'حفظ المشروع',
      cancelBtn: 'إلغاء',
      inboxTitle: 'الرسائل الواردة',
      inboxSubtitle: 'الرسائل المستلمة عبر نموذج التواصل في الموقع.',
      markAsRead: 'تحديد كمقروء',
      markAsUnread: 'تحديد كغير مقروء',
      deleteMsg: 'حذف الرسالة',
      replyEmail: 'رد عبر البريد',
      emptyInbox: 'صندوق الوارد فارغ حالياً.',
    },
    footer: {
      bio: 'مطور ويب متكامل مكرس لهندسة منصات تجارة إلكترونية رائدة، وأنظمة إدارة المطاعم والضيافة، وأنظمة رقمية عالية الأداء بتصميم دافئ وعصري.',
      navTitle: 'التنقل',
      coordinatesTitle: 'بيانات التواصل',
      location: 'بورصة، تركيا',
      rights: 'جميع الحقوق محفوظة.',
      status: 'متاح للتعاقد والعمل الحر',
      craftedWith: 'صمم بأسلوب دافئ وألوان ترابية هادئة، وتصميم واسع ومريح.',
    },
  },
  tr: {
    nav: {
      home: 'Ana Sayfa',
      about: 'Hakkımda',
      projects: 'Projeler',
      contact: 'İletişim',
      admin: 'Yönetim Paneli',
      themeToggle: 'Temayı Değiştir',
      langSelect: 'Dil',
      availableBadge: 'Web Projelerine Açık',
    },
    hero: {
      statusBadge: 'FULL-STACK WEB MİMARI // BURSA, TR',
      greeting: 'Merhaba, Ben',
      name: 'Elmutasem',
      role: 'Full-Stack Web Geliştirici',
      tagline: 'Zamansız bir zarafetle yüksek etkili web uygulamaları, dönüşüm odaklı e-ticaret platformları, restoran yönetim sistemleri ve dijital kütüphane arşivleri tasarlıyor ve inşa ediyorum.',
      exploreBtn: 'Projeleri İncele',
      contactBtn: 'İletişime Geç',
      downloadCvBtn: 'Özgeçmiş İndir',
      statYears: 'Yıl Web Deneyimi',
      statProjects: 'Canlı Web Projesi',
      statAvailability: 'Müşteri Memnuniyeti',
      statUptime: 'Zamanında Teslimat',
      statResponsive: 'Duyarlı Tasarım',
      ctaBadge: 'İŞ BİRLİĞİ VE İLETİŞİM',
      ctaTitle: 'Yeni web projenizi veya yönetim sisteminizi mi planlıyorsunuz?',
      ctaSubtitle: "Bursa'dan web mimarisi, özel yazılım geliştirme veya full-stack web sistemleri üzerine görüşelim.",
      terminalTitle: 'elmutasem.dev ~ web mimarı',
      terminalRole: 'Full-Stack Web Mühendisi',
      terminalSpecialty: 'Next.js, TypeScript, PostgreSQL, UI/UX',
      terminalLocation: 'Bursa, Türkiye',
    },
    services: {
      sectionBadge: 'TEMEL YETENEKLER',
      title: 'Web Mühendisliği Ustalığı',
      subtitle: 'Zarif tipografi, akıcı kullanıcı deneyimi ve sağlam veritabanı mimarisini buluşturan duyarlı ve ölçeklenebilir web sistemleri.',
      ecommerce: {
        title: 'E-Ticaret Platformları',
        desc: 'Çoklu para birimli ödeme, anlık envanter senkronizasyonu ve ultra hızlı sayfa yüklemesine sahip yüksek dönüşümlü amiral mağazalar.',
      },
      hospitality: {
        title: 'Restoran ve POS Sistemleri',
        desc: 'Modern restoranlar için mutfağa anlık sipariş iletimi, masa rezervasyon akışı ve dinamik dijital menü yönetimi.',
      },
      archival: {
        title: 'Dijital Kütüphane Sistemleri',
        desc: 'Yüz binlerce kaydı kolaylıkla yöneten çok kriterli katalog araması, dijital arşivleme ve ödünç takip sistemleri.',
      },
      bespoke: {
        title: 'Özel Tasarım Web Sistemleri',
        desc: 'Özgün tipografi, duyarlı mikro etkileşimler ve erişilebilir arayüzlerle sanatsal ve kusursuz dijital deneyimler.',
      },
      fullstack: {
        title: 'Full-Stack Web Uygulamaları',
        desc: 'Next.js App Router, TypeScript, React 19 ve Tailwind CSS v4 ile geliştirilmiş hızlı, temiz ve modern web sistemleri.',
      },
      backend: {
        title: 'PostgreSQL ve Veritabanı Mimarisi',
        desc: 'Ölçeklenebilir veri modelleri, Prisma ORM şemaları, Neon Postgres sunucusuz altyapısı ve güvenli API uç noktaları.',
      },
      cloud: {
        title: 'E-Ticaret ve Yüksek Hacimli Portallar',
        desc: 'Özel headless giyim mağazaları, dinamik sepet akışları, Stripe ödeme entegrasyonu ve anlık envanter yönetimi.',
      },
      security: {
        title: 'Yönetim Sistemleri ve Paneller',
        desc: 'Restoran POS sistemleri, masa rezervasyon portalları, kütüphane katalogları ve kullanıcı dostu yönetim panelleri.',
      },
    },
    about: {
      badge: 'GEÇMİŞ VE YAKLAŞIM',
      title: 'Elmutasem Hakkında',
      subtitle: 'Temiz koda, zamansız web tipografisine ve anlamlı dijital deneyimler üretmeye adanmış bir mühendis.',
      journeyTitle: 'Mühendislik Yolculuğu',
      journeyP1: 'Bursa, Türkiye merkezli olarak işlevsel sağlamlığı zarif görsel tasarımla birleştiren özel web uygulamaları geliştiriyorum. 6 yılı aşkın süredir büyük ölçekli e-ticaret siteleri, kapsamlı restoran POS sistemleri, akademik kütüphane katalogları ve etkileyici açılış sayfaları inşa ettim.',
      journeyP2: 'Bir web sitesinin gözü yormayan, geniş, ferah ve kolay gezilebilir olması gerektiğine inanıyorum. Next.js ile sunucu taraflı oluşturma, Neon PostgreSQL ve Prisma ile güvenilir veritabanı modelleri ve Tailwind CSS ile akıcı mobil öncelikli düzenler kullanarak gerçek dünyada güvenle çalışan sistemler yaratıyorum.',
      journeyP3: 'Her proje, katı temiz kod ilkeleri, baştan sona tip güvenliği ve tüm cihazlarda kusursuz uyum dikkate alınarak geliştirilir.',
      experienceTitle: 'Dönüm Noktaları ve Deneyim',
      philosophyTitle: 'Mimari Felsefem',
      philosophyP1: 'Kod akıllıca görünmeden önce okunabilir ve anlaşılır olmalıdır. Belirlenimci durum yönetimine, duyarlı tasarıma ve şeffaf kullanıcı geri bildirimine öncelik verin.',
      philosophyP2: 'Gerçek zarafet yapay neon parıltılarla bağırmak yerine geniş boşluklar, sıcak toprak tonları ve net tipografiyle kendini gösterir.',
      skillsRadarTitle: 'Teknoloji Yığını',
      educationTitle: 'Eğitim ve Özgeçmiş',
      educationDegree: 'Bilgisayar Mühendisliği Lisansı',
      educationSchool: 'Uludağ Üniversitesi, Bursa',
      educationPeriod: '2017 – 2021',
      directInfoTitle: 'Doğrudan İletişim Bilgileri',
      fullNameLabel: 'Tam İsim',
      locationLabel: 'Konum',
      emailLabel: 'Doğrudan E-posta',
      phoneLabel: 'Doğrudan Telefon / WhatsApp',
      initiateConvBtn: 'Görüşme Başlat',
      milestones: [
        {
          period: '2023 – Günümüz',
          role: 'Kıdemli Full-Stack Web Geliştirici (Lead)',
          company: 'Bağımsız Web Stüdyosu',
          location: 'Bursa, Türkiye',
          description:
            'Next.js App Router, Prisma ORM ve PostgreSQL kullanarak üretime hazır e-ticaret platformları, restoran POS panelleri ve dijital kütüphane arşiv sistemleri mimarisi.',
        },
        {
          period: '2021 – 2023',
          role: 'Full-Stack Yazılım Mühendisi',
          company: 'Dijital Çözümler Ajansı',
          location: 'Türkiye',
          description:
            'Kapsamlı web uygulamaları, modern headless ticaret entegrasyonları ve yüksek dönüşümlü müşteri portalları geliştirme. TypeScript adaptasyonu ve veritabanı şema göçleri liderliği.',
        },
        {
          period: '2019 – 2021',
          role: 'Frontend ve UI Mühendisi',
          company: 'Web Craft Studio',
          location: 'Bursa, Türkiye',
          description:
            'Erişilebilir, duyarlı web arayüzleri ve tasarım sistemleri inşası. Çok dilli yerelleştirme (AR/EN/TR) ve akıcı arayüz animasyonları mühendisliği.',
        },
      ],
      competencies: [
        {
          category: 'Ön Yüz (Frontend) Mühendisliği',
          skills: ['React 19', 'Next.js App Router', 'TypeScript', 'Tailwind CSS v4', 'Framer Motion', 'Durum Yönetimi'],
        },
        {
          category: 'Arka Yüz (Backend) Mimarisi',
          skills: ['Node.js', 'Express', 'REST API', 'Server Actions', 'Kimlik Doğrulama', 'API Rotaları'],
        },
        {
          category: 'Veritabanı ve ORM',
          skills: ['Neon PostgreSQL', 'Prisma ORM', 'İlişkisel Şemalar', 'İndeksleme & Sorgular', 'Bağlantı Havuzu'],
        },
        {
          category: 'Performans ve Kullanıcı Deneyimi',
          skills: ['Mobil Öncelikli Düzenler', 'Core Web Vitals', 'i18n Çok Dilli Sistem', 'Semantik HTML', 'SEO Optimizasyonu'],
        },
      ],
    },
    projects: {
      badge: 'PROJE ARŞİVİ',
      title: 'Öne Çıkan Web Projeleri',
      subtitle: 'Canlı web uygulamaları, modern e-ticaret mağazaları, konaklama platformları ve dijital kataloglardan oluşan özel seçki.',
      allFilter: 'Tümü',
      fullstackFilter: 'Full-Stack',
      frontendFilter: 'Frontend',
      backendFilter: 'Backend',
      searchPlaceholder: 'Web projelerinde veya teknolojilerde arayın...',
      liveViewBtn: 'Canlı Önizleme',
      detailsBtn: 'Detayları Gör',
      featuredBadge: 'Öne Çıkan',
      techStack: 'Teknoloji Yığını',
      noResults: 'Arama veya kategori filtrenize uygun proje bulunamadı.',
      resetFilters: 'Filtreleri Sıfırla',
    },
    projectDetails: {
      backBtn: 'Proje Galerisine Dön',
      liveMockupTitle: 'Etkileşimli Canlı Önizleme (Live View Mockup)',
      desktopMode: 'Masaüstü Çerçevesi',
      mobileMode: 'Mobil Çerçevesi',
      openInNewTab: 'Canlı Siteyi Aç',
      reloadPreview: 'Önizlemeyi Yenile',
      viewSource: 'Kaynak Kodu',
      overviewTitle: 'Proje Mimarisi ve Kapsamı',
      architectureTitle: 'Web Mimarisi Öne Çıkanlar',
      challengesTitle: 'Karşılaşılan Temel Teknik Zorluklar',
      solutionsTitle: 'Uygulanan Mühendislik Çözümleri',
      metricsTitle: 'Performans ve Hız Metrikleri',
      sandboxNotice: 'Duyarlı cihaz çerçevesi içinde çalışan etkileşimli önizleme.',
    },
    contact: {
      badge: 'İLETİŞİME GEÇİN',
      title: 'Birlikte İnşa Edelim',
      subtitle: 'Full-stack web sözleşmeleri, özel e-ticaret mağazaları ve kurumsal web sistemleri için uygundur.',
      formTitle: 'Doğrudan Mesaj Gönderin',
      nameLabel: 'Adınız',
      emailLabel: 'E-posta Adresiniz',
      phoneLabel: 'Telefon Numarası (İsteğe Bağlı)',
      subjectLabel: 'Proje Kapsamı / Konu',
      messageLabel: 'Mesajınız',
      sendBtn: 'Mesajı Gönder',
      sending: 'Mesaj iletiliyor...',
      sentSuccess: 'Mesajınız alındı! Teşekkür ederiz. Elmutasem en kısa sürede dönüş yapacaktır.',
      directTitle: 'Doğrudan İletişim Koordinatları',
      directSubtitle: 'Resmi iletişim kanalları üzerinden bağlantı kurun.',
      phoneLabelDirect: 'Telefon',
      emailLabelDirect: 'E-posta',
      locationLabelDirect: 'Konum',
      bursaLocation: 'Bursa, Türkiye',
      copyTooltip: 'Kopyalamak için tıklayın',
      copiedTooltip: 'Panoya kopyalandı!',
      whatsappBtn: 'WhatsApp Sohbeti',
      instagramBtn: 'Instagram',
      callBtn: 'Doğrudan Ara',
    },
    admin: {
      loginTitle: 'Yönetim Paneli Girişi',
      loginSubtitle: 'Proje ve mesaj yönetim paneline erişmek için yönetici bilgilerinizi girin.',
      usernameLabel: 'Kullanıcı Adı',
      passwordLabel: 'Şifre',
      loginBtn: 'Giriş Yap',
      demoNotice: 'Demo Girişi: Herhangi bir bilgi girebilir veya aşağıdaki düğmeye tıklayabilirsiniz.',
      useDemoCreds: 'Demo Bilgilerini Doldur',
      dashboardTitle: 'Portfolyo CMS Kontrol Paneli',
      logoutBtn: 'Çıkış Yap',
      tabOverview: 'Genel Bakış',
      tabProjects: 'Projeler',
      tabInbox: 'Gelen Mesajlar',
      totalProjectsStat: 'Toplam Proje',
      totalMessagesStat: 'Toplam Mesaj',
      unreadMessagesStat: 'Okunmamış Mesajlar',
      systemHealthStat: 'Veritabanı Durumu',
      newProjectBtn: 'Yeni Proje Ekle',
      searchProjectsPlaceholder: 'Projeleri filtrele...',
      tableTitle: 'Başlık & Kategori',
      tableCategory: 'Kategori',
      tableStatus: 'Canlı URL',
      tableActions: 'İşlemler',
      deleteConfirm: 'Bu projeyi silmek istediğinize emin misiniz? Bu işlem geri alınamaz.',
      modalNewTitle: 'Yeni Proje Ekle',
      modalEditTitle: 'Projeyi Düzenle',
      fieldTitleEn: 'Başlık',
      fieldTitleAr: 'Başlık (Arapça)',
      fieldTitleTr: 'Başlık (Türkçe)',
      fieldDescEn: 'Açıklama',
      fieldCategory: 'Kategori (Full-Stack, Frontend, Backend)',
      fieldLiveUrl: 'Canlı Önizleme URL\'si',
      fieldImageUrl: 'Görsel URL\'si',
      saveBtn: 'Projeyi Kaydet',
      cancelBtn: 'İptal',
      inboxTitle: 'Gelen İletişim Mesajları',
      inboxSubtitle: 'Web sitesi iletişim formu üzerinden gönderilen mesajlar.',
      markAsRead: 'Okundu İşaretle',
      markAsUnread: 'Okunmadı İşaretle',
      deleteMsg: 'Mesajı Sil',
      replyEmail: 'E-posta ile Yanıtla',
      emptyInbox: 'Henüz mesaj bulunmuyor.',
    },
    footer: {
      bio: 'Sıcak ve zamansız bir tasarımla ölçeklenebilir e-ticaret platformları, restoran yönetim yazılımları ve yüksek performanslı dijital sistemler inşa eden Full-Stack Web Geliştirici.',
      navTitle: 'Gezinme',
      coordinatesTitle: 'İletişim Bilgileri',
      location: 'Bursa, Türkiye',
      rights: 'Tüm hakları saklıdır.',
      status: 'PROJELER İÇİN MÜSAİT',
      craftedWith: 'Sıcak toprak tonları, ferah ve geniş tasarım, temiz kod anlayışıyla tasarlandı.',
    },
  },
};
