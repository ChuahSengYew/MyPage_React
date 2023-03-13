import React, { Component } from "react";
import "./styles.css";
import $ from "jquery";

function Title() {
  var n = 0;

  return (
    <div class="title">
      <h1 id="title">Welcome to my page</h1>
      <h1>I am</h1>
      <h1 id="typewrite"></h1>
    </div>
  );
}

export default Title;
