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
      wrapper: services.wrapper,
    };
  }

  componentDidMount() {
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