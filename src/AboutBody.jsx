import React, { Component } from "react";
import "./styles.css";
import Header from "./Header";
import Footer from "./Footer";
import "./card_animation.css";
import profilepic from "./img/profile.jpg";
import book from "./img/book.png";
import "./aos.css";
import $ from "jquery";
import Aos from "aos";

export default class AboutBody extends Component {
  componentDidMount() {
    Aos.init({
      duration: 2000
    });
  }

  render() {
    return (
      <div>
        <h2>About Me</h2>
        <div class="board board-left" data-aos="fade-right">
          <div class="card card-left" id="info">
            <div class="basic-box box-2" id="basic-box-2">
              <table>
                <tr>
                  <td class="thead">Name : </td>
                  <td>Chuah Seng Yew</td>
                </tr>

                <tr>
                  <td class="thead">Christian Name : </td>
                  <td>Matthew</td>
                </tr>
                <tr>
                  <td class="thead">Birth Date : </td>
                  <td>04/04/2000</td>
                </tr>
                <tr>
                  <td class="thead">Ethnicity : </td>
                  <td>Chinese</td>
                </tr>
                <tr>
                  <td class="thead">Language : </td>
                  <td>Chinese , English , Malay</td>
                </tr>
                <tr>
                  <td class="thead">Nationality : </td>
                  <td>Malaysia</td>
                </tr>
                <tr>
                  <td class="thead">Current Location : </td>
                  <td>Singapore</td>
                </tr>
              </table>
            </div>
            <div class="basic-box box-1" id="basic-box-1">
              <span>
                <i class="bi bi-info-circle-fill"></i>
              </span>
              <span>Basic Information</span>
            </div>
          </div>
        </div>
        {/* End of board-left div */}
        <div class="board board-right" data-aos="fade-left">
          <div class="card card-right" id="education">
            <div class="basic-box box-1-right" id="basic-box-1">
              <span>Education</span>
            </div>
            <div class="basic-box box-2-right">
              <h3>
                <a
                  href="https://www.kuencheng.edu.my/kchsen/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Kuen Cheng High School
                </a>
              </h3>
              <p>Kuala Lumpur , Malaysia</p>
              <p>2013 - 2018</p>
              <ul>
                <li>Completed SPM in 2017</li>
                <li>Completed UEC in 2018</li>
                <li>6 years co-curriculum experience in the Scout troop</li>
                <li>
                  Went for King Scout examination in 2017, awarded in 2019{" "}
                </li>
              </ul>
              <br />
              <h3>
                <a
                  href="https://www.apu.edu.my/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Asia Pacific University of Technology & Innovation (APU)
                </a>
              </h3>
              <p>Kuala Lumpur , Malaysia</p>
              <p>2019 - 2022</p>
              <ul>
                <li>
                  Completed Bsc(Hons) Computer Science with a CGPA of 3.43
                </li>
                <li>
                  Received dual degree from partnership with De Montfort
                  University (DMU)
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* End of board-right div */}
        <div class="board board-left" data-aos="fade-right">
          <div class="card card-left" id="experience">
            <div class="basic-box box-2-left" id="basic-box-2">
              <h3>
                Application Consultant @<br />
                NCS Pte Ltd
              </h3>
              <p>Singapore</p>
              <p>May 2022 - Current</p>
              <ul>
                <li>Supporting users' daily operations with the application</li>
                <li>
                  Work along with developers and try to troubleshoot issue found
                  within the application
                </li>
                <li>
                  Assist in application enhancement, following up with the
                  development and deployment
                </li>
                <li>
                  Experience in working Java web application, with Oracle SQL
                  database, Crystal Report
                </li>
              </ul>
              <h3>
                Software Development Intern @<br />
                Infinite Technology Sdn Bhd
              </h3>
              <p>Puchong, Selangor, Malaysia</p>
              <p>Dec 2020 - Apr 2021</p>
              <ul>
                <li>Software development experience with VB.Net. </li>
                <li>
                  earned to build desktop application like inventory management
                  system with SQL.
                </li>
                <li>
                  Complete tasks given by supervisor like debug code and
                  documentation.
                </li>
              </ul>

              <h3>
                Sales Assistant @<br />
                Advance Future Technology Sdn Bhd
              </h3>
              <p>Petaling Jaya, Selangor, Malaysia</p>
              <p>Jan 2019 - Feb 2019</p>
              <ul>
                <li>
                  Working six days a week, 10am to 9.30pm in the shop to sell
                  laptops.
                </li>
                <li>
                  Promoting laptops based on customer requirements and try to
                  satisfy the customers as much as possible.
                </li>
                <li>
                  Accept computer repairs order from customers and quote prices
                  from the technician.
                </li>
              </ul>
            </div>
            <div class="basic-box box-1" id="basic-box-1">
              <span>Work Experiences</span>
            </div>
          </div>
        </div>
        {/* End of board-left div */}
        <div class="board board-right" data-aos="fade-left">
          <div class="card card-right" id="skill">
            <div class="basic-box box-1-right" id="basic-box-1">
              <span>Skills</span>
            </div>
            <div class="basic-box box-2-right">
              <section
                class="bar-graph bar-graph-horizontal bar-graph-one"
                style={{ backgroundColor: "transparent" }}
              >
                <h3>Programming Languages</h3>
                <div class="bar-one" style={{ backgroundColor: "transparent" }}>
                  <table>
                    <tr>
                      <td style={{ width: "15%" }}>
                        <span class="skill">Java</span>
                      </td>
                      <td>
                        <div class="skillbar" style={{ maxWidth: "75%" }}></div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span class="skill">C++</span>
                      </td>
                      <td>
                        <div class="skillbar" style={{ maxWidth: "65%" }}></div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span class="skill">C#</span>
                      </td>
                      <td>
                        <div class="skillbar" style={{ maxWidth: "50%" }}></div>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ width: "10%" }}>
                        <span class="skill">Python</span>
                      </td>
                      <td>
                        <div
                          class="skillbar"
                          style={{ maxWidth: "50%" }}
                          data-percentage=""
                        ></div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span class="skill">SQL</span>
                      </td>
                      <td>
                        <div class="skillbar" style={{ maxWidth: "75%" }}></div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span class="skill">PHP</span>
                      </td>
                      <td>
                        <div class="skillbar" style={{ maxWidth: "50%" }}></div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span class="skill">Javascript</span>
                      </td>
                      <td>
                        <div class="skillbar" style={{ maxWidth: "50%" }}></div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span class="skill">Visual Basic</span>
                      </td>
                      <td>
                        <div class="skillbar" style={{ maxWidth: "60%" }}></div>
                      </td>
                    </tr>
                  </table>
                </div>
                <div>
                  <h3>Other skills / frameworks / knowledge </h3>
                  <table style={{ textAlign: "center" }}>
                    <tr>
                      <td height="50em">HTML</td>
                      <td>CSS</td>
                      <td>Springboot</td>
                    </tr>
                    <tr>
                      <td height="50em" width="30%">
                        ReactJS
                      </td>
                      <td width="40%">jQuery</td>
                      <td width="30%">AJAX</td>
                    </tr>
                    <tr>
                      <td height="50em">VB.Net</td>
                      <td>ASP.Net</td>
                      <td>Concurrent Programming</td>
                    </tr>

                    <tr>
                      <td height="50em">Crystal Report</td>
                      <td>AWS</td>
                      <td>Computer Vision (OpenCV)</td>
                    </tr>
                    <tr>
                      <td height="50em">Image Processing</td>
                      <td>Blockchain</td>
                      <td>Assembly</td>
                    </tr>
                    <tr>
                      <td height="50em">Git</td>
                      <td>Node.Js</td>
                    </tr>
                  </table>
                </div>
              </section>
            </div>
          </div>
        </div>
        {/* End of board-right div */}
        <div class="board board-left" data-aos="fade-right">
          <div class="card card-left" id="achievement">
            <div class="basic-box box-2-left" id="basic-box-2">
              <h3>King Scout Award</h3>
              <p>2019</p>
              <p>
                Took the King Scout examination in 2017, only received the award
                in 2019
              </p>
            </div>
            <div class="basic-box box-1" id="basic-box-1">
              <span>Achievements</span>
            </div>
          </div>
        </div>
        {/* End of board-left div */}
      </div>
    );
  }
}
