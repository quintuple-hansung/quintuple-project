import { useParams } from 'react-router-dom';
import Backdrop from '@mui/material/Backdrop';
import { useState } from 'react';
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
import { getDocs, updateDoc, doc } from 'firebase/firestore/lite';
import '../../styles/Main.css';
import TopBar from './TopBar';

export default function PostView(props) {
	var postId = useParams();
	const [like, setHstate] = useState(0);
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
			<Box
				sx={{
					position: 'absolute',
					right: '32px',
					width: 450,
					height: 1000,
				}}>
				<Box
					sx={{
						width: '100%',
						height: '70px',
						top: '100px',
						position: 'absolute',
					}}>
					<IconButton color="inherit" sx={{ width: 50, left: '30px' }}>
						<ShareIcon onClick={handleCopyClipBoard} />
					</IconButton>
					<IconButton color="inherit" sx={{ width: 50, left: '70px' }}>
						<BookmarkIcon />
					</IconButton>
					<IconButton color="inherit" sx={{ width: 50, left: '110px' }}>
						<FavoriteIcon onClick={() => togglelike(props.post)} />
					</IconButton>
				</Box>
				<Box // 댓글 영역
					sx={{
						bottom: '0px',
						position: 'absolute',
						width: '100%',
						height: '800px',
					}}>
					<Comment post={props.post} />
					<AddComment post={props.post} />
				</Box>
			</Box>
		);
	}

	function Content(props) {
		return (
			<Box
				sx={{
					position: 'absolute',
					left: '32px',
					width: 1050,
					height: 1000,
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
			{postId.postid}
			<Content post={postId.postid} name={'aaaaaaaaa@aaa.com'} />
			<Interact post={postId.postid} />
		</div>
	);
}
