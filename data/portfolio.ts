import type { Project, Skill } from "@/types";

export const skills: Skill[] = [
  { name: "React", color: "bg-blue-500" },
  { name: "Next.js", color: "bg-gray-700" },
  { name: "FastAPI", color: "bg-green-500" },
  { name: "Python", color: "bg-yellow-500" },
  { name: "TypeScript", color: "bg-blue-600" },
  { name: "AWS", color: "bg-blue-600" },
  { name: "AI/ML", color: "bg-purple-500" },
];

export const projects: Project[] = [
  {
    title: "Linear Website Clone",
    description: "Clone of Linear Website home page",
    tech: ["React", "Tailwind", "Framer Motion"],
    github: "https://github.com/Binisha1/linearWebsiteClone",
    demo: "https://linearclonebini.netlify.app/",
  },
  {
    title: "ChatBot",
    description: "A Chatbot with Gemini API for real time conversations",
    tech: ["Next.js", "FastAPI", "Tailwind", "TypeScript"],
    github: "https://github.com/Binisha1/chatbot",
    demo: "https://chatbot-bini.vercel.app/",
  },
  {
    title: "Kidney Stone Prediction",
    description:
      "Machine learning tool to predict kidney stone using Random Forest by urine dataand CNN by X-ray image of kidney with website to take input data ",
    tech: ["Random Forest", "CNN", "React", "Flowbite", "Flask"],
    github: "https://github.com/Binisha1/kidney-stone-prediction",
    demo: "#",
  },
];
