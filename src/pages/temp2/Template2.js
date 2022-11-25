import React from 'react';
import Style from './Temp1.module.scss';
import {Box, Grid} from "@mui/material";
import classNames from 'classnames';
import me from './img/self.png';
import Terminal  from './Terminal';
import PortfolioBlock from './PortfolioBlock';
import { collection, doc, getDoc } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";
import { firestore } from "../../components/firebase_config";
import self from "./img/self.png"
import mock1 from "./img/mock1.png"
import mock2 from "./img/mock2.png"
import mock3 from "./img/mock3.png"
import mock4 from "./img/mock4.png"
import mock5 from "./img/mock5.png"

function EmojiBullet(props) {
   const {emoji, text} = props;

   return (
       <Box component={'li'} fontSize={'1rem'} lineHeight={1.5} style={{cursor: 'default'}}>
           <Box component={'span'} aria-label="cheese"
                role="img"
                mr={{xs: '0.5rem', md: '1rem'}} fontSize={'1.5rem'}>{emoji}</Box> {text}
       </Box>
   );
}

export default function Home() {

    //console.log(`info = ${JSON.stringify(info)}`)
    //const firstName = info.firstName.toLowerCase()

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
    const name = ""

    // user 컬렉션에서 db 가져오기
    getDoc(doc(firestore, "user", currentEmail)).then(docSnap => {
        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            name = docSnap.data(name)
        } else {
        console.log("No such document!");
        }
    })

    const info = {
        firstName: name,
        lastName: "Hong",
        initials: "js", 
        position: "a Full Stack Developer",
        selfPortrait: self, 
        gradient: `-webkit-linear-gradient(135deg, ${colors})`, 
        baseColor: colors[0],
        miniBio: [ 
            {
                emoji: '☕',
                text: 'fueled by coffee'
            },
            {
                emoji: '🏢',
                text: '한성대학교'
            },
            {
                emoji: "💼",
                text: "웹공학트랙"
            },
            {
                emoji: "📧",
                text: "johnsmith@gmail.com"
            }
        ],
        
        
        bio: "Hello! I'm John. I'm a systems engineer for Google. I studied CompSci at Harvard, I enjoy long walks on the beach, and I believe artificial intelligence will inevitably rule us all one day. You should hire me!",
        skills:
            {
                proficientWith: ['javascript', 'react', 'git', 'github', 'bootstrap', 'html5', 'css3', 'figma'],
                exposedTo: ['nodejs', 'python', 'adobe illustrator']
            }
        ,
        hobbies: [
            {
                label: 'reading',
                emoji: '📖'
            },
            {
                label: 'theater',
                emoji: '🎭'
            },
            {
                label: 'movies',
                emoji: '🎥'
            },
            {
                label: 'cooking',
                emoji: '🌶'
            }
        ],
        portfolio: [ 
            {
                title: "Project 1",
                live: "https://paytonpierce.dev", 
                source: "https://github.com/paytonjewell", 
                image: mock1
            },
            {
                title: "Project 2",
                live: "https://paytonpierce.dev",
                source: "https://github.com/paytonjewell",
                image: mock2
            },
            {
                title: "Project 3",
                live: "https://paytonpierce.dev",
                source: "https://github.com/paytonjewell",
                image: mock3
            },
            {
                title: "Project 4",
                live: "https://paytonpierce.dev",
                source: "https://github.com/paytonjewell",
                image: mock4
            },
            {
                title: "Project 5",
                live: "https://paytonpierce.dev",
                source: "https://github.com/paytonjewell",
                image: mock5
            }
        ]
    }

    function aboutMeText() {
       return <>
           <p><span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()} $</span> cat
               about{firstName} </p>
           <p><span style={{color: info.baseColor}}>about{firstName} <span
               className={Style.green}>(main)</span> $ </span>
               {info.bio}
           </p>
       </>;
   }

   const firstName = info.firstName;

   function skillsText() {
       return <>
           <p><span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()} $</span> cd skills/tools
           </p>
           <p><span style={{color: info.baseColor}}>skills/tools <span
               className={Style.green}>(main)</span> $</span> ls</p>
           <p style={{color: info.baseColor}}> Proficient With</p>
           <ul className={Style.skills}>
               {info.skills.proficientWith.map((proficiency, index) => <li key={index}>{proficiency}</li>)}
           </ul>
           <p style={{color: info.baseColor}}> Exposed To</p>
           <ul className={Style.skills}>
               {info.skills.exposedTo.map((skill, index) => <li key={index}>{skill}</li>)}
           </ul>
       </>;
   }

   function miscText() {
       return <>
           <p><span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()} $</span> cd
               hobbies/interests</p>
           <p><span style={{color: info.baseColor}}>hobbies/interests <span
               className={Style.green}>(main)</span> $</span> ls</p>
           <ul>
               {info.hobbies.map((hobby, index) => (
                   <li key={index}><Box component={'span'} mr={'1rem'}>{hobby.emoji}</Box>{hobby.label}</li>
               ))}
           </ul>
       </>;
   }


   return(
      <>
      <Box component={'main'} display={'flex'} flexDirection={{xs: 'column', md: 'row'}} alignItems={'center'}
           justifyContent={'center'} minHeight={'calc(100vh - 175px)'}>
         <Box className={classNames(Style.avatar, Style.shadowed)} alt={'image of developer'} style={{background: info.gradient}} component={'img'} src={me} width={{xs: '35vh', md: '40vh'}}
              height={{xs: '35vh', md: '40vh'}}
              borderRadius={'50%'} p={'0.75rem'} mb={{xs: '1rem', sm: 0}} mr={{xs: 0, md: '2rem'}}/>
         <Box>
            <h1>Hi, I'm <span style={{background: info.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>{info.firstName}</span><span className={Style.hand}>🤚</span>
            </h1>
            <h2>I'm {info.position}.</h2>
            <Box component={'ul'} p={'0.8rem'}>
               {info.miniBio.map((bio, index) => (
                  <EmojiBullet key={index} emoji={bio.emoji} text={bio.text}/>
               ))}
            </Box>
            
         </Box>
      </Box>

         <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'3rem'}>
            <Terminal text={aboutMeText()}/>
            <Terminal text={skillsText()}/>
            <Terminal text={miscText()}/>
        </Box>    


        <Box>
            <Grid container display={'flex'} justifyContent={'center'}>
                {info.portfolio.map((project, index) => (
                   <Grid item xs={12} md={6} key={index}>
                       <PortfolioBlock image={project.image} live={project.live} source={project.source} title={project.title} />
                   </Grid>
                ))}
            </Grid>
        </Box>

      </>

   )
}