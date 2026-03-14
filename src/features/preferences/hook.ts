import { useMutation, useQuery } from "@tanstack/react-query";
import { addPreference, getPreferences, updatePreferences } from "./api";
import { toast } from "@/hooks/use-toast";

export const useAddPreference = () =>
  useMutation({
    mutationFn: addPreference,
    onSuccess: (data) => {
      toast({
        description: "Preferences added successfully",
      });
    },
    onError: (err) => {
      toast({
        description: "Failed to add preferences",
      });
    },
  });

export const useGetPreferences = () =>
  useQuery({
    queryKey: ["preferences"],
    queryFn: getPreferences,
  });

export const useUpdatePreference = () =>
  useMutation({
    mutationFn: updatePreferences,
    onSuccess: (data) => {
      toast({
        description: "Preferences updated successfully",
      });
    },
    onError: (err) => {
      toast({
        description: "Failed to update preferences",
      });
    },
  });
