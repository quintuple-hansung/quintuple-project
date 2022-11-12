import Grid2 from '@mui/material/Unstable_Grid2';
import Card from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import CardText from './CardText';
import { useState } from 'react';
import { collection } from 'firebase/firestore/lite';
import { getDocs } from 'firebase/firestore/lite';
import { firestore } from '../firebase_config';
import { useId } from 'react';
import { useEffect } from 'react';
import CardThumbnail from './CardThumbnail';

function Cards() {
	const [users, setUsers] = useState([]);
	// db의 users 컬렉션을 가져옴
	const usersCollectionRef = collection(firestore, 'user');
	// 시작될때 한번만 실행
	useEffect(() => {
		// 비동기로 데이터 받을준비
		const getUsers = async () => {
			// getDocs로 컬렉션안에 데이터 가져오기
			const data = await getDocs(usersCollectionRef);
			// users에 data안의 자료 추가. 객체에 id 덮어씌우는거
			setUsers(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
			console.log(users);
		};
		getUsers();
	}, []);

	const cardUsers = users.map((value, index) => (
		<Card key={index} sx={{ width: '300px', height: '300px' }}>
			<CardText name={value.name} email={value.email} />
			{/* // <CardThumbnail /> */}
			<CardThumbnail email={value.email} />
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
