import React from "react";
import LibraryCard from "./LibraryCard";

const LibraryCardContainer = () => {
  return (
    <div className="grid grid-cols-3 md:grid-cols-5 gap-4 relative flex-grow w-full">
      {Array(10)
        .fill()
        .map((value, index) => (
          <LibraryCard key={index}></LibraryCard>
        ))}
    </div>
  );
};

export default LibraryCardContainer;
