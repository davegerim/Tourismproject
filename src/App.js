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
import Flight from "./component/User Page/Flight/Flight";
import Login from "./component/Basic/Login";
import Hotel from "./component/User Page/Hotel/Hotel";
function App() {
  const location = useLocation();
  const [showSidebar, setShowSidebar] = useState(true);
  const ref = useRef(null);
  return (
    <div className="App w-full flex  bg-gray-100">
      {location.pathname !== "/Trip" &&
        location.pathname !== "/Details" &&
        location.pathname !== "/contactus" &&
        location.pathname !== "/flight" &&
        location.pathname !== "/hotel" &&
        location.pathname !== "/profile" &&
        location.pathname !== "/login" &&
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
            location.pathname === "/Details" ||
            location.pathname === "/contactus" ||
            location.pathname === "/flight" ||
            location.pathname === "/hotel" ||
            location.pathname === "/profile" ||
            location.pathname === "/login" ||
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
          <Route exact path="/details" element={<Details />} />
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
          <Route exact path="/flight" element={<Flight />} />
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
      </div>
    </div>
  );
}

export default App;
