import React from "react";

const Search = ()=>{
    return(
        <div className="search">
            <div className="searchForm">
                <input type="text" placeholder="Find a User"/>
            </div>
            <div className="userChat">
                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVvcGxlfGVufDB8fDB8fHww" alt=""/>
                <div className="userChatInfo">
                    <span>Jane</span>
                </div>
            </div>
        </div>
    )
};

export default Search;