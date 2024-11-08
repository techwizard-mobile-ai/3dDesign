import React from "react";

const AltText = (props) => {
  const { upload } = props;
  return (
    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
      {!upload ? (
        <h1
          className="text-white font-bold text-center text-[25px] md:text-[50px] z-50"
          style={{ textShadow: "2px 2px 4px black" }}
        >
          No 3D Model
        </h1>
      ) : (
        <div className="w-full h-full bg-[#18181b] rounded-lg">
          <label
            className="w-full h-full flex flex-col items-center justify-center text-white text-[25px] md:text-[50px] cursor-pointer bg-[radial-gradient(#37373b_1px,#1D1F1C00_1px)] bg-[size:20px_20px] rounded-lg"
            htmlFor="upload_image"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-[3rem] w-[3rem] md:h-[6rem] md:w-[6rem]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z"
              />
            </svg>
            Upload Image
          </label>
          <input type="file" id="upload_image" className="hidden" />
        </div>
      )}
    </div>
  );
};

export default AltText;
