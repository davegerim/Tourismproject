import React, { useEffect, useRef, useState } from "react";
import { IoMdBed, IoMdPeople } from "react-icons/io";
import { BiArea } from "react-icons/bi";
import { MdWifi } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
import { useParams } from "react-router-dom";
import axios from "axios";
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
  const [attract, setAttract] = useState([]);
  const [number, setNumber] = useState(0);
  const [choose, setChoose] = useState(false);
  const [files, setFiles] = useState();
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
  return (
    <div>
      <h2 class="mb-8 :mb-16 mt-10 text-3xl text-gray-700 tracking-tight leading-tight text-center  dark:text-white md:text-4xl">
        Choose your room
      </h2>
      <div class=" flex  justify-center">
        {files &&
          files.map((user) => {
            return (
              <div class=" flex space-x-4 antialiased text-gray-900">
                <div className="mt-14 ">
                  <img
                    src={
                      user?.image
                        ? user.image.replace(/\\/g, "").replace(/"/g, "")
                        : ""
                    }
                    alt=""
                    class="shadow-xl hover:shadow-2xl rounded-lg h-56 w-96 ... m-2 "
                  />

                  <div class="relative px-4 py-8 -mt-16  " key={user.id}>
                    <div class="bg-white hover:shadow-2xl p-4 rounded-lg shadow-lg">
                      <div class="flex justify-between mb-2">
                        <span class=" bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                          {user.description}
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
                        <div class="ml-2"> {user.bed}</div>
                      </div>

                      <div className="flex ">
                        <span class="text-gray-600 text-md mt-1 mb-2">
                          {" "}
                          <IoMdPeople />
                        </span>
                        <div class="ml-2">{user.person}</div>
                      </div>
                      <div className="flex">
                        <span class="text-gray-600 text-sm mt-1 mb-2">
                          <BiArea />{" "}
                        </span>
                        <div class="ml-2">{user.area}</div>
                      </div>
                      <div className="flex">
                        <span class="text-gray-600 text-sm mt-1">
                          <MdWifi />{" "}
                        </span>
                        <div class="ml-2">Free WiFi</div>
                      </div>

                      <div class="mt-2 font-bold">
                        {user.price}
                        <span class="text-gray-600 text-sm"> /wk</span>
                      </div>

                      <div className=" flex justify-end mt-3">
                        <button
                          class="bg-rose-900 text-white  p-2 px-4 rounded-lg"
                          onClick={() => {
                            setChoose((prev) => !prev);
                          }}
                        >
                          Reserve
                        </button>
                      </div>
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
                                      onChange={handleChange}
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
