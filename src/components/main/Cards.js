import Grid2 from '@mui/material/Unstable_Grid2';
import Card from '@mui/material/Card';
import CardText from './CardText';
import { useState } from 'react';
import { collection } from 'firebase/firestore/lite';
import { getDocs, updateDoc, doc } from 'firebase/firestore/lite';
import { firestore } from '../firebase_config';
import { useEffect } from 'react';
import CardThumbnail from './CardThumbnail';

import React from 'react';

import { Link } from 'react-router-dom';

const modalStyle = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 1500,
	height: 1000,
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4,
};

function Cards() {
	const [posts, setPosts] = useState([]);
	const postsCollectionRef = collection(firestore, 'post');

	const [like, setHstate] = useState(0);
	/* const [book, setBstate] = useState(false);
	const Hon = () => setHstate(!like);
	const Bon = () => setBstate(!book); */

	useEffect(() => {
		const getPosts = async () => {
			const data = await getDocs(postsCollectionRef);
			setPosts(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
			// console.log(posts);
		};
		getPosts();
	}, []);

	const cardPosts = posts.map((value, index) => (
		<Link
			to={`/postview/${value.id}`}
			style={{ textDecoration: 'none', color: 'inherit', }} >
			<Card
				key={index}
				sx={{ width: '400px', height: '300px', marginTop: '5vh', border: "2px solid rgba(46,59,85)" }}>
				{/* <ModalHandler post={value.id} name={value.user} /> */}
				<CardText name={value.user} id={value.id} />
				<CardThumbnail img_url={value.user} />
			</Card>
		</Link>
	));

	return (
		<div className="Cards" key={1}>
			<Grid2 container justifyContent={'space-around'} flexDirection={'row'}>
				{cardPosts}
			</Grid2>
		</div>
	);
}

export default Cards;
