import React from "react";
import "./Message.scss"
import messageLists from "./messageLists.json";

const Message = ({type, handleModal}) => {
    const messagePos = messageLists.map((message) => {
        return message.type;
    }).indexOf(type);
    const messageSet = messageLists[messagePos];
    return (
        <>
            <div id="mask" onClick={handleModal}></div>

            <div className="row" id="modal">
                <div className="col-md-6 offset-md-3">
                    <h2 color={messageSet.color}>{messageSet.title}</h2>
                    <p>{messageSet.message}</p>
                    {messageSet.type !== "isSending" && <div id="close" onClick={handleModal}>CLOSE</div>}
                </div>
            </div>
        </>
    );
}

export default Message;