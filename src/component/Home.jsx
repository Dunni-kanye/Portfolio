import { Download } from "lucide-react";
import { Link } from "react-router-dom";
import Dunni from "../assets/Dunni.jpg";

export default function Home() {
  return (
    <div className="container py-6 md:py-12 bg-gradient-to-br black to-black-200">
      <section className="flex flex-col items-center justify-center gap-8 text-center md:py-12">
        {/* Profile Image */}
        <div className="relative size-40 md:size-60 rounded-full overflow-hidden border-4 border-rose-300 shadow-lg">
          <img src={Dunni} alt="Dunni" className="object-cover w-full h-full" />
        </div>

        {/* Introduction */}
        <div className="space-y-4">
          <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl text-rose-600">
            Hi, I'm Dunni Adekanye
          </h1>
          <p className="max-w-[42rem] leading-normal text-gray-700 sm:text-xl sm:leading-8">
            Frontend Developer specializing in creating beautiful, responsive, and user-friendly web interfaces with
            React and modern web technologies.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            to="/contact"
            className="px-8 py-4 bg-rose-500 text-white font-bold rounded-lg hover:bg-rose-600 transition shadow-md"
          >
            Contact Me
          </Link>
          <a
            href="/your-cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-rose-400 text-rose-600 rounded-lg flex items-center gap-2 hover:bg-rose-100 transition shadow-md"
          >
            <Download className="h-5 w-5" /> Download CV
          </a>
        </div>
      </section>
    </div>
  );
}
