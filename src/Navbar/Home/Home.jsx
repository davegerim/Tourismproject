import React from "react";
import { useNavigate } from "react-router-dom";
import camel from "../video/camel.mp4";
import Navbarss from "../navbars/Navbarss";

function Home() {
  const navigate = useNavigate();

  function go() {
    navigate("/Trip");
  }
  function Flight() {
    navigate("/Flight");
  }
  function Contact() {
    navigate("/contactus");
  }
  return (
    <div class="pt-8 px-8">
      <Navbarss />
      {/* <div>
        <video
          src={camel}
          autoplay
          loop
          muted
          class="w-full h-full  bg-no-repeat bg-cover"
        />
      </div> */}
      {/* <div>
        <video
          class="w-full h-auto max-w-full border border-gray-200 rounded-lg dark:border-gray-700 autoplay loop controls"
          autoplay
          loop
          controls
        >
          <source src={camel} />
          Your browser does not support the video tag.
        </video>
      </div> */}
      <section class="py-20 bg-white">
        <div class="flex flex-col px-8 mx-auto space-y-12 max-w-7xl xl:px-12 ">
          <div class="relative">
            <h2 class="w-full text-3xl font-bold text-center sm:text-4xl md:text-5xl  animate__animated animate__swing  animate__slower	3s">
              {" "}
              Time to travel
            </h2>
            <p class="w-full py-8 mx-auto -mt-2 text-lg text-center text-gray-700 intro sm:max-w-3xl text-xl">
              If you are looking to be an entrepreneur and want to do something
              unique and different travel with us{" "}
            </p>
          </div>
          <div class="flex flex-col mb-8 animated fadeIn sm:flex-row">
            <div class="flex items-center mb-8 sm:w-1/2 md:w-5/12 sm:order-last">
              <img
                class="rounded-lg shadow-xl  animate__animated animate__backInRight animate__delay-2s"
                src="https://cdn.vectorstock.com/i/1000x1000/53/05/family-summer-tourism-travel-vacation-on-tropical-vector-44545305.webp"
                alt=""
              />
            </div>
            <div class="flex flex-col justify-center mt-5 mb-8 md:mt-0 sm:w-1/2 md:w-7/12 sm:pr-16">
              <h3 class="mt-2 text-2xl sm:text-left md:text-4xl">
                Where do you want to go?
              </h3>
              <p class="mt-5 text-lg text-gray-700 text md:text-left">
                press the button below to select your trip address and for other
                services like booking to hotels and resturants
              </p>
              <div>
                <button
                  className="bg-gray-800 text-white py-2 px-4 rounded-md mt-6"
                  onClick={go}
                >
                  Go to Trip
                </button>
              </div>
            </div>
          </div>
          <div class="flex flex-col mb-8 animated fadeIn sm:flex-row">
            <div class="flex items-center mb-8 sm:w-1/2 md:w-5/12">
              <img
                class="rounded-lg shadow-xl animate__animated animate__backInLeft animate__delay-4s"
                src="https://cdn.vectorstock.com/i/1000x1000/82/63/plane-flying-to-the-destination-vector-22728263.webp"
                alt=""
              />
            </div>
            <div class="flex flex-col justify-center mt-5 mb-8 md:mt-0 sm:w-1/2 md:w-7/12 sm:pl-16">
              <h3 class="mt-2 text-2xl sm:text-left md:text-4xl">
                Book your flights here
              </h3>
              <p class="mt-5 text-lg text-gray-700 text md:text-left">
                Press the button below to select your flight airlines to book
                and even to pay for them all in ones.
              </p>
              <div>
                <button
                  className="bg-gray-800 text-white py-2 px-4 rounded-md mt-6"
                  onClick={Flight}
                >
                  Go to Flight
                </button>
              </div>
            </div>
          </div>
          <div class="flex flex-col mb-8 animated fadeIn sm:flex-row">
            <div class="flex items-center mb-8 sm:w-1/2 md:w-5/12 sm:order-last">
              <img
                class="rounded-lg shadow-xl animate__animated animate__backInRight animate__delay-5s animate__slower	3s"
                src="https://cdn.vectorstock.com/i/1000x1000/93/39/customer-review-concept-contact-us-form-flat-vector-44559339.webp"
                alt=""
              />
            </div>
            <div class="flex flex-col justify-center mt-5 mb-8 md:mt-0 sm:w-1/2 md:w-7/12 sm:pr-16">
              <h3 class="mt-2 text-2xl sm:text-left md:text-4xl">
                Ways to get in touch with us
              </h3>
              <p class="mt-5 text-lg text-gray-700 text md:text-left">
                Press the button below to contact us in different ways at any
                time and place
              </p>
              <div>
                <button
                  className="bg-gray-800 text-white py-2 px-4 rounded-md mt-6"
                  onClick={Contact}
                >
                  Contact us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
