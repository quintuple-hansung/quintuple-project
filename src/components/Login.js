import React, { useState, useEffect } from 'react';
import { signInWithEmailAndPassword, signupEmail } from 'firebase/auth';

function Login() {
    const [inputId, setInputId] = useState("");
    const [inputPw, setInputPw] = useState("");

    // input data�� ��ȭ�� ���� ������ value ���� �����ؼ� useState ���ش�.
    const handleInputId = (e) => {
        setInputId(e.target.value)
    }
    const handleInputPw = (e) => {
        setInputPw(e.target.value)
    }

    // �α��� ��ư �̺�Ʈ
    const onClickLogin = () => {
        console.log('Login button pressed')
        signInWithEmailAndPassword(inputId, inputPw)
    }

    // ȸ������ ��ư �̺�Ʈ
    const onClickJoin = () => {
        console.log('Join button pressed')
    }

    // ������ ������ �� ���� ó�� ȣ��Ǵ� �Լ�
    /*useEffect(() => {
        
    })*/

    return (
        <div>
            <div>
                <p><input type="text" id="userid" name="userid" placeholder="USER ID" value={inputId} onChange={handleInputId}/></p>
                <p><input type="password" id="userpw" name="userpw" placeholder="USER PW" value={inputPw} onChange={handleInputPw}/></p>
            </div>
            <div>
                <button type="button" onClick={onClickLogin}>Login</button>
                <button type="button" onClick={onClickJoin}>Join</button>
            </div>
        </div>
    )
}

export default Login;