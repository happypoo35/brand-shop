import {
  FaFacebookF,
  FaInstagram,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer pad">
      <div className="container">
        <span className="light-gray">© 2021 Brand All Rights Reserved.</span>
        <div className="social">
          <a
            href="https://www.facebook.com"
            className="social-link"
            aria-label="facebook"
          >
            <FaFacebookF className="social-icon" />
          </a>
          <a
            href="https://www.facebook.com"
            className="social-link"
            aria-label="facebook"
          >
            <FaInstagram className="social-icon" />
          </a>
          <a
            href="https://www.facebook.com"
            className="social-link"
            aria-label="facebook"
          >
            <FaPinterest className="social-icon" />
          </a>
          <a
            href="https://www.facebook.com"
            className="social-link"
            aria-label="facebook"
          >
            <FaTwitter className="social-icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
