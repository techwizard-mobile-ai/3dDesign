import React from "react";

const LibraryFilter = (props) => {
  const { action, Opt, closeAction } = props;
  return (
    <div className="flex w-full md:w-auto justify-center items-center">
      <div
        className="ml-[5%] text-white cursor-pointer md:hidden"
        onClick={() => {
          closeAction(0);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-9"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      </div>
      <div class="relative w-full ml-[10px] md:ml-0 mr-[10%] md:mr-0">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 text-gray-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </div>
        <input
          type="text"
          id="simple-search"
          class="text-sm rounded-lg block w-full ps-10 p-2.5  bg-gray-700/20 border-gray-600/40 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
          placeholder="Search 3D model..."
          required
        />
      </div>

      <div
        className={`hidden md:flex uppercase border-[1px] border-gray-600/40 cursor-pointer px-3 items-center justify-center h-10 ml-4 rounded-lg min-w-[135px] hover:bg-gray-700/30 hover:text-gray-300 ${
          !Opt ? "bg-gray-700/30 text-white" : " text-gray-300 bg-transparent"
        }`}
        onClick={() => {
          action(false);
        }}
      >
        Newest
      </div>
      <div
        className={`hidden md:flex uppercase border-[1px] border-gray-600/40 cursor-pointer px-3 items-center justify-center h-10 ml-4 rounded-lg min-w-[135px] hover:bg-gray-700/30 hover:text-gray-300 ${
          Opt ? "bg-gray-700/30 text-white" : " text-gray-300 bg-transparent"
        }`}
        onClick={() => {
          action(1);
        }}
      >
        Most Recent
      </div>
    </div>
  );
};

export default LibraryFilter;
