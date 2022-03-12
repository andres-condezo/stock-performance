import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchDetailsFromAPI } from '../redux/details/details';
import DetailsItem from './DetailsItem';

const Details = () => {
  const dispatch = useDispatch();
  const detailsData = useSelector((state) => state.detailsReducer);
  const { idCompany } = useParams();

  useEffect(() => {
    dispatch(fetchDetailsFromAPI(idCompany));
  }, []);

  return (
    <section className="companies-container">
      {
        detailsData && detailsData.map(
          (company) => <DetailsItem key={company.name} company={company} />,
        )
      }
    </section>
  );
};

export default Details;
