import React from 'react'

const PromptText = (props) => {
    return (
        <div className={props.className} style={{ overflowWrap: "break-word" }}>
            <p>{props.prompt}</p>
        </div>
    )
}

export default PromptText
