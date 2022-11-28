import React, { useState } from "react";
import "./Greeting.css";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import FeelingProud from "./FeelingProud";
import { collection, doc, getDoc } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";
import { firestore } from "../../../../components/firebase_config";
import { textAlign } from "@mui/system";

export default function Greeting(props) {
  //const theme = props.theme;
  const [theme, setTheme] = useState({});

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
  
  const changeName = target => { setName(target); }
  const changeEdu = target => { setEdu(target); }
  const changeTitle = target => { setTitle(target); }
  const changeIntroduce = target => { setIntroduce(target); }
  const changeDescription = target => { setDescription(target); }
  const changeLanguage = target => { setLanguage(target); }
  const changeTLanguage = target => { setTLanguage(target); }
  const changeField = target => { setField(target); }


  // user 컬렉션에서 db 가져오기
  getDoc(doc(firestore, "user", currentEmail)).then(docSnap => {
      if (docSnap.exists()) {
        var currentName = docSnap.data()['name'];
        var currentField = docSnap.data()['field'];
        var currentEdu = docSnap.data()['education'];
        var currentField = docSnap.data()['field'];
        var currentIntroduce = docSnap.data()['introduce'];
        var currentTitle = docSnap.data()['title'];
        var currentDesc = docSnap.data()['description'];
        var currentLang = docSnap.data()['language'];
        var currentTLang = docSnap.data()['tlanguage'];
        //console.log(`currentName = ${currentName}`);
        changeName(currentName); // 이름 설정
        changeField(currentField);// 자신의 분야 설정
        changeEdu(currentEdu);// 학교 설정
        changeIntroduce(currentIntroduce);// 자기소개
        changeTitle(currentTitle);// 포트폴리오 제목
        changeDescription(currentDesc);// 설명
        changeLanguage(currentLang);// 사용했던 언어
        changeTLanguage(currentTLang);// 자기 주요 언어
      } else {
      console.log("No such document!");
      }
  })

  //console.log(`name = ${name}`);

  const handleTheme = () => {
    setTheme(props.theme);
    console.log(`theme: ${theme}`);
  }

  //Home Page
  const greeting = {
    title: title,
    logo_name: "AshutoshHathidara",
    nickname: name,
    subTitle: introduce,
    resumeLink:
      "https://drive.google.com/open?id=1XYpYhLeqCdyx_q6l0bQoC7RgwQjAjXPf",
    //portfolio_repository: "https://github.com/ashutosh1919/masterPortfolio",
    //githubProfile: "https://github.com/ashutosh1919",
  };

  return (
    /*<Fade bottom duration={2000} distance="40px">*/
      <div className="greet-main" id="greeting" onLoad={handleTheme}>
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <p className="greeting-text" style={{ color: theme.text, fontSize:'60px', fontWeight: 'bold', textAlign: 'left' }}>
                {greeting.title}
              </p>
              <h2 className="greeting-nickname" style={{ color: theme.text }}>
                --- by {greeting.nickname}
              </h2>
              <p
                className="greeting-text-p subTitle"
                style={{ color: theme.secondaryText, textAlign: 'left', fontSize: '30px', marginTop: '60px', marginLeft: '20px'}}
              >
                {greeting.subTitle}
              </p>
              {/*<SocialMedia theme={theme} />
              <div className="portfolio-repo-btn-div">
                <Button
                  text="⭐ Star Me On Github"
                  newTab={true}
                  href={greeting.portfolio_repository}
                  theme={theme}
                  className="portfolio-repo-btn"
                />
  </div>*/}
              {/* <div className="button-greeting-div">
              <Button text="Contact me" href="#contact" />
              <Button text="See my resume" newTab={true} href={greeting.resumeLink} />
            </div> */}
            </div>
          </div>
          <div className="greeting-image-div">
            {/* <img
							alt="saad sitting on table"
							src={require("../../assests/images/feelingProud.svg")}
						></img> */}
            <FeelingProud theme={theme} />
          </div>
        </div>
      </div>
    // </Fade>
  );
}
