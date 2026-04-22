export default function Footer() {
  return (
    <footer className="border-t border-white/5 px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Alex Morgan. All rights reserved.
        </p>
        <p className="text-sm text-gray-600">
          Built with{' '}
          <span className="text-gradient from-indigo-400 to-purple-400 font-medium">
            Next.js
          </span>{' '}
          &{' '}
          <span className="text-gradient from-cyan-400 to-blue-400 font-medium">
            Tailwind CSS
          </span>
        </p>
      </div>
    </footer>
  );
}
