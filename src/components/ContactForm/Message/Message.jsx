import React from "react";
import "./Message.scss"
import messageLists from "./messageLists.json";

const Message = ({type, handleModal}) => {
    const messagePos = messageLists.map((message) => {
        return message.type;
    }).indexOf(type);
    const messageSet = messageLists[messagePos];
    return (
        <section>
            <div id="mask" onClick={handleModal}></div>

            <div id="modal">
                <div className="msgContents">
                    <h2 className={messageSet.titleColor}>{messageSet.title}</h2>
                    <p dangerouslySetInnerHTML={{ __html: messageSet.message }}></p>
                    {messageSet.type !== "isSending" && <div id="close" onClick={handleModal}>CLOSE</div>}
                </div>
            </div>
        </section>
    );
}

export default Message;