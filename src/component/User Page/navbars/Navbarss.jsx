import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { removeTokenFromLocalStorage } from "../../../lib/common";
import { APP_ROUTES } from "../../../utils/constants";
import { useUser } from "../../../lib/customHooks";

function Navbarss() {
  const [shownotf, setShownotf] = useState(false);

  const { user, authenticated } = useUser();

   const navigate = useNavigate();

   const handleLogout = () => {
     removeTokenFromLocalStorage();
     authenticated(true);
     navigate(APP_ROUTES.SIGN_IN);
   };
  function handleSignUp() {
    navigate("/profile");
  }
    function handleSignout() {
      navigate("/");
    }

  return (
    <nav
      className="fixed w-full shadow bg-white border-gray-200 px-4 lg:px-6 py-4 dark:bg-gray-800 z-50 top-0"
      style={{ zIndex: 9999 }}
    >
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
        <a href="https://github.com/davegerim" className="flex items-center">
          <img
            src="/image/zuret.png"
            className="mr-3 h-12 w-24"
            alt=" Zuret Tour"
          />
        </a>
        <div className="flex items-center lg:order-2">
          {authenticated ? (
            <button
              className="text-white bg-rose-900 border hover:border-rose-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              onClick={() => {
     navigate(APP_ROUTES.SIGN_IN);
      

                removeTokenFromLocalStorage();
              }}
            >
              Log out
            </button>
          ) : (
            <>
              <button
                className="text-white bg-rose-900 border hover:border-rose-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                onClick={handleSignUp}
              >
                Sign Up
              </button>
              <button
                href="/login"
                className="text-rose-900 hover:text-white border border-rose-900 hover:bg-rose-900 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                onClick={() => {
                  removeTokenFromLocalStorage();
                  navigate(APP_ROUTES.SIGN_IN);
                }}
              >
                Log in
              </button>
            </>
          )}
        </div>

        <div
          className={`${
            !shownotf && "hidden"
          } justify-between items-center w-full lg:flex lg:w-auto lg:order-1 id="mobile-menu-2"`}
        >
          <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            <li>
              <a
                href="/"
                className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-rose-900 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/Trip"
                className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-rose-900 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
              >
                Trip
              </a>
            </li>
            <li>
              <a
                href="/hotel"
                className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-rose-900 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
              >
                Hotel
              </a>
            </li>
            <li>
              <a
                href="/flight"
                class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-rose-900 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
              >
                Flight
              </a>
            </li>

            <li>
              <a
                href="/contactus"
                class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-rose-900 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbarss;
