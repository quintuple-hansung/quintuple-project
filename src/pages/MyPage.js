// #import 할거
import '../styles/MyPage.css'; // css 파일 사용
import { useNavigate } from 'react-router-dom'; //navigate 사용
import React, { useState, useEffect, useRef } from 'react'; // useState,userEffect 사용자
import TopBar from '../components/main/TopBar'; // TopBar 사용
import { firestore } from "../components/firebase_config"; // FireBase DB 불러오기 용 firestore 사용
import { getDoc, updateDoc, doc } from '@firebase/firestore/lite';
import { getAuth, updatePassword, reauthenticateWithCredential, EmailAuthProvider, } from 'firebase/auth'; // firebase에서 사용자 정보를 가져오고, 재인증 메소드, 업데이트 처리
import Container from '@mui/material/Container'; // Mui Container 사용
import Box from '@mui/material/Box'; // Mui Box 사용
import Button from '@mui/material/Button'; // Mui Button 사용
import Tabs from '@mui/material/Tabs'; // Mui Tabs 사용
import Tab from '@mui/material/Tab'; // Mui Tab 사용
import FavoriteIcon from '@mui/icons-material/Favorite'; // Mui Favorite(heart) Icons 사용
import BookmarkIcon from '@mui/icons-material/Bookmark'; // Mui Bookmark Icons 사용
import ModeCommentIcon from '@mui/icons-material/ModeComment'; // Mui Comment Icons 사용
import Typography from '@mui/material/Typography'; // Mui 글자용 Typography 사용
import FilledInput from '@mui/material/FilledInput'; // Mui 색이 채워진 Input 사용
import InputAdornment from '@mui/material/InputAdornment'; // Mui 반응적 Input 사용
import IconButton from '@mui/material/IconButton'; // Mui 비밀번호 표시 Icon 사용
import Visibility from '@mui/icons-material/Visibility'; // Mui 비밀번호 표시 Icon img 사용
import VisibilityOff from '@mui/icons-material/VisibilityOff'; // Mui 비밀번호 비표시 Icon img 사용
import InputLabel from '@mui/material/InputLabel'; // Mui Input field의 라벨 사용
import FormControl from '@mui/material/FormControl'; // Mui Form container 사용
import TextField from '@mui/material/TextField'; // Mui textfield 사용
import WriteIcon from '@mui/icons-material/DriveFileRenameOutline'; //포트폴리오 작성 아이콘



