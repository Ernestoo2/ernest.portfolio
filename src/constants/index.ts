import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-4.jpg";
import project6 from "../assets/projects/project-3.jpg";
import project7 from "../assets/projects/project-2.jpg";

export type HERO_CONTENT = string;
export type ABOUT_TEXT = string;
export type EXPERIENCES = {
  year: string;
  role: string;
  company: string;
  description: string;
  technologies: string[];
}
export type PROJECTS = ({
  title: string;
  image: string;
  description: string;
  technologies: string[];
  link: string;
} | {
  title: string;
  image: string;
  description: string;
  technologies: string[];
  link?: undefined;
})[]
export type CONTACT = {
  address: string;
  phoneNo: string;
  email: string;
}
export type EDUCATION = {
  title: string;
  description: string;
  school: string;
  period: string;
};
export type TRAINING = {
  course: string;
  technology: string;
  certification: string;
};
export const EDUCATION: EDUCATION[] = [
  {
    title: "Electrical and Electronics Engineering",
    description: "Comprehensive study in electrical systems, circuit design, and digital technology. Gained strong foundations in mathematics, physics, and engineering principles, with practical experience through projects and research.",
    school: "Federal University of Technology, Owerri",
    period: "09/2019 - 12/2024",
  }
];


export const TRAININGS: TRAINING[] = [
  {
    course: "Front End Web Development",
    technology: "JavaScript, React.js, HTML, CSS",
    certification: "ALX Front End Web Development",
  },
  {
    course: "React.js Web Development",
    technology: "React.js, Node.js",
    certification: "Terra Learning - React.js Web Development",
  },
  {
    course: "Front End Web Development",
    technology: "HTML, CSS, JavaScript",
    certification: "Skillup Imo - Front End Web Development",
  },
  {
    course: "JavaScript Essentials for Web Development",
    technology: "JavaScript",
    certification: "Cisco - JavaScript Essentials for Web Development",
  },
  {
    course: "AI/ML Certificate of Completion",
    technology: "AI/ML Concepts, Data Analysis, Python",
    certification: "3MTT - NITDA Certificate of Completion AI/ML",
  },
  {
    course: "Augmented Professional Development Skills in Digital Age",
    technology: "Digital Skills, Communication, Leadership",
    certification: "ALX - Augmented Professional Development Skills",
  },
  {
    course: "MATLAB Onramp",
    technology: "MATLAB, Data Visualization",
    certification: "MATWORKS - MATLAB Onramp",
  },
  {
    course: "Python Programming",
    technology: "Python, Object-Oriented Programming",
    certification: "Udacity - Python Programming",
  }
];

export const HERO_CONTENT: HERO_CONTENT = `I am a passionate Front-End Developer with 4 years of experience specializing in React.js, UI/UX design, and building scalable web applications. I have successfully developed innovative projects like the Futo 1K financial assistance platform and the Student Library System, leveraging modern technologies to create user-friendly experiences.`;

export const ABOUT_TEXT: ABOUT_TEXT = `I am a dedicated Front-End Developer with expertise in modern web technologies, including React.js, TypeScript, Tailwind CSS, and Vue.js. My focus is on building type-safe, scalable, and efficient web applications that enhance user experience. By leveraging TypeScript, I ensure code maintainability and reduce runtime errors, allowing for more robust application development. With a strong foundation in JavaScript, RESTful API integration, and state management, I develop modern, high-performance web solutions that address real-world challenges.`;

export const EXPERIENCES : EXPERIENCES[] = [
  {
    year: "2024 - Present",
    role: "Full Stack Developer",
    company: "Freelance / Open Source",
    description: `Building modern web applications using React.js, Next.js, and Node.js. Developed scalable APIs, implemented authentication systems, and integrated third-party services to improve functionality. Focused on building high-performance, SEO-optimized web apps using best coding practices and agile development methods.`,
    technologies: ["JavaScript", "React.js", "Next.js", "Node.js", "MongoDB"],
  },
  {
    year: "2023 - 2024",
    role: "Front-end Web Developer",
    company: "Skillup Imo",
    description: `Developed interactive and responsive web pages using React.js and Tailwind CSS. Improved website performance by optimizing asset loading and leveraging modern web features. Collaborated with designers to translate UI/UX wireframes into functional components.`,
    technologies: ["React.js", "Tailwind CSS", "HTML", "CSS"],
  },
  {
    year: "2022 - 2023",
    role: "Web Development Intern",
    company: "ALX Software Engineering",
    description: `Gained experience in building web applications using React.js, Node.js, and MongoDB. Participated in collaborative projects, learning best practices in code architecture, version control, and project management.`,
    technologies: ["React.js", "Node.js", "MongoDB", "CSS", "JavaScript"],
  },
  {
    year: "2021 - 2022",
    role: "AI/ML Trainee",
    company: "3MTT - NITDA",
    description: `Completed hands-on projects using AI/ML techniques. Learned data processing, model training, and deploying predictive models for real-world applications using Python frameworks such as TensorFlow and Scikit-learn.`,
    technologies: ["Python", "TensorFlow", "Scikit-learn", "Pandas"],
  }
];


export const PROJECTS: PROJECTS = [
  {
    title: "Futo 1K",
    image: project1,
    description: "A web platform connecting students in need with donors, built using React.js and Tailwind CSS.",
    technologies: ["React.js", "Tailwind CSS", "Firebase"],
    link: "https://futoonek.vercel.app/",
  },
  {
    title: "Student Library System",
    image: project2,
    description: "A data management system for student records, featuring MongoDB integration and an advanced search function.",
    technologies: ["React.js", "Node.js", "MongoDB"],
  },
  {
    title: "Vanlife",
    image: project3,
    description: "A van rental and booking platform with RESTful API integration for seamless lease management.",
    technologies: ["React.js", "RESTful API", "JavaScript"],
    link: "https://skillup-imo-3ni4.vercel.app/",
  },
  {
    title: "Railway Transportation System",
    image: project4,
    description: "A research and digital solution aimed at improving railway system efficiency.",
    technologies: ["React.js", "Express.js", "MongoDB"],
    link: "https://raiilway-transport.vercel.app/",
  },
  {
    title: "Catfish App",
    image: project5,
    description: "A meme coin exchange application with an intuitive UI for currency transactions.",
    technologies: ["React.js", "TypeScript", "Tailwind CSS"],
    link: "https://catfish-app-phi.vercel.app/",
  },
  {
    title: "NFT Marketplace",
    image: project6,
    description: "A comprehensive NFT marketplace with an interactive UI, multiple card layouts, and detailed page views.",
    technologies: ["React.js", "TypeScript", "Tailwind CSS"],
    link: "https://nftmarket-sable.vercel.app/",
  },
  {
    title: "Nike Site",
    image: project7,
    description: "An e-commerce website for Nike products, featuring product listings, shopping cart functionality, and user authentication.",
    technologies: ["React.js", "TypeScript", "Tailwind CSS"],
    link: "https://nikeapp-xi.vercel.app/",
  },
];

export const CONTACT: CONTACT = {
  address: "No 1  FACEBOOK LODGE UMUCHIMA, OWERRI WEST, IMO STATE",
  phoneNo: "+2347046647941",
  email: "ezechibuezeernest@gmail.com",
};
