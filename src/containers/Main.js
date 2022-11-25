import React, { Component } from "react";
import Home from "../pages/temp1/home/HomeComponent";
import { settings } from "../pages/temp1/portfolio";

export default class Main extends Component {

  render() {

    if (settings.isSplash) {
      return (
        <div>
            <Home/>
        </div>
      );
    }
  }
}
