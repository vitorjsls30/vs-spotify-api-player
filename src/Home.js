import React, { Component } from 'react';

import { Provider } from 'react-redux';
import store from './store';

import SideBar from "./components/SideBar";
import SearchBar from "./components/SearchBar";
import AlbumSection from "./components/AlbumSection";
import spotifyWrapper from "./services";
import { debounce } from "lodash";

import * as AlbumsActions from './store/actions/albums';

import "./style.css";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: {
        term: '',
        searchResult: [],
        recentSearch: []
      },
      spotifyWrapper: spotifyWrapper()
    };
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
      wrapper.session.authorize();
    } else {
      this.getSearchHistory();
    }
  }

  onSearchTermChange(term) {
    if (term != "") {
      this.state.spotifyWrapper.search
        .query(term, "album")
        .then(data => {
          if (data.albums.items) {
            const searchResult = data.albums.items;
            store.dispatch(AlbumsActions.loadSearchResult(searchResult));
            this.state.spotifyWrapper.cache.storeItem({
              search: this.state.search.term,
              type: 'album',
              response: data
            });
          }
        })
        .catch(err => console.log(`Err: ${err}`));
    }
  }

  getSearchHistory() {
    const history = this.state.spotifyWrapper.cache.getHistory() || [];
    if(history.length) {
      const lastSearch = history[0].response.albums.items;
      store.dispatch(AlbumsActions.loadRecentSearch(lastSearch));
    }
  }

  render() {
    const searchTerm = debounce(term => {
      this.onSearchTermChange(term);
    }, 500);

    return (
      <div>
        <Provider store={ store }>
          <SideBar />
          <SearchBar onSearchTermChange={ searchTerm } />
          <AlbumSection searchResult={ this.state.search.searchResult } recentSearch={ this.state.search.recentSearch } term={ this.state.search.term } />
        </Provider>
      </div>
    );
  }
}

export default Home;