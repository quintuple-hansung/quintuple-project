import Grid2 from '@mui/material/Unstable_Grid2';
import Card from '@mui/material/Card';
import CardText from './CardText';
import { useState } from 'react';
import { collection } from 'firebase/firestore/lite';
import { getDocs } from 'firebase/firestore/lite';
import { firestore } from '../firebase_config';
import { useEffect } from 'react';
import CardThumbnail from './CardThumbnail';
import IconButton from '@mui/material/IconButton';
import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import { CardActionArea, Container } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import FavoriteIcon from '@mui/icons-material/Favorite';
import InfoIcon from '@mui/icons-material/Info';
import { ClickAwayListener } from '@mui/material';
import Comment from './Comment';

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
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	function ModalHandler(props) {
		return (
			<>
				<Modal
					aria-labelledby="transition-modal-title"
					aria-describedby="transition-modal-description"
					open={open}
					onClose={handleClose}
					closeAfterTransition
					BackdropComponent={Backdrop}
					BackdropProps={{
						timeout: 500,
					}}>
					<ClickAwayListener onClickAway={handleClose}>
						<Fade in={open}>
							<Box sx={modalStyle}>
								<ModalInteract post={props.post} name={props.name} />
								<ModalContent post={props.post} />
							</Box>
						</Fade>
					</ClickAwayListener>
				</Modal>
			</>
		);
	}
	function ModalInteract(props) {
		return (
			<Box
				sx={{
					position: 'absolute',
					right: '32px',
					width: 450,
					height: 1000,
				}}>
				{props.name}
				<Box
					sx={{
						width: '100%',
						height: '70px',
						top: '100px',
						position: 'absolute',
					}}>
					<IconButton color="inherit" sx={{ width: 50, left: '30px' }}>
						<ShareIcon />
					</IconButton>
					<IconButton color="inherit" sx={{ width: 50, left: '70px' }}>
						<BookmarkIcon />
					</IconButton>
					<IconButton color="inherit" sx={{ width: 50, left: '110px' }}>
						<FavoriteIcon />
					</IconButton>
				</Box>
				<Box // 댓글 영역
					sx={{
						backgroundColor: 'gray',
						bottom: '0px',
						position: 'absolute',
						width: '100%',
						height: '800px',
					}}>
					<Comment post={props.post} />
				</Box>
			</Box>
		);
	}

	function ModalContent() {
		return (
			<Box
				sx={{
					position: 'absolute',
					left: '32px',
					width: 1050,
					height: 1000,
				}}>
				<iframe
					src="https://wikidocs.net/"
					title="내용"
					width="100%"
					height="100%"
					style={{
						frameborder: '0',
					}}></iframe>
			</Box>
		);
	}

	useEffect(() => {
		const getPosts = async () => {
			const data = await getDocs(postsCollectionRef);
			setPosts(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
			console.log(posts);
		};
		getPosts();
	}, []);

	const cardPosts = posts.map((value, index) => (
		<Card key={index} sx={{ width: '400px', height: '300px' }}>
			<CardActionArea onClick={handleOpen}>
				<ModalHandler post={value.id} name={value.user} />
				<CardText name={value.user} id={value.id} />
				<CardThumbnail img_url={value.img_url} />
			</CardActionArea>
		</Card>
	));

	return (
		<>
			<div className="Cards" key={1}>
				<Grid2 container justifyContent={'space-around'} flexDirection={'row'}>
					{cardPosts}
				</Grid2>
			</div>
		</>
	);
}

export default Cards;
