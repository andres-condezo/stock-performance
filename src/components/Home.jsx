import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FcStatistics } from 'react-icons/fc';
import Company from './Company';
import { fetchCompaniesFromAPI } from '../redux/home/home';
import './Company.scss';

const Home = () => {
  const companiesList = useSelector((state) => state.homeReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (companiesList.length === 0) {
      dispatch(fetchCompaniesFromAPI());
    }
  }, []);

  return (
    <section className="companies-container">
      <div className="company-item">
        <div className="company-header">
          <div className="title-icon">
            <FcStatistics className="icon" />
          </div>
          <h1>COMPANY&apos;S STOCK PERFORMANCE</h1>
        </div>
        <p className="company-subtitle">STATS BY COMPANY</p>
        <section className="company-section">
          {
            companiesList.map((company) => (
              <Company
                key={company.symbol}
                symbol={company.symbol}
                name={company.name}
                change={company.change}
                price={company.price}
                changesPercentage={company.changesPercentage}
              />
            ))
          }
        </section>
      </div>
    </section>
  );
};

export default Home;
