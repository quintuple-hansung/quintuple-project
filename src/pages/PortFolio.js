import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import {firestore} from "../components/firebase_config";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc, updateDoc } from 'firebase/firestore/lite';
import { useNavigate } from 'react-router-dom';

function PortFolio(){
  //const [value, setValue] = React.useState('Controlled');
  const [name, setName] = React.useState('');
  const [education, setEducation] = React.useState('');
  const [age, setAge] = React.useState('');
  const [introduce, setIntroduce] = React.useState('');

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
      age: age,
      education: education,
      introduce: introduce
    })
    navigate('/selectTemplate'); // 템플릿 선택하는 페이지로 넘어감
  }

  return (
    <>
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '35ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <div>
              <TextField
                id="outlined-multiline-static"
                label="이름"
                multiline
                rows={1}
                defaultValue=""
                onChange={handleName}
              />
            </div>
            <div>
              <TextField
                id="outlined-multiline-static"
                label="나이"
                multiline
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
          </div>
          <div>
            <TextField
              id="outlined-multiline-static"
              label="자기소개"
              multiline
              rows={10}
              defaultValue=""
              onChange={handleIntroduce}
            />
          </div>
        </Box>
        <div>
          <Stack direction="row" spacing={2} width={100} margin-inline={'auto'}>
            <Button variant="outlined" onClick={submitInfo}>다음</Button>
          </Stack>
        </div>
      </>
  )
}

export default PortFolio;