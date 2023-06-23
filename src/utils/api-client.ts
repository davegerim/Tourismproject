import { getTokenFromLocalStorage } from "../lib/common";

function client(endpoint: any, { body, ...customConfig } = {} as any) {
  const token = getTokenFromLocalStorage();
  const headers: any = { "content-type": "application/json" };
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  const config: any = {
    method: body ? "POST" : "GET",
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers,
    },
  };
  if (body) {
    config.body = JSON.stringify(body);
  }

  return window
    .fetch(`${process.env.REACT_APP_API_URL}/${endpoint}`, config)
    .then((r) => r.json());
}

export default client;
