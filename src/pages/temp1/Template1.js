import Main from "./containers/Main";
import { ThemeProvider } from "styled-components";
import { chosenTheme } from "../theme";
import { GlobalStyles } from "../global";
import html2canvas from 'html2canvas'; // javascript 페이지 스크린샷 라이브러리
import jsPDF from 'jspdf'; // JavaScript에서 PDF를 생성하는 라이브러리.
import Button from '@mui/material/Button'; // Mui Button 사용
import SaveIcon from '@mui/icons-material/Save'; // Mui 저장 아이콘 사용
import {RiHome2Line} from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';

function Template1(){

	 // 화면전환
	 const navigate = useNavigate();
  	
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
				doc.save('MyPortfolio.pdf');

			})


	};

return (
  <>
    <div className='mypage_form_captureTarget'>
      
        <ThemeProvider theme={chosenTheme}>
          <>
            <GlobalStyles />
            <div>
              <Main theme={chosenTheme} />
            </div>
          </>
      </ThemeProvider>
     

      <div className="mypage_form_myPortfolioExportForm" style={{border:'5px solid rgba(46,59,85)'}}>
					<Button sx={{ width: "500px", marginTop: "50px", marginRight:"50px", marginBottom: "50px",bgcolor: '#2e3b55',fontFamily:'nanum', "&:hover": {backgroundColor:'#E8474C', cursor: "pointer"} }} onClick={() => exportPDF()} variant="contained" endIcon={<SaveIcon />}>내 포트폴리오 PDF로 저장하기</Button>
					<Button sx={{ width: "200px", marginTop: "50px", marginBottom: "50px", color:'white', bgcolor: '#2e3b55',fontFamily:'nanum', 
                    "&:hover": {backgroundColor:'#E8474C', cursor: "pointer"}}} endIcon={<RiHome2Line />} onClick={() => navigate('/main')}> 홈으로 돌아가기</Button> 

	  </div>

    </div>
    </>
  );
}
export default Template1;