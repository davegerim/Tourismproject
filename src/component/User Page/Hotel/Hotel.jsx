import React, { useEffect, useRef, useState } from "react";
import Navbarss from "../navbars/Navbarss";
import Search from "../navbars/Search";
import { BsClipboardData } from "react-icons/bs";
import { RiFileList3Line } from "react-icons/ri";
import axios from "axios";

function Hotel() {
  const [choose, setChoose] = useState(false);
  const [files, setFiles] = useState([]);
  const ref = useRef();
  useEffect(() => {
    axios.get("http://localhost:3000/hotel").then((res) => {
      setFiles(res.data);
      console.log("get");
    });
  }, []);

  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();
  const [phonenumber, setPhonenumber] = useState();
  const [roomtype, setRoomtype] = useState();
  const [noofguests, setNoofguests] = useState();
  const [startdate, setStartdate] = useState();
  const [enddate, setEnddate] = useState();

  const resetForm = () => {
    setFirstname("");
    setLastname("");
    setPhonenumber("");
    setRoomtype("");
    setNoofguests("");
    setStartdate("");
    setEnddate("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    resetForm();

    fetch("http://localhost:3000/hotelreservation/new", {
      method: "POST",
      headers: { "Content-Type": "application/JSON" },
      body: JSON.stringify({
        firstName: firstname,
        lastName: lastname,
        phoneNumber: phonenumber,
        roomType: roomtype,
        noofGuests: noofguests,
        startDate: startdate,
        endDate: enddate,
      }),
    }).then(() => {
      console.log("posted");
    });
  };
  return (
    <div className="fixed">
      <Navbarss />
      <div className="mt-20  mr-20 ml-20">
        <Search />
      </div>
      <h2 class="mb-8 :mb-16 text-3xl text-gray-700 tracking-tight leading-tight text-center  dark:text-white md:text-4xl">
        Best Hotels to reserve
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {files.map((user) => {
          return (
            <div class="cursor-pointer rounded-xl bg-white p-3 shadow-lg hover:shadow-xl">
              <div class="relative flex items-end overflow-hidden rounded-xl">
                <img
                  src={user?.image.replace(/\\/g, "").replace(/"/g, "")}
                  h-10
                  w-10
                  alt="wallpaper"
                />

                <div class="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 text-yellow-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>

                  <span class="ml-1 text-sm text-slate-400">4.9</span>
                </div>
              </div>

              <div class="mt-1 p-2" key={user.id}>
                <h2 class="text-slate-700"> {user.hotelName}</h2>
                <p class="mt-1 text-sm text-slate-400">{user.description}</p>

                <div className="mt-5 text-right md:space-x-3 md:block flex flex-col-reverse">
                  <button
                    className="mb-2 md:mb-0 bg-rose-900 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-2xl hover:shadow-lg "
                    type="submit"
                    onClick={() => {
                      setChoose((prev) => !prev);
                    }}
                  >
                    Book now
                  </button>
                  <div
                    ref={ref}
                    tabindex="-1"
                    class={`${
                      !choose && "hidden"
                    } overflow-y-auto overflow-x-hidden fixed mt-22 pl-96 ml-64 md:inset-0 h-modal md:h-full justify-center items-center`}
                    aria-hidden="true"
                  >
                    <div class="relative p-4 w-full max-w-md h-full md:h-auto">
                      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <button
                          type="button"
                          class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                          onClick={() => {
                            setChoose(false);
                          }}
                          data-modal-toggle="popup-modal"
                        >
                          <svg
                            aria-hidden="true"
                            class="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                          <span class="sr-only">Close modal</span>
                        </button>
                        <div class="flex items-center justify-center  p-12  ">
                          <div class="mx-auto w-full max-w-[550px]">
                            <form
                              onSubmit={handleSubmit}
                              className="text-start"
                            >
                              <div class="-mx-3 flex flex-wrap ">
                                <div class="w-full px-3 sm:w-1/2">
                                  <div class="mb-5">
                                    <label
                                      for="fName"
                                      class="mb-3 block text-base font-normal text-[#07074D]"
                                    >
                                      First Name
                                    </label>
                                    <input
                                      type="text"
                                      name="fName"
                                      id="fName"
                                      placeholder="First Name"
                                      class="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-normal text-[#6B7280] outline-none  "
                                      value={firstname}
                                      onChange={(e) =>
                                        setFirstname(e.target.value)
                                      }
                                    />
                                  </div>
                                </div>
                                <div class="w-full px-3 sm:w-1/2">
                                  <div class="mb-5">
                                    <label
                                      for="lName"
                                      class="mb-3 block text-base font-normal text-[#07074D]"
                                    >
                                      Last Name
                                    </label>
                                    <input
                                      type="text"
                                      name="lName"
                                      id="lName"
                                      placeholder="Last Name"
                                      class="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-normal text-[#6B7280] outline-none f"
                                      value={lastname}
                                      onChange={(e) =>
                                        setLastname(e.target.value)
                                      }
                                    />
                                  </div>
                                </div>
                              </div>
                              <div class="mb-4">
                                <label
                                  class="block mb-2 text-sm font-normal text-gray-700"
                                  for="email"
                                >
                                  Phone number
                                </label>
                                <input
                                  class="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-normal text-[#6B7280] outline-none  "
                                  id="email"
                                  type="number"
                                  placeholder="+251*********"
                                  value={phonenumber}
                                  onChange={(e) =>
                                    setPhonenumber(e.target.value)
                                  }
                                />
                              </div>
                              <div class="mb-5">
                                <label
                                  class="block mb-2 text-sm font-normal text-gray-700"
                                  for="Gender"
                                >
                                  Room Type
                                </label>
                                <select
                                  class="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-normal text-[#6B7280] outline-none  "
                                  type="text"
                                  placeholder="Gender"
                                  value={roomtype}
                                  onChange={(e) => setRoomtype(e.target.value)}
                                >
                                  <option>Classic</option>
                                  <option>lexury</option>
                                </select>
                              </div>
                              <div class="mb-5">
                                <label
                                  for="guest"
                                  class="mb-3 block text-base font-normal text-[#07074D]"
                                >
                                  number of guests
                                </label>
                                <input
                                  type="number"
                                  name="guest"
                                  id="guest"
                                  placeholder="1"
                                  min="0"
                                  class="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-normal text-[#6B7280] outline-none  "
                                  value={noofguests}
                                  onChange={(e) =>
                                    setNoofguests(e.target.value)
                                  }
                                />
                              </div>
                              <div class="mb-5">
                                <label
                                  for="guest"
                                  class="mb-3 block text-base font-normal text-[#07074D]"
                                >
                                  start Date
                                </label>
                                <input
                                  type="date"
                                  name="guest"
                                  id="guest"
                                  placeholder="1"
                                  min="0"
                                  class="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-normal text-[#6B7280] outline-none  "
                                  value={startdate}
                                  onChange={(e) => setStartdate(e.target.value)}
                                />
                              </div>
                              <div class="mb-5">
                                <label
                                  for="guest"
                                  class="mb-3 block text-base font-normal text-[#07074D]"
                                >
                                  End Date
                                </label>
                                <input
                                  type="date"
                                  name="guest"
                                  id="guest"
                                  placeholder="1"
                                  min="0"
                                  class="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-normal text-[#6B7280] outline-none  "
                                  value={enddate}
                                  onChange={(e) => setEnddate(e.target.value)}
                                />
                              </div>

                              <div className="mt-3 mb-3">
                                <p>
                                  <span class=" mr-20 font-normal">
                                    Total Price
                                  </span>
                                  $99
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Hotel;
