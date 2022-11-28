import React, { useState } from 'react';
import Style from './Temp1.module.scss';
import {Box, Grid} from "@mui/material";
import classNames from 'classnames';
import me from './img/boogie.png';
import Terminal  from './Terminal';
import PortfolioBlock from './PortfolioBlock';
import { collection, doc, getDoc } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";
import { firestore } from "../../components/firebase_config";
import self from "./img/self.png"
import html2canvas from 'html2canvas'; // javascript 페이지 스크린샷 라이브러리
import jsPDF from 'jspdf'; // JavaScript에서 PDF를 생성하는 라이브러리.
import Button from '@mui/material/Button'; // Mui Button 사용
import SaveIcon from '@mui/icons-material/Save'; // Mui 저장 아이콘 사용

function EmojiBullet(props) {
   const {emoji, text} = props;

   return (
       <Box component={'li'} fontSize={'2rem'} lineHeight={1.5} style={{cursor: 'default'}}>
           <Box component={'span'} aria-label="cheese"
                role="img"
                mr={{xs: '0.5rem', md: '1rem'}} fontSize={'3rem'}>{emoji}</Box> {text}
       </Box>
   );
}

export default function Home() {

    //console.log(`info = ${JSON.stringify(info)}`)
    //const info.name = info.info.name.toLowerCase()

    let colors = ["rgb(0,255,164)", "rgb(166,104,255)"]; //이름,사진배경 등 그라데이션 색

    //const querySnapshot = getDocs(collection(firestore, "user"));
    /*querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
    });*/

    // 현재 로그인한 사용자 가져오기
    const auth = getAuth();
    const currentUser = auth.currentUser;
    const currentEmail = currentUser.email;
    const docRef = doc(firestore, "user", currentEmail);

    const [name, setName] = useState('');
    const [edu, setEdu] = useState('');
    const [title, setTitle] = useState('');
    const [introduce, setIntroduce] = useState('');
    const [description, setDescription] = useState('');
    const [language, setLanguage] = useState('');
    const [tlanguage, setTLanguage] = useState('');
    const [field, setField] = useState('');
    const [stack, setStack] = useState('');

    const changeName = target => { setName(target); }
    const changeEdu = target => { setEdu(target); }
    const changeTitle = target => { setTitle(target); }
    const changeIntroduce = target => { setIntroduce(target); }
    const changeDescription = target => { setDescription(target); }
    const changeLanguage = target => { setLanguage(target); }
    const changeTLanguage = target => { setTLanguage(target); }
    const changeField = target => { setField(target); }
    const changeStack = target => { setStack(target); }

    // user 컬렉션에서 db 가져오기
    // name, description, 
    getDoc(doc(firestore, "user", currentEmail)).then(docSnap => {
        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            //console.log(`name = ${docSnap.data()['name']}`);
            var currentName = docSnap.data()['name'];
            var currentField = docSnap.data()['field'];
            var currentEdu = docSnap.data()['education'];
            var currentField = docSnap.data()['field'];
            var currentIntroduce = docSnap.data()['introduce'];
            var currentTitle = docSnap.data()['title'];
            var currentDesc = docSnap.data()['description'];
            var currentLang = docSnap.data()['language'];
            var currentTLang = docSnap.data()['tlanguage'];
            var currentStack = docSnap.data()['stack'];
            //console.log(`currentName = ${currentName}`);
            changeName(currentName); // 이름 설정
            changeField(currentField);// 자신의 분야 설정
            changeEdu(currentEdu);// 학교 설정
            changeIntroduce(currentIntroduce);// 자기소개
            changeTitle(currentTitle);// 포트폴리오 제목
            changeDescription(currentDesc);// 설명
            changeLanguage(currentLang);// 사용했던 언어
            changeTLanguage(currentTLang);// 자기 주요 언어
            changeStack(currentStack); // 사용한 기술
            console.log(`stack = ${stack}`);
        } else {
        console.log("No such document!");
        }
    })

    console.log(`name = ${name}`);

    const info = {
        firstName: name,
        lastName: '',
        initials: "", 
        position: field,
        selfPortrait: self, 
        gradient: `-webkit-linear-gradient(135deg, ${colors})`, 
        baseColor: colors[0],
        miniBio: [ 
            /*{
                emoji: '☕',
                text: 'fueled by coffee'
            },*/
            {
                emoji: '🏢',
                text: edu,
            },
            /*{
                emoji: "💼",
                text: "웹공학트랙"
            },
            {
                emoji: "📧",
                text: "johnsmith@gmail.com"
            }*/
        ],
        bio: introduce,
        skills:
            {
                //proficientWith: ['javascript', 'react', 'git', 'github', 'bootstrap', 'html5', 'css3', 'figma'],
                proficientWith: [tlanguage],
                exposedTo: [language]
            }
        ,
        stack: stack,
    }

    function aboutMeText() {
       return <>
           <p><span style={{color: info.baseColor}}>{info.firstName} $</span> cat
               about{info.name} </p>
           <p><span style={{color: info.baseColor}}>about{info.name} <span
               className={Style.green}>(main)</span> $ </span>
               {info.bio}
           </p>
       </>;
   }

   function skillsText() {
       return <>
           <p><span style={{color: info.baseColor}}>{info.firstName}{info.lastName.toLowerCase()} $</span> cd skills/tools
           </p>
           <p><span style={{color: info.baseColor}}>skills/tools <span
               className={Style.green}>(main)</span> $</span> ls</p>
           <p style={{color: info.baseColor}}> 프로젝트에서 사용한 언어</p>
           <ul className={Style.skills}>
               {info.skills.proficientWith.map((proficiency, index) => <li key={index}>{proficiency}</li>)}
           </ul>
           <p style={{color: info.baseColor}}> 주 언어</p>
           <ul className={Style.skills}>
               {info.skills.exposedTo.map((skill, index) => <li key={index}>{skill}</li>)}
           </ul>
       </>;
   }

   function stacksText() {
    return <>
        <p><span style={{color: info.baseColor}}>{info.firstName}{info.lastName.toLowerCase()} $</span> cd stacks/
        </p>
        <p><span style={{color: info.baseColor}}>skacks/tools <span
            className={Style.green}>(main)</span> $</span> ls</p>
        <p style={{color: info.baseColor}}> 프로젝트에서 사용한 기술</p>
        <p>{info.stack}</p>
    </>;
}

   function miscText() {
       return <>
           <p><span style={{color: info.baseColor}}>{info.firstName}$</span> cd
               Project</p>
           <p><span style={{color: info.baseColor}}>Project/title <span
               className={Style.green}>(main)</span> $</span> ls</p>
                <p>{title}</p>
           <p><span style={{color: info.baseColor}}>Project/description <span
            className={Style.green}>(main)</span> $</span> ls</p>
           {/*<ul>
               {info.hobbies.map((hobby, index) => (
                   <li key={index}><Box component={'span'} mr={'1rem'}>{hobby.emoji}</Box>{hobby.label}</li>
               ))}
               </ul>*/}
            <p>{description}</p>
       </>;
   }

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

   return(
        <>
      <div className='mypage_form_captureTarget'>
      <Box component={'main'} display={'flex'} flexDirection={{xs: 'column', md: 'row'}} alignItems={'center'}
           justifyContent={'center'} minHeight={'calc(100vh - 175px)'}>
         <Box className={classNames(Style.avatar, Style.shadowed)} alt={'image of developer'} style={{background: info.gradient}} component={'img'} src={me} width={{xs: '35vh', md: '40vh'}}
              height={{xs: '35vh', md: '40vh'}}
              borderRadius={'50%'} p={'0.75rem'} mb={{xs: '1rem', sm: 0}} mr={{xs: 0, md: '2rem'}}/>
         <Box>
            <h1>안녕하세요, 반갑습니다.<span className={Style.hand}>🤚</span>
            </h1>
            <h1>" 저는 <span style={{background: info.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>{info.position}</span> 개발자입니다 "</h1>
            <Box component={'ul'} p={'0.8rem'}>
               {info.miniBio.map((bio, index) => (
                  <EmojiBullet key={index} emoji={bio.emoji} text={bio.text}/>
               ))}
            </Box>
            
         </Box>
      </Box>

         <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'3rem'}>
            <Terminal text={aboutMeText()}/>
            <Terminal text={miscText()}/>
            <Terminal text={stacksText()}/>
            <Terminal text={skillsText()}/>
        </Box>    
        </div>

        <div className="mypage_form_myPortfolioExportForm" style={{border:'5px solid rgba(46,59,85)'}}>
					<Button sx={{ width: "500px", marginTop: "50px", marginBottom: "50px",bgcolor: '#2e3b55',fontFamily:'nanum', "&:hover": {backgroundColor:'#E8474C', cursor: "pointer"} }} onClick={() => exportPDF()} variant="contained" endIcon={<SaveIcon />}>내 포트폴리오 PDF로 저장하기</Button>
        </div>



      
      </>

   )
}