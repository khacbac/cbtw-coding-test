import { API_URL } from "@/config";
import { apiFetch } from "../base";

export const searchGifs = async (query: string) => {
  const response = await apiFetch(`${API_URL}/search`, {});
  return response;
};

export const getTrendingGifs = async () => {
  const response = await apiFetch(`${API_URL}/trending`, {});
  return response;
};
