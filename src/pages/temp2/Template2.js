import React from 'react';
import Style from './Temp1.module.scss';
import {info} from "./Info";
import {Box, Grid} from "@mui/material";
import classNames from 'classnames';
import me from './img/self.png';
import Terminal  from './Terminal';
import PortfolioBlock from './PortfolioBlock';

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

   const firstName = info.firstName.toLowerCase()

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