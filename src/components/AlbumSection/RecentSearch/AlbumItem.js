import React from 'react';

const AlbumItem = () => {
    return(
        <div>
            <img className="album-cover" />
            <p className="album-name">Nome do &aacute;lbum</p>
            <p className="artist-name">Nome do artista</p>
          </div>
    );
}

export default AlbumItem;