import { collection, query, where, getDocs } from 'firebase/firestore/lite';
import { firestore } from '../firebase_config';
import { useEffect, useState } from 'react';
import { ListItem } from '@mui/material';
import ListItemText from '@mui/material/ListItemText';
import React from 'react';
import Typography from '@mui/material/Typography';
import { FixedSizeList } from 'react-window';
import { CommentsDisabled } from '@mui/icons-material';

function Comment(props) {
	const q = query(collection(firestore, `post/${props.post}/comment`));
	const [comment, setComment] = useState([]);

	useEffect(() => {
		const getComments = async () => {
			const data = await getDocs(q);
			setComment(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
			console.log(comment);
		};
		getComments();
	}, []);

	const renderRow = comment.map((value, index) => (
		// const { index, style } = props;
		// 수정 필요
		<ListItem key={index} component="div" disablePadding>
			<ListItemText
				primary={value.user}
				secondary={
					<React.Fragment>
						<Typography
							sx={{ display: 'inline' }}
							component="span"
							variant="body2"
							color="text.primary">
							{value.content}
						</Typography>
					</React.Fragment>
				}
			/>
		</ListItem>
	));

	return (
		<>
			<FixedSizeList height={400} width={360} itemSize={46} overscanCount={5}>
				{renderRow}
			</FixedSizeList>
		</>
	);
}

export default Comment;
