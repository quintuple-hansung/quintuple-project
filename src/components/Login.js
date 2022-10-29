import React, { useState, useEffect } from 'react';
import { signInWithEmailAndPassword, signupEmail } from 'firebase/auth';

function Login() {
    const [inputId, setInputId] = useState("");
    const [inputPw, setInputPw] = useState("");

    // input data의 변화가 있을 때마다 value 값을 변경해서 useState 해준다.
    const handleInputId = (e) => {
        setInputId(e.target.value)
    }
    const handleInputPw = (e) => {
        setInputPw(e.target.value)
    }

    // 로그인 버튼 이벤트
    const onClickLogin = () => {
        console.log('Login button pressed')
        signInWithEmailAndPassword(inputId, inputPw)
    }

    // 회원가입 버튼 이벤트
    const onClickJoin = () => {
        console.log('Join button pressed')
    }

    // 페이지 렌더링 후 가장 처음 호출되는 함수
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