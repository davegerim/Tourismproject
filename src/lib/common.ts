import { API_ROUTES } from "../utils/constants";
import axios from "axios";

/**
 *
 * @param token a token retrived from the server
 * Stores the token to local storage
 */
export function storeTokenInLocalStorage(token: string) {
  localStorage.setItem("token", token);
}

/**
 *
 * @returns
 * returns the stored token from locale storage
 */
export function getTokenFromLocalStorage() {
  return localStorage.getItem("token");
}

/**
 *
 * @returns
 * removes the token from local storage
 */
export function removeTokenFromLocalStorage() {
  return localStorage.removeItem("token");
}

/**
 *
 * @returns
 * returns autheticated user from the back end when there is a stored token on the locale storage
 */
export async function getAuthenticatedUser() {
  const defaultReturnObject = { authenticated: false, user: null };
  try {
    const token = getTokenFromLocalStorage();
    if (!token) {
      return defaultReturnObject;
    }
    const response = await axios({
      method: "GET",
      url: API_ROUTES.GET_USER,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const { authenticated = false } = response.data;
    return authenticated ? response.data : false;
  } catch (err) {
    console.log("getAuthenticatedUser, Something Went Wrong", err);
    return defaultReturnObject;
  }
}
