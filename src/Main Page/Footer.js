import React from "react";
import { ExternalLink } from "react-external-link";
import { useForm } from "react-hook-form";

function Footer() {
  const { register } = useForm();

  return (
    <>
      <footer>
        <h2 className="Contact"> Contact </h2>
        <div className="footer-content">
          <div className="Contact-Form">
            <h3> Message me </h3>
            <form
              action="mailto:albandrei01@gmail.com"
              method="post"
              encType="text/plain"
            >
              <input
                id="inp"
                type="text"
                placeholder="Full Name"
                name="Name"
                autoComplete="off"
                ref={register}
                required
              ></input>
              <input
                id="inp"
                type="text"
                placeholder="Email"
                name="E-mail"
                autoComplete="off"
                ref={register}
                required
              ></input>
              <textarea
                id="messageInput"
                rows="5"
                cols="60"
                placeholder="Your Message"
                name="Message"
                autoComplete="off"
                ref={register}
                required
              ></textarea>
              <div className="formButtons">
                <input type="submit" value="Send" id="sendbutton"></input>
                <input type="reset" value="Reset" id="resetbutton"></input>
              </div>
            </form>
          </div>
          <div className="contactDetails">
            <h3> Contact Info </h3>
            <div id="contactIcons">
              <img src="../images/phone.ico" alt="Phone icon" />
              <br /> <br /> <img src="../images/email.ico" alt="Email icon" />
            </div>
            <div id="contactText">
              <h2> Phone </h2> <p> (+40) 0757 724 307 </p>
            </div>
            <div id="contactText">
              <h2> Email </h2> <p> albandrei01 @gmail.com </p>
            </div>
            <div className="footer-logo">
              <ExternalLink
                href="https://www.linkedin.com/in/andrei-alb-351a9b12a/"
                target="_blank"
                rel="noopener noreferrer"
                id="linkedin-logo"
              >
                <img src="../images/linkedin.png" alt="LinkedIN logo" />
              </ExternalLink>
              <ExternalLink
                href="https://github.com/WhiteAndrew91"
                target="_blank"
                rel="noopener noreferrer"
                id="gitLogo"
              >
                <img src="../images/git.png" alt="GitHub Logo" />
              </ExternalLink>
              <ExternalLink
                href="https://codepen.io/andr-blanc"
                target="_blank"
                rel="noopener noreferrer"
                id="CodePen-Logo"
              >
                <img src="../images/codepen.png" alt="CodePen Logo" />
              </ExternalLink>
            </div>
          </div>
        </div>
        <p> Andrei Alb 2020 </p>
      </footer>
    </>
  );
}

export default Footer;
