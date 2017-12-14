import React from 'react';
import ReactDOM from 'react-dom';
import TwitterFeed from '../components/TwitterFeed';
import tweets from './tweetsListTestData';

import './testSetup';
import { mount } from 'enzyme';

describe('SearchBar Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TwitterFeed tweets={[]} />, div);
  });
  it('renders one list item for each tweet', () => {
    let component = mount(<TwitterFeed tweets={tweets} />);
    let tweetCount = component.instance().props.tweets.length;
    let tweetItemCount = component.find('li');
    expect(tweetCount).toEqual(tweetItemCount.length);
  });
});
