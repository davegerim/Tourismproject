// const API_URL = "http://localhost:3000";
const API_URL = process.env.REACT_APP_API_URL;
export const API_ROUTES = {
  SIGN_UP: `${API_URL}/auth/signup`,
  SIGN_IN: `${API_URL}/auth/login`,
  GET_USER: `${API_URL}/auth/me`,
};

export const APP_ROUTES = {
  SIGN_UP: "/dashboard",
  SIGN_IN: "/login",
  DASHBOARD: "/",
};
