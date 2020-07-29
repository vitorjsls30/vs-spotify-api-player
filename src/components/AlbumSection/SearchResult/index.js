import React from 'react';
import { connect } from 'react-redux';

import SearchItem from './SearchItem';

class SearchResult extends React.Component {
  constructor(props) {
    super(props);
  }

  renderAlbums(albums) {
    if (albums.length) {
      return albums.map((album, index) => {
        if (index <= 5) {
          return (
            <SearchItem key={album.id} album={album} />
          )
        }
      });
    } else {
      return (<div><p className="artist-name">Nenhum resultado de busca...</p></div>)
    }
  }
  render() {
    const visible = this.props.albums.length ? 'visible' : 'hidden';
    const { term } = this.props;
    const termLabel = 'Resultados' + (term ? ` para "${term}"` : '');
    return (
      <div className="items-block" style={{ visibility: visible }}>
        <p className="section-title">{ termLabel }</p>
        <div className="search-result">
          {this.renderAlbums(this.props.albums)}
        </div>
      </div>
    );
  }
};

const mapStateToProps = state => ({
  albums: state.albums.searchResult
});

export default connect(mapStateToProps, null)(SearchResult) ;