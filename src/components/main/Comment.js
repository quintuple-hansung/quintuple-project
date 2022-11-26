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
		<List
			sx={{
				width: '100%',
				maxHeight: '80%',
				overflow: 'auto',
				bgcolor: 'background.paper',
			}}>
			{CommentList}
		</List>
	);
}

export default Comment;
