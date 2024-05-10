// LoadingSpinner.js
import React from "react";

const LoadingSpinner = () => {
  return (
  

    <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div class="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-yellow-500"></div>
      <img
        src="./image/zuret.png"
        class="rounded-full h-28 w-28 object-contain"
        alt="loading"
      />
    </div>
  );
};

export default LoadingSpinner;
