import React from 'react';

const SearchItem = (props) => {
    const { name, artist, images} = props.album;
    const cover = images.length ? images[1].url : '';
    return(
        <div className="search-item">
            <img className="album-cover" src={ cover }/>
            <div className="album-detail">
              <p className="album-name">{ name }</p>
              <p className="artist-name">{ artist }</p>
            </div>
          </div>
    );
};

export default SearchItem;