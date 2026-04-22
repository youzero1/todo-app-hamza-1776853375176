export default function About() {
  const stats = [
    { number: '5+', label: 'Years Experience' },
    { number: '50+', label: 'Projects Delivered' },
    { number: '30+', label: 'Happy Clients' },
    { number: '10+', label: 'Awards Won' },
  ];

  return (
    <section id="about" className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Image / Visual */}
          <div className="relative">
            <div className="aspect-square overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20 p-1">
              <div className="flex h-full w-full items-center justify-center rounded-[20px] bg-gray-900">
                <div className="text-center">
                  <div className="text-8xl">👨‍💻</div>
                  <p className="mt-4 text-sm text-gray-500">Your photo here</p>
                </div>
              </div>
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-6 rounded-2xl border border-white/10 bg-gray-900/90 px-6 py-4 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-500/20 text-indigo-400">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Open to Work</p>
                  <p className="text-xs text-gray-500">Full-time & Freelance</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-indigo-400">
              About Me
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Passionate about creating{' '}
              <span className="text-gradient from-indigo-400 to-purple-400">
                impactful digital experiences
              </span>
            </h2>
            <p className="mt-6 leading-relaxed text-gray-400">
              I'm a full-stack developer with over 5 years of experience building web
              applications that are not only functional but delightful to use. My approach
              combines clean code with thoughtful design to create products that stand out.
            </p>
            <p className="mt-4 leading-relaxed text-gray-400">
              When I'm not coding, you can find me exploring new technologies, contributing
              to open-source projects, or mentoring aspiring developers. I believe in
              continuous learning and pushing the boundaries of what's possible on the web.
            </p>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-bold text-gradient from-indigo-400 to-purple-400">
                    {stat.number}
                  </p>
                  <p className="mt-1 text-xs text-gray-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
