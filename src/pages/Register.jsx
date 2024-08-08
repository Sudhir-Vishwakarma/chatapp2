import React, { useState } from "react";
import img from "../img/add-image.png"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {  ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { auth, storage, db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";

const Register = () =>{

    const [err, setErr] = useState(false);

    const handleSubmit = async (e) =>{
        e.preventDefault();
        const displayName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const file = e.target[3].files[0];

        try{
            const res = await createUserWithEmailAndPassword(auth, email, password);

            

            const storageRef = ref(storage, displayName);

            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on('state_changed', 
            
            (error) => {
                setErr(true)
            }, 
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then( async(downloadURL) => {
                await updateProfile(res.user,{
                    displayName,
                    photoURL: downloadURL,
                });
                await setDoc(doc(db, "users", res.user.uid),{
                    uid: res.user.uid,
                    displayName,
                    email,
                    photoURL: downloadURL,
                });

            });
        }
        );

        


        }
        catch(err){
            setErr(true);
        }
        

    }


    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">Sudhir Chat</span>
                <span className="title">Register</span>
                <form onSubmit={handleSubmit} method="POST">
                    <input type="text" placeholder="Enter Your Name"/>
                    <input type="email" placeholder="Enter Email"/>
                    <input type="password" placeholder="Enter Password"/>
                    <input style={{display:'none'}} type="file" id="file"/>
                    <label htmlFor="file">
                        <img src={img} width="25px"/>
                        <span>Add an avatar</span>
                    </label>
                    <button>SignUp</button>
                    {err && <span className="validation">invalid details</span>}
                </form>
                <p>You do have an account? Login</p>

            </div>
        </div>
    )
}

export default Register;