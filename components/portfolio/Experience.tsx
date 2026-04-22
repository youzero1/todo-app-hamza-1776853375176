const experiences = [
  {
    role: 'Senior Full-Stack Developer',
    company: 'TechCorp',
    period: '2022 — Present',
    description:
      'Leading development of the core product platform, mentoring junior developers, and driving architecture decisions for a SaaS product serving 100K+ users.',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'AWS'],
  },
  {
    role: 'Full-Stack Developer',
    company: 'StartupXYZ',
    period: '2020 — 2022',
    description:
      'Built and shipped multiple features from concept to production. Improved page load times by 60% and implemented a real-time notification system.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Docker'],
  },
  {
    role: 'Frontend Developer',
    company: 'DigitalAgency',
    period: '2019 — 2020',
    description:
      'Developed responsive web applications for enterprise clients. Collaborated closely with designers to implement pixel-perfect interfaces.',
    technologies: ['Vue.js', 'Sass', 'REST APIs', 'Figma'],
  },
  {
    role: 'Junior Developer',
    company: 'WebStudio',
    period: '2018 — 2019',
    description:
      'Started my professional journey building websites and learning best practices in web development, version control, and agile methodologies.',
    technologies: ['HTML/CSS', 'JavaScript', 'PHP', 'WordPress'],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-indigo-400">
            Career
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Work Experience
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            My professional journey and the companies I've had the pleasure of working with.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mt-16">
          {/* Vertical line */}
          <div className="absolute left-0 top-0 hidden h-full w-px bg-gradient-to-b from-indigo-500/50 via-purple-500/50 to-transparent sm:left-8 sm:block" />

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div key={idx} className="relative sm:pl-20">
                {/* Dot */}
                <div className="absolute left-0 top-1 hidden h-4 w-4 -translate-x-1/2 items-center justify-center sm:left-8 sm:flex">
                  <div className="h-3 w-3 rounded-full border-2 border-indigo-400 bg-gray-950" />
                </div>

                <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition-all duration-300 hover:border-indigo-500/20 hover:bg-white/[0.04]">
                  <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                    <div>
                      <h3 className="text-lg font-semibold">{exp.role}</h3>
                      <p className="text-indigo-400">{exp.company}</p>
                    </div>
                    <span className="whitespace-nowrap rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-500">
                      {exp.period}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-gray-400">
                    {exp.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-indigo-500/20 bg-indigo-500/10 px-2.5 py-0.5 text-xs text-indigo-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
