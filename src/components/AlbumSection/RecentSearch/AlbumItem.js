import React from 'react';

const AlbumItem = (props) => {
    const { name, artist, images } = props.album;
    const cover = images.length ? images[1].url : '';
    return(
        <div>
            <img className="album-cover" src={ cover } />
            <p className="album-name">{ name }</p>
            <p className="artist-name">{ artist }</p>
          </div>
    );
}

export default AlbumItem;