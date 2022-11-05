import React, { useState, useEffect } from 'react';
import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from 'firebase/auth';
import { auth, firestore } from '../components/firebase_config';
import { async } from '@firebase/util';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';
import { CheckCircleOutlineSharp } from '@mui/icons-material';
import { addDoc, collection } from 'firebase/firestore/lite'; // db 접근
//import firestore from 'firebase/compat/app';
import 'firebase/auth';
//import 'firebase/firestore'; // web version 9 에서는 더 이상 안씀
import { doc, getDoc } from 'firebase/firestore/lite';

function Login() {
	const [loginEmail, setLoginEmail] = useState('');
	const [loginPw, setLoginPw] = useState('');
	const [isSignUp, setIsSignUp] = useState(true);
	const auth = getAuth();

	// db의 users 컬렉션 가져옴
	//const usersCollection = collection(firestore, "users");
	
	// input data의 변화가 있을 때마다 value 값을 변경해서 useState 해준다.
	const handleLoginEmail = e => {
		setLoginEmail(e.target.value);
	};
	const handleLoginPw = e => {
		setLoginPw(e.target.value);
	};

	// 화면전환
	const navigate = useNavigate();

	// 회원가입 버튼 이벤트
	const onClickJoin = () => {
		console.log('Join button pressed');
		navigate('/join');
	};

	// 로그인 버튼 이벤트
	const onClickLogin = async () => {
		try {
			console.log('Login button pressed');
			//console.log(`firestore.collection('users') = ${firestore.collection('users')}`)
			//const usersData = collection(firestore, 'user') // 조회할 collectioin
			const docUser = doc(firestore, 'user', loginEmail);
			console.log(`loginEmail : ${loginEmail}`);
			const docGetUser = await getDoc(docUser);
			const docGetPw = await docGetUser.data().password;
			console.log(`docGetPw = ${docGetPw}`);
			
			if (docGetUser.exists()) { // 이메일이 있고
				// 비밀번호가 맞으면 로그인 성공
				if (docGetPw === loginPw) {
					console.log('로그인 성공');
					console.log(`user : ${JSON.stringify(docGetUser.data())}`);
					navigate('/main');
				} else { // 비밀번호가 틀리면 로그인 실패
					console.log('비밀번호 틀림');
					alert('비밀번호가 틀립니다. 다시 입력해주세요.');
					setLoginPw('')
				}
			} else {
				console.log("로그인 정보 없음");
				alert('회원가입이 필요한 이메일입니다. 회원가입 페이지로 이동합니다.');
				//document.getElementById('userid').focus();
				navigate('/join'); // 회원가입 페이지로 바로 이동
			}

			/*const querySnapshot = await getDocs(collection(firestore, "users"));
			querySnapshot.forEach((doc) => {
				console.log(`${doc.id} => ${doc.data()}`);
			});*/
			/*if (docGetUser.exists()) {
				console.log(`user : ${JSON.stringify(docGetUser.data())}`)
				navigate('/main')
			}*/
			/*.doc(loginEmail) // 조회할 document
			.get()
			.then(loginEmail => {
				if (!loginEmail.data()) { // db에 해당 loginEmail 이 없을 경우
					alert('회원가입이 필요한 이메일입니다. 회원가입 페이지로 이동합니다.');
				} else { // 존재할 경우
					const result = signInWithEmailAndPassword(
						auth,
						loginEmail,
						loginPw
					);
					console.log(result)
					navigate('/main')
				}
			})*/
			/*const result = await signInWithEmailAndPassword(
				auth,
				loginEmail,
				loginPw
			);
			console.log(result);
			navigate('/main');*/
		} catch (error) {
			//console.log(`firestore.collection('users') = ${firestore.collection('users')}`);
			//console.log(`user : ${JSON.stringify(docGetUser.data())}`)
			console.error(error)
			alert('회원가입이 필요한 이메일입니다. 회원가입 페이지로 이동합니다.');
			//document.getElementById('userid').focus();
			navigate('/join'); // 회원가입 페이지로 바로 이동
		}
	};

	return (
		<div className="login_join_form">
			<div>
				<p>
					<input
						type="text"
						id="userid"
						name="userid"
						placeholder="user@gmail.com"
						value={loginEmail}
						onChange={handleLoginEmail}
					/>
				</p>
				<p>
					<input
						type="password"
						id="userpw"
						name="userpw"
						placeholder="Password"
						value={loginPw}
						onChange={handleLoginPw}
					/>
				</p>
				<input id="login" type="button" value="로그인" onClick={onClickLogin} />
				<input id="join" type="button" value="회원가입" onClick={onClickJoin} />
			</div>
		</div>
	);
}

export default Login;
