import React, { Component } from 'react';
import './App.scss';
import { AuthButton, SearchBar, TwitterFeed } from './components';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { searchTerm: '' };
  }
  searchTwitter = term => {
    this.setState({ searchTerm: term });
    console.log('searching twitter', term);
    axios.get('/api/twitter-search', { term }).then(res => {
      console.log('got tweets', res);
    });
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <AuthButton auth={null} />
          <SearchBar onSubmit={this.searchTwitter} />
        </header>
        <TwitterFeed searchTerm={this.state.searchTerm} />
      </div>
    );
  }
}

export default App;
