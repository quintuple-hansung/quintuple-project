// import React from 'react';
// import {
// 	getStream
// } from 'firebase/auth';
// getStream()
import { getStorage, ref, getDownloadURL } from 'firebase/storage';
import React, { useState, useEffect } from 'react';

export default function DownloadImage() {
	const [url, setUrl] = useState();
	const [ready, setReady] = useState(true);

	useEffect(() => {
		const func = async () => {
			const storage = getStorage();
			const reference = ref(storage, '1.png');
			await getDownloadURL(reference).then(x => {
				setUrl(x);
				setReady(false);
			});
		};

		if (url == undefined) {
			func();
			setReady(true);
		}
	}, []);

	return <img src={url} />;
}
