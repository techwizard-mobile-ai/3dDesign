import React, { useState } from "react";
import PromptPanel from "./PromptPanel";
import ViewerPanel from "./ViewerPanel";
import { getModel } from "../actions/getModel";
import LibraryShow from "./LibraryShow";

const MainLayout = () => {
  const DEFAULT_MODEL = "";
  const [prompt, setPrompt] = useState("");
  const [generationState, setGenerationState] = useState({
    isLoading: false,
    modelPath: DEFAULT_MODEL,
    error: null,
  });
  const [activeMenu, setActiveMenu] = useState(0);

  const handleGenerate = async () => {
    setGenerationState({
      ...generationState,
      isLoading: true,
    });
    try {
      let modelURL;
      let histories = JSON.parse(localStorage.getItem("histories")) || [];
      localStorage.setItem(
        "histories",
        JSON.stringify([
          ...histories,
          {
            prompt: prompt,
            modelURL: modelURL,
          },
        ])
      );
      modelURL = await getModel(prompt);
      if (modelURL) {
        setGenerationState({
          ...generationState,
          modelPath: modelURL,
          isLoading: false,
          error: null,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDownload = () => {
    const url = generationState.modelPath; // Replace with your file URL
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "model.glb"); // Specify the filename for download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleClickMenu = (value) => {
    setActiveMenu(value);
  };

  return (
    <div className="flex h-screen">
      <PromptPanel
        prompt={prompt}
        setPrompt={setPrompt}
        handleGenerate={handleGenerate}
        action={(value) => handleClickMenu(value)}
        selectModel={setGenerationState}
        activeMenu={activeMenu}
      />
      <div className=" md:flex-1 md:relative">
        <ViewerPanel
          handleDownload={handleDownload}
          prompt={prompt}
          isLoading={generationState.isLoading}
          modelPath={generationState.modelPath}
          action={(value) => handleClickMenu(value)}
          activeMenu={activeMenu}
        />
        {/* <LibraryShow /> */}
      </div>
    </div>
  );
};
export default MainLayout;
