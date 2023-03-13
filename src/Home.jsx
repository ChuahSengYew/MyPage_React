import React, { Component } from "react";
import Header from "./Header";
import Title from "./Title";
import Body from "./Body";
import Footer from "./Footer";
import $ from "jquery";
import { loop } from "./typewrite.js";
import { render } from "react-dom";

import ScriptTag from "react-script-tag";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Title />
        <Body />
        <Footer />
      </div>
    );
  }
  componentDidMount() {
    loop();
  }
}
