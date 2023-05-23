import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function PlaceList() {
  const navigate = useNavigate();
  const [files, setFiles] = useState([]);

  function go() {
    navigate("/addplace");
  }
  useEffect(() => {
    axios.get("http://localhost:3000/attractionplace").then((res) => {
      setFiles(res.data);
    });
  }, []);
  return (
    <div className="px-8 mt-20 py-8">
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <div className="flex mb-8">
          <div className="flex-1">
            <h1 className="font-medium">Attraction Place List</h1>
          </div>
          <div>
            <button
              className="mb-2 md:mb-0 border   border-gray-700 hover:border-none hover:bg-blue-500 px-5 py-2 text-sm shadow-sm font-small tracking-wider text-gray-900  hover:text-white  rounded-xl hover:shadow-lg "
              onClick={go}
            >
              Add Place
            </button>
          </div>
        </div>
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-200 uppercase bg-gray-800 dark:bg-gray-700 dark:text-gray-400">
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
                Place Name
              </th>
              <th scope="col" class="px-6 py-3">
                Rate
              </th>
              <th scope="col" class="px-6 py-3">
                description
              </th>
              <th scope="col" class="px-6 py-3">
                Price
              </th>
              <th scope="col" class="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {files &&
              files.map((user) => {
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
                        src="./image/gondar2.jpg"
                        alt=""
                      />
                      <div class="pl-3" key={user.id}>
                        <div class="text-base font-semibold">
                          {user.placeName}
                        </div>
                        <div class="font-normal text-gray-500"></div>
                      </div>
                    </th>
                    <td class="px-6 py-4">{user.rate}</td>
                    <td class="px-6 py-4">
                      <div class="flex items-center">
                        <div class="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>{" "}
                        {user.description}
                      </div>
                    </td>
                    <td class="px-6 py-4">
                      <div class="flex items-center">{user.price}</div>
                    </td>
                    <td class="px-6 py-4">
                      <a
                        href="/"
                        class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Edit user
                      </a>
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

export default PlaceList;
