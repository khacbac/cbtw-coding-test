import { API_KEY, API_URL } from "@/config";
import { ApiArrayResponse, apiFetch } from "../base";
import { GifDetail } from "../type";

export const searchGifs = async ({
  offset = 0,
  limit = 1,
  query,
}: {
  offset?: number;
  limit?: number;
  query: string;
}) => {
  const api = `${API_URL}/search?api_key=${API_KEY}&q=${query}&offset=${offset}&limit=${limit}`;
  const response = await apiFetch<ApiArrayResponse<GifDetail>>(api, {});
  return response;
};

export const getTrendingGifs = async ({
  offset = 0,
  limit = 1,
}: {
  offset?: number;
  limit?: number;
}) => {
  const api = `${API_URL}/trending?api_key=${API_KEY}&offset=${offset}&limit=${limit}`;
  const response = await apiFetch<ApiArrayResponse<GifDetail>>(api, {});
  return response;
};
