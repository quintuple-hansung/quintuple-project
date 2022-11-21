// #import 할거
import '../styles/MyPage.css'; // css 파일 사용
import { useNavigate } from 'react-router-dom'; //navigate 사용
import React, { useState, useEffect, useRef } from 'react'; // useState,userEffect 사용자
import { MdOutlineVisibility, MdOutlineVisibilityOff } from 'react-icons/md'; // 비밀번호 이미지 ReactIcon 사용 (yarn add react-icons)
import html2canvas from 'html2canvas'; // javascript 페이지 스크린샷 라이브러리
import jsPDF from 'jspdf'; // JavaScript에서 PDF를 생성하는 라이브러리.
import TopBar from '../components/main/TopBar';
import { width } from '@mui/system';
import {firestore} from "../components/firebase_config";
import { getAuth, updateEmail,updateProfile} from 'firebase/auth';
import { doc, getDoc, updateDoc } from 'firebase/firestore/lite';
import { async } from '@firebase/util';

function MyPage() {
	/* #databse 연동부분
  const handleLoginEmail = e => {
	setLoginEmail(e.target.value);
  };
  */

	// 화면전환
	const navigate = useNavigate();

	// 사용할 변수들
	const [visible, setVisible] = useState(false);
	const [isPwType, setisPWType] = useState(true);


	// 현재 로그인한 사용자 가져오기
	const auth = getAuth();
	console.log(`auth: ${auth}`);
	
	const currentUser = auth.currentUser;
	const currentUserName = currentUser.displayName;
	const currentEmail = currentUser.email;
	console.log(`currentUser: ${currentEmail} currentUserName: ${auth.name} user.currentUserName: ${currentUserName}`);


	const userNameRef = useRef();
	const userEmailRef = useRef();
	

	// const docRef = doc(firestore, "user", currentEmail);
	// const docSnap = getDoc(docRef);

  	//onChange()
  	

  	// onClick()

	//포트폴리오 작성 버튼 이벤트
	const onClickPortFolio = () => {
		console.log('PortFolio button pressed');
		navigate('/Portfolio');
	};

	//좋아요한 게시글 버튼 이벤트
	const onClickLikedPost = () => {
		console.log('LikedPost button pressed');
		/* # 페이지 전환이 아닌 현재 페이지에 정보 뿌리기, 아래 북마크 , 댓글단 게시글도 동일한 포맷 사용*/
		//navigate('/MyLikedPost');
	};

	//북마크 버튼 이벤트
	const onClickBookmark = () => {
		console.log('LikedPost button pressed');
		//navigate('/MyBookmark');
	};

	//댓글 버튼 이벤트
	const onClickCommentPost = () => {
		console.log('CommentPost button pressed');
		//navigate('/MycommentPost');
	};

	//수정 버튼 이벤트
	const onClickSubmitButton = () => {
		console.log('Submit button pressed');
		console.log(`userNameRef.current.value : ${userNameRef.current.value}`);
		console.log(`userEmailRef.current.value : ${userEmailRef.current.value}`);

		updateProfile(currentUser,{
			displayName: userNameRef.current.value
		}).then(() => {
			console.log(`Profile updated!`)
		  }).catch((error) => {
			console.log(`Profile updated error!`)
		  });
		
		updateEmail(currentUser,userEmailRef.current.value).then(() => {
			console.log(`Email updated!`)
		  }).catch((error) => {
			console.log(`Email updated error!`)
		  });		
	};

	//취소 버튼 이벤트
	const onClickCancelButton = () => {
		console.log('Cancel button pressed');
	};

	//비밀번호 수정 버튼 이벤트 #비밀번호 수정 전 현재 비밀번호로 사용자 재인증
	const onClickVisible = () => {
		setisPWType(!isPwType);
		setVisible(!visible);
	};

	// 비밀번호 아이콘 조건부 랜더링
	const Visibility = () => {
		// 비밀번호 수정 이미지
		return (
			<div style={{ width: 50, height: 50 }}>
				{!visible && <MdOutlineVisibilityOff color="grey" size={50} />}{' '}
				{/*조건부 랜더링*/}
				{visible && <MdOutlineVisibility color="grey" size={50} />}
			</div>
		);
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
			<div className='mypage_form_captureTarget'>
				<div className="mypage_form_createPortfolioform">
					<p>
						<input
							id="portfolio"
							type="button"
							value="포트폴리오 작성"
							onClick={onClickPortFolio}
						/>
					</p>
				</div>
				<p id="lbMyPost">내 글</p>
				<div className="mypage_form_myPostForm">
					<p>
						<span>
							<input
								id="likedPost"
								type="button"
								value="좋아요한 글"
								onClick={onClickLikedPost}
							/>
						</span>
						<span>
							<input
								id="bookmark"
								type="button"
								value="북마크"
								onClick={onClickCommentPost}
							/>
						</span>
						<span>
							<input
								id="commentPost"
								type="button"
								value="댓글 단 글"
								onClick={onClickBookmark}
							/>
						</span>
					</p>
				</div>
				<p id="lbMyProfile">회원 정보 수정</p>
				<div className="mypage_form_myProfileForm">
					<div>
						{' '}
						{/*#아래 많은 div에 div className 필요? => 놉*/}
						<label htmlFor="id">id: </label>
						<input
							id="id" 
							type="text"
							defaultValue={ currentEmail } 
							disabled
						/> 
						<br />
					</div>
					<div>
						<label htmlFor="pw">pw: </label>
						<span>
							{isPwType && (
								<input id="pw" type="password" defaultValue={'사용자pw'} />
							)}{' '}
							{/*조건부 랜더링*/}
							{!isPwType && (
								<input id="pw" type="text" defaultValue={'사용자pw'} />
							)}
						</span>
						<span onClick={() => onClickVisible()}>
							<Visibility visible={false} />
						</span>
						{/*// 버튼 누를 시 이미지 변경, useReducer는 컴포넌트 밖에서 상태 업데이트 */}
					</div>
					<div>
						<label htmlFor="name">name: </label>
						<input
							id="name"
							type="text"
							defaultValue={currentUserName }
							ref = {userNameRef}
						/>
						<br />
					</div>
					<div>
						<label htmlFor="email">email: </label>
						<input
							id="email"
							type="text"
							defaultValue={currentEmail} 
							ref = {userEmailRef}
						/>
						<br />
					</div>
					<div>
						<input
							name="button"  /*#일단 무지성 버튼 만들기, 과연 submit,button이 맞나?*/
							type="submit"
							value="수정"
							onClick={onClickSubmitButton}
						/>
						<input name="button" type="button" value="취소" onClick={onClickCancelButton} />
					</div>
				</div>
				<p id="lbExportPortFolio">포트폴리오 내보내기</p>
				<div className="mypage_form_myPortfolioExportForm">
					<button onClick={() => exportPDF()}>PDF로 추출하기</button>
				</div>
			</div>
		</div>
	);
}
export default MyPage;
