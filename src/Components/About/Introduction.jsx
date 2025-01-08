import React from "react";
import "./Introduction.css";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { ThemeContext } from "../../Context/theme";
import profilePic from "../../assets/WhatsApp Image 2025-01-08 at 09.18.38_6378c020.jpg";


export const Introduction = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <section id="#about">
        <div className="section" data-aos="fade-right">
          <h2 className="section__title">
            About <span className="different">Me</span>
          </h2>
          <div className={"introduction " + themename}>
            <div className="introduction_logocontainer">
              <img src={profilePic} alt="Images" />
            </div>
            <div className="introduction_datacontainer">
              <h4>
                Hi Everyone, My name is{" "}
                <span className="different">Waliyu Habeeb </span> 
                <span className="different">
                  {" "}
               
                </span>
              
                <span className="different">
                  {/* VNMKV Agricultural University, Parbhani (MH) */}
                </span>
         
              </h4>
              <h4>Terms That can describe me apart form Coding :</h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Hardware Engineer
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
              Tutor
              </h4>
              {/* <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
             
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Poet{" "}
              </h4> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
