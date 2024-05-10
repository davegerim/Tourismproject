import React, { useEffect, useState } from "react";
import "animate.css";
import Navbarss from "../navbars/Navbarss";
import axios from "axios";

import { Link, useNavigate, useParams } from "react-router-dom";
import Loading from "../../Basic/Loading";
function Main() {
  const [files, setFiles] = useState([]);
  const [abel, setAbel] = useState([]);
  const Navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios.get("http://localhost:3000/cities").then((res) => {
      setFiles(res.data);
      console.log("get");
      setIsLoading(false);
    });
  }, []);

  function city() {
    console.log("getto");
    // console.log(id);
    // Navigate(`/attraction/${id}`);
  }

  return (
    <div className="fixed">
      <Navbarss />
      <div>{isLoading ? <Loading /> : ""}</div>

      <div className="px-20 ">
        <div className="mt-20  mr-20 ml-20">
          <form class="flex items-center pt-10 pb-5 ml-20 ">
            <label for="voice-search" class="sr-only ">
              Search
            </label>
            <div class="relative w-full">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                id="voice-search"
                class="  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search any travel places..."
                required
                onChange={(e) => setAbel(e.target.value)}
              />
            </div>
          </form>
        </div>
        <div className="pb-8">
          <h1 className="text-2xl mt-7 text-black font-extrabold">
            Where To go, Right Now
          </h1>
        </div>
        <div
          className=" animate__animated grid grid-cols-3 gap-4
                 animate__pulse animate__delay-1s animate__infinite md:flex flex-row md:space-x-4 w-full text-xs mt-8  
                 "
        >
          {files
            .filter((user) => user.cityName.toLowerCase().includes(abel))

            .map((user) => {
              return (
                <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-full flex flex-col mb-3 animate__animated animate__backInRight hover:shadow-2xl">
                  <a href="/">
                    <img
                      class="rounded-t-lg h-56 w-96 ..."
                      src={
                        user?.image
                          ? user.image.replace(/\\/g, "").replace(/"/g, "")
                          : ""
                      }
                      alt=""
                    />
                  </a>
                  <div class="p-5" key={user.id}>
                    <a href="/">
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {user.cityName}
                      </h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      {user.description}
                    </p>
                    <Link
                      type="submit"
                      z
                      to={`/attraction/${user.id}`}
                      class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-rose-900 rounded-lg hover:bg-rose-800 focus:ring-4 focus:outline-none "
                    >
                      Read more
                      <svg
                        aria-hidden="true"
                        class="w-4 h-4 ml-2 -mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Main;
