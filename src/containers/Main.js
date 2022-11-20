import React, { Component } from "react";
import Home from "../pages/home/HomeComponent";
import { settings } from "../portfolio";

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
