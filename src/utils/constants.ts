// const API_URL = `${apiUrl}";
const API_URL = process.env.REACT_APP_API_URL;
export const API_ROUTES = {
  SIGN_UP: `${API_URL}/auth/signup`,
  SIGN_IN: `${API_URL}/auth/login`,
  GET_USER: `${API_URL}/auth/me`,
};

export const APP_ROUTES = {
  SIGN_UP: "/signup",
  SIGN_IN: "/login",
  DASHBOARD: "/",
  LANDING: "/landingpage",
};
