import React from 'react';
import Player from '../Player';

function AlbumInfo(props) {
  if (!props.info) {
    return (
      <div className="album-info">
        <div className="album-name">Ops! No Album was found. Did you forget something? ;)</div>
      </div>
    );
  }
  let { cover, name, artist } = props.info;
  let currentTrack = props.currentTrack;
  return (
    <div className="album-info">
      <div className="detail-cover">
        <img src={cover} width="200" height="200"/>
      </div>
      <div className="album-name">{ name }</div>
      <div className="artist-name">{ artist }</div>
      <Player src={currentTrack} />
    </div>
  );
}

export default AlbumInfo;