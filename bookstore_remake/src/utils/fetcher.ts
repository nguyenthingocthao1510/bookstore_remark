const API_BASE = process.env.REACT_APP_API_URL || "";

const fetcher = (url: string) => {
  const fullUrl = url.startsWith("http") ? url : `${API_BASE}${url}`;
  return fetch(fullUrl).then((res) => {
    if (!res.ok) throw new Error("Network response is not work!");
    return res.json();
  });
};

export default fetcher;