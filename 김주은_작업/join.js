import React, { useState, useEffect } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

function Join() {
    const [inputId, setInputId] = useState("");
    const [inputPw, setInputPw] = useState("");

    const auth = getAuth();
    const result = createUserWithEmailAndPassword(auth, inputId, inputPw);
    
    const signup = async() => {
        try {
            const user = await createUserWithEmailAndPassword(
                auth,
                inputId,
                inputPw
            );
            console.log(user);
        } catch (error) {
            console.log(error.message);
        }
        
            
        }
    
    return (
        <div>
        <input
            placeholder="Email"
            onChange={(e) => {
                setInputId(e.target.value);
            }}
        />
        <input
            placeholder="EmailPassword"
            onChange={(e) => {
                setInputPw(e.target.value);
            }}
        />
        <button onClick={signup}>CreateUser</button>
    </div>
    )

}

export default Join;