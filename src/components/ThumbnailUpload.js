import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { storage, auth } from './firebase_config';
import {
	ref,
	getDownloadURL,
	uploadBytes,
	uploadBytesResumable,
} from 'firebase/storage';

import { Box, LinearProgress, Typography } from '@mui/material';

const ThumbnailUpload = () => {
	const [image, setImage] = useState('');
	const [imageUrl, setImageUrl] = useState('');
	const [error, setError] = useState('');
	const [progress, setProgress] = useState(100);

	const currentEmail = auth.currentUser.email;
	// const currentEmail = 'testEmail';

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

	return (
		<div>
			{error && <div variant="danger">{error}</div>}
			<form onSubmit={onSubmit}>
				<input type="file" onChange={handleImage} />
				<button onClick={onSubmit}>업로드</button>
			</form>
			{progress !== 100 && <LinearProgressWithLabel value={progress} />}
			{imageUrl && (
				<div>
					<img width="400px" src={imageUrl} alt="uploaded" />
				</div>
			)}
		</div>
	);
};

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
export default ThumbnailUpload;
