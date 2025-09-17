import project1 from "../assets/xclusive/logo.png";
import project2 from "../assets/futo1k/logo.png";
import project3 from "../assets/naijarails/logo.png";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/catfish/logo.png";
import project6 from "../assets/NFT/logo.png";
import project7 from "../assets/Nike/logo.png";

// ==================== TYPE DEFINITIONS ===/=================

export interface Project {
  id: string;
  title: string;
  image: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
  period: string;
  achievements?: string[];
  teamSize?: number;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
  technologies: string[];
  achievements?: string[];
  type: 'full-time' | 'internship' | 'freelance' | 'contract';
}

export interface Education {
  id: string;
  degree: string;
  field: string;
  school: string;
  location: string;
  period: string;
  gpa?: string;
  relevantCoursework?: string[];
  description?: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  year: string;
  url?: string;
  description?: string;
  category: 'programming' | 'engineering' | 'professional' | 'ai-ml';
}

export interface Training {
  id: string;
  course: string;
  technology: string;
  certification: string;
  issuer: string;
  year: string;
  url?: string;
  category: 'frontend' | 'backend' | 'fullstack' | 'ai-ml' | 'engineering' | 'programming' | 'professional';
}

export interface Contact {
  phone: string;
  email: string;
  linkedin: string;
  github: string;
  instagram: string;
  twitter: string;
  portfolio: string;
  address: string;
}

export interface ProfessionalMembership {
  organization: string;
  membershipType: string;
  status: 'active' | 'graduate' | 'student';
}

// ==================== LEGACY COMPATIBILITY ====================
// Legacy type aliases for backward compatibility
export type HERO_CONTENT = string;
export type ABOUT_TEXT = string;
export type EXPERIENCES = Experience[];
export type PROJECTS = Project[];
export type CONTACT = Contact;
export type EDUCATION = Education[];
export type TRAINING = Training[];
export const CONTACT: Contact = {
  phone: "+2347046647941",
  email: "ezechibuezeernest@gmail.com",
  linkedin: "https://www.linkedin.com/in/ernestoo2",
  github: "https://github.com/Ernestoo2",
  instagram: "https://www.instagram.com/ernestezeoo2/",
  twitter: "https://x.com/EzeCErnest?t=FzBoXcsXLEl-1dNflLSN8A&s=09",
  portfolio: "https://ernest-portfolio-pi.vercel.app/",
  address: "Plot 7, Flat 14, International Secondary School Staff Quarters, Abia State University, Uturu, Abia State, Nigeria"
};

// Main content constants
export const HERO_CONTENT: HERO_CONTENT = `Software Engineer and recent Engineering graduate with expertise in frontend development and system design. Built production-ready applications using Next.js, React.js, Node.js and MongoDB, Python, etc. Developed 5+ web applications, including Student library management, FUTO-1k with Paystack integration, Railway transportation platform with Paystack integration, and an e-commerce website for the Xclusivekicks shoe brand.`;

export const ABOUT_TEXT: ABOUT_TEXT = `I am a dedicated Software Engineer with a Bachelor's degree in Electrical and Electronics Engineering, specializing in frontend development and system design. With expertise in modern web technologies including React.js, Next.js, TypeScript, and Node.js, I focus on building type-safe, scalable, and efficient web applications that enhance user experience. I have successfully developed multiple production-ready applications and contributed to open-source projects, combining my engineering background with practical software development skills.`;

export const EDUCATION: EDUCATION = [
  {
    id: "futo-engineering",
    degree: "Bachelor of Engineering (B.Eng.)",
    field: "Electrical and Electronics Engineering (Electronics and Computer Engineering)",
    school: "Federal University of Technology Owerri",
    location: "Imo State, Nigeria",
    period: "September 2019 - December 2024",
    gpa: "3.6 / 5.0",
    relevantCoursework: [
      "Computer Programming",
      "Microprocessor Systems", 
      "Digital Electronics",
      "Control Systems",
      "Data Structures and Algorithms"
    ],
    description: "Comprehensive study in electrical systems, circuit design, and digital technology with strong foundations in mathematics, physics, and engineering principles, including practical experience through projects and research."
  }
];


