import React from 'react';
import AlbumItem from './AlbumItem';

class RecentSearch extends React.Component {
  renderAlbums(albums) {
    if (albums.length) {
      return albums.map(album => {
        return (
          <AlbumItem key={album.id} album={album} />
        );
      });
    } else {
      return (<p className="artist-name">No recent searched items...</p>);
    }
  }

  render() {
    return (
      <div className="items-block">
        <p className="section-title">&Aacute;lbuns buscados recentemente</p>
        <div className="album-container">
          {this.renderAlbums(this.props.albums)}
        </div>
      </div>
    );
  }

};

export default RecentSearch;