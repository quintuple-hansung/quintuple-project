// #import 할거
import Swing from 'react-reveal/Swing'; // Swing component 사용
import { useNavigate } from 'react-router-dom'; //navigate 사용
import '../styles/MyPage.css'; // css 파일 사용

function MyPage() {
  /* #databse 연동부분
  const handleLoginEmail = e => {
		setLoginEmail(e.target.value);
	};
  */

  // 화면전환
  const navigate = useNavigate();

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

  //북마크 버튼 이벤트
  const onClickCommentPost = () => {
    console.log('CommentPost button pressed');
    //navigate('/MycommentPost');
  };

  //비밀번호 수정 버튼 이벤트 #비밀번호 수정 전 현재 비밀번호로 사용자 재인증
  const onClickPassWordEdit = () => {
    console.log('PassWordEdit button pressed');
    //비밀번호 내용 수정가능하게 변경
  };




  return (
    <div className="mypage_form">
      <div className='mypage_form_portfolioform'>
        <p>
          <input id="portfolio" type="button" value="포트폴리오 작성" onClick={onClickPortFolio} />
        </p>
      </div>
      <div className='mypage_form_mypostform'>
        <p>
          <input id="likedPost" type="button" value="좋아요한 글" onClick={onClickLikedPost} />
        </p>
        <p>
          <input id="bookmark" type="button" value="북마크" onClick={onClickCommentPost} />
        </p>
        <p>
          <input id="commentPost" type="button" value="댓글 단 글" onClick={onClickBookmark} />
        </p>
      </div>
      <div className='mypage_form_myprofileform'>
        <div> {/*#아래 많은 div에 div className 필요? */}
          <label htmlFor="id">id: </label>
          <input id="id" type="text" defaultValue={"사용자id"}/*# 사용자id datbase에서 가져오기 onChange={handleLoginEmail} #데이터베이스 연동부분*//><br />
        </div>
        <div>
          <label htmlFor="pw">pw: </label>
          <input id="pw" type="password" value="사용자pw" disabled="disabled" />
          <input id="pwedit" type="button" value="수정" onClick={onClickPassWordEdit} /*#수정 버튼 클릭시 password diabled 해제*/  /><br />
        </div>
        <div>
          <label htmlFor="name">name: </label>
          <input id="name" type="text" defaultValue={"사용자name"} /*onChange={handleLoginEmail}*//><br />
        </div>
        <div>
          <label htmlFor="email">email: </label>
          <input id="email" type="text" defaultValue={"사용자email"} /*onChange={handleLoginEmail}*//><br />
        </div>
        <div>
          <input type="submit" value="확인" /*#일단 무지성 버튼 만들기, 과연 submit,button이 맞나?*//> 
          <input type="button" value="취소" />
        </div>
      </div>
    </div>
  );

}
export default MyPage;