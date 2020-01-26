import React from 'react';
import SearchItem from './SearchItem';

class SearchResult extends React.Component {
  constructor(props) {
    super(props);
  }

  renderAlbums(albums) {
    if (albums.length) {
      return albums.map(album => {
        return (
          <SearchItem key={album.id} album={album} />
        )
      });
    } else {
      return (<div><p className="artist-name">Nenhum resultado de busca...</p></div>)
    }
  }
  render() {
    const visible = this.props.albums.length ? 'visible' : 'hidden';
    return (
      <div className="items-block" style={{ visibility: visible }}>
        <p className="section-title">Resultados para "Busca"</p>
        <div className="search-result">
          {this.renderAlbums(this.props.albums || [])}
        </div>
      </div>
    );
  }
};

export default SearchResult;