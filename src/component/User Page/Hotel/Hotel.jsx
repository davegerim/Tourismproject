import React, { useEffect, useRef, useState } from "react";
import Navbarss from "../navbars/Navbarss";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Hotel() {
  const [choose, setChoose] = useState(false);
  const [files, setFiles] = useState([]);
  const [abel, setAbel] = useState([]);
  const [type, setType] = useState([]);
  const [city, setCity] = useState([]);
   const [rates, setRates] = useState([]);
  

  const ref = useRef();
  useEffect(() => {
    axios.get(`http://localhost:3000/hotel`).then((res) => {
      setFiles(res.data);
      console.log("get");
    });
  }, []);

  const navigate = useNavigate();

  function hotel(id) {
    navigate(`/hoteldetail/${id}`);
  }
  

  return (
    <>
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
              <label for="status" class="text-stone-600 text-sm font-medium">
                Hotel Type
              </label>

              <select
                class="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                onChange={(e) => setType(e.target.value)}
              >
                <option></option>
                <option>Luxury Hotel</option>

                <option>Classic Hotel</option>
                <option>Resort</option>
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

      <h2 class="mb-8 :mb-16 text-3xl text-gray-700 tracking-tight leading-tight text-center  dark:text-white md:text-4xl">
        Best Hotels to reserve
      </h2>

      <div class="grid grid-cols-1 h-full md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {files &&
          files
            .filter((user) => user.hotelName.toLowerCase().includes(abel))
            .filter((user) => user.hotelType.includes(type))
            .filter((user) => user.cityLocation.includes(city))
            // .filter((user) => user.rating.includes(rates))


            .map((user) => {
              return (
                <div
                  class="cursor-pointer rounded-xl bg-white p-3 shadow-lg hover:shadow-xl"
                  key={user.id}
                >
                  <div class="relative flex items-end overflow-hidden rounded-xl">
                    <img
                      // src={user?.image}
                      src={
                        user?.image
                          ? user.image.replace(/\\/g, "").replace(/"/g, "")
                          : ""
                      }
                      className="h-72 object-fill"
                      alt="wallpaper"
                    />

                    <div class="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5 text-yellow-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>

                      <span class="ml-1 text-sm text-slate-400">
                        {user.rating}
                      </span>
                    </div>
                  </div>

                  <div class="mt-1 p-2">
                    <h2 class="text-slate-700"> {user.hotelName}</h2>
                    <p class="mt-1 text-sm text-slate-400">
                      Hotel Type: {user.hotelType}
                    </p>
                    <p class="mt-1 text-sm text-slate-400">
                      Location: {user.cityLocation}
                    </p>

                    <p class="mt-1 text-sm text-slate-400">
                      Description: {user.description}
                    </p>

                    <div className="mt-5 text-right md:space-x-3 md:block flex flex-col-reverse">
                      <button
                        className="mb-2 md:mb-0 bg-rose-900 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-2xl hover:shadow-lg "
                        type="submit"
                        onClick={() => hotel(user.id)}
                      >
                        View Detail
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
      </div>
    </>
  );
}

export default Hotel;
