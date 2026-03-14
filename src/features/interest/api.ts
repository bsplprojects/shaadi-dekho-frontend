import { api } from "@/lib/axios";

export async function addInterest(data: string) {
  const res = await api.post("/interest/new", { id: data });
  return res.data;
}
export async function getAllInterest() {
  const res = await api.get("/interest/getAllInterest");
  return res.data;
}
