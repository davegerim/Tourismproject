import React, { useEffect, useState } from "react";
import Navbarss from "../navbars/Navbarss";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function Details() {
  const [detail, setDetail] = useState(false);
  const [show, setShow] = useState(false);
  const [attract, setAttract] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  function go() {
    navigate("/Booking");
  }

  useEffect(() => {
    axios.get(`http://localhost:3000/cities/${id}`).then((res) => {
      setAttract(res.data.attractionplace);
      console.log("get");
    });
  }, []);

  return (
    <div>
      <div>
        <Navbarss className="relative" />
      </div>
      <section class="bg-gray-100 py-12 sm:py-16 lg:py-20 z-10">
        <div class="mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-center justify-center">
            <h1 class="text-2xl mt-5 font-semibold text-gray-900">
              Visited Place
            </h1>
          </div>

          <div class="mt-8 md:mt-12 ">
            <div class="bg-red shadow mb-6">
              <div class="px-4 py-6 sm:px-8 sm:py-10">
                <div class="flow-root">
                  <ul class="-my-8">
                    {attract &&
                      attract.map((user) => {
                        return (
                          <li class="flex flex-col space-y-3 py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0 ">
                            <div class="shrink-0">
                              <img
                                class="h-24 w-24 max-w-full rounded-lg object-cover"
                                src="https://media.gettyimages.com/id/1288687805/photo/4th-century-king-ezanas-stela-and-fallen-and-broken-great-stele-at-the-northern-stelae-park.jpg?s=612x612&w=0&k=20&c=gLcvT2vFSVylzZfuqx3QPFF2-F4xOOcSZp0Jt4QJJLA="
                                alt=""
                              />
                            </div>

                            <div
                              class="relative flex flex-1 flex-col justify-between"
                              key={user.id}
                            >
                              <div class="sm:col-gap-5 sm:grid sm:grid-cols-2">
                                <div class="pr-8 sm:pr-5">
                                  <p class="text-base font-semibold text-gray-900">
                                    {user.placeName}
                                  </p>
                                  <p class="mx-0 mt-1 mb-0 text-sm text-gray-400">
                                    {user.description}
                                  </p>
                                  <p class="mx-0 mt-1 mb-0 text-sm text-gray-400">
                                    {user.price}
                                  </p>
                                </div>

                                <div class="mt-4 flex items-end  justify-between sm:mt-0 sm:items-start sm:justify-end">
                                  <button
                                    class="shrink-0 w-20 text-base rounded bg-black font-semibold text-gray-100 sm:order-2 sm:ml-8 sm: text-center"
                                    onClick={() => setDetail((prev) => !prev)}
                                  >
                                    Details
                                  </button>

                                  <div class="sm:order-1">
                                    <div class="max-w-2xl mx-auto">
                                      <div class="flex items-center">
                                        <p class="">4.5</p>
                                        <svg
                                          class="w-5 h-5 text-yellow-400"
                                          fill="currentColor"
                                          viewBox="0 0 20 20"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                        </svg>
                                        <svg
                                          class="w-5 h-5 text-yellow-400"
                                          fill="currentColor"
                                          viewBox="0 0 20 20"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                        </svg>
                                        <svg
                                          class="w-5 h-5 text-yellow-400"
                                          fill="currentColor"
                                          viewBox="0 0 20 20"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                        </svg>
                                        <svg
                                          class="w-5 h-5 text-yellow-400"
                                          fill="currentColor"
                                          viewBox="0 0 20 20"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                        </svg>
                                        <svg
                                          class="w-5 h-5 text-gray-300 dark:text-gray-500"
                                          fill="currentColor"
                                          viewBox="0 0 20 20"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                        </svg>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div class="absolute top-0 right-0 flex sm:bottom-0 sm:top-auto">
                                <button
                                  type="button"
                                  class="flex rounded p-2 bg-rose-900 hover:bg-rose-700 text-center text-gray-100 transition-all duration-200 ease-in-out focus:shadow hover:text-gray-50"
                                  onClick={() => setShow((prev) => !prev)}
                                >
                                  Book Now
                                </button>
                              </div>
                            </div>
                          </li>
                        );
                      })}
                  </ul>
                </div>
              </div>
            </div>
            <div class={` ${!detail && "hidden"} bg-white shadow mb-4 `}>
              <div class="px-4 py-6 sm:px-8 sm:py-10">
                <div class="flow-root">
                  <ul class="-my-8">
                    <li class="flex flex-col space-y-3 py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0">
                      <div class="shrink-0"></div>

                      <div class="relative flex flex-1 flex-col justify-between">
                        <div class="sm:col-gap-5 sm:grid sm:grid-cols-2">
                          <div class="pr-8 sm:pr-5">
                            <p class="text-base font-semibold text-gray-900">
                              The Fasil Ghebbi (Amharic: ፋሲል ግቢ) is a fortress
                              located in Gondar, Amhara Region, Ethiopia. It was
                              founded in the 17th century by Emperor Fasilides
                              and was the home of Ethiopian emperors.
                            </p>
                            <p class="mx-0 mt-1 mb-0 text-sm text-gray-400">
                              The complex of buildings includes Fasilides'
                              castle, Iyasu I's palace, Dawit III's Hall,
                              Empress Mentewab's castle, a chancellery and
                              library from Yohannes I, a banqueting hall from
                              the emperor Bakaffa, stables, and three churches:
                              Asasame Qeddus Mikael, Elfign Giyorgis and
                              Gemjabet Mariyam.
                            </p>
                          </div>

                          <div class="mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end">
                            <div class="sm:order-1"></div>
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
            </div>
            <div class={` ${!show && "hidden"} bg-white shadow mb-4 `}>
              <div class="flex items-center justify-center p-12">
                <div class="mx-auto w-full max-w-[550px]">
                  <form action="https://formbold.com/s/FORM_ID" method="POST">
                    <div class="-mx-3 flex flex-wrap">
                      <div class="w-full px-3 sm:w-1/2">
                        <div class="mb-5">
                          <label
                            for="fName"
                            class="mb-3 block text-base font-medium text-[#07074D]"
                          >
                            First Name
                          </label>
                          <input
                            type="text"
                            name="fName"
                            id="fName"
                            placeholder="First Name"
                            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                          />
                        </div>
                      </div>
                      <div class="w-full px-3 sm:w-1/2">
                        <div class="mb-5">
                          <label
                            for="lName"
                            class="mb-3 block text-base font-medium text-[#07074D]"
                          >
                            Last Name
                          </label>
                          <input
                            type="text"
                            name="lName"
                            id="lName"
                            placeholder="Last Name"
                            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="mb-5">
                      <label
                        for="guest"
                        class="mb-3 block text-base font-medium text-[#07074D]"
                      >
                        number of guests
                      </label>
                      <input
                        type="number"
                        name="guest"
                        id="guest"
                        placeholder="5"
                        min="0"
                        class="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>

                    <div class="-mx-3 flex flex-wrap">
                      <div class="w-full px-3 sm:w-1/2">
                        <div>
                          <div date-rangepicker class="flex items-center">
                            <div class="relative">
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
                                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                    clip-rule="evenodd"
                                  ></path>
                                </svg>
                              </div>
                              <input
                                name="start"
                                type="date"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Select date start"
                              />
                            </div>
                            <span class="mx-4 text-gray-500">to</span>
                            <div class="relative">
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
                                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                    clip-rule="evenodd"
                                  ></path>
                                </svg>
                              </div>
                              <input
                                name="end"
                                type="date"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Select date end"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="w-full px-3 sm:w-1/2"></div>
                    </div>
                    <div class="mt-3 mb-3">
                      <p>
                        $99 * 1 person <span className="ml-10">99$</span>
                      </p>
                    </div>

                    <div>
                      <button class="hover:shadow-form rounded-md bg-rose-900 py-3 px-8 text-center text-base font-semibold text-white outline-none">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div class="mt-6 text-center">
              <button
                type="button"
                class="group inline-flex w-full items-center justify-center rounded-md bg-gray-900 px-6 py-4 text-lg font-semibold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800"
              >
                See More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="group-hover:ml-8 ml-4 h-6 w-6 transition-all"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Details;
