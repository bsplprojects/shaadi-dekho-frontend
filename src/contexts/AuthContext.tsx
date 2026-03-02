import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { useMe } from "@/features/auth/hook";

interface User {
  _id: string;
  email: string;
  name?: string;
  phone: string;
  onboarded?: boolean;
  isEmailVerified?: boolean;
  lastLoginAt?: Date;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  authChecked: boolean;
  setUser: (data: User | null) => void;
  completeOnboarding: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [authChecked, setAuthChecked] = useState(false);

  const { data, isLoading, isError } = useMe();

  useEffect(() => {
    if (isLoading) return;

    if (data?.data) {
      setUser(data.data);
    } else {
      setUser(null);
    }

    setAuthChecked(true);
  }, [data, isLoading]);

  const completeOnboarding = () => {
    if (user) setUser({ ...user, onboarded: true });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        authChecked,
        setUser,
        completeOnboarding,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
};
