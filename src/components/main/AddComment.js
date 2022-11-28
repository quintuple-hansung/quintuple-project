import React from 'react';
import { useState } from 'react';
import { Button, TextField } from '@mui/material';
import CommentIcon from '@mui/icons-material/Comment';
import Box from '@mui/material/Box';
import { getAuth } from 'firebase/auth';
import { firestore } from '../firebase_config';
import {
	addDoc,
	collection,
	getDoc,
	query,
	doc,
} from 'firebase/firestore/lite';
import { async } from '@firebase/util';

export default function AddComment(props) {
	const [comment, setComment] = useState('');
	const [name, setName] = useState('');
	const q = query(collection(firestore, `post/${props.post}/comment`));
	const commentChange = e => {
		setComment(e.target.value);
	};

	const auth = getAuth();
	const currentEmail = auth.currentUser.email;

	const getUserName = async () => {
		await getDoc(doc(firestore, 'user', currentEmail)).then(docSnap => {
			if (docSnap.exists()) {
				console.log('Document data:', docSnap.data().name);
				setName(docSnap.data().name);
			} else {
				console.log('No such document!');
				setName('undefined name');
			}
		});
	};
	const addCommentFirebase = () => {
		props.commentHandler({
			content: comment,
			user: name,
		});
		addDoc(collection(firestore, `post/${props.post}/comment`), {
			content: comment,
			user: name,
		});
		document.getElementById('commentTextField').value = '';
	};

	getUserName();
	return (
		<Box
			component="form"
			sx={{
				'& > :not(style)': {
					width: '15vw',
					height: '4vh',
					right: '0.5vw',
					top: '70vh',
				},
			}}
			noValidate
			autoComplete="off">
			<TextField
				sx={{
					width: '16vw',
					height: '2vh',
				}}
				id="commentTextField"
				label="Comment"
				variant="filled"
				onChange={commentChange}
			/>
			<Button
				sx={{
					width: '16vw',
					height: '2vh',
					marginTop: '0.5vh',
				}}
				variant="outlined"
				startIcon={<CommentIcon />}
				onClick={addCommentFirebase}>
				Add Comment
			</Button>
		</Box>
	);
}
