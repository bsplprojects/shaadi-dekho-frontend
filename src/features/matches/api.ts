import { api } from "@/lib/axios";

export async function addShortlist(id) {
  const res = await api.post(`/shortlist/new/${id}`);
  return res.data;
}

export async function getAllShortlist() {
  const res = await api.get("/shortlist/all");
  return res.data;
}
export async function updateShortlistStatus(data: {
  targetUserId: string;
  status: string;
}) {
  const res = await api.post("/shortlist/updateStatus", {
    targetUserId: data.targetUserId,
    status: data.status,
  });
  return res.data;
}

export async function addViewlist(id) {
  const res = await api.post(`/viewlist/new/${id}`);
  return res.data;
}

export async function getAllViewedlist() {
  const res = await api.get("/viewlist/all");
  return res.data;
}
