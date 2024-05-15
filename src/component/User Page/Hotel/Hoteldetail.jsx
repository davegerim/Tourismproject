import React, { useEffect, useRef, useState } from "react";
import { IoMdBed, IoMdList, IoMdPeople } from "react-icons/io";
import { BiArea } from "react-icons/bi";
import { MdWifi } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "@mantine/core/styles.css";
import Navbarss from "../navbars/Navbarss";
import { Splide, SplideSlide } from "@splidejs/react-splide";
// Default theme
import "@splidejs/react-splide/css";

// or other themes
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";

// or only core styles
import "@splidejs/react-splide/css/core";
import Demo from "./CardSlide";
function Hoteldetail() {
  const ref = useRef();
  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();
  const [phonenumber, setPhonenumber] = useState();
  const [roomtype, setRoomtype] = useState();
  const [noofguests, setNoofguests] = useState();
  const [startdate, setStartdate] = useState();
  const [enddate, setEnddate] = useState();
  const { id } = useParams();
  const [number, setNumber] = useState(0);
  const [choose, setChoose] = useState(false);
  const [files, setFiles] = useState();

  const [abel, setAbel] = useState([]);
  const [type, setType] = useState([]);
  const [statusroom, setStatusroom] = useState([]);

  const [numbers, setNumbers] = useState([]);
  const handleChange = (e) => {
    const value = parseInt(e.target.value);
    setNumber(value);
    document.getElementById("total").innerHTML = value * 99;
  };
  const resetForm = () => {
    setFirstname("");
    setLastname("");
    setPhonenumber("");
    setRoomtype("");
    setNoofguests("");
    setStartdate("");
    setEnddate("");
  };
  useEffect(() => {
    console.log("get");
    console.log(id);
    axios.get(`http://localhost:3000/hotel/${id}`).then((res) => {
      setFiles(res.data.room1);
      console.log(res.data);
    });
  }, []);

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

  const Navigate = useNavigate();
  function bookpage(id) {
    Navigate(`/booking/${id}`);
  }
  return (
    <div>
      <Navbarss />

      <div className="mt-20  mr-20 ml-20 pt-10"></div>
      <div class="m-2 w-full px-8 pb-6">
        <div class="rounded-xl border border-gray-200 bg-white p-6 shadow-lg">
          <h2 class="text-stone-700 text-xl font-bold">Apply filters</h2>
          <p class="mt-1 text-sm">Use filters to further refine search</p>
          <div class="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <div class="flex flex-col">
              <label for="name" class="text-stone-600 text-sm font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="skylight"
                class="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                onChange={(e) => setAbel(e.target.value)}
              />
            </div>

            <div class="flex flex-col">
              <label for="status" class="text-stone-600 text-sm font-medium">
                Room Type
              </label>

              <select
                class="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                onChange={(e) => setType(e.target.value)}
              >
                <option></option>
                <option>Standard Room</option>

                <option>Deluxe Room</option>
                <option>Suite Room</option>
                <option>Speciality Room</option>
              </select>
            </div>
            <div class="flex flex-col">
              <label for="status" class="text-stone-600 text-sm font-medium">
                Number of Guest
              </label>

              <select
                class="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                onChange={(e) => setNumbers(e.target.value)}
              >
                <option></option>
                <option>1</option>

                <option>2</option>
                <option>3</option>
                <option>4</option>

                <option>5</option>
              </select>
            </div>
            <div class="flex flex-col">
              <label for="date" class="text-stone-600 text-sm font-medium">
                Status
              </label>
              <select
                type="date"
                id="date"
                class="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                onChange={(e) => setStatusroom(e.target.value)}
              >
                <option></option>
                <option>available</option>
                <option>reserved</option>
              </select>
            </div>
          </div>

          <div class="mt-6 grid w-full grid-cols-2 justify-end space-x-4 md:flex">
            <button class="active:scale-95 rounded-lg bg-gray-200 px-8 py-2 font-medium text-gray-600 outline-none focus:ring hover:opacity-90">
              Reset
            </button>
            <button
              class="active:scale-95 rounded-lg bg-rose-900 px-8 py-2 font-medium text-white outline-none focus:ring hover:opacity-90"
              onClick={() => bookpage(id)}
            >
              Book
            </button>
          </div>
        </div>
      </div>
      <h2 class="mb-8 :mb-16 mt-10 text-3xl text-gray-700 tracking-tight leading-tight text-center  dark:text-white md:text-4xl">
        Choose your room
      </h2>
      <div className="flex flex-row space-x-4 px-4">
        <div>
          <Demo />
        </div>
        <div>
          <Demo />
        </div>
        <div>
          <Demo />
        </div>
        <div>
          <Demo />
        </div>
      </div>

      <div class=" flex  justify-center">
        {files &&
          files
            .filter((user) => user.roomName.toLowerCase().includes(abel))
            .filter((user) => user.person.toLowerCase().includes(numbers))
            .filter((user) => user.roomType.includes(type))
            .filter((user) => user.status.includes(statusroom))

            .map((user) => {
              return (
                <div class=" flex space-x-4 antialiased text-gray-900">
                  <div className="mt-14 " key={user.id}>
                    <Splide className="splide-container">
                      <SplideSlide>
                        <img
                          src={user.image}
                          alt=""
                          className="shadow-xl hover:shadow-2xl rounded-lg object-cover h-56 w-full m-2"
                        />
                      </SplideSlide>
                      <SplideSlide>
                        <img
                          src={user.image2}
                          alt=""
                          className="shadow-xl hover:shadow-2xl rounded-lg object-cover h-56 w-full m-2"
                        />
                      </SplideSlide>
                      <SplideSlide>
                        <img
                          src={user.image3}
                          alt=""
                          className="shadow-xl hover:shadow-2xl rounded-lg object-cover h-56 w-full m-2"
                        />
                      </SplideSlide>
                    </Splide> 

                    <div class="relative px-4 py-8 -mt-16  ">
                      <div class="bg-white hover:shadow-2xl p-4 rounded-lg shadow-lg">
                        <div class="flex justify-between mb-2">
                          <span class=" bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                            {user.roomName}
                          </span>

                          <div class="flex bg-rose-900 px-2 rounded-lg">
                            <div class="text-sm ml-1 items-start text-white">
                              {user.rate}
                            </div>
                            <span class="text-yellow-600 text-sm mt-1 ">
                              <AiFillStar />
                            </span>
                          </div>
                        </div>

                        <h4 class="mt-1 text-xl font-semibold uppercase leading-tight truncate"></h4>
                        <div className="flex ">
                          <span class="text-gray-600 text-md mt-1 mb-2">
                            {" "}
                            <IoMdBed />
                          </span>
                          <div class="ml-2"> Number of Beds: {user.bed}</div>
                        </div>
                        <div className="flex ">
                          <span class="text-gray-600 text-md mt-1 mb-2">
                            {" "}
                            <IoMdList />
                          </span>
                          <div class="ml-2"> Room Type: {user.roomType}</div>
                        </div>

                        <div className="flex ">
                          <span class="text-gray-600 text-md mt-1 mb-2">
                            {" "}
                            <IoMdPeople />
                          </span>
                          <div class="ml-2">Number of Guest: {user.person}</div>
                        </div>
                        <div className="flex">
                          <span class="text-gray-600 text-sm mt-1 mb-2">
                            <BiArea />{" "}
                          </span>
                          <div class="ml-2">
                            {" "}
                            Square area of the Room: {user.area}
                          </div>
                        </div>
                        <div className="flex">
                          <span class="text-gray-600 text-sm mt-1">
                            <MdWifi />{" "}
                          </span>
                          <div class="ml-2">Free WiFi</div>
                        </div>

                        <div class="mt-2 font-bold ">
                          Price: {user.price}
                          <span class="text-gray-600 text-sm"> ETB</span>
                        </div>
                        <div class="mt-2 font-bold text-rose-900 text-sm">
                          {user.status}
                        </div>
                        {user.status === "reserved" ? null : (
                          <div className=" flex justify-end mt-3">
                            <button
                              class="bg-rose-900 text-white  p-2 px-4 rounded-lg"
                              onClick={() => bookpage(id)}
                              // onClick={() => {
                              //   setChoose((prev) => !prev);
                              // }}
                            >
                              Reserve
                            </button>
                          </div>
                        )}
                        <div
                          ref={ref}
                          tabindex="-1"
                          class={`${
                            !choose && "hidden"
                          } overflow-y-auto overflow-x-hidden fixed mt-22 pl-96 ml-64 md:inset-0 h-modal md:h-full justify-center items-center`}
                          aria-hidden="true"
                        >
                          <div class="relative p-4 w-full max-w-md h-full md:h-auto  ">
                            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700 ">
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
                              <div class="flex  items-center justify-center  p-12  ">
                                <div class="mx-auto w-full max-w-[550px] ">
                                  <form
                                    onSubmit={handleSubmit}
                                    className="text-start "
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
                                        onChange={(e) =>
                                          setRoomtype(e.target.value)
                                        }
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
                                        onChange={(e) =>
                                          setStartdate(e.target.value)
                                        }
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
                                        onChange={(e) =>
                                          setEnddate(e.target.value)
                                        }
                                      />
                                    </div>
                                    <div class="mt-3 mb-3">
                                      <p>
                                        $99 per person{" "}
                                        <span className="ml-10" id="total">
                                          Total:
                                          {number * 99}$
                                        </span>
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
                </div>
              );
            })}
      </div>
    </div>
  );
}

export default Hoteldetail;
