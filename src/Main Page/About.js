import React from "react";

function About() {
  return (
    <>
      <section className="about">
        <div>
          <h2 id="skillsTitle"> About me </h2>
          <div className="info">
            <p>
              <br /> I am a self - taught developer.My Front End coding journey
              started at the beginning of 2020 when I made up my mind and I
              figured out that putting enough work and adopting sharp self -
              discipline could help me land a developer job. After consulting
              numerous websites such as MDN, Stack Overflow, watching YouTube
              coding tutorials, and practicing code snippets on Codeacademy I
              decided to follow a 2 - month coding
              <a href="https://www.coderslab.ro"> bootcamp. </a> <br /> <br />
              Upon completing this course, I managed to become more familiar
              with web development concepts and I started to figure out what
              type of projects I would like to involve myself in. So far, I feel
              really interested in working with APIs and generating animations.
              In the future, I would like to learn more about HTML 's canvas
              feature and how could I use JavaScript in order to create
              applications based on Virtual and Augmented Reality.For more
              information about my background, you can check my resume. Also, Up
              to this point, my portfolio includes 2 projects: a personal
              website and a weather application.In the meantime, my work is
              focused on developing a music application.
            </p>
            <div className="mobileText">
              <p>
                I am a self - taught developer.My Front End coding journey
                started at the beginning of 2020 when I made up my mind and I
                figured out that putting enough work and adopting sharp self -
                discipline could help me land a developer job. After consulting
                numerous websites such as MDN, Stack Overflow, watching YouTube
                coding tutorials, and practicing code snippets on Codeacademy I
                decided to follow a 2 - month coding coding
                <a href="https://www.coderslab.ro"> bootcamp </a>. <br />
                <br />
                In the future, I would like to learn more about HTML's canvas
                feature and how could I use JavaScript in order to create
                applications based on Virtual and Augmented Reality. Up to this
                point, my portfolio includes 2 projects: a personal website and
                a weather application.In the meantime, my work is focused on
                developing a music application.
              </p>
            </div>
            <img
              id="myPhotoLarge"
              src="../images/infoPic.png"
              alt="My pic"
            ></img>
            <img
              id="myPhotoCircle"
              src="../images/circle-cropped.png"
              alt="My pic"
            ></img>
          </div>
          <article id="whiteSpace"> </article>
          <h2 id="skillsTitle1"> Skills </h2>
          <div className="skills-text">
            <article className="div1" id="ar1">
              <h2> Web Development </h2>
              <ul>
                <li> HTML 5 </li> <li> CSS 3 </li> <li> SCSS / Sass </li>
                <li> Responsive Design </li> <li> JavaScript / ES6 </li>
                <li> React </li> <li> jQuery </li>
              </ul>
            </article>
            <article className="div1" id="ar2">
              <h2> Database / Data Analysis </h2>
              <ul>
                <li> Statistics </li> <li> Basic SQL </li>
                <li> Basic ArcGis </li> <li> SPSS </li> <li> JASP </li>
                <li> Public Tableau </li> <li> Power Bi </li>
              </ul>
            </article>
            <article className="div1" id="ar3">
              <h2> Coding / Software </h2>
              <ul>
                <li> Windows / macOS </li> <li> Git </li> <li> NPM / Yarn </li>
                <li> Basic Python 3 </li> <li> Microsoft Office </li>
              </ul>
            </article>
          </div>
          <ul className="skills-list">
            <li>
              <img src="../images/icons8-html-5-144.png" alt="Html Logo" />
            </li>
            <li>
              <img src="../images/icons8-css3-144.png" alt="Css3 logo" />
            </li>
            <li>
              <img src="../images/icons8-sass-144.png" alt="SASS logo" />
            </li>
            <li>
              <img src="../images/icons8-mac-logo-144.png" alt="MacOS logo" />
            </li>
            <li>
              <img src="../images/icons8-git-144.png" alt="Git logo" />
            </li>
            <li>
              <img src="../images/icons8-npm-144.png" alt="NPM logo" />
            </li>
            <li>
              <img
                src="../images/icons8-javascript-144.png"
                alt="Javascript Logo"
              />
            </li>
            <li>
              <img src="../images/icons8-jquery-144.png" alt="jQuery logo" />
            </li>
            <li>
              <img src="../images/icons8-react-144.png" alt="React Logo" />
            </li>
          </ul>
        </div>
      </section>
      <article id="whiteSpace"> </article>
    </>
  );
}

export default About;
