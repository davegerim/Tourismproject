import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsCheckCircle } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";

function OtpVerify() {
  const [errorr, setError] = useState(false);
  const [message, setMessage] = useState(false);
  const [code, setCode] = useState("");
  const { id } = useParams();
  const apiurl = process.env.REACT_APP_API_URL;
  const navigate = useNavigate();

 
  // Inside your component

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${apiurl}/otp/verifyotp`, {
        otpcode: code,
      })
      .then((response) => {
        if (response.data === true) {
          console.log("OTP verified successfully");
          // Navigate to change password page
          navigate(`/changepassword/${id}`);
        } else {
          setMessage("Invalid OTP");
          // Display error message
          // You can set an error state here to display an error message in your UI
        }
      })
      .catch((error) => {
        setMessage("Error verifying OTP:", error);
        // Handle error - You can set an error state here to display an error message in your UI
      });
  };
  const [seconds, setSeconds] = useState(30);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (seconds === 0) {
        navigate(`/reset`);
      } else {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }
    }, 10000);
    return () => clearTimeout(timer);
  }, [seconds, navigate]);
  return (
    <div>
      <div class="relative min-h-screen flex  ">
        <div class="flex flex-col sm:flex-row items-center md:items-start sm:justify-center flex-auto min-w-0 bg-white">
          <div class="md:flex md:items-center md:justify-center w-full sm:w-auto md:h-full  xl:w-2/5 p-8  md:p-10 lg:p-14 sm:rounded-lg md:rounded-none bg-white ">
            <div class="max-w-md w-full space-y-8">
              <div class="text-center">
                <div className="items-center inline-block">
                  <img src="./image/zuret.png" className="w-36" alt="" />
                </div>
                <h2 class=" text-2xl font-bold text-gray-900">
                  Verify Your Code
                </h2>
                <p class="mt-2 text-sm text-gray-500">
                  Please enter your email
                </p>
              </div>

              <form class="mt-8 space-y-6" onSubmit={handleSubmit}>
                {/* email  */}

                <div class="relative">
                  {errorr && code.length <= 2 ? (
                    <div class="absolute right-3 mt-4">
                      <BsCheckCircle class="h-4 w-4 text-red-500" />
                    </div>
                  ) : (
                    ""
                  )}
                  <label class="ml-3 text-sm font-bold text-gray-700 tracking-wide">
                    Verify Code
                  </label>
                  <input
                    class="w-full content-center text-base px-4 py-2 border-b rounded-2xl border-gray-300 focus:outline-none focus:border-green-800"
                    type="number"
                    placeholder="12345"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                  />
                  <p className="font-small text-gray-500  px-4">
                    you have 00.{seconds}
                  </p>
                  <p className="font-small text-red-500  px-4">{message}</p>
                </div>
                {/* password */}

                <div>
                  {/* button */}
                  <button
                    type="submit"
                    class="w-full flex justify-center bg-gradient-to-r from-rose-800 to-rose-700  hover:bg-gradient-to-l hover:from-rose-600 hover:to-rose-700 text-gray-100 p-4  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
                  >
                    Reset
                  </button>
                </div>
                <p class="flex flex-col items-center justify-center mt-10 text-center text-md text-gray-500">
                  <span>Don't have an account?</span>
                  <a
                    href="/profile"
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

export default OtpVerify;
