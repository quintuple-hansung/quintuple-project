import { collection, query, where, getDocs } from 'firebase/firestore/lite';
import { firestore } from '../firebase_config';
import { useEffect, useState } from 'react';
import { ListItem } from '@mui/material';
import ListItemText from '@mui/material/ListItemText';
import React from 'react';
import Typography from '@mui/material/Typography';
import { FixedSizeList } from 'react-window';

function Comment(props) {
	const q = query(collection(firestore, `post/${props.post}/comment`));

	const getComments = async () => {
		const data = await getDocs(q);
		data.forEach(doc => {
			console.log(doc.id, '=>', doc.data());
		});
		return data;
	};

	function renderRow(list) {
		const { index, style } = props;

		return ( // 수정 필요
			<FixedSizeList
				height={400}
				width={360}
				itemSize={46}
				itemCount={200}
				overscanCount={5}>
				{list.map(it => (
					<ListItem style={style} key={index} component="div" disablePadding>
						<ListItemText
							primary={it.user}
							secondary={
								<React.Fragment>
									<Typography
										sx={{ display: 'inline' }}
										component="span"
										variant="body2"
										color="text.primary">
										{it.content}
									</Typography>
								</React.Fragment>
							}
						/>
					</ListItem>
				))}
			</FixedSizeList>
		);
	}

	const list = getComments();
	renderRow(list);
}

export default Comment;
