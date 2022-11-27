import React, { Component } from "react";
import Greeting from "../containers/greeting/Greeting";
import Skills from "../containers/skills/Skills";

class Home extends Component {
  render() {
    return (
      <div>
        <Greeting theme={this.props.theme} />
        <Skills theme={this.props.theme} />
      </div>
    );
  }
}

export default Home;
