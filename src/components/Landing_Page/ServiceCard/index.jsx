/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./ServiceCard.css";

const ServiceCard = ({ image, title, link }) => {
  return (
    <Link className="service-card" to={link}>
      <img className="service-card-image" src={image} />
      <p className="service-card-title">{title}</p>
    </Link>
  );
};

export default ServiceCard;
