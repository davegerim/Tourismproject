import React, { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";

function Flight_reserve_row({ user }) {
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
        <td class="w-4 p-4">{user.from}</td>
        <th scope="row" class="flex items-center px-6 py-4   ">
          {" "}
          <td class="text-sm font-medium" key={user.id}>
            {user.to}
          </td>
        </th>

        {/* <td class="px-6 py-4">{user.returnDate}</td> */}
        {/* <td class="px-6 py-4">{user.statuss}</td> */}
        <td class="px-6 py-4">
          <div class="flex items-center">
            <div class="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>{" "}
            {user.calander}
          </div>
        </td>
        <td class="px-6 py-4">
          <a
            href="/"
            class="font-medium mb-10 mr-10 text-blue-600 dark:text-blue-500 hover:underline"
          >
            {user.cabinClass}
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
                                from
                              </div>

                              <div class="rounded-md  border-[#e0e0e0] bg-white py-2 px-6 ml-10 text-base font-normal text-[#6B7280] outline-none  ">
                                {" "}
                                {user.from}
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
                                  to
                                </div>
                              </div>
                              <div>
                                <div class=" rounded-md  border-[#e0e0e0] bg-white py-2 px-6 ml-10 text-base font-normal text-[#6B7280] outline-none f">
                                  {" "}
                                  {user.to}
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="md:flex md:items-center mb-6">
                            <div
                              for="guest"
                              class="mb-3 block text-base font-normal text-[#07074D]"
                            >
                              calander
                            </div>
                            <div class=" rounded-md  border-[#e0e0e0] bg-white py-2 px-6 ml-10 text-base font-normal text-[#6B7280] outline-none f">
                              {user.calander}
                            </div>
                          </div>
                          <div class="md:flex md:items-center mb-6">
                            <div
                              for="guest"
                              class="mb-3 block text-base font-normal text-[#07074D]"
                            >
                              departureDate
                            </div>
                            <div class=" rounded-md  border-[#e0e0e0] bg-white py-2 px-6 ml-10 text-base font-normal text-[#6B7280] outline-none f">
                              {user.departureDate}
                            </div>
                          </div>
                          <div class="md:flex md:items-center mb-6">
                            <div
                              for="guest"
                              class="mb-3 block text-base font-normal text-[#07074D]"
                            >
                              returnDate
                            </div>
                            <div class=" rounded-md  border-[#e0e0e0] bg-white py-2 px-6 ml-10 text-base font-normal text-[#6B7280] outline-none f">
                              {user.returnDate}
                            </div>
                          </div>
                          <div class="md:flex md:items-center mb-6">
                            <div
                              for="guest"
                              class="mb-3 block text-base font-normal text-[#07074D]"
                            >
                              male
                            </div>
                            <div class=" rounded-md  border-[#e0e0e0] bg-white py-2 px-6 ml-10 text-base font-normal text-[#6B7280] outline-none f">
                              {user.male}
                            </div>
                          </div>

                          <div class="md:flex md:items-center mb-6">
                            <div
                              for="guest"
                              class="mb-3 block text-base font-normal text-[#07074D]"
                            >
                              Female
                            </div>
                            <div class=" rounded-md  border-[#e0e0e0] bg-white py-2 px-6 ml-10 text-base font-normal text-[#6B7280] outline-none f">
                              {user.Female}
                            </div>
                          </div>
                          <div class="md:flex md:items-center mb-6">
                            <div
                              for="guest"
                              class="mb-3 block text-base font-normal text-[#07074D]"
                            >
                              child
                            </div>
                            <div class=" rounded-md  border-[#e0e0e0] bg-white py-2 px-6 ml-10 text-base font-normal text-[#6B7280] outline-none f">
                              {user.child}
                            </div>
                          </div>
                          <div class="md:flex md:items-center mb-6">
                            <div
                              for="guest"
                              class="mb-3 block text-base font-normal text-[#07074D]"
                            >
                              cabin class
                            </div>
                            <div class=" rounded-md  border-[#e0e0e0] bg-white py-2 px-6 ml-10 text-base font-normal text-[#6B7280] outline-none f">
                              {user.cabinClass}
                            </div>
                          </div>
                          <div class="md:flex md:items-center mb-6">
                            <div
                              for="guest"
                              class="mb-3 block text-base font-normal text-[#07074D]"
                            >
                              status
                            </div>
                            <div class=" rounded-md  border-[#e0e0e0] bg-white py-2 px-6 ml-10 text-base font-normal text-[#6B7280] outline-none f">
                              {user.statuss}
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

export default Flight_reserve_row;
