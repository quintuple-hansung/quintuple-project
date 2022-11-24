import React, {useState, useEffect} from 'react';
import { useNavigate, useNavigation } from 'react-router-dom';
import '../styles/Intro.css';
import AppAppBar from './AppAppBar';
import IntroTitle from './IntroTitle';
import IntroLearnMore from './IntroLearnMore';
import DotRing from './DotRing';
import '../styles/TopBar.css'
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { AiOutlineUp } from 'react-icons/ai';
import Script from './Script';

const Topbar = () => {
	const [activeNav, setActiveNav] = useState('#home');

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		})
	  }
	  
	  const scrollToBottom = () => {
		window.scrollTo({
			bottom: 0,
			behavior: 'smooth'
		})
	  }
	 // 스크롤을 500만큼 내렸을 때 true 로 변경, TOP 버튼 나타남
	 const [showButton, setShowButton] = useState(false);
	 useEffect(() => {
	   const handleShowButton = () => { 
		   if (window.scrollY > 500) {
			   setShowButton(true)
		   } else {
			   setShowButton(false)
		   }
	   }
	
	   window.addEventListener("scroll", handleShowButton)
	   return () => {
		   window.removeEventListener("scroll", handleShowButton)
	   }
	 }, [])

	return (
	  <nav>
		{/*<a href="/main" onClick={()=> setActiveNav('/main')} className={activeNav === '/home' ? 'active' : ''}><AiOutlineHome /></a>
		<a href="/mypage" onClick={()=> setActiveNav('/mypage')} className={activeNav === '/mypage' ? 'active' : ''}><AiOutlineUser /></a>*/}
		{
			window.scrollY > 500
			? <a onClick={()=> scrollToTop()} className={activeNav === '#top' ? 'active' : ''}> <AiOutlineUp/></a> 
			: <a> 💛 </a>
		}
		
	  </nav>
	)
  }



class Intro extends React.Component {
	render() {
		return (
			<>
			<DotRing/>
				<AppAppBar/>
				<IntroTitle/>
			{/*<IntroLearnMore/>*/}
				<Script />
			<Topbar />
			</>
		)
	}	
}

export default Intro;
