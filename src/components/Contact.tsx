import { MdArrowOutward } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:sunidhiratra21@gmail.com" data-cursor="disable">
              sunidhiratra21@gmail.com
              </a>
            </p>
            <h4>Phone</h4>
            <p>
              <a href="tel:+91958748117" data-cursor="disable">
                +91 958748117
              </a>
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="http://github.com/Sunidhi30/"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/sunidhiratra30/"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
           
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Sunidhi Ratra</span>
            </h2>
            {/* <h5>
              <MdCopyright /> 2025
            </h5> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
