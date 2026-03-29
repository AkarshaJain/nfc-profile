export type Experience = {
  id: string;
  role: string;
  company: string;
  location?: string;
  start: string;
  end: string;
  highlights: string[];
};

export type Project = {
  id: string;
  name: string;
  summary: string;
  tags: string[];
  link?: string;
};

export type Education = {
  id: string;
  degree: string;
  school: string;
  location: string;
  start: string;
  end: string;
  detail?: string;
};

export type Certification = {
  id: string;
  name: string;
  issuer?: string;
  year?: string;
  credentialUrl?: string;
};

export type TrainingRecord = {
  id: string;
  name: string;
  provider?: string;
  year?: string;
  url?: string;
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type SocialLink = {
  label: string;
  href: string;
};

export type Profile = {
  fullName: string;
  headline: string;
  /** One-line value prop under headline */
  valueProposition: string;
  photoUrl: string;
  photoAlt: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  portfolio: string;
  bookingUrl: string;
  resumeUrl: string;
  bioLead: string;
  bioParagraphs: string[];
  resumeHighlights: string[];
  experience: Experience[];
  projects: Project[];
  education: Education[];
  certifications: Certification[];
  /** LinkedIn-style courses & short programs */
  trainingCourses: TrainingRecord[];
  skillGroups: SkillGroup[];
  socialLinks: SocialLink[];
};

/** Source of truth — edit here or swap for CMS later */
export const profile: Profile = {
  fullName: "Akarsha Jain",
  headline: "Software Engineer · AI/ML · Full-Stack",
  valueProposition:
    "I build reliable, scalable systems where machine learning meets production engineering — from microservices at global bank scale to intelligent products on the edge.",
  photoUrl: "/profile.png",
  photoAlt: "Professional headshot of Akarsha Jain",
  location: "Los Angeles, California, USA",
  email: "akarshaj@usc.edu",
  phone: "",
  linkedin: "https://www.linkedin.com/in/akarsha-jain/",
  github: "https://github.com/AkarshaJain",
  portfolio: "",
  bookingUrl: "",
  resumeUrl: "/Akarsha_Jain_Resume_ML.pdf",
  bioLead:
    "Graduate computer science student at USC Viterbi with industry experience shipping high-throughput backend systems and applied ML.",
  bioParagraphs: [
    "Most recently at National Australia Bank’s innovation center, I owned Java/Spring Boot microservices handling 1M+ daily transactions with strict latency targets. I drove measurable outcomes: ~40% latency reduction via Redis and SQL tuning, and stronger fraud signal quality through Kafka-based streaming pipelines.",
    "At USC I teach and mentor in K–12 STEM programs (robotics, pathfinding, ML sensing) while deepening expertise in distributed systems, cloud, and full-stack delivery. I care about crisp communication, ownership, and building things people trust in production.",
  ],
  resumeHighlights: [
    "6+ microservices in production · Java/Spring Boot · Kafka · Redis · PostgreSQL",
    "Applied CV/ML: YOLOv8, OpenCV, Raspberry Pi, real-time sensing pipelines",
    "Full-stack: React, Node, Spring Boot, Docker, AWS, CI/CD (GitHub Actions)",
    "Teaching Assistant · STEM outreach · cross-functional stakeholder communication",
  ],
  experience: [
    {
      id: "nab",
      role: "Software Engineer",
      company: "National Australia Bank — Innovation Center India",
      location: "India",
      start: "Jul 2023",
      end: "Dec 2024",
      highlights: [
        "Engineered and operated 6+ Java/Spring Boot microservices processing 1M+ daily transactions with sub-100 ms targets.",
        "Cut end-to-end latency ~40% using Redis caching, query tuning, and disciplined performance profiling.",
        "Built Kafka-backed alerting and reconciliation flows that improved fraud-detection signal quality ~25%.",
        "Delivered secure 3-D Secure and wallet flows with OAuth2/JWT and rigorous API design.",
      ],
    },
    {
      id: "usc-ta",
      role: "Teaching Assistant — Summer Program",
      company: "USC Viterbi K–12 STEM",
      location: "Los Angeles, CA",
      start: "May 2025",
      end: "Present",
      highlights: [
        "Guided 60+ students through programming and robotics with EZ-Bots, Zumi, and Red Bot labs.",
        "Designed hands-on modules for pathfinding, obstacle sensing, and line following with ML-flavored intuition.",
      ],
    },
    {
      id: "usc-tutor",
      role: "Saturday Academy Tutor",
      company: "USC Educational Partnership (Kinder2College)",
      location: "Los Angeles, CA",
      start: "2025",
      end: "Present",
      highlights: [
        "Mentors K–12 learners with lesson plans spanning coding fundamentals, STEM confidence, and career clarity.",
      ],
    },
    {
      id: "usc-jep",
      role: "Teaching Assistant (Volunteer)",
      company: "USC Joint Educational Project",
      location: "Los Angeles, CA",
      start: "2025",
      end: "Present",
      highlights: [
        "Introduces elementary students to coding through workshops and repeatable, age-appropriate activities.",
      ],
    },
    {
      id: "persistent",
      role: "PSPL Intern — Full-Stack",
      company: "Persistent Systems",
      start: "May 2022",
      end: "Jun 2022",
      highlights: [
        "Shipped a React SPA with React Router and a Node/Express API layer.",
        "Implemented JWT auth with refresh-safe token handling and cross-browser QA.",
      ],
    },
    {
      id: "blueplanet",
      role: "Android Engineering Intern",
      company: "Blue Planet Infosolution",
      start: "Nov 2021",
      end: "Jan 2022",
      highlights: [
        "Built Kotlin/Java MVVM apps with Retrofit/OkHttp, resilient error paths, and offline-friendly caching.",
        "Improved stability ~40% via lifecycle tuning and performance work.",
      ],
    },
  ],
  projects: [
    {
      id: "smart-glasses",
      name: "Smart glasses for visually impaired users",
      summary:
        "Edge CV stack on Raspberry Pi 5 with YOLOv8, spoken feedback via NLP + Google TTS — recognized with TATA MAGIC innovation funding.",
      tags: ["Python", "YOLOv8", "OpenCV", "Raspberry Pi"],
      link: "https://github.com/AkarshaJain",
    },
    {
      id: "skillbridge",
      name: "SkillBridge — AI-assisted learning platform",
      summary:
        "Spring Boot + PostgreSQL + JWT, OpenAI-powered coaching, Docker on AWS, GitHub Actions CI/CD.",
      tags: ["Spring Boot", "OpenAI", "Docker", "AWS"],
      link: "https://github.com/AkarshaJain",
    },
    {
      id: "toy-car",
      name: "Autonomous toy car (ML + CV)",
      summary:
        "Real-time detection, obstacle avoidance, and GPIO motor control — applied ML, computer vision, and embedded integration.",
      tags: ["Python", "YOLOv8", "Computer Vision"],
      link: "https://github.com/AkarshaJain",
    },
    {
      id: "car-price",
      name: "Car price predictor",
      summary:
        "End-to-end regression workflow with feature engineering, evaluation, and clear visualization for stakeholders.",
      tags: ["Python", "scikit-learn", "Pandas"],
      link: "https://github.com/AkarshaJain/CarPricePredictor",
    },
  ],
  education: [
    {
      id: "usc",
      degree: "M.S. Computer Science",
      school: "University of Southern California — Viterbi",
      location: "Los Angeles, CA",
      start: "Jan 2025",
      end: "Dec 2026",
      detail: "Focus: AI/ML, software engineering, distributed systems, cloud.",
    },
    {
      id: "wit",
      degree: "B.E. Computer Science & Engineering",
      school: "Walchand Institute of Technology",
      location: "Solapur, India",
      start: "2019",
      end: "2023",
      detail: "First Class with Distinction · CGPA 9.34/10 · coding club founding member.",
    },
  ],
  certifications: [
    {
      id: "azure-cv",
      name: "Build a computer vision app with Azure Cognitive Services",
      issuer: "Microsoft (Coursera)",
      year: "Nov 2025",
      credentialUrl: "https://coursera.org/account/accomplishments/records/E0LTTAUGTGCX",
    },
    {
      id: "internshala-android-ai",
      name: "Android App Development with AI",
      issuer: "Internshala Trainings",
      year: "May 2020",
    },
  ],
  trainingCourses: [
    {
      id: "li-sheets",
      name: "Introduction to Google Sheets",
      provider: "LinkedIn Learning",
      year: "Oct 2025",
    },
    {
      id: "li-llm",
      name: "Introduction to LLM",
      provider: "LinkedIn Learning",
      year: "Oct 2025",
    },
    {
      id: "li-ml-python",
      name: "Machine Learning with Python: Foundations",
      provider: "LinkedIn Learning",
      year: "Oct 2025",
    },
  ],
  skillGroups: [
    {
      title: "Languages",
      items: ["Java", "Python", "C++", "Kotlin", "JavaScript", "TypeScript", "SQL"],
    },
    {
      title: "Backend & cloud",
      items: ["Spring Boot", "Node.js", "AWS", "Docker", "Kubernetes", "Redis", "Kafka"],
    },
    {
      title: "Web & mobile",
      items: ["React", "HTML/CSS", "Android", "MVVM", "REST APIs"],
    },
    {
      title: "AI/ML & data",
      items: [
        "Agentic AI",
        "LangChain",
        "LangGraph",
        "TensorFlow",
        "YOLOv8",
        "OpenCV",
        "scikit-learn",
        "Pandas",
        "NumPy",
      ],
    },
    {
      title: "Datastores & quality",
      items: ["PostgreSQL", "MySQL", "JUnit", "Mockito", "GitHub Actions", "OAuth2/JWT"],
    },
  ],
  socialLinks: [],
};
