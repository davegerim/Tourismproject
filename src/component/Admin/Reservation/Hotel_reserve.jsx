import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import Hotel_reserve_row from "./Hotel_reserve_row";

function Hotel_reserve() {
  const [choose, setChoose] = useState(false);

  const [files, setFiles] = useState([]);
  const [abel, setAbel] = useState([]);
  const refs = useRef(null);

  function getUsers() {
    axios.get("http://localhost:3000/hotelreservation").then((res) => {
      setFiles(res.data);
    });
  }

  // function getUsers1() {
  //   axios.get("http://localhost:3000/hotel").then((res) => {
  //     setFiles(res.data);
  //   });
  // }

  const deleted = (id, e) => {
    e.preventDefault();
    axios.delete(`http://localhost:3000/hotelreservation/${id}`).then((res) => {
      console.log("delete", res);
      getUsers();
    });
  };

  // const exports = useRef();
  // const change = useReactToPrint({
  //   content: () => exports.current,
  //   documentTitle: "user List",
  //   onAfterPrint: () => alert("Data Saved"),
  // });

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="px-8 mt-20 py-8">
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <div className="flex mb-8">
          <div className="flex-1">
            <h1 className="font-medium"> Hotel reservation list</h1>
          </div>
        </div>
        <div class="m-2 w-full pb-6">
          <div class="rounded-xl border border-gray-200 bg-white p-6 shadow-lg">
           
            <div class="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              <div class="flex flex-col">
                <label for="name" class="text-stone-600 text-sm font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="skylight"
                  class="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  onChange={(e) => setAbel(e.target.value)}
                />
              </div>

              <div class="flex flex-col">
                <label for="status" class="text-stone-600 text-sm font-medium">
                  Room Type
                </label>

                <select
                  class="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  // onChange={(e) => setType(e.target.value)}
                >
                  <option></option>
                  <option>Standard Room</option>

                  <option>Deluxe Room</option>
                  <option>Suite Room</option>
                  <option>Speciality Room</option>
                </select>
              </div>
              <div class="flex flex-col">
                <label for="status" class="text-stone-600 text-sm font-medium">
                  Number of Guest
                </label>

                <select
                  class="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  // onChange={(e) => setNumbers(e.target.value)}
                >
                  <option></option>
                  <option>1</option>

                  <option>2</option>
                  <option>3</option>
                  <option>4</option>

                  <option>5</option>
                </select>
              </div>
              <div class="flex flex-col">
                <label for="date" class="text-stone-600 text-sm font-medium">
                  Status
                </label>
                <select
                  type="date"
                  id="date"
                  class="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  // onChange={(e) => setStatusroom(e.target.value)}
                >
                  <option></option>
                  <option>available</option>
                  <option>reserved</option>
                </select>
              </div>
            </div>

            
          </div>
        </div>
       
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-200  bg-rose-900 dark:bg-rose-900 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                First Name
              </th>
              <th scope="col" class="px-6 py-3">
                Email
              </th>
              <th scope="col" class="px-6 py-3">
                Phone Number
              </th>
              <th scope="col" class="px-6 py-3">
                Room Type
              </th>
              <th scope="col" class="px-6 py-3">
                status
              </th>
              <th scope="col" class="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {files &&
              files
                // .slice(4)
                .filter((user) => user.fullname.toLowerCase().includes(abel))

                .map(
                  (user) => <Hotel_reserve_row user={user} />

                  // <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  //   <td class="w-4 p-4">
                  //     <div class="flex items-center">
                  //       <input
                  //         id="checkbox-table-search-1"
                  //         type="checkbox"
                  //         class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  //       />
                  //       <label for="checkbox-table-search-1" class="sr-only">
                  //         checkbox
                  //       </label>
                  //     </div>
                  //   </td>
                  //   <th
                  //     scope="row"
                  //     class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                  //   >
                  //     <div class="pl-3" key={user.id}>
                  //       <div class="text-base font-semibold">
                  //         {user.firstName} {user.lastName}
                  //       </div>
                  //     </div>
                  //   </th>
                  //   <td class="px-6 py-4">{user.lastName}</td>
                  //   <td class="px-6 py-4">
                  //     <div class="flex items-center">
                  //       <div class="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>{" "}
                  //       {user.phoneNumber}
                  //     </div>
                  //   </td>
                  //   <td class="px-6 py-4">
                  //     <a
                  //       href="/"
                  //       class="font-medium mb-10 mr-10 text-blue-600 dark:text-blue-500 hover:underline"
                  //     >
                  //       {user.roomType}
                  //     </a>

                  //     <div
                  //       ref={refs}
                  //       tabindex="-1"
                  //       class={`${
                  //         !choose && "hidden"
                  //       } overflow-y-auto overflow-x-hidden fixed mt-22 pl-96 ml-64 md:inset-0 h-modal md:h-full justify-center items-center`}
                  //       aria-hidden="true"
                  //     >
                  //       <div ref={exports} style={{ width: "100%" }}>
                  //         <div class="relative p-4 w-full max-w-md h-full md:h-auto">
                  //           <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                  //             <img
                  //               src="./image/zuret.png"
                  //               class="ml-10 h-12 w-24 "
                  //               alt="Windster Logo"
                  //             />
                  //             <button
                  //               type="button"
                  //               class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                  //               onClick={() => {
                  //                 setChoose(false);
                  //               }}
                  //               data-modal-toggle="popup-modal"
                  //             >
                  //               <svg
                  //                 aria-hidden="true"
                  //                 class="w-5 h-5"
                  //                 fill="currentColor"
                  //                 viewBox="0 0 20 20"
                  //                 xmlns="http://www.w3.org/2000/svg"
                  //               >
                  //                 <path
                  //                   fill-rule="evenodd"
                  //                   d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  //                   clip-rule="evenodd"
                  //                 ></path>
                  //               </svg>
                  //               <span class="sr-only">Close modal</span>
                  //             </button>
                  //             <div class="flex items-center justify-center  p-10 ">
                  //               <div class="  ">
                  //                 <form className="text-start">
                  //                   <div className="ml-28 mb-10 text-base font-bold">
                  //                     Flight detail
                  //                   </div>

                  //                   <div class="w-full  sm:w-1/2">
                  //                     <div class=" md:items-center mb-6">
                  //                       <label
                  //                         for="fName"
                  //                         class=" block  text-base  font-normal text-[#07074D]"
                  //                       >
                  //                         First Name
                  //                       </label>

                  //                       <div class="rounded-md  border-[#e0e0e0] bg-white py-2 px-6 ml-10 text-base font-normal text-[#6B7280] outline-none  "></div>
                  //                     </div>
                  //                   </div>
                  //                   <div class="w-full  sm:w-1/2">
                  //                     <div class="mb-6">
                  //                       <div>
                  //                         <label
                  //                           for="lName"
                  //                           class="   font-normal text-base  text-[#07074D]"
                  //                         >
                  //                           Last Name
                  //                         </label>
                  //                       </div>
                  //                       <div>
                  //                         <div class=" rounded-md  border-[#e0e0e0] bg-white py-2 px-6 ml-10 text-base font-normal text-[#6B7280] outline-none f"></div>
                  //                       </div>
                  //                     </div>
                  //                   </div>
                  //                   <div class="md:flex md:items-center mb-6">
                  //                     <div>
                  //                       <label
                  //                         class="block mb-2 text-base font-normal text-gray-700"
                  //                         for="email"
                  //                       >
                  //                         Phone number
                  //                       </label>
                  //                     </div>
                  //                     <div>
                  //                       <div class="w-full rounded-md  border-[#e0e0e0] bg-white py-2 px-6 text-base font-normal text-[#6B7280] outline-none  "></div>
                  //                     </div>
                  //                   </div>
                  //                   <div class="md:flex md:items-center mb-6">
                  //                     <label
                  //                       class="block mb-2 text-base font-normal text-gray-700"
                  //                       for="Gender"
                  //                     >
                  //                       Room Type
                  //                     </label>
                  //                     <div class=" rounded-md  border-[#e0e0e0] bg-white py-2 px-6 ml-10 text-base font-normal text-[#6B7280] outline-none f"></div>
                  //                   </div>
                  //                   <div class="md:flex md:items-center mb-6">
                  //                     <label
                  //                       for="guest"
                  //                       class="mb-3 block text-base font-normal text-[#07074D]"
                  //                     >
                  //                       number of guests
                  //                     </label>
                  //                     <div class=" rounded-md  border-[#e0e0e0] bg-white py-2 px-6 ml-10 text-base font-normal text-[#6B7280] outline-none f"></div>
                  //                   </div>
                  //                   <div class="md:flex md:items-center mb-6">
                  //                     <label
                  //                       for="guest"
                  //                       class="mb-3 block text-base font-normal text-[#07074D]"
                  //                     >
                  //                       start Date
                  //                     </label>
                  //                     <div class=" rounded-md  border-[#e0e0e0] bg-white py-2 px-6 ml-10 text-base font-normal text-[#6B7280] outline-none f"></div>
                  //                   </div>
                  //                   <div class="md:flex md:items-center mb-6">
                  //                     <label
                  //                       for="guest"
                  //                       class="mb-3 block text-base font-normal text-[#07074D]"
                  //                     >
                  //                       End Date
                  //                     </label>
                  //                     <div class=" rounded-md  border-[#e0e0e0] bg-white py-2 px-6 ml-10 text-base font-normal text-[#6B7280] outline-none f"></div>
                  //                   </div>

                  //                   <div>
                  //                     <button
                  //                       type="button"
                  //                       class="hover:shadow-form ml-48 rounded-md bg-rose-900 py-3 px-8 text-center text-base font-semibold text-white outline-none"
                  //                       onClick={change}
                  //                     >
                  //                       Print
                  //                     </button>
                  //                   </div>
                  //                 </form>
                  //               </div>
                  //             </div>
                  //           </div>
                  //         </div>
                  //       </div>
                  //     </div>
                  //   </td>
                  //   <td class="px-6 py-4">
                  //     <button
                  //       className="mb-4 ml-46   mt-2 md:mb-0 border bg-rose-900   border-gray-700 hover:border-none hover:bg-rose-700 px-5 py-2 text-sm shadow-sm font-small tracking-wider text-white  hover:text-white  rounded-xl hover:shadow-lg "
                  //       onClick={() => {
                  //         setChoose((prev) => !prev);
                  //       }}
                  //     >
                  //       Detail
                  //     </button>

                  //     <button
                  //       className="mb-4 ml-4  mt-2 md:mb-0 border bg-rose-900   border-gray-700 hover:border-none hover:bg-rose-700 px-5 py-2 text-sm shadow-sm font-small tracking-wider text-white  hover:text-white  rounded-xl hover:shadow-lg "
                  //       onClick={(e) => deleted(user.id, e)}
                  //     >
                  //       Delete
                  //     </button>
                  //   </td>
                  // </tr>
                )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Hotel_reserve;