export const CERTIFICATIONS: Certification[] = [
  {
    id: "alx-software-engineering",
    name: "ALX Software Engineering Certificate",
    issuer: "ALX Africa",
    year: "2023",
    url: "https://drive.google.com/file/d/1MvrZfROylU3XnSyXW2YoZtrhvetBq-Gm/view?usp=drivesdk",
    description: "Comprehensive full-stack development program covering frontend, backend, and database technologies. Specialized in React.js, Node.js, Python, and modern web development practices",
    category: "programming"
  },
  {
    id: "matlab-onramp",
    name: "MATLAB Onramp Certification",
    issuer: "MathWorks",
    year: "2023",
    url: "https://drive.google.com/file/d/1MvrZfROylU3XnSyXW2YoZtrhvetBq-Gm/view?usp=drivesdk",
    description: "Demonstrated proficiency in MATLAB programming and computational problem-solving",
    category: "engineering"
  },
  {
    id: "3mtt-ai-ml",
    name: "3MTT NITDA Certificate of Completion - AI/ML",
    issuer: "3 Million Technical Talent (3MTT) Program",
    year: "2024",
    url: "https://drive.google.com/file/d/1E3ceuHgtbtuFRn_DKncchyccH0QY5GMv/view?usp=sharing",
    description: "Completed artificial intelligence and machine learning fundamentals training",
    category: "ai-ml"
  },
  {
    id: "terra-frontend",
    name: "Frontend Web Development Certificate",
    issuer: "Terra Learning",
    year: "2024",
    url: "https://drive.google.com/file/d/1EEsDd9IjlRhq6yq8uxGNy2AkMjF-pf2S/view?usp=drive_link",
    description: "Advanced training in React.js, modern JavaScript, and responsive web design principles",
    category: "programming"
  },
  {
    id: "cisco-javascript",
    name: "JavaScript Essentials for Web Development",
    issuer: "Cisco",
    year: "2024",
    url: "https://drive.google.com/file/d/1E3ceuHgtbtuFRn_DKncchyccH0QY5GMv/view?usp=sharing",
    description: "Comprehensive JavaScript programming and web development fundamentals",
    category: "programming"
  }
];

export const TRAININGS: Training[] = [
  {
    id: "alx-frontend",
    course: "Front End Web Development",
    technology: "JavaScript, React.js, HTML, CSS",
    certification: "ALX Front End Web Development",
    issuer: "ALX Africa",
    year: "2023",
    category: "frontend"
  },
  {
    id: "terra-react",
    course: "React.js Web Development",
    technology: "React.js, Node.js",
    certification: "Terra Learning - React.js Web Development",
    issuer: "Terra Learning",
    year: "2024",
    category: "frontend"
  },
  {
    id: "skillup-frontend",
    course: "Front End Web Development",
    technology: "HTML, CSS, JavaScript",
    certification: "Skillup Imo - Front End Web Development",
    issuer: "Skillup Imo",
    year: "2024",
    category: "frontend"
  },
  {
    id: "cisco-javascript",
    course: "JavaScript Essentials for Web Development",
    technology: "JavaScript",
    certification: "Cisco - JavaScript Essentials for Web Development",
    issuer: "Cisco",
    year: "2024",
    category: "frontend"
  },
  {
    id: "3mtt-ai-ml",
    course: "AI/ML Certificate of Completion",
    technology: "AI/ML Concepts, Data Analysis, Python",
    certification: "3MTT - NITDA Certificate of Completion AI/ML",
    issuer: "3MTT - NITDA",
    year: "2024",
    category: "ai-ml"
  },
  {
    id: "alx-professional",
    course: "Augmented Professional Development Skills in Digital Age",
    technology: "Digital Skills, Communication, Leadership",
    certification: "ALX - Augmented Professional Development Skills",
    issuer: "ALX Africa",
    year: "2024",
    category: "professional"
  },
  {
    id: "matlab-onramp",
    course: "MATLAB Onramp",
    technology: "MATLAB, Data Visualization",
    certification: "MATWORKS - MATLAB Onramp",
    issuer: "MathWorks",
    year: "2023",
    category: "engineering"
  },
  {
    id: "udacity-python",
    course: "Python Programming",
    technology: "Python, Object-Oriented Programming",
    certification: "Udacity - Python Programming",
    issuer: "Udacity",
    year: "2023",
    category: "programming"
  }
];


