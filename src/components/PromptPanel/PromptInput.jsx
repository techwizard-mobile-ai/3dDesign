import React from "react";
import HistoryItem from "./HistoryItem";

const PromptInput = (props) => {
  const { activeMenu, action, onClickHistoryMenu } = props;

  return (
    <div className={props.className}>
      <div className="mt-8">
        <p className="text-white">Enter your prompt to generate a 3D model</p>
        <textarea
          type="text"
          placeholder="Enter your prompt here ..."
          onChange={(e) => props.setPrompt(e.target.value)}
          rows={2}
          className="border rounded p-2 bg-[#ffffff11] text-white border-[#ffffff33] w-[230px] mt-[20px] "
        />
      </div>
      <div
        className={`${
          activeMenu === 3 ? "h-[215%]" : "h-0"
        } overflow-hidden transition-all duration-500 z-[100]  absolute bottom-0 flex justify-center items-center bg-[#18181b] rounded-b-xl text-white font-bold px-11 w-full`}
      >
        <div className="m-2  h-full w-full relative pt-5 overflow-y-auto overflow-x-hidden">
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
                  d="M15.75 19.5 8.25 12l7.5-7.5"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 text-transparent group-hover:text-white position absolute left-1 transition-all duration-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5 8.25 12l7.5-7.5"
                />
              </svg>
            </div>
            <div className="ml-5 text-[25px] text-gray-300">Histories</div>
          </div>
          {Array(10)
            .fill()
            .map((value, index) => (
              <HistoryItem key={index}></HistoryItem>
            ))}
        </div>
      </div>
      <button
        onClick={() => props.handleGenerate()}
        className="flex justify-center items-center bg-gray-700/60 rounded-b-xl text-white font-bold py-2 px-4 w-full h-[60px]"
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

        <div className="mx-[10px]"> Generate</div>
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
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </div>
  );
};

export default PromptInput;
