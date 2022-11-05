import React, { useState, useEffect } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import '../styles/Join.css';
import {firestore} from "../components/firebase_config";
import {addDoc, collection} from 'firebase/firestore';

function Join() {
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPw, setLoginPw] = useState("");
    const [userName, setUserName] = useState("");

    const auth = getAuth();
    const navigate = useNavigate();
    
     //firestore�� user �÷����� ������
     const usersCollectionRef = collection(firestore, "user");
    
     const signup = async () => {
         await addDoc(usersCollectionRef, {name:userName, email:loginEmail, password:loginPw});
     }
 
    /*
    const signup = async() => {
        console.log('Join button pressed');
        const result = await createUserWithEmailAndPassword(auth, loginEmail, loginPw);
        console.log(result);
        navigate('/login');
    }
    */
    
    return (
        <div className='join_form'>
            <p><input type="text" placeholder="Name" onChange={(e) => { setUserName(e.target.value); }}/></p>
            <p><input type="text" placeholder="Email" onChange={(e) => { setLoginEmail(e.target.value); }}/></p>
            <p><input type="password"placeholder="EmailPassword" onChange={(e) => { setLoginPw(e.target.value); }}/></p>
            <button onClick={signup}>ȸ������</button><br/>
            <button onClick={() => (window.location.href = '/login')}>�α��� ��������</button>
        </div>
    )

}

export default Join;