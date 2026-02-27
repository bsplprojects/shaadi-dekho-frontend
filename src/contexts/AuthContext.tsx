import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { api } from "@/lib/axios";
import { useMe } from "@/features/auth/hook";

interface User {
  id: string;
  email: string;
  phone: string;
  onboarded?: boolean;
  isEmailVerified?: boolean;
  lastLoginAt?: Date;
}

interface AuthContextType {
  user: User | null;
  setUser: (data: User | null) => void;
  isAuthenticated: boolean;
  setIsAuthenticated: (data: boolean) => void;
  onboarded: boolean;
  completeOnboarding: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const { data } = useMe();

  useEffect(() => {
    setUser(data?.data || null);
    setIsAuthenticated(!!data?.data);
  }, [data]);

  const completeOnboarding = () => {
    if (user) setUser({ ...user, onboarded: true });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        setIsAuthenticated,
        isAuthenticated: !!user,
        onboarded: user?.onboarded || false,
        completeOnboarding,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};
