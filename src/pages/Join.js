import React, { useState, useEffect } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import '../styles/Join.css';
import {firestore} from "../components/firebase_config";
import {addDoc, collection, setDoc, doc} from 'firebase/firestore';
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
            alert('회원정보를 모두 입력해주세요. 비밀번호는 6자 이상으로 해주세요.');
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
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                autoComplete="given-name"
                                name="name"
                                required
                                fullWidth
                                id="name"
                                label="Name"
                                autoFocus
                                onChange={(e) => { setUserName(e.target.value) }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                onChange={(e) => { setJoinEmail(e.target.value); }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="new-password"
                                onChange={(e) => { setJoinPw(e.target.value); }}
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        onClick={signup()}
                        >
                            Sign Up
                    </Button>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Link href="/login" variant="body2">
                                로그인 페이지로 이동하기
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
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