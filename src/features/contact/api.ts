import { api } from "@/lib/axios";
import { contactPayload } from "./types";

export async function addContact(data:contactPayload) {
  const res = await api.post("/contact/create", data);
  return res.data;
}
