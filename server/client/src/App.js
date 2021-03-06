import React, { Component } from 'react';
import { AuthButton, SearchBar, TwitterFeed } from './components';
import { fetchCurrentUser, searchTwitter } from './utils/serverCalls';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { auth: false, tweets: [] };
  }
  componentDidMount() {
    fetchCurrentUser().then(user => {
      this.setState({ auth: user });
    });
  }
  searchTwitter = term => {
    searchTwitter(term).then(tweets => {
      this.setState({ tweets });
    });
  };
  render() {
    return (
      <div>
        <header>
          <h1>
            <a href="/">Twitter Search</a>
          </h1>
          <SearchBar onSubmit={this.searchTwitter} />
          <AuthButton auth={this.state.auth} />
        </header>
        <TwitterFeed tweets={this.state.tweets} />
      </div>
    );
  }
}

export default App;
