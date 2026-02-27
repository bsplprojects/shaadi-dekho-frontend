import { api } from "../../lib/axios";
import { authPayload } from "./types";

export const register = async (data: authPayload) => {
  const res = await api.post("/auth/register", data);
  return res.data;
};

export const login = async (data: authPayload) => {
  const res = await api.post("/auth/login", data);
  return res.data;
};

export const logout = async () => {
  const res = await api.post("/auth/logout");
  return res.data;
};

export const me = async () => {
  const res = await api.get("/auth/me");
  return res.data;
};
