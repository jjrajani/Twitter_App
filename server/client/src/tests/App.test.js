import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import './testSetup';
import { mount } from 'enzyme';

describe('App Component', () => {
  let mock;
  beforeEach(() => {
    mock = new MockAdapter(axios);
    // current user mock
    const data = { response: true };
    mock.onGet('/api/current_user').reply(200, data);
  });
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });
  it('submits twitter searches and receives tweet results', () => {
    mock
      .onPost('/api/twitter-search')
      .reply(200, { tweets: { statuses: ['tweet'] } });
    let component = mount(<App />);
    component.find('#twitterSearchTerm').simulate('change', 'purple');
    component.find('#submitTwitterSearch').simulate('click');
    setTimeout(() => {
      expect(component.state().tweets).toEqual(['purple']);
    }, 1000);
  });
});
