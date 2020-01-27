import React, { Component} from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    // this.onSearchTermChange = props.onSearchTermChange;
  }

  filterSearch(e) {
    const term = e.target.value;
    console.log('searching term: ', term);
    console.log('calling onSearchTermChange...');
    this.props.onSearchTermChange(term);
  }

  render() {
    return(
      <section className="search-bar">
        <div className="search-holder">
          <div id="root"></div>
          <p className="secondary-text">Busque por artistas, &aacute;lbuns ou m&uacute;sicas</p>
          <input className="main-text" type="text" placeholder="Comece a escrever..." onChange={ this.filterSearch.bind(this) }/>
        </div>
      </section>
    );
  }
}

export default SearchBar;