import React, { useRef, useState } from "react";
import { BsClipboardData } from "react-icons/bs";
import { RiFileList3Line } from "react-icons/ri";

function Popup() {
  const [choose, setChoose] = useState(false);
  const ref = useRef();
  return (
    <div>
      <button
        class=" text-slate-800 hover:text-yellow-600  focus:ring-blue-300 font-medium rounded-lg text-sm  py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
        data-modal-toggle="popup-modal"
        onClick={() => {
          setChoose((prev) => !prev);
        }}
      >
        {/* <BiSend /> */}
        {/* <RiFileList3Line title="detail" /> */}
        Book Now
      </button>
      <div
        ref={ref}
        tabindex="-1"
        class={`${
          !choose && "hidden"
        } overflow-y-auto overflow-x-hidden fixed mt-40 pl-96 ml-36 md:inset-0 h-modal md:h-full justify-center items-center`}
        aria-hidden="true"
      >
        <div class="relative p-4 w-full max-w-md h-full md:h-auto">
          <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button
              type="button"
              class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
              onClick={() => {
                setChoose(false);
              }}
              data-modal-toggle="popup-modal"
            >
              <svg
                aria-hidden="true"
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span class="sr-only">Close modal</span>
            </button>
            <div class="p-6 text-center">
              <BsClipboardData class="mx-auto mb-4 w-14 h-14 text-gray-400 dark:text-gray-200" />

              <h2 className="py-3">Send To The Doctor</h2>
              <div className="flex ">
                <div className=" flex-1 mb-4">
                  <label
                    for="first_name"
                    class="flex mb-2 text-sm font-small text-gray-700 dark:text-gray-300"
                  >
                    Date
                  </label>
                  <input
                    class="w-full text-gray-700 text-sm  px-4 py-3  shadow-md hover:shadow-xl    border-gray-700 rounded-lg focus:outline-none focus:border-purple-400"
                    type="date"
                  ></input>
                </div>
              </div>

              <div className="mb-4">
                <label class="flex mb-2 text-sm font-small text-gray-700 dark:text-gray-300">
                  Doctor
                </label>

                <select class="w-full text-gray-700 text-sm  px-4 py-3  shadow-md hover:shadow-xl    border-gray-700 rounded-lg focus:outline-none focus:border-purple-400">
                  <option>Dave</option>
                </select>
              </div>
              <button
                data-modal-toggle="popup-modal"
                type="button"
                class="text-gray-500 hover:text-white hover:bg-slate-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2 hover:shadow-lg
                             bg-white  border border-gray-200focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 "
                //  onClick={(e)=>setSelectedpatient(e.target.value)}
              >
                Send
              </button>
              <button
                data-modal-toggle="popup-modal"
                type="button"
                class="text-gray-500 bg-white hover:bg-gray-100 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 dark:bg-gray-700 hover:shadow-lg dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600"
                onClick={() => setChoose(false)}
              >
                No, cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popup;
