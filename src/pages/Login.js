import React, { useState, useEffect } from 'react';
import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';
import 'firebase/auth';
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

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
			if (loginEmail === "" || loginPw === "") { // 정보를 입력하지 않고 버튼을 누르면
				alert("이메일, 비밀번호를 입력해주세요.");
			} else {
				console.log('Login button pressed');
				console.log(`loginEmail : ${loginEmail}`);
				console.log(`loginPw : ${loginPw}`);
				
				// 로그인 실행
				const result = await signInWithEmailAndPassword(
					auth,
					loginEmail,
					loginPw
				);
				console.log(result);
				navigate('/main');
			}
		} catch (error) {
			console.error(error)
			alert('회원가입이 필요한 이메일입니다. 회원가입 페이지로 이동합니다.');
			//document.getElementById('userid').focus();
			navigate('/join'); // 회원가입 페이지로 바로 이동
		}
	};

	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
				<Box
					sx={{
						marginTop: 20,
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
					}}
				>
				<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
					Sign in
				</Typography>
				<Box component="form" noValidate sx={{ mt: 1 }}>
					<TextField
						margin="normal"
						required
						fullWidth
						id="email"
						label="Email Address"
						name="email"
						autoComplete="email"
						autoFocus
						value={loginEmail}
						onChange={handleLoginEmail}
					/>
					<TextField
						margin="normal"
						required
						fullWidth
						name="password"
						label="Password"
						type="password"
						id="password"
						autoComplete="current-password"
						value={loginPw}
						onChange={handleLoginPw}
					/>
				</Box>
				<Button 
					type="submit" 
					fullWidth
					variant="contained" 
					sx={{ mt: 3, mb: 2 }} 
					onClick={onClickLogin}>
						Sign In
				</Button>
				<Grid item>
					<Link href="/join" variant="body2">
						회원가입 페이지로 이동하기
					</Link>
              </Grid>
			</Box>
      	</Container>
	);
}

export default Login;
