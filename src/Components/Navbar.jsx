import React from "react";
import make from "../img/user.png"

const Navbar = () =>{
    return(
        <div className="navbar">
            <span className="logo">SudhirChat</span>
            <div className="user">
                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVvcGxlfGVufDB8fDB8fHww" alt=""/>
                <span>Sudhir</span>
                <button>Logout</button>
            </div>
        </div>
    )
};

export default Navbar;