import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <div className="w-full bg-gradient-to-br from-pink-100 via-rose-200 to-purple-200 px-6 md:px-12 py-4 shadow-lg">
      <div className="container flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-pink-600 tracking-wide">
          Dunni Adekanye
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            to="/"
            className="text-sm font-medium transition-colors hover:text-rose-600 px-3 py-2 rounded-lg"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-sm font-medium transition-colors hover:text-rose-600 px-3 py-2 rounded-lg"
          >
            About
          </Link>
          <Link
            to="/projects"
            className="text-sm font-medium transition-colors hover:text-rose-600 px-3 py-2 rounded-lg"
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className="text-sm font-medium transition-colors hover:text-rose-600 px-3 py-2 rounded-lg"
          >
            Contact
          </Link>
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
