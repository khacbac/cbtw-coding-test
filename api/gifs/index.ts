import { API_KEY, API_URL } from "@/config";
import { ApiArrayResponse, apiFetch } from "../base";
import { GifDetail } from "../type";

export const searchGifs = async (query: string) => {
  const api = `${API_URL}/search?api_key=${API_KEY}`;
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
  console.log({ api });
  const response = await apiFetch<ApiArrayResponse<GifDetail>>(api, {});
  return response;
};
