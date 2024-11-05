import React from "react";

const LibraryPagenation = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="inline-flex mt-2 xs:mt-0 items-center">
        <button className="border-gray-600/40 border-2 flex items-center justify-center w-10 h-10 text-base font-medium rounded-full bg-gray-800/50 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white">
          <svg
            className="w-3.5 h-3.5 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 5H1m0 0 4 4M1 5l4-4"
            />
          </svg>
        </button>
        <span className="font-semibold text-white mx-3">1</span>
        <span className="font-semibold text-white">/</span>
        <span className="font-semibold text-white mx-3">10</span>
        <button className="border-gray-600/40 border-2 flex items-center justify-center w-10 h-10 text-base font-medium rounded-full bg-gray-800/50 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white">
          <svg
            className="w-3.5 h-3.5 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default LibraryPagenation;
