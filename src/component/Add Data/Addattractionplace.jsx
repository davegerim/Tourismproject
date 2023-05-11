import React, { useState } from "react";

function Addattractionplace() {
  const [attractionplacename, setAttractionplacename] = useState();
  const [description, setDescription] = useState();
  const [image, setImage] = useState();
  const [price, setPrice] = useState();
  const [rate, setRate] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:3000/attractionplace/new", {
      method: "POST",
      headers: { "Content-Type": "application/JSON" },
      body: JSON.stringify({
        placeName: attractionplacename,
        description: description,
        image: image,
        price: price,
        rate: rate,
      }),
    }).then(() => {
      console.log("posted");
    });
  };
  return (
    <div>
      <div className=" flex mt-8 justify-center items-center  ">
        <form
          onSubmit={handleSubmit}
          class="w-full max-w-lg  pl-10 mt-5 bg-white p-8 rounded-xl "
        >
          <div className="flex   mb-10 text-center items-center justify-center font-bold text-xl">
            <h1>Add Attraction place</h1>
          </div>
          <div class="flex  -mx-3 mb-6 ">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-first-name"
              >
                Attraction place Name
              </label>
              <input
                type="text"
                name="fName"
                id="fName"
                placeholder="Name"
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                value={attractionplacename}
                onChange={(e) => setAttractionplacename(e.target.value)}
              />
            </div>
            <div class="w-full md:w-1/2 px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
              >
                Image
              </label>
              <input
                class="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="file"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <label
              for="text"
              class="block mb-2 text-sm font-medium text-gray-900 "
            >
              Description
            </label>
            <textarea
              class="block p-2.5 w-full text-sm   rounded-lg border      dark:placeholder-gray-400 text-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Write a description about the city..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            <label class="block mb-2 text-sm font-bold text-gray-700" for="Age">
              Price
            </label>
            <input
              class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="price"
              type="number"
              placeholder="price"
              min="5"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <label class="block mb-2 text-sm font-bold text-gray-700" for="Age">
              Rating
            </label>
            <input
              class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="price"
              type="ratio"
              placeholder=""
              value={rate}
              onChange={(e) => setRate(e.target.value)}
            />
          </div>
          <div class="flex flex-wrap -mx-3 mb-2"></div>
          <div className="mt-5 text-right md:space-x-3 md:block flex flex-col-reverse">
            <button className="mb-2 md:mb-0 bg-blue-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-2xl hover:shadow-lg ">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Addattractionplace;
