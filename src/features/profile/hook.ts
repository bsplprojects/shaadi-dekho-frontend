import { useMutation, useQuery } from "@tanstack/react-query";
import {
  createProfile,
  updateProfile,
  deleteProfile,
  getProfile,
  getAllProfiles,
  checkStatus,
  myProfile,
  addHoroscope,
} from "./api";
import { toast } from "@/hooks/use-toast";

export const useCreateProfile = () =>
  useMutation({
    mutationFn: createProfile,
    onError: (error: any) => {
      toast({
        title: error.response.data.message,
        description: "Please try again later",
      });
    },
  });

export const useUpdateProfile = () =>
  useMutation({
    mutationFn: updateProfile,
    onSuccess: (data) => {
      toast({
        title: data.message,
        description: "Changes have been saved",
      });
    },
    onError: (error: any) => {
      toast({
        title: error.response.data.message,
        description: "Please try again later",
      });
    },
  });

export const useDeleteProfile = () =>
  useMutation({
    mutationFn: deleteProfile,
    onError: (error: any) => {
      toast({
        title: error.response.data.message,
        description: "Please try again later",
      });
    },
  });

export const useGetProfile = (id: string) =>
  useQuery({
    queryKey: ["profile"],
    queryFn: () => getProfile(id),
  });

export const useMyProfile = () => {
  return useQuery({
    queryKey: ["my-profile"],
    queryFn: myProfile,
  });
};

export const useGetProfiles = () =>
  useQuery({
    queryKey: ["profiles"],
    queryFn: getAllProfiles,
  });

export const useProfileStatus = () => {
  return useQuery({
    queryKey: ["profile-status"],
    queryFn: checkStatus,
  });
};

export const useAddHoroscope = () => {
  return useMutation({
    mutationFn: addHoroscope,
    onSuccess: (data) => {
      toast({
        title: data.message,
        description: "",
      });
    },
  });
};
