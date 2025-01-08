import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa"; // Importing the React Icon
import "./ScrollToTop.css";

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () =>
      window.pageYOffset > 500 ? setIsVisible(true) : setIsVisible(false);

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return isVisible ? (
    <div className="scroll-top">
      <a href="#top">
        <FaArrowUp size={30} /> {/* Adjust the size here */}
      </a>
    </div>
  ) : null;
};
