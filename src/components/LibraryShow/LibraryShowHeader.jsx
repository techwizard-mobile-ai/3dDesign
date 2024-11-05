import React from "react";
import LibraryFilter from "./LibraryFilter";
import LibraryPagenation from "./LibraryPagenation";

const LibraryShowHeader = (props) => {
  const { action, Opt } = props;
  return (
    <div className="h-100px w-full mb-6 flex items-center justify-between">
      <LibraryFilter action={action} Opt={Opt} />
      <LibraryPagenation />
    </div>
  );
};

export default LibraryShowHeader;
