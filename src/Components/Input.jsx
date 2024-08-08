import React from "react";
import clip from "../img/clip.png";
import gallery from "../img/photo.png"

const Input = () =>{
    return(
        <div className="input">
            <input type="text" placeholder="Type Something..."/>
            <div className="send">
                <img src={clip} />
                <input type="file" style={{display:"none"}} id="file" />
                <label htmlFor="file">
                    <img src={gallery}/>
                </label>
                <button>send</button>
            </div>
        </div>
    )
};

export default Input;