import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";

import { useRef, useState } from "react";
import "./App.css";
import Main from "./component/User Page/Trip/Main";
import Profile from "./component/Basic/Profile";
import MainNav from "./component/Admin/Dashboard/MainNav";
import AddCity from "./component/Admin/Add Data/AddCity";
import Booking from "./component/Admin/Booking/Booking";
import Contactus from "./component/User Page/Contact us/Contactus";
import AddPlace from "./component/Admin/Attraction Place/AddPlace";
import PlaceList from "./component/Admin/Attraction Place/PlaceList";
import CityList from "./component/Admin/Add Data/CityList";
import BookingList from "./component/Admin/Booking/BookingList";
import Dash from "./component/Admin/Dashboard/Dash";
import Home from "./component/User Page/Home/Home";
import Details from "./component/User Page/Trip/Details";

import Login from "./component/Basic/Login";
import Hotel from "./component/User Page/Hotel/Hotel";
import Home2 from "./component/User Page/homeedited/Home2";

import Return from "./component/User Page/Flight/Return";
import OneWay from "./component/User Page/Flight/OneWay";
import Popup from "./component/User Page/Hotel/Popup";
import Flight_reserve from "./component/Admin/Reservation/Flight_reserve";
import Hotel_reserve from "./component/Admin/Reservation/Hotel_reserve";
import Trip_reserve from "./component/Admin/Reservation/Trip_reserve";
import AddHotel from "./component/Admin/Add Data/AddHotel";
import HotelList from "./component/Admin/Add Data/HotelList";
import Attractionplace from "./component/User Page/Trip/Attractionplace";

function App() {
  const location = useLocation();
  const [showSidebar, setShowSidebar] = useState(true);
  const ref = useRef(null);
  // (function (w, d) {
  //   w.CollectId = "647b0f0ecc21ec7a2e93615b";
  //   var h = d.head || d.getElementsByTagName("head")[0];
  //   var s = d.createElement("script");
  //   s.setAttribute("type", "text/javascript");
  //   s.async = true;
  //   s.setAttribute("src", "https://collectcdn.com/launcher.js");
  //   h.appendChild(s);
  // })(window, document);

  (function (w, d) {
    w.CollectId = "647f5eaecc21ec7a2e936717";
    var h = d.head || d.getElementsByTagName("head")[0];
    var s = d.createElement("script");
    s.setAttribute("type", "text/javascript");
    s.async = true;
    s.setAttribute("src", "https://collectcdn.com/launcher.js");
    h.appendChild(s);
  })(window, document);

  return (
    <div className="App w-full flex  bg-gray-100">
      {location.pathname !== "/Trip" &&
        // location.pathname !== "/details/:id" &&
        location.pathname !== "/contactus" &&
        location.pathname !== "/flight" &&
        location.pathname !== "/hotel" &&
        location.pathname !== "/profile" &&
        location.pathname !== "/login" &&
        location.pathname !== "/Booking" &&
        location.pathname !== "/home2" &&
        location.pathname !== "/popup" &&
        location.pathname !== "/return" &&
        location.pathname !== "/attraction" &&
        location.pathname !== "/home" && (
          <div
            ref={ref}
            className={`md:w-[20%]  h-[100vh]  shadow top-0 ${
              showSidebar ? "flex fixed md:sticky" : "hidden"
            }`}
          >
            <MainNav
              showSidebar={showSidebar}
              setShowSidebar={setShowSidebar}
            />
          </div>
        )}

      <div
        className={`w-full md:w-[90%]  h-[100vh] overflow-auto ${
          !showSidebar && "md:w-full"
        } ${
          (location.pathname === "/Trip" ||
            // location.pathname === "/details/:id" ||
            location.pathname === "/contactus" ||
            location.pathname === "/flight" ||
            location.pathname === "/hotel" ||
            location.pathname === "/profile" ||
            location.pathname === "/Booking" ||
            location.pathname === "/login" ||
            location.pathname === "/home2" ||
            location.pathname === "/return" ||
            location.pathname === "/popup" ||
            location.pathname === "/attraction" ||
            location.pathname === "/home") &&
          "md:w-full"
        }`}
      >
        <div className="sticky top-0 "></div>

        <Routes>
          <Route exact path="/" element={<Dash />} />
        </Routes>
        <Routes>
          <Route exact path="/home" element={<Home />} />
        </Routes>

        <Routes>
          <Route exact path="/Trip" element={<Main />} />
        </Routes>

        <Routes>
          <Route exact path="/details/:id" element={<Details />} />
        </Routes>

        <Routes>
          <Route exact path="/attraction" element={<Attractionplace />} />
        </Routes>

        <Routes>
          <Route exact path="/profile" element={<Profile />} />
        </Routes>

        <Routes>
          <Route exact path="/login" element={<Login />} />
        </Routes>

        <Routes>
          <Route exact path="/booking" element={<Booking />} />
        </Routes>

        <Routes>
          <Route exact path="/hotel" element={<Hotel />} />
        </Routes>

        {/* contact us */}
        <Routes>
          <Route exact path="/contactus" element={<Contactus />} />
        </Routes>
        {/* about city */}
        <Routes>
          <Route exact path="/addcity" element={<AddCity />} />
        </Routes>
        <Routes>
          <Route exact path="/citylist" element={<CityList />} />
        </Routes>
        {/* about attraction place */}
        <Routes>
          <Route exact path="/addplace" element={<AddPlace />} />
        </Routes>
        <Routes>
          <Route exact path="/placelist" element={<PlaceList />} />
        </Routes>
        {/* booking list */}
        <Routes>
          <Route exact path="/bookinglist" element={<BookingList />} />
        </Routes>

        <Routes>
          <Route exact path="/home2" element={<Home2 />} />
        </Routes>
        <Routes>
          <Route exact path="/return" element={<Return />} />
        </Routes>
        <Routes>
          <Route exact path="/flight" element={<OneWay />} />
        </Routes>
        <Routes>
          <Route exact path="/popup" element={<Popup />} />
        </Routes>
        <Routes>
          <Route exact path="/flight_reserve" element={<Flight_reserve />} />
        </Routes>
        <Routes>
          <Route exact path="/hotel_reserve" element={<Hotel_reserve />} />
        </Routes>
        <Routes>
          <Route exact path="/trip_reserve" element={<Trip_reserve />} />
        </Routes>
        <Routes>
          <Route exact path="/addhotel" element={<AddHotel />} />
        </Routes>
        <Routes>
          <Route exact path="/hotellist" element={<HotelList />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
