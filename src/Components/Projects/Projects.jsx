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
  SiRedis,
  SiReact,
  SiPm2,
  SiReactivex,
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { VscJson } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io";
import m1 from "../../assets/medicals.png"
import m2 from "../../assets/errand.png"
import m3 from "../../assets/schools.png"
import m4 from "../../assets/authApp.png"
import m5 from "../../assets/eride.png"
import m6 from "../../assets/letsMeet.png"
import im7 from "../../assets/HRMS.png"
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
                    href="http://emedicals.ng/"
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
                    src={m5}
                    alt="Eride"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>E-Ride</h2>
                <p>
                A Rie hauling app that enables the users to order for a ride and allows them to also input their preferred prices,
                 and the drivers can choose to accept, reject or negotiate with the price. they can also have a flawless realtime 
                 chat once they have a concession. it also allows users to hire a driver and also rent a a vehicle for any purpose and also send deliveries effortlessly
                </p>
                <div>
                <SiNodedotjs />
                  <SiExpress />
                  <SiMongodb />
                  <FaReact />
                  <SiTailwindcss />
                  <SiRedis />
                  <SiSocketdotio/>
                  <SiReact />
                  <SiPm2 />
                </div>
                <div>
                  <a
                    href="http://eride.emedicals.ng/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/Habeeb20/Ride-hauling-app-ERide-"
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
                    src={im7}
                    alt="Eschools"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>HR management systems</h2>
                <p>
               An HR management system app. This app enables Admin or HR manager to manage his employees. the app enables the Admin or HR to add the details of employee, in which a unique number is automatically 
               generated for the employee after being successfully added. the employee can use his/her unique number to login to his/her dashboard to see every details or information pertaining to him/her
               and also if any update has been communicated to the employees, he/she can see that too, he can also make a request for leave from his dashboard, in which a drafted letter will be automatically generated for him/her
               and it can also be edited by the employee and can chose to send to the admin through whatsapp, email, or to the HR admin dashboard. the HR can also 
               track salary payments because the app also handles salary payment method including tax,IOU,penalties,net salary, gross salary,daily and yearly salary of each employee,it also handles attendance system for each  employee, and also the HR can send various kinds of letters to every employee from his
               dashboard(such as promotion letter, sack, service no longer required letter, payslip etc) to each employee through whatsapp,email, sms and directly to each employeedashboard
                </p>
                <div>
                <SiNodedotjs />
                  <SiExpress />
                  <SiMongodb />
                  <FaReact />
                  <SiTailwindcss />
                
                 
                </div>
                <div>
                  {/* <a
                    href="https://eschoolconnect.ng/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      See this Live
                    </span>
                  </a> */}
                  <a
                    href="https://github.com/HabeebAdemola1/HRMS"
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
                <h2>E-errands</h2>
                <p>
               A logistic application. It operates logistic functions by running a  delivery and also enables users to have some set people(erranders) to perform errands such as menial jobs etc
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
                    href="https://e-erand.emedicals.ng/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      View Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/Habeeb20/Errands"
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
                  <img
                    src={m6}
                    alt="PulsePlus-Clone"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Let's meet</h2>
                <p>
                    This is a dating app which is currently being developed both on mobile app and web app, it allows user to meet new people they can chat with and also find people who are searching for lovers
                    it allows them to post, like,share and also comment on posts. they can also send a request to people they like and the peron in which the request is being sent to can choose to accept or reject the requests, they can have an effortlessly
                    real time chat after the person accepts the request being sent to him/her, this app is an ongoing project for both mobile and web app
                </p>
                <div>
                <SiNodedotjs />
                  <SiExpress />
                  <SiMongodb />
                  <FaReact />
                  <SiTailwindcss />
                  <SiRedis />
                  <SiSocketdotio />
                  <SiReactivex />
                </div>
                <div>
                  {/* <a
                    href="https://estateapplication1.onrender.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a> */}
                  <a
                    href="https://github.com/HabeebAdemola1/Dating-mobileApp"
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
