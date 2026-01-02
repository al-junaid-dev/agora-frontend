import { api } from "./api";

export const searchProducts = async ({
  query,
  minPrice,
  maxPrice,
  maxDistance,
}) => {
  const response = await api.get("/products/search", {
    params: {
      q: query,
      minPrice,
      maxPrice,
      maxDistance,
    },
  });

  return response.data;
};


export const addProduct = async (product, token) => {
  const response = await api.post("/products", product, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};
