import React from "react";
import "./Projects.css";
import { FaReact, FaHardHat } from "react-icons/fa";
import {
  SiBlockchaindotcom,
  SiHtml5,
  // SiMaterialui,
  SiChai,
  SiEthereum,
  SiExpress,
  SiSocketdotio,
  SiTailwindcss,
  SiReactrouter,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiTalend,
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { VscJson } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io";
import m1 from "../../assets/emedicals.png"
import m2 from "../../assets/ereligion.png"
import m3 from "../../assets/schools.png"
import m4 from "../../assets/authApp.png"
import m5 from "../../assets/emedicals2.png"
import m6 from "../../assets/estate.png"
export const Projects = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title different">Projects</h2>
        <div className="allProjects">
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src={m1}
                    alt="Emedicals"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Emedicals</h2>
                <p>
                An ongoing project, an app that enables the users to fix an appointment with doctors, laboratory and also has a buying and selling interactions between pharmacies and users. It also gives the users to have a real time chat with their doctors, and also allows the doctors 
                to send tests result through the platform in which the patients/users can see on his own dashboard. 
                </p>
                <div>
                  <SiNodedotjs />
                  <SiExpress />
                  <SiMongodb />
                  <FaReact />
                  <SiTailwindcss />
                  <SiReactrouter />
                  <SiSocketdotio/>
                  {/* <SiMaterialui /> */}
                </div>
                <div>
                  <a
                    href="https://med.eschoolconnect.ng/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/Habeeb20/EMedicals"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src={m3}
                    alt="Eschools"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Eschools</h2>
                <p>
                An ESchools software. It is a MERN stack project that handles a lot of school management functionalities.
                 It allows an Admin to add students and teachers accounts in which the teachers and students can 
                login to their portals using the credentials being registered by the admin. 
                </p>
                <div>
                <SiNodedotjs />
                  <SiExpress />
                  <SiMongodb />
                  <FaReact />
                  <SiTailwindcss />
                
                 
                </div>
                <div>
                  <a
                    href="https://eschoolconnect.ng/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/Habeeb20/EschoolsProject"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img src={m2} alt="" />
                </div>
              </div>
              <div className="project_information">
                <h2>Ereligion</h2>
                <p>
               E-Religion application. It is MERN stack project that enables the user 
                to connect with various types of religious leaders and religious ground in Nigeria,
                 it also allows the user to have a real time chat with the religious leaders and also 
                 have a video call with them. It also makes it easier for
                 the user to know the distance of the user to the leader through the use of Google map
                </p>
                <div>
                <SiNodedotjs />
                  <SiExpress />
                  <SiMongodb />
                  <FaReact />
                  <SiTailwindcss />
                  <SiReactrouter />
                  <SiSocketdotio/>
                </div>
                <div>
                  <a
                    href="https://ereligion.ng/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      View Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/Habeeb20/Religion"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src={m4}
                    alt="auth app"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Authentication App</h2>
                <p>
                	An authentication mern stack application 
                with profile performances and also allows a google authentication.
                </p>
                <div>
                <SiNodedotjs />
                  <SiExpress />
                  <SiMongodb />
                  <FaReact />
                </div>
                <div>
                  <a
                    href="https://authapp-9lfl.onrender.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      View Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/Habeeb20/mern-auth"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src={m5}
                    alt="voting app"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Realtime voting App</h2>
                <p>
                A MERN stack a real time voting app with mongoDB, 
                express and socket io  for  backend  while using react for frontend.
                </p>
                <div>
                <SiNodedotjs />
                  <SiExpress />
                  <SiMongodb />
                  <FaReact />
                  <SiTailwindcss />
                
                  <SiSocketdotio/>
                </div>
                <div>
                  <a
                    href="https://realtime-voting.onrender.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src={m6}
                    alt="PulsePlus-Clone"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Estate Management App</h2>
                <p>
                An estate management application that uses nodejs and reactjs as
                 technologies and mongoDB for the database.
                </p>
                <div>
                <SiNodedotjs />
                  <SiExpress />
                  <SiMongodb />
                  <FaReact />
                  <SiTailwindcss />
                </div>
                <div>
                  <a
                    href="https://estateapplication1.onrender.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/Habeeb20/EstateManagementApp"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};
