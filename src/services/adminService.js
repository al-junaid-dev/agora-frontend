import { api } from "./api";

export const getPendingProducts = async (token) => {
  const res = await api.get("/admin/products/pending", {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

export const approveProduct = async (id, token) => {
  const res = await api.put(
    `/admin/products/${id}/approve`,
    {},
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return res.data;
};
