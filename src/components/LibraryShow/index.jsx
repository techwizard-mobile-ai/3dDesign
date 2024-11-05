import React, { useState } from "react";
import LibraryShowHeader from "./LibraryShowHeader";
import LibraryCardContainer from "./LibraryCardContainer";

const LibraryShow = (props) => {
  const [filterOpt, setFilterOpt] = useState(false);

  const { open } = props;
  return (
    open && (
      <div className="w-full h-full p-6   absolute ">
        <div className="relative  rounded-3xl border-gray-400 h-full w-full flex flex-col items-start justify-start">
          <LibraryShowHeader Opt={filterOpt} action={setFilterOpt} />
          <LibraryCardContainer />
        </div>
      </div>
    )
  );
};

export default LibraryShow;
