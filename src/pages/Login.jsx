import React from "react";

const Login = () =>{
    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">Sudhir Chat</span>
                <span className="title">Login</span>
                <form>
                    <input type="email" placeholder="Enter Email"/>
                    <input type="password" placeholder="Enter Password"/>
                    <button>SignIn</button>
                </form>
                <p>Don't have an account? Register</p>
            </div>
        </div>
    )
}

export default Login;