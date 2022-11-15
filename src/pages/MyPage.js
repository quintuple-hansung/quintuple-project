// #import 할거
import Swing from 'react-reveal/Swing'; // Swing component 사용
import { useNavigate } from 'react-router-dom'; //navigate 사용
import '../styles/MyPage.css'; // css 파일 사용
import React, { useState, useEffect } from 'react'; // useState,userEffect 사용자
import { MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md"; // 비밀번호 이미지 ReactIcon 사용 (yarn add react-icons) 



function MyPage() {
  /* #databse 연동부분
  const handleLoginEmail = e => {
    setLoginEmail(e.target.value);
  };
  */

  // 화면전환
  const navigate = useNavigate();

  //
  const [visible, setVisible] = useState(false);
  const [isPwType, setisPWType] = useState(true);

  //포트폴리오 작성 버튼 이벤트
  const onClickPortFolio = () => {
    console.log('PortFolio button pressed');
    navigate('/PortFolio');
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

  //비밀번호 수정 버튼 이벤트 #비밀번호 수정 전 현재 비밀번호로 사용자 재인증
  const onClickVisible = () => {
    setisPWType(!isPwType)
    setVisible(!visible)
  }

  const Visibility = () => { // 비밀번호 수정 이미지 
    return (
      <div style={{ width: 50, height: 50 }} >
        {!visible && <MdOutlineVisibilityOff color="grey" size={50} />} {/*조건부 랜더링*/}
        {visible && <MdOutlineVisibility color="grey" size={50} />}
      </div>
    )
  };




  {/*JSX code*/ }
  return (
    <div className="mypage_form">
      <div className='mypage_form_createPortfolioform'>
        <p>
          <input id="portfolio" type="button" value="포트폴리오 작성" onClick={onClickPortFolio} />
        </p>
      </div>
      <p id='lbMyPost'>내 글</p>
      <div className='mypage_form_myPostForm'>
        <p>
          <span><input id="likedPost" type="button" value="좋아요한 글" onClick={onClickLikedPost} /></span>
          <span><input id="bookmark" type="button" value="북마크" onClick={onClickCommentPost} /></span>
          <span><input id="commentPost" type="button" value="댓글 단 글" onClick={onClickBookmark} /></span>
        </p>
      </div>
      <p id='lbMyProfile'>회원 정보 수정</p>
      <div className='mypage_form_myProfileForm'>
        <div> {/*#아래 많은 div에 div className 필요? => 놉*/}
          <label htmlFor="id">id: </label>
          <input id="id" type="text" defaultValue={"사용자id"}/*# 사용자id datbase에서 가져오기 onChange={handleLoginEmail} #데이터베이스 연동부분*/ /><br />
        </div>
        <div>
          <label htmlFor="pw">pw: </label>
          <span>
            {isPwType && <input id="pw" type="password" defaultValue={"사용자pw"} />} {/*조건부 랜더링*/}
            {!isPwType && <input id="pw" type="text" defaultValue={"사용자pw"} />} 
          </span>
          <span onClick={() => onClickVisible()}> <Visibility visible={false} /> </span>{/*// 버튼 누를 시 이미지 변경, useReducer는 컴포넌트 밖에서 상태 업데이트 */}
        </div>
        <div>
          <label htmlFor="name">name: </label>
          <input id="name" type="text" defaultValue={"사용자name"}  /*onChange={handleLoginEmail}*/ /><br />
        </div>
        <div>
          <label htmlFor="email">email: </label>
          <input id="email" type="text" defaultValue={"사용자email"} /*onChange={handleLoginEmail}*/ /><br />
        </div>
        <div>
          <input name="button" type="submit" value="수정" /*#일단 무지성 버튼 만들기, 과연 submit,button이 맞나?*/ />
          <input name="button" type="button" value="취소" />
        </div>
      </div>
      <p id='lbExportPortFolio'>포트폴리오 내보내기</p>
      <div className='mypage_form_myPortfolioExportForm'>
      <input name="button" type="submit" value="PDF"/>
      </div>
    </div>
  );

}
export default MyPage;