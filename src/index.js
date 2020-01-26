import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SideBar from './components/SideBar';
import SearchBar from './components/SearchBar';
import AlbumSection from './components/AlbumSection';

import './style.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: {
        term: ''
      }
    }
  }

  onSearchTermChange(term) {
    // We use the spotify-wrapper to search for the given term
    // We then set the returned search results into the App state
    this.setState({ search: { term } }, () => {
        console.log('State setted...', this.state);
      });
    // Album section renders any given changes in the search result
  }

  render() {
    return (<div>
      <SideBar />
      <SearchBar onSearchTermChange={this.onSearchTermChange.bind(this)} />
      <AlbumSection />
    </div>);
  }
}

const root = document.getElementById('root');
root ? ReactDOM.render(<App />, root) : false;