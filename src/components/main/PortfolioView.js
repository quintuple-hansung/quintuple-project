import React, { useEffect, useState } from 'react';
import Template1 from '../../pages/temp1/Template1';
import Home from '../../pages/temp1/home/HomeComponent';
import { firestore } from '../firebase_config';
import { useParams } from 'react-router-dom';
import { getDoc, doc } from 'firebase/firestore/lite';
import Template1View from './PortfolioViewTemplate/Template1View';
import Template2View from './PortfolioViewTemplate/Template2View';

export default function PortfolidView() {
	var [portfolioType, setPortfolioType] = useState(0);
	var postEmail = useParams();
	console.log(postEmail);
	const changeType = target => {
		setPortfolioType(target);
	};

	getDoc(doc(firestore, 'user', postEmail.email)).then(docSnap => {
		if (docSnap.exists()) {
			var currentType = docSnap.data()['selectTemplateNum'];
			changeType(currentType);
			console.log(currentType);
		} else {
			console.log('No such document!');
		}
	});

	if (portfolioType == 1) {
		return <Template1View email={postEmail.email} />;
	} else if (portfolioType == 2) {
		return <Template2View email={postEmail.email} />;
	}
}
