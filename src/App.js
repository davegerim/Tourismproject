import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Navbar/Home/Home";
import Main from "./Navbar/Main/Main";
import Main2 from "./Navbar/Main2/Main2";
import Navbarss from "./Navbar/navbars/Navbarss";
import Details from "./Navbar/Main2/Details";
import Profile from "./component/Profile";

import Loginprofile from "./component/Loginprofile";

function App() {
  return (
    <div className="App">
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
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
      </div>
    </div>
  );
}

export default App;
