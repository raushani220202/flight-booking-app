import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { destinations, info, services } from "../../data";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-lists">

        <ul className="footer-list">
          <h2>Destinations</h2>
          {destinations.map((destination) => (
            <li key={destination.id} className="footer-list-item">
              {destination.title}
            </li>
          ))}
        </ul>

        <ul className="footer-list">
          <h2>Information</h2>
          {info.map((item) => (
            <li key={item.id} className="footer-list-item">
              {item.title}
            </li>
          ))}
        </ul>

        <ul className="footer-list">
          <h2>Services</h2>
          {services.map((service) => (
            <li key={service.id} className="footer-list-item">
              {service.title}
            </li>
          ))}
        </ul>

        <ul className="footer-list">
          <h2>Contact</h2>
          <li className="footer-list-item">
            <FaMapMarkerAlt /> Street Name, City Name
          </li>
          <li className="footer-list-item">
            <FaPhoneAlt /> +123-456-789
          </li>
          <li className="footer-list-item">
            <IoMail /> Email@gmail.com
          </li>
        </ul>

      </div>
    </div>
  );
}

export default Footer;
