import { Github } from "lucide-react";
import Todo from "../assets/Todo.png";
import expense from "../assets/expense.png";

const projects = [
  {
    title: "Wallet Mobile App",
    description: "Responsive tracker interface",
    image: expense,
    details:
      "A modern dashboard interface built with React and Tailwind CSS. Features incliudes responsive design, and interactive charts.",
    demo: "https://new-wallet-eight.vercel.app",
    code: "https://github.com/Dunni-kanye/E-wallet-app",
  },
  {
    title: "E-commerce UI",
    description: "Modern shopping experience",
    image: "https://via.placeholder.com/300",
    details:
      "A responsive e-commerce interface with advanced filtering, cart functionality, and smooth animations using Framer Motion.",
    demo: "#",
    code: "#",
  },
  {
    title: "Todo-list App",
    description: "Task management tool",
    image: Todo, // Fixed image issue here
    details:
      "A simple yet powerful to-do list app designed to help users manage their tasks efficiently.",
    demo: "https://delicate-torte-3da5cd.netlify.app/",
    code: "https://github.com/Dunni-kanye/To-Do-list-app",
  },
];

export default function Projects() {
  return (
    <div className="relative bg-gradient-to-br from-pink-100 via-rose-200 to-purple-200">
      {/* Decorative background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pink-300/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-300/30 rounded-full blur-3xl" />
      </div>

      <div className="container py-6 md:py-12">
        <h1 className="text-4xl font-bold tracking-tighter mb-8 text-pink-600">
          Featured Projects
        </h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group hover:shadow-xl transition-shadow duration-300 bg-white/60 backdrop-blur-lg p-6 rounded-xl border border-pink-200"
            >
              <div>
                <h2 className="text-xl font-bold text-rose-500">{project.title}</h2>
                <p className="text-sm text-gray-700">{project.description}</p>
              </div>
              <div className="overflow-hidden rounded-lg mt-4">
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  className="w-full h-[200px] object-cover group-hover:scale-105 transition-transform duration-500 rounded-lg"
                />
              </div>
              <p className="text-sm text-gray-600 mt-4">{project.details}</p>
              <div className="flex gap-2 mt-4">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border rounded-lg py-2 px-4 text-rose-600 border-rose-400 hover:bg-rose-100 transition"
                >
                  Live Demo
                </a>
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border rounded-lg py-2 px-4 flex items-center gap-2 text-rose-600 border-rose-400 hover:bg-rose-100 transition"
                >
                  <Github className="h-4 w-4" /> Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
