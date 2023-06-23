import React, { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";

function Trip_reserve_row({ user }) {
  const [detail, setDetail] = useState(false);
  const [choose, setChoose] = useState(false);
  const refs = useRef(null);

  const exports = useRef();
  const change = useReactToPrint({
    content: () => exports.current,
    documentTitle: "user List",
    onAfterPrint: () => alert("Data Saved"),
  });
  return (
    <React.Fragment>
      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <td class="w-4 p-4"></td>
        <th
          scope="row"
          class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
        >
          <div class="pl-3" key={user.id}>
            <div class="text-base font-semibold">
              {" "}
              {user.firstName} {user.lastName}
            </div>
            <div class="font-normal text-gray-500"></div>
          </div>
        </th>
        <td class="px-6 py-4">{user.noofGuests}</td>
        <td class="px-6 py-4">
          <div class="flex items-center">
            <div class="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>{" "}
            {user.startDate}
          </div>
        </td>
        <td class="px-6 py-4">
          <a
            href="/"
            class="font-medium mb-10 mr-10 text-blue-600 dark:text-blue-500 hover:underline"
          >
            {user.endDate}
          </a>
        </td>
        <td>
          <button
            className="mb-4 ml-46   mt-2 md:mb-0 border bg-rose-900   border-gray-700 hover:border-none hover:bg-rose-700 px-5 py-2 text-sm shadow-sm font-small tracking-wider text-white  hover:text-white  rounded-xl hover:shadow-lg "
            onClick={() => setDetail((prev) => !prev)}
          >
            Detail
          </button>
        </td>
      </tr>
      <tr class={` ${!detail && "hidden"} bg-white w-{}100vw mt-5 min-w-full `}>
        <td colSpan="12">
          <div class="px-4 py-6 sm:px-8 sm:py-10">
            <div class="flow-root">
              <ul class="-my-8">
                <li class="flex flex-col space-y-3 py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0">
                  <div class="shrink-0"></div>
                  <div ref={exports} style={{ width: "100%" }}>
                    <div class="relative flex flex-1 flex-col justify-between">
                      <div class="sm:col-gap-5 sm:grid sm:grid-cols-2">
                        <div class="pr-8 sm:pr-5">
                          <div class="w-full  sm:w-1/2">
                            <div class="flex md:items-center mb-6">
                              <div
                                for="fName"
                                class=" block  text-base  font-normal text-[#07074D]"
                              >
                                First Name
                              </div>

                              <div class="rounded-md  border-[#e0e0e0] bg-white py-2 px-6 ml-10 text-base font-normal text-[#6B7280] outline-none  ">
                                {" "}
                                {user.firstName}
                              </div>
                            </div>
                          </div>
                          <div class="w-full  sm:w-1/2">
                            <div class="mb-6 flex">
                              <div>
                                <div
                                  for="lName"
                                  class="   font-normal text-base  text-[#07074D]"
                                >
                                  Last Name
                                </div>
                              </div>
                              <div>
                                <div class=" rounded-md  border-[#e0e0e0] bg-white py-2 px-6 ml-10 text-base font-normal text-[#6B7280] outline-none f">
                                  {" "}
                                  {user.lastName}
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="md:flex md:items-center mb-6">
                            <div
                              for="guest"
                              class="mb-3 block text-base font-normal text-[#07074D]"
                            >
                              number of guests
                            </div>
                            <div class=" rounded-md  border-[#e0e0e0] bg-white py-2 px-6 ml-10 text-base font-normal text-[#6B7280] outline-none f">
                              {user.noofGuests}
                            </div>
                          </div>
                          <div class="md:flex md:items-center mb-6">
                            <div
                              for="guest"
                              class="mb-3 block text-base font-normal text-[#07074D]"
                            >
                              start Date
                            </div>
                            <div class=" rounded-md  border-[#e0e0e0] bg-white py-2 px-6 ml-10 text-base font-normal text-[#6B7280] outline-none f">
                              {user.startDate}
                            </div>
                          </div>
                          <div class="md:flex md:items-center mb-6">
                            <div
                              for="guest"
                              class="mb-3 block text-base font-normal text-[#07074D]"
                            >
                              End Date
                            </div>
                            <div class=" rounded-md  border-[#e0e0e0] bg-white py-2 px-6 ml-10 text-base font-normal text-[#6B7280] outline-none f">
                              {user.endDate}
                            </div>
                          </div>

                          <div>
                            <button
                              class="hover:shadow-form ml-48 rounded-md bg-rose-900 py-3 px-8 text-center text-base font-semibold text-white outline-none"
                              onClick={change}
                            >
                              Print
                            </button>
                          </div>
                        </div>

                        <div class="mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end">
                          <div class="sm:order-1"></div>
                        </div>
                      </div>
                    </div>

                    <div class="absolute top-0 right-0 flex sm:bottom-0 sm:top-auto">
                      <button
                        type="button"
                        class="flex rounded p-2 text-center text-gray-500 transition-all duration-200 ease-in-out focus:shadow hover:text-gray-900"
                        onClick={() => setDetail((prev) => !prev)}
                      >
                        <svg
                          class="h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M6 18L18 6M6 6l12 12"
                            class=""
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </td>
      </tr>
    </React.Fragment>
  );
}

export default Trip_reserve_row;
