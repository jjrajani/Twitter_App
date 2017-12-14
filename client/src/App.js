import React, { Component } from 'react';
import './App.scss';
import { SearchBar, TwitterFeed } from './components';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { searchTerm: '' };
  }
  searchTwitter = term => {
    this.setState({ searchTerm: term });
    console.log('searching twitter', term);
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <SearchBar onSubmit={this.searchTwitter} />
        </header>
        <TwitterFeed searchTerm={this.state.searchTerm} />
      </div>
    );
  }
}

export default App;
