import React from 'react';
import SearchItem from './SearchItem';

const SearchResult = () => {
  return (
    <div className="items-block">
        <p className="section-title">Resultados para "Busca"</p>
        <div className="search-result">
          <SearchItem />
        </div>
      </div>
  );
};

export default SearchResult;