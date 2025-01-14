const defaultHeaders = {
  "Content-Type": "application/json",
};

const defaultOptions: RequestInit = {
  method: "GET",
  headers: defaultHeaders,
};

const SUCCESS_STATUS = 200;

export type LoadingStatus =
  | "loading"
  | "loaded"
  | "error"
  | "refreshing"
  | "loadmore";

export type Pagination = {
  total_count: number;
  count: number;
  offset: number;
};

export type Meta = {
  status: number;
  msg: string;
  response_id: string;
};

export type ApiArrayResponse<T> = {
  data: T[];
  pagination: Pagination;
  meta: Meta;
};

export const apiFetch = async <T>(url: string, options: RequestInit) => {
  const response = await fetch(url, {
    ...defaultOptions,
    ...options,
  });
  const data = await response.json();
  if (response.status !== SUCCESS_STATUS) {
    throw new Error(data.msg);
  }
  return data as T;
};

export const apiPost = async <T>(url: string, options: RequestInit) => {
  const response = await fetch(url, {
    ...defaultOptions,
    method: "POST",
    ...options,
  });
  const data = await response.json();
  if (response.status !== SUCCESS_STATUS) {
    throw new Error(data.msg);
  }
  return data as T;
};

export const apiPut = async <T>(url: string, options: RequestInit) => {
  const response = await fetch(url, {
    ...defaultOptions,
    method: "PUT",
    ...options,
  });
  const data = await response.json();
  if (response.status !== SUCCESS_STATUS) {
    throw new Error(data.msg);
  }
  return data as T;
};

export const apiDelete = async <T>(url: string, options: RequestInit) => {
  const response = await fetch(url, {
    ...defaultOptions,
    method: "DELETE",
    ...options,
  });
  const data = await response.json();
  if (response.status !== SUCCESS_STATUS) {
    throw new Error(data.msg);
  }
  return data as T;
};
