import React from "react";
import { useNavigate } from "react-router-dom";

function PlaceList() {
  const navigate = useNavigate();

  function go() {
    navigate("/placelist");
  }
  return (
    <div className="px-8 py-8">
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
                Name
              </th>
              <th scope="col" class="px-6 py-3">
                Rate
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
                <div class="pl-3">
                  <div class="text-base font-semibold">Neil Sims</div>
                  <div class="font-normal text-gray-500">
                    neil.sims@flowbite.com
                  </div>
                </div>
              </th>
              <td class="px-6 py-4">React Developer</td>
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
              </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td class="w-4 p-4">
                <div class="flex items-center">
                  <input
                    id="checkbox-table-search-2"
                    type="checkbox"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label for="checkbox-table-search-2" class="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <th
                scope="row"
                class="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                <img
                  class="w-10 h-10 rounded-full"
                  src="./image/gondar2.jpg"
                  alt=""
                />
                <div class="pl-3">
                  <div class="text-base font-semibold">Bonnie Green</div>
                  <div class="font-normal text-gray-500">
                    bonnie@flowbite.com
                  </div>
                </div>
              </th>
              <td class="px-6 py-4">Designer</td>
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
              </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td class="w-4 p-4">
                <div class="flex items-center">
                  <input
                    id="checkbox-table-search-2"
                    type="checkbox"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label for="checkbox-table-search-2" class="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <th
                scope="row"
                class="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                <img
                  class="w-10 h-10 rounded-full"
                  src="./image/gondar2.jpg"
                  alt=""
                />
                <div class="pl-3">
                  <div class="text-base font-semibold">Jese Leos</div>
                  <div class="font-normal text-gray-500">jese@flowbite.com</div>
                </div>
              </th>
              <td class="px-6 py-4">Vue JS Developer</td>
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
              </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td class="w-4 p-4">
                <div class="flex items-center">
                  <input
                    id="checkbox-table-search-2"
                    type="checkbox"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label for="checkbox-table-search-2" class="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <th
                scope="row"
                class="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                <img
                  class="w-10 h-10 rounded-full"
                  src="./image/gondar2.jpg"
                  alt=""
                />
                <div class="pl-3">
                  <div class="text-base font-semibold">Thomas Lean</div>
                  <div class="font-normal text-gray-500">
                    thomes@flowbite.com
                  </div>
                </div>
              </th>
              <td class="px-6 py-4">UI/UX Engineer</td>
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
              </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td class="w-4 p-4">
                <div class="flex items-center">
                  <input
                    id="checkbox-table-search-3"
                    type="checkbox"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label for="checkbox-table-search-3" class="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <th
                scope="row"
                class="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                <img
                  class="w-10 h-10 rounded-full"
                  src="./image/gondar2.jpg"
                  alt=""
                />
                <div class="pl-3">
                  <div class="text-base font-semibold">Leslie Livingston</div>
                  <div class="font-normal text-gray-500">
                    leslie@flowbite.com
                  </div>
                </div>
              </th>
              <td class="px-6 py-4">SEO Specialist</td>
              <td class="px-6 py-4">
                <div class="flex items-center">
                  <div class="h-2.5 w-2.5 rounded-full bg-red-500 mr-2"></div>{" "}
                  Offline
                </div>
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
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PlaceList;
