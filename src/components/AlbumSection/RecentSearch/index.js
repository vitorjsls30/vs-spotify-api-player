import React from 'react';
import { connect } from 'react-redux';

import AlbumItem from './AlbumItem';

const renderAlbums = (albums) => {
  if (albums.length) {
    return albums.map((album, index) => {
      if (index <= 5) {
        return (
          <AlbumItem key={album.id} album={album} />
        );
      }
    });
  } else {
    return (<p className="artist-name">Nenhum item buscado recentemente...</p>);
  }
}

const RecentSearch =  ({albums}) => {
  return (
    <div className="items-block">
      <p className="section-title">&Aacute;lbuns buscados recentemente</p>
      <div className="album-container">
        {renderAlbums(albums)}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  albums: state.albums.recentSearch
});

export default connect(mapStateToProps, null)(RecentSearch);