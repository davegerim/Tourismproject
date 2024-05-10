import React, { useRef, useState } from "react";
import Navbarss from "../../User Page/navbars/Navbarss";
import { useParams } from "react-router-dom";

function Tripbook() {
  const [choose, setChoose] = useState(false);

  const [files, setFiles] = useState([]);
  const ref = useRef();

  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();
  const [noofguests, setNoofguests] = useState();
  const [startdate, setStartdate] = useState();
  const [enddate, setEnddate] = useState();
  const [number, setNumber] = useState(0);
const {id} = useParams()
  const handleChange = (e) => {
    const value = parseInt(e.target.value);
    setNumber(value);
    document.getElementById("total").innerHTML = value * 99;
  };

  const resetForm = () => {
    setFirstname("");
    setLastname("");
    setNoofguests("");
    setStartdate("");
    setEnddate(""); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    resetForm();

    fetch("http://localhost:3000/tripreservation/new", {
      method: "POST",
      headers: { "Content-Type": "application/JSON" },
      body: JSON.stringify({
        firstName: firstname,
        lastName: lastname,

        noofGuests: noofguests,
        startDate: startdate,
        endDate: enddate,
        placeId: id
      }),
    }).then(() => {
      console.log("posted");
    });
  };
  return (
    <div>
      <Navbarss className="relative" />
      <div class="flex items-center justify-center py-24 ">
        <div class=" w-full mt-28 ml-48 max-w-[550px]">
          <form onSubmit={handleSubmit}>
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
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
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
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
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
                value={noofguests}
                onChange={(e) => {
                  setNoofguests(e.target.value);
                  handleChange(e); // Call the handleChange function
                }}
              />
              <p>
                Total: $<span id="total">{number * 99}</span>
              </p>
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
                        value={startdate}
                        onChange={(e) => setStartdate(e.target.value)}
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
                        value={enddate}
                        onChange={(e) => setEnddate(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="w-full px-3 sm:w-1/2"></div>
            </div>
            <div class="mt-3 mb-3">
              <p>
                $99 per person{" "}
                <span className="ml-10" id="total">
                  Total:
                  {number * 99}$
                </span>
                <a
                  href="http://checkout.chapa.co/checkout/web/payment/SC-GWCZYuiie1sA"
                  class="hover:shadow-form  rounded-md ml-10 bg-green-500 hover:bg-green-500 py-3 px-8 text-center text-base font-semibold text-white outline-none"
                >
                  pay with chapa
                </a>
              </p>
            </div>

            <div>
              <button class="hover:shadow-form rounded-md bg-rose-900 hover:bg-rose-800 py-3 px-8 text-center text-base font-semibold text-white outline-none">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Tripbook;
