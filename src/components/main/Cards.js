import Grid2 from '@mui/material/Unstable_Grid2';
import Card from '@mui/material/Card';
import CardText from './CardText';
import { useState } from 'react';
import { collection } from 'firebase/firestore/lite';
import { getDocs } from 'firebase/firestore/lite';
import { firestore } from '../firebase_config';
import { useEffect } from 'react';
import CardThumbnail from './CardThumbnail';
import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const modalStyle = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 1000,
	height: 800,
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4,
};

function Cards() {
	const [users, setUsers] = useState([]);
	const usersCollectionRef = collection(firestore, 'user');
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	function ModalHandler() {
		return (
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
				<Fade in={open}>
					<Box sx={modalStyle}>
						<Typography id="transition-modal-title" variant="h6" component="h2">
							Text in a modal
						</Typography>
						<Typography id="transition-modal-description" sx={{ mt: 2 }}>
							Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
						</Typography>
					</Box>
				</Fade>
			</Modal>
		);
	}

	useEffect(() => {
		const getUsers = async () => {
			const data = await getDocs(usersCollectionRef);
			setUsers(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
			console.log(users);
		};
		getUsers();
	}, []);

	const cardUsers = users.map((value, index) => (
		<Card key={index} sx={{ width: '400px', height: '300px' }}>
			<CardActionArea onClick={handleOpen}>
				<ModalHandler />
				<CardText name={value.name} email={value.email} />
				<CardThumbnail email={value.email} />
			</CardActionArea>
		</Card>
	));

	return (
		<>
			<div className="Cards" key={1}>
				<Grid2 container justifyContent={'space-around'} flexDirection={'row'}>
					{cardUsers}
				</Grid2>
			</div>
		</>
	);
}

export default Cards;
