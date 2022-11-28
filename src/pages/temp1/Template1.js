import Main from "./containers/Main";
import { ThemeProvider } from "styled-components";
import { chosenTheme } from "../theme";
import { GlobalStyles } from "../global";
import html2canvas from 'html2canvas'; // javascript ������ ��ũ���� ���̺귯��
import jsPDF from 'jspdf'; // JavaScript���� PDF�� �����ϴ� ���̺귯��.
import Button from '@mui/material/Button'; // Mui Button ���
import SaveIcon from '@mui/icons-material/Save'; // Mui ���� ������ ���

function Template1(){
  //PDF�� ����
	const exportPDF = () => {
		// PDF�� ĸ���ؼ� ��ȯ�� �̹����� Ŭ ��� �߷��� ��µǴ� �� �ذ��ؾ� ��!
		// => ���� ����Ʈ https://jeffrey-oh.tistory.com/363 
		// ���� ���������� HTML element�� �������� ���� �ƴ� �ٸ� �������� componenet �������� �� �ذ� �ؾ� ��!
		const element = document.querySelector("div.mypage_form_captureTarget") // ĸ���� HTML element

		html2canvas(element)
			.then(function (canvas) {

				var capturedImgData = canvas.toDataURL(); // canvas�� ĸ���� data�� base64 Data�� ��ȯ(jsPDF���� ���)

				// �� PDF ����
				var doc = new jsPDF('p', "pt", "a4");
				var position = 0;


				var imgWidth = 595; // �̹��� ���� ����() A4 ����
				var pageHeight = 842; // �̹��� ���� ����() A4 ���� / A4 ���� (595,842)pt
				var imgHeight = canvas.height * imgWidth / canvas.width; // �̹��� ���� ���̸� A4���ؿ� �°� ��ȯ
				var heightLeft = imgHeight;
				var margin = 0;

				console.log(`canvas.width is ${canvas.width} canvas.height is ${canvas.height}`) // canvas ũ��(captured img) ���
				console.log(`imgWidth is ${imgWidth} imgHeight.width is ${imgHeight}`) // pdf �� ��µ� ��ȯ�� capture img ũ�� ���
				console.log(`margin is ${margin} postion is ${position}`) // ��µǴ� ��������(x,y) ���
				console.log(`HTML element width is ${element.offsetWidth} HTML element height is ${element.offsetHeight}`) // targetHTMLelemnt�� ���� ũ�� ���

				// PDF�� ĸ���� img ���̱�
				// ù ������ ���
				doc.addImage(capturedImgData, 'PNG', margin, position, imgWidth, imgHeight);
				heightLeft -= pageHeight;

				// �� ������ �̻��� ��� ���� ���鼭 ���
				while (heightLeft >= 842) {
					position = heightLeft - imgHeight;
					doc.addPage();
					doc.addImage(capturedImgData, 'jpeg', margin, position, imgWidth, imgHeight);
					heightLeft -= pageHeight;
				}

				// ���� ����
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
					<Button sx={{ width: "500px", marginTop: "50px", marginBottom: "50px",bgcolor: '#2e3b55',fontFamily:'nanum', "&:hover": {backgroundColor:'#E8474C', cursor: "pointer"} }} onClick={() => exportPDF()} variant="contained" endIcon={<SaveIcon />}>�� ��Ʈ������ PDF�� �����ϱ�</Button>
      </div>

    </div>
    </>
  );
}
export default Template1;