'use client';

import { createContext, useContext, ReactNode } from 'react';

// Placeholder type for Supabase client - replace with actual type when @supabase/supabase-js is installed
type SupabaseClient = {
  auth: unknown;
  from: (table: string) => unknown;
};

// Create context for Supabase client
const SupabaseContext = createContext<SupabaseClient | null>(null);

// Mock Supabase client for demo purposes
// Replace with actual createClient call when @supabase/supabase-js is installed
const supabase: SupabaseClient = {
  auth: {},
  from: () => ({}),
};

interface SupabaseProviderProps {
  children: ReactNode;
}

export function SupabaseProvider({ children }: SupabaseProviderProps) {
  return <SupabaseContext.Provider value={supabase}>{children}</SupabaseContext.Provider>;
}

export function useSupabase() {
  const context = useContext(SupabaseContext);
  if (!context) {
    throw new Error('useSupabase must be used within a SupabaseProvider');
  }
  return context;
}

export { SupabaseContext };
