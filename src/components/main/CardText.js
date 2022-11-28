import { CardHeader } from '@mui/material';
import { getDoc, updateDoc, doc } from 'firebase/firestore/lite';
import { useState } from 'react';
import { firestore } from '../firebase_config';

export function CardText(props) {
	const [name, setName] = useState('');
	const changeName = target => {
		setName(target);
	};

	getDoc(doc(firestore, 'user', props.name)).then(docSnap => {
		if (docSnap.exists()) {
			var currentName = docSnap.data()['name'];
			changeName(currentName);
			console.log(`TETET${currentName}`);
		} else {
			console.log('No such document!');
		}
	});
	if (name !== '') {
		return <CardHeader title={`${name} 님의 포트폴리오`} titleTypographyProps={{ fontFamily:'nanum', fontWeight:'bold',}} />;
	} else return <CardHeader title={`주인 없는 포트폴리오`} titleTypographyProps={{ fontFamily:'nanum', fontWeight:'bold' }}/>;
}

export default CardText;