export const EXPERIENCES: EXPERIENCES = [
  {
    id: "xclusivekicks-freelance",
    role: "Freelance Frontend Developer",
    company: "Xclusivekicks Shoe Brand",
    location: "Remote",
    period: "May 2024 - July 2024",
    type: "freelance",
    description: "Collaborated with 4-person development team to build production-ready e-commerce admin platform for client",
    technologies: ["Next.js", "TypeScript", "Node.js", "RESTful APIs", "Git"],
    achievements: [
      "Developed responsive admin dashboard for inventory and order management",
      "Implemented full CRUD operations for product management and sales analytics",
      "Delivered optimized admin interface with improved loading performance",
      "Managed client requirements and provided technical consultation"
    ]
  },
  {
    id: "terra-learning-intern",
    role: "Frontend Developer Intern",
    company: "Terra Learning",
    location: "Remote",
    period: "February 2024 - May 2024",
    type: "internship",
    description: "Developed responsive user interfaces using React.js for educational technology platform",
    technologies: ["React.js", "React Router", "RESTful APIs", "Git", "JavaScript"],
    achievements: [
      "Built student registration portal with React Router components",
      "Integrated frontend applications with RESTful APIs for course enrollment",
      "Implemented responsive design principles ensuring cross-browser compatibility",
      "Contributed to digital skills training platform serving multiple learning tracks"
    ]
  },
  {
    id: "alx-software-engineer",
    role: "Software Engineer",
    company: "ALX Africa",
    location: "Remote",
    period: "February 2022 - March 2023",
    type: "internship",
    description: "Completed comprehensive software engineering program covering Python, JavaScript, HTML, CSS, and database technologies",
    technologies: ["React.js", "Node.js", "MongoDB", "Python", "JavaScript", "Git"],
    achievements: [
      "Built full-stack web applications with emphasis on frontend development",
      "Developed student library management system with MongoDB integration",
      "Practiced software development best practices and collaborative development",
      "Successfully defended capstone project demonstrating full-stack proficiency"
    ]
  },
  {
    id: "petroleum-institute-intern",
    role: "Engineering Intern",
    company: "Petroleum Teaching Institute",
    location: "Effurun, Delta State",
    period: "January 2024 - May 2024",
    type: "internship",
    description: "Gained practical experience in electrical and electronic systems used in oil and gas operations",
    technologies: ["MATLAB", "SCADA Systems", "Process Control", "Industrial Automation"],
    achievements: [
      "Trained on industrial equipment maintenance and safety protocols",
      "Worked with electrical control systems and power distribution infrastructure",
      "Developed understanding of SCADA systems and process control applications",
      "Enhanced technical skills in industrial automation and system diagnostics"
    ]
  }
];


