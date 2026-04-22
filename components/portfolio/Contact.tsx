'use client';

import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // In a real app, you'd send this to an API or Supabase
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: '', email: '', message: '' });
  }

  const socials = [
    { label: 'GitHub', href: '#', icon: '🐙' },
    { label: 'LinkedIn', href: '#', icon: '💼' },
    { label: 'Twitter', href: '#', icon: '🐦' },
    { label: 'Email', href: 'mailto:hello@example.com', icon: '✉️' },
  ];

  return (
    <section id="contact" className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Left side */}
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-indigo-400">
              Get In Touch
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Let's work{' '}
              <span className="text-gradient from-indigo-400 to-purple-400">together</span>
            </h2>
            <p className="mt-4 leading-relaxed text-gray-400">
              Have a project in mind? I'd love to hear about it. Send me a message and let's
              discuss how we can bring your ideas to life.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-lg">
                  📍
                </div>
                <div>
                  <p className="text-sm font-semibold">Location</p>
                  <p className="text-sm text-gray-500">San Francisco, CA</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-lg">
                  ✉️
                </div>
                <div>
                  <p className="text-sm font-semibold">Email</p>
                  <p className="text-sm text-gray-500">hello@example.com</p>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="mt-10">
              <p className="mb-4 text-sm font-semibold text-gray-400">Follow me</p>
              <div className="flex gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-lg transition-all hover:border-indigo-500/30 hover:bg-indigo-500/10"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right side — form */}
          <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-8">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center py-12 text-center">
                <div className="text-5xl">🎉</div>
                <h3 className="mt-4 text-xl font-semibold">Message Sent!</h3>
                <p className="mt-2 text-sm text-gray-400">
                  Thanks for reaching out. I'll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-300">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-gray-600 transition-colors focus:border-indigo-500/50 focus:outline-none focus:ring-1 focus:ring-indigo-500/50"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-300">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-gray-600 transition-colors focus:border-indigo-500/50 focus:outline-none focus:ring-1 focus:ring-indigo-500/50"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-gray-600 transition-colors focus:border-indigo-500/50 focus:outline-none focus:ring-1 focus:ring-indigo-500/50"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-xl bg-indigo-600 py-3.5 text-sm font-semibold text-white transition-all hover:bg-indigo-500 hover:shadow-lg hover:shadow-indigo-500/25 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
