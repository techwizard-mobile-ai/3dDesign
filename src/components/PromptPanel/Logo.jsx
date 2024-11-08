import React from "react";

function Logo(props) {
  return (
    <div
      className={`${props.className} flex flex-row justify-center items-center md:flex-col`}
    >
      <div className="flex items-center justify-center mt-[10px]">
        <img
          className="w-10 h-10 rounded-full shadow-xl ring-2 ring-white"
          src="/logo.png"
        />
      </div>
      <div className="flex flex-col items-center mt-[10px] ml-2 sm:ml-0">
        <strong className="text-white uppercase text-[25px]">
          Autoppia 3D
        </strong>
      </div>
    </div>
  );
}

export default Logo;
