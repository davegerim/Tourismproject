import axios from "axios";
import React, { useRef, useState } from "react";
import { BsCheckCircle } from "react-icons/bs";
import emailjs from "@emailjs/browser";
import { Button, Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useNavigate } from "react-router-dom";

function Forgot() {
  const [errorr, setError] = useState(false);
  const [message, setMessage] = useState(false);
  const [email, setEmail] = useState("");
  const [otpCodes, setOtpCodes] = useState("");
  const [userId, setUserId] = useState("");
  const form = useRef();
  const apiurl = process.env.REACT_APP_API_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${apiurl}/otp/generateCode`, {
        email: email,
      });

      // Extract the OTP code from the response
      const otpCode = response.data.otpcode;
      const userId = response.data.user.id;
      console.log(userId);
      console.log("otpsample", otpCode); // Check if you're getting the OTP code here
      setUserId(userId);
      // Send email with the OTP code
      await sendEmail(otpCode);

      // Set the OTP code for display
      setOtpCodes(otpCode);
    } catch (error) {
      alert("Email was not found");

      console.error("Error generating OTP:", error);
    }
  };

  const sendEmail = async (otpCode) => {
    console.log("OTP Code email:", otpCode);

    const templateParams = {
      user_name: "OTP CODE",
      user_email: email,
      message: `Your OTP code is: ${otpCode}`,
    };

    try {
      // Send email using emailjs
      const result = await emailjs.sendForm(
        "service_j6mkety",
        "template_p0ydfih",
        form.current,
        "zfRZFSqOIoz-Tpjbc",
        templateParams
      );

      console.log("Email sent successfully:", result.text);
    } catch (error) {
      console.error("Error sending email:", error.text);
    }
  };
  const [opened, { open, close }] = useDisclosure(false);

  const navigate = useNavigate();
  const verify = () => {
    navigate(`/verify/${userId}`);
  };

  const handleClick = () => {
    sendEmail(); // Assuming this function is defined and works as expected
    verify();
  };

  return (
    <div>
      <div className="relative min-h-screen flex">
        <div className="flex flex-col sm:flex-row items-center md:items-start sm:justify-center flex-auto min-w-0 bg-white">
          <div className="md:flex md:items-center md:justify-center w-full sm:w-auto md:h-full xl:w-2/5 p-8 md:p-10 lg:p-14 sm:rounded-lg md:rounded-none bg-white">
            <div className="max-w-md w-full space-y-8">
              <div className="text-center">
                <div className="items-center inline-block">
                  <img src="./image/zuret.png" className="w-36" alt="" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Reset Your Password!
                </h2>
                <p className="mt-2 text-sm text-gray-500">
                  Please enter your email
                </p>
              </div>
              <form
                className="mt-8 space-y-6"
                onSubmit={handleSubmit}
                ref={form}
              >
                {/* email  */}
                <div className="relative">
                  {errorr && email.length <= 0 ? (
                    <div className="absolute right-3 mt-4">
                      <BsCheckCircle className="h-4 w-4 text-red-500" />
                    </div>
                  ) : (
                    ""
                  )}
                  <label className="ml-3 text-sm font-bold text-gray-700 tracking-wide">
                    Email{" "}
                  </label>
                  <input
                    className="w-full content-center text-base px-4 py-2 border-b rounded-2xl border-gray-300 focus:outline-none focus:border-green-800"
                    type="email"
                    placeholder="mail@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <p className="font-small text-red-500  px-4">{message}</p>
                </div>
                {/* password */}
                <div>
                  {/* button */}
                  <button
                    type="submit"
                    onClick={open}
                    className="w-full flex justify-center bg-gradient-to-r
                    from-rose-800 to-rose-700 hover:bg-gradient-to-l
                    hover:from-rose-600 hover:to-rose-700 text-gray-100 p-4
                    rounded-full tracking-wide font-semibold shadow-lg
                    cursor-pointer transition ease-in duration-500"
                  >
                    {" "}
                    Reset
                  </button>
                </div>
                <Modal opened={opened} onClose={close} title="Are you Sure">
                  <div className="flex justify-center space-x-7">
                    <Button variant="filled" color="teal" onClick={handleClick}>
                      Yes
                    </Button>
                    <Button variant="filled" color="red">
                      No
                    </Button>
                  </div>
                </Modal>
                <p className="flex flex-col items-center justify-center mt-10 text-center text-md text-gray-500">
                  <span>Don't have an account?</span>
                  <a
                    href="/login"
                    className="text-indigo-400 hover:text-blue-500 cursor-pointer transition ease-in duration-300"
                  >
                    Sign In
                  </a>
                </p>
              </form>
              <form ref={form}>
                <textarea
                  name="message"
                  style={{ display: "none" }}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="123456"
                  value={otpCodes}
                ></textarea>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Forgot;
