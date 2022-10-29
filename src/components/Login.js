import React, { useState, useEffect } from 'react';
import { signInWithEmailAndPassword, signupEmail } from 'firebase/auth';
//import { auth } from './firebase_config';
import "./Login.css";

function Login() {
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPw, setLoginPw] = useState("");

    // input data�� ��ȭ�� ���� ������ value ���� �����ؼ� useState ���ش�.
    const handleLoginEmail = (e) => {
        setLoginEmail(e.target.value)
    }
    const handleLoginPw = (e) => {
        setLoginPw(e.target.value)
    }

    // �α��� ��ư �̺�Ʈ
    const onClickLogin = () => {
        console.log('Login button pressed')
        // �� �κ� Ȯ��!! (��� ������)
        //signInWithEmailAndPassword(auth, inputId, inputPw)
    }

    // ȸ������ ��ư �̺�Ʈ
    const onClickJoin = () => {
        console.log('Join button pressed')
    }

    return (
        <div className='login_join_form'>
            <div>
                <p><input type="text" id="userid" name="userid" placeholder="user@gmail.com" value={loginEmail} onChange={handleLoginEmail}/></p>
                <p><input type="password" id="userpw" name="userpw" placeholder="Password" value={loginPw} onChange={handleLoginPw}/></p>
            </div>
            <div>
                <button id='login' type="button" onClick={onClickLogin}>Login</button>
                <button id='join' type="button" onClick={onClickJoin}>Join</button>
            </div>
        </div>
    )
}

export default Login;