import React from "react";
import { Navbar } from "../Navbar/Navbar";
import { ThemeContext } from "../../Context/theme";
import Image from "../../assets/myLogo.jpg"

import "./Header.css";
export const Header = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <header className={"header center " + themename}>
        <h3>
          <a href="#home" className="link">
            <span>
              <img src={Image} alt="logo" />
            </span>
            Habeeb
          </a>
        </h3>
        <Navbar />
      </header>
    </>
  );
};
