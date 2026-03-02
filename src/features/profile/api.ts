import { api } from "../../lib/axios";
import { HoroscopePayload } from "./types";

export const createProfile = async (data: FormData) => {
  const res = await api.post("/profile/new", data);
  return res.data;
};

export const getProfile = async (id: string) => {
  const res = await api.get(`/profile/${id}`);
  return res.data;
};

export const updateProfile = async ({
  id,
  data,
}: {
  id: string;
  data: FormData;
}) => {
  const res = await api.patch(`/profile/${id}`, data);
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

export const myProfile = async () => {
  const res = await api.get(`/profile/me`);
  return res.data;
};

export const addHoroscope = async (data: HoroscopePayload) => {
  const res = await api.post(`/profile/horoscope`, data);
  return res.data;
};
