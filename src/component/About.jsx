export default function About() {
  return (
    <div className="relative bg-gradient-to-br from-pink-100 via-rose-200 to-purple-200 py-12">
      {/* Decorative background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pink-300/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-300/30 rounded-full blur-3xl" />
      </div>

      <div className="container px-4 md:px-6 py-12">
        <div className="grid gap-12 lg:grid-cols-[1fr,1fr] lg:gap-16">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter text-rose-600">About Me</h1>
            <div className="text-gray-700 space-y-4">
              <p>
                I'm a passionate Frontend Developer focused on creating exceptional user experiences through clean,
                efficient code. I specialize in building responsive web applications using modern JavaScript frameworks
                and CSS technologies.
              </p>
              <p>
                My strength lies in translating design concepts into pixel-perfect, interactive interfaces while ensuring
                optimal performance and accessibility. I have a keen eye for detail and stay up-to-date with the latest
                frontend development trends and best practices.
              </p>
              <p>
                I enjoy working on the visual and interactive aspects of web development, creating smooth animations, and
                ensuring cross-browser compatibility.
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter text-rose-600">Skills & Expertise</h2>
            <div className="grid gap-4">
              {/* Core Technologies */}
              <div className="border border-rose-400 rounded-lg p-4 shadow-md bg-white/60 backdrop-blur-lg">
                <div className="border-b border-rose-300 pb-2">
                  <h3 className="text-lg font-bold text-rose-500">Core Technologies</h3>
                </div>
                <div className="grid grid-cols-2 gap-2 text-sm pt-2 text-gray-700">
                  <span>HTML5</span>
                  <span>CSS3</span>
                  <span>JavaScript</span>
                  <span>React</span>
                  <span>Next.js</span>
                  <span>Git</span>
                </div>
              </div>
              {/* Styling & UI */}
              <div className="border border-rose-400 rounded-lg p-4 shadow-md bg-white/60 backdrop-blur-lg">
                <div className="border-b border-rose-300 pb-2">
                  <h3 className="text-lg font-bold text-rose-500">Styling & UI</h3>
                </div>
                <div className="grid grid-cols-2 gap-2 text-sm pt-2 text-gray-700">
                  <span>Tailwind CSS</span>
                  <span>Sass/SCSS</span>
                  <span>CSS Modules</span>
                  <span>Styled Components</span>
                  <span>Material UI</span>
                  <span>Framer Motion</span>
                </div>
              </div>
              {/* Tools & Skills */}
              <div className="border border-rose-400 rounded-lg p-4 shadow-md bg-white/60 backdrop-blur-lg">
                <div className="border-b border-rose-300 pb-2">
                  <h3 className="text-lg font-bold text-rose-500">Tools & Skills</h3>
                </div>
                <div className="grid grid-cols-2 gap-2 text-sm pt-2 text-gray-700">
                  <span>Git</span>
                  <span>Responsive Design</span>
                  <span>Web Accessibility</span>
                  <span>Performance Optimization</span>
                  <span>Figma</span>
                  <span>Jest/RTL</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
