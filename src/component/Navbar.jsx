import React from "react";
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <div className="w-full bg-gradient-to-br from-pink-100 via-rose-200 to-purple-200 px-6 md:px-12 py-4 shadow-lg">
      <div className="container flex items-center justify-between">
        <a href="/" className="text-2xl font-bold text-pink-600 tracking-wide">
          Dunni Adekanye
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a
            href="/"
            className="text-sm font-medium transition-colors hover:text-rose-600 px-3 py-2 rounded-lg"
          >
            Home
          </a>
          <a
            href="/about"
            className="text-sm font-medium transition-colors hover:text-rose-600 px-3 py-2 rounded-lg"
          >
            About
          </a>
          <a
            href="/projects"
            className="text-sm font-medium transition-colors hover:text-rose-600 px-3 py-2 rounded-lg"
          >
            Projects
          </a>
          <a
            href="/contact"
            className="text-sm font-medium transition-colors hover:text-rose-600 px-3 py-2 rounded-lg"
          >
            Contact
          </a>
        </nav>

        {/* Mobile Navigation */}
        <button className="md:hidden p-2 rounded-lg hover:bg-rose-100 transition">
          <Menu className="h-6 w-6 text-rose-500" />
          <span className="sr-only">Toggle menu</span>
        </button>
      </div>
    </div>
  );
}
