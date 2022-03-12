import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FcStatistics } from 'react-icons/fc';
import Company from './Company';
import { fetchCompaniesFromAPI } from '../redux/home/home';
import './Company.scss';

const Home = () => {
  const companiesList = useSelector((state) => state.homeReducer);
  const dispatch = useDispatch();

  const [search, setSearch] = useState('');

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
        <input
          type="text"
          onChange={({ target }) => { setSearch(target.value); }}
          placeholder="Search by company"
          className="input"
        />
        <section className="company-section">
          {
            companiesList
              .filter((company) => company.name.toLowerCase().includes(search.toLowerCase()))
              .map((company) => (
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
