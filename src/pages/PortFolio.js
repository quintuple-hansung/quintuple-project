import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import {firestore} from "../components/firebase_config";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc, updateDoc } from 'firebase/firestore/lite';
import { useNavigate } from 'react-router-dom';
import PageBar from './PageBar.js';
import '../styles/Portfolio.css';
import ThumbnailUpload from '../components/ThumbnailUpload';

function Portfolio(){
  //const [value, setValue] = React.useState('Controlled');
  const [name, setName] = React.useState(''); // 이름
  const [education, setEducation] = React.useState(''); // 학력
  const [age, setAge] = React.useState(''); // 나이
  const [introduce, setIntroduce] = React.useState(''); // 자기소개
  const [title, setTitle] = React.useState('') // 포트폴리오 제목 (진행한 프로젝트 하나 기재)
  const [description, setDescription] = React.useState('') // 프로젝트 설명
  const [language, setLanguage] = React.useState('') // 사용했던 언어
  const [stack, setStack] = React.useState('') // 사용했던 기술 설명
  const [tlanguage, setTLanguage] = React.useState('') // 자신의 주요 언어

  const handleName = e => {
    setName(e.target.value)
  }

  const handleEducation = e => {
    setEducation(e.target.value)
  }

  const handleAge = e => {
    setAge(e.target.value)
  }

  const handleIntroduce = e => {
    setIntroduce(e.target.value)
  }

  const handleTitle = e => {
    setTitle(e.target.value)
  }

  const handleDesription = e => {
    setDescription(e.target.value)
  }

  const handleLanguage = e => {
    setLanguage(e.target.value)
  }

  const handleStack = e => {
    setStack(e.target.value)
  }

  const handleTLanguage = e => {
    setTLanguage(e.target.value)
  }

  const navigate = useNavigate();

  // 현재 로그인한 사용자 가져오기
  const auth = getAuth();
  const currentUser = auth.currentUser;
  const currentEmail = currentUser.email;
  console.log(`currentUser: ${currentEmail}`);

  const docRef = doc(firestore, "user", currentEmail);
  const docSnap = getDoc(docRef);

  // user 컬렉션에서 db 가져오기
  getDoc(doc(firestore, "user", currentEmail)).then(docSnap => {
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
    } else {
      console.log("No such document!");
    }
  })

  // 사용자가 입력한 정보들 db 에 저장하고 포트폴리오 템플릿 페이지로 넘어감
  const submitInfo = () => {
    updateDoc(doc(firestore, 'user', currentEmail), {
      name: name,
      age: age,
      education: education,
      introduce: introduce,
      title: title,
      description: description,
      language: language,
      stack: stack,
      tlanguage: tlanguage,
    })
    navigate('/selectTemplate'); // 템플릿 선택하는 페이지로 넘어감
  }

  return (
    <>
    <PageBar />
    <section className="content">
        <p>포트폴리오에 들어갈 내용을 작성하세요. </p>
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '35ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <div className="content1">
              <div class='item'>
              <TextField
                id="outlined-multiline-static"
                label="이름"
                rows={1}
                defaultValue=''
                onChange={handleName}
              />
              </div>
              <div>
              <TextField 
                id="outlined-multiline-static"
                label="나이"
                rows={1}
                defaultValue=""
                onChange={handleAge}
              />
              </div>
              <div>
              <TextField
                id="outlined-multiline-static"
                label="학력"
                multiline
                rows={1}
                defaultValue=""
                onChange={handleEducation}
            
              />
           </div>
           <div>
            <TextField
              id="outlined-multiline-static"
              label="자기소개"
              multiline
              rows={3}
              defaultValue=""
              onChange={handleIntroduce}
            />
            </div>
            <div>
            <TextField
              id="outlined-multiline-static"
              label="프로젝트 제목"
              multiline
              rows={10}
              defaultValue=""
              onChange={handleTitle}
            />
          </div>
          <div>
            <TextField
              id="outlined-multiline-static"
              label="프로젝트 설명"
              multiline
              rows={10}
              defaultValue=""
              onChange={handleDesription}
            />
           </div>
           <div>
            <TextField
              id="outlined-multiline-static"
              label="사용했던 언어"
              multiline
              rows={10}
              defaultValue=""
              onChange={handleLanguage}
            />
            </div>
            <div>
            <TextField
              id="outlined-multiline-static"
              label="사용한 기술"
              multiline
              rows={5}
              defaultValue=""
              onChange={handleStack}
            />
            </div>
            <div>
            <TextField
              id="outlined-multiline-static"
              label="자신의 주요 언어"
              multiline
              rows={5}
              defaultValue=""
              onChange={handleTLanguage}
            />
            </div>
          </div>
        </Box>
        <div>
          <Stack direction="row" spacing={2} width={100} margin-inline={'auto'}>
            <Button variant="outlined" onClick={submitInfo}>다음</Button>
          </Stack>
        </div>
      </section>
	  <ThumbnailUpload />
      </>
  )
}

export default Portfolio;