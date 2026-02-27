import { api } from "../../lib/axios";
import { profilePayload } from "./types";

export const createProfile = async (data: FormData) => {
  const res = await api.post("/profile/new", data);
  return res.data;
};

export const getProfile = async (id: string) => {
  const res = await api.get(`/profile/${id}`);
  return res.data;
};

export const updateProfile = async (id: string) => {
  const res = await api.patch(`/profile/${id}`);
  return res.data;
};

export const deleteProfile = async (id: string) => {
  const res = await api.get(`/profile/${id}`);
  return res.data;
};

export const getAllProfiles = async () => {
  const res = await api.get(`/profile/all`);
  return res.data;
};

export const checkStatus = async () => {
  const res = await api.get(`/profile/status`);
  return res.data;
};
