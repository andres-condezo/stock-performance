import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Home from '../components/Home';

describe('Testing Home', () => {
  it('Render the Home page, should match to the snapshot', () => {
    const list = renderer
      .create(
        <Provider store={store}>
          <Home />
        </Provider>,
      )
      .toJSON();
    expect(list).toMatchSnapshot();
  });
});
