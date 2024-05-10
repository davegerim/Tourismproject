import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Payment from "./Payment";
import LoadingSpinner from "../../Basic/Loading";
import SucessfulMessage from "../../Basic/sucessmessage";
import ErrorMessage from "../../Basic/Errormsg"
function BookingPage() {
  const [firstname, setFirstname] = useState();
  const [email, setEmail] = useState();
  const [phonenumber, setPhonenumber] = useState();
  const [roomtype, setRoomtype] = useState();
  const [noofguests, setNoofguests] = useState();
  const [startdate, setStartdate] = useState();
  const [enddate, setEnddate] = useState();
  const [amount, setAmount] = useState();
  const [method, setMethod] = useState();
  const [checkOuted, setcheckOuted] = useState(false);
  const [showQRCode, setShowQRCode] = useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
    const [sucessful, setSeccessful] = useState(false);
    const [errors, setErrors] = useState(false);

  const toggleQRCode = () => {
    setShowQRCode(!showQRCode);
  };
  const handleRefreshClick = () => {
    window.location.reload();
  };
  const [number, setNumber] = useState(0);

  const { id } = useParams();

  const handleChange = (e) => {
    const value = parseInt(e.target.value);
    setNumber(value);
    document.getElementById("total").innerHTML = value * 99;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
setIsLoading(true)
    fetch("http://localhost:3000/hotelreservation/new", {
      method: "POST",
      headers: { "Content-Type": "application/JSON" },
      body: JSON.stringify({
        fullname: firstname,
        email: email,
        phoneNumber: phonenumber,
        roomType: roomtype,
        noofGuests: noofguests,
        startDate: startdate,
        endDate: enddate,
        roomPrice: totalprice,
        hotels: id,
      }),
    }).then(() => {
setIsLoading(false);
setSeccessful(true);

      console.log("posted");
    });
  };
  const totalprice = noofguests * 99;
  const tx_ref = firstname;
  const public_key = "CHAPUBK_TEST-eptq0Rd4NLo7nNxhS42toLwvJpYYScv7";

  return (
    <div class="flex items-center justify-center p-12">
      {isLoading ? <LoadingSpinner /> : ""}
      <form onSubmit={handleSubmit}>
        <div class=" w-full  bg-white p-8">
          <div class="mb-5">
            <label
              for="name"
              class="mb-3 block text-base font-medium text-[#07074D]"
            >
              Full Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Full Name"
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
          </div>
          <div class="mb-5">
            <label
              for="phone"
              class="mb-3 block text-base font-medium text-[#07074D]"
            >
              Phone Number
            </label>
            <input
              type="text"
              name="phone"
              id="phone"
              placeholder="Enter your phone number"
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              value={phonenumber}
              onChange={(e) => setPhonenumber(e.target.value)}
            />
          </div>
          <div class="mb-5">
            <label
              for="email"
              class="mb-3 block text-base font-medium text-[#07074D]"
            >
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div class="mb-5 pt-3">
            <div className="flex justify-between mb-5">
              <label class="mb-5 block text-base font-semibold text-[#07074D] sm:text-xl">
                Reserve Details
              </label>
              {/* <button class="hover:shadow-form rounded-md bg-rose-900 px-8 text-center text-base font-semibold text-white outline-none">
                  Add Room
                </button> */}
            </div>
            <div class="-mx-3 flex flex-wrap">
              <div class="w-full px-3 sm:w-1/2">
                <div class="mb-2">
                  <label
                    for="date"
                    class="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Room Type
                  </label>
                  <select
                    type="text"
                    name="area"
                    id="area"
                    placeholder="Room Type"
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    value={roomtype}
                    onChange={(e) => setRoomtype(e.target.value)}
                  >
                    <option></option>
                    <option value="Luxury Hotel">Standard Room</option>

                    <option value="Deluxe Room">Deluxe Room</option>
                    <option value="Suite Room">Suite Room</option>
                    <option value="Speciality Room">Speciality Room</option>
                  </select>
                </div>
              </div>
              <div class="w-full px-3 sm:w-1/2">
                <div class="mb-3">
                  <label
                    for="date"
                    class="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Number of Guest
                  </label>
                  <input
                    type="text"
                    name="city"
                    id="city"
                    placeholder="Number of Guest"
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    value={noofguests}
                    onChange={(e) => setNoofguests(e.target.value)}
                  />
                </div>
              </div>
              <div class="w-full px-3 sm:w-1/2">
                <div class="mb-5">
                  <label
                    for="date"
                    class="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Start Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    id="date"
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    value={startdate}
                    onChange={(e) => setStartdate(e.target.value)}
                  />
                </div>
              </div>
              <div class="w-full px-3 sm:w-1/2">
                <div class="mb-5">
                  <label
                    for="date"
                    class="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    End Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    id="date"
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    value={enddate}
                    onChange={(e) => setEnddate(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div class="mt-3 mb- mr-24">
                  <p>
                    $99 per person{" "}
                    <span className="ml-10" id="total">
                      Total:
                      {totalprice}$
                    </span>
                  </p>

                  <input
                    class=" w-full text-base px-4  border-b border-gray-300 focus:outline-none rounded-2xl focus:border-rose-900"
                    type="hidden"
                    value={totalprice}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                </div>

                <div className="mt-2   space-y-4">
                  <label class=" text-sm font-normal text-gray-700 tracking-wide">
                    Payment Method
                  </label>
                  <select
                    class=" w-full text-base px-4  border-b border-gray-300 focus:outline-none rounded-2xl focus:border-rose-900"
                    type="number"
                    value={method}
                    onChange={(e) => setMethod(e.target.value)}
                  >
                    <option value=""></option>
                    <option value="Chapa">Pay Chape</option>
                    <option value="On Cash">Pay OnCash</option>
                  </select>
                </div>
                {/* <div className="">
                  {method === "On Cash" && (
                    <button
                      type="submit"
                      class="mt-2 mr-8 w-full rounded-md bg-slate-800 py-1.5 font-medium text-blue-50 hover:bg-slate-700"
                      onClick={() => {
                        handleRefreshClick();
                      }}
                    >
                      Pay On Cash
                    </button>
                  )}
                  {method === "Chapa" && (
                    <button
                      onClick={() => {
                        setcheckOuted((prev) => !prev);
                        toggleQRCode();
                      }}
                      // onClick={toggleQRCode}
                      type="submit"
                      class="mt-2 mr-8 w-full rounded-md bg-green-800 py-1.5 font-medium text-blue-50 hover:bg-green-700"
                    >
                      Pay Chapa
                    </button>
                  )}
                </div> */}

                <Payment
                  toggleQRCode={toggleQRCode}
                  showQRCode={showQRCode}
                  setShowQRCode={setShowQRCode}
                  fname={firstname}
                  lname={firstname}
                  email={email}
                  amount={totalprice}
                  tx_ref={tx_ref}
                  public_key={public_key}
                />
              </div>
            </div>
          </div>
          <div>
            {method === "On Cash" && (
              <button
                onClick={() => {
                  setcheckOuted((prev) => !prev);
                  // handleRefreshClick();
                }}
                class="hover:shadow-form w-full rounded-md bg-rose-900 py-3 px-8 text-center text-base font-semibold text-white outline-none"
              >
                Book By Cash
              </button>
            )}

            {method === "Chapa" && (
              <button
                onClick={() => {
                  setcheckOuted((prev) => !prev);
                  toggleQRCode();
                }}
                class="hover:shadow-form w-full rounded-md bg-rose-900 py-3 px-8 text-center text-base font-semibold text-white outline-none"
              >
                Book With Chapa
              </button>
            )}
          </div>

          <div>{sucessful ? <SucessfulMessage /> : ""}</div>
          <div>{errors ? <ErrorMessage /> : ""}</div>
        </div>
      </form>
    </div>
  );
}

export default BookingPage;
