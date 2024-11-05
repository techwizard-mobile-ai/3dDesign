import React from "react";
import DownloadButton from "./DownloadButton";
import PromptText from "./PromptText";
import AltText from "./AltText";
import { ModelViewer } from "./ModelViewer";
import LibraryShow from "../LibraryShow";

const ViewerPanel = (props) => {
  const { action, activeMenu } = props;

  const main3DPanel = (
    <>
      <ModelViewer isLoading={props.isLoading} modelPath={props.modelPath} />
      {!props.isLoading && props.modelPath != "" && (
        <DownloadButton handleDownload={props.handleDownload} />
      )}
      {!props.isLoading && props.modelPath != "" && (
        <PromptText
          prompt={props.prompt}
          className="absolute left-[10px] top-[5px] z-[50] w-[200px] text-wrap text-gray-500 text-left"
        />
      )}

      {!props.isLoading && props.modelPath == "" && (
        <AltText upload={activeMenu === 1} />
      )}
    </>
  );
  return (
    <div className="w-full h-full p-[30px] absolute">
      <div className="relative items-center justify-center h-full w-full rounded-xl bg-zinc-900 shadow-[0px_0px_0px_1px_rgba(255,255,255,0.1)] before:pointer-events-none before:absolute before:-inset-px before:rounded-xl before:shadow-[0px_2px_8px_0px_rgba(0,_0,_0,_0.20),_0px_1px_0px_0px_rgba(255,_255,_255,_0.06)_inset] forced-colors:outline">
        {activeMenu === 2 ? (
          <LibraryShow open={activeMenu === 2} />
        ) : (
          main3DPanel
        )}
      </div>
    </div>
  );
};

export default ViewerPanel;
