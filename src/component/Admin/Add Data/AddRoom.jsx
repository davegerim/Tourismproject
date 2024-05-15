import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function AddRoom() {
  const [attractionplacename, setAttractionplacename] = useState();
  const [description, setDescription] = useState();
  const [image, setImage] = useState(null);
  const [roomName, setRoomName] = useState();
  const [roomType, setRoomType] = useState();
  const [price, setPrice] = useState();
  const [area, setArea] = useState();
  const [person, setPerson] = useState();
  const [bed, setBed] = useState();
  const [rate, setRate] = useState();
  const [doc, setDoc] = useState([]);
  const [selectedDoc, setSelectedDoc] = useState();
  const [selectedImage, setSelectedImage] = useState(null);
const [selectedImages, setSelectedImages] = useState({
  image1: null,
  image2: null,
  image3: null,
});

const handleImageChanges = (event, identifier) => {
  const file = event.target.files[0];
  setSelectedImages({ ...selectedImages, [identifier]: file });
};
const handleImageUpload = async () => {
  try {
    const formData = new FormData();

    // Upload the first image
    formData.append("file", selectedImages.image1);
    formData.append("upload_preset", "pswsogjc");
    formData.append("cloud_name", "dlga80sph");
    const response1 = await axios.post(
      `https://api.cloudinary.com/v1_1/dlga80sph/image/upload`,
      formData
    );
    const imageUrl1 = response1.data.secure_url;

    // Upload the second image
    formData.delete("file"); // Clear formData for the next image
    formData.append("file", selectedImages.image2);
    const response2 = await axios.post(
      `https://api.cloudinary.com/v1_1/dlga80sph/image/upload`,
      formData
    );
    const imageUrl2 = response2.data.secure_url;

    // Upload the third image
    formData.delete("file"); // Clear formData for the next image
    formData.append("file", selectedImages.image3);
    const response3 = await axios.post(
      `https://api.cloudinary.com/v1_1/dlga80sph/image/upload`,
      formData
    );
    const imageUrl3 = response3.data.secure_url;

    // Send all image URLs to your backend
    const apiurl = process.env.REACT_APP_API_URL;
    await axios.post(`${apiurl}/hotel/addroom/{id}`, {
      roomName: roomName,
      description: description,
      area: area,
      bed: bed,
      image: imageUrl1,
      image2: imageUrl2,
      image3: imageUrl3,
      person: person,
      price: price,
      rate: rate,
      roomType: roomType,
      Hotel1: selectedDoc,
    });

    console.log("Images uploaded successfully");
  } catch (error) {
    console.error("Error uploading images:", error);
  }
};

  const handleUserChanges = (e) => {
    setSelectedDoc(e.target.value);
  };
  const handleImageChange = (e) => {
    setSelectedImage(e.target.files[0]);
  };
  
  useEffect(() => {
    axios
      .get("http://localhost:3000/hotel")
      .then((res) => {
        setDoc(res.data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);


  // const handleButtonClick = () => {
  //   if (selectedDoc !== "") {
  //     const url = `http://localhost:3000/addroom?item=${selectedDoc}`;
  //     window.location.href = url;
  //   }
  // };

  return (
    <div className=" flex mt-20 justify-center items-center  ">
      <div class="w-full max-w-lg  pl-10 mt-5 bg-white p-8 rounded-xl ">
        <div className="flex   mb-10 text-center items-center justify-center font-bold text-xl">
          <h1>Add Room</h1>
        </div>
        <div class="flex  -mx-3 mb-6 ">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              Room Name
            </label>
            <input
              type="text"
              placeholder="Attractionplace Name"
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-gray-700 focus:shadow-md"
              value={roomName}
              onChange={(e) => setRoomName(e.target.value)}
            />
          </div>

          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              Room Name
            </label>
            <select
              class="appearance-none block w-full bg-gray-50 text-gray-700 border
            border-gray-200 rounded-lg py-3 px-4 leading-tight
            focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              value={roomType}
              onChange={(e) => setRoomType(e.target.value)}
            >
              <option value="Luxury Hotel">Standard Room</option>

              <option value="Deluxe Room">Deluxe Room</option>
              <option value="Suite Room">Suite Room</option>
              <option value="Speciality Room">Speciality Room</option>
            </select>
          </div>
        </div>
        <div class="flex  -mx-3 mb-6 ">
          <div class="w-full md:w-1/2 px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Image 1
            </label>
            <input
              class="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="file"
              id="image1"
              onChange={(event) => handleImageChanges(event, "image1")}
            />
          </div>

          <div class="w-full md:w-1/2 px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Image 2
            </label>
            <input
              class="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="file"
              id="image2"
              onChange={(event) => handleImageChanges(event, "image2")}
            />
          </div>
          <div class="w-full md:w-1/2 px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Image 3
            </label>
            <input
              class="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="file"
              id="image3"
              onChange={(event) => handleImageChanges(event, "image3")}
            />
          </div>
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
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-city"
            >
              number of bed
            </label>
            <input
              class="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="number"
              value={bed}
              onChange={(e) => setBed(e.target.value)}
            />
          </div>
          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-city"
            >
              person
            </label>
            <input
              class="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="number"
              value={person}
              onChange={(e) => setPerson(e.target.value)}
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
              square meter area
            </label>
            <input
              class="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="number"
              value={area}
              onChange={(e) => setArea(e.target.value)}
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
              type="number"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
            ></input>
          </div>
          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-zip"
            >
              Hotel
            </label>
            <select
              className="w-full h-10 px-3 py-2 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-0 border border-gray-300 rounded-md"
              value={selectedDoc}
              onChange={handleUserChanges}
            >
              <option value="">Select Hotel</option>
              {doc.map((user) => (
                <option key={user.id} value={user.id}>
                  {user.hotelName}
                </option>
              ))}
            </select>
            <div>
              <p>{selectedDoc}</p>
            </div>
          </div>
        </div>
        {/* <button onClick={handleButtonClick}>Send</button> */}
        <div className="mt-5 text-right md:space-x-3 md:block flex flex-col-reverse">
          <button
            className="mb-2 md:mb-0 bg-rose-900 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-2xl hover:shadow-lg "
            onClick={handleImageUpload}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddRoom;
