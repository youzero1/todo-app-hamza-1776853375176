export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      {/* Background gradient orbs */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-indigo-600/20 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-purple-600/20 blur-[120px]" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-400 backdrop-blur-sm">
          <span className="inline-block h-2 w-2 rounded-full bg-green-400 animate-pulse" />
          Available for work
        </div>

        <h1 className="text-5xl font-bold leading-tight tracking-tight sm:text-7xl">
          Hi, I'm{' '}
          <span className="text-gradient from-indigo-400 via-purple-400 to-pink-400">
            Alex Morgan
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-400 sm:text-xl">
          A full-stack developer and designer crafting beautiful, performant web
          experiences. I turn ideas into elegant digital products.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-indigo-600 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-indigo-500 hover:shadow-xl hover:shadow-indigo-500/25"
          >
            View My Work
            <svg
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-3.5 text-sm font-semibold text-gray-300 backdrop-blur-sm transition-all hover:bg-white/10 hover:text-white"
          >
            Get In Touch
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-20 flex justify-center">
          <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/20 p-1">
            <div className="h-2 w-1 animate-bounce rounded-full bg-white/40" />
          </div>
        </div>
      </div>
    </section>
  );
}
