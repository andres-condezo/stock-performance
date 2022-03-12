import { PropTypes } from 'prop-types';
import { ImStatsBars } from 'react-icons/im';
import { BsArrowRightCircle } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Company = (props) => {
  const {
    symbol, name, price,
  } = props;

  return (
    <div className="company-container">
      <div className="company-icons">
        <div className="stats-icon"><ImStatsBars /></div>
        <Link to={`/details/${symbol}`}>
          <BsArrowRightCircle className="arrow-right" />
        </Link>
      </div>
      <div className="company-info">
        <h2>{name}</h2>
        <p className="price">
          <span>Price:</span>
          $
          {price}
        </p>
      </div>
    </div>
  );
};

Company.propTypes = {
  symbol: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default Company;
