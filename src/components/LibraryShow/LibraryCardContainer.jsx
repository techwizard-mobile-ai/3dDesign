import React from "react";
import LibraryCard from "./LibraryCard";

const LibraryCardContainer = () => {
  return (
    <div className="items-center md:grid sm:grid-cols-3 md:grid-cols-5 gap-4 relative md:flex-grow w-full overflow-y-auto h-full">
      {Array(10)
        .fill()
        .map((value, index) => (
          <LibraryCard key={index}></LibraryCard>
        ))}
    </div>
  );
};

export default LibraryCardContainer;
