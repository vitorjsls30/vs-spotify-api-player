import React from "react";

import RecentSearch from "./RecentSearch";
import SearchResult from "./SearchResult";

class AlbumSection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="section-album">
        <RecentSearch albums={this.props.recentSearch} />
        <SearchResult albums={this.props.searchResult} />
      </section>
    );
  }
}

export default AlbumSection;
