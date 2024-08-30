import { HttpMethod } from "./Constants";
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

type ApiReturn<T> = {
  data: T;
  message: string
}

interface FetchData<T> {
  data?: T;
  notify: () => void;
  success: boolean;
}

const _fetch = <T>(
  url: string,
  options: { method?: HttpMethod; body?: any } = { method: HttpMethod.Get }
): Promise<FetchData<T>> => {
  return fetch(`${import.meta.env.VITE_API_BASE_URL}/${url}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else{
        return response.json().then((errorData) => {
          return Promise.reject({ status: response.status, ...errorData });
        });
      }
    })
    .then((data: ApiReturn<T>) => {
      const notify = () => {
        const successMessage = data?.message || "Success"
        toast.success(successMessage, {
          position: "top-center"
        });
      }
      return { data: data.data, notify, success: true }
    })
    .catch((err: ApiReturn<T>) => {
      const notify = () => {
        toast.error(err.message, {
          position: "top-center"
        });
      }
      return { notify, success: false }
    });
};

export default _fetch;
