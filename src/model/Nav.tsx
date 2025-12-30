import React from "react";
import { SiGithub } from "react-icons/si";

export default function Nav() {

  return (
    <nav className="nav">
      <div>
        <h1 className="dd3">Pabna Blood Find</h1>
      </div>

      <div>
        <a
          className="nav-link btn flex center medel"
          href="https://github.com/nahidhk/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiGithub className="icon" />
          <span className="logoText">
            GitHub Open Source
          </span>
        </a>
      </div>
    </nav>
  );
}
