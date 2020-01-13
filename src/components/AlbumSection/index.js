import React from 'react';

import RecentSearch from './RecentSearch';
import SearchResult from './SearchResult';
import services from '../../services';

class AlbumSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recentSearch: [],
      searchResult: [],
      wrapper: services.wrapper
    };
  }

  validateWrapper() {
    const wrapper = this.state.wrapper;
    wrapper.session.getUriParams();

    if(wrapper.session.checkTokenExpiration() || !wrapper.session.getoAuthState('access_token')) {
        console.log('Authorizing....');
        wrapper.session.authorize();
      } else {
        console.log('Authorized!');
        // query a album example...
        wrapper.album.getAlbum('04vtwsK3nygEjtLOecakQX').
          then(data => console.log('Album Data', data));
      }
  }

  componentDidMount() {
    this.validateWrapper();

    const recentSearch = services.recentSearch;
    const searchResult = services.searchResult;
    this.setState({ recentSearch,searchResult });
  }

  render() {
    return(
      <section className="section-album">
        <RecentSearch albums={ this.state.recentSearch }/>
        <SearchResult albums={ this.state.searchResult } />
      </section>
    );
  }
}

export default AlbumSection;