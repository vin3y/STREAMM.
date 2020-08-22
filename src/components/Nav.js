import React, { useEffect, handleShow, useState } from "react";
import "../Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <h1 className="nav__logo">STREAMM.</h1>
      <img
        className="nav__avatar"
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn0.iconfinder.com%2Fdata%2Ficons%2Favatar-15%2F512%2Fninja-512.png&f=1&nofb=1"
        alt="avatar"
      />
    </div>
  );
}

export default Nav;
