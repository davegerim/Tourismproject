// import React, { useState } from "react";

// function RoomReservation() {
//   const [rooms, setRooms] = useState([{ id: 1 }]); // Initial room

//   const addRoom = () => {
//     const newRoomId = rooms.length + 1; // Generate a unique ID for the new room
//     setRooms([...rooms, { id: newRoomId }]); // Add a new room with the generated ID
//   };

//   return (
//     <div className="mb-5 pt-3">
//       <div className="flex justify-between mb-5">
//         <label className="mb-5 block text-base font-semibold text-[#07074D] sm:text-xl">
//           Reserve Details
//         </label>
//         <button
//           onClick={addRoom}
//           className="hover:shadow-form rounded-md bg-rose-900 px-8 text-center text-base font-semibold text-white outline-none"
//         >
//           Add Room
//         </button>
//       </div>
//       <div className="-mx-3 flex flex-wrap">
//         {rooms.map((room) => (
//           <div key={room.id} className="w-full px-3 sm:w-1/2">
//             <div className="mb-2">
//               <label
//                 htmlFor={`roomType-${room.id}`}
//                 className="mb-3 block text-base font-medium text-[#07074D]"
//               >
//                 Room Type
//               </label>
//               <select
//                 id={`roomType-${room.id}`}
//                 name={`roomType-${room.id}`}
//                 placeholder="Room Type"
//                 className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
//               >
//                 <option></option>
//                 <option value="Luxury Hotel">Standard Room</option>
//                 <option value="Deluxe Room">Deluxe Room</option>
//                 <option value="Suite Room">Suite Room</option>
//                 <option value="Speciality Room">Speciality Room</option>
//               </select>
//             </div>
//           </div>
//         ))}
//         <div className="w-full px-3 sm:w-1/2">
//           <div className="mb-3">
//             <label
//               htmlFor="numberOfGuest"
//               className="mb-3 block text-base font-medium text-[#07074D]"
//             >
//               Number of Guests
//             </label>
//             <input
//               type="text"
//               id="numberOfGuest"
//               name="numberOfGuest"
//               placeholder="Number of Guests"
//               className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
//             />
//           </div>
//         </div>
//         <div className="w-full px-3 sm:w-1/2">
//           <div className="mb-5">
//             <label
//               htmlFor="startDate"
//               className="mb-3 block text-base font-medium text-[#07074D]"
//             >
//               Start Date
//             </label>
//             <input
//               type="date"
//               id="startDate"
//               name="startDate"
//               className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
//             />
//           </div>
//         </div>
//         <div className="w-full px-3 sm:w-1/2">
//           <div className="mb-5">
//             <label
//               htmlFor="endDate"
//               className="mb-3 block text-base font-medium text-[#07074D]"
//             >
//               End Date
//             </label>
//             <input
//               type="date"
//               id="endDate"
//               name="endDate"
//               className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default RoomReservation;
import React, { useState } from "react";

const RoomReservationForm = () => {
  return (
    <div className="mb-5 pt-3">
      <div className="-mx-3 flex flex-wrap">
        <div className="w-full px-3 sm:w-1/2">
          <div className="mb-2">
            <label
              htmlFor="roomType"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Room Type
            </label>
            <select
              id="roomType"
              name="roomType" // Added name attribute
              placeholder="Room Type"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            >
              <option></option>
              <option value="Luxury Hotel">Standard Room</option>
              <option value="Deluxe Room">Deluxe Room</option>
              <option value="Suite Room">Suite Room</option>
              <option value="Speciality Room">Speciality Room</option>
            </select>
          </div>
        </div>
        <div className="w-full px-3 sm:w-1/2">
          <div className="mb-3">
            <label
              htmlFor="numberOfGuest"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Number of Guests
            </label>
            <input
              type="text"
              id="numberOfGuest"
              name="numberOfGuest"
              placeholder="Number of Guests"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
        </div>
        <div className="w-full px-3 sm:w-1/2">
          <div className="mb-5">
            <label
              htmlFor="startDate"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Start Date
            </label>
            <input
              type="date"
              id="startDate"
              name="startDate"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
        </div>
        <div className="w-full px-3 sm:w-1/2">
          <div className="mb-5">
            <label
              htmlFor="endDate"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              End Date
            </label>
            <input
              type="date"
              id="endDate"
              name="endDate"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const RoomReservation = () => {
  const [numRooms, setNumRooms] = useState(1);

  const addRoom = () => {
    setNumRooms(numRooms + 1);
  };

  return (
    <div>
      <div className="flex justify-between mb-5">
        <label className="mb-5 block text-base font-semibold text-[#07074D] sm:text-xl">
          Reserve Details
        </label>
        <button
          className="hover:shadow-form rounded-md bg-rose-900 px-8 text-center text-base font-semibold text-white outline-none"
          onClick={addRoom}
        >
          Add Room
        </button>
      </div>
      {[...Array(numRooms)].map((_, index) => (
        <RoomReservationForm key={index} />
      ))}
    </div>
  );
};

export default RoomReservation; 
