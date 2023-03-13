import React from "react";
import "./styles.css";
import "./card_animation.css";
import profilepic from "./img/profile.jpg";
import linkedin from "./img/linkedin.png";
import git from "./img/github.png";
import fb from "./img/facebook.png";
import insta from "./img/instagram.png";

import book from "./img/book.png";
import "./aos.css";
import $ from "jquery";
import Aos from "aos";

function Body() {
  Aos.init({
    duration: 2000
  });
  return (
    <div>
      <div class="intro-board">
        <h2>A little about me ...</h2>
        <img id="profilepic" src={profilepic} />
        <p>
          I am Chuah Seng Yew . I am a Computer Science graduate , have
          fundamental knowledge in software development and have a little
          experience working in the industry . I am a Malaysian , currently
          working as an application consulant in NCS Pte. Ltd., supporting user
          daily operations with the application . Although I have not much
          experience , I am willing to learn and gain experience as much as
          possible . I have developed this website on my own , please do check
          out more about me in this website .
        </p>
      </div>
      <div class="intro-board">
        <div
          id="contactme"
          style={{
            color: "inherit",
            textDecoration: "none",
            backgroundColor: "transparent"
          }}
        >
          <h2>Contact Me</h2>
          <p style={{ fontFamily: "Kalam" }}>
            Email&ensp;:&ensp;
            <a
              href="mailto:sychuah42@gmail.com"
              style={{
                fontFamily: "Kalam",
                color: "inherit",
                textDecoration: "none",
                backgroundColor: "transparent"
              }}
            >
              sychuah42@gmail.com
            </a>
          </p>
          <p style={{ fontFamily: "Kalam" }}>
            Phone&ensp;:&ensp; +65 88634121 (SG) / +60 162085013{" "}
          </p>
        </div>
        <h2>Links</h2>
        <div class="iconbox">
          <a href="https://www.linkedin.com/in/chuah-seng-yew-744889193">
            <img id="linkicon" src={linkedin} />
          </a>
          <a href="https://github.com/ChuahSengYew">
            <img id="linkicon" src={git} />
          </a>
          <a href="https://www.facebook.com/sengyew.chuah/">
            <img id="linkicon" src={fb} />
          </a>
          <a href="https://www.instagram.com/chuahsengyew/">
            <img id="linkicon" src={insta} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Body;
