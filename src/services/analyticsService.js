import { api } from "./api";

export const getRetailerAnalytics = async (token) => {
  const res = await api.get("/analytics/retailer", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.data;
};
