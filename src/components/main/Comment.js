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

	// const renderRow = comment.map((value, index) => (
	// 	// const { index, style } = props;
	// 	// 수정 필요
	// 	<ListItem key={index} component="div" disablePadding>
	// 		<ListItemText
	// 			primary={value.user}
	// 			secondary={
	// 				<React.Fragment>
	// 					<Typography
	// 						sx={{ display: 'inline' }}
	// 						component="span"
	// 						variant="body2"
	// 						color="text.primary">
	// 						{value.content}
	// 						{/* {console.log(value.content)} */}
	// 					</Typography>
	// 				</React.Fragment>
	// 			}
	// 		/>
	// 	</ListItem>
	// ));

	var testComment = comment.map((value, index) => (
		<>
			<ListItem>
				<ListItemText
					primary={value.content}
					secondary={value.user}></ListItemText>
			</ListItem>
			<Divider component="li" />
		</>
	));

	// return (
	// 	<>
	// 		<FixedSizeList sx={{ outerHeight: 400 }} itemSize={46} overscanCount={5}>
	// 			{renderRow}
	// 			{console.log('TYPE ' + typeof renderRow)}
	// 		</FixedSizeList>
	// 	</>
	// );

	return (
		<List
			sx={{
				width: '100%',
				maxHeight: 700,
				overflow: 'auto',
				bgcolor: 'background.paper',
			}}>
			{testComment}
			{testComment}
			{testComment}
			{testComment}
			{testComment}
			{testComment}
			{testComment}
			{testComment}
			{testComment}
		</List>
	);
}

export default Comment;
