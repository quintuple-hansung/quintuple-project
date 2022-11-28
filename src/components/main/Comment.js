import { collection, query, where, getDocs } from 'firebase/firestore/lite';
import { firestore } from '../firebase_config';
import { useEffect, useState } from 'react';
import { ListItem } from '@mui/material';
import ListItemText from '@mui/material/ListItemText';
import React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import { CommentsDisabled } from '@mui/icons-material';
import { maxHeight } from '@mui/system';
import Divider from '@mui/material/Divider';
import AddComment from './AddComment';
function Comment(props) {
	const q = query(collection(firestore, `post/${props.post}/comment`));
	const [comment, setComment] = useState([]);

	useEffect(() => {
		const getComments = async () => {
			const data = await getDocs(q);
			setComment(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
		};
		getComments();
	}, []);

	const commentChanged = target => {
		const t = [...comment];
		t.push(target);
		setComment(t);
	};
	var CommentList = comment.map((value, index) => (
		<>
			<ListItem>
				<ListItemText
					primary={value.content}
					secondary={value.user}></ListItemText>
			</ListItem>
			<Divider component="li" />
		</>
	));

	return (
		<>
			<List
				sx={{
					position: 'absolute',
					width: '15vw',
					// maxHeight: '80%',
					right: '0vw',
					bottom: '4vh',
					height: '70vh',
					overflow: 'auto',
					bgcolor: 'background.paper',
				}}>
				{CommentList}
			</List>
			<AddComment post={props.post} commentHandler={commentChanged} />
		</>
	);
}

export default Comment;
