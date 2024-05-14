import axios from "axios";
import React, { useState } from "react";
import { BsCheckCircle } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";

function Changepassword() {
  const [password, setPassword] = useState();
  const [errorr, setError] = useState(false);
  const [message, setMessage] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const apiurl = process.env.REACT_APP_API_URL;

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .put(`${apiurl}/user/${id}`, {
        password: password,
      })
      .then(() => {
        navigate("/login");
     
      })
      .catch((error) => {
        setMessage("Error verifying OTP:", error);
        // Handle error - You can set an error state here to display an error message in your UI
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
                <p class="mt-2 text-sm text-gray-500">Change Password</p>
              </div>

              <form class="mt-10 space-y-6" onSubmit={handleSubmit}>
                {/* email  */}

                <div class="relative">
                  {errorr && password.length <= 0 ? (
                    <div class="absolute right-3 mt-4">
                      <BsCheckCircle class="h-4 w-4 text-red-500" />
                    </div>
                  ) : (
                    ""
                  )}
                  <label class="ml-3 mt-6 text-sm font-bold text-gray-700 tracking-wide">
                    password
                  </label>
                  <input
                    class="w-full mt-2   content-center text-base px-4 py-2 border-b rounded-2xl border-gray-300 focus:outline-none focus:border-green-800"
                    type=""
                    placeholder="mail@gmail.com"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <p className="font-small text-red-500  px-4">{message}</p>
                </div>
                {/* password */}

                <div class="mt-8 content-center relative">
                  {errorr && password.length <= 6 ? (
                    <div class="absolute right-3 mt-4">
                      <BsCheckCircle class="h-4 w-4 text-red-500" />
                    </div>
                  ) : (
                    ""
                  )}
                  <label class="ml-3 text-sm font-bold text-gray-700 tracking-wide">
                    comfirm Password
                  </label>
                  <input
                    class="w-full mt-2 content-center text-base px-4 py-2 border-b rounded-2xl border-gray-300 focus:outline-none focus:border-green-800"
                    type="password"
                    placeholder="Enter your password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <p className="font-small text-red-500  px-4">{message}</p>
                </div>

                <div class="flex items-center justify-between">
                  {/* remember checkbox */}

                  {/* forget password */}
                </div>
                <div>
                  {/* button */}
                  <button
                    type="submit"
                    class="w-full flex justify-center bg-gradient-to-r from-rose-800 to-rose-700  hover:bg-gradient-to-l hover:from-rose-600 hover:to-rose-700 text-gray-100 p-4  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Changepassword;
