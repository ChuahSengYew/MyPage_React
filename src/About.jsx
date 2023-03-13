import React, { Component } from "react";
import Header from "./Header";

import Footer from "./Footer";
import $ from "jquery";
import { loop } from "./typewrite.js";
import { render } from "react-dom";
import AboutBody from "./AboutBody";
import ScriptTag from "react-script-tag";

export default class About extends Component {
  render() {
    return (
      <div>
        <Header />
        <AboutBody />
        <Footer />
      </div>
    );
  }
}
