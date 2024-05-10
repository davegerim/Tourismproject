import React, { useState } from "react";

const CarouselContact = () => {
  const [scrollAmount, setScrollAmount] = useState(0);

  const scrollImages = (amount) => {
    setScrollAmount((prevAmount) => prevAmount + amount);
  };

  return (
    <div className="w-50 h-80 md:h-44 flex flex-col rounded-md bg-gray-50 dark:bg-gray-900 ml-20 mr-10 mt- py-5 md:p-3 border relative">
      <div
        className="images"
        style={{
          overflow: "auto",
          display: "flex",
          scrollSnapType: "x mandatory",
          scrollSnapAlign: "start",
        }}
      >
        <img
          src="https://www.kayak.co.uk/news/wp-content/uploads/sites/5/2023/08/THEME_HOTEL_SIGN_FIVE_STARS_FACADE_BUILDING_GettyImages-1320779330-3.jpg"
          alt="Image 1"
          style={{
            flex: "0 0 auto",
            width: "100%",
            scrollSnapAlign: "start",
            marginRight: "10px",
          }}
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR5AtWHgZKYlneM8HO9Tw_45rib0s52esvN25WeZAPHw&s"
          alt="Image 2"
          style={{
            flex: "0 0 auto",
            width: "100%",
            scrollSnapAlign: "start",
            marginRight: "10px",
          }}
        />
        <img
          src="https://www.kayak.co.uk/news/wp-content/uploads/sites/5/2023/08/THEME_HOTEL_SIGN_FIVE_STARS_FACADE_BUILDING_GettyImages-1320779330-3.jpg"
          alt="Image 3"
          style={{
            flex: "0 0 auto",
            width: "100%",
            scrollSnapAlign: "start",
            marginRight: "10px",
          }}
        />
        <img
          src="https://www.kayak.co.uk/news/wp-content/uploads/sites/5/2023/08/THEME_HOTEL_SIGN_FIVE_STARS_FACADE_BUILDING_GettyImages-1320779330-3.jpg"
          alt="Image 4"
          style={{
            flex: "0 0 auto",
            width: "100%",
            scrollSnapAlign: "start",
          }}
        />
        {/* Add more images as needed */}
      </div>
      <button
        className="prev absolute top-1/2 transform -translate-y-1/2 left-2"
        onClick={() => scrollImages(-200)}
      >
        ❮
      </button>
      <button
        className="next absolute top-1/2 transform -translate-y-1/2 right-2"
        onClick={() => scrollImages(200)}
      >
        ❯
      </button>
      <div className="flex items-center ">
        <div className="h-32 w-32 rounded-md overflow-hidden">
          <img
            src="https://www.kayak.co.uk/news/wp-content/uploads/sites/5/2023/08/THEME_HOTEL_SIGN_FIVE_STARS_FACADE_BUILDING_GettyImages-1320779330-3.jpg"
            alt="Alt image name"
            className="h-full w-full bg-contain"
          />
        </div>
        <div className="flex-1 flex flex-col items-start p-3 md:px-6">
          <h2 className="text-lg font-bold leading-5">
            Introducing Holiday Packages with Villas:
          </h2>
          <div className="h-1 w-16 border-b my-2 border-blue-500"></div>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Explore unique stay options like Villas, Homestay, Cottages, Tent,
            Beach huts, etc.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between px-5 flex-1">
        <h4 className="text-gray-700 font-light text-sm dark:text-gray-300">
          T&C Apply
        </h4>
        <button
          className="text-blue-600 text-sm font-semibold"
          fdprocessedid="hrlvvvg"
        >
          BOOK NOW
        </button>
      </div>
    </div>
  );
};

export default CarouselContact;
