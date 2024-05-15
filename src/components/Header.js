import React from "react";
import { Link } from "react-router-dom";
import { triggerAnimation } from "./Footer";

const Header = () => {
  const scrollToFooter = () => {
    const footer = document.querySelector("footer");
    footer.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToBottom = () => {
    scrollToFooter();
    window.history.pushState(
      {},
      document.title,
      window.location.pathname + "#"
    );
    triggerAnimation();
  };

  return (
    <header>
      <div className="logo">
        <h3>Yusei's Portfolio Website</h3>
      </div>
      <nav>
        <ul className="nav-list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/works">Works</Link>
          </li>
          <li>
            <a href="#" onClick={handleScrollToBottom}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
