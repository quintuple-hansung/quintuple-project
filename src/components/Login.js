import React, { useState, useEffect } from 'react';
import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from 'firebase/auth';
import '../styles/Login.css';

function Login() {
	const [loginEmail, setLoginEmail] = useState('');
	const [loginPw, setLoginPw] = useState('');
	const [isSignUp, setIsSignUp] = useState(true);
	const auth = getAuth();

	// input data의 변화가 있을 때마다 value 값을 변경해서 useState 해준다.
	const handleLoginEmail = e => {
		setLoginEmail(e.target.value);
	};
	const handleLoginPw = e => {
		setLoginPw(e.target.value);
	};

	// 회원가입 버튼 이벤트
	const onClickJoin = () => {
		console.log('Join button pressed');
	};

	// 로그인 버튼 이벤트
	const onClickLogin = async () => {
		console.log('Login button pressed');
		const result = await signInWithEmailAndPassword(auth, loginEmail, loginPw);
		console.log(result);
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
			</div>
			<div>
				<button id="login" type="button" onClick={onClickLogin}>
					Login
				</button>
				<button id="join" type="button" onClick={onClickJoin}>
					Join
				</button>
			</div>
		</div>
	);
}

export default Login;
