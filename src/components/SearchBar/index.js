import React from 'react';

const SearchBar = () => {
  return(
    <section className="search-bar">
      <div className="search-holder">
        <div id="root"></div>
        <p className="secondary-text">Busque por artistas, &aacute;lbuns ou m&uacute;sicas</p>
        <input className="main-text" type="text" placeholder="Comece a escrever..." />
      </div>
    </section>
  );
}

export default SearchBar;