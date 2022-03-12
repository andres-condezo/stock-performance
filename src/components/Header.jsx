import { IoIosArrowBack } from 'react-icons/io';
import { BsMicFill } from 'react-icons/bs';
import { AiTwotoneSetting } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => (
  <>
    <header>
      <nav className="header__nav">
        <ul className="nav__ul">
          <li className="ul__back">
            <Link
              to="/stock-performance"
            >
              <IoIosArrowBack />
            </Link>
          </li>
          <li className="ul__logo">
            <Link
              className="logo"
              to="/stock-performance"
            >
              <h1 className="title">Stock Performance</h1>
            </Link>
          </li>
          <li className="ul__icons">
            <button type="button" className="btn">
              <BsMicFill />
            </button>
            <button type="button" className="btn">
              <AiTwotoneSetting />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  </>
);

export default Header;
