import React from 'react';

const AlbumItem = (props) => {
    const { name, artist } = props.album;
    return(
        <div>
            <img className="album-cover" />
            <p className="album-name">{ name }</p>
            <p className="artist-name">{ artist }</p>
          </div>
    );
}

export default AlbumItem;