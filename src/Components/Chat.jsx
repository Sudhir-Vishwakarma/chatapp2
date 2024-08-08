import React from "react";
import video from "../img/zoom.png"
import user from "../img/user.png"
import dots from "../img/dots.png"
import Messages from "./Messages";
import Input from "./Input";


const Chat = ()=>{
    return(
        <div className="chat">
            <div className="chatInfo">
                <span>Jane</span>
                <div className="chatIcons">
                    <img src={video} />
                    <img src={user} />
                    <img src={dots} />
                </div>
            </div>
            <Messages />
            <Input />
        </div>
    )
};

export default Chat;