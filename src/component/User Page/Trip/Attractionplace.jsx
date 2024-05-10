import React, { useEffect, useState } from "react";
import Navbarss from "../navbars/Navbarss";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Row from "./Row";
import { Splide, SplideSlide } from "@splidejs/react-splide";

function Attractionplace() {
  const [detail, setDetail] = useState(false);
  const [show, setShow] = useState(false);
  const [attract, setAttract] = useState([]);
  const [type, setType] = useState([]);
   const [rates, setRates] = useState([]);
  const [abel, setAbel] = useState([]);
  const [city, setCity] = useState([]);




  const { id } = useParams();

  useEffect(() => {
    console.log("get");
    console.log(id);
    axios.get(`http://localhost:3000/cities/${id}`).then((res) => {
      setAttract(res.data.attractionplace1);
      console.log(res.data);
    });
  }, []);

  const Navigate = useNavigate();

  return (
    <div>
      <Navbarss className="fixed" />
      <div class="m-2 w-full px-8 pb-6 pt-32">
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
                City
              </label>

              <select
                class="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                onChange={(e) => setCity(e.target.value)}
              >
                <option></option>
                <option>DireDawa</option>

                <option>Addis Abeba</option>
                <option>Adama</option>
              </select>
            </div>

            <div class="flex flex-col">
              <label for="date" class="text-stone-600 text-sm font-medium">
                Rate
              </label>
              <select
                type="date"
                id="date"
                class="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                onChange={(e) => setRates(e.target.value)}
              >
                <option></option>
                <option>1</option>
                <option>2</option>

                <option>3</option>

                <option>4</option>

                <option>5</option>
              </select>
            </div>
          </div>

          <div class="mt-6 grid w-full grid-cols-2 justify-end space-x-4 md:flex">
            <button class="active:scale-95 rounded-lg bg-gray-200 px-8 py-2 font-medium text-gray-600 outline-none focus:ring hover:opacity-90">
              Reset
            </button>
            <button class="active:scale-95 rounded-lg bg-blue-600 px-8 py-2 font-medium text-white outline-none focus:ring hover:opacity-90">
              Search
            </button>
          </div>
        </div>
      </div>

      <section class="h-screen bg-gray-100 py-12 sm:py-16 lg:py-10">
        <div class="mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-center justify-center">
            <h1 class="text-2xl mt-5 font-semibold text-gray-900">
              Visited Place
            </h1>
          </div>

          <div class="mt-8 md:mt-12 ">
            <div class="bg-white shadow mb-6">
              <div class="px-4 py-6 sm:px-8 sm:py-10">
                <div class="flow-root">
                  <ul class="-my-8">
                    {attract &&
                      attract
                        .filter((user) =>
                          user.placeName.toLowerCase().includes(abel)
                        )
                        .slice(0, 5)
                        .map((user) => <Row user={user} />)}
                  </ul>
                </div>
              </div>
            </div>

            <div class="mt-6 text-center">
              <button
                type="button"
                class="group inline-flex w-full items-center justify-center rounded-md bg-rose-900 px-6 py-4 text-lg font-semibold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-rose-800"
              >
                See More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="group-hover:ml-8 ml-4 h-6 w-6 transition-all"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Attractionplace;
