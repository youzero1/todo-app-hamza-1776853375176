-- Create the todos table
CREATE TABLE IF NOT EXISTS todos (
  id TEXT PRIMARY KEY,
  text TEXT NOT NULL,
  completed BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE todos ENABLE ROW LEVEL SECURITY;

-- Allow anonymous users to SELECT all todos
CREATE POLICY "todos_anon_select" ON todos
  FOR SELECT TO anon USING (true);

-- Allow anonymous users to INSERT todos
CREATE POLICY "todos_anon_insert" ON todos
  FOR INSERT TO anon WITH CHECK (true);

-- Allow anonymous users to UPDATE todos
CREATE POLICY "todos_anon_update" ON todos
  FOR UPDATE TO anon USING (true) WITH CHECK (true);

-- Allow anonymous users to DELETE todos
CREATE POLICY "todos_anon_delete" ON todos
  FOR DELETE TO anon USING (true);
