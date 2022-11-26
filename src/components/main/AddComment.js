import React from 'react';
import { useState } from 'react';
import { Button, TextField } from '@mui/material';
import CommentIcon from '@mui/icons-material/Comment';
import Box from '@mui/material/Box';

export default function AddComment() {
	const [comment, setComment] = useState('');

	const commentChange = e => {
		console.log(e.target.value);
		setComment(e.target.value);
	};
	return (
		<Box
			component="form"
			sx={{
				'& > :not(style)': {
					m: 1,
					width: '35ch',
					top: '15px',
					float: 'left',
				},
			}}
			noValidate
			autoComplete="off">
			<TextField
				id="commentTextField"
				label="Comment"
				variant="filled"
				onChange={commentChange}
			/>
			<Button variant="outlined" startIcon={<CommentIcon />} float="right">
				Comment
			</Button>
		</Box>
	);
}
