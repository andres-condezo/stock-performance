import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Details from '../components/Details';

describe('Testing Details', () => {
  it('Render the Details page, should match to the snapshot', () => {
    const list = renderer
      .create(
        <Provider store={store}>
          <Details />
        </Provider>,
      )
      .toJSON();
    expect(list).toMatchSnapshot();
  });
});
