import React from "react";

const PromptText = (props) => {
  return (
    <div className={props.className} style={{ overflowWrap: "break-word" }}>
      <p className=" text-ellipsis overflow-hidden w-full h-full ">
        {props.prompt}
      </p>
    </div>
  );
};

export default PromptText;
