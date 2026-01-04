import React from "react";
import { FaGithub } from "react-icons/fa";

export default function Nav() {

  return (
    <nav className="nav">
      <div>
        <h1 className="dd3">Pabna Blood Find</h1>
      </div>

      <div>
        <a
          className="nav-link btn flex center medel"
          href="https://github.com/nahidhk/pabnaBloodFind-Website"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="icon" />
          <span className="mbText">
            &nbsp;
            GitHub Open Source
          </span>
        </a>
      </div>
    </nav>
  );
}
