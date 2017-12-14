import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from '../components/SearchBar';

import './testSetup';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';

describe('SearchBar Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SearchBar onSubmit={() => {}} />, div);
  });
  it('has a text input with id twitterSearchTerm', () => {
    let component = mount(<SearchBar onSubmit={() => {}} />);
    expect(component.find('#twitterSearchTerm')).not.toBe(undefined);
  });
  it('has a submit input with id submitTwitterSearch', () => {
    let component = mount(<SearchBar onSubmit={() => {}} />);
    expect(component.find('#twitterSearchTerm')).not.toBe(undefined);
  });
  it('allows user to enter a search term', () => {
    const component = shallow(<SearchBar onSubmit={() => {}} />);
    component
      .find('#twitterSearchTerm')
      .simulate('change', { target: { name: 'term', value: 'purple' } });
    expect(component.instance().state.term).toEqual('purple');
  });
  it('submits twitter searches', () => {
    let onSubmitClick = sinon.spy();
    let component = mount(<SearchBar onSubmit={onSubmitClick} />);
    component
      .find('#twitterSearchTerm')
      .simulate('change', { target: { name: 'term', value: 'purple' } });
    component.find('#submitTwitterSearch').simulate('submit');
    expect(onSubmitClick.calledOnce).toEqual(true);
  });
});
