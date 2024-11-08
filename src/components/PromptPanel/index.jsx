import React, { useState } from "react";
import SampleModel from "./SampleModel";
import PromptInput from "./PromptInput";
import Logo from "./Logo";

const PromptPanel = ({ prompt, setPrompt, handleGenerate, ...rest }) => {
  const { action, activeMenu } = rest;
  return (
    <div className="w-full md:w-[400px] p-[30px] h-full shadow-xl">
      <div className="h-full w-full rounded-xl bg-zinc-900 shadow-[0px_0px_0px_1px_rgba(255,255,255,0.1)] ">
        <div className="md:h-[60%] p-[20px]">
          <Logo className="w-full flex items-center" />
          <SampleModel
            className="mt-[30px] md:mt-[90px] mx-5 flex justify-center items-center md:flex-col"
            action={action}
            activeMenu={activeMenu}
          />
        </div>
        <div className="md:h-[40%]">
          <PromptInput
            className="h-full flex flex-col items-center justify-between md:relative"
            prompt={prompt}
            setPrompt={setPrompt}
            handleGenerate={handleGenerate}
            action={action}
            activeMenu={activeMenu}
          />
        </div>
      </div>
    </div>
  );
};
export default PromptPanel;
