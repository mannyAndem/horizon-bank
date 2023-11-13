import logo from "../assets/Frame 11.png";
import appstore from "../assets/appstore.png";
import playstore from "../assets/playstore.png";
import "../sass/components/Footer.scss";

const Footer = () => {
  return (
    <footer>
      <div>
        <div>
          <img src={logo} />
          <p>
            Welcome to a new goat of banking, where Seamless, Secure, and Smart
            Banking Solutions are crafted exclusively for you
          </p>
        </div>
        <div className="links-container">
          <ul>
            <li>Section</li>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Service</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
          <ul>
            <li>Social Links</li>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
          </ul>
        </div>
        <div className="download-container">
          <h3>Download the App</h3>
          <img src={appstore} alt="Download on the Appstore" />
          <img src={playstore} alt="Download on the Playstore" />
        </div>
      </div>
      <div>
        <span>&copy; HorizonBank 2023</span>
      </div>
    </footer>
  );
};

export default Footer;
