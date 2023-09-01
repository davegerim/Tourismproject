import axios from "axios";
import React, { useEffect, useState } from "react";

function AddPlace() {
  const [attractionplacename, setAttractionplacename] = useState();
  const [description, setDescription] = useState();
  const [image, setImage] = useState(null);
  const [price, setPrice] = useState();
  const [rate, setRate] = useState();
  const [doc, setDoc] = useState([]);
  const [selectedDoc, setSelectedDoc] = useState();
  const resetForm = () => {
    setAttractionplacename("");
    setDescription("");
    setImage("");
    setPrice("");
    setRate("");
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.addEventListener("load", () => {
      const base64Image = reader.result.replace(
        `/^data:image\/jpeg;base64,/`,
        ""
      );
      const byteArray = JSON.stringify(base64Image);
      setImage(byteArray);
    });

    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    resetForm();
    const apiurl = process.env.REACT_APP_API_URL;
    fetch(`${apiurl}/attractionplace/new`, {
      method: "POST",
      headers: { "Content-Type": "application/JSON" },
      body: JSON.stringify({
        placeName: attractionplacename,
        description: description,
        image: image,
        price: price,
        rate: rate,
        City1: selectedDoc,
      }),
    }).then(() => {
      console.log("posted");
    });
  };

  useEffect(() => {
    axios
      .get("http://localhost:3000/cities")
      .then((res) => {
        setDoc(res.data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);

  const handleUserChanges = (e) => {
    setSelectedDoc(e.target.value);
  };
  return (
    <div className=" flex mt-20 justify-center items-center  ">
      <form
        onSubmit={handleSubmit}
        class="w-full max-w-lg  pl-10 mt-5 bg-white p-8 rounded-xl "
      >
        <div className="flex   mb-10 text-center items-center justify-center font-bold text-xl">
          <h1>Add Attraction Place</h1>
        </div>
        <div class="flex  -mx-3 mb-6 ">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              Place Name
            </label>
            <input
              type="text"
              placeholder="Attractionplace Name"
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-gray-700 focus:shadow-md"
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
              id="fileInput"
              onChange={handleFileChange}
            />
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <label
            for="message"
            class="block mb-2 text-sm font-medium text-gray-700 dark:text-white"
          >
            Description
          </label>
          <textarea
            id="message"
            rows="4"
            class="block p-2.5 w-full text-sm   rounded-lg border      dark:placeholder-gray-700 dark:text-white dark:focus:ring-gray-700 dark:focus:border-gray-700"
            placeholder="Write a description about the attraction place..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div class="flex flex-wrap -mx-3 mb-2">
          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-city"
            >
              Price
            </label>
            <input
              class="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-city"
              type="birr"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-zip"
            >
              Rate
            </label>
            <input
              class="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-zip"
              type="rate"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
            ></input>
          </div>
          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-zip"
            >
              cities
            </label>
            <select
              className="w-full h-10 px-3 py-2 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-0 border border-gray-300 rounded-md"
              value={selectedDoc}
              onChange={handleUserChanges}
            >
              <option value="">Select City</option>
              {doc.map((user) => (
                <option key={user.id} value={user.id}>
                  {user.cityName}
                </option>
              ))}
            </select>
            <div>
              <p>{selectedDoc}</p>
            </div>
          </div>
        </div>
        <div className="mt-5 text-right md:space-x-3 md:block flex flex-col-reverse">
          <button className="mb-2 md:mb-0 bg-rose-900 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-2xl hover:shadow-lg ">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddPlace;
