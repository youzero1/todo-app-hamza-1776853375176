import TodoApp from '@/components/TodoApp';

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center px-4 py-12 sm:py-20">
      <TodoApp />
    </main>
  );
}
