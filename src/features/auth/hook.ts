import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { login, logout, me, register } from "./api";
import { toast } from "@/hooks/use-toast";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export const useMe = () =>
  useQuery({
    queryKey: ["me"],
    queryFn: me,
    retry: false,
    refetchOnWindowFocus: false,
    refetchOnMount: true,
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
          : "Welcome to Shaadi Dekho!",
      });
      client.invalidateQueries({ queryKey: ["me"] });
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
    onSuccess: (data) => {
      client.invalidateQueries({ queryKey: ["me"] });
      if (data?.data?.onBoarded) {
        navigate("/matches");
      } else {
        navigate("/onboarding");
      }
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
  const { setUser } = useAuth();
  const client = useQueryClient();
  const navigate = useNavigate();
  return useMutation({
    mutationFn: logout,
    onSuccess: () => {
      setUser(null);
      client.invalidateQueries({ queryKey: ["me"] });
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
