import { api } from "./api";

export const getNotifications = async (token) => {
  const res = await api.get("/notifications/retailer", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};
