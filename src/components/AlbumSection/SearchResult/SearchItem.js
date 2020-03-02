import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

const SearchItem = (props) => {
  const { name, artist, images, id } = props.album;
  const cover = images.length ? images[1].url : '';
  let { path } = useRouteMatch();
  return (
    <div className="search-item">
      <Link to={`${path}/${id}`} style={{textDecoration: 'none'}}>
        <img className="album-cover" src={cover} />
        <div className="album-detail">
          <p className="album-name">{name}</p>
          <p className="artist-name">{artist}</p>
        </div>
      </Link>
    </div>
  );
};

export default SearchItem;