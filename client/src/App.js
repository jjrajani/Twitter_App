import React, { Component } from 'react';
import { AuthButton, SearchBar, TwitterFeed } from './components';
import { fetchCurrentUser, searchTwitter } from './utils/serverCalls';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { auth: false, searchTerm: '', tweets: [] };
  }
  componentDidMount() {
    fetchCurrentUser().then(user => {
      this.setState({ auth: user });
    });
  }
  searchTwitter = term => {
    this.setCurrentSearch(term);
    searchTwitter(term).then(tweets => {
      this.setState({ tweets });
    });
  };
  setCurrentSearch = term => {
    this.setState({ searchTerm: term });
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <AuthButton auth={this.state.auth} />
          <SearchBar onSubmit={this.searchTwitter} />
        </header>
        <TwitterFeed
          searchTerm={this.state.searchTerm}
          tweets={this.state.tweets}
        />
      </div>
    );
  }
}

export default App;
