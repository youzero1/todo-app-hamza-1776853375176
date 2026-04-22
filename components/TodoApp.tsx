'use client';

import { useState, useEffect, useCallback } from 'react';
import { Todo } from '@/types';
import { getSupabaseClient } from '@/lib/supabase';
import TodoItem from '@/components/TodoItem';

type FilterType = 'all' | 'active' | 'completed';

function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).substring(2);
}

export default function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [filter, setFilter] = useState<FilterType>('all');
  const [supabaseAvailable, setSupabaseAvailable] = useState(false);
  const [loading, setLoading] = useState(true);

  const supabase = getSupabaseClient();

  // Load todos
  const loadTodos = useCallback(async () => {
    if (supabase) {
      const { data, error } = await supabase
        .from('todos')
        .select('*')
        .order('created_at', { ascending: false });
      if (!error && data) {
        setSupabaseAvailable(true);
        setTodos(
          data.map((row: { id: string; text: string; completed: boolean; created_at: string }) => ({
            id: row.id,
            text: row.text,
            completed: row.completed,
            createdAt: row.created_at,
          }))
        );
        setLoading(false);
        return;
      }
    }
    // Fallback to localStorage
    setSupabaseAvailable(false);
    try {
      const stored = localStorage.getItem('todos');
      if (stored) {
        setTodos(JSON.parse(stored) as Todo[]);
      }
    } catch (_err) {
      // ignore
    }
    setLoading(false);
  }, [supabase]);

  useEffect(() => {
    loadTodos();
  }, [loadTodos]);

  // Save to localStorage when supabase not available
  useEffect(() => {
    if (!supabaseAvailable && !loading) {
      try {
        localStorage.setItem('todos', JSON.stringify(todos));
      } catch (_err) {
        // ignore
      }
    }
  }, [todos, supabaseAvailable, loading]);

  async function addTodo() {
    const text = inputValue.trim();
    if (text.length === 0) return;

    const newTodo: Todo = {
      id: generateId(),
      text,
      completed: false,
      createdAt: new Date().toISOString(),
    };

    if (supabaseAvailable && supabase) {
      const { error } = await supabase.from('todos').insert({
        id: newTodo.id,
        text: newTodo.text,
        completed: newTodo.completed,
        created_at: newTodo.createdAt,
      });
      if (!error) {
        setTodos((prev) => [newTodo, ...prev]);
      }
    } else {
      setTodos((prev) => [newTodo, ...prev]);
    }

    setInputValue('');
  }

  async function toggleTodo(id: string) {
    const todo = todos.find((t) => t.id === id);
    if (!todo) return;

    const newCompleted = !todo.completed;

    if (supabaseAvailable && supabase) {
      await supabase.from('todos').update({ completed: newCompleted }).eq('id', id);
    }

    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: newCompleted } : t))
    );
  }

  async function deleteTodo(id: string) {
    if (supabaseAvailable && supabase) {
      await supabase.from('todos').delete().eq('id', id);
    }

    setTodos((prev) => prev.filter((t) => t.id !== id));
  }

  async function editTodo(id: string, newText: string) {
    if (supabaseAvailable && supabase) {
      await supabase.from('todos').update({ text: newText }).eq('id', id);
    }

    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, text: newText } : t))
    );
  }

  async function clearCompleted() {
    const completedIds = todos.filter((t) => t.completed).map((t) => t.id);

    if (supabaseAvailable && supabase && completedIds.length > 0) {
      await supabase.from('todos').delete().in('id', completedIds);
    }

    setTodos((prev) => prev.filter((t) => !t.completed));
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      addTodo();
    }
  }

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  const activeCount = todos.filter((t) => !t.completed).length;
  const completedCount = todos.filter((t) => t.completed).length;

  const filterButtons: { label: string; value: FilterType }[] = [
    { label: 'All', value: 'all' },
    { label: 'Active', value: 'active' },
    { label: 'Completed', value: 'completed' },
  ];

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-indigo-500 border-t-transparent" />
      </div>
    );
  }

  return (
    <div className="w-full max-w-xl">
      {/* Header */}
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">
          <span className="text-indigo-600">✓</span> Todo App
        </h1>
        <p className="mt-2 text-sm text-gray-500">
          {supabaseAvailable
            ? 'Connected to Supabase — data is synced'
            : 'Using local storage — connect Supabase for persistence'}
        </p>
      </div>

      {/* Input */}
      <div className="mb-6 flex gap-3">
        <input
          type="text"
          placeholder="What needs to be done?"
          className="flex-1 rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm shadow-sm transition-shadow placeholder:text-gray-400 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-200"
          value={inputValue}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          type="button"
          onClick={addTodo}
          disabled={inputValue.trim().length === 0}
          className="rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Add
        </button>
      </div>

      {/* Filters */}
      <div className="mb-4 flex items-center justify-between">
        <div className="flex gap-1 rounded-lg bg-gray-100 p-1">
          {filterButtons.map((fb) => (
            <button
              key={fb.value}
              type="button"
              onClick={() => setFilter(fb.value)}
              className={`rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
                filter === fb.value
                  ? 'bg-white text-indigo-600 shadow-sm'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {fb.label}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs text-gray-500">
            {activeCount} item{activeCount !== 1 ? 's' : ''} left
          </span>
          {completedCount > 0 && (
            <button
              type="button"
              onClick={clearCompleted}
              className="text-xs text-red-500 transition-colors hover:text-red-700"
            >
              Clear completed
            </button>
          )}
        </div>
      </div>

      {/* Todo List */}
      {filteredTodos.length === 0 ? (
        <div className="rounded-xl border-2 border-dashed border-gray-200 py-12 text-center">
          <div className="text-4xl">📝</div>
          <p className="mt-3 text-sm text-gray-400">
            {filter === 'all'
              ? 'No todos yet — add one above!'
              : filter === 'active'
              ? 'No active todos'
              : 'No completed todos'}
          </p>
        </div>
      ) : (
        <ul className="space-y-2">
          {filteredTodos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={toggleTodo}
              onDelete={deleteTodo}
              onEdit={editTodo}
            />
          ))}
        </ul>
      )}

      {/* Stats bar */}
      {todos.length > 0 && (
        <div className="mt-6 flex justify-center gap-6 text-xs text-gray-400">
          <span>{todos.length} total</span>
          <span>{activeCount} active</span>
          <span>{completedCount} completed</span>
        </div>
      )}
    </div>
  );
}
