import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

type Role = 'buyer' | 'seller' | null;

interface User {
  id: string;
  name: string;
  role: Role;
  email: string;
}

interface AuthContextType {
  user: User | null;
  login: (role: Role, name: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const login = (role: Role, name: string) => {
    setUser({
      id: Math.random().toString(36).substr(2, 9),
      name,
      role,
      email: `${name.toLowerCase().replace(/\s/g, '')}@example.com`,
    });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
