import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { login, logout, me, register } from "./api";
import { toast } from "@/hooks/use-toast";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export const useMe = () =>
  useQuery({
    queryKey: ["me"],
    queryFn: me,
  });

export const useRegister = () => {
  const navigate = useNavigate();
  const client = useQueryClient();
  return useMutation({
    mutationFn: register,
    onSuccess: (data) => {
      toast({
        title: data.message,
        description: data?.data?.email
          ? "We have sent you an email to verify your account. Please check your inbox."
          : "Welcome to Vivah Bandhan!",
      });
      client.invalidateQueries(["me"]);
      navigate("/onboarding");
    },
    onError: (error: any) => {
      toast({
        title: error.response.data.message,
        description: "Please register with correct credentials",
      });
    },
  });
};

export const useLogin = () => {
  const client = useQueryClient();
  const navigate = useNavigate();
  return useMutation({
    mutationFn: login,
    onSuccess: () => {
      client.invalidateQueries(["me"]);
      navigate("/matches");
    },
    onError: (error: any) => {
      toast({
        title: error.response.data.message,
        description: "Please login with correct credentials",
      });
    },
  });
};

export const useLogout = () => {
  const { setIsAuthenticated, setUser } = useAuth();
  const client = useQueryClient();
  const navigate = useNavigate();
  return useMutation({
    mutationFn: logout,
    onSuccess: () => {
      setIsAuthenticated(false);
      setUser(null);
      client.invalidateQueries(["me"]);
      navigate("/auth?mode=login");
    },
    onError: (error: any) => {
      toast({
        title: error.response.data.message,
        description: "Please try again later",
      });
    },
  });
};
