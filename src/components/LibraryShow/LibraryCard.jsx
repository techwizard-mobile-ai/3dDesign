import React from "react";

const LibraryCard = () => {
  return (
    <div class="w-[80%] m-auto md:h-full md:w-full overflow-hidden realtive max-w-sm bg-gray-700/20 border border-gray-700 rounded-lg shadow mt-[5px] md:mt-0">
      <div className="group h-[50px] md:h-full relative bg-[radial-gradient(#37373b_1px,#1D1F1C00_1px)] bg-[size:20px_20px] flex items-center justify-center bg-zinc-900/60">
        <div className="h-full w-full md:absolute flex md:flex-col justify-between md:justify-around items-center md:h-0 md:w-0 overflow-hidden md:bg-zinc-900/60 rounded-lg z-[10] transitoin-all duration-500 md:group-hover:w-full md:group-hover:h-full">
          <div
            className="text-white ml-[20px] md:ml-0 md:mt-7 font-[900]"
            style={{ textShadow: "1px 1px 2px black, -1px -1px 2px black" }}
          >
            Race Car
          </div>
          <div className="text-white md:m-5 md:border-2 md:border-gray-400 p-2 rounded-lg flex items-center md:bg-gray-600/60 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5 md:size-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
            <div className="hidden md:block ml-3 text-nowrap">View In 3D</div>
          </div>
        </div>
        <div className="h-full w-full relative hidden md:block">
          <img
            alt="Gandalf Inspired Wizard"
            fetchpriority="high"
            width="100"
            height="100"
            decoding="async"
            data-nimg="1"
            class="inset-0 h-full w-full object-contain object-center transition duration-200 group-hover:scale-110"
            src="model.png"
            style={{ color: "transparent" }}
          ></img>
        </div>
        <div className="md:absolute md:right-0 md:top-0 z-[100] cursor-pointer  p-1 text-white hover:text-gray-400 mr-[3px] md:mr-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default LibraryCard;
