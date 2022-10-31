import React, { useState, useEffect } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

function Join() {
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPw, setLoginPw] = useState("");

    const auth = getAuth();
    
    const signup = async() => {
        console.log('Join button pressed')
        const result = await createUserWithEmailAndPassword(auth, loginEmail, loginPw);
        console.log(result) 
    }
    
    return (
        <div>
        <input
            placeholder="Email"
            onChange={(e) => {
                setLoginEmail(e.target.value);
            }}
        />
        <input
            placeholder="EmailPassword"
            onChange={(e) => {
                setLoginPw(e.target.value);
            }}
        />
        <button onClick={signup}>CreateUser</button>
    </div>
    )

}

export default Join;