import { getStorage, ref, getDownloadURL } from 'firebase/storage';
import React, { useState, useEffect } from 'react';
import CardMedia from '@mui/material/CardMedia';
import { CircularProgress } from '@mui/material';
export default function CardThumbnail(props) {
	const [url, setUrl] = useState();
	const [ready, setReady] = useState(true);

	useEffect(() => {
		const func = async () => {
			const storage = getStorage();
			const gsReference = ref(
				storage,
				`gs://quintuple-e9f49.appspot.com/portfolio_thumbnails/${props.img_url}.jpg`
			);
			if (url) {
				await getDownloadURL(gsReference).then(x => {
					setUrl(x);
					setReady(false);
				});
			}
		};

		if (url == undefined) {
			func();
			setReady(true);
		}
	}, []);
	if (url)
		return <CardMedia component="img" image={url} src="true" alt="image" />;
	else return <CircularProgress />;
}
