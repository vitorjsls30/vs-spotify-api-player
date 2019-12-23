import React from 'react';
import AlbumItem from './AlbumItem';

const RecentSearch = () => {
  return(
    <div className="items-block">
        <p className="section-title">&Aacute;lbuns buscados recentemente</p>
        <div className="album-container">
          <AlbumItem />  
        </div>
      </div>
  );
};

export default RecentSearch;