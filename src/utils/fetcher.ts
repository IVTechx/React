export const fetcher = async <T>(...args: [RequestInfo, RequestInit?]): Promise<T> => {
  const res = await fetch(...args);
  if (!res.ok) {
    const error = new Error("An error occured while fetching the data");
    (error as any).info = await res.json();
    (error as any).status = res.status;
  }
  return res.json();
};
