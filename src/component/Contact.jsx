import { Github, Linkedin, Mail } from "lucide-react";

export default function Contact() {
  return (
    <div className="relative flex flex-col min-h-screen justify-center items-center bg-gradient-to-br ">
      <div className="container py-6 md:py-12 text-center flex-grow">
        <div className="flex flex-col items-center gap-8">
          {/* Header */}
          <div className="space-y-4">
            <h1 className="text-4xl font-bold sm:text-5xl text-rose-600">
              Get In Touch
            </h1>
            <p className="max-w-lg text-gray-700 sm:text-lg">
              I'm currently open to new opportunities and collaborations. Feel
              free to reach out through any of the following channels:
            </p>
          </div>

          {/* Contact Links */}
          <div className="flex flex-col gap-4 w-full max-w-md">
            <a
              href="mailto:dunniade18@gmail.com"
              className="px-6 py-3 bg-rose-700 text-white rounded-lg flex items-center justify-center gap-2 hover:bg-rose-600 transition shadow-md"
            >
              <Mail className="h-5 w-5" /> dunniade18@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3BZldFwZBoRvOSA5lOc84jxA%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-rose-700 text-white rounded-lg flex items-center justify-center gap-2 hover:bg-rose-600 transition shadow-md"
            >
              <Linkedin className="h-5 w-5" /> LinkedIn
            </a>
            <a
              href="https://github.com/Dunni-kanye"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-rose-700 text-white rounded-lg flex items-center justify-center gap-2 hover:bg-rose-600 transition shadow-md"
            >
              <Github className="h-5 w-5" /> GitHub
            </a>
          </div>
        </div>
      </div>

      {/* Empty footer space to push content properly */}
      <footer className="w-full h-12"></footer>
    </div>
  );
}
