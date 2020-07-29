import React from "react";

import RecentSearch from "./RecentSearch";
import SearchResult from "./SearchResult";

const AlbumSection = ({ recentSearch=[], searchResult=[], term= ''}) => {
  return (
    <section className="section-album">
      <RecentSearch albums={ recentSearch } />
      <SearchResult albums={ searchResult } term={ term }/>
    </section>
  );
}

export default AlbumSection;
