import React from "react";

function Loginprofile() {
  return (
    <div>
      <div>
        <body class="font-mono bg-gray-400 ">
          <div class="container mx-auto ">
            <div class="flex justify-center p-6 my-12">
              <div class="w-full xl:w-3/4 lg:w-11/12 flex">
                <div
                  class="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
                  style={{
                    "background-image":
                      "url('https://www.shutterstock.com/image-vector/illustration-featuring-teenage-girl-carrying-600w-668341087.jpg')",
                  }}
                ></div>

                <div class="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
                  <h3 class="pt-4 text-2xl text-center">Login</h3>
                  <form class="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                    <div class="mb-4 md:flex md:justify-between"></div>

                    <div class="mb-4">
                      <label
                        class="block mb-2 text-sm font-bold text-gray-700"
                        for="email"
                      >
                        Email
                      </label>
                      <input
                        class="w-full px-3 py-2 mb-3 text-sm leading-tight  bordertext-gray-700 border border-gray-700 rounded shadow   appearance-none focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                        placeholder="Email"
                      />
                    </div>
                    <div class="mb-4">
                      <label
                        class="block mb-2 text-sm font-bold text-gray-700"
                        for="password"
                      >
                        Password
                      </label>
                      <input
                        class="w-full px-3 py-2 mb-3 text-sm leading-tight  bordertext-gray-700 border border-gray-700 rounded shadow   appearance-none focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                        placeholder="Password"
                      />
                    </div>
                    <div className="flex justify-center items-center border border-gray-700  bg-blue-700 rounded-3xl text-white py-2">
                      <button>login</button>
                    </div>

                    <div class="text-center">
                      <a
                        class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                        href="/"
                      >
                        Forgot Password?
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </body>
      </div>
    </div>
  );
}

export default Loginprofile;
