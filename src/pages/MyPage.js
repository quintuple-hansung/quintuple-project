// #import 할거
import '../styles/MyPage.css'; // css 파일 사용
import { useNavigate } from 'react-router-dom'; //navigate 사용
import React, { useState, useEffect, useRef } from 'react'; // useState,userEffect 사용자
import html2canvas from 'html2canvas'; // javascript 페이지 스크린샷 라이브러리
import jsPDF from 'jspdf'; // JavaScript에서 PDF를 생성하는 라이브러리.
import TopBar from '../components/main/TopBar'; // TopBar 사용
import { firestore } from "../components/firebase_config"; // FireBase DB 불러오기 용 firestore 사용
import { getDoc, updateDoc, doc } from '@firebase/firestore/lite';
import { getAuth, updateProfile, updatePassword, reauthenticateWithCredential, EmailAuthProvider, } from 'firebase/auth'; // firebase에서 사용자 정보를 가져오고, 재인증 메소드, 업데이트 처리
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
import SendIcon from '@mui/icons-material/Send'; // Mui 전송 아이콘 ( > ) 사용
import SaveIcon from '@mui/icons-material/Save'; // Mui 저장 아이콘 사용

function MyPage() {
	/* #databse 연동부분
  const handleLoginEmail = e => {
	setLoginEmail(e.target.value);
  };
  */

	// 화면전환
	const navigate = useNavigate();

	// 사용할 변수들
	const [tapValue, setTapValue] = useState(0); // Mui table 현재 보고 있는 탭 값

	// 현재 로그인한 사용자 가져오기
	const auth = getAuth();
	const currentUser = auth.currentUser; // Auth로 얻은 현재 User 객체
	const currentEmail = currentUser.email; // User객체의 이메일 값

	// onChange 에서 다룰 변수들
	const [values, setValues] = useState({
		newPassword: '',
		newUserName: '',
		oldPassword: '',
		oldUserName: '',
		isPwType: false,
		isPwVisible: false
	});



	// FireBase DB에서 UserName 가져오기
	const getUserNamefromDB = async (currentEmail) => {
		const docRef = doc(firestore, 'user', currentEmail); //docRef 생성
		const userDoc = await getDoc(docRef); // userDoc의 Data 가져오기 (Promise 객체 리턴)
		const currentUserName = await (userDoc.data().name); //DB에서 가져온 Promise 객체에서 name data 가져오기
		console.log(`getUserfromDB is called : ${currentUserName}`)
		return currentUserName;
	}

	// FireBase DB에서 Password 가져오기
	const getPWfromDB = async (currentEmail) => {
		const docRef = doc(firestore, 'user', currentEmail); //docRef 생성
		const userDoc = await getDoc(docRef); // userDoc의 Data 가져오기 (Promise 객체 리턴)
		const Password = await (userDoc.data().password)// DB에서 가져온 Promise객체에서 Password data 가져오기
		console.log(`getPWfromDBis called : ${Password}`)
		return Password;
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

		getPWfromDB(currentEmail).then(pw => setPassword(pw)); //DB에서 PW(Promise 객체)를 가져와서 setPassword에 전달

		//Promise 객체의 데이터 설정을 setPassword 함수 안에서 함
		const setPassword = async (data) => {
			const oldPassword = data; // DB에서 가져온 값
			const newPassword = values.newPassword; // 변경된 PW값

			console.log(`setPassword is called : oldPassword is ${oldPassword} newPassword is ${newPassword}`)

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

		getUserNamefromDB(currentEmail).then(username => setUserName(username)); //DB에서 UserName(Promise 객체)를 가져와서 setUserName에 전달	

		const setUserName = async (data) => {
			const oldUserName = data;
			const newUserName = values.data;

			console.log(`setUserName is called : oldUserName is ${oldUserName} newUserName is ${newUserName}`)

			if (oldUserName !== newUserName) {
				//DB에 UserName 수정
				const docRef = doc(firestore, 'user', currentEmail); //docRef 생성
				updateDoc(docRef, { ['name']: newUserName });
				console.log(`UserName updated!`)
			} else console.log(`UserName is Not Changed!`)
		}



	};

	//취소 버튼 이벤트
	const onClickCancelButton = () => {
		console.log('Cancel button pressed');
	};

	//비밀번호 표시 전환 버튼 이벤트
	const onClickVisible = () => {
		console.log(`values.isPwType is ${values.isPwType}`);
		console.log(`values.isPwVisible is ${values.isPwVisible}`);

		setValues({ ...values, isPwType: !values.isPwType, isPwVisible: !values.isPwVisible });
	};

	//PDF로 추출
	const exportPDF = () => {
		// PDF가 캡쳐해서 변환한 이미지가 클 경우 잘려서 출력되는 것 해결해야 함!
		// => 참조 사이트 https://jeffrey-oh.tistory.com/363 
		// 현재 페이지에서 HTML element를 가져오는 것이 아닌 다른 페이지의 componenet 가져오는 것 해결 해야 함!
		const element = document.querySelector("div.mypage_form_captureTarget") // 캡쳐할 HTML element

		html2canvas(element)
			.then(function (canvas) {

				var capturedImgData = canvas.toDataURL(); // canvas로 캡쳐한 data를 base64 Data로 변환(jsPDF에서 사용)

				// 새 PDF 생성
				var doc = new jsPDF('p', "pt", "a4");
				var position = 0;


				var imgWidth = 595; // 이미지 가로 길이() A4 기준
				var pageHeight = 842; // 이미지 세로 길이() A4 기준 / A4 기준 (595,842)pt
				var imgHeight = canvas.height * imgWidth / canvas.width; // 이미지 세로 길이를 A4기준에 맞게 변환
				var heightLeft = imgHeight;
				var margin = 0;

				console.log(`canvas.width is ${canvas.width} canvas.height is ${canvas.height}`) // canvas 크기(captured img) 출력
				console.log(`imgWidth is ${imgWidth} imgHeight.width is ${imgHeight}`) // pdf 에 출력될 변환된 capture img 크기 출력
				console.log(`margin is ${margin} postion is ${position}`) // 출력되는 시작지점(x,y) 출력
				console.log(`HTML element width is ${element.offsetWidth} HTML element height is ${element.offsetHeight}`) // targetHTMLelemnt의 원래 크기 출력

				// PDF에 캡쳐한 img 붙이기
				// 첫 페이지 출력
				doc.addImage(capturedImgData, 'PNG', margin, position, imgWidth, imgHeight);
				heightLeft -= pageHeight;

				// 한 페이지 이상일 경우 루프 돌면서 출력
				while (heightLeft >= 842) {
					position = heightLeft - imgHeight;
					doc.addPage();
					doc.addImage(capturedImgData, 'jpeg', margin, position, imgWidth, imgHeight);
					heightLeft -= pageHeight;
				}

				// 파일 저장
				doc.save('protoPDF.pdf');

			})


	};

	{
		/*JSX code*/
	}
	return (
		<div className="mypage_form">
			<TopBar />
			<Container className='mypage_form_captureTarget' fixed>
				<Box className="mypage_form_createPortfolioform">
					<Button sx={{ margin: "3% auto" }} onClick={onClickPortFolio} variant="contained" endIcon={<SendIcon />}>
						포트폴리오 작성하러 가기</Button>
				</Box>
				<Typography id="lbMyPost">내 글</Typography>
				<div className="mypage_form_myPostForm">
					<Box sx={{ width: '100%' }}>
						<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
							<Tabs value={tapValue} onChange={handleTabChange} aria-label="basic tabs example">
								<Tab icon={<FavoriteIcon />} label="좋아요한 글" />
								<Tab icon={<BookmarkIcon />} label="북마크한 글" />
								<Tab icon={<ModeCommentIcon />} label="댓글단 글" />
							</Tabs>
						</Box>
						<TabPanel value={tapValue} index={0}>
							Item One
						</TabPanel>
						<TabPanel value={tapValue} index={1}>
							Item Two
						</TabPanel>
						<TabPanel value={tapValue} index={2}>
							Item Three
						</TabPanel>
					</Box>
				</div>
				<Typography id="lbMyProfile">회원 정보 수정</Typography>
				<div className="mypage_form_myProfileForm">
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
						<InputLabel htmlFor="filled-adornment-password">OldPassword</InputLabel>
						<FilledInput
							id="filled-adornment-password"
							type={values.isPwType ? 'text' : 'password'}
							defaultValue={''/*initPW(currentEmail).then((pw)=>{console.log(`()=> return pw ${pw}`)})*/}
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
							id="filled-start-adornment"
							defaultValue={''}
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
						<Button sx={{ width: "100px", marginRight: "10px" }} onClick={onClickSubmitButton} variant="contained">수정</Button>
						<Button sx={{ width: "100px", marginLeft: "10px" }} onClick={onClickCancelButton} variant="contained">취소</Button>
					</div>
				</div>
				<Typography id="lbExportPortFolio">포트폴리오 내보내기</Typography>
				<div className="mypage_form_myPortfolioExportForm">
					<Button sx={{ width: "200px", marginTop: "50px", marginBottom: "50px" }} onClick={() => exportPDF()} variant="contained" endIcon={<SaveIcon />}>PDF로 저장하기</Button>
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
