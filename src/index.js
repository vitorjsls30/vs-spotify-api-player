import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SideBar from './components/SideBar';
import SearchBar from './components/SearchBar';
import AlbumSection from './components/AlbumSection';
import spotifyWrapper from './services';

import './style.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: {
        term: '',
        searchResult: [],
      },
      spotifyWrapper: spotifyWrapper
    }
  }

  componentDidMount() {
    this.validateWrapper();
  }

  validateWrapper() {
    const wrapper = this.state.spotifyWrapper;
    wrapper.session.getUriParams();
    if (
      wrapper.session.checkTokenExpiration() ||
      !wrapper.session.getoAuthState("access_token")
    ) {
      console.log("Authorizing....");
      wrapper.session.authorize();
    } else {
      console.log("Authorized!");
    }
  }


  onSearchTermChange(term) {
    let mockResult = []
    // We'll use the spotify-wrapper to search for the given term
    if (term != '') {
      this.state.spotifyWrapper.search.query(term, 'album')
        .then(data => {
          if (data.albums.items) {
            this.setState({
              search: { term, searchResult: data.albums.items }
            });
          }
        })
        .catch(err => console.log(`Err: ${err}`));
    }
    // Then, AlbumSection renders any given changes in the search result
  }

  render() {
    return (<div>
      <SideBar />
      <SearchBar onSearchTermChange={this.onSearchTermChange.bind(this)} />
      <AlbumSection searchResult={this.state.search.searchResult} />
    </div>);
  }
}

const root = document.getElementById('root');
root ? ReactDOM.render(<App />, root) : false;