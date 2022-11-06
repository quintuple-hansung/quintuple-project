import { CardContent } from '@mui/material';
import {
	getDocs,
	doc,
	query,
	collection,
	where,
} from 'firebase/firestore/lite';
import { useState } from 'react';
import { db } from '../firebase_config';
function CardHeader() {
	const [userName, setUserName] = useState('');
	// getUserName('test4@test4.com');
	getUserName('test4@test4.com').then(setUserName);
	return <CardContent>{userName}</CardContent>;
}

async function getUserName(email) {
	const user = query(collection(db, 'user'), where('email', '==', email));
	const userSnapshot = await getDocs(user);
	var userName = '';
	userSnapshot.forEach(doc => {
		userName = doc.data()['name'];
		console.log(userName);
	});
	return userName;
}
export default CardHeader;