function MyPage() {
	// 화면전환
	const navigate = useNavigate();

	// 사용할 변수들
	const [tapValue, setTapValue] = useState(0); // Mui table 현재 보고 있는 탭 값

	// 현재 로그인한 사용자 가져오기
	const auth = getAuth();
	const currentUser = auth.currentUser; // Auth로 얻은 현재 User 객체
	const currentEmail = currentUser.email; // User객체의 이메일 값
	const [oldPassword, setoldPassword] = useState('');
	const [oldUserName, setoldUserName] = useState('');


	// onChange 에서 다룰 변수들
	const [values, setValues] = useState({
		newPassword: '',
		newUserName: '',
		isPwType: false,
		isPwVisible: false
	});



	// FireBase DB에서 UserName 가져오기
	const initUserName = async (currentEmail) => {
		const docRef = doc(firestore, 'user', currentEmail); //docRef 생성
		const userDoc = await getDoc(docRef); // userDoc의 Data 가져오기 (Promise 객체 리턴)
		const currentUserName = await (userDoc.data().name); //DB에서 가져온 Promise 객체에서 name data 가져오기
		setoldUserName(currentUserName);
		return currentUserName;
	}

	//Firebase DB에서 Password 가져오기
	const initPW = async (currentEmail) => {
		const docRef = doc(firestore, 'user', currentEmail); //docRef 생성
		const userDoc = await getDoc(docRef); // userDoc의 Data 가져오기 (Promise 객체 리턴)
		const Password = await (userDoc.data().password)// DB에서 가져온 Promise객체에서 Password data 가져오기
		setoldPassword(Password);
		return Password;
	}


	initUserName(currentEmail);
	initPW(currentEmail);


	//Promise 객체의 데이터 설정을 setPassword 함수 안에서 함
	const setPassword = async () => {
		const newPassword = values.newPassword; // 변경된 PW값

		//사용자 재인증 (PW 업데이트)
		const credential = EmailAuthProvider.credential(
			currentEmail,
			oldPassword
		);

		await reauthenticateWithCredential(auth.currentUser, credential); // StackOverFlow 사랑합니다 ㅠㅠ

		// User의 PW 변경
		if (oldPassword !== newPassword) {
			updatePassword(currentUser, newPassword).then(() => {
				console.log(`PassWord updated!`)
			}).catch((error) => {
				console.log(`PassWord error!`)
			});
		} else console.log('Password is Not Changed!')

		//DB에 변경된 PW 수정
		const docRef = doc(firestore, 'user', currentEmail); //docRef 생성
		updateDoc(docRef, { ['password']: newPassword })
	}


	const setUserName = async () => {
		const newUserName = values.newUserName;

		if (oldUserName !== newUserName) {
			//DB에 UserName 수정
			const docRef = doc(firestore, 'user', currentEmail); //docRef 생성
			updateDoc(docRef, { ['name']: newUserName });
			console.log(`UserName updated!`)
		} else console.log(`UserName is Not Changed!`)
	}

	//onChange()

	// Values들이 바뀌면
	const handleChange = (prop) => (event) => {
		setValues({ ...values, [prop]: event.target.value });
		console.log(`onhandleChange is called`)
	};


	// Tab 목록이 바뀌면
	const handleTabChange = (event, newValue) => {
		setTapValue(newValue);
	};


	// onClick()
	//포트폴리오 작성 버튼 이벤트
	const onClickPortFolio = () => {
		console.log('PortFolio button pressed');
		navigate('/Portfolio');
	};

	//수정 버튼 이벤트
	const onClickSubmitButton = async () => {

		setPassword(); //DB에서 PW(Promise 객체)를 가져와서 setPassword에 전달
		setUserName(); //DB에서 UserName(Promise 객체)를 가져와서 setUserName에 전달
	};

	//취소 버튼 이벤트
	const onClickCancelButton = () => {
		console.log('Cancel button pressed');
	};

	//비밀번호 표시 전환 버튼 이벤트
	const onClickVisible = () => {
		console.log('onClickVisible button pressed');
		console.log(`values.isPwVisible is ${values.isPwVisible}`);
		setValues({ ...values, isPwType: !values.isPwType, isPwVisible: !values.isPwVisible });
	};


	{
		/*JSX code*/
	}
	return (
		<div className="mypage_form">
			<TopBar />
			<Container className='mypage_form_captureTarget' fixed >
				<Box className="mypage_form_createPortfolioform" style={{ border: '4px solid rgba(46,59,85)' }}>
					<Button sx={{ margin: "3% auto", bgcolor: '#2e3b55', fontFamily: 'nanum', "&:hover": { backgroundColor: '#E8474C', cursor: "pointer" } }} onClick={onClickPortFolio} variant="contained" endIcon={<WriteIcon />}>
						포트폴리오 작성하러 가기</Button>
				</Box>
				<Typography id="lbMyPost" fontFamily='nanum' sx={{ fontSize: 'h6.fontSize' }}>내 글</Typography>
				<div className="mypage_form_myPostForm" style={{ border: '4px solid rgba(46,59,85)' }}>
					<Box sx={{ width: '100%' }}>
						<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
							<Tabs value={tapValue} onChange={handleTabChange} aria-label="basic tabs example">
								<Tab sx={{ "&:hover": { color: '#E8474C', cursor: "pointer" } }} icon={<FavoriteIcon />} label="좋아요한 글" />
								<Tab sx={{ "&:hover": { color: '#E8474C', cursor: "pointer" } }} icon={<BookmarkIcon />} label="북마크한 글" />
								<Tab sx={{ "&:hover": { color: '#E8474C', cursor: "pointer" } }} icon={<ModeCommentIcon />} label="댓글단 글" />
							</Tabs>
						</Box>
						<TabPanel value={tapValue} index={0}>
							<Typography>글 1</Typography>
							<hr></hr>
							<Typography>글 2</Typography>
							<hr></hr>
							<Typography>글 3</Typography>
							<hr></hr>
							<Typography>글 4</Typography>
							<hr></hr>
							<Typography>글 5</Typography>
							<hr></hr>
						</TabPanel>
						<TabPanel value={tapValue} index={1}>
							<Typography>글 1</Typography>
							<hr></hr>
							<Typography>글 2</Typography>
							<hr></hr>
							<Typography>글 3</Typography>
							<hr></hr>
						</TabPanel>
						<TabPanel value={tapValue} index={2}>
							<Typography>글 1</Typography>
							<hr></hr>
							<Typography>글 2</Typography>
							<hr></hr>
							<Typography>글 3</Typography>
							<hr></hr>
							<Typography>글 4</Typography>
							<hr></hr>
						</TabPanel>
					</Box>
				</div>
				<Typography id="lbMyProfile" fontFamily='nanum' >회원 정보 수정</Typography>
				<div className="mypage_form_myProfileForm" style={{ border: '4px solid rgba(46,59,85)' }}>
					<div>
						<TextField
							sx={{ m: 1, marginTop: '50px', width: '250px' }}
							id="filled-disabled"
							label="ID"
							defaultValue={currentEmail}
							variant="filled"
							disabled
						/>
					</div>
					<FormControl sx={{ m: 1, width: '250px' }} variant="filled">
						<InputLabel htmlFor="filled-adornment-oldpassword">OldPassword</InputLabel>
						<FilledInput
							id="filled-adornment-oldpassword"
							type={values.isPwType ? 'text' : 'password'}
							value={oldPassword}
							endAdornment={
								<InputAdornment position="end">
									<IconButton
										sx={{ width: '40px' }}
										aria-label="toggle password visibility"
										onClick={onClickVisible}
										edge="end"
									>
										{values.isPwType ? <VisibilityOff /> : <Visibility />}
									</IconButton>
								</InputAdornment>
							}
							disabled
						/>
					</FormControl>
					<FormControl sx={{ m: 1, width: '250px' }} variant="filled">
						<InputLabel htmlFor="filled-adornment-password">NewPassword</InputLabel>
						<FilledInput
							id="filled-adornment-password"
							type={values.isPwType ? 'text' : 'password'}
							onChange={handleChange('newPassword')}
							endAdornment={
								<InputAdornment position="end">
									<IconButton
										sx={{ width: '40px' }}
										aria-label="toggle password visibility"
										onClick={onClickVisible}
										edge="end"
									>
										{values.isPwType ? <VisibilityOff /> : <Visibility />}
									</IconButton>
								</InputAdornment>
							}
						/>
					</FormControl>
					<div>
						<TextField
							sx={{ m: 1, width: '250px' }}
							label="OldUserName"
							id="filled-start-oldadornment"
							value={oldUserName}
							variant="filled"
							disabled
						/>
						<TextField
							sx={{ m: 1, width: '250px' }}
							label="NewUserName"
							id="filled-start-adornment"
							onChange={handleChange('newUserName')}
							variant="filled"
						/>
					</div>
					<div style={{ marginTop: '10px', marginBottom: '50px' }}>
						<Button sx={{ width: "100px", marginRight: "10px", bgcolor: '#2e3b55' }} onClick={onClickSubmitButton} variant="contained">수정</Button>
						<Button sx={{ width: "100px", marginLeft: "10px", bgcolor: '#2e3b55' }} onClick={onClickCancelButton} variant="contained">취소</Button>
					</div>
				</div>
			</Container>
		</div>
	);
}

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box sx={{ p: 3 }}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}
export default MyPage;
