import { useState } from "react";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="absolute z-30">
      <button
        className="fixed bottom-0 right-0 m-5 bg-sky-400 hover:bg-sky-500 text-white font-bold py-2 px-4 rounded-full  "
        onClick={() => setOpen(!open)}
      >
        <i class="fa-solid fa-universal-access"></i>
      </button>
      <div
        className={`${
          open ? "w-[40px]" : " right-[-60px]"
        }  dark:text-gray-100 fixed dark:bg-slate-800 bg-sky-100 h-[300px] duration-200 rounded-l-lg mt-[100px] right-0 z-10 p-5 flex justify-center `}
      >
        <div className="">
          <ul className="flex flex-col gap-4 cursor-pointer">
            <li className="hover:scale-105 hover:text-blue-400 ">
              <i class="fa-solid fa-magnifying-glass-plus"></i>
            </li>
            <li className="hover:scale-105 hover:text-blue-400 ">
              <i class="fa-solid fa-magnifying-glass-minus"></i>
            </li>
            <li className="hover:scale-105 hover:text-blue-400">
              <i class="fa-solid fa-palette"></i>
            </li>
            <li className="hover:scale-105 hover:text-blue-400">
              <i class="fa-solid fa-volume-high"></i>
            </li>
            <li className="hover:scale-105 hover:text-blue-400">
              <i class="fa-solid fa-circle-half-stroke"></i>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
