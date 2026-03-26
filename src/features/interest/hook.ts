import { toast } from "@/hooks/use-toast";
import { useMutation, useQuery } from "@tanstack/react-query";
import { addInterest, getAllInterest, updateInterestStatus } from "./api";

export const useInterest = () =>
  useMutation({
    mutationFn: addInterest,
    onSuccess(data) {
      toast({
        description: "Interest send successfully",
      });
    },
    onError: (err) => {
      toast({
        description: "Interest already sent",
      });
    },
  });

export const useGetAllInterest = () =>
  useQuery({
    queryKey: ["interests"],
    queryFn: getAllInterest,
  });

export const useUpdateInterestStatus = () =>
  useMutation({
    mutationFn: updateInterestStatus,
    onSuccess(data) {
      toast({
        description: "Interest status updated",
      });
    },
    onError() {
      toast({ description: "Failed to update status" });
    },
  });
