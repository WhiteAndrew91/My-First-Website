import React from "react";
import { ExternalLink } from "react-external-link";
import { BrowserRouter as Router } from "react-router-dom";

export default function Projects() {
  return (
    <>
      <Router>
        <section className="projects">
          <h2 id="skillsTitle2"> Projects </h2>
          <div className="link-section">
            <ExternalLink
              target="_blank"
              id="link"
              className="mobile1"
              href="http://weather.emdev.ro/"
            >
              <img
                src="./images/weatherSite.png"
                alt="Website"
                width="800"
                height="500"
                onMouseEnter={() =>
                  (document.querySelector(".fig1").style.visibility = "visible")
                }
                onMouseLeave={() =>
                  (document.querySelector(".fig1").style.visibility = "hidden")
                }
              />
              <figcaption className="fig1"> Weather </figcaption>
            </ExternalLink>
            <ExternalLink
              target="_blank"
              id="link"
              className="mobile1"
              href="http://music.emdev.ro/"
            >
              <img
                src="./images/music.png"
                alt="Website"
                width="800"
                height="500"
                onMouseEnter={() =>
                  (document.querySelector(".fig2").style.visibility = "visible")
                }
                onMouseLeave={() =>
                  (document.querySelector(".fig2").style.visibility = "hidden")
                }
              />
              <figcaption className="fig2"> Music </figcaption>
            </ExternalLink>
          </div>
          <div className="mobile-images">
            <article>
              <ExternalLink
                href="http://weather.emdev.ro/"
                target="_blank"
                className="mobile1"
                id="small-icons"
              >
                <p id="weatherTitle"> Weather </p>
                <img src="./images/weather-icon.jpg" alt="Website" />
              </ExternalLink>
            </article>
            <article>
              <ExternalLink
                href="http://music.emdev.ro/"
                target="_blank"
                className="mobile1"
                id="small-icons"
              >
                <p id="musicTitle"> Music </p>

                <img src="./images/music app.jpg" alt="Website" />
              </ExternalLink>
            </article>
          </div>
        </section>
      </Router>
    </>
  );
}
