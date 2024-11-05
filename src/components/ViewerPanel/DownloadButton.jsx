import React from 'react'

const DownloadButton = (props) => {
    return (
        <button
            onClick={() => props.handleDownload()}
            className="absolute bottom-[10px] right-[10px] bg-blue-500 hover:bg-blue-700 shadow-lg text-white font-bold pl-[9px] rounded-full z-50 w-[40px] h-[40px]"
        >
            <svg className="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 13V4M7 14H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2m-1-5-4 5-4-5m9 8h.01" />
            </svg>
        </button>
    )
}

export default DownloadButton
