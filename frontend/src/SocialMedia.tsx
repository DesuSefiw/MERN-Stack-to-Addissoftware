import React from "react";

import {
  AiFillGithub
} from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
//import App from "App.css";
function SocialMedia() {
  return (
    <ul className="home-about-social-links" style={{listStyleType: "none"}}>
      <li className="social-icons">
        <a
          href="https://github.com/DesuS"
          target="_blank"
          rel="noreferrer"
          className="icon-colour  home-social-icons"
        >
          <AiFillGithub className="social-icon" />
        </a>
      </li>
      <li className="social-icons">
        <a
          href="https://www.linkedin.com/in/desalegn-sefiw-340320319/"
          target="_blank"
          rel="noreferrer"
          className="icon-colour  home-social-icons"
        >
          <FaLinkedinIn className="social-icon" />
        </a>
      </li>
      
      <li className="social-icons">
        <a
          href="mailto:desalegnsefiw2@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="icon-colour home-social-icons"
        >
          <MdEmail className="social-icon" />
        </a>
      </li>
    </ul>
  );
}
export default SocialMedia;
