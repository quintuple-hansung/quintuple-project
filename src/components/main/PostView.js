import { useParams } from 'react-router-dom';
import Backdrop from '@mui/material/Backdrop';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import { CardActionArea } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import { ClickAwayListener } from '@mui/material';
import Comment from './Comment';
import { firestore } from '../firebase_config';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import AddComment from './AddComment';
import IconButton from '@mui/material/IconButton';
import { getDoc, updateDoc, doc } from 'firebase/firestore/lite';
import '../../styles/Main.css';
import TopBar from './TopBar';

export default function PostView(props) {
	var postId = useParams();
	const [like, setHstate] = useState(0);

	const [name, setName] = useState('');
	const changeName = target => {
		setName(target);
	};

	getDoc(doc(firestore, 'post', postId.postid)).then(docSnap => {
		if (docSnap.exists()) {
			var currentName = docSnap.data()['user'];
			changeName(currentName);
			console.log(`TETET${currentName}`);
		} else {
			console.log('No such document!');
		}
	});

	//좋아요 카운팅
	const togglelike = async props => {
		const userDoc = doc(firestore, 'post', props);
		setHstate(like + 1);
		await updateDoc(userDoc, { like: like });
	};

	//모달 링크
	const handleCopyClipBoard = async (text: string) => {
		try {
			await navigator.clipboard.writeText(text);

			alert('링크 복사');
		} catch (error) {
			alert('복사 실패!');
		}
	};

	function Interact(props) {
		return (
			<>
				<Box
					sx={{
						width: '18vw',
						height: '2vh',
						top: '5vh',
						position: 'absolute',
					}}>
					<IconButton
						color="inherit"
						sx={{ width: '2vh', height: '10vh', left: '170vh' }}>
						<ShareIcon onClick={handleCopyClipBoard} />
					</IconButton>
					<IconButton
						color="inherit"
						sx={{ width: '2vh', height: '10vh', left: '172vh' }}>
						<BookmarkIcon />
					</IconButton>
					<IconButton
						color="inherit"
						sx={{ width: '2vh', height: '10vh', left: '174vh' }}>
						<FavoriteIcon onClick={() => togglelike(props.post)} />
					</IconButton>
				</Box>
				<Box // 댓글 영역
					sx={{
						top: '20vh',
						right: '2vw',
						position: 'absolute',
						width: '15vw',
						height: '70vh',
					}}>
					<Comment post={props.post} />
				</Box>
			</>
		);
	}

	function Content(props) {
		return (
			<Box
				width="80vw"
				height="92vh"
				sx={{
					position: 'absolute',
					left: '2vh',
				}}>
				<iframe
					src={'/portfolioView/' + props.name}
					title="내용"
					width="100%"
					height="100%"
					style={{
						frameborder: '0',
					}}></iframe>
			</Box>
		);
	}
	return (
		<div>
			<TopBar />
			<Content post={postId.postid} name={name} />
			<Interact post={postId.postid} />
		</div>
	);
}
