export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: '🎨',
      skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    },
    {
      title: 'Backend',
      icon: '⚙️',
      skills: ['Node.js', 'Python', 'PostgreSQL', 'Supabase', 'REST & GraphQL'],
    },
    {
      title: 'Design',
      icon: '✏️',
      skills: ['Figma', 'UI/UX Design', 'Prototyping', 'Design Systems', 'Responsive Design'],
    },
    {
      title: 'DevOps',
      icon: '🚀',
      skills: ['Docker', 'CI/CD', 'AWS', 'Vercel', 'GitHub Actions'],
    },
  ];

  return (
    <section id="skills" className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-indigo-400">
            My Skills
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Technologies & Tools
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            I work with modern technologies to build fast, scalable, and beautiful applications.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((cat) => (
            <div
              key={cat.title}
              className="group rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition-all duration-300 hover:border-indigo-500/30 hover:bg-white/[0.04] hover:shadow-lg hover:shadow-indigo-500/5"
            >
              <div className="mb-4 text-3xl">{cat.icon}</div>
              <h3 className="mb-4 text-lg font-semibold">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-400 transition-colors group-hover:border-indigo-500/20 group-hover:text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
