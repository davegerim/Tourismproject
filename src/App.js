// import { Route, Routes } from "react-router-dom";
// import "./App.css";
// import Home from "./Navbar/Home/Home";
// import Main from "./Navbar/Main/Main";
// import Main2 from "./Navbar/Main2/Main2";
// import Details from "./Navbar/Main2/Details";
// import Profile from "./component/Profile";

// import Loginprofile from "./component/Loginprofile";
// import Userlist from "./component/Users/Userlist";
// import MainNav from "./component/Dashboard/MainNav";
// import AddCity from "./component/Add Data/AddCity";
// import Booking from "./component/Booking/Booking";
// import Contactus from "./Navbar/Contact us/Contactus";

// function App() {
//   return (
//     <div className="App w-full flex">
//       <div className="">
//         <MainNav />
//       </div>
//       <div className="h-full w-full  bg-gray-200 relative overflow-y-auto lg:ml-64 mt-16">
//         <Routes>
//           <Route exact path="/home" element={<Home />} />
//         </Routes>

//         <Routes>
//           <Route exact path="/Trip" element={<Main />} />
//         </Routes>
//         <Routes>
//           <Route exact path="/detail" element={<Main2 />} />
//         </Routes>
//         <Routes>
//           <Route exact path="/details" element={<Details />} />
//         </Routes>

//         <Routes>
//           <Route exact path="/profile" element={<Profile />} />
//         </Routes>
//         <Routes>
//           <Route exact path="/loginprofile" element={<Loginprofile />} />
//         </Routes>
//         <Routes>
//           <Route exact path="/userlist" element={<Userlist />} />
//         </Routes>
//         <Routes>
//           <Route exact path="/addcity" element={<AddCity />} />
//         </Routes>
//         <Routes>
//           <Route exact path="/booking" element={<Booking />} />
//         </Routes>
//         <Routes>
//           <Route exact path="/contactus" element={<Contactus />} />
//         </Routes>
//       </div>
//     </div>
//   );
// }

// export default App;

import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useRef, useState } from "react";
import "./App.css";
import Home from "./Navbar/Home/Home";
import Main from "./Navbar/Main/Main";
import Main2 from "./Navbar/Main2/Main2";
import Details from "./Navbar/Main2/Details";
import Profile from "./component/Profile";
import Loginprofile from "./component/Loginprofile";
import Userlist from "./component/Users/Userlist";
import MainNav from "./component/Dashboard/MainNav";
import AddCity from "./component/Add Data/AddCity";
import Booking from "./component/Booking/Booking";
import Contactus from "./Navbar/Contact us/Contactus";
<<<<<<< HEAD
import Addattractionplace from "./component/Add Data/Addattractionplace";

=======
import AddPlace from "./component/Attraction Place/AddPlace";
import PlaceList from "./component/Attraction Place/PlaceList";
import CityList from "./component/Add Data/CityList";
import BookingList from "./component/Booking/BookingList";
>>>>>>> 397fa22762ac5e47a8c42d62573d3fa6b035f359
function App() {
  const location = useLocation();
  const [showSidebar, setShowSidebar] = useState(true);
  const ref = useRef(null);
  return (
    <div className="App w-full flex  bg-gray-100">
      {location.pathname !== "/Trip" &&
        location.pathname !== "/newreset" &&
        location.pathname !== "/newsignup" && (
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
            location.pathname === "/newreset" ||
            location.pathname === "/newsignup") &&
          "md:w-full"
        }`}
      >
        <div className="sticky top-0   h-16  "></div>

        <Routes>
          <Route exact path="/home" element={<Home />} />
        </Routes>

        <Routes>
          <Route exact path="/Trip" element={<Main />} />
        </Routes>

        <Routes>
          <Route exact path="/detail" element={<Main2 />} />
        </Routes>

        <Routes>
          <Route exact path="/details" element={<Details />} />
        </Routes>

        <Routes>
          <Route exact path="/profile" element={<Profile />} />
        </Routes>

        <Routes>
          <Route exact path="/loginprofile" element={<Loginprofile />} />
        </Routes>

        <Routes>
          <Route exact path="/userlist" element={<Userlist />} />
        </Routes>

        <Routes>
          <Route exact path="/booking" element={<Booking />} />
        </Routes>

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
          <Route
            exact
            path="/addattractionplace"
            element={<Addattractionplace />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
