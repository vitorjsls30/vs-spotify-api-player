import React from 'react';

const SearchItem = () => {
    return(
        <div className="search-item">
            <img className="album-cover" />
            <div className="album-detail">
              <p className="album-name">Nome do &aacute;lbum</p>
              <p className="artist-name">Nome do artista</p>
            </div>
          </div>
    );
};

export default SearchItem;