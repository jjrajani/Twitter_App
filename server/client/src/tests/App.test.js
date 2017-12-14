import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

describe('App Component', () => {
  let mock;
  beforeEach(() => {
    mock = new MockAdapter(axios);
  });
  it('renders without crashing', () => {
    const data = { response: true };
    mock.onGet('/api/current_user').reply(200, data);
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });
  it('submits twitter searches and receives tweet results', () => {});
});
