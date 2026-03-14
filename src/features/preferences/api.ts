import { api } from "@/lib/axios";
import { PreferencePayload } from "../profile/types";

export async function addPreference(data: PreferencePayload) {
  const res = await api.post("/profile/preference", data);
  return res.data;
}

export async function getPreferences() {
  const res = await api.get("/profile/preference");
  return res.data;
}
export async function updatePreferences(data: PreferencePayload) {
  const res = await api.put("/profile/preference", data);
  return res.data;
}
