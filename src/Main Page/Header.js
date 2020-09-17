import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { BrowserRouter as Router, Link as WebLink } from "react-router-dom";

function Header() {
  return (
    <>
      <header>
        <div
          className="menu"
          title="Close"
          onScroll={window.addEventListener("scroll", function () {
            document.querySelector(".menu").style.display = "none";
            document.querySelector(".head-text p").style.opacity = "1";
            document.querySelector(".burger-btn").style.display = "flex";
          })}
        >
          <img
            src="./images/closebutton.png"
            alt="Close Button"
            id="close-btn"
            title="Close"
            height="50"
            onClick={function toggleDropDown() {
              document.querySelector(".menu").style.display = "none";
              document.querySelector("#close-btn").style.display = "none";
              document.querySelector(".head-text p").style.opacity = "1";
              document.querySelector(".burger-btn").style.display = "flex";
            }}
          />
          <ul className="dropDownMenu">
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={0}
              duration={300}
            >
              About me
            </Link>
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={0}
              duration={300}
            >
              Projects
            </Link>
            <Router>
              <WebLink
                to="./resources/Alb Andrei CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </WebLink>
            </Router>
            <Link
              activeClass="active"
              to="Contact"
              spy={true}
              smooth={true}
              offset={0}
              duration={300}
            >
              Contact
            </Link>
          </ul>
        </div>
        <nav className="nav">
          <ul className="nav-list">
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={0}
              duration={300}
            >
              About me
            </Link>
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={0}
              duration={300}
            >
              Projects
            </Link>
            <Router>
              <WebLink
                to="./resources/Alb Andrei CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </WebLink>
            </Router>
            <Link
              activeClass="active"
              to="Contact"
              spy={true}
              smooth={true}
              offset={0}
              duration={300}
            >
              Contact
            </Link>
          </ul>
          <Router>
            <WebLink to="#">
              <img
                src="./images/dropdown.png"
                alt="Drop Down Button"
                className="burger-btn"
                title="DropMenu/Scroll to top"
                height="50"
                onClick={function toggleMenu() {
                  document.querySelector(".menu").style.display = "flex";
                  document.querySelector(".menu").style.width = "100%";
                  document.querySelector(".head-text p").style.opacity = "0";
                  document.querySelector(".burger-btn").style.display = "none";
                  document.querySelector("#close-btn").style.display = "block";
                  window.scrollTo(0, 0);
                }}
              />
            </WebLink>
          </Router>
        </nav>
        <div className="head-text">
          <h1> &lt; Hello World, my name is Andrew! &gt; </h1>
          <p> &lt; Hello World &gt; </p>
          <h2> I am a junior web developer and this is my first project. </h2>
        </div>
      </header>
      <article id="whiteSpace"> </article>
    </>
  );
}

export default Header;
