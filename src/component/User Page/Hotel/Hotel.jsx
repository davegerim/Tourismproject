import React, { useEffect, useRef, useState } from "react";
import Navbarss from "../navbars/Navbarss";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Hotel() {
  const [choose, setChoose] = useState(false);
  const [files, setFiles] = useState([]);
  const [abel, setAbel] = useState([]);
  const ref = useRef();
  useEffect(() => {
    axios.get(`http://localhost:3000/hotel`).then((res) => {
      setFiles(res.data);
      console.log("get");
    });
  }, []);

  const navigate = useNavigate();
  function next() {
    navigate("/hoteldetail");
  }
  function hotel(id) {
    navigate(`/hoteldetail/${id}`);
  }

  return (
    <>
      <Navbarss />
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
              placeholder="Search any hotel..."
              required
              onChange={(e) => setAbel(e.target.value)}
            />
          </div>
        </form>
      </div>
      <h2 class="mb-8 :mb-16 text-3xl text-gray-700 tracking-tight leading-tight text-center  dark:text-white md:text-4xl">
        Best Hotels to reserve
      </h2>

      <div class="grid grid-cols-1 h-full md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {files
          .filter((user) => user.hotelName.toLowerCase().includes(abel))
          .map((user) => {
            return (
              <div class="cursor-pointer rounded-xl bg-white p-3 shadow-lg hover:shadow-xl">
                <div class="relative flex items-end overflow-hidden rounded-xl">
                  <img
                    src={user?.image.replace(/\\/g, "").replace(/"/g, "")}
                    h-10
                    w-10
                    alt="wallpaper"
                  />

                  <div class="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 text-yellow-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>

                    <span class="ml-1 text-sm text-slate-400">4.9</span>
                  </div>
                </div>

                <div class="mt-1 p-2" key={user.id}>
                  <h2 class="text-slate-700"> {user.hotelName}</h2>
                  <p class="mt-1 text-sm text-slate-400">{user.description}</p>

                  <div className="mt-5 text-right md:space-x-3 md:block flex flex-col-reverse">
                    <button
                      className="mb-2 md:mb-0 bg-rose-900 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-2xl hover:shadow-lg "
                      type="submit"
                      onClick={() => hotel(user.id)}
                    >
                      Select Room
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default Hotel;
