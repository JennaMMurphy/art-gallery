
const _fetch = <T>(url: string): Promise<T>=> {
    return fetch(`${import.meta.env.VITE_API_BASE_URL}/${url}`)
      .then((response) => response.json())
      .then((data: T) => {
        return data;
      })
      .catch((err) => {
        console.error(err.message);
        throw err;
      });
  };

export default _fetch