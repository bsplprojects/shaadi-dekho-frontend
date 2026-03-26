import { toast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { addContact } from "./api";

export const useContact = () =>
  useMutation({
    mutationFn: addContact,
    onSuccess() {
      toast({
        description: "Contact submitted successfully",
      });
    },
  });
