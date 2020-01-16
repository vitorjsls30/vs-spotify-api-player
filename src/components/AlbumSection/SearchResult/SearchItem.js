import React from 'react';

const SearchItem = (props) => {
    const { name, artist} = props.album;
    return(
        <div className="search-item">
            <img className="album-cover" />
            <div className="album-detail">
              <p className="album-name">{ name }</p>
              <p className="artist-name">{ artist }</p>
            </div>
          </div>
    );
};

export default SearchItem;