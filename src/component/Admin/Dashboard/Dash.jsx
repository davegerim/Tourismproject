import React from "react";
import { useUser } from "../../../lib/customHooks";

function Dash() {
  const { user } = useUser();
  console.log({ user });

  return (
    <div className="px-8 mt-20">
      <div class="  w-full min-h-screen text-slate-300  py-4">
        <div class="grid grid-cols-8 mx-auto gap-2 sm:gap-4 md:gap-6 lg:gap-10 xl:gap-14 max-w-7xl my-10 px-2">
          <div id="content" class="bg-white col-span-9 rounded-lg p-6">
            <div id="24h">
              <h1 class=" py-4 text-black">Last 24h Statistics</h1>
              <div
                id="stats"
                class="grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                <div class="bg-rose-900 to-white/5 p-6 rounded-lg">
                  <div class="flex flex-row space-x-4 items-center">
                    <div id="stats-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-10 h-10 text-white"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p class="text-indigo-300 text-sm font-medium uppercase leading-4">
                        Users
                      </p>
                      <p class="text-white font-bold text-2xl inline-flex items-center space-x-2">
                        <span>+28</span>
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-6 h-6"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                            />
                          </svg>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="bg-rose-900 p-6 rounded-lg">
                  <div class="flex flex-row space-x-4 items-center">
                    <div id="stats-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-10 h-10 text-white"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p class="text-teal-300 text-sm font-medium uppercase leading-4">
                        Income
                      </p>
                      <p class="text-white font-bold text-2xl inline-flex items-center space-x-2">
                        <span>2,873.88</span>
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-6 h-6"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                            />
                          </svg>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="bg-rose-900 p-6 rounded-lg">
                  <div class="flex flex-row space-x-4 items-center">
                    <div id="stats-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-10 h-10 text-white"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p class="text-blue-300 text-sm font-medium uppercase leading-4">
                        Invoices
                      </p>
                      <p class="text-white font-bold text-2xl inline-flex items-center space-x-2">
                        <span>+79</span>
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-6 h-6"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                            />
                          </svg>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="last-incomes">
              <h1
                class="
               py-4  text-black "
              >
                Last 24h incomes
              </h1>
              <div
                id="stats"
                class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
              >
                <div class="bg-rose-900 to-white/5 rounded-lg">
                  <div class="flex flex-row items-center">
                    <div class="text-3xl p-4">💰</div>
                    <div class="p-2">
                      <p class="text-xl font-bold">348</p>
                      <p class="text-white font-medium">Amber Gates</p>
                      <p class="text-white text-sm">24 Nov 2022</p>
                    </div>
                  </div>
                  <div class="border-t border-white/5 p-4">
                    <a
                      href="."
                      class="inline-flex space-x-2 items-center text-center"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                        />
                      </svg>
                      <span class="text-white">Info</span>
                    </a>
                  </div>
                </div>
                <div class="bg-rose-900 to-white/5 rounded-lg">
                  <div class="flex flex-row items-center">
                    <div class="text-3xl p-4">💰</div>
                    <div class="p-2">
                      <p class="text-xl font-bold">68</p>
                      <p class="text-white font-medium">Maia Kipper</p>
                      <p class="text-white   text-sm">23 Nov 2022</p>
                    </div>
                  </div>
                  <div class="border-t border-white/5 p-4">
                    <a
                      href="."
                      class="inline-flex space-x-2 items-center text-center"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                        />
                      </svg>
                      <span class="text-white">Info</span>
                    </a>
                  </div>
                </div>
                <div class="bg-rose-900 to-white/5 rounded-lg">
                  <div class="flex flex-row items-center">
                    <div class="text-3xl p-4">💰</div>
                    <div class="p-2">
                      <p class="text-xl font-bold">12</p>
                      <p class="text-white font-medium">Oprah Milles</p>
                      <p class="text-white text-sm">23 Nov 2022</p>
                    </div>
                  </div>
                  <div class="border-t border-white/5 p-4">
                    <a
                      href="."
                      class="inline-flex space-x-2 items-center text-center"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                        />
                      </svg>
                      <span class="text-white">Info</span>
                    </a>
                  </div>
                </div>
                <div class="bg-rose-900 to-white/5 rounded-lg">
                  <div class="flex flex-row items-center">
                    <div class="text-3xl p-4">💰</div>
                    <div class="p-2">
                      <p class="text-xl font-bold">105</p>
                      <p class="text-white font-medium">Jonny Nite</p>
                      <p class="text-white text-sm">23 Nov 2022</p>
                    </div>
                  </div>
                  <div class="border-t border-white/5 p-4">
                    <a
                      href="."
                      class="inline-flex space-x-2 items-center text-center"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                        />
                      </svg>
                      <span class="text-white">Info</span>
                    </a>
                  </div>
                </div>
                <div class="bg-rose-900 to-white/5 rounded-lg">
                  <div class="flex flex-row items-center">
                    <div class="text-3xl p-4">💰</div>
                    <div class="p-2">
                      <p class="text-xl font-bold">52</p>
                      <p class=" font-medium">Megane Baile</p>
                      <p class=" text-sm">22 Nov 2022</p>
                    </div>
                  </div>
                  <div class="border-t border-white/5 p-4">
                    <a
                      href="."
                      class="inline-flex space-x-2 items-center text-center"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                        />
                      </svg>
                      <span class="text-white">Info</span>
                    </a>
                  </div>
                </div>
                <div class="bg-rose-900 to-white/5 rounded-lg">
                  <div class="flex flex-row items-center">
                    <div class="text-3xl p-4">💰</div>
                    <div class="p-2">
                      <p class="text-xl font-bold">28</p>
                      <p class=" font-medium">Tony Ankel</p>
                      <p class=" text-sm">22 Nov 2022</p>
                    </div>
                  </div>
                  <div class="border-t border-white/5 p-4">
                    <a
                      href="."
                      class="inline-flex space-x-2 items-center text-center"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                        />
                      </svg>
                      <span class="text-white">Info</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div id="last-users">
              <h1 class=" py-4 text-black text-bold">Last 24h users</h1>
              <div class="overflow-x-scroll">
                <table class="w-full whitespace-nowrap">
                  <thead class="bg-rose-900">
                    <th class="text-left py-3 px-2 rounded-l-lg">Name</th>
                    <th class="text-left py-3 px-2">Email</th>
                    <th class="text-left py-3 px-2">Role</th>
                    <th class="text-left py-3 px-2">Status</th>
                    <th class="text-left py-3 px-2 rounded-r-lg">Actions</th>
                  </thead>
                  <tr class="border-b border-gray-700">
                    <td class="py-3 px-2  text-black ">
                      <div class="inline-flex space-x-3 items-center">
                        <span>
                          <img
                            class="rounded-full w-8 h-8"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmpoQaaw13BKAmYv1iRPzkz9AkM0ZskCqK_g&s"
                            alt=""
                          />
                        </span>
                        <span>Dawit Gerim</span>
                      </div>
                    </td>
                    <td class="py-3 px-2 text-black">dawitG@gmail.com</td>
                    <td class="py-3 px-2 text-black">User</td>
                    <td class="py-3 px-2 text-black">Approved</td>
                    <td class="py-3 px-2 text-black">
                      <div class="inline-flex items-center space-x-3">
                        <a href="." title="Edit" class="hover:text-white">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-5 h-5"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                            />
                          </svg>
                        </a>
                        <a
                          href="."
                          title="Edit password"
                          class="hover:text-white"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-5 h-5"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                            />
                          </svg>
                        </a>
                        <a
                          href="."
                          title="Suspend user"
                          class="hover:text-white"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-5 h-5"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                            />
                          </svg>
                        </a>
                      </div>
                    </td>
                  </tr>
                  <tr class="border-b border-gray-700">
                    <td class="py-3 px-2 text-black">
                      <div class="inline-flex space-x-3 items-center">
                        <span>
                          <img
                            class="rounded-full w-8 h-8"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmpoQaaw13BKAmYv1iRPzkz9AkM0ZskCqK_g&s"
                            alt=""
                          />
                        </span>
                        <span>Dawit Gerim</span>
                      </div>
                    </td>
                    <td class="py-3 px-2 text-black">dawitG@gmail.com</td>
                    <td class="py-3 px-2 text-black">User</td>
                    <td class="py-3 px-2 text-black">Approved</td>
                    <td class="py-3 px-2 text-black">
                      <div class="inline-flex items-center space-x-3">
                        <a href="." title="Edit" class="hover:text-white">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-5 h-5"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                            />
                          </svg>
                        </a>
                        <a
                          href="."
                          title="Edit password"
                          class="hover:text-white"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-5 h-5"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                            />
                          </svg>
                        </a>
                        <a
                          href="."
                          title="Suspend user"
                          class="hover:text-white"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-5 h-5"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                            />
                          </svg>
                        </a>
                      </div>
                    </td>
                  </tr>
                  <tr class="border-b border-gray-700">
                    <td class="py-3 px-2 text-black">
                      <div class="inline-flex space-x-3 items-center">
                        <span>
                          <img
                            class="rounded-full w-8 h-8"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmpoQaaw13BKAmYv1iRPzkz9AkM0ZskCqK_g&s"
                            alt=""
                          />
                        </span>
                        <span>Dawit Gerim</span>
                      </div>
                    </td>
                    <td class="py-3 px-2 text-black">dawitG@gmail.com</td>
                    <td class="py-3 px-2 text-black">User</td>
                    <td class="py-3 px-2 text-black">Approved</td>
                    <td class="py-3 px-2 text-black">
                      <div class="inline-flex items-center space-x-3">
                        <a href="." title="Edit" class="hover:text-white">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-5 h-5"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                            />
                          </svg>
                        </a>
                        <a
                          href="."
                          title="Edit password"
                          class="hover:text-white"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-5 h-5"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                            />
                          </svg>
                        </a>
                        <a
                          href="."
                          title="Suspend user"
                          class="hover:text-white"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-5 h-5"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                            />
                          </svg>
                        </a>
                      </div>
                    </td>
                  </tr>
                  <tr class="border-b border-gray-700">
                    <td class="py-3 px-2 text-black">
                      <div class="inline-flex space-x-3 items-center">
                        <span>
                          <img
                            class="rounded-full w-8 h-8"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmpoQaaw13BKAmYv1iRPzkz9AkM0ZskCqK_g&s"
                            alt=""
                          />
                        </span>
                        <span>Natnael Alemu</span>
                      </div>
                    </td>
                    <td class="py-3 px-2 text-black">nati.spineli@cba.com</td>
                    <td class="py-3 px-2 text-black">User</td>
                    <td class="py-3 px-2 text-black">Approved</td>
                    <td class="py-3 px-2 text-black">
                      <div class="inline-flex items-center space-x-3">
                        <a href="." title="Edit" class="hover:text-white">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-5 h-5"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                            />
                          </svg>
                        </a>
                        <a
                          href="."
                          title="Edit password"
                          class="hover:text-white"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-5 h-5"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                            />
                          </svg>
                        </a>
                        <a
                          href="."
                          title="Suspend user"
                          class="hover:text-white"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-5 h-5"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                            />
                          </svg>
                        </a>
                      </div>
                    </td>
                  </tr>
                  <tr class="border-b border-gray-800">
                    <td class="py-3 px-2 text-black ">
                      <div class="inline-flex space-x-3 items-center">
                        <span>
                          <img
                            class="rounded-full w-8 h-8"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmpoQaaw13BKAmYv1iRPzkz9AkM0ZskCqK_g&s"
                            alt=""
                          />
                        </span>
                        <span>Miki Abrham</span>
                      </div>
                    </td>
                    <td class="py-3 px-2 text-black">miki.spike@abc.com</td>
                    <td class="py-3 px-2 text-black">Administrator</td>
                    <td class="py-3 px-2 text-black">Approved</td>
                    <td class="py-3 px-2 text-black">
                      <div class="inline-flex items-center space-x-3">
                        <a href="." title="Edit" class="hover:text-white">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-5 h-5"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                            />
                          </svg>
                        </a>
                        <a
                          href="."
                          title="Edit password"
                          class="hover:text-white"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-5 h-5"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                            />
                          </svg>
                        </a>
                        <a
                          href="."
                          title="Suspend user"
                          class="hover:text-white"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-5 h-5"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                            />
                          </svg>
                        </a>
                      </div>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dash;
