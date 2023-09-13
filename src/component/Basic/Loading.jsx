import React from "react";

function Loading() {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-tahiti-600">
        <img src="/image/zuret.png"></img>
      </div>
    </div>
  );
}

export default Loading;
