import React from 'react';
import RecentSearch from './RecentSearch';
import SearchResult from './SearchResult';

const AlbumSection = () => {
  return(
    <section className="section-album">
      <RecentSearch />
      <SearchResult />
    </section>
  );
}

export default AlbumSection;