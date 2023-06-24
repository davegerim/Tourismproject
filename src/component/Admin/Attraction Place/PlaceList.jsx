import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function PlaceList() {
  const navigate = useNavigate();
  const [files, setFiles] = useState([]);

  function go() {
    navigate("/addplace");
  }
  const deleted = (id, e) => {
    e.preventDefault();
    axios.delete(`http://localhost:3000/attractionplace/${id}`).then((res) => {
      console.log("delete", res);
      getUsers();
    });
  };
  function getUsers() {
    axios.get("http://localhost:3000/attractionplace").then((res) => {
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
            <h1 className="font-medium">Attraction Place List</h1>
          </div>
          <div>
            <button
              className="mb-2 md:mb-0 border   border-rose-700 hover:border-none hover:bg-rose-700 px-5 py-2 text-sm shadow-sm font-small tracking-wider text-white  hover:text-white  rounded-xl hover:shadow-lg bg-rose-900"
              onClick={go}
            >
              Add Place
            </button>
          </div>
        </div>
        <table class="w-full text-sm text-left text-grey-900 dark:text-rose-900">
          <thead class="text-xs text-white uppercase bg-rose-900 dark:bg-gray-700 dark:text-white">
            <tr>
              <th scope="col" class="p-4"></th>
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
                    <td class="w-4 p-4"></td>
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
                      <button
                        className="mb-4 ml-26  mt-2 md:mb-0 border bg-rose-900   border-gray-700 hover:border-none hover:bg-rose-700 px-5 py-2 text-sm shadow-sm font-small tracking-wider text-white  hover:text-white  rounded-xl hover:shadow-lg "
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

export default PlaceList;
