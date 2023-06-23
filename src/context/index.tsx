import React, { createContext, useContext, useReducer } from "react";

// import history from "./history";
import axios from "axios";
import { API_ROUTES, APP_ROUTES } from "../utils/constants";
import { useUser } from "../lib/customHooks";

const AuthStateContext = createContext(null);
const AuthDispatchContext = createContext(null);
interface AuthState {
  status: string;
  user: any;
  error: any;
}

const initialState: AuthState = {
  status: "idle",
  user: null,
  error: null,
};

function reducer(currentState: AuthState, newState: Partial<AuthState>) {
  return { ...currentState, ...newState };
}

function useAuthState() {
  const context = useContext(AuthStateContext);
  if (!context) throw new Error("useAuthState must be used in AuthProvider");

  return context;
}

function useAuthDispatch() {
  const context = useContext(AuthDispatchContext);
  if (!context) throw new Error("useAuthDispatch must be used in AuthProvider");

  return context;
}

function AuthProvider(props: {
  children:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
}) {
  const { user } = useUser();
  const [state, dispatch] = useReducer<any>(reducer, {
    ...initialState,
    user,
  }) as unknown as any;

  return (
    <AuthStateContext.Provider value={state as any}>
      <AuthDispatchContext.Provider value={dispatch as any}>
        {props.children}
      </AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  );
}

async function doLogin(
  dispatch: (arg0: { status: string; user?: any; error?: unknown }) => void,
  user: any
) {
  try {
    dispatch({ status: "pending" });

    const result = await axios.post(API_ROUTES.SIGN_IN, user);
    console.log({ result });

    return dispatch({
      status: "resolved",
      user: result?.data?.data,
      error: null,
    });
  } catch (error) {
    dispatch({ status: "rejected", error });
  }
}

function doLogout(
  dispatch: (arg0: { status: string; user: null; error: null }) => void
) {
  dispatch(initialState);
  // return history.push(APP_ROUTES.SIGN_IN);
}

export { AuthProvider, useAuthState, useAuthDispatch, doLogin, doLogout };
