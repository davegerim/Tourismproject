import React, { useEffect, useState } from "react";
import Navbarss from "../../User Page/navbars/Navbarss";
import axios from "axios";

function Booking() {
  const [searchTerm, setSearchTerm] = useState("");
  const [hotels, setHotels] = useState([]);
  const [filteredHotels, setFilteredHotels] = useState([]);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    axios
      .get("https://example.com/hotels")
      .then((response) => {
        setHotels(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    setShowResults(value !== "");
    if (value === "") {
      setFilteredHotels([]);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      setShowResults(true);
    }
  };

  const handleResultClick = (name) => {
    setSearchTerm(name);
    setShowResults(false);
    setFilteredHotels(
      hotels.filter((hotel) =>
        hotel.name.toLowerCase().includes(name.toLowerCase())
      )
    );
  };

  const handleBlur = (event) => {
    if (
      !filteredHotels.length &&
      !hotels.find(
        (hotel) => hotel.name.toLowerCase() === searchTerm.toLowerCase()
      )
    ) {
      setSearchTerm("");
    }
    setShowResults(false);
  };

  const handleListClick = (name) => {
    setSearchTerm(name);
    setShowResults(false);
    setFilteredHotels([]);
  };

  const filteredList = filteredHotels.length
    ? filteredHotels
    : hotels.filter((hotel) =>
        hotel.name.toLowerCase().includes(searchTerm.toLowerCase())
      );

  return (
    <div>
      <input
        type="text"
        placeholder="Search for a hotel"
        value={searchTerm}
        onChange={handleSearch}
        onKeyDown={handleKeyDown}
        onBlur={handleBlur}
      />
      {showResults && filteredList.length > 0 && (
        <ul>
          {filteredList.map((hotel) => (
            <li key={hotel.id} onClick={() => handleListClick(hotel.name)}>
              {hotel.name}
            </li>
          ))}
        </ul>
      )}
      {showResults && filteredList.length === 0 && <p>No hotels found</p>}
    </div>
  );
}
export default Booking;
