import React from "react";

function SucessfulMessage() {
  return (
    <div>
      <div class="bg-green-100 rounded-md p-3 flex animate__animated animate__bounceInLeft">
        <svg
          class="stroke-2 stroke-current text-green-600 h-8 w-8 mr-2 flex-shrink-0"
          viewBox="0 0 24 24"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M0 0h24v24H0z" stroke="none" />
          <circle cx="12" cy="12" r="9" />
          <path d="M9 12l2 2 4-4" />
        </svg>

        <div class="text-green-700 ">
          <div class="font-normal text-md">Your Request has been saved!</div>

          {/* <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            facilisis sollicitudin dui vel gravida. Fusce faucibus, elit sit
            amet porttitor vehicula, urna nisi dapibus tellus, a tincidunt velit
            mi quis nulla.
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default SucessfulMessage;
