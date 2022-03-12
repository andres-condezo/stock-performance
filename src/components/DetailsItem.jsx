import { PropTypes } from 'prop-types';
import './DetailsItem.scss';
import { ImStatsDots } from 'react-icons/im';

const DetailsItem = ({ company }) => (
  <ul className="details__ul">
    <li className="li-item name">
      <div className="icon">
        <ImStatsDots />
      </div>
      <div className="name-div">{ company.name }</div>
    </li>
    <li className="li-item details">
      <div className="details-div">COMPANIE&apos;S DETAILS</div>
    </li>
    <li className="li-item">
      <span className="left">Price: </span>
      <div className="right">{ company.price }</div>
    </li>
    <li className="li-item">
      <span className="left">Currency: </span>
      <div className="right">{ company.currency }</div>
    </li>
    <li className="li-item">
      <span className="left">CEO: </span>
      <div className="right">{ company.ceo }</div>
    </li>
    <li className="li-item">
      <span className="left">Full Time Employees: </span>
      <div className="right">{ company.fullTimeEmployees }</div>
    </li>
    <li className="li-item">
      <span className="left">Industry: </span>
      <div className="right">{ company.industry }</div>
    </li>
    <li className="li-item">
      <span className="left">Sector: </span>
      <div className="right">{ company.sector }</div>
    </li>
    <li className="li-item">
      <span className="left">Phone: </span>
      <div className="right">{ company.phone }</div>
    </li>
    <li className="li-item">
      <span className="left">Country: </span>
      <div className="right">{ company.country }</div>
    </li>
    <li className="li-item">
      <span className="left">State: </span>
      <div className="right">{ company.state }</div>
    </li>
    <li className="li-item">
      <span className="left">City: </span>
      <div className="right">{ company.city }</div>
    </li>
    <li className="li-item">
      <span className="left">Address: </span>
      <div className="right">{ company.address }</div>
    </li>
    <li className="li-item">
      <span className="left">Description: </span>
    </li>
    <li className="li-item">
      <div className="description-text">{ company.description }</div>
    </li>
    <li className="li-item">
      <span className="left">Website: </span>
      <a href={company.website} target="_blank" rel="noreferrer">Go to website</a>
    </li>
  </ul>
);

DetailsItem.propTypes = {
  company: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
    website: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    ceo: PropTypes.string.isRequired,
    industry: PropTypes.string.isRequired,
    sector: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    fullTimeEmployees: PropTypes.string.isRequired,
  }).isRequired,
};

export default DetailsItem;
