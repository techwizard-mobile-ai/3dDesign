import React, { useEffect, useState } from "react";
import HistoryItem from "./HistoryItem";

const PromptInput = ({
  className,
  activeMenu,
  action,
  onClickHistoryMenu,
  setPrompt,
  handleGenerate,
  selectModel,
}) => {
  const [histories, setHistories] = useState([]);

  useEffect(() => {
    setHistories(JSON.parse(localStorage.getItem("histories")) || []);
  }, [activeMenu]);
  return (
    <div className={className}>
      <div className="md:mt-8">
        <p className="text-white">Describe a 3D object</p>
        <textarea
          placeholder="Enter your prompt here ..."
          onChange={(e) => setPrompt(e.target.value)}
          onKeyDown={(e) => {
            if (e.code === "Enter") {
              e.preventDefault();
              handleGenerate();
            }
          }}
          rows={2}
          className="border rounded p-3 bg-[#ffffff11] text-white border-[#ffffff33] w-[260px] mt-5 resize-none"
        />
      </div>

      <div
        className={`${
          activeMenu === 3 ? "h-[calc(100%-140px)] md:h-[207%]" : "h-0"
        } overflow-hidden transition-all duration-500 z-[100] absolute bottom-[30px] md:bottom-0 flex justify-center items-center bg-[#18181b] rounded-b-xl text-white font-bold px-11 w-[calc(100%-60px)] md:w-full`}
      >
        <div className="m-2 h-full w-full relative pt-5 overflow-y-auto overflow-x-hidden flex flex-col items-start">
          <div className="flex items-center justify-start mb-4">
            <div
              className="flex group cursor-pointer text-gray-300"
              onClick={() => action(0)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 transition-all duration-500 group-hover:left-[-2px] relative"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 text-transparent group-hover:text-white absolute left-1 transition-all duration-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </div>
            <div className="ml-5 text-[25px] text-gray-300">History</div>
          </div>

          {histories?.length > 0 ? (
            histories.map((item, index) => (
              <HistoryItem
                key={index}
                item={item}
                onclick={selectModel}
                closeHistories={() => action(0)}
              />
            ))
          ) : (
            <div className="w-full flex justify-center">No Histories</div>
          )}
        </div>
      </div>

      <button
        onClick={handleGenerate}
        className="mt-[20px] md:mt-0 flex justify-center items-center bg-sky-500/95 md:bg-gray-700/60 md:hover:bg-gray-600/60 rounded-b-full rounded-t-full md:rounded-t-none md:rounded-b-xl text-white font-bold py-2 px-4 md:w-full h-[60px]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-7"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 12a7.5 7.5 0 0 0 15 0m-15 0a7.5 7.5 0 1 1 15 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077 1.41-.513m14.095-5.13 1.41-.513M5.106 17.785l1.15-.964m11.49-9.642 1.149-.964M7.501 19.795l.75-1.3m7.5-12.99.75-1.3m-6.063 16.658.26-1.477m2.605-14.772.26-1.477m0 17.726-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205 12 12m6.894 5.785-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495"
          />
        </svg>
        <span className="mx-2">Generate</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </div>
  );
};

export default PromptInput;
