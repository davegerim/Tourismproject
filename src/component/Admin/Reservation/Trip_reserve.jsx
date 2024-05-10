import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import Trip_reserve_row from "./Trip_reserve_row";

function Trip_reserve() {
  const [detail, setDetail] = useState(false);
  const [choose, setChoose] = useState(false);
  const ref = useRef();

  const [files, setFiles] = useState([]);
  const [abel, setAbel] = useState([]);

  function getUsers() {
    axios.get("http://localhost:3000/tripreservation").then((res) => {
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
            <h1 className="font-medium"> Trip reservation list</h1>
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
              <th scope="col" class="p-4"></th>
              <th scope="col" class="px-6 py-3">
                Full Name
              </th>
              <th scope="col" class="px-6 py-3">
                Number of Guests
              </th>
              <th scope="col" class="px-6 py-3">
                Start Date
              </th>
              <th scope="col" class="px-6 py-3">
                End Date
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
                .filter((user) => user.firstName.toLowerCase().includes(abel))

                .map((user) => <Trip_reserve_row user={user} />)}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Trip_reserve;
