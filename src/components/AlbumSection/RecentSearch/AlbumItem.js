import React from 'react';

const AlbumItem = (album) => {
    return(
        <div>
            <img className="album-cover" />
            <p className="album-name">{album.name}</p>
            <p className="artist-name">{album.artist}</p>
          </div>
    );
}

export default AlbumItem;