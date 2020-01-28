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
    // for now, we're just mocking the behavior for our list
    if (term != '') {
      mockResult = [
        {
          id: 1,
          name: 'mocked-album',
          artist: 'mocked-artist',
        },
        {
          id: 2,
          name: 'mocked-album-2',
          artist: 'mocked-artist-2',
        },
        {
          id: 3,
          name: 'mocked-album-3',
          artist: 'mocked-artist-3',
        },
      ];
    }
    // We then set the returned search results into the App state
    // Then, AlbumSection renders any given changes in the search result
    this.setState({
      search: { term, searchResult: mockResult }
    });
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