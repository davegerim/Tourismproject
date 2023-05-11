import React, { useEffect, useState } from "react";
import "animate.css";
import Navbarss from "../navbars/Navbarss";
import axios from "axios";
function Main() {
  const [files, setFiles] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/cities").then((res) => {
      setFiles(res.data);
      console.log("get");
    });
  }, []);
  return (
    <div className="">
      <Navbarss />
      <div className="px-10">
        <div className="pb-8">
          <h1 className="text-2xl text-black font-extrabold">
            Where To go, Right Now
          </h1>
        </div>
        <div className="md:flex flex-row md:space-x-4 w-full text-xs mt-8">
          {files.map((user) => {
            return (
              <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-full flex flex-col mb-3 animate__animated animate__backInRight">
                <a href="/">
                  <img
                    class="rounded-t-lg object-fill h-auto w-96 ..."
                    src="https://brilliant-ethiopia.imgix.net/fasil-ghebbi-royal-enclosure-gondar-4.jpg?auto=format,enhance,compress&fit=crop&crop=entropy,faces,focalpoint&w=580&h=480&q=40"
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
                  <a
                    href="/Details"
                    class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
                  </a>
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
