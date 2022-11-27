//import * as React from 'react';
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
import Grid from '@mui/material/Unstable_Grid2';
import { Container, width } from '@mui/system';
import { storage, auth } from '../components/firebase_config';
import {
	ref,
	getDownloadURL,
	uploadBytes,
	uploadBytesResumable,
} from 'firebase/storage';
import React, { useState, useEffect } from 'react';
import { LinearProgress, Typography } from '@mui/material';

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
  const [field, setField] = React.useState('') // 자신의 분야

  //썸네일 업로드 관련
  const [image, setImage] = useState('');
	const [imageUrl, setImageUrl] = useState('');
	const [error, setError] = useState('');
	const [progress, setProgress] = useState(100);
	//const currentEmail = auth.currentUser.email;

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

  const handleField = e => {
    setField(e.target.value);
  }

  //썸네일 업로드 관련
  const handleImage = event => {
		const image = event.target.files[0];
		setImage(image);
		console.log(image);
		setError('');
	};

	const onSubmit = event => {
		event.preventDefault();
		setError('');
		if (image === '') {
			console.log('파일이 선택되지 않았습니다');
			setError('파일이 선택되지 않았습니다');
			return;
		}
		// 업로드 처리
		console.log('업로드 처리');
		const storageRef = ref(storage, `portfolio_thumbnails/${currentEmail}.jpg`); //어떤 폴더 아래에 넣을지 설정
		// const imagesRef = storageRef.child(currentEmail + '.jpg'); //파일명

		console.log('파일을 업로드하는 행위');
		// const upLoadTask = storageRef.put(image);
		const upLoadTask = uploadBytesResumable(storageRef, image);
		console.log('태스크 실행 전');

		upLoadTask.on(
			'state_changed',
			snapshot => {
				console.log('snapshot', snapshot);
				const percent = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
				console.log(percent + '% done');
				setProgress(percent);
			},
			error => {
				console.log('err', error);
				setError('파일 업로드에 실패했습니다.' + error);
				setProgress(100); //진행중인 바를 삭제
			},
			() => {
				event.target.value = '';
				getDownloadURL(storageRef).then(downloadURL => {
					console.log('File available at', downloadURL);
					setImageUrl(downloadURL);
					setImage(downloadURL);
				});
			}
		);
	};

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
      field: field,
    })
    navigate('/selectTemplate'); // 템플릿 선택하는 페이지로 넘어감
  }

  return (
    <>
    <PageBar />
    <form action='' class='form' onSubmit={onSubmit}>
        <p class='field1'>포트폴리오에 들어갈 내용을 작성하세요. </p>
            
        <p class='field required'>
          <label class='label required' for='name'>이름 </label>
          <input class='text-input' id='name' name='name' required type='text' onChange={handleName}/>
        </p>
        <p class='field half'>
          <label class='label' for='age'>나이</label>
          <input class='text-input' id='age' name='age' type='text' onChange={handleAge}/>
        </p>
        <p class='field half'>
          <label class='label' for='education'>학력</label>
          <input class='text-input' id='education' name='education' type='text' onChange={handleEducation}/>
        </p>
        <p class='field'>
          <label class='label' for='field'>자신의 분야</label>
          <textarea class='textarea' cols='50' id='field' name='field' rows='1' onChange={handleField}></textarea>
        </p>
        <p class='field'>
          <label class='label' for='introduce'>자기소개</label>
          <textarea class='textarea' cols='50' id='introduce' name='introduce' rows='3' onChange={handleIntroduce}></textarea>
        </p>
        <p class='field'>
          <label class='label' for='tlanguage'>주요 언어 (3개 필수)</label>
          <textarea class='textarea' cols='50' id='tlanguage' name='tlanguage' rows='2' onChange={handleTLanguage}></textarea>
        </p>
        <p class='field'>
          <label class='label' for='title'>프로젝트 제목</label>
          <textarea class='textarea' cols='50' id='title' name='title' rows='3' onChange={handleTitle}></textarea>
        </p>
        <p class='field'>
          <label class='label' for='description'>프로젝트 설명</label>
          <textarea class='textarea' cols='50' id='description' name='description' rows='4' onChange={handleDesription}></textarea>
        </p>
        <p class='field half'>
          <label class='label' for='stack'>사용한 기술 </label>
          <input class='text-input' id='stack' name='stack' type='text' onChange={handleStack}/>
        </p>
        <p class='field half'>
          <label class='label' for='language'>사용한 언어 (3개 필수)</label>
          <input class='text-input' id='language' name='language' type='text' onChange={handleLanguage}/>
        </p>
       
        <p class="field img">
          <label class='label' for='language'>썸네일 업로드</label>
          <input type="file" onChange={handleImage} />
          <input class='button' onClick={onSubmit} value='썸네일 업로드'/>
        </p>
        <p>
          {progress !== 100 && <LinearProgressWithLabel value={progress} />}
        {imageUrl && (
          <div>
            <img width="400px" src={imageUrl} alt="uploaded" />
          </div>
        )}
        </p>
        <p class="field">
          <input class='button' type='submit' value='다음' onClick={submitInfo}/>
        </p>
      </form>
      </>
  )
}

function LinearProgressWithLabel(props) {
	return (
		<Box display="flex" alignItems="center">
			<Box width="100%" mr={1}>
				<LinearProgress variant="determinate" {...props} />
			</Box>
			<Box minWidth={35}>
				<Typography variant="body2" color="textSecondary">{`${Math.round(
					props.value
				)}%`}</Typography>
			</Box>
		</Box>
	);
} 
export default Portfolio;