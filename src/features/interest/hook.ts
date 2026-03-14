import { toast } from "@/hooks/use-toast";
import { useMutation, useQuery } from "@tanstack/react-query";
import { addInterest, getAllInterest } from "./api";

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
