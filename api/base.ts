const defaultHeaders = {
  "Content-Type": "application/json",
};

const defaultOptions: RequestInit = {
  method: "GET",
  headers: defaultHeaders,
};

export const apiFetch = async (url: string, options: RequestInit) => {
  const response = await fetch(url, {
    ...defaultOptions,
    ...options,
  });
  const data = await response.json();
  return data;
};

export const apiPost = async (url: string, options: RequestInit) => {
  const response = await fetch(url, {
    ...defaultOptions,
    method: "POST",
    ...options,
  });
  const data = await response.json();
  return data;
};

export const apiPut = async (url: string, options: RequestInit) => {
  const response = await fetch(url, {
    ...defaultOptions,
    method: "PUT",
    ...options,
  });
  const data = await response.json();
  return data;
};

export const apiDelete = async (url: string, options: RequestInit) => {
  const response = await fetch(url, {
    ...defaultOptions,
    method: "DELETE",
    ...options,
  });
  const data = await response.json();
  return data;
};
