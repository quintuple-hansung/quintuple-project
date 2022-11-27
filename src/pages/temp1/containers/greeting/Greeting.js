import React, { useState } from "react";
import "./Greeting.css";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import FeelingProud from "./FeelingProud";
import { collection, doc, getDoc } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";
import { firestore } from "../../../../components/firebase_config";

export default function Greeting(props) {
  //const theme = props.theme;
  const [theme, setTheme] = useState({});

  // 현재 로그인한 사용자 가져오기
  const auth = getAuth();
  const currentUser = auth.currentUser;
  const currentEmail = currentUser.email;
  const docRef = doc(firestore, "user", currentEmail);

  const [name, setName] = useState('');
  
  const changeName = target => {
      setName(target);
  }

  // user 컬렉션에서 db 가져오기
  getDoc(doc(firestore, "user", currentEmail)).then(docSnap => {
      if (docSnap.exists()) {
          console.log("Document data:", docSnap.data());
          //console.log(`name = ${docSnap.data()['name']}`);
          var currentName = docSnap.data()['name']
          console.log(`currentName = ${currentName}`);
          changeName(currentName);
          console.log(`name = ${name}`);
      } else {
      console.log("No such document!");
      }
  })

  console.log(`name = ${name}`);


  const handleTheme = () => {
    setTheme(props.theme);
    console.log(`theme: ${theme}`);
  }

  //Home Page
  const greeting = {
    title: "나만의 포트폴리오",
    logo_name: "AshutoshHathidara",
    nickname: name,
    subTitle:
      "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
    resumeLink:
      "https://drive.google.com/open?id=1XYpYhLeqCdyx_q6l0bQoC7RgwQjAjXPf",
    //portfolio_repository: "https://github.com/ashutosh1919/masterPortfolio",
    //githubProfile: "https://github.com/ashutosh1919",
  };

  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting" onLoad={handleTheme}>
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text" style={{ color: theme.text }}>
                {greeting.title}
              </h1>
              <h2 className="greeting-nickname" style={{ color: theme.text }}>
                --- by ( {greeting.nickname} )
              </h2>
              <p
                className="greeting-text-p subTitle"
                style={{ color: theme.secondaryText }}
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
    </Fade>
  );
}
