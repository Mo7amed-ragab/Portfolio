export const projectsData = [
  {
    title: "RD App",
    subtitle: "Full-Stack Admin Dashboard",
    // badge: "Production System",
    description:
      "Enterprise-grade admin platform powering daily operations at DomApp",
    bullets: [
      "Architected scalable frontend with modular component design across 10+ feature modules",
      "Built a dynamic Question Builder engine for custom forms, surveys, and automated reporting",
      "Implemented granular Roles & Permissions system with route-level access control",
      "Owned end-to-end feature delivery — from requirements analysis to production deployment",
      "Integrated RESTful APIs with optimized data fetching, caching, and error handling patterns",
    ],
    techStack: [
      "React.js",
      "Redux",
      "RESTful APIs",
      "Bootstrap",
      "Formik",
      "Chart.js",
    ],
    keyFeature:
      "Handles complex multi-step workflows and dynamic data pipelines serving hundreds of daily active users.",
    image: "assets/images/projects/RDAPP.png",
    alt: "RD App Admin Dashboard",
    link: "https://rdapp-tfi-cpv-ca2x.onrender.com/login",
    ariaLabel: "View RD App",
  },
  {
    title: "EndUser System",
    subtitle: "Client-Facing Platform",
    // badge: "Production System",
    description:
      "Multi-module client portal integrated with RD App for project lifecycle management",
    bullets: [
      "Developed a real-time notification and tracking system using Socket.IO",
      "Built multi-module architecture: Tickets, Reports, Invoices, Appointments, and Support",
      "Implemented secure file upload pipeline with AWS S3 integration and progress tracking",
      "Designed project submission and drawing management workflows with status tracking",
    ],
    techStack: [
      "React.js",
      "Socket.IO",
      "AWS S3",
      "Redux",
      "RESTful APIs",
      "Bootstrap",
    ],
    keyFeature:
      "Real-time bi-directional communication layer enabling instant updates across client and admin dashboards.",
    image: "assets/images/projects/ENDUSER.png",
    alt: "EndUser Client Dashboard",
    link: "https://end-user-new-yids.onrender.com/login",
    ariaLabel: "View EndUser System",
  },
  {
    title: "ElMullim",
    subtitle: "E-Learning Platform",
    description:
      "Full-featured learning management system with role-based access for students, parents, and instructors",
    bullets: [
      "Built multi-role authentication system with distinct dashboards per user type",
      "Implemented course management, lesson scheduling, and video streaming modules",
      "Integrated i18n for full multi-language support (Arabic/English)",
      "Developed parent monitoring dashboard with student progress tracking",
    ],
    techStack: ["React.js", "Context API", "i18n", "RESTful APIs", "Bootstrap"],
    keyFeature:
      "Role-based architecture serving three distinct user experiences within a unified codebase.",
    image: "assets/images/projects/ELMULLIM.png",
    alt: "ElMullim E-Learning Platform",
    link: "https://elmullim-frontend.vercel.app/home",
    ariaLabel: "View ElMullim",
  },
  {
    title: "Fresh Cart",
    subtitle: "E-Commerce Application",
    description:
      "Modern e-commerce platform with dynamic product catalog and seamless checkout flow",
    bullets: [
      "Implemented product listing with advanced filtering, search, and category navigation",
      "Built persistent cart management with real-time quantity updates and price calculations",
      "Integrated JWT-based authentication with protected routes and session handling",
      "Consumed RESTful APIs for dynamic product data, user profiles, and order management",
    ],
    techStack: ["React.js", "Context API", "Axios", "JWT Auth", "Bootstrap"],
    keyFeature:
      "Fully API-driven architecture with optimistic UI updates for a frictionless shopping experience.",
    image: "assets/images/projects/proj1.png",
    alt: "Fresh Cart E-Commerce",
    link: "https://e-commerce-fresh-cart-plum.vercel.app/",
    ariaLabel: "View Fresh Cart",
  },
  {
    title: "Professional Law Firm",
    subtitle: "Corporate Website",
    description:
      "Polished corporate website built for a legal services firm with a focus on trust, credibility, and responsiveness",
    bullets: [
      "Developed a fully responsive multi-page layout optimized for desktop, tablet, and mobile viewports",
      "Implemented smooth scroll animations and interactive sections to enhance user engagement",
      "Built reusable component structure for services, team profiles, client testimonials, and contact forms",
      "Ensured cross-browser compatibility and accessibility compliance across all pages",
    ],
    techStack: [
      "HTML5",
      "CSS3",
      "Bootstrap",
      "JavaScript",
      "Responsive Design",
    ],
    keyFeature:
      "Pixel-perfect implementation of a professional design with seamless mobile-first responsiveness.",
    image: "assets/images/projects/proj2.png",
    alt: "Legal Firm Website",
    link: "https://legal-frim-template.vercel.app/",
    ariaLabel: "Legal Firm Website",
  },
  {
    title: "Restaurant & Food Delivery",
    subtitle: "UI/UX Frontend",
    description:
      "Visually rich food ordering interface designed to maximize engagement and conversion",
    bullets: [
      "Crafted a visually appealing menu showcase with high-quality image grids and category-based navigation",
      "Built interactive UI components including animated food cards, hover effects, and smooth transitions",
      "Implemented responsive grid layout adapting seamlessly across all screen sizes",
      "Optimized image loading and page performance for faster initial render times",
    ],
    techStack: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Bootstrap",
      "Responsive Design",
    ],
    keyFeature:
      "Premium food presentation UI with optimized media loading and engaging micro-interactions.",
    image: "assets/images/projects/proj3.png",
    alt: "Food Delivery Website",
    link: "https://food-website-cyan-five.vercel.app/",
    ariaLabel: "View Restaurant & Food UI Project",
  },
  {
    title: "Market Mingle",
    subtitle: "E-Commerce Platform",
    description:
      "Feature-rich online marketplace connecting buyers and sellers with a streamlined shopping experience",
    bullets: [
      "Built dynamic product catalog with multi-category filtering, sorting, and search functionality",
      "Implemented user authentication flow with registration, login, and profile management",
      "Developed shopping cart with persistent state, quantity management, and checkout workflow",
      "Integrated API-driven product data with loading states and error boundary handling",
    ],
    techStack: [
      "React.js",
      "Context API",
      "Axios",
      "Bootstrap",
      "RESTful APIs",
    ],
    keyFeature:
      "Full-cycle e-commerce flow from product discovery to checkout with state-driven cart management.",
    image: "assets/images/projects/proj4.png",
    alt: "Market Mingle Website",
    link: "https://github.com/Mo7amed-ragab/E-Commerce-Market-Mingle",
    ariaLabel: "Market Mingle Website",
  },
  {
    title: "Movies Explorer",
    subtitle: "React Application",
    description:
      "Dynamic movie discovery platform with real-time search and curated browsing experience",
    bullets: [
      "Built real-time search with debounced API calls and instant result rendering",
      "Implemented genre-based filtering, trending sections, and detailed movie pages with dynamic routing",
      "Consumed TMDB API with pagination, loading skeletons, and graceful error handling",
      "Designed a responsive, Netflix-inspired UI with smooth transitions and hover previews",
    ],
    techStack: [
      "React.js",
      "Appwrite",
      "React Router",
      "Axios",
      "TMDB API",
      "Tailwind CSS 4",
    ],
    keyFeature:
      "API-first architecture with real-time search, pagination, and a cinematic browsing experience.",
    image: "assets/images/projects/proj5.png",
    alt: "Movies Website",
    link: "https://movies-website-v2.vercel.app/",
    ariaLabel: "Movies Website",
  },
];
