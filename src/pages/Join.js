import React, { useState, useEffect } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import '../styles/Join.css';
import {firestore} from "../components/firebase_config";
import {addDoc, collection, setDoc, doc} from 'firebase/firestore';

function Join() {
    const [joinEmail, setJoinEmail] = useState("");
    const [joinPw, setJoinPw] = useState("");
    const [userName, setUserName] = useState("");

    const auth = getAuth();
    const navigate = useNavigate();

    //firestore의 user 컬렉션을 가져옴
    //const usersCollectionRef = collection(firestore, "user");

    // db에 사용자 이름, 이메일 추가
    //addDoc(usersCollectionRef, {name:userName, email:joinEmail});

    const signup = async() => {
        try {
            console.log('Join button pressed');
            const result = await createUserWithEmailAndPassword(auth, joinEmail, joinPw);
            console.log(result);            

            // 사용자 이름과 이메일 db에 추가
            //setDoc(usersCollectionRef, userName);
            setDoc(doc(firestore, "user", userName), {
                name: userName,
                email: joinEmail
            });
            //addDoc(usersCollectionRef, {name:userName}, {email:joinEmail});

            navigate('/login'); // 로그인 페이지로 이동
        } catch (error) {
            console.error(error);
            alert('비밀번호는 6자 이상으로 해주세요.');
        }
        
    }
    
    return (
        <div className='join_form'>
            <p><input type="text" placeholder="Name" onChange={(e) => { setUserName(e.target.value) }}/></p>
            <p><input type="text" placeholder="Email" onChange={(e) => { setJoinEmail(e.target.value); }}/></p>
            <p><input type="password"placeholder="EmailPassword" onChange={(e) => { setJoinPw(e.target.value); }}/></p>
            <button onClick={signup}>회원가입</button><br/>
            {/*<button onClick={() => (window.location.href = '/login')}>로그인 페이지로</button>*/}
        </div>
    )

}

export default Join;