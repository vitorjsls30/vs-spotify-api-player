import React from 'react';

import RecentSearch from './RecentSearch';
import SearchResult from './SearchResult';
import services from '../../services';

class AlbumSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recentSearch: []
    };
  }

  componentDidMount() {
    this.setState({
      recentSearch: services.recentSearch
    });
  }

  render() {
    const recentSearch = this.state.recentSearch;
    return(
      <section className="section-album">
        <RecentSearch albums={ recentSearch }/>
        <SearchResult />
      </section>
    );
  }
}

export default AlbumSection;