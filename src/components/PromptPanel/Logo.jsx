import React from "react";

function Logo(props) {
  return (
    <div className={props.className}>
      <div className="overflow-visible w-full relative max-w-sm   flex items-end justify-center mt-[10px]">
        <img
          className="w-10 h-10 rounded-full shadow-xl ring-2 ring-white"
          src="/logo.png"
        />
        <div className="flex flex-col ml-[20px]">
          <strong className="text-white  uppercase text-[25px]">
            Autoppia 3D
          </strong>
        </div>
      </div>
    </div>
  );
}

export default Logo;
