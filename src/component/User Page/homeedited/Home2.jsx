import React, { useEffect, useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { FaLinkedinIn, FaReact, FaTelegramPlane } from "react-icons/fa";
import { RiInstagramLine } from "react-icons/ri";
import { ImLocation } from "react-icons/im";
import { SiNestjs } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import Navbarss from "../navbars/Navbarss";
import "animate.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link, useParams } from "react-router-dom";

function Home2() {
  const [files, setFiles] = useState([]);
  const [abel, setAbel] = useState([]);
  const Navigate = useNavigate();
  useEffect(() => {
    axios.get("http://localhost:3000/cities").then((res) => {
      setFiles(res.data);
      console.log("get");
    });
  }, []);
  return (
    <div>
      <Navbarss />
      <section class="bg-white dark:bg-gray-900">
        <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div class="mr-auto place-self-center lg:col-span-7 pt-24">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold leading-none md:text-5xl xl:text-6xl dark:text-white">
              <span className="text-rose-800">Zuret</span> Tour Agency
            </h1>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Offer a range of travel styles, from luxury tours to
              budget-friendly options, and may focus on specific types of
              travel, such as adventure travel, cultural immersion, or food and
              wine tours
            </p>
            <a
              href="/profile"
              class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-rose-900 hover:bg-rose-700 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
              Get started
              <svg
                class="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
            <a
              href="/contactus"
              class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-rose border border-rose-800 rounded-lg hover:bg-rose-900 focus:ring-4 focus:ring-gray-100 dark:text-rose dark:border-gray-700 dark:hover:bg-white-700 dark:focus:ring-gray-800"
            >
              Contact us
            </a>
          </div>
          <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img
              // src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
              src="./image/lan.jpg"
              alt="mockup"
            />
          </div>
        </div>
      </section>

      <section class="bg-white dark:bg-gray-900">
        <div class="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
          <h2 class="mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-900 dark:text-white md:text-4xl">
            Visited Place
          </h2>
          <div
            className=" animate__animated
                 animate__pulse animate__delay-1s animate__infinite md:flex flex-row md:space-x-4 w-full text-xs mt-8  
                 "
          >
            {files
              .filter((user) => user.cityName.toLowerCase().includes(abel))
              .slice(0, 4)
              .map((user) => {
                return (
                  <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-full flex flex-col mb-3 animate__animated animate__backInRight hover:shadow-2xl">
                    <a href="/">
                      <img
                        class="rounded-t-lg h-56 w-96 ..."
                        src={user?.image.replace(/\\/g, "").replace(/"/g, "")}
                        alt=""
                      />
                    </a>
                    <div class="p-5" key={user.id}>
                      <a href="/">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                          {user.cityName}
                        </h5>
                      </a>
                      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        {user.description}
                      </p>
                      <Link
                        type="submit"
                        to={`/attraction/${user.id}`}
                        class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-rose-900 rounded-lg hover:bg-rose-800 focus:ring-4 focus:outline-none "
                      >
                        Read more
                        <svg
                          aria-hidden="true"
                          class="w-4 h-4 ml-2 -mr-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </Link>
                    </div>
                  </div>
                );
              })}
            {/* <div class="max-w-sm bg-white border hover: border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-full flex flex-col mb-3 animate__animated animate__backInRight hover:shadow-2xl">
              <a href="/">
                <img
                  class="rounded-t-lg h-56 w-96 ..."
                  src="./image/lalibela.jpg"
                  alt=""
                />
              </a>
              <div class="p-5">
                <a href="/">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Lalibela
                  </h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Lalibela (Amharic: ላሊበላ) is a town in the Amhara Region of
                  Ethiopia. Located in the Lasta district and North Wollo Zone,
                  it is a tourist site for its famous rock-cut monolithic
                  churches...
                </p>
                <a
                  href="/Details"
                  class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-rose-900 rounded-lg hover:bg-rose-800 focus:ring-4 focus:outline-none "
                >
                  Read more
                  <svg
                    aria-hidden="true"
                    class="w-4 h-4 ml-2 -mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
            <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-full flex flex-col mb-3 animate__animated animate__backInRight hover:shadow-2xl">
              <a href="/">
                <img
                  class="rounded-t-lg h-56 w-96 ..."
                  src="./image/volcano.jpg"
                  alt=""
                />
              </a>
              <div class="p-5">
                <a href="/">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Erta Ale
                  </h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Erta Ale (or Ertale or Irta'ale; Amharic: ኤርታሌ) is a
                  continuously active basaltic shield volcano in the Afar Region
                  of northeastern Ethiopia. It is situated in the Afar
                  Depression, a desert area. ...
                </p>
                <a
                  href="/Details"
                  class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-rose-900 rounded-lg hover:bg-rose-800 focus:ring-4 focus:outline-none "
                >
                  Read more
                  <svg
                    aria-hidden="true"
                    class="w-4 h-4 ml-2 -mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
            <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-full flex flex-col mb-3 animate__animated animate__backInRight hover:shadow-2xl">
              <a href="/">
                <img
                  class="rounded-t-lg h-56 w-96 ..."
                  src="./image/kids.jpg"
                  alt=""
                />
              </a>
              <div class="p-5">
                <a href="/">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Abuna Yemata
                  </h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Abuna Yemata Guh is a monolithic church located in the Hawzen
                  woreda of the Tigray Region, Ethiopia. It is situated at a
                  height of 2,580 metres (8,460 ft) ...
                </p>
                <a
                  href="/Details"
                  class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-rose-900 rounded-lg hover:bg-rose-800 focus:ring-4 focus:outline-none "
                >
                  Read more
                  <svg
                    aria-hidden="true"
                    class="w-4 h-4 ml-2 -mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      <section class="bg-white dark:bg-gray-900">
        <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 class="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white">
              Meet Our Team: Experts in Creating Customized Travel Itineraries
            </h2>
            <p class="mb-4">
              Our team is made up of experienced travel professionals who are
              passionate about what they do. We have extensive knowledge of the
              destinations we serve, and we work closely with local partners to
              ensure that our tours are sustainable, responsible, and respectful
              of the local culture and environment
            </p>
            <p>
              From the moment you contact us, we will work closely with you to
              create a personalized itinerary that meets your needs and exceeds
              your expectations.
            </p>
          </div>
          <div class="grid grid-cols-2 gap-4 mt-8">
            <img
              class="w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
              alt="office content 1"
            />
            <img
              class="mt-4 w-full lg:mt-10 rounded-lg"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
              alt="office content 2"
            />
          </div>
        </div>
      </section>
      <section class="bg-white  dark:bg-gray-900">
        <div class="py-8  lg:py-16 mx-auto max-w-screen-xl px-4">
          <h2 class="mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-900 dark:text-white md:text-4xl">
            Partner companies
          </h2>
          <div
            class=" ml-24 animate__animated
                animate__pulse animate__delay-1s animate__infinite grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-6 dark:text-gray-400"
          >
            <a href="/" class="flex justify-center items-center">
              <img
                src="./image/telebirr.png"
                alt="telebirr"
                class="h-50 text-rose-900 hover:text-rose-800 dark:hover:text-white w-50"
              />
            </a>
            <a href="/" class="flex justify-center items-center">
              <img
                src="./image/cbe1.png"
                alt="cbe"
                class="h-50 w-50 text-rose-900 hover:text-rose-800 dark:hover:text-white"
              />
            </a>
            <a href="/" class="flex justify-center items-center">
              <img
                src="./image/apollo.png"
                alt="apollo"
                class="h-9 text-rose-900 hover:text-rose-800 dark:hover:text-white"
              />
            </a>

            <a
              href="https://www.ahadubank.com/"
              class="flex justify-center items-center"
              target="_blank "
            >
              <img
                src="./image/ahadu.png"
                alt="ahadu"
                class="h-90 w-90 text-rose-900 hover:text-rose-800 dark:hover:text-white"
              />
            </a>
            <a href="/" class="flex justify-center items-center">
              <img
                src="./image/zemen.png"
                alt="zemen"
                class="h-90 w-90 text-rose-900 hover:text-rose-800 dark:hover:text-white"
              />
            </a>
          </div>
        </div>
      </section>
      <section class="bg-white dark:bg-gray-900">
        <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div class="mx-auto max-w-screen-sm text-center">
            <h2 class="mb-4 text-4xl font-extrabold leading-tight text-gray-900 dark:text-white">
              Subscribe Our Website
            </h2>
            <p class="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">
              Engage our blog and news post with{" "}
              <span className="text-rose-900 font-bold">Zuret</span> Tour
              Agency.
            </p>

            <input
              class="text-gray-700 border border-rose-900   font-small rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 "
              placeholder="email"
              type="email"
            ></input>

            <a
              href="/"
              class=" text-white bg-rose-900 hover:bg-rose-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Submit
            </a>
          </div>
        </div>
      </section>

      <footer class="p-4 bg-gray-50 sm:p-6 dark:bg-gray-800">
        <div class="mx-auto max-w-screen-xl">
          <div class="md:flex md:justify-between">
            <div class="mb-6 md:mb-0">
              <a href="https://github.com/davegerim" class="flex items-center">
                <img
                  src="./image/zuret.png"
                  class="mr-3 w-40 h-20"
                  alt="Logo"
                />
              </a>
            </div>
            <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Technology
                </h2>
                <ul class="text-gray-600 dark:text-gray-400">
                  <li class="mb-4">
                    {" "}
                    <div>
                      <a href="https://legacy.reactjs.org/docs/getting-started.html">
                        <span className="inline-flex mr-2">
                          <FaReact className="text-rose-900 hover:text-rose-700 " />
                        </span>
                        React Js
                      </a>
                    </div>
                  </li>
                  <li>
                    {" "}
                    <div>
                      <a href="https://docs.nestjs.com/">
                        <span className="inline-flex mr-2">
                          <SiNestjs className="text-rose-900 hover:text-rose-700 " />
                        </span>
                        Nest Js
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Follow us
                </h2>
                <ul class="text-gray-600 dark:text-gray-400">
                  <li class="mb-4">
                    <div>
                      <span className="inline-flex mr-2">
                        <AiFillGithub className="text-rose-900 hover:text-rose-700 " />
                      </span>
                      <a href="https://github.com/davegerim?tab=repositories">
                        Github
                      </a>
                    </div>
                  </li>
                  <li>
                    <span className="inline-flex mr-2">
                      <FaLinkedinIn className="text-rose-900 hover:text-rose-700 " />
                    </span>
                    <a href="https://www.linkedin.com/in/dawit-gerim-6086b3211">
                      LinkedIn
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Address
                </h2>
                <ul class="text-gray-600 dark:text-gray-400">
                  <li className="mb-4">
                    <p className="flex items-center">
                      <span className="inline-flex mr-2">
                        <MdEmail className="text-rose-900 hover:text-rose-700 " />
                      </span>
                      <span className="whitespace-nowrap overflow-hidden overflow-ellipsis">
                        davegerim@gmail.com
                      </span>
                    </p>
                  </li>
                  <li className="mb-4">
                    <div className="flex items-center">
                      <span className="inline-flex mr-2">
                        <ImLocation className="text-rose-900 hover:text-rose-700" />
                      </span>
                      <span className="whitespace-nowrap overflow-hidden overflow-ellipsis">
                        Addis Ababa,
                      </span>
                      <span className="whitespace-nowrap overflow-hidden overflow-ellipsis pl-1">
                        Ethiopia
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr class="my-6 border-rose-800 sm:mx-auto dark:border-gray-700 lg:my-8 " />
          <div class="sm:flex sm:items-center sm:justify-between">
            <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2023{" "}
              <a href="." class="hover:underline">
                Dawit Protifolio
              </a>
              . All Rights Reserved.
            </span>
            <div
              className=" pt-2 flex sm:justify-center space-x-6 animate__animated
                 animate__pulse animate__delay-1s animate__infinite"
            >
              <a
                href="https://www.facebook.com/dawit.gerim.7?mibextid=ZbWKwL"
                className="text-rose-900 hover:text-rose-700"
              >
                <BsFacebook className="h-5  w-5" />
              </a>
              <a
                href="https://instagram.com/davegerim?igshid=ZGUzMzM3NWJiOQ=="
                className="text-rose-900 hover:text-rose-700"
              >
                <RiInstagramLine className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/dawit-gerim-6086b3211"
                className="text-rose-900 hover:text-rose-700"
              >
                <FaLinkedinIn className="h-5 w-5" />
              </a>
              <a
                href="https://t.me/D4vv4"
                className="text-rose-900 hover:text-rose-700"
              >
                <FaTelegramPlane className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/davegerim?tab=repositories"
                className="text-rose-900 hover:text-rose-700"
              >
                <AiFillGithub className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      <script src="https://unpkg.com/flowbite@1.4.7/dist/flowbite.js"></script>
    </div>
  );
}

export default Home2;
