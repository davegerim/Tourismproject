import React, { useEffect, useState } from "react";
import Navbarss from "../navbars/Navbarss";
import axios from "axios";

function OneWay() {
  const [searchTerm, setSearchTerm] = useState("");
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [search1Term, setSearch1Term] = useState("");
  const [countries1, setCountries1] = useState([]);
  const [filteredCountries1, setFilteredCountries1] = useState([]);
  const [showResults1, setShowResults1] = useState(false);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v2/all")
      .then((response) => {
        setCountries(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v2/all")
      .then((response) => {
        setCountries1(response.data);
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
      setFilteredCountries([]);
    }
  };

  const handleSearch1 = (event) => {
    const value1 = event.target.value;
    setSearch1Term(value1);
    setShowResults1(value1 !== "");
    if (value1 === "") {
      setFilteredCountries1([]);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      setShowResults(true);
    }
  };

  const handleKeyDown1 = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      setShowResults1(true);
    }
  };

  const handleResultClick = (name) => {
    setSearchTerm(name);
    setShowResults(false);
    setFilteredCountries(
      countries.filter((country) =>
        country.name.toLowerCase().includes(name.toLowerCase())
      )
    );
  };

  const handleResultClick1 = (name) => {
    setSearch1Term(name);
    setShowResults1(false);
    setFilteredCountries1(
      countries.filter((country) =>
        country.name.toLowerCase().includes(name.toLowerCase())
      )
    );
  };

  const handleBlur = () => {
    if (
      !filteredCountries.length &&
      !countries.find(
        (country) => country.name.toLowerCase() === searchTerm.toLowerCase()
      )
    ) {
      setSearchTerm("");
    }
  };

  const handleBlur1 = () => {
    if (
      !filteredCountries1.length &&
      !countries1.find(
        (country) => country.name.toLowerCase() === search1Term.toLowerCase()
      )
    ) {
      setSearchTerm("");
    }
  };

  const handleListClick = (name) => {
    setSearchTerm(name);
    setShowResults(false);
    setFilteredCountries([]);
  };

  const handleListClick1 = (name) => {
    setSearch1Term(name);
    setShowResults1(false);
    setFilteredCountries1([]);
  };

  const filteredList = filteredCountries.length
    ? filteredCountries
    : countries.filter((country) =>
        country.name.toLowerCase().includes(searchTerm.toLowerCase())
      );

  const filteredList1 = filteredCountries1.length
    ? filteredCountries1
    : countries1.filter((country) =>
        country.name.toLowerCase().includes(search1Term.toLowerCase())
      );

  return (
    <div className="fixed">
      <Navbarss />
      <div class="mt-32 mb-10 items-center  ml-96">
        <div class="border-b border-b-gray-200">
          <ul class="mt-10 flex items-center gap-4 text-sm font-medium">
            <li class="flex-1">
              <a
                href="flight"
                class="relative flex items-center justify-center gap-2 px-1 py-3 text-blue-700 after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-blue-700 hover:text-blue-700"
              >
                One-Way
              </a>
            </li>
            <li class="flex-1">
              <a
                href="return"
                class="flex items-center justify-center gap-2 px-1 py-3 text-gray-500 hover:text-blue-700"
              >
                Return
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class=" bg-white hover:shadow-xl rounded-xl ml-96 ">
        <div class=" items-center  justify-center p-10">
          <div class="mx-auto  w-full max-w-[550px]">
            <form className="">
              <div class="-mx-3 flex flex-wrap">
                <div class="w-full px-3 sm:w-1/2">
                  <div class="mb-5">
                    <label
                      for="fName"
                      class="mb-3 block text-base font-normal text-[#07074D]"
                    >
                      From
                    </label>
                    <input
                      type="text"
                      id="fName"
                      placeholder="Choose Departure flights"
                      class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      value={searchTerm}
                      onChange={handleSearch}
                      onKeyDown={handleKeyDown}
                    />
                    {showResults && filteredList.length > 0 && (
                      <ul>
                        {filteredList.map((country) => (
                          <li
                            key={country.alpha2Code}
                            onClick={() => handleListClick(country.name)}
                          >
                            {country.name}
                          </li>
                        ))}
                      </ul>
                    )}
                    {showResults && filteredList.length === 0 && (
                      <p>No countries found</p>
                    )}
                  </div>
                </div>
                <div class="w-full px-3 sm:w-1/2">
                  <div class="mb-5">
                    <label
                      for="lName"
                      class="mb-3 block text-base font-normal text-[#07074D]"
                    >
                      To
                    </label>
                    <input
                      type="text"
                      name="lName"
                      id="lName"
                      placeholder="Choose Return flights"
                      class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      value={search1Term}
                      onChange={handleSearch1}
                      onKeyDown={handleKeyDown1}
                    />
                    {showResults1 && filteredList1.length > 0 && (
                      <ul>
                        {filteredList1.map((country) => (
                          <li
                            key={country.alpha2Code}
                            onClick={() => handleListClick1(country.name)}
                          >
                            {country.name}
                          </li>
                        ))}
                      </ul>
                    )}
                    {showResults1 && filteredList1.length === 0 && (
                      <p>No countries found</p>
                    )}
                  </div>
                </div>
              </div>
              <div>
                <div class="md:mr-2 mb-4">
                  <label
                    class="block mb-2 text-sm font-normal text-gray-700"
                    for="Gender"
                  >
                    Calander
                  </label>
                  <select
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-normal text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    type="text"
                    placeholder="Gender"
                  >
                    <option>Ethiopian calander</option>
                    <option>Gregorian calander</option>
                  </select>
                </div>
              </div>
              <div>
                <div class=" md:mr-2 mb-4 md:mb-0">
                  <label
                    class="block mb-2 text-sm font-normal text-gray-700"
                    for="birthdate "
                  >
                    Departure date
                  </label>
                  <input
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-normal text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    id="firstName"
                    type="date"
                    placeholder="Birth date"
                  />
                </div>
              </div>
              <div>
                <div class="flex">
                  <div class="md:mr-2 mt-5">
                    <label
                      class="block mb-2 text-sm font-bold  font-normal text-gray-700"
                      for="Gender"
                    >
                      Male
                    </label>
                    <input
                      class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-normal text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      type="number"
                      placeholder=""
                    ></input>
                  </div>
                  <div>
                    <div class="md:ml-2 mt-5">
                      <label
                        class="block mb-2 text-sm font-normal text-gray-700"
                        for="Gender"
                      >
                        Female
                      </label>
                      <input
                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-normal text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        type="number"
                        placeholder=""
                      ></input>
                    </div>
                  </div>
                  <div>
                    <div class="md:ml-2 mt-5">
                      <label
                        class="block mb-2 text-sm font-normal text-gray-700"
                        for="Gender"
                      >
                        Child
                      </label>
                      <input
                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-normal text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        type="number"
                        placeholder=""
                      ></input>
                    </div>
                  </div>
                </div>
                <div>
                  <div>
                    <div class="md:mr-2 mb-4">
                      <label
                        class="block mb-2 text-sm font-normal text-gray-700"
                        for="Gender"
                      >
                        Cabin Class
                      </label>
                      <select
                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-normal text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        type="text"
                        placeholder="Gender"
                      >
                        <option>Economy</option>
                        <option>Business</option>
                        <option>First</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <div class="mt-5">
                <button class="hover:shadow-form rounded-md bg-rose-900 py-2 px-6 text-center text-base font-semibold text-white outline-none ">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OneWay;
