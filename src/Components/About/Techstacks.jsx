import React from "react";
import "./Techstacks.css";
import { FaReact, FaNodeJs, FaAws } from "react-icons/fa";
import {
  SiRedux,
  SiHtml5,
 SiSocketdotio,
  SiExpress,
  SiRedis,
  SiTailwindcss,
  SiNetlify,
  SiTypescript,
  SiPm2,
  SiRabbitmq,
  SiDocker
} from "react-icons/si";
// import SiMaterialui from "react-icons/si"
import { DiCss3, DiMongodb } from "react-icons/di";
import { SiJavascript, SiHeroku } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import { BsBootstrap, BsWordpress } from "react-icons/bs";

export const Techstacks = () => {
  return (
    <>
      <div className="section main" data-aos="fade-right">
        <h2 className="section__title different">Skills</h2>
        <div className="techsection">
          <div>
            <SiJavascript />
            <h5>Javascript</h5>
          </div>
          <div>
            <SiTypescript />
            <h5>Typescript</h5>
          </div>
          <div>
            <SiHtml5 />
            <h5>HTML</h5>
          </div>
          <div>
            <DiCss3 />
            <h5>CSS</h5>
          </div>
          <div>
            <FaReact />
            <h5>React</h5>
          </div>
          <div>
            <FaReact />
            <h5>React Native</h5>
          </div>
          <div>
            <FaNodeJs />
            <h5>Nodejs</h5>
          </div>
          <div>
            <DiMongodb />
            <h5>MongoDb</h5>
          </div>

          <div>
            <SiExpress />
            <h5>Express</h5>
          </div>

       
          <div>
            <BsBootstrap />
            <h5>Bootstrap</h5>
          </div>
           
          <div>
            <SiTailwindcss />
            <h5>Tailwindcss</h5>
          </div>

           
          <div>
            <SiSocketdotio />
            <h5>socket io</h5>
          </div>
       
       
          <div>
            <VscGithub />
            <h5>Github</h5>
          </div>
          <div>
            <SiRedis />
            <h5>Redis</h5>
          </div>
          <div>
            <SiRabbitmq />
            <h5>RabbitMQ</h5>
          </div>
          <div>
            <SiPm2 />
            <h5>Pm2</h5>
          </div>
          <div>
            <SiDocker />
            <h5>Pm2</h5>
          </div>
        </div>
      </div>
    </>
  );
};

