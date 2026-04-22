const projects = [
  {
    title: 'E-Commerce Platform',
    description:
      'A full-featured online store with real-time inventory, Stripe payments, and an admin dashboard. Built for scale with Next.js and Supabase.',
    tags: ['Next.js', 'Supabase', 'Stripe', 'Tailwind CSS'],
    color: 'from-indigo-500 to-blue-500',
    emoji: '🛒',
  },
  {
    title: 'SaaS Analytics Dashboard',
    description:
      'Real-time analytics dashboard with interactive charts, user segmentation, and custom report generation for a B2B SaaS product.',
    tags: ['React', 'TypeScript', 'D3.js', 'Node.js'],
    color: 'from-purple-500 to-pink-500',
    emoji: '📊',
  },
  {
    title: 'AI Content Generator',
    description:
      'An AI-powered content creation tool that generates blog posts, social media captions, and marketing copy using GPT-4.',
    tags: ['Next.js', 'OpenAI', 'PostgreSQL', 'Redis'],
    color: 'from-emerald-500 to-cyan-500',
    emoji: '🤖',
  },
  {
    title: 'Social Media App',
    description:
      'A modern social platform with real-time messaging, stories, and a recommendation feed. Features end-to-end encryption.',
    tags: ['React Native', 'Firebase', 'WebSocket', 'GraphQL'],
    color: 'from-orange-500 to-red-500',
    emoji: '💬',
  },
  {
    title: 'Project Management Tool',
    description:
      'Kanban-style project tracker with team collaboration, time tracking, and automated workflows for agile teams.',
    tags: ['Vue.js', 'Supabase', 'Tailwind', 'Docker'],
    color: 'from-yellow-500 to-amber-500',
    emoji: '📋',
  },
  {
    title: 'Health & Fitness App',
    description:
      'A comprehensive fitness tracker with workout plans, nutrition logging, and progress visualization with wearable integration.',
    tags: ['Flutter', 'Node.js', 'MongoDB', 'HealthKit'],
    color: 'from-pink-500 to-rose-500',
    emoji: '💪',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-indigo-400">
            My Work
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Featured Projects
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            A selection of projects that showcase my skills and passion for building great products.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] transition-all duration-300 hover:border-white/10 hover:bg-white/[0.04] hover:shadow-2xl hover:shadow-indigo-500/5"
            >
              {/* Gradient header */}
              <div
                className={`flex h-48 items-center justify-center bg-gradient-to-br ${project.color} opacity-80 transition-opacity group-hover:opacity-100`}
              >
                <span className="text-6xl drop-shadow-lg transition-transform duration-300 group-hover:scale-110">
                  {project.emoji}
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold transition-colors group-hover:text-indigo-400">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-400">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs text-gray-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex items-center gap-4">
                  <button
                    type="button"
                    className="inline-flex items-center gap-1 text-sm font-medium text-indigo-400 transition-colors hover:text-indigo-300"
                  >
                    View Project
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    className="text-sm text-gray-500 transition-colors hover:text-gray-300"
                  >
                    Source Code
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