export const PROJECTS: PROJECTS = [
  {
    id: "xclusivekicks-admin",
    title: "Xclusivekicks E-commerce Admin Website",
    image: project1,
    description: "Collaborated with development team to build a product-ready e-commerce platform for shoe brand with comprehensive admin functionality",
    technologies: ["Next.js", "Node.js", "TypeScript", "RESTful APIs"],
    link: "https://xclusivekicks-admin.vercel.app/",
    github: "https://github.com/Ernestoo2/xclusivekicks-admin",
    period: "May 2024 - July 2024",
    achievements: [
      "Implemented Next.js app-router for seamless page navigation",
      "Built full CRUD operations system for comprehensive admin functionality",
      "Designed responsive product management pages with optimized loading performance"
    ],
    teamSize: 4
  },
  {
    id: "futo-1k",
    title: "FUTO 1K - Student Financial Assistance Platform",
    image: project2,
    description: "Built a responsive web application connecting indigent students with financial donors and supporters",
    technologies: ["React.js", "Tailwind CSS", "React Router", "MongoDB"],
    link: "https://futoonek.vercel.app/",
    github: "https://github.com/Ernestoo2/futoonek",
    period: "August 2024 - December 2024",
    achievements: [
      "Implemented multi-page navigation using React Router",
      "Designed mobile-first interface achieving 95% responsive design score",
      "Deployed production-ready application for 100+ potential users"
    ],
    teamSize: 7
  },
  {
    id: "railway-transportation",
    title: "Railway Transportation System",
    image: project3,
    description: "Built comprehensive train booking platform with user profiling, train scheduling, payment, and ticket generation",
    technologies: ["Next.js", "MongoDB", "TypeScript", "Paystack API"],
    link: "https://nextproject-trains.vercel.app/dashboard",
    github: "https://github.com/Ernestoo2/nextproject-trains",
    period: "October 2024 - December 2024",
    achievements: [
      "Integrated Paystack payment gateway for secure transaction processing",
      "Developed user authentication and profile management features",
      "Improved system operability by 15% through optimized UI/UX design"
    ],
    teamSize: 3
  },
  {
    id: "student-library-system",
    title: "Student Library Management System",
    image: project4,
    description: "Developed Full-stack library management system for university course advisors with advanced search functionality",
    technologies: ["React.js", "MongoDB", "Node.js", "Express.js"],
    github: "https://github.com/Ernestoo2/student-library-system",
    period: "December 2022 - March 2023",
    achievements: [
      "Integrated MongoDB database for efficient student biodata storage",
      "Implemented regular expression search functionality for enhanced data filtering",
      "Successfully presented and defended project to ALX Africa technical panel"
    ]
  },
  {
    id: "catfish-app",
    title: "Catfish App - Meme Coin Exchange",
    image: project5,
    description: "A meme coin exchange application with an intuitive UI for currency transactions",
    technologies: ["React.js", "TypeScript", "Tailwind CSS"],
    link: "https://catfish-app-phi.vercel.app/",
    github: "https://github.com/Ernestoo2/catfish-app",
    period: "2024"
  },
  {
    id: "nft-marketplace",
    title: "NFT Marketplace",
    image: project6,
    description: "A comprehensive NFT marketplace with an interactive UI, multiple card layouts, and detailed page views",
    technologies: ["React.js", "TypeScript", "Tailwind CSS"],
    link: "https://nftmarket-sable.vercel.app/",
    period: "2024"
  },
  {
    id: "nike-site",
    title: "Nike E-commerce Site",
    image: project7,
    description: "An e-commerce website for Nike products, featuring product listings, shopping cart functionality, and user authentication",
    technologies: ["React.js", "TypeScript", "Tailwind CSS"],
    link: "https://nikeapp-xi.vercel.app/",
    period: "2024"
  }
];

export const PROFESSIONAL_MEMBERSHIPS: ProfessionalMembership[] = [
  {
    organization: "Nigerian Society of Engineers (NSE)",
    membershipType: "Graduate Member",
    status: "graduate"
  },
  {
    organization: "Institute of Electrical and Electronics Engineers (IEEE)",
    membershipType: "Graduate Member", 
    status: "graduate"
  }
];

// ==================== TECHNICAL SKILLS ====================

export const TECHNICAL_SKILLS = {
  programmingLanguages: ["TypeScript", "JavaScript", "Python", "HTML5", "CSS3"],
  frontendFrameworks: ["React.js", "Next.js", "jQuery", "Bootstrap", "Tailwind CSS", "Styled CSS", "SCSS"],
  backendTechnologies: ["Node.js", "RESTful APIs", "Express.js"],
  databases: ["MongoDB", "PostgreSQL"],
  developmentTools: ["Git", "GitHub", "VS Code", "Cursor", "npm", "pnpm"],
  paymentIntegration: ["Paystack API"],
  cloudDeployment: ["Vercel", "Netlify"],
  testingDebugging: ["Browser DevTools", "Postman", "ThunderClient", "GitHub Copilot", "Stack Overflow"],
  engineeringSoftware: ["MATLAB", "Simulink", "HOMER", "AutoCAD"]
};
