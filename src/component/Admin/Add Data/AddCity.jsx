import axios from "axios";
import React, { useState } from "react";

function AddCity() {
  const [cityname, setCityname] = useState();
  const [description, setDescription] = useState();
  const [image, setImage] = useState();
  const apiurl = process.env.REACT_APP_API_URL;

  const [urls, setUrls] = useState([]);
  const [images, setImages] = useState([]);

  const handleImageChange = (event, index) => {
    const fileList = event.target.files;
    const fileArray = Array.from(fileList);
    setImages((prevImages) => {
      const updatedImages = [...prevImages];
      updatedImages[index] = fileArray[0];
      return updatedImages;
    });
  };

  const handleSubmit = (e, data) => {
    e.preventDefault();
    resetForm();
    axios
      .post(`${apiurl}/cities/new`, data)
      .then((response) => response.json())
      .then((data) => {
        console.log("posted");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  const uploadPro = (e) => {
    e.preventDefault();
    const uploadImage = async (image) => {
      const data = new FormData();
      data.append("file", image);
      data.append("upload_preset", "daveimage");
      data.append("cloud_name", "dc5oy2rmy");
      const url = "`https://api.cloudinary.com/v1_1/image/upload";

      return axios.post(url.data).then(({ data }) => {
        setImage((prev) => ({ ...prev, image: data.secure_url }));

        return data;
      });
    };
    Promise.all([uploadImage]).then((data) => {
      const updatedData = {
        cityName: cityname,
        description: description,
        image: data[0]?.secure_url,
      };
      handleSubmit(e, updatedData);
    });
  };

  const resetForm = () => {
    setCityname("");
    setDescription("");
    setImage("");
  };

  return (
    <div className=" flex mt-20 justify-center items-center  ">
      <form
        onSubmit={uploadPro}
        class="w-full max-w-lg  pl-10 mt-5 bg-white p-8 rounded-xl "
      >
        <div className="flex   mb-10 text-center items-center justify-center font-bold text-xl">
          <h1>Add City</h1>
        </div>
        <div class="flex  -mx-3 mb-6 ">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              City Name
            </label>
            <input
              type="text"
              name="fName"
              id="fName"
              placeholder="City Name"
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              value={cityname}
              onChange={(e) => setCityname(e.target.value)}
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
              onChange={(e) => handleImageChange(e)}
              id="fileInput"
            />
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <label
            for="message"
            class="block mb-2 text-sm font-medium text-gray-900 "
          >
            Description
          </label>
          <textarea
            id="message"
            rows="4"
            class="block p-2.5 w-full text-sm   rounded-lg border      dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Write a description about the city..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div class="flex flex-wrap -mx-3 mb-2"></div>
        <div className="mt-5 text-right md:space-x-3 md:block flex flex-col-reverse">
          <button
            className="mb-2 md:mb-0 bg-rose-900 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-2xl hover:shadow-lg "
            type="submit"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddCity;
