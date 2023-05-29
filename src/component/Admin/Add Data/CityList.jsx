import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function CityList() {
  const [files, setFiles] = useState([]);
  const [abel, setAbel] = useState([]);
  const navigate = useNavigate();

  function go() {
    navigate("/addcity");
  }

  const deleted = (id, e) => {
    e.preventDefault();
    axios.delete(`http://localhost:3000/cities/${id}`).then((res) => {
      console.log("delete", res);
      getUsers();
    });
  };
  function getUsers() {
    axios.get("http://localhost:3000/cities").then((res) => {
      setFiles(res.data);
    });
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="px-8 mt-20 py-8">
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <div className="flex mb-8">
          <div className="flex-1">
            <h1 className="font-medium"> City List</h1>
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
                .filter((user) => user.cityName.toLowerCase().includes(abel))
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
                          src="./image/gondar2.jpg"
                          alt=""
                        />
                        <div class="pl-3" key={user.id}>
                          <div class="text-base font-semibold">
                            {user.cityName}
                          </div>
                          <div class="font-normal text-gray-500">
                            {user.cityName}
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
                          class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          Edit user
                        </a>
                        <button
                          className="mb-2 ml-10 md:mb-0 border bg-rose-900   border-gray-700 hover:border-none hover:bg-rose-700 px-5 py-2 text-sm shadow-sm font-small tracking-wider text-white  hover:text-white  rounded-xl hover:shadow-lg "
                          onClick={(e) => deleted(user.id, e)}
                        >
                          Delete
                        </button>
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

export default CityList;
