import React from "react";
import "./About.css";
import { Type } from "./Type";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaTwitter } from "react-icons/fa"; // Importing icons from react-icons
import { Introduction } from "./Introduction";
import { Timeline } from "./Timeline";
import { Techstacks } from "./Techstacks";

export const About = () => {
  return (
    <>
      <div className="about center">
        <h1 data-aos="fade-right" className="mobileHead">
          Hello, I am <span className="about__name">Waliyu Habeeb</span>
        </h1>
        <Type />
        <p className="about__desc" data-aos="fade-right">
          Passionate and creative Full Stack Developer having proficiency in
          MERN Stack. Attired with a variety of tools & technologies and ready to
          learn more.
        </p>
        <div className="about__contact center">
          <a
            href="https://github.com/Habeeb20"
            aria-label="github"
            target="_blank"
            rel="noreferrer"
            className="link link--icon"
          >
            <FaGithub /> {/* Replaced with react-icons */}
          </a>
          <a
            href="mailto:Ademolawaliyu1@gmail.com"
            target="_blank"
            rel="noreferrer"
            aria-label="mail"
            className="link link--icon"
          >
            <FaEnvelope /> {/* Replaced with react-icons */}
          </a>
          <a
            href="tel:+08166489562"
            target="_blank"
            rel="noreferrer"
            aria-label="phone"
            className="link link--icon"
          >
            <FaPhone /> {/* Replaced with react-icons */}
          </a>
          <a
            href="https://www.linkedin.com"
            aria-label="linkedin"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin /> {/* Replaced with react-icons */}
          </a>
          <a
            href="https://twitter.com"
            aria-label="twitter"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter /> {/* Replaced with react-icons */}
          </a>
        </div>
        {/* 
        <button
          className="btnResume"
          onClick={() => {
            window.open(
              "https://drive.google.com/file/d/1O7O6dgBNriadNFoYRj8kHr6-dyPyoG4n/view?usp=sharing"
            );
          }}
        >
          Resume
        </button> 
        */}
      </div>
      <Introduction />
      <Timeline />
      <section id="#skills">
        <Techstacks />
      </section>
    </>
  );
};
