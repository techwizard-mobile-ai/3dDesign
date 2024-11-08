import React, { useState } from "react";
import LibraryShowHeader from "./LibraryShowHeader";
import LibraryCardContainer from "./LibraryCardContainer";

const LibraryShow = (props) => {
  const { action } = props;
  const [filterOpt, setFilterOpt] = useState(false);

  const { open } = props;
  return (
    open && (
      <div className="w-full h-full m-[30px] md:m-0 md:p-[30px]   md:absolute fixed bottom-0 left-0">
        <div className="absolute bottom-0 md:relative  rounded-3xl border-gray-400 md:h-full md:w-full h-[calc(100%-150px)] w-[calc(100%-60px)] flex flex-col items-start justify-start  bg-[#18181b] rounded-lg">
          <LibraryShowHeader
            Opt={filterOpt}
            action={setFilterOpt}
            closeAction={(v) => action(v)}
          />
          <LibraryCardContainer />
        </div>
      </div>
    )
  );
};

export default LibraryShow;
