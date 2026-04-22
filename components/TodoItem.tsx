'use client';

import { useState } from 'react';
import { Todo } from '@/types';

export default function TodoItem({
  todo,
  onToggle,
  onDelete,
  onEdit,
}: {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, newText: string) => void;
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  function handleSave() {
    const trimmed = editText.trim();
    if (trimmed.length > 0) {
      onEdit(todo.id, trimmed);
    }
    setIsEditing(false);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      handleSave();
    } else if (e.key === 'Escape') {
      setEditText(todo.text);
      setIsEditing(false);
    }
  }

  return (
    <li className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-sm transition-all hover:shadow-md">
      {/* Checkbox */}
      <button
        type="button"
        onClick={() => onToggle(todo.id)}
        className={`flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border-2 transition-colors ${
          todo.completed
            ? 'border-emerald-500 bg-emerald-500 text-white'
            : 'border-gray-300 hover:border-emerald-400'
        }`}
        aria-label={todo.completed ? 'Mark as incomplete' : 'Mark as complete'}
      >
        {todo.completed && (
          <svg
            className="h-3.5 w-3.5"
            fill="none"
            stroke="currentColor"
            strokeWidth={3}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        )}
      </button>

      {/* Text / Edit */}
      {isEditing ? (
        <input
          type="text"
          className="flex-1 rounded-lg border border-indigo-300 px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
          value={editText}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEditText(e.target.value)}
          onBlur={handleSave}
          onKeyDown={handleKeyDown}
          autoFocus
        />
      ) : (
        <span
          onDoubleClick={() => setIsEditing(true)}
          className={`flex-1 cursor-pointer select-none text-sm transition-colors ${
            todo.completed ? 'text-gray-400 line-through' : 'text-gray-800'
          }`}
        >
          {todo.text}
        </span>
      )}

      {/* Actions */}
      <div className="flex items-center gap-1">
        {!isEditing && (
          <button
            type="button"
            onClick={() => {
              setEditText(todo.text);
              setIsEditing(true);
            }}
            className="rounded-lg p-1.5 text-gray-400 transition-colors hover:bg-indigo-50 hover:text-indigo-600"
            aria-label="Edit todo"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
              />
            </svg>
          </button>
        )}
        <button
          type="button"
          onClick={() => onDelete(todo.id)}
          className="rounded-lg p-1.5 text-gray-400 transition-colors hover:bg-red-50 hover:text-red-500"
          aria-label="Delete todo"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </button>
      </div>
    </li>
  );
}
