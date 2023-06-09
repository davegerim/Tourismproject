import React, { useRef } from "react";
import { GrFormClose } from "react-icons/gr";
import { useReactToPrint } from "react-to-print";

type DetailsProps = {
  choose: boolean;
  setChoose: (bool?: boolean) => boolean;
  data: any;
};
const DetailProfile: React.FC<DetailsProps> = ({ choose, setChoose, data }) => {
  const exports = useRef<any>();
  const change = useReactToPrint({
    content: () => exports.current,
    documentTitle: "user List",
    onAfterPrint: () => alert("Data Saved"),
  });
  return (
    <div>
      <div
        className={`${
          !choose && "hidden"
        } overflow-y-scroll overflow-x-hidden fixed mt-20  ml-36 md:inset-0 md:h-full `}
        id="divcontents"
      >
        <div className="flex flex-col sm:flex-row items-center md:items-start sm:justify-center flex-auto min-w-0   ">
          <div className="md:flex md:items-center md:justify-center w-full sm:w-auto   xl:w-4/5 p-8  md:p-8 lg:p-14 sm:rounded-lg md:rounded-xl bg-white shadow-xl rounded-xl mt-6">
            <div className="max-w-md w-full space-y-8">
              <div ref={exports} style={{ width: "100%" }}>
                <div className="text-center">
                  <div className="flex   ">
                    <div className="flex-1">
                      <img
                        src="./image/afrimed.png"
                        alt=""
                        className="h-8 w-auto"
                      />
                    </div>
                    <div className="flex ">
                      <button
                        type="button"
                        className=" top-3  text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5   dark:hover:bg-gray-800 dark:hover:text-white"
                        onClick={() => setChoose(false)}
                      >
                        <GrFormClose className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                  <p className="mt-2 text-sm font-bold text-gray-500">
                    Detail Profile
                  </p>
                </div>

                {/* profile list  */}

                <div className="text-gray-700">
                  <div className="grid md:grid-cols-1 text-sm">
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-normal">First Name</div>
                      <div className="px-4 py-2">
                        {" "}
                        {/* {data?.profile?.firstName} {data?.profile?.middleName}{" "}
                        {data?.profile?.lastName} */}
                        ch
                      </div>
                    </div>
                    <div className="grid grid-cols-3"></div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-normal">Gender</div>
                      <div className="px-4 py-2">
                        {/* {data?.profile?.gender ? "Female" : "Male"} */}bvb
                      </div>
                    </div>

                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-normal">
                        marriage Status
                      </div>
                      <div className="px-4 py-2">
                        {" "}
                        {/* {data?.profile?.marriageStatus} */}cgvh
                      </div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-normal">Birth Date</div>
                      <div className="px-4 py-2">
                        {" "}
                        {/* {data?.profile?.birthDate} */}gvnj
                      </div>
                    </div>
                    <div className="grid grid-cols-3"></div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-normal">City</div>
                      <div className="px-4 py-2"> ghfv</div>
                    </div>
                    <div className="grid grid-cols-3"></div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-normal">SubCity</div>
                      <div className="px-4 py-2"> gfvjh</div>
                    </div>
                    <div className="grid grid-cols-3"></div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-normal">Wereda</div>
                      <div className="px-4 py-2"> asx</div>
                    </div>
                    <div className="grid grid-cols-3"></div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-normal">House Number</div>
                      <div className="px-4 py-2">sda</div>
                    </div>
                    <div className="grid grid-cols-3"></div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-normal">Phone Number</div>
                      <div className="px-4 py-2"> ascs</div>
                    </div>
                    <div className="grid grid-cols-3"></div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-normal">Email</div>
                      <div className="px-4 py-2"> asca</div>
                    </div>

                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-normal">Id_Number</div>
                      <div className="px-4 py-2"> acas</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="justify-end items-end mb-6 text-gray-500 bg-white hover:bg-gray-100 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 dark:bg-gray-700 hover:shadow-lg dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600"
                  onClick={change}
                >
                  Print
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailProfile;
