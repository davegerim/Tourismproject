import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function HotelList() {
  const [files, setFiles] = useState([]);
  const [abel, setAbel] = useState([]);
  const [choose, setChoose] = useState(false);
  const ref = useRef();
  const Navigate = useNavigate();
  function go() {
    Navigate("/addhotel");
  }
  function getUsers() {
    axios.get("http://localhost:3000/hotel").then((res) => {
      setFiles(res.data);
    });
  }
  const deleted = (id, e) => {
    e.preventDefault();
    axios.delete(`http://localhost:3000/hotel/${id}`).then((res) => {
      console.log("delete", res);
      getUsers();
    });
  };
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="px-8 mt-20 py-8">
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <div className="flex mb-8">
          <div className="flex-1">
            <h1 className="font-medium"> Hotel list</h1>
          </div>
          <div>
            <button
              className="mb-2 md:mb-0 border   border-gray-700 hover:border-none hover:bg-rose-900 px-5 py-2 text-sm shadow-sm font-small tracking-wider text-white bg-rose-900 hover:text-white  rounded-xl hover:shadow-lg "
              onClick={go}
            >
              Add Place
            </button>
          </div>
        </div>
        <div className="flex flex-col">
          <input
            type="text"
            id="name"
            placeholder="search any city name"
            class="mt-2 bg-gray-50 border mb-6 border-gray-300 text-gray-900 text-sm rounded-lg w-60 p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:border-purple-400 "
            onChange={(e) => setAbel(e.target.value)}
          />
        </div>
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-200 uppercase bg-rose-900 dark:bg-rose-900 dark:text-gray-400">
            <tr>
              <th scope="col" class="p-4">
                <div class="flex items-center">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label for="checkbox-all-search" class="sr-only">
                    checkbox
                  </label>
                </div>
              </th>
              <th scope="col" class="px-6 py-3">
                Name
              </th>
              <th scope="col" class="px-6 py-3">
                Description
              </th>
              <th scope="col" class="px-6 py-3">
                Status
              </th>
              <th scope="col" class="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {files &&
              files
                // .slice(4)
                .filter((user) => user.hotelName.toLowerCase().includes(abel))

                .map((user) => {
                  return (
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <td class="w-4 p-4">
                        <div class="flex items-center">
                          <input
                            id="checkbox-table-search-1"
                            type="checkbox"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label for="checkbox-table-search-1" class="sr-only">
                            checkbox
                          </label>
                        </div>
                      </td>
                      <th
                        scope="row"
                        class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        <img
                          class="w-10 h-10 rounded-full"
                          src={user?.image.replace(/\\/g, "").replace(/"/g, "")}
                          alt=""
                        />
                        <div class="pl-3" key={user.id}>
                          <div class="text-base font-semibold">
                            {user.hotelName}
                          </div>
                          <div class="font-normal text-gray-500">
                            {user.hotelName}
                          </div>
                        </div>
                      </th>
                      <td class="px-6 py-4">{user.description}</td>
                      <td class="px-6 py-4">
                        <div class="flex items-center">
                          <div class="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>{" "}
                          Online
                        </div>
                      </td>
                      <td class="px-6 py-4">
                        <a
                          href="/"
                          class="font-medium mb-10 mr-10 text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          Edit user
                        </a>
                        <button
                          className="mb-4 ml-46   mt-2 md:mb-0 border bg-rose-900   border-gray-700 hover:border-none hover:bg-rose-700 px-5 py-2 text-sm shadow-sm font-small tracking-wider text-white  hover:text-white  rounded-xl hover:shadow-lg "
                          onClick={() => {
                            setChoose((prev) => !prev);
                          }}
                        >
                          Detail
                        </button>
                        <button
                          className="mb-4 ml-24  mt-2 md:mb-0 border bg-rose-900   border-gray-700 hover:border-none hover:bg-rose-700 px-5 py-2 text-sm shadow-sm font-small tracking-wider text-white  hover:text-white  rounded-xl hover:shadow-lg "
                          onClick={(e) => deleted(user.id, e)}
                        >
                          Delate
                        </button>
                        <div
                          ref={ref}
                          tabindex="-1"
                          class={`${
                            !choose && "hidden"
                          } overflow-y-auto overflow-x-hidden fixed mt-22 pl-96 ml-64 md:inset-0 h-modal md:h-full justify-center items-center`}
                          aria-hidden="true"
                        >
                          <div class="relative p-4 w-full max-w-md h-full md:h-auto">
                            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                              <img
                                src="./image/zuret.png"
                                class="ml-10 h-12 w-24 "
                                alt="Windster Logo"
                              />
                              <button
                                type="button"
                                class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                                onClick={() => {
                                  setChoose(false);
                                }}
                                data-modal-toggle="popup-modal"
                              >
                                <svg
                                  aria-hidden="true"
                                  class="w-5 h-5"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clip-rule="evenodd"
                                  ></path>
                                </svg>
                                <span class="sr-only">Close modal</span>
                              </button>
                              <div class="flex items-center justify-center  p-10 ">
                                <div class="  ">
                                  <form className="text-start">
                                    <div className="ml-28 mb-10 text-base font-bold">
                                      Flight detail
                                    </div>

                                    <div class="w-full  sm:w-1/2">
                                      <div class=" md:items-center mb-6">
                                        <label
                                          for="fName"
                                          class=" block  text-base  font-normal text-[#07074D]"
                                        >
                                          First Name
                                        </label>

                                        <div class="rounded-md  border-[#e0e0e0] bg-white py-2 px-6 ml-10 text-base font-normal text-[#6B7280] outline-none  "></div>
                                      </div>
                                    </div>
                                    <div class="w-full  sm:w-1/2">
                                      <div class="mb-6">
                                        <div>
                                          <label
                                            for="lName"
                                            class="   font-normal text-base  text-[#07074D]"
                                          >
                                            Last Name
                                          </label>
                                        </div>
                                        <div>
                                          <div class=" rounded-md  border-[#e0e0e0] bg-white py-2 px-6 ml-10 text-base font-normal text-[#6B7280] outline-none f"></div>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="md:flex md:items-center mb-6">
                                      <div>
                                        <label
                                          class="block mb-2 text-base font-normal text-gray-700"
                                          for="email"
                                        >
                                          Phone number
                                        </label>
                                      </div>
                                      <div>
                                        <div class="w-full rounded-md  border-[#e0e0e0] bg-white py-2 px-6 text-base font-normal text-[#6B7280] outline-none  "></div>
                                      </div>
                                    </div>
                                    <div class="md:flex md:items-center mb-6">
                                      <label
                                        class="block mb-2 text-base font-normal text-gray-700"
                                        for="Gender"
                                      >
                                        Room Type
                                      </label>
                                      <div class=" rounded-md  border-[#e0e0e0] bg-white py-2 px-6 ml-10 text-base font-normal text-[#6B7280] outline-none f"></div>
                                    </div>
                                    <div class="md:flex md:items-center mb-6">
                                      <label
                                        for="guest"
                                        class="mb-3 block text-base font-normal text-[#07074D]"
                                      >
                                        number of guests
                                      </label>
                                      <div class=" rounded-md  border-[#e0e0e0] bg-white py-2 px-6 ml-10 text-base font-normal text-[#6B7280] outline-none f"></div>
                                    </div>
                                    <div class="md:flex md:items-center mb-6">
                                      <label
                                        for="guest"
                                        class="mb-3 block text-base font-normal text-[#07074D]"
                                      >
                                        start Date
                                      </label>
                                      <div class=" rounded-md  border-[#e0e0e0] bg-white py-2 px-6 ml-10 text-base font-normal text-[#6B7280] outline-none f"></div>
                                    </div>
                                    <div class="md:flex md:items-center mb-6">
                                      <label
                                        for="guest"
                                        class="mb-3 block text-base font-normal text-[#07074D]"
                                      >
                                        End Date
                                      </label>
                                      <div class=" rounded-md  border-[#e0e0e0] bg-white py-2 px-6 ml-10 text-base font-normal text-[#6B7280] outline-none f"></div>
                                    </div>

                                    <div>
                                      <button class="hover:shadow-form ml-48 rounded-md bg-rose-900 py-3 px-8 text-center text-base font-semibold text-white outline-none">
                                        Print
                                      </button>
                                    </div>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  );
                })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default HotelList;
