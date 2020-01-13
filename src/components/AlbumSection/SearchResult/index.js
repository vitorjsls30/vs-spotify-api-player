import React from 'react';
import SearchItem from './SearchItem';

class SearchResult extends React.Component {
  renderAlbums(albums) {
    if(albums.length) {
      return albums.map(album => {
        return(
          <SearchItem key={album.id} album={ album }/>
        )
      });
    } else {
      return(<div><p className="artist-name">No items searched...</p></div>)
    }
  }
  render() {
    return (
      <div className="items-block">
          <p className="section-title">Resultados para "Busca"</p>
          <div className="search-result">
            { this.renderAlbums(this.props.albums) }
          </div>
        </div>
    );
  }
};

export default SearchResult;