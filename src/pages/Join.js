import React, { useState, useEffect } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import '../styles/Join.css';

function Join() {
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPw, setLoginPw] = useState("");

    const auth = getAuth();
    const navigate = useNavigate();
    
    const signup = async() => {
        console.log('Join button pressed');
        const result = await createUserWithEmailAndPassword(auth, loginEmail, loginPw);
        console.log(result);
        navigate('/login');
    }
    
    return (
        <div className='join_form'>
            <p><input placeholder="Email" onChange={(e) => { setLoginEmail(e.target.value); }}/></p>
            <p><input placeholder="EmailPassword" onChange={(e) => { setLoginPw(e.target.value); }}/></p>
            <button onClick={signup}>CreateUser</button>
        </div>
    )

}

export default Join;