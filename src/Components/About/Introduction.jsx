import React from "react";
import "./Introduction.css";
import { ThemeContext } from "../../Context/theme";
import profilePic from "../../assets/WhatsApp Image 2025-01-08 at 09.18.38_6378c020.jpg";
// Importing relevant icons from react-icons
import { FaLaptopCode, FaChalkboardTeacher } from "react-icons/fa"; 

export const Introduction = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <section id="about"> {/* Corrected from #about to about for proper linking */}
        <div className="section" data-aos="fade-right">
          <h2 className="section__title">
            About <span className="different">Me</span>
          </h2>
          <div className={"introduction " + themename}>
            <div className="introduction_logocontainer">
              <img src={profilePic} alt="Profile" />
            </div>
            <div className="introduction_datacontainer">
              <h4>
                Hi Everyone, My name is{" "}
                <span className="different">Waliyu Habeeb </span>
              </h4>
              <h4>Terms That can describe me apart from Coding:</h4>
              <h4 className="different">
                <span className="icons">
                  <FaLaptopCode /> {/* Hardware Engineer Icon */}
                </span>
                Hardware Engineer
              </h4>
              <h4 className="different">
                <span className="icons">
                  <FaChalkboardTeacher /> {/* Tutor Icon */}
                </span>
                Tutor
              </h4>
            </div>
          </div> {/* Closing the div for introduction */}
        </div> {/* Closing the section */}
      </section>
    </>
  );
};
