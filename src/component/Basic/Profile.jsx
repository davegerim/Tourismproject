import React, { useState } from "react";

function Profile() {
  const [name, setName] = useState();
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const resetForm = () => {
    setName("");
    setUsername("");
    setEmail("");
    setPassword("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    resetForm();

    fetch("http://localhost:3000/profile/new", {
      method: "POST",
      headers: { "Content-Type": "application/JSON" },
      body: JSON.stringify({
        fullName: name,
        userName: username,
        email: email,
        role: "user",
        password: password,
      }),
    }).then(() => {
      console.log("posted");
    });
  };

  return (
    <div>
      <div class="relative min-h-screen flex ">
        <div class="flex flex-col sm:flex-row items-center md:items-start sm:justify-center flex-auto min-w-0 bg-white">
          <div class="md:flex md:items-center md:justify-center w-full sm:w-auto md:h-full  xl:w-2/5 p-8  md:p-10 lg:p-14 sm:rounded-lg md:rounded-none bg-white ">
            <div class="max-w-md w-full space-y-8">
              <div class="text-center">
                <div className="items-center inline-block">
                  <img src="./image/zuret.png" className="w-36" alt="" />
                </div>
                <h2 class=" text-2xl font-bold text-gray-900">Welcome Back!</h2>
                <p class="mt-2 text-sm text-gray-500">
                  Please sign in to your account
                </p>
              </div>

              <form class="mt-8 space-y-6" onSubmit={handleSubmit}>
                <div class="relative">
                  <label class="ml-3 text-sm font-bold text-gray-700 tracking-wide">
                    Full Name{" "}
                  </label>
                  <input
                    class="w-full content-center text-base px-4 py-2 border-b rounded-2xl border-gray-300 focus:outline-none focus:border-green-800"
                    type=""
                    placeholder="Dawit Gerim"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div class="relative">
                  <label class="ml-3 text-sm font-bold text-gray-700 tracking-wide">
                    User Name
                  </label>
                  <input
                    class="w-full content-center text-base px-4 py-2 border-b rounded-2xl border-gray-300 focus:outline-none focus:border-green-800"
                    type=""
                    placeholder="DaveG21"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div class="relative">
                  <label class="ml-3 text-sm font-bold text-gray-700 tracking-wide">
                    Email{" "}
                  </label>
                  <input
                    class="w-full content-center text-base px-4 py-2 border-b rounded-2xl border-gray-300 focus:outline-none focus:border-green-800"
                    type="email"
                    placeholder="mail@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div class="mt-8 content-center relative">
                  <label class="ml-3 text-sm font-bold text-gray-700 tracking-wide">
                    Password
                  </label>
                  <input
                    class="w-full content-center text-base px-4 py-2 border-b rounded-2xl border-gray-300 focus:outline-none focus:border-green-800"
                    type="password"
                    placeholder="Enter your password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <div>
                  {/* button */}
                  <button
                    type="submit"
                    class="w-full flex justify-center bg-gradient-to-r from-rose-800 to-rose-700  hover:bg-gradient-to-l hover:from-rose-600 hover:to-rose-700 text-gray-100 p-4  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
                  >
                    Sign Up
                  </button>
                </div>
                <p class="flex flex-col items-center justify-center mt-10 text-center text-md text-gray-500">
                  <span>If you have an account</span>
                  <a
                    href="/login"
                    class="text-indigo-400 hover:text-blue-500 cursor-pointer transition ease-in duration-300"
                  >
                    Sign In
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
