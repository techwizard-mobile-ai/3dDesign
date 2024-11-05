import React from "react";

export default function MenuItem(props) {
  const {
    icon,
    text = "Text Here",
    action = () => {
      console.log(
        "There is an error while passing the onClick callback function"
      );
    },
    active = false,
  } = props;

  return (
    <div
      onClick={() => action()}
      className={`px-[20px] flex flex-start text-white font-bold w-full p-[10px] rounded-[5px]  hover:bg-gray-700/30  cursor-pointer box-border my-[5px] ${
        active ? "bg-gray-700/30" : ""
      }`}
    >
      {icon}
      <div className="ml-[5px] text-white">{text}</div>
    </div>
  );
}
