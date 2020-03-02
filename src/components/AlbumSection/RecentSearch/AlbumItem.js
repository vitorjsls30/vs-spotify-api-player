import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

const AlbumItem = (props) => {
    const { name, artist, images, id } = props.album;
    const cover = images.length ? images[1].url : '';
    let { url} = useRouteMatch();
    return(
        <Link to={`${url}/${id}`} >
            <div>
                <img className="album-cover" src={ cover } />
                <p className="album-name">{ name }</p>
                <p className="artist-name">{ artist }</p>
            </div>
        </Link>
    );
}

export default AlbumItem;