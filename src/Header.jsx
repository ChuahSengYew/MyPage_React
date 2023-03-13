import "./styles.css";
import React, { Component } from "react";
import { Outlet, Link } from "react-router-dom";
import $ from "jquery";

class Header extends Component {
  onClickBtn() {
    if ($("#navbarCollapse").css("display") == "none") {
      $("#navbarCollapse").css("display", "block");
    } else {
      $("#navbarCollapse").css("display", "none");
    }
  }

  render() {
    return (
      <>
        <nav class="navbar navbar-expand-lg navbar-light bg-dark">
          <div class="container-fluid">
            <button
              type="button"
              class="navbar-toggler"
              id="navbar-toggler"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span
                class="navbar-toggler-icon"
                onClick={this.onClickBtn}
              ></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
              <div class="navbar-nav">
                <a class="nav-item nav-link">
                  <Link
                    to="/"
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    Home
                  </Link>
                </a>
                <div class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                    <Link
                      to="/About"
                      style={{ color: "inherit", textDecoration: "none" }}
                    >
                      About Me
                    </Link>
                  </a>

                  <div class="dropdown-menu">
                    <a href="/About#info" class="dropdown-item">
                      Basic Information
                    </a>
                    <a href="/About#education" class="dropdown-item">
                      Education
                    </a>
                    <a href="/About#experience" class="dropdown-item">
                      Work Experiences
                    </a>
                    <a href="/About#skill" class="dropdown-item">
                      Skills
                    </a>
                    <a href="/About#achievement" class="dropdown-item">
                      Achievements
                    </a>
                  </div>
                </div>
                <div class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                    Downloads
                  </a>

                  <div class="dropdown-menu">
                    <a class="dropdown-item">
                      <Link
                        to="/downloads/Chuah_Seng_Yew_-_Software_Engineer.pdf"
                        target="_blank"
                        download
                        style={{
                          color: "inherit",
                          textDecoration: "none",
                          background: "transparent"
                        }}
                      >
                        Resume
                      </Link>
                    </a>
                  </div>
                </div>
                <a class="nav-item nav-link">
                  <Link
                    to="/#contactme"
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    Contact Me
                  </Link>
                </a>
              </div>
            </div>
          </div>
        </nav>
        <Outlet />
      </>
    );
  }
}

export default Header;
