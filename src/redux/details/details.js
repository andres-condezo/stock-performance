const FETCH_DETAILS = 'stock-performance/details/FETCH_DETAILS';

// initial state
const initialState = [];

// action creators
export const fetchDetails = (payload) => ({
  type: FETCH_DETAILS,
  payload,
});

// thunk action functions
export const fetchDetailsFromAPI = (symbol) => async (dispatch) => {
  await fetch(`https://financialmodelingprep.com/api/v3/profile/${symbol}?apikey=bca8d08386bc8161736dad8bb50b7327`)
    .then((response) => response.json())
    .then((detailsList) => {
      const arrangedList = detailsList.map((company) => {
        const companyItem = company;
        return {
          name: companyItem.companyName,
          price: companyItem.price,
          currency: companyItem.currency,
          website: companyItem.website,
          description: companyItem.description,
          ceo: companyItem.ceo,
          industry: companyItem.industry,
          sector: companyItem.sector,
          country: companyItem.country,
          phone: companyItem.phone,
          address: companyItem.address,
          city: companyItem.city,
          state: companyItem.state,
          fullTimeEmployees: companyItem.fullTimeEmployees,
        };
      });
      dispatch(fetchDetails(arrangedList));
    });
};

// reducer
const detailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DETAILS:
      return action.payload;
    default:
      return state;
  }
};

export default detailsReducer;
