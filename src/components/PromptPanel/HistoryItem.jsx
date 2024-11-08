import React from "react";

export default function HistoryItem(props) {
  const { item, onclick, closeHistories } = props;
  const handleClickItem = () => {
    onclick({
      modelPath: item.modelURL,
      isLoading: false,
      error: null,
    });
    closeHistories();
  };
  return (
    <div
      className="relative text-white flex min-h-12 p-2 border-b-2 border-transparent justify-start transition-all duration-300 cursor-pointer items-center rounded-lg hover:bg-gray-700/30 w-full "
      onClick={() => {
        handleClickItem();
      }}
    >
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
          d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243-1.59-1.59"
        />
      </svg>
      <div className="ml-2">{item.prompt}</div>
    </div>
  );
}
