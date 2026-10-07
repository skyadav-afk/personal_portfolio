import { Icons } from "@/components/icons";
import {
  BotIcon,
  BrainCircuitIcon,
  DatabaseZapIcon,
  HomeIcon,
  InstagramIcon,
  LanguagesIcon,
  WebhookIcon,
} from "lucide-react";
import { Python } from "@/components/ui/svgs/python";
import { Java } from "@/components/ui/svgs/java";
import {
  Express,
  HuggingFace,
  JavaScript,
  LangChain,
  LangGraph,
  MongoDB,
  MySQL,
  NumPy,
  OpenCV,
  Pandas,
  ScikitLearn,
  TensorFlow,
} from "@/components/ui/svgs/brands";
import type { ComponentType } from "react";

// Files in /public are served under the GitHub Pages sub-path
const asset = (path: string) =>
  `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;

type Skill = {
  name: string;
  icon: ComponentType<{ className?: string }>;
};

const skills: Skill[] = [
  { name: "Python", icon: Python },
  { name: "LangChain", icon: LangChain },
  { name: "LangGraph", icon: LangGraph },
  { name: "LLMs", icon: BrainCircuitIcon },
  { name: "NLP", icon: LanguagesIcon },
  { name: "AI Agents", icon: BotIcon },
  { name: "Hugging Face", icon: HuggingFace },
  { name: "FAISS", icon: DatabaseZapIcon },
  { name: "Scikit-learn", icon: ScikitLearn },
  { name: "TensorFlow", icon: TensorFlow },
  { name: "OpenCV", icon: OpenCV },
  { name: "Pandas", icon: Pandas },
  { name: "NumPy", icon: NumPy },
  { name: "Java", icon: Java },
  { name: "JavaScript", icon: JavaScript },
  { name: "Express.js", icon: Express },
  { name: "MySQL", icon: MySQL },
  { name: "MongoDB", icon: MongoDB },
  { name: "REST APIs", icon: WebhookIcon },
];

export const DATA = {
  name: "Shailendra Kumar Yadav",
  initials: "SK",
  url: "https://skyadav-afk.github.io/personal_portfolio",
  location: "Ujjain, India",
  locationLink: "https://www.google.com/maps/place/Ujjain",
  description:
    "Forward Deployed Engineer at Watermelon Software, building production-level AI systems, LLM-based chatbots, and scalable ML pipelines.",
  summary:
    "I build production-level AI chatbots, NLP systems, and ML pipelines. I'm currently a Forward Deployed Engineer at [Watermelon Software](/#work), where I started as an AI intern working on scalable LLM-based systems that handle millions of logs and real-time user interactions. Before that, I fine-tuned transformer models with Hugging Face and integrated them into live backend systems. I'm also finishing my [B.Tech in Computer Science (AI & ML)](/#education) at GLA University, Mathura.",
  avatarUrl: asset("/me.jpg"),
  skills,
  navbar: [{ href: asset("/"), icon: HomeIcon, label: "Home" }],
  contact: {
    email: "shailendraky2004@gmail.com",
    tel: "+918817044936",
    telDisplay: "+91 88170 44936",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/shailendra31888",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/shailendra-kumar-yadav-22b215278",
        icon: Icons.linkedin,
        navbar: true,
      },
      Instagram: {
        name: "Instagram",
        url: "https://www.instagram.com/shailendra___._yadav",
        icon: InstagramIcon,
        navbar: true,
      },
      Email: {
        name: "Send Email",
        url: "mailto:shailendraky2004@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Watermelon Software Inc",
      location: "Singapore · Remote",
      title: "Forward Deployed Engineer",
      logoUrl: asset("/logos/watermelon.png"),
      start: "Oct 2026",
      end: "Present",
      description:
        "Working directly with customers to deploy and adapt Watermelon's AI systems in their environments.",
    },
    {
      company: "Watermelon Software Inc",
      location: "Remote",
      title: "Artificial Intelligence Intern",
      logoUrl: asset("/logos/watermelon.png"),
      start: "Oct 2025",
      end: "Oct 2026",
      description:
        "Worked on a production-level AI chatbot handling millions of logs and real-time user interactions. Designed scalable LLM-based systems with LangChain and LangGraph, optimized prompt pipelines, and vector databases. Implemented AI-driven automation and integrated advanced NLP technologies in live environments.",
    },
    {
      company: "BharatTech",
      location: "India · Remote",
      title: "Machine Learning Intern",
      logoUrl: asset("/logos/bharattech.png"),
      start: "May 2024",
      end: "Nov 2024",
      description:
        "Trained and deployed NLP models for summarization and semantic search on the CollegeCue platform. Fine-tuned transformer models using Hugging Face on domain-specific datasets. Integrated models into backend systems using Python.",
    },
    {
      company: "GLA University – JOVAC",
      location: "Mathura, India",
      title: "Trainee",
      logoUrl: asset("/logos/gla.png"),
      start: "Jun 2024",
      end: "Jul 2024",
      description:
        "Job Oriented Value-Added Course at GLA University. Learned ML fundamentals and practical applications, and completed a mini project: an AI-based exam evaluation system using OpenCV and PIL.",
    },
  ],
  education: [
    {
      school: "GLA University, Mathura",
      href: "https://www.gla.ac.in",
      degree: "B.Tech in Computer Science (AI & ML)",
      logoUrl: asset("/logos/gla.png"),
      start: "2022",
      end: "2026",
    },
    {
      school: "Aditya Birla Public School, Nagda",
      href: "",
      degree: "Intermediate",
      logoUrl: asset("/logos/aditya-birla.png"),
      start: "2020",
      end: "2022",
    },
  ],
  projects: [
    {
      title: "AI-Based Exam Evaluator",
      href: "https://github.com/shailendra31888/exam-evaluation",
      dates: "Jun 2024 - Jul 2024",
      active: true,
      description:
        "Built an automated evaluation system for theoretical and OMR exams using OpenCV and PIL. Enables fast and accurate grading with AI-based image processing and answer detection.",
      technologies: ["Python", "OpenCV", "PIL", "Machine Learning"],
      links: [
        {
          type: "Source",
          href: "https://github.com/shailendra31888/exam-evaluation",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: asset("/projects/exam-evaluator.png"),
      video: "",
    },
    {
      title: "Smart Chatbot with LangChain",
      href: "https://github.com/shailendra31888/SmartChatbot",
      dates: "May 2025 - Jun 2025",
      active: true,
      description:
        "Developed a multi-LLM chatbot with LangChain and vector memory. Routes domain-specific queries intelligently and retains full conversational context using a FAISS vector store.",
      technologies: ["Python", "LangChain", "FAISS", "OpenAI API"],
      links: [
        {
          type: "Source",
          href: "https://github.com/shailendra31888/SmartChatbot",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: asset("/projects/smart-chatbot.png"),
      video: "",
    },
    {
      title: "Pokémon MCP Server",
      href: "https://github.com/shailendra31888/pokemon_Mcp-server",
      dates: "",
      active: true,
      description:
        "A Model Context Protocol server that gives AI models Pokémon data from PokéAPI (stats, types, abilities, moves, evolution chains), a battle simulation tool with type effectiveness and status effects, and an interactive Streamlit demo.",
      technologies: ["Python", "MCP", "PokéAPI", "Streamlit", "FastAPI"],
      links: [
        {
          type: "Source",
          href: "https://github.com/shailendra31888/pokemon_Mcp-server",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: asset("/projects/pokemon-mcp.png"),
      video: "",
    },
    {
      title: "Credit Risk Model",
      href: "",
      dates: "Feb 2025 - Apr 2025",
      active: true,
      description:
        "Built an ML pipeline to predict delinquent borrowers with feature engineering and model tuning. Improved targeting accuracy using a Random Forest classifier on financial datasets.",
      technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Random Forest"],
      links: [],
      image: asset("/projects/credit-risk.png"),
      video: "",
    },
  ],
};
