import { useMutation, useQuery } from "@tanstack/react-query";
import {
  addShortlist,
  addViewlist,
  getAllShortlist,
  getAllViewedlist,
  updateShortlistStatus,
} from "./api";
import { toast } from "@/hooks/use-toast";

export const useShortlist = () =>
  useMutation({
    mutationFn: addShortlist,
    onSuccess(data) {
      toast({
        description: "ShortListed successfully",
      });
    },
    onError: (err) => {
      toast({
        description: "Already shortlisted",
      });
    },
  });

export const useGetAllShortlist = () =>
  useQuery({
    queryKey: ["shortlisted"],
    queryFn: getAllShortlist,
  });

export const useUpdateShortlistedStatus = () =>
  useMutation({
    mutationFn: updateShortlistStatus,
    onSuccess(data) {
      toast({
        description: "status updated",
      });
    },
    onError() {
      toast({ description: "Failed to update status" });
    },
  });

export const useViewedList = () =>
  useMutation({
    mutationFn: addViewlist,
    onSuccess() {
      toast({
        description: "Viewed user profile",
      });
    },
  });

export const useGetAllViewedlist = () =>
  useQuery({
    queryKey: ["Viewed"],
    queryFn: getAllViewedlist,
  });
