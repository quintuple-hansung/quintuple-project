import React, { Component } from 'react';
// import Greeting from "../containers/greeting/Greeting";
// import Greeting from '../../../../pages/temp1/containers/greeting/Greeting';
// import Skills from "../..//containers/skills/Skills";
import Greeting from './Greeting';
import Skills from './Skills';

class Home extends Component {
	render() {
		return (
			<div>
				<Greeting theme={this.props.theme} email={this.props.email}/>
				<Skills theme={this.props.theme} email={this.props.email}/>
			</div>
		);
	}
}

export default Home;
