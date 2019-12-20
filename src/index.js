import React from 'react';
import ReactDOM from 'react-dom';
import SideBar from './components/SideBar';
import SearchBar from './components/SearchBar';
import AlbumSection from './components/AlbumSection';

import './style.css';

const wrapper = document.getElementById('root');
wrapper ? ReactDOM.render(<div>
  <SideBar />
  <SearchBar />
  <AlbumSection />
</div>, wrapper) : false;