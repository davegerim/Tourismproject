import axios from "axios";
import React, { useState } from "react";
import { BsCheckCircle } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { storeTokenInLocalStorage } from "../../lib/common";
import { useUser } from "../../lib/customHooks";
import { API_ROUTES, APP_ROUTES } from "../../utils/constants";
import { useAuthDispatch, doLogin } from "../../context/index";
import Loading from "./Loading";

function Login() {
  const dispatch = useAuthDispatch();

  const navigate = useNavigate();
  const { user, authenticated } = useUser();
  // if (user === "user" && authenticated) {
  //   navigate(APP_ROUTES.DASHBOARD);
  // } else {
  //   navigate(APP_ROUTES.SIGN_UP);
  // }
  console.log(user, authenticated);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorr, setError] = useState(false);
  const [message, setMessage] = useState(false);
  const [messagepass, setMessagepass] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  console.log(isLoading);

  const signIn = async () => {
    doLogin(dispatch, {
      username: email,
      password,
    });
    try {
      setIsLoading(true);
      const response = await axios({
        method: "post",
        url: API_ROUTES.SIGN_IN,
        data: {
          username: email,
          password,
        },
      });
      console.log(response);
      if (!response?.data?.data?.access_token) {
        console.log("Something went wrong during signing in: ", response);
        return;
      }
      storeTokenInLocalStorage(response?.data?.data?.access_token);
      if (response && response?.data?.data?.role === "user")
        navigate(APP_ROUTES.DASHBOARD);
      else if (response && response?.data?.data?.role === "admin")
        navigate(APP_ROUTES.SIGN_UP);
    } catch (err) {
      setMessagepass("please insert the correct login");
      console.log("Some error occured during signing in: ", err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.length === 0 || password.length <= 6) {
      setError(true);
    }
    if (email && password) {
      signIn();
    }

    const rgExp = /^[a-zA-Z0-9._]+@[a-z]+\.[a-z]{2,6}$/;
    if (rgExp.test(email)) {
      setMessage("");
    } else if (email === "") {
      setMessage("");
    } else if (!rgExp.test(email)) {
      setMessage("email is not valid");
    } else {
      setMessage("");
    }
  };
  return (
    <div>
      <div>{isLoading ? <Loading /> : ""}</div>
      <div class="relative min-h-screen flex ">
        <div class="flex flex-col sm:flex-row items-center md:items-start sm:justify-center flex-auto min-w-0 bg-white">
          <div class="md:flex md:items-center md:justify-center w-full sm:w-auto md:h-full  xl:w-2/5 p-8  md:p-10 lg:p-14 sm:rounded-lg md:rounded-none bg-white ">
            <div class="max-w-md w-full space-y-8">
              <div class="text-center">
                <div className="items-center inline-block">
                  <img src="./image/zuret.png" className="w-36" alt="" />
                </div>
                <h2 class=" text-2xl font-bold text-gray-900">Welcome Back!</h2>
                <p class="mt-2 text-sm text-gray-500">
                  Please sign in to your account
                </p>
              </div>

              <form class="mt-8 space-y-6" onSubmit={handleSubmit}>
                {/* email  */}

                <div class="relative">
                  {errorr && email.length <= 0 ? (
                    <div class="absolute right-3 mt-4">
                      <BsCheckCircle class="h-4 w-4 text-red-500" />
                    </div>
                  ) : (
                    ""
                  )}
                  <label class="ml-3 text-sm font-bold text-gray-700 tracking-wide">
                    Email{" "}
                  </label>
                  <input
                    class="w-full content-center text-base px-4 py-2 border-b rounded-2xl border-gray-300 focus:outline-none focus:border-green-800"
                    type="email"
                    placeholder="mail@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <p className="font-small text-red-500  px-4">{message}</p>
                </div>
                {/* password */}

                <div class="mt-8 content-center relative">
                  {errorr && password.length <= 6 ? (
                    <div class="absolute right-3 mt-4">
                      <BsCheckCircle class="h-4 w-4 text-red-500" />
                    </div>
                  ) : (
                    ""
                  )}
                  <label class="ml-3 text-sm font-bold text-gray-700 tracking-wide">
                    Password
                  </label>
                  <input
                    class="w-full content-center text-base px-4 py-2 border-b rounded-2xl border-gray-300 focus:outline-none focus:border-green-800"
                    type="password"
                    placeholder="Enter your password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <p className="font-small text-red-500  px-4">{messagepass}</p>
                </div>

                <div class="flex items-center justify-between">
                  {/* remember checkbox */}

                  <div class="flex items-center">
                    <input
                      type="checkbox"
                      class="h-4 w-4 bg-blue-500 focus:ring-blue-400 border-gray-300 rounded"
                    />
                    <label class="ml-2 block text-sm text-gray-900">
                      Remember me
                    </label>
                  </div>

                  {/* forget password */}

                  <div class="text-sm">
                    <a
                      href="/reset"
                      class="text-indigo-400 hover:text-blue-500"
                    >
                      Forgot your password?
                    </a>
                  </div>
                </div>
                <div>
                  {/* button */}
                  <button
                    type="submit"
                    class="w-full flex justify-center bg-gradient-to-r from-rose-800 to-rose-700  hover:bg-gradient-to-l hover:from-rose-600 hover:to-rose-700 text-gray-100 p-4  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
                  >
                    Sign in
                  </button>
                </div>
                <p class="flex flex-col items-center justify-center mt-10 text-center text-md text-gray-500">
                  <span>Don't have an account?</span>
                  <a
                    href="/profile"
                    class="text-indigo-400 hover:text-blue-500 cursor-pointer transition ease-in duration-300"
                  >
                    Sign up
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
