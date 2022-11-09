// import React from 'react';
// import {
// 	getStream
// } from 'firebase/auth';
// getStream()
import { getStorage, ref, getDownloadURL } from 'firebase/storage';
import React, { useState, useEffect } from 'react';
import CardMedia from '@mui/material/CardMedia';

export default function DownloadImage(props) {
	const [url, setUrl] = useState();
	const [ready, setReady] = useState(true);

	useEffect(() => {
		const func = async () => {
			const storage = getStorage();
			const reference = ref(
				storage,
				// `portfolio_thumbnails/${props.email}.heic`
				'portflio_thumbnails/test@test.com.heic'
			);
			const gsReference = ref(
				storage,
				`gs://quintuple-e9f49.appspot.com/portfolio_thumbnails/${props.email}.jpg`
			);
			await getDownloadURL(gsReference).then(x => {
				setUrl(x);
				setReady(false);
			});
		};

		if (url == undefined) {
			func();
			setReady(true);
		}
	}, []);

	return <CardMedia component="img" image={url} src="true" alt="image" />;
}
