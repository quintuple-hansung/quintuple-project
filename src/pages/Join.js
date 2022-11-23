import React, { useState, useEffect } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import '../styles/Join.css';
import {firestore} from "../components/firebase_config";
import {addDoc, collection, setDoc, doc} from 'firebase/firestore/lite';
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import AlertDialog from './AlertDialog';
import { async } from '@firebase/util';

export const Join = () => {
    const [joinEmail, setJoinEmail] = useState('');
    const [joinPw, setJoinPw] = useState('');
    const [userName, setUserName] = useState('');

    const auth = getAuth();
    const navigate = useNavigate();

    const handleUserName = e => {
        setUserName(e.target.value);
    }

    const handleJoinEmail = e => {
        setJoinEmail(e.target.value);
    }

    const handleJoinPw = e => {
        setJoinPw(e.target.value);
    }

    // 이메일 형식 확인
    const isEmail = string => { 
        const re =
          /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
        return re.test(string);
    }

    // 이메일 에러 핸들러
    const hasEmailError = email => email && !isEmail(email.trim()) ? true : false;

    // 입력한 비밀번호가 6자 이상인지 확인
    const hasPwError = password => password && password.length < 6 ? true : false;

    const signup = async () => {

        try {
            const result = await createUserWithEmailAndPassword(auth, joinEmail, joinPw);
            console.log(result); 

            //firestore의 user 컬렉션을 가져옴
            //const usersCollectionRef = collection(firestore, "user");
    
            //const userRef = doc(firestore, 'user', userName);
            //setDoc(userRef, {name: userName}, {email: joinEmail});
            
            setDoc(doc(firestore, 'user', joinEmail), {
                email: joinEmail,
                name: userName,
                password: joinPw,
            })
        
            navigate('/login'); // 로그인 페이지로 이동

        } catch (error) {
            console.error(error);
            //alert('이미 가입한 회원입니다.');
            //<AlertDialog></AlertDialog>
            //alert('비밀번호는 6자리 이상으로 해주세요.');
        }        
    }
    
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
                    Sign up
                </Typography>
                <Box component="form" noValidate sx={{ mt: 3 }}>
                    <TextField
                        autoFocus
                        margin="normal"
                        required
                        fullWidth
                        name="name"
                        id="name"
                        label="Name"
                        autoComplete="name"
                        onChange={ handleUserName }
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        value={joinEmail}
                        autoComplete="email"
                        error={hasEmailError(joinEmail)}
                        helperText={
                            hasEmailError(joinEmail) ? '이메일 형식을 확인해주세요' : null // 이메일 형식 검사
                        }
                        onChange={ handleJoinEmail }
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        value={joinPw}
                        autoComplete="new-password"
                        error={hasPwError(joinPw)} // 비밀번호 에러 핸들러 추가 (6자 이상인지 확인)
                        helperText={
                            hasPwError(joinPw) ? '비밀번호는 6자 이상으로 해주세요.' : null
                        }
                        onChange={ handleJoinPw }
                    />
                    </Box>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        onClick={signup}>
                            Sign Up
                    </Button>
                    <Grid item>
                        <Link href="/login" variant="body2" textAlign="center">
                            로그인 페이지로 이동하기
                        </Link>
                    </Grid>
                </Box>
        </Container>

    );
        {/*<div className='join_form'>
            <p><input type="text" placeholder="Name" onChange={(e) => { setUserName(e.target.value) }}/></p>
            <p><input type="text" placeholder="Email" onChange={(e) => { setJoinEmail(e.target.value); }}/></p>
            <p><input type="password"placeholder="EmailPassword" onChange={(e) => { setJoinPw(e.target.value); }}/></p>
            <button onClick={signup}>회원가입</button><br/>
            <button onClick={() => (window.location.href = '/login')}>로그인 페이지로</button>
        </div>*/}

}

export default Join;