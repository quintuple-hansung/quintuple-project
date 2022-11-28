import Grid2 from '@mui/material/Unstable_Grid2';
import Card from '@mui/material/Card';
import CardText from './CardText';
import { useState } from 'react';
import { collection } from 'firebase/firestore/lite';
import { getDocs, updateDoc, doc } from 'firebase/firestore/lite';
import { firestore } from '../firebase_config';
import { useEffect } from 'react';
import CardThumbnail from './CardThumbnail';
import Pagination from './Pagination';

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
	const [limit, setLimit] = useState(9); // 페이지 당 게시물 수 9개
	const [page, setPage] = useState(1); // 현재 페이지 번호
	const offset = (page - 1) * limit; // 첫 게시물의 위치
	const [like, setHstate] = useState(0);
	/* const [book, setBstate] = useState(false);
	const Hon = () => setHstate(!like);
	const Bon = () => setBstate(!book); */

	console.log(`posts.length = ${posts.length}`);
	console.log(`limit = ${limit}`);
	console.log(`page = ${page}`);

	useEffect(() => {
		const getPosts = async () => {
			const data = await getDocs(postsCollectionRef);
			setPosts(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
			// console.log(posts);
		};
		getPosts();
	}, []);

	const cardPosts = posts.slice(offset, offset + limit).map((value, index) => (
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
		<>
			<div className="Cards" key={1} style={{ marginInline: '100px'}}>
				<Grid2 container justifyContent={'space-around'} flexDirection={'row'} marginBottom={'180px'}>
					{cardPosts}
				</Grid2>
			</div>
				<Pagination
					total = {posts.length}
					limit = {limit}
					page = {page}
					setPage = {setPage}
				/>
		</>
		
	);
}

export default Cards;
