import React from "react";

function ErrorMessage() {
  return (
    <div>
      <div class="bg-red-100 rounded-md p-1  flex animate__animated animate__bounceInLeft ">
        <svg
          class="stroke-2 stroke-current text-red-600 h-8 w-8 mr-2 flex-shrink-0"
          viewBox="0 0 24 24"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M0 0h24v24H0z" stroke="none" />
          <circle cx="12" cy="12" r="9" />
          <path d="M9 12l2 2 4-4" />
        </svg>

        <div class="text-red-700 ">
          <div class="font-normal text-md">
            Your Request has been Not Saved!
          </div>
        </div>
      </div>
    </div>
  );
}

export default ErrorMessage;
