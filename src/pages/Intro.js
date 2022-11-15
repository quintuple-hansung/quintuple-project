import React from 'react';
import Bounce from 'react-reveal/Bounce';
import Tada from 'react-reveal/Tada';
import Swing from 'react-reveal/Swing';
import Flip from 'react-reveal/Flip';
import { useNavigate, useNavigation } from 'react-router-dom';
import '../styles/Intro.css';
import AppAppBar from './AppAppBar';
import IntroTitle from './IntroTitle';
import IntroLearnMore from './IntroLearnMore';

class Intro extends React.Component {
	render() {
		return (
			<>
				<AppAppBar/>
				<IntroTitle/>
				<IntroLearnMore/>
			</>
		)
	}	
}

export default Intro;
