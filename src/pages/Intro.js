import React, {useState, useEffect} from 'react';
import Bounce from 'react-reveal/Bounce';
import Tada from 'react-reveal/Tada';
import Swing from 'react-reveal/Swing';
import Flip from 'react-reveal/Flip';
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

const Topbar = () => {
	const [activeNav, setActiveNav] = useState('#home');

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		})
	  }
	
	 // ��ũ���� 500��ŭ ������ �� true �� ����, TOP ��ư ��Ÿ��
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
		<a href="/main" onClick={()=> setActiveNav('/main')} className={activeNav === '/home' ? 'active' : ''}><AiOutlineHome /></a>
		<a href="/mypage" onClick={()=> setActiveNav('/mypage')} className={activeNav === '/mypage' ? 'active' : ''}><AiOutlineUser /></a>
		<a onClick={()=> scrollToTop()} className={activeNav === '#top' ? 'active' : ''}> <AiOutlineUp/></a> 
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
				<IntroLearnMore/>
			<Topbar />
			</>
		)
	}	
}

export default Intro;
