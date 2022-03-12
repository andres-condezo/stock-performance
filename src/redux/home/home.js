const FETCH_COMPANIES = 'stock-performance/home/FETCH_COMPANIES';
const baseURL = 'https://financialmodelingprep.com/api/v3/stock_market/gainers?apikey=bca8d08386bc8161736dad8bb50b7327';

// initial state
const initialState = [];

// action creators
export const fetchCompanies = (payload) => ({
  type: FETCH_COMPANIES,
  payload,
});

// thunk action functions
export const fetchCompaniesFromAPI = () => async (dispatch) => {
  await fetch(`${baseURL}`)
    .then((response) => response.json())
    .then((companiesList) => {
      const arrangedList = companiesList.map((company) => ({
        symbol: company.symbol,
        name: company.name,
        change: company.change,
        price: company.price,
        changesPercentage: company.changesPercentage,
      }));
      if (arrangedList) {
        dispatch(fetchCompanies(arrangedList));
      }
    });
};

// reducer
const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COMPANIES:
      return [...action.payload];
    default:
      return state;
  }
};

export default homeReducer;
