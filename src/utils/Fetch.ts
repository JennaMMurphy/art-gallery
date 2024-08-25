import { HttpMethod } from "./Constants";

const _fetch = <T>(
  url: string,
  options: { method?: HttpMethod; body?: any } = { method: HttpMethod.Get }
): Promise<T> => {
  return fetch(`${import.meta.env.VITE_API_BASE_URL}/${url}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json'
  }
  })
    .then((response) => response.json())
    .then((data: T) => {
      return data;
    })
    .catch((err) => {
      console.error(err.message);
      throw err;
    });
};

export default _fetch;
